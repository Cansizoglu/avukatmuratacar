import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import { images } from "@/data/site";
import { sortedPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Makaleler",
  description:
    "Boşanma, kıdem tazminatı, kira ve tahliye, mirasın reddi, icra takibi ve ceza muhakemesi hakkında güncel hukuki bilgilendirme yazıları.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Makaleler"
        subtitle="Sık karşılaşılan hukuki konularda genel bilgilendirme yazıları."
        image={images.booksShelf2}
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "Makaleler" }]}
      />
      <section className="mx-auto max-w-site px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((p) => (
            <PostCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
    </>
  );
}
