import type { MetadataRoute } from "next";
import { mechanics, providerProfiles, slots } from "@/lib/data";
import { systemPages } from "@/lib/system-pages";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/slots",
  "/mechanics",
  "/providers",
  "/journal",
  "/journal/how-cascades-work",
  "/journal/understanding-rtp",
  "/bonuses",
  "/collections",
  "/collections/beyond-lines",
  "/regions",
  "/regions/great-britain",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...slots.map((slot) => `/slots/${slot.slug}`),
    ...mechanics.map((mechanic) => `/mechanics/${mechanic.slug}`),
    ...providerProfiles.map((provider) => `/providers/${provider.slug}`),
    ...Object.keys(systemPages).map((page) => `/${page}`),
  ];

  return routes.map((route) => ({ url: absoluteUrl(route) }));
}
