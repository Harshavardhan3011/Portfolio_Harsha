// src/data/mediaAssets.js
// Central media map — uses /assets/... public paths (Vite serves public/ at root).
// All paths reference public/assets/ folder which is committed as normal binary files.
// CORRECT: /assets/zoro/Zoro1.gif  (browser path)
// WRONG:   src/assets/..., public/assets/..., ./assets/...

// ── Zoro GIFs ─────────────────────────────────────────────────────
export const Zoro1 = "/assets/zoro/Zoro1.gif";
export const Zoro2 = "/assets/zoro/Zoro2.gif";

export const zoroGifs = [
  "/assets/zoro/Zoro1.gif",
  "/assets/zoro/Zoro2.gif",
  "/assets/zoro/3dc1000fcf371c8c125f45984a025065.gif",
  "/assets/zoro/3e4a7de6a7ffd265747129d977d15d53.gif",
  "/assets/zoro/3f10b17c8475c145077a8613e8b94032.gif",
  "/assets/zoro/4afadbfad5bde75134d334d09211e6cd.gif",
  "/assets/zoro/5825275c46bc16df81c72391aa98312a.gif",
  "/assets/zoro/6009efc3687ddaaf405acd311cc38b9b.gif",
  "/assets/zoro/6db61b4f46ddc086b08091d54aefa36d.gif",
  "/assets/zoro/77dd356a96ca201dbd60459c89a58d18.gif",
  "/assets/zoro/b06eea2ce029b6bd7ab1d59302215582.gif",
  "/assets/zoro/b8e3c43bbc4aca3747995d05d253e368.gif",
  "/assets/zoro/bed3b4aa0dc04214229f3e3ed9313d4a.gif",
  "/assets/zoro/c04f5aa6eb2009bb8d7d66bed572cdeb.gif",
  "/assets/zoro/cf9e887c161f96c997c225e878a6dc1c.gif",
  "/assets/zoro/ec692fcf69caa9fb380d72d524b355b7.gif",
];

export const zoroImages = [
  "/assets/zoro/2c19394916c7d49856c0bfb914d17c12.jpg",
];

// ── Anime GIFs ────────────────────────────────────────────────────
export const Luffy      = "/assets/anime/Luffy.gif";
export const ItachiFire = "/assets/anime/itachifire.gif";
export const Jinwoo     = "/assets/anime/jinwoo.gif";

export const animeGifs = [
  "/assets/anime/Luffy.gif",
  "/assets/anime/itachifire.gif",
  "/assets/anime/jinwoo.gif",
  "/assets/anime/a3520cf3b977a6a2dae72175d4671875.gif",
  "/assets/anime/0c0938072d97e5103d48483ee2614214.gif",
  "/assets/anime/239fbc1911b8fb98d27dc1d286e17cb1.gif",
];

// ── Free Fire ─────────────────────────────────────────────────────
export const freefireGifs = [
  "/assets/games/freefire/443208ee4c6ee1f841be0f056df93c45.gif",
  "/assets/games/freefire/47e0617f0b782073a0d7fb064914a097.gif",
];

export const freefireClips = [
  "/assets/games/freefire/VID-20260709-WA0003.mp4",
  "/assets/games/freefire/VID-20260709-WA0004.mp4",
  "/assets/games/freefire/VID-20260709-WA0005.mp4",
  "/assets/games/freefire/VID-20260709-WA0006.mp4",
  "/assets/games/freefire/VID-20260709-WA0007.mp4",
  "/assets/games/freefire/VID-20260709-WA0008.mp4",
  "/assets/games/freefire/VID-20260709-WA0009.mp4",
  "/assets/games/freefire/VID-20260709-WA0010.mp4",
  "/assets/games/freefire/VID-20260709-WA0011.mp4",
  "/assets/games/freefire/VID-20260303-WA0004.mp4",
  "/assets/games/freefire/VID-20260303-WA0007.mp4",
  "/assets/games/freefire/VID-20260702-WA0062.mp4",
  "/assets/games/freefire/VID-20260709-WA0012.mp4",
  "/assets/games/freefire/VID-20260709-WA0013.mp4",
  "/assets/games/freefire/VID-20260709-WA0014.mp4",
  "/assets/games/freefire/VID-20260709-WA0015.mp4",
  "/assets/games/freefire/VID-20260709-WA0016.mp4",
  "/assets/games/freefire/VID-20260709-WA0017.mp4",
  "/assets/games/freefire/VID-20260709-WA0018.mp4",
  "/assets/games/freefire/VID-20260709-WA0019.mp4",
  "/assets/games/freefire/VID-20260709-WA0020.mp4",
  "/assets/games/freefire/VID-20260709-WA0021.mp4",
  "/assets/games/freefire/VID-20260709-WA0022.mp4",
  "/assets/games/freefire/VID-20260709-WA0023.mp4",
  "/assets/games/freefire/VID-20260709-WA0024.mp4",
  "/assets/games/freefire/VID-20260709-WA0025.mp4",
  "/assets/games/freefire/VID-20260709-WA0026.mp4",
  "/assets/games/freefire/VID-20260709-WA0027.mp4",
  "/assets/games/freefire/VID-20260709-WA0028.mp4",
  "/assets/games/freefire/VID-20260709-WA0029.mp4",
  "/assets/games/freefire/VID-20260303-WA0009.mp4",
  "/assets/games/freefire/VID-20260303-WA0010.mp4",
  "/assets/games/freefire/VID-20260303-WA0011.mp4",
  "/assets/games/freefire/VID-20260303-WA0012.mp4",
  "/assets/games/freefire/VID-20260708-WA0050.mp4",
  "/assets/games/freefire/VID-20260708-WA0293.mp4",
  "/assets/games/freefire/VID-20260707-WA0002.mp4",
];

// ── Horror Game Media ─────────────────────────────────────────────
export const horrorClips = [
  "/assets/games/horror/00fa165de6858e0efb767e38ec2508eb.gif",
  "/assets/games/horror/24918d2a3f24f46cec0c4a405d51c520.gif",
  "/assets/games/horror/2de6e437dab609d59cbc82966cc4f4c1.gif",
  "/assets/games/horror/d53dc10f52ce54be671cfb16643eaa9f.gif",
  "/assets/games/horror/e78997fbb915947287f6ffc25700b5f1.gif",
];

export const horrorImages = [
  "/assets/games/horror/a6b12f2d5d6d976eb3c6bbe5a08f123d.jpg",
];

// ── Intro Showcase Assets ─────────────────────────────────────────
export const introShowcaseAssets = [
  { type: "gif", src: "/assets/zoro/Zoro1.gif",            name: "Zoro1"     },
  { type: "gif", src: "/assets/zoro/Zoro2.gif",            name: "Zoro2"     },
  { type: "gif", src: "/assets/anime/Luffy.gif",           name: "Luffy"     },
  { type: "gif", src: "/assets/anime/itachifire.gif",      name: "itachifire" },
  { type: "gif", src: "/assets/anime/jinwoo.gif",          name: "jinwoo"    },
];

// ── Quick-access named exports ─────────────────────────────────────
export const heroBg        = "/assets/zoro/Zoro1.gif";
export const heroAura      = "/assets/zoro/Zoro2.gif";
export const gamingBg      = "/assets/games/freefire/443208ee4c6ee1f841be0f056df93c45.gif";
export const luffyAsset    = "/assets/anime/Luffy.gif";
export const itachifireAsset = "/assets/anime/itachifire.gif";
export const jinwooAsset   = "/assets/anime/jinwoo.gif";
export const zoro1Asset    = "/assets/zoro/Zoro1.gif";
export const zoro2Asset    = "/assets/zoro/Zoro2.gif";
export const profileImage  = "/assets/profile/harsha.jpg";
export const musicBg       = "/assets/music/background.mp3";
