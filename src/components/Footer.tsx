import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { site, whatsappLink } from "@/data/site";
import { services } from "@/data/services";
import { sortedPosts } from "@/data/blog";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-navy-300">
            {site.bar}&apos;na kayıtlı Av. Murat Acar ve Av. Ecem Görgün, Çeşme / İzmir&apos;de bireylere ve şirketlere
            hukuki danışmanlık ve dava takibi hizmeti vermektedir.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg text-white">Çalışma Alanları</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetler/${s.slug}`} className="hover:text-gold-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg text-white">Son Makaleler</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {sortedPosts.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="hover:text-gold-300">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg text-white">İletişim</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span>{site.address.full}</span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-gold-300">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-gold-400" />
                <span>
                  {site.phone}
                  <span className="block text-xs text-navy-400">Av. Murat Acar</span>
                </span>
              </a>
            </li>
            {site.lawyers
              .filter((l) => l.phone)
              .map((l) => (
                <li key={l.slug}>
                  <a href={l.phoneHref} className="flex gap-3 hover:text-gold-300">
                    <Icon name="phone" className="h-5 w-5 shrink-0 text-gold-400" />
                    <span>
                      {l.phone}
                      <span className="block text-xs text-navy-400">{l.name}</span>
                    </span>
                  </a>
                </li>
              ))}
            <li>
              <a href={whatsappLink()} className="flex gap-3 hover:text-gold-300" target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" className="h-5 w-5 shrink-0 text-gold-400" />
                <span>
                  WhatsApp ile yazın
                  <span className="block text-xs text-navy-400">Av. Murat Acar</span>
                </span>
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="h-5 w-5 shrink-0 text-gold-400" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-800">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-5 py-6 text-xs text-navy-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</p>
          <p className="max-w-2xl">
            Bu internet sitesi, Türkiye Barolar Birliği Meslek Kuralları ve Reklam Yasağı Yönetmeliği çerçevesinde
            yalnızca bilgilendirme amacıyla hazırlanmıştır. İçerikler hukuki mütalaa niteliği taşımaz.
          </p>
          <p className="flex gap-4">
            <Link href="/kvkk" className="hover:text-gold-300">KVKK Aydınlatma Metni</Link>
            <Link href="/yasal-uyari" className="hover:text-gold-300">Yasal Uyarı</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
