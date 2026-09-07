import Link from "next/link";
import { type Slot, providerSlug, slotMechanics } from "@/lib/data";
import { affiliateUrl, affiliateHref, operators } from "@/lib/affiliate";
import { withBasePath } from "@/lib/base-path";
import { CompareButton } from "./compare-button";
import { SlotArtwork } from "./slot-artwork";
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <Link href="/">Главная</Link>
      {items.map((x, i) => (
        <span key={i}>
          <span aria-hidden="true">/</span>{" "}
          {x.href ? (
            <Link href={x.href}>{x.label}</Link>
          ) : (
            <span aria-current="page">{x.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function SectionTitle({
  title,
  href,
  label = "Смотреть всё",
}: {
  title: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {href && (
        <Link className="text-link" href={href}>
          {label} <span>↗</span>
        </Link>
      )}
    </div>
  );
}
export function GameImage({
  slot,
  className = "",
  priority = false,
}: {
  slot: Slot;
  className?: string;
  priority?: boolean;
}) {
  return (
    <SlotArtwork
      className={"game-image " + className}
      src={withBasePath(
        priority && slot.featureImage ? slot.featureImage : slot.image,
      )}
      alt={`Иллюстрация ${slot.name}`}
      width={500}
      height={280}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
export function GameRow({ slot, index, compare = false }: { slot: Slot; index?: number; compare?: boolean }) {
  return (
    <article className={`game-row${compare ? " game-row-comparable" : ""}`}>
      {index !== undefined && (
        <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
      )}
      <Link className="row-image" href={"/slots/" + slot.slug}>
        <GameImage slot={slot} />
      </Link>
      <div className="row-main">
        <Link
          href={"/providers/" + providerSlug(slot.provider)}
          className="eyebrow"
        >
          {slot.provider}
        </Link>
        <h3>
          <Link href={"/slots/" + slot.slug}>{slot.name}</Link>
        </h3>
        <p>
          {slotMechanics(slot).join(" · ")} <span>·</span> {slot.year}
        </p>
      </div>
      <span className="row-rtp">
        <small>RTP*</small>
        {slot.rtp}
      </span>
      {compare && <CompareButton slug={slot.slug} />}
      <Link
        className="row-arrow"
        href={"/slots/" + slot.slug}
        aria-label={`Открыть ${slot.name}`}
      >
        ↗
      </Link>
    </article>
  );
}
export function Affiliate({ context = "game" }: { context?: string }) {
  const url = affiliateUrl();
  return (
    <aside className="affiliate">
      <span className="eyebrow">У оператора · 18+</span>
      <h3>От правил — к условиям площадки</h3>
      <p>
        Перед переходом проверьте доступность в своей стране, версию игры,
        лимиты и правила вывода средств.
      </p>
      {url ? (
        <a
          className="button"
          href={affiliateHref(context)}
          rel="sponsored nofollow"
        >
          Перейти в {operators["1win"].name} ↗
        </a>
      ) : (
        <Link className="text-link" href="/regions">
          Проверить страну и условия ↗
        </Link>
      )}
      {url && <small>{operators["1win"].disclosure}</small>}
    </aside>
  );
}
