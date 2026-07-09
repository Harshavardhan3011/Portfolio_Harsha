// src/components/ui/SafeMedia.jsx
// Safe media component — never shows broken image icons.
// Detects type from extension, shows gradient fallback on error.
import React, { useState } from "react";

const VIDEO_EXTS = [".mp4", ".webm", ".ogg", ".mov"];
const IMAGE_EXTS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif"];

function getMediaType(src) {
  if (!src) return "unknown";
  const lower = src.toLowerCase().split("?")[0];
  if (VIDEO_EXTS.some((ext) => lower.endsWith(ext))) return "video";
  if (IMAGE_EXTS.some((ext) => lower.endsWith(ext))) return "image";
  return "image"; // default
}

function FallbackUI({ className, style, label }) {
  return (
    <div
      className={`flex items-center justify-center ${className || ""}`}
      style={{
        background: "linear-gradient(135deg, rgba(0,255,136,0.05), rgba(0,0,0,0.9))",
        border: "1px solid rgba(0,255,136,0.15)",
        ...style,
      }}
    >
      {label && (
        <span className="font-mono text-[8px] text-emerald-600 uppercase tracking-widest opacity-60">
          {label}
        </span>
      )}
    </div>
  );
}

export default function SafeMedia({
  src,
  fallback,
  alt = "",
  className = "",
  style = {},
  label,
  // Video options
  autoPlay = false,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
  poster,
  // Image options
  loading = "lazy",
  objectFit = "cover",
}) {
  const [srcError, setSrcError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  const effectiveSrc = !srcError ? src : fallback;
  const mediaType = getMediaType(effectiveSrc);

  // Both src and fallback failed
  if ((srcError && !fallback) || (srcError && fallbackError)) {
    return <FallbackUI className={className} style={style} label={label} />;
  }

  const handleError = () => {
    if (!srcError) {
      setSrcError(true);
    } else {
      setFallbackError(true);
    }
  };

  if (mediaType === "video") {
    return (
      <video
        src={effectiveSrc}
        className={className}
        style={{ objectFit, ...style }}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        controls={controls}
        poster={poster}
        preload="metadata"
        onError={handleError}
      />
    );
  }

  return (
    <img
      src={effectiveSrc}
      alt={alt}
      className={className}
      style={{ objectFit, ...style }}
      loading={loading}
      decoding="async"
      onError={handleError}
    />
  );
}
