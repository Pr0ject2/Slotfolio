import { type Slot } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";
export function GameImage({ slot }: { slot: Slot }) {
  return (
    <img
      className="game-image"
      src={withBasePath(slot.image)}
      alt={`Иллюстрация ${slot.name}`}
      width="500"
      height="280"
      loading="lazy"
      decoding="async"
    />
  );
}
