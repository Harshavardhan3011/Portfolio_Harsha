import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import DeveloperAvatar from "./DeveloperAvatar";

export default function AvatarDisplay() {
  const platformRef = useRef();

  useFrame((state, delta) => {
    if (platformRef.current) {
      platformRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group position={[0, -0.6, 0]}>
      {/* Dynamic spot lighting */}
      <spotLight position={[0, 4, 1]} angle={0.5} penumbra={0.6} intensity={3.0} color="#00ff66" castShadow />
      
      {/* Outer Scan Cylinder backdrop (procedural) */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 1.8, 16, 1, true]} />
        <meshStandardMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.15}
          side={2} // DoubleSide
        />
      </mesh>

      {/* Hologram standing platform */}
      <mesh ref={platformRef} position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.8, 0.9, 0.1, 16]} />
        <meshStandardMaterial
          color="#064e3b"
          wireframe
          emissive="#00ff66"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Actual Avatar model / fallback humanoid */}
      <DeveloperAvatar scale={[1.15, 1.15, 1.15]} />
    </group>
  );
}
