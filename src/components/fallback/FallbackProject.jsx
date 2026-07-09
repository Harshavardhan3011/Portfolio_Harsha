import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FallbackProject({ hovered = false }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.4 * (hovered ? 2.5 : 1);
    }
  });

  const neonColor = hovered ? "#00ff66" : "#059669";

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[0.9, 0.05, 8, 32]} />
      <meshStandardMaterial
        color={neonColor}
        emissive={neonColor}
        emissiveIntensity={hovered ? 2.0 : 0.8}
      />
    </mesh>
  );
}
