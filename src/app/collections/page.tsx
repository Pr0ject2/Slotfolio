import Link from "next/link";
import { slots } from "@/lib/data";
import { Breadcrumbs, GameImage } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Тематические подборки",
  description: "Тематические подборки Slotfolio: игры объединены по механике и устройству, чтобы проще видеть сходства и различия.",
  path: "/collections",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Подборки" }]} />
      <div className="page-heading">
        <div>
          <span className="eyebrow accent">Маршруты по каталогу</span>
          <h1>Игры в контексте</h1>
        </div>
        <p>
          Объединяем игры по идее.
          <br />
          Объясняем, что у них общего и в чём разница.
        </p>
      </div>
      <article className="collection-heading">
        <div>
          <span className="eyebrow">Подборка / 3 игры</span>
          <h2 className="collection-index-title">
            <Link href="/collections/beyond-lines">
              За пределами
              <br />
              линий
            </Link>
          </h2>
          <p>
            Каскады, кластеры и выплаты по всему полю. Три способа отказаться от
            привычного маршрута слева направо.
          </p>
          <Link
            className="text-link"
            style={{ marginTop: 25 }}
            href="/collections/beyond-lines"
          >
            Изучить подборку ↗
          </Link>
        </div>
        <Link href="/collections/beyond-lines" className="collection-images">
          <GameImage slot={slots[1]} />
          <GameImage slot={slots[3]} />
        </Link>
      </article>
    </>
  );
}
