"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedGeometries() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Organic luxury shape */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]} position={[-4, 2, -6]}>
          <MeshDistortMaterial
            color="#0A0A0A"
            emissive="#FF6B00"
            emissiveIntensity={0.3}
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Architectural framework element */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[5, -1, -8]} rotation={[0.5, 0.5, 0.5]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial
            color="#FF6B00"
            roughness={0.1}
            metalness={0.8}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      {/* Floating real estate element */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, -3, -10]} rotation={[0, Math.PI / 4, 0]}>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color="#111111"
            emissive="#FF6B00"
            emissiveIntensity={0.1}
            roughness={0.1}
            metalness={1}
          />
        </mesh>
      </Float>

      {/* Futuristic City Grid */}
      <gridHelper 
        args={[100, 100, "#FF6B00", "#ffffff"]} 
        position={[0, -6, 0]} 
        material-opacity={0.05} 
        material-transparent 
      />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <fog attach="fog" args={['#0A0A0A', 5, 20]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#FF6B00" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        <AnimatedGeometries />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
