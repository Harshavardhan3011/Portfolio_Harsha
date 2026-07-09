import React, { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkTouch = () => {
      const mobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(mobile);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer soft aura */}
      <div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-emerald-400/30 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-emerald-500/5"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
      {/* Inner sharp laser pointer */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(0,255,102,1)]"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
    </>
  );
}
