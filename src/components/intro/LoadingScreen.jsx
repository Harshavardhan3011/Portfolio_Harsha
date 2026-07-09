import React, { useState, useEffect } from "react";
import MotionWrapper from "../animation/MotionWrapper";

const STEPS = [
  "Initializing Zoro World...",
  "Loading Assets...",
  "Loading Profile...",
  "Loading Skill Matrix...",
  "Loading Game Arena...",
  "Loading Project Missions...",
  "Preparing Resume Scanner...",
  "Rendering Cyber World...",
  "Finalizing Experience... 👀🎀"
];

export default function LoadingScreen({ onFinish, onSkip }) {
  const [progress, setProgress] = useState(0);
  const [textIdx, setTextIdx] = useState(0);

  // Loading progress animation over ~10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 600); // Small pause at 100%
          return 100;
        }
        // Increment progress naturally
        const remaining = 100 - prev;
        const speed = Math.max(1, Math.floor(remaining * 0.08));
        const increment = Math.min(speed, Math.floor(Math.random() * 4) + 1);
        return prev + increment;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onFinish]);

  // Cycle texts matching the progress percentage
  useEffect(() => {
    const idx = Math.min(Math.floor((progress / 100) * STEPS.length), STEPS.length - 1);
    setTextIdx(idx);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[300] bg-[#020403] text-white flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Green aura backlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />

      {/* Grid line overlay */}
      <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

      {/* Absolute slash line overlay */}
      <div
        className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent pointer-events-none"
        style={{
          transform: "rotate(-15deg)",
          boxShadow: "0 0 10px #00ff88",
          opacity: 0.15
        }}
      />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center space-y-8">
        {/* Futuristic Swordsman HUD logo */}
        <MotionWrapper delay={0.1} yOffset={20}>
          <div className="text-center space-y-2">
            <div className="inline-block border border-emerald-500/30 px-3 py-1 rounded bg-emerald-950/20">
              <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-widest font-black">
                ⚔️ ZORO CORE SYSTEM ⚔️
              </span>
            </div>
            <h2 className="font-orbitron text-3xl font-black tracking-widest text-glow-green text-emerald-400 mt-2">
              HARSHAVARDHAN
            </h2>
            <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
              PORTFOLIO PROTOCOL V2 // 👀🎀
            </div>
          </div>
        </MotionWrapper>

        {/* Loading display */}
        <div className="w-full space-y-3">
          {/* Percentage */}
          <div className="flex justify-between items-end font-mono text-[10px]">
            <span className="text-emerald-500 font-bold uppercase tracking-wider animate-pulse">
              &gt; {STEPS[textIdx]}
            </span>
            <span className="text-emerald-400 font-black text-xs text-glow-green">
              {progress}%
            </span>
          </div>

          {/* Bar */}
          <div className="h-2 w-full bg-black/60 rounded border border-emerald-950/50 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-150 ease-out"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 10px #00ff88"
              }}
            />
          </div>
        </div>

        {/* Loading indicators */}
        <div className="flex justify-center space-x-6 text-[8px] font-mono text-gray-500 uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            VITE COMPILER
          </span>
          <span>THREE.JS SECURE</span>
          <span>SYSTEM ACTIVE</span>
        </div>

        {/* Skip controls */}
        <button
          onClick={onSkip}
          className="font-mono text-[9px] text-gray-600 hover:text-emerald-400 uppercase tracking-widest border border-transparent hover:border-emerald-500/25 px-4 py-1.5 rounded transition bg-transparent duration-300"
        >
          [ SKIP INTRO ]
        </button>
      </div>
    </div>
  );
}
