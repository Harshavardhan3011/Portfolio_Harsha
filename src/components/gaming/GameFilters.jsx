import React from "react";

export default function GameFilters({ active, onChange, options = [] }) {
  const labels = {
    all: "ALL ZONES",
    "Free Fire": "🔥 FREE FIRE",
    "Battle Royale": "⚔️ BATTLE ROYALE",
    Horror: "🩸 HORROR ZONE",
    Ghost: "👻 GHOST MODE",
    Survival: "🧟 SURVIVAL",
    Anime: "⚔️ ANIME VIBE",
    Clips: "📹 GAME CLIPS",
  };

  const colors = {
    all: "#00ff88",
    "Free Fire": "#f97316",
    "Battle Royale": "#f97316",
    Horror: "#ef4444",
    Ghost: "#3b82f6",
    Survival: "#22c55e",
    Anime: "#a78bfa",
    Clips: "#f97316",
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 select-none z-10 relative">
      {options.map((opt) => {
        const isActive = active === opt;
        const color = colors[opt] || "#00ff88";
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="font-mono text-[8px] uppercase tracking-widest px-4 py-2 rounded border transition-all duration-300"
            style={
              isActive
                ? {
                    background: color,
                    color: "#000",
                    borderColor: color,
                    boxShadow: `0 0 14px ${color}66`,
                    fontWeight: 950,
                  }
                : {
                    background: "transparent",
                    color: "#6b7280",
                    borderColor: "rgba(0,255,136,0.12)",
                  }
            }
          >
            {labels[opt] || opt.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
