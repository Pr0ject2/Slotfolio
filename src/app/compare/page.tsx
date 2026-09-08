import { Suspense } from "react";
import { Comparison } from "@/components/comparison";
import { Breadcrumbs } from "@/components/editorial";
import { createComparisonIndex } from "@/lib/catalog-index";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Сравнение игр",
  description: "Сравнение двух слотов по провайдеру, механикам, ключевым особенностям, игровому полю, RTP-конфигурациям, подтверждённым максимумам и волатильности.",
  path: "/compare",
  noIndex: true,
});

export default function Page() {
  const items = createComparisonIndex();
  return (
    <>
      <Breadcrumbs items={[{ label: "Каталог", href: "/slots" }, { label: "Сравнение" }]} />
      <div className="page-heading utility-heading comparison-heading">
        <div>
          <span className="eyebrow accent">Рядом — понятнее</span>
          <h1>Сравнить игры</h1>
        </div>
        <p>
          Две игры в одной таблице.
          <br />
          Выбор сохраняется в этом браузере.
        </p>
      </div>
      <Suspense fallback={<div className="comparison-loading">Готовим таблицу…</div>}>
        <Comparison items={items} />
      </Suspense>
    </>
  );
}
