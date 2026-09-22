"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { site } from "@/data/site";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetler", label: "Çalışma Alanları" },
  { href: "/blog", label: "Makaleler" },
  { href: "/sss", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="hidden bg-navy-950 text-[13px] text-navy-200 md:block">
        <div className="mx-auto flex max-w-site items-center justify-between px-5 py-2">
          <span className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-gold-400" />
            {site.address.full}
          </span>
          <span className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-gold-400" />
              {site.hours}
            </span>
            <a href={site.phoneHref} className="flex items-center gap-2 text-white hover:text-gold-300">
              <Icon name="phone" className="h-4 w-4 text-gold-400" />
              {site.phone}
            </a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium transition-colors ${
                isActive(item.href) ? "text-gold-600" : "text-navy-800 hover:text-gold-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-sm bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            <Icon name="phone" className="h-4 w-4 text-gold-400" />
            {site.phone}
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm p-2 text-navy-900 lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy-100 bg-white lg:hidden" aria-label="Mobil menü">
          <ul className="mx-auto max-w-site px-5 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block border-b border-navy-50 py-3 text-base font-medium ${
                    isActive(item.href) ? "text-gold-600" : "text-navy-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-sm bg-navy-900 py-3 font-semibold text-white"
              >
                <Icon name="phone" className="h-5 w-5 text-gold-400" />
                {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
