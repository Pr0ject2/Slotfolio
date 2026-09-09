import type { Slot } from "./data";

const oneWinThreeOaksPromo =
  "https://forum.1win.com/topic/121-%F0%9F%8E%81-200-free-spins-every-day-in-3-oaks-gaming-games/";

export const slotAdditions6: Slot[] = [
  {
    slug: "777-coins",
    name: "777 Coins",
    provider: "3 Oaks Gaming",
    year: 2023,
    mechanic: "Линии",
    mechanics: ["Линии", "Сбор символов"],
    tags: ["Hold & Win", "Респины", "Collector", "Джекпоты", "Шкала прогресса"],
    field: "3 × 3",
    rtp: "95,75%",
    volatility: "Средняя",
    image: "/images/slots/777-coins.webp",
    description:
      "Компактная сетка 3 × 3 и пять фиксированных линий служат входом в Hold & Win, где центральный Collect-символ собирает значения монет, а новые символы обновляют счётчик респинов.",
    feature:
      "Два Bonus вместе с Collect запускают три респина. В бонусе Collect остаётся на месте, собирает значения, а jackpot-монеты добавляют уровни Mini, Minor, Major и Grand.",
    note:
      "Официальная страница 3 Oaks подтверждает сетку, пять линий, Hold & Win и максимум Grand 2 000x с возможностью утроения до 6 000x. RTP 95,75% — распространённая справочная конфигурация; операторскую версию нужно сверять в самой игре.",
    source: "https://3oaks.com/game/777_coins",
    availability: [
      {
        operator: "1win",
        verifiedAt: "2026-09-08",
        source: oneWinThreeOaksPromo,
        evidence:
          "Официальная промо-страница 1win прямо перечисляет 777 Coins by 3 Oaks Gaming среди eligible games.",
      },
    ],
  },
  {
    slug: "3-hot-chillies",
    name: "3 Hot Chillies",
    provider: "3 Oaks Gaming",
    year: 2023,
    mechanic: "Линии",
    mechanics: ["Линии", "Сбор символов"],
    tags: ["Hold & Win", "Респины", "Множители", "Двойное поле", "Джекпоты"],
    field: "5 × 3",
    rtp: "95,59%",
    volatility: "Средняя",
    image: "/images/slots/3-hot-chillies.webp",
    description:
      "Двадцать пять линий и три цветных Chilli-метра над барабанами. Каждый тип перца связан со своей модификацией Hold & Win и постепенно заряжает соответствующий сценарий.",
    feature:
      "В бонусе sticky-символы удерживаются между респинами. Активированные перцы могут добавить множители, четвёртый респин или второе игровое поле; все три модификатора способны работать одновременно.",
    note:
      "Официальная карточка 3 Oaks подтверждает сетку 5 × 3, 25 линий и три модификатора бонуса. RTP 95,59% и средняя волатильность используются как справочная опубликованная конфигурация, а не как гарантированная настройка 1win.",
    source: "https://3oaks.com/game/3_hot_chillies",
    availability: [
      {
        operator: "1win",
        verifiedAt: "2026-09-08",
        source: oneWinThreeOaksPromo,
        evidence:
          "Официальная промо-страница 1win прямо перечисляет 3 Hot Chillies by 3 Oaks Gaming среди eligible games.",
      },
    ],
  },
  {
    slug: "egypt-fire",
    name: "Egypt Fire",
    provider: "3 Oaks Gaming",
    year: 2023,
    mechanic: "Линии",
    mechanics: ["Линии", "Сбор символов"],
    tags: ["Hold & Win", "Респины", "Mystery", "Джекпоты", "Свободные вращения", "Расширяемое поле"],
    field: "5 × 4",
    rtp: "95,50%",
    volatility: "Высокая",
    image: "/images/slots/egypt-fire.webp",
    description:
      "Поле 5 × 4 и двадцать линий ведут к Hold & Win с Bonus и Mystery-символами. Внутри бонуса сетка может расширяться дополнительными рядами по мере накопления символов.",
    feature:
      "Шесть Bonus и/или Mystery запускают респины. Mystery заполняют jackpot-метры, новые Bonus удерживаются на поле, а полностью раскрытая сетка может довести Royal Jackpot до 10 000x.",
    note:
      "3 Oaks официально описывает сетку 5 × 4, 20 линий, расширение до дополнительных рядов, Free Spins и Royal Jackpot 10 000x. RTP 95,50% и высокая волатильность взяты как справочные значения из профильных каталогов; операторскую конфигурацию следует проверять отдельно.",
    source: "https://3oaks.com/game/egypt_fire",
    availability: [
      {
        operator: "1win",
        verifiedAt: "2026-09-08",
        source: oneWinThreeOaksPromo,
        evidence:
          "Официальная промо-страница 1win прямо перечисляет Egypt Fire by 3 Oaks Gaming среди eligible games.",
      },
    ],
  },
];
