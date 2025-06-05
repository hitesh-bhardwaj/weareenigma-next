"use client";
import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import * as THREE from "three";

function FractalGlassModel({ img, scale, scrollState, ...props }) {

    const meshRef = useRef(null);
    const model = useGLTF("/assets/models/fractalGlassModel.glb");
    const texture = useTexture(img);
    const mouse = useRef({ x: 0, y: 0 });
    const lightRef = useRef();

    useEffect(() => {
        if (texture) {
            texture.center.set(0.5, 0.5);
            texture.rotation = Math.PI;
            texture.needsUpdate = true;
        }

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            mouse.current = { x, y };
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [texture]);

    useFrame(() => {
        if (!lightRef.current) return;

        const targetX = mouse.current.x * 2;

        lightRef.current.position.x = THREE.MathUtils.lerp(
            targetX,
            lightRef.current.position.y,
            0,
        );

        meshRef.current.position.y = scrollState.progress * Math.PI * 1.2
    });

    return (
        <>
            <group receiveShadow scale={scale.xy.min() * 0.08} position={[0, 0, -100]} rotation={[0, 0, 0]} {...props}>
                <directionalLight ref={lightRef} intensity={2} />
                <mesh ref={meshRef} geometry={model.nodes.Plane002.geometry}>
                    <meshStandardMaterial map={texture} side={useThree.DoubleSide} />
                </mesh>
            </group>
        </>
    )
}

export function FractalGlassModelWrapper({ img }) {
    const meshWrapper = useRef(null);

    return (
        <div>
            <div ref={meshWrapper} className="w-screen h-screen" />
            <UseCanvas>
                <ScrollScene track={meshWrapper}>
                    {(props) => (
                        <FractalGlassModel {...props} img={img} />
                    )}
                </ScrollScene>
            </UseCanvas>
        </div>
    );
}