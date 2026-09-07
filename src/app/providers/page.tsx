import Link from "next/link";
import { Breadcrumbs } from "@/components/editorial";
export const metadata = { title: "Провайдеры слотов" };
export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Каталог", href: "/slots" }, { label: "Провайдеры" }]}
      />
      <div className="page-heading utility-heading">
        <div>
          <span className="eyebrow accent">Студии и их игры</span>
          <h1>Кто делает слоты</h1>
        </div>
        <p>
          За узнаваемой графикой —<br />
          свой подход к механике и ритму игры.
        </p>
      </div>
      <div className="hub-list">
        <Link href="/providers/pragmatic-play">
          <span className="number">P</span>
          <h2>Pragmatic Play</h2>
          <p>
            Каскады, линии и механики сбора. Четыре игры уже связаны
            с профилем провайдера.
          </p>
          <b>↗</b>
        </Link>
        <Link href="/providers/play-n-go">
          <span className="number">P</span>
          <h2>Play’n GO</h2>
          <p>От лаконичного Book of Dead до цепных реакций Reactoonz.</p>
          <b>↗</b>
        </Link>
      </div>
    </>
  );
}
