export const providerReadingNotesV129: Record<
  string,
  { title: string; text: string; compare: string[] }
> = {
  clawbuster: {
    title: "Смотрите, что именно делает Claw",
    text: "Сравните Zeus Claws и Claw Bonanza: Gold Rush. В первой игре клешня вмешивается в Hold & Win и значения монет, во второй — в каскадную цепочку и множители. Одинаковый визуальный приём приводит к разному состоянию раунда.",
    compare: ["zeus-claws", "claw-bonanza-gold-rush"],
  },
  onlyplay: {
    title: "Отделяйте основную сетку от второго модуля",
    text: "Hot And Spicy Jackpot использует отдельный mini-slot как источник множителя, а Coin Flynn связывает две сетки через перенос монет. Это два разных способа добавить состояние поверх простой линейной базы.",
    compare: ["hot-and-spicy-jackpot", "coin-flynn"],
  },
  "mancala-gaming": {
    title: "Линии могут вести к разным продолжениям",
    text: "Поставьте рядом Power of Zeus и Caishen Gold: Infinity Dragon. Первая игра уходит из линий в Hold & Earn, вторая продолжает выигрыш каскадом на том же поле. Так легче увидеть разницу между бонусным состоянием и продолжением одного вращения.",
    compare: ["power-of-zeus-mancala", "caishen-gold-infinity-dragon"],
  },
};
