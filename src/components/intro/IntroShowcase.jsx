import React, { useState, useEffect } from "react";
import MotionWrapper from "../animation/MotionWrapper";
import IntroBackgroundCycler from "./IntroBackgroundCycler";
import NeonButton from "../ui/NeonButton";
import { introShowcaseAssets } from "../../data/mediaAssets";
import { useAudioController } from "../../hooks/useAudioController";

export default function IntroShowcase({ onEnter, onSkip }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const { soundOn, toggle: toggleSound } = useAudioController();

  // Cycle background asset every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % introShowcaseAssets.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[290] bg-[#020403] text-white flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Dynamic asset cycler behind buttons */}
      <IntroBackgroundCycler activeIdx={activeIdx} />

      {/* Cyber Grid Lines overlay */}
      <div className="absolute inset-0 scanlines opacity-5 pointer-events-none z-10" />

      {/* Frame border */}
      <div className="absolute inset-4 border border-emerald-950/20 rounded-2xl pointer-events-none z-20" />

      {/* Foreground Showcase box */}
      <div className="relative z-20 max-w-xl w-full text-center space-y-8 p-8 rounded-2xl glass border border-emerald-500/10">
        
        {/* Step Info HUD */}
        <div className="flex justify-between items-center font-mono text-[8px] text-emerald-500/70 border-b border-emerald-500/10 pb-4">
          <span>// CORE_SHOWCASE_LOADED</span>
          <span>CYCLE: {introShowcaseAssets[activeIdx].name.toUpperCase()}</span>
          <span>STATUS: STANDBY</span>
        </div>

        {/* Title Group */}
        <div className="space-y-3">
          <MotionWrapper delay={0.1} yOffset={20}>
            <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-[0.3em] block">
              ⚔️ WELCOME TO THE CYBER PROTOCOL ⚔️
            </span>
          </MotionWrapper>

          <MotionWrapper delay={0.2} yOffset={20}>
            <h1 className="font-orbitron text-4xl md:text-5xl font-black tracking-tight text-white leading-none">
              HARSHA <span className="text-emerald-400 text-glow-green">ZORO</span> WORLD
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.3} yOffset={20}>
            <p className="font-mono text-[10px] md:text-xs text-glow-green text-emerald-400 uppercase tracking-widest">
              Developer × Gamer × Anime Energy
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.4} yOffset={15}>
            <p className="text-gray-400 text-xs font-sans max-w-md mx-auto leading-relaxed">
              An immersive portal designed to showcase high-fidelity interfaces, gaming profiles, 
              interactive matrices, and professional software architectures.
            </p>
          </MotionWrapper>
        </div>

        {/* Button Controls */}
        <MotionWrapper delay={0.5} yOffset={15} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {/* Primary Action Button */}
            <div onClick={onEnter} className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto font-mono text-[10px] uppercase tracking-widest font-black px-8 py-3.5 rounded-lg transition-all duration-300 relative overflow-hidden group shadow-[0_0_25px_rgba(0,255,136,0.35)] hover:shadow-[0_0_40px_rgba(0,255,136,0.6)]"
                style={{
                  background: "linear-gradient(135deg, #00ff88, #39ff14)",
                  color: "#000"
                }}
              >
                ⚔️ ENTER ZORO WORLD
              </button>
            </div>

            <div onClick={onSkip} className="w-full sm:w-auto">
              <NeonButton variant="secondary" className="w-full sm:w-auto text-[10px]">
                ⏩ SKIP INTRO
              </NeonButton>
            </div>
          </div>

          <div className="flex justify-center gap-6 pt-2 text-[9px] font-mono">
            <button
              onClick={toggleSound}
              className="text-gray-500 hover:text-emerald-400 uppercase tracking-widest transition"
            >
              AUDIO: <span className={soundOn ? "text-emerald-400 font-bold" : "text-red-500"}>
                {soundOn ? "ENABLED" : "MUTED"}
              </span>
            </button>
            <span className="text-gray-700">|</span>
            <span className="text-gray-500 uppercase tracking-widest">👀🎀 SECURE PROTOCOL</span>
          </div>
        </MotionWrapper>

        {/* System parameters indicator */}
        <div className="grid grid-cols-5 gap-2 border-t border-emerald-500/10 pt-4 text-[7px] font-mono text-gray-500">
          <div>
            <div className="text-emerald-500 font-black">SYS.OK</div>
            <div>WEBLISTEN</div>
          </div>
          <div>
            <div className="text-emerald-500 font-black">MERN.ON</div>
            <div>DATABASE</div>
          </div>
          <div>
            <div className="text-emerald-500 font-black">ZORO.ACT</div>
            <div>AURA MATRIX</div>
          </div>
          <div>
            <div className="text-emerald-500 font-black">THREE.GL</div>
            <div>3D BUFFER</div>
          </div>
          <div>
            <div className="text-emerald-500 font-black">AUDIO.ST</div>
            <div>PORTAL SOUND</div>
          </div>
        </div>

      </div>
    </div>
  );
}
