import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import { images, site, office } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Acar Görgün Hukuk Bürosu, Av. Murat Acar ve Av. Ecem Görgün; Çeşme / İzmir'deki büromuzun çalışma anlayışı, ilkeleri ve hizmet verdiği alanlar.",
  alternates: { canonical: "/hakkimda" },
};

const values = [
  { title: "Dürüstlük", text: "Dosyanın gerçek durumunu, olumlu ve olumsuz yönleriyle birlikte açıkça paylaşırız." },
  {
    title: "Özen",
    text: "Her dilekçe ve her süre, dosyanın sonucunu etkileyebileceği bilinciyle hazırlanır ve takip edilir.",
  },
  { title: "Gizlilik", text: "Müvekkil bilgileri, mesleki sır saklama yükümlülüğü kapsamında korunur." },
  { title: "Güncellik", text: "Mevzuat değişiklikleri ve Yargıtay içtihatları düzenli olarak izlenir." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Hakkımızda"
        subtitle="Hukuki sorunlara, müvekkilin ihtiyacını merkeze alan, açık ve özenli bir yaklaşım."
        image={images.books}
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "Hakkımızda" }]}
      />
      <section className="mx-auto grid max-w-site gap-14 px-5 py-20 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Acar Görgün Hukuk" title="Çalışma anlayışımız" />
          <div className="mt-6 space-y-5 leading-relaxed text-ink/75">
            <p>
              Acar Görgün Hukuk Bürosu, {site.bar}&apos;na kayıtlı Av. Murat Acar ve Av. Ecem Görgün tarafından Çeşme /
              İzmir&apos;de kurulmuş bir avukatlık ofisidir. Büro, bireysel müvekkillere ve şirketlere danışmanlık,
              sözleşme hazırlama, arabuluculuk süreçlerinde temsil ve dava takibi hizmetleri sunmaktadır.
            </p>
            <p>
              Hukuki bir sorunla karşılaşan kişinin öncelikli ihtiyacı, neyle karşı karşıya olduğunu anlamaktır. Bu
              nedenle her görüşmede ilk hedefimiz, durumu sade ve anlaşılır bir dille ortaya koymak, seçenekleri ve
              olası sonuçlarını birlikte değerlendirmektir.
            </p>
            <p>
              Uyuşmazlıkların her zaman mahkemede çözülmesi gerekmez. Uygun dosyalarda uzlaşma ve arabuluculuk yolları
              önceliklendirilir; dava kaçınılmaz olduğunda ise dosya en baştan itibaren delil ve süre takibi bakımından
              özenle kurgulanır.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={office.workroom}
            alt="Avukat çalışma odası"
            className="aspect-[3/4] w-full rounded-sm bg-navy-100 object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={office.desk}
            alt="Avukat masası"
            className="mt-10 aspect-[3/4] w-full rounded-sm bg-navy-100 object-cover"
          />
        </div>
      </section>

      <section id="avukatlarimiz" className="scroll-mt-32 bg-white py-20">
        <div className="mx-auto max-w-site px-5">
          <SectionTitle center eyebrow="Avukatlarımız" title="Ekibimiz" />
          <div className="mt-14 space-y-20 lg:space-y-24">
            {site.lawyers.map((l, i) => (
              <article key={l.name} className="grid items-center gap-10 md:grid-cols-5 lg:gap-16">
                <div className={`relative mx-auto w-full max-w-sm md:col-span-2 ${i % 2 ? "md:order-2" : ""}`}>
                  <div
                    aria-hidden="true"
                    className={`absolute -bottom-4 h-full w-full rounded-sm border-2 border-gold-400 ${i % 2 ? "-left-4" : "-right-4"}`}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.photo}
                    alt={l.name}
                    loading="lazy"
                    className="relative aspect-[3/4] w-full rounded-sm bg-navy-100 object-cover object-top shadow-xl"
                  />
                </div>
                <div className="md:col-span-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Avukat · {site.bar}</p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-navy-900 md:text-4xl">{l.name}</h3>
                  <span className="mt-4 block h-px w-16 bg-gold-400" />
                  <ul className="mt-6 grid gap-3 text-[15px] text-navy-800 sm:grid-cols-1">
                    {l.facts.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                          <Icon name="check" className="h-4 w-4" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
                    {l.bio.map((b) => (
                      <p key={b.slice(0, 24)}>{b}</p>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/avukatlar/${l.slug}`}
                      className="inline-flex items-center gap-2 rounded-sm border border-navy-200 px-6 py-3 font-semibold text-navy-900 transition hover:border-gold-400 hover:text-gold-700"
                    >
                      Profil sayfası
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                    {l.phone && (
                      <a
                        href={l.phoneHref}
                        className="inline-flex items-center gap-2 rounded-sm bg-navy-900 px-6 py-3 font-semibold text-white transition hover:bg-navy-800"
                      >
                        <Icon name="phone" className="h-4 w-4 text-gold-400" />
                        {l.phone}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-site px-5">
          <SectionTitle center eyebrow="Büromuz" title="Çeşme ofisimiz" />
          <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              [office.lounge, "Görüşme alanı"],
              [office.workroom, "Çalışma odası"],
              [office.desk, "Avukat masası"],
              [office.room, "Avukat odası"],
            ].map(([src, alt]) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={alt}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm bg-navy-100 object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-site px-5">
          <SectionTitle center eyebrow="İlkelerimiz" title="Değer verdiklerimiz" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-sm border border-navy-100 p-7">
                <Icon name="scale" className="h-8 w-8 text-gold-500" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20">
        <SectionTitle eyebrow="Çalışma Alanları" title="Hizmet verdiğimiz alanlar" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/hizmetler/${s.slug}`}
                className="flex items-center gap-3 rounded-sm border border-navy-100 bg-white px-5 py-4 font-medium text-navy-900 transition hover:border-gold-300 hover:text-gold-700"
              >
                <Icon name={s.icon} className="h-5 w-5 text-gold-500" />
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
