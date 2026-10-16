"use client";

import { useRef, useState } from "react";
import { services } from "@/data/services";
import { site, whatsappLink } from "@/data/site";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [lawyerSlug, setLawyerSlug] = useState(site.lawyers[0].slug);
  const [status, setStatus] = useState<"" | "sending" | "sent" | "activation" | "error" | "wa">("");
  const lawyer = site.lawyers.find((l) => l.slug === lawyerSlug) ?? site.lawyers[0];

  function buildMessage(f: FormData) {
    return [
      `Sayın ${lawyer.name},`,
      "Acar Görgün Hukuk Bürosu web sitesi üzerinden randevu talebinde bulunuyorum.",
      "",
      `Ad Soyad: ${f.get("name")}`,
      `Telefon: ${f.get("phone")}`,
      `Konu: ${f.get("topic")}`,
      "",
      `Mesaj: ${f.get("message")}`,
    ].join("\n");
  }

  // E-posta, ziyaretçinin mail programı gerekmeden FormSubmit üzerinden doğrudan avukatın adresine gönderilir.
  // Her adres ilk kullanımda FormSubmit'in gönderdiği onay e-postasıyla bir kez etkinleştirilmelidir.
  async function sendMail(f: FormData) {
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${lawyer.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Web sitesi randevu talebi - ${f.get("topic")} - ${f.get("name")}`,
          _template: "table",
          Avukat: lawyer.name,
          "Ad Soyad": f.get("name"),
          Telefon: f.get("phone"),
          Konu: f.get("topic"),
          Mesaj: f.get("message"),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && String(data.success) === "true") {
        setStatus("sent");
        formRef.current?.reset();
      } else if (/activat/i.test(String(data.message ?? ""))) {
        setStatus("activation");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function send(channel: "mail" | "wa") {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    const f = new FormData(form);
    if (channel === "mail") {
      void sendMail(f);
    } else {
      window.open(whatsappLink(buildMessage(f), lawyer.whatsapp), "_blank", "noopener,noreferrer");
      setStatus("wa");
    }
  }

  const field =
    "mt-1.5 w-full rounded-sm border border-navy-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200";

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        send("mail");
      }}
      className="space-y-5"
    >
      <fieldset>
        <legend className="text-sm font-medium text-navy-800">Mesajınız hangi avukatımıza iletilsin?</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {site.lawyers.map((l) => (
            <label
              key={l.slug}
              className={`flex cursor-pointer items-center gap-3 rounded-sm border p-3 transition ${
                lawyerSlug === l.slug
                  ? "border-gold-400 bg-gold-50 ring-2 ring-gold-200"
                  : "border-navy-200 hover:border-gold-300"
              }`}
            >
              <input
                type="radio"
                name="lawyer"
                value={l.slug}
                checked={lawyerSlug === l.slug}
                onChange={() => setLawyerSlug(l.slug)}
                className="h-4 w-4 accent-navy-900"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.photo} alt="" className="h-11 w-11 rounded-full object-cover object-top" />
              <span className="min-w-0 leading-tight">
                <span className="block font-semibold text-navy-900">{l.name}</span>
                <span className="block truncate text-xs text-ink/60">{l.email}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
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
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-sm bg-navy-900 px-6 py-3.5 font-semibold text-white transition hover:bg-navy-800 disabled:opacity-60"
        >
          {status === "sending" ? "Gönderiliyor..." : "E-posta ile Gönder"}
        </button>
        <button
          type="button"
          onClick={() => send("wa")}
          className="rounded-sm bg-[#1f8f4e] px-6 py-3.5 font-semibold text-white transition hover:bg-[#1a7a42]"
        >
          WhatsApp ile Gönder
        </button>
      </div>
      {status && status !== "sending" && (
        <p
          className={`rounded-sm p-3 text-sm ${status === "error" ? "bg-red-50 text-red-800" : "bg-gold-50 text-navy-800"}`}
          role="status"
        >
          {status === "sent" && `Mesajınız ${lawyer.name}'a e-posta ile iletildi. En kısa sürede size dönüş yapılacaktır.`}
          {status === "activation" &&
            `E-posta gönderimi ilk kez kullanılıyor: ${lawyer.email} adresine bir onay e-postası gönderildi. Onaylandıktan sonra mesajlar doğrudan iletilecektir. Şimdilik WhatsApp ile gönderebilir veya arayabilirsiniz.`}
          {status === "error" && (
            <>
              Mesaj şu anda gönderilemedi. Lütfen WhatsApp ile gönderin veya doğrudan{" "}
              <a href={`mailto:${lawyer.email}`} className="font-semibold underline">
                {lawyer.email}
              </a>{" "}
              adresine yazın.
            </>
          )}
          {status === "wa" && `Mesajınız WhatsApp'ta ${lawyer.name} için hazırlandı. Gönder tuşuna bastığınızda iletilecektir.`}
        </p>
      )}
    </form>
  );
}
