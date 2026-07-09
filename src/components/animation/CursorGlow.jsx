import React, { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports touch
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
    <div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400/50 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out shadow-[0_0_15px_rgba(16,185,129,0.3)] bg-emerald-500/5"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(1.0)`,
      }}
    />
  );
}
