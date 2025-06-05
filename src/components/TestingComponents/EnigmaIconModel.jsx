"use client";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { UseCanvas } from "@14islands/r3f-scroll-rig";
import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups'

gsap.registerPlugin(ScrollTrigger);

export function EnigmaIconModel() {
    const meshRef = useRef(null);

    return (
        <>
            <div ref={meshRef} className="w-screen h-screen sticky top-0" />
            <UseCanvas>
                <StickyScrollScene track={meshRef}>
                    {(props) => (
                        <IconModel
                            {...props}
                        />
                    )}
                </StickyScrollScene>
            </UseCanvas>
        </>
    )
}

function IconModel({ scale, scrollState }) {
    const [y, setY] = useState(0);
    const iconGroupRef = useRef(null);
    const iconRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const model = useGLTF("/assets/models/enigmaLogo.glb");
    const { nodes } = model;

    const materialsProps = {
        thickness: 1.8,
        backsideThickness: 0.0,
        reflectivity: 0.54,
        roughness: 0.2,
        antisotropy: 0.4,
        chromaticAberration: 0.1,
        distortion: 0.3,
        temporalDistortion: 0.1,
        anisotropicBlur: 1.0,
        color: "#ffffff",
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!iconGroupRef.current) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero-section",
                    start: "top top",
                    end: "bottom bottom",
                    // markers: true,
                    scrub: true,
                },
                defaults: {
                    ease: "none",
                }
            });
            tl.to(iconGroupRef.current.position, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1,
            })
                .to(iconGroupRef.current.rotation, {
                    y: 2 * `${Math.PI}`,
                    duration: 1,
                    delay: -1,
                })
                .to(iconGroupRef.current.scale, {
                    x: scale.xy.min() * 0.5,
                    y: scale.xy.min() * 0.5,
                    duration: 1,
                    delay: -0.2,
                })
                .to(iconGroupRef.current.position, {
                    z: 1000,
                    duration: 1,
                    delay: -1,
                })
            // .to(planeRef.current.rotation, {
            //     y: `${Math.PI * 0.01}`,
            //     delay: -0.4,
            // })
            // .to(planeRef.current.position, {
            //     z: 30,
            //     delay: -0.5,
            // });
        })
        return () => ctx.revert();
    }, []);

    return (
        <group ref={iconGroupRef} castShadow receiveShadow position={[500, 0, 0]} rotation={[0, -0.4, 0]} scale={scale.xy.min() * 0.08} dispose={null}>
            <group ref={iconRef}>
                <mesh geometry={nodes.Low_Poly.geometry}>
                    <MeshTransmissionMaterial {...materialsProps} />
                </mesh>
                <mesh geometry={nodes.Low_Poly001.geometry}>
                    <MeshTransmissionMaterial {...materialsProps} />
                </mesh>
                <mesh geometry={nodes.Low_Poly002.geometry}>
                    <MeshTransmissionMaterial {...materialsProps} />
                </mesh>
                <mesh geometry={nodes.Low_Poly003.geometry}>
                    <MeshTransmissionMaterial {...materialsProps} />
                </mesh>
            </group>
        </group>
    );
}

