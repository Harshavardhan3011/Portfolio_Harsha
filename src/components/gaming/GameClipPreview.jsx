import React from "react";
import VideoPreview from "../ui/VideoPreview";

export default function GameClipPreview({ src, poster, hovered = false, placeholderText }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-lg">
      <VideoPreview
        src={src}
        poster={poster}
        active={hovered}
        placeholderText={placeholderText}
      />
      
      {/* Hacker CRT Monitor scanline overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 3px, 3px 100%"
        }}
      />
    </div>
  );
}
