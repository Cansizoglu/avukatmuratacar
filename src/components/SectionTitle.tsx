export default function SectionTitle({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">{eyebrow}</p>
      <h2 className={`mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      <div className={`mt-4 h-px w-16 bg-gold-400 ${center ? "mx-auto" : ""}`} />
      {text && <p className={`mt-5 leading-relaxed ${light ? "text-navy-200" : "text-ink/75"}`}>{text}</p>}
    </div>
  );
}
