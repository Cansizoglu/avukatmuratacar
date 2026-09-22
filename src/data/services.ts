import { images } from "./site";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: "family" | "work" | "shield" | "home" | "scroll" | "coins" | "building" | "car";
  image: string;
  intro: string[];
  topics: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "aile-hukuku",
    title: "Aile ve Boşanma Hukuku",
    short:
      "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka, mal rejimi ve aile içi koruma tedbirleri.",
    icon: "family",
    image: images.familyHands,
    intro: [
      "Aile hukuku uyuşmazlıkları, hukuki sonuçları kadar duygusal yükü de ağır olan süreçlerdir. Boşanma kararı verildiğinde velayet, nafaka, tazminat ve mal paylaşımı gibi birbirine bağlı pek çok konu aynı anda gündeme gelir.",
      "Büromuz, bu süreçlerde müvekkillerini her aşamada bilgilendirerek, çocukların üstün yararını ve tarafların haklarını gözeten bir yol haritası çizer. Mümkün olan durumlarda anlaşmalı çözüm önceliklidir; gerektiğinde çekişmeli dava titizlikle yürütülür.",
    ],
    topics: [
      "Anlaşmalı boşanma ve boşanma protokolünün hazırlanması",
      "Çekişmeli boşanma davaları",
      "Velayet, kişisel ilişki kurulması ve velayetin değiştirilmesi",
      "Tedbir, iştirak ve yoksulluk nafakası; nafakanın artırılması veya kaldırılması",
      "Maddi ve manevi tazminat talepleri",
      "Mal rejiminin tasfiyesi ve katkı payı alacağı",
      "6284 sayılı Kanun kapsamında koruma ve uzaklaştırma kararları",
      "Soybağı (babalık) ve evlat edinme davaları",
    ],
    faqs: [
      {
        q: "Anlaşmalı boşanma için evliliğin ne kadar sürmüş olması gerekir?",
        a: "Türk Medeni Kanunu'nun 166. maddesine göre anlaşmalı boşanma için evliliğin en az bir yıl sürmüş olması gerekir. Eşlerin birlikte başvurması ya da birinin açtığı davayı diğerinin kabul etmesi ve hakimin tarafları bizzat dinlemesi şarttır.",
      },
      {
        q: "Velayet kararında nelere bakılır?",
        a: "Mahkeme velayeti belirlerken çocuğun üstün yararını esas alır. Çocuğun yaşı, eğitim durumu, bakım ve gözetim imkanları, ebeveynlerle bağı ve idrak çağındaysa kendi görüşü değerlendirilir.",
      },
      {
        q: "Nafaka miktarı sonradan değiştirilebilir mi?",
        a: "Evet. Tarafların mali durumlarında önemli bir değişiklik olduğunda nafakanın artırılması, azaltılması veya kaldırılması için dava açılabilir.",
      },
    ],
  },
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    short:
      "Kıdem ve ihbar tazminatı, işe iade, fazla mesai alacakları, iş kazası ve arabuluculuk süreçleri.",
    icon: "work",
    image: images.worker,
    intro: [
      "İş ilişkisinin sona ermesiyle birlikte işçi ve işveren arasında tazminat, alacak ve işe iade gibi uyuşmazlıklar ortaya çıkabilir. Bu alanda sürelerin kısa olması ve zorunlu arabuluculuk şartı, doğru zamanda doğru adımı atmayı önemli kılar.",
      "Büromuz hem işçilere hem de işverenlere danışmanlık verir. İşverenler için iş sözleşmeleri, iç yönetmelikler ve fesih süreçlerinin hukuka uygun yürütülmesi konusunda önleyici hukuki destek sağlanır.",
    ],
    topics: [
      "Kıdem ve ihbar tazminatı davaları",
      "İşe iade davaları",
      "Fazla mesai, hafta tatili, genel tatil ve yıllık izin ücreti alacakları",
      "Zorunlu arabuluculuk görüşmeleri",
      "İş kazası ve meslek hastalığından doğan tazminat davaları",
      "Mobbing (psikolojik taciz) iddiaları",
      "İş sözleşmelerinin ve fesih bildirimlerinin hazırlanması",
      "Hizmet tespit davaları",
    ],
    faqs: [
      {
        q: "İşe iade davası için süre ne kadardır?",
        a: "Fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulması gerekir. Arabuluculukta anlaşma sağlanamazsa son tutanağın düzenlenmesinden itibaren iki hafta içinde dava açılmalıdır.",
      },
      {
        q: "Kıdem tazminatına hak kazanmak için ne kadar çalışmak gerekir?",
        a: "Aynı işverene bağlı olarak en az bir yıl çalışmış olmak ve iş sözleşmesinin kanunda sayılan hallerden biriyle sona ermiş olması gerekir. Her tam yıl için 30 günlük brüt ücret tutarında tazminat hesaplanır; yasal tavan uygulanır.",
      },
      {
        q: "Arabulucuya gitmeden dava açabilir miyim?",
        a: "Kanuna, bireysel veya toplu iş sözleşmesine dayanan işçi ve işveren alacağı ile tazminat davalarında ve işe iade taleplerinde arabulucuya başvurmak dava şartıdır. İş kazası ve meslek hastalığından doğan tazminat talepleri bu şartın dışındadır.",
      },
    ],
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    short:
      "Soruşturma ve kovuşturma aşamalarında şüpheli, sanık, müşteki ve mağdur vekilliği.",
    icon: "shield",
    image: images.handcuffs,
    intro: [
      "Ceza yargılaması, kişinin özgürlüğünü doğrudan etkileyebilecek sonuçlar doğurur. Bu nedenle soruşturmanın ilk anından itibaren hukuki destek almak, hakların korunması bakımından büyük önem taşır.",
      "Büromuz, emniyet ve savcılık ifadelerinden başlayarak tutuklama, iddianame, duruşma ve kanun yolu aşamalarına kadar müdafilik ve vekillik hizmeti vermektedir.",
    ],
    topics: [
      "Emniyet ve savcılık ifade süreçlerinde müdafilik",
      "Tutuklama ve adli kontrol kararlarına itiraz",
      "Ağır ceza ve asliye ceza mahkemelerinde dava takibi",
      "Mağdur ve müşteki vekilliği, şikayet dilekçelerinin hazırlanması",
      "Dolandırıcılık, güveni kötüye kullanma ve bilişim suçları",
      "Uzlaştırma süreçleri",
      "İstinaf ve temyiz başvuruları",
    ],
    faqs: [
      {
        q: "İfadeye çağrıldığımda avukatla gitmem gerekir mi?",
        a: "Zorunlu değildir, ancak şüpheli veya sanık sıfatıyla ifade verirken müdafi yardımından yararlanma hakkınız vardır. İfadenin ileride delil olarak kullanılacağı düşünüldüğünde avukatla birlikte gitmek önerilir.",
      },
      {
        q: "Şikayet için süre var mı?",
        a: "Şikayete bağlı suçlarda, fiilin ve failin öğrenildiği tarihten itibaren altı ay içinde şikayette bulunulmalıdır. Re'sen soruşturulan suçlarda ise bu süre aranmaz, dava zamanaşımı süreleri geçerlidir.",
      },
    ],
  },
  {
    slug: "gayrimenkul-ve-kira-hukuku",
    title: "Gayrimenkul ve Kira Hukuku",
    short:
      "Tapu iptal ve tescil, kira tespit ve tahliye, ortaklığın giderilmesi, kat mülkiyeti uyuşmazlıkları.",
    icon: "home",
    image: images.keys,
    intro: [
      "Taşınmazlar, çoğu kişinin en değerli varlığıdır ve bu alandaki uyuşmazlıklar genellikle yüksek ekonomik değer taşır. Alım satım öncesi yapılacak kontroller, ileride doğabilecek pek çok sorunun önüne geçer.",
      "Büromuz, tapu ve kira uyuşmazlıklarında dava takibinin yanı sıra sözleşme hazırlama ve alım satım öncesi hukuki inceleme hizmeti sunar.",
    ],
    topics: [
      "Tapu iptal ve tescil davaları",
      "Kira bedelinin tespiti ve uyarlama davaları",
      "Tahliye davaları ve tahliye taahhütnameleri",
      "Ortaklığın giderilmesi (izale-i şuyu) davaları",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıkları",
      "Kira ve satış sözleşmelerinin hazırlanması",
      "Kat karşılığı inşaat sözleşmeleri",
      "Ecrimisil ve el atmanın önlenmesi davaları",
    ],
    faqs: [
      {
        q: "Kira artışı nasıl belirlenir?",
        a: "Konut ve çatılı işyeri kiralarında yenilenen kira dönemindeki artış, bir önceki kira yılının on iki aylık TÜFE ortalamasını geçemez (TBK m. 344). Beş yılı doldurmuş kira ilişkilerinde hakim, emsal kira bedellerini de dikkate alarak hakkaniyete uygun bir bedel belirleyebilir.",
      },
      {
        q: "Kira uyuşmazlıklarında dava açmadan önce arabulucuya gitmek gerekir mi?",
        a: "Evet. 1 Eylül 2023'ten itibaren kira ilişkisinden doğan uyuşmazlıklarda arabulucuya başvurmak dava şartıdır. İcra yoluyla tahliye talepleri bunun dışındadır.",
      },
    ],
  },
  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    short:
      "Veraset ilamı, mirasın reddi, tenkis ve muris muvazaası davaları, vasiyetname düzenlenmesi.",
    icon: "scroll",
    image: images.signing,
    intro: [
      "Miras süreçleri, yasal sürelerin kaçırılmaması ve mirasçılar arasındaki ilişkilerin korunması açısından dikkatli yönetilmesi gereken işlerdir.",
      "Büromuz, mirasçılık belgesinin alınmasından terekenin paylaşımına, saklı pay ihlallerinden vasiyetname düzenlenmesine kadar miras hukukunun tüm aşamalarında destek verir.",
    ],
    topics: [
      "Mirasçılık belgesi (veraset ilamı) alınması",
      "Mirasın reddi ve hükmen ret davaları",
      "Tenkis davaları (saklı payın korunması)",
      "Muris muvazaası nedeniyle tapu iptal ve tescil davaları",
      "Vasiyetname ve miras sözleşmesi düzenlenmesi",
      "Terekenin tespiti ve paylaşımı",
      "Mirastan mal kaçırma iddiaları",
    ],
    faqs: [
      {
        q: "Mirası reddetmek için süre ne kadardır?",
        a: "Yasal mirasçılar için süre, mirasbırakanın ölümünü öğrendikleri tarihten itibaren üç aydır (TMK m. 606). Ret beyanı, mirasbırakanın son yerleşim yerindeki sulh hukuk mahkemesine yapılır.",
      },
      {
        q: "Saklı paylı mirasçılar kimlerdir?",
        a: "Güncel düzenlemeye göre altsoy, anne ve baba ile sağ kalan eş saklı paylı mirasçılardır. Kardeşlerin saklı payı 2007 yılında kaldırılmıştır.",
      },
    ],
  },
  {
    slug: "icra-ve-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    short:
      "Alacak takibi, ilamlı ve ilamsız icra, itirazın iptali, menfi tespit ve konkordato süreçleri.",
    icon: "coins",
    image: images.calculator,
    intro: [
      "Alacağın tahsili, doğru takip yolunun seçilmesiyle başlar. Borçlunun itirazları, haciz işlemleri ve sürelerin takibi, sürecin hızını ve sonucunu doğrudan belirler.",
      "Büromuz, alacaklı ve borçlu vekili olarak icra takiplerini yürütür; bireylerin ve şirketlerin alacak yönetimini düzenli raporlama ile takip eder.",
    ],
    topics: [
      "İlamlı ve ilamsız icra takipleri",
      "Kambiyo senetlerine (çek, senet) dayalı takipler",
      "İtirazın iptali ve itirazın kaldırılması davaları",
      "Menfi tespit ve istirdat davaları",
      "Haciz, istihkak ve ihale feshi süreçleri",
      "İflas ve konkordato süreçleri",
      "Borçlu vekilliği ve takibe itiraz",
    ],
    faqs: [
      {
        q: "Ödeme emrine itiraz süresi kaç gündür?",
        a: "Genel haciz yoluyla ilamsız takipte ödeme emrinin tebliğinden itibaren yedi gün içinde itiraz edilmelidir. Kambiyo senetlerine dayalı takiplerde bu süre beş gündür.",
      },
      {
        q: "Borçlu itiraz ederse ne olur?",
        a: "Süresinde yapılan itiraz takibi durdurur. Alacaklı, itirazın tebliğinden itibaren bir yıl içinde itirazın iptali davası açabilir veya elindeki belgenin niteliğine göre icra mahkemesinden itirazın kaldırılmasını isteyebilir.",
      },
    ],
  },
  {
    slug: "ticaret-ve-sirketler-hukuku",
    title: "Ticaret ve Şirketler Hukuku",
    short:
      "Şirket kuruluşu, sözleşme yönetimi, ortaklık uyuşmazlıkları ve kurumsal hukuki danışmanlık.",
    icon: "building",
    image: images.meeting,
    intro: [
      "Ticari hayatta hukuki riskler çoğu zaman sözleşme imzalanmadan önce şekillenir. Doğru kurgulanmış sözleşmeler ve şirket içi düzenlemeler, uyuşmazlıkların önemli bir kısmını baştan engeller.",
      "Büromuz, İzmir ve çevresindeki şirketlere sözleşme hazırlama, genel kurul işlemleri, ortaklık uyuşmazlıkları ve düzenli (sürekli) hukuki danışmanlık hizmeti verir.",
    ],
    topics: [
      "Limited ve anonim şirket kuruluşu, esas sözleşme hazırlanması",
      "Ticari sözleşmelerin hazırlanması ve incelenmesi",
      "Pay devri, sermaye artırımı ve genel kurul işlemleri",
      "Ortaklar arası uyuşmazlıklar ve ortaklıktan çıkma",
      "Haksız rekabet ve marka uyuşmazlıkları",
      "Ticari davalarda zorunlu arabuluculuk",
      "Kişisel Verilerin Korunması Kanunu (KVKK) uyum çalışmaları",
    ],
    faqs: [
      {
        q: "Ticari davalarda arabuluculuk zorunlu mu?",
        a: "Konusu bir miktar paranın ödenmesi olan alacak ve tazminat taleplerine ilişkin ticari davalarda, dava açmadan önce arabulucuya başvurulması dava şartıdır.",
      },
      {
        q: "Şirketler için sürekli hukuki danışmanlık neleri kapsar?",
        a: "Kapsam şirketin ihtiyacına göre belirlenir. Genellikle sözleşme incelemesi, yazışmaların hazırlanması, iş hukuku süreçleri, alacak takibi ve günlük hukuki sorulara hızlı görüş verilmesi bu hizmetin parçasıdır.",
      },
    ],
  },
  {
    slug: "trafik-kazasi-ve-tazminat",
    title: "Trafik Kazası ve Tazminat Hukuku",
    short:
      "Maddi hasar, araç değer kaybı, yaralanma ve ölümlü kazalarda sigorta ve tazminat süreçleri.",
    icon: "car",
    image: images.carCrash,
    intro: [
      "Trafik kazalarının ardından sigorta şirketlerine başvuru, hasar tespiti ve tazminat hesabı gibi teknik süreçler başlar. Doğru belgeyle ve süresinde yapılan başvurular, hak kaybının önüne geçer.",
      "Büromuz, kaza sonrası sigorta başvurularından Sigorta Tahkim Komisyonu ve mahkeme süreçlerine kadar tazminat taleplerini takip eder.",
    ],
    topics: [
      "Araç hasarı ve değer kaybı talepleri",
      "Yaralanmalı kazalarda maddi ve manevi tazminat",
      "Ölümlü kazalarda destekten yoksun kalma tazminatı",
      "Zorunlu mali sorumluluk (trafik) sigortası ve kasko başvuruları",
      "Sigorta Tahkim Komisyonu başvuruları",
      "Kusur oranına itiraz",
    ],
    faqs: [
      {
        q: "Trafik kazası tazminatı için zamanaşımı ne kadardır?",
        a: "Karayolları Trafik Kanunu'nun 109. maddesine göre tazminat talepleri, zararın ve failin öğrenildiği tarihten itibaren iki yıl ve her halde kazadan itibaren on yıl içinde zamanaşımına uğrar. Olay aynı zamanda ceza zamanaşımı daha uzun olan bir suç oluşturuyorsa o süre uygulanır.",
      },
      {
        q: "Sigortaya başvurmadan dava açabilir miyim?",
        a: "Zorunlu trafik sigortası kapsamındaki taleplerde, dava açmadan veya tahkime gitmeden önce gerekli belgelerle sigorta şirketine yazılı başvuru yapılması gerekir.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
