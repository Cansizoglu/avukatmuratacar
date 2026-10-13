import Link from "next/link";
import { office, site } from "@/data/site";

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={office.mark} alt="" aria-hidden="true" className={`object-contain ${className}`} />;
}

/**
 * Şeffaf arka planlı logo.
 * Açık zeminde orijinal logo (beyaz sekmede, slider'a taşar), koyu zeminde (light) lacivert yazıları beyaz yapılmış hali.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={light ? "flex shrink-0 items-center" : "relative block w-[170px] shrink-0 self-stretch sm:w-[200px] lg:w-[250px]"}
      aria-label={`${site.name} ana sayfa`}
    >
      {light ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={office.logoLight} alt={site.name} width={640} height={393} className="h-auto w-60" />
      ) : (
        // Logo, beyaz bir sekme içinde başlığın altından lacivert slider alanına taşar.
        <span className="absolute -top-3 left-0 right-0 z-10 rounded-b-xl border-b-2 border-gold-400 bg-white px-3 pb-3 pt-2 shadow-lg shadow-navy-950/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={office.logo} alt={site.name} width={600} height={280} className="h-auto w-full" />
        </span>
      )}
    </Link>
  );
}
