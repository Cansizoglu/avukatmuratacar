import Link from "next/link";

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="4" fill="#0f1a30" stroke="#c9a35a" strokeWidth="1.5" />
      <g stroke="#c9a35a" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 10v26M17 36h14M13 16h22" />
        <path d="M24 13l-11 3M24 13l11 3" />
        <path d="m13 16-4.5 9a4.5 4.5 0 0 0 9 0L13 16ZM35 16l-4.5 9a4.5 4.5 0 0 0 9 0L35 16Z" />
      </g>
      <circle cx="24" cy="10" r="1.8" fill="#c9a35a" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Avukat Murat Acar ana sayfa">
      <LogoMark />
      <span className="leading-tight">
        <span className={`block font-serif text-xl font-semibold tracking-wide ${light ? "text-white" : "text-navy-900"}`}>
          Murat Acar
        </span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.28em] text-gold-500">
          Avukat · İzmir
        </span>
      </span>
    </Link>
  );
}
