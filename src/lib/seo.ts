import type { Metadata } from "next";

export const SITE_NAME = "Slotfolio";
export const SITE_DESCRIPTION =
  "Каталог и редакционные разборы слотов: механики, провайдеры, сравнение игр и понятные объяснения правил.";

const DEFAULT_SITE_URL = "http://localhost:3000";

export function siteUrl() {
  const url = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "");
  return base && !url.endsWith(base) ? `${url}${base}` : url;
}

export function absoluteUrl(path = "/") {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;
  const slash = process.env.GITHUB_ACTIONS === "true" && !normalized.endsWith("/") && !/\.[a-z0-9]+$/i.test(normalized) ? "/" : "";
  return `${siteUrl()}${normalized}${slash}`;
}

export function absoluteMediaUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return absoluteUrl(path);
}

export function indexingEnabled() {
  return process.env.NEXT_PUBLIC_INDEXABLE === "true";
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/gates-of-olympus-feature.png",
  noIndex = false,
  openGraphType = "website",
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  openGraphType?: "website" | "article";
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "ru_RU",
      type: openGraphType,
      images: [{ url: absoluteMediaUrl(image), alt: `${SITE_NAME}: ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteMediaUrl(image)],
    },
  };
}
