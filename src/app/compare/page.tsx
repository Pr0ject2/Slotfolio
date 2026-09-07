import { Comparison } from "@/components/catalog";
import { Breadcrumbs } from "@/components/editorial";

export const metadata = { title: "Сравнение игр" };

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Каталог", href: "/slots" }, { label: "Сравнение" }]}
      />
      <div className="page-heading utility-heading comparison-heading">
        <div>
          <span className="eyebrow accent">Рядом — понятнее</span>
          <h1>Сравнить игры</h1>
        </div>
        <p>
          До трёх игр в одной таблице.
          <br />
          Выбор сохраняется в этом браузере.
        </p>
      </div>
      <Comparison />
    </>
  );
}
