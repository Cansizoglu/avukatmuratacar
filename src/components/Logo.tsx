import Link from "next/link";
import { office, site } from "@/data/site";

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={office.mark} alt="" aria-hidden="true" className={`object-contain ${className}`} />;
}

/**
 * Şeffaf arka planlı logo.
 * Açık zeminde orijinal logo, koyu zeminde (light) lacivert yazıları beyaz yapılmış hali.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} ana sayfa`}>
      {light ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={office.logoLight} alt={site.name} width={640} height={393} className="h-auto w-60" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={office.logo}
          alt={site.name}
          width={490}
          height={300}
          className="h-16 w-auto sm:h-[4.5rem] xl:h-20"
        />
      )}
    </Link>
  );
}
