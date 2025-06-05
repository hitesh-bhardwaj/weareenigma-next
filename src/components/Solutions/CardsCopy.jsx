/* eslint-disable react/no-unknown-property */
'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer, OrbitControls } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, -5, 30], gravity = [0, -80, 0], fov = 20, transparent = true }) {
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={5} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <directionalLight position={[2,3,1]} intensity={3}/>
        <directionalLight position={[-2,3,1]} intensity={4}/>
        <Environment preset='city'/>


      
        {/* <OrbitControls/> */}
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3();

  const segmentProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  const { nodes, materials } = useGLTF('/assets/models/newIdCard.glb');
  const texture = useTexture('/assets/images/solutions/cardTexture/new-texture-1.png');
  const texture2 = useTexture('/assets/images/solutions/cardTexture/card-texture-2.png');
  // const texture3 = useTexture('/assets/images/solutions/cardTexture/new-texture.png');
 console.log(nodes)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), new THREE.Vector3(),
    new THREE.Vector3(), new THREE.Vector3()
  ]));

  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

  const lastScroll = useRef(0);

  // useEffect(() => {
  //   texture.center.set(0.5, 0.5);
  //   texture.rotation = Math.PI/2;
  //   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  //   texture.repeat.set(1, 1);
  //   texture.needsUpdate = true;
  // }, [texture]);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]]);

  useFrame((state, delta) => {
    if (!card.current) return;

    // Detect scroll delta
    const currentScroll = window.scrollY;
    const deltaScroll = currentScroll - lastScroll.current;
    lastScroll.current = currentScroll;

    if (Math.abs(deltaScroll) > 1) {
      const impulse = deltaScroll > 0 ? 0.6 : -3;
      card.current.applyImpulse({ x: impulse * 0.05, y: impulse * 0.1, z: impulse*0.02 }, true);
    }

    // Rope smoothing
    [j1, j2].forEach((ref) => {
      if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
      const dist = ref.current.lerped.distanceTo(ref.current.translation());
      const clamped = Math.max(0.1, Math.min(1, dist));
      ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clamped * (maxSpeed - minSpeed)));
    });

    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(j2.current.lerped);
    curve.points[2].copy(j1.current.lerped);
    curve.points[3].copy(fixed.current.translation());
    band.current.geometry.setPoints(curve.getPoints(32));

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
  });

  return (
    <group position={[0,-2, 0]}>
      <group position={[0, 9, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>

        <RigidBody position={[0, 0, 0]} rotation={[0, 0, 0]} ref={card} {...segmentProps} type="dynamic">
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group scale={3.6} position={[0, 0, -0.05]} >
            <mesh geometry={nodes.card.geometry} rotation={[0, 0, 0]} position={[0, -0.723, 0]}>
              <meshPhysicalMaterial map={texture} side={THREE.DoubleSide} clearcoat={1} clearcoatRoughness={0.1} roughness={0.9} metalness={0.9} />
            </mesh>
            <mesh geometry={nodes.card001.geometry} rotation={[0, 0, 0]} position={[0, -0.722, 0.01]}>
              <meshPhysicalMaterial map={texture} side={THREE.FrontSide} clearcoat={1} clearcoatRoughness={0.1} roughness={0.9} metalness={0.9} />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} rotation={[0, 0, 0]} position={[0, -0.72, 0]} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} material-roughness={0.3} rotation={[0, 0, 0]} position={[0, -0.72, 0]} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band} position={[0,2.2, 0]}>
        <meshLineGeometry map={texture2} />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture2}
          repeat={[-4, 1]}
          lineWidth={2.5}
        />
      </mesh>
    </group>
  );
}
