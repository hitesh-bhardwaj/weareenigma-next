"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import WaveShader from '../../WaveShader'
import Image from 'next/image'
import { Environment, MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from "three";


const EnigmaModel = () => {
    const model = useGLTF('/assets/models/enigmaLogo.glb')
    const { nodes } = model
  const groupRef = useRef(null);
    const ModelPart1 = useRef()
    const ModelPart2 = useRef()
    const ModelPart3 = useRef()
    const ModelPart4 = useRef()
    const materialsProps = useControls({
      thickness: { value: 3.51, min: 0, max: 10, step: 0.05 },
      backsideThickness: { value: 0.0, min: 0, max: 3 },
      roughness: { value: 0.2, min: 0, max: 1, step: 0.1 },
      reflectivity: { value: 1.0, min: 0, max: 1, step: 0.01 },
      anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
      chromaticAberration: { value: 1.0, min: 0, max: 1 },
      distortion: { value: 0.0, min: 0, max: 4, step: 0.01 },
      temporalDistortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
      anisotropicBlur: { value: 5.0, min: 0, max: 5, step: 0.01 },
      color: '#000000',
      backside: { value: false }
    })
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
      <group
        position={[-7, 2, 5]}
        scale={1.2}
        rotation={[Math.PI / 15, -Math.PI / 25, 0]}
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