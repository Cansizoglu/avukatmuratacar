import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { images } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Çalışma Alanları",
  description:
    "Acar Görgün Hukuk Bürosu'nun Çeşme / İzmir'de hizmet verdiği hukuk alanları: aile, iş, ceza, gayrimenkul ve kira, miras, icra, ticaret, trafik kazası ve sigorta hukuku.",
  alternates: { canonical: "/hizmetler" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Çalışma Alanları"
        subtitle="Bireysel ve ticari hukuki sorunlarda danışmanlık, arabuluculuk ve dava takibi."
        image={images.gavelBook}
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "Çalışma Alanları" }]}
      />
      <section className="mx-auto max-w-site px-5 py-20">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
