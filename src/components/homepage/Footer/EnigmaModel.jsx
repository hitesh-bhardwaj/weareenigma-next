"use client";
import { MeshTransmissionMaterial, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
gsap.registerPlugin(ScrollTrigger);

export function EnigmaModel() {
    const meshRef = useRef(null);

    return (
        <>
            <div ref={meshRef} className="w-full h-full absolute top-0 left-0" />
            <UseCanvas>
                <ScrollScene track={meshRef}>
                    {(props) => (
                        <>
                            <IconModel
                                {...props} />
                        </>
                    )}
                </ScrollScene>
            </UseCanvas>
        </>
    )
}

function IconModel() {
    const iconGroupRef = useRef(null);
    const iconRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const model = useGLTF("/assets/models/enigmaLogo.glb");
    const { nodes } = model;

    const materialsProps = {
        thickness: 2,
        resolution: 128,
        samples: 2,
        backsideThickness: 0.0,
        reflectivity: 1.0,
        roughness: 0.2,
        antisotropy: 1.4,
        chromaticAberration: 0.6,
        distortion: 1.0,
        temporalDistortion: 2.0,
        anisotropicBlur: 1.0,
        color: "#000000",
        backSide: false,
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            mouse.current = { x, y };
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame(() => {
        if (!iconRef.current) return;

        const targetX = mouse.current.x * 0.3;
        const targetY = mouse.current.y * 0.3;

        iconRef.current.rotation.y = THREE.MathUtils.lerp(
            iconRef.current.rotation.y,
            targetX,
            0.1
        );
        iconRef.current.rotation.x = THREE.MathUtils.lerp(
            iconRef.current.rotation.x,
            -targetY,
            0.1
        );
    });

    return (
        <group ref={iconGroupRef} castShadow receiveShadow position={[-100, 0, 100]} rotation={[0, -0.2, 0]} scale={70} dispose={null}>
            <mesh ref={iconRef} geometry={nodes.Low_Poly001.geometry}>
                <MeshTransmissionMaterial {...materialsProps} />
            </mesh>
        </group>
    );
}

