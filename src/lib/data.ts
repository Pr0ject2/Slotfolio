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

export const providerProfiles: ProviderProfile[] = [
  {
    slug: "pragmatic-play",
    name: "Pragmatic Play",
    mark: "Каскады · линии · сбор",
    catalogSummary:
      "В текущем каталоге студия представлена каскадами, классическими линиями и механикой сбора символов.",
    profileIntro:
      "На примере четырёх игр видно, что узнаваемая подача не привязывает студию к одной математике или одной структуре поля.",
    profileBody:
      "Gates of Olympus и Sweet Bonanza показывают разные варианты каскадной логики, The Dog House остаётся ближе к привычной сетке с линиями, а Big Bass Bonanza переносит внимание на сбор значений в бонусной игре. Поэтому имя студии удобно для навигации, но не заменяет чтение конкретных правил.",
    signoff:
      "У одной студии уже достаточно разные игры, чтобы сравнивать не бренд, а устройство конкретного слота.",
  },
  {
    slug: "play-n-go",
    name: "Play’n GO",
    mark: "Линии · кластеры",
    catalogSummary:
      "Две игры показывают почти противоположные подходы: традиционные линии и большое кластерное поле.",
    profileIntro:
      "Book of Dead и Reactoonz полезно поставить рядом именно потому, что они мало похожи друг на друга по устройству.",
    profileBody:
      "В Book of Dead основа читается через знакомые барабаны и линии, а Reactoonz строится вокруг соседних групп символов, цепных реакций и накопления энергии. Такая пара хорошо показывает, почему провайдер не стоит воспринимать как короткое описание механики игры.",
    signoff:
      "Две игры одного разработчика могут требовать совершенно разного способа чтения игрового поля.",
  },
  {
    slug: "push-gaming",
    name: "Push Gaming",
    mark: "Кластеры · линии",
    catalogSummary:
      "Jammin’ Jars показывает большое кластерное поле, а Razor Shark — классические линии с отдельной системой mystery-стеков.",
    profileIntro:
      "В двух известных играх Push Gaming хорошо видно, как студия накладывает сложные функции на совершенно разные базовые схемы выплат.",
    profileBody:
      "Jammin’ Jars начинается с 8 × 8 и соседних групп символов, а Razor Shark — с 5 × 4 и двадцати линий. В первом случае ритм создают каскады и перемещающиеся wild-банки, во втором — mystery-стеки и раскрытия. Сходство здесь скорее в любви к нарастающему напряжению, чем в устройстве поля.",
    signoff:
      "Сначала определите базовый способ выплаты, и только потом разбирайте фирменные функции поверх него.",
  },
  {
    slug: "hacksaw-gaming",
    name: "Hacksaw Gaming",
    mark: "Линии · кластеры",
    catalogSummary:
      "Wanted Dead or a Wild работает через линии и DuelReels, а Le Bandit соединяет кластеры, каскады и накопление золотых клеток.",
    profileIntro:
      "Эти две игры удобно сравнивать как пример того, насколько разной может быть структура под узнаваемой стилистикой одной студии.",
    profileBody:
      "Wanted Dead or a Wild использует фиксированные линии и концентрирует особенности в VS-символах и трёх бонусах. Le Bandit переносит игрока на поле 6 × 5, где важны кластеры, суперкаскады и состояние каждой клетки. Одинаковый провайдер здесь не означает одинаковый способ читать раунд.",
    signoff:
      "Чем больше фирменных функций у игры, тем важнее отделять базовое правило выплаты от всего, что происходит после него.",
  },
  {
    slug: "nolimit-city",
    name: "Nolimit City",
    mark: "Способы · расширяемые поля",
    catalogSummary:
      "San Quentin xWays и Fire in the Hole меняют число доступных позиций и маршрутов прямо по ходу вращения.",
    profileIntro:
      "В каталоге Nolimit City начинается там, где статичного описания сетки уже недостаточно: поле может раскрываться, делиться и увеличивать число способов выплаты.",
    profileBody:
      "San Quentin xWays добавляет enhancer-клетки, xWays и split-позиции к базовой сетке 5 × 3. Fire in the Hole стартует с трёх активных рядов и раскрывает поле до 6 × 6 по мере обвалов. В обоих случаях полезнее смотреть на изменение структуры раунда, чем запоминать одно число линий.",
    signoff:
      "Для динамических полей вопрос «сколько линий?» часто уступает вопросу «как меняется число доступных способов?».",
  },
];
