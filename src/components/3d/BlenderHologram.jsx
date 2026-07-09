import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function BlenderHologram() {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = t * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.4;
      innerRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Wireframe Cage */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[0.9, 0.28, 64, 8, 3, 4]} />
        <meshStandardMaterial
          color="#00ff66"
          wireframe
          transparent
          opacity={0.35}
          emissive="#10b981"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#06b6d4" // Cyan highlights
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* Orbiting halo particle trails */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.015, 8, 64]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
