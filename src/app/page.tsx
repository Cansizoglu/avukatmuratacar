import Link from "next/link";
import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import PostCard from "@/components/PostCard";
import CtaBand from "@/components/CtaBand";
import LawyerCard from "@/components/LawyerCard";
import Faq from "@/components/Faq";
import { site, unsplash, images, office } from "@/data/site";
import { services } from "@/data/services";
import { sortedPosts } from "@/data/blog";
import { generalFaqs } from "@/data/faq";

const principles = [
  {
    title: "Gizlilik",
    text: "Paylaştığınız her bilgi, avukatlık mesleğinin sır saklama yükümlülüğü kapsamında korunur.",
  },
  {
    title: "Açık Bilgilendirme",
    text: "Dosyanızın güçlü ve zayıf yönleri, olası süreç ve maliyetler baştan anlaşılır bir dille anlatılır.",
  },
  {
    title: "Süre Takibi",
    text: "Hak düşürücü süreler ve duruşma tarihleri düzenli olarak izlenir, her gelişme size bildirilir.",
  },
  {
    title: "Ulaşılabilirlik",
    text: "Dosyanızla ilgili sorularınıza telefon ve WhatsApp üzerinden hızlıca dönüş yapılır.",
  },
];

const steps = [
  { n: "01", title: "İlk Görüşme", text: "Konunuzu dinliyor, elinizdeki belgeleri birlikte inceliyoruz." },
  { n: "02", title: "Hukuki Değerlendirme", text: "Mevzuat ve güncel Yargıtay kararları ışığında durumunuzu analiz ediyoruz." },
  { n: "03", title: "Yol Haritası", text: "Uzlaşma, arabuluculuk veya dava seçeneklerini açıkça ortaya koyuyoruz." },
  { n: "04", title: "Takip ve Raporlama", text: "Süreci sonuna kadar yürütüyor, her aşamada sizi bilgilendiriyoruz." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={unsplash(images.heroLady, 1920, 1100)}
          alt="Adalet heykeli"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-45"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />
        <div className="mx-auto max-w-site px-5 py-24 md:py-36">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
            <span className="h-px w-10 bg-gold-400" />
            Çeşme / İzmir Hukuk Bürosu
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
            Hukuki süreçlerinizde <span className="italic text-gold-300">güvenilir</span> ve özenli temsil
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">
            Acar Görgün Hukuk Bürosu; Av. Murat Acar ve Av. Ecem Görgün ile aile, iş, ceza, gayrimenkul, miras, icra ve
            ticaret hukuku alanlarında bireylere ve şirketlere danışmanlık ve dava takibi hizmeti vermektedir.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-sm bg-gold-400 px-7 py-4 font-semibold text-navy-950 transition hover:bg-gold-300"
            >
              <Icon name="phone" className="h-5 w-5" />
              {site.phone}
            </a>
            <Link
              href="/hizmetler"
              className="flex items-center gap-2 rounded-sm border border-white/30 px-7 py-4 font-semibold text-white transition hover:border-gold-300 hover:text-gold-300"
            >
              Çalışma Alanları
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRINCIPLES STRIP */}
      <section className="relative z-10 mx-auto -mt-12 max-w-site px-5">
        <div className="grid gap-px overflow-hidden rounded-sm bg-navy-100 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="bg-white p-7">
              <Icon name="check" className="h-6 w-6 text-gold-500" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto grid max-w-site items-center gap-14 px-5 py-24 lg:grid-cols-2">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={office.workroom}
            alt="Acar Görgün Hukuk Bürosu çalışma odası"
            loading="lazy"
            className="aspect-[9/10] w-full rounded-sm bg-navy-100 object-cover"
          />
          <div className="absolute -bottom-8 -right-4 hidden w-64 rounded-sm bg-navy-900 p-6 text-white shadow-2xl sm:block">
            <Icon name="scale" className="h-9 w-9 text-gold-400" />
            <p className="mt-3 font-serif text-lg leading-snug">Hukukun üstünlüğüne bağlı, çözüm odaklı yaklaşım</p>
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="Hakkımızda" title="Acar Görgün Hukuk Bürosu" />
          <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
            <p>
              Av. Murat Acar ve Av. Ecem Görgün tarafından kurulan, Çeşme&apos;de faaliyet gösteren büromuz, müvekkillerinin hukuki sorunlarını dinlemeyi, doğru analiz etmeyi
              ve en uygun çözüm yolunu birlikte belirlemeyi esas alır.
            </p>
            <p>
              Her dosya, kendine özgü koşulları içinde değerlendirilir. Dava açmadan önce uzlaşma ve arabuluculuk
              imkanları gözden geçirilir; yargı süreci gerektiğinde ise dosya titizlikle hazırlanır ve sonuna kadar
              takip edilir.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Bireysel ve kurumsal danışmanlık", "Dava ve icra takibi", "Sözleşme hazırlama ve inceleme", "Arabuluculuk süreçlerinde temsil"].map(
              (t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] font-medium text-navy-800">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ),
            )}
          </ul>
          <Link href="/hakkimda" className="mt-10 inline-flex items-center gap-2 font-semibold text-navy-900 hover:text-gold-600">
            Daha fazla bilgi
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* LAWYERS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-site px-5">
          <SectionTitle
            center
            eyebrow="Avukatlarımız"
            title="Ekibimizle tanışın"
            text="Büromuzda dosyalarınızı bizzat takip eden avukatlarımız."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2">
            {site.lawyers.map((l) => (
              <LawyerCard key={l.slug} l={l} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-site px-5">
          <SectionTitle
            center
            eyebrow="Çalışma Alanları"
            title="Hangi konularda destek veriyoruz?"
            text="Bireysel ve ticari uyuşmazlıklarda danışmanlıktan dava takibine kadar geniş bir alanda hukuki hizmet sunuyoruz."
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={unsplash(images.bookshelf, 1920, 900)} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10" />
        <div className="mx-auto max-w-site px-5">
          <SectionTitle center light eyebrow="Çalışma Süreci" title="Dosyanız nasıl ilerler?" />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-gold-400/50 pt-6">
                <p className="font-serif text-4xl text-gold-400">{s.n}</p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-200">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24">
        <div className="mx-auto max-w-site px-5">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow="Makaleler" title="Hukuki bilgilendirme yazıları" />
            <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-navy-900 hover:text-gold-600">
              Tüm yazılar
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {sortedPosts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + IZMIR */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-site gap-14 px-5 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionTitle eyebrow="Sık Sorulan Sorular" title="Merak edilenler" />
            <div className="mt-10">
              <Faq items={generalFaqs.slice(0, 4)} />
            </div>
            <Link href="/sss" className="mt-8 inline-flex items-center gap-2 font-semibold text-navy-900 hover:text-gold-600">
              Tüm sorular
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </div>
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-sm bg-navy-950 text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={office.lounge} alt="Acar Görgün Hukuk Bürosu görüşme alanı" loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold">Çeşme Büromuz</h3>
                <ul className="mt-5 space-y-4 text-navy-200">
                  <li className="flex gap-3">
                    <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                    <span>
                      {site.address.full}
                      <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-semibold text-gold-300 hover:text-gold-200">
                        Haritada aç
                      </a>
                    </span>
                  </li>
                  <li>
                    <a href={site.phoneHref} className="flex gap-3 font-semibold text-white hover:text-gold-300">
                      <Icon name="phone" className="h-5 w-5 shrink-0 text-gold-400" />
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="clock" className="h-5 w-5 shrink-0 text-gold-400" />
                    {site.hours}
                  </li>
                </ul>
                <Link
                  href="/iletisim"
                  className="mt-7 inline-flex items-center gap-2 rounded-sm bg-gold-400 px-6 py-3 font-semibold text-navy-950 hover:bg-gold-300"
                >
                  Randevu Talebi
                  <Icon name="arrow" className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
