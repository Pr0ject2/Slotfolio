import { slots, slotRtpValue, type Slot } from "@/lib/data";

export type SlotFeatureCard = {
  title: string;
  text: string;
  kind: "primary" | "secondary";
};

export type VerifiedSlotMetrics = {
  maxWin?: string;
  maxWinLabel?: string;
  rtpVariants?: string[];
  source: string;
  sourceLabel?: string;
  note?: string;
};

const verifiedMetrics: Record<string, VerifiedSlotMetrics> = {
  "sweet-bonanza": {
    maxWin: "21 175x",
    maxWinLabel: "Заявленный потенциал",
    source: "https://www.pragmaticplay.com/en/news/pragmatic-play-launches-sweet-bonanza/",
    sourceLabel: "релиз Pragmatic Play",
    note: "Показатель относится к оригинальной Sweet Bonanza, а не к версиям 1000 или Super Scatter.",
  },
  "jammin-jars": {
    maxWin: "19 998,5x",
    maxWinLabel: "Наблюдавшийся максимум",
    rtpVariants: ["96,83%", "94,25%"],
    source: "https://www.pushgaming.com/games/jammin-jars.html",
  },
  "razor-shark": {
    rtpVariants: ["96,70%", "94,06%"],
    source: "https://www.pushgaming.com/games/razor-shark.html",
  },
  "fat-rabbit": {
    maxWin: "3 844x",
    maxWinLabel: "Наблюдавшийся максимум",
    rtpVariants: ["96,45%", "94,15%"],
    source: "https://www.pushgaming.com/games/fat-rabbit.html",
  },
  "retro-tapes": {
    maxWin: "10 000x",
    maxWinLabel: "Наблюдавшийся максимум",
    rtpVariants: ["96,47%", "94,46%"],
    source: "https://www.pushgaming.com/games/retro-tapes.html",
  },
  "wanted-dead-or-a-wild": {
    maxWin: "12 500x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,38%", "94,55%", "92,33%", "88,42%"],
    source: "https://www.hacksawgaming.com/games/wanted-dead-or-a-wild",
  },
  "le-bandit": {
    maxWin: "10 000x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,34%", "94,23%", "92,17%", "88,36%"],
    source: "https://www.hacksawgaming.com/games/le-bandit",
  },
  "chaos-crew": {
    maxWin: "10 000x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,30%", "92,40%", "88,40%"],
    source: "https://www.hacksawgaming.com/games/chaos-crew",
  },
  "chaos-crew-2": {
    maxWin: "20 000x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,27%", "94,22%", "92,41%", "88,28%"],
    source: "https://www.hacksawgaming.com/games/chaos-crew-2",
  },
  "san-quentin-xways": {
    maxWin: "150 000x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,03%"],
    source: "https://nolimitcity.com/games/san-quentin",
  },
  "fire-in-the-hole": {
    maxWin: "60 000x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,06%"],
    source: "https://nolimitcity.com/games/fire-in-the-hole",
  },
  deadwood: {
    maxWin: "13 950x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,03%"],
    source: "https://nolimitcity.com/games/deadwood",
  },
  mental: {
    maxWin: "66 666x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,08%"],
    source: "https://nolimitcity.com/games/mental",
  },
  starburst: {
    maxWin: "800x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,08%"],
    source: "https://netent.com/games/starburst",
  },
  "gonzos-quest": {
    maxWin: "2 200x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["95,97%"],
    source: "https://netent.com/games/gonzos-quest",
  },
  "snake-arena": {
    maxWin: "2 758,8x",
    maxWinLabel: "Максимальная выплата",
    rtpVariants: ["96,25%"],
    source: "https://www.relax-gaming.com/products/casino/snakearena",
  },
  "book-of-99": {
    maxWin: "5 000x",
    maxWinLabel: "Заявленный потенциал",
    rtpVariants: ["99,00%"],
    source: "https://www.relax-gaming.com/products/casino/bookof99",
  },
};

const tagExplanations: Record<string, string> = {
  "Свободные вращения":
    "У игры есть отдельный бонусный раунд со своими правилами. Важнее не само наличие фриспинов, а то, какие механики переносятся внутрь и что там накапливается.",
  "Множители":
    "Часть выигрышей может усиливаться множителем. Смотрите, суммируются ли значения, переносятся ли между вращениями и к какому именно выигрышу применяются.",
  "Pay Anywhere":
    "Выплата формируется по количеству одинаковых символов на поле, а не по фиксированной линии. Это меняет способ чтения результата, но не делает выигрыш более вероятным сам по себе.",
  "Book-бонус":
    "Книга обычно совмещает scatter и wild, а в бонусе выбирается специальный расширяющийся символ. Ключевой вопрос — когда расширение действительно образует выплату.",
  "Расширяющийся символ":
    "Специальный символ может занять весь барабан или его значительную часть. Такая анимация заметна визуально, но её ценность определяется таблицей выплат и условиями активации.",
  "Каскады":
    "После выплаты участвовавшие символы исчезают, а поле заполняется снова. Один оплаченный раунд поэтому может состоять из нескольких последовательных событий.",
  "Шкала прогресса":
    "Определённые события заряжают счётчик или шкалу. Полезно понимать, сбрасывается ли прогресс после вращения и что именно происходит при заполнении.",
  "Преобразование символов":
    "Функция меняет часть символов на поле или превращает их в более полезный тип. Следите за моментом преобразования и тем, создаёт ли оно новую цепочку выплат.",
  "Закрепляющийся wild":
    "Wild может оставаться на позиции дольше одного вращения, чаще всего в бонусном режиме. Эффект наглядный, но число оставшихся вращений по-прежнему критично.",
  "Сбор значений":
    "Специальный символ собирает денежные или множительные значения с других позиций. Важно, происходит ли сбор один раз или повторяется в течение бонуса.",
  "Сбор символов":
    "Игра ведёт счёт определённым символам или событиям. Накопление может открывать следующий уровень функции, дополнительные вращения или другой эффект.",
  "Mystery-символы":
    "Закрытые символы раскрываются в общий тип или набор значений. До раскрытия визуально невозможно понять итог комбинации, поэтому ориентируйтесь на правила функции.",
  Wild:
    "Wild заменяет часть обычных символов. В некоторых играх он дополнительно несёт множитель, перемещается или остаётся на поле, поэтому одной подписи Wild недостаточно для понимания механики.",
  "Несколько бонусов":
    "У игры больше одного бонусного сценария. Сравнивайте их по правилам, а не только по названию: одинаковое число фриспинов может вести к очень разной структуре раунда.",
  xWays:
    "Специальный символ раскрывает дополнительные позиции и увеличивает число способов собрать выигрыш. Итоговое количество способов зависит от текущего состояния барабанов.",
  "Split-символы":
    "Одна позиция делится на несколько частей, повышая число символов на барабане и потенциальных маршрутов выплаты.",
  "Динамическое поле":
    "Размер или активная область поля меняются по ходу события. Поэтому запись вроде 5 × 3+ важнее читать вместе с правилами расширения.",
  xBomb:
    "Взрывной wild удаляет соседние позиции и может увеличивать множитель следующего каскада. Эффект нужно читать вместе с порядком взрывов и обрушений.",
  xNudge:
    "Wild сдвигается до полного появления на барабане, а каждый шаг может повышать его множитель. Несколько таких wild способны взаимодействовать в одной выплате.",
  xSplit:
    "Механика делит символы или позиции и тем самым увеличивает число элементов на барабане. Она особенно заметна в играх с динамическим числом способов.",
  Respin:
    "После определённого события запускается повторное вращение, иногда с сохранением части поля. Это отдельный цикл внутри базового раунда, а не гарантированный бонус.",
  "Золотые клетки":
    "Отмеченные позиции сохраняют состояние и могут усиливать последующие каскады или бонусные события. Здесь важна не только комбинация символов, но и история самого поля.",
  "Персонажи-функции":
    "Специальные персонажи выполняют разные действия: собирают значения, умножают, добавляют символы или меняют состояние поля. Их эффект стоит разбирать по отдельности.",
};

export function getVerifiedSlotMetrics(slug: string) {
  return verifiedMetrics[slug];
}

export function slotFeatureCards(slot: Slot) {
  const cards: SlotFeatureCard[] = [
    {
      title: "Ключевая функция",
      text: slot.feature,
      kind: "primary" as const,
    },
  ];
  for (const tag of slot.tags.slice(0, 3)) {
    cards.push({
      title: tag,
      text:
        tagExplanations[tag] ||
        `Особенность «${tag}» отмечена в правилах этой игры. Перед запуском проверьте, когда она срабатывает и сохраняется ли её эффект между событиями.`,
      kind: "secondary" as const,
    });
  }
  return cards;
}

const rtpValues = slots.map(slotRtpValue).sort((a, b) => a - b);
const catalogMedianRtp =
  rtpValues.length % 2
    ? rtpValues[(rtpValues.length - 1) / 2]
    : (rtpValues[rtpValues.length / 2 - 1] + rtpValues[rtpValues.length / 2]) / 2;

export function catalogRtpContext(slot: Slot) {
  const value = slotRtpValue(slot);
  const delta = value - catalogMedianRtp;
  const direction = Math.abs(delta) < 0.005 ? "на уровне" : delta > 0 ? "выше" : "ниже";
  return {
    value,
    median: catalogMedianRtp,
    delta,
    label:
      direction === "на уровне"
        ? "На уровне медианы каталога"
        : `${Math.abs(delta).toFixed(2).replace(".", ",")} п.п. ${direction} медианы каталога`,
  };
}

const volatilityRank: Record<string, number> = {
  Низкая: 1,
  Средняя: 2,
  Высокая: 3,
  Экстремальная: 4,
};

export function volatilityContext(slot: Slot) {
  const rank = volatilityRank[slot.volatility] || 0;
  if (rank >= 4) return "Верхняя ступень шкалы в текущем каталоге";
  if (rank === 3) return "Выше средней по текущему каталогу";
  if (rank === 2) return "Средняя ступень по текущему каталогу";
  if (rank === 1) return "Ниже средней по текущему каталогу";
  return "Справочная категория провайдера";
}
