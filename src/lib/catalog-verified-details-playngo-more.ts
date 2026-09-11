import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "playn-go-5x-magic": {
    releaseDate: "2012-11-30",
    source: "https://www.playngo.com/games/5x-magic",
    verifiedAt,
  },
  "playn-go-7-sins": {
    field: "5×3 · 243 способа",
    releaseDate: "2016-11-23",
    source: "https://www.playngo.com/games/7-sins",
    verifiedAt,
  },
  "playn-go-agent-destiny": {
    releaseDate: "2020-05-07",
    source: "https://www.playngo.com/games/agent-destiny",
    verifiedAt,
  },
  "playn-go-agent-of-hearts": {
    releaseDate: "2021-08-19",
    source: "https://www.playngo.com/games/agent-of-hearts",
    verifiedAt,
  },
  "playn-go-alice-cooper-and-the-tome-of-madness": {
    releaseDate: "2021-10-07",
    source: "https://www.playngo.com/games/alice-cooper-and-the-tome-of-madness",
    verifiedAt,
  },
  "playn-go-ankh-of-anubis": {
    field: "5 барабанов · 576 способов",
    releaseDate: "2019-05-12",
    source: "https://www.playngo.com/games/ankh-of-anubis",
    verifiedAt,
  },
  "playn-go-ankh-of-anubis-awakening": {
    releaseDate: "2024-08-22",
    source: "https://www.playngo.com/games/ankh-of-anubis-awakening",
    verifiedAt,
  },
  "playn-go-athena-ascending": {
    releaseDate: "2022-12-01",
    source: "https://www.playngo.com/games/athena-ascending",
    verifiedAt,
  },
  "playn-go-aztec-idols": {
    releaseDate: "2012-08-11",
    source: "https://www.playngo.com/games/aztec-idols",
    verifiedAt,
  },
  "playn-go-aztec-warrior-princess": {
    field: "До 20 линий",
    releaseDate: "2017-05-09",
    source: "https://www.playngo.com/games/aztec-warrior-princess",
    verifiedAt,
  },
};

export function getCatalogVerifiedDetailsPlayngoMore(slug: string) {
  return details[slug];
}
