import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import dat from 'dat.gui';
import './style.css'

const Second = () => {
  const mountRef = useRef(null);  
  const guiRef = useRef(null);


  useEffect(() => {
    const textureloader = new THREE.TextureLoader();

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(new THREE.Color(0xEDEDFF));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

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
    controls.rotateSpeed = 2;

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20, 1, 1),
      new THREE.MeshPhongMaterial({ color: 0xC9F6FE })
    );
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    const prism = new THREE.Mesh(
      new THREE.CylinderGeometry(5, 5, 10, 6),
      new THREE.MeshPhongMaterial({
        color: 0xBAF8E5,
        transparent: true,
        flatShading: true,
        opacity: 1.0,
      })
    );
    prism.position.set(0, 7, 0);
    prism.rotation.z = Math.PI / 2;
    scene.add(prism);

    const light = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(light);
    const dirlight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirlight.position.set(10, 12, 2);
    scene.add(dirlight);

    const prism_materials = {
      Basic: new THREE.MeshBasicMaterial({
        color: 0xBAF8E5,
      }),
      Normal: new THREE.MeshNormalMaterial({ flatShading: true }),
      Standard: new THREE.MeshStandardMaterial({
        color: 0xBAF8E5,
        flatShading: true,
      }),
      Phong: prism.material,
      'One texture': new THREE.MeshPhongMaterial({
        map: textureloader.load('../img/texture3.png'),
      }),
      'Many textures': [
        new THREE.MeshPhongMaterial({
          map: textureloader.load('../img/texture3.png'),
        }),
        new THREE.MeshPhongMaterial({
          map: textureloader.load('../img/texture1.png'),
        }),
        new THREE.MeshPhongMaterial({
          map: textureloader.load('../img/texture2.png'),
        }),
      ],
      'With alpha map': [
        new THREE.MeshPhongMaterial({
          transparent: true,
          color: 0xE456FF,
          alphaMap: textureloader.load('../img/texture2.png'),
          side: THREE.DoubleSide,
        }),
        new THREE.MeshPhongMaterial({
          transparent: true,
          color: 0xBAF8E5,
          alphaMap: textureloader.load('../img/texture2.png'),
          side: THREE.DoubleSide,
        }),
        new THREE.MeshPhongMaterial({
          transparent: true,
          color: 0xFF4400,
          alphaMap: textureloader.load('../img/texture2.png'),
          side: THREE.DoubleSide,
        }),
      ],
    };

    const parameters = {
      'Ambient light intensity': 0.4,
      'Dir. light intensity': 0.7,
      'Prism color': '#BAF8E5',
      'Prism opacity': prism.material.opacity,
      'Prism material': 'Phong',
    };

    const gui = new dat.GUI({ autoPlace: false }); // Создание панели dat.gui с параметром autoPlace: false
    guiRef.current = gui; // сохраняем ссылку на интерфейс
    const guiContainer = document.querySelector('.gui-container');
    guiContainer.appendChild(gui.domElement);

    gui.add(parameters, 'Ambient light intensity', 0.0, 1.0, 0.1).onChange(
      (value) => {
        light.intensity = value;
      }
    );

    gui.add(parameters, 'Dir. light intensity', 0.0, 1.0, 0.1).onChange(
      (value) => {
        dirlight.intensity = value;
      }
    );

    gui.addColor(parameters, 'Prism color').onChange((value) => {
      prism.material.color = new THREE.Color(value);
    });

    gui.add(parameters, 'Prism opacity', 0.05, 1.0, 0.05).onChange((value) => {
      prism.material.opacity = value;
    });

    gui.add(parameters, 'Prism material', Object.keys(prism_materials)).onChange(
      (value) => {
        prism.material = prism_materials[value];
      }
    );

    const renderScene = () => {
      prism.rotation.y += 0.01;

      requestAnimationFrame(renderScene);
      controls.update();
      renderer.render(scene, camera);
    };

    renderScene();

    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      guiRef.current.destroy(); // удаляем интерфейс

    };
  }, []);

  return (
    <>
  <div style={{width: '80vw', overflow: 'hidden'}} ref={mountRef} />
  <div className={'gui-container'}></div> {/* Контейнер для размещения панели dat.gui */}
  </>
  )
};

export default Second;
