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
  texture.center.set(0.5, 0.5);
  texture.rotation = Math.PI;
  texture.needsUpdate = true;
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
  const materialsProps= {
    thickness:8.11,
    backsideThickness:1.71,
    roughness:0.2,
    reflectivity:0.04,
    antisotrophy:0.00,
    chromaticAberration:1.00,
    distortion:0.0,
    temporalDistortion:0.0,
    anisotropicBlur:5.00,
    color:"#fcf7f7",
    backSide:false,
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
  
    // Create a timeline for coordinated animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section", 
        start: "top top",
        end: "bottom top",
        scrub: 1, // Smooth scrubbing
        onUpdate: (self) => {
          // Optional: Add any custom logic during scroll
          console.log("Scroll progress:", self.progress);
        }
      }
    });

    // Move model to center of screen
    tl.to(groupRef.current.position, {
      x: 0, // Move to center X
      y: 0, // Move to center Y
      z: 0, // Move to center Z
      duration: 1,
      ease: "power2.inOut",
    })
    
    // Scale up the model
    .to(groupRef.current.scale, {
      x: 2,
      y: 2,
      z: 2,
      duration: 1,
      ease: "power2.inOut",
    }, 0) // Start at the same time as position animation
    
    // 360-degree rotation on Y-axis
    .to(groupRef.current.rotation, {
      y: "+=6.28318", // 2 * Math.PI for full 360° rotation
      duration: 1,
      ease: "none", // Linear rotation for smooth spinning
    }, 0.3) // Start slightly after position animation begins
    
    // Optional: Add additional rotation on other axes for more dynamic effect
    .to(groupRef.current.rotation, {
      x: "+=3.14159", // Additional 180° rotation on X-axis
      duration: 1,
      ease: "power1.inOut",
    }, 0.5); // Start halfway through

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === "#hero-section") {
          trigger.kill();
        }
      });
    };
  }, []);
      
  return (
    <group
      position={[6, 0, 5]} // Initial position (will animate to center)
      scale={1.2} // Initial scale (will animate to 2)
      rotation={[Math.PI / 15, -Math.PI / 25, 0]} // Initial rotation
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
      <div ref={containerRef} className="h-screen w-screen" id="hero-section">
        {/* Add some content below to enable scrolling */}
        <Canvas
          className="h-full w-full"
          camera={{ fov: 20, position: [0, 0, 40] }}
          style={{
            background: "#000000",
          }}
        >
          <ambientLight intensity={0.8} />
          <LightFollower target={lightTargetRef} />
          <Suspense>
            <EnigmaModelWeb/>
            <EnigmaModel/>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default Hero2