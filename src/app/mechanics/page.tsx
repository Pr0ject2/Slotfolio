import Link from "next/link";
import { mechanics } from "@/lib/data";
import { Breadcrumbs } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Игровые механики",
  description: "Справочник игровых механик слотов: каскады, кластеры, линии, сбор символов и способы.",
  path: "/mechanics",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Механики" }]} />
      <div className="page-heading">
        <div>
          <span className="eyebrow accent">Справочник</span>
          <h1>Внутри игры</h1>
        </div>
        <p>
          Не тема оформления, а способ работы.
          <br />
          От линий до цепных реакций.
        </p>
      </div>
      <div className="hub-lead">
        <p className="big-serif">
          Что происходит после нажатия <em>«Вращать»?</em>
        </p>
        <div className="hub-lead-copy">
          <p>
            Две игры могут выглядеть совершенно по-разному, но использовать один
            принцип выплат. И наоборот: за похожими барабанами иногда скрываются
            разные правила.
          </p>
          <p>
            Механика — полезная отправная точка для знакомства с каталогом. Она
            объясняет, как формируются сочетания, что происходит с символами и
            где начинается бонусная игра.
          </p>
        </div>
      </div>
      <div className="hub-list">
        {mechanics.map((m, i) => (
          <Link key={m.slug} href={"/mechanics/" + m.slug}>
            <span className="number">0{i + 1}</span>
            <h2>{m.name}</h2>
            <p>{m.text}</p>
            <b>↗</b>
          </Link>
        ))}
      </div>
    </>
  );
}
