export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-navy-100 border-y border-navy-100">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-lg font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="mt-1 text-2xl leading-none text-gold-500 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-relaxed text-ink/75">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
