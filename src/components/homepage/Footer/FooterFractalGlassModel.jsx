"use client";
import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import * as THREE from "three";

function FractalGlassModel({ img, scale, scrollState }) {

    const fractalMeshRef = useRef(null);
    const model = useGLTF("/assets/models/fractalGlassModel.glb");
    const texture = useTexture(img);
    const mouse = useRef({ x: 0, y: 0 });
    const lightRef = useRef();

    useEffect(() => {
        if (texture) {
            texture.center.set(0.5, 0.5);
            texture.rotation = Math.PI;
            // texture.needsUpdate = true;
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

        fractalMeshRef.current.position.y = scrollState.progress * Math.PI * 20
    });

    return (
        <>
            <group ref={fractalMeshRef} dispose={true}>
                <directionalLight ref={lightRef} intensity={2} />
                <mesh geometry={model.nodes.Plane002.geometry} position={[0, -40, 0]} scale={scale.xy.min() * 0.06}>
                    <meshStandardMaterial map={texture} side={useThree.DoubleSide} />
                </mesh>
            </group>
        </>
    )
}

export function FooterFractalGlassModelWrapper({ img }) {
    const fractalWrapper = useRef(null);

    return (
        <>
            <div ref={fractalWrapper} className="w-full h-full" />
            <UseCanvas>
                <ScrollScene track={fractalWrapper}>
                    {(props) => (
                        <FractalGlassModel {...props} img={img} />
                    )}
                </ScrollScene>
            </UseCanvas>
        </>
    )
}