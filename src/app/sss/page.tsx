import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq, { faqJsonLd } from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { images } from "@/data/site";
import { generalFaqs } from "@/data/faq";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description: "Avukatlık hizmeti, ilk görüşme, ücretlendirme, dava süreleri ve arabuluculuk hakkında sık sorulan sorular.",
  alternates: { canonical: "/sss" },
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(generalFaqs)) }} />
      <PageHero
        title="Sık Sorulan Sorular"
        subtitle="Hukuki süreçler ve büromuzla çalışma hakkında merak edilenler."
        image={images.ladyGold}
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "S.S.S." }]}
      />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-serif text-2xl font-semibold text-navy-900">Genel</h2>
        <div className="mt-6">
          <Faq items={generalFaqs} />
        </div>
        {services.map((s) => (
          <div key={s.slug} className="mt-14">
            <h2 className="font-serif text-2xl font-semibold text-navy-900">{s.title}</h2>
            <div className="mt-6">
              <Faq items={s.faqs} />
            </div>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
