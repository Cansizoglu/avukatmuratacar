export type Lawyer = {
  name: string;
  slug: string;
  short: string;
  photo: string;
  facts: string[];
  bio: string[];
  phone?: string;
  phoneHref?: string;
};

export const site = {
  name: "Acar Görgün Hukuk Bürosu",
  shortName: "Acar Görgün Hukuk",
  title: "Acar Görgün Hukuk Bürosu | Çeşme / İzmir Avukat",
  description:
    "Acar Görgün Hukuk Bürosu; Av. Murat Acar ve Av. Ecem Görgün ile Çeşme / İzmir'de aile, iş, ceza, gayrimenkul, miras, icra ve ticaret hukuku alanlarında danışmanlık ve dava takibi hizmeti vermektedir.",
  lawyers: [
    {
      name: "Av. Murat Acar",
      slug: "murat-acar",
      short: "Dokuz Eylül Üniversitesi Hukuk Fakültesi mezunu; 2018'den bu yana serbest avukat.",
      photo: "/img/murat-acar.jpg",
      facts: ["1994, Çeşme", "Dokuz Eylül Üniversitesi Hukuk Fakültesi, 2017", "2018'den bu yana serbest avukat"],
      bio: [
        "1994 yılında Çeşme’de doğan Av. Murat Acar, 2017 yılında Dokuz Eylül Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. 2018 yılından bu yana serbest avukat olarak mesleki faaliyetlerini sürdürmektedir.",
        "Mesleki çalışmalarında müvekkillerinin hak ve menfaatlerinin korunmasını, hukuki uyuşmazlıkların etkin şekilde çözüme kavuşturulmasını ve hukuki süreçlerin titizlikle yürütülmesini esas almaktadır. Hukukun farklı alanlarında danışmanlık, dava takibi ve uyuşmazlıkların çözümüne yönelik hukuki hizmetler sunmaktadır.",
      ],
    },
    {
      name: "Av. Ecem Görgün",
      slug: "ecem-gorgun",
      short: "İstanbul Bilgi Üniversitesi Hukuk Fakültesi onur derecesi; 2022'den bu yana serbest avukat.",
      photo: "/img/ecem-gorgun.jpg",
      phone: "0530 384 04 84",
      phoneHref: "tel:+905303840484",
      facts: ["1998, İstanbul", "İstanbul Bilgi Üniversitesi Hukuk Fakültesi, 2021 (onur derecesi)", "2022'den bu yana serbest avukat"],
      bio: [
        "1998 yılında İstanbul’da doğan Av. Ecem Görgün, 2021 yılında İstanbul Bilgi Üniversitesi Hukuk Fakültesi’nden onur derecesiyle mezun olmuştur. 2022 yılından itibaren serbest avukat olarak mesleki faaliyetlerini sürdürmekte ve müvekkillerine çeşitli hukuki alanlarda danışmanlık ve avukatlık hizmetleri sunmaktadır.",
        "Mesleki çalışmalarında, her hukuki uyuşmazlığın kendine özgü koşullarını dikkate alarak somut olaya uygun çözümler geliştirmeyi hedeflemektedir. Hukuki danışmanlık ve dava takibi süreçlerinde, müvekkillerinin hak ve menfaatlerinin korunmasına, uyuşmazlıkların yürürlükteki mevzuat çerçevesinde değerlendirilmesine ve hukuki süreçlerin etkin biçimde yürütülmesine önem vermektedir.",
      ],
    },
  ] as Lawyer[],
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://avukatmuratacar.com").replace(/\/$/, ""),
  phone: "0545 310 34 09",
  phoneHref: "tel:+905453103409",
  whatsapp: "905453103409",
  address: {
    street: "Sakarya Mah. 3101 Sok. No: 2 Daire: 8",
    district: "Çeşme",
    city: "İzmir",
    postalCode: "35930",
    full: "Sakarya Mah. 3101 Sok. No: 2 Daire: 8, 35930 Çeşme / İzmir",
  },
  /** Google Haritalar paylaşım bağlantısı (yol tarifi düğmesi) */
  mapsUrl: "https://share.google/C77fp4VP0iMPOoXiv",
  /** Harita gömme sorgusu */
  mapQuery: "Sakarya Mahallesi 3101 Sokak No:2, 35930 Çeşme, İzmir",
  hours: "Pazartesi - Cuma 09:00 - 18:00",
  bar: "İzmir Barosu",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** Unsplash görsel adresi. Unsplash CDN'i boyutlandırmayı kendisi yapar. */
export const unsplash = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=75`;

/** Büronun kendi görselleri (public/img) */
export const office = {
  logo: "/img/logo.png",
  logoLight: "/img/logo-light.png",
  mark: "/img/mark-180.png",
  entrance: "/img/ofis-giris.jpg",
  door: "/img/ofis-kapi.jpg",
  reception: "/img/ofis-resepsiyon.jpg",
  room: "/img/ofis-oda.jpg",
  meeting: "/img/ofis-toplanti.jpg",
};

export const images = {
  heroLady: "photo-1589829545856-d10d557cf95f",
  ladyScales: "photo-1589994965851-a8f479c573a9",
  ladyGold: "photo-1589578527966-fdac0f44566c",
  gavelMarble: "photo-1589391886645-d51941baf7fb",
  gavelDark: "photo-1589216532372-1c2a367900d9",
  gavelBook: "photo-1767972159871-b9f5d320be2b",
  gavelTable: "photo-1676181739859-08330dea8999",
  books: "photo-1479142506502-19b3a3b7ff33",
  bookshelf: "photo-1505664063603-28e48ca204eb",
  booksShelf2: "photo-1521587760476-6c12a4b040da",
  signing: "photo-1450101499163-c8848c66ca85",
  writing: "photo-1521791055366-0d553872125f",
  coupleSigning: "photo-1664463760781-f159dfe3af30",
  handshake: "photo-1549923746-c502d488b3ea",
  meeting: "photo-1517048676732-d65bc937f952",
  meetingTable: "photo-1573164574572-cb89e39749b4",
  familyHands: "photo-1565340419825-cd1ac212cbce",
  parentChild: "photo-1439920120577-eb3a83c16dd7",
  houseModel: "photo-1560518883-ce09059eeffa",
  keys: "photo-1741156386380-0236c72eb6f9",
  factory: "photo-1598299803204-b73796f43289",
  worker: "photo-1646082276009-bb35409086ed",
  handcuffs: "photo-1521437100987-e1cb2178879b",
  carCrash: "photo-1597328290883-50c5787b7c7e",
  calculator: "photo-1554224155-6726b3ff858f",
  taxDocs: "photo-1554224154-26032ffc0d07",
  izmirClock: "photo-1658317887134-f81324a7c3cd",
  izmirBay: "photo-1719688550640-e27dda479c57",
  officeMan: "photo-1605602517229-cdbfc3dfb70c",
};

export const getLawyer = (slug: string) => site.lawyers.find((l) => l.slug === slug);
