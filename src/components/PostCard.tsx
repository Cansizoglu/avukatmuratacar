import Link from "next/link";
import type { Post } from "@/data/blog";
import { formatDate, readingMinutes } from "@/data/blog";
import { unsplash } from "@/data/site";

export default function PostCard({ p }: { p: Post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-navy-100 bg-white transition hover:shadow-xl">
      <Link href={`/blog/${p.slug}`} className="block aspect-[16/9] overflow-hidden bg-navy-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={unsplash(p.image, 720, 405)}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{p.category}</p>
        <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-navy-900">
          <Link href={`/blog/${p.slug}`} className="hover:text-gold-700">
            {p.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">{p.excerpt}</p>
        <p className="mt-5 text-xs text-ink/50">
          <time dateTime={p.date}>{formatDate(p.date)}</time> · {readingMinutes(p.body)} dk okuma
        </p>
      </div>
    </article>
  );
}
