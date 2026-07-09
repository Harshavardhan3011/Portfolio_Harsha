import React from "react";

export default function GameHologramFrame({ active = false, color = "#10b981" }) {
  if (!active) return null;

  return (
    <div 
      className="absolute -inset-1.5 z-0 pointer-events-none rounded-2xl border transition-all duration-300 animate-[pulseGlow_2s_infinite]"
      style={{
        borderColor: color,
        boxShadow: `0 0 12px ${color}44`,
      }}
    >
      {/* Corner indicators */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2" style={{ borderColor: color }} />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2" style={{ borderColor: color }} />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2" style={{ borderColor: color }} />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2" style={{ borderColor: color }} />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1.0; }
        }
      `}} />
    </div>
  );
}
