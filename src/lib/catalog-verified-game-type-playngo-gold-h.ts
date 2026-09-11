import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-11";

const gameTypes: Record<string, CatalogVerifiedGameType> = {
  "playn-go-gold-of-fortune-god": { gameType: "Video Slot", source: "https://www.playngo.com/games/gold-of-fortune-god", verifiedAt },
  "playn-go-gold-trophy-2": { gameType: "Video Slot", source: "https://www.playngo.com/games/gold-trophy-2", verifiedAt },
  "playn-go-gold-volcano": { gameType: "Grid Slot", source: "https://www.playngo.com/games/gold-volcano", verifiedAt },
  "playn-go-golden-caravan": { gameType: "Video Slot", source: "https://www.playngo.com/games/golden-caravan", verifiedAt },
  "playn-go-golden-colts": { gameType: "Video Slot", source: "https://www.playngo.com/games/golden-colts", verifiedAt },
  "playn-go-golden-legend": { gameType: "Video Slot", source: "https://www.playngo.com/games/golden-legend", verifiedAt },
  "playn-go-golden-osiris": { gameType: "Grid Slot", source: "https://www.playngo.com/games/golden-osiris", verifiedAt },
  "playn-go-golden-ticket": { gameType: "Grid Slot", source: "https://www.playngo.com/games/golden-ticket", verifiedAt },
  "playn-go-golden-ticket-2": { gameType: "Grid Slot", source: "https://www.playngo.com/games/golden-ticket-2", verifiedAt },
  "playn-go-grannys-wild": { gameType: "Video Slot", source: "https://www.playngo.com/games/granny's-wild", verifiedAt },
  "playn-go-hammerfall": { gameType: "Grid Slot", source: "https://www.playngo.com/games/hammerfall", verifiedAt },
  "playn-go-happy-halloween": { gameType: "Video Slot", source: "https://www.playngo.com/games/happy-halloween", verifiedAt },
  "playn-go-helloween": { gameType: "Video Slot", source: "https://www.playngo.com/games/helloween", verifiedAt },
  "playn-go-highway-legends": { gameType: "Video Slot", source: "https://www.playngo.com/games/highway-legends", verifiedAt },
  "playn-go-holiday-season": { gameType: "Video Slot", source: "https://www.playngo.com/games/holiday-season", verifiedAt },
  "playn-go-holiday-spirits": { gameType: "Video Slot", source: "https://www.playngo.com/games/holiday-spirits", verifiedAt },
  "playn-go-holy-moo-extreme-power": { gameType: "Grid Slot", source: "https://www.playngo.com/games/holy-moo!-extreme-power", verifiedAt },
  "playn-go-honey-rush": { gameType: "Grid Slot", source: "https://www.playngo.com/games/honey-rush", verifiedAt },
  "playn-go-honey-rush-100": { gameType: "Grid Slot", source: "https://www.playngo.com/games/honey-rush-100", verifiedAt },
  "playn-go-honey-rush-black-and-yellow": { gameType: "Grid Slot", source: "https://www.playngo.com/games/honey-rush-black-and-yellow", verifiedAt },
  "playn-go-hooligan-hustle": { gameType: "Video Slot", source: "https://www.playngo.com/games/hooligan-hustle", verifiedAt },
  "playn-go-hope-unleashed-fortune-rises": { gameType: "Video Slot", source: "https://www.playngo.com/games/hope-unleashed-fortune-rises", verifiedAt },
  "playn-go-hot-dog-heist": { gameType: "Video Slot", source: "https://www.playngo.com/games/hot-dog-heist", verifiedAt },
  "playn-go-hotel-yeti-way": { gameType: "Video Slot", source: "https://www.playngo.com/games/hotel-yeti-way", verifiedAt },
  "playn-go-house-of-doom": { gameType: "Video Slot", source: "https://www.playngo.com/games/house-of-doom", verifiedAt },
  "playn-go-house-of-doom-2-the-crypt": { gameType: "Video Slot", source: "https://www.playngo.com/games/house-of-doom-2%3A-the-crypt", verifiedAt },
  "playn-go-hugo": { gameType: "Video Slot", source: "https://www.playngo.com/games/hugo", verifiedAt },
  "playn-go-hugo-2": { gameType: "Video Slot", source: "https://www.playngo.com/games/hugo-2", verifiedAt },
  "playn-go-hugo-carts": { gameType: "Video Slot", source: "https://www.playngo.com/games/hugo-carts", verifiedAt },
  "playn-go-hugo-goal": { gameType: "Video Slot", source: "https://www.playngo.com/games/hugo-goal", verifiedAt },
  "playn-go-hugo-legacy": { gameType: "Grid Slot", source: "https://www.playngo.com/games/hugo-legacy", verifiedAt },
  "playn-go-hugos-adventure": { gameType: "Video Slot", source: "https://www.playngo.com/games/hugo's-adventure", verifiedAt },
  "playn-go-ice-joker": { gameType: "Video Slot", source: "https://www.playngo.com/games/ice-joker", verifiedAt },
  "playn-go-idol-of-fortune": { gameType: "Video Slot", source: "https://www.playngo.com/games/idol-of-fortune", verifiedAt },
};

export function getVerifiedCatalogGameTypePlayngoGoldH(slug: string) {
  return gameTypes[slug];
}
