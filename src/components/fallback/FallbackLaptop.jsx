import React from "react";

export default function FallbackLaptop() {
  return (
    <group>
      {/* Keyboard Base */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[2.5, 0.1, 1.8]} />
        <meshStandardMaterial
          color="#061f0d"
          roughness={0.2}
          metalness={0.8}
          emissive="#10b981"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Keyboard Trackpad Outline (subtle glow) */}
      <mesh position={[0, 0.01, 0.5]}>
        <planeGeometry args={[0.6, 0.4]} />
        <meshBasicMaterial color="#10b981" wireframe />
      </mesh>

      {/* Laptop Screen Lid */}
      <group position={[0, 0, -0.85]} rotation={[Math.PI / 6, 0, 0]}>
        {/* Outer Lid */}
        <mesh position={[0, 0.8, -0.05]}>
          <boxGeometry args={[2.5, 1.6, 0.08]} />
          <meshStandardMaterial color="#022c22" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Inner Screen Panel */}
        <mesh position={[0, 0.8, 0]}>
          <planeGeometry args={[2.4, 1.5]} />
          <meshStandardMaterial
            color="#000000"
            emissive="#10b981"
            emissiveIntensity={0.4}
            roughness={0.5}
          />
        </mesh>

        {/* Procedural Code Scrolling Lines on Screen */}
        <gridHelper args={[2.2, 12, "#10b981", "#047857"]} position={[0, 0.8, 0.01]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  );
}
