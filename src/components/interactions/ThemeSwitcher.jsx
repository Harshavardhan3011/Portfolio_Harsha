import React from "react";
import { usePortfolioStore } from "../../store/usePortfolioStore";
import { themes } from "../../data/themes";

export default function ThemeSwitcher() {
  const activeTheme = usePortfolioStore((state) => state.activeTheme);
  const setTheme = usePortfolioStore((state) => state.setTheme);

  return (
    <div className="flex items-center space-x-2 bg-black/85 border border-emerald-950 p-2 rounded-lg pointer-events-auto">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          title={t.name}
          className={`w-4 h-4 rounded-full border transition-all duration-300 ${
            activeTheme === t.id 
              ? "scale-125 border-white shadow-[0_0_8px_currentColor]" 
              : "border-transparent opacity-60 hover:opacity-100"
          }`}
          style={{
            backgroundColor: t.hex,
            color: t.hex
          }}
        />
      ))}
    </div>
  );
}
