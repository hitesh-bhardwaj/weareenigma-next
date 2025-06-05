'use client';
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

export function VideoPlane() {
    const meshRef = useRef(null);

    return (
        <>
            <div ref={meshRef} className="flex flex-row items-center justify-between w-full aspect-video" />
            <UseCanvas>
                <ScrollScene track={meshRef}>
                    {(props) => (
                        <PlaneComponent
                            {...props}
                        />
                    )}
                </ScrollScene>
            </UseCanvas>
        </>
    )
}

function PlaneComponent({ scale, scrollState }) {
    const mesh = useRef(null);
    const texture = useTexture("/assets/textures/showreel-poster.jpg");

    return (
        <mesh ref={mesh} scale={scale.xy.min() * 0.08} position={[0, 0, 0]}>
            <planeGeometry args={[16, 9]} />
            <meshStandardMaterial map={texture} side={useThree.DoubleSide} />
        </mesh>
    );
}