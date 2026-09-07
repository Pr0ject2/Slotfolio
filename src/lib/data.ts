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
    rtp: "96,35%",
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
    mechanics: ["Каскады"],
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
];

export const article = {
  href: "/journal/how-cascades-work",
  title: "Один спин — несколько событий",
  subtitle: "Как каскады изменили устройство слотов",
  category: "Разбор механики",
  minutes: 9,
};

export const getSlot = (slug: string) => slots.find((s) => s.slug === slug);

export const slotMechanics = (slot: Slot) => slot.mechanics;

export const slotRtpValue = (slot: Slot) =>
  Number.parseFloat(slot.rtp.replace(",", ".").replace("%", ""));

export const slotFeatureOptions = Array.from(
  slots.reduce((counts, slot) => {
    for (const tag of slot.tags) counts.set(tag, (counts.get(tag) || 0) + 1);
    return counts;
  }, new Map<string, number>()),
)
  .filter(([, count]) => count >= 2)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ru"))
  .map(([name, count]) => ({ name, count }));

const searchAliasGroups = [
  ["wild", "вайлд", "вилд"],
  ["free spins", "фриспины", "свободные вращения"],
  ["rtp", "ртп", "возврат"],
  ["cascades", "tumble", "avalanche", "каскады"],
  ["clusters", "cluster", "кластеры"],
  ["ways", "xways", "способы"],
];

function normalizeSearch(value: string) {
  return value
    .normalize("NFKD")
    .toLowerCase()
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
      group.some((alias) => normalizeSearch(alias).includes(token) || token.includes(normalizeSearch(alias))),
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
          Math.min(rtpDistance, 2) * 0.25,
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
    text: "Отдельный символ собирает значения других символов на поле.",
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
      "Семь игр показывают каскады, кластерные поля, классические линии и бонусы со сбором символов.",
    profileIntro:
      "В расширенном каталоге одна студия уже охватывает несколько разных способов читать поле: от Pay Anywhere и кластеров до традиционных линий.",
    profileBody:
      "Gates of Olympus, Sweet Bonanza и Starlight Princess показывают разные варианты каскадного ритма, Sugar Rush и Fruit Party переходят к кластерным полям, The Dog House остаётся ближе к линиям, а Big Bass Bonanza переносит внимание на сбор значений. Провайдер удобен как вход в каталог, но не описывает механику сам по себе.",
    signoff:
      "Чем шире линейка студии, тем меньше смысла делать выводы об игре только по логотипу провайдера.",
  },
  {
    slug: "play-n-go",
    name: "Play’n GO",
    mark: "Линии · кластеры",
    catalogSummary:
      "Пять игр охватывают классические линии, компактную 3 × 3 сетку и более насыщенные grid-сценарии.",
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
      "Четыре игры дают два разных масштаба кластерных полей и две линейные основы с функциями поверх них.",
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
      "Четыре игры соединяют узнаваемую стилистику студии с двумя принципиально разными способами выплаты.",
    profileIntro:
      "Wanted Dead or a Wild и две Chaos Crew опираются на линии, тогда как Le Bandit уходит в кластеры и состояние клеток.",
    profileBody:
      "У линейных игр провайдера сложность появляется в multiplier-wild, VS-символах и разных бонусных сценариях. Le Bandit меняет сам способ чтения поля: важны соседние группы, суперкаскады и золотые позиции. Узнаваемый визуальный язык не равен одинаковой структуре игры.",
    signoff:
      "Чем громче визуальные эффекты, тем полезнее возвращаться к простому вопросу: какое событие на самом деле создаёт выплату.",
  },
  {
    slug: "nolimit-city",
    name: "Nolimit City",
    mark: "Способы · xWays · расширяемые поля",
    catalogSummary:
      "Четыре игры меняют геометрию позиций и число доступных способов прямо внутри вращения.",
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
      "Три игры дают исторический срез: минималистичные линии Starburst, каскады Gonzo’s Quest и высоковолатильный Dead or Alive 2.",
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
      "Три линейных игры отличаются тем, насколько далеко бонусный режим уходит от обычного чтения барабанов.",
    profileIntro:
      "Money Train 2, Snake Arena и Book of 99 используют знакомую линейную основу, но превращают бонус в отдельную систему со своим состоянием.",
    profileBody:
      "Money Train 2 переключается на набор специальных персонажей и значений, Snake Arena превращает поле в погоню, а Book of 99 остаётся ближе к классическому expanding-symbol сценарию. Это полезная группа для сравнения игр с одинаковым базовым принципом и разной сложностью поверх него.",
    signoff:
      "Одинаковые линии не делают игры похожими, если основная драматургия спрятана в разных бонусных системах.",
  },
];
