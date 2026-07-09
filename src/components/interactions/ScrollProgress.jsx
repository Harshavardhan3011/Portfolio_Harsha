import React, { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const st = h.scrollTop || document.body.scrollTop;
      const sh = h.scrollHeight || document.body.scrollHeight;
      const scrollPercent = (st / (sh - h.clientHeight)) * 100;
      setWidth(`${scrollPercent}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-emerald-950/20 z-[99] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-all duration-75"
        style={{ width: width }}
      />
    </div>
  );
}
