import Link from "next/link";
import { unsplash } from "@/data/site";

type Crumb = { href?: string; label: string };

export default function PageHero({
  title,
  subtitle,
  image,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  image: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={unsplash(image, 1920, 700)} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/50" />
      <div className="mx-auto max-w-site px-5 py-16 md:py-24">
        <nav aria-label="Sayfa yolu" className="text-sm text-navy-300">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-gold-500">/</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold-300">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-navy-100">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-200">{subtitle}</p>}
        <div className="mt-6 h-px w-24 bg-gold-400" />
      </div>
    </section>
  );
}
