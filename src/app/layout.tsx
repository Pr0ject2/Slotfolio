import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header, Footer } from "@/components/shell";
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
  title: {
    default: "Slotfolio — игры, механики и контекст",
    template: "%s — Slotfolio",
  },
  description:
    "Каталог и редакционные разборы слотов: механики, провайдеры, сравнение игр и понятные объяснения правил.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={golos.variable}>
      <body>
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
