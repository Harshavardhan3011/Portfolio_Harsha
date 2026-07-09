import React, { useEffect } from "react";

export default function EnterWorldTransition({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[400] bg-black flex items-center justify-center overflow-hidden">
      {/* Absolute slash line overlay */}
      <div
        className="absolute w-[200%] h-[300px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent pointer-events-none"
        style={{
          transform: "rotate(-35deg) translateY(-20%)",
          boxShadow: "0 0 100px #00ff88, 0 0 200px rgba(0,255,136,0.6)",
          animation: "slashSweep 1.4s cubic-bezier(0.15, 0.85, 0.35, 1) forwards"
        }}
      />
      {/* Glitch flash backboard */}
      <div className="absolute inset-0 bg-emerald-500/10 animate-pulse pointer-events-none" />
      
      {/* Center cyber lock unlocked indicator */}
      <div className="relative z-10 font-orbitron text-white text-xs uppercase tracking-[0.5em] font-black text-center animate-ping text-glow-green">
        ⚔️ PORTAL ACTIVATED ⚔️
      </div>
    </div>
  );
}
