// src/utils/assetResolver.js
import { zoroGifs, animeGifs, introShowcaseAssets } from "../data/mediaAssets";

export function resolveAsset(name, fallback = null) {
  // Try to find matching asset in introShowcaseAssets
  const matched = introShowcaseAssets.find(
    a => a.name.toLowerCase() === name.toLowerCase()
  );
  if (matched) return matched.src;

  // Fallbacks
  if (name.toLowerCase().includes("zoro")) {
    return zoroGifs[0] || fallback;
  }
  if (name.toLowerCase().includes("luffy")) {
    return animeGifs[0] || fallback;
  }
  if (name.toLowerCase().includes("itachi")) {
    return animeGifs[1] || fallback;
  }
  if (name.toLowerCase().includes("jinwoo")) {
    return animeGifs[2] || fallback;
  }

  return fallback;
}
