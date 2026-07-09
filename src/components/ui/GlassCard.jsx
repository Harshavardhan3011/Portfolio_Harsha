import React from "react";

export default function GlassCard({ children, className = "", hoverable = true, ...props }) {
  return (
    <div
      className={`relative overflow-hidden bg-black/40 backdrop-blur-xl border border-emerald-950/60 rounded-2xl p-6 transition-all duration-300 ${
        hoverable ? "hover:border-emerald-500/50 hover:bg-black/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:-translate-y-1" : ""
      } ${className}`}
      {...props}
    >
      {/* Decorative inner neon ambient blur blob */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Render children */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
