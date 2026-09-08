import Link from "next/link";
import { formatRtp } from "@/lib/catalog-stats";
import { notFound } from "next/navigation";
import {
  slots,
  getSlot,
  providerSlug,
  mechanics,
  relatedSlots,
  slotMechanics,
} from "@/lib/data";
import {
  Breadcrumbs,
  GameImage,
  GameRow,
  SectionTitle,
  Affiliate,
} from "@/components/editorial";
import { CompareButton } from "@/components/compare-button";
import { JsonLd } from "@/components/json-ld";
import { absoluteMediaUrl, absoluteUrl, pageMetadata } from "@/lib/seo";
import {
  catalogRtpContext,
  getVerifiedSlotMetrics,
  slotFeatureCards,
  volatilityContext,
} from "@/lib/dossier";
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
  if (!s) {
    return pageMetadata({
      title: "Игра не найдена",
      description: "Такого игрового досье нет в текущем каталоге Slotfolio.",
      path: "/slots",
      noIndex: true,
    });
  }

  return pageMetadata({
    title: `${s.name}: механика, RTP и устройство игры`,
    description: s.description,
    path: `/slots/${s.slug}`,
    image: s.featureImage || s.image,
    openGraphType: "article",
  });
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getSlot((await params).slug);
  if (!s) notFound();
  const mechanicList = slotMechanics(s);
  const mechanicRecords = mechanicList
    .map((name) => mechanics.find((m) => m.name === name))
    .filter((item): item is (typeof mechanics)[number] => Boolean(item));
  const primaryMechanic = mechanicRecords[0];

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

  const dossierUrl = absoluteUrl(`/slots/${s.slug}`);
  const imageUrl = absoluteMediaUrl(s.featureImage || s.image);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${s.name}: механика, RTP и устройство игры`,
      description: s.description,
      url: dossierUrl,
      mainEntityOfPage: dossierUrl,
      image: [imageUrl],
      inLanguage: "ru",
      publisher: {
        "@type": "Organization",
        name: "Slotfolio",
        url: absoluteUrl("/"),
      },
      about: {
        "@type": "Game",
        name: s.name,
        description: s.description,
        creator: {
          "@type": "Organization",
          name: s.provider,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Каталог слотов",
          item: absoluteUrl("/slots"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: s.name,
          item: dossierUrl,
        },
      ],
    },
  ];

  const related = relatedSlots(s, 3);
  const featureCards = slotFeatureCards(s);
  const verified = getVerifiedSlotMetrics(s.slug);
  const rtpContext = catalogRtpContext(s);
  const volatilitySummary = volatilityContext(s);

  return (
    <>
      <JsonLd data={structuredData} />
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
        <CompareButton slug={s.slug} name={s.name} />
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
              <dt>Механики</dt>
              <dd className="fact-link-list">
                {mechanicRecords.map((mechanic) => (
                  <Link key={mechanic.slug} href={"/mechanics/" + mechanic.slug}>
                    {mechanic.name} ↗
                  </Link>
                ))}
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
            {verified?.maxWin && (
              <div>
                <dt>{verified.maxWinLabel || "Подтверждённый максимум"}</dt>
                <dd>{verified.maxWin}</dd>
              </div>
            )}
            <div className="facts-wide">
              <dt>Ключевые особенности</dt>
              <dd className="slot-tag-list">
                {s.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/slots?feature=${encodeURIComponent(tag)}`}
                  >
                    {tag}
                  </Link>
                ))}
              </dd>
            </div>
          </dl>
          <p className="data-note">
            * RTP указан для справочной конфигурации.
            {verified?.rtpVariants && verified.rtpVariants.length > 1
              ? ` Публичный источник также перечисляет варианты: ${verified.rtpVariants.join(" · ")}.`
              : " У оператора может использоваться другая версия."}
          </p>
        </div>
      </div>
      <div className="article-layout slot-body">
        <aside className="article-toc">
          <span className="eyebrow">В этом досье</span>
          <a href="#mechanic">Как устроена игра</a>
          <a href="#features">Функции и бонусы</a>
          <a href="#math-profile">Математический профиль</a>
          <a href="#editor-view">Взгляд редакции</a>
          <a href="#catalog-context">Сравнение с каталогом</a>
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
            {mechanicList.map((name) => (
              <p key={name}>{mechanicExplanations[name]}</p>
            ))}
            <p>
              Перед первым запуском откройте таблицу выплат. Она объясняет роль
              wild и scatter, условия срабатывания функций и ограничения
              максимальной выплаты для конкретной версии.
            </p>
            {primaryMechanic && (
              <Link
                className="text-link"
                href={"/mechanics/" + primaryMechanic.slug}
              >
                Подробнее: {primaryMechanic.name.toLowerCase()} ↗
              </Link>
            )}
          </section>
          <section id="features">
            <span className="eyebrow accent">Функции и бонусы</span>
            <h2>Что реально меняет ход раунда</h2>
            <div className="dossier-feature-grid">
              {featureCards.map((card, index) => (
                <article
                  className={`dossier-feature-card ${card.kind === "primary" ? "is-primary" : ""}`}
                  key={`${card.title}-${index}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </section>
          <section id="math-profile">
            <span className="eyebrow accent">Математический профиль</span>
            <h2>Цифры без ложной точности</h2>
            <div className="dossier-metric-grid">
              <div>
                <span>RTP в каталоге</span>
                <strong>{s.rtp}</strong>
                <small>Справочная конфигурация</small>
              </div>
              {verified?.rtpVariants && verified.rtpVariants.length > 1 && (
                <div>
                  <span>RTP-конфигурации</span>
                  <strong>{verified.rtpVariants.length}</strong>
                  <small>{verified.rtpVariants.join(" · ")}</small>
                </div>
              )}
              {verified?.maxWin && (
                <div>
                  <span>{verified.maxWinLabel || "Подтверждённый максимум"}</span>
                  <strong>{verified.maxWin}</strong>
                  <small>В единицах ставки</small>
                </div>
              )}
              <div>
                <span>Волатильность</span>
                <strong>{s.volatility}</strong>
                <small>{volatilitySummary}</small>
              </div>
              <div>
                <span>Игровое поле</span>
                <strong>{s.field}</strong>
                <small>{mechanicList.join(" · ")}</small>
              </div>
            </div>
            {verified?.note && <p className="metric-caveat">{verified.note}</p>}
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
          <section id="catalog-context">
            <span className="eyebrow accent">Контекст каталога</span>
            <h2>С чем сравнивать эту игру</h2>
            <div className="dossier-context-grid">
              <div>
                <span>RTP относительно базы</span>
                <strong>{rtpContext.label}</strong>
                <small>Медиана по {rtpContext.count} играм: {formatRtp(rtpContext.median)}</small>
              </div>
              <div>
                <span>Волатильность</span>
                <strong>{s.volatility}</strong>
                <small>{volatilitySummary}</small>
              </div>
              <div>
                <span>Ближайшие по устройству</span>
                <strong>{related.map((item) => item.name).join(" · ")}</strong>
                <small>Подбор по механикам, тегам, провайдеру и RTP</small>
              </div>
            </div>
            <Link className="text-link" href={`/compare?seed=${s.slug}`}>
              Открыть таблицу сравнения ↗
            </Link>
          </section>
          <section id="facts">
            <h2>Как читать эти характеристики</h2>
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
              Базовый источник описания функций:{" "}
              <a href={s.source} target="_blank" rel="noreferrer">
                официальная страница {s.provider} ↗
              </a>
              .
              {verified && verified.source !== s.source && (
                <>
                  {" "}Дополнительные числовые параметры сверены по {" "}
                  <a href={verified.source} target="_blank" rel="noreferrer">
                    {verified.sourceLabel || "официальному источнику"} ↗
                  </a>
                  .
                </>
              )}
              {verified && verified.source === s.source &&
                " Дополнительные числовые параметры взяты с той же официальной страницы."}
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
