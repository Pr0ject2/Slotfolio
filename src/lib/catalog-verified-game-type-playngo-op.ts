import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-11";

const videoSlotSources: Record<string, string> = {
  "playn-go-oasis-of-dead": "https://www.playngo.com/games/oasis-of-dead",
  "playn-go-octopus-treasure": "https://www.playngo.com/games/octopus-treasure",
  "playn-go-pack-and-cash": "https://www.playngo.com/games/pack-%26-cash",
  "playn-go-pandastic-adventure": "https://www.playngo.com/games/pandastic-adventure",
  "playn-go-pandoras-box-of-evil": "https://www.playngo.com/games/pandora's-box-of-evil",
  "playn-go-pearl-lagoon": "https://www.playngo.com/games/pearl-lagoon",
  "playn-go-pearls-of-india": "https://www.playngo.com/games/pearls-of-india",
  "playn-go-perfect-gems": "https://www.playngo.com/games/perfect-gems",
  "playn-go-phoenix-reborn": "https://www.playngo.com/games/phoenix-reborn",
  "playn-go-photo-safari": "https://www.playngo.com/games/photo-safari",
  "playn-go-piggy-bank-farm": "https://www.playngo.com/games/piggy-bank-farm",
  "playn-go-piggy-blitz": "https://www.playngo.com/games/piggy-blitz",
  "playn-go-piggy-blitz-casino-gold": "https://www.playngo.com/games/piggy-blitz-casino-gold",
  "playn-go-piggy-blitz-disco-gold": "https://www.playngo.com/games/piggy-blitz-disco-gold",
  "playn-go-piggy-heist": "https://www.playngo.com/games/piggy-heist",
  "playn-go-pilgrim-of-dead": "https://www.playngo.com/games/pilgrim-of-dead",
  "playn-go-pimped": "https://www.playngo.com/games/pimped",
  "playn-go-piranha-pays": "https://www.playngo.com/games/piranha-pays",
  "playn-go-planet-fortune": "https://www.playngo.com/games/planet-fortune",
  "playn-go-playn-go-buffalo-of-wealth": "https://www.playngo.com/games/play'n-go-buffalo-of-wealth",
  "playn-go-playn-go-mole-digger": "https://www.playngo.com/games/play'n-go-mole-digger",
  "playn-go-playn-go-wrappin-gold": "https://www.playngo.com/games/wrappin'-gold",
  "playn-go-potion-of-madness": "https://www.playngo.com/games/potion-of-madness",
  "playn-go-primal-rampage": "https://www.playngo.com/games/primal-rampage",
  "playn-go-prism-of-gems": "https://www.playngo.com/games/prism-of-gems",
  "playn-go-prissy-princess": "https://www.playngo.com/games/prissy-princess",
  "playn-go-prosperity-palace": "https://www.playngo.com/games/prosperity-palace",
  "playn-go-puebla-parade": "https://www.playngo.com/games/puebla-parade",
};

const gameTypes: Record<string, CatalogVerifiedGameType> = Object.fromEntries(
  Object.entries(videoSlotSources).map(([slug, source]) => [slug, { gameType: "Video Slot", source, verifiedAt }]),
);

gameTypes["playn-go-odin-protector-of-realms"] = {
  gameType: "Grid Slot",
  source: "https://www.playngo.com/games/odin-protector-of-realms",
  verifiedAt,
};

export function getVerifiedCatalogGameTypePlayngoOP(slug: string) {
  return gameTypes[slug];
}
