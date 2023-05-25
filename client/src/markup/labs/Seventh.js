import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import dat from 'dat.gui';

const Seventh = () => {
  const sceneRef = useRef(null);
  const guiRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, controls, plane, light, dirlight;
    const textureLoader = new THREE.TextureLoader();
    const fontLoader = new THREE.FontLoader();
    const materials = {
      "Initial": [
        new THREE.MeshPhongMaterial({ color: 0x79FED4 }),
        new THREE.MeshPhongMaterial({ color: 0x107870 })
      ],
      "1 texture": [
        new THREE.MeshPhongMaterial({ map: textureLoader.load("/img/texture2.png") }),
        new THREE.MeshPhongMaterial({ map: textureLoader.load("/img/texture2.png") })
      ],
      "2 textures": [
        new THREE.MeshPhongMaterial({ map: textureLoader.load("/img/texture1.png") }),
        new THREE.MeshPhongMaterial({ map: textureLoader.load("/img/texture1.png") })
      ]
    };
    let text3d;

    // Scene initialization
    const init = () => {
      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(new THREE.Color(0x343538));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      sceneRef.current.appendChild(renderer.domElement);

      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(-30, 28, 60);
      camera.lookAt(0, 5, 0);

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.rotateSpeed = 0.7;

      // Plane
      plane = new THREE.Mesh(
        new THREE.PlaneGeometry(40, 40, 1, 1),
        new THREE.MeshPhongMaterial({ color: 0xDFE2EA, side: THREE.DoubleSide })
      );
      plane.rotation.x = Math.PI / 2;
      plane.receiveShadow = true;
      scene.add(plane);

      // Ambient Light
      light = new THREE.AmbientLight(0xF7F8FF, 0.45);
      scene.add(light);

      // Directional Light
      dirlight = new THREE.DirectionalLight(0xffffff, 0.55);
      dirlight.castShadow = true;
      dirlight.shadow.camera.near = 1;
      dirlight.shadow.camera.far = 500;
      dirlight.shadow.camera.right = 50;
      dirlight.shadow.camera.left = -50;
      dirlight.shadow.camera.top = 50;
      dirlight.shadow.camera.bottom = -50;
      dirlight.shadow.mapSize.width = 512;
      dirlight.shadow.mapSize.height = 512;
      dirlight.shadow.radius = 4;
      dirlight.shadow.bias = -0.0001;
      dirlight.position.set(-8, 20, 19);
      scene.add(dirlight);

      // Load Textures
      const texture1 = textureLoader.load("/img/texture1.png");
      texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;

      const texture2 = textureLoader.load("/img/texture2.png");
      texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;

      materials["1 texture"][0].map = texture2;
      materials["1 texture"][1].map = texture2;

      materials["2 textures"][0].map = texture2;
      materials["2 textures"][1].map = texture1;

      // GUI
      const gui = new dat.GUI({ autoPlace: false }); // Создание панели dat.gui с параметром autoPlace: false
      guiRef.current = gui; // сохраняем ссылку на интерфейс
      const guiContainer = document.querySelector('.gui-container');
      guiContainer.appendChild(gui.domElement);
      gui.add({ material: "Initial" }, "material", Object.keys(materials))
        .name("Material")
        .onChange((key) => {
          text3d.material = materials[key];
        });

      const textParams = {
        size: 4,
        height: 1.5,
        curveSegments: 4,
        material: 0,
        extrudeMaterial: 1
      };

      // Load Font and Make 3D Text
      fontLoader.load("/fonts/ProstoOne_Regular.json", (font) => {
        textParams.font = font;

        // Make 3D Text
        text3d = new THREE.Mesh(
          new THREE.TextGeometry("Програмна\n інженерія", textParams),
          materials["Initial"]
        );
        text3d.castShadow = text3d.receiveShadow = true;
        text3d.geometry.center();
        text3d.position.set(0, 8, 3);
        scene.add(text3d);

        // Select Materials
        gui.add({ material: "Initial" }, "material", Object.keys(materials))
          .name("Material")
          .onChange((key) => {
            text3d.material = materials[key];
          });

        // Change Font Size
        gui.add(textParams, "size", 1, 20, 0.5)
          .name("Font size")
          .onChange((size) => {
            textParams.height = size * 0.3;
            text3d.geometry = new THREE.TextGeometry("Програмна\n інженерія", textParams);
            text3d.geometry.center();
            text3d.position.set(0, size * 2, 3);
          });
      });

      // Render Scene
      const renderScene = () => {
        requestAnimationFrame(renderScene);
        controls.update();
        renderer.render(scene, camera);
      };

      renderScene();
    };

    // Initialize scene
    init();

    // Window resize handler
    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      //sceneRef.current.removeChild(renderer.domElement);
      guiRef.current.destroy(); // удаляем интерфейс
      renderer.dispose();
      scene.dispose();
    };
  }, []);

  return (
    <>
  <div style={{width: '80vw', overflow: 'hidden'}} ref={sceneRef} />
  <div className={'gui-container'}></div> {/* Контейнер для размещения панели dat.gui */}
  </>
  )
};

export default Seventh;
