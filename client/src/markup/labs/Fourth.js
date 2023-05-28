import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import dat from 'dat.gui';
import "./style.css"

const MyThreeComponent = () => {
  const containerRef = useRef(null);
  const guiRef = useRef(null);

  useEffect(() => {
    const initThree = () => {
      const renderer = window.WebGLRenderingContext
        ? new THREE.WebGLRenderer({ antialias: true })
        : new THREE.CanvasRenderer();
      renderer.setClearColor(new THREE.Color(0xC9CAD2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(50, 40, 50);
      camera.lookAt(0, 5, 0);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.rotateSpeed = 0.7;

      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(40, 40, 1, 1),
        new THREE.MeshPhongMaterial({ color: 0xD2D6DF, side: THREE.DoubleSide })
      );
      plane.rotation.x = Math.PI / 2;
      plane.receiveShadow = true;
      scene.add(plane);

      const prism1 = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 5, 10, 6),
        new THREE.MeshPhongMaterial({ color: 0xBAF8E5, flatShading: true })
      );
      prism1.position.set(4, 6, -5);
      prism1.rotation.z = Math.PI / 2;
      prism1.castShadow = prism1.receiveShadow = true;

      const prism2 = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 5, 10, 6),
        new THREE.MeshPhongMaterial({ color: 0xD166FE, flatShading: true })
      );
      prism2.position.set(-8, 7, 5);
      prism2.castShadow = prism2.receiveShadow = true;

      scene.add(prism1);
      scene.add(prism2);

      const light = new THREE.AmbientLight(0xF7F8FF, 0.4);
      scene.add(light);

      const dirlight = new THREE.DirectionalLight(0xffffff, 0.75);
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
      dirlight.position.set(-10, 29, 10);
      scene.add(dirlight);

      const gui = new dat.GUI();
      guiRef.current = gui; 
      const guiContainer = document.querySelector('.gui-container');
      guiContainer.appendChild(gui.domElement);
      gui.add(dirlight.position, 'x', -20, 20, 1).name('Dir.Light position X');
      gui.add(dirlight.position, 'y', 10, 30, 1).name('Dir.Light position Y');
      gui.add(dirlight.position, 'z', -20, 20, 1).name('Dir.Light position Z');

      gui
        .add({ 'Shadow map size': 512 }, 'Shadow map size', [128, 256, 512, 1024])
        .onChange(function (size) {
          dirlight.shadow.mapSize.width = dirlight.shadow.mapSize.height = size;
          dirlight.shadow.map.dispose();
          dirlight.shadow.map = null;
        });

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      animate();

      window.onresize = function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      containerRef.current.appendChild(renderer.domElement);
    };

    initThree();
  }, []);

  return (
    <>
  <div style={{width: '80vw', overflow: 'hidden'}} ref={containerRef} />
  <div className={'gui-container'}></div> 
  </>
  )
};

export default MyThreeComponent;
