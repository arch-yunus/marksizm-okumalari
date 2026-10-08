/**
 * Marksizm Okumaları - İnteraktif Bilim ve Araştırma Portalı
 * Modern Vanilla JS Application
 */

// Embedded Fallback Data (Ensures smooth offline / file:// protocol operation)
const APP_DATA = {
  docs: [
    {
      id: "musluman-bakis-acisiyla-marksizm",
      baslik: "Müslüman Bakış Açısıyla Marksizm: Giriş ve Temel İlkeler",
      dosya: "docs/musluman-bakis-acisiyla-marksizm.md",
      kategori: "Temel Çerçeve",
      okuma_suresi: "12 dk",
      ikon: "🧭",
      ozet: "İslam düşüncesi ile Marksizm arasındaki temel epistemolojik, ontolojik ve iktisadi ayrışmalar ve ortak teşhis noktaları."
    },
    {
      id: "das-kapital-ozeti-ve-rehberi",
      baslik: "Das Kapital Cilt 1-2-3 Kapsamlı Özeti ve Tahlili",
      dosya: "docs/das-kapital-ozeti-ve-rehberi.md",
      kategori: "Ekonomi Politik",
      okuma_suresi: "25 dk",
      ikon: "📐",
      ozet: "Kapitalist üretim tarzı, meta, artı-değer, sermaye birikimi ve kâr oranlarının düşme eğilimi yasasının matematiksel ve kuramsal analizi."
    },
    {
      id: "islam-iktisadi-ve-kapitalizm-marksizm-karsilastirmasi",
      baslik: "İslam İktisadı, Kapitalizm ve Marksizm Mukayesesi",
      dosya: "docs/islam-iktisadi-ve-kapitalizm-marksizm-karsilastirmasi.md",
      kategori: "İslam İktisadı",
      okuma_suresi: "18 dk",
      ikon: "⚖️",
      ozet: "Emanet mülkiyet (istihlaf), faizsiz finans, beytülmal, zekat ve infak nizamının kapitalist ve sosyalist modellerle karşılaştırılması."
    },
    {
      id: "diyalektik-ve-tarihsel-materyalizm-rehberi",
      baslik: "Diyalektik ve Tarihsel Materyalizm Rehberi",
      dosya: "docs/diyalektik-ve-tarihsel-materyalizm-rehberi.md",
      kategori: "Felsefe & Metot",
      okuma_suresi: "20 dk",
      ikon: "🔄",
      ozet: "Maddenin diyalektiği, nicelikten niteliğe sıçrama, zıtların birliği ve Kur'an'ın Sünnetullah ve Mizan kavramlarıyla mukayesesi."
    },
    {
      id: "yabancilasma-kurami-ve-insan-dogasi",
      baslik: "Yabancılaşma Kuramı, İnsan Doğası ve Fıtrat",
      dosya: "docs/yabancilasma-kurami-ve-insan-dogasi.md",
      kategori: "Felsefe & Antropoloji",
      okuma_suresi: "15 dk",
      ikon: "🧬",
      ozet: "Marx'ın 4 yabancılaşma boyutu, Erich Fromm'un 'Olmak vs Sahip Olmak' ayrımı ve İslam'ın Fıtrat & Gaflet teşhisleri."
    },
    {
      id: "marksizmdeki-hakikatler-ve-isabetli-teshisler",
      baslik: "Marksizmdeki Mantıklı Hakikatler ve İsabetli Teşhisler",
      dosya: "docs/marksizmdeki-hakikatler-ve-isabetli-teshisler.md",
      kategori: "Eleştirel Analiz",
      okuma_suresi: "16 dk",
      ikon: "💎",
      ozet: "Marksist tahlilin kapitalizmin çelişkileri, meta putlaştırması ve finansal sömürüye dair getirdiği isabetli gözlemler antolojisi."
    },
    {
      id: "kavramlar-sozlugu",
      baslik: "Marksizm ve İslam İktisadı Kavramlar Sözlüğü",
      dosya: "docs/kavramlar-sozlugu.md",
      kategori: "Referans & Sözlük",
      okuma_suresi: "22 dk",
      ikon: "📖",
      ozet: "Artı-değerden yabancılaşmaya, istihlaftan kenz yasağına 60'tan fazla temel kavramın akademik ve İslami açıklamaları."
    },
    {
      id: "tarihsel-kronoloji",
      baslik: "Tarihsel Kronoloji ve Dönüm Noktaları (1818 - Günümüz)",
      dosya: "docs/tarihsel-kronoloji.md",
      kategori: "Tarih & Kronoloji",
      okuma_suresi: "15 dk",
      ikon: "⏱️",
      ozet: "Komünist Manifesto'dan Bolşevik Devrimi'ne, Şeriati'den SSCB'nin dağılışına ve günümüz krizlerine tarihsel seyir."
    },
    {
      id: "ekoller-ve-akimlar",
      baslik: "Marksist Ekoller, Akımlar ve Müslüman Mütefekkirler",
      dosya: "docs/ekoller-ve-akimlar.md",
      kategori: "Ekoller & Düşünürler",
      okuma_suresi: "20 dk",
      ikon: "🗺️",
      ozet: "Klasik Marksizm, Frankfurt Okulu, Analitik Marksizm, Gramsci ve Şeriati, İkbal, Garaudy gibi öncü şahsiyetler."
    },
    {
      id: "tarihsel-uygulamalar-ve-reel-sosyalizm-bilancosu",
      baslik: "Reel Sosyalizm Uygulamaları ve Tarihsel Bilanço",
      dosya: "docs/tarihsel-uygulamalar-ve-reel-sosyalizm-bilancosu.md",
      kategori: "Tarih & Bilanço",
      okuma_suresi: "22 dk",
      ikon: "🌍",
      ozet: "SSCB, Çin, Doğu Bloku, Küba deneyimleri; bürokratik elit (Nomenklatura), gulaglar ve ekonomik iflasın anatomisi."
    },
    {
      id: "kuresellesme-emperyalizm-ve-post-kolonyalizm",
      baslik: "Küreselleşme, Emperyalizm ve Post-Kolonyalizm",
      dosya: "docs/kuresellesme-emperyalizm-ve-post-kolonyalizm.md",
      kategori: "Jeopolitik & Kolonyalizm",
      okuma_suresi: "16 dk",
      ikon: "🌐",
      ozet: "Lenin, Luxemburg, Samir Amin ve Malik bin Nebi'nin 'Kabiliyet-i İstimar' tezi ile Oryantalizm eleştirileri."
    },
    {
      id: "yapay-zeka-otomasyon-ve-emegin-gelecegi",
      baslik: "Yapay Zeka, Otomasyon ve Emeğin Geleceği",
      dosya: "docs/yapay-zeka-otomasyon-ve-emegin-gelecegi.md",
      kategori: "Çağdaş Tartışmalar",
      okuma_suresi: "15 dk",
      ikon: "🤖",
      ozet: "Platform kapitalizmi, gözetim kapitalizmi, yapay zekanın artı-değer üretimi ve İslam'ın insan onuru (keramet) perspektifi."
    },
    {
      id: "metafizik-felsefesi-ve-varlik-kurami",
      baslik: "Metafizik Felsefesi, Ontoloji ve Bilincin Hakikati",
      dosya: "docs/metafizik-felsefesi-ve-varlik-kurami.md",
      kategori: "Metafizik & Ontoloji",
      okuma_suresi: "18 dk",
      ikon: "🌌",
      ozet: "Kaba materyalizmin çıkmazları, kuantum ontolojisi, bilincin gayri-maddi mahiyeti ve Tevhidî varlık mertebeleri."
    },
    {
      id: "istihbarat-metafizik-ve-psikolojik-harp",
      baslik: "İstihbarat Teşkilatları, Bilişsel Harp ve Metafizik Manipülasyon",
      dosya: "docs/istihbarat-metafizik-ve-psikolojik-harp.md",
      kategori: "Strateji & Harp",
      okuma_suresi: "20 dk",
      ikon: "👁️",
      ozet: "MK-Ultra, Stargate Projesi, zihin yönlendirme operasyonları ve modern kitle manipülasyon teknikleri tahlili."
    },
    {
      id: "tevhid-adalet-ve-kuresel-somuru-elestirisi",
      baslik: "Tevhid, Adalet ve Küresel Sömürü Eleştirisi",
      dosya: "docs/tevhid-adalet-ve-kuresel-somuru-elestirisi.md",
      kategori: "Sosyal Adalet",
      okuma_suresi: "16 dk",
      ikon: "⚖️",
      ozet: "Küresel finans oligarşisi, faiz sarmalı, mazlum coğrafyalar ve İslam'ın evrensel adalet beyannamesi."
    },
    {
      id: "turkiye-marksizm-tarihi",
      baslik: "Türkiye'de Marksizm ve Sol Düşüncenin Tarihsel Serüveni",
      dosya: "docs/turkiye-marksizm-tarihi.md",
      kategori: "Türkiye Tarihi",
      okuma_suresi: "18 dk",
      ikon: "🇹🇷",
      ozet: "Osmanlı son döneminden İştirakçi Hilmi'ye, TKP'den 68 Kuşağı'na, İdris Küçükömer'den İslamcı-Sol diyaloglarına Türkiye serüveni."
    },
    {
      id: "calisma-sorulari-ve-tartisma-konulari",
      baslik: "30 Kritik Çalışma Sorusu ve Müzakere Konusu",
      dosya: "docs/calisma-sorulari-ve-tartisma-konulari.md",
      kategori: "Müzakere & Tezler",
      okuma_suresi: "20 dk",
      ikon: "❓",
      ozet: "Lisansüstü seminerler ve araştırma kulüpleri için felsefi, iktisadi ve sosyolojik tez tartışma soruları."
    },
    {
      id: "interaktif-calisma-plani-ve-mufredat",
      baslik: "12 Haftalık İlim ve Araştırma Müfredatı",
      dosya: "docs/interaktif-calisma-plani-ve-mufredat.md",
      kategori: "Müfredat & Rehber",
      okuma_suresi: "10 dk",
      ikon: "🎓",
      ozet: "Başlangıçtan ileri düzeye 4 kademeli haftalık çalışma takvimi, kazanımlar ve okuma listeleri."
    }
  ],
  quotes: [
    {
      muellif: "Hz. Muhammed (s.a.v.)",
      unvan: "İslam Peygamberi",
      soz: "İşçinin ücretini, alın teri kurumadan önce veriniz.",
      kategori: "Sosyal Adalet"
    },
    {
      muellif: "Hz. Ali (r.a.)",
      unvan: "4. İslam Halifesi",
      soz: "Bir yerde bir yoksul açsa, mutlaka bir zenginin israfı ve haksız kazancı yüzündendir.",
      kategori: "Adalet & İnfak"
    },
    {
      muellif: "Karl Marx",
      unvan: "Das Kapital Yazarı",
      soz: "Sermaye, tepeden tırnağa her gözeneğinden kan ve pislik damlayarak dünyaya gelir.",
      kategori: "Sermaye Eleştirisi"
    },
    {
      muellif: "Ali Şeriati",
      unvan: "Sosyolog & Mütefekkir",
      soz: "Tevhid sadece bir inanç değil; sınıfsız, sömürüsüz ve kula kulluğun bittiği bir dünya nizamıdır.",
      kategori: "Tevhid & Özgürlük"
    },
    {
      muellif: "Muhammed İkbal",
      unvan: "Şair & İslam Filozofu",
      soz: "Batı'nın parlak medeniyetinde ruh yoktur; Doğu ise kendi ruhunu unutmuştur. Kurtuluş Tevhid'in diriltici soluğundadır.",
      kategori: "Medeniyet Eleştirisi"
    },
    {
      muellif: "Roger Garaudy",
      unvan: "Filozof & Düşünür",
      soz: "Marksizm kapitalizmin teşhisinde haklıydı; fakat insan ruhunun derinliğini ve Yaratan'la bağını yok sayarak bocaladı.",
      kategori: "Felsefi Değerlendirme"
    },
    {
      muellif: "Nurettin Topçu",
      unvan: "İslam Ahlakçısı",
      soz: "İslam sosyalizmi değil; İslam bizzat adaletin, alın terinin ve merhametin kaynağıdır. İsyanımız ahlaksız kazancadır.",
      kategori: "Ahlak & İktisat"
    },
    {
      muellif: "Sezai Karakoç",
      unvan: "Diriliş Mütefekkiri",
      soz: "Kapitalizm de komünizm de aynı materyalist gövdenin iki ayrı koludur. İnsanlığın tek hakiki dirilişi İslam medeniyetindedir.",
      kategori: "Diriliş Felsefesi"
    },
    {
      muellif: "İsmet Özel",
      unvan: "Şair & Mütefekkir",
      soz: "Müslümanlar kapitalizmin şartlarına intibak ettikçe Müslümanlıklarından ödün verirler.",
      kategori: "Mücadele & Tavır"
    }
  ],
  concepts: [
    {
      id: "arti-deger",
      terim: "Artı-Değer (Mehrwert)",
      kategori: "Ekonomi Politik",
      marksist_tanim: "İşçinin kendi geçimi için gerekli olan emek zamanının ötesinde çalışarak ürettiği ve kapitalist tarafından karşılığı ödenmeden temellük edilen değer fazlası.",
      islami_tashih: "İslam iktisadında emeğin karşılığının eksik verilmesi ve çalışanın zafiyetinden yararlanılarak hak ettiği refahtan mahrum bırakılması gasptır ve kul hakkı ihlalidir (Gabin-i Fahiş).",
      anahtar_kavramlar: ["Emek-Değer Kuramı", "Sömürü Oranı", "Gabin", "Kul Hakkı"]
    },
    {
      id: "yabancilasma",
      terim: "Yabancılaşma (Entfremdung)",
      kategori: "Felsefe & Antropoloji",
      marksist_tanim: "Kapitalist üretim tarzında işçinin ürettiği ürüne, üretim sürecine, kendi insani türsel özüne (Gattungswesen) ve diğer insanlara yabancılaşması durumu.",
      islami_tashih: "İslam'da yabancılaşmanın kökeni insanın Yaratan'ını unutması (Nisyan ve Gaflet) ve fıtratından uzaklaşarak nefsin ve eşyanın kulu haline gelmesidir.",
      anahtar_kavramlar: ["Fıtrat", "Gaflet", "Türsel Öz", "Meta İllüzyonu"]
    },
    {
      id: "meta-fetisizmi",
      terim: "Meta Fetişizmi (Warenfetischismus)",
      kategori: "Felsefe & Sosyoloji",
      marksist_tanim: "İnsanlar arasındaki toplumsal emek ilişkilerinin, metalar (mallar ve para) arasındaki nesnel ilişkiler ve şeylerin gizemli bir büyüsü gibi görünmesi yanılsaması.",
      islami_tashih: "Kur'an terminolojisinde bu durum 'Heva ve hevesi ilah edinme' (Casiye, 23) ve parayı putlaştırma (Şirk-i Hafi) halidir.",
      anahtar_kavramlar: ["Şirk", "Dünyevileşme", "Tüketim Kültürü", "Reifikasyon"]
    },
    {
      id: "emanet-mulkiyet",
      terim: "Emanet Mülkiyet (İstihlaf)",
      kategori: "İslam İktisadı",
      marksist_tanim: "Marksizm özel mülkiyeti sömürünün kaynağı görüp kolektifleştirmeyi savunurken, liberalizm mülkiyeti mutlak bireysel hak sayar.",
      islami_tashih: "Mülkün mutlak sahibi Allah'tır ('Lillahi mâ fi's-semâvâti ve mâ fi'l-ard'). İnsan emanetçidir (Halife); mülkiyet zekat ve infakla sınırlandırılmıştır.",
      anahtar_kavramlar: ["İstihlaf", "Mülk Allah'ındır", "İnfak", "Zekat"]
    },
    {
      id: "riba-ve-faiz",
      terim: "Riba (Faiz) ve Mali Asalaklık",
      kategori: "Ekonomi Politik",
      marksist_tanim: "Finans kapitalin emeksiz ve risksiz biçimde artı-değere el koyarak borç köleliği yaratması mekanizması.",
      islami_tashih: "İslam ribayı kesin olarak haram kılmış (Bakara, 279), servetin sadece zenginler arasında dönen bir tahakküm aracına dönüşmesini yasaklamıştır (Haşr, 7).",
      anahtar_kavramlar: ["Riba", "Finans-Kapital", "Tekelleşme", "Emeksiz Kazanç"]
    }
  ],
  matrix: [
    {
      eksen: "Ontoloji (Varlık Kuramı)",
      marksizm: "Diyalektik Materyalizm; var olan her şey maddedir, metafizik yanılsamadır.",
      kapitalizm: "Pragmatist / Faydacı materyalizm; somut fayda ve maddi zenginlik esastır.",
      islam: "Tevhid; gayb ve şehadet alemlerinin birliği, mutlak yaratıcı Allah'tır."
    },
    {
      eksen: "Mülkiyet Anlayışı",
      marksizm: "Üretim araçlarında özel mülkiyetin mutlak ilgası, kolektif devlet mülkiyeti.",
      kapitalizm: "Bireysel ve sınırsız özel mülkiyet kutsallığı (Bırakınız yapsınlar).",
      islam: "Emanet Mülkiyet (İstihlaf); mülk Allah'ındır, kamu yararı ve infakla sınırlıdır."
    },
    {
      eksen: "Sermaye ve Faiz (Riba)",
      marksizm: "Sermaye birikimi artı-değer gaspına dayanır; faiz finansal asalaklıktır.",
      kapitalizm: "Faiz sermayenin meşru getirisidir ve piyasanın temel lokomotifidir.",
      islam: "Faiz (Riba) kesinlikle haramdır; servetin tekelleşmesi (Kenz) yasaktır."
    },
    {
      eksen: "Emek ve Alın Teri",
      marksizm: "Değerin tek kaynağı emektir; yabancılaşma devrimle aşılacaktır.",
      kapitalizm: "Emek piyasada alınıp satılan alelade bir üretim faktörüdür (Maliyet).",
      islam: "Emek kutsaldır, ibadettir; ücret teri kurumadan ve hakkıyla verilmelidir."
    },
    {
      eksen: "İnsan Tabiatı ve Ruh",
      marksizm: "Toplumsal ilişkilerin toplamı; insan üretim şartlarının ürünüdür.",
      kapitalizm: "Rasyonel çıkar peşinde koşan bencil birey (Homo Oeconomicus).",
      islam: "Fıtrat üzere yaratılmış, ruh ve beden bütünlüğüne sahip ahsen-i takvim."
    },
    {
      eksen: "Toplumsal Değişim Dinamiği",
      marksizm: "Uzlaşmaz sınıf çatışması, şiddetli devrim ve proletarya diktatörlüğü.",
      kapitalizm: "Görünmez el, piyasa rekabeti ve sermaye birikimi.",
      islam: "Tevhid, adalet, emr-i bi'l-maruf, uhuvvet (kardeşlik) ve infak ahlakı."
    }
  ],
  timeline: [
    {
      yil: 1818,
      olay: "Karl Marx'ın Doğumu",
      detay: "Almanya Trier'de doğdu; Hegel diyalektiği ve sol Hegelcilik ile tanıştı.",
      kategori: "Biyografi"
    },
    {
      yil: 1848,
      olay: "Komünist Manifesto",
      detay: "Marx ve Engels'in 'Bütün ülkelerin işçileri, birleşin!' şiarıyla kaleme aldığı bildiri.",
      kategori: "Siyaset"
    },
    {
      yil: 1867,
      olay: "Das Kapital Cilt 1",
      detay: "Kapitalist üretim tarzının ve artı-değer teorisinin anıtsal ekonomi politik tahlili.",
      kategori: "İktisat"
    },
    {
      yil: 1917,
      olay: "Ekim Devrimi (SSCB)",
      detay: "Lenin önderliğindeki Bolşeviklerin iktidara gelişi ve ilk sosyalist devlet deneyimi.",
      kategori: "Devrim"
    },
    {
      yil: 1969,
      olay: "Ali Şeriati ve Hüseyniye Dersleri",
      detay: "Şeriati'nin Tevhidî adalet, sınıf analizi ve Batı yanılgıları üzerine çığır açan dersleri.",
      kategori: "İslam Düşüncesi"
    },
    {
      yil: 1982,
      olay: "Roger Garaudy'nin Müslüman Oluşu",
      detay: "Fransız Komünist Partisi baş kuramcısının 'İslam'ın Vadettikleri' eseriyle Tevhid'e yönelişi.",
      kategori: "İslam Düşüncesi"
    },
    {
      yil: 1991,
      olay: "Sovyetler Birliği'nin Dağılması",
      detay: "Reel sosyalizmin bürokratik çöküşü ve küresel neo-liberal dalga.",
      kategori: "Tarih"
    },
    {
      yil: 2024,
      olay: "Yapay Zeka ve Algoritmik Sömürü",
      detay: "Büyük teknoloji tekellerinin gözetim kapitalizmi ve emeğin otomasyonla dönüşümü.",
      kategori: "Çağdaş Tartışmalar"
    }
  ],
  quizzes: [
    {
      id: 1,
      seviye: "Başlangıç",
      kategori: "Ekonomi Politik",
      soru: "Marx'a göre kapitalistin işçiye ödediği ücret ile işçinin ürettiği toplam değer arasındaki farka ne ad verilir?",
      secenekler: [
        "Amortisman Payı",
        "Artı-Değer (Mehrwert)",
        "Sabit Sermaye",
        "Dolaşım Masrafı"
      ],
      dogru: 1,
      aciklama: "Artı-değer, işçinin kendi geçimliği için gerekli asgari süreyi aşan fazladan çalışma süresinde ürettiği ve kapitalistin el koyduğu değerdir. İslam iktisadında bu durum kul hakkı gaspıdır."
    },
    {
      id: 2,
      seviye: "Başlangıç",
      kategori: "İslam İktisadı & Tevhid",
      soru: "İslam iktisadi dünya görüşünde mülkiyetin kaynağı ve mahiyeti hakkında hangisi doğrudur?",
      secenekler: [
        "Bireyin mutlak ve sınırsız özel mülkiyeti esastır (Liberalizm)",
        "Tüm üretim araçları zorunlu olarak devlete aittir (Ortodoks Sosyalizm)",
        "Mülk mutlak olarak Allah'ındır; insan yeryüzünde bir emanetçidir (İstihlaf)",
        "Mülkiyet kavramı tümüyle reddedilmeli ve mülk ortak havuzda eritilmelidir"
      ],
      dogru: 2,
      aciklama: "İslam'da mülk mutlak manada Allah'a aittir ('Lillahi mâ fi's-semâvâti ve mâ fi'l-ard'). İnsan emanetçidir; mülkiyet zekat, infak ve kamu yararı ile sınırlandırılmıştır."
    },
    {
      id: 3,
      seviye: "Orta",
      kategori: "Felsefe & Sosyoloji",
      soru: "Metaların sadece kullanım değerleriyle değil, sanki gizemli ve bağımsız bir güce sahipmiş gibi algılanmasına Marx ne ad vermiştir?",
      secenekler: [
        "Kültürel Hegemonya",
        "Meta Fetişizmi",
        "Proletarya Diktatörlüğü",
        "Tarihsel İdealizm"
      ],
      dogru: 1,
      aciklama: "Meta fetişizmi, insanlar arasındaki toplumsal emek ilişkilerinin metalar arasındaki nesnel ilişkiler gibi görünmesidir."
    },
    {
      id: 4,
      seviye: "Orta",
      kategori: "Tarih & Ekoller",
      soru: "Fransız Komünist Partisi'nin baş kuramcısı iken Marksizmin çıkmazlarını görüp İslam'ı seçen ve 'İslam'ın Vadettikleri' eserini yazan düşünür kimdir?",
      secenekler: [
        "Louis Althusser",
        "Roger Garaudy",
        "Antonio Gramsci",
        "Jean-Paul Sartre"
      ],
      dogru: 1,
      aciklama: "Roger Garaudy (Raca Carudi), Batı'nın materyalist krizini tahlil ederek Tevhid inancını benimsemiştir."
    }
  ]
};

// Application State
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentCategoryFilter = 'all';
let currentSpeechUtterance = null;
let isSpeaking = false;
let currentQuizIndex = 0;
let quizScore = 0;
let answeredQuizzes = {};

// Markdown Renderer Initialization
const md = window.markdownit ? window.markdownit({ html: true, linkify: true, typographer: true }) : null;

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMetrics();
  initDailyQuote();
  renderDocumentsGrid();
  renderMatrixTable();
  renderTimeline();
  renderConceptsDictionary();
  renderStudyPlan();
  initQuiz();
  setupEventListeners();
  setupKeyboardShortcuts();
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === 'dark' ? '☀️' : (currentTheme === 'light' ? '📜' : '🌙');
  }
}

function toggleTheme() {
  if (currentTheme === 'dark') currentTheme = 'light';
  else if (currentTheme === 'light') currentTheme = 'sepia';
  else currentTheme = 'dark';

  localStorage.setItem('theme', currentTheme);
  initTheme();
}

// Metrics Counter
function initMetrics() {
  document.getElementById('stat-docs-count').innerText = APP_DATA.docs.length;
  document.getElementById('stat-concepts-count').innerText = '60+';
  document.getElementById('stat-hours-count').innerText = '5.5 saat';
  document.getElementById('stat-modules-count').innerText = '18 Özel Monografi';
}

// Daily Reflection Quote
function initDailyQuote() {
  const quoteEl = document.getElementById('daily-quote-text');
  const authorEl = document.getElementById('daily-quote-author');
  const tagEl = document.getElementById('daily-quote-tag');
  if (!quoteEl || !authorEl) return;

  const randIndex = Math.floor(Math.random() * APP_DATA.quotes.length);
  const item = APP_DATA.quotes[randIndex];

  quoteEl.innerText = `"${item.soz}"`;
  authorEl.innerText = `— ${item.muellif} (${item.unvan})`;
  if (tagEl) tagEl.innerText = item.kategori;
}

// Render Document Cards Grid
function renderDocumentsGrid() {
  const container = document.getElementById('docs-grid-container');
  if (!container) return;

  const filtered = currentCategoryFilter === 'all' 
    ? APP_DATA.docs 
    : APP_DATA.docs.filter(d => d.kategori === currentCategoryFilter);

  container.innerHTML = filtered.map(doc => `
    <div class="doc-card" onclick="openDocumentReader('${doc.id}')">
      <div class="doc-card-top">
        <div class="doc-icon">${doc.ikon}</div>
        <span class="doc-badge">${doc.kategori}</span>
      </div>
      <h3 class="doc-title">${doc.baslik}</h3>
      <p class="doc-summary">${doc.ozet}</p>
      <div class="doc-footer">
        <span class="doc-read-time">⏱️ ${doc.okuma_suresi}</span>
        <span class="doc-action-btn">İncele & Oku &rarr;</span>
      </div>
    </div>
  `).join('');
}

// Category Filter Tabs
function filterCategory(cat, element) {
  currentCategoryFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');
  renderDocumentsGrid();
}

// Open Document Reader
async function openDocumentReader(docId) {
  const doc = APP_DATA.docs.find(d => d.id === docId);
  if (!doc) return;

  const modal = document.getElementById('reader-modal');
  const titleEl = document.getElementById('reader-doc-title');
  const bodyEl = document.getElementById('reader-doc-body');
  const progressEl = document.getElementById('reader-progress-bar');

  titleEl.innerText = doc.baslik;
  bodyEl.innerHTML = `<div style="text-align:center; padding: 3rem;"><p>Doküman yükleniyor...</p></div>`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  try {
    const response = await fetch(doc.dosya);
    if (response.ok) {
      const text = await response.text();
      bodyEl.innerHTML = md ? md.render(text) : `<pre>${text}</pre>`;
    } else {
      throw new Error("HTTP error");
    }
  } catch (err) {
    // Fallback display
    bodyEl.innerHTML = `
      <h1>${doc.ikon} ${doc.baslik}</h1>
      <p><em>Kategori: ${doc.kategori} | Tahmini Okuma Süresi: ${doc.okuma_suresi}</em></p>
      <hr />
      <blockquote>${doc.ozet}</blockquote>
      <p>Bu monografiye ait tam metin dokümanı depodaki <code>${doc.dosya}</code> konumunda yer almaktadır. Markdown dosyası doğrudan incelenebilir.</p>
    `;
  }

  // Reading progress tracking
  modal.onscroll = () => {
    const totalHeight = modal.scrollHeight - modal.clientHeight;
    const progress = (modal.scrollTop / totalHeight) * 100;
    progressEl.style.width = `${progress}%`;
  };
}

function closeDocumentReader() {
  const modal = document.getElementById('reader-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  stopSpeech();
}

// Text-To-Speech (Sesli Dinle)
function toggleSpeech() {
  if (isSpeaking) {
    stopSpeech();
    return;
  }

  const bodyEl = document.getElementById('reader-doc-body');
  if (!bodyEl) return;

  const textToRead = bodyEl.innerText.slice(0, 4000); // 4000 chars chunk
  if (!('speechSynthesis' in window)) {
    alert("Tarayıcınız sesli okuma özelliğini (Web Speech API) desteklemiyor.");
    return;
  }

  window.speechSynthesis.cancel();
  currentSpeechUtterance = new SpeechSynthesisUtterance(textToRead);
  currentSpeechUtterance.lang = 'tr-TR';
  currentSpeechUtterance.rate = 1.0;

  const ttsBtn = document.getElementById('tts-toggle-btn');
  if (ttsBtn) ttsBtn.innerText = '⏹️ Durdur';

  currentSpeechUtterance.onend = () => {
    isSpeaking = false;
    if (ttsBtn) ttsBtn.innerText = '🔊 Sesli Dinle';
  };

  window.speechSynthesis.speak(currentSpeechUtterance);
  isSpeaking = true;
}

function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  const ttsBtn = document.getElementById('tts-toggle-btn');
  if (ttsBtn) ttsBtn.innerText = '🔊 Sesli Dinle';
}

// Render Comparison Matrix Table
function renderMatrixTable() {
  const tbody = document.getElementById('matrix-tbody');
  if (!tbody) return;

  tbody.innerHTML = APP_DATA.matrix.map(row => `
    <tr>
      <td><strong>${row.eksen}</strong></td>
      <td class="matrix-tag-marx">${row.marksizm}</td>
      <td class="matrix-tag-cap">${row.kapitalizm}</td>
      <td class="matrix-tag-islam"><strong>${row.islam}</strong></td>
    </tr>
  `).join('');
}

// Render Timeline
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = APP_DATA.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-year">${item.yil} • ${item.kategori}</div>
        <h4 class="timeline-title">${item.olay}</h4>
        <p class="timeline-desc">${item.detay}</p>
      </div>
    </div>
  `).join('');
}

// Render Concepts Dictionary
function renderConceptsDictionary() {
  const container = document.getElementById('concepts-list-container');
  if (!container) return;

  container.innerHTML = APP_DATA.concepts.map(item => `
    <div class="doc-card" style="cursor: default;">
      <div class="doc-card-top">
        <span class="doc-badge" style="background: var(--accent-emerald-glow); color: var(--accent-emerald);">${item.kategori}</span>
      </div>
      <h3 class="doc-title" style="color: var(--accent-emerald);">${item.terim}</h3>
      <p class="doc-summary" style="margin-bottom: 0.75rem;"><strong>Marx/Batı:</strong> ${item.marksist_tanim}</p>
      <div style="background: var(--bg-tertiary); padding: 0.75rem; border-radius: 8px; font-size: 0.88rem; margin-bottom: 0.75rem;">
        <strong>İslami Tashih & Tevhid:</strong> ${item.islami_tashih}
      </div>
      <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
        ${item.anahtar_kavramlar.map(k => `<span style="font-size: 0.75rem; padding: 2px 6px; background: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color);">${k}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Render Study Plan & Tracker
function renderStudyPlan() {
  const container = document.getElementById('curriculum-container');
  if (!container) return;

  const curriculumWeeks = [
    { hafta: 1, baslik: "Giriş ve Temel Kavramlar", desc: "Müslüman Bakış Açısıyla Marksizm monografisi ve temel kavramlar sözlüğü okumaları." },
    { hafta: 2, baslik: "Tarihsel Materyalizm ve Sünnetullah", desc: "Diyalektik ve Tarihsel Materyalizm rehberi ve kronoloji tahlili." },
    { hafta: 3, baslik: "Yabancılaşma ve Fıtrat Ontolojisi", desc: "4 boyutlu yabancılaşma, Erich Fromm ve Fıtrat/Gaflet mukayesesi." },
    { hafta: 4, baslik: "Das Kapital'in Anatomisi", desc: "Kullanım değeri, değişim değeri, meta fetişizmi ve artı-değer formülleri." },
    { hafta: 5, baslik: "Faiz (Riba), Sermaye ve İslam İktisadı", desc: "Emanet mülkiyet, beytülmal, infak ve zekat mekanizmaları." },
    { hafta: 6, baslik: "Doğru Teşhisler ve İsabetli Analizler", desc: "Marksizmdeki mantıklı hakikatler ve kapitalizm eleştirisi." },
    { hafta: 7, baslik: "Düşünce Ekolleri ve Eleştirel Teori", desc: "Frankfurt Okulu, Gramsci, Althusser ve çağdaş akımlar." },
    { hafta: 8, baslik: "20. Yüzyıl Reel Sosyalizm Bilançosu", desc: "SSCB, Çin, Doğu Bloku tecrübeleri ve Nomenklatura bürokrasisinin iflası." },
    { hafta: 9, baslik: "Emperyalizm ve Malik bin Nebi", desc: "Kabiliyet-i İstimar tezi, Samir Amin ve Oryantalizm eleştirisi." },
    { hafta: 10, baslik: "Metafizik, Ontoloji ve Bilinç", desc: "Kaba materyalizmin çıkmazları ve kuantum ontolojisi." },
    { hafta: 11, baslik: "Yapay Zeka ve Algoritmik Sömürü", desc: "Platform kapitalizmi, gözetim kapitalizmi ve emeğin geleceği." },
    { hafta: 12, baslik: "Sentez ve 30 Kritik Müzakere Tezi", desc: "Tez soruları, lisansüstü tartışma başlıkları ve genel değerlendirme." }
  ];

  const savedProgress = JSON.parse(localStorage.getItem('study_progress') || '{}');

  container.innerHTML = curriculumWeeks.map(w => {
    const isChecked = !!savedProgress[`week_${w.hafta}`];
    return `
      <div class="stat-card" style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 0.75rem;">
        <input type="checkbox" id="check-week-${w.hafta}" ${isChecked ? 'checked' : ''} onchange="toggleStudyWeek(${w.hafta})" style="width: 20px; height: 20px; margin-top: 4px; accent-color: var(--accent-emerald); cursor: pointer;" />
        <label for="check-week-${w.hafta}" style="cursor: pointer; flex: 1;">
          <h4 style="font-size: 1rem; color: ${isChecked ? 'var(--accent-emerald)' : 'var(--text-primary)'}; font-weight: 700;">Hafta ${w.hafta}: ${w.baslik}</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">${w.desc}</p>
        </label>
      </div>
    `;
  }).join('');

  updateStudyProgressBadge();
}

function toggleStudyWeek(weekNum) {
  const savedProgress = JSON.parse(localStorage.getItem('study_progress') || '{}');
  savedProgress[`week_${weekNum}`] = !savedProgress[`week_${weekNum}`];
  localStorage.setItem('study_progress', JSON.stringify(savedProgress));
  renderStudyPlan();
}

function updateStudyProgressBadge() {
  const savedProgress = JSON.parse(localStorage.getItem('study_progress') || '{}');
  const completed = Object.values(savedProgress).filter(Boolean).length;
  const percent = Math.round((completed / 12) * 100);
  const badge = document.getElementById('study-progress-percent');
  if (badge) badge.innerText = `%${percent} Tamamlandı (${completed}/12 Hafta)`;
}

// Interactive Quiz System
function initQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  answeredQuizzes = {};
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById('quiz-question-box');
  if (!container) return;

  const quiz = APP_DATA.quizzes[currentQuizIndex];
  if (!quiz) {
    // Show results
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🏆</div>
        <h3 style="font-size: 1.5rem; color: var(--text-primary); margin-bottom: 0.5rem;">Tebrikler! Değerlendirmeyi Tamamladınız</h3>
        <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
          Toplam <strong>${APP_DATA.quizzes.length}</strong> sorudan <strong>${quizScore}</strong> doğru cevap verdiniz!
        </p>
        <button class="btn-primary" onclick="initQuiz()">🔄 Testi Yeniden Başlat</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="quiz-header">
      <span class="quiz-badge">Soru ${currentQuizIndex + 1} / ${APP_DATA.quizzes.length} • ${quiz.seviye}</span>
      <span style="font-size: 0.85rem; color: var(--text-muted);">${quiz.kategori}</span>
    </div>
    <div class="quiz-question-text">${quiz.soru}</div>
    <div class="quiz-options">
      ${quiz.secenekler.map((opt, idx) => `
        <button class="quiz-option-btn" id="quiz-opt-${idx}" onclick="answerQuiz(${idx})">
          ${String.fromCharCode(65 + idx)}) ${opt}
        </button>
      `).join('')}
    </div>
    <div class="quiz-explanation" id="quiz-explanation-box">
      <strong>Açıklama:</strong> ${quiz.aciklama}
    </div>
    <div class="quiz-footer" id="quiz-footer-box" style="display: none;">
      <button class="btn-primary" onclick="nextQuizQuestion()">Sonraki Soru &rarr;</button>
    </div>
  `;
}

function answerQuiz(selectedIndex) {
  const quiz = APP_DATA.quizzes[currentQuizIndex];
  if (answeredQuizzes[quiz.id]) return; // already answered

  answeredQuizzes[quiz.id] = true;
  const isCorrect = selectedIndex === quiz.dogru;
  if (isCorrect) quizScore++;

  // Style buttons
  quiz.secenekler.forEach((_, idx) => {
    const btn = document.getElementById(`quiz-opt-${idx}`);
    if (!btn) return;
    btn.disabled = true;
    if (idx === quiz.dogru) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex) {
      btn.classList.add('wrong');
    }
  });

  const expBox = document.getElementById('quiz-explanation-box');
  if (expBox) expBox.style.display = 'block';

  const footerBox = document.getElementById('quiz-footer-box');
  if (footerBox) footerBox.style.display = 'flex';
}

function nextQuizQuestion() {
  currentQuizIndex++;
  renderQuizQuestion();
}

// Search Modal Functionality
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  modal.classList.add('active');
  const input = document.getElementById('search-modal-input');
  if (input) {
    input.value = '';
    input.focus();
    renderSearchResults('');
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  modal.classList.remove('active');
}

function handleSearchInput(query) {
  renderSearchResults(query.trim().toLowerCase());
}

function renderSearchResults(q) {
  const container = document.getElementById('search-modal-results');
  if (!container) return;

  if (!q) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 1.5rem;">Aramak istediğiniz kavramı, makale başlığını veya konuyu yazın...</p>`;
    return;
  }

  const matchedDocs = APP_DATA.docs.filter(d => 
    d.baslik.toLowerCase().includes(q) || 
    d.ozet.toLowerCase().includes(q) || 
    d.kategori.toLowerCase().includes(q)
  );

  const matchedConcepts = APP_DATA.concepts.filter(c => 
    c.terim.toLowerCase().includes(q) || 
    c.marksist_tanim.toLowerCase().includes(q) || 
    c.islami_tashih.toLowerCase().includes(q)
  );

  if (matchedDocs.length === 0 && matchedConcepts.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 1.5rem;">"<strong>${q}</strong>" ile eşleşen bir sonuç bulunamadı.</p>`;
    return;
  }

  let html = '';
  if (matchedDocs.length > 0) {
    html += `<div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-emerald); text-transform: uppercase; margin-bottom: 0.5rem;">Monografiler (${matchedDocs.length})</div>`;
    html += matchedDocs.map(d => `
      <div class="search-result-item" onclick="closeSearchModal(); openDocumentReader('${d.id}')">
        <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">${d.ikon} ${d.baslik}</div>
        <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.2rem;">${d.ozet}</div>
      </div>
    `).join('');
  }

  if (matchedConcepts.length > 0) {
    html += `<div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; margin-top: 1rem; margin-bottom: 0.5rem;">Kavramlar (${matchedConcepts.length})</div>`;
    html += matchedConcepts.map(c => `
      <div class="search-result-item" onclick="closeSearchModal(); window.location.hash = 'kavramlar';">
        <div style="font-weight: 700; color: var(--accent-cyan); font-size: 0.95rem;">📖 ${c.terim}</div>
        <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.2rem;">${c.marksist_tanim}</div>
      </div>
    `).join('');
  }

  container.innerHTML = html;
}

// Keyboard shortcuts (Ctrl+K or / to search, Esc to close)
function setupKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === 'Escape') {
      closeSearchModal();
      closeDocumentReader();
    }
  });
}

// Event Listeners
function setupEventListeners() {
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);
  document.getElementById('search-trigger-btn')?.addEventListener('click', openSearchModal);
}
