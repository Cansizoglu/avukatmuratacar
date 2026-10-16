"use client";

import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { shortName, site } from "@/data/site";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Çalışma Alanları" },
  { href: "/blog", label: "Makaleler" },
  { href: "/sss", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lawyersOpen, setLawyersOpen] = useState(false);
  const lawyersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setLawyersOpen(false);
  }, [pathname]);

  // Açılır menü dışına tıklanınca veya Esc ile kapanır
  useEffect(() => {
    if (!lawyersOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!lawyersRef.current?.contains(e.target as Node)) setLawyersOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLawyersOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [lawyersOpen]);

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
            <span className="hidden items-center gap-2 xl:flex">
              <Icon name="clock" className="h-4 w-4 text-gold-400" />
              {site.hours}
            </span>
            {site.lawyers.map((l) => (
              <a key={l.slug} href={l.phoneHref} className="flex items-center gap-2 text-white hover:text-gold-300">
                <Icon name="phone" className="h-4 w-4 text-gold-400" />
                <span className="text-navy-300">{shortName(l.name)}</span>
                {l.phone}
              </a>
            ))}
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Ana menü">
          {nav.map((item) => (
            <Fragment key={item.href}>
              <Link
                href={item.href}
                className={`text-[15px] font-medium transition-colors ${
                  isActive(item.href) ? "text-gold-600" : "text-navy-800 hover:text-gold-600"
                }`}
              >
                {item.label}
              </Link>
              {item.href === "/hakkimda" && (
                <div ref={lawyersRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setLawyersOpen((v) => !v)}
                    aria-expanded={lawyersOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                      pathname.startsWith("/avukatlar") || lawyersOpen
                        ? "text-gold-600"
                        : "text-navy-800 hover:text-gold-600"
                    }`}
                  >
                    Avukatlarımız
                    <Icon name="chevron" className={`h-4 w-4 transition ${lawyersOpen ? "rotate-180" : ""}`} />
                  </button>
                  {lawyersOpen && (
                    <div className="absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-sm border border-navy-100 bg-white p-2 shadow-xl">
                      {site.lawyers.map((l) => (
                        <Link
                          key={l.slug}
                          href={`/avukatlar/${l.slug}`}
                          className="flex items-center gap-3 rounded-sm p-2.5 transition hover:bg-gold-50"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={l.photo}
                            alt=""
                            className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-gold-200"
                          />
                          <span className="leading-tight">
                            <span className="block font-serif text-base font-semibold text-navy-900">{l.name}</span>
                            <span className="text-xs text-ink/60">Avukat · Profili incele</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          ))}
          <Link
            href="/iletisim"
            className="hidden items-center gap-2 rounded-sm bg-navy-900 px-5 py-2.5 text-sm font-semibold xl:flex text-white transition hover:bg-navy-800"
          >
            <Icon name="mail" className="h-4 w-4 text-gold-400" />
            Randevu Al
          </Link>
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
          <ul className="mx-auto max-w-site px-5 pb-3 pt-8">
            {nav.map((item) => (
              <Fragment key={item.href}>
                <li>
                  <Link
                    href={item.href}
                    className={`block border-b border-navy-50 py-3 text-base font-medium ${
                      isActive(item.href) ? "text-gold-600" : "text-navy-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
                {item.href === "/hakkimda" && (
                  <li className="border-b border-navy-50 py-3">
                    <span className="text-base font-medium text-navy-900">Avukatlarımız</span>
                    <div className="mt-2 grid gap-1">
                      {site.lawyers.map((l) => (
                        <Link
                          key={l.slug}
                          href={`/avukatlar/${l.slug}`}
                          className={`flex items-center gap-3 rounded-sm p-2 ${
                            pathname === `/avukatlar/${l.slug}` ? "bg-gold-50 text-gold-700" : "text-navy-900"
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={l.photo}
                            alt=""
                            className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-gold-200"
                          />
                          <span className="font-serif font-semibold">{l.name}</span>
                        </Link>
                      ))}
                    </div>
                  </li>
                )}
              </Fragment>
            ))}
            {site.lawyers.map((l, i) => (
              <li key={l.slug} className={i === 0 ? "pt-4" : "pt-2"}>
                <a
                  href={l.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-sm bg-navy-900 py-3 font-semibold text-white"
                >
                  <Icon name="phone" className="h-5 w-5 text-gold-400" />
                  {l.phone}
                  <span className="text-sm font-normal text-navy-300">{shortName(l.name)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
