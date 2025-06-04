"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Physics, RigidBody, useRopeJoint } from "@react-three/rapier";

const HangingCard = ({ scrollDelta }) => {
  const { nodes } = useGLTF("/assets/models/idCard.glb");
  const texture1 = useTexture("/assets/images/solutions/cardTexture/card-texture.png");
  const texture2 = useTexture("/assets/images/solutions/cardTexture/card-texture-2.png");
  const texture3 = useTexture("/assets/images/solutions/cardTexture/card-texture-3.png");

  // Refs for the two bodies we’ll join
  const anchorRef = useRef(null);
  const cardRef = useRef(null);

  // Create a rope joint between the anchor (static) and the card (dynamic).
  //   - anchorRef is fixed in space
  //   - cardRef hangs below it
  //   - [0, 0, 0] in anchor’s local space
  //   - [0, 1, 0] in card’s local space
  //   - maxDistance = 1 (length of the “rope”)
  useRopeJoint(
    anchorRef,
    cardRef,
    [0, 0, 0],   // anchor point on the fixed body
    [0, 0, 0],   // attachment point on the card body (local)
    0.5            // maximum rope length
  );

  // Whenever scrollDelta changes, apply a small horizontal impulse to cardRef
  useEffect(() => {
    if (cardRef.current && scrollDelta !== 0) {
      // Apply impulse along X based on scrollDelta
      // The second argument (true) wakes up the body if it is sleeping
      cardRef.current.applyImpulse({ x: scrollDelta * 0.02, y: 0, z: 0 }, true);
    }
  }, [scrollDelta]);

  return (
    <>
      {/* Invisible, fixed anchor point at y = 2 */}
      <RigidBody
        ref={anchorRef}
        type="fixed"
        position={[0, 0, 0]}
       
        colliders={false}
      />

      {/* The hanging card assembly */}
      <RigidBody
        ref={cardRef}
        type="dynamic"
        rotation={[0,0,0]}
        position={[0, -3, 0]}
        angularDamping={0}
        linearDamping={0.5}
      >
        <group scale={3} rotation={[Math.PI/1.5,0,0]} position={[0,2,0]}>
          <mesh
            geometry={nodes.card.geometry}
            rotation={[-Math.PI / 2.8, Math.PI, 0]}
          >
            <meshStandardMaterial map={texture1} />
          </mesh>
          <mesh
            geometry={nodes.clip.geometry}
            rotation={[-Math.PI / 2.8, Math.PI, Math.PI / 8]}
          >
            <meshStandardMaterial map={texture2} />
          </mesh>
          <mesh
            geometry={nodes.cardBottom.geometry}
            rotation={[-Math.PI / 2.8, Math.PI, 0]}
          >
            <meshStandardMaterial map={texture3} />
          </mesh>
          <mesh geometry={nodes.strap.geometry} rotation={[0.45, 0, 0]}>
            <meshStandardMaterial map={texture2} />
          </mesh>
        </group>
      </RigidBody>
    </>
  );
};

useGLTF.preload("/assets/models/idCard.glb");

export default function Cards() {
  const [scrollDelta, setScrollDelta] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const delta = window.scrollY - lastY;
      setScrollDelta(delta);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 70 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <Physics gravity={[0, -9.8, 0]}>
            <HangingCard scrollDelta={scrollDelta} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}
