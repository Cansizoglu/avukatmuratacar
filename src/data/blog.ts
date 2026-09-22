import { images } from "./site";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  category: string;
  serviceSlug: string;
  image: string;
  /** Basit biçim: "## " ara başlık, "- " madde, boş satır paragraf ayırır. */
  body: string;
};

export const posts: Post[] = [
  {
    slug: "anlasmali-bosanma-nasil-yapilir",
    title: "Anlaşmalı Boşanma Nasıl Yapılır? Şartlar ve Adım Adım Süreç",
    excerpt:
      "Anlaşmalı boşanmanın yasal şartları, protokolde yer alması gereken konular ve duruşma günü neler olduğu hakkında bilmeniz gerekenler.",
    date: "2026-09-15",
    category: "Aile Hukuku",
    serviceSlug: "aile-hukuku",
    image: images.coupleSigning,
    body: `Eşlerin boşanma ve boşanmanın sonuçları konusunda uzlaştığı durumlarda anlaşmalı boşanma, çekişmeli davaya göre çok daha kısa sürede sonuçlanabilen bir yoldur. Ancak sürecin sorunsuz ilerlemesi, kanunda aranan şartların eksiksiz karşılanmasına ve protokolün özenle hazırlanmasına bağlıdır.

## Anlaşmalı boşanmanın yasal şartları

Türk Medeni Kanunu'nun 166. maddesinin üçüncü fıkrası anlaşmalı boşanmanın şartlarını düzenler:

- Evlilik en az bir yıl sürmüş olmalıdır.
- Eşler mahkemeye birlikte başvurmalı ya da eşlerden birinin açtığı davayı diğeri kabul etmelidir.
- Hakim, tarafları bizzat dinleyerek iradelerini serbestçe açıkladıklarına kanaat getirmelidir.
- Hakim, boşanmanın mali sonuçları ve çocukların durumu konusunda tarafların yaptığı düzenlemeyi uygun bulmalıdır.

Bir yıllık süre dolmadan açılan davalar anlaşmalı boşanma olarak sonuçlanamaz. Bu durumda dava ancak çekişmeli boşanma hükümlerine göre yürütülebilir.

## Boşanma protokolünde neler yer almalı?

Protokol, anlaşmalı boşanmanın omurgasıdır. Hakim protokolü uygun bulmazsa gerekli gördüğü değişiklikleri yapabilir; taraflar bu değişiklikleri kabul ederse boşanmaya karar verilir. Bu nedenle protokolün açık ve eksiksiz olması önemlidir. Genellikle şu başlıklar düzenlenir:

- Müşterek çocukların velayetinin kime bırakılacağı
- Velayeti kendisine bırakılmayan ebeveynin çocukla kişisel ilişki günleri (hafta sonları, bayramlar, yaz tatili)
- İştirak nafakası ve varsa yoksulluk nafakası, miktarı ve artış esası
- Maddi ve manevi tazminat talepleri
- Ev eşyaları, araçlar ve taşınmazların paylaşımı
- Yargılama giderleri ve vekalet ücretinin kimde kalacağı

Özellikle mal paylaşımına ilişkin maddelerin belirsiz bırakılması, boşanmadan sonra yeni davalara yol açabilir. Tarafların mal rejiminin tasfiyesinden karşılıklı olarak feragat edip etmediğinin açıkça yazılması önerilir.

## Dava nerede açılır?

Görevli mahkeme aile mahkemesidir; aile mahkemesi bulunmayan yerlerde asliye hukuk mahkemesi aile mahkemesi sıfatıyla bakar. Yetkili mahkeme, eşlerden birinin yerleşim yeri ya da eşlerin davadan önce son altı aydır birlikte oturdukları yer mahkemesidir. İzmir'de aile mahkemeleri Bayraklı'daki İzmir Adliyesi'nde görev yapmaktadır.

## Duruşma günü neler olur?

Anlaşmalı boşanma davaları çoğunlukla tek duruşmada sonuçlanır. Hakim eşleri ayrı ayrı veya birlikte dinler, protokolü okuyarak kabul edip etmediklerini sorar. Eşlerin duruşmada bizzat hazır bulunması gerekir; avukatın katılması eşin yerine geçmez.

Karar verildikten sonra gerekçeli karar taraflara tebliğ edilir. Taraflar kanun yoluna başvurmayacaklarını beyan ederek feragat ederlerse karar daha kısa sürede kesinleşebilir. Kesinleşen karar nüfus müdürlüğüne bildirilir ve medeni hal kaydı güncellenir.

## Anlaşma bozulursa ne olur?

Eşlerden biri duruşmada protokolü kabul etmediğini beyan ederse anlaşmalı boşanma gerçekleşmez. Dava çekişmeli boşanma olarak devam edebilir; bu durumda boşanma sebeplerinin ispatı gerekir.

## Sonuç

Anlaşmalı boşanma, doğru hazırlandığında hem zaman hem de ruhsal yıpranma açısından tarafların lehine bir yoldur. Protokolün çocukların üstün yararını gözeten, uygulanabilir ve açık hükümler içermesi, ileride doğabilecek uyuşmazlıkların önüne geçer.`,
  },
  {
    slug: "kidem-tazminati-kimlere-odenir",
    title: "Kıdem Tazminatı Kimlere ve Nasıl Ödenir?",
    excerpt:
      "Kıdem tazminatına hak kazanma şartları, istifa eden işçinin durumu, hesaplamada esas alınan ücret ve zamanaşımı süresi.",
    date: "2026-09-08",
    category: "İş Hukuku",
    serviceSlug: "is-hukuku",
    image: images.factory,
    body: `Kıdem tazminatı, işçinin aynı işverene bağlı olarak geçirdiği çalışma süresinin karşılığı olarak, iş sözleşmesi kanunda sayılan sebeplerden biriyle sona erdiğinde ödenen bir tazminattır. Dayanağı hâlâ 1475 sayılı eski İş Kanunu'nun yürürlükte kalan 14. maddesidir.

## Hak kazanmanın temel şartları

Kıdem tazminatı için iki temel şart aranır:

- İşçinin aynı işverene bağlı olarak en az bir yıl çalışmış olması
- İş sözleşmesinin kanunda sayılan hallerden biriyle sona ermiş olması

Aynı işverenin farklı işyerlerinde geçen süreler birleştirilir. İşyerinin devri halinde de önceki işverende geçen süreler dikkate alınır.

## Hangi hallerde kıdem tazminatı ödenir?

- İşverenin, ahlak ve iyi niyet kurallarına aykırılık dışındaki bir sebeple sözleşmeyi feshetmesi
- İşçinin haklı bir sebeple sözleşmeyi feshetmesi (örneğin ücretin ödenmemesi, fazla çalışma ücretlerinin verilmemesi, sağlık sebepleri)
- Muvazzaf askerlik hizmeti nedeniyle işten ayrılma
- Yaşlılık, emeklilik veya malullük aylığı ya da toptan ödeme almak amacıyla ayrılma
- Kanunda öngörülen sigortalılık süresi ve prim gün sayısını tamamlayarak, SGK'dan alınan yazı ile ayrılma
- Kadın işçinin evlendiği tarihten itibaren bir yıl içinde kendi isteğiyle ayrılması
- İşçinin ölümü (bu durumda tazminat yasal mirasçılarına ödenir)

## İstifa eden işçi kıdem tazminatı alabilir mi?

Kural olarak herhangi bir haklı sebebe dayanmadan istifa eden işçi kıdem tazminatına hak kazanamaz. Ancak uygulamada "istifa" olarak görünen pek çok ayrılışın arkasında ödenmeyen ücretler, fazla mesai alacakları veya sigorta priminin eksik yatırılması gibi haklı fesih sebepleri bulunur. Bu durumda istifa dilekçesinin içeriği ve ayrılma sebebinin ispatı belirleyici olur. Dilekçede ayrılma sebebinin açıkça yazılması önemlidir.

## Tazminat nasıl hesaplanır?

Her tam çalışma yılı için 30 günlük brüt ücret tutarında tazminat ödenir; bir yıldan artan süreler için orantılı hesap yapılır. Hesaplamada yalnızca çıplak ücret değil, düzenli olarak ödenen yol, yemek, ikramiye gibi para veya para ile ölçülebilen menfaatler de dikkate alınır. Buna uygulamada "giydirilmiş brüt ücret" denir.

Kıdem tazminatı, her yıl ocak ve temmuz aylarında güncellenen yasal tavanı geçemez. Tazminattan yalnızca damga vergisi kesilir; gelir vergisi uygulanmaz.

## Zamanaşımı ve arabuluculuk

2017 yılında yapılan değişiklikten sonra sona eren iş sözleşmelerinde kıdem tazminatı talebi beş yıllık zamanaşımına tabidir. Dava açmadan önce, işçi ile işveren arasındaki bu tür alacak uyuşmazlıklarında arabulucuya başvurmak zorunludur. Arabuluculukta anlaşma sağlanırsa son tutanak ilam niteliğinde belge sayılır.

## İşverenler için not

Fesih bildiriminin yazılı yapılması, fesih sebebinin açık ve kesin biçimde belirtilmesi ve ücret bordrolarının düzenli tutulması, olası bir uyuşmazlıkta işverenin ispat yükünü kolaylaştırır. Haklı fesih iddiasında bulunan işveren, bu iddiasını ispatla yükümlüdür.`,
  },
  {
    slug: "ev-sahibi-kiraciyi-hangi-durumlarda-tahliye-edebilir",
    title: "Ev Sahibi Kiracıyı Hangi Durumlarda Tahliye Edebilir?",
    excerpt:
      "İhtiyaç nedeniyle tahliye, tahliye taahhüdü, iki haklı ihtar ve on yıllık uzama süresi: Türk Borçlar Kanunu'na göre tahliye sebepleri.",
    date: "2026-08-28",
    category: "Kira Hukuku",
    serviceSlug: "gayrimenkul-ve-kira-hukuku",
    image: images.houseModel,
    body: `Konut ve çatılı işyeri kiralarında Türk Borçlar Kanunu kiracıyı korur. Kira sözleşmesinin süresi dolsa bile kiracı sözleşmeyi feshetmedikçe sözleşme aynı şartlarla bir yıl uzar. Kiraya verenin kiracıyı tahliye edebilmesi için kanunda sayılan sebeplerden birinin bulunması gerekir.

## 1. Kiraya verenin veya yakınlarının konut ihtiyacı

Kiraya veren; kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu kişiler için konut ya da işyeri ihtiyacı varsa tahliye davası açabilir (TBK m. 350). İhtiyacın gerçek, samimi ve sürekli olması gerekir. Belirli süreli sözleşmelerde dava, sözleşme süresinin bitiminden itibaren bir ay içinde açılmalıdır.

Bu sebeple tahliye edilen taşınmaz, haklı bir sebep olmadıkça üç yıl boyunca eski kiracıdan başkasına kiralanamaz.

## 2. Yeniden inşa veya esaslı onarım

Taşınmazın yeniden inşası, imarı ya da kullanımı imkansız hale getirecek esaslı bir onarım gerekiyorsa da tahliye davası açılabilir. Bu durumda da yapılacak işin zorunlu olması ve kiracının taşınmazda kalmasının işi imkansız kılması aranır.

## 3. Yeni malikin ihtiyacı

Kiralananı sonradan satın alan yeni malik, kendisi veya yakınları için ihtiyaç iddiasıyla tahliye isteyebilir (TBK m. 351). Bunun için taşınmazı edindiği tarihten itibaren bir ay içinde durumu kiracıya yazılı olarak bildirmesi ve edinme tarihinden itibaren altı ay sonra dava açması gerekir. Alternatif olarak sözleşme süresinin bitiminden itibaren bir ay içinde de dava açılabilir.

## 4. Yazılı tahliye taahhüdü

Kiracı, belirli bir tarihte taşınmazı boşaltacağını yazılı olarak taahhüt etmiş ve boşaltmamışsa kiraya veren, taahhüt edilen tarihten itibaren bir ay içinde tahliye davası açabilir veya icra takibi başlatabilir (TBK m. 352/1). Uygulamada taahhüdün kira sözleşmesiyle aynı gün imzalanması geçerliliği tartışmalı hale getirir; taahhüdün teslimden sonraki bir tarihte ve kiracının serbest iradesiyle verilmesi önemlidir.

## 5. İki haklı ihtar

Kiracı bir kira yılı içinde kira bedelini ödemediği için iki kez haklı olarak yazılı ihtarda bulunulmasına sebep olmuşsa, kiraya veren kira süresinin bitiminden itibaren bir ay içinde tahliye davası açabilir (TBK m. 352/2).

## 6. Kiracının aynı ilçede konutu olması

Kiracının veya birlikte yaşadığı eşinin aynı il veya ilçe sınırları içinde oturmaya elverişli bir konutu varsa ve kiraya veren bunu sözleşme kurulurken bilmiyorsa tahliye istenebilir (TBK m. 352/3).

## 7. On yıllık uzama süresinin dolması

Belirli süreli sözleşmelerde on yıllık uzama süresi, belirsiz süreli sözleşmelerde ise on yıllık kira süresi dolduktan sonra kiraya veren, herhangi bir sebep göstermeksizin sözleşmeyi sona erdirebilir (TBK m. 347). Bunun için izleyen her uzama yılının bitiminden en az üç ay önce yazılı bildirimde bulunulması gerekir.

## 8. Kira borcunun ödenmemesi (temerrüt)

Kira bedeli ödenmezse kiraya veren, en az otuz günlük süre vererek yazılı ihtarda bulunur ve bu süre içinde ödeme yapılmazsa sözleşmeyi feshedeceğini bildirir (TBK m. 315). Süre içinde ödeme yapılmazsa tahliye davası veya icra yoluyla tahliye yoluna gidilebilir.

## Arabuluculuk şartı

1 Eylül 2023'ten itibaren kira ilişkisinden doğan uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak zorunludur. Tahliye taahhüdüne veya kira borcunun ödenmemesine dayalı icra takipleri ise bu şartın dışındadır.

Tahliye süreçlerinde en sık yapılan hata, sürelerin kaçırılmasıdır. Kanunda öngörülen bir aylık süreler hak düşürücü niteliktedir ve kaçırıldığında dava ancak bir sonraki kira dönemi için açılabilir.`,
  },
  {
    slug: "mirasin-reddi-nasil-yapilir",
    title: "Mirasın Reddi: Borçlu Mirastan Nasıl Kurtulunur?",
    excerpt:
      "Borçlu bir mirasla karşılaşan mirasçılar için üç aylık ret süresi, hükmen ret davası ve ret hakkını ortadan kaldıran davranışlar.",
    date: "2026-08-18",
    category: "Miras Hukuku",
    serviceSlug: "miras-hukuku",
    image: images.bookshelf,
    body: `Türk hukukunda mirasçılar, mirasbırakanın ölümüyle birlikte terekeyi bir bütün olarak kazanır. Bu, yalnızca mal varlığının değil borçların da mirasçılara geçtiği anlamına gelir. Mirasçılar tereke borçlarından kişisel olarak ve müteselsilen sorumludur. Borçları varlığından fazla olan bir mirasla karşılaşan mirasçıların başvurabileceği en önemli yol, mirasın reddidir.

## Ret süresi: üç ay

Yasal mirasçılar mirası, mirasbırakanın ölümünü öğrendikleri tarihten itibaren üç ay içinde reddedebilir (TMK m. 606). Vasiyetname ile atanmış mirasçılar için süre, tasarrufun kendilerine resmen bildirildiği tarihte başlar. Bu süre içinde ret beyanında bulunmayan mirasçı mirası kayıtsız şartsız kazanmış sayılır.

Haklı sebeplerin varlığı halinde sulh hukuk mahkemesi bu süreyi uzatabilir veya yeni bir süre verebilir.

## Ret beyanı nasıl yapılır?

Ret beyanı, mirasbırakanın son yerleşim yerindeki sulh hukuk mahkemesine sözlü veya yazılı olarak yapılır. Beyanın kayıtsız ve şartsız olması gerekir; "şu borç ödenirse kabul ederim" gibi şarta bağlı bir ret geçerli değildir. Mahkeme ret beyanını tutanağa geçirir ve kayda alır.

## Hükmen ret: süre geçse de mümkün mü?

Mirasbırakanın ölüm tarihinde ödemeden aczi açıkça belli veya resmen tespit edilmişse miras reddedilmiş sayılır (TMK m. 605/2). Buna hükmen ret denir. Üç aylık süre geçmiş olsa bile, mirasbırakanın borçlarının varlığından fazla olduğu ispatlanarak mirasın hükmen reddedildiğinin tespiti için dava açılabilir. Uygulamada alacaklıların mirasçılar aleyhine başlattığı icra takiplerine karşı bu yol sıkça kullanılır.

## Ret hakkını ortadan kaldıran davranışlar

Ret süresi dolmadan önce bazı davranışlar mirasın kabul edildiği anlamına gelir ve ret hakkını düşürür (TMK m. 610):

- Terekeye ait işleri olağan yönetim sınırlarını aşarak yürütmek
- Tereke mallarını satmak, kendine mal etmek veya gizlemek
- Terekeye ait alacakları tahsil edip kendi ihtiyacı için kullanmak

Cenaze giderlerinin karşılanması veya terekenin korunmasına yönelik zorunlu işlemler kural olarak kabul sayılmaz. Ancak sınırın ince olduğu durumlarda, ret düşünen mirasçıların tereke mallarına dokunmadan önce hukuki destek almaları önerilir.

## Reddin sonuçları

Mirası reddeden mirasçının payı, mirasbırakan ondan önce ölmüş gibi onun altsoyuna geçer. Bu nedenle bir mirasçının reddi, çocuklarını ve torunlarını mirasçı konumuna getirebilir. Borçlu bir mirastan tamamen kurtulmak için ailenin sonraki kuşaklarının da ret beyanında bulunması gerekebilir.

En yakın yasal mirasçıların tamamı mirası reddederse miras, sulh mahkemesi tarafından iflas hükümlerine göre tasfiye edilir. Tasfiye sonunda borçlar ödendikten sonra artan bir değer kalırsa, bu değer mirası reddetmemiş gibi mirasçılara verilir.

## Sonuç

Mirasın reddi, kısa ve hak düşürücü bir süreye bağlı olduğu için ölümün ardından mirasbırakanın borç durumunun hızla araştırılması gerekir. Banka kayıtları, icra dosyaları ve vergi borçları bu araştırmanın ilk adımlarıdır.`,
  },
  {
    slug: "trafik-kazasi-deger-kaybi-ve-tazminat",
    title: "Trafik Kazasından Sonra Değer Kaybı ve Tazminat Başvurusu",
    excerpt:
      "Kaza sonrası hangi belgeler gerekir, sigortaya nasıl başvurulur, Sigorta Tahkim Komisyonu ne zaman devreye girer ve zamanaşımı süreleri.",
    date: "2026-08-06",
    category: "Tazminat Hukuku",
    serviceSlug: "trafik-kazasi-ve-tazminat",
    image: images.carCrash,
    body: `Trafik kazası geçiren araç onarılsa bile ikinci el piyasasında kazasız bir araca göre daha düşük değerle alıcı bulur. Bu fark, araç değer kaybı olarak adlandırılır ve kusurlu tarafın zorunlu mali sorumluluk (trafik) sigortasından talep edilebilir. Değer kaybının yanında onarım bedeli, ikame araç gideri ve yaralanma halinde tedavi giderleri gibi kalemler de tazminat konusu olabilir.

## Kaza anında yapılması gerekenler

- Can güvenliğini sağladıktan sonra olay yerinin ve araçların fotoğraflarını çekin.
- Taraflar anlaşıyorsa kaza tespit tutanağını eksiksiz doldurun; anlaşma yoksa veya yaralanma varsa polis ya da jandarmayı çağırın.
- Karşı tarafın ehliyet, ruhsat ve sigorta poliçe bilgilerini alın.
- Varsa tanıkların iletişim bilgilerini not edin.

Tutanaktaki kroki ve beyanlar, kusur oranının belirlenmesinde belirleyici olur. Kusur oranına itiraz edilmesi gereken durumlarda bu belgelerin doğru ve eksiksiz olması büyük önem taşır.

## Sigortaya başvuru zorunluluğu

Karayolları Trafik Kanunu'na göre, zorunlu trafik sigortası kapsamındaki talepler için dava açmadan veya tahkime gitmeden önce sigorta şirketine yazılı başvuru yapılması gerekir. Sigorta şirketi on beş gün içinde yanıt vermezse ya da başvuruyu kısmen veya tamamen reddederse, mağdur Sigorta Tahkim Komisyonu'na veya mahkemeye başvurabilir.

Başvuruda genellikle şu belgeler istenir:

- Kaza tespit tutanağı veya polis/jandarma raporu
- Araç ruhsatı ve sürücü belgesi fotokopisi
- Ekspertiz raporu ve onarım faturaları
- Kaza fotoğrafları
- Banka hesap (IBAN) bilgisi

## Değer kaybı nasıl belirlenir?

Değer kaybı; aracın yaşı, kilometresi, hasarın büyüklüğü, değişen ve boyanan parçalar ile aracın daha önce hasar kaydı bulunup bulunmadığı gibi etkenlere göre hesaplanır. Sigorta şirketlerinin yaptığı hesaplar ile bilirkişi raporlarında belirlenen tutarlar arasında önemli farklar olabilir. Bu nedenle sigorta şirketinin teklifini kabul etmeden önce hesaplamanın incelenmesi yararlı olur.

## Sigorta Tahkim Komisyonu mu, mahkeme mi?

Sigorta Tahkim Komisyonu, sigorta uyuşmazlıklarında mahkemeye alternatif olarak kurulmuş bir yoldur. Başvuru sonrası süreç genellikle mahkemeye göre daha kısa sürer. Hangi yolun seçileceği; talep tutarı, kusur tartışması ve delil durumu dikkate alınarak belirlenmelidir. Komisyona başvurulduktan sonra aynı talep için mahkemeye gidilemeyeceği unutulmamalıdır.

## Zamanaşımı

Trafik kazasından doğan tazminat talepleri, zararın ve tazminat yükümlüsünün öğrenildiği tarihten itibaren iki yıl, her halde kaza tarihinden itibaren on yıl içinde zamanaşımına uğrar (KTK m. 109). Kaza aynı zamanda ceza zamanaşımı daha uzun olan bir suç oluşturuyorsa, örneğin yaralanma veya ölüm varsa, o süre uygulanır.

## Yaralanmalı ve ölümlü kazalar

Yaralanmalı kazalarda tedavi giderleri, çalışma gücü kaybı (sürekli sakatlık) ve manevi tazminat; ölümlü kazalarda ise destekten yoksun kalma tazminatı ve cenaze giderleri gündeme gelir. Bu hesaplamalar aktüerya bilirkişisi raporuyla yapılır ve ayrıntılı bir hukuki inceleme gerektirir.`,
  },
  {
    slug: "odeme-emri-geldiginde-ne-yapmali",
    title: "Ödeme Emri Geldiğinde Ne Yapmalı? İtiraz Süreleri ve Yollar",
    excerpt:
      "İcra dairesinden ödeme emri alan borçlunun yedi ve beş günlük itiraz süreleri, imzaya itiraz, menfi tespit davası ve icra inkar tazminatı.",
    date: "2026-07-24",
    category: "İcra Hukuku",
    serviceSlug: "icra-ve-iflas-hukuku",
    image: images.taxDocs,
    body: `İcra dairesinden gelen bir ödeme emri, alacaklının sizin hakkınızda icra takibi başlattığını gösterir. Ödeme emrine karşı süresi içinde tepki verilmezse takip kesinleşir ve alacaklı haciz isteyebilir. Bu nedenle ödeme emrinin tebliğ alındığı gün, sürelerin başladığı gündür.

## Ödeme emrini dikkatle okuyun

Ödeme emrinde alacaklının kimliği, alacağın tutarı, faiz oranı, takibin dayanağı olan belge ve icra dairesinin dosya numarası yer alır. İlk olarak takibin türüne bakılmalıdır. İtiraz süresi ve yöntemi takibin türüne göre değişir.

## İlamsız takipte itiraz süresi: yedi gün

Genel haciz yoluyla ilamsız takiplerde borçlu, ödeme emrinin tebliğinden itibaren yedi gün içinde itiraz edebilir. İtiraz, takibin yapıldığı icra dairesine sözlü veya yazılı olarak yapılır. Borçlunun itirazında itiraz sebeplerini göstermesi gerekir.

Borçlu, takip dayanağı belgedeki imzanın kendisine ait olmadığını ileri sürecekse bunu ayrıca ve açıkça belirtmelidir. Aksi halde belge takip hukuku bakımından kabul edilmiş sayılır.

Süresinde yapılan itiraz takibi durdurur. Bu aşamadan sonra alacaklı, itirazın tebliğinden itibaren bir yıl içinde genel mahkemede itirazın iptali davası açabilir veya elindeki belge uygunsa icra mahkemesinden itirazın kaldırılmasını isteyebilir.

## Kambiyo senetlerine dayalı takipte süre: beş gün

Çek, bono (senet) veya poliçeye dayalı kambiyo takiplerinde süreler kısadır. Borçlu, ödeme emrinin tebliğinden itibaren beş gün içinde borca veya imzaya itirazını icra mahkemesine yapmalıdır. Kambiyo takiplerinde itiraz kural olarak takibi kendiliğinden durdurmaz; takibin durdurulması için icra mahkemesinden ayrıca karar alınması gerekir.

## İtiraz edilmezse ne olur?

Süresi içinde itiraz edilmeyen takip kesinleşir. Alacaklı bu aşamadan sonra borçlunun banka hesaplarına, maaşına, aracına veya taşınmazına haciz konulmasını talep edebilir. Maaş haczinde kural olarak ücretin dörtte birinden fazlası kesilemez; nafaka alacakları bu sınırın dışındadır.

## Borç yoksa: menfi tespit davası

Süre kaçırılmış olsa bile borçlu olmadığını düşünen kişi, borçlu olmadığının tespiti için menfi tespit davası açabilir. Takip kesinleştikten sonra ödeme yapılmışsa, borç olmadığı halde ödenen paranın geri alınması için ödeme tarihinden itibaren bir yıl içinde istirdat davası açılabilir.

## Haksız itirazın bedeli: icra inkar tazminatı

İtirazın iptali veya kaldırılması sürecinde borçlunun itirazı haksız bulunursa, mahkeme alacaklının talebi üzerine borçlunun alacağın yüzde yirmisinden aşağı olmamak üzere icra inkar tazminatı ödemesine karar verebilir. Tersi durumda, alacaklının takibi haksız ve kötü niyetli bulunursa bu kez alacaklı aleyhine tazminata hükmedilebilir. Bu nedenle itiraz kararı, borcun gerçek durumu değerlendirilerek verilmelidir.

## Sonuç

Ödeme emrine karşı en büyük risk, sürelerin kısa olmasıdır. Tebliğ tarihi not edilmeli, takibin türü belirlenmeli ve itiraz sebepleri süresi içinde, doğru merciye bildirilmelidir.`,
  },
  {
    slug: "ifade-verirken-haklariniz",
    title: "Emniyette veya Savcılıkta İfade Verirken Haklarınız",
    excerpt:
      "Susma hakkı, müdafi yardımı, yakınlara haber verme ve yasak sorgu yöntemleri: Ceza Muhakemesi Kanunu'na göre şüphelinin hakları.",
    date: "2026-07-10",
    category: "Ceza Hukuku",
    serviceSlug: "ceza-hukuku",
    image: images.gavelDark,
    body: `Bir soruşturma kapsamında şüpheli olarak ifadeye çağrılmak ya da gözaltına alınmak, çoğu kişi için ilk kez karşılaşılan ve kaygı verici bir durumdur. Ceza Muhakemesi Kanunu (CMK), ifade alma ve sorgu sırasında şüpheliye bir dizi güvence tanır. Bu hakları bilmek, sürecin sağlıklı ilerlemesi açısından büyük önem taşır.

## İfade öncesinde size bildirilmesi gerekenler

CMK'nın 147. maddesine göre ifade alınmadan önce şüpheliye şu hususlar bildirilmelidir:

- Hakkındaki suçlamanın ne olduğu
- Müdafi seçme ve onun hukuki yardımından yararlanma hakkı; müdafi seçecek durumda değilse ve isterse baro tarafından bir müdafi görevlendirileceği
- Yakalanan kişinin yakınlarından istediğine yakalandığının derhal bildirileceği
- Yüklenen suç hakkında açıklamada bulunmamanın (susma hakkının) kanuni hakkı olduğu
- Şüpheden kurtulmak için somut delillerin toplanmasını isteyebileceği ve lehine olan hususları ileri sürebileceği

## Susma hakkı

Şüpheli, kimliğine ilişkin sorular dışında hiçbir soruya cevap vermek zorunda değildir. Susma hakkının kullanılması aleyhe delil olarak yorumlanamaz. Özellikle dosyanın içeriği bilinmeden verilen ayrıntılı açıklamalar ileride aleyhe kullanılabileceğinden, bu hak bilinçli şekilde değerlendirilmelidir.

## Müdafi yardımı

Şüpheli, soruşturmanın her aşamasında bir veya birden fazla müdafinin yardımından yararlanabilir. Müdafi, şüphelinin ifadesi sırasında hazır bulunabilir ve gözaltındaki şüpheliyle her zaman ve görüşmelerin başkaları tarafından duyulamayacağı bir ortamda görüşebilir.

Bazı durumlarda müdafi görevlendirilmesi zorunludur. Şüphelinin çocuk olması, kendini savunamayacak derecede malul, sağır veya dilsiz olması ya da alt sınırı beş yıldan fazla hapis cezasını gerektiren bir suçtan soruşturma yürütülmesi hallerinde, şüpheli istemese bile baro tarafından müdafi atanır.

## Kolluk ifadesinin sınırları

Müdafi hazır bulunmaksızın kolluk tarafından alınan ifade, şüpheli veya sanık tarafından hakim ya da mahkeme önünde doğrulanmadıkça hükme esas alınamaz (CMK m. 148/4). Bu güvence, kolluk aşamasında avukat olmadan verilen ifadelerin tek başına mahkumiyete dayanak yapılmasını engeller.

## Yasak sorgu yöntemleri

İfade, şüphelinin özgür iradesine dayanmalıdır. Kötü davranma, işkence, zorla ilaç verme, yorma, aldatma, cebir veya tehdit uygulama gibi iradeyi bozan yöntemler yasaktır. Kanuna aykırı olarak vaat edilmemiş bir menfaat vaat edilmesi de yasaktır. Bu yöntemlerle elde edilen ifadeler, şüpheli rıza gösterse bile delil olarak kullanılamaz.

## Gözaltı süresi

Yakalanan kişi, yakalama yerine en yakın hakime gönderilmek için gerekli süre hariç, en geç yirmi dört saat içinde hakim önüne çıkarılmalıdır. Toplu olarak işlenen suçlarda Cumhuriyet savcısı, bu süreyi kanunda belirtilen sınırlar içinde uzatabilir. Gözaltı kararına ve süresinin uzatılmasına karşı sulh ceza hakimliğine başvurulabilir.

## İfade tutanağını imzalamadan önce

İfade tutanağı imzalanmadan önce dikkatle okunmalıdır. Söylenenlerle tutanağa geçenler arasında fark varsa düzeltilmesi istenmeli, düzeltme yapılmazsa bu durum tutanağa not düşülmelidir. İmzalanan tutanak, soruşturmanın ilerleyen aşamalarında en önemli belgelerden biri haline gelir.`,
  },
];

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const readingMinutes = (body: string) =>
  Math.max(1, Math.round(body.split(/\s+/).length / 200));
