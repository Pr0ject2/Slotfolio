import type { CatalogVerifiedGameType } from "./catalog-verified-game-type";

const verifiedAt = "2026-09-11";

const gameTypes: Record<string, CatalogVerifiedGameType> = {
  "playn-go-easter-eggs": { gameType: "Video Slot", source: "https://www.playngo.com/games/easter-eggs", verifiedAt },
  "playn-go-easter-eggspedition": { gameType: "Video Slot", source: "https://www.playngo.com/games/easter-eggspedition", verifiedAt },
  "playn-go-enchanted-crystals": { gameType: "Video Slot", source: "https://www.playngo.com/games/enchanted-crystals", verifiedAt },
  "playn-go-enchanted-meadow": { gameType: "Video Slot", source: "https://www.playngo.com/games/enchanted-meadow", verifiedAt },
  "playn-go-energoonz": { gameType: "Grid Slot", source: "https://www.playngo.com/games/energoonz", verifiedAt },
  "playn-go-eye-of-atum": { gameType: "Video Slot", source: "https://www.playngo.com/games/eye-of-atum", verifiedAt },
  "playn-go-eye-of-the-kraken": { gameType: "Video Slot", source: "https://www.playngo.com/games/eye-of-the-kraken", verifiedAt },
  "playn-go-fangs-and-fire": { gameType: "Video Slot", source: "https://www.playngo.com/games/fangs-%26-fire", verifiedAt },
  "playn-go-fat-frankies": { gameType: "Video Slot", source: "https://www.playngo.com/games/fat-frankies", verifiedAt },
  "playn-go-fate-of-dead-blitzways": { gameType: "Video Slot", source: "https://www.playngo.com/games/fate-of-dead-blitzways", verifiedAt },
  "playn-go-fates-fortune": { gameType: "Video Slot", source: "https://www.playngo.com/games/fate's-fortune", verifiedAt },
  "playn-go-feline-fury": { gameType: "Video Slot", source: "https://www.playngo.com/games/feline-fury", verifiedAt },
  "playn-go-fire-joker-100": { gameType: "Video Slot", source: "https://www.playngo.com/games/fire-joker-100", verifiedAt },
  "playn-go-fire-joker-blitz": { gameType: "Video Slot", source: "https://www.playngo.com/games/fire-joker-blitz", verifiedAt },
  "playn-go-fire-joker-freeze": { gameType: "Video Slot", source: "https://www.playngo.com/games/fire-joker-freeze", verifiedAt },
  "playn-go-fire-toad": { gameType: "Video Slot", source: "https://www.playngo.com/games/fire-toad", verifiedAt },
  "playn-go-fire-toad-2": { gameType: "Video Slot", source: "https://www.playngo.com/games/fire-toad-2", verifiedAt },
  "playn-go-firefly-frenzy": { gameType: "Video Slot", source: "https://www.playngo.com/games/firefly-frenzy", verifiedAt },
  "playn-go-forge-of-fortunes": { gameType: "Video Slot", source: "https://www.playngo.com/games/forge-of-fortunes", verifiedAt },
  "playn-go-forge-of-gems": { gameType: "Video Slot", source: "https://www.playngo.com/games/forge-of-gems", verifiedAt },
  "playn-go-fortune-teller": { gameType: "Video Slot", source: "https://www.playngo.com/games/fortune-teller", verifiedAt },
  "playn-go-fortunes-of-ali-baba": { gameType: "Video Slot", source: "https://www.playngo.com/games/fortunes-of-ali-baba", verifiedAt },
  "playn-go-fox-mayhem": { gameType: "Video Slot", source: "https://www.playngo.com/games/fox-mayhem", verifiedAt },
  "playn-go-free-reelin-joker": { gameType: "Video Slot", source: "https://www.playngo.com/games/free-reelin'-joker", verifiedAt },
  "playn-go-free-reelin-joker-1000": { gameType: "Video Slot", source: "https://www.playngo.com/games/free-reelin'-joker-1000", verifiedAt },
  "playn-go-frozen-gems": { gameType: "Video Slot", source: "https://www.playngo.com/games/frozen-gems", verifiedAt },
  "playn-go-fu-er-dai": { gameType: "Video Slot", source: "https://www.playngo.com/games/fu-er-dai", verifiedAt },
  "playn-go-fulong-88": { gameType: "Video Slot", source: "https://www.playngo.com/games/fulong-88", verifiedAt },
  "playn-go-game-of-gladiators": { gameType: "Video Slot", source: "https://www.playngo.com/games/game-of-gladiators", verifiedAt },
  "playn-go-game-of-gladiators-uprising": { gameType: "Video Slot", source: "https://www.playngo.com/games/game-of-gladiators%3A-uprising", verifiedAt },
  "playn-go-gargantoonz": { gameType: "Grid Slot", source: "https://www.playngo.com/games/gargantoonz", verifiedAt },
  "playn-go-gates-of-troy": { gameType: "Video Slot", source: "https://www.playngo.com/games/gates-of-troy", verifiedAt },
  "playn-go-gemix-2": { gameType: "Grid Slot", source: "https://www.playngo.com/games/gemix-2", verifiedAt },
  "playn-go-gerards-gambit": { gameType: "Video Slot", source: "https://www.playngo.com/games/gerard's-gambit", verifiedAt },
  "playn-go-ghost-of-dead": { gameType: "Video Slot", source: "https://www.playngo.com/games/ghost-of-dead", verifiedAt },
  "playn-go-gigantoonz": { gameType: "Grid Slot", source: "https://www.playngo.com/games/gigantoonz", verifiedAt },
  "playn-go-gnawn-gold": { gameType: "Video Slot", source: "https://www.playngo.com/games/gnaw'n-gold", verifiedAt },
  "playn-go-gold-king": { gameType: "Video Slot", source: "https://www.playngo.com/games/gold-king", verifiedAt },
};

export function getVerifiedCatalogGameTypePlayngoWave15To18(slug: string) {
  return gameTypes[slug];
}
