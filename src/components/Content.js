import { Html } from 'drei';
import React, { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import Model from './Model';
import { Section } from './section';
const Content = ({
  domContent,
  children,
  bgColor,
  modelPath,
  groupPositionY,
  meshPosition,
  description,
  activeService,
  rotate
}) => {
  useEffect(() => {
    document.body.style.background = bgColor;
  }, [bgColor, description]);

  const ref = useRef();
 useFrame(() => ( rotate ? ref.current.rotation.y += 0.01: ''));

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, groupPositionY, 0]}>
        <mesh
          ref={ref}
          position={[meshPosition[0], meshPosition[1], meshPosition[2]]}
        >
          <Model url={modelPath} />
        </mesh>

        <Html fullscreen portal={domContent}>
          <div className="container">
            <div id="services" className="title">
              <div className="services-list">{children}</div>
              <div className="description-div">
                <blockquote
                  id="summary"
                  className={`description-text ${activeService}`}
                >
                  {description}
                </blockquote>
              </div>
            </div>
          </div>
        </Html>
      </group>
    </Section>
  );
};
export default Content;
