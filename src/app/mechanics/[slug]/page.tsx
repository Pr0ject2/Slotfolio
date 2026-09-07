import Link from "next/link";
import { notFound } from "next/navigation";
import { mechanics, slots } from "@/lib/data";
import { Breadcrumbs, GameRow, SectionTitle } from "@/components/editorial";
export const dynamicParams = false;
export function generateStaticParams() {
  return mechanics.map((m) => ({ slug: m.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: mechanics.find((x) => x.slug === slug)?.name || "Механика" };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = mechanics.find((x) => x.slug === slug);
  if (!m) notFound();
  const texts: Record<string, string[]> = {
    cascades: [
      "Выигрыш — не обязательно конец вращения. Символы, участвовавшие в выплате, исчезают. На их место падают новые, и поле проверяется ещё раз.",
      "Цепочка завершается, когда следующего выигрышного сочетания нет. При этом каскады могут работать и с линиями, и с кластерами, и с подсчётом одинаковых символов по всему полю. Это способ обновления поля, а не самостоятельное правило выплаты.",
    ],
    clusters: [
      "Здесь выигрыш формирует группа одинаковых символов, расположенных рядом. Точное число символов и правила соседства задаёт конкретная игра.",
      "Кластеры часто сочетаются с каскадами. После удаления группы оставшиеся символы перемещаются, и на поле возникают новые соседства. Не путайте кластерную выплату с оплатой одинаковых символов в любых позициях.",
    ],
    lines: [
      "Линия — заданный маршрут по позициям барабанов. Игра проверяет совпадения вдоль этого маршрута, обычно начиная с левого края.",
      "Количество линий не говорит о вероятности выигрыша само по себе. Важны таблица выплат, распределение символов и математическая модель. В бонусном раунде правила основной игры могут дополняться расширяющимися символами или wild.",
    ],
    collect: [
      "Специальный символ активирует сбор значений, показанных на других символах. В Big Bass Bonanza эту роль играет рыбак в свободных вращениях.",
      "Смотрите, какие позиции учитываются, когда выполняется сбор и переносится ли прогресс на следующий раунд. Внешне похожие механики сбора могут иметь разные условия.",
    ],
  };
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Механики", href: "/mechanics" }, { label: m.name }]}
      />
      <div className="simple-heading">
        <span className="eyebrow accent">Азбука слотов / Механика</span>
        <h1>
          {m.name}
          {slug === "cascades" ? ": вращение с продолжением" : ""}
        </h1>
        <p>{m.text}</p>
      </div>
      <div className="article-layout">
        <aside className="article-toc">
          <span className="eyebrow">В справочнике</span>
          <a href="#principle">Принцип работы</a>
          <a href="#watch">На что смотреть</a>
          <a href="#games">Игры с механикой</a>
        </aside>
        <article className="prose">
          <section id="principle">
            <h2>Принцип работы</h2>
            {texts[slug].map((t) => (
              <p key={t}>{t}</p>
            ))}
          </section>
          <section id="watch">
            <h2>На что смотреть в правилах</h2>
            <p>
              Начните с условий выплаты: сколько символов нужно и где они должны
              находиться. Затем проверьте специальные символы и особенности
              бонусного раунда. Наконец, уточните, сбрасывается ли накопленный
              множитель после завершения вращения.
            </p>
            <div className="margin-note">
              <strong>Механика не обещает результат</strong>
              <p>
                Каскады, линии и кластеры объясняют устройство игры. Они не дают
                способа предсказать исход и не делают игру прибыльной.
              </p>
            </div>
            <Link href="/journal/how-cascades-work" className="text-link">
              Большой разбор каскадов ↗
            </Link>
          </section>
        </article>
      </div>
      <section id="games">
        <SectionTitle
          title={"Игры: " + m.name.toLowerCase()}
          href={"/slots?mechanic=" + encodeURIComponent(m.name)}
          label="Открыть с фильтром"
        />
        {slots
          .filter((s) => s.mechanic === m.name)
          .map((s) => (
            <GameRow key={s.slug} slot={s} />
          ))}
      </section>
    </>
  );
}
