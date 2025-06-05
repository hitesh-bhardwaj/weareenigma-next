"use client";

import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  // Load the GLTF (no texture applied in the file)
  const { scene } = useGLTF('/assets/models/idCard-without-texture.glb');

  // Load the texture you want to apply
  const texture = useTexture('/assets/images/solutions/cardTexture/new-texture.png');

  useEffect(() => {
    // Ensure the texture repeats or wraps if needed:
    // texture.encoding = THREE.sRGBEncoding;
    texture.flipY = false; // GLTF standard UVs
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    // Traverse every mesh in the scene and set its material.map
    scene.traverse((child) => {
      if (child.isMesh) {
        // If the mesh has multiple materials, handle them all
        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => {
            mat.map = texture;
            mat.needsUpdate = true;
          });
        } else {
          child.material.map = texture;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene, texture]);
  console.log(scene)

  return <primitive object={scene} />;
}

const CardModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ width: '100%', height: '100vh' }}
    >
      <ambientLight intensity={2.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Model />
      <OrbitControls/>
    </Canvas>
  );
};

export default CardModel;
