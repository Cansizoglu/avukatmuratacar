import Link from "next/link";
import Icon from "./Icon";
import { site, type Lawyer } from "@/data/site";

export default function LawyerCard({ l }: { l: Lawyer }) {
  return (
    <Link
      href={`/avukatlar/${l.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-navy-100 bg-white transition hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl sm:flex-row"
    >
      <div className="aspect-[4/5] overflow-hidden bg-navy-100 sm:aspect-auto sm:w-2/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={l.photo}
          alt={l.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-600">Avukat · {site.bar}</p>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-navy-900">{l.name}</h3>
        <span className="mt-3 block h-px w-12 bg-gold-400" />
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/70">{l.short}</p>
        <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold-600">
          Profili incele
          <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
