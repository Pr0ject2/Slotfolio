export type Slot = {
  slug: string;
  name: string;
  provider: string;
  year: number;
  mechanic: string;
  field: string;
  rtp: string;
  volatility: string;
  image: string;
  featureImage?: string;
  description: string;
  feature: string;
  note: string;
  source: string;
};
export const slots: Slot[] = [
  {
    slug: "gates-of-olympus",
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    year: 2021,
    mechanic: "Каскады",
    field: "6 × 5",
    rtp: "96,50%",
    volatility: "Высокая",
    image: "/images/gates-of-olympus.png",
    featureImage: "/images/gates-of-olympus-feature.png",
    description:
      "Античный мир, каскадные символы и множители, которые меняют ход бонусного раунда. Разбираемся, что происходит за зрелищной оболочкой.",
    feature:
      "Множители в свободных вращениях суммируются и действуют на последующие выигрыши раунда.",
    note: "Игра строится вокруг ожидания множителя. Её зрелищность не означает частых выплат: паузы между результативными раундами могут быть длинными.",
    source: "https://www.pragmaticplay.com/en/games/gates-of-olympus/",
  },
  {
    slug: "sweet-bonanza",
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    year: 2019,
    mechanic: "Каскады",
    field: "6 × 5",
    rtp: "96,48%",
    volatility: "Высокая",
    image: "/images/sweet-bonanza.png",
    description:
      "За фруктами и конфетами скрывается система выплат без привычных линий. Одинаковые символы считаются по всему полю.",
    feature:
      "После выплаты символы исчезают, освобождая место новым. В бонусном раунде появляются множители.",
    note: "Хороший пример того, почему оформление и математическая модель — разные вещи. Лёгкая анимация здесь соседствует с высокой волатильностью.",
    source: "https://www.pragmaticplay.com/en/games/sweet-bonanza/",
  },
  {
    slug: "book-of-dead",
    name: "Book of Dead",
    provider: "Play’n GO",
    year: 2016,
    mechanic: "Линии",
    field: "5 × 3",
    rtp: "96,21%",
    volatility: "Высокая",
    image: "/images/book-of-dead.webp",
    description:
      "Египетское приключение с десятью линиями и расширяющимся символом. Лаконичная базовая игра и выразительный бонус.",
    feature:
      "В свободных вращениях выбранный символ может расширяться на весь барабан.",
    note: "Механика понятна после нескольких раундов. Основное разнообразие сосредоточено в бонусной игре, а не в базовых вращениях.",
    source: "https://www.playngo.com/games/book-of-dead",
  },
  {
    slug: "reactoonz",
    name: "Reactoonz",
    provider: "Play’n GO",
    year: 2017,
    mechanic: "Кластеры",
    field: "7 × 7",
    rtp: "96,51%",
    volatility: "Высокая",
    image: "/images/reactoonz.webp",
    description:
      "Цепные реакции на поле с одноглазыми существами. Вместо линий — соседние группы, накопление энергии и преобразование символов.",
    feature:
      "Кластерные выигрыши заряжают шкалу, которая последовательно активирует игровые эффекты.",
    note: "Самая насыщенная правилами игра в этой подборке. Сначала стоит разобраться со шкалой энергии: без неё происходящее выглядит случайной чередой эффектов.",
    source: "https://www.playngo.com/games/reactoonz",
  },
  {
    slug: "the-dog-house",
    name: "The Dog House",
    provider: "Pragmatic Play",
    year: 2019,
    mechanic: "Линии",
    field: "5 × 3",
    rtp: "96,51%",
    volatility: "Высокая",
    image: "/images/the-dog-house.png",
    description:
      "Собаки, будки и закрепляющиеся wild-символы. Классическая сетка с акцентом на сочетания множителей.",
    feature:
      "В бонусном раунде wild-символы закрепляются на барабанах до его окончания.",
    note: "Постоянное присутствие wild делает развитие бонуса наглядным. Но накопление символов не гарантирует итоговый результат.",
    source: "https://www.pragmaticplay.com/en/games/the-dog-house/",
  },
  {
    slug: "big-bass-bonanza",
    name: "Big Bass Bonanza",
    provider: "Pragmatic Play",
    year: 2020,
    mechanic: "Сбор символов",
    field: "5 × 3",
    rtp: "96,71%",
    volatility: "Высокая",
    image: "/images/big-bass-bonanza.png",
    description:
      "Рыбалка как механика: рыбак собирает значения денежных символов в свободных вращениях.",
    feature:
      "Повторное появление рыбака продвигает бонусный раунд к дополнительным вращениям и множителям.",
    note: "Здесь проще следить за сбором символов, чем за линиями. Это отдельный тип бонусной драматургии, который полезно сравнить с каскадами.",
    source: "https://www.pragmaticplay.com/en/games/big-bass-bonanza/",
  },
];
export const article = {
  href: "/journal/how-cascades-work",
  title: "Один спин — несколько событий",
  subtitle: "Как каскады изменили устройство слотов",
  category: "Разбор механики",
  minutes: 9,
};
export const getSlot = (slug: string) => slots.find((s) => s.slug === slug);
export const providerSlug = (name: string) =>
  name === "Pragmatic Play" ? "pragmatic-play" : "play-n-go";
export const mechanics = [
  {
    name: "Каскады",
    slug: "cascades",
    text: "Один ход продолжается, пока появляются выигрышные сочетания.",
  },
  {
    name: "Кластеры",
    slug: "clusters",
    text: "Символы объединяются в соседние группы вместо линий.",
  },
  {
    name: "Линии",
    slug: "lines",
    text: "Знакомая сетка с заданными маршрутами выигрышных сочетаний.",
  },
  {
    name: "Сбор символов",
    slug: "collect",
    text: "Отдельный символ собирает значения других символов на поле.",
  },
];
