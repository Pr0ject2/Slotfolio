import type { ProviderProfile } from "./data";

export const providerProfileOverrides: ProviderProfile[] = [
  {
      slug: "pragmatic-play",
      name: "Pragmatic Play",
      mark: "Каскады · кластеры · линии · сбор",
      catalogSummary:
        "От Pay Anywhere и кластеров до линейных бонусов: текущая выборка Pragmatic Play уже показывает несколько разных поколений и подходов студии.",
      profileIntro:
        "В Slotfolio у Pragmatic Play представлены как знакомые семейства Gates of Olympus, Sweet Bonanza и Sugar Rush, так и более свежие Bear Crazy, The Big Dog House и Fury of Anubis.",
      profileBody:
        "Gates of Olympus и Fury of Anubis строят раунд вокруг выплат по всему полю, каскадов и растущих множителей. Sugar Rush и Fruit Party смещают внимание к кластерной геометрии. The Dog House, The Big Dog House и Bear Crazy остаются на фиксированных линиях, но сильно различаются устройством wild и свободных вращений. Big Bass Bonanza выносит накопление состояния в сбор значений. Поэтому профиль провайдера полезен как карта каталога, а не как обещание одинаковой математики у игр под одним логотипом.",
      signoff:
        "Чем шире линейка студии, тем важнее сравнивать конкретную механику, RTP-конфигурацию и бонусы, а не только имя провайдера.",
    },
  {
      slug: "hacksaw-gaming",
      name: "Hacksaw Gaming",
      mark: "Линии · кластеры · nudge · multiplier-wild",
      catalogSummary:
        "Линии, кластеры, nudge-сдвиги и multiplier-wild: текущая выборка Hacksaw Gaming показывает, насколько разными могут быть игры при общем визуальном характере студии.",
      profileIntro:
        "Wanted Dead or a Wild, Chaos Crew, RIP City, Dork Unit и Nitro Nights держатся ближе к линиям, тогда как Hand of Anubis и Le Bandit заставляют читать всё поле и его состояние.",
      profileBody:
        "Wanted и Chaos Crew усложняют фиксированные линии через multiplier-wild и несколько бонусных сценариев, RIP City — через расширяющийся Wild Cat, а Dork Unit — через sticky Gift Boxes и отдельный Dork Reel. Nitro Nights добавляет Nudge-цепочки и позиционные множители. Hand of Anubis соединяет каскады, кластеры и Soul Orbs, Le Bandit развивает состояние золотых позиций. Узнаваемая подача студии поэтому не означает одинаковый способ выплаты или одинаковую волатильность.",
      signoff:
        "Сначала определите, что формирует выплату и какое состояние переносится между событиями, а уже потом сравнивайте эффекты и бонусные режимы.",
    },
  {
      slug: "endorphina",
      name: "Endorphina",
      mark: "Линии · способы · каскады · сбор",
      catalogSummary:
        "От минималистичных 3 × 3 фруктовых игр до Hold and Win, scatter-выплат и каскадов: выборка Endorphina теперь показывает заметно более широкий диапазон студии.",
      profileIntro:
        "Hell Hot, Lucky Streak и ранние Hit Slot дают простой линейный ориентир, тогда как Burning Coins, Crown Coins и 2026 Hit Slot добавляют накопительные бонусы, а Prestige Crown и Dia De Los Muertos 2 переходят к каскадам.",
      profileBody:
        "Классические Hell Hot 40, Ultra Fresh, 2021 Hit Slot и Lucky Streak 3 позволяют читать почти всё по сетке и таблице линий. 2023 Hit Slot и 81 Burning Ways меняют линии на способы. Burning Coins 20/40, Crown Coins и 2026 Hit Slot выносят основную сложность в сбор значений, Hold and Win и jackpot-функции. Prestige Crown и Dia De Los Muertos 2 уже используют scatter-выплаты и каскады. Такой диапазон особенно хорошо показывает, почему общий логотип провайдера не заменяет разбор конкретной игры.",
      signoff:
        "Внутри одной студии классическая сетка и современная бонусная система могут соседствовать без противоречия, поэтому сравнивайте структуру раунда, а не возраст оформления.",
    },
  {
      slug: "bgaming",
      name: "BGaming",
      mark: "Pay Anywhere · кластеры · каскады",
      catalogSummary: "Gemhalla и House of Sins показывают две разные сеточные модели BGaming: выплаты по всему полю и крупные кластерные каскады.",
      profileIntro: "В текущей выборке BGaming соседствуют Gemhalla с Pay Anywhere и House of Sins с кластерной сеткой 6 × 8.",
      profileBody: "Gemhalla строит цепочку вокруг refilling reels и multiplier-символов, а House of Sins объединяет кластеры, каскады и растущие множители. Поэтому даже две игры уже дают полезный контраст способов считать выплату.",
      signoff: "Сначала определите правило выплаты, затем сравнивайте накопление множителей и бонусные состояния.",
    },
  {
      slug: "3-oaks-gaming",
      name: "3 Oaks Gaming",
      mark: "Линии · Hold & Win · сбор",
      catalogSummary: "Scarab Temple и Jungle Volcano: линейная база, Hold & Win и разные способы расширять бонусную часть.",
      profileIntro: "Обе игры 3 Oaks Gaming начинаются с фиксированных линий, но бонусы развивают поле по-разному.",
      profileBody: "Scarab Temple фиксирует монеты и обновляет респины, Jungle Volcano добавляет открываемые ряды, Power Feature и несколько jackpot-уровней. Это хороший набор для разбора stateful-бонусов поверх понятной базы.",
      signoff: "В Hold & Win важнее следить за сохранёнными позициями и условиями обновления респинов, чем за оформлением монет.",
    },
  {
      slug: "wazdan",
      name: "Wazdan",
      mark: "Линии · Wall of Symbols · настройки волатильности",
      catalogSummary: "Mighty Hot Amazonia показывает, как классическая сетка может сочетаться с заполнением барабанов и настраиваемым профилем риска.",
      profileIntro: "Пока Wazdan представлен одной игрой, но она полезна именно как пример классической геометрии с современными настройками.",
      profileBody: "Wall of Symbols и Fortune Wheel добавляют события поверх обычной сетки 5 × 3, а Volatility Levels меняет профиль выдачи. Поэтому характеристику волатильности здесь нельзя читать в отрыве от выбранной настройки.",
      signoff: "Для игр с настройкой риска фиксируйте активный режим вместе с RTP и остальными числами.",
    },
  {
      slug: "belatra-games",
      name: "Belatra Games",
      mark: "Способы · каскады · Craft Bonus",
      catalogSummary: "Mummyland Treasures соединяет крупную сетку, каскады, 823 543 способа и бонус с накопительным множителем.",
      profileIntro: "Belatra Games пока представлена Mummyland Treasures, но эта игра уже добавляет в каталог отдельную комбинацию ways и разрушаемого поля.",
      profileBody: "Камни на сетке 7 × 7 постепенно исчезают, а бонус сохраняет изменения поля и накапливает множитель. Craft Bonus отдельно показывает, что путь входа в функцию тоже может быть частью структуры игры.",
      signoff: "На больших сетках разделяйте геометрию, способ выплаты и состояние бонуса: одно число не описывает всё сразу.",
    },
  {
      slug: "yggdrasil-gaming",
      name: "Yggdrasil Gaming",
      mark: "SuperWays · каскады · динамическое поле",
      catalogSummary: "Troy SuperWays расширяет поле во время каскадов и показывает динамическое число способов вместо одной фиксированной сетки.",
      profileIntro: "В текущем каталоге Yggdrasil Gaming представлена Troy SuperWays, где число способов растёт вместе с раскрытием поля.",
      profileBody: "Fire Pot изменяет соседние позиции, SuperWays расширяет геометрию, а Super Spins начинают бонус минимум с 1 024 способов. Здесь особенно полезно описывать последовательность изменений, а не только максимальное число комбинаций.",
      signoff: "Максимум способов отражает потолок геометрии, а не вероятность конкретной выплаты.",
    },
  {
      slug: "shady-lady",
      name: "Shady Lady",
      mark: "Линии · ways · высокая волатильность",
      catalogSummary: "Black Friday и Devil’s Finger показывают характер студии на двух разных основах: фиксированные линии и расширяемые способы.",
      profileIntro: "Shady Lady намеренно использует необычные темы, но для каталога важнее различие механик Black Friday и Devil’s Finger.",
      profileBody: "Black Friday начинает с 30 линий и развивает респины вокруг персонажей. Devil’s Finger использует шесть барабанов, способы и расширяемую структуру. Общая высокая волатильность не делает их одинаковыми по устройству раунда.",
      signoff: "За провокационной подачей всё равно стоит обычная задача: отделить базовое правило выплаты от бонусного состояния.",
    },
  {
      slug: "big-time-gaming",
      name: "Big Time Gaming",
      mark: "Megaways · каскады · растущий множитель",
      catalogSummary: "1win Bonanza добавляет в каталог Megaways-модель с переменным числом способов и каскадной цепочкой.",
      profileIntro: "Big Time Gaming пока представлена 1win Bonanza из официального раздела 1win Only.",
      profileBody: "До 117 649 способов формируются из переменной геометрии барабанов, каскады обновляют символы, а в Free Spins растёт множитель. Это отдельный ориентир для сравнения с фиксированными ways-играми Nolimit City.",
      signoff: "Число Megaways меняется от вращения к вращению и не должно восприниматься как постоянная вероятность выигрыша.",
    }
];
