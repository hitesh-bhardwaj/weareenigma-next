"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import WaveShader from '../../WaveShader'
import Image from 'next/image'
import { Environment, MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from "three";
import { color } from 'framer-motion'
import gsap from 'gsap'


const Model = () => {
  const model = useGLTF('/assets/models/enigmaLogo.glb');
  const { nodes } = model;
  const groupRef = useRef();
    const [toggleBrust, setToggleBrust] = useState(true)
  const mouse = useRef({ x: 0, y: 0 });

  const materialsProps = {
    thickness: 3.51,
    backsideThickness: 1.0,
    roughness: 0.05,
    reflectivity: 1.0,
    anisotropy: 0,
    chromaticAberration: 0.3,
    distortion: 0.0,
    temporalDistortion: 0.0,
    anisotropicBlur: 5.0,
    color: "#ffffff",
    backside: true,
  };
  const ModelPart1 = useRef()
  const ModelPart2 = useRef()
  const ModelPart3 = useRef()
  const ModelPart4 = useRef()
  

  const modelParts = [
    { ref: ModelPart1, x: 0.3, y: -0.3 },
    { ref: ModelPart2, x: 0.3, y: 0.3 },
    { ref: ModelPart3, x: -0.3, y: 0.3 },
    { ref: ModelPart4, x: -0.3, y: -0.3 }
  ]

  // const BurstON = () => {
  //   if (!toggleBrust) return
  //   modelParts.forEach(({ ref, x, y }) => {
  //     gsap.to(ref.current.position, {
  //       x: x,
  //       y: y,
  //       duration: 0.5,
  //       ease: 'power2.out'
  //     })
  //   })
  // }

  // const BurstOFF = () => {
  //   if (!toggleBrust) return
  //   modelParts.forEach(({ ref }) => {
  //     gsap.to(ref.current.position, {
  //       x: 0,
  //       y: 0,
  //       duration: 0.5,
  //       ease: 'power2.out'
  //     })
  //   })
  // }


  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current = { x, y };
      // if (e.clientX > window.innerWidth / 2) {
      //   BurstON()
      // } else {
      //   BurstOFF()
      // }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    const targetX = mouse.current.x * 0.3;
    const targetY = mouse.current.y * 0.3;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX,
      0.1
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -targetY,
      0.1
    );
  });

  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={1.2}
        position={[10, 10, 10]}
        castShadow
      />
      <pointLight intensity={0.7} position={[-10, -10, 10]} />
      <spotLight
        intensity={1}
        position={[5, 15, 5]}
        angle={0.3}
        penumbra={1}
        castShadow
      />

      {/* Model group */}
      <group
        position={[-7, 2, 5]}
        scale={1.2}
        rotation={[Math.PI / 35, Math.PI / 15, 0]}
        ref={groupRef}
      >
        <group ref={ModelPart1}>
               <mesh geometry={nodes.Low_Poly.geometry}>
                 <MeshTransmissionMaterial {...materialsProps} />
               </mesh>
             </group>
             <group ref={ModelPart2}>
               <mesh geometry={nodes.Low_Poly001.geometry}>
                 <MeshTransmissionMaterial {...materialsProps} />
               </mesh>
             </group>
             <group ref={ModelPart3}>
               <mesh geometry={nodes.Low_Poly002.geometry}>
                 <MeshTransmissionMaterial {...materialsProps} />
               </mesh>
             </group>
             <group ref={ModelPart4}>
               <mesh geometry={nodes.Low_Poly003.geometry}>
                 <MeshTransmissionMaterial {...materialsProps} />
               </mesh>
             </group>
      </group>
    </>
  );
};


const EnigmaModel = () => {
   
    // const materialsProps = useControls({
    //   thickness: { value: 3.51, min: 0, max: 10, step: 0.05 },
    //   backsideThickness: { value: 0.0, min: 0, max: 3 },
    //   roughness: { value: 0.0, min: 0, max: 1, step: 0.1 },
    //   reflectivity: { value: 1.0, min: 0, max: 1, step: 0.01 },
    //   anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
    //   chromaticAberration: { value: 1.0, min: 0, max: 1 },
    //   distortion: { value: 0.0, min: 0, max: 4, step: 0.01 },
    //   temporalDistortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    //   anisotropicBlur: { value: 5.0, min: 0, max: 5, step: 0.01 },
    //   color: '#ffffff',
    //   backside: { value: false }
    // })
    return (
        <div className="h-screen w-screen absolute top-0 left-0 z-[10]">
            <Canvas
            className="h-full w-full"
                camera={{ fov: 20, position: [0, 0, 40] }}
                gl={{
                  antialias: true,
                  // toneMapping: THREE.ACESFilmicToneMapping,
                  // outputEncoding: THREE.sRGBEncoding,
                }}
              >
                <ambientLight intensity={10} color={"#ffffff"} />
                <pointLight intensity={10} color={"#ffffff"} position={[3,0,4]}/>
                <Suspense>
                  <Model/>
                </Suspense>
      <Environment preset='city'/>
              </Canvas>
              </div>
    )
  }

const FooterCTA = () => {
  return (
    <>
    <section className='w-screen h-[45vw] bg-black-1'>
        <div className='w-full h-full px-[4vw] py-[4vw] flex items-start justify-between'>
            <div className='w-[60%] text-white flex flex-col items-start gap-[4vw]'>
            <p className='text-[8vw] leading-[1.05] font-display'>Let's bring your
            ideas to life!</p>
             <button className="w-fit flex">
                        <div className="w-fit h-full px-[3.5vw] py-[0.7vw] rounded-full border border-primary font-medium font-display bg-primary">
                            Say Hi
                        </div>
                        <div className="w-[3.5vw] h-[3.5vw] p-[1.1vw] rounded-full border border-primary bg-primary">
                         <Image src={"/assets/icons/arrow-diagonal.svg"} alt="arrow-diagonal" width={50} height={50} className="w-full h-full object-contain"/>
                        </div>
            
                      </button>
            </div>
            <div className='w-[40%] relative'>
<EnigmaModel/>
            </div>


        </div>

    </section>
    </>
  )
}

export default FooterCTA