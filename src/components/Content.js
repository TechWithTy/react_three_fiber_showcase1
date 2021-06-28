import { Html } from 'drei';
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import Model from './Model';
import { Section } from './section';
const Content = ({ domContent, children, bgColor, modelPath, position }) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]}>
        <mesh ref={ref} position={[50, -35, 0]}>
          <Model url={modelPath} />
        </mesh>
        <Html fullscreen portal={domContent}>
          <div className="container">
            <div className="title">{children}</div>
          </div>
        </Html>
      </group>
    </Section>
  );
};
export default Content;
