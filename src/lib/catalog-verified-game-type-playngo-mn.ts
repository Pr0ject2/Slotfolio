import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-11";

const gameTypes: Record<string, CatalogVerifiedGameType> = {
  "playn-go-madame-ink": { gameType: "Video Slot", source: "https://www.playngo.com/games/madame-ink", verifiedAt },
  "playn-go-mafia-gold": { gameType: "Video Slot", source: "https://www.playngo.com/games/mafia-gold", verifiedAt },
  "playn-go-mahjong-88": { gameType: "Grid Slot", source: "https://www.playngo.com/games/mahjong-88", verifiedAt },
  "playn-go-manta-mayhem": { gameType: "Video Slot", source: "https://www.playngo.com/games/manta-mayhem", verifiedAt },
  "playn-go-matsuri": { gameType: "Video Slot", source: "https://www.playngo.com/games/matsuri", verifiedAt },
  "playn-go-medusas-madness": { gameType: "Grid Slot", source: "https://www.playngo.com/games/medusa's-madness", verifiedAt },
  "playn-go-mega-don": { gameType: "Video Slot", source: "https://www.playngo.com/games/mega-don", verifiedAt },
  "playn-go-mega-don-triple-threat": { gameType: "Video Slot", source: "https://www.playngo.com/games/mega-don-triple-threat", verifiedAt },
  "playn-go-mega-don-feeding-frenzy": { gameType: "Video Slot", source: "https://www.playngo.com/games/mega-don%3A-feeding-frenzy", verifiedAt },
  "playn-go-merlin-and-the-ice-queen-morgana": { gameType: "Video Slot", source: "https://www.playngo.com/games/merlin-and-the-ice-queen-morgana", verifiedAt },
  "playn-go-merlin-realm-of-charm": { gameType: "Video Slot", source: "https://www.playngo.com/games/merlin-realm-of-charm", verifiedAt },
  "playn-go-merlin-journey-of-flame": { gameType: "Video Slot", source: "https://www.playngo.com/games/merlin%3A-journey-of-flame", verifiedAt },
  "playn-go-merlins-grimoire": { gameType: "Video Slot", source: "https://www.playngo.com/games/merlin's-grimoire", verifiedAt },
  "playn-go-mermaids-diamond": { gameType: "Video Slot", source: "https://www.playngo.com/games/mermaid's-diamond", verifiedAt },
  "playn-go-merry-xmas": { gameType: "Video Slot", source: "https://www.playngo.com/games/merry-xmas", verifiedAt },
  "playn-go-midnight-gold": { gameType: "Video Slot", source: "https://www.playngo.com/games/midnight-gold", verifiedAt },
  "playn-go-miner-donkey-trouble": { gameType: "Grid Slot", source: "https://www.playngo.com/games/miner-donkey-trouble", verifiedAt },
  "playn-go-mirror-joker": { gameType: "Video Slot", source: "https://www.playngo.com/games/mirror-joker", verifiedAt },
  "playn-go-mission-cash": { gameType: "Video Slot", source: "https://www.playngo.com/games/mission-cash", verifiedAt },
  "playn-go-monkey-battle-for-the-scrolls": { gameType: "Video Slot", source: "https://www.playngo.com/games/monkey%3A-battle-for-the-scrolls", verifiedAt },
  "playn-go-moon-princess-100": { gameType: "Grid Slot", source: "https://www.playngo.com/games/moon-princess-100", verifiedAt },
  "playn-go-moon-princess-power-of-love": { gameType: "Grid Slot", source: "https://www.playngo.com/games/moon-princess-power-of-love", verifiedAt },
  "playn-go-moon-princess-stargazing": { gameType: "Grid Slot", source: "https://www.playngo.com/games/moon-princess-stargazing", verifiedAt },
  "playn-go-moon-princess-christmas-kingdom": { gameType: "Grid Slot", source: "https://www.playngo.com/games/moon-princess%3A-christmas-kingdom", verifiedAt },
  "playn-go-motley-crue": { gameType: "Video Slot", source: "https://www.playngo.com/games/m%C3%B6tley-cr%C3%BCe", verifiedAt },
  "playn-go-mount-m": { gameType: "Video Slot", source: "https://www.playngo.com/games/mount-m", verifiedAt },
  "playn-go-muerto-en-mictlan": { gameType: "Video Slot", source: "https://www.playngo.com/games/muerto-en-mictl%C3%A1n", verifiedAt },
  "playn-go-multifruit-81": { gameType: "Video Slot", source: "https://www.playngo.com/games/multifruit-81", verifiedAt },
  "playn-go-mystery-egg-surprise": { gameType: "Video Slot", source: "https://www.playngo.com/games/mystery-egg-surprise", verifiedAt },
  "playn-go-mystery-genie-fortunes-of-the-lamp": { gameType: "Video Slot", source: "https://www.playngo.com/games/mystery-genie--fortunes-of-the-lamp", verifiedAt },
  "playn-go-mystery-joker": { gameType: "Video Slot", source: "https://www.playngo.com/games/mystery-joker", verifiedAt },
  "playn-go-myth": { gameType: "Video Slot", source: "https://www.playngo.com/games/myth", verifiedAt },
  "playn-go-myth-of-dead": { gameType: "Video Slot", source: "https://www.playngo.com/games/myth-of-dead", verifiedAt },
  "playn-go-naughty-nicks-book": { gameType: "Video Slot", source: "https://www.playngo.com/games/naughty-nick's-book", verifiedAt },
  "playn-go-new-year-riches": { gameType: "Video Slot", source: "https://www.playngo.com/games/new-year-riches", verifiedAt },
  "playn-go-ninja-fruits": { gameType: "Video Slot", source: "https://www.playngo.com/games/ninja-fruits", verifiedAt },
};

export function getVerifiedCatalogGameTypePlayngoMN(slug: string) {
  return gameTypes[slug];
}
