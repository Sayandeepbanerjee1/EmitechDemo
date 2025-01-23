import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { throttle } from 'lodash';

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const mesh = useRef();

  const rotateMesh = throttle(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.010;
    }
  }, 50);

  useFrame(() => rotateMesh());

  return <primitive ref={mesh} object={scene} scale={3} />;
};

export default Model;