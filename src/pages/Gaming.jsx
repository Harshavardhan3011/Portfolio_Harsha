import React, { useState, useEffect } from "react";
import GamingArena from "../components/gaming/GamingArena";
import SceneCanvas from "../components/3d/SceneCanvas";
import ParticleField from "../components/3d/ParticleField";
import { zoroGifs, animeGifs, freefireGifs } from "../data/mediaAssets";
import MotionWrapper from "../components/animation/MotionWrapper";

export default function Gaming() {
  const [bgIdx, setBgIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setBgIdx((i) => (i + 1) % zoroGifs.length), 10000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="relative min-h-[90vh] text-white pb-20 overflow-hidden"
      style={{ background: "#020403" }}
    >

      {/* ── Background: Zoro GIF (heavy dark overlay) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          key={bgIdx}
          src={zoroGifs[bgIdx]}
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-10"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020403]/80 via-[#020403]/60 to-[#020403]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020403]/70 via-transparent to-[#020403]/70" />
      </div>

      {/* ── Particle field ── */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <SceneCanvas cameraPosition={[0, 0, 5]}>
          <ParticleField count={140} />
        </SceneCanvas>
      </div>

      {/* ── CRT scanlines ── */}
      <div className="absolute inset-0 scanlines opacity-[0.025] z-0 pointer-events-none" />

      {/* ── Header ── */}
      <div className="relative z-10 pt-16 px-6 max-w-6xl mx-auto">
        <MotionWrapper delay={0.1} yOffset={20}>
          <div className="text-center mb-12">
            <span className="font-mono text-[8px] text-orange-500 uppercase tracking-widest border border-orange-500/20 px-4 py-1.5 rounded inline-block bg-orange-950/10 mb-4">
              // GAMING_ARENA_MODULE • SECTOR_7
            </span>
            <h1 className="font-orbitron text-5xl md:text-7xl font-black tracking-tight leading-none">
              <span
                className="text-transparent bg-clip-text block"
                style={{
                  backgroundImage: "linear-gradient(135deg, #f97316, #fbbf24, #f97316)",
                }}
              >
                GAMING
              </span>
              <span className="text-emerald-400">ARENA</span>
            </h1>
            <p className="text-gray-500 font-mono text-xs mt-4 uppercase tracking-widest">
              Battle Royale&nbsp;•&nbsp;Horror&nbsp;•&nbsp;Ghost Survival&nbsp;•&nbsp;Anime Gaming Vibe
            </p>
          </div>
        </MotionWrapper>

        {/* ── Anime GIF accent strip ── */}
        <div className="relative overflow-hidden rounded-xl mb-10 h-20"
          style={{ border: "1px solid rgba(0,255,136,0.1)" }}
        >
          <div className="flex gap-0 h-full">
            {animeGifs.map((gif, i) => (
              <img key={i} src={gif} alt="" className="h-full flex-1 object-cover opacity-20" />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020403] via-transparent to-[#020403]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest">
              // ANIME_GAMER_VIBE_ACTIVE
            </span>
          </div>
        </div>

        {/* ── Arena content ── */}
        <MotionWrapper delay={0.2} yOffset={20}>
          <GamingArena />
        </MotionWrapper>
      </div>
    </div>
  );
}
