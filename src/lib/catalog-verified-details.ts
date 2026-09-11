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
};

export function getCatalogVerifiedDetails(slug: string) {
  return details[slug];
}
