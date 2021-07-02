import React from 'react'
import { useGLTFLoader,  } from 'drei';

function Model({ url,activeService }) {
  

  const gltf = useGLTFLoader(url, true);
  return <primitive alt={activeService}  object={gltf.scene} dispose={null} />;
}

export default Model
