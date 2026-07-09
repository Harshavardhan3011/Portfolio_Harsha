import React, { useState } from "react";
import harsha from "./harsha.jpg";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import NeonButton from "../components/ui/NeonButton";
import MotionWrapper from "../components/animation/MotionWrapper";
import { education } from "../data/education";

export default function About() {
  const [activeNode, setActiveNode] = useState(1);

  return (
    <section className="relative min-h-[90vh] bg-black text-white py-16 px-6 overflow-hidden">
      {/* Decorative cyber grid floor */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          transform: "perspective(400px) rotateX(45deg) translateY(-20%)",
        }}
      />

      <div className="max-w-6xl mx-auto z-10 relative">
        <SectionTitle title="ABOUT SYSTEM" subtitle="Biography" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
          
          {/* Profile Card column (left) */}
          <div className="lg:col-span-5 space-y-6">
            <MotionWrapper delay={0.2} yOffset={25}>
              <GlassCard className="relative overflow-hidden group">
                {/* Profile Image with cyber border */}
                <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden border-2 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <img
                    src={harsha}
                    alt="Harsha Vardhan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-center mt-6 space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono text-[9px] uppercase border border-emerald-500/20">
                    Full-Stack Engineer
                  </span>
                  <h3 className="text-xl font-bold font-mono text-white tracking-wide">
                    V. Harsha Vardhan
                  </h3>
                  <p className="text-xs text-gray-400 font-sans px-4">
                    Passionate Full-Stack Developer crafting fast, clean, responsive, and accessible web systems.
                  </p>
                </div>

                {/* CV trigger */}
                <div className="mt-6 flex justify-center gap-3">
                  <a href="/harsha_vardhan_resume.pdf" target="_blank" rel="noopener noreferrer">
                    <NeonButton variant="primary">
                      Download CV
                    </NeonButton>
                  </a>
                  <a href="mailto:harshavardhanvesalapu1@gmail.com">
                    <NeonButton variant="secondary">
                      Contact
                    </NeonButton>
                  </a>
                </div>
              </GlassCard>
            </MotionWrapper>

            {/* Quick Metrics */}
            <MotionWrapper delay={0.4} yOffset={25}>
              <GlassCard>
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">// CORE_HIGHLIGHTS</h4>
                <ul className="text-xs space-y-3 font-mono text-gray-400">
                  <li className="flex justify-between border-b border-emerald-950/40 pb-1.5">
                    <span>STATUS:</span>
                    <span className="text-emerald-400">AVAILABLE_FOR_PROJECTS</span>
                  </li>
                  <li className="flex justify-between border-b border-emerald-950/40 pb-1.5">
                    <span>STACK:</span>
                    <span className="text-emerald-400">MERN • PYTHON • C</span>
                  </li>
                  <li className="flex justify-between">
                    <span>GRADUATION:</span>
                    <span className="text-emerald-400">2026 (B.TECH CSE)</span>
                  </li>
                </ul>
              </GlassCard>
            </MotionWrapper>
          </div>

          {/* Hologram Timeline column (right) */}
          <div className="lg:col-span-7">
            <MotionWrapper delay={0.3} yOffset={25}>
              <GlassCard>
                <div className="flex justify-between items-center border-b border-emerald-950/40 pb-4 mb-6">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest">// EDUCATION_CHECKPOINTS</h4>
                  <span className="text-[9px] text-gray-500 font-mono">CLICK_NODE_TO_INSPECT</span>
                </div>

                <div className="relative pl-8 border-l border-emerald-500/30 space-y-8">
                  {education.map((node) => {
                    const isActive = activeNode === node.id;
                    return (
                      <div key={node.id} className="relative group cursor-pointer" onClick={() => setActiveNode(node.id)}>
                        {/* Glow checkpoint icon */}
                        <div className={`absolute -left-[38px] top-1 w-4 h-4 rounded-full border transition-all duration-300 ${
                          isActive 
                            ? "bg-emerald-500 border-emerald-400 scale-125 shadow-[0_0_12px_#00ff66]" 
                            : "bg-black border-emerald-900 group-hover:border-emerald-500"
                        }`} />

                        <div className="space-y-1">
                          <span className="font-mono text-[9px] text-emerald-500 font-bold uppercase tracking-wider block">
                            {node.year}
                          </span>
                          <h3 className={`font-mono text-sm transition-colors ${
                            isActive ? "text-emerald-400 font-extrabold" : "text-white"
                          }`}>
                            {node.degree}
                          </h3>
                          <p className="text-[10px] text-gray-400 font-mono">
                            {node.school}
                          </p>

                          {/* Reveal detailed panel inside active glass card */}
                          {isActive && (
                            <div className="mt-3 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg text-xs leading-relaxed font-sans text-gray-300 shadow-md">
                              <div className="flex justify-between items-center mb-2 font-mono text-[10px] text-emerald-400 border-b border-emerald-950/60 pb-1.5">
                                <span>PERFORMANCE:</span>
                                <span className="font-bold">{node.grade}</span>
                              </div>
                              <p className="text-[11px] leading-relaxed">
                                {node.desc}
                              </p>
                              {node.status && (
                                <div className="mt-2 text-right">
                                  <span className="text-[8px] font-mono bg-emerald-500 text-black px-2 py-0.5 rounded font-extrabold uppercase">
                                    {node.status}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </MotionWrapper>
          </div>

        </div>
      </div>
    </section>
  );
}
