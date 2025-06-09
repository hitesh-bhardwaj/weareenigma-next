"use client"
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useVideoTexture } from "@react-three/drei";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

export function VideoComponent() {
    return (
        <>
            <div className="" />
            <UseCanvas>
                <ScrollScene>
                    {(props) => (
                        <VideoPlane {...props} />
                    )}
                </ScrollScene>
            </UseCanvas>
        </>

    )
}

export function VideoPlane() {
    const mesh = useRef(null);
    const texture = useVideoTexture("/assets/videos/showreel.mp4");

    // UseMemo for performance
    const roundedGeometry = useMemo(() => RoundedRectangle(16, 9, 0.2, 8), []);

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: "#hero-section",
    //                 start: "30% top",
    //                 end: "90% bottom",
    //                 scrub: true,
    //             },
    //             defaults: { ease: "none" }
    //         });

    //         tl.to(mesh.current.position, { z: 0 })
    //             .fromTo(mesh.current.scale, { x: 10, y: 10 }, { x: 80, y: 80, delay: -0.5 })
    //             .to(mesh.current.rotation, { y: 0, delay: -0.5 });
    //     });
    //     return () => ctx.revert();
    // }, []);

    return (
        <mesh ref={mesh} scale={10} position={[0, 0, -500]} rotation={[0, -Math.PI / 2, 0]}>
            <primitive object={roundedGeometry} attach="geometry" />
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>

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