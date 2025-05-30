// GradientMaterialAnimated.jsx
import React from 'react'
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

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

// 3. Use it in your mesh and hook into the render loop
export function AnimatedGradientPlane({ width = 16, height = 9 }, ...props) {
  const materialRef = React.useRef()

  useFrame(({ clock }) => {
    // update the time uniform every frame
    materialRef.current.uTime = clock.elapsedTime
  })

  return (
    <mesh {...props}>
      <planeGeometry args={[width, height]} />
      <animatedGradientMaterial
        ref={materialRef}
        topColor="#FFE0CC"
        midColor="#FF6600"
        bottomColor="#000000"
      />
    </mesh>
  )
}