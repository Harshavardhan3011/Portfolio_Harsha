import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function ResumeHologram({ onDownload }) {
  const scanLineRef = useRef();
  const hologramRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Bobbing card animation
    if (hologramRef.current) {
      hologramRef.current.position.y = Math.sin(t * 1.5) * 0.08;
      hologramRef.current.rotation.y = Math.sin(t * 0.4) * 0.1;
    }

    // Scanning laser motion up and down the face of the board
    if (scanLineRef.current) {
      scanLineRef.current.position.y = Math.sin(t * 2.2) * 0.95;
    }
  });

  return (
    <group ref={hologramRef}>
      {/* Hologram Card Frame */}
      <mesh>
        <planeGeometry args={[2.2, 3.0]} />
        <meshStandardMaterial
          color="#022c22"
          transparent
          opacity={0.3}
          metalness={0.9}
          roughness={0.1}
          emissive="#10b981"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Wireframe Outline */}
      <mesh>
        <planeGeometry args={[2.22, 3.02]} />
        <meshBasicMaterial color="#00ff66" wireframe />
      </mesh>

      {/* Laser Scanning Line */}
      <mesh ref={scanLineRef} position={[0, 0, 0.02]}>
        <boxGeometry args={[2.2, 0.04, 0.02]} />
        <meshBasicMaterial color="#00ff66" />
      </mesh>

      {/* Glowing lights on sides */}
      <pointLight position={[0, 0, 1.5]} intensity={2.0} color="#00ff66" />

      {/* Embedded HTML resume details */}
      <Html transform distanceFactor={2.4} zIndexRange={[10, 20]} occlude>
        <div className="w-[190px] p-4 rounded-xl bg-black/90 border border-emerald-500/40 text-emerald-400 font-mono text-[9px] shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md select-none text-left">
          <div className="text-center border-b border-emerald-500/20 pb-2 mb-2">
            <h3 className="font-extrabold text-[10px] tracking-widest text-emerald-300 uppercase">
              Hologram Resume
            </h3>
            <span className="text-[7px] text-gray-500">ID: HV-2026-CSE</span>
          </div>

          <div className="space-y-2 mb-3">
            <div>
              <span className="text-emerald-500 font-bold uppercase block text-[7px] tracking-wider">
                Education
              </span>
              <p className="text-[8px] text-gray-300 font-semibold truncate">
                B.Tech CSE @ Avanthi
              </p>
              <p className="text-[7px] text-gray-500">CGPA: 8.2 / 10</p>
            </div>

            <div>
              <span className="text-emerald-500 font-bold uppercase block text-[7px] tracking-wider">
                Expertise
              </span>
              <p className="text-[8px] text-gray-300">
                React • Vite • Tailwind • Node.js
              </p>
              <p className="text-[8px] text-gray-300">
                Python • C • SQL/MySQL
              </p>
            </div>

            <div>
              <span className="text-emerald-500 font-bold uppercase block text-[7px] tracking-wider">
                Summary Metrics
              </span>
              <p className="text-[8px] text-gray-300">
                🚀 4+ Main Projects Built
              </p>
              <p className="text-[8px] text-gray-300">
                🌐 Vercel + Git Production Ready
              </p>
            </div>
          </div>

          <button
            onClick={onDownload}
            className="w-full py-1.5 rounded bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-black font-extrabold text-center uppercase tracking-wider text-[8px] transition shadow-[0_0_10px_rgba(0,255,102,0.3)] pointer-events-auto"
          >
            Download CV (.pdf)
          </button>
        </div>
      </Html>
    </group>
  );
}
