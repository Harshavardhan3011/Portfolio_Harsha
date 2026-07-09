import React from "react";
import { usePortfolioStore } from "../../store/usePortfolioStore";

export default function AchievementToast() {
  const toast = usePortfolioStore((state) => state.toast);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-[slideIn_0.4s_ease-out] select-none pointer-events-auto">
      <div className="flex items-center gap-3 bg-black/95 border border-emerald-500 rounded-xl p-4 shadow-[0_0_20px_rgba(16,185,129,0.4)] max-w-sm">
        <div className="text-3xl">{toast.icon || "⚔️"}</div>
        <div className="font-mono text-left">
          <span className="text-[7px] text-emerald-500 font-extrabold uppercase tracking-widest block">
            🏆 ACHIEVEMENT UNLOCKED!
          </span>
          <h4 className="text-[11px] font-extrabold text-white tracking-wide uppercase mt-0.5">
            {toast.title}
          </h4>
          <p className="text-[9px] text-gray-400 mt-0.5 leading-snug">
            {toast.desc}
          </p>
          <span className="inline-block mt-2 px-1.5 py-0.5 bg-emerald-500 text-black text-[8px] font-extrabold rounded">
            +{toast.xp} XP
          </span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}} />
    </div>
  );
}
