import React from "react";
import { useGLTF, MeshTransmissionMaterial, shaderMaterial, } from "@react-three/drei";
import { extend, useFrame } from '@react-three/fiber'
import { useControls } from "leva";
import * as THREE from 'three'

// 1. Extend the shader to include a time uniform
const AnimatedGradientMaterial = shaderMaterial(
  {
    topColor: new THREE.Color('#FFE0CC'),
    midColor: new THREE.Color('#FF6600'),
    bottomColor: new THREE.Color('#000000'),
    uTime: 0,
  },
  // vertex
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  // fragment
  `
    varying vec2 vUv;
    uniform vec3 topColor;
    uniform vec3 midColor;
    uniform vec3 bottomColor;
    uniform float uTime;

    void main() {
      // oscillate the mid–point over time
      float midPoint = 0.5 + 0.25 * sin(uTime);
      
      vec3 color;
      if(vUv.y < midPoint) {
        float t = smoothstep(0.0, midPoint, vUv.y);
        color = mix(bottomColor, midColor, t);
      } else {
        float t = smoothstep(midPoint, 1.0, vUv.y);
        color = mix(midColor,    topColor, t);
      }
      gl_FragColor = vec4(color,1.0);
    }
  `
)

// 2. Make the material available in JSX
extend({ AnimatedGradientMaterial })

export function FlutedGlass({ ...props }) {
    const flutedGlass = useGLTF("/assets/models/fractalGlassModel.glb");

      const materialRef = React.useRef()
    
      useFrame(({ clock }) => {
        // update the time uniform every frame
        materialRef.current.uTime = clock.elapsedTime
      })

    const materialsProps = useControls({
        thickness: { value: 10, min: 0, max: 10, step: 0.1 },
        backsideThickness: { value: 0.0, min: 0, max: 3 },
        roughness: { value: 0.5, min: 0, max: 1, step: 0.1 },
        reflectivity: { value: 0.1, min: 0, max: 1, step: 0.01 },
        anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
        chromaticAberration: { value: 0.0, min: 0, max: 1 },
        distortion: { value: 0.0, min: 0, max: 4, step: 0.01 },
        temporalDistortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
        anisotropicBlur: { value: 5.0, min: 0, max: 5, step: 0.01 },
        color: '#ffffff',
        backside: { value: false }
    })

    return (
        <mesh castShadow {...props} geometry={flutedGlass.nodes.Plane002.geometry}>
            <animatedGradientMaterial
                ref={materialRef}
                topColor="#000000"
                midColor="#FF6000"
                bottomColor="#FFE0CC"
            />
            {/* <MeshTransmissionMaterial {...materialsProps} /> */}
        </mesh>
    );
}