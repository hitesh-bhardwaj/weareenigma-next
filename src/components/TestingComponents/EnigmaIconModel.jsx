"use client";
import { MeshTransmissionMaterial, useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
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
                        <>
                            <IconModel
                                {...props}
                            />
                            <PlaneComponent />
                            <ambientLight intensity={1} />

                        </>

                    )}
                </StickyScrollScene>
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
             gsap.from(iconGroupRef.current.scale,{
                x:0,
                y:0,
                duration:0.7,
                delay:0.7,

             })
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
                y: 100,
                // z: 0,
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
        })
        return () => ctx.revert();
    }, []);

    return (
        <group ref={iconGroupRef} castShadow receiveShadow position={[370, 0, 100]} rotation={[0, -0.2, 0]} scale={75} dispose={null}>
            <mesh ref={iconRef} geometry={nodes.Low_Poly001.geometry}>
                <MeshTransmissionMaterial {...materialsProps} />
            </mesh>
        </group>
    );
}

// Your custom geometry generator
function RoundedRectangle(w, h, r, s) {
    const wi = w / 2 - r;
    const hi = h / 2 - r;
    const w2 = w / 2;
    const h2 = h / 2;
    const ul = r / w;
    const ur = (w - r) / w;
    const vl = r / h;
    const vh = (h - r) / h;

    let positions = [
        -wi, -h2, 0, wi, -h2, 0, wi, h2, 0,
        -wi, -h2, 0, wi, h2, 0, -wi, h2, 0,
        -w2, -hi, 0, -wi, -hi, 0, -wi, hi, 0,
        -w2, -hi, 0, -wi, hi, 0, -w2, hi, 0,
        wi, -hi, 0, w2, -hi, 0, w2, hi, 0,
        wi, -hi, 0, w2, hi, 0, wi, hi, 0
    ];

    let uvs = [
        ul, 0, ur, 0, ur, 1,
        ul, 0, ur, 1, ul, 1,
        0, vl, ul, vl, ul, vh,
        0, vl, ul, vh, 0, vh,
        ur, vl, 1, vl, 1, vh,
        ur, vl, 1, vh, ur, vh
    ];

    let phia = 0;
    for (let i = 0; i < s * 4; i++) {
        const phib = Math.PI * 2 * (i + 1) / (4 * s);
        const cosa = Math.cos(phia);
        const sina = Math.sin(phia);
        const cosb = Math.cos(phib);
        const sinb = Math.sin(phib);

        const xc = i < s || i >= 3 * s ? wi : -wi;
        const yc = i < 2 * s ? hi : -hi;

        positions.push(
            xc, yc, 0,
            xc + r * cosa, yc + r * sina, 0,
            xc + r * cosb, yc + r * sinb, 0
        );

        const uc = i < s || i >= 3 * s ? ur : ul;
        const vc = i < 2 * s ? vh : vl;

        uvs.push(
            uc, vc,
            uc + ul * cosa, vc + vl * sina,
            uc + ul * cosb, vc + vl * sinb
        );

        phia = phib;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    return geometry;
}

function PlaneComponent() {
    const mesh = useRef(null);
    const texture = useVideoTexture("/assets/videos/showreel.mp4");

    // UseMemo for performance
    const roundedGeometry = useMemo(() => RoundedRectangle(16, 9, 0.2, 8), []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero-section",
                    start: "30% top",
                    end: "90% bottom",
                    scrub: true,
                },
                defaults: { ease: "none" }
            });

            tl.to(mesh.current.position, { z: 0 })
                .fromTo(mesh.current.scale, { x: 10, y: 10 }, { x: 80, y: 80, delay: -0.5 })
                .to(mesh.current.rotation, { y: 0, delay: -0.5 });
        });
        return () => ctx.revert();
    }, []);

    return (
        <mesh ref={mesh} scale={10} position={[0, 0, -500]} rotation={[0, -Math.PI / 2, 0]}>
            <primitive object={roundedGeometry} attach="geometry" />
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
    );
}

export default PlaneComponent;
