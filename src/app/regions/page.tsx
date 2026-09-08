import Link from "next/link";
import { Breadcrumbs } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Страны и доступность",
  description: "Страновой справочник Slotfolio: как проверять доступность игр, оператора, лицензию и локальные ограничения.",
  path: "/regions",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Страны и доступность" }]} />
      <div className="simple-heading">
        <span className="eyebrow accent">Локальный контекст</span>
        <h1>
          Одна игра.
          <br />
          Разные условия доступа.
        </h1>
        <p>
          Наличие игры в каталоге не означает её доступность в вашей стране.
          Начните с регулятора, лицензии и условий площадки.
        </p>
      </div>
      <div className="hub-list" style={{ marginTop: 40 }}>
        <Link href="/regions/great-britain">
          <span className="number">GB</span>
          <h2>Великобритания</h2>
          <p>
            Англия, Шотландия и Уэльс. Как проверить оператора в реестре
            Gambling Commission.
          </p>
          <b>↗</b>
        </Link>
      </div>
      <p className="data-note">
        В каркасе представлена одна страна. Автоматическое определение
        местоположения не используется.
      </p>
    </>
  );
}
