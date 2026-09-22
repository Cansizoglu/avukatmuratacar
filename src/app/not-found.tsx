import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-site px-5 py-28 text-center">
      <p className="font-serif text-7xl text-gold-400">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-navy-900">Aradığınız sayfa bulunamadı</h1>
      <p className="mt-3 text-ink/70">Sayfa taşınmış veya kaldırılmış olabilir.</p>
      <Link href="/" className="mt-8 inline-block rounded-sm bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-navy-800">
        Ana sayfaya dön
      </Link>
    </section>
  );
}
