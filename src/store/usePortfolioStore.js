import { create } from "zustand";
import { achievements } from "../data/achievements";

export const usePortfolioStore = create((set, get) => ({
  unlocked: [],
  toast: null,
  soundOn: false,
  activeTheme: "zoro_emerald",

  // setSoundOn allows external code (useAudioController) to set exact state
  setSoundOn: (val) => set({ soundOn: val }),

  toggleSound: () => set((state) => ({ soundOn: !state.soundOn })),

  setTheme: (themeId) => set({ activeTheme: themeId }),

  triggerUnlock: (id) => {
    const { unlocked } = get();
    if (unlocked.includes(id)) return;

    const ach = achievements.find((a) => a.id === id);
    if (!ach) return;

    set({
      unlocked: [...unlocked, id],
      toast: ach
    });

    // Auto-clear toast after 3.5 seconds
    setTimeout(() => {
      set((state) => {
        if (state.toast?.id === id) {
          return { toast: null };
        }
        return {};
      });
    }, 3500);
  }
}));
