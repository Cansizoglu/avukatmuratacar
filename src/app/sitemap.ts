import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/hakkimda", "/hizmetler", "/blog", "/sss", "/iletisim", "/kvkk", "/yasal-uyari"];
  return [
    ...staticPages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...site.lawyers.map((l) => ({ url: `${site.url}/avukatlar/${l.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/hizmetler/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
