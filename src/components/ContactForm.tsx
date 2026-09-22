"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { whatsappLink } from "@/data/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "Merhaba Av. Murat Acar, web siteniz üzerinden randevu talebinde bulunuyorum.",
      `Ad Soyad: ${f.get("name")}`,
      `Telefon: ${f.get("phone")}`,
      `Konu: ${f.get("topic")}`,
      `Mesaj: ${f.get("message")}`,
    ].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-sm border border-navy-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy-800">
          Ad Soyad
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium text-navy-800">
          Telefon
          <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium text-navy-800">
        Konu
        <select name="topic" className={field} defaultValue={services[0].title}>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Diğer</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-navy-800">
        Mesajınız
        <textarea name="message" required rows={5} className={field} placeholder="Konunuzu kısaca yazabilirsiniz." />
      </label>
      <label className="flex items-start gap-3 text-sm text-ink/75">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-navy-900" />
        <span>
          Kişisel verilerimin{" "}
          <a href="/kvkk" className="text-navy-800 underline decoration-gold-400 underline-offset-2">
            KVKK Aydınlatma Metni
          </a>{" "}
          kapsamında işlenmesini kabul ediyorum.
        </span>
      </label>
      <button
        type="submit"
        className="w-full rounded-sm bg-navy-900 px-6 py-3.5 font-semibold text-white transition hover:bg-navy-800 sm:w-auto"
      >
        WhatsApp ile Gönder
      </button>
      {sent && (
        <p className="text-sm text-navy-700" role="status">
          Mesajınız WhatsApp&apos;ta hazırlandı. Gönder tuşuna bastığınızda bize ulaşacaktır.
        </p>
      )}
    </form>
  );
}
