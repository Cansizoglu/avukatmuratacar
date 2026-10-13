import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Prose from "@/components/Prose";
import PostCard from "@/components/PostCard";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import { posts, getPost, sortedPosts, formatDate, readingMinutes } from "@/data/blog";
import { getService } from "@/data/services";
import { site, unsplash } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", publishedTime: p.date, images: [unsplash(p.image, 1200, 630)] },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const service = getService(p.serviceSlug);
  const others = sortedPosts.filter((o) => o.slug !== p.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    image: unsplash(p.image, 1200, 630),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": `${site.url}/#hukuk-burosu` },
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title={p.title}
        image={p.image}
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { href: "/blog", label: "Makaleler" }, { label: p.category }]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/55">
          <span className="font-semibold uppercase tracking-[0.15em] text-gold-600">{p.category}</span>
          <time dateTime={p.date}>{formatDate(p.date)}</time>
          <span>{readingMinutes(p.body)} dk okuma</span>
          <span>{site.name}</span>
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={unsplash(p.image, 1200, 640)} alt={p.title} className="mt-8 aspect-[15/8] w-full rounded-sm bg-navy-100 object-cover" />
        <div className="mt-6">
          <Prose body={p.body} />
        </div>
        <div className="mt-12 rounded-sm border-l-4 border-gold-400 bg-white p-6 text-sm leading-relaxed text-ink/70">
          Bu yazı genel bilgilendirme amacıyla hazırlanmıştır ve yayın tarihindeki mevzuata dayanır. Somut olayınıza
          ilişkin hukuki görüş yerine geçmez; mevzuat ve içtihatlar zaman içinde değişebilir.
        </div>
        {service && (
          <Link
            href={`/hizmetler/${service.slug}`}
            className="mt-8 flex items-center justify-between gap-4 rounded-sm bg-navy-900 p-6 text-white transition hover:bg-navy-800"
          >
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-gold-400">İlgili çalışma alanı</span>
              <span className="mt-1 block font-serif text-xl">{service.title}</span>
            </span>
            <Icon name="arrow" className="h-6 w-6 text-gold-400" />
          </Link>
        )}
      </article>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-site px-5">
          <h2 className="font-serif text-3xl font-semibold text-navy-900">Diğer makaleler</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {others.map((o) => (
              <PostCard key={o.slug} p={o} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
