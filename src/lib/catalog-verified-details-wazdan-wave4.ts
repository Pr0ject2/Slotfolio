import type { CatalogVerifiedDetails } from "./catalog-verified-details";

const verifiedAt = "2026-09-12";

const details: Record<string, CatalogVerifiedDetails> = {
  "wazdan-space-gem": { field: "6 барабанов · 10 линий", source: "https://wazdan.com/games/space-gem", verifiedAt },
  "wazdan-space-spins": { field: "6 барабанов · 40 линий", releaseDate: "2019-05-09", source: "https://wazdan.com/games/space-spins", verifiedAt },
  "wazdan-spectrum": { field: "5 барабанов · 10 линий", releaseDate: "2018-08-15", source: "https://wazdan.com/games/spectrum", verifiedAt },
  "wazdan-sun-of-fortune": { field: "16 барабанов", releaseDate: "2021-04-27", source: "https://wazdan.com/games/sun-of-fortune", verifiedAt },
  "wazdan-super-hot": { field: "3 барабана · 5 линий", releaseDate: "2014-08-09", source: "https://wazdan.com/games/super-hot", verifiedAt },
  "wazdan-throne-of-elements-platinum": { field: "25 барабанов", releaseDate: "2026-09-02", source: "https://wazdan.com/games/throne-of-elements-platinum", verifiedAt },
  "wazdan-mighty-wild-panther-grand-diamond-edition": { field: "15 барабанов", releaseDate: "2024-08-13", source: "https://wazdan.com/games/mighty-wild-panther-grand-diamond-edition", verifiedAt },
  "wazdan-triple-star": { field: "5 барабанов · 20 линий", releaseDate: "2014-08-09", source: "https://wazdan.com/games/triple-star", verifiedAt },
  "wazdan-unicorn-reels": { field: "5 барабанов · 10 линий", releaseDate: "2021-01-27", source: "https://wazdan.com/games/unicorn-reels", verifiedAt },
  "wazdan-valentines-coins": { field: "9 барабанов", releaseDate: "2026-02-03", source: "https://wazdan.com/games/valentines-coins", verifiedAt },
  "wazdan-valhalla": { field: "4 барабана · 54 линии", releaseDate: "2017-07-06", source: "https://wazdan.com/games/valhalla", verifiedAt },
  "wazdan-vegas-hot": { field: "3 барабана · 5 линий", source: "https://wazdan.com/games/vegas-hot", verifiedAt },
  "wazdan-vegas-reels-ii": { field: "3 барабана · 1 линия", source: "https://wazdan.com/games/vegas-reels-ii", verifiedAt },
  "wazdan-welcome-to-hell-81": { field: "4 барабана · 81 линия", releaseDate: "2016-02-11", source: "https://wazdan.com/games/welcome-to-hell-81", verifiedAt },
  "wazdan-wild-girls": { field: "3 барабана · 5 линий", releaseDate: "2013-02-06", source: "https://wazdan.com/games/wild-girls", verifiedAt },
  "wazdan-wild-guns": { field: "5 барабанов · 5 линий", releaseDate: "2017-09-15", source: "https://wazdan.com/games/wild-guns", verifiedAt },
  "wazdan-wild-jack": { field: "3 барабана · 27 линий", releaseDate: "2014-09-08", source: "https://wazdan.com/games/wild-jack", verifiedAt },
  "wazdan-wild-jack-81": { field: "4 барабана · 81 линия", releaseDate: "2014-09-08", source: "https://wazdan.com/games/wild-jack-81", verifiedAt },
};

export function getCatalogVerifiedDetailsWazdanWave4(slug: string) {
  return details[slug];
}
