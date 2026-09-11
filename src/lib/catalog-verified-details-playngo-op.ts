import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-oasis-of-dead": { releaseDate: "2024-07-04", source: "https://www.playngo.com/games/oasis-of-dead", verifiedAt },
  "playn-go-octopus-treasure": { releaseDate: "2020-09-10", source: "https://www.playngo.com/games/octopus-treasure", verifiedAt },
  "playn-go-odin-protector-of-realms": { releaseDate: "2021-07-29", source: "https://www.playngo.com/games/odin-protector-of-realms", verifiedAt },
  "playn-go-pack-and-cash": { field: "5 барабанов · 1024 способа", releaseDate: "2021-06-24", source: "https://www.playngo.com/games/pack-%26-cash", verifiedAt },
  "playn-go-pandastic-adventure": { releaseDate: "2024-01-11", source: "https://www.playngo.com/games/pandastic-adventure", verifiedAt },
  "playn-go-pandoras-box-of-evil": { releaseDate: "2023-03-02", source: "https://www.playngo.com/games/pandora's-box-of-evil", verifiedAt },
  "playn-go-pearl-lagoon": { releaseDate: "2012-10-05", source: "https://www.playngo.com/games/pearl-lagoon", verifiedAt },
  "playn-go-pearls-of-india": { releaseDate: "2014-10-08", source: "https://www.playngo.com/games/pearls-of-india", verifiedAt },
  "playn-go-perfect-gems": { field: "6 барабанов · Dynamic Payways", releaseDate: "2019-05-30", source: "https://www.playngo.com/games/perfect-gems", verifiedAt },
  "playn-go-phoenix-reborn": { releaseDate: "2019-04-16", source: "https://www.playngo.com/games/phoenix-reborn", verifiedAt },
  "playn-go-photo-safari": { field: "20 линий", releaseDate: "2012-11-29", source: "https://www.playngo.com/games/photo-safari", verifiedAt },
  "playn-go-piggy-bank-farm": { field: "5×4 · 50 линий", releaseDate: "2020-12-29", source: "https://www.playngo.com/games/piggy-bank-farm", verifiedAt },
  "playn-go-piggy-blitz": { releaseDate: "2023-09-21", source: "https://www.playngo.com/games/piggy-blitz", verifiedAt },
  "playn-go-piggy-blitz-casino-gold": { releaseDate: "2026-01-29", source: "https://www.playngo.com/games/piggy-blitz-casino-gold", verifiedAt },
  "playn-go-piggy-blitz-disco-gold": { releaseDate: "2024-11-07", source: "https://www.playngo.com/games/piggy-blitz-disco-gold", verifiedAt },
  "playn-go-piggy-heist": { releaseDate: "2025-12-16", source: "https://www.playngo.com/games/piggy-heist", verifiedAt },
  "playn-go-pilgrim-of-dead": { releaseDate: "2023-01-19", source: "https://www.playngo.com/games/pilgrim-of-dead", verifiedAt },
  "playn-go-pimped": { releaseDate: "2015-02-16", source: "https://www.playngo.com/games/pimped", verifiedAt },
  "playn-go-piranha-pays": { releaseDate: "2024-03-21", source: "https://www.playngo.com/games/piranha-pays", verifiedAt },
  "playn-go-planet-fortune": { field: "5 барабанов · 40 линий", releaseDate: "2018-01-24", source: "https://www.playngo.com/games/planet-fortune", verifiedAt },
  "playn-go-playn-go-buffalo-of-wealth": { field: "5×4 · до 5×8", releaseDate: "2025-07-31", source: "https://www.playngo.com/games/play'n-go-buffalo-of-wealth", verifiedAt },
  "playn-go-playn-go-mole-digger": { releaseDate: "2026-01-08", source: "https://www.playngo.com/games/play'n-go-mole-digger", verifiedAt },
  "playn-go-playn-go-wrappin-gold": { releaseDate: "2026-04-30", source: "https://www.playngo.com/games/wrappin'-gold", verifiedAt },
  "playn-go-potion-of-madness": { releaseDate: "2025-01-30", source: "https://www.playngo.com/games/potion-of-madness", verifiedAt },
  "playn-go-primal-rampage": { field: "3 барабана", releaseDate: "2026-06-04", source: "https://www.playngo.com/games/primal-rampage", verifiedAt },
  "playn-go-prism-of-gems": { field: "5 барабанов · до 3087 способов", releaseDate: "2021-05-27", source: "https://www.playngo.com/games/prism-of-gems", verifiedAt },
  "playn-go-prissy-princess": { releaseDate: "2017-02-22", source: "https://www.playngo.com/games/prissy-princess", verifiedAt },
  "playn-go-prosperity-palace": { field: "5 барабанов", releaseDate: "2017-10-04", source: "https://www.playngo.com/games/prosperity-palace", verifiedAt },
  "playn-go-puebla-parade": { releaseDate: "2022-04-21", source: "https://www.playngo.com/games/puebla-parade", verifiedAt },
};

export function getCatalogVerifiedDetailsPlayngoOP(slug: string) {
  return details[slug];
}
