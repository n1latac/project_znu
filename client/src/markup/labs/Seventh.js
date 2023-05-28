import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import dat from 'dat.gui';

const MyThreeJSComponent = () => {
  const containerRef = useRef(null);
  const guiRef = useRef(null);

  useEffect(() => {
    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(new THREE.Color(0x343538));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    window.renderer = renderer;

    containerRef.current.appendChild(renderer.domElement);

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-30, 28, 60);
    camera.lookAt(0, 5, 0);

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.7;

    let plane = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0xDFE2EA, side: THREE.DoubleSide })
    );
    plane.rotation.x = Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    let light = new THREE.AmbientLight(0xF7F8FF, 0.45);
    scene.add(light);

    let dirlight = new THREE.DirectionalLight(0xffffff, 0.55);
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

    let textureLoader = new THREE.TextureLoader();

    let texture1 = textureLoader.load("/img/texture1.png");
    texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;

    let texture2 = textureLoader.load("/img/texture2.png");
    texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;

    let materials = {
      "Initial": [
        new THREE.MeshPhongMaterial({ color: 0x79FED4 }),
        new THREE.MeshPhongMaterial({ color: 0x107870 })
      ],
      "1 texture": [
        new THREE.MeshPhongMaterial({ map: texture2 }),
        new THREE.MeshPhongMaterial({ map: texture2 })
      ],
      "2 textures": [
        new THREE.MeshPhongMaterial({ map: texture2 }),
        new THREE.MeshPhongMaterial({ map: texture1 })
      ]
    };

    let gui = new dat.GUI();
    guiRef.current = gui; 
      const guiContainer = document.querySelector('.gui-container');
      guiContainer.appendChild(gui.domElement);

    let fontLoader = new THREE.FontLoader();

    let text = "Програмна\n інженерія";
    let textParams = {
      size: 4,
      height: 1.5,
      curveSegments: 4,
      material: 0,
      extrudeMaterial: 1
    };

    let text3d = undefined;

    fontLoader.load("/fonts/ProstoOne_Regular.json", function (font) {
      textParams.font = font;

      text3d = new THREE.Mesh(
        new THREE.TextGeometry(text, textParams),
        materials["Initial"]
      );
      text3d.castShadow = text3d.receiveShadow = true;
      text3d.geometry.center();
      text3d.position.set(0, 8, 3);
      scene.add(text3d);

      gui.add({ material: "Initial" }, "material", Object.keys(materials))
        .name("Material")
        .onChange(key => { text3d.material = materials[key] });

      gui.add(textParams, "size", 1, 20, 0.5)
        .name("Font size")
        .onChange(size => {
          textParams.height = size * 0.3;
          text3d.geometry = new THREE.TextGeometry(text, textParams);
          text3d.geometry.center();
          text3d.position.set(0, size * 2, 3);
        });
    });

    function renderScene() {
      requestAnimationFrame(renderScene);
      controls.update();
      renderer.render(scene, camera);
    }

    renderScene();

    window.onresize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    containerRef.current.appendChild(renderer.domElement);

    
  }, []);

  return (
    <>
  <div style={{width: '80vw', overflow: 'hidden'}} ref={containerRef} />
  <div className={'gui-container'}></div> 
  </>
  )
};

export default MyThreeJSComponent;
