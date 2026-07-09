import React from "react";
import GlassCard from "./GlassCard";

export default function TimelineCard({ year, degree, school, grade, desc, status, active = false, onClick }) {
  return (
    <div className="relative cursor-pointer group" onClick={onClick}>
      {/* Node Bullet Indicator */}
      <div className={`absolute -left-[37px] top-1 w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
        active 
          ? "bg-emerald-500 border-emerald-400 scale-125 shadow-[0_0_12px_#00ff66]" 
          : "bg-black border-emerald-950 group-hover:border-emerald-500"
      }`} />

      <div className="space-y-1 pl-4">
        <span className="font-mono text-[8px] text-emerald-500 font-extrabold uppercase tracking-widest block">
          {year}
        </span>
        <h3 className={`font-mono text-xs md:text-sm transition-colors uppercase tracking-wider ${
          active ? "text-emerald-400 font-bold" : "text-white group-hover:text-emerald-300"
        }`}>
          {degree}
        </h3>
        <p className="text-[10px] text-gray-500 font-mono">
          {school}
        </p>

        {active && (
          <GlassCard hoverable={false} className="mt-3 border-emerald-500/20 bg-emerald-950/10 p-4">
            <div className="flex justify-between items-center mb-2 font-mono text-[9px] text-emerald-400 border-b border-emerald-950/40 pb-1.5">
              <span>PERFORMANCE INDEX:</span>
              <span className="font-extrabold">{grade}</span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-300 font-sans">
              {desc}
            </p>
            {status && (
              <div className="mt-2 text-right">
                <span className="text-[7px] font-mono bg-emerald-500 text-black px-1.5 py-0.5 rounded font-extrabold uppercase">
                  {status}
                </span>
              </div>
            )}
          </GlassCard>
        )}
      </div>
    </div>
  );
}
