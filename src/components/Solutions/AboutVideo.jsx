"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform float uScrollProgress;
  uniform vec2 uResolution;
  
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Create wave phases for each corner
    float phase1 = uScrollProgress * 4.0; // Top right
    float phase2 = uScrollProgress * 4.0 - 1.0; // Bottom right
    float phase3 = uScrollProgress * 4.0 - 2.0; // Top left
    float phase4 = uScrollProgress * 4.0 - 3.0; // Bottom left
    
    // Calculate distance from each corner
    float distTopRight = distance(uv, vec2(1.0, 1.0));
    float distBottomRight = distance(uv, vec2(1.0, 0.0));
    float distTopLeft = distance(uv, vec2(0.0, 1.0));
    float distBottomLeft = distance(uv, vec2(0.0, 0.0));
    
    // Create wave effects for each corner
    float wave1 = sin(phase1 - distTopRight * 3.0) * 0.3 * smoothstep(0.0, 1.0, phase1) * smoothstep(1.0, 0.0, distTopRight);
    float wave2 = sin(phase2 - distBottomRight * 3.0) * 0.3 * smoothstep(0.0, 1.0, phase2) * smoothstep(1.0, 0.0, distBottomRight);
    float wave3 = sin(phase3 - distTopLeft * 3.0) * 0.3 * smoothstep(0.0, 1.0, phase3) * smoothstep(1.0, 0.0, distTopLeft);
    float wave4 = sin(phase4 - distBottomLeft * 3.0) * 0.3 * smoothstep(0.0, 1.0, phase4) * smoothstep(1.0, 0.0, distBottomLeft);
    
    // Combine all waves
    float totalWave = wave1 + wave2 + wave3 + wave4;
    
    // Apply the wave displacement
    pos.z += totalWave;
    
    // Add some horizontal stretching effect
    float stretchX = sin(uTime * 0.5 + uv.y * 6.28) * 0.1 * uScrollProgress;
    float stretchY = sin(uTime * 0.3 + uv.x * 6.28) * 0.1 * uScrollProgress;
    
    pos.x += stretchX;
    pos.y += stretchY;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uScrollProgress;
  uniform float uTime;
  
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Add some subtle UV distortion for cloth-like effect
    float distortion = sin(uTime * 2.0 + uv.x * 10.0) * 0.01 * uScrollProgress;
    uv.y += distortion;
    
    vec4 textureColor = texture2D(uTexture, uv);
    
    // Add some brightness variation to enhance the wave effect
    float brightness = 1.0 + sin(uTime * 3.0 + vUv.x * 6.28 + vUv.y * 6.28) * 0.1 * uScrollProgress;
    
    gl_FragColor = vec4(textureColor.rgb * brightness, textureColor.a);
  }
`;

function VideoPlane({ position = [0, 0, 0] }) {
  const meshRef = useRef();
  const materialRef = useRef();
  const videoTexture = useVideoTexture("/assets/videos/showreel.mp4");
  
  const scrollProgress = useRef(0);
  const currentWidth = useRef(2);
  const currentHeight = useRef(1);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScrollProgress: { value: 0 },
    uTexture: { value: videoTexture },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  }), [videoTexture]);

  const shaderMaterial = useMemo(() => 
    new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      toneMapped: false,
    }), [uniforms]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / Math.max(maxScroll, 1), 1);
      
      scrollProgress.current = progress;
      
      // Interpolate dimensions
      currentWidth.current = 2 + (6 * progress); // 2 to 8
      currentHeight.current = 1 + (3 * progress); // 1 to 4
      
      if (meshRef.current) {
        meshRef.current.scale.set(currentWidth.current / 8, currentHeight.current / 4, 1);
      }
      
      if (uniforms.uScrollProgress) {
        uniforms.uScrollProgress.value = progress;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [uniforms]);

  useFrame((state) => {
    if (uniforms.uTime) {
      uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={position} material={shaderMaterial}>
      <planeGeometry args={[8, 4, 32, 32]} />
    </mesh>
  );
}

export default function AboutVideo() {
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <VideoPlane />
        </Canvas>
      </div>
      
      {/* Demo content to enable scrolling */}
    
    </>
  );
}