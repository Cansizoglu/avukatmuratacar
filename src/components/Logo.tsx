import Link from "next/link";
import { office, site } from "@/data/site";

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={office.mark} alt="" aria-hidden="true" className={className} />;
}

export default function Logo({ light = false }: { light?: boolean }) {
  if (!light) {
    return (
      <Link href="/" className="flex items-center" aria-label={`${site.name} ana sayfa`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={office.logo} alt={site.name} width={900} height={193} className="h-11 w-auto md:h-12" />
      </Link>
    );
  }
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} ana sayfa`}>
      <LogoMark />
      <span className="leading-tight">
        <span className="block font-serif text-xl font-semibold tracking-wide text-white">Acar Görgün</span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.4em] text-gold-400">Hukuk</span>
      </span>
    </Link>
  );
}
