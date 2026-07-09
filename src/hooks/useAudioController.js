// src/hooks/useAudioController.js
// Singleton audio controller — one audio instance for the whole app.
// Handles browser autoplay policy gracefully.

import { useRef, useEffect, useCallback } from "react";
import { usePortfolioStore } from "../store/usePortfolioStore";

const MUSIC_SRC = "/assets/music/background.mp3";

let globalAudio = null; // Singleton across all hook instances

export function useAudioController() {
  const soundOn = usePortfolioStore((state) => state.soundOn);
  const setSoundOn = usePortfolioStore((state) => state.setSoundOn);
  const hasAudio = useRef(false);

  // Initialize audio singleton once
  useEffect(() => {
    if (!globalAudio) {
      globalAudio = new Audio(MUSIC_SRC);
      globalAudio.loop = true;
      globalAudio.volume = 0.25;
      globalAudio.preload = "none";
    }

    // Check if file exists (browsers handle 404 gracefully via error event)
    const handleError = () => {
      hasAudio.current = false;
      console.warn("[AudioController] Music file not found:", MUSIC_SRC);
    };
    globalAudio.addEventListener("error", handleError);

    return () => {
      globalAudio.removeEventListener("error", handleError);
    };
  }, []);

  // Sync play/pause with store state
  useEffect(() => {
    if (!globalAudio) return;
    if (soundOn) {
      globalAudio.play().catch((err) => {
        console.warn("[AudioController] Playback blocked:", err.message);
        // Reset to off if browser blocks
        setSoundOn(false);
      });
    } else {
      globalAudio.pause();
    }
  }, [soundOn, setSoundOn]);

  const toggle = useCallback(async () => {
    if (!globalAudio) return;
    if (!soundOn) {
      try {
        await globalAudio.play();
        setSoundOn(true);
      } catch (err) {
        console.warn("[AudioController] Could not play audio:", err.message);
        setSoundOn(false);
      }
    } else {
      globalAudio.pause();
      setSoundOn(false);
    }
  }, [soundOn, setSoundOn]);

  return { soundOn, toggle };
}
