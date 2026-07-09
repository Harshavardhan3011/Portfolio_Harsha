import React, { useRef, useState, useEffect } from "react";

export default function VideoPreview({ src, poster, active = false, placeholderText = "Clip coming soon" }) {
  const videoRef = useRef();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    if (active && !error) {
      // Attempt to play
      videoRef.current.play().catch(() => {
        // Handle autoplay block or loading errors silently
      });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [active, error]);

  if (error || !src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-emerald-950/20 text-emerald-500 font-mono text-[9px] uppercase tracking-widest p-4 text-center">
        <span>[ {placeholderText} ]</span>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      playsInline
      loop
      className="w-full h-full object-cover transition-opacity duration-300"
      onError={() => setError(true)}
    />
  );
}
