import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { images, site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `Acar Görgün Hukuk Bürosu ile iletişim: ${site.lawyers.map((l) => `${l.name} ${l.phone}`).join(", ")}. ${site.address.full}.`,
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
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
          {site.lawyers.map((l) => (
            <div key={l.slug} className="rounded-sm bg-navy-900 p-6 text-white">
              <p className="font-serif text-xl font-semibold">{l.name}</p>
              <a href={l.phoneHref} className="mt-4 flex items-center gap-3 hover:text-gold-300">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold-400 text-navy-950">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span className="font-serif text-2xl">{l.phone}</span>
              </a>
              <a
                href={`mailto:${l.email}`}
                className="mt-3 flex items-center gap-3 break-all text-navy-200 hover:text-gold-300"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white/10 text-gold-300">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                {l.email}
              </a>
            </div>
          ))}
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
              <span className="block text-sm text-ink/55">WhatsApp · Av. Murat Acar</span>
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
            Mesajınızın hangi avukatımıza iletileceğini seçin. Formu e-posta veya WhatsApp ile gönderebilirsiniz; en
            kısa sürede dönüş yapılır.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-site px-5 pb-20">
        <iframe
          title="Acar Görgün Hukuk Bürosu konumu"
          src={site.mapEmbedUrl}
          className="h-[420px] w-full rounded-sm border border-navy-100"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </section>
    </>
  );
}
