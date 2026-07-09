import React from "react";
import NeonButton from "./NeonButton";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-neutral-950 border border-emerald-500 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(16,185,129,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-emerald-400 hover:text-emerald-300 font-mono text-xs uppercase"
        >
          [ Close × ]
        </button>

        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-500/20">
          Project Node: {project.slug}
        </span>

        <h2 className="mt-4 text-3xl font-extrabold text-white tracking-tight font-mono">
          {project.title}
        </h2>
        
        {/* Gallery / Image Lists */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-900"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.year && (
              <div className="text-xs text-gray-500 font-mono">
                Project Year: <span className="text-emerald-400">{project.year}</span>
              </div>
            )}

            <div className="pt-4 flex gap-4">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <NeonButton variant="primary">
                    Launch App →
                  </NeonButton>
                </a>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono text-emerald-500 uppercase tracking-widest">// SCREENS_GALLERY</h4>
            <div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto pr-1">
              {project.images?.map((img, idx) => (
                <a key={idx} href={img} target="_blank" rel="noopener noreferrer" className="block border border-emerald-900 rounded overflow-hidden hover:border-emerald-500 transition">
                  <img
                    src={img}
                    alt={`${project.title} screen ${idx + 1}`}
                    className="w-full h-16 md:h-20 object-cover hover:scale-110 transition duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* HRMS Premium Features Breakdown */}
        {project.slug === "hrms" && (
          <div className="mt-8 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
              Core System Architectures
            </h4>
            <ul className="text-[11px] text-gray-300 space-y-2 list-disc pl-4 font-sans">
              <li><strong>Role-Based Gateways:</strong> Secure portal directories for Admin, HR, and Employee dashboard interfaces.</li>
              <li><strong>Attendance Engine:</strong> Microservices simulating clock-ins, clock-outs, and overtime indexes.</li>
              <li><strong>Leave Workspace:</strong> Complete request pipeline with request forms and approvals.</li>
              <li><strong>Payroll Sandbox:</strong> Local computation processing simulating base components, additions, and deductions.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
