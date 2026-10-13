import Link from "next/link";
import { office, site } from "@/data/site";

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={office.mark} alt="" aria-hidden="true" className={className} />;
}

/** Şeffaf arka planlı logo; koyu zeminde (light) yazısı beyaz sürüm kullanılır. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center" aria-label={`${site.name} ana sayfa`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={light ? office.logoLight : office.logo}
        alt={site.name}
        width={900}
        height={191}
        className="h-11 w-auto md:h-12"
      />
    </Link>
  );
}
