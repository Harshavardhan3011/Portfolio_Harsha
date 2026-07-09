import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function ContactTerminal3D({ children }) {
  const terminalRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (terminalRef.current) {
      // Gentle micro-bobbing animation
      terminalRef.current.position.y = Math.sin(t * 1.0) * 0.05 - 0.2;
      terminalRef.current.rotation.y = Math.cos(t * 0.3) * 0.04;
    }
  });

  return (
    <group ref={terminalRef}>
      {/* Outer Chassis */}
      <mesh>
        <boxGeometry args={[4.2, 3.2, 0.4]} />
        <meshStandardMaterial
          color="#050c08"
          roughness={0.8}
          metalness={0.7}
          emissive="#004411"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Screen Frame Bezel */}
      <mesh position={[0, 0, 0.21]}>
        <boxGeometry args={[4.0, 3.0, 0.05]} />
        <meshStandardMaterial color="#022c22" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* Glowing bezel lines */}
      <mesh position={[0, 0, 0.24]}>
        <planeGeometry args={[3.96, 2.96]} />
        <meshBasicMaterial color="#00ff66" wireframe />
      </mesh>

      {/* Embedded Terminal HTML Form */}
      <Html transform distanceFactor={2.5} zIndexRange={[10, 20]} position={[0, 0, 0.26]} occlude>
        <div className="w-[330px] p-6 bg-black text-emerald-400 font-mono text-[10px] rounded border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <div className="flex justify-between items-center border-b border-emerald-500/30 pb-2 mb-3">
            <span className="font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              SECURE_COMMUNICATION_TERMINAL_V1.0
            </span>
            <div className="flex space-x-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-emerald-800 rounded-full"></span>
            </div>
          </div>
          
          <div className="pointer-events-auto">
            {children}
          </div>
        </div>
      </Html>
    </group>
  );
}
