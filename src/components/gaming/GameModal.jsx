import React, { useState, useRef, useEffect } from "react";

export default function GameModal({ game, onClose }) {
  const [clipIdx, setClipIdx] = useState(0);
  const videoRef = useRef();

  const borderColors = {
    battle: "#f97316",
    horror: "#ef4444",
    ghost: "#3b82f6",
  };
  const border = borderColors[game.accent] || "#00ff88";

  const clips = game.clips && game.clips.length > 0 ? game.clips : [];
  const currentMedia = clips[clipIdx] || game.clip || game.image;
  const isVideo = currentMedia && (currentMedia.endsWith(".mp4") || currentMedia.endsWith(".webm"));

  useEffect(() => {
    if (videoRef.current && isVideo) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [clipIdx, currentMedia, isVideo]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: "rgba(6,21,13,0.95)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${border}44`,
          boxShadow: `0 0 60px ${border}22, 0 0 120px ${border}11`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scan line */}
        <div
          className="absolute left-0 right-0 h-[1px] pointer-events-none z-10"
          style={{
            background: `linear-gradient(90deg, transparent, ${border}, transparent)`,
            animation: "scanLine 3s linear infinite",
            opacity: 0.5,
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded border transition-colors hover:bg-white/10"
          style={{ color: border, borderColor: `${border}33` }}
        >
          [×] CLOSE
        </button>

        {/* Media player */}
        <div className="relative h-56 md:h-72 bg-black rounded-t-2xl overflow-hidden">
          {currentMedia ? (
            isVideo ? (
              <video
                ref={videoRef}
                src={currentMedia}
                muted playsInline loop
                className="w-full h-full object-cover"
              />
            ) : (
              <img src={currentMedia} alt={game.title} className="w-full h-full object-cover" />
            )
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${game.bgGradient || "from-emerald-950 to-black"} flex items-center justify-center`}
            >
              <span className="text-6xl opacity-30">
                {game.accent === "battle" ? "🔥" : game.accent === "horror" ? "👻" : "🎮"}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06150D] via-transparent to-transparent" />
        </div>

        {/* Clip selector thumbnails */}
        {clips.length > 1 && (
          <div className="flex gap-2 px-6 pt-4 overflow-x-auto pb-2">
            {clips.map((clip, i) => {
              const isVid = clip.endsWith(".mp4") || clip.endsWith(".webm");
              return (
                <button
                  key={i}
                  onClick={() => setClipIdx(i)}
                  className="flex-shrink-0 w-16 h-10 rounded overflow-hidden transition-all duration-200"
                  style={{
                    border: `2px solid ${i === clipIdx ? border : "rgba(255,255,255,0.1)"}`,
                    boxShadow: i === clipIdx ? `0 0 8px ${border}66` : "none",
                  }}
                >
                  {isVid ? (
                    <video src={clip} muted playsInline className="w-full h-full object-cover opacity-70" />
                  ) : (
                    <img src={clip} alt="" className="w-full h-full object-cover opacity-70" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Info */}
        <div className="p-6 space-y-5">
          <div>
            <span
              className="font-mono text-[8px] uppercase tracking-widest font-extrabold block mb-1"
              style={{ color: border }}
            >
              // ZONE: {game.category} • STATUS: {game.status}
            </span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white uppercase">
              {game.title}
            </h2>
          </div>

          <div>
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-1">
              // ABOUT
            </span>
            <p className="text-gray-300 text-sm font-sans leading-relaxed">
              {game.description}
            </p>
          </div>

          {game.whyILike && (
            <div>
              <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-1">
                // WHY_I_PLAY
              </span>
              <p className="text-gray-400 text-sm font-sans leading-relaxed italic">
                "{game.whyILike}"
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {(game.tags || []).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[8px] uppercase px-2 py-1 rounded"
                style={{
                  color: border,
                  background: `${border}11`,
                  border: `1px solid ${border}33`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
