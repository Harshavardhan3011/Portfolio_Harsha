import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import MotionWrapper from "../components/animation/MotionWrapper";

export default function Testimonials() {
  const feedbacks = [
    {
      name: "Leela Vardhan",
      quote: "Finally, something that works exactly like it should. Smooth, fast, and oddly satisfying to use.",
      role: "Lead Engineer"
    },
    {
      name: "Rahul",
      quote: "I told my friends about it… now they won't stop thanking me. It's like magic, but with less smoke and more results.",
      role: "Founder, DevStudio"
    },
    {
      name: "Amir Uddin",
      quote: "This is a fantastic portfolio! Highly recommend working with Harsha Vardhan.",
      role: "Product Owner"
    },
    {
      name: "Salim Ahmed",
      quote: "Amazing work! Very professional, highly responsive and extremely creative solutions.",
      role: "Director of UX"
    }
  ];

  return (
    <section className="relative min-h-[90vh] bg-black text-white py-16 px-6 overflow-hidden">
      {/* Moving grid background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform: "perspective(300px) rotateX(25deg) translateY(-10%)",
        }}
      />

      <div className="max-w-6xl mx-auto z-10 relative">
        <SectionTitle title="SYSTEM FEEDBACK" subtitle="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {feedbacks.map((f, idx) => (
            <MotionWrapper key={idx} delay={idx * 0.15} yOffset={20}>
              <GlassCard className="h-full flex flex-col justify-between relative group border-emerald-950/60 bg-black/50">
                {/* Neon quotes accent */}
                <div className="absolute top-4 right-4 text-emerald-950 font-mono text-5xl select-none group-hover:text-emerald-500/20 transition-colors pointer-events-none">
                  "
                </div>

                <div className="space-y-4">
                  {/* Cyber glowing stars */}
                  <div className="flex space-x-1 text-emerald-400 text-xs font-mono select-none">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  <p className="text-xs md:text-sm text-gray-300 italic leading-relaxed font-sans relative z-10">
                    "{f.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-950/40 flex justify-between items-center font-mono">
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">{f.name}</h5>
                    <span className="text-[9px] text-gray-600 uppercase tracking-widest">{f.role}</span>
                  </div>
                  <span className="text-[8px] text-emerald-500 font-bold tracking-wider">// VERIFIED_LOG</span>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
