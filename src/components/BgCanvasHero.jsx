"use client";
import React, { useRef, useEffect } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";

// 1) Define your custom ShaderMaterial
class CustomShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iTime:      { value: 0 },
        iResolution:{ value: new THREE.Vector2(1,1) },
        iDir:       { value: new THREE.Vector2(0,0) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        uniform vec2 iResolution;
        uniform float iTime;
        uniform vec2 iDir;
        varying vec2 vUv;

        // --- classic 3D noise functions (Ashima) ---
        vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        vec4 taylorInvSqrt(vec4 r){ return 1.7928429 - 0.1537347 * r; }
        float snoise(vec3 v){
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          // First corner
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          // Other corners
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy; 
          vec3 x3 = x0 - D.yyy;      

          i = mod(i, 289.0);
          vec4 p = permute(
            permute(
              permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));

          vec4 j = p - 49.0 * floor(p * (1.0/7.0) * (1.0/7.0));
          vec4 x_ = floor(j * (1.0/7.0));
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ * (1.0/7.0) + vec4(0.0);
          vec4 y = y_ * (1.0/7.0) + vec4(0.0);
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);

          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));

          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);

          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

          vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
          m = m * m;
          return 60.0 * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }

        float myNoise(vec2 uv, float t, float o){
          vec2 shifted = uv + iDir * 3.0;
          float tt = (t + o) * 0.1;
          float n1 = snoise(vec3(shifted * 0.5, tt));
          return snoise(vec3(n1*0.2, n1*0.7, tt*0.1));
        }

        void main(){
          vec2 uv = (vUv * iResolution - 0.8 * iResolution) / iResolution.y;
          float c1 = smoothstep(0.1, 1.2, length(uv)) * myNoise(uv, iTime, 1.0);
          float n0 = 0.05 * snoise(vec3(uv*500.0, iTime*0.8));
          vec3 col = mix(vec3(0.0+0.0), n0 + vec3(0.9,0.31,0.08), clamp(c1,0.0,1.0));
          gl_FragColor = vec4(col,1.0);
        }
      `,
    });
  }
}

extend({ CustomShaderMaterial });

// 2) ShaderPlane sizes itself to fill the viewport
function ShaderPlane() {
  const shaderRef = useRef();
  const pointerTarget = useRef(new THREE.Vector2());
  const pointerLerped = useRef(new THREE.Vector2());
  const { viewport, size } = useThree();

  // update resolution uniform
  useEffect(() => {
    shaderRef.current.uniforms.iResolution.value.set(size.width, size.height);
  }, [size]);

  // each frame: update time & lerp mouse direction
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    shaderRef.current.uniforms.iTime.value = t;
    pointerLerped.current.lerp(pointerTarget.current, 0.05);
    shaderRef.current.uniforms.iDir.value.copy(pointerLerped.current);
  });

  // capture mouse
  const onPointerMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -((e.clientY / window.innerHeight) * 2 - 1);
    pointerTarget.current.set(x, y);
  };

  return (
    <mesh onPointerMove={onPointerMove} scale={150} position={[0,0,-300]}>
      {/* plane covers entire viewport */}
      <planeGeometry args={[16, 8]} />
      <customShaderMaterial ref={shaderRef} />
    </mesh>
  );
}

// 3) The top-level component
export default function BgCanvasHero() {
  const scrollRef = useRef();
  return (
    <>
      {/* this div anchors scroll */}
      <div ref={scrollRef} className="w-screen h-screen" />

      <UseCanvas
       
      >
        <ScrollScene track={scrollRef}>
          {/* props aren’t used here but required by ScrollScene */}
          {(props) => <ShaderPlane {...props} />}
        </ScrollScene>
      </UseCanvas>
    </>
  );
}
