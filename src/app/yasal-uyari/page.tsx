import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Yasal Uyarı",
  description: "Acar Görgün Hukuk Bürosu internet sitesinin kullanım koşulları ve yasal uyarı metni.",
  alternates: { canonical: "/yasal-uyari" },
};

export default function LegalPage() {
  return (
    <>
      <PageHero title="Yasal Uyarı" image={images.gavelTable} crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "Yasal Uyarı" }]} />
      <section className="prose-legal mx-auto max-w-3xl px-5 py-16">
        <p>
          Bu internet sitesi, Avukatlık Kanunu, Türkiye Barolar Birliği Meslek Kuralları ve Türkiye Barolar Birliği
          Reklam Yasağı Yönetmeliği hükümlerine uygun olarak, yalnızca bilgilendirme amacıyla hazırlanmıştır. Sitede yer
          alan hiçbir içerik reklam, iş elde etme veya yönlendirme amacı taşımamaktadır.
        </p>
        <p>
          Sitede yer alan makale ve bilgiler genel nitelikte olup hukuki mütalaa veya tavsiye niteliği taşımaz. Bu
          bilgilere dayanılarak yapılan işlemlerden doğabilecek sonuçlardan sorumluluk kabul edilmez. Somut bir
          hukuki sorunla ilgili olarak mutlaka bir avukattan görüş alınmalıdır.
        </p>
        <p>
          Sitenin ziyaret edilmesi veya site üzerinden iletişime geçilmesi, avukat ile müvekkil arasında bir hukuki
          ilişki kurulduğu anlamına gelmez. Avukatlık hizmeti ilişkisi, ancak yazılı avukatlık sözleşmesi ile kurulur.
        </p>
        <p>
          Sitedeki metinlerin izin alınmaksızın kopyalanması ve çoğaltılması yasaktır. Sitede kullanılan fotoğraflar
          Unsplash lisansı kapsamında kullanılmaktadır.
        </p>
      </section>
    </>
  );
}
