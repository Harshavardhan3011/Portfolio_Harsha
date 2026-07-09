import React, { useState, useRef, useEffect } from "react";
import { games } from "../../data/games";
import { freefireClips, freefireGifs, horrorClips } from "../../data/mediaAssets";
import GameFilters from "./GameFilters";
import GameModal from "./GameModal";
import HorrorFog from "./HorrorFog";
import BattleEnergyLines from "./BattleEnergyLines";
import { usePortfolioStore } from "../../store/usePortfolioStore";

// ── Single game card with real media ─────────────────────────────────────
function GameCard({ game, onClick }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef();
  const hasMedia = game.image || game.clip;

  // Play/pause clip on hover
  useEffect(() => {
    if (!videoRef.current) return;
    if (hovered && game.clip) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered, game.clip]);

  const borderColors = {
    battle: "#f97316",
    horror: "#ef4444",
    ghost: "#3b82f6",
  };
  const border = borderColors[game.accent] || "#00ff88";

  return (
    <div
      className={`relative cursor-pointer rounded-xl overflow-hidden group select-none transition-all duration-300 ${
        game.accent === "battle" ? "game-card-battle" : game.accent === "horror" ? "game-card-horror" : "game-card-ghost"
      } game-card`}
      style={{
        background: "rgba(6,21,13,0.55)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${border}${hovered ? "88" : "22"}`,
        boxShadow: hovered ? `0 0 24px ${border}44, 0 0 50px ${border}11` : "none",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(game)}
    >
      {/* Horror fog / battle lines */}
      {(game.accent === "horror" || game.accent === "ghost") && (
        <HorrorFog color={game.accent} />
      )}
      {game.accent === "battle" && <BattleEnergyLines active={hovered} />}

      {/* Media preview (GIF or MP4) */}
      <div className="relative h-40 bg-black overflow-hidden">
        {game.clip && game.clip.endsWith(".mp4") ? (
          <video
            ref={videoRef}
            src={game.clip}
            muted
            playsInline
            loop
            poster={game.image || undefined}
            className="w-full h-full object-cover opacity-75"
          />
        ) : game.image ? (
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Gradient placeholder if no media */
          <div
            className={`w-full h-full bg-gradient-to-br ${game.bgGradient || "from-emerald-950 to-black"} flex items-center justify-center`}
          >
            <span className="text-4xl opacity-40">
              {game.accent === "battle" ? "🔥" : game.accent === "horror" ? "👻" : "🎮"}
            </span>
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Status badge */}
        <div
          className="absolute top-2 right-2 font-mono text-[7px] uppercase tracking-widest px-2 py-0.5 rounded border font-extrabold z-10"
          style={{
            color: border,
            borderColor: `${border}55`,
            background: "rgba(0,0,0,0.8)",
          }}
        >
          {game.status}
        </div>

        {/* Category */}
        <div className="absolute bottom-2 left-2 font-mono text-[7px] text-gray-400 uppercase tracking-widest z-10">
          {game.category}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-orbitron text-sm font-black text-white uppercase tracking-wider truncate">
          {game.title}
        </h3>
        <p className="text-[9px] text-gray-400 font-sans leading-relaxed line-clamp-2">
          {game.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {(game.tags || []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[7px] uppercase px-1.5 py-0.5 rounded"
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

        <div className="pt-2 border-t border-white/5 flex justify-between items-center">
          <span
            className="font-mono text-[8px] uppercase tracking-widest font-extrabold"
            style={{ color: border }}
          >
            {hovered ? "[ OPEN INTEL ]" : "VIEW GAME"}
          </span>
          <span className="text-[7px] text-gray-600 font-mono">→</span>
        </div>
      </div>

      {/* Corner hologram decorators */}
      {hovered && (
        <>
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: border }} />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: border }} />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: border }} />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: border }} />
        </>
      )}
    </div>
  );
}

// ── Free Fire featured section ────────────────────────────────────────────
function FreefireSection({ onOpen }) {
  const [clipIdx, setClipIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setClipIdx((i) => (i + 1) % freefireClips.length), 8000);
    return () => clearInterval(t);
  }, []);

  const ffGame = games.find((g) => g.id === "freefire");

  return (
    <div className="relative rounded-2xl overflow-hidden mb-10"
      style={{
        border: "1px solid rgba(249,115,22,0.3)",
        background: "rgba(0,0,0,0.7)",
        boxShadow: "0 0 40px rgba(249,115,22,0.15)",
      }}
    >
      {/* Background video clip */}
      <div className="absolute inset-0 z-0">
        <video
          key={clipIdx}
          src={freefireClips[clipIdx]}
          autoPlay muted playsInline loop
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <BattleEnergyLines active />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
        {/* Left text */}
        <div className="space-y-4">
          <span className="font-mono text-[8px] text-orange-500 uppercase tracking-widest border border-orange-500/30 px-3 py-1 rounded inline-block bg-orange-950/20">
            // FEATURED_GAME: BATTLE_MODE
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black">
            <span className="text-orange-400">FREE</span>
            <span className="text-white"> FIRE</span>
          </h2>
          <p className="text-gray-300 text-sm font-sans leading-relaxed max-w-md">
            {ffGame?.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {["Battle Royale", "Squad Action", "Clutch Moments", "Fast Paced"].map((t) => (
              <span key={t} className="font-mono text-[8px] text-orange-400 border border-orange-500/30 px-2 py-1 rounded bg-orange-950/10 uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
          <button
            onClick={() => onOpen(ffGame)}
            className="font-orbitron text-xs font-black uppercase tracking-widest px-6 py-3 rounded-lg text-black transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f97316, #fbbf24)",
              boxShadow: "0 0 20px rgba(249,115,22,0.5)",
            }}
          >
            Watch My Clips →
          </button>
        </div>

        {/* Right: clip thumbnails */}
        <div className="grid grid-cols-3 gap-2">
          {freefireClips.slice(0, 6).map((clip, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              style={{ height: "80px", border: "1px solid rgba(249,115,22,0.2)" }}
              onClick={() => setClipIdx(i)}
            >
              <video
                src={clip}
                muted playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-orange-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main GamingArena ──────────────────────────────────────────────────────
export default function GamingArena() {
  const [filter, setFilter] = useState("all");
  const [selectedGame, setSelectedGame] = useState(null);
  const triggerUnlock = usePortfolioStore((s) => s.triggerUnlock);

  useEffect(() => {
    triggerUnlock("gaming_zone_unlock");
  }, [triggerUnlock]);

  const handleSelect = (game) => {
    setSelectedGame(game);
    if (game.accent === "horror" || game.accent === "ghost") triggerUnlock("horror_zone_explore");
    else if (game.accent === "battle") triggerUnlock("battle_mode_active");
  };

  const allFilters = ["all", "Free Fire", "Battle Royale", "Horror", "Ghost", "Survival", "Clips"];

  const filteredGames =
    filter === "all" ? games : games.filter((g) => g.category === filter);

  return (
    <div className="space-y-8">
      {/* Featured Free Fire */}
      <FreefireSection onOpen={handleSelect} />

      {/* Filter tabs */}
      <GameFilters active={filter} onChange={setFilter} options={allFilters} />

      {/* Game grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} onClick={handleSelect} />
        ))}
      </div>

      {/* Detail modal */}
      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </div>
  );
}
