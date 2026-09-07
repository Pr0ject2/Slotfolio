import Link from "next/link";
import { notFound } from "next/navigation";
import { slots, getSlot, providerSlug, mechanics } from "@/lib/data";
import {
  Breadcrumbs,
  GameImage,
  GameRow,
  SectionTitle,
  Affiliate,
} from "@/components/editorial";
import { CompareButton } from "@/components/catalog";
export const dynamicParams = false;
export function generateStaticParams() {
  return slots.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getSlot((await params).slug);
  return { title: s?.name || "Игра не найдена", description: s?.description };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getSlot((await params).slug);
  if (!s) notFound();
  const mechanic = mechanics.find((m) => m.name === s.mechanic)!;

  const mechanicExplanations: Record<string, string> = {
    "Каскады":
      "Выигрышные символы удаляются с поля, а освободившиеся позиции заполняются новыми. Если формируется следующее сочетание, цепочка продолжается в рамках того же вращения. Наличие каскадов само по себе не определяет вероятность выигрыша.",
    "Кластеры":
      "Здесь важно соседство: выигрыш образует группа соприкасающихся символов. Привычные маршруты слева направо уступают место чтению всего поля. После исчезновения группы новые символы могут продолжить цепную реакцию.",
    "Линии":
      "Базовое поле сохраняет знакомую структуру барабанов и заданных маршрутов. При чтении правил отдельно посмотрите на направление выплат, число активных линий и то, как wild-символы меняют сочетания в бонусной игре.",
    "Сбор символов":
      "Здесь ключевое событие — появление специального символа-сборщика. Он учитывает значения других символов на поле, поэтому важно понимать, в какой момент происходит сбор и переносится ли накопление между вращениями бонуса.",
    "Способы":
      "Фиксированной линии нет: совпадения собираются через соседние барабаны, а число возможных маршрутов может меняться. Расширение поля, split-символы и дополнительные позиции увеличивают количество способов прямо по ходу раунда.",
  };

  const related = [
    ...slots.filter(
      (x) => x.slug !== s.slug && x.mechanic === s.mechanic,
    ),
    ...slots.filter(
      (x) =>
        x.slug !== s.slug &&
        x.provider === s.provider &&
        x.mechanic !== s.mechanic,
    ),
    ...slots.filter(
      (x) => x.slug !== s.slug && x.provider !== s.provider,
    ),
  ].filter(
    (item, index, array) =>
      array.findIndex((candidate) => candidate.slug === item.slug) === index,
  ).slice(0, 2);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Каталог", href: "/slots" }, { label: s.name }]}
      />
      <div className="slot-heading">
        <div>
          <span className="eyebrow accent">Досье игры / {s.year}</span>
          <h1>{s.name}</h1>
          <Link
            className="provider-link"
            href={"/providers/" + providerSlug(s.provider)}
          >
            {s.provider} ↗
          </Link>
        </div>
        <CompareButton slug={s.slug} />
      </div>
      <div className="slot-intro">
        <figure className="slot-figure">
          <GameImage slot={s} priority />
          <figcaption>
            Игровая графика · {s.provider} · {s.name}
          </figcaption>
        </figure>
        <div className="slot-summary">
          <span className="eyebrow">Суть игры</span>
          <p className="slot-deck">{s.description}</p>
          <dl className="facts">
            <div>
              <dt>Механика</dt>
              <dd>
                <Link href={"/mechanics/" + mechanic.slug}>{s.mechanic} ↗</Link>
              </dd>
            </div>
            <div>
              <dt>Игровое поле</dt>
              <dd>{s.field}</dd>
            </div>
            <div>
              <dt>RTP, справочно</dt>
              <dd>{s.rtp}*</dd>
            </div>
            <div>
              <dt>Волатильность</dt>
              <dd>{s.volatility}</dd>
            </div>
          </dl>
          <p className="data-note">
            * Версия RTP зависит от конфигурации. Проверяйте справку внутри
            игры.
          </p>
        </div>
      </div>
      <div className="article-layout slot-body">
        <aside className="article-toc">
          <span className="eyebrow">В этом досье</span>
          <a href="#mechanic">Как устроена игра</a>
          <a href="#editor-view">Взгляд редакции</a>
          <a href="#facts">Факты и источники</a>
          <a href="#faq">Вопросы об игре</a>
          <a href="#related">Похожие игры</a>
          <Link href="/compare">Открыть сравнение ↗</Link>
        </aside>
        <article className="prose">
          <section id="mechanic">
            <h2>Как устроена игра</h2>
            <p>
              {s.feature} Именно эта особенность определяет, за чем следить во
              время раунда.
            </p>
            <p>{mechanicExplanations[s.mechanic]}</p>
            <p>
              Перед первым запуском откройте таблицу выплат. Она объясняет роль
              wild и scatter, условия срабатывания функций и ограничения
              максимальной выплаты для конкретной версии.
            </p>
            <Link className="text-link" href={"/mechanics/" + mechanic.slug}>
              Подробнее: {s.mechanic.toLowerCase()} ↗
            </Link>
          </section>
          <section id="editor-view">
            <span className="eyebrow accent">Взгляд редакции</span>
            <blockquote>{s.note}</blockquote>
            <p>
              Это качественное описание устройства игры, а не оценка её
              прибыльности. Сравнивайте игры по понятности правил, темпу и
              визуальной подаче — эти критерии не меняют математического
              ожидания.
            </p>
          </section>
          <section id="facts">
            <h2>Как читать характеристики</h2>
            <p>
              RTP описывает теоретическую долю возврата на большой дистанции. Он
              не показывает, сколько вернётся за одну сессию. Волатильность
              описывает разброс результатов, но не позволяет предсказать
              следующий раунд.
            </p>
            <div className="margin-note">
              <strong>Сначала — версия игры</strong>
              <p>
                В досье приведены справочные характеристики. У
                оператора могут быть другие настройки RTP. При расхождении
                ориентируйтесь на правила именно запущенной версии.
              </p>
            </div>
            <p className="source-note">
              Источник описания функций и характеристик:{" "}
              <a href={s.source} target="_blank" rel="noreferrer">
                официальная страница {s.provider} ↗
              </a>
              . Числовые параметры сверяются с источником и конкретной версией
              перед публикацией.
            </p>
          </section>
          <Affiliate />
          <section id="faq">
            <h2>Вопросы об игре</h2>
            <details>
              <summary>Можно ли предсказать следующий результат?</summary>
              <p>
                Нет. Предыдущие результаты не дают способа вычислить следующий
                исход. Серия проигрышей не означает, что выигрыш стал
                обязательным.
              </p>
            </details>
            <details>
              <summary>Почему RTP на другом сайте отличается?</summary>
              <p>
                У игры могут существовать несколько математических конфигураций.
                Также источники иногда смешивают оригинальную игру и её
                продолжения. Сверяйте название и справку запущенной версии.
              </p>
            </details>
            <details>
              <summary>Что сравнить перед выбором?</summary>
              <p>
                Механику выплат, размеры поля, функции бонуса и понятность
                интерфейса. <Link href="/compare">Таблица сравнения</Link>{" "}
                помогает увидеть различия.
              </p>
            </details>
          </section>
        </article>
      </div>
      <section id="related">
        <SectionTitle
          title="Продолжить знакомство"
          href="/slots"
          label="В каталог"
        />
        {related.map((x) => (
          <GameRow key={x.slug} slot={x} />
        ))}
      </section>
    </>
  );
}
