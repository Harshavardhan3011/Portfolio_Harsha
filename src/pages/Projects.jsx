import React, { useState } from "react";
import { projects } from "../data/projects";
import MotionWrapper from "../components/animation/MotionWrapper";
import HoverTilt from "../components/interactions/HoverTilt";
import NeonButton from "../components/ui/NeonButton";
import { zoroGifs } from "../data/mediaAssets";

/* ── Project detail modal ─────────────────────── */
function ProjectModal({ project: p, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);

  if (!p) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.93)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: "rgba(6,21,13,0.97)",
          border: `1px solid ${p.accentColor}44`,
          boxShadow: `0 0 60px ${p.accentColor}22`,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Scan line */}
        <div
          className="absolute left-0 right-0 h-[1px] pointer-events-none z-10"
          style={{
            background: `linear-gradient(90deg, transparent, ${p.accentColor}, transparent)`,
            animation: "scanLine 3s linear infinite",
            opacity: 0.4,
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded border transition hover:bg-white/10"
          style={{ color: p.accentColor, borderColor: `${p.accentColor}33` }}
        >
          [×] CLOSE
        </button>

        {/* Image carousel */}
        {p.images?.length > 0 && (
          <div className="relative h-48 md:h-64 bg-black rounded-t-2xl overflow-hidden">
            <img src={p.images[imgIdx]} alt={p.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06150D] via-transparent to-transparent" />
            {p.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {p.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className="w-1.5 h-1.5 rounded-full transition-colors"
                    style={{ background: i === imgIdx ? p.accentColor : "rgba(255,255,255,0.3)" }}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Info */}
        <div className="p-6 space-y-5">
          {/* Status row */}
          <div className="flex flex-wrap gap-2">
            {p.featured && <span className="font-mono text-[7px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500 text-black">🔥 Featured</span>}
            <span className="font-mono text-[7px] uppercase px-2 py-0.5 rounded border" style={{ color: p.accentColor, borderColor: `${p.accentColor}44`, background: `${p.accentColor}11` }}>✅ {p.status}</span>
            <span className="font-mono text-[7px] text-gray-500 ml-auto">{p.type} · {p.year}</span>
          </div>

          <h2 className="font-orbitron text-xl md:text-2xl font-black text-white">
            {p.emoji} {p.title}
          </h2>
          <p className="text-gray-300 text-sm font-sans leading-relaxed">{p.desc}</p>

          {/* Features */}
          {p.features?.length > 0 && (
            <div>
              <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-2">// KEY_FEATURES</span>
              <ul className="space-y-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 font-mono text-[10px] text-gray-300">
                    <span style={{ color: p.accentColor }}>▶</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech */}
          <div>
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest block mb-2">// ⚙️ TECH_STACK</span>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map(t => (
                <span key={t} className="font-mono text-[8px] px-2 py-0.5 rounded" style={{ color: p.accentColor, background: `${p.accentColor}11`, border: `1px solid ${p.accentColor}33` }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {p.link ? (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <NeonButton variant="primary">🌐 Live Demo</NeonButton>
              </a>
            ) : (
              <NeonButton variant="secondary" disabled>🔒 Coming Soon</NeonButton>
            )}
            {p.github ? (
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <NeonButton variant="secondary">🧑‍💻 GitHub</NeonButton>
              </a>
            ) : (
              <NeonButton variant="secondary">📁 Private Repo</NeonButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Single Mission Card ──────────────────────── */
function MissionCard({ project: p, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <HoverTilt>
      <div
        className="mission-card relative rounded-2xl overflow-hidden cursor-pointer"
        style={{
          background: "rgba(6,21,13,0.55)",
          border: `1px solid ${hovered ? p.accentColor + "66" : p.accentColor + "22"}`,
          backdropFilter: "blur(14px)",
          boxShadow: hovered ? `0 0 25px ${p.accentColor}33` : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onClick(p)}
      >
        {/* Image section */}
        <div className="relative h-40 overflow-hidden bg-black">
          {p.images?.[0] ? (
            <img
              src={p.images[0]}
              alt={p.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center`}>
              <span className="text-5xl opacity-30">{p.emoji}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Status badge */}
          <div className="absolute top-2 left-2 flex gap-1.5 flex-wrap">
            {p.featured && (
              <span className="font-mono text-[7px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500 text-black">
                🔥 Featured
              </span>
            )}
            <span
              className="font-mono text-[7px] uppercase px-2 py-0.5 rounded font-bold"
              style={{ color: p.accentColor, background: "rgba(0,0,0,0.85)", border: `1px solid ${p.accentColor}55` }}
            >
              ✅ {p.status}
            </span>
          </div>

          {/* Year */}
          <div className="absolute top-2 right-2 font-mono text-[7px] text-gray-400">{p.year}</div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div>
            <span className="font-mono text-[7px] uppercase tracking-widest" style={{ color: p.accentColor }}>
              {p.emoji} {p.type}
            </span>
            <h3 className={`font-orbitron text-sm font-black mt-0.5 transition-colors duration-300 ${hovered ? "" : "text-white"}`}
              style={hovered ? { color: p.accentColor } : {}}>
              {p.title}
            </h3>
          </div>

          <p className="text-gray-400 text-[10px] font-sans leading-relaxed line-clamp-2">{p.shortDesc}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1">
            {p.tech.slice(0, 3).map(t => (
              <span key={t} className="font-mono text-[7px] px-1.5 py-0.5 rounded"
                style={{ color: p.accentColor, background: `${p.accentColor}11`, border: `1px solid ${p.accentColor}33` }}>
                {t}
              </span>
            ))}
            {p.tech.length > 3 && <span className="font-mono text-[7px] text-gray-600">+{p.tech.length - 3}</span>}
          </div>

          <div className="pt-2 border-t border-white/5 flex justify-between items-center">
            <span className="font-mono text-[8px] uppercase tracking-widest font-extrabold" style={{ color: p.accentColor }}>
              {hovered ? "[ OPEN_MISSION ]" : "View Details"}
            </span>
            <span className="text-gray-600 text-xs">→</span>
          </div>
        </div>

        {/* Corner brackets on hover */}
        {hovered && (
          <>
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: p.accentColor }} />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: p.accentColor }} />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: p.accentColor }} />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: p.accentColor }} />
          </>
        )}
      </div>
    </HoverTilt>
  );
}

/* ── Filter tabs ──────────────────────────────── */
const FILTERS = ["All", "Web App", "Portfolio", "3D Portfolio", "Form / UI", "Tool"];

/* ── Main Projects Page ───────────────────────── */
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = filter === "All" ? projects : projects.filter(p => p.type === filter);
  const featured = projects.find(p => p.slug === "3d-portfolio");
  const others = filtered.filter(p => p.slug !== "3d-portfolio");

  return (
    <div
      className="relative min-h-screen text-white pb-24 overflow-x-hidden"
      style={{ background: "linear-gradient(180deg, #020403 0%, #06150D 50%, #020403 100%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <img src={zoroGifs[2]} alt="" aria-hidden className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020403] via-[#020403]/80 to-[#020403]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20">

        {/* Header */}
        <MotionWrapper delay={0.1} yOffset={20}>
          <div className="text-center mb-12">
            <span className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest block mb-2">// PROJECT_MISSIONS_DATABASE</span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-black">
              <span className="text-white">PROJECT</span>{" "}
              <span className="text-emerald-400">MISSIONS</span>
            </h1>
            <p className="text-gray-500 font-mono text-xs mt-3 uppercase tracking-widest">
              🚀 5 Projects · React · Tailwind · Python · Three.js
            </p>
          </div>
        </MotionWrapper>

        {/* Featured: 3D Portfolio — large card */}
        {featured && filter === "All" && (
          <MotionWrapper delay={0.15} yOffset={20}>
            <div className="mb-10">
              <p className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest mb-4">// 🔥 FEATURED_MISSION</p>
              <div
                className="mission-card relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: "rgba(6,21,13,0.6)",
                  border: "1px solid rgba(0,255,136,0.35)",
                  boxShadow: "0 0 40px rgba(0,255,136,0.1)",
                }}
                onClick={() => setSelectedProject(featured)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-56 lg:h-auto overflow-hidden">
                    <img src={featured.images[0]} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#06150D] lg:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06150D] to-transparent lg:hidden" />
                  </div>
                  {/* Content */}
                  <div className="p-7 md:p-9 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="font-mono text-[7px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500 text-black">🔥 Featured</span>
                      <span className="font-mono text-[7px] uppercase px-2 py-0.5 rounded border border-emerald-400/30 text-emerald-400 bg-emerald-950/20">⭐ Latest</span>
                      <span className="font-mono text-[7px] text-gray-500 ml-auto">2025</span>
                    </div>
                    <h2 className="font-orbitron text-xl md:text-2xl font-black text-white">
                      🌐 {featured.title}
                    </h2>
                    <p className="text-gray-300 text-sm font-sans leading-relaxed">{featured.shortDesc}</p>
                    <div className="flex flex-wrap gap-1">
                      {featured.tech.map(t => (
                        <span key={t} className="font-mono text-[7px] px-1.5 py-0.5 rounded text-emerald-400 bg-emerald-950/20 border border-emerald-500/20">{t}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a href={featured.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <NeonButton variant="primary">🌐 Live Demo</NeonButton>
                      </a>
                    <div onClick={() => setSelectedProject(featured)} className="cursor-pointer">
                      <NeonButton variant="secondary">🧩 View Details</NeonButton>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        )}

        {/* Filter tabs */}
        <MotionWrapper delay={0.2} yOffset={15}>
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="font-mono text-[8px] uppercase tracking-widest px-3 py-1.5 rounded border transition-all duration-300"
                style={filter === f
                  ? { background: "#00ff88", color: "#000", borderColor: "#00ff88", boxShadow: "0 0 12px rgba(0,255,136,0.5)", fontWeight: 900 }
                  : { background: "transparent", color: "#6b7280", borderColor: "rgba(0,255,136,0.12)" }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </MotionWrapper>

        {/* Mission cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(filter === "All" ? others : filtered).map((p, i) => (
            <MotionWrapper key={p.slug} delay={0.08 * i} yOffset={20}>
              <MissionCard project={p} onClick={setSelectedProject} />
            </MotionWrapper>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 font-mono text-gray-600 text-sm">
            // NO_MISSIONS_FOUND for "{filter}"
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
