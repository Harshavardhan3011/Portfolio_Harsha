import React, { useState, useEffect } from "react";
import MotionWrapper from "../components/animation/MotionWrapper";
import { skills } from "../data/skills";
import { usePortfolioStore } from "../store/usePortfolioStore";
import HoverTilt from "../components/interactions/HoverTilt";
import { zoroGifs } from "../data/mediaAssets";

const CATEGORIES = [
  { id: "all",         label: "ALL SKILLS",   color: "#00ff88",  border: "border-emerald-500" },
  { id: "Frontend",    label: "FRONTEND",      color: "#06b6d4",  border: "border-cyan-500"    },
  { id: "Programming", label: "PROGRAMMING",   color: "#a78bfa",  border: "border-violet-500"  },
  { id: "Database",    label: "DATABASES",     color: "#f59e0b",  border: "border-amber-500"   },
  { id: "Tools",       label: "TOOLS",         color: "#34d399",  border: "border-emerald-400" },
  { id: "CS Core",     label: "CS CORE",       color: "#f472b6",  border: "border-pink-500"    },
  { id: "Soft Skills", label: "SOFT SKILLS",   color: "#38bdf8",  border: "border-sky-400"     },
];

const categoryColor = (cat) =>
  CATEGORIES.find((c) => c.id === cat)?.color || "#00ff88";

export default function Skills() {
  const [activeCat, setActiveCat] = useState("all");
  const [selected, setSelected] = useState(skills[0]);
  const triggerUnlock = usePortfolioStore((s) => s.triggerUnlock);

  useEffect(() => {
    triggerUnlock("explore_skills");
  }, [triggerUnlock]);

  const filtered = activeCat === "all"
    ? skills
    : skills.filter((s) => s.category === activeCat);

  const currentCat = CATEGORIES.find((c) => c.id === activeCat) || CATEGORIES[0];

  return (
    <div
      className="relative text-white overflow-x-hidden min-h-screen pb-24 pt-20 px-4 md:px-8"
      style={{ background: "linear-gradient(180deg, #020403 0%, #06150D 50%, #020403 100%)" }}
    >
      {/* Background Zoro aura */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <img src={zoroGifs[3]} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020403] via-transparent to-[#020403]" />
      </div>

      {/* Hologram scanline */}
      <div
        className="absolute left-0 right-0 h-[1px] z-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${currentCat.color}, transparent)`,
          animation: "scanLine 5s linear infinite",
          opacity: 0.3,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        
        {/* Header */}
        <MotionWrapper delay={0.1} yOffset={20}>
          <div className="text-center">
            <span className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest block mb-2">
              // SKILL_MATRIX_CHAMBER
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-black tracking-tight">
              <span className="text-white">SKILL</span>{" "}
              <span
                className="text-transparent bg-clip-text text-glow-green"
                style={{ backgroundImage: `linear-gradient(135deg, ${currentCat.color}, #00ff88)` }}
              >
                MATRIX
              </span>
            </h1>
            <p className="text-gray-500 font-mono text-xs mt-2 uppercase tracking-widest">
              Frontend • Programming • Databases • Tools • CS Core
            </p>
          </div>
        </MotionWrapper>

        {/* Category Selector Tabs */}
        <MotionWrapper delay={0.2} yOffset={20}>
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCat(cat.id);
                  const firstOfCat = skills.find(s => s.category === cat.id || cat.id === "all");
                  setSelected(firstOfCat || null);
                }}
                className={`font-mono text-[8px] uppercase tracking-widest px-4 py-2 rounded border transition-all duration-300 ${
                  activeCat === cat.id
                    ? `text-black font-black border-transparent`
                    : "text-gray-400 border-emerald-950 hover:text-white"
                }`}
                style={
                  activeCat === cat.id
                    ? { background: cat.color, boxShadow: `0 0 16px ${cat.color}66` }
                    : {}
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </MotionWrapper>

        {/* Constellation Workspace + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: 3D Constellation Skill Matrix */}
          <div className="lg:col-span-8 relative flex flex-col items-center min-h-[500px] justify-center p-4 rounded-2xl border border-emerald-950/20 bg-black/45 backdrop-blur-md overflow-hidden">
            
            {/* SVG energy connection lines background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ff88" stopOpacity="0.4" />
                  <stop offset="100%" stopColor={currentCat.color} stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Radial grid circles for depth */}
              <circle cx="50%" cy="50%" r="70" fill="none" stroke="rgba(0,255,136,0.06)" strokeWidth="1" strokeDasharray="5 5" />
              <circle cx="50%" cy="50%" r="140" fill="none" stroke="rgba(0,255,136,0.04)" strokeWidth="1" strokeDasharray="5 5" />
              <circle cx="50%" cy="50%" r="210" fill="none" stroke="rgba(0,255,136,0.02)" strokeWidth="1" strokeDasharray="5 5" />

              {/* Glowing animated path rays to each skill */}
              {filtered.map((skill, index) => {
                const total = filtered.length;
                const angle = (index * 2 * Math.PI) / total;
                const radius = total > 12 ? 180 : 140; // dynamically size radius
                const x2 = `calc(50% + ${Math.cos(angle) * radius}px)`;
                const y2 = `calc(50% + ${Math.sin(angle) * radius}px)`;

                return (
                  <g key={skill.name}>
                    {/* Background line link */}
                    <line
                      x1="50%" y1="50%"
                      x2={x2} y2={y2}
                      stroke="url(#lineGrad)"
                      strokeWidth="1.5"
                    />
                    {/* Animated energy pulse along line */}
                    <line
                      x1="50%" y1="50%"
                      x2={x2} y2={y2}
                      stroke="#00ff88"
                      strokeWidth="2.5"
                      strokeDasharray="10 80"
                      style={{
                        animation: "energyFlow 2.5s linear infinite",
                        animationDelay: `${index * 0.15}s`
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Central Glowing Core Orb */}
            <div className="relative z-10 flex items-center justify-center pointer-events-auto">
              <div
                className="w-24 h-24 rounded-full flex flex-col items-center justify-center cursor-pointer relative"
                style={{
                  background: `radial-gradient(circle, ${currentCat.color}44, transparent 80%), rgba(2,6,3,0.85)`,
                  border: `2px solid ${currentCat.color}`,
                  boxShadow: `0 0 35px ${currentCat.color}55, inset 0 0 15px ${currentCat.color}33`,
                  animation: "breatheGlow 3s ease-in-out infinite",
                }}
              >
                {/* Center visual stats */}
                <span className="font-orbitron text-base font-black text-glow-green text-white">
                  {skills.length}
                </span>
                <span className="font-mono text-[7px] text-emerald-400 font-extrabold uppercase tracking-widest text-center mt-1">
                  NODES
                </span>
                
                {/* HUD border elements */}
                <div className="absolute inset-[-6px] rounded-full border border-dashed border-emerald-500/20 animate-spin" style={{ animationDuration: "12s" }} />
              </div>
            </div>

            {/* Orbiting Constellation Skill Nodes */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {filtered.map((skill, index) => {
                const total = filtered.length;
                const angle = (index * 2 * Math.PI) / total;
                const radius = total > 12 ? 180 : 140;
                const color = categoryColor(skill.category);
                const isSelected = selected?.name === skill.name;

                return (
                  <div
                    key={skill.name}
                    className="absolute z-20 pointer-events-auto"
                    style={{
                      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <HoverTilt>
                      <button
                        onClick={() => setSelected(skill)}
                        className="relative group flex flex-col items-center"
                      >
                        {/* Interactive Orb */}
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center relative transition-all duration-300"
                          style={{
                            background: `radial-gradient(circle at 35% 35%, ${color}44, transparent 80%), rgba(6,21,13,0.95)`,
                            border: `2px solid ${isSelected ? "#00ff88" : color + "55"}`,
                            boxShadow: isSelected
                              ? `0 0 22px ${color}, inset 0 0 10px ${color}`
                              : `0 0 10px ${color}22`,
                            transform: isSelected ? "scale(1.15)" : "scale(1)",
                            animation: `floatUp ${3.5 + (index % 3)}s ease-in-out infinite`,
                            animationDelay: `${index * 0.25}s`
                          }}
                        >
                          {/* Inner mini circular level gauge */}
                          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
                            <circle cx="22" cy="22" r="17" fill="none" stroke={`${color}11`} strokeWidth="1.5" />
                            <circle
                              cx="22" cy="22" r="17" fill="none"
                              stroke={color}
                              strokeWidth="1.5"
                              strokeDasharray={`${(skill.level / 100) * 106.8} 106.8`}
                              strokeLinecap="round"
                            />
                          </svg>

                          <span className="font-mono text-[8px] font-black" style={{ color }}>
                            {skill.level}%
                          </span>

                          {/* Orbit selector lock marker */}
                          {isSelected && (
                            <div className="absolute inset-[-4px] border border-emerald-400 rounded-full animate-ping" />
                          )}
                        </div>

                        {/* Name banner */}
                        <div
                          className={`mt-1.5 px-2 py-0.5 rounded font-mono text-[8px] tracking-wide uppercase transition-all whitespace-nowrap border ${
                            isSelected
                              ? "bg-emerald-950 border-emerald-400 text-emerald-300 font-extrabold shadow-[0_0_8px_rgba(0,255,136,0.2)]"
                              : "bg-black/80 border-transparent text-gray-400 group-hover:text-white"
                          }`}
                        >
                          {skill.name}
                        </div>
                      </button>
                    </HoverTilt>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Detailed Hologram Information Panel */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Hologram Details panel */}
            <div
              className="rounded-xl p-5 min-h-[340px] flex flex-col relative overflow-hidden"
              style={{
                background: "rgba(6,21,13,0.55)",
                backdropFilter: "blur(16px)",
                border: `1px solid ${selected ? categoryColor(selected.category) + "44" : "rgba(0,255,136,0.12)"}`,
                boxShadow: selected ? `0 0 20px ${categoryColor(selected.category)}22` : "none",
              }}
            >
              {/* Scanline on details */}
              <div
                className="absolute left-0 right-0 h-[1px] z-0 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, #00ff88, transparent)",
                  animation: "scanLine 4s linear infinite",
                  opacity: 0.3
                }}
              />

              {selected ? (
                <div className="space-y-5 flex-1 relative z-10">
                  
                  {/* Category / Name */}
                  <div>
                    <span
                      className="font-mono text-[8px] uppercase tracking-widest font-extrabold block mb-1"
                      style={{ color: categoryColor(selected.category) }}
                    >
                      // CATEGORY: {selected.category.toUpperCase()}
                    </span>
                    <h3 className="font-orbitron text-2xl font-black text-white uppercase tracking-wider text-glow-green">
                      {selected.name}
                    </h3>
                  </div>

                  {/* Profit bar */}
                  <div>
                    <div className="flex justify-between font-mono text-[9px] mb-2">
                      <span className="text-gray-400 uppercase tracking-widest">PRO LEVEL</span>
                      <span className="font-extrabold" style={{ color: categoryColor(selected.category) }}>
                        {selected.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden border border-emerald-900/30">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${selected.level}%`,
                          background: `linear-gradient(90deg, ${categoryColor(selected.category)}, #00ff88)`,
                          boxShadow: `0 0 10px ${categoryColor(selected.category)}`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Core Description */}
                  <div className="space-y-2">
                    <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block">
                      // SYSTEM_DESCRIPTION
                    </span>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      {selected.desc}
                    </p>
                  </div>

                  {/* Accent Badge */}
                  <div className="pt-4 mt-auto">
                    <span
                      className="inline-block font-mono text-[8px] uppercase tracking-widest px-3 py-1 rounded border font-extrabold"
                      style={{
                        color: categoryColor(selected.category),
                        borderColor: `${categoryColor(selected.category)}44`,
                        background: `${categoryColor(selected.category)}11`,
                      }}
                    >
                      {selected.category} DOMAIN ACTIVE
                    </span>
                  </div>

                </div>
              ) : (
                <div className="flex flex-col items-center justify-center flex-1 text-center py-12">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-500/30 flex items-center justify-center mb-4 animate-spin" style={{ animationDuration: "8s" }}>
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                    SYSTEM STANDBY
                  </p>
                  <p className="font-mono text-[8px] text-gray-600 mt-1">
                    Select a node constellation orb to hydrate intelligence
                  </p>
                </div>
              )}
            </div>

            {/* Constellation metrics statistics */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(6,21,13,0.45)",
                border: "1px solid rgba(0,255,136,0.1)",
              }}
            >
              <span className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest block mb-3">
                // COMPILATION_METRICS
              </span>
              <div className="grid grid-cols-2 gap-3">
                {CATEGORIES.filter((c) => c.id !== "all").map((cat) => {
                  const count = skills.filter((s) => s.category === cat.id).length;
                  return (
                    <div key={cat.id} className="flex justify-between items-center border-b border-emerald-950/20 pb-1.5">
                      <span className="font-mono text-[8px] text-gray-500 uppercase">{cat.label}</span>
                      <span className="font-mono text-[9px] font-extrabold" style={{ color: cat.color }}>
                        {count} NODES
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </div>
  );
}
