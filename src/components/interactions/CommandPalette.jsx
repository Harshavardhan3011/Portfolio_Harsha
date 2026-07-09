import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { commands } from "../../data/commands";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  const filtered = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleExecute = (cmd) => {
    setIsOpen(false);
    setSearch("");
    if (cmd.action === "route") {
      navigate(cmd.value);
    } else if (cmd.action === "download" || cmd.action === "url") {
      window.open(cmd.value, "_blank");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg bg-neutral-950/95 border border-emerald-500 rounded-xl p-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-emerald-950 pb-2 mb-3">
          <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest">// COMMAND_PALETTE</span>
          <span className="font-mono text-[8px] text-gray-500">[ESC to Close]</span>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="SEARCH COMMANDS (e.g. Navigation, GitHub)..."
          className="w-full bg-black border border-emerald-900 rounded p-2 text-[10px] font-mono text-emerald-400 focus:outline-none focus:border-emerald-500 uppercase tracking-wider"
          autoFocus
        />

        <div className="mt-3 max-h-[220px] overflow-y-auto space-y-1.5 pr-1">
          {filtered.length > 0 ? (
            filtered.map((cmd) => (
              <button
                key={cmd.id}
                onClick={() => handleExecute(cmd)}
                className="w-full flex items-center justify-between p-2 rounded bg-emerald-950/10 hover:bg-emerald-950/40 border border-emerald-950/60 hover:border-emerald-500/40 text-left transition text-[10px] font-mono text-gray-300 hover:text-emerald-400 group"
              >
                <span>{cmd.name}</span>
                <span className="text-[7px] text-gray-500 uppercase group-hover:text-emerald-500/60">
                  {cmd.category}
                </span>
              </button>
            ))
          ) : (
            <div className="text-center font-mono text-[9px] text-gray-600 py-4 uppercase">
              No matching directives found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
