import React, { useRef, useEffect, useState, Suspense } from 'react';
import './App.scss';
//Components
import Header from './components/header';
import { Section } from './components/section';

// Page State
import state from './components/state';

// R3F
import { Canvas, useFrame } from 'react-three-fiber';
import { Html, useProgress, useGLTFLoader } from 'drei';

// React Spring
import { a, useTransition } from '@react-spring/web';
//Intersection Observer
import { useInView } from 'react-intersection-observer';

function Model({ url }) {
  const gltf = useGLTFLoader(url, true);
  return <primitive object={gltf.scene} dispose={null} />;
}

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  );
};

const HTMLContent = ({
  domContent,
  children,
  bgColor,
  modelPath,
  position,
}) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));
  const [refItem, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    inView && (document.body.style.background = bgColor);
  }, [inView]);
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]}>
        <mesh ref={ref} position={[50, -35, 0]}>
          <Model url={modelPath} />
        </mesh>
        <Html fullscreen portal={domContent}>
          <div ref={refItem} className="container">
            <div className="title">{children}</div>
          </div>
        </Html>
      </group>
    </Section>
  );
};

function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className="loading" style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}

export default function App() {
  const domContent = useRef();

  return (
    <>
      <Header />
      {/* R3F Canvas */}
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        {/* Lights Component */}
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            bgColor="#f15946"
            modelPath="/armchairYellow.gltf"
            position={250}
          >
            <ul>
              <li>Web-Apps & Applications</li>
              <li>Search Engine Optimization</li>
              <li></li>
              <li></li>
          </ul>
          </HTMLContent>
          {/* <HTMLContent
            domContent={domContent}
            bgColor="#571ec1"
            modelPath="/armchairGreen.gltf"
            position={0}
          >
            <span>Shit... we even</span>
            <span>got different colors</span>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            bgColor="#636567"
            modelPath="/armchairGray.gltf"
            position={-250}
          >
            <span>And yes</span>
            <span>we even got</span>
            <span>monochrome!</span>
          </HTMLContent> */}
        </Suspense>
      </Canvas>
      <Loader />
     
    </>
  );
}
