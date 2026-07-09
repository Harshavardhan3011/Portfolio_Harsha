import React from "react";
import { socialLinks } from "../../data/socialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-500 border-t border-emerald-950/80 py-8 select-none">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-1 font-mono text-[9px]">
          <p className="text-emerald-500 font-extrabold uppercase tracking-widest">
            © 2026 HARSHAVARDHAN.DEV
          </p>
          <span className="text-gray-700">// CORE_VERSION_ZORO_2.0_SECURE</span>
        </div>

        <div className="flex space-x-6 text-[10px] font-mono text-emerald-400">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition duration-200"
          >
            INSTAGRAM
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition duration-200"
          >
            GITHUB
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition duration-200"
          >
            LINKEDIN
          </a>
          <a
            href={socialLinks.emailHref}
            className="hover:text-emerald-300 transition duration-200"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
