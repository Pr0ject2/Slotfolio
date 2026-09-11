import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-11";

const gameTypes: Record<string, CatalogVerifiedGameType> = {
  "playn-go-king-of-sweets": { gameType: "Grid Slot", source: "https://www.playngo.com/games/king-of-sweets", verifiedAt },
  "playn-go-kings-mask": { gameType: "Video Slot", source: "https://www.playngo.com/games/king's-mask", verifiedAt },
  "playn-go-kings-mask-eclipse-of-gods": { gameType: "Video Slot", source: "https://www.playngo.com/games/king's-mask-eclipse-of-gods", verifiedAt },
  "playn-go-kingdom-below": { gameType: "Video Slot", source: "https://www.playngo.com/games/kingdom-below", verifiedAt },
  "playn-go-kiss-reels-of-rock": { gameType: "Video Slot", source: "https://www.playngo.com/games/kiss-reels-of-rock", verifiedAt },
  "playn-go-lab-of-madness-its-a-wild": { gameType: "Video Slot", source: "https://www.playngo.com/games/lab-of-madness-it's-a-wild!", verifiedAt },
  "playn-go-lady-of-fortune": { gameType: "Video Slot", source: "https://www.playngo.com/games/lady-of-fortune", verifiedAt },
  "playn-go-lady-of-fortune-destiny-spins": { gameType: "Video Slot", source: "https://www.playngo.com/games/lady-of-fortune-destiny-spins", verifiedAt },
  "playn-go-lady-of-fortune-remastered": { gameType: "Video Slot", source: "https://www.playngo.com/games/lady-of-fortune-remastered", verifiedAt },
  "playn-go-lawn-n-disorder": { gameType: "Video Slot", source: "https://www.playngo.com/games/lawn-n'-disorder", verifiedAt },
  "playn-go-legacy-of-dead": { gameType: "Video Slot", source: "https://www.playngo.com/games/legacy-of-dead", verifiedAt },
  "playn-go-legacy-of-dynasties": { gameType: "Video Slot", source: "https://www.playngo.com/games/legacy-of-dynasties", verifiedAt },
  "playn-go-legacy-of-egypt": { gameType: "Video Slot", source: "https://www.playngo.com/games/legacy-of-egypt", verifiedAt },
  "playn-go-legacy-of-gems-blitzways": { gameType: "Video Slot", source: "https://www.playngo.com/games/legacy-of-gems-blitzways", verifiedAt },
  "playn-go-legacy-of-inca": { gameType: "Video Slot", source: "https://www.playngo.com/games/legacy-of-inca", verifiedAt },
  "playn-go-legacy-of-undead-dragon-abyssways": { gameType: "Video Slot", source: "https://www.playngo.com/games/legacy-of-undead-dragon-abyssways", verifiedAt },
  "playn-go-legend-of-the-ice-dragon": { gameType: "Grid Slot", source: "https://www.playngo.com/games/legend-of-the-ice-dragon", verifiedAt },
  "playn-go-legion-gold": { gameType: "Video Slot", source: "https://www.playngo.com/games/legion-gold", verifiedAt },
  "playn-go-legion-gold-and-the-sphinx-of-dead": { gameType: "Video Slot", source: "https://www.playngo.com/games/legion-gold-and-the-sphinx-of-dead", verifiedAt },
  "playn-go-legion-gold-and-the-throne-of-dead": { gameType: "Video Slot", source: "https://www.playngo.com/games/legion-gold-and-the-throne-of-dead", verifiedAt },
  "playn-go-legion-gold-reckoning": { gameType: "Video Slot", source: "https://www.playngo.com/games/legion-gold-reckoning", verifiedAt },
  "playn-go-legion-gold-unleashed": { gameType: "Video Slot", source: "https://www.playngo.com/games/legion-gold-unleashed", verifiedAt },
};

export function getVerifiedCatalogGameTypePlayngoKL(slug: string) {
  return gameTypes[slug];
}
