"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const links = [
    ["/slots", "Слоты"],
    ["/mechanics", "Механики"],
    ["/journal", "Журнал"],
    ["/collections", "Подборки"],
  ];
  return (
    <header className="header">
      <div className="masthead">
        <Link href="/" className="brand" aria-label="Slotfolio — главная">
          slotfolio<span className="brand-dot">.</span>
        </Link>
        <span className="tagline">
          Независимый журнал
          <br />
          об играх и их устройстве
        </span>
        <span className="header-edition">
          НАВИГАТОР ПО МИРУ СЛОТОВ <span>18+</span>
        </span>
        <Link className="header-search" href="/search">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 5 5" />
          </svg>
          <span>Найти игру</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Закрыть" : "Меню"} <span>{open ? "×" : "☰"}</span>
        </button>
      </div>
      <div
        className={"nav-line " + (open ? "is-open" : "")}
        id="main-navigation"
      >
        <nav aria-label="Основная навигация">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={path.startsWith(href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="secondary-nav">
          <Link href="/providers" onClick={() => setOpen(false)}>
            Провайдеры
          </Link>
          <Link href="/compare" onClick={() => setOpen(false)}>
            Сравнить игры <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="brand">
            slotfolio<span className="brand-dot">.</span>
          </Link>
          <p>
            Смотреть внимательнее.
            <br />
            Понимать больше.
          </p>
        </div>
        <div>
          <span className="eyebrow">Изучать</span>
          <Link href="/slots">Каталог слотов</Link>
          <Link href="/mechanics">Игровые механики</Link>
          <Link href="/providers">Провайдеры</Link>
          <Link href="/journal">Журнал и гайды</Link>
        </div>
        <div>
          <span className="eyebrow">Ориентироваться</span>
          <Link href="/regions">Страны и доступность</Link>
          <Link href="/bonuses">Как устроены бонусы</Link>
          <Link href="/about">О проекте</Link>
          <Link href="/editorial-policy">Редакционная политика</Link>
        </div>
        <div className="footer-responsibility">
          <span className="age">18+</span>
          <p>
            Азартные игры связаны с риском потери денег. Не рассматривайте игру
            как источник дохода.
          </p>
          <Link href="/responsible-gaming">Ответственная игра ↗</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Slotfolio · Демонстрационная редакция</span>
        <Link href="/privacy">Конфиденциальность</Link>
        <Link href="/disclosure">Партнёрские отношения</Link>
      </div>
    </footer>
  );
}
