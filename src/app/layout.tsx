import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { site, office } from "@/data/site";
import { services } from "@/data/services";

const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });
const serif = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Acar Görgün Hukuk" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: office.entrance, width: 1448, height: 1086 }],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${site.url}/#hukuk-burosu`,
  name: site.name,
  url: site.url,
  telephone: "+90 545 310 34 09",
  image: `${site.url}${office.entrance}`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "City", name: "Çeşme" },
    { "@type": "City", name: "İzmir" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  knowsAbout: services.map((s) => s.title),
  hasMap: site.mapsUrl,
  logo: `${site.url}${office.logo}`,
  employee: [
    { "@type": "Person", name: "Murat Acar", jobTitle: "Avukat" },
    { "@type": "Person", name: "Ecem Görgün", jobTitle: "Avukat" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
