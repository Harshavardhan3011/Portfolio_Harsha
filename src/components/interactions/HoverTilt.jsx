import React, { useState, useRef } from "react";

export default function HoverTilt({ children, className = "", intensity = 15, ...props }) {
  const cardRef = useRef();
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotX = -((y - midY) / midY) * intensity;
    const rotY = ((x - midX) / midX) * intensity;

    setTransformStyle(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-200 ease-out select-none ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d"
      }}
      {...props}
    >
      {children}
    </div>
  );
}
