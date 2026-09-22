import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { images, site } from "@/data/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <>
      <PageHero
        title="KVKK Aydınlatma Metni"
        image={images.taxDocs}
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "KVKK Aydınlatma Metni" }]}
      />
      <section className="prose-legal mx-auto max-w-3xl px-5 py-16">
        <p>
          Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun (&quot;KVKK&quot;) 10. maddesi
          uyarınca, veri sorumlusu sıfatıyla Av. Murat Acar (&quot;Büro&quot;) tarafından hazırlanmıştır.
        </p>
        <h2>İşlenen kişisel veriler</h2>
        <p>
          İletişim formu, telefon ve WhatsApp üzerinden bizimle paylaştığınız ad soyad, telefon numarası ve mesaj
          içeriğinde yer alan bilgiler ile hukuki hizmet ilişkisi kurulması halinde işin gerektirdiği belge ve bilgiler
          işlenmektedir.
        </p>
        <h2>İşleme amaçları</h2>
        <ul>
          <li>Randevu ve bilgi taleplerinizin karşılanması</li>
          <li>Avukatlık hizmetinin sunulması ve avukatlık sözleşmesinin kurulması, ifası</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        </ul>
        <h2>Hukuki sebepler</h2>
        <p>
          Kişisel verileriniz; KVKK&apos;nın 5. maddesinde yer alan bir sözleşmenin kurulması veya ifasıyla doğrudan
          ilgili olması, veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi, bir hakkın tesisi, kullanılması veya
          korunması ile ilgi kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru
          menfaati hukuki sebeplerine dayanılarak işlenmektedir.
        </p>
        <h2>Aktarım</h2>
        <p>
          Kişisel verileriniz, yalnızca hukuki hizmetin gerektirdiği ölçüde yargı mercileri, icra daireleri,
          arabulucular, bilirkişiler ve kanunen yetkili kamu kurumlarıyla paylaşılabilir. İletişim formu mesajlarınız
          WhatsApp (Meta Platforms) altyapısı üzerinden iletilmektedir.
        </p>
        <h2>Haklarınız</h2>
        <p>
          KVKK&apos;nın 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin
          bilgi talep etme, işleme amacını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini, kanundaki şartlar
          çerçevesinde silinmesini veya yok edilmesini isteme ve zarara uğramanız halinde giderilmesini talep etme
          haklarına sahipsiniz.
        </p>
        <p>
          Başvurularınızı {site.address.full} adresine yazılı olarak iletebilirsiniz.
        </p>
      </section>
    </>
  );
}
