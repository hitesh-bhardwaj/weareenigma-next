"use client";
import React, { Suspense, useEffect, useRef } from 'react';
import { Environment, MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from "three";
import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig';

const ModelComp = ({ position, rotation, scale, materialsProps}) => {
  const model = useGLTF('/assets/models/enigmaLogo.glb');
  const { nodes } = model;
  const modelRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
    const el2 = useRef()
  

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // useFrame(() => {
  //   if (!modelRef.current) return;

  //   const targetX = mouse.current.x * 0.3;
  //   const targetY = mouse.current.y * 0.3;

  //   modelRef.current.rotation.y = THREE.MathUtils.lerp(
  //     modelRef.current.rotation.y,
  //     targetX,
  //     0.1
  //   );
  //   modelRef.current.rotation.x = THREE.MathUtils.lerp(
  //     modelRef.current.rotation.x,
  //     -targetY,
  //     0.1
  //   );
  // });

  return (
    <>
   
      <group >
        {/* <directionalLight intensity={1.2} position={[10, 10, 10]} castShadow /> */}
        {/* <ambientLight intensity={10} color="#ffffff" />
        <pointLight intensity={10} color="#ffffff" position={[3, 0, 4]} />
        <pointLight intensity={0.7} position={[-10, -10, 10]} /> */}
        <Environment preset="city" />
        <spotLight
          intensity={1}
          position={[5, 15, 5]}
          angle={0.3}
          penumbra={1}
          castShadow
        />
        <group
          position={position}
          scale={scale}
          rotation={rotation}
          ref={modelRef}
        >
          <mesh geometry={nodes.Low_Poly.geometry}>
            <MeshTransmissionMaterial {...materialsProps} />
          </mesh>
          <mesh geometry={nodes.Low_Poly001.geometry}>
            <MeshTransmissionMaterial {...materialsProps} />
          </mesh>
          <mesh geometry={nodes.Low_Poly002.geometry}>
            <MeshTransmissionMaterial {...materialsProps} />
          </mesh>
          <mesh geometry={nodes.Low_Poly003.geometry}>
            <MeshTransmissionMaterial {...materialsProps} />
          </mesh>
        </group>
      </group>
     
</>

  );
};

export default ModelComp;
