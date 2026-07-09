import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { zoroGifs, animeGifs } from "../data/mediaAssets";
import MotionWrapper from "../components/animation/MotionWrapper";
import NeonButton from "../components/ui/NeonButton";
import HoverTilt from "../components/interactions/HoverTilt";
import { projects } from "../data/projects";

// Profile image from public/assets/ (not src import — works on Vercel)
const PROFILE_IMG = "/assets/profile/harsha.jpg";

/* ── Floating badge row ──────────────────────────────────────── */
const BADGES = [
  { icon: "💻", text: "React Developer" },
  { icon: "🎨", text: "UI/UX Designer" },
  { icon: "🎮", text: "Gamer Identity" },
  { icon: "⚡", text: "Tailwind CSS" },
  { icon: "🐍", text: "Python" },
  { icon: "✨", text: "3D Portfolio" },
];

/* ── Quick Identity Cards ────────────────────────────────────── */
const QUICK_CARDS = [
  { icon: "💻", title: "Developer Mode", desc: "React · Python · Full Stack", path: "/about", color: "#00ff88", border: "border-emerald-500/30" },
  { icon: "🧠", title: "Skill Matrix", desc: "18+ Skills · CS Core · Tools", path: "/skills", color: "#06b6d4", border: "border-cyan-500/30" },
  { icon: "🚀", title: "Project Missions", desc: "HRMS · 3D Portfolio · Apps", path: "/projects", color: "#a78bfa", border: "border-violet-500/30" },
  { icon: "🎮", title: "Gaming Arena", desc: "Free Fire · Horror · Ghost", path: "/gaming", color: "#f97316", border: "border-orange-500/30" },
  { icon: "📄", title: "Resume Scanner", desc: "Education · Skills · Download", path: "/resume", color: "#fbbf24", border: "border-yellow-500/30" },
];

/* ── Cyber Control Center ────────────────────────────────────── */
const DASHBOARD_ITEMS = [
  { icon: "👤", label: "Profile Loaded", status: "ACTIVE", color: "#00ff88" },
  { icon: "🧠", label: "Skill Matrix", status: "18 NODES", color: "#06b6d4" },
  { icon: "🚀", label: "Projects", status: "5 READY", color: "#a78bfa" },
  { icon: "🎮", label: "Gaming Arena", status: "ONLINE", color: "#f97316" },
  { icon: "📄", label: "Resume Scanner", status: "READY", color: "#fbbf24" },
  { icon: "📩", label: "Contact Terminal", status: "LIVE", color: "#34d399" },
];

export default function Home() {
  const [bgIdx, setBgIdx] = useState(0);
  const [ticker, setTicker] = useState(0);

  // Cycle Zoro GIF background
  useEffect(() => {
    const t = setInterval(() => setBgIdx(i => (i + 1) % zoroGifs.length), 9000);
    return () => clearInterval(t);
  }, []);

  // Ticker for dashboard counter animation
  useEffect(() => {
    const t = setInterval(() => setTicker(i => i + 1), 1200);
    return () => clearInterval(t);
  }, []);

  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

  return (
    <div className="bg-[#020403] text-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-x-hidden overflow-y-visible pb-16">

        {/* Layer 0: Zoro GIF background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            key={bgIdx}
            src={zoroGifs[bgIdx]}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020403] via-[#020403]/85 to-[#020403]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020403] via-transparent to-[#020403]/50" />
        </div>

        {/* Layer 1: CRT scanlines */}
        <div className="absolute inset-0 scanlines opacity-[0.04] z-0 pointer-events-none" />

        {/* Layer 2: Neon slash sweep */}
        <div
          aria-hidden
          className="absolute z-0 pointer-events-none w-[200%] h-[2px] left-[-50%]"
          style={{
            background: "linear-gradient(90deg, transparent, #00ff88, #39ff14, transparent)",
            top: "38%",
            animation: "slashSweep 7s ease-in-out infinite",
            boxShadow: "0 0 18px #00ff88",
          }}
        />

        {/* Layer 3: Cyber grid floor */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-52 z-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #00ff88 1px, transparent 1px), linear-gradient(to bottom, #00ff88 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(65deg)",
            transformOrigin: "bottom",
            animation: "gridScroll 4s linear infinite",
          }}
        />

        {/* ── CONTENT ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* LEFT: Text identity */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

              {/* Badge row */}
              <MotionWrapper delay={0.1} yOffset={20}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {BADGES.map(b => (
                    <span
                      key={b.text}
                      className="inline-flex items-center gap-1 border border-emerald-500/25 text-emerald-400 font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/25 whitespace-nowrap"
                    >
                      {b.icon} {b.text}
                    </span>
                  ))}
                </div>
              </MotionWrapper>

              {/* Main title */}
              <MotionWrapper delay={0.22} yOffset={20}>
                <div>
                  <p className="font-mono text-[9px] text-emerald-600 uppercase tracking-[0.45em] mb-3">
                    // SYSTEM_ACTIVE: PORTFOLIO_V2.0
                  </p>
                  <h1 className="font-orbitron font-black leading-none tracking-tight">
                    <span className="text-white text-5xl md:text-6xl xl:text-7xl block">HARSHA</span>
                    <span
                      className="text-transparent bg-clip-text block text-5xl md:text-6xl xl:text-7xl"
                      style={{ backgroundImage: "linear-gradient(135deg, #00ff88, #39ff14, #00e676)" }}
                    >
                      VARDHAN
                    </span>
                  </h1>
                </div>
              </MotionWrapper>

              {/* Role */}
              <MotionWrapper delay={0.35} yOffset={20}>
                <div className="space-y-2">
                  <p className="font-mono text-sm md:text-base text-emerald-400 font-bold uppercase tracking-wider">
                    ⚡ Full Stack Developer &amp; Product Designer
                  </p>
                  <p className="text-emerald-600 font-mono text-xs uppercase tracking-widest">
                    ⚔️ Developer by Skill. Gamer by Passion.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans max-w-lg mx-auto lg:mx-0 pt-1">
                    I build clean web experiences, modern UI systems, and immersive digital designs.
                    React, Tailwind, Python, SQL — and an eye for premium futuristic UI.
                  </p>
                </div>
              </MotionWrapper>

              {/* CTA buttons */}
              <MotionWrapper delay={0.48} yOffset={20}>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link to="/projects"><NeonButton variant="primary">🚀 View Projects</NeonButton></Link>
                  <Link to="/gaming"><NeonButton variant="secondary">🎮 Gaming Arena</NeonButton></Link>
                  <Link to="/resume"><NeonButton variant="secondary">📄 View Resume</NeonButton></Link>
                  <Link to="/contact"><NeonButton variant="secondary">📩 Contact Me</NeonButton></Link>
                </div>
              </MotionWrapper>

              {/* Stats */}
              <MotionWrapper delay={0.6} yOffset={20}>
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-2">
                  {[
                    { v: "5+", l: "Projects" },
                    { v: "18+", l: "Skills" },
                    { v: "8+", l: "Games" },
                    { v: "2026", l: "Graduate" },
                  ].map(s => (
                    <div key={s.l} className="border-l-2 border-emerald-500/40 pl-3">
                      <div className="text-xl md:text-2xl font-orbitron font-black text-emerald-400">{s.v}</div>
                      <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">{s.l}</div>
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </div>

            {/* RIGHT: Profile Image Hologram */}
            <div className="lg:col-span-6 flex flex-col items-center gap-6">

              {/* Main profile card */}
              <MotionWrapper delay={0.3} yOffset={30}>
                <div className="relative flex flex-col items-center">

                  {/* Outer aura ring */}
                  <div
                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full profile-ring"
                    style={{
                      background: "radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)",
                    }}
                  >
                    {/* Inner rotating border ring */}
                    <div
                      className="absolute inset-2 rounded-full"
                      style={{
                        background: "transparent",
                        border: "2px dashed rgba(0,255,136,0.3)",
                        animation: "floatUp 4s ease-in-out infinite",
                      }}
                    />

                    {/* Profile image */}
                    <div
                      className="absolute inset-6 rounded-full overflow-hidden"
                      style={{
                        border: "3px solid rgba(0,255,136,0.5)",
                        boxShadow: "0 0 30px rgba(0,255,136,0.4), inset 0 0 20px rgba(0,0,0,0.5)",
                      }}
                    >
                      <img
                        src={PROFILE_IMG}
                        alt="Harsha Vardhan — Full Stack Developer"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement.style.background = "radial-gradient(circle, rgba(0,255,136,0.15), rgba(0,0,0,0.8))";
                        }}
                      />
                      {/* Hologram overlay on image */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(180deg, transparent 60%, rgba(0,255,136,0.15) 100%)",
                        }}
                      />
                    </div>

                    {/* Animated scan line on image */}
                    <div
                      className="absolute inset-6 rounded-full overflow-hidden pointer-events-none"
                      style={{ zIndex: 10 }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0, right: 0,
                          height: "2px",
                          background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.8), transparent)",
                          animation: "scanLine 3s linear infinite",
                          boxShadow: "0 0 8px #00ff88",
                        }}
                      />
                    </div>

                    {/* Pulse rings */}
                    <div
                      className="absolute inset-0 rounded-full border border-emerald-400/30"
                      style={{ animation: "pulseRing 2.5s ease-out infinite" }}
                    />
                    <div
                      className="absolute inset-0 rounded-full border border-emerald-400/20"
                      style={{ animation: "pulseRing 2.5s ease-out infinite", animationDelay: "0.8s" }}
                    />
                  </div>

                  {/* Hologram HUD panels around image */}
                  {/* Top-left panel */}
                  <div
                    className="absolute -top-2 -left-4 md:left-0 lg:-left-8"
                    style={{
                      background: "rgba(6,21,13,0.85)",
                      border: "1px solid rgba(0,255,136,0.25)",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="font-mono text-[7px] text-emerald-500 uppercase tracking-widest">STATUS</div>
                    <div className="font-mono text-[10px] text-emerald-300 font-bold">🟢 AVAILABLE</div>
                  </div>

                  {/* Bottom-right panel */}
                  <div
                    className="absolute -bottom-2 -right-4 md:right-0 lg:-right-8"
                    style={{
                      background: "rgba(6,21,13,0.85)",
                      border: "1px solid rgba(0,255,136,0.25)",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="font-mono text-[7px] text-emerald-500 uppercase tracking-widest">STACK</div>
                    <div className="font-mono text-[10px] text-emerald-300 font-bold">MERN · PY · SQL</div>
                  </div>

                  {/* Name card below */}
                  <div
                    className="mt-6 text-center px-6 py-4 rounded-xl"
                    style={{
                      background: "rgba(6,21,13,0.6)",
                      border: "1px solid rgba(0,255,136,0.2)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest mb-1">
                      // IDENTITY_CARD_LOADED
                    </div>
                    <h2 className="font-orbitron text-base font-black text-white">V. HARSHA VARDHAN</h2>
                    <p className="font-mono text-[9px] text-emerald-400 mt-1">Full Stack Developer · B.Tech CSE 2026</p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center">
          <span className="font-mono text-[8px] text-emerald-600 uppercase tracking-widest block mb-2">scroll</span>
          <div
            className="w-5 h-8 border border-emerald-500/40 rounded-full mx-auto flex items-start justify-center pt-1.5"
            style={{ animation: "floatUp 2s ease-in-out infinite" }}
          >
            <div className="w-1 h-2 rounded-full bg-emerald-500" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CYBER CONTROL CENTER
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-20 px-4 sm:px-6 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <MotionWrapper delay={0.1} yOffset={20}>
            <div className="text-center mb-10">
              <span className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest block mb-2">
                // CYBER_CONTROL_CENTER
              </span>
              <h2 className="font-orbitron text-3xl md:text-4xl font-black">
                <span className="text-white">SYSTEM</span>{" "}
                <span className="text-emerald-400">DASHBOARD</span>
              </h2>
            </div>
          </MotionWrapper>

          {/* Dashboard grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {DASHBOARD_ITEMS.map((item, i) => (
              <MotionWrapper key={item.label} delay={0.05 * i} yOffset={15}>
                <div
                  className="relative p-4 rounded-xl text-center"
                  style={{
                    background: "rgba(6,21,13,0.55)",
                    border: `1px solid ${item.color}22`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-mono text-[7px] text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-mono text-[8px] font-bold" style={{ color: item.color }}>
                    {item.status}
                  </div>
                  {/* Animated dot */}
                  <div
                    className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: item.color, animation: `breatheGlow ${1.5 + i * 0.2}s ease-in-out infinite` }}
                  />
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* HUD bottom bar */}
          <div
            className="mt-4 px-5 py-3 rounded-xl font-mono text-[9px] text-emerald-500/70 uppercase tracking-widest flex flex-wrap justify-center gap-4"
            style={{
              background: "rgba(6,21,13,0.3)",
              border: "1px solid rgba(0,255,136,0.08)",
            }}
          >
            <span>🌐 VERCEL_DEPLOYED</span>
            <span>⚡ VITE_7.x</span>
            <span>⚛️ REACT_19</span>
            <span>🎨 TAILWIND_v3</span>
            <span>🧊 THREE.JS</span>
            <span>🕹️ GAMING_MODULE_ACTIVE</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          QUICK IDENTITY CARDS
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-12 px-4 sm:px-6 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <MotionWrapper delay={0.1} yOffset={20}>
            <p className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest text-center mb-8">
              // WORLD_HUB
            </p>
          </MotionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {QUICK_CARDS.map((card, i) => (
              <MotionWrapper key={card.title} delay={0.08 * i} yOffset={20}>
                <HoverTilt>
                  <Link to={card.path}>
                    <div
                      className={`p-5 rounded-xl border ${card.border} transition-all duration-300 cursor-pointer group hover:shadow-lg`}
                      style={{
                        background: "rgba(6,21,13,0.45)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <div className="text-3xl mb-3">{card.icon}</div>
                      <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: card.color }}>
                        {card.title}
                      </h3>
                      <p className="text-[8px] text-gray-500 font-sans leading-relaxed">{card.desc}</p>
                      <div className="mt-3 font-mono text-[7px] uppercase tracking-widest font-extrabold group-hover:underline" style={{ color: card.color }}>
                        Enter →
                      </div>
                    </div>
                  </Link>
                </HoverTilt>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PROJECTS PREVIEW
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-16 px-4 sm:px-6 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <MotionWrapper delay={0.1} yOffset={20}>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
              <div>
                <span className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest block mb-1">// FEATURED_MISSIONS</span>
                <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white">
                  Project <span className="text-emerald-400">Missions</span>
                </h2>
              </div>
              <Link to="/projects">
                <NeonButton variant="secondary">View All →</NeonButton>
              </Link>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((p, i) => (
              <MotionWrapper key={p.slug} delay={0.1 * i} yOffset={20}>
                <HoverTilt>
                  <Link to="/projects">
                    <div
                      className="mission-card relative p-5 rounded-2xl group overflow-hidden"
                      style={{
                        background: "rgba(6,21,13,0.55)",
                        border: `1px solid ${p.accentColor}33`,
                        backdropFilter: "blur(14px)",
                      }}
                    >
                      {/* Status + featured badges */}
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        {p.featured && (
                          <span className="font-mono text-[7px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-500 text-black tracking-wider">
                            🔥 Featured
                          </span>
                        )}
                        <span
                          className="font-mono text-[7px] uppercase px-2 py-0.5 rounded border tracking-wider"
                          style={{ color: p.accentColor, borderColor: `${p.accentColor}44`, background: `${p.accentColor}11` }}
                        >
                          ✅ {p.status}
                        </span>
                        <span className="font-mono text-[7px] text-gray-600 ml-auto">{p.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-orbitron text-base font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">
                        {p.emoji} {p.title}
                      </h3>
                      <p className="text-gray-400 text-xs font-sans leading-relaxed mb-3">{p.shortDesc}</p>

                      {/* Image preview */}
                      {p.images?.[0] && (
                        <div className="relative rounded-lg overflow-hidden h-32 mb-3">
                          <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                      )}

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1">
                        {p.tech.slice(0, 4).map(t => (
                          <span
                            key={t}
                            className="font-mono text-[7px] px-2 py-0.5 rounded"
                            style={{ color: p.accentColor, background: `${p.accentColor}11`, border: `1px solid ${p.accentColor}33` }}
                          >
                            ⚙️ {t}
                          </span>
                        ))}
                        {p.tech.length > 4 && (
                          <span className="font-mono text-[7px] text-gray-600 px-2 py-0.5">+{p.tech.length - 4} more</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </HoverTilt>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GAMING ARENA TEASER
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-16 px-4 sm:px-6 overflow-x-hidden">
        <div
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(249,115,22,0.25)" }}
        >
          {/* Background anime GIF */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img src={animeGifs[0]} alt="" aria-hidden className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020403] via-[#020403]/70 to-[#020403]" />
          </div>

          <div className="relative z-10 p-10 md:p-14 text-center space-y-5">
            <span className="font-mono text-[8px] text-orange-500 uppercase tracking-widest">// GAMING_ARENA_SECTOR_7</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black">
              <span className="text-orange-400">Gaming</span>{" "}
              <span className="text-emerald-400">Arena</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              🔥 Free Fire Battle Royale &nbsp;•&nbsp; 👻 Horror Escapes &nbsp;•&nbsp; 🧟 Ghost Survival
            </p>
            <Link to="/gaming">
              <NeonButton variant="primary">🎮 Enter Arena →</NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT CTA
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-16 px-4 sm:px-6 text-center overflow-x-hidden">
        <MotionWrapper delay={0.1} yOffset={20}>
          <span className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest block mb-4">// CONTACT_TERMINAL</span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white mb-3">
            Let&apos;s Build Something <span className="text-emerald-400">Powerful</span>
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Open for projects, collaborations, and opportunities. Reach out and let's create something great.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact"><NeonButton variant="primary">📩 Contact Me</NeonButton></Link>
            <a href="mailto:harshavardhanvesalapu1@gmail.com">
              <NeonButton variant="secondary">📧 Send Email</NeonButton>
            </a>
          </div>
        </MotionWrapper>
      </section>

    </div>
  );
}
