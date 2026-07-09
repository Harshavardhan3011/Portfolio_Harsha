import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import FallbackOrb from "../fallback/FallbackOrb";

export default function SkillOrb({ name, level, category, desc, position = [0, 0, 0] }) {
  const [hovered, setHovered] = useState(false);
  const localRef = useRef();

  useFrame((state) => {
    if (localRef.current) {
      // Gentle floating animation
      const offset = (name.charCodeAt(0) % 5) * 0.5;
      localRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.2 + offset) * 0.15;
    }
  });

  return (
    <group
      ref={localRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* 3D Orb representation */}
      <FallbackOrb name={name} level={level} hovered={hovered} />

      {/* Embedded Details Overlay */}
      <Html
        distanceFactor={6}
        position={[0, 0.9, 0]}
        center
        style={{
          pointerEvents: "none",
          transition: "opacity 0.2s ease",
          opacity: hovered ? 1 : 0.0,
        }}
      >
        <div className="w-48 p-3 rounded-xl bg-black/90 border border-emerald-500/50 text-emerald-400 font-mono shadow-[0_0_20px_rgba(16,185,129,0.35)] backdrop-blur-md select-none text-left">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-xs truncate max-w-[100px]">{name}</span>
            <span className="text-[10px] text-emerald-500 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/20">
              {level}%
            </span>
          </div>
          
          <p className="text-[9px] text-gray-400 mb-2 font-sans line-clamp-3">{desc}</p>
          
          {/* Radial progress indicators */}
          <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-emerald-500/10">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-500"
              style={{ width: hovered ? `${level}%` : "0%" }}
            />
          </div>
          <div className="text-[7px] text-gray-500 mt-1 uppercase text-right tracking-widest">
            {category}
          </div>
        </div>
      </Html>
    </group>
  );
}
