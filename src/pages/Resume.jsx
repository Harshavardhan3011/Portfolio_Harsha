import React, { useState } from "react";
import { resumeData } from "../data/resume";
import MotionWrapper from "../components/animation/MotionWrapper";
import NeonButton from "../components/ui/NeonButton";
import { zoroGifs } from "../data/mediaAssets";

const { name, role, summary, education, skills, achievements, email, location, pdfPath } = resumeData;

/* ── Education node ──────────────────────────── */
function EduNode({ node, active, onClick }) {
  return (
    <div
      className="relative pl-8 pb-6 cursor-pointer group"
      onClick={() => onClick(node.id)}
    >
      {/* Timeline line */}
      <div className="absolute left-2.5 top-5 bottom-0 w-[1px] bg-emerald-900/50" />

      {/* Dot */}
      <div
        className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          active ? "border-emerald-400 bg-emerald-500 scale-110 shadow-[0_0_12px_#00ff88]" : "border-emerald-900 bg-black group-hover:border-emerald-500"
        }`}
      />

      <div className="space-y-1">
        <span className="font-mono text-[8px] text-emerald-500 font-black uppercase tracking-wider block">{node.year}</span>
        <h4 className={`font-mono text-sm font-bold transition-colors ${active ? "text-emerald-400" : "text-white"}`}>{node.degree}</h4>
        <p className="font-mono text-[9px] text-gray-500">{node.school}</p>

        {active && (
          <div className="mt-3 p-4 rounded-lg"
            style={{ background: "rgba(6,21,13,0.5)", border: "1px solid rgba(0,255,136,0.2)" }}>
            <div className="flex justify-between items-center mb-2 font-mono text-[9px]">
              <span className="text-gray-500 uppercase tracking-widest">PERFORMANCE</span>
              <span className="text-emerald-400 font-bold">{node.grade}</span>
            </div>
            <p className="font-sans text-[11px] text-gray-300 leading-relaxed">{node.desc}</p>
            {node.status && (
              <div className="mt-2 text-right">
                <span className="font-mono text-[7px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500 text-black">
                  {node.status}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Resume() {
  const [activeEdu, setActiveEdu] = useState(1);
  const [activeSkillCat, setActiveSkillCat] = useState("Frontend");

  return (
    <div
      className="relative min-h-screen text-white pb-24 overflow-x-hidden"
      style={{ background: "linear-gradient(180deg, #020403 0%, #06150D 60%, #020403 100%)" }}
    >
      {/* Background Zoro */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <img src={zoroGifs[5]} alt="" aria-hidden className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020403] via-[#020403]/80 to-[#020403]" />
      </div>

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-[1px] z-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.4), transparent)",
          animation: "scanLine 6s linear infinite",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20">

        {/* ── Header ── */}
        <MotionWrapper delay={0.1} yOffset={20}>
          <div className="text-center mb-12">
            <span className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest block mb-2">
              // RESUME_SCANNER_ACTIVE
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-black">
              <span className="text-white">RESUME</span>{" "}
              <span className="text-emerald-400">SCANNER</span>
            </h1>
            <p className="text-gray-500 font-mono text-xs mt-3 uppercase tracking-widest">
              📄 Vesalapu Harsha Vardhan · Full Stack Developer · B.Tech CSE 2026
            </p>
          </div>
        </MotionWrapper>

        {/* ── Profile card ── */}
        <MotionWrapper delay={0.15} yOffset={20}>
          <div
            className="relative rounded-2xl p-6 md:p-8 mb-8 overflow-hidden"
            style={{
              background: "rgba(6,21,13,0.6)",
              border: "1px solid rgba(0,255,136,0.25)",
              boxShadow: "0 0 40px rgba(0,255,136,0.08)",
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-emerald-500/50" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-emerald-500/50" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-emerald-500/50" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-emerald-500/50" />

            {/* Animated scan line on card */}
            <div
              className="absolute left-0 right-0 h-[1px] pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, #00ff88, transparent)",
                animation: "scanLine 4s linear infinite",
                boxShadow: "0 0 6px #00ff88",
                opacity: 0.6,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Identity */}
              <div className="md:col-span-2 space-y-3">
                <div>
                  <span className="font-mono text-[8px] text-emerald-500 uppercase tracking-widest block mb-1">// IDENTITY_LOADED</span>
                  <h2 className="font-orbitron text-xl md:text-2xl font-black text-white">{name.toUpperCase()}</h2>
                  <p className="font-mono text-xs text-emerald-400 mt-1">{role}</p>
                </div>
                <p className="font-sans text-sm text-gray-300 leading-relaxed">{summary}</p>
              </div>

              {/* Quick info */}
              <div className="space-y-3">
                {[
                  { icon: "📧", label: "Email", val: email },
                  { icon: "📍", label: "Location", val: location },
                  { icon: "🎓", label: "Grad Year", val: "2026" },
                  { icon: "🟢", label: "Status", val: "Available" },
                ].map(item => (
                  <div key={item.label} className="font-mono text-xs">
                    <span className="text-gray-500 text-[8px] uppercase tracking-wider block">{item.icon} {item.label}</span>
                    <span className="text-emerald-300 text-[10px] break-all">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* ── Main content grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT: Education timeline */}
          <div className="lg:col-span-5">
            <MotionWrapper delay={0.2} yOffset={20}>
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(6,21,13,0.5)", border: "1px solid rgba(0,255,136,0.12)" }}
              >
                <h3 className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest mb-6">
                  🎓 // EDUCATION_CHECKPOINTS
                </h3>
                {education.map(node => (
                  <EduNode
                    key={node.id}
                    node={node}
                    active={activeEdu === node.id}
                    onClick={setActiveEdu}
                  />
                ))}
              </div>
            </MotionWrapper>

            {/* Achievements */}
            <MotionWrapper delay={0.3} yOffset={20}>
              <div
                className="rounded-2xl p-6 mt-5"
                style={{ background: "rgba(6,21,13,0.5)", border: "1px solid rgba(0,255,136,0.12)" }}
              >
                <h3 className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest mb-4">
                  🏆 // ACHIEVEMENTS_UNLOCKED
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map(a => (
                    <div
                      key={a.label}
                      className="p-3 rounded-xl text-center"
                      style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.12)" }}
                    >
                      <div className="text-xl mb-1">{a.emoji}</div>
                      <div className="font-orbitron text-base font-black text-emerald-400">{a.value}</div>
                      <div className="font-mono text-[7px] text-gray-500 uppercase tracking-wider mt-0.5">{a.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT: Skills + download */}
          <div className="lg:col-span-7 space-y-5">

            {/* Skills tabs */}
            <MotionWrapper delay={0.25} yOffset={20}>
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(6,21,13,0.5)", border: "1px solid rgba(0,255,136,0.12)" }}
              >
                <h3 className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest mb-4">
                  🧠 // SKILL_MANIFEST
                </h3>

                {/* Category tabs */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {Object.keys(skills).map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveSkillCat(cat)}
                      className="font-mono text-[8px] uppercase tracking-widest px-3 py-1 rounded border transition-all duration-300"
                      style={activeSkillCat === cat
                        ? { background: "#00ff88", color: "#000", borderColor: "#00ff88", fontWeight: 900 }
                        : { background: "transparent", color: "#6b7280", borderColor: "rgba(0,255,136,0.15)" }
                      }
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Active skill pills */}
                <div className="flex flex-wrap gap-2">
                  {(skills[activeSkillCat] || []).map(skill => (
                    <span
                      key={skill}
                      className="font-mono text-[9px] uppercase px-3 py-1.5 rounded-full border font-bold"
                      style={{
                        color: "#00ff88",
                        borderColor: "rgba(0,255,136,0.3)",
                        background: "rgba(0,255,136,0.07)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionWrapper>

            {/* Projects summary */}
            <MotionWrapper delay={0.3} yOffset={20}>
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(6,21,13,0.5)", border: "1px solid rgba(0,255,136,0.12)" }}
              >
                <h3 className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest mb-4">
                  🚀 // PROJECTS_DEPLOYED
                </h3>
                <div className="space-y-2">
                  {["HRMS (React + Tailwind)", "3D Gamer Portfolio (React + Three.js + Tailwind)", "Personal Portfolio (React + Tailwind)", "Feedback Form (React + Formik)", "To Do List App (React)"].map((p, i) => (
                    <div key={p} className="flex items-center gap-3 font-mono text-[10px]">
                      <span className="text-emerald-500 font-black">{String(i + 1).padStart(2, "0")}.</span>
                      <span className="text-gray-300">{p}</span>
                      <span className="ml-auto text-[7px] font-black text-emerald-500">✅</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>

            {/* Download buttons */}
            <MotionWrapper delay={0.35} yOffset={20}>
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(6,21,13,0.5)", border: "1px solid rgba(0,255,136,0.12)" }}
              >
                <h3 className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest mb-4">
                  📄 // DOWNLOAD_CREDENTIALS
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                    <NeonButton variant="primary">📥 Download Resume PDF</NeonButton>
                  </a>
                  <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                    <NeonButton variant="secondary">👁️ View Resume Online</NeonButton>
                  </a>
                  <a href={`mailto:${email}`}>
                    <NeonButton variant="secondary">📩 Contact Me</NeonButton>
                  </a>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
