"use client";
import {
  useGLTF,
  useTexture,
} from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";

function Background({ img }) {
  const bgref = useRef(null);
  const backgroundModel = useGLTF("/assets/models/fractalGlassModel.glb");
  const texture = useTexture(img);
  const webModelRef = useRef(null);

  useEffect(() => {
    if (texture) {
      texture.center.set(0.41, 0.41);
      texture.rotation = Math.PI;
      texture.needsUpdate = true;
    }
  }, [texture]);


  return (
    <group position={[0, 0, 0]} ref={webModelRef}>
      <group ref={bgref} scale={70} position={[0, 0, -200]} rotation={[0, 0, 0]}>
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

    return <directionalLight ref={lightRef} intensity={1} position={[0,10,20]} />;
  };

  return (
    <>
    
      <group position={[0,100,0]}>
        {/* <ambientLight intensity={0} /> */}
        <LightFollower target={lightTargetRef} />
        <Background img={img} />
      </group>
    </>
  );
};

export default function FractalWaveSection({img}) {
  const meshWrapper = useRef(null);
  return (
    <>
      <div>
        <div ref={meshWrapper} className="w-screen h-[120vh]" />
        <UseCanvas>
          <ScrollScene track={meshWrapper}>
            {(props) => <FractalWithWave {...props} img={img} />}
          </ScrollScene>
        </UseCanvas>
      </div>
    </>
  );
}
