import React from "react";

export default function HorrorFog({ color = "red" }) {
  const colorMap = {
    red: "from-red-950/20 via-purple-950/10 to-transparent",
    ghost: "from-blue-950/20 via-emerald-950/10 to-transparent",
    horror: "from-purple-950/30 via-red-950/15 to-transparent"
  };

  const selectedGradient = colorMap[color] || colorMap.red;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-xl">
      <div 
        className={`absolute inset-0 bg-gradient-to-t ${selectedGradient} animate-[fogFlow_10s_infinite_linear]`}
        style={{
          backgroundSize: "200% 200%"
        }}
      />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fogFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </div>
  );
}
