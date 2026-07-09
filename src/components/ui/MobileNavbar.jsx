import React from "react";
import { NavLink } from "react-router-dom";

export default function MobileNavbar({ open, onClose }) {
  if (!open) return null;

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/gaming", label: "Gaming" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-md md:hidden select-none animate-[drawerIn_0.3s_ease-out]">
      <div className="w-[70vw] h-full bg-neutral-950 border-l border-emerald-950 p-6 flex flex-col justify-between">
        
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-emerald-950/60 pb-3">
            <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-widest">
              // ZONE_DIRECTORY
            </span>
            <button onClick={onClose} className="text-emerald-400 hover:text-emerald-300 text-xs font-mono">
              [ × ]
            </button>
          </div>

          <nav className="flex flex-col space-y-4 font-mono text-xs uppercase tracking-wider">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `block py-1.5 transition-colors ${
                    isActive ? "text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(0,255,102,0.5)]" : "text-gray-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <a
            href="/harsha_vardhan_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block text-center font-mono text-[9px] uppercase tracking-widest bg-emerald-500 text-black py-2.5 rounded font-bold transition shadow-[0_0_12px_rgba(16,185,129,0.3)]"
          >
            Download CV
          </a>
          <div className="text-center font-mono text-[7px] text-gray-600 uppercase">
            System: HV-MOBILE-V1.0
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drawerIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />
    </div>
  );
}
