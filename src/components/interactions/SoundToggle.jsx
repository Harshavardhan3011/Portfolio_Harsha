import React from "react";
import { useAudioController } from "../../hooks/useAudioController";

export default function SoundToggle() {
  const { soundOn, toggle } = useAudioController();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded bg-black/85 border border-emerald-950 text-emerald-400 hover:border-emerald-500 transition pointer-events-auto"
      title={soundOn ? "Pause Background Music" : "Play Background Music"}
    >
      <span className="font-mono text-[9px] uppercase tracking-wider">
        {soundOn ? "🔊 Audio: On" : "🔇 Audio: Off"}
      </span>
    </button>
  );
}
