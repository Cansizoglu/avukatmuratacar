# Avukat Murat Acar — İnternet Sitesi

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Admin paneli yok; tüm içerik `src/data` altındaki dosyalarda.

- `src/data/site.ts` — telefon, adres, çalışma saatleri, site adresi, görsel listesi
- `src/data/services.ts` — çalışma alanları (hizmet sayfaları)
- `src/data/blog.ts` — makaleler
- `src/data/faq.ts` — genel sık sorulan sorular

Görseller Unsplash CDN'inden (images.unsplash.com) yüklenir.

Canlı alan adı için Vercel'de `NEXT_PUBLIC_SITE_URL` ortam değişkeni tanımlanmalıdır (örn. `https://avukatmuratacar.com`).

```bash
npm install
npm run dev
```
