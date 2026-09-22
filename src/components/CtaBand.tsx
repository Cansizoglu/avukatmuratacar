import Link from "next/link";
import Icon from "./Icon";
import { site, unsplash, images } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={unsplash(images.books, 1920, 600)} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15" />
      <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-white">Hukuki sorununuz hakkında görüşmek için</h2>
          <p className="mt-3 text-navy-200">
            Randevu almak veya konunuzu kısaca iletmek için telefonla ya da iletişim formu üzerinden ulaşabilirsiniz.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-sm bg-gold-400 px-6 py-3.5 font-semibold text-navy-950 transition hover:bg-gold-300"
          >
            <Icon name="phone" className="h-5 w-5" />
            {site.phone}
          </a>
          <Link
            href="/iletisim"
            className="flex items-center gap-2 rounded-sm border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:border-gold-300 hover:text-gold-300"
          >
            Randevu Talebi
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
