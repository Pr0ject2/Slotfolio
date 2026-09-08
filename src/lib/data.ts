export type OperatorAvailability = {
  operator: "1win";
  verifiedAt: string;
  source: string;
  evidence: string;
};

export type Slot = {
  slug: string;
  name: string;
  provider: string;
  year: number;
  mechanic: string;
  mechanics: string[];
  tags: string[];
  field: string;
  rtp: string;
  volatility: string;
  image: string;
  featureImage?: string;
  description: string;
  feature: string;
  note: string;
  source: string;
  availability?: OperatorAvailability[];
};

export const slots: Slot[] = [
  {
    slug: "gates-of-olympus",
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    year: 2021,
    mechanic: "Каскады",
    mechanics: ["Каскады"],
    tags: ["Свободные вращения", "Множители", "Pay Anywhere"],
    field: "6 × 5",
    rtp: "96,50%",
    volatility: "Высокая",
    image: "/images/slots/gates-of-olympus.webp",
    featureImage: "/images/slots/gates-of-olympus-feature.webp",
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
    mechanics: ["Каскады"],
    tags: ["Свободные вращения", "Множители", "Pay Anywhere"],
    field: "6 × 5",
    rtp: "96,48%",
    volatility: "Высокая",
    image: "/images/slots/sweet-bonanza.webp",
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
    mechanics: ["Линии"],
    tags: ["Свободные вращения", "Расширяющийся символ", "Book-бонус"],
    field: "5 × 3",
    rtp: "96,21%",
    volatility: "Высокая",
    image: "/images/slots/book-of-dead.webp",
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
    mechanics: ["Кластеры", "Каскады"],
    tags: ["Каскады", "Шкала прогресса", "Преобразование символов"],
    field: "7 × 7",
    rtp: "96,51%",
    volatility: "Высокая",
    image: "/images/slots/reactoonz.webp",
    description:
      "Цепные реакции на поле с одноглазыми существами. Вместо линий — соседние группы, накопление энергии и преобразование символов.",
    feature:
      "Кластерные выигрыши заряжают шкалу, которая последовательно активирует игровые эффекты.",
    note: "Самая насыщенная правилами игра в подборке. Сначала стоит разобраться со шкалой энергии: без неё происходящее выглядит случайной чередой эффектов.",
    source: "https://www.playngo.com/games/reactoonz",
  },
  {
    slug: "the-dog-house",
    name: "The Dog House",
    provider: "Pragmatic Play",
    year: 2019,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Свободные вращения", "Закрепляющийся wild", "Множители"],
    field: "5 × 3",
    rtp: "96,51%",
    volatility: "Высокая",
    image: "/images/slots/the-dog-house.webp",
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
    mechanics: ["Сбор символов", "Линии"],
    tags: ["Свободные вращения", "Сбор значений", "Шкала прогресса"],
    field: "5 × 3",
    rtp: "96,71%",
    volatility: "Высокая",
    image: "/images/slots/big-bass-bonanza.webp",
    description:
      "Рыбалка как механика: рыбак собирает значения денежных символов в свободных вращениях.",
    feature:
      "Повторное появление рыбака продвигает бонусный раунд к дополнительным вращениям и множителям.",
    note: "Здесь проще следить за сбором символов, чем за линиями. Это отдельный тип бонусной драматургии, который полезно сравнить с каскадами.",
    source: "https://www.pragmaticplay.com/en/games/big-bass-bonanza/",
  },
  {
    slug: "jammin-jars",
    name: "Jammin’ Jars",
    provider: "Push Gaming",
    year: 2018,
    mechanic: "Кластеры",
    mechanics: ["Кластеры", "Каскады"],
    tags: ["Каскады", "Wild", "Множители"],
    field: "8 × 8",
    rtp: "96,83%",
    volatility: "Высокая",
    image: "/images/slots/jammin-jars.webp",
    description:
      "Большое поле 8 × 8, кластерные выплаты и каскады. Wild-банки перемещаются по полю и наращивают множитель после участия в выигрыше.",
    feature:
      "Для выплаты нужно собрать кластер из пяти и более одинаковых фруктов, после чего символы исчезают и запускают новый каскад.",
    note: "На большом поле легко потеряться в анимации. Полезнее всего следить за положением wild-банок и тем, в каких кластерах они реально участвуют.",
    source: "https://www.pushgaming.com/games/jammin-jars.html",
  },
  {
    slug: "razor-shark",
    name: "Razor Shark",
    provider: "Push Gaming",
    year: 2019,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Mystery-символы", "Множители", "Свободные вращения"],
    field: "5 × 4",
    rtp: "96,70%",
    volatility: "Высокая",
    image: "/images/slots/razor-shark.webp",
    description:
      "Двадцать линий, mystery-стеки и отдельная функция раскрытия золотой акулы. Бонус строится вокруг сдвигающихся стеков и растущего множителя.",
    feature:
      "Mystery-стеки могут раскрывать символы и запускать Razor Reveal с мгновенными множителями и scatter-символами.",
    note: "Базовая сетка здесь вполне классическая, а сложность появляется поверх неё. Сначала разберите работу mystery-стеков, а уже потом бонусные множители.",
    source: "https://www.pushgaming.com/games/razor-shark.html",
  },
  {
    slug: "wanted-dead-or-a-wild",
    name: "Wanted Dead or a Wild",
    provider: "Hacksaw Gaming",
    year: 2021,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Wild", "Множители", "Несколько бонусов"],
    field: "5 × 5",
    rtp: "96,38%",
    volatility: "Высокая",
    image: "/images/slots/wanted-dead-or-a-wild.webp",
    description:
      "Пятнадцать линий и три заметно разных бонусных сценария. VS-символы раскрывают целые wild-барабаны и добавляют множители к линиям.",
    feature:
      "DuelReels превращают VS-символы в расширенные wild-барабаны, а их множители суммируются для общей выигрышной линии.",
    note: "Игра специально переносит большую часть внимания в редкие бонусные ситуации. Не стоит судить о её темпе по количеству эффектов на экране.",
    source: "https://www.hacksawgaming.com/games/wanted-dead-or-a-wild",
  },
  {
    slug: "le-bandit",
    name: "Le Bandit",
    provider: "Hacksaw Gaming",
    year: 2023,
    mechanic: "Кластеры",
    mechanics: ["Кластеры", "Каскады"],
    tags: ["Каскады", "Золотые клетки", "Сбор значений"],
    field: "6 × 5",
    rtp: "96,34%",
    volatility: "Средняя",
    image: "/images/slots/le-bandit.webp",
    description:
      "Кластерные выплаты, суперкаскады и золотые клетки, которые сохраняют след выигрышных позиций. Поверх них работают монеты, клеверы и горшки золота.",
    feature:
      "После выигрыша исчезают не только участвовавшие символы, но и совпадающие символы того же типа на поле, продолжая суперкаскад.",
    note: "У Le Bandit несколько слоёв правил, но базовый вопрос простой: где появился кластер и какие клетки после него стали золотыми.",
    source: "https://www.hacksawgaming.com/games/le-bandit",
  },
  {
    slug: "san-quentin-xways",
    name: "San Quentin xWays",
    provider: "Nolimit City",
    year: 2021,
    mechanic: "Способы",
    mechanics: ["Способы"],
    tags: ["xWays", "Split-символы", "Динамическое поле"],
    field: "5 × 3+",
    rtp: "96,03%",
    volatility: "Экстремальная",
    image: "/images/slots/san-quentin-xways.webp",
    description:
      "Базовое поле 5 × 3 дополняют enhancer-клетки, split-символы и xWays. Число возможных маршрутов может резко увеличиваться прямо внутри вращения.",
    feature:
      "xWays раскрывает стек одинаковых символов, а split-механики делят позиции и увеличивают количество возможных сочетаний.",
    note: "Это уже не игра для чтения одной статичной сетки. Проще воспринимать её как систему, где размер позиций и число маршрутов меняются по ходу раунда.",
    source: "https://nolimitcity.com/games/san-quentin",
  },
  {
    slug: "fire-in-the-hole",
    name: "Fire in the Hole",
    provider: "Nolimit City",
    year: 2021,
    mechanic: "Способы",
    mechanics: ["Способы", "Каскады"],
    tags: ["Каскады", "xBomb", "Динамическое поле"],
    field: "6 × 3 → 6 × 6",
    rtp: "96,06%",
    volatility: "Экстремальная",
    image: "/images/slots/fire-in-the-hole.webp",
    description:
      "Шахта начинается с трёх активных рядов и раскрывается до шести. Количество способов растёт вместе с полем, а xBomb запускает новые обвалы и множители.",
    feature:
      "Каждый новый collapse может открыть дополнительный ряд, увеличивая поле с 64 до 46 656 способов собрать комбинацию.",
    note: "Здесь важнее следить не за отдельным символом, а за состоянием всей сетки: сколько рядов уже открыто и какой множитель переносится в следующий обвал.",
    source: "https://nolimitcity.com/games/fire-in-the-hole",
  },

  {
    slug: "starlight-princess",
    name: "Starlight Princess",
    provider: "Pragmatic Play",
    year: 2021,
    mechanic: "Каскады",
    mechanics: ["Каскады"],
    tags: ["Свободные вращения", "Множители", "Pay Anywhere"],
    field: "6 × 5",
    rtp: "96,50%",
    volatility: "Высокая",
    image: "/images/slots/starlight-princess.webp",
    description:
      "Выплаты за одинаковые символы в любых позициях сочетаются с каскадами и множителями. По устройству это близкий родственник Gates of Olympus, но с другой визуальной подачей.",
    feature:
      "После выигрышной комбинации символы исчезают, а множители, выпавшие в той же последовательности, суммируются перед применением к выигрышу.",
    note: "Полезная игра для прямого сравнения с Gates of Olympus: одинаковая базовая логика особенно хорошо показывает, как оформление меняет восприятие одной и той же структуры.",
    source: "https://www.pragmaticplay.com/en/games/starlight-princess/",
  },
  {
    slug: "sugar-rush",
    name: "Sugar Rush",
    provider: "Pragmatic Play",
    year: 2022,
    mechanic: "Кластеры",
    mechanics: ["Кластеры", "Каскады"],
    tags: ["Каскады", "Множители", "Золотые клетки"],
    field: "7 × 7",
    rtp: "96,50%",
    volatility: "Высокая",
    image: "/images/slots/sugar-rush.webp",
    description:
      "Кластерная сетка 7 × 7, каскады и клетки-множители. Повторные выигрыши на одной позиции постепенно усиливают её значение.",
    feature:
      "Кластер из пяти и более соседних символов запускает каскад, а выигрышные позиции отмечаются и могут получать растущие множители.",
    note: "Здесь важно смотреть не только на сами кластеры, но и на историю отдельных клеток: значимым становится место, где уже происходили выигрыши.",
    source: "https://www.pragmaticplay.com/en/games/sugar-rush/",
  },
  {
    slug: "fruit-party",
    name: "Fruit Party",
    provider: "Pragmatic Play",
    year: 2020,
    mechanic: "Кластеры",
    mechanics: ["Кластеры", "Каскады"],
    tags: ["Каскады", "Множители", "Свободные вращения"],
    field: "7 × 7",
    rtp: "96,47%",
    volatility: "Высокая",
    image: "/images/slots/fruit-party.webp",
    description:
      "Большое фруктовое поле, кластерные выплаты и tumbling-цепочки. В бонусе выигрышные группы могут получать случайные множители.",
    feature:
      "После кластера символы удаляются, сверху приходят новые, а в свободных вращениях отдельные выигрышные блоки получают множители.",
    note: "Хороший базовый пример кластера без сложной системы накопления. Сначала читается группа символов, затем уже дополнительные множители.",
    source: "https://www.pragmaticplay.com/en/games/fruit-party/",
  },
  {
    slug: "legacy-of-dead",
    name: "Legacy of Dead",
    provider: "Play’n GO",
    year: 2020,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Свободные вращения", "Расширяющийся символ", "Book-бонус"],
    field: "5 × 3",
    rtp: "96,58%",
    volatility: "Высокая",
    image: "/images/slots/legacy-of-dead.webp",
    description:
      "Классическая египетская сетка с десятью линиями и расширяющимся символом в свободных вращениях. Базовая игра намеренно остаётся простой.",
    feature:
      "В бонусном раунде случайно выбирается специальный символ, который при достаточном количестве может расширяться на барабан целиком.",
    note: "Полезно поставить рядом с Book of Dead: сходная структура позволяет увидеть, насколько небольшие изменения бонуса влияют на ощущение от игры.",
    source: "https://www.playngo.com/games/legacy-of-dead",
  },
  {
    slug: "fire-joker",
    name: "Fire Joker",
    provider: "Play’n GO",
    year: 2016,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Respin", "Wild", "Множители"],
    field: "3 × 3",
    rtp: "96,15%",
    volatility: "Средняя",
    image: "/images/slots/fire-joker.webp",
    description:
      "Компактный слот 3 × 3 с пятью линиями, повторным вращением и колесом множителей. Один из самых лаконичных примеров классической схемы.",
    feature:
      "Совпавшие стопки на двух барабанах могут закрепиться и дать повторное вращение третьего, а полный экран одинаковых символов запускает множитель.",
    note: "Минимум визуального шума делает Fire Joker удобным ориентиром: здесь особенно легко отделить базовую линию выплаты от дополнительной функции.",
    source: "https://www.playngo.com/games/fire-joker",
  },
  {
    slug: "rise-of-olympus",
    name: "Rise of Olympus",
    provider: "Play’n GO",
    year: 2018,
    mechanic: "Кластеры",
    mechanics: ["Кластеры", "Каскады"],
    tags: ["Каскады", "Шкала прогресса", "Преобразование символов"],
    field: "5 × 5",
    rtp: "96,50%",
    volatility: "Высокая",
    image: "/images/slots/rise-of-olympus.webp",
    description:
      "Grid-слот 5 × 5 с удалением выигрышных групп, общей шкалой и вмешательством трёх богов. Раунд читается как последовательность изменений поля.",
    feature:
      "Выигрышные группы очищают сетку и заряжают функции богов; полное очищение поля становится отдельной целью внутри цепочки.",
    note: "В отличие от линейных слотов, здесь полезно следить за состоянием всего поля и зарядом функций, а не за одним маршрутом слева направо.",
    source: "https://www.playngo.com/games/rise-of-olympus",
  },
  {
    slug: "fat-rabbit",
    name: "Fat Rabbit",
    provider: "Push Gaming",
    year: 2018,
    mechanic: "Линии",
    mechanics: ["Линии", "Сбор символов"],
    tags: ["Сбор значений", "Шкала прогресса", "Свободные вращения"],
    field: "5 × 5",
    rtp: "96,45%",
    volatility: "Высокая",
    image: "/images/slots/fat-rabbit.webp",
    description:
      "Пять барабанов, пять рядов и пятьдесят линий. В бонусе кролик собирает морковь, растёт и меняет дальнейшее развитие раунда.",
    feature:
      "Wild-морковь попадает в счётчик кролика, а заполнение шкалы увеличивает персонажа и может добавлять свободные вращения.",
    note: "База здесь линейная, а главный визуальный прогресс вынесен в отдельную шкалу. Это хороший пример механики поверх традиционной сетки.",
    source: "https://www.pushgaming.com/games/fat-rabbit.html",
  },
  {
    slug: "retro-tapes",
    name: "Retro Tapes",
    provider: "Push Gaming",
    year: 2022,
    mechanic: "Кластеры",
    mechanics: ["Кластеры", "Каскады"],
    tags: ["Каскады", "Wild", "Множители"],
    field: "9 × 6",
    rtp: "96,47%",
    volatility: "Высокая",
    image: "/images/slots/retro-tapes.webp",
    description:
      "Широкое поле 9 × 6, Cluster Links, каскады и кассеты-множители. Выигрышная группа может расти через связывающие специальные символы.",
    feature:
      "Кластеры из пяти и более кассет исчезают, а wild-кассеты способны связывать группы и наращивать множитель после участия в выигрыше.",
    note: "На 54 позициях легко потерять логику происходящего. Начните с границ одного кластера и только затем смотрите, какие wild действительно связали группы.",
    source: "https://www.pushgaming.com/games/retro-tapes.html",
  },
  {
    slug: "chaos-crew",
    name: "Chaos Crew",
    provider: "Hacksaw Gaming",
    year: 2020,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Множители", "Свободные вращения", "Wild"],
    field: "5 × 5",
    rtp: "96,30%",
    volatility: "Экстремальная",
    image: "/images/slots/chaos-crew.webp",
    description:
      "Необычная сетка 5 × 5 с девятнадцатью линиями и multiplier-wild персонажами. Основное накопление переносится в бонусный раунд.",
    feature:
      "Cranky Cat умножает линию, в которой участвует, а в бонусе значения множителей собираются отдельно над барабанами до завершения раунда.",
    note: "Несмотря на шумную подачу, базовое правило здесь довольно традиционное. Это полезный пример того, как сложная презентация скрывает обычные линии.",
    source: "https://www.hacksawgaming.com/games/chaos-crew",
  },
  {
    slug: "chaos-crew-2",
    name: "Chaos Crew 2",
    provider: "Hacksaw Gaming",
    year: 2023,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Множители", "Несколько бонусов", "Wild"],
    field: "5 × 5",
    rtp: "96,27%",
    volatility: "Экстремальная",
    image: "/images/slots/chaos-crew-2.webp",
    description:
      "Продолжение сохраняет 5 × 5 и девятнадцать линий, но добавляет новые multiplier-сценарии и несколько вариантов бонусной игры.",
    feature:
      "Множители персонажей участвуют в линиях, а отдельные бонусные режимы меняют способ их накопления и повторного использования.",
    note: "Сравнение с первой частью удобно тем, что геометрия почти не меняется. Отличия приходится искать именно в слоях функций поверх неё.",
    source: "https://www.hacksawgaming.com/games/chaos-crew-2",
  },
  {
    slug: "deadwood",
    name: "Deadwood",
    provider: "Nolimit City",
    year: 2020,
    mechanic: "Способы",
    mechanics: ["Способы"],
    tags: ["xNudge", "Wild", "Множители"],
    field: "5 × 4",
    rtp: "96,03%",
    volatility: "Экстремальная",
    image: "/images/slots/deadwood.webp",
    description:
      "Западная тема, 576 способов и xNudge-wild. Высокие wild-символы сдвигаются до полного появления и увеличивают собственный множитель.",
    feature:
      "Hunter xNudge Wild занимает несколько позиций и при каждом вынужденном сдвиге повышает множитель, который участвует в соответствующих выигрышах.",
    note: "Главный объект наблюдения здесь не линия, а положение высокого wild и число его сдвигов. Геометрия символа напрямую влияет на развитие раунда.",
    source: "https://nolimitcity.com/games/deadwood",
  },
  {
    slug: "mental",
    name: "Mental",
    provider: "Nolimit City",
    year: 2021,
    mechanic: "Способы",
    mechanics: ["Способы"],
    tags: ["xWays", "xSplit", "xNudge"],
    field: "5 барабанов · 3–2–3–2–3",
    rtp: "96,08%",
    volatility: "Экстремальная",
    image: "/images/slots/mental.webp",
    description:
      "Неровная сетка со стартовыми 108 способами, xWays, xNudge и xSplit. Число доступных комбинаций может резко вырасти внутри одного события.",
    feature:
      "xWays раскрывает дополнительные одинаковые символы, xSplit делит позиции, а xNudge сдвигает высокие wild и повышает их множитель.",
    note: "Это один из самых наглядных примеров динамической сетки: статичного числа способов здесь недостаточно, потому что сами позиции постоянно меняются.",
    source: "https://nolimitcity.com/games/mental",
  },
  {
    slug: "starburst",
    name: "Starburst",
    provider: "NetEnt",
    year: 2012,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Wild", "Respin", "Расширяющийся символ"],
    field: "5 × 3",
    rtp: "96,08%",
    volatility: "Низкая",
    image: "/images/slots/starburst.webp",
    description:
      "Десять линий, простой набор символов и расширяющиеся wild с повторными вращениями. Один из самых чистых примеров классического интерфейса.",
    feature:
      "Starburst Wild расширяется на весь барабан и запускает respin; новый wild в повторном вращении может продолжить последовательность.",
    note: "Почти вся особенность игры сосредоточена в одном символе. Поэтому Starburst полезен как контрольная точка перед более насыщенными современными слотами.",
    source: "https://netent.com/games/starburst",
  },
  {
    slug: "gonzos-quest",
    name: "Gonzo’s Quest",
    provider: "NetEnt",
    year: 2010,
    mechanic: "Каскады",
    mechanics: ["Каскады", "Линии"],
    tags: ["Каскады", "Множители", "Свободные вращения"],
    field: "5 × 3",
    rtp: "95,97%",
    volatility: "Средняя",
    image: "/images/slots/gonzos-quest.webp",
    description:
      "Avalanche вместо обычной смены поля: выигрышные символы исчезают, новые падают сверху, а множитель растёт в пределах цепочки.",
    feature:
      "Каждая следующая Avalanche в одной последовательности повышает множитель, а после прекращения выигрышей поле и множитель возвращаются к исходному состоянию.",
    note: "Gonzo’s Quest полезен как исторический ориентир каскадной механики: здесь хорошо видно её устройство без десятка дополнительных систем поверх.",
    source: "https://netent.com/games/gonzos-quest",
  },
  {
    slug: "dead-or-alive-2",
    name: "Dead or Alive 2",
    provider: "NetEnt",
    year: 2019,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Закрепляющийся wild", "Множители", "Несколько бонусов"],
    field: "5 × 3",
    rtp: "96,80%",
    volatility: "Экстремальная",
    image: "/images/slots/dead-or-alive-2.webp",
    description:
      "Девять линий и три заметно разных free-spins режима. Базовая сетка остаётся простой, а выбор характера бонуса вынесен пользователю.",
    feature:
      "Три бонусных сценария по-разному работают со sticky wild и множителями, сохраняя одну и ту же девятилинейную базу.",
    note: "Здесь особенно видно, что волатильность и ощущение бонуса могут меняться без смены основной геометрии. Сначала читайте выбранный режим, потом цифры.",
    source: "https://netent.com/games/dead-or-alive-2",
  },
  {
    slug: "money-train-2",
    name: "Money Train 2",
    provider: "Relax Gaming",
    year: 2020,
    mechanic: "Линии",
    mechanics: ["Линии", "Сбор символов"],
    tags: ["Сбор значений", "Динамическое поле", "Персонажи-функции"],
    field: "5 × 4",
    rtp: "96,40%",
    volatility: "Высокая",
    image: "/images/slots/money-train-2.webp",
    description:
      "Сорок линий в базе и отдельный Money Cart Bonus, где вместо обычных сочетаний работают символы со значениями и постоянными функциями.",
    feature:
      "В бонусе Collector, Payer, Sniper и другие персонажи изменяют значения специальных символов, а заполненный барабан способен расширить поле.",
    note: "Это пример игры с двумя почти разными режимами чтения: линии в базе и состояние набора специальных символов в бонусе.",
    source: "https://www.relax-gaming.com/products/casino/moneytrain2",
  },
  {
    slug: "snake-arena",
    name: "Snake Arena",
    provider: "Relax Gaming",
    year: 2020,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Свободные вращения", "Динамическое поле", "Шкала прогресса"],
    field: "5 × 5",
    rtp: "96,25%",
    volatility: "Экстремальная",
    image: "/images/slots/snake-arena.webp",
    description:
      "Тридцать фиксированных линий и бонус, построенный как погоня змеи за рыцарем. Длина змеи становится частью состояния игрового поля.",
    feature:
      "Во free spins змея растёт после каждого захваченного рыцаря и занимает всё больше клеток, пока собственное тело не блокирует движение.",
    note: "Функция выглядит почти как мини-игра, но базовая выплата остаётся линейной. Полезно отделять зрелищный бонус от способа начисления обычного выигрыша.",
    source: "https://www.relax-gaming.com/products/casino/snakearena",
  },
  {
    slug: "book-of-99",
    name: "Book of 99",
    provider: "Relax Gaming",
    year: 2021,
    mechanic: "Линии",
    mechanics: ["Линии", "Сбор символов"],
    tags: ["Свободные вращения", "Расширяющийся символ", "Сбор символов"],
    field: "5 × 3",
    rtp: "99,00%",
    volatility: "Высокая",
    image: "/images/slots/book-of-99.webp",
    description:
      "Десять линий и знакомая book-структура, но с необычно высоким справочным RTP. Бонус сохраняет идею расширяющегося выбранного символа.",
    feature:
      "Три книги запускают свободные вращения, а дополнительный путь к бонусу связан со сбором 99 book-символов в базовой игре.",
    note: "Высокий RTP не делает короткую сессию предсказуемой. Эта игра особенно полезна для объяснения разницы между долгосрочной теорией и отдельным результатом.",
    source: "https://www.relax-gaming.com/products/casino/bookof99",
  },

  {
    slug: "gates-of-olympus-1000",
    name: "Gates of Olympus 1000",
    provider: "Pragmatic Play",
    year: 2023,
    mechanic: "Каскады",
    mechanics: ["Каскады"],
    tags: ["Свободные вращения", "Множители", "Pay Anywhere"],
    field: "6 × 5",
    rtp: "96,50%",
    volatility: "Высокая",
    image: "/images/slots/gates-of-olympus-1000.webp",
    description:
      "Усиленная версия Gates of Olympus с тем же Pay Anywhere и каскадами, но случайные множители теперь доходят до 1 000x.",
    feature:
      "В свободных вращениях выпавшие множители добавляются к общему значению раунда и применяются к последующим выигрышным каскадам.",
    note:
      "Сравнивайте её с оригиналом по конкретным пределам множителей и максимальной выплате, а не только по знакомой теме и сетке.",
    source: "https://www.pragmaticplay.com/en/games/gates-of-olympus-1000/",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://1win.com/casino?provider=Pragmatic+Play",
      evidence: "Текущий официальный каталог 1win перечисляет Gates of Olympus 1000 среди популярных игр.",
    }],
  },
  {
    slug: "sugar-rush-1000",
    name: "Sugar Rush 1000",
    provider: "Pragmatic Play",
    year: 2024,
    mechanic: "Кластеры",
    mechanics: ["Кластеры", "Каскады"],
    tags: ["Каскады", "Множители", "Золотые клетки", "Свободные вращения"],
    field: "7 × 7",
    rtp: "96,50%",
    volatility: "Высокая",
    image: "/images/slots/sugar-rush-1000.webp",
    description:
      "Кластерная сетка 7 × 7 с каскадами и отмеченными позициями, где множители могут удваиваться вплоть до 1 024x.",
    feature:
      "В бонусе отмеченные клетки и накопленные на них множители сохраняются между свободными вращениями.",
    note:
      "Главная разница с обычной Sugar Rush находится в потолке множителя. Сам принцип кластеров и каскадов остаётся знакомым.",
    source: "https://www.pragmaticplay.com/en/games/sugar-rush-1000/",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://1win.com/casino?provider=Pragmatic+Play",
      evidence: "Текущий официальный каталог 1win перечисляет Sugar Rush 1000 среди популярных игр.",
    }],
  },
  {
    slug: "gates-of-olympus-super-scatter",
    name: "Gates of Olympus Super Scatter",
    provider: "Pragmatic Play",
    year: 2025,
    mechanic: "Каскады",
    mechanics: ["Каскады"],
    tags: ["Свободные вращения", "Множители", "Pay Anywhere", "Super Scatter"],
    field: "6 × 5",
    rtp: "96,50%",
    volatility: "Высокая",
    image: "/images/slots/gates-of-olympus-super-scatter.webp",
    description:
      "Версия Gates of Olympus, где к знакомым каскадам и множителям добавлены Super Scatter с фиксированными призами при запуске бонуса.",
    feature:
      "Один-четыре Super Scatter при активации бонуса дают отдельную мгновенную выплату, а четыре таких символа соответствуют максимальному выигрышу 50 000x.",
    note:
      "Super Scatter меняет условия входа в бонус и потенциальную мгновенную выплату, но не отменяет основную каскадную логику игры.",
    source: "https://www.pragmaticplay.com/en/games/gates-of-olympus-super-scatter/",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://forum.1win.com/topic/353-%F0%9F%8F%86-champions-clash-%E2%80%94-%E2%82%AC500000-by-pragmatic-play/",
      evidence: "Официальный форум 1win указывает игру в списке участников турнира Pragmatic Play.",
    }],
  },
  {
    slug: "sweet-bonanza-super-scatter",
    name: "Sweet Bonanza Super Scatter",
    provider: "Pragmatic Play",
    year: 2025,
    mechanic: "Каскады",
    mechanics: ["Каскады"],
    tags: ["Свободные вращения", "Множители", "Pay Anywhere", "Super Scatter"],
    field: "6 × 5",
    rtp: "96,51%",
    volatility: "Высокая",
    image: "/images/slots/sweet-bonanza-super-scatter.webp",
    description:
      "Sweet Bonanza с Super Scatter: выплаты по всему полю, каскады и отдельные мгновенные призы при запуске бонусного раунда.",
    feature:
      "В свободных вращениях множители до 100x остаются на поле до конца бонуса, а Super Scatter могут дать фиксированную выплату вплоть до 50 000x.",
    note:
      "В этой версии важно не смешивать два слоя: постоянные бонусные множители и отдельную награду за Super Scatter при входе в функцию.",
    source: "https://www.pragmaticplay.com/en/games/sweet-bonanza-super-scatter/",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://forum.1win.com/topic/353-%F0%9F%8F%86-champions-clash-%E2%80%94-%E2%82%AC500000-by-pragmatic-play/",
      evidence: "Официальный форум 1win указывает игру в списке участников турнира Pragmatic Play.",
    }],
  },
  {
    slug: "mahjong-wins-super-scatter",
    name: "Mahjong Wins Super Scatter",
    provider: "Pragmatic Play",
    year: 2025,
    mechanic: "Способы",
    mechanics: ["Способы", "Каскады"],
    tags: ["Каскады", "Множители", "Wild", "Super Scatter"],
    field: "5 × 5",
    rtp: "96,50%",
    volatility: "Высокая",
    image: "/images/slots/mahjong-wins-super-scatter.webp",
    description:
      "Поле 5 × 5 с выплатами до 2 000 способов, каскадами, растущим множителем и золотыми символами, которые оставляют wild.",
    feature:
      "Последовательные выигрышные каскады повышают множитель, а Super Scatter при запуске бонуса способны дать отдельный приз до 100 000x.",
    note:
      "Здесь полезно разделять число способов, цепочку каскадов и золотые позиции: это три независимых слоя состояния одного раунда.",
    source: "https://www.pragmaticplay.com/en/games/mahjong-wins-super-scatter/",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://forum.1win.com/topic/353-%F0%9F%8F%86-champions-clash-%E2%80%94-%E2%82%AC500000-by-pragmatic-play/",
      evidence: "Официальный форум 1win указывает игру в списке участников турнира Pragmatic Play.",
    }],
  },
  {
    slug: "hand-of-anubis",
    name: "Hand of Anubis",
    provider: "Hacksaw Gaming",
    year: 2022,
    mechanic: "Кластеры",
    mechanics: ["Кластеры", "Каскады"],
    tags: ["Каскады", "Множители", "Wild", "Soul Orbs"],
    field: "5 × 6",
    rtp: "96,24%",
    volatility: "Экстремальная",
    image: "/images/slots/hand-of-anubis.webp",
    description:
      "Тёмная египетская кластерная игра на поле 5 × 6, где каскады соединяются с Soul Orbs и накапливающимися множителями.",
    feature:
      "Soul Orbs помогают наращивать множители внутри цепочек, а бонусные режимы развивают эту систему отдельно от обычного кластерного выигрыша.",
    note:
      "Анимация бонусов здесь легко отвлекает от основы. Сначала отслеживайте размер кластера и каскад, затем уже значения Soul Orbs.",
    source: "https://www.hacksawgaming.com/news/new-game-release-april-summary",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://forum.1win.com/topic/468-%E2%80%8B-%F0%9F%92%A5-hacksaw-madness-are-these-bonuses-worth-the-risk-%E2%80%8B/",
      evidence: "Администратор официального форума 1win отдельно разбирает Hand of Anubis и предлагает попробовать слоты Hacksaw.",
    }],
  },
  {
    slug: "rip-city",
    name: "RIP City",
    provider: "Hacksaw Gaming",
    year: 2023,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Wild", "Расширяющийся символ", "Множители", "Свободные вращения"],
    field: "5 × 5",
    rtp: "96,22%",
    volatility: "Средняя",
    image: "/images/slots/rip-city.webp",
    description:
      "Пять барабанов, пять рядов и 19 линий. Wild Cat способен расширяться на барабан и поглощать обычные wild, превращая их в множители.",
    feature:
      "Два бонусных режима по-разному усиливают появление Wild Cat и сохраняют активированные барабаны в течение свободных вращений.",
    note:
      "RIP City показывает, как линейная игра может ощущаться динамичной без смены способа выплаты: меняются wild и состояние барабанов.",
    source: "https://www.hacksawgaming.com/games/rip-city",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://forum.1win.com/topic/468-%E2%80%8B-%F0%9F%92%A5-hacksaw-madness-are-these-bonuses-worth-the-risk-%E2%80%8B/",
      evidence: "Администратор официального форума 1win отдельно перечисляет RIP City среди Hacksaw Slots.",
    }],
  },
  {
    slug: "hell-hot-100",
    name: "Hell Hot 100",
    provider: "Endorphina",
    year: 2021,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Wild", "Risk Game", "Scatter"],
    field: "5 × 4",
    rtp: "96,07%",
    volatility: "Низкая",
    image: "/images/slots/hell-hot-100.webp",
    description:
      "Классическая фруктовая сетка 5 × 4 со 100 фиксированными линиями, stacked wild и отдельной карточной Risk Game.",
    feature:
      "После выигрыша доступна классическая Risk Game, где результат можно попытаться удвоить, выбирая карту против дилера.",
    note:
      "Это полезный контраст современным многоуровневым бонусам: основная структура проста, а риск-игра вынесена в отдельное действие после выплаты.",
    source: "https://endorphina.com/games/hell-hot-100",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://forum.1win.com/topic/1242-%F0%9F%8F%86-endorphina-winners-only-%E2%82%AC300000-network-tournament-%E2%80%8B/",
      evidence: "Официальный форум 1win включает Hell Hot 100 в список игр турнира Endorphina.",
    }],
  },
  {
    slug: "joker-stoker",
    name: "Joker Stoker",
    provider: "Endorphina",
    year: 2021,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Wild", "Свободные вращения", "Bonus Pop", "Scatter"],
    field: "5 × 4",
    rtp: "96,07%",
    volatility: "Низкая",
    image: "/images/slots/joker-stoker.webp",
    description:
      "Фруктовый слот на 40 фиксированных линиях с wild-джокером, scatter и прямым запуском свободных вращений.",
    feature:
      "Три, четыре или пять scatter дают 10, 20 или 30 свободных вращений; wild может появляться стеком и заменяет обычные символы.",
    note:
      "Joker Stoker хорошо показывает классическую схему: линии остаются основой, а бонус не меняет способ чтения базовой сетки.",
    source: "https://endorphina.com/games/joker-stoker",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://forum.1win.com/topic/1242-%F0%9F%8F%86-endorphina-winners-only-%E2%82%AC300000-network-tournament-%E2%80%8B/",
      evidence: "Официальный форум 1win включает Joker Stoker в список игр турнира Endorphina.",
    }],
  },
  {
    slug: "lucky-streak-1",
    name: "Lucky Streak 1",
    provider: "Endorphina",
    year: 2018,
    mechanic: "Линии",
    mechanics: ["Линии"],
    tags: ["Wild", "Risk Game", "Scatter"],
    field: "5 × 4",
    rtp: "96,09%",
    volatility: "Средняя",
    image: "/images/slots/lucky-streak-1.webp",
    description:
      "Сорок линий, фруктовые символы и минимальный набор специальных правил. После выплаты доступна классическая Risk Game.",
    feature:
      "Wild помогает составлять линейные комбинации, scatter оплачивается независимо от линии, а Risk Game позволяет отдельно рискнуть уже полученным выигрышем.",
    note:
      "Полезный ориентир для сравнения с современными слотами: здесь почти вся логика видна на самой таблице линий и символов.",
    source: "https://endorphina.com/games/lucky-streak-1",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://forum.1win.com/topic/1242-%F0%9F%8F%86-endorphina-winners-only-%E2%82%AC300000-network-tournament-%E2%80%8B/",
      evidence: "Официальный форум 1win включает Lucky Streak 1 в список игр турнира Endorphina.",
    }],
  },
  {
    slug: "3-coin-towers",
    name: "3 Coin Towers",
    provider: "Endorphina",
    year: 2026,
    mechanic: "Сбор символов",
    mechanics: ["Сбор символов", "Линии"],
    tags: ["Свободные вращения", "Hold and Win", "Джекпоты", "Расширяющийся символ", "Pick-бонус"],
    field: "5 × 3",
    rtp: "96,08%",
    volatility: "Высокая",
    image: "/images/slots/3-coin-towers.webp",
    description:
      "Тридцать линий и три пагоды, которые растут от совпадающих монет и ведут к трём разным бонусным режимам.",
    feature:
      "Зелёная пагода открывает Free Games, красная — Coin Hold Bonus с джекпотами, синяя — отдельный Pick’em Bonus.",
    note:
      "Это не просто линейный слот с несколькими кнопками бонуса: сбор подходящих монет определяет, какая система будет развиваться дальше.",
    source: "https://endorphina.com/games/3-coin-towers",
    availability: [{
      operator: "1win",
      verifiedAt: "2026-09-07",
      source: "https://forum.1win.com/topic/1242-%F0%9F%8F%86-endorphina-winners-only-%E2%82%AC300000-network-tournament-%E2%80%8B/",
      evidence: "Официальный форум 1win включает 3 Coin Towers в список игр турнира Endorphina.",
    }],
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

export const slotMechanics = (slot: Slot) => [...new Set(slot.mechanics)];

export const slotRtpValue = (slot: Slot) => {
  const raw = slot.rtp?.trim().replace(",", ".").replace(/%$/, "").trim();
  if (!raw || !/^\d+(\.\d+)?$/.test(raw)) return Number.NaN;
  const value = Number(raw);
  return value >= 0 && value <= 100 ? value : Number.NaN;
};

export const slotFeatureOptions = Array.from(
  slots.reduce((counts, slot) => {
    for (const tag of new Set(slot.tags)) counts.set(tag, (counts.get(tag) || 0) + 1);
    return counts;
  }, new Map<string, number>()),
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ru"))
  .map(([name, count]) => ({ name, count }));

const searchAliasGroups = [
  ["wild", "вайлд", "вилд"],
  ["free spins", "фриспины", "свободные вращения"],
  ["rtp", "ртп", "возврат"],
  ["cascades", "tumble", "avalanche", "каскады"],
  ["clusters", "cluster", "кластеры"],
  ["ways", "xways", "способы"],
  ["super scatter", "супер скаттер", "суперскаттер"],
  ["risk game", "риск игра", "риск"],
  ["hold and win", "холд энд вин", "холд"],
];

function normalizeSearch(value: string) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/(\d),(?=\d)/g, "$1.")
    .replace(/[’']/g, "")
    .replace(/[^a-zа-яё0-9.%×]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function slotMatchesSearch(slot: Slot, query: string) {
  const normalizedQuery = normalizeSearch(query);
  if (!normalizedQuery) return true;
  const searchable = normalizeSearch(
    [
      slot.name,
      slot.provider,
      "rtp ртп волатильность механика особенность",
      slot.year,
      slot.field,
      slot.rtp,
      slot.volatility,
      ...slot.mechanics,
      ...slot.tags,
      slot.description,
      slot.feature,
    ].join(" "),
  );
  const tokens = normalizedQuery.split(" ").filter(Boolean);
  return tokens.every((token) => {
    if (searchable.includes(token)) return true;
    const aliases = searchAliasGroups.find((group) =>
      group.some((alias) => normalizeSearch(alias).split(" ").includes(token)),
    );
    return aliases ? aliases.some((alias) => searchable.includes(normalizeSearch(alias))) : false;
  });
}

export function relatedSlots(slot: Slot, limit = 2) {
  return slots
    .filter((candidate) => candidate.slug !== slot.slug)
    .map((candidate, index) => {
      const sharedMechanics = candidate.mechanics.filter((name) =>
        slot.mechanics.includes(name),
      ).length;
      const sharedTags = candidate.tags.filter((tag) => slot.tags.includes(tag)).length;
      const sameProvider = candidate.provider === slot.provider ? 1 : 0;
      const sameVolatility = candidate.volatility === slot.volatility ? 1 : 0;
      const rtpDistance = Math.abs(slotRtpValue(candidate) - slotRtpValue(slot));
      return {
        candidate,
        index,
        score:
          sharedMechanics * 5 +
          sharedTags * 2 +
          sameProvider * 3 +
          sameVolatility -
          (Number.isFinite(rtpDistance) ? Math.min(rtpDistance, 2) * 0.25 : 0),
      };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export const providerSlug = (name: string) =>
  name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[’']/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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
    text: "Символы собирают значения на поле или заполняют шкалу, которая запускает функцию.",
  },
  {
    name: "Способы",
    slug: "ways",
    text: "Фиксированной линии нет: считаются сочетания на соседних барабанах, а число маршрутов может меняться.",
  },
];

export type ProviderProfile = {
  slug: string;
  name: string;
  mark: string;
  catalogSummary: string;
  profileIntro: string;
  profileBody: string;
  signoff: string;
};


export function ruPlural(count: number, one: string, few: string, many: string) {
  const mod100 = count % 100;
  const mod10 = count % 10;
  if (mod100 >= 11 && mod100 <= 14) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

export const providerProfiles: ProviderProfile[] = [
  {
    slug: "pragmatic-play",
    name: "Pragmatic Play",
    mark: "Каскады · кластеры · линии · сбор",
    catalogSummary:
      "Каскады, кластеры, классические линии, сбор и новые ветки 1000 / Super Scatter — разные стороны каталога Pragmatic Play.",
    profileIntro:
      "В текущей выборке студия охватывает несколько способов читать поле: от Pay Anywhere и кластеров до традиционных линий и Super Scatter-функций.",
    profileBody:
      "Gates of Olympus, Gates of Olympus 1000 и Super Scatter-версия показывают, как одна базовая идея развивается через более крупные множители и отдельную функцию мгновенной выплаты. Sweet Bonanza и её Super Scatter-версия сохраняют Pay Anywhere, Sugar Rush и Fruit Party переходят к кластерным полям, The Dog House остаётся ближе к линиям, а Big Bass Bonanza переносит внимание на сбор значений. Провайдер удобен как вход в каталог, но логотип сам по себе не описывает механику конкретной игры.",
    signoff:
      "Чем шире линейка студии, тем меньше смысла делать выводы об игре только по логотипу провайдера.",
  },
  {
    slug: "play-n-go",
    name: "Play’n GO",
    mark: "Линии · кластеры",
    catalogSummary:
      "Классические линии, компактная сетка 3 × 3 и кластерные поля: разбираем разные подходы Play’n GO к игровому раунду.",
    profileIntro:
      "Book of Dead, Legacy of Dead и Fire Joker держатся ближе к традиционной геометрии, тогда как Reactoonz и Rise of Olympus требуют читать всё поле.",
    profileBody:
      "В линейных играх акцент смещается на расширяющиеся символы, wild и повторные вращения. Reactoonz и Rise of Olympus строят раунд вокруг групп символов, удаления с поля и накопления функций. Такая выборка показывает диапазон студии лучше любого общего рейтинга.",
    signoff:
      "Одна студия может одинаково уверенно работать и с классическими барабанами, и с grid-механиками.",
  },
  {
    slug: "push-gaming",
    name: "Push Gaming",
    mark: "Кластеры · линии",
    catalogSummary:
      "Большие кластерные поля и линейные игры с накоплением функций: устройство слотов Push Gaming на конкретных примерах.",
    profileIntro:
      "Jammin’ Jars и Retro Tapes расширяют идею кластеров, а Razor Shark и Fat Rabbit показывают, как много функций можно наложить на обычные линии.",
    profileBody:
      "Jammin’ Jars работает на квадратном поле 8 × 8 с перемещающимися wild, Retro Tapes растягивает Cluster Links до 9 × 6. Razor Shark держится за двадцать линий и mystery-стеки, Fat Rabbit — за пятьдесят линий и шкалу сбора. Сходство проявляется скорее в нарастающих состояниях функций, чем в базовой математике выплат.",
    signoff:
      "Сначала определите способ выплаты, затем следите за тем, какая функция накапливает состояние между событиями.",
  },
  {
    slug: "hacksaw-gaming",
    name: "Hacksaw Gaming",
    mark: "Линии · кластеры",
    catalogSummary:
      "Линии, multiplier-wild, расширяющиеся wild и кластерные каскады: разные способы устроить раунд в играх Hacksaw Gaming.",
    profileIntro:
      "Wanted Dead or a Wild, Chaos Crew и RIP City держатся за линейную геометрию, Hand of Anubis работает на каскадном кластерном поле, а Le Bandit уходит в кластеры и состояние клеток.",
    profileBody:
      "Wanted и Chaos Crew усложняют линии через multiplier-wild и разные бонусные сценарии, RIP City строит раунд вокруг расширяющегося Wild Cat. Hand of Anubis соединяет каскады, кластеры и Soul Orbs на поле 5 × 6. Le Bandit тоже меняет способ чтения поля, но делает акцент на суперкаскадах и золотых позициях. Узнаваемый визуальный язык не означает одинаковую структуру игры.",
    signoff:
      "Чем громче визуальные эффекты, тем полезнее возвращаться к простому вопросу: какое событие на самом деле создаёт выплату.",
  },
  {
    slug: "nolimit-city",
    name: "Nolimit City",
    mark: "Способы · xWays · расширяемые поля",
    catalogSummary:
      "Динамические сетки Nolimit City: как xWays, xNudge и раскрытие рядов меняют структуру раунда в играх каталога.",
    profileIntro:
      "San Quentin xWays, Fire in the Hole, Deadwood и Mental полезны как набор примеров, где статичного описания сетки уже недостаточно.",
    profileBody:
      "Deadwood показывает xNudge на относительно понятном поле, San Quentin добавляет xWays и split-позиции, Fire in the Hole раскрывает новые ряды, а Mental соединяет сразу несколько x-механик на неровной сетке. Здесь особенно важно отслеживать изменение структуры между событиями.",
    signoff:
      "Для динамической сетки вопрос «как меняются позиции?» почти всегда полезнее одного числа линий или способов.",
  },
  {
    slug: "netent",
    name: "NetEnt",
    mark: "Линии · Avalanche",
    catalogSummary:
      "Линии Starburst, каскады Gonzo’s Quest и бонусные сценарии Dead or Alive 2: профиль игр NetEnt в Slotfolio.",
    profileIntro:
      "NetEnt удобно читать как эволюцию привычных онлайн-слотов: от простой функции одного wild до каскадной цепочки и нескольких режимов free spins.",
    profileBody:
      "Starburst почти не перегружает базовую сетку и строится вокруг расширяющегося wild. Gonzo’s Quest делает Avalanche главным ритмом раунда. Dead or Alive 2 возвращается к девяти линиям, но резко усложняет бонусную часть выбором из трёх сценариев.",
    signoff:
      "Чем проще база, тем заметнее становится конкретная функция, ради которой построена игра.",
  },
  {
    slug: "relax-gaming",
    name: "Relax Gaming",
    mark: "Линии · stateful-бонусы",
    catalogSummary:
      "Money Train 2, Snake Arena и Book of 99: линейная основа и разные системы бонусов в играх Relax Gaming.",
    profileIntro:
      "Money Train 2, Snake Arena и Book of 99 используют знакомую линейную основу, но превращают бонус в отдельную систему со своим состоянием.",
    profileBody:
      "Money Train 2 переключается на набор специальных персонажей и значений, Snake Arena превращает поле в погоню, а Book of 99 остаётся ближе к классическому expanding-symbol сценарию. Это полезная группа для сравнения игр с одинаковым базовым принципом и разной сложностью поверх него.",
    signoff:
      "Одинаковые линии не делают игры похожими, если основная драматургия спрятана в разных бонусных системах.",
  },

  {
    slug: "endorphina",
    name: "Endorphina",
    mark: "Линии · сбор · классические бонусы",
    catalogSummary:
      "От Hell Hot 100 и Lucky Streak 1 до многоуровневого 3 Coin Towers: как Endorphina сочетает классические линии с отдельными бонусными системами.",
    profileIntro:
      "Текущая выборка Endorphina в Slotfolio начинается с простых линейных фруктовых игр и заканчивается слотом, где сбор монет открывает три самостоятельных бонусных режима.",
    profileBody:
      "Hell Hot 100 и Lucky Streak 1 оставляют основную математику на фиксированных линиях и выносят дополнительный риск в отдельную Risk Game. Joker Stoker добавляет свободные вращения и stacked wild. 3 Coin Towers использует ту же линейную основу, но связывает её со сбором монет, развитием пагод, Hold and Win и Pick’em. Поэтому логотип провайдера здесь не говорит о сложности игры сам по себе.",
    signoff:
      "У классической сетки может быть очень разная глубина: сравнивайте не оформление, а то, что сохраняет состояние между событиями.",
  },

];
