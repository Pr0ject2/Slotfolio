import { type Slot } from "@/lib/data";
export function GameImage({ slot }: { slot: Slot }) {
  return (
    <img
      className="game-image"
      src={slot.image}
      alt={`Иллюстрация ${slot.name}`}
      width="500"
      height="280"
      loading="lazy"
    />
  );
}
