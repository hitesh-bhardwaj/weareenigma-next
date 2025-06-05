"use client";
import {
  Environment,
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei"
import React, { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";

gsap.registerPlugin(ScrollTrigger);

function Background({ img }) {
  const bgref = useRef(null);
  const backgroundModel = useGLTF("/assets/models/fractalGlassModel.glb");
  const texture = useTexture(img);
  const webModelRef = useRef(null);

  useEffect(() => {
    if (texture) {
      texture.center.set(0.5, 0.5);
      texture.rotation = Math.PI;
      texture.needsUpdate = true;
    }
  }, [texture]);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     if (!webModelRef.current) return;

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#hero-section",
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 1,
  //       },
  //     });

  //     tl.to(webModelRef.current.position, {
  //       y: 100, 
  //       ease: "none",
  //     });

  //   })
  //   return () => ctx.revert()
  // }, []);

  return (
    <group position={[0, 0, 0]} ref={webModelRef}>
      <group ref={bgref} scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <mesh geometry={backgroundModel.nodes.Plane002.geometry}>
          <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}

const FractalWithWave = ({ img }) => { 
  const lightTargetRef = useRef(new THREE.Vector3(10, 10, 10));
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const el = useRef()

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
    
     
        <group>
          <ambientLight intensity={0.8} />
          <LightFollower target={lightTargetRef} />
          <Background img={img} />
        </group>
       
    </>
  );
};

export default FractalWithWave;

