export type CatalogVerifiedDetails = {
  field?: string;
  rtp?: string;
  maxWin?: string;
  volatility?: string;
  releaseDate?: string;
  source: string;
  verifiedAt: string;
};

const verifiedAt = "2026-09-11";

const details: Record<string, CatalogVerifiedDetails> = {
  "wazdan-mayan-ritual": { field: "5 барабанов · 40 линий", rtp: "96,29%", maxWin: "850x", volatility: "Низкая–средняя", releaseDate: "2018-09-03", source: "https://wazdan.com/games/mayan-ritual", verifiedAt },
  "wazdan-magic-stars-3": { field: "3 барабана · 5 линий", rtp: "96,50%", maxWin: "200x", volatility: "Низкая–средняя", releaseDate: "2018-02-06", source: "https://wazdan.com/games/magic-stars-3", verifiedAt },
  "wazdan-magic-stars-5": { field: "5 барабанов · 20 линий", rtp: "96,42%", maxWin: "305x", volatility: "Низкая–средняя", releaseDate: "2019-02-12", source: "https://wazdan.com/games/magic-stars-5", verifiedAt },
  "wazdan-magic-stars-6": { field: "6 барабанов · 20 линий", rtp: "96,49%", maxWin: "750x", volatility: "Низкая", releaseDate: "2019-04-16", source: "https://wazdan.com/games/magic-stars-6", verifiedAt },
  "wazdan-magic-target": { field: "5 барабанов · 20 линий", rtp: "96,63%", maxWin: "1250x", volatility: "Низкая", releaseDate: "2014-09-08", source: "https://wazdan.com/games/magic-target", verifiedAt },
  "wazdan-magic-target-deluxe": { field: "5 барабанов · 20 линий", rtp: "96,63%", maxWin: "1250x", volatility: "Низкая", releaseDate: "2017-06-09", source: "https://wazdan.com/games/magic-target-deluxe", verifiedAt },
  "wazdan-miami-beach": { field: "5 барабанов · 20 линий", rtp: "96,32%", maxWin: "7200x", volatility: "Средняя", releaseDate: "2014-08-09", source: "https://wazdan.com/games/miami-beach", verifiedAt },
  "wazdan-midnight-in-tokyo": { field: "5 барабанов · 243 способа", rtp: "96,15%", maxWin: "3000x", volatility: "Высокая", releaseDate: "2021-07-14", source: "https://wazdan.com/games/midnight-in-tokyo", verifiedAt },
  "wazdan-mystery-jack-deluxe": { field: "3 барабана · 27 линий", rtp: "96,49%", maxWin: "820x", volatility: "Высокая", releaseDate: "2017-12-01", source: "https://wazdan.com/games/mystery-jack-deluxe", verifiedAt },
  "wazdan-night-club-81": { field: "4 барабана · 81 линия", rtp: "95,91%", maxWin: "2240x", volatility: "Низкая–средняя", releaseDate: "2016-08-02", source: "https://wazdan.com/games/night-club-81", verifiedAt },
  "wazdan-reel-hero": { field: "5 барабанов · 20 линий", rtp: "96,22%", maxWin: "1050x", volatility: "Низкая–средняя", releaseDate: "2020-08-12", source: "https://wazdan.com/games/reel-hero", verifiedAt },
  "wazdan-reel-joke": { field: "6 барабанов · 20 линий", rtp: "96,20%", maxWin: "9500x", volatility: "Низкая–средняя", releaseDate: "2021-01-12", source: "https://wazdan.com/games/reel-joke", verifiedAt },
  "wazdan-prosperity-reels": { field: "6 барабанов · 46 656 способов", rtp: "96,12%", maxWin: "2100x", volatility: "Высокая", releaseDate: "2024-09-04", source: "https://wazdan.com/games/prosperity-reels", verifiedAt },
  "wazdan-fenix-play": { field: "3 барабана · 5 линий", rtp: "96,44%", maxWin: "75x", volatility: "Средняя", releaseDate: "2014-09-08", source: "https://wazdan.com/games/fenix-play", verifiedAt },
  "wazdan-hot-slot-777-cash-out": { field: "5 барабанов · 20 линий", rtp: "96,12%", maxWin: "1500x", volatility: "Средняя–высокая", releaseDate: "2023-04-13", source: "https://wazdan.com/games/hot-slot-777-cash-out", verifiedAt },
  "wazdan-hot-slot-777-cash-out-extremely-light": { field: "5 барабанов · 20 линий", rtp: "96,12%", maxWin: "1500x", volatility: "Средняя–высокая", releaseDate: "2023-09-28", source: "https://wazdan.com/games/hot-slot-777-cash-out-extremely-light", verifiedAt },
  "wazdan-hot-slot-777-cash-out-grand-gold-edition": { field: "5 барабанов · 20 линий", rtp: "96,12%", maxWin: "2500x", volatility: "Высокая", releaseDate: "2024-02-08", source: "https://wazdan.com/games/hot-slot-777-cash-out-grand-gold-edition", verifiedAt },
  "wazdan-hot-slot-777-cash-out-grand-platinum-edition": { field: "5 барабанов · 20 линий", rtp: "96,19%", maxWin: "3000x", volatility: "Высокая", releaseDate: "2024-08-01", source: "https://wazdan.com/games/hot-slot-777-cash-out-grand-platinum-edition", verifiedAt },
  "wazdan-hot-slot-777-cash-out-grand-diamond-edition": { field: "5 барабанов · 20 линий", rtp: "96,15%", maxWin: "3500x", volatility: "Высокая", releaseDate: "2024-11-27", source: "https://wazdan.com/games/hot-slot-777-cash-out-grand-diamond-edition", verifiedAt },
  "wazdan-hot-slot-777-coins": { field: "5 барабанов · 20 линий", rtp: "96,16%", maxWin: "635x", volatility: "Настраиваемая", releaseDate: "2023-05-11", source: "https://wazdan.com/games/hot-slot-777-coins", verifiedAt },
  "wazdan-hot-slot-777-coins-extremely-light": { field: "5 барабанов · 20 линий", rtp: "96,16%", maxWin: "635x", volatility: "Средняя", releaseDate: "2023-11-02", source: "https://wazdan.com/games/hot-slot-777-coins-extremely-light", verifiedAt },
  "wazdan-hot-slot-777-crown": { field: "5 барабанов · 20 линий", rtp: "96,42%", maxWin: "305x", volatility: "Низкая–средняя", releaseDate: "2022-04-12", source: "https://wazdan.com/games/hot-slot-777-crown", verifiedAt },
  "wazdan-hot-slot-777-stars": { field: "5 барабанов · 20 линий", rtp: "96,10%", maxWin: "500x", volatility: "Средняя", releaseDate: "2023-01-26", source: "https://wazdan.com/games/hot-slot-777-stars", verifiedAt },
  "wazdan-hot-slot-777-hold-the-jackpot": { field: "5 барабанов · 10 линий", rtp: "96,14%", maxWin: "1500x", volatility: "Высокая", releaseDate: "2025-05-15", source: "https://wazdan.com/games/hot-slot-777-hold-the-jackpot", verifiedAt },
  "wazdan-back-to-the-70s": { field: "5 барабанов · 20 линий", rtp: "96,47%", maxWin: "5150x", volatility: "Настраиваемая", source: "https://wazdan.com/games/back-to-the-70s", verifiedAt },
  "wazdan-criss-cross-81": { field: "4 барабана · 81 линия", rtp: "96,29%", maxWin: "2144x", volatility: "Средняя–высокая", releaseDate: "2012-11-19", source: "https://wazdan.com/games/criss-cross-81", verifiedAt },
  "wazdan-jack-on-hold": { field: "3 барабана · 5 линий", rtp: "96,40%", maxWin: "500x", volatility: "Низкая–средняя", releaseDate: "2016-02-11", source: "https://wazdan.com/games/jack-on-hold", verifiedAt },
  "wazdan-jackpot-builders": { field: "4 барабана · 9 линий", rtp: "96,59%", maxWin: "250x", volatility: "Средняя", releaseDate: "2017-02-05", source: "https://wazdan.com/games/jackpot-builders", verifiedAt },
  "wazdan-beach-party": { field: "5 барабанов · 20 линий", rtp: "96,37%", maxWin: "1650x", volatility: "Низкая", releaseDate: "2014-09-08", source: "https://wazdan.com/games/beach-party", verifiedAt },
  "wazdan-mystery-kingdom-mystery-bells": { field: "12 позиций · 0 линий", rtp: "96,13%", maxWin: "750x", volatility: "Высокая", releaseDate: "2023-03-30", source: "https://wazdan.com/games/mystery-kingdom-mystery-bells", verifiedAt },
  "wazdan-mighty-hot-777": { field: "5 барабанов · 10 способов", rtp: "96,15%", maxWin: "2500x", volatility: "Средняя", releaseDate: "2025-11-28", source: "https://wazdan.com/games/mighty-hot-777", verifiedAt },
  "wazdan-sizzling-eggs": { field: "5 барабанов · 5 линий", rtp: "96,12%", maxWin: "2500x", volatility: "Очень высокая", releaseDate: "2022-06-08", source: "https://wazdan.com/games/sizzling-eggs", verifiedAt },
  "wazdan-sizzling-eggs-extremely-light": { field: "5 барабанов · 5 линий", rtp: "96,12%", maxWin: "2500x", volatility: "Очень высокая", releaseDate: "2023-10-26", source: "https://wazdan.com/games/sizzling-eggs-extremely-light", verifiedAt },
  "wazdan-sizzling-bells": { field: "5 барабанов · 5 линий", rtp: "96,20%", maxWin: "15000x", volatility: "Высокая", releaseDate: "2021-10-19", source: "https://wazdan.com/games/sizzling-bells", verifiedAt },
  "wazdan-sizzling-kingdom-bison": { field: "6 барабанов · 10 линий", rtp: "96,12%", maxWin: "5000x", volatility: "Экстремальная", releaseDate: "2022-08-25", source: "https://wazdan.com/games/sizzling-kingdom-bison", verifiedAt },
  "wazdan-telly-reels": { field: "5 барабанов · 20 линий", rtp: "96,19%", maxWin: "1400x", volatility: "Низкая", releaseDate: "2020-10-08", source: "https://wazdan.com/games/telly-reels", verifiedAt },
  "wazdan-9-tigers": { field: "3 барабана · 8 линий", rtp: "96,15%", maxWin: "1000x", volatility: "Высокая", releaseDate: "2020-08-18", source: "https://wazdan.com/games/9-tigers", verifiedAt },
  "wazdan-arcade": { field: "3 барабана · 1 линия", rtp: "96,62%", maxWin: "409x", source: "https://wazdan.com/games/arcade", verifiedAt },
  "wazdan-bars7s": { field: "3 барабана · 8 линий", rtp: "96,43%", maxWin: "40x", volatility: "Низкая–средняя", releaseDate: "2017-09-15", source: "https://wazdan.com/games/bars7s", verifiedAt },
  "wazdan-bell-wizard": { field: "5 барабанов · 9 линий", rtp: "96,50%", maxWin: "2300x", volatility: "Средняя", releaseDate: "2016-02-10", source: "https://wazdan.com/games/bell-wizard", verifiedAt },
  "wazdan-bells-of-fortune": { field: "16 позиций · 0 линий", rtp: "96,10%", maxWin: "1000x", volatility: "Высокая", releaseDate: "2025-08-28", source: "https://wazdan.com/games/bells-of-fortune", verifiedAt },
  "wazdan-black-hawk": { field: "4 барабана · 54 линии", rtp: "96,23%", maxWin: "600x", source: "https://wazdan.com/games/black-hawk", verifiedAt },
  "wazdan-black-hawk-deluxe": { field: "4 барабана · 54 линии", rtp: "96,47%", maxWin: "600x", volatility: "Средняя", releaseDate: "2018-11-11", source: "https://wazdan.com/games/black-hawk-deluxe", verifiedAt },
  "wazdan-black-horse-cash-out-edition": { field: "5 барабанов · 20 линий", rtp: "96,12%", maxWin: "2500x", volatility: "Высокая", source: "https://wazdan.com/games/black-horse-cash-out-edition", verifiedAt },
  "wazdan-lucky-reels": { field: "6 барабанов · 20 линий", rtp: "96,60%", maxWin: "900x", volatility: "Низкая", releaseDate: "2019-09-06", source: "https://wazdan.com/games/lucky-reels", verifiedAt },
  "wazdan-hot-slot-great-book-of-magic": { field: "5 барабанов · 10 линий", rtp: "96,19%", maxWin: "6000x", volatility: "Настраиваемая", releaseDate: "2023-03-16", source: "https://wazdan.com/games/hot-slot-great-book-of-magic", verifiedAt },
  "wazdan-magic-hot-4-deluxe": { field: "4 барабана · 10 линий", rtp: "96,10%", maxWin: "260x", volatility: "Средняя", releaseDate: "2017-12-01", source: "https://wazdan.com/games/magic-hot-4-deluxe", verifiedAt },
  "wazdan-vegas-hot-81": { field: "4 барабана · 81 линия", rtp: "96,35%", maxWin: "5850x", volatility: "Средняя–высокая", releaseDate: "2016-02-11", source: "https://wazdan.com/games/vegas-hot-81", verifiedAt },
  "wazdan-win-replay": { field: "3 барабана · 5 линий", rtp: "96,99%", maxWin: "500x", volatility: "Средняя", releaseDate: "2014-09-08", source: "https://wazdan.com/games/win-replay", verifiedAt },
  "wazdan-turbo-play": { field: "3 барабана · 1 линия", rtp: "96,10%", maxWin: "300x", volatility: "Средняя–высокая", source: "https://wazdan.com/games/turbo-play", verifiedAt },
  "wazdan-hot-777": { field: "3 барабана · 5 линий", rtp: "96,19%", maxWin: "3100x", volatility: "Средняя", source: "https://wazdan.com/games/hot-777", verifiedAt },
  "wazdan-fenix-play-27": { field: "3 барабана · 27 линий", rtp: "96,25%", maxWin: "748x", volatility: "Высокая", source: "https://wazdan.com/games/fenix-play-27", verifiedAt },
  "wazdan-relic-hunters-and-the-book-of-faith": { field: "6 барабанов · 20 линий", rtp: "96,37%", maxWin: "750x", volatility: "Низкая–средняя", source: "https://wazdan.com/games/relic-hunters-and-the-book-of-faith", verifiedAt },
  "wazdan-12-bells": { field: "12 позиций · 0 линий", rtp: "96,15%", maxWin: "750x", volatility: "Высокая", releaseDate: "2024-11-06", source: "https://wazdan.com/games/12-bells", verifiedAt },
};

export function getCatalogVerifiedDetails(slug: string) {
  return details[slug];
}
