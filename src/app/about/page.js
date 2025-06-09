"use client"
import Layout from "@/components/Layout";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { MeshTransmissionMaterial, useGLTF, useVideoTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

export default function Page() {
    return (
        <>
            <Layout>
                <Suspense>
                    <Model />
                </Suspense>
            </Layout>
        </>
    )
}

function Model() {
    const meshRef = useRef(null);

    return (
        <>

            <div ref={meshRef} className="w-screen h-screen sticky top-0" />
            <UseCanvas>
                <ScrollScene track={meshRef}>
                    {(props) => (
                        <>
                            <IconModel
                                {...props}
                            />
                            <Plane />
                            <ambientLight intensity={1} />
                        </>
                    )}
                </ScrollScene>
            </UseCanvas>
        </>

    )
}

function IconModel({ scale }) {
    const iconGroupRef = useRef(null);
    const iconRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const model = useGLTF("/assets/models/enigmaLogo.glb");
    const { nodes } = model;
    const materialsProps = {
        thickness: 1.8,
        resolution: 128,
        samples: 2,
        backsideThickness: 0.6,
        reflectivity: 0.54,
        roughness: 0.3,
        antisotropy: 0.4,
        chromaticAberration: 0.5,
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
            0.05
        );
        iconRef.current.rotation.x = THREE.MathUtils.lerp(
            iconRef.current.rotation.x,
            -targetY,
            0.05
        );
    });
    return (
        <group ref={iconGroupRef} castShadow receiveShadow position={[0, 0, 100]} rotation={[0, 0, 0]} scale={75} dispose={null}>
            <mesh ref={iconRef} geometry={nodes.Low_Poly001.geometry}>
                <MeshTransmissionMaterial {...materialsProps} />
            </mesh>
        </group>
    )
}

function Plane() {
    const mesh = useRef(null);
    const texture = useVideoTexture("/test-video-2.mp4");

    return (
        <>
            <group>
                <mesh ref={mesh} position={[0, 0, 0]} scale={0.8}>
                    <planeGeometry args={[1920, 1080]} />
                    <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
                </mesh>
            </group>
        </>
    )
}