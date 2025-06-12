"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";

extend({ ShaderMaterial: THREE.ShaderMaterial });

const MovingGradientShader = ({
  scale,
  // Lower wave parameters
  lowerWaveFreq = 2.8,
  lowerWaveAmp = 0.07,
  lowerWaveSpeed = 0.2,
  lowerBoundaryBase = 0.25,
  lowerFadeSoftness = 0.25,

  // Upper wave parameters
  upperWaveFreq = 10.0,
  upperWaveAmp = 0.05,
  upperWaveSpeed = -0.15,
  topBoundaryBase = 0.75,
  topFadeSoftness = 0.3,

  // Color
  color = 0xff6b00,
}) => {
  const meshRef = useRef();
  const materialRef = useRef();
  const startTime = useRef(Date.now());

  // Shader code
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_color;
    uniform vec2 u_resolution;
    
    // Lower wave uniforms
    uniform float u_lowerWaveFreq;
    uniform float u_lowerWaveAmp;
    uniform float u_lowerWaveSpeed;
    uniform float u_lowerBoundaryBase;
    uniform float u_lowerFadeSoftness;
    
    // Upper wave uniforms
    uniform float u_upperWaveFreq;
    uniform float u_upperWaveAmp;
    uniform float u_upperWaveSpeed;
    uniform float u_topBoundaryBase;
    uniform float u_topFadeSoftness;

    // Function to create a smooth transition
    float smoothstep_custom(float edge0, float edge1, float x) {
        float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
        return t * t * (3.0 - 2.0 * t);
    }

    void main() {
        vec2 uv = vUv;

        // --- Lower Wave Calculation ---
        float lowerWave = sin(uv.x * u_lowerWaveFreq - u_time * u_lowerWaveSpeed) * u_lowerWaveAmp;
        float lowerBoundaryWavy = u_lowerBoundaryBase + lowerWave;

        // --- Upper Wave Calculation ---
        float upperWave = sin(uv.x * u_upperWaveFreq + u_time * u_upperWaveSpeed) * u_upperWaveAmp;
        float topBoundaryWavy = u_topBoundaryBase + upperWave;

        // Calculate the center point between the two waves
        float centerY = (lowerBoundaryWavy + topBoundaryWavy) * 0.5;
        float waveHeight = topBoundaryWavy - lowerBoundaryWavy;

        // Extended fade softness that reaches toward the center
        float extendedLowerFade = u_lowerFadeSoftness + (waveHeight * 0.4);
        float extendedTopFade = u_topFadeSoftness + (waveHeight * 0.4);

        // Create intensity based on distance from boundaries with extended fade
        float intensityFromBottom = smoothstep_custom(
            lowerBoundaryWavy - extendedLowerFade * 0.5, 
            lowerBoundaryWavy + extendedLowerFade * 0.5, 
            uv.y
        );

        float visibilityFromTop = 1.0 - smoothstep_custom(
            topBoundaryWavy - extendedTopFade * 0.5, 
            topBoundaryWavy + extendedTopFade * 0.5, 
            uv.y
        );

        // Combine the two fade effects
        float finalAlpha = intensityFromBottom * visibilityFromTop;
        finalAlpha = clamp(finalAlpha, 0.0, 1.0);

        gl_FragColor = vec4(u_color, finalAlpha);
    }
  `;

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_color: { value: new THREE.Color(color) },
      u_resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },

      // Lower wave uniforms
      u_lowerWaveFreq: { value: lowerWaveFreq },
      u_lowerWaveAmp: { value: lowerWaveAmp },
      u_lowerWaveSpeed: { value: lowerWaveSpeed },
      u_lowerBoundaryBase: { value: lowerBoundaryBase },
      u_lowerFadeSoftness: { value: lowerFadeSoftness },

      // Upper wave uniforms
      u_upperWaveFreq: { value: upperWaveFreq },
      u_upperWaveAmp: { value: upperWaveAmp },
      u_upperWaveSpeed: { value: upperWaveSpeed },
      u_topBoundaryBase: { value: topBoundaryBase },
      u_topFadeSoftness: { value: topFadeSoftness },
    }),
    [
      color,
      lowerWaveFreq,
      lowerWaveAmp,
      lowerWaveSpeed,
      lowerBoundaryBase,
      lowerFadeSoftness,
      upperWaveFreq,
      upperWaveAmp,
      upperWaveSpeed,
      topBoundaryBase,
      topFadeSoftness,
    ]
  );

  useFrame(() => {
    if (materialRef.current) {
      const elapsedTime = (Date.now() - startTime.current) / 500.0;
      materialRef.current.uniforms.u_time.value = elapsedTime;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.u_resolution.value.set(
          window.innerWidth,
          window.innerHeight
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_color.value.setHex(color);
      materialRef.current.uniforms.u_lowerWaveFreq.value = lowerWaveFreq;
      materialRef.current.uniforms.u_lowerWaveAmp.value = lowerWaveAmp;
      materialRef.current.uniforms.u_lowerWaveSpeed.value = lowerWaveSpeed;
      materialRef.current.uniforms.u_lowerBoundaryBase.value =
        lowerBoundaryBase;
      materialRef.current.uniforms.u_lowerFadeSoftness.value =
        lowerFadeSoftness;
      materialRef.current.uniforms.u_upperWaveFreq.value = upperWaveFreq;
      materialRef.current.uniforms.u_upperWaveAmp.value = upperWaveAmp;
      materialRef.current.uniforms.u_upperWaveSpeed.value = upperWaveSpeed;
      materialRef.current.uniforms.u_topBoundaryBase.value = topBoundaryBase;
      materialRef.current.uniforms.u_topFadeSoftness.value = topFadeSoftness;
    }
  }, [
    color,
    lowerWaveFreq,
    lowerWaveAmp,
    lowerWaveSpeed,
    lowerBoundaryBase,
    lowerFadeSoftness,
    upperWaveFreq,
    upperWaveAmp,
    upperWaveSpeed,
    topBoundaryBase,
    topFadeSoftness,
  ]);

  return (
    <mesh ref={meshRef} scale={scale.xy.min() * 0.001}>
      <planeGeometry args={[1920, 1080]} />
      <shaderMaterial
        ref={materialRef}
        toneMapped={false}
        
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
};

const ShaderComp = () => {
  const meshWrapper = useRef(null);
  return (
    <div className="w-screen h-screen" ref={meshWrapper}>
      <UseCanvas>
        <ScrollScene track={meshWrapper}>
          {(props) => (
            <MovingGradientShader
              lowerWaveFreq={2.8}
              lowerWaveAmp={0.09}
            
              lowerWaveSpeed={0.4}
              lowerBoundaryBase={0.25}
              lowerFadeSoftness={0.05}
              upperWaveFreq={10.0}
              upperWaveAmp={0.05}
              upperWaveSpeed={-0.55}
              topBoundaryBase={0.75}
              topFadeSoftness={0.1}
              color={0xffaa0a}
              {...props}
            />
          )}
        </ScrollScene>
      </UseCanvas>
    </div>
  );
};

export default ShaderComp;
