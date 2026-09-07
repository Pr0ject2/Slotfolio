import { Suspense } from "react";
import { Comparison } from "@/components/catalog";
import { Breadcrumbs } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Сравнение игр",
  description: "Сравнение до трёх слотов по провайдеру, механикам, ключевым особенностям, игровому полю, RTP-конфигурациям, подтверждённым максимумам и волатильности.",
  path: "/compare",
  noIndex: true,
});

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
      <Suspense fallback={<div className="comparison-loading">Готовим таблицу…</div>}>
        <Comparison />
      </Suspense>
    </>
  );
}
