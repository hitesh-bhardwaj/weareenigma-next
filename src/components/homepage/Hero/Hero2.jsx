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

function EnigmaModelWeb({}) {
  const bgref = useRef(null);
  const backgroundModel = useGLTF("/assets/models/fractalGlassModel.glb");
  const texture = useTexture("/assets/models/hero-bg.png")
  const webModelRef = useRef(null);

  texture.center.set(0.5, 0.5);
  texture.rotation = Math.PI;
  texture.needsUpdate = true;

  useEffect(() => {
    if (!webModelRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(webModelRef.current.position, {
      y: 100, // Move upward
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <group position={[0, 0, 0]} ref={webModelRef}>
      <group
        ref={bgref}
        scale={1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <mesh geometry={backgroundModel.nodes.Plane002.geometry}>
          {/* <MeshTransmissionMaterial {...materialsProps}/> */}
          <meshStandardMaterial map={texture} side={THREE.DoubleSide}/>
        </mesh>
      </group>
    </group>
  );
}

const EnigmaModel = () => {
  const model = useGLTF('/assets/models/enigmaLogo.glb')
  const { nodes } = model
  const [toggleBrust, setToggleBrust] = useState(true)
  const groupRef = useRef(null);
  const ModelPart1 = useRef()
  const ModelPart2 = useRef()
  const ModelPart3 = useRef()
  const ModelPart4 = useRef()
  const mouse = useRef({ x: 0, y: 0 })
  const planeRef= useRef(null);
  const materialsProps= {
    thickness: 2.8,
    backsideThickness: 0.0,
    reflectivity: 0.14,
    roughness: 0.2,
    antisotropy: 0.4,
    chromaticAberration: 0.05,
    distortion: 0.3,
    temporalDistortion: 0.1,
    anisotropicBlur: 4.0,
    color: "#ffffff",
    backSide: false,
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      mouse.current = { x, y }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

  useEffect(() => {
    if (!groupRef.current) return;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section", 
        start: "-20% top",
        end: "bottom top",
        markers: true,
        scrub: 1, 
      }
    });
    tl.to(groupRef.current.position, {
      x: 0,
      y: 0,
      z: 0, 
      ease: "power2.inOut",
      duration: 1,
    })
  
    .to(groupRef.current.rotation, {
      y: `+=${Math.PI * 2.3}`, 
      ease: "power2.inOut",
      duration: 1,
    }, 0)
    .to(groupRef.current.position,{
        z:45,
        y:0.5,
        ease:"power2.out",
        duration:1
    })
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === "#hero-section") {
          trigger.kill();
        }
      });
    };
  }, []);
  
  const videoTexture = useVideoTexture(
    "https://cdn.pixabay.com/video/2023/10/20/185787-876545918_large.mp4"
  );
      
  return (
    <group
      position={[6, 0, 5]} 
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
      <group
        ref={planeRef}
        position={[0, 3.5, 20]}
        rotation={[
          0,-Math.PI/2,0
        ]}
      >
        <mesh rotation={[0,-Math.PI/2,0]}>
          <planeGeometry args={[3, 1.5]} />
          <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </mesh>
        </group>
    </group>
  )
}

const Hero2 = () => {
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
    <>
      <div ref={containerRef} className="h-[400vh] w-screen" id="hero-section">
        {/* Add some content below to enable scrolling */}
        <Canvas
          className="h-screen w-screen !sticky top-0"
          camera={{ fov: 20, position: [0, 0, 40] }}
          style={{
            background: "#000000",
            height: "100vh",
            width: "100vw",
          }}
        >
          <ambientLight intensity={0.8} />
          <LightFollower target={lightTargetRef} />
          <Suspense>
            <EnigmaModelWeb />
            <EnigmaModel/>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default Hero2