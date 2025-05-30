"use client";
import FooterCTA from './FooterCTA'
import {
    Environment,
    MeshTransmissionMaterial,
    OrbitControls,
    shaderMaterial,
    useGLTF,
    useTexture,
    useVideoTexture,
} from "@react-three/drei";
import { useControls } from "leva";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const WaveShaderMaterial = shaderMaterial(
    {
        u_time: 0,
        u_resolution: new THREE.Vector2(),
        u_amplitude: 0.1,
        u_frequency: 10.0,
        u_speed: 1.5,
        u_colorTop: new THREE.Color(0xffffff),
        u_colorMiddle: new THREE.Color(0xffa500),
        u_colorBottom: new THREE.Color(0x000000),
    },
    // Vertex Shader
    `
          varying vec2 v_uv;
          void main() {
            v_uv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
    // Fragment Shader
    `
          precision mediump float;
      
          varying vec2 v_uv;
          uniform float u_time;
          uniform vec2 u_resolution;
          uniform float u_amplitude;
          uniform float u_frequency;
          uniform float u_speed;
          uniform vec3 u_colorTop;
          uniform vec3 u_colorMiddle;
          uniform vec3 u_colorBottom;
      
          float wave(vec2 uv, float frequency, float amplitude, float speed) {
            return sin(uv.x * frequency + u_time * speed) * amplitude;
          }
     void main() {
      vec2 uv = v_uv;
      float waveOffset = wave(uv, u_frequency, u_amplitude, u_speed);
      float y = clamp(uv.y + waveOffset, 0.0, 1.0);
      vec3 bottomColor = mix(u_colorBottom, vec3(1.0), 0.15);
      vec3 middleColor = mix(u_colorMiddle, vec3(1.0), 0.1);
      vec3 topColor = mix(u_colorTop, vec3(1.0), 0.05);
    
      vec3 color;
    
      if (y < 0.5) {
        float t = smoothstep(0.0, 0.5, y);
        color = mix(bottomColor, middleColor, t);
      } else {
        float t = smoothstep(0.5, 1.0, y);
        color = mix(middleColor, topColor, t);
      }
      gl_FragColor = vec4(color*1.5, 5.0);
    }
        `
)
extend({ WaveShaderMaterial });

function WaveBackground() {
    const meshRef = useRef()
    useFrame(({ clock, size }) => {
        if (meshRef.current) {
            meshRef.current.material.u_time = clock.getElapsedTime()
            meshRef.current.material.u_resolution.set(size.width, size.height)
        }
    })
    return (
        <mesh scale={2} ref={meshRef} position={[0, 0, -5]} >
            <planeGeometry args={[16, 9]} />
            <waveShaderMaterial
                u_time={0.3}
                u_amplitude={0.1}
                u_frequency={8.0}
                u_speed={2.0}
                u_colorTop={new THREE.Color('#FF5600')}
                u_colorMiddle={new THREE.Color('#FE9D50')}
                u_colorBottom={new THREE.Color('#FFFFFF')}
            />
        </mesh>
    )
}

function EnigmaModelWeb({ }) {
    const bgref = useRef(null);
    const backgroundModel = useGLTF("/assets/models/fractalGlassModel.glb");
    const texture = useTexture("/assets/models/bg.png")
    // const materialsProps = useControls({
    //   // Core transmission properties
    //   transmission: { value: 1, min: 0, max: 1 },
    //   thickness: { value: 0.02, min: 0, max: 2, step: 0.01 },
    //   roughness: { value: 0.05, min: 0, max: 1, step: 0.01 },
    //   ior: { value: 1.05, min: 1, max: 2.5, step: 0.01 },

    //   // Color and brightness controls
    //   chromaticAberration: { value: 0.1, min: 0, max: 1, step: 0.01 },
    //   anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
    //   distortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
    //   distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
    //   temporalDistortion: { value: 0.1, min: 0, max: 1, step: 0.01 },

    //   // Attenuation (color preservation)
    //   attenuationDistance: { value: 0.1, min: 0.01, max: 10, step: 0.01 },
    //   attenuationColor: "#ffffff",

    //   // Surface properties
    //   clearcoat: { value: 0.05, min: 0, max: 1, step: 0.01 },
    //   clearcoatRoughness: { value: 0.01, min: 0, max: 1, step: 0.01 },
    //   reflectivity: { value: 0.05, min: 0, max: 1, step: 0.01 },

    //   // Color tinting
    //   color: "#ffffff",

    //   // Advanced properties for vibrant colors
    //   iridescence: { value: 0.2, min: 0, max: 1, step: 0.01 },
    //   iridescenceIOR: { value: 1.3, min: 1, max: 2.333, step: 0.01 },
    //   iridescenceThicknessRange: { value: [100, 400], min: 0, max: 1000, step: 1 },

    //   // Transparency and opacity
    //   opacity: { value: 1, min: 0, max: 1, step: 0.01 },
    //   transparent: true,

    //   // Backside properties
    //   backside: true,
    //   backsideThickness: { value: 0.1, min: 0, max: 2, step: 0.01 },

    //   // Sampling for quality
    //   samples: { value: 16, min: 1, max: 32, step: 1 },
    //   resolution: { value: 1024, min: 64, max: 2048, step: 64 },
    // });
    return (
        <group position={[0, 0, 0]}>
            <group
                ref={bgref}
                scale={1}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
            >
                <mesh geometry={backgroundModel.nodes.Plane002.geometry}>
                    {/* <MeshTransmissionMaterial {...materialsProps}/> */}
                    <meshStandardMaterial map={texture} side={THREE.DoubleSide} />

                </mesh>
            </group>
        </group>
    );
}
const FooterBg = () => {
    const lightTargetRef = useRef(new THREE.Vector3(10, 10, 10));
    const containerRef = useRef(null);
  
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
  
      const bounds = containerRef.current.getBoundingClientRect();
  
      if (
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom
      ) {
        const x = ((e.clientX - bounds.left) / bounds.width) * 20 - 10;
        const y = -((e.clientY - bounds.top) / bounds.height) * 20 + 10;
  
        lightTargetRef.current.set(x, y, 10);
      }
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    const LightFollower = ({ target }) => {
      const lightRef = useRef();
      useFrame(() => {
        if (!lightRef.current || !target.current) return;
        lightRef.current.position.lerp(target.current, 0.1);
      });
  
      return <directionalLight ref={lightRef} intensity={3} />;
    };
  
    return (
      <div
        ref={containerRef}
        className="h-screen w-screen absolute top-0 left-0"
      >
        <Canvas
          className="h-full w-full"
          camera={{ fov: 20, position: [0, 0, 40] }}
          gl={{ antialias: true }}
          style={{ background: "#000000" }}
        >
          <ambientLight intensity={0.8} />
          <LightFollower target={lightTargetRef} />
          <Suspense>
            <EnigmaModelWeb />
            <WaveBackground />
          </Suspense>
        </Canvas>
      </div>
    );
  };
  

const Footer = () => {
    return (
        <>
            <footer className='w-screen h-full relative'>
                <FooterCTA />
                <div className='w-screen h-full'>
                    <div className='w-screen h-screen absolute'>
                        <FooterBg />
                    </div>
                    <div className='z-[10] relative h-full py-[4vw] px-[4vw]'>
                        <div className='flex flex-col items-start justify-bewteen gap-[28vw]'>
                            <div className='flex items-center justify-between w-full h-full text-white'>
                                <Link href={"/"}>
                                    <div>ABOUT</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>WORK</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>EXPERTISE</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>CAREER</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>CONTACT US</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>RESOURCES</div>
                                </Link>
                            </div>
                            <div className='flex items-center justify-between w-full '>
                                <div className='flex flex-col items-start '>
                                    <p className='text-white text-[12vw] font-display font-medium leading-[1.05]'>ENIGMA</p>
                                    <p className='text-white'>© 2025 Enigma Digital Consulting LLP. All rights reserved all wrongs reversed.</p>
                                </div>
                                <div className='flex flex-col gap-[0.5vw] w-[20%] text-white'>
                                    <p>hi@weareenigma.com</p>
                                    <p>+91 8745044555</p>
                                    <p>Grandslam I-Thum, A-40, Sector- 62, Noida, Uttar Pradesh (201309)</p>
                                    <div className='flex items-center gap-[2vw]'>
                                        <div>
                                            <Image src={"/assets/icons/twitter.svg"} height={25} width={25} alt='twitter' />
                                        </div>
                                        <div>
                                            <Image src={"/assets/icons/instagram.svg"} height={25} width={25} alt='instagram' />
                                        </div>
                                        <div>
                                            <Image src={"/assets/icons/linkedin.svg"} height={25} width={25} alt='linkedin' />
                                        </div>
                                        <div>
                                            <Image src={"/assets/icons/facebook.svg"} height={25} width={25} alt='facebook' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='flex items-center justify-between w-full absolute bottom-0 left-0 px-[4vw]'>
                                <div>
                                    <Image src={"/assets/icons/d.svg"} height={25} width={25} alt='d' />
                                </div>
                                <div>
                                    <Image src={"/assets/icons/s.svg"} height={25} width={25} alt='s' />
                                </div>
                                <div>
                                    <Image src={"/assets/icons/m.svg"} height={25} width={25} alt='m' />
                                </div>
                                <div>
                                    <Image src={"/assets/icons/d.svg"} height={25} width={25} alt='d' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer