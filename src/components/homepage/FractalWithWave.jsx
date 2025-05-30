"use client";
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
import { degToRad} from "three/src/math/MathUtils";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";

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

 function EnigmaModelWeb({}) {
  const bgref = useRef(null);
  const backgroundModel = useGLTF("/assets/models/EnigmaBG.glb");
  const texture = useTexture("/assets/models/bg.png")
  const materialsProps = useControls({
    // Core transmission properties
    transmission: { value: 1, min: 0, max: 1 },
    thickness: { value: 0.02, min: 0, max: 2, step: 0.01 },
    roughness: { value: 0.05, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.05, min: 1, max: 2.5, step: 0.01 },
    
    // Color and brightness controls
    chromaticAberration: { value: 0.1, min: 0, max: 1, step: 0.01 },
    anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.1, min: 0, max: 1, step: 0.01 },
    
    // Attenuation (color preservation)
    attenuationDistance: { value: 0.1, min: 0.01, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    
    // Surface properties
    clearcoat: { value: 0.05, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.01, min: 0, max: 1, step: 0.01 },
    reflectivity: { value: 0.05, min: 0, max: 1, step: 0.01 },
    
    // Color tinting
    color: "#ffffff",
    
    // Advanced properties for vibrant colors
    iridescence: { value: 0.2, min: 0, max: 1, step: 0.01 },
    iridescenceIOR: { value: 1.3, min: 1, max: 2.333, step: 0.01 },
    iridescenceThicknessRange: { value: [100, 400], min: 0, max: 1000, step: 1 },
    
    // Transparency and opacity
    opacity: { value: 1, min: 0, max: 1, step: 0.01 },
    transparent: true,
    
    // Backside properties
    backside: true,
    backsideThickness: { value: 0.1, min: 0, max: 2, step: 0.01 },
    
    // Sampling for quality
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 64, max: 2048, step: 64 },
  });
  console.log(backgroundModel)
  return (
    <group position={[0, 0, 0]}>
      <group
        ref={bgref}
        scale={1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <mesh geometry={backgroundModel.nodes.Cube.geometry}>
          <MeshTransmissionMaterial {...materialsProps}/>
          {/* <meshStandardMaterial map={texture} side={THREE.DoubleSide}/> */}
        </mesh>
      </group>
    </group>
  );
}

const FractalWithWave = () => {
    const [lightPosition, setLightPosition] = useState({
        x: 10,
        y: 10,
      });
    
      const mouseMove = (e) => {
        const targetX = (e.clientX / window.innerWidth) * 20 - 10;
        setLightPosition((prevPos) => ({
          x: prevPos.x + (targetX - prevPos.x) * 0.5, 
          y: 0,
          z: 5,
          duration: 1, 
          ease: "power2.out",
        }));
      };
      useEffect(() => {
        window.addEventListener("mousemove", mouseMove);
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        };
      }, []);
  return (
   <>
   <div className="h-screen w-screen">
    <Canvas
    className="h-full w-full"
        // camera={{ fov: 20, position: [0, 0, 40] }}
        gl={{
          antialias: true,
          // toneMapping: THREE.ACESFilmicToneMapping,
          // outputEncoding: THREE.sRGBEncoding,
        }}
        style={{
          background: "#000000",
        }}
      >
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[lightPosition.x, lightPosition.y, 10]}
          intensity={3}
        />
        <OrbitControls/>
        <Suspense>
          <EnigmaModelWeb />
          <WaveBackground/>
        </Suspense>
      </Canvas>
      </div>
   </>
  )
}

export default FractalWithWave
