import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-11";

const gameTypes: Record<string, CatalogVerifiedGameType> = {
  "playn-go-immortails-of-egypt": { gameType: "Video Slot", source: "https://www.playngo.com/games/immortails-of-egypt", verifiedAt },
  "playn-go-imperial-opera": { gameType: "Video Slot", source: "https://www.playngo.com/games/imperial-opera", verifiedAt },
  "playn-go-infernal-trinity-go-guaranteed": { gameType: "Video Slot", source: "https://www.playngo.com/games/infernal-trinity-go-guaranteed", verifiedAt },
  "playn-go-inferno-joker": { gameType: "Video Slot", source: "https://www.playngo.com/games/inferno-joker", verifiedAt },
  "playn-go-inferno-star": { gameType: "Video Slot", source: "https://www.playngo.com/games/inferno-star", verifiedAt },
  "playn-go-invading-vegas": { gameType: "Video Slot", source: "https://www.playngo.com/games/invading-vegas", verifiedAt },
  "playn-go-invading-vegas-revenge-on-mars": { gameType: "Video Slot", source: "https://www.playngo.com/games/invading-vegas-revenge-on-mars", verifiedAt },
  "playn-go-invading-vegas-las-christmas": { gameType: "Video Slot", source: "https://www.playngo.com/games/invading-vegas%3A-las-christmas", verifiedAt },
  "playn-go-irish-gold": { gameType: "Video Slot", source: "https://www.playngo.com/games/irish-gold", verifiedAt },
  "playn-go-iron-girl": { gameType: "Video Slot", source: "https://www.playngo.com/games/iron-girl", verifiedAt },
  "playn-go-jade-magician": { gameType: "Video Slot", source: "https://www.playngo.com/games/jade-magician", verifiedAt },
  "playn-go-jewel-box": { gameType: "Video Slot", source: "https://www.playngo.com/games/jewel-box", verifiedAt },
  "playn-go-joker-flip": { gameType: "Video Slot", source: "https://www.playngo.com/games/joker-flip", verifiedAt },
  "playn-go-jolly-roger": { gameType: "Video Slot", source: "https://www.playngo.com/games/jolly-roger", verifiedAt },
  "playn-go-jolly-roger-2": { gameType: "Video Slot", source: "https://www.playngo.com/games/jolly-roger-2", verifiedAt },
  "playn-go-jolly-roger-wild-kraken": { gameType: "Video Slot", source: "https://www.playngo.com/games/jolly-roger-wild-kraken", verifiedAt },
  "playn-go-journey-to-paris": { gameType: "Grid Slot", source: "https://www.playngo.com/games/journey-to-paris", verifiedAt },
};

export function getVerifiedCatalogGameTypePlayngoIJ(slug: string) {
  return gameTypes[slug];
}
