import React from "react";

export default function BattleEnergyLines({ active = false }) {
  if (!active) return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none rounded-xl overflow-hidden border border-orange-500/30">
      {/* Top line particle flow */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-[flowRight_2s_infinite_linear]" />
      
      {/* Bottom line particle flow */}
      <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-transparent via-yellow-400 to-transparent animate-[flowLeft_2s_infinite_linear]" />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flowRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes flowLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </div>
  );
}
