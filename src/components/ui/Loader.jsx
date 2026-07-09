import React, { useState, useEffect } from "react";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);
  const [statusText, setStatusText] = useState("Initializing Harsha.dev");
  const triggerUnlock = usePortfolioStore((state) => state.triggerUnlock);

  const statuses = [
    "Initializing Harsha.dev",
    "Loading Skills Galaxy",
    "Loading Combat Missions",
    "Rendering Cyber World",
    "Compiling Emerald Swordsman Aura"
  ];

  useEffect(() => {
    // Status text cycler
    let statusIdx = 0;
    const textInterval = setInterval(() => {
      statusIdx = (statusIdx + 1) % statuses.length;
      setStatusText(statuses[statusIdx]);
    }, 600);

    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => setFade(true), 500);
          setTimeout(() => {
            onFinish();
            // Unlock gamified boot achievement
            triggerUnlock("system_boot");
          }, 1200);
          return 100;
        }
        const step = Math.floor(Math.random() * 9) + 5;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onFinish, triggerUnlock]);

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#030712] overflow-hidden select-none transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Zoro-sword slash line swipe animation (glowing slash sweep) */}
      <div className="absolute w-[180%] h-[20px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_#10b981] rotate-[-35deg] pointer-events-none animate-[slashSweep_2.2s_infinite_linear]" />

      {/* Cyber Grid backdrop */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          transform: "perspective(400px) rotateX(55deg) translateY(-20%) scale(1.6)",
          transformOrigin: "top"
        }}
      />

      <div className="text-center z-10 px-6">
        <h1 className="font-mono text-3xl md:text-5xl font-extrabold tracking-[0.2em] text-white drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]">
          HARSHA<span className="text-emerald-400">VARDHAN</span>
        </h1>
        <p className="mt-2 text-[9px] md:text-xs font-mono uppercase tracking-[0.4em] text-emerald-600">
          Full Stack Developer & Product Designer
        </p>

        {/* Loading Progress Frame */}
        <div className="mt-12 mx-auto w-60 md:w-72 h-1 bg-emerald-950/60 rounded-full border border-emerald-500/20 overflow-hidden relative">
          <div
            className="h-full bg-emerald-400 shadow-[0_0_10px_#10b981] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Running logger log */}
        <div className="mt-4 font-mono text-[9px] text-emerald-500 h-6">
          &gt; {statusText}... <span className="font-bold">{progress}%</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slashSweep {
          0% { transform: translate(-100vw, -100vh) rotate(-35deg); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translate(100vw, 100vh) rotate(-35deg); opacity: 0; }
        }
      `}} />
    </div>
  );
}
