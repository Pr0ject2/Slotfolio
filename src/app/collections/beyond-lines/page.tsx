import Link from "next/link";
import { slots } from "@/lib/data";
import { Breadcrumbs, GameImage, Affiliate } from "@/components/editorial";
import { CompareButton } from "@/components/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "За пределами линий — три игры с другой логикой",
  description: "Подборка слотов без привычной логики линий: сравниваем Sweet Bonanza, Reactoonz и Gates of Olympus через правила и механику.",
  path: "/collections/beyond-lines",
  openGraphType: "article",
});

export default function Page() {
  const games = [slots[1], slots[3], slots[0]];
  const notes = [
    "Одинаковые символы не обязаны стоять рядом. Sweet Bonanza считает их по всему полю, а затем запускает каскад. Это удобная отправная точка, чтобы разделить два понятия: условие выплаты и способ обновления поля.",
    "Здесь соседство снова важно — но вместо линии нужен кластер. Группы существ исчезают, энергия накапливается, а новые эффекты меняют поле. Более сложная механика требует внимательного знакомства со справкой.",
    "Возвращаемся к подсчёту символов по полю, но меняем роль множителя. В бонусной игре множители складываются. В результате похожее на Sweet Bonanza поле приобретает другой ритм.",
  ];
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Подборки", href: "/collections" },
          { label: "За пределами линий" },
        ]}
      />
      <header className="collection-heading">
        <div>
          <span className="eyebrow accent">Редакционная подборка / 3 игры</span>
          <h1>
            За пределами
            <br />
            <em>линий</em>
          </h1>
          <p>
            Три игры, в которых привычный маршрут по барабанам уступает место
            другим правилам. Не рейтинг — последовательность для знакомства.
          </p>
        </div>
        <div className="collection-images">
          <GameImage slot={slots[1]} priority />
          <GameImage slot={slots[3]} />
        </div>
      </header>
      <div className="hub-lead">
        <span className="eyebrow accent">Принцип отбора</span>
        <p>
          Мы выбрали игры, чтобы показать разницу между каскадами, кластерами и
          выплатами по всему полю. У них высокая волатильность; визуальная
          лёгкость не означает меньшего риска. Порядок в подборке отражает ход
          объяснения, а не качество или потенциальную доходность.
        </p>
      </div>
      {games.map((s, i) => (
        <article className="collection-entry" key={s.slug}>
          <span className="number">0{i + 1}</span>
          <Link href={"/slots/" + s.slug}>
            <GameImage slot={s} />
          </Link>
          <div>
            <span className="eyebrow accent">
              {s.mechanic} / {s.provider}
            </span>
            <h2>
              <Link href={"/slots/" + s.slug}>{s.name}</Link>
            </h2>
            <p>{notes[i]}</p>
            <Link className="text-link" href={"/slots/" + s.slug}>
              Досье игры ↗
            </Link>
            <CompareButton slug={s.slug} />
          </div>
        </article>
      ))}
      <div className="article-layout">
        <aside className="article-toc">
          <span className="eyebrow">После знакомства</span>
          <Link href="/compare">Сопоставить игры ↗</Link>
        </aside>
        <article className="prose">
          <h2>Что полезно сравнить</h2>
          <p>
            Посмотрите, какие символы образуют выплату, где действует множитель
            и что сбрасывается в конце вращения. Эти три вопроса расскажут о
            разнице больше, чем цветовая палитра или тема игры.
          </p>
          <p>
            Добавьте игры в сравнение и откройте{" "}
            <Link href="/compare">общую таблицу</Link>. Если правила пока
            кажутся сложными, начните с{" "}
            <Link href="/journal/how-cascades-work">разбора каскадов</Link>.
          </p>
          <Affiliate context="collection" />
        </article>
      </div>
    </>
  );
}
