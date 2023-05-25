import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';

const Sixth = () => {
  const canvasRef = useRef(null);
  const guiRef = useRef(null);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/video/FractalZoom.mp4'; // Adjust the path accordingly
    video.loop = 'loop';
    video.muted = true;
    video.play();
    const videoTexture = new THREE.Texture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;
    videoTexture.generateMipmaps = false;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(new THREE.Color(0x343538));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    canvasRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-30, 60, -30);
    camera.lookAt(5, 5, 5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0xD2D6DF, side: THREE.DoubleSide })
    );
    plane.rotation.x = Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    const prism1 = new THREE.Mesh(
      new THREE.CylinderGeometry(6, 6, 6, 6),
      [
        new THREE.MeshPhongMaterial({ color: 0x404040, flatShading: true }),
        new THREE.MeshBasicMaterial({ map: videoTexture }),
        new THREE.MeshPhongMaterial({ color: 0x404040, flatShading: true }),
      ]
    );
    prism1.position.set(0, 4, -5.2);
    prism1.castShadow = prism1.receiveShadow = true;

    const prism2 = new THREE.Mesh(
      new THREE.CylinderGeometry(6, 6, 10, 6),
      [
        new THREE.MeshPhongMaterial({ color: 0x404040, flatShading: true }),
        new THREE.MeshPhongMaterial({ color: 0x90BB97, flatShading: true }),
        new THREE.MeshPhongMaterial({ color: 0x404040, flatShading: true }),
      ]
    );
    prism2.position.set(6, 6, 5);
    prism2.castShadow = prism2.receiveShadow = true;

    const prism3 = new THREE.Mesh(
      new THREE.CylinderGeometry(6, 6, 8, 6),
      [
        new THREE.MeshPhongMaterial({ color: 0x404040, flatShading: true }),
        new THREE.MeshPhongMaterial({ color: 0x92BB96, flatShading: true }),
        new THREE.MeshPhongMaterial({ color: 0x404040, flatShading: true }),
      ]
    );
    prism3.position.set(-6, 5, 5);
    prism3.castShadow = prism3.receiveShadow = true;

    scene.add(prism1);
    scene.add(prism2);
    scene.add(prism3);

    const light = new THREE.AmbientLight(0xF7F8FF, 0.4);
    scene.add(light);

    const dirlight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirlight.castShadow = true;
    dirlight.shadow.camera.near = 1;
    dirlight.shadow.camera.far = 100;
    dirlight.shadow.camera.right = 50;
    dirlight.shadow.camera.left = -50;
    dirlight.shadow.camera.top = 50;
    dirlight.shadow.camera.bottom = -50;
    dirlight.shadow.mapSize.width = 1024;
    dirlight.shadow.mapSize.height = 1024;
    dirlight.shadow.radius = 3;
    dirlight.shadow.bias = -0.0001;
    dirlight.position.set(-10, 29, 10);
    scene.add(dirlight);

    const gui = new dat.GUI({ autoPlace: false }); // Создание панели dat.gui с параметром autoPlace: false
      guiRef.current = gui; // сохраняем ссылку на интерфейс
      const guiContainer = document.querySelector('.gui-container');
      guiContainer.appendChild(gui.domElement);

    gui.add({ 'play video': true }, 'play video').onChange((play) => {
      if (play) video.play();
      else video.pause();
    });

    const renderScene = () => {
      videoTexture.needsUpdate = true;
      requestAnimationFrame(renderScene);
      controls.update();
      renderer.render(scene, camera);
    };

    renderScene();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up resources on unmount
      guiRef.current.destroy(); // удаляем интерфейс
      //document.body.removeChild(renderer.domElement);
      video.pause();
      video.src = '';
      videoTexture.dispose();
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
  <div style={{width: '80vw', overflow: 'hidden'}} ref={canvasRef}></div>
  <div className={'gui-container'}></div> {/* Контейнер для размещения панели dat.gui */}
  </>
  )
};

export default Sixth;
