import Icon from "./Icon";
import { shortName, site, whatsappLink } from "@/data/site";

/** Sayfanın altına sabit iletişim çubuğu: her avukat için "Hemen Ara" ve "WhatsApp" kutusu. */
export default function FloatingContact() {
  // Sıra: önce Av. Ecem Görgün, sonra Av. Murat Acar
  const people = [...site.lawyers].reverse();
  const buttons = people.flatMap((p) => [
    { kind: "call" as const, name: p.name, href: p.phoneHref },
    {
      kind: "wa" as const,
      name: p.name,
      href: whatsappLink(`Merhaba ${p.name}, hukuki bir konuda bilgi almak istiyorum.`, p.whatsapp),
    },
  ]);

  return (
    <nav
      aria-label="Hızlı iletişim"
      className="fixed inset-x-0 hidden sm:block bottom-0 z-40 border-t border-white/10 bg-navy-950/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur"
    >
      <div className="mx-auto grid max-w-site grid-cols-4 gap-2">
        {buttons.map((b) => (
          <a
            key={b.kind + b.name}
            href={b.href}
            {...(b.kind === "wa" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-sm px-1 py-1.5 text-center leading-tight transition sm:flex-row sm:gap-2.5 sm:py-2.5 ${
              b.kind === "call" ? "bg-gold-400 text-navy-950 hover:bg-gold-300" : "bg-[#1f8f4e] text-white hover:bg-[#1a7a42]"
            }`}
          >
            <Icon name={b.kind === "call" ? "phone" : "whatsapp"} className="h-5 w-5 shrink-0" />
            <span className="flex flex-col sm:items-start">
              <span className="text-[12px] font-bold sm:text-sm">{b.kind === "call" ? "Hemen Ara" : "WhatsApp"}</span>
              <span className="text-[10px] font-medium opacity-80 sm:text-xs">{shortName(b.name)}</span>
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
