import Link from "next/link";
import { office, site } from "@/data/site";

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={office.mark} alt="" aria-hidden="true" className={`object-contain ${className}`} />;
}

/**
 * Şeffaf arka planlı logo.
 * Açık zeminde orijinal logo (avukat isimleri okunsun diye altında yazı olarak), koyu zeminde (light) lacivert yazıları beyaz yapılmış hali.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} ana sayfa`}>
      {light ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={office.logoLight} alt={site.name} width={640} height={393} className="h-auto w-60" />
      ) : (
        <span className="flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={office.logo} alt={site.name} width={550} height={300} className="h-14 w-auto sm:h-16 xl:h-[4.5rem]" />
          <span className="mt-1 whitespace-nowrap font-serif text-[11px] font-semibold leading-none text-navy-900 sm:text-xs">
            {site.lawyers.map((l, i) => (
              <span key={l.name}>
                {i > 0 && <span className="mx-1.5 text-gold-500">|</span>}
                {l.name}
              </span>
            ))}
          </span>
        </span>
      )}
    </Link>
  );
}
