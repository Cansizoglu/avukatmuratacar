import Icon from "./Icon";
import { site, whatsappLink } from "@/data/site";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={whatsappLink("Merhaba, hukuki bir konuda bilgi almak istiyorum.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yazın"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-lg ring-4 ring-white/70 transition hover:scale-105"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
      <a
        href={site.phoneHref}
        aria-label={`Telefon: ${site.phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-gold-300 shadow-lg ring-4 ring-white/70 transition hover:scale-105"
      >
        <Icon name="phone" className="h-6 w-6" />
      </a>
    </div>
  );
}
