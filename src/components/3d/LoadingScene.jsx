import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function LoadingScene() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#10b981" wireframe />
      </mesh>
      <pointLight intensity={1.5} color="#00ff66" />
    </group>
  );
}
