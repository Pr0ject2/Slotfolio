import type { Metadata } from "next";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
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
    <html lang="ru">
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
