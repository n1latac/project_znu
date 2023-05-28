import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import dat from 'dat.gui';

const MyComponent = () => {
    const containerRef = useRef(null);
    const guiRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const compoundObjectRef = useRef(null);
  const objectParams = {
    h1: 1.5,
    h2: 2.0,
    h3: 1.5,
    r1: 1.2,
    r2: 2.2,
    r3: 1.5,
  };

  useEffect(() => {

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(new THREE.Color(0xBABFCE));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(14, 10, 14);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controlsRef.current = controls;

    const light = new THREE.AmbientLight(0xF7F8FF, 0.4);
    scene.add(light);

    const dirlight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirlight.position.set(-20, 29, 20);
    scene.add(dirlight);

    const gridHelper = new THREE.GridHelper(10);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(20);
    scene.add(axesHelper);

    const compoundObject = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshNormalMaterial()
    );
    compoundObjectRef.current = compoundObject;
    buildObject();

    const gui = new dat.GUI();
    guiRef.current = gui; 
      const guiContainer = document.querySelector('.gui-container');
      guiContainer.appendChild(gui.domElement);
    Object.keys(objectParams).forEach((key) => {
      gui
        .add(objectParams, key, 0.1, 5, 0.1)
        .onChange(buildObject);
    });
    gui
      .add({ x: 0 }, 'x', -10, 10, 0.1)
      .onChange((value) => (compoundObject.position.x = value));
    gui
      .add({ z: 0 }, 'z', -10, 10, 0.1)
      .onChange((value) => (compoundObject.position.z = value));

    const renderScene = () => {
      requestAnimationFrame(renderScene);
      controlsRef.current.update();
      rendererRef.current.render(scene, camera);
    };
    renderScene();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const buildObject = () => {
    const { h1, h2, h3, r1, r2, r3 } = objectParams;
    const { current: compoundObject } = compoundObjectRef;
    const x0 = compoundObject ? compoundObject.position.x : 0;
    const z0 = compoundObject ? compoundObject.position.z : 0;

    const cylinder1Material = new THREE.MeshNormalMaterial();
    const cone1Material = new THREE.MeshNormalMaterial();
    const cone2Material = new THREE.MeshNormalMaterial();

    const cylinder1 = new THREE.Mesh(
      new THREE.CylinderGeometry(r1, r1, h1, 36),
      cylinder1Material
    );
    cylinder1.position.set(x0, h1 / 2, z0);

    const cone1 = new THREE.Mesh(
      new THREE.ConeGeometry(r2, h2, 36),
      cone1Material
    );
    cone1.position.set(x0, h1 + h2 / 2, z0);

    const cone2 = new THREE.Mesh(
      new THREE.CylinderGeometry(r3, r2 / 2, h3, 36),
      cone2Material
    );
    cone2.position.set(x0, h1 + h2 / 2 + h3 / 2, z0);

    sceneRef.current.remove(compoundObject);
    const newCompoundObject = new THREE.Group();
    newCompoundObject.add(cylinder1);
    newCompoundObject.add(cone1);
    newCompoundObject.add(cone2);
    compoundObjectRef.current = newCompoundObject;
    sceneRef.current.add(newCompoundObject);
  };

  return (
    <>
  <div style={{width: '80vw', overflow: 'hidden'}} ref={containerRef} />
  <div className={'gui-container'}></div> 
  </>
  )
};

export default MyComponent;
