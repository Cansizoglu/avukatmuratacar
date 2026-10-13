import Link from "next/link";
import { office, site } from "@/data/site";

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={office.mark} alt="" aria-hidden="true" className={`object-contain ${className}`} />;
}

/**
 * Şeffaf arka planlı logo.
 * Açık zeminde yatay logo (A&G + Acar & Görgün Hukuk), koyu zeminde (light) yazıları beyaz tam logo.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} ana sayfa`}>
      {light ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={office.logoLight} alt={site.name} width={640} height={430} className="h-auto w-56" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={office.logo}
          alt={site.name}
          width={803}
          height={128}
          className="h-11 w-auto max-w-[70vw] object-contain object-left sm:h-12 lg:h-10 xl:h-12"
        />
      )}
    </Link>
  );
}
