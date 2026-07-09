import React, { useState } from "react";
import HoverTilt from "../interactions/HoverTilt";
import GameHologramFrame from "./GameHologramFrame";
import BattleEnergyLines from "./BattleEnergyLines";
import HorrorFog from "./HorrorFog";
import GameClipPreview from "./GameClipPreview";

export default function GameCard3D({ title, category, status, image, clip, accent, description, onClick }) {
  const [hovered, setHovered] = useState(false);

  // Map colors and glows based on categories/accents
  const colors = {
    battle: "#f97316", // Orange
    horror: "#ef4444", // Red
    ghost: "#3b82f6",  // Blue
    default: "#10b981" // Emerald
  };

  const borderGlowColor = colors[accent] || colors.default;

  return (
    <div 
      className="relative select-none pointer-events-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow corner wireframes */}
      <GameHologramFrame active={hovered} color={borderGlowColor} />

      <HoverTilt intensity={12}>
        <div 
          onClick={onClick}
          className={`relative overflow-hidden cursor-pointer p-4 rounded-xl bg-black/90 border font-mono transition-all duration-300 ${
            hovered
              ? "border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.25)] scale-102"
              : "border-emerald-950/60"
          }`}
        >
          {/* Battle energy flow line trails */}
          {accent === "battle" && <BattleEnergyLines active={hovered} />}

          {/* Horror/Ghost drifting fog elements */}
          {(accent === "horror" || accent === "ghost") && (
            <HorrorFog color={accent} />
          )}

          {/* Thumbnail / WebM preview frame */}
          <div className="relative h-36 w-full rounded-lg overflow-hidden border border-emerald-900/30 mb-3 bg-neutral-950">
            <GameClipPreview
              src={clip}
              poster={image}
              hovered={hovered}
              placeholderText={`${title} screen`}
            />

            {/* Top-Right Status Badge */}
            <div 
              className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[7px] font-extrabold uppercase border z-20"
              style={{
                borderColor: borderGlowColor,
                color: borderGlowColor,
                backgroundColor: "rgba(0, 0, 0, 0.85)"
              }}
            >
              {status}
            </div>
          </div>

          <span className="text-[7px] text-gray-500 uppercase tracking-widest block mb-0.5">
            // ZONE: {category}
          </span>
          <h3 className="text-sm font-extrabold text-white tracking-wider truncate">
            {title}
          </h3>
          <p className="text-[9px] text-gray-400 font-sans leading-relaxed mt-1 line-clamp-2 min-h-[26px]">
            {description}
          </p>

          <div className="mt-4 pt-2.5 border-t border-emerald-950/60 flex items-center justify-between">
            <span className="text-[8px] text-emerald-500 font-extrabold uppercase tracking-widest">
              {hovered ? "[ ENTER DIRECTIVE ]" : "DISPATCH SYSTEM"}
            </span>
            <span className="text-[7px] text-gray-600">XP_AVAIL</span>
          </div>
        </div>
      </HoverTilt>
    </div>
  );
}
