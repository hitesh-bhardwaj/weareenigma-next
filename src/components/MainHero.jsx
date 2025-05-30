"use client"
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { MeshTransmissionMaterial, OrbitControls, useGLTF, useTexture, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useControls } from 'leva'
import gsap from 'gsap'

// const WaveShaderMaterial = shaderMaterial(
//     {
//       u_time: 0,
//       u_resolution: new THREE.Vector2(),
//       u_amplitude: 0.1,
//       u_frequency: 10.0,
//       u_speed: 1.5,
//       u_colorTop: new THREE.Color(0xffffff),
//       u_colorMiddle: new THREE.Color(0xffa500),
//       u_colorBottom: new THREE.Color(0x000000),
//     },
//     // Vertex Shader
//     `
//       varying vec2 v_uv;
//       void main() {
//         v_uv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `,
//     // Fragment Shader
//     `
//       precision mediump float;
  
//       varying vec2 v_uv;
//       uniform float u_time;
//       uniform vec2 u_resolution;
//       uniform float u_amplitude;
//       uniform float u_frequency;
//       uniform float u_speed;
//       uniform vec3 u_colorTop;
//       uniform vec3 u_colorMiddle;
//       uniform vec3 u_colorBottom;
  
//       float wave(vec2 uv, float frequency, float amplitude, float speed) {
//         return sin(uv.x * frequency + u_time * speed) * amplitude;
//       }
//  void main() {
//   vec2 uv = v_uv;
//   float waveOffset = wave(uv, u_frequency, u_amplitude, u_speed);
//   float y = clamp(uv.y + waveOffset, 0.0, 1.0);
//   vec3 bottomColor = mix(u_colorBottom, vec3(1.0), 0.15);
//   vec3 middleColor = mix(u_colorMiddle, vec3(1.0), 0.1);
//   vec3 topColor = mix(u_colorTop, vec3(1.0), 0.05);

//   vec3 color;

//   if (y < 0.5) {
//     float t = smoothstep(0.0, 0.5, y);
//     color = mix(bottomColor, middleColor, t);
//   } else {
//     float t = smoothstep(0.5, 1.0, y);
//     color = mix(middleColor, topColor, t);
//   }
//   gl_FragColor = vec4(color, 1.0);
// }
//     `
//   )
//   extend({ WaveShaderMaterial });
  
// function WaveBackground() {
//     const meshRef = useRef()
//     useFrame(({ clock, size }) => {
//         if (meshRef.current) {
//             meshRef.current.material.u_time = clock.getElapsedTime()
//             meshRef.current.material.u_resolution.set(size.width, size.height)
//         }
//     })
//     return (
//         <mesh scale={1} ref={meshRef} position={[0, 0, -20]} >
//             <planeGeometry args={[16, 9]} />
//             <waveShaderMaterial
//     u_time={0.3}
//     u_amplitude={0.1}
//     u_frequency={8.0}
//     u_speed={2.0}
//     u_colorTop={new THREE.Color('#ffffff')}
//     u_colorMiddle={new THREE.Color('#FE9D50')}
//     u_colorBottom={new THREE.Color('#FF5600')}
//   />
//         </mesh>
//     )
// }
export function Model() {
    const bgmodel = useGLTF('/assets/models/fractalGlassModel.glb')
    const normalMap = useTexture('/assets/models/Material_normal.png')
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
    normalMap.anisotropy = 16

    useEffect(() => {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color(0xffffff),
                    roughness: 0,
                    metalness: 0,
                    transmission: 1,
                    thickness: 0.5,
                    transparent: true,
                    opacity: 1,
                    // normalMap: normalMap,
                    side: THREE.DoubleSide
                })
            }
        })
    }, [gltf, normalMap])

    return (
        <>
         <group
        ref={bgref}
        scale={0.8}
        position={[0, 3, -15]}
        rotation={[0, 0, 0]}
      >
        <mesh geometry={bgmodel.nodes.Plane002.geometry}>
          <meshStandardMaterial side={THREE.DoubleSide} map={texture} />
        </mesh>
      </group>
        </>
    )
}
function Bgmodel() {
    const normalMap = useTexture("/assets/models/Material_normal.png");
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
    normalMap.anisotropy = 16;

    const backgroundModel = useGLTF("/assets/models/fractalGlassModel.glb");

    return (
        <group scale={0.5} position={[0, 0, -15]}>
            <mesh geometry={backgroundModel.nodes.Plane002.geometry}>
                <meshPhysicalMaterial
                    transmission={1}
                    ior={1}        
                    thickness={1}    
                    roughness={0}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    reflectivity={1}
                    opacity={0.5}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}


export default function MainHero() {
    const [lightPosition, setLightPosition] = useState({
        x: 10,
        y: 10,
    });

    const mouseMove = (e) => {
        const targetX = (e.clientX / window.innerWidth) * 20 - 10;
        setLightPosition((prevPos) => ({
            x: prevPos.x + (targetX - prevPos.x) * 0.1, 
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
        <div className="relative w-screen h-screen overflow-hidden">
            <Canvas
              
              camera={{ fov: 10, position: [0, 0, 40] }}
                className="w-full h-full"
                gl={{
                    antialias: true,
                    // outputEncoding: THREE.sRGBEncoding,
                    // toneMapping: THREE.ACESFilmicToneMapping,
                }}
                linear={true} 
                flat={true}
            >
                {/* <pointLight position={[10, 10, 10]} /> */}
                <ambientLight intensity={0.5} />
                {/* <directionalLight position={[2, 2, 5]} /> */}
                <directionalLight
                            position={[lightPosition.x, lightPosition.y, 10]}
                            intensity={2}
                        />

                {/* <WaveBackground /> */}
                <Bgmodel />
                <OrbitControls />
            </Canvas>
        </div>
    )
}