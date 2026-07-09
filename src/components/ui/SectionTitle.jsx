import React from "react";

export default function SectionTitle({ title, subtitle, align = "center" }) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };

  return (
    <div className={`flex flex-col mb-10 ${alignmentClasses[align] || alignmentClasses.center}`}>
      <span className="inline-block border border-emerald-500 text-emerald-400 font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-[0_0_10px_rgba(16,185,129,0.15)] bg-emerald-950/20">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
        {title}
      </h2>
      <div className="mt-3 w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full" />
    </div>
  );
}
