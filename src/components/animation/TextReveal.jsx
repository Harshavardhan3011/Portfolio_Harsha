import React, { useState, useEffect } from "react";

export default function TextReveal({ text = "", speed = 40, delay = 0, className = "" }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timer;
    const startTyping = () => {
      let currentIdx = 0;
      timer = setInterval(() => {
        if (currentIdx < text.length) {
          setDisplayText((prev) => prev + text.charAt(currentIdx));
          currentIdx++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    };

    const delayTimer = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [text, speed, delay]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      {displayText}
      <span className="w-1.5 h-3.5 bg-emerald-400 ml-1 animate-pulse" />
    </span>
  );
}
