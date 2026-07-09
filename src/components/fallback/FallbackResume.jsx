import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FallbackResume() {
  const laserRef = useRef();

  useFrame((state) => {
    if (laserRef.current) {
      laserRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.8;
    }
  });

  return (
    <group>
      {/* Hologram Board Frame */}
      <mesh>
        <planeGeometry args={[1.5, 2.0]} />
        <meshStandardMaterial
          color="#022c22"
          wireframe
          emissive="#10b981"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Laser beam line */}
      <mesh ref={laserRef} position={[0, 0, 0.01]}>
        <boxGeometry args={[1.5, 0.02, 0.01]} />
        <meshBasicMaterial color="#00ff66" />
      </mesh>
    </group>
  );
}
