import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { images, site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `Acar Görgün Hukuk Bürosu ile iletişim: ${site.phone}. ${site.address.full}.`,
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(site.mapQuery);
  return (
    <>
      <PageHero
        title="İletişim"
        subtitle="Randevu almak veya konunuzu iletmek için bize ulaşın."
        image={images.izmirBay}
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "İletişim" }]}
      />
      <section className="mx-auto grid max-w-site gap-12 px-5 py-20 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          <a href={site.phoneHref} className="flex gap-4 rounded-sm bg-navy-900 p-6 text-white transition hover:bg-navy-800">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-gold-400 text-navy-950">
              <Icon name="phone" />
            </span>
            <span>
              <span className="block text-sm text-navy-300">Telefon</span>
              <span className="block font-serif text-2xl">{site.phone}</span>
            </span>
          </a>
          <a
            href={whatsappLink("Merhaba, randevu almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 rounded-sm border border-navy-100 bg-white p-6 transition hover:border-gold-300"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#1f8f4e] text-white">
              <Icon name="whatsapp" />
            </span>
            <span>
              <span className="block text-sm text-ink/55">WhatsApp</span>
              <span className="block font-semibold text-navy-900">Mesaj gönderin</span>
            </span>
          </a>
          <div className="flex gap-4 rounded-sm border border-navy-100 bg-white p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy-50 text-navy-900">
              <Icon name="pin" />
            </span>
            <span>
              <span className="block text-sm text-ink/55">Adres</span>
              <span className="block font-medium text-navy-900">{site.address.full}</span>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold-700 hover:text-gold-600"
              >
                Haritada aç / Yol tarifi al
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </span>
          </div>
          <div className="flex gap-4 rounded-sm border border-navy-100 bg-white p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy-50 text-navy-900">
              <Icon name="clock" />
            </span>
            <span>
              <span className="block text-sm text-ink/55">Çalışma saatleri</span>
              <span className="block font-medium text-navy-900">{site.hours}</span>
              <span className="block text-sm text-ink/55">Görüşmeler randevu ile yapılır.</span>
            </span>
          </div>
        </div>
        <div className="rounded-sm border border-navy-100 bg-white p-7 md:p-10 lg:col-span-3">
          <h2 className="font-serif text-2xl font-semibold text-navy-900">Randevu talep formu</h2>
          <p className="mt-2 text-[15px] text-ink/65">
            Formu doldurduğunuzda mesajınız WhatsApp üzerinden hazırlanır; gönderdiğinizde en kısa sürede dönüş yapılır.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-site px-5 pb-20">
        <iframe
          title="Büro konumu"
          src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
          className="h-[420px] w-full rounded-sm border border-navy-100"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
