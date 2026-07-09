import React, { useState } from "react";
import { Html } from "@react-three/drei";
import FallbackPortal from "../fallback/FallbackPortal";

export default function ProjectPortal({ title, desc, tech, link, images, onSelect, position = [0, 0, 0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onSelect}
    >
      {/* 3D Portal geometry backplate */}
      <FallbackPortal hovered={hovered} />

      {/* HTML Card floating inside the portal ring */}
      <Html transform distanceFactor={2.5} zIndexRange={[10, 20]} occlude>
        <div 
          onClick={onSelect}
          className={`cursor-pointer w-56 p-4 rounded-2xl bg-black/90 border transition-all duration-300 select-none text-left ${
            hovered 
              ? "border-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-105" 
              : "border-emerald-950/60 shadow-md"
          }`}
        >
          {/* Card Preview Image Thumbnail */}
          <div className="h-28 w-full overflow-hidden rounded-lg bg-emerald-950/20 border border-emerald-900/30 mb-3 relative">
            {images?.[0] ? (
              <img
                src={images[0]}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[10px] text-emerald-600 font-mono">
                [ Screenshot Unavailable ]
              </div>
            )}
            
            {/* Year / Category tag */}
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[8px] bg-emerald-950 text-emerald-400 font-mono border border-emerald-500/20">
              PROJ
            </div>
          </div>

          <h3 className="font-bold text-sm text-emerald-400 font-mono tracking-tight truncate">
            {title}
          </h3>
          <p className="text-[10px] text-gray-400 font-sans line-clamp-2 mt-1 min-h-[30px]">
            {desc}
          </p>

          {/* Tech tags list */}
          <div className="mt-3 flex flex-wrap gap-1 min-h-[20px]">
            {tech?.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[8px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-900/40"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-emerald-950/60 flex items-center justify-between">
            <span className="text-[8px] text-emerald-500 font-bold uppercase tracking-wider">
              {hovered ? "Select for Details →" : "View Details"}
            </span>
          </div>
        </div>
      </Html>
    </group>
  );
}
