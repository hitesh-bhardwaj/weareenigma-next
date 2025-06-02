"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function page() {
    return (
        <>
            {/* <div className="bg-gray-100 p-4 h-screen flex items-center justify-center">
                <h1 className="text-9xl font-medium">Test 1</h1>
            </div> */}
            <div className="h-screen w-screen">
                <Canvas
                    camera={{
                        position: [0, 0, 10],
                        fov: 75,
                    }}
                >   
                    <ambientLight intensity={1} />
                    <mesh position={[0, 0, 5]}>
                        <planeGeometry args={[16, 9]} />
                        <meshStandardMaterial wireframe color="red" />
                    </mesh>
                    <OrbitControls />
                    <gridHelper args={[16, 16]} />
                </Canvas>
            </div>
        </>
    );
}