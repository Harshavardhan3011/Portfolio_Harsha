import React, { useState, useEffect } from "react";
import { introShowcaseAssets } from "../../data/mediaAssets";

export default function IntroBackgroundCycler({ activeIdx }) {
  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden select-none pointer-events-none">
      {introShowcaseAssets.map((asset, idx) => {
        const isActive = idx === activeIdx;
        return (
          <div
            key={asset.name}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: isActive ? 0.22 : 0,
              zIndex: isActive ? 1 : 0
            }}
          >
            <img
              src={asset.src}
              alt=""
              aria-hidden
              className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
            <div className="absolute inset-0 bg-radial-glow opacity-30" />
          </div>
        );
      })}
    </div>
  );
}
