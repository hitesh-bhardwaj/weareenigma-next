'use client';
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { StickyScrollScene } from "@14islands/r3f-scroll-rig/powerups";
// import { StickyScrollScene } from "@14islands/r3f-scroll-rig/powerups";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export function VideoPlane() {
    const meshRef = useRef(null);

    return (
        <>
            <div ref={meshRef} className="flex flex-row sticky top-0 items-center justify-between w-screen h-screen aspect-video " />
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
    useEffect(()=>{
     const ctx = gsap.context(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero-section",
                start: "30% top",
                end: "bottom bottom",
                // markers: true,
                scrub: true,
            },
            defaults: {
                ease: "none",
            }
        })
        tl.to(mesh.current.position,{
            z:0,
            // y:-800
        })
        .fromTo(mesh.current.scale,{
            x:10,
            y:10
        },{
            x:75,
            y:75,
            delay:-0.5,
        })
        tl.to(mesh.current.rotation,{
            y:0,
            delay:-0.5
        })

     })
     return()=>ctx.revert()
    },[])

    return (
        <mesh ref={mesh} scale={10} position={[0,0 , -500]} rotation={[0,-Math.PI/2,0]}>
            <planeGeometry args={[16, 9]} />
            <meshStandardMaterial map={texture} side={useThree.DoubleSide} />
        </mesh>
    );
}