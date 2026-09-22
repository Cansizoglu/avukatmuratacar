import Link from "next/link";
import Icon from "./Icon";
import type { Service } from "@/data/services";
import { unsplash } from "@/data/site";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/hizmetler/${s.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-navy-100 bg-white transition hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={unsplash(s.image, 640, 400)}
          alt={s.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-0 left-5 flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-sm bg-navy-900 text-gold-400 ring-4 ring-white">
          <Icon name={s.icon} />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-6 pt-9">
        <h3 className="font-serif text-xl font-semibold text-navy-900">{s.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/70">{s.short}</p>
        <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold-600">
          Detaylı bilgi
          <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
