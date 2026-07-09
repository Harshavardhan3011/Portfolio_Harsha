import React, { useState } from "react";
import { Html } from "@react-three/drei";
import FallbackProject from "../fallback/FallbackProject";

export default function ProjectMissionCard({ title, desc, tech, link, slug, onSelect, position = [0, 0, 0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onSelect}
    >
      {/* 3D mesh base outline */}
      <FallbackProject hovered={hovered} />

      {/* Hologram Glass Dashboard Panel */}
      <Html transform distanceFactor={2.4} occlude>
        <div 
          onClick={onSelect}
          className={`cursor-pointer w-56 p-4 rounded-xl bg-black/90 border font-mono transition-all duration-300 select-none text-left ${
            hovered 
              ? "border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105" 
              : "border-emerald-950"
          }`}
        >
          <div className="flex justify-between items-center mb-2 border-b border-emerald-950 pb-1 text-[8px] text-emerald-500">
            <span>// MISSION_CARD</span>
            <span className="font-bold">ACTIVE</span>
          </div>

          <h3 className="text-xs font-bold text-white uppercase tracking-wider truncate mb-1">
            {title}
          </h3>
          <p className="text-[9px] text-gray-400 font-sans line-clamp-2 min-h-[25px]">
            {desc}
          </p>

          <div className="mt-3 flex flex-wrap gap-1">
            {tech?.slice(0, 2).map((t) => (
              <span
                key={t}
                className="text-[7px] px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/20"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 pt-2 border-t border-emerald-950/60 text-right">
            <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-wider">
              {hovered ? "[ DEPLOY INTEL ]" : "[ DETAILS ]"}
            </span>
          </div>
        </div>
      </Html>
    </group>
  );
}
