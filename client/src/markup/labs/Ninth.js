import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import TWEEN from '@tweenjs/tween.js';
import dat from 'dat.gui';

const Ninth = () => {
  const containerRef = useRef(null);
  const guiRef = useRef(null);

  useEffect(() => {
    let video, videoTexture;
    const textureLoader = new THREE.TextureLoader();
    const fontLoader = new THREE.FontLoader();
    let text3d;

    // Create video element
    video = document.createElement('video');
    video.src = '/video/FractalZoom.mp4';
    video.loop = true;
    video.muted = true;
    video.play();

    // Create video texture
    videoTexture = new THREE.Texture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;
    videoTexture.generateMipmaps = false;

    // Renderer, scene, camera, controls
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(new THREE.Color(0xBABFCE));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 30, 50);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;

    // Light
    const light = new THREE.AmbientLight(0xF7F8FF, 0.4);
    scene.add(light);

    const dirlight = new THREE.DirectionalLight(0xffffff, 0.6);
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
    dirlight.position.set(-20, 29, 20);
    scene.add(dirlight);

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 60, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0xD2D6DF, side: THREE.DoubleSide })
    );
    plane.rotation.x = Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    // Logo
    const logo = new THREE.Mesh(
      new THREE.PlaneGeometry(7, 7, 1, 1),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load('/img/logoK.jpg'),
        side: THREE.DoubleSide,
      })
    );
    logo.position.set(-8, 12, -3);
    logo.castShadow = true;
    scene.add(logo);
    const logoPositionTarget = { y: -3.2 };
    new TWEEN.Tween(logo.position).to(logoPositionTarget, 2000)
      .repeat(Infinity).yoyo(true).easing(TWEEN.Easing.Cubic.InOut).start();

    // Назва кафедри
    fontLoader.load('/fonts/ProstoOne_Regular.json', (font) => {
      text3d = new THREE.Mesh(
        new THREE.TextGeometry('Кафедра програмної інженерії', {
          size: 1.6,
          height: 0.5,
          curveSegments: 4,
          font: font,
          material: 0,
          extrudeMaterial: 0,
        }),
        new THREE.MeshPhongMaterial({
          color: 0xFEFE12,
          transparent: true,
          opacity: 0.1,
        })
      );
      text3d.geometry.center();
      text3d.castShadow = true;
      text3d.position.set(0, 4, -30);
      scene.add(text3d);
      new TWEEN.Tween(text3d.material).to({ opacity: 1 }, 6000)
        .easing(TWEEN.Easing.Cubic.In).delay(500).start();
      new TWEEN.Tween(text3d.position).to({ z: 15 }, 5000)
        .easing(TWEEN.Easing.Cubic.InOut).start();
      new TWEEN.Tween(text3d.rotation).to({ x: -0.25 * Math.PI }, 500)
        .easing(TWEEN.Easing.Quadratic.InOut).delay(6400).start();
    });

    // Відеотекстура що обертається
    const prism1 = new THREE.Mesh(
      new THREE.CylinderGeometry(6, 6, 6, 6),
      [
        new THREE.MeshPhongMaterial({ color: 0x404040, flatShading: true }),
        new THREE.MeshBasicMaterial({ map: videoTexture }),
        new THREE.MeshPhongMaterial({ color: 0x404040, flatShading: true }),
      ]
    );
    prism1.position.set(7, 4, -5);
    prism1.castShadow = prism1.receiveShadow = true;
    scene.add(prism1);
    const prismTarget = { y: 2 * Math.PI };
    new TWEEN.Tween(prism1.rotation).to(prismTarget, 5000)
      .repeat(Infinity).start();

    // GUI controls
    const gui = new dat.GUI({ autoPlace: false }); // Создание панели dat.gui с параметром autoPlace: false
      guiRef.current = gui; // сохраняем ссылку на интерфейс
      const guiContainer = document.querySelector('.gui-container');
      guiContainer.appendChild(gui.domElement);
    const playVideoControl = { 'play video': true };
    gui.add(playVideoControl, 'play video').onChange((play) => {
      if (play) video.play();
      else video.pause();
    });

    // Render scene
    const renderScene = () => {
      videoTexture.needsUpdate = true;
      requestAnimationFrame(renderScene);
      controls.update();
      TWEEN.update();
      renderer.render(scene, camera);
    };

    renderScene();

    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    containerRef.current.appendChild(renderer.domElement);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      //containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      video.pause();
      videoTexture.dispose();
    };
  }, []);

  return (
  <>
  <div style={{width: '80vw', overflow: 'hidden'}} ref={containerRef} />
  <div className={'gui-container'}></div> {/* Контейнер для размещения панели dat.gui */}
  </>
  )
};

export default Ninth;
