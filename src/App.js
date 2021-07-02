// React Spring
import React, { Suspense, useRef, useState,useEffect } from 'react';
// Page State
// R3F
import 'bootstrap/dist/css/bootstrap.css';

import { Canvas, useThree } from 'react-three-fiber';
import './App.scss';
import Content from './components/Content';
import Header from './components/header';
import Lights from './components/Lights';
import Loader from './components/Loader';

import { initialQuote, servicesAvailable } from './data/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const removeSpaces = (string) => {
  let returnString = '';
  returnString = string.split(' ').join('');
  return returnString.replace(/\//g, '');
};



export default function App() {
  const domContent = useRef();
let windowWidth = window.innerWidth;
  const [activeService, setActiveService] = useState('web-applications');
  const [activeServiceDescription, setActiveServiceDescription] =
    useState(initialQuote);
  const getFirstWord = (string) => {
    let returnString = '';
    returnString = string.replace(/ .*/, '');
    console.log(returnString);
    return returnString.toLowerCase();
  };
  const { size, viewport } = useThree();

  useEffect(() => {}, [windowWidth]);

  return (
    <>
      <Header toast={toast} ToastContainer={ToastContainer} />

      {/* R3F Canvas */}
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
        description={activeServiceDescription}
      >
        {/* Lights Component */}
        <Lights />
        <Suspense fallback={null}>
          {/* WebApplication */}
          {activeService === 'web-applications' && (
            <Content
              domContent={domContent}
              bgColor="#dee9be"
              modelPath="/tree.gltf"
              meshPosition={
                windowWidth >= 1000 ? [500, -300, -550] : [0, -300, -300]
              }
              groupPositionY={250}
              description={activeServiceDescription}
              activeService={activeService}
              status={0}
            >
              {servicesAvailable.map((service, id) => (
                <div
                  key={id}
                  className="services-catalog"
                  style={{ display: 'inline-block' }}
                >
                  <li
                    onClick={() => {
                      setActiveService(getFirstWord(service.title));
                      setActiveServiceDescription(service.description);
                    }}
                    key={id}
                    className={`services ${removeSpaces(service.title)}`}
                  >
                    {service.title}
                  </li>
                </div>
              ))}
              {}
            </Content>
          )}
          {/* SEO */}
          {activeService === 'search' && (
            <Content
              domContent={domContent}
              bgColor="#0b5190"
              modelPath="/littlePlanet.gltf"
              groupPositionY={250}
              meshPosition={[1000, -35, -1000]}
              description={activeServiceDescription}
              activeService={activeService}
              status={1}
            >
              {servicesAvailable.map((service, id) => (
                <div
                  key={id}
                  className="services-catalog"
                  style={{ display: 'inline-block' }}
                >
                  <li
                    onClick={() => {
                      setActiveService(getFirstWord(service.title));
                      setActiveServiceDescription(service.description);
                    }}
                    key={id}
                    className={`services ${removeSpaces(service.title)}`}
                  >
                    {service.title}
                  </li>
                </div>
              ))}
            </Content>
          )}
          {/* Automation */}
          {activeService === 'automation' && (
            <Content
              domContent={domContent}
              bgColor="#e96bec"
              modelPath="/robot.gltf"
              groupPositionY={250}
              meshPosition={windowWidth >= 1000 ? [45, -15, 50]: [0,-10,50]}
              description={activeServiceDescription}
              activeService={activeService}
              status={0}
            >
              {servicesAvailable.map((service, id) => (
                <div
                  key={id}
                  className="services-catalog"
                  style={{ display: 'inline-block' }}
                >
                  <li
                    onClick={() => {
                      setActiveService(getFirstWord(service.title));
                      setActiveServiceDescription(service.description);
                    }}
                    key={id}
                    className={`services ${removeSpaces(service.title)}`}
                  >
                    {service.title}
                  </li>
                </div>
              ))}
            </Content>
          )}
        </Suspense>
      </Canvas>

      <Loader />
    </>
  );
}
