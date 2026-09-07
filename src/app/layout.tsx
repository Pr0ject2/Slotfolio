import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header, Footer } from "@/components/shell";
import { JsonLd } from "@/components/json-ld";
import { SITE_DESCRIPTION, SITE_NAME, indexingEnabled, siteUrl } from "@/lib/seo";
import "./globals.css";

const golos = localFont({
  variable: "--font-golos",
  display: "swap",
  src: [
    { path: "../../public/fonts/golos-0.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/golos-1.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/golos-2.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/golos-3.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/golos-4.ttf", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl()}/`),
  title: {
    default: "Slotfolio — игры, механики и контекст",
    template: "%s — Slotfolio",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },
  robots: indexingEnabled()
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={golos.variable}>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: siteUrl(),
            description: SITE_DESCRIPTION,
            inLanguage: "ru",
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              url: siteUrl(),
            },
          }}
        />
        <a href="#main" className="skip-link">
          Перейти к содержимому
        </a>
        <div className="site">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
