import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FallbackSkill({ hovered = false }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5 * (hovered ? 3 : 1);
    }
  });

  const neonColor = hovered ? "#34d399" : "#10b981";

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial
        color={neonColor}
        wireframe
        emissive={neonColor}
        emissiveIntensity={hovered ? 1.5 : 0.6}
      />
    </mesh>
  );
}
