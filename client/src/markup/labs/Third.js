import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import dat from 'dat.gui';
import './style.css'


const Third = () => {
  const canvasRef = useRef(null);
  const controlsRef = useRef(null);
  const guiRef = useRef(null);


  useEffect(() => {
    let renderer, scene, camera, controls;

    const init = () => {
      renderer = window.WebGLRenderingContext
        ? new THREE.WebGLRenderer({ antialias: true })
        : new THREE.CanvasRenderer();
      renderer.setClearColor(new THREE.Color(0xC9CAD2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      canvasRef.current.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(50, 40, 50);
      camera.lookAt(0, 5, 0);

      controls = new TrackballControls(camera, renderer.domElement);
      controls.rotateSpeed = 2;

      const box = new THREE.Mesh(
        new THREE.BoxGeometry(40, 40, 40, 1),
        new THREE.MeshPhongMaterial({ color: 0xD2D6DF, side: THREE.BackSide })
      );
      box.position.set(0, 20, 0);
      box.receiveShadow = true;
      scene.add(box);

      const prism1 = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 5, 10, 6),
        new THREE.MeshPhongMaterial({ color: 0xBAF8E5, flatShading: true })
      );
      prism1.position.set(4, 6, -5);
      prism1.rotation.z = Math.PI / 2;
      prism1.castShadow = prism1.receiveShadow = true;

      const prism2 = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 5, 10, 6),
        new THREE.MeshPhongMaterial({ color: 0xD066FE, flatShading: true })
      );
      prism2.position.set(-8, 7, 5);
      prism2.castShadow = prism2.receiveShadow = true;

      const group = new THREE.Object3D();
      group.add(prism1);
      group.add(prism2);
      scene.add(group);

      const light = new THREE.AmbientLight(0xF7F8FF, 0.4);
      scene.add(light);

      controlsRef.current = controls;

      // dat.gui
      const gui = new dat.GUI({ autoPlace: false }); // Создание панели dat.gui с параметром autoPlace: false
      guiRef.current = gui; // сохраняем ссылку на интерфейс
      const guiContainer = document.querySelector('.gui-container');
      guiContainer.appendChild(gui.domElement);

      const AllHelpers = {
        ArrowHelper: new THREE.ArrowHelper(
          new THREE.Vector3(0, 1, 0),
          new THREE.Vector3(-8, 11, 5),
          8,
          undefined,
          1.5,
          0.8
        ),
        GridHelper: new THREE.GridHelper(100, 20),
        AxesHelper: new THREE.AxesHelper(100),
        BoxHelper: new THREE.BoxHelper(group),
        CameraHelper: new THREE.Group(),
        DirectionalHelper: new THREE.Group(),
        HemisphereHelper: new THREE.Group(),
        SpotlightHelper: new THREE.Group(),
        PointlightHelper: new THREE.Group()
      };

      const HelpersEnabled = {
        ArrowHelper: false,
        GridHelper: false,
        AxesHelper: false,
        BoxHelper: false,
        CameraHelper: false,
        DirectionalHelper: false,
        HemisphereHelper: false,
        SpotlightHelper: false,
        PointlightHelper: false
      };

      const addHelperToScene = (key) => {
        if (scene.getObjectById(AllHelpers[key].id) === undefined) {
          scene.add(AllHelpers[key]);
        }
      };

      const removeHelperFromScene = (key) => {
        if (scene.getObjectById(AllHelpers[key].id)) {
          scene.remove(AllHelpers[key]);
        }
      };

      for (let key in AllHelpers) {
        const folder = gui.addFolder(key);
        folder.add(HelpersEnabled, key).onChange((enabled) => {
          if (enabled) {
            addHelperToScene(key);
          } else {
            removeHelperFromScene(key);
          }
        });
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controlsRef.current.update();
      renderer.render(scene, camera);
    };

    init();
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      guiRef.current.destroy(); // удаляем интерфейс
    };
  }, []);

  return ( 
    <>
  <div style={{width: '80vw', overflow: 'hidden'}} ref={canvasRef} />
  <div className={'gui-container'}></div> {/* Контейнер для размещения панели dat.gui */}
  </>
  )
};

export default Third;