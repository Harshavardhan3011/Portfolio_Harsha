import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FallbackHero() {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.4;
      cubeRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Holographic Core */}
      <mesh ref={cubeRef}>
        <dodecahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#10b981"
          wireframe
          emissive="#10b981"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Orbiting Ring 1 */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.5, 0.03, 8, 48]} />
        <meshBasicMaterial color="#00ff66" transparent opacity={0.6} />
      </mesh>

      {/* Orbiting Ring 2 */}
      <mesh rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[1.8, 0.02, 8, 48]} />
        <meshBasicMaterial color="#00ff66" transparent opacity={0.4} />
      </mesh>

      {/* Emissive grid platform underneath */}
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="#062f17" wireframe emissive="#00ff66" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}
