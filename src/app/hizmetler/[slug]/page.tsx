import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Faq, { faqJsonLd } from "@/components/Faq";
import Icon from "@/components/Icon";
import PostCard from "@/components/PostCard";
import CtaBand from "@/components/CtaBand";
import { services, getService } from "@/data/services";
import { posts } from "@/data/blog";
import { shortName, site, unsplash, whatsappLink } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `Çeşme ${s.title} Avukatı`,
    description: `${s.short} Acar Görgün Hukuk Bürosu, Çeşme / İzmir.`,
    alternates: { canonical: `/hizmetler/${s.slug}` },
    openGraph: { images: [unsplash(s.image, 1200, 630)] },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const related = posts.filter((p) => p.serviceSlug === s.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(s.faqs)) }} />
      <PageHero
        title={s.title}
        subtitle={s.short}
        image={s.image}
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { href: "/hizmetler", label: "Çalışma Alanları" }, { label: s.title }]}
      />
      <section className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={unsplash(s.image, 1200, 600)} alt={s.title} className="aspect-[2/1] w-full rounded-sm bg-navy-100 object-cover" />
          <div className="prose-legal mt-8">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <h2 className="mt-10 font-serif text-2xl font-semibold text-navy-900">Bu alanda verdiğimiz hizmetler</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {s.topics.map((t) => (
              <li key={t} className="flex gap-3 rounded-sm border border-navy-100 bg-white p-4 text-[15px] text-ink/80">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                {t}
              </li>
            ))}
          </ul>
          <h2 className="mt-14 font-serif text-2xl font-semibold text-navy-900">Sık sorulan sorular</h2>
          <div className="mt-6">
            <Faq items={s.faqs} />
          </div>
          <p className="mt-6 text-sm text-ink/55">
            Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır; somut olaya ilişkin hukuki görüş yerine geçmez.
          </p>
        </div>

        <aside className="space-y-8">
          <div className="rounded-sm bg-navy-900 p-7 text-white">
            <h3 className="font-serif text-xl font-semibold">Görüşme talebi</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-200">
              {s.title} alanındaki konunuz için randevu alabilirsiniz.
            </p>
            {site.lawyers.map((l, i) => (
              <a
                key={l.slug}
                href={l.phoneHref}
                className={`${i === 0 ? "mt-5" : "mt-3"} flex items-center justify-center gap-2 rounded-sm bg-gold-400 px-5 py-3 font-semibold text-navy-950 hover:bg-gold-300`}
              >
                <Icon name="phone" className="h-5 w-5" />
                {l.phone}
                <span className="text-xs font-medium opacity-75">{shortName(l.name)}</span>
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-sm border border-white/30 px-5 py-3 font-semibold hover:border-gold-300 hover:text-gold-300"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
          <nav className="rounded-sm border border-navy-100 bg-white p-6" aria-label="Diğer çalışma alanları">
            <h3 className="font-serif text-lg font-semibold text-navy-900">Çalışma Alanları</h3>
            <ul className="mt-4 divide-y divide-navy-50">
              {services.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/hizmetler/${o.slug}`}
                    className={`flex items-center justify-between py-3 text-[15px] ${
                      o.slug === s.slug ? "font-semibold text-gold-700" : "text-ink/80 hover:text-gold-700"
                    }`}
                  >
                    {o.title}
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-site px-5">
            <h2 className="font-serif text-3xl font-semibold text-navy-900">İlgili makaleler</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
