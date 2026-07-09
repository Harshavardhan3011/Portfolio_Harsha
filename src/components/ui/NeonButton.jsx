import React from "react";

export default function NeonButton({ children, className = "", variant = "primary", onClick, ...props }) {
  const baseStyle = "relative inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg border transition-all duration-300 active:scale-95 font-bold overflow-hidden group";
  
  const variants = {
    primary: "bg-emerald-500 border-emerald-400 text-black hover:bg-black hover:text-emerald-400 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]",
    secondary: "bg-transparent border-emerald-500/60 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-950/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]",
    danger: "bg-red-500 border-red-400 text-black hover:bg-black hover:text-red-400 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Glow highlight line inside hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <span className="relative z-10">{children}</span>
    </button>
  );
}
