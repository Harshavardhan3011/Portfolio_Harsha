// src/layout/Layout-cards/Carousel.jsx
import React, { useEffect, useRef, useState } from "react";

export default function Carousel({ images = [], className = "" }) {
  const [index, setIndex] = useState(0);
  if (!images.length) return null;

  const wrap = (n) => (n + images.length) % images.length;
  const prev = () => setIndex((p) => wrap(p - 1));
  const next = () => setIndex((p) => wrap(p + 1));

  // Touch swipe
  const startX = useRef(null);
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 40) prev();
    if (diff < -40) next();
    startX.current = null;
  };

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`flex flex-col items-center my-4 ${className}`}>
      <div
        className="w-full flex justify-center mb-2 select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
      >
        <img
          src={images[index]}
          alt={`Screenshot ${index + 1} of ${images.length}`}
          className="rounded-lg shadow-lg w-[360px] h-[220px] object-cover border-2 border-green-200"
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          &lt;
        </button>
        <div className="flex gap-1" aria-label="carousel indicators">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-green-600" : "bg-green-200"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next image"
          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
