import Link from "next/link";
import { Breadcrumbs } from "@/components/editorial";
export const metadata = { title: "Разборы и гайды" };
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Разборы" }]} />
      <div className="page-heading">
        <div>
          <span className="eyebrow accent">Механики, RTP и бонусы</span>
          <h1>Разборы и гайды</h1>
        </div>
        <p>
          Практические объяснения механик и условий.
          <br />
          Без рекламной подачи и лишних обещаний.
        </p>
      </div>
      <section className="feature-band" style={{ marginTop: 0 }}>
        <div className="feature-band-title">
          <span className="eyebrow">Большой разбор / 9 минут</span>
          <h2>
            <Link href="/journal/how-cascades-work">
              Один спин.
              <br />
              <em>Несколько событий.</em>
            </Link>
          </h2>
          <p>
            Как каскады изменили устройство слотов — и почему цепная реакция не
            означает бесконечную игру.
          </p>
          <Link className="text-link" href="/journal/how-cascades-work">
            Читать материал ↗
          </Link>
        </div>
        <div className="cascade-art" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div className="cascade-column" key={i}>
              <span>◆</span>
              <span className={i === 1 ? "falling" : ""}>
                {i === 1 ? "↓" : "✦"}
              </span>
              <span>◆</span>
            </div>
          ))}
          <small>ВНУТРИ МЕХАНИКИ</small>
        </div>
      </section>
      <div className="hub-list">
        <Link href="/journal/understanding-rtp">
          <span className="number">Гайд</span>
          <h2>Что на самом деле означает RTP</h2>
          <p>
            Почему 96% не обещают возврат в отдельной сессии. Короткое
            объяснение без мифов.
          </p>
          <b>↗</b>
        </Link>
        <Link href="/bonuses">
          <span className="number">Гайд</span>
          <h2>Бонус начинается с условий</h2>
          <p>
            Вейджер, срок действия и ограничения: как прочитать предложение до
            активации.
          </p>
          <b>↗</b>
        </Link>
      </div>
    </>
  );
}
