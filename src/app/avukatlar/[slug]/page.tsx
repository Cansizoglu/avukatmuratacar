import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import LawyerCard from "@/components/LawyerCard";
import { services } from "@/data/services";
import { getLawyer, images, site, whatsappLink } from "@/data/site";

export function generateStaticParams() {
  return site.lawyers.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = getLawyer(params.slug);
  if (!l) return {};
  return {
    title: `${l.name} | Çeşme Avukat`,
    description: `${l.name}, ${site.name}. ${l.short}`,
    alternates: { canonical: `/avukatlar/${l.slug}` },
    openGraph: { type: "profile", images: [{ url: l.photo, width: 800, height: 1067 }] },
  };
}

export default function LawyerPage({ params }: { params: { slug: string } }) {
  const l = getLawyer(params.slug);
  if (!l) notFound();
  const others = site.lawyers.filter((o) => o.slug !== l.slug);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: l.name.replace(/^Av\. /, ""),
    jobTitle: "Avukat",
    image: `${site.url}${l.photo}`,
    url: `${site.url}/avukatlar/${l.slug}`,
    ...(l.phone ? { telephone: l.phone } : {}),
    worksFor: { "@id": `${site.url}/#hukuk-burosu` },
    memberOf: { "@type": "Organization", name: site.bar },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <PageHero
        title={l.name}
        subtitle={`Avukat · ${site.bar} · ${site.name}`}
        image={images.books}
        crumbs={[
          { href: "/", label: "Ana Sayfa" },
          { href: "/hakkimda#avukatlarimiz", label: "Avukatlarımız" },
          { label: l.name },
        ]}
      />

      <section className="mx-auto grid max-w-site gap-14 px-5 py-20 lg:grid-cols-5 lg:gap-20">
        <div className="lg:col-span-2">
          <div className="relative mx-auto max-w-sm lg:sticky lg:top-40">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border-2 border-gold-400" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.photo}
              alt={l.name}
              className="relative aspect-[3/4] w-full rounded-sm bg-navy-100 object-cover object-top shadow-xl"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Özgeçmiş</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-900 md:text-4xl">{l.name}</h2>
          <span className="mt-4 block h-px w-16 bg-gold-400" />

          <ul className="mt-8 grid gap-4">
            {l.facts.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[15px] text-navy-800">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/75">
            {l.bio.map((b) => (
              <p key={b.slice(0, 24)}>{b}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={l.phoneHref ?? site.phoneHref}
              className="flex items-center gap-2 rounded-sm bg-navy-900 px-6 py-3.5 font-semibold text-white transition hover:bg-navy-800"
            >
              <Icon name="phone" className="h-5 w-5 text-gold-400" />
              {l.phone ?? site.phone}
            </a>
            <a
              href={whatsappLink(`Merhaba ${l.name}, randevu almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm border border-navy-200 px-6 py-3.5 font-semibold text-navy-900 transition hover:border-gold-400 hover:text-gold-700"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              WhatsApp ile yazın
            </a>
          </div>

          <div className="mt-14 border-t border-navy-100 pt-10">
            <h3 className="font-serif text-2xl font-semibold text-navy-900">Büromuzun çalışma alanları</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="flex items-center gap-3 rounded-sm border border-navy-100 bg-white px-4 py-3 text-[15px] font-medium text-navy-900 transition hover:border-gold-300 hover:text-gold-700"
                  >
                    <Icon name={s.icon} className="h-5 w-5 text-gold-500" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-site px-5">
            <h2 className="font-serif text-2xl font-semibold text-navy-900 md:text-3xl">Diğer avukatımız</h2>
            <div className="mt-8 grid max-w-3xl gap-8">
              {others.map((o) => (
                <LawyerCard key={o.slug} l={o} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
