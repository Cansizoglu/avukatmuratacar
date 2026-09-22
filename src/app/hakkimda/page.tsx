import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import { images, unsplash, site } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: "Avukat Murat Acar ve İzmir'deki hukuk bürosunun çalışma anlayışı, ilkeleri ve hizmet verdiği alanlar.",
  alternates: { canonical: "/hakkimda" },
};

const values = [
  { title: "Dürüstlük", text: "Dosyanın gerçek durumunu, olumlu ve olumsuz yönleriyle birlikte açıkça paylaşırız." },
  { title: "Özen", text: "Her dilekçe ve her süre, dosyanın sonucunu etkileyebileceği bilinciyle hazırlanır ve takip edilir." },
  { title: "Gizlilik", text: "Müvekkil bilgileri, mesleki sır saklama yükümlülüğü kapsamında korunur." },
  { title: "Güncellik", text: "Mevzuat değişiklikleri ve Yargıtay içtihatları düzenli olarak izlenir." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Hakkımda"
        subtitle="Hukuki sorunlara, müvekkilin ihtiyacını merkeze alan, açık ve özenli bir yaklaşım."
        image={images.books}
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "Hakkımda" }]}
      />
      <section className="mx-auto grid max-w-site gap-14 px-5 py-20 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Av. Murat Acar" title="Çalışma anlayışımız" />
          <div className="mt-6 space-y-5 leading-relaxed text-ink/75">
            <p>
              Avukat Murat Acar, {site.bar}&apos;na kayıtlı olarak İzmir&apos;de serbest avukatlık yapmaktadır. Büro,
              bireysel müvekkillere ve şirketlere danışmanlık, sözleşme hazırlama, arabuluculuk süreçlerinde temsil ve
              dava takibi hizmetleri sunmaktadır.
            </p>
            <p>
              Hukuki bir sorunla karşılaşan kişinin öncelikli ihtiyacı, neyle karşı karşıya olduğunu anlamaktır. Bu
              nedenle her görüşmede ilk hedefimiz, durumu sade ve anlaşılır bir dille ortaya koymak, seçenekleri ve
              olası sonuçlarını birlikte değerlendirmektir.
            </p>
            <p>
              Uyuşmazlıkların her zaman mahkemede çözülmesi gerekmez. Uygun dosyalarda uzlaşma ve arabuluculuk
              yolları önceliklendirilir; dava kaçınılmaz olduğunda ise dosya en baştan itibaren delil ve süre takibi
              bakımından özenle kurgulanır.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={unsplash(images.ladyScales, 600, 800)} alt="Adalet terazisi tutan heykel" className="aspect-[3/4] w-full rounded-sm bg-navy-100 object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={unsplash(images.writing, 600, 800)} alt="Belge imzalanması" className="mt-10 aspect-[3/4] w-full rounded-sm bg-navy-100 object-cover" />
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
