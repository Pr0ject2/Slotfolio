import Link from "next/link";
import { notFound } from "next/navigation";
import { mechanics, slots } from "@/lib/data";
import { Breadcrumbs, GameRow, SectionTitle } from "@/components/editorial";
import { pageMetadata } from "@/lib/seo";

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
  const mechanic = mechanics.find((item) => item.slug === slug);
  if (!mechanic) {
    return pageMetadata({
      title: "Механика не найдена",
      description: "Такой механики нет в текущем справочнике Slotfolio.",
      path: "/mechanics",
      noIndex: true,
    });
  }

  return pageMetadata({
    title: `${mechanic.name}: как работает механика`,
    description: mechanic.text,
    path: `/mechanics/${mechanic.slug}`,
  });
}

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
  ways: [
    "В системе способов фиксированная выигрышная линия не задаётся заранее. Обычно сочетание собирается на соседних барабанах слева направо, а подходящие позиции образуют несколько возможных маршрутов одновременно.",
    "Число способов может быть постоянным или меняться прямо внутри раунда. Расширение поля, разделение символов и дополнительные позиции увеличивают количество возможных сочетаний, но сами по себе не говорят о вероятности выигрыша.",
  ],
};

const watchTexts: Record<string, string> = {
  cascades:
    "Проверьте, какие символы исчезают после выплаты, что переносится на следующий каскад и когда заканчивается цепочка. Отдельно посмотрите, сохраняются ли множители внутри вращения или бонусного раунда.",
  clusters:
    "Уточните минимальный размер кластера, правила соседства и то, исчезают ли выигрышные символы. Иногда диагональное соседство не считается, а иногда игра использует дополнительные преобразования поля.",
  lines:
    "Посмотрите число активных линий, направление чтения и функцию wild. В бонусе отдельно проверьте, остаётся ли схема линий прежней или специальные символы меняют её.",
  collect:
    "Проверьте, какой символ запускает сбор, какие значения он учитывает и сбрасывается ли накопление после вращения. В бонусных режимах условия сбора часто отличаются от базовой игры.",
  ways:
    "Начните с базового числа способов и размера поля. Затем проверьте, какие функции добавляют позиции, делят символы или раскрывают новые ряды, и когда сетка возвращается к исходному состоянию.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = mechanics.find((x) => x.slug === slug);
  if (!m || !texts[slug]) notFound();

  const games = slots.filter((s) => s.mechanic === m.name);

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
            <p>{watchTexts[slug]}</p>
            <div className="margin-note">
              <strong>Механика не обещает результат</strong>
              <p>
                Каскады, линии, кластеры, сбор и способы объясняют устройство игры.
                Они не дают способа предсказать исход и не делают игру
                прибыльной.
              </p>
            </div>
            {slug === "cascades" ? (
              <Link href="/journal/how-cascades-work" className="text-link">
                Большой разбор каскадов ↗
              </Link>
            ) : (
              <Link
                href={`/slots?mechanic=${encodeURIComponent(m.name)}`}
                className="text-link"
              >
                Открыть игры с этой механикой ↗
              </Link>
            )}
          </section>
        </article>
      </div>
      <section id="games">
        <SectionTitle
          title={"Игры: " + m.name.toLowerCase()}
          href={"/slots?mechanic=" + encodeURIComponent(m.name)}
          label="Открыть с фильтром"
        />
        {games.map((s) => (
          <GameRow key={s.slug} slot={s} />
        ))}
      </section>
    </>
  );
}
