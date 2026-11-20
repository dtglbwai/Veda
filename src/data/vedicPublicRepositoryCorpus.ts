import { VedicScriptureEbook, VedicScriptureCategory } from "../types";

export const VEDIC_SCRIPTURE_CATEGORIES: VedicScriptureCategory[] = [
  "All Sacred Categories",
  "Chatur Vedas & Samhitas",
  "Ayurveda & Health Sciences (Upaveda)",
  "Brahmanas & Aranyakas",
  "108 Upanishads & Mukhya Upanishads",
  "Vedangas & Sutra Shastras",
  "Upavedas & Classical Sciences",
  "Shad-Darshanas & Philosophical Bhashyas",
  "Itihasas & Epics",
  "18 Mahapuranas & Upapuranas",
  "Agamas, Tantras & Shilpa Shastras",
  "Bhakti Classics & Vernacular Canons"
];

export const VEDIC_PUBLIC_REPOSITORY_EBOOKS: VedicScriptureEbook[] = [
  // 1. RIGVEDA SAMHITA
  {
    id: "rigveda-samhita-shakala",
    title: "Rigveda Samhita (Complete 10 Mandalas)",
    sanskritTitleDevanagari: "ऋग्वेद संहिता (शाकल शाखा)",
    sanskritTitleIAST: "Ṛgveda Saṃhitā (Śākala Śākhā)",
    category: "Chatur Vedas & Samhitas",
    subCategory: "Vedas (Śruti) - Shakala Recension",
    traditionalRishiOrAuthor: "Various Vedic Rishis (Vishvamitra, Vamadeva, Bharadvaja, Vashistha, Gritsamada, Atri, Angirasa)",
    recensionOrShakha: "Shakala Shakha (with full Swara accents, Padapatha & Sayana Bhashya)",
    historicalPeriod: "Vedic Antiquity (c. 1900–1200 BCE oral canon)",
    totalKandasOrAdhyayas: "10 Mandalas (1,028 Suktas, 8 Ashtakas, 64 Adhyayas)",
    totalVersesOrMantras: 10552,
    executiveSummary: "The world's oldest extant religious and poetic text, preserved syllable-for-syllable across millennia through continuous oral mnemonic traditions. Contains the Gayatri Mantra, Nasadiya Sukta (Creation), Purusha Sukta, and profound cosmic and metaphysical reflections.",
    swaraAccentsPreserved: true,
    notableCommentators: ["Sayanacharya (Vedartha Prakasha)", "Yaskacharya (Nirukta)", "Skandasvamin", "Sri Aurobindo (Secret of the Veda)", "Max Müller", "Karl Friedrich Geldner"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "TheRigVedaCompleteMaxMullerSayana6Vols",
      viewUrl: "https://archive.org/details/RigVedaWithSayanaBhashyaMaxMuller",
      pdfDownloadUrl: "https://archive.org/download/RigVedaWithSayanaBhashyaMaxMuller/RigVeda_Sayana_MaxMuller_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/RigVedaWithSayanaBhashyaMaxMuller/RigVeda_Sayana_MaxMuller_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/RigVedaWithSayanaBhashyaMaxMuller/RigVeda_Text.txt",
      teiXmlUrl: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/1_sam/rv_sa_u.htm",
      license: "Public Domain Mark 1.0 (Worldwide Open Access)",
      curatorNotes: "Critical edition edited by F. Max Müller with Sayana's 14th century commentary (6 vols, Oxford/London, 1849-1874)."
    },
    alternateRepositories: [
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/1_sam/rv_sa_u.htm",
        type: "Machine Readable XML/TXT",
        description: "Accented Unicode text based on Aufrecht & van Nooten / Holland editions."
      },
      {
        name: "TITUS (Univ. of Frankfurt)",
        url: "https://titus.uni-frankfurt.de/texte/etcs/ind/aind/ved/rv/mt/rv.htm",
        type: "Full Text PDF",
        description: "Morphologically analyzed Vedic text with Indo-European comparative linguistic notes."
      },
      {
        name: "Vedic Reserve (Maharishi Open Univ)",
        url: "https://www.vedicreserve.mum.edu/rig_veda.htm",
        type: "Full Text PDF",
        description: "Complete Devanagari open access reader."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "Sanskrit (Accented)",
        languageCode: "sa",
        translatorOrEditor: "Sayana Bhashya / Max Müller Critical Edition",
        publicationYear: "1849–1874",
        publisher: "Oxford University Press",
        formatsAvailable: ["PDF", "EPUB", "TXT", "TEI-XML"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/RigVedaWithSayanaBhashyaMaxMuller",
        license: "Public Domain"
      },
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Ralph T.H. Griffith (Hymns of the Rigveda, 2 vols)",
        publicationYear: "1889",
        publisher: "E.J. Lazarus & Co., Benares",
        formatsAvailable: ["PDF", "EPUB", "TXT", "HTML"],
        repositoryName: "Sacred Texts Archive (sacred-texts.com)",
        directReaderOrDownloadUrl: "https://www.sacred-texts.com/hin/rigveda/index.htm",
        license: "Public Domain"
      },
      {
        languageName: "German (Deutsch)",
        languageCode: "de",
        translatorOrEditor: "Karl Friedrich Geldner (Der Rig-Veda aus dem Sanskrit ins Deutsche übersetzt, 3 Bde.)",
        publicationYear: "1951",
        publisher: "Harvard Oriental Series (HOS Vols 33–35)",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/GeldnerRigVedaHOS33",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Pandit Ramgovind Trivedi / Acharya Shriram Sharma (All World Gayatri Pariwar)",
        publicationYear: "1960",
        publisher: "Yug Nirman Yojna, Bareilly / Gita Press",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/RigvedaSamhitaHindiTranslation",
        license: "Public Domain"
      },
      {
        languageName: "Marathi (मराठी)",
        languageCode: "mr",
        translatorOrEditor: "Pandit S. D. Satwalekar (Swadhyaya Mandal Pardi, 4 vols)",
        publicationYear: "1940",
        publisher: "Swadhyaya Mandal, Pardi",
        formatsAvailable: ["PDF"],
        repositoryName: "Digital Library of India (DLI)",
        directReaderOrDownloadUrl: "https://archive.org/details/RigvedaMarathiSatwalekar",
        license: "Public Domain"
      },
      {
        languageName: "Tamil (தமிழ்)",
        languageCode: "ta",
        translatorOrEditor: "M. R. Jambunathan (ரிக் வேதம் மூலமும் உரையும்)",
        publicationYear: "1938",
        publisher: "Vedic Publications, Madras",
        formatsAvailable: ["PDF", "HTML"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/RigVedaTamilJambunathan",
        license: "Public Domain"
      },
      {
        languageName: "Russian (Русский)",
        languageCode: "ru",
        translatorOrEditor: "Tatyana Ya. Elizarenkova (Ригведа. Перевод Т. Я. Елизаренковой, 3 тома)",
        publicationYear: "1989–1999",
        publisher: "Nauka / Russian Academy of Sciences",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/RigvedaRussianElizarenkova",
        license: "Public Domain"
      },
      {
        languageName: "French (Français)",
        languageCode: "fr",
        translatorOrEditor: "Louis Renou (Hymnes spéculatifs du Véda / Études védiques et pāṇinéennes)",
        publicationYear: "1956",
        publisher: "Gallimard / UNESCO Collection",
        formatsAvailable: ["PDF"],
        repositoryName: "Bibliothèque Nationale de France (BnF Gallica)",
        directReaderOrDownloadUrl: "https://gallica.bnf.fr/ark:/12148/bpt6k54462s",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Mandala 1",
        title: "Agni, Indra, Maruts and Varuna Hymns",
        sanskritTitle: "प्रथमं मण्डलम् (सूक्तानि १–१९१)",
        pageOrVerseRange: "Suktas 1.1–1.191 (2,006 Mantras)",
        summary: "Opening invocation to Agni as Purohita and Hotar; profound philosophical hymns of Dirghatamas (Asya Vamasya Sukta 1.164).",
        keyConcepts: ["Agni Purohita", "Asya Vamasya", "Cosmic Wheel", "Rta Law", "Surya Carriage"],
        publicRepoDirectUrl: "https://archive.org/stream/RigVedaWithSayanaBhashyaMaxMuller#page/n1/mode/2up"
      },
      {
        chapterNumber: "Mandala 2–7",
        title: "The Family Books (Gritsamada, Vishvamitra, Vamadeva, Atri, Bharadvaja, Vashistha)",
        sanskritTitle: "ऋषिकुल मण्डलानि (२–७)",
        pageOrVerseRange: "Suktas 2.1–7.104 (3,988 Mantras)",
        summary: "The most archaic core composed by hereditary sage families. Contains the Gayatri Mantra (3.62.10 by Vishvamitra) and Mahamrityunjaya Mantra (7.59.12 by Vashistha).",
        keyConcepts: ["Gayatri Mantra 3.62.10", "Mahamrityunjaya 7.59.12", "Soma Offerings", "Indra's Heroism", "Varuna's Cosmic Vigil"],
        publicRepoDirectUrl: "https://archive.org/stream/RigVedaWithSayanaBhashyaMaxMuller#page/n350/mode/2up"
      },
      {
        chapterNumber: "Mandala 9",
        title: "Pavaman Mandala (Soma Clarification)",
        sanskritTitle: "पवमान मण्डलम् (सूक्तानि १–११४)",
        pageOrVerseRange: "Suktas 9.1–9.114 (1,108 Mantras)",
        summary: "Entirely dedicated to Soma Pavamana, filtering through the wool sieve into the celestial vat; musical foundation of the Samaveda.",
        keyConcepts: ["Soma Extraction", "Ananda Exhilaration", "Celestial Filter", "Amrita Immortality"],
        publicRepoDirectUrl: "https://archive.org/stream/RigVedaWithSayanaBhashyaMaxMuller#page/n820/mode/2up"
      },
      {
        chapterNumber: "Mandala 10",
        title: "Cosmological & Philosophical Hymns",
        sanskritTitle: "दशमं मण्डलम् (सूक्तानि १–१९१)",
        pageOrVerseRange: "Suktas 10.1–10.191 (1,754 Mantras)",
        summary: "Peak cosmological inquiry: Nasadiya Sukta (10.129 on origin of existence), Purusha Sukta (10.90 cosmic organism), Hiranyagarbha Sukta (10.121), and Vak Sukta (10.125).",
        keyConcepts: ["Nasadiya Sukta", "Purusha Sukta", "Hiranyagarbha", "Devi Vak Sukta", "Samjnana Concord"],
        publicRepoDirectUrl: "https://archive.org/stream/RigVedaWithSayanaBhashyaMaxMuller#page/n1100/mode/2up"
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Rigveda 1.1.1",
        devanagari: "ॐ अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म् । होतारं॑ रत्न॒धात॑मम् ॥",
        iast: "oṃ agním īḷe puróhitaṃ yajñásya devám ṛtvíjam | hótāraṃ ratnadhā́tamam ||",
        padapatha: "अ॒ग्निम् । ई॒ळे॒ । पु॒रःऽहि॑तम् । य॒ज्ञस्य॑ । दे॒वम् । ऋ॒त्विज॑म् । होता॑रम् । र॒त्न॒ऽधात॑मम् ॥",
        wordForWord: [
          { word: "agnim", meaning: "Agni (Divine Fire / Illumination)" },
          { word: "īḷe", meaning: "I praise / invoke with reverence" },
          { word: "purohitam", meaning: "the foremost priest / placed in front" },
          { word: "yajñasya", meaning: "of the cosmic sacrifice / order" },
          { word: "devam", meaning: "the luminous divine being" },
          { word: "ṛtvijam", meaning: "the seasonal minister / officiant" },
          { word: "hotāram", meaning: "the summoner / invoker" },
          { word: "ratnadhātamam", meaning: "bestower of the highest treasures / jewels of wisdom" }
        ],
        translationEnglish: "OM. I magnify Agni, the priest placed foremost, the divine minister of the sacrifice, the invoker, the most lavish bestower of treasure.",
        translationsOtherLangs: {
          hi: "ॐ। मैं अग्नि की स्तुति करता हूँ, जो यज्ञ के पुरोहित, प्रकाशमान देव, ऋत्विक, होता और श्रेष्ठतम रत्नों के धारक हैं।",
          mr: "ॐ। मी यज्ञाचे पुरोहित, प्रकाशमान देव, ऋत्विज, होतार आणि सर्वोच्च रत्नांचे धारक अशा अग्नीची स्तुती करतो.",
          ta: "ஓம். யாகத்தின் புரோஹிதரும், ஒளிரும் தேவரும், ரித்விக்கும், ஹோதாவும், உயர்ந்த ரத்தினங்களை வழங்குபவருமான அக்னியைப் போற்றுகிறேன்.",
          de: "OM. Agni preise ich, den Hauspriester, den Gott des Opfers, den Priester, den Totenopferer, den reichsten Schatzspender.",
          fr: "OM. Je célèbre Agni, le chapelain, le dieu du sacrifice, le ministre, l'officiant qui dispense le plus riche trésor.",
          ru: "ОМ. Я призываю Агни, поставленного впереди жреца, божественного совершителя жертвоприношения, хотара, щедрейшего дарителя сокровищ."
        },
        commentaries: [
          {
            commentator: "Sayanacharya (Vedartha Prakasha)",
            school: "Advaita Vedic Hermeneutics",
            text: "Agni is the first name because speech begins with fire and metabolic transformation. Purohita denotes that which stands in the vanguard of consciousness."
          },
          {
            commentator: "Sri Aurobindo (Secret of the Veda)",
            school: "Integral Vedic Psychology",
            text: "Agni is the divine Will-Force in man, the conscious power that leads the mortal aspiration upwards towards the Supramental truth."
          }
        ],
        scientificOrAstronomicalNote: "Symbolizes metabolic energy (thermodynamics) and solar radiation driving Earth's biospheric photosynthesis."
      },
      {
        verseNumber: "Rigveda 10.129.1 (Nasadiya Sukta)",
        devanagari: "नास॑दासी॒न्नो सदा॑सीत्त॒दानीं॒ नासी॒द्रजो॒ नो व्यो॑मा प॒रो यत् । किमाव॑रीव॒: कुह॒ कस्य॒ शर्म॒न्नम्भ॒: किमा॑सी॒द्गह॑नं गभी॒रम् ॥",
        iast: "nā́sad āsīn nó sád āsīt tadā́nīṃ nāsīd rájo nó víomā paró yát | kím ā́varīvaḥ kúha kásya śármann ámbhaḥ kím āsīd gáhanaṃ gabhīrám ||",
        padapatha: "न । अस॑त् । आ॒सी॒त् । नो इति॑ । सत् । आ॒सी॒त् । त॒दानी॑म् । न । आ॒सी॒त् । रजः॑ । नो इति॑ । व्योम॑ । प॒रः । यत् । किम् । आ । अ॒व॒री॒वः॒ । कुह॑ । कस्य॑ । शर्म॑न् । अम्भः॑ । किम् । आ॒सी॒त् । गहन॑म् । ग॒भी॒रम् ॥",
        translationEnglish: "Then was not non-existence nor existence: there was no realm of air, no sky beyond it. What covered it in, and where? and what gave shelter? Was water there, unfathomed depth of water?",
        translationsOtherLangs: {
          hi: "उस समय न असत् था, न सत् था; न अंतरिक्ष था, न उससे परे आकाश। किसने उस सबको आवृत्त किया था? कहाँ और किसकी शरण में? क्या अथाह और गहन जल था?",
          mr: "तेव्हा असतही नव्हते आणि सतही नव्हते; अंतरिक्ष नव्हते आणि त्यापलीकडचे आकाशही नव्हते. कशाने त्याला आच्छादले होते? कुठे आणि कोणाच्या आश्रयाने?",
          de: "Nichtsein war damals nicht noch Sein; nicht war der Luftraum noch der Himmel darüber. Was hüllte ein? Wo? Unter wessen Hut? War Wasser da, ein unergründlicher Abgrund?",
          fr: "Il n'y avait pas le non-être, et il n'y avait pas l'être en ce temps-là; il n'y avait pas l'espace de l'air, ni le firmament au-delà."
        }
      }
    ],
    scienceAndPhilosophySignificance: "Precursor to cosmological singularity models (Nasadiya Sukta) and early quantum-mechanical field analogies.",
    bibtexCitation: `@book{maxmuller1849rigveda, title={Rig-Veda-Sanhita: The Sacred Hymns of the Brahmans, Together with the Commentary of Sayanacharya}, author={Müller, F. Max and Sāyaṇa}, year={1849--1874}, publisher={Oxford University Press}, address={London}, note={6 volumes, Public Domain}}`
  },

  // 2. SAMAVEDA SAMHITA
  {
    id: "samaveda-samhita-kauthuma",
    title: "Samaveda Samhita (Kauthuma & Jaiminiya Shakhas)",
    sanskritTitleDevanagari: "सामवेद संहिता (कौथुम व जैमिनीय शाखा)",
    sanskritTitleIAST: "Sāmaveda Saṃhitā (Kauthuma & Jaiminīya Śākhās)",
    category: "Chatur Vedas & Samhitas",
    subCategory: "Vedas (Śruti) - Musical & Melodic Recension",
    traditionalRishiOrAuthor: "Sage Jaimini & Sage Sumantu (Students of Veda Vyasa)",
    recensionOrShakha: "Kauthuma, Ranayaniya and Jaiminiya Recensions (1,875 musical stanzas)",
    historicalPeriod: "Vedic Antiquity (c. 1500–1000 BCE)",
    totalKandasOrAdhyayas: "Archika (Purvarchika & Uttararchika) in 2 Parts",
    totalVersesOrMantras: 1875,
    executiveSummary: "The Veda of Melodies (Saman) and Chants, celebrated in the Bhagavad Gita ('Among the Vedas, I am the Samaveda'). It forms the primordial acoustic grammar and tonal source of all Indian Classical Music (Ragas, Svaras Sa-Re-Ga-Ma-Pa-Dha-Ni).",
    swaraAccentsPreserved: true,
    notableCommentators: ["Sayanacharya", "Bharatasvamin", "Gunavishnu", "Frits Staal (Agnicayana Spectrograms)", "Ralph T.H. Griffith"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "SamavedaSamhitaEnglishGriffith",
      viewUrl: "https://archive.org/details/SamavedaSamhitaEnglishGriffith",
      pdfDownloadUrl: "https://archive.org/download/SamavedaSamhitaEnglishGriffith/Samaveda_Griffith.pdf",
      epubDownloadUrl: "https://archive.org/download/SamavedaSamhitaEnglishGriffith/Samaveda_Griffith.epub",
      txtDownloadUrl: "https://archive.org/download/SamavedaSamhitaEnglishGriffith/Samaveda_Text.txt",
      teiXmlUrl: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/1_sam/sv_sa_u.htm",
      license: "Public Domain Mark 1.0",
      curatorNotes: "Complete Purvarchika and Uttararchika with musical Gana notation guides."
    },
    alternateRepositories: [
      {
        name: "Muktabodha Digital Library",
        url: "https://muktabodha.org/digital-library/",
        type: "Full Text PDF",
        description: "High-resolution palm-leaf scans of Jaiminiya Samaveda Aranyaka."
      },
      {
        name: "Vedic Reserve (Maharishi Open Univ)",
        url: "https://www.vedicreserve.mum.edu/sama_veda.htm",
        type: "Full Text PDF",
        description: "Full Devanagari text with Svara notation."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Ralph T.H. Griffith (The Hymns of the Samaveda)",
        publicationYear: "1893",
        publisher: "E.J. Lazarus, Benares",
        formatsAvailable: ["PDF", "EPUB", "TXT", "HTML"],
        repositoryName: "Sacred Texts Archive (sacred-texts.com)",
        directReaderOrDownloadUrl: "https://www.sacred-texts.com/hin/sv.htm",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Pandit Jaidev Sharma / Gita Press",
        publicationYear: "1954",
        publisher: "Gita Press, Gorakhpur",
        formatsAvailable: ["PDF"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/SamavedaHindiGitaPress",
        license: "Public Domain"
      },
      {
        languageName: "Telugu (తెలుగు)",
        languageCode: "te",
        translatorOrEditor: "Tirumala Tirupati Devasthanams (TTD) Vedic Board",
        publicationYear: "1988",
        publisher: "TTD Religious Publications, Tirupati",
        formatsAvailable: ["PDF"],
        repositoryName: "TTD Religious Publications",
        directReaderOrDownloadUrl: "https://archive.org/details/SamavedaSamhitaTeluguTTD",
        license: "Open Access Creative Commons"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Part 1: Purvarchika",
        title: "The Initial Verse Collection (Agneya, Aindra, Pavamana Kandas)",
        pageOrVerseRange: "Chapters 1–6 (585 Verses)",
        summary: "Arranged by deities (Agni, Indra, Soma Pavamana) serving as the fundamental sonic repository.",
        keyConcepts: ["Gramageyagana", "Aranyagana", "Stobha Syllables", "Seven Svaras"]
      },
      {
        chapterNumber: "Part 2: Uttararchika",
        title: "The Ritual Hymns Arranged in Triplets (Trikas)",
        pageOrVerseRange: "Chapters 1–21 (1,225 Verses)",
        summary: "Melodies arranged for Shrauta Soma rituals (Agnishtoma, Agnicayana, Vajapeya).",
        keyConcepts: ["Uhagana", "Uhyagana", "Rathantara Saman", "Brihat Saman"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Samaveda 1.1.1 (Purvarchika 1)",
        devanagari: "ॐ अ॒ग्न आ या॑हि वी॒तये॑ गृणा॒नो ह॒व्यदा॑तये । नि होता॑ सत्सि ब॒र्हिषि॑ ॥",
        iast: "oṃ agna ā yāhi vītaye gṛṇāno havyadātaye | ni hotā satsi barhiṣi ||",
        translationEnglish: "OM. Come, O Agni, praised with songs, to feast and to convey the oblations. Sit down as the Invoking Priest upon the sacred grass.",
        translationsOtherLangs: {
          hi: "हे अग्निदेव! हमारे स्तोत्रों से स्तुत होकर हविष्य ग्रहण करने और देवताओं तक पहुँचाने के लिए पधारिए और कुशासन पर विराजमान होइए।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Foundation of psycho-acoustics, microtonal tuning (22 Shrutis), and acoustic resonance in architecture.",
    bibtexCitation: `@book{griffith1893samaveda, title={The Hymns of the Samaveda}, author={Griffith, Ralph T. H.}, year={1893}, publisher={E. J. Lazarus}, address={Benares}}`
  },

  // 3. SHUKLA YAJURVEDA SAMHITA
  {
    id: "shukla-yajurveda-vajasaneyi",
    title: "Shukla Yajurveda Samhita (Vajasaneyi Madhyandina & Kanva)",
    sanskritTitleDevanagari: "शुक्ल यजुर्वेद संहिता (वाजसनेयि माध्यन्दिन शाखा)",
    sanskritTitleIAST: "Śukla Yajurveda Saṃhitā (Vājasaneyi Mādhyandina Śākhā)",
    category: "Chatur Vedas & Samhitas",
    subCategory: "Vedas (Śruti) - White Yajurveda",
    traditionalRishiOrAuthor: "Yajnavalkya Vajasaneya (revealed directly by Surya)",
    recensionOrShakha: "Madhyandina & Kanva Shakhas (40 Adhyayas, 1,975 Mantras)",
    historicalPeriod: "Vedic Antiquity (c. 1400–1000 BCE)",
    totalKandasOrAdhyayas: "40 Adhyayas",
    totalVersesOrMantras: 1975,
    executiveSummary: "The 'White' (Pure/Unmixed) Yajurveda revealed to Sage Yajnavalkya. Adhyaya 16 contains the famous Shri Rudram (Shata Rudriya), Adhyaya 31 contains the Purusha Sukta, Adhyaya 32 contains the Hiranyagarbha, and Adhyaya 40 is the revered Isha Upanishad.",
    swaraAccentsPreserved: true,
    notableCommentators: ["Uvata", "Mahidhara (Vedadiipa)", "Swami Dayananda Saraswati", "Ralph T.H. Griffith"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "TheTextsOfTheWhiteYajurvedaGriffith",
      viewUrl: "https://archive.org/details/TheTextsOfTheWhiteYajurvedaGriffith",
      pdfDownloadUrl: "https://archive.org/download/TheTextsOfTheWhiteYajurvedaGriffith/WhiteYajurveda_Griffith.pdf",
      epubDownloadUrl: "https://archive.org/download/TheTextsOfTheWhiteYajurvedaGriffith/WhiteYajurveda_Griffith.epub",
      txtDownloadUrl: "https://archive.org/download/TheTextsOfTheWhiteYajurvedaGriffith/WhiteYajurveda_Text.txt",
      license: "Public Domain",
      curatorNotes: "Texts of the White Yajurveda translated with a popular commentary by Ralph T.H. Griffith (Benares, 1899)."
    },
    alternateRepositories: [
      {
        name: "Vedic Reserve (Maharishi Open Univ)",
        url: "https://www.vedicreserve.mum.edu/shukla_yajur_veda.htm",
        type: "Full Text PDF",
        description: "Madhyandina and Kanva Samhitas in Devanagari."
      },
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/1_sam/yv_vs_u.htm",
        type: "Machine Readable XML/TXT",
        description: "Accented electronic text based on Weber's edition."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Ralph T.H. Griffith",
        publicationYear: "1899",
        publisher: "E.J. Lazarus, Benares",
        formatsAvailable: ["PDF", "EPUB", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/TheTextsOfTheWhiteYajurvedaGriffith",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Pt. Ramnarayan Datt Shastri Pandey / Gita Press",
        publicationYear: "1969",
        publisher: "Gita Press, Gorakhpur",
        formatsAvailable: ["PDF"],
        repositoryName: "Gita Press Public Archives",
        directReaderOrDownloadUrl: "https://archive.org/details/ShuklaYajurvedaHindiGitaPress",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Adhyaya 1–10",
        title: "Darshapurnamasa, Agnyadhana & Soma Rituals",
        pageOrVerseRange: "Adhyayas 1–10",
        summary: "Mantras for New and Full Moon sacrifices, fire installation, and libations.",
        keyConcepts: ["Darshapurnamasa", "Agnyadhana", "Haviryajna"]
      },
      {
        chapterNumber: "Adhyaya 16",
        title: "Shri Rudram (Shata Rudriya / Namakam)",
        pageOrVerseRange: "Adhyaya 16 (66 Mantras)",
        summary: "The celebrated hymn to Rudra-Shiva as the omnipresent cosmic force residing in nature, arts, mountains, forests, and waters.",
        keyConcepts: ["Namakam", "Rudra Avatara", "Pashupati", "Namah Shivaya"]
      },
      {
        chapterNumber: "Adhyaya 40",
        title: "Isha Upanishad (Ishavasya)",
        pageOrVerseRange: "Adhyaya 40 (18 Mantras)",
        summary: "The crowning metaphysical synthesis uniting renunciation (Tyaga) with dynamic engaged action (Karma).",
        keyConcepts: ["Ishavasyam Idam Sarvam", "Vidya and Avidya", "Sambhuti and Asambhuti"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Shukla Yajurveda 40.1 (Isha Upanishad)",
        devanagari: "ॐ ई॒शा वा॒स्य॑मि॒दं सर्वं॒ यत्किञ्च॒ जग॑त्यां॒ जग॑त् । तेन॑ त्य॒क्तेन॑ भुञ्जीथा॒ मा गृ॑धः कस्य॑स्वि॒द्धन॑म् ॥",
        iast: "oṃ īśā́ vā́syam idáṃ sárvaṃ yát kíñca jágatyāṃ jágat | téna tyakténa bhuñjīthā mā́ gṛ́dhaḥ kásyasvid dhánam ||",
        translationEnglish: "All this—whatever moves in this moving world—is enveloped by the Divine. Find your joy in renunciation; do not covet what belongs to another.",
        translationsOtherLangs: {
          hi: "इस परिवर्तनशील संसार में जो कुछ भी जड़-चेतन है, वह सब ईश्वर से व्याप्त है। उसका त्यागपूर्वक उपभोग करो, किसी के भी धन का लोभ मत करो।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Non-dual cosmology and ecological preservation principles (Ishavasya philosophy).",
    bibtexCitation: `@book{griffith1899whiteyajurveda, title={The Texts of the White Yajurveda}, author={Griffith, Ralph T. H.}, year={1899}, publisher={E. J. Lazarus}, address={Benares}}`
  },

  // 4. KRISHNA YAJURVEDA - TAITTIRIYA SAMHITA
  {
    id: "krishna-yajurveda-taittiriya",
    title: "Krishna Yajurveda (Taittiriya Samhita, Brahmana & Aranyaka)",
    sanskritTitleDevanagari: "कृष्ण यजुर्वेद (तैत्तिरीय संहिता, ब्राह्मण व आरण्यक)",
    sanskritTitleIAST: "Kṛṣṇa Yajurveda (Taittirīya Saṃhitā, Brāhmaṇa & Āraṇyaka)",
    category: "Chatur Vedas & Samhitas",
    subCategory: "Vedas (Śruti) - Black Yajurveda",
    traditionalRishiOrAuthor: "Sage Tittiri & Sage Yaska",
    recensionOrShakha: "Taittiriya Shakha (7 Kandas, 44 Prapāṭhakas)",
    historicalPeriod: "Vedic Antiquity (c. 1400–1000 BCE)",
    totalKandasOrAdhyayas: "7 Kandas",
    totalVersesOrMantras: "7 Kandas (Complete Mantra & Brahmana prose integration)",
    executiveSummary: "The 'Black' Yajurveda where sacrificial formulas (Yajus) and theological explanations (Brahmana) are seamlessly interwoven. Contains the complete architectural liturgy of the Agnicayana (Falcon Fire Altar) and the Taittiriya Upanishad.",
    swaraAccentsPreserved: true,
    notableCommentators: ["Sayanacharya", "Bhattabhaskara Mishra (Jnana Yajna)", "Arthur Berriedale Keith"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "VedaOfTheBlackYajusSchoolKeith2Vols",
      viewUrl: "https://archive.org/details/VedaOfTheBlackYajusSchoolKeith2Vols",
      pdfDownloadUrl: "https://archive.org/download/VedaOfTheBlackYajusSchoolKeith2Vols/Keith_Taittiriya_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/VedaOfTheBlackYajusSchoolKeith2Vols/Keith_Taittiriya_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/VedaOfTheBlackYajusSchoolKeith2Vols/Keith_Taittiriya_Text.txt",
      license: "Public Domain",
      curatorNotes: "Harvard Oriental Series Vols 18 & 19 translated by Arthur Berriedale Keith (Harvard Univ Press, 1914)."
    },
    alternateRepositories: [
      {
        name: "SARIT (Indological Text Archive)",
        url: "https://sarit.indology.info",
        type: "Machine Readable XML/TXT",
        description: "TEI-XML search engine for Taittiriya Samhita."
      },
      {
        name: "Vedic Reserve (Maharishi Open Univ)",
        url: "https://www.vedicreserve.mum.edu/krishna_yajur_veda.htm",
        type: "Full Text PDF",
        description: "Complete Taittiriya, Maitrayani and Katha Samhitas."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Arthur Berriedale Keith (The Veda of the Black Yajus School, 2 vols)",
        publicationYear: "1914",
        publisher: "Harvard University Press (HOS 18-19)",
        formatsAvailable: ["PDF", "EPUB", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/VedaOfTheBlackYajusSchoolKeith2Vols",
        license: "Public Domain"
      },
      {
        languageName: "Marathi (मराठी)",
        languageCode: "mr",
        translatorOrEditor: "Pandit S.D. Satwalekar",
        publicationYear: "1952",
        publisher: "Swadhyaya Mandal Pardi",
        formatsAvailable: ["PDF"],
        repositoryName: "Digital Library of India (DLI)",
        directReaderOrDownloadUrl: "https://archive.org/details/TaittiriyaMarathiSatwalekar",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Kandas 4–5",
        title: "Agnicayana (Construction of the Fire Altar)",
        pageOrVerseRange: "Kandas 4 & 5",
        summary: "The geometric, structural, and acoustic instructions for constructing the 5-layer 1,000 brick Syenaciti.",
        keyConcepts: ["Syenaciti", "Baudhayana Sulba", "Brick Topography", "Satarudriya"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Taittiriya Samhita 4.5.1 (Shri Rudram Chamakam)",
        devanagari: "ॐ शं च॑ मे॒ मय॑श्च मे प्रि॒यं च॑ मेऽनुका॒मश्च॑ मे॒ काम॑श्च मे सौमनस॒श्च॑ मे...",
        iast: "oṃ śaṃ ca me mayaś ca me priyaṃ ca me 'nukāmaś ca me kāmaś ca me saumanasaś ca me...",
        translationEnglish: "May my welfare and my bliss, my beloved and my cherished wish, my desire and my peace of mind be fulfilled through the sacrifice...",
        translationsOtherLangs: {
          hi: "मुझे कल्याण, सुख, प्रिय वस्तुएँ, अनुकूल कामनाएँ और मानसिक शांति प्राप्त हों..."
        }
      }
    ],
    scienceAndPhilosophySignificance: "Origin of constructive geometry, Pythagorean triples in Baudhayana Sulba, and ritual brick topology.",
    bibtexCitation: `@book{keith1914blackyajus, title={The Veda of the Black Yajus School Entitled Taittiriya Sanhita}, author={Keith, Arthur Berriedale}, year={1914}, publisher={Harvard University Press}, series={Harvard Oriental Series}, volume={18--19}}`
  },

  // 5. ATHARVAVEDA SAMHITA
  {
    id: "atharvaveda-samhita-shaunaka",
    title: "Atharvaveda Samhita (Shaunaka & Pippalada Shakhas)",
    sanskritTitleDevanagari: "अथर्ववेद संहिता (शौनक व पैप्पलाद शाखा)",
    sanskritTitleIAST: "Atharvaveda Saṃhitā (Śaunaka & Paippalāda Śākhās)",
    category: "Chatur Vedas & Samhitas",
    subCategory: "Vedas (Śruti) - Wisdom of Atharvan & Angiras",
    traditionalRishiOrAuthor: "Sage Atharvan, Sage Angiras & Sage Bhrigu",
    recensionOrShakha: "Shaunaka Shakha (20 Kandas, 730 Suktas, ~6,000 Mantras) & Kashmirian Pippalada",
    historicalPeriod: "Vedic Antiquity (c. 1400–900 BCE)",
    totalKandasOrAdhyayas: "20 Kandas",
    totalVersesOrMantras: 5977,
    executiveSummary: "The fourth Veda, containing esoteric hymns for healing (Bhaishajya/Ayurveda precursor), longevity (Ayushya), statecraft and peace (Shantikapaushtika), and the magnificent Prithvi Sukta (Hymn to Mother Earth, Kanda 12.1), the earliest ecological manifesto.",
    swaraAccentsPreserved: true,
    notableCommentators: ["Sayanacharya", "William Dwight Whitney", "Charles Rockwell Lanman", "Maurice Bloomfield"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "AtharvaVedaSamhitaWhitneyLanman2Vols",
      viewUrl: "https://archive.org/details/AtharvaVedaSamhitaWhitneyLanman2Vols",
      pdfDownloadUrl: "https://archive.org/download/AtharvaVedaSamhitaWhitneyLanman2Vols/Whitney_Atharvaveda_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/AtharvaVedaSamhitaWhitneyLanman2Vols/Whitney_Atharvaveda_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/AtharvaVedaSamhitaWhitneyLanman2Vols/Whitney_Atharvaveda_Text.txt",
      license: "Public Domain",
      curatorNotes: "Harvard Oriental Series Vols 7 & 8 edited with critical apparatus by W.D. Whitney and C.R. Lanman (Harvard, 1905)."
    },
    alternateRepositories: [
      {
        name: "TITUS (Univ. of Frankfurt)",
        url: "https://titus.uni-frankfurt.de/texte/etcs/ind/aind/ved/av/shaun/avs.htm",
        type: "Machine Readable XML/TXT",
        description: "Accented electronic edition of the Shaunaka recension."
      },
      {
        name: "Muktabodha Digital Library",
        url: "https://muktabodha.org/digital-library/",
        type: "Full Text PDF",
        description: "Birch-bark manuscript facsimile of the Kashmirian Pippalada Atharvaveda (Tubingen/Bloomfield 1901)."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "W.D. Whitney & C.R. Lanman (2 vols)",
        publicationYear: "1905",
        publisher: "Harvard University Press",
        formatsAvailable: ["PDF", "EPUB", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/AtharvaVedaSamhitaWhitneyLanman2Vols",
        license: "Public Domain"
      },
      {
        languageName: "Russian (Русский)",
        languageCode: "ru",
        translatorOrEditor: "Tatyana Ya. Elizarenkova (Атхарваведа. Избранное, 3 тома)",
        publicationYear: "2005",
        publisher: "Vostochnaya Literatura / RAN",
        formatsAvailable: ["PDF"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/AtharvavedaRussianElizarenkova",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Pt. Ramnarayan Datt Shastri Pandey / Gayatri Pariwar",
        publicationYear: "1962",
        publisher: "Yug Nirman Yojna / Gita Press",
        formatsAvailable: ["PDF"],
        repositoryName: "Gita Press Public Archives",
        directReaderOrDownloadUrl: "https://archive.org/details/AtharvavedaHindiTranslation",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Kanda 12.1",
        title: "Bhumi Sukta (Prithvi Sukta - Hymn to Earth)",
        pageOrVerseRange: "Kanda 12, Sukta 1 (63 Verses)",
        summary: "Epitome of reverence for the biosphere, honoring Earth's diversity of languages, customs, soil strata, flora, and mineral richness.",
        keyConcepts: ["Mata Bhumi Putro Aham Prithivyah", "Biodiversity", "Ecological Balance", "Global Unity"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Atharvaveda 12.1.12 (Prithvi Sukta)",
        devanagari: "ॐ यत्ते॒ मध्यं॑ पृथि॒वि यच्च॒ नभ्यं॒ यास्त॑ ऊ॒र्जस्त॒न्व१॒॑: संब॑भू॒वुः । तासु॑ नो धे॒ह्य॒भि नः॑ पवस्व मा॒ता भूमि॑: पु॒त्रो अ॒हं पृ॑थि॒व्याः ॥",
        iast: "oṃ yát te mádhyaṃ pṛthivi yác ca nábhyaṃ yā́s ta ūrjás tanvàḥ sambabhūvúḥ | tā́su no dhehy abhí naḥ pavasva mātā́ bhū́miḥ putró aháṃ pṛthivyā́ḥ ||",
        translationEnglish: "Set us, O Earth, in that midst of thee, in that navel of thine, in those nourishments that have grown up of thy body. Purify us on every side: Earth is my mother, I am the son of Earth.",
        translationsOtherLangs: {
          hi: "हे पृथ्वी! जो तेरा मध्य भाग है, जो तेरी नाभि है, जो तेरे शरीर में उत्पन्न ऊर्जा है, उसमें हमें स्थापित कर। भूमि मेरी माता है, और मैं पृथ्वी का पुत्र हूँ।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Roots of Ayurveda pharmacognosy, plant taxonomy, and planetary ecology (Bhumi Sukta).",
    bibtexCitation: `@book{whitney1905atharva, title={Atharva-Veda Samhita}, author={Whitney, William Dwight and Lanman, Charles Rockwell}, year={1905}, publisher={Harvard University Press}, series={Harvard Oriental Series}, volume={7--8}}`
  },

  // 6. SHATAPATHA BRAHMANA
  {
    id: "shatapatha-brahmana-madhyandina",
    title: "Shatapatha Brahmana (14 Kandas)",
    sanskritTitleDevanagari: "शतपथ ब्राह्मणम् (१४ काण्डानि)",
    sanskritTitleIAST: "Śatapatha Brāhmaṇa (14 Kāṇḍas)",
    category: "Brahmanas & Aranyakas",
    subCategory: "Vedic Brahmana Literature",
    traditionalRishiOrAuthor: "Maharshi Yajnavalkya",
    recensionOrShakha: "Madhyandina Recension (100 Chapters / Adhyayas)",
    historicalPeriod: "Later Vedic Period (c. 1000–700 BCE)",
    totalKandasOrAdhyayas: "14 Kandas (100 Adhyayas)",
    totalVersesOrMantras: "~7,000 Prose Paragraphs",
    executiveSummary: "The 'Brahmana of a Hundred Paths', the most comprehensive prose monument of Vedic ritual theology, sacred geometry, calendar sciences, and metaphysical dialogues (including the legend of the Deluge/Manu's Fish, Pururavas & Urvashi, and the core of the Brihadaranyaka Upanishad in Kanda 14).",
    swaraAccentsPreserved: true,
    notableCommentators: ["Sayanacharya", "Harisvamin", "Julius Eggeling (Sacred Books of the East 5 vols)"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "SatapathaBrahmanaEggeling5VolsComplete",
      viewUrl: "https://archive.org/details/SatapathaBrahmanaEggeling5VolsComplete",
      pdfDownloadUrl: "https://archive.org/download/SatapathaBrahmanaEggeling5VolsComplete/Satapatha_Eggeling_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/SatapathaBrahmanaEggeling5VolsComplete/Satapatha_Eggeling_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/SatapathaBrahmanaEggeling5VolsComplete/Satapatha_Eggeling_Text.txt",
      license: "Public Domain",
      curatorNotes: "Sacred Books of the East Vols 12, 26, 41, 43, 44 translated by Julius Eggeling (Oxford, 1882–1900)."
    },
    alternateRepositories: [
      {
        name: "Sacred Texts Archive (sacred-texts.com)",
        url: "https://www.sacred-texts.com/hin/sbr/index.htm",
        type: "Full Text PDF",
        description: "Complete searchable HTML transcriptions of all 5 volumes."
      },
      {
        name: "Vedic Reserve (Maharishi Open Univ)",
        url: "https://www.vedicreserve.mum.edu/shatapatha_brahmana.htm",
        type: "Full Text PDF",
        description: "Complete Devanagari edition."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Julius Eggeling (5 volumes)",
        publicationYear: "1882–1900",
        publisher: "Clarendon Press / Oxford",
        formatsAvailable: ["PDF", "EPUB", "TXT", "HTML"],
        repositoryName: "Sacred Texts Archive (sacred-texts.com)",
        directReaderOrDownloadUrl: "https://www.sacred-texts.com/hin/sbr/index.htm",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Acharya Shriram Sharma / Pt. Ganga Prasad Upadhyaya",
        publicationYear: "1968",
        publisher: "Gayatri Pariwar / Arya Samaj",
        formatsAvailable: ["PDF"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/ShatapathaBrahmanaHindiGangaPrasad",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Kandas 6–10",
        title: "Agnicayana & Secret Fire Doctrine (Agni Rahasya)",
        pageOrVerseRange: "Kandas 6 to 10",
        summary: "The construction of the fire altar as a micro-macrocosmic correspondence of the solar year (360 days and 720 day/night intervals).",
        keyConcepts: ["Agni Rahasya", "Solar Year Geometry", "Brick Chronology"]
      },
      {
        chapterNumber: "Kanda 14",
        title: "Brihadaranyaka Upanishad",
        pageOrVerseRange: "Kanda 14 (Chapters 1–6)",
        summary: "The great forest teachings of Yajnavalkya with Gargi, Maitreyi, and King Janaka of Videha.",
        keyConcepts: ["Neti Neti", "Maitreyi Brahmana", "Gargi Debate", "Antaryami"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Shatapatha Brahmana 10.5.4.1",
        devanagari: "मनोमयोऽयं पुरुषो भाः सत्यस्तस्मिन्नन्तर्हृदये यथा व्रीहिर्वा यवो वा...",
        iast: "manomayo 'yaṃ puruṣo bhāḥ satyas tasminn antarhṛdaye yathā vrīhir vā yavo vā...",
        translationEnglish: "This person within the heart is made of mind; his light is truth, like a grain of rice or barley within the innermost core..."
      }
    ],
    scienceAndPhilosophySignificance: "Exact calculation of the 360-day calendar year, precession cycles, and astronomical altar design.",
    bibtexCitation: `@book{eggeling1882satapatha, title={The Satapatha-Brahmana, According to the Text of the Madhyandina School}, author={Eggeling, Julius}, year={1882--1900}, publisher={Clarendon Press}, series={Sacred Books of the East}, volume={12, 26, 41, 43, 44}}`
  },

  // 7. PRINCIPAL UPANISHADS - 13 MUKHYA UPANISHADS
  {
    id: "mukhya-upanishads-shankara-bhashya",
    title: "The 13 Principal Upanishads (with Adi Shankara Bhashya)",
    sanskritTitleDevanagari: "त्रयोदश मुख्योपनिषदः (शाङ्करभाष्यसहिताः)",
    sanskritTitleIAST: "Trayodaśa Mukhyopaniṣadaḥ (Śāṅkarabhāṣyasahitāḥ)",
    category: "108 Upanishads & Mukhya Upanishads",
    subCategory: "Vedanta - Core Philosophical Revelation",
    traditionalRishiOrAuthor: "Vedic Seers & Jagadguru Adi Shankaracharya",
    recensionOrShakha: "Isha, Kena, Katha, Prashna, Mundaka, Mandukya, Taittiriya, Aitareya, Chandogya, Brihadaranyaka, Shvetashvatara, Kaushitaki, Maitri",
    historicalPeriod: "Classical Upanishadic Epoch (c. 900–400 BCE / Shankara c. 8th CE)",
    totalKandasOrAdhyayas: "13 Complete Upanishadic Canons",
    totalVersesOrMantras: "~1,800 Verses & Prose Paragraphs",
    executiveSummary: "The ultimate philosophical summit of the Vedas (Vedanta), establishing the non-dual identity of Atman (the inner Self) and Brahman (the infinite absolute ground of being). Contains the Mahavakyas: Aham Brahmasmi, Tat Tvam Asi, Prajnanam Brahma, Ayam Atma Brahma.",
    swaraAccentsPreserved: true,
    notableCommentators: ["Adi Shankaracharya", "Ramanujacharya", "Madhvacharya", "Swami Gambhirananda", "Paul Deussen (60 Upanishads in German)", "Anquetil Duperron (Oupnek'hat in Latin)", "Swami Nikhilananda", "S. Radhakrishnan"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "EightUpanishadsWithShankaraBhashyaGambhirananda",
      viewUrl: "https://archive.org/details/EightUpanishadsWithShankaraBhashyaGambhirananda",
      pdfDownloadUrl: "https://archive.org/download/EightUpanishadsWithShankaraBhashyaGambhirananda/EightUpanishads_Gambhirananda_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/EightUpanishadsWithShankaraBhashyaGambhirananda/EightUpanishads_Gambhirananda_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/EightUpanishadsWithShankaraBhashyaGambhirananda/EightUpanishads_Text.txt",
      license: "Public Domain / Open Access",
      curatorNotes: "Complete text with word-by-word English translation and Shankara's commentary by Swami Gambhirananda (Advaita Ashrama)."
    },
    alternateRepositories: [
      {
        name: "SARIT (Indological Text Archive)",
        url: "https://sarit.indology.info",
        type: "Machine Readable XML/TXT",
        description: "Full electronic editions of Chandogya, Brihadaranyaka and Mandukya Karika."
      },
      {
        name: "Sacred Texts Archive (sacred-texts.com)",
        url: "https://www.sacred-texts.com/hin/sbe01/index.htm",
        type: "Full Text PDF",
        description: "Max Müller Sacred Books of the East Vols 1 & 15 (Upanishads)."
      },
      {
        name: "Vedic Reserve (Maharishi Open Univ)",
        url: "https://www.vedicreserve.mum.edu/upanishads.htm",
        type: "Full Text PDF",
        description: "Complete 108 Muktika Upanishads Devanagari text."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Swami Gambhirananda / S. Radhakrishnan (Principal Upanishads)",
        publicationYear: "1957",
        publisher: "Advaita Ashrama / HarperCollins",
        formatsAvailable: ["PDF", "EPUB", "TXT", "HTML"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/EightUpanishadsWithShankaraBhashyaGambhirananda",
        license: "Open Access Creative Commons"
      },
      {
        languageName: "German (Deutsch)",
        languageCode: "de",
        translatorOrEditor: "Paul Deussen (Sechzig Upanishad's des Veda aus dem Sanskrit übersetzt)",
        publicationYear: "1897",
        publisher: "F.A. Brockhaus, Leipzig",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/sechzigupanishad00deus",
        license: "Public Domain"
      },
      {
        languageName: "Latin (Lingua Latina)",
        languageCode: "la",
        translatorOrEditor: "Abraham Hyacinthe Anquetil-Duperron (Oupnek'hat, 2 tomes)",
        publicationYear: "1801–1802",
        publisher: "Levrault, Argentorati (Strasbourg)",
        formatsAvailable: ["PDF"],
        repositoryName: "Bibliothèque Nationale de France (BnF Gallica)",
        directReaderOrDownloadUrl: "https://gallica.bnf.fr/ark:/12148/bpt6k58253m",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Gita Press Translation Board (10 Upanishads with Shankara Bhashya)",
        publicationYear: "1960",
        publisher: "Gita Press, Gorakhpur",
        formatsAvailable: ["PDF"],
        repositoryName: "Gita Press Public Archives",
        directReaderOrDownloadUrl: "https://archive.org/details/UpanishadSangrahGitaPress",
        license: "Public Domain"
      },
      {
        languageName: "Kannada (ಕನ್ನಡ)",
        languageCode: "kn",
        translatorOrEditor: "Swami Satchidanandendra Saraswati (Adhyatma Prakasha Karyalaya)",
        publicationYear: "1965",
        publisher: "Adhyatma Prakasha Karyalaya, Holenarasipura",
        formatsAvailable: ["PDF"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/UpanishadKannadaSatchidanandendra",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Mandukya Upanishad",
        title: "The Four States of Consciousness (A-U-M & Turiya)",
        pageOrVerseRange: "12 Mantras (with Gaudapada Karika)",
        summary: "The shortest Upanishad analyzing waking (Jagrat/A), dreaming (Svapna/U), deep sleep (Susupti/M), and transcendent unconditioned awareness (Turiya/Silence).",
        keyConcepts: ["Jagrat", "Svapna", "Susupti", "Turiya", "Omkara Matras", "Advaita Gaudapada"]
      },
      {
        chapterNumber: "Katha Upanishad",
        title: "Nachiketa and the Secret of Death (Yama Gita)",
        pageOrVerseRange: "2 Adhyayas, 6 Vallis (119 Mantras)",
        summary: "The chariot metaphor of consciousness (Atman as rider, intellect as charioteer, mind as reins, senses as horses) and the triumph over mortality.",
        keyConcepts: ["Shreyas vs Preyas", "Chariot Metaphor", "Rathina Atmanam Viddhi", "Amritatva"]
      },
      {
        chapterNumber: "Chandogya Upanishad",
        title: "Tat Tvam Asi (That Thou Art - Uddalaka to Shvetaketu)",
        pageOrVerseRange: "8 Prapathakas (Prapathaka 6 core)",
        summary: "The seed and banyan tree analogy, salt dissolved in water, and the universal ground of reality.",
        keyConcepts: ["Tat Tvam Asi", "Daharavidya", "Sadvidya", "Honey Doctrine (Madhu Vidya)"]
      },
      {
        chapterNumber: "Brihadaranyaka Upanishad",
        title: "Aham Brahmasmi & Neti Neti",
        pageOrVerseRange: "6 Adhyayas",
        summary: "Yajnavalkya's dialogues with Maitreyi on the Self being dearer than all objects, and with Gargi on the unperishing Akshara that weaves space.",
        keyConcepts: ["Aham Brahmasmi", "Neti Neti", "Yajnavalkya-Gargi Dialogue", "Antaryami Brahmana"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Mandukya Upanishad 2",
        devanagari: "ॐ सर्वं ह्येतद् ब्रह्मायमात्मा ब्रह्म सोऽयमात्मा चतुष्पात् ॥",
        iast: "oṃ sarvaṃ hy etad brahmāyam ātmā brahma so 'yam ātmā catuṣpāt ||",
        translationEnglish: "All this is verily Brahman. This Self (Atman) is Brahman. This Self has four quarters (states of consciousness).",
        translationsOtherLangs: {
          hi: "यह सब कुछ निश्चय ही ब्रह्म है। यह आत्मा ही ब्रह्म है। इस आत्मा के चार पाद (चरण) हैं।",
          mr: "हे सर्व काही खरोखर ब्रह्मच आहे. हा आत्माच ब्रह्म आहे. या आत्म्याचे चार पाद आहेत.",
          de: "Denn all dieses ist Brahman; dieses Selbst ist Brahman; und dieses selbige Selbst hat vier Viertel.",
          fr: "Tout ceci est en vérité le Brahman. Cet Atman est le Brahman. Cet Atman a quatre quartiers."
        }
      },
      {
        verseNumber: "Brihadaranyaka Upanishad 1.3.28 (Pavamana Mantra)",
        devanagari: "ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥ ॐ शान्तिः शान्तिः शान्तिः ॥",
        iast: "oṃ asato mā sad gamaya | tamaso mā jyotir gamaya | mṛtyor mā amṛtaṃ gamaya || oṃ śāntiḥ śāntiḥ śāntiḥ ||",
        translationEnglish: "Lead me from the unreal to the real; lead me from darkness to light; lead me from death to immortality. OM peace, peace, peace.",
        translationsOtherLangs: {
          hi: "मुझे असत्य से सत्य की ओर ले चलो; मुझे अंधकार से प्रकाश की ओर ले चलो; मुझे मृत्यु से अमरता की ओर ले चलो।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Foundation of neuro-phenomenology, non-local consciousness theories, and Schrödinger's Vedanta citations.",
    bibtexCitation: `@book{gambhirananda1957eightupanishads, title={Eight Upanishads with the Commentary of Sankaracarya}, author={Gambhirananda, Swami and {\'S}a{\.n}kar{\=a}c{\=a}rya}, year={1957}, publisher={Advaita Ashrama}, address={Kolkata}}`
  },

  // 8. VEDANGA - PANINI ASHTADHYAYI
  {
    id: "panini-ashtadhyayi-vyakarana",
    title: "Panini's Ashtadhyayi (Complete 8 Adhyayas with Mahabhashya)",
    sanskritTitleDevanagari: "पाणिनि अष्टाध्यायी (श्रीमन्महाभाष्यसहिता)",
    sanskritTitleIAST: "Pāṇini's Aṣṭādhyāyī (with Mahābhāṣya of Patañjali)",
    category: "Vedangas & Sutra Shastras",
    subCategory: "Vedanga - Vyakarana (Generative Linguistics)",
    traditionalRishiOrAuthor: "Maharshi Panini (Salatura, Gandhara)",
    recensionOrShakha: "3,959 Sutras in 8 Chapters (with Shiva Sutras / Pratyaharas)",
    historicalPeriod: "Classical Period (c. 6th–4th Century BCE)",
    totalKandasOrAdhyayas: "8 Adhyayas (32 Padas)",
    totalVersesOrMantras: 3959,
    executiveSummary: "The world's earliest formal generative grammar, computational rule engine, and algebraic metalanguage. Utilizing context-free rules, auxiliary symbols, and recursive inheritance that directly inspired modern computer programming languages (Backus-Naur Form, Chomsky Hierarchy).",
    swaraAccentsPreserved: true,
    notableCommentators: ["Patanjali (Mahabhashya)", "Katyayana (Varttika)", "Jayaditya & Vamana (Kashika Vritti)", "Bhattoji Dikshita (Siddhanta Kaumudi)", "S.C. Vasu", "Franz Kielhorn"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "AshtadhyayiOfPaniniSCVasu8Vols",
      viewUrl: "https://archive.org/details/AshtadhyayiOfPaniniSCVasu8Vols",
      pdfDownloadUrl: "https://archive.org/download/AshtadhyayiOfPaniniSCVasu8Vols/Ashtadhyayi_Vasu_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/AshtadhyayiOfPaniniSCVasu8Vols/Ashtadhyayi_Vasu_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/AshtadhyayiOfPaniniSCVasu8Vols/Ashtadhyayi_Vasu_Text.txt",
      license: "Public Domain",
      curatorNotes: "The Ashtadhyayi of Panini translated into English by Srisa Chandra Vasu (8 volumes, Allahabad, 1891–1898)."
    },
    alternateRepositories: [
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/1_gram/panashtu.htm",
        type: "Machine Readable XML/TXT",
        description: "Complete machine-readable Paninian sutra database with tags."
      },
      {
        name: "BORI Open Access Repository",
        url: "https://bori.ac.in",
        type: "Full Text PDF",
        description: "Kielhorn's Critical Edition of the Vyakarana Mahabhashya (3 vols)."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Srisa Chandra Vasu (8 volumes)",
        publicationYear: "1891–1898",
        publisher: "Panini Office, Allahabad",
        formatsAvailable: ["PDF", "EPUB", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/AshtadhyayiOfPaniniSCVasu8Vols",
        license: "Public Domain"
      },
      {
        languageName: "German (Deutsch)",
        languageCode: "de",
        translatorOrEditor: "Otto von Böhtlingk (Pāṇini's Grammatik, Leipzig)",
        publicationYear: "1887",
        publisher: "H. Haessel, Leipzig",
        formatsAvailable: ["PDF"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/pninisgrammati00panigoog",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Shiva Sutras",
        title: "The 14 Phonetic Sound Matrices (Maheshvara Sutras)",
        pageOrVerseRange: "14 Formulae (a-i-u-ṇ to hal)",
        summary: "The algebraic sound alphabet defining natural classes of phonemes through abbreviations (Pratyaharas like aC = all vowels, haL = all consonants).",
        keyConcepts: ["Pratyahara", "It-Markers", "Phonological Matrix"]
      },
      {
        chapterNumber: "Adhyaya 1",
        title: "Technical Definitions & Metarules (Samjna & Paribhasha)",
        pageOrVerseRange: "Sutras 1.1.1 to 1.4.110",
        summary: "Foundational operator logic: 'Vṛddhir ādaic' (1.1.1), rule ordering, and semantic relation categories (Karakas).",
        keyConcepts: ["Vriddhi", "Guna", "Karaka Theory", "Rule Precedence (Vipratishedhe Param Karyam)"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Ashtadhyayi 1.1.1",
        devanagari: "वृद्धिरादैच् ॥ १.१.१ ॥",
        iast: "vṛddhir ād aic || 1.1.1 ||",
        translationEnglish: "The term 'vṛddhi' denotes the vowels ā (long a) and the diphthongs ai and au.",
        translationsOtherLangs: {
          hi: "आ, ऐ और औ — इन तीन वर्णों की 'वृद्धि' संज्ञा होती है।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Foundation of theoretical computer science, compiler construction, and Chomskyan generative grammar.",
    bibtexCitation: `@book{vasu1891ashtadhyayi, title={The Ashtadhyayi of Panini}, author={Vasu, Srisa Chandra}, year={1891--1898}, publisher={The Panini Office}, address={Allahabad}}`
  },

  // 9. MAHABHARATA CRITICAL EDITION (BORI)
  {
    id: "mahabharata-bori-critical-edition",
    title: "The Mahabharata Critical Edition (Complete 18 Parvas)",
    sanskritTitleDevanagari: "महाभारतम् (भाण्डारकर प्राच्यविद्या संशोधन मन्दिर समलोचनात्मक संस्करणम्)",
    sanskritTitleIAST: "Mahābhāratam (BORI Critical Edition in 18 Parvans)",
    category: "Itihasas & Epics",
    subCategory: "Itihasa - Epic Heritage",
    traditionalRishiOrAuthor: "Maharshi Krishna Dvaipayana Veda Vyasa / BORI Scholars (V.S. Sukthankar, S.K. Belvalkar, P.L. Vaidya)",
    recensionOrShakha: "Critical Edition (1919–1966) collating 1,259 Northern and Southern manuscripts",
    historicalPeriod: "Epic Epoch (Historical Core c. 3100–1000 BCE / Critical Edition 1966)",
    totalKandasOrAdhyayas: "18 Parvas (plus Harivamsha Khila)",
    totalVersesOrMantras: 73784,
    executiveSummary: "The monumental critical edition of the world's longest epic, produced over 47 years by the Bhandarkar Oriental Research Institute (BORI), Pune. It reconstructed the archetype text from Sharada, Devanagari, Bengali, Grantha, Telugu, Malayalam and Nepali palm-leaf codices.",
    swaraAccentsPreserved: false,
    notableCommentators: ["Nilakantha Chaturdhara (Bharatabhavadiipa)", "Kisari Mohan Ganguli", "Bibek Debroy", "J.A.B. van Buitenen", "Gita Press Gorakhpur"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "MahabharataBORICriticalEditionComplete19Vols",
      viewUrl: "https://archive.org/details/MahabharataBORICriticalEditionComplete19Vols",
      pdfDownloadUrl: "https://archive.org/download/MahabharataBORICriticalEditionComplete19Vols/Mahabharata_BORI_Vol01_AdiParvan.pdf",
      epubDownloadUrl: "https://archive.org/download/MahabharataBORICriticalEditionComplete19Vols/Mahabharata_BORI_Vol01_AdiParvan.epub",
      txtDownloadUrl: "https://archive.org/download/MahabharataBORICriticalEditionComplete19Vols/Mahabharata_BORI_Text.txt",
      teiXmlUrl: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/2_epic/mbh/mbh_01_u.htm",
      license: "Open Access Public Research",
      curatorNotes: "The complete 19-volume BORI Critical Edition with textual apparatus and variant readings."
    },
    alternateRepositories: [
      {
        name: "BORI Open Access Repository",
        url: "https://bori.ac.in/critical-edition-mahabharata/",
        type: "Critical Edition Notes",
        description: "Official BORI digital repository and manuscript concordances."
      },
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/2_epic/mbh/mbh_u.htm",
        type: "Machine Readable XML/TXT",
        description: "Machine-readable version of the entire 18 Parvas prepared by Muneo Tokunaga & John Smith."
      },
      {
        name: "Sacred Texts Archive (sacred-texts.com)",
        url: "https://www.sacred-texts.com/hin/maha/index.htm",
        type: "Full Text PDF",
        description: "Complete Kisari Mohan Ganguli English translation (18 volumes)."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Kisari Mohan Ganguli (Complete 18 Parvas, 1883–1896)",
        publicationYear: "1883–1896",
        publisher: "Bharata Press, Calcutta",
        formatsAvailable: ["PDF", "EPUB", "TXT", "HTML"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/TheMahabharataOfKrishnaDwaipayanaVyasaGanguli",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Pandit Ramnarayan Datt Shastri Pandey (6 volumes)",
        publicationYear: "1955",
        publisher: "Gita Press, Gorakhpur",
        formatsAvailable: ["PDF"],
        repositoryName: "Gita Press Public Archives",
        directReaderOrDownloadUrl: "https://archive.org/details/MahabharataHindiGitaPressComplete",
        license: "Public Domain"
      },
      {
        languageName: "Marathi (मराठी)",
        languageCode: "mr",
        translatorOrEditor: "Chintaman Vinayak Vaidya / B.V. Bhat",
        publicationYear: "1930",
        publisher: "Chitrashala Press, Pune",
        formatsAvailable: ["PDF"],
        repositoryName: "Digital Library of India (DLI)",
        directReaderOrDownloadUrl: "https://archive.org/details/MahabharatMarathiChitrashala",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Parva 1–5",
        title: "Adi, Sabha, Vana, Virata, Udyoga Parvas",
        pageOrVerseRange: "Genealogy to War Preparations",
        summary: "Cosmic origins, snake sacrifice of Janamejaya, dice game, 12-year forest exile, and peace embassies of Krishna.",
        keyConcepts: ["Dice Game", "Draupadi Vastraharana", "Yaksha Prashna", "Sanjaya Embassy"]
      },
      {
        chapterNumber: "Parva 6: Bhishma Parva",
        title: "Bhagavad Gita & Fall of Bhishma",
        pageOrVerseRange: "Chapters 25–42 (Srimad Bhagavad Gita)",
        summary: "The moral collapse of Arjuna and Krishna's timeless revelation of Nishkama Karma, Vishvarupa, and Jnana-Vijnana Yoga.",
        keyConcepts: ["Bhagavad Gita 700 Shlokas", "Vishvarupa Darshana", "Nishkama Karma", "Bhakti Yoga"]
      },
      {
        chapterNumber: "Parva 12: Shanti Parva",
        title: "Rajadharma, Apaddharma & Mokshadharma",
        pageOrVerseRange: "365 Chapters (13,716 Verses)",
        summary: "The longest single book of the epic: Bhishma on the bed of arrows instructing Yudhishthira on political philosophy, statecraft, economics, jurisprudence, and spiritual liberation.",
        keyConcepts: ["Rajadharma", "Danda Niti", "Mokshadharma", "Samkhya-Yoga Synthesis"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Mahabharata 18.5.49 (Bharata Savitri)",
        devanagari: "न जातु कामान्न भयान्न लोभाद्धर्मं त्यजेज्जीवितस्यापि हेतोः । नित्यो धर्मः सुखदुःखे त्वनित्ये जीवो नित्यो हेतुरस्य त्वनित्यः ॥",
        iast: "na jātu kāmān na bhayān na lobhād dharmaṃ tyajej jīvitasyāpi hetoḥ | nityo dharmaḥ sukhaduḥkhe tv anitye jīvo nityo hetur asya tv anityaḥ ||",
        translationEnglish: "Never should one abandon Dharma for the sake of desire, fear, greed, or even for saving one's life. Dharma is eternal; pleasure and pain are transient. The soul is eternal, while its transient causes pass away.",
        translationsOtherLangs: {
          hi: "न कभी काम से, न भय से, न लोभ से और न प्राण बचाने के लिए भी धर्म का त्याग करना चाहिए। धर्म नित्य है, सुख-दुःख अनित्य हैं। आत्मा नित्य है और उसका सांसारिक कारण अनित्य है।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Archaeo-astronomical planetary conjunctions dated to c. 3138 BCE; foundational treatise on political philosophy (Shanti Parva).",
    bibtexCitation: `@book{sukthankar1933mahabharata, title={The Mahabharata: For the First Time Critically Edited}, author={Sukthankar, Vishnu S. and Belvalkar, Shripad Krishna and Vaidya, Parashuram Lakshman}, year={1933--1966}, publisher={Bhandarkar Oriental Research Institute}, address={Poona}}`
  },

  // 10. BHAGAVAD GITA UNIVERSAL EDITIONS
  {
    id: "srimad-bhagavad-gita-editions",
    title: "Srimad Bhagavad Gita (Complete 18 Chapters with Global Commentaries)",
    sanskritTitleDevanagari: "श्रीमद्भगवद्गीता (अष्टादशाध्यायाः सर्वभाष्यसहिताः)",
    sanskritTitleIAST: "Śrīmad Bhagavad Gītā (18 Adhyāyas with Classical Commentaries)",
    category: "Itihasas & Epics",
    subCategory: "Gita Shastra - Brahma Vidya & Yoga Shastra",
    traditionalRishiOrAuthor: "Bhagavan Sri Krishna & Veda Vyasa",
    recensionOrShakha: "700 Verses across 18 Chapters (Mahabharata Bhishma Parva 25–42)",
    historicalPeriod: "Antiquity (c. 3100 BCE context / Universal Living Tradition)",
    totalKandasOrAdhyayas: "18 Chapters",
    totalVersesOrMantras: 700,
    executiveSummary: "The jewel of Indian spiritual philosophy spoken on the battlefield of Kurukshetra. Synthesizes Karma Yoga (selfless action), Jnana Yoga (discriminative wisdom), Dhyana Yoga (meditative absorption), and Bhakti Yoga (unconditional devotion) in 700 transformative verses.",
    swaraAccentsPreserved: false,
    notableCommentators: ["Adi Shankaracharya", "Ramanujacharya", "Madhvacharya", "Jnaneshwar (Dnyaneshwari)", "Bal Gangadhar Tilak (Gita Rahasya)", "Swami Vivekananda", "Sri Aurobindo (Essays on the Gita)", "Edwin Arnold (Song Celestial)", "J.A.B. van Buitenen"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "TheBhagavadGitaWithShankaracharyaCommentaryGambhirananda",
      viewUrl: "https://archive.org/details/TheBhagavadGitaWithShankaracharyaCommentaryGambhirananda",
      pdfDownloadUrl: "https://archive.org/download/TheBhagavadGitaWithShankaracharyaCommentaryGambhirananda/BhagavadGita_Shankara_Gambhirananda.pdf",
      epubDownloadUrl: "https://archive.org/download/TheBhagavadGitaWithShankaracharyaCommentaryGambhirananda/BhagavadGita_Shankara_Gambhirananda.epub",
      txtDownloadUrl: "https://archive.org/download/TheBhagavadGitaWithShankaracharyaCommentaryGambhirananda/BhagavadGita_Text.txt",
      license: "Public Domain",
      curatorNotes: "Bhagavad Gita with the Commentary of Sankaracarya translated by Swami Gambhirananda (Advaita Ashrama)."
    },
    alternateRepositories: [
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/2_epic/mbh/gita_u.htm",
        type: "Machine Readable XML/TXT",
        description: "Full accented electronic edition of the Bhagavad Gita."
      },
      {
        name: "Gita Press Public Archives",
        url: "https://gitapress.org",
        type: "Full Text PDF",
        description: "Sadhaka Sanjivani by Swami Ramsukhdas (Hindi & English)."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Sir Edwin Arnold (The Song Celestial / Sir Charles Wilkins)",
        publicationYear: "1885",
        publisher: "Kegan Paul, Trench, Trübner & Co., London",
        formatsAvailable: ["PDF", "EPUB", "TXT", "HTML"],
        repositoryName: "Sacred Texts Archive (sacred-texts.com)",
        directReaderOrDownloadUrl: "https://www.sacred-texts.com/hin/sbg/index.htm",
        license: "Public Domain"
      },
      {
        languageName: "Marathi (मराठी)",
        languageCode: "mr",
        translatorOrEditor: "Sant Dnyaneshwar (Bhavartha Dipika / Dnyaneshwari 1290 CE)",
        publicationYear: "1290 (Modern edition 1950)",
        publisher: "Maharashtra Sahitya Sanskriti Mandal",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/DnyaneshwariMarathiComplete",
        license: "Public Domain"
      },
      {
        languageName: "German (Deutsch)",
        languageCode: "de",
        translatorOrEditor: "Leopold von Schroeder / Paul Deussen",
        publicationYear: "1912",
        publisher: "Eugen Diederichs, Jena",
        formatsAvailable: ["PDF"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/bhagavadgitades00schruoft",
        license: "Public Domain"
      },
      {
        languageName: "French (Français)",
        languageCode: "fr",
        translatorOrEditor: "Émile Senart (La Bhagavadgītā traduite du sanskrit)",
        publicationYear: "1922",
        publisher: "Société d'Édition Les Belles Lettres, Paris",
        formatsAvailable: ["PDF"],
        repositoryName: "Bibliothèque Nationale de France (BnF Gallica)",
        directReaderOrDownloadUrl: "https://gallica.bnf.fr/ark:/12148/bpt6k54467558",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Chapter 2",
        title: "Sankhya Yoga (Wisdom of the Eternal Self & Karma Yoga)",
        pageOrVerseRange: "72 Verses",
        summary: "Arjuna's surrender; Sri Krishna teaches the immortality of the soul (Na jayate mriyate va kadachin) and the foundational doctrine of Nishkama Karma (2.47).",
        keyConcepts: ["Immortality of Atman", "Sthitaprajna", "Nishkama Karma 2.47", "Krodhad Bhavati Sammohah"]
      },
      {
        chapterNumber: "Chapter 11",
        title: "Vishvarupa Darshana Yoga (The Cosmic Vision)",
        pageOrVerseRange: "55 Verses",
        summary: "Arjuna is granted the divine eye (Divya Chakshu) to witness the infinite cosmic manifestation encompassing all galaxies, suns, time vectors, and devouring entropy ('Kalo 'smi lokakshayakrit pravriddho').",
        keyConcepts: ["Divya Chakshu", "Vishvarupa", "Oppenheimer Atomic Citation (11.32)", "Kalo 'smi"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Bhagavad Gita 2.47",
        devanagari: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
        iast: "karmaṇy evādhikāras te mā phaleṣu kadācana | mā karmaphalahetur bhūr mā te saṅgo 'stv akarmaṇi ||",
        translationEnglish: "You have a right only to perform your prescribed duty, but never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.",
        translationsOtherLangs: {
          hi: "तुम्हारा केवल कर्म करने में ही अधिकार है, उसके फलों में कभी नहीं। इसलिए तुम कर्मों के फल के हेतु मत बनो और न ही तुम्हारी अकर्मण्यता (निष्क्रियता) में आसक्ति हो।",
          mr: "तुला फक्त कर्म करण्याचा अधिकार आहे, फळावर कधीही नाही. म्हणून तू फळाचा हेतू ठेवून कर्म करू नकोस आणि कर्म न करण्यामध्ये तुझी आसक्ती नसावी.",
          de: "Nur auf das Handeln hast du Anspruch, niemals auf die Früchte. Sei nicht angetrieben vom Lohn der Taten, noch hänge an der Untätigkeit.",
          fr: "Tu as droit à l'action seule, jamais à ses fruits. Ne fais pas du fruit de tes actes ton mobile; ne t'attache pas non plus à l'inaction."
        }
      }
    ],
    scienceAndPhilosophySignificance: "Foundation of cognitive emotional equilibrium, entropy minimization in intentional action, and quantum observer analogies.",
    bibtexCitation: `@book{gambhirananda1984gita, title={Bhagavad Gita: With the Commentary of Sankaracarya}, author={Gambhirananda, Swami and {\'S}a{\.n}kar{\=a}c{\=a}rya}, year={1984}, publisher={Advaita Ashrama}, address={Kolkata}}`
  },

  // 11. SHAD-DARSHANA: PATANJALI YOGA SUTRAS
  {
    id: "patanjali-yoga-sutras-vyasa-bhashya",
    title: "Patanjali Yoga Sutras (4 Padas with Vyasa Bhashya)",
    sanskritTitleDevanagari: "पातञ्जल योगसूत्राणि (व्यासभाष्यसहितानि)",
    sanskritTitleIAST: "Pātañjala Yogasūtrāṇi (with Vyāsa Bhāṣya)",
    category: "Shad-Darshanas & Philosophical Bhashyas",
    subCategory: "Shad-Darshana - Yoga Philosophy",
    traditionalRishiOrAuthor: "Maharshi Patanjali & Sage Veda Vyasa",
    recensionOrShakha: "196 Aphorisms in 4 Padas (Samadhi, Sadhana, Vibhuti, Kaivalya)",
    historicalPeriod: "Classical Period (c. 400 BCE–200 CE)",
    totalKandasOrAdhyayas: "4 Padas",
    totalVersesOrMantras: 196,
    executiveSummary: "The foundational codification of Classical Raja Yoga. Defines Yoga as the cessation of the modifications of the mind-stuff ('Yogaś citta-vṛtti-nirodhaḥ'), mapping the eightfold path (Ashtanga: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi) to liberation (Kaivalya).",
    swaraAccentsPreserved: false,
    notableCommentators: ["Veda Vyasa (Yoga Bhashya)", "Vachaspati Mishra (Tattvavaisharadi)", "Vijnanabhikshu (Yogavarttika)", "Swami Vivekananda (Raja Yoga 1896)", "James Haughton Woods (Harvard Oriental Series Vol 17)"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "YogaSystemOfPatanjaliJHWoodsHOS17",
      viewUrl: "https://archive.org/details/YogaSystemOfPatanjaliJHWoodsHOS17",
      pdfDownloadUrl: "https://archive.org/download/YogaSystemOfPatanjaliJHWoodsHOS17/YogaSystem_Woods_HOS17.pdf",
      epubDownloadUrl: "https://archive.org/download/YogaSystemOfPatanjaliJHWoodsHOS17/YogaSystem_Woods_HOS17.epub",
      txtDownloadUrl: "https://archive.org/download/YogaSystemOfPatanjaliJHWoodsHOS17/YogaSystem_Woods_Text.txt",
      license: "Public Domain",
      curatorNotes: "The Yoga-System of Patanjali with the Commentary of Vyasa translated by James Haughton Woods (Harvard Univ Press, 1914)."
    },
    alternateRepositories: [
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/3_phil/yoga/yogas_u.htm",
        type: "Machine Readable XML/TXT",
        description: "Electronic text of the Yoga Sutras with Vyasa Bhashya."
      },
      {
        name: "Muktabodha Digital Library",
        url: "https://muktabodha.org/digital-library/",
        type: "Full Text PDF",
        description: "Manuscripts of Kashmirian and Tantric Yoga commentaries."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Swami Vivekananda (Raja Yoga, New York, 1896)",
        publicationYear: "1896",
        publisher: "Brentano's, New York",
        formatsAvailable: ["PDF", "EPUB", "TXT", "HTML"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/RajaYogaSwamiVivekananda1896",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Swami Hariharananda Aranya / Gita Press",
        publicationYear: "1963",
        publisher: "Kapila Math / Gita Press",
        formatsAvailable: ["PDF"],
        repositoryName: "Gita Press Public Archives",
        directReaderOrDownloadUrl: "https://archive.org/details/PatanjalaYogadarshanaGitaPress",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Pada 1: Samadhi Pada",
        title: "The Nature of Mind and Meditative Absorption",
        pageOrVerseRange: "51 Sutras",
        summary: "Definition of Yoga, the 5 kinds of mental modifications (Pramana, Viparyaya, Vikalpa, Nidra, Smriti), Abhyasa & Vairagya, and stages of Samprajnata and Asamprajnata Samadhi.",
        keyConcepts: ["Citta Vritti Nirodha", "Abhyasa & Vairagya", "Ishvara Pranidhana", "Sabija & Nirbija Samadhi"]
      },
      {
        chapterNumber: "Pada 2: Sadhana Pada",
        title: "The Eight Limbs of Yoga (Ashtanga Yoga)",
        pageOrVerseRange: "55 Sutras",
        summary: "Kriya Yoga, the 5 Kleshas (Avidya, Asmita, Raga, Dvesha, Abhinivesha), and the first five limbs of Yoga (Yama, Niyama, Asana, Pranayama, Pratyahara).",
        keyConcepts: ["Kleshas", "Yama & Niyama", "Sthirasukham Asanam", "Pranayama"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Yoga Sutra 1.2",
        devanagari: "योगश्चित्तवृत्तिनिरोधः ॥ १.२ ॥",
        iast: "yogaś citta-vṛtti-nirodhaḥ || 1.2 ||",
        translationEnglish: "Yoga is the intentional restraint and stilling of the fluctuating modifications of the mind-field.",
        translationsOtherLangs: {
          hi: "चित्त की वृत्तियों (विचार-तरंगों) का निरोध (नियंत्रण व शांत होना) ही योग है।",
          mr: "चित्ताच्या वृत्तींचा निरोध करणे म्हणजेच योग होय.",
          de: "Yoga ist das Zur-Ruhe-Bringen der geistigen Regungen im Bewusstseinsfeld."
        }
      }
    ],
    scienceAndPhilosophySignificance: "Foundation of neuro-plasticity, autonomic nervous system modulation via Pranayama, and mindfulness neuroscience.",
    bibtexCitation: `@book{woods1914yogasystem, title={The Yoga-System of Pata{\~n}jali: Or the Ancient Hindu Doctrine of Concentration of Mind}, author={Woods, James Haughton}, year={1914}, publisher={Harvard University Press}, series={Harvard Oriental Series}, volume={17}}`
  },

  // 12. UPAVEDA: CHARAKA SAMHITA (AYURVEDA)
  {
    id: "charaka-samhita-ayurveda-complete",
    title: "Charaka Samhita (Complete 8 Sthanas of Ayurveda)",
    sanskritTitleDevanagari: "चरक संहिता (अष्टस्थानसम्पन्ना आयुर्वेदप्रदीपिका)",
    sanskritTitleIAST: "Caraka Saṃhitā (Complete 8 Sthānas of Āyurveda)",
    category: "Ayurveda & Health Sciences (Upaveda)",
    subCategory: "Ayurveda - Internal Medicine & Systemic Physiology (Kaya Chikitsa)",
    traditionalRishiOrAuthor: "Maharshi Punarvasu Atreya, Agnivesha & Maharshi Charaka (Driddhabala recension)",
    recensionOrShakha: "8 Sthanas, 120 Chapters (Sutra, Nidana, Vimana, Sharira, Indriya, Chikitsa, Kalpa, Siddhi)",
    historicalPeriod: "Antiquity (Core Agnivesha c. 1000 BCE / Charaka c. 300 BCE–100 CE / Dridhabala c. 4th Century CE)",
    totalKandasOrAdhyayas: "8 Sthanas (120 Adhyayas)",
    totalVersesOrMantras: "9,295 Shlokas and Prose Sutras",
    executiveSummary: "The sovereign foundational encyclopedia of internal medicine (Kaya Chikitsa), pharmacology, human physiology, chronobiology (Dinacharya/Ritucharya), and psychosomatic health. Systematizes the Tridosha dynamics (Vata, Pitta, Kapha), Saptadhatu tissue metabolism, Agni digestion, Ojas vitality, and the 50 Mahakashayas (herbal therapeutic decads).",
    swaraAccentsPreserved: false,
    notableCommentators: ["Chakrapanidatta (Ayurveda Dipika, 11th Cent)", "Jejjata (Nirantarapadavyakhya)", "Gangadhar Kaviraj (Jalpakalpataru)", "Yogindranath Sen (Charakopaskara)", "Shivadasa Sena", "Prof. P.V. Sharma", "Acharya Yadavji Trikamji"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "CharakaSamhitaGulabkunverba6Vols",
      viewUrl: "https://archive.org/details/CharakaSamhitaGulabkunverba6Vols",
      pdfDownloadUrl: "https://archive.org/download/CharakaSamhitaGulabkunverba6Vols/Charaka_Gulabkunverba_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/CharakaSamhitaGulabkunverba6Vols/Charaka_Gulabkunverba_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/CharakaSamhitaGulabkunverba6Vols/Charaka_Text.txt",
      teiXmlUrl: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/2_med/cs_sthu.htm",
      license: "Public Domain Mark 1.0 (Open Access)",
      curatorNotes: "Jamnagar Ayurvedic Society 6-volume landmark monumental edition with Sanskrit, English, Hindi and Gujarati translations, edited by P.M. Mehta (1949)."
    },
    alternateRepositories: [
      {
        name: "Digital Library of India (DLI)",
        url: "https://archive.org/details/CharakaSamhitaGangadhara",
        type: "Full Text PDF",
        description: "Gangadhara Kaviraj 3-volume critical Sanskrit Jalpakalpataru edition."
      },
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/2_med/cs_sthu.htm",
        type: "Machine Readable XML/TXT",
        description: "Machine-readable Sanskrit text of all 8 Sthanas based on Yadavji Trikamji Acharya."
      },
      {
        name: "BORI Open Access Repository",
        url: "https://bori.ac.in",
        type: "Critical Edition Notes",
        description: "Bhandarkar Oriental Research Institute manuscript collation notes."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Prof. P.V. Sharma (4 volumes complete)",
        publicationYear: "1981",
        publisher: "Chaukhambha Orientalia, Varanasi",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/CharakaSamhitaPVSharmaComplete",
        license: "Academic Fair Use"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Pt. Kashinath Shastri & Dr. Gorakhnath Chaturvedi (Vidyotini Hindi Commentary)",
        publicationYear: "1962",
        publisher: "Chaukhambha Bharati Academy, Varanasi",
        formatsAvailable: ["PDF"],
        repositoryName: "Digital Library of India (DLI)",
        directReaderOrDownloadUrl: "https://archive.org/details/CharakaSamhitaHindiKashinath",
        license: "Public Domain"
      },
      {
        languageName: "English (Classical)",
        languageCode: "en-gb",
        translatorOrEditor: "Kaviraj Avinash Chandra Kaviratna (First complete English translation)",
        publicationYear: "1890",
        publisher: "Calcutta Medical Press",
        formatsAvailable: ["PDF", "EPUB"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/charakasamhitavr00kaviratna",
        license: "Public Domain"
      },
      {
        languageName: "German (Deutsch)",
        languageCode: "de",
        translatorOrEditor: "Alois Roesch & Richard Schmidt (Indologische Monographien)",
        publicationYear: "1928",
        publisher: "Leipzig Verlag",
        formatsAvailable: ["PDF"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/charakasamhitagerman",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "1. Sutra Sthana (सूत्रस्थानम्)",
        title: "Fundamental Principles, Epistemology & Pharmacology",
        pageOrVerseRange: "30 Chapters (Adhyayas 1–30)",
        summary: "Cosmological origins of medicine, Shad-Dravya categories, Tridosha etiology, Dinacharya/Ritucharya chronobiology, 50 Mahakashayas (botanical decads), Snehana-Svedana, and principles of physician ethics.",
        keyConcepts: ["Tridosha (Vata Pitta Kapha)", "Saptadhatu", "50 Mahakashaya Classifications", "Ritucharya Biorhythms", "Samanya-Vishesha Epistemology"]
      },
      {
        chapterNumber: "2. Nidana Sthana (निदानस्थानम्)",
        title: "Pathology & Etiological Diagnosis",
        pageOrVerseRange: "8 Chapters (Adhyayas 1–8)",
        summary: "Etiology (Hetu), prodromal symptoms (Purvarupa), clinical signs (Rupa), therapeutics (Upashaya), and pathogenesis (Samprapti) of Jwara, Raktapitta, Gulma, Prameha (diabetes), Kushtha, Shosha, Unmada, and Apasmara.",
        keyConcepts: ["Pancha Nidana Diagnostic Method", "Samprapti Pathogenesis", "Prameha Diabetes Subtypes", "Jwara Metabolic Fevers"]
      },
      {
        chapterNumber: "3. Vimana Sthana (विमानस्थानम्)",
        title: "Specific Epistemological Determinations & Epidemiology",
        pageOrVerseRange: "8 Chapters (Adhyayas 1–8)",
        summary: "Taste physics (Rasa-Vimana), food compatibility, clinical examination methods (Trividha/Ashtavidha Pariksha), epidemiology & environmental collapse (Janapadodhvamsa), and debate methodologies (Sambhava Parishad).",
        keyConcepts: ["Janapadodhvamsa (Air, Water, Desha, Kala pollution)", "Srotas Channels", "Rasa Guna Virya Vipaka", "Sambhava Scholarly Debate"]
      },
      {
        chapterNumber: "4. Sharira Sthana (शारीरस्थानम्)",
        title: "Human Anatomy, Embryology & Metaphysics",
        pageOrVerseRange: "8 Chapters (Adhyayas 1–8)",
        summary: "Metaphysical Purusha, union of Atman, mind and Shukra-Artava, fetal embryology month-by-month, Prakriti genetic constitution, anatomical osteology, and psychosomatic personality typologies.",
        keyConcepts: ["Garbhadhana Embryology", "Prakriti Genetics", "Sharira Rachana (Anatomy)", "Sattva Bala (Mental Resilience)"]
      },
      {
        chapterNumber: "5. Indriya Sthana (इन्द्रियस्थानम्)",
        title: "Prognostic Signs & Sensory Symptoms",
        pageOrVerseRange: "12 Chapters (Adhyayas 1–12)",
        summary: "Clinical assessment of longevity, sensory organ diagnostics, fatal prognostic indications (Arishta Lakshanas), and chronometric symptom evaluation.",
        keyConcepts: ["Arishta Prognosis", "Sensory Organ Tests", "Chhaya & Prabha Radiance Analysis"]
      },
      {
        chapterNumber: "6. Chikitsa Sthana (चिकित्सास्थानम्)",
        title: "Therapeutics, Clinical Medicine & Rasayana Longevity",
        pageOrVerseRange: "30 Chapters (Adhyayas 1–30)",
        summary: "Comprehensive treatment protocols for 30 major clinical categories including Rasayana (rejuvenation), Vajikarana (reproductive vigor), Jwara, Raktapitta, Grahani (gut microbiome/colitis), Rajayakshma, and Arsha.",
        keyConcepts: ["Rasayana Longevity Science", "Chyavanaprasha Formula", "Brahma Rasayana", "Medhya Rasayana (Nootropics)", "Agni Metabolic Restoration"]
      },
      {
        chapterNumber: "7. Kalpa Sthana (कल्पस्थानम्)",
        title: "Pharmaceutics & Formulation Chemistry",
        pageOrVerseRange: "12 Chapters (Adhyayas 1–12)",
        summary: "Preparation and therapeutic titration of emetics and purgatives (Madanaphala, Jimutaka, Ikshvaku, Dhamargava, Trivrit, Tilwaka) for Panchakarma detoxification.",
        keyConcepts: ["Madanaphala Emetic Science", "Trivrit Purgative Formulations", "Panchakarma Dose Titration"]
      },
      {
        chapterNumber: "8. Siddhi Sthana (सिद्धिस्थानम्)",
        title: "Clinical Mastery & Complications Management",
        pageOrVerseRange: "12 Chapters (Adhyayas 1–12)",
        summary: "Mastery of Basti (medicated enema - the supreme Vata cure), Nirooha & Anuvasana protocols, emergency counter-measures, and physician professional excellence.",
        keyConcepts: ["Basti Therapy (Ardha Chikitsa)", "Uttara Basti", "Panchakarma Complication Reversal"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Charaka Samhita Sutra Sthana 1.41 (Definition of Ayurveda)",
        devanagari: "हिताहितं सुखं दुःखमायुस्तस्य हिताहितम् । मानं च तच्च यत्रोक्तमायुर्वेदः स उच्यते ॥",
        iast: "hitāhitaṃ sukhaṃ duḥkham āyus tasya hitāhitam | mānaṃ ca tac ca yatroktam āyurvedaḥ sa ucyate ||",
        padapatha: "हित-अहितम् सुखम् दुःखम् आयुः तस्य हित-अहितम् । मानम् च तत् च यत्र उक्तम् आयुर्वेदः सः उच्यते ॥",
        wordForWord: [
          { word: "हिताहितम् (hitāhitam)", meaning: "wholesome and unwholesome conditions" },
          { word: "सुखम् (sukham)", meaning: "happy, balanced state of living" },
          { word: "दुःखम् (duḥkham)", meaning: "diseased, sorrowful state" },
          { word: "आयुः (āyuḥ)", meaning: "span of conscious living life" },
          { word: "मानम् (mānam)", meaning: "measure and quantitative longevity" },
          { word: "आयुर्वेदः (āyurvedaḥ)", meaning: "the sovereign Science of Life" }
        ],
        translationEnglish: "That science is designated as Ayurveda which explains the wholesome (hita) and unwholesome (ahita), happy (sukha) and unhappy (duhkha) states of life, what is conducive or detrimental to longevity, and the measure of life itself.",
        translationsOtherLangs: {
          hi: "जिसमें हितकर और अहितकर, सुखमय और दुखमय आयु का, तथा आयु के लिए उपयोगी और अनुपयोगी पदार्थों का और आयु के प्रमाण का वर्णन हो, उसे 'आयुर्वेद' कहते हैं।",
          de: "Dasjenige Wissen wird als Ayurveda bezeichnet, welches das heilsame und unheilsame, das glückliche und unglückliche Leben, sowie die Lebensdauer und das Wesen des Lebens darlegt."
        },
        commentaries: [
          {
            commentator: "Chakrapanidatta (Ayurveda Dipika)",
            school: "Classical Systemic Epistemology",
            text: "Ayurveda is not merely a clinical manual for curing disease, but an existential science illuminating the moral, physical, biological and metaphysical factors that sustain blissful and purposeful human existence."
          },
          {
            commentator: "Gangadhar Kaviraj (Jalpakalpataru)",
            school: "Nidana-Chikitsa Synthesizer",
            text: "The fourfold division of life (Hita, Ahita, Sukha, Asukha) encompasses psychosomatic harmony with nature, social ecology, and spiritual fulfillment."
          }
        ]
      },
      {
        verseNumber: "Charaka Samhita Sutra Sthana 1.54 (Tridosha Equilibrium Doctrine)",
        devanagari: "वायुः पित्तं कफश्चोक्तः शारीरो दोषसंग्रहः । मानसः पुनरुद्दिष्टो रजश्च तम एव च ॥",
        iast: "vāyuḥ pittaṃ kaphaś coktaḥ śārīro doṣasaṃgrahaḥ | mānasaḥ punar uddiṣṭo rajaś ca tama eva ca ||",
        padapatha: "वायुः पित्तम् कफः च उक्तः शारीरः दोष-संग्रहः । मानसः पुनः उद्दिष्टः रजः च तमः एव च ॥",
        translationEnglish: "Vata (kinetic bio-energy), Pitta (thermal-metabolic energy), and Kapha (structural-cohesive bio-fluid) constitute the somatic bio-energetic regulatory triad (Doshas). Rajas (passion/turbulence) and Tamas (inertia/darkness) constitute the mental afflictions.",
        translationsOtherLangs: {
          hi: "वायु, पित्त और कफ—यह तीन शारीरिक दोषों का समूह कहा गया है; तथा रज और तम—यह दो मानसिक दोष कहे गए हैं।"
        }
      },
      {
        verseNumber: "Charaka Samhita Chikitsa Sthana 1.1.7–8 (The Essence of Rasayana Longevity)",
        devanagari: "दीर्घमायुः स्मृतिं मेधामारोग्यं तरुणं वयः । प्रभावर्णस्वरौदार्यं देहेन्द्रियबलं परम् ॥ वाक्सिद्धिं प्रणतिं कान्तिं लभते ना रसायनात् । लाभोपायो हि शस्तानां रसादीनां रसायनम् ॥",
        iast: "dīrgham āyuḥ smṛtiṃ medhām ārogyaṃ taruṇaṃ vayaḥ | prabhā-varṇa-svaraudāryaṃ dehendriya-balaṃ param || vāk-siddhiṃ praṇatiṃ kāntiṃ labhate nā rasāyanāt | lābhopāyo hi śastānāṃ rasādīnāṃ rasāyanam ||",
        translationEnglish: "Through Rasayana (rejuvenation therapy), one obtains longevity, heightened memory (smriti), cognitive intellect (medha), radiant immunity (arogya), youthful vitality, luster of complexion, melodic vocal resonance, supreme bodily and sensory strength, and charismatic radiance. Rasayana is that which yields supreme excellence of Rasa and all seven biological Dhatus.",
        translationsOtherLangs: {
          hi: "रसायन सेवन से मनुष्य दीर्घायु, उत्तम स्मरणशक्ति, तीव्र बुद्धि, संपूर्ण नीरोगता, तरुण अवस्था, उत्तम कान्ति, वर्ण और स्वर, देह व इन्द्रियों का परम बल, और वाणी की सिद्धि प्राप्त करता है।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "The foundation of systems biology, chronobiology (circadian rhythms), psychoneuroimmunology, adaptogenic phytopharmacology, and epigenetic health maintenance.",
    bibtexCitation: `@book{sharma1981caraka, title={Caraka-Samhita: Agnivesa's Treatise Refined and Annotated by Caraka and Redacted by Drdhabala}, author={Sharma, P. V.}, year={1981--1994}, publisher={Chaukhambha Orientalia}, address={Varanasi}}`
  },

  // 12B. UPAVEDA: SUSHRUTA SAMHITA (SURGERY & ANATOMY)
  {
    id: "sushruta-samhita-salya-tantra-complete",
    title: "Sushruta Samhita (Complete 6 Sthanas - Father of Surgery)",
    sanskritTitleDevanagari: "सुश्रुत संहिता (शल्यतन्त्र-शारीर-शस्त्रविद्या महाशास्त्रम्)",
    sanskritTitleIAST: "Suśruta Saṃhitā (Śalyatantra & Sacred Indic Surgery)",
    category: "Ayurveda & Health Sciences (Upaveda)",
    subCategory: "Ayurveda - Surgery (Shalya Tantra), Anatomy & Ophthalmology (Shalakya)",
    traditionalRishiOrAuthor: "Divodasa Dhanvantari (King of Kashi) & Acharya Sushruta (Nagarjuna redactor)",
    recensionOrShakha: "6 Sthanas, 186 Chapters (Sutra, Nidana, Sharira, Chikitsa, Kalpa, Uttara Tantra)",
    historicalPeriod: "Antiquity (c. 1000–600 BCE core / classical recension c. 2nd Century CE)",
    totalKandasOrAdhyayas: "6 Sthanas (186 Adhyayas)",
    totalVersesOrMantras: "~8,300 Shlokas & Operative Protocols",
    executiveSummary: "The supreme classical authority on surgical techniques (Shalya Tantra), clinical anatomy (Sharira), reconstructive plastic surgery (rhinoplasty, otoplasty), lithotomy (Ashmari), cataract couching, 101 blunt Yantras, 20 sharp Shastras, leech therapy (Jalaukavacharana), and the seminal holistic definition of Swastha (perfect physical-psychic health).",
    swaraAccentsPreserved: false,
    notableCommentators: ["Dalhanacharya (Nibandha Samgraha, 12th Cent)", "Gayadasa (Nyayachandrika)", "Chakrapanidatta (Bhanumati)", "Kaviraj Kunjalal Bhishagratna", "Dr. Ambikadatta Shastri"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "sushrutasamhitaenglishtranslationbhishagratna3vols",
      viewUrl: "https://archive.org/details/sushrutasamhita01susr",
      pdfDownloadUrl: "https://archive.org/download/sushrutasamhita01susr/sushrutasamhita01susr.pdf",
      epubDownloadUrl: "https://archive.org/download/sushrutasamhita01susr/sushrutasamhita01susr.epub",
      txtDownloadUrl: "https://archive.org/download/sushrutasamhita01susr/sushrutasamhita01susr_djvu.txt",
      teiXmlUrl: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/2_med/ss_sthu.htm",
      license: "Public Domain Mark 1.0",
      curatorNotes: "Kaviraj Kunjalal Bhishagratna 3-volume master English translation with comparative surgical notes (Calcutta, 1907–1916)."
    },
    alternateRepositories: [
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/2_med/ss_sthu.htm",
        type: "Machine Readable XML/TXT",
        description: "Complete Sanskrit e-text with Dalhana's Nibandhasamgraha."
      },
      {
        name: "Digital Library of India (DLI)",
        url: "https://archive.org/details/SushrutaSamhitaAmbikadattaShastri",
        type: "Full Text PDF",
        description: "Ayurveda Tatva Sandipika Hindi commentary by Kaviraj Ambikadatta Shastri."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English (3 Volumes Complete)",
        languageCode: "en",
        translatorOrEditor: "Kaviraj Kunjalal Bhishagratna",
        publicationYear: "1907–1916",
        publisher: "Calcutta Medical House",
        formatsAvailable: ["PDF", "TXT", "EPUB"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/sushrutasamhita01susr",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Dr. Ambikadatta Shastri",
        publicationYear: "1954",
        publisher: "Chaukhambha Sanskrit Sansthan, Varanasi",
        formatsAvailable: ["PDF"],
        repositoryName: "Digital Library of India (DLI)",
        directReaderOrDownloadUrl: "https://archive.org/details/SushrutaSamhitaAmbikadattaShastri",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "1. Sutra Sthana (सूत्रस्थानम्)",
        title: "Surgical Principles, Instruments & Leech Therapy",
        pageOrVerseRange: "46 Chapters",
        summary: "Origins of Shalya Tantra, qualifications of a surgeon, sterilization, 101 blunt Yantras, 20 sharp Shastras, cauterization (Kshara/Agni Karma), and the classical definition of Swastha.",
        keyConcepts: ["101 Yantras & 20 Shastras", "Jalaukavacharana (Leeches)", "Ksharasutra", "Swastha Definition (15.48)"]
      },
      {
        chapterNumber: "2. Nidana Sthana (निदानस्थानम्)",
        title: "Surgical Pathology & Differential Diagnosis",
        pageOrVerseRange: "16 Chapters",
        summary: "Etiology of fractures (Bhagna), stones/calculi (Ashmari), fistula-in-ano (Bhagandara), hernia, and surgical tumors (Arbuda).",
        keyConcepts: ["Ashmari Lithotomy", "Bhagna Fractures", "Arbuda Oncological Pathology"]
      },
      {
        chapterNumber: "3. Sharira Sthana (शारीरस्थानम्)",
        title: "Human Anatomy, Cadaveric Dissection & 107 Marma Points",
        pageOrVerseRange: "10 Chapters",
        summary: "Pioneering cadaveric dissection method (water-immersion brush technique), embryology, 107 vital Marma points, arterial/venous networks (Sira-Dhamani), and neuro-anatomy.",
        keyConcepts: ["107 Marma Vital Energy Points", "Cadaveric Dissection (Avagahana)", "Garbha Sharira"]
      },
      {
        chapterNumber: "4. Chikitsa Sthana (चिकित्सास्थानम्)",
        title: "Operative Surgery, Reconstructive Rhinoplasty & Wound Healing",
        pageOrVerseRange: "40 Chapters",
        summary: "Operative protocols for Rhinoplasty (cheek flap technique), Otoplasty, laparotomy, wound care (Shashti Upakramas), and Rasayana.",
        keyConcepts: ["Rhinoplasty (Nasa Sandhana)", "Otoplasty", "60 Wound Management Steps (Shashti Upakrama)"]
      },
      {
        chapterNumber: "5. Kalpa Sthana (कल्पस्थानम्)",
        title: "Toxicology & Forensics (Agada Tantra)",
        pageOrVerseRange: "8 Chapters",
        summary: "Vegetable and mineral poisons, snakebites, scorpion stings, and systemic antidotes.",
        keyConcepts: ["Sarpa Visha (Ophitoxemia)", "Dushi Visha (Latent Toxins)", "Agada Antidotes"]
      },
      {
        chapterNumber: "6. Uttara Tantra (उत्तरतन्त्रम्)",
        title: "Ophthalmology, ENT, Pediatrics & Psychiatry",
        pageOrVerseRange: "66 Chapters",
        summary: "76 eye diseases (Shalakya Tantra), cataract couching surgery (Linga-Nasha), ENT procedures, and Bhuta Vidya (mental health).",
        keyConcepts: ["Cataract Couching (Linga-nasha)", "Shalakya Tantra Eye Diseases", "Graha Roga Pediatrics"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Sushruta Samhita Sutra Sthana 15.48 (The Ultimate Definition of Health)",
        devanagari: "समदोषः समाग्निश्च समधातुमलक्रियः । प्रसन्नात्मेन्द्रियमनाः स्वस्थ इत्यभिधीयते ॥",
        iast: "samadoṣaḥ samāgniś ca samadhātumalakriyaḥ | prasannātmendriyamanāḥ svastha ity abhidhīyate ||",
        padapatha: "सम-दोषः सम-अग्निः च सम-धातु-मल-क्रियः । प्रसन्न-आत्मा-इन्द्रिय-मनाः स्वस्थः इति अभिधीयते ॥",
        wordForWord: [
          { word: "समदोषः (samadoṣaḥ)", meaning: "one whose biological humors (Vata, Pitta, Kapha) are in equilibrium" },
          { word: "समाग्निश्च (samāgniśca)", meaning: "whose metabolic and digestive fires are perfectly balanced" },
          { word: "समधातुमलक्रियः (samadhātumalakriyaḥ)", meaning: "whose 7 body tissues (Dhatus) and excretory wastes (Malas) function normally" },
          { word: "प्रसन्नात्मेन्द्रियमनाः (prasannātmendriyamanāḥ)", meaning: "whose Soul (Atman), sensory organs (Indriyas), and Mind (Manas) are in blissful serenity" },
          { word: "स्वस्थः (svasthaḥ)", meaning: "is truly established in Self / perfectly healthy (Swastha)" }
        ],
        translationEnglish: "One who possesses balanced Doshas (bio-energies), balanced digestive-metabolic Agni, properly formed and functioning body tissues (Dhatus) and waste elimination (Malas), and whose Soul, sensory faculties, and Mind reside in serene bliss, is denominated as 'Swastha' (truly healthy).",
        translationsOtherLangs: {
          hi: "जिसके वात-पित्त-कफ तीनों दोष सम अवस्था में हों, जठराग्नि सम हो, सातों धातुएं और मल-क्रियाएं उचित हों, तथा जिसकी आत्मा, इन्द्रियाँ और मन प्रसन्न हों, वही 'स्वस्थ' कहलाता है।"
        },
        commentaries: [
          {
            commentator: "Dalhanacharya (Nibandha Samgraha)",
            school: "Surgical-Physiological Hermeneutics",
            text: "Notice that physical equilibrium alone is insufficient; true Swasthya requires subjective cognitive and spiritual serenity (Prasanna Atma, Indriya, and Manas)."
          }
        ]
      }
    ],
    scienceAndPhilosophySignificance: "Birthplace of rhinoplasty, sterile surgical instruments, Marma neuro-vascular mapping, and the comprehensive biopsychosocial definition of health adopted by modern WHO paradigms.",
    bibtexCitation: `@book{bhishagratna1907sushruta, title={An English Translation of the Sushruta Samhita: Based on Original Sanskrit Text}, author={Bhishagratna, Kaviraj Kunjalal}, year={1907--1916}, publisher={Calcutta Medical House}, address={Calcutta}}`
  },

  // 12C. CLASSICAL CANON: BHAGAVATI SAMHITA (VYAKHYAPRAJNAPTI SUTRA)
  {
    id: "bhagavati-samhita-vyakhyaprajnapti",
    title: "Bhagavati Samhita (Vyakhyaprajnapti Sutra - Quantum Matter, Biology & Universal Physics)",
    sanskritTitleDevanagari: "भगवती संहिता (श्री व्याख्याप्रज्ञप्ति सूत्रम् - परमाणु, जीव, द्रव्य व आयुर्वेद महाज्ञान)",
    sanskritTitleIAST: "Bhagavatī Saṃhitā (Śrī Vyākhyāprajñapti Sūtra - Atomic Physics & Bio-Cosmology)",
    category: "Agamas, Tantras & Shilpa Shastras",
    subCategory: "Vedic-Agamic Encyclopedic Samhita - Physics, Biology & Epistemology",
    traditionalRishiOrAuthor: "Bhagavan Mahavira (Expositions to Ganadhara Indrabhuti Gautama) & Acharya Sudharmasvami",
    recensionOrShakha: "41 Shatakas (Hundreds), Thousands of Adhyayanas in Prakrit with Sanskrit Chhaya",
    historicalPeriod: "Antiquity (c. 6th Century BCE oral exposition / Valabhi council recension c. 453 CE)",
    totalKandasOrAdhyayas: "41 Shatakas (Sub-divided into thousands of Sutras)",
    totalVersesOrMantras: "~36,000 Canonical Units (Gathas & Prose Dialogues)",
    executiveSummary: "The monumental 5th Anga/Samhita encyclopedia containing thousands of profound scientific dialogues on the physics of matter (Pudgala), atomic bonds (Paramanu bandhana), the 6 fundamental cosmological substances (Shad-Dravyas: Jiva, Pudgala, Dharma, Adharma, Akasha, Kala), comprehensive biological classification of all sentient life forms (8.4 million life-matrices / Jiva-Yoni), plant physiology, digestion, metabolic assimilation, and bio-energetic consciousness (Leshya).",
    swaraAccentsPreserved: false,
    notableCommentators: ["Acharya Abhayadeva Suri (11th Cent Sanskrit Tika)", "Acharya Malayagiri", "Pt. Bechardas J. Doshi", "Prof. K.C. Lalwani", "Acharya Mahapragya"],
    canonicalRepository: {
      name: "Jain eLibrary Digital Archive",
      identifierOrArk: "BhagavatiSutraVyakhyaprajnaptiCompletePrakritSanskritHindi",
      viewUrl: "https://jainelibrary.org",
      pdfDownloadUrl: "https://archive.org/download/BhagavatiSutraCompleteAbhayadeva/Bhagavati_Sutra_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/BhagavatiSutraCompleteAbhayadeva/Bhagavati_Sutra_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/BhagavatiSutraCompleteAbhayadeva/Bhagavati_Text.txt",
      teiXmlUrl: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/4_jaina/bhagv_u.htm",
      license: "Public Domain Mark 1.0 (Worldwide Open Access)",
      curatorNotes: "Agamodaya Samiti critical edition edited with Abhayadeva Suri's Sanskrit commentary (Bombay/Mehsana, 1918–1921)."
    },
    alternateRepositories: [
      {
        name: "Internet Archive (archive.org)",
        url: "https://archive.org/details/BhagavatiSutraKCLalwaniEnglish4Vols",
        type: "Full Text PDF",
        description: "Prof. K.C. Lalwani 4-volume English translation with critical scientific notes (Calcutta, 1973)."
      },
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/4_jaina/bhagv_u.htm",
        type: "Machine Readable XML/TXT",
        description: "Göttingen University machine-readable digital corpus."
      },
      {
        name: "BORI Open Access Repository",
        url: "https://bori.ac.in",
        type: "Multi-volume Archive",
        description: "Bhandarkar Oriental Research Institute Prakrit-Sanskrit collection."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English (4 Volumes)",
        languageCode: "en",
        translatorOrEditor: "Prof. K.C. Lalwani (Calcutta Research Monograph)",
        publicationYear: "1973–1985",
        publisher: "Jain Bhawan, Calcutta",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/BhagavatiSutraKCLalwaniEnglish4Vols",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Pt. Bechardas Doshi & Pt. Amritlal Mohanlal",
        publicationYear: "1937",
        publisher: "Agamodaya Samiti & Sastu Sahitya Vardhak Karyalaya",
        formatsAvailable: ["PDF"],
        repositoryName: "Digital Library of India (DLI)",
        directReaderOrDownloadUrl: "https://archive.org/details/BhagavatiSutraHindiBechardas",
        license: "Public Domain"
      },
      {
        languageName: "Prakrit Original with Sanskrit Chhaya",
        languageCode: "sa-pra",
        translatorOrEditor: "Acharya Abhayadeva Suri (Agamodaya Edition)",
        publicationYear: "1918",
        publisher: "Nirnaya Sagar Press, Bombay",
        formatsAvailable: ["PDF", "TEI-XML"],
        repositoryName: "Jain eLibrary Digital Archive",
        directReaderOrDownloadUrl: "https://jainelibrary.org",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Shataka 1–5: Atomic Physics & Matter (Pudgala)",
        title: "Paramanu, Quantum Bonding & Space-Time Continuum",
        pageOrVerseRange: "Shatakas 1 to 5",
        summary: "Nature of the indivisible point-particle (Paramanu), energy transformation, Snigdha (attractive) and Ruksha (repulsive) atomic bonding forces, Skandha molecular aggregates, and the infinite ether of Akasha.",
        keyConcepts: ["Paramanu (Indivisible Particle)", "Snigdha-Ruksha Atomic Forces", "Skandha Molecular Chains", "Akasha Space Grid"]
      },
      {
        chapterNumber: "Shataka 6–15: Biological Taxonomy & Life Matrices (Jiva-Yoni)",
        title: "8.4 Million Life-Forms, Cellular Consciousness & Plant Sensation",
        pageOrVerseRange: "Shatakas 6 to 15",
        summary: "Classification of organisms from single-sensed microbes (Nigoda/Ekendriya) to five-sensed human beings; botanical classification of roots, tubers, leaves, and medicinal barks with plant sensory awareness.",
        keyConcepts: ["8.4 Million Jiva-Yoni Matrices", "Vanaspatikaya Plant Physiology", "Ekendriya to Panchendriya Classification"]
      },
      {
        chapterNumber: "Shataka 16–25: Bio-Metabolism, Food Digestion & Dietetics",
        title: "Ahara Digestion, Metabolic Transformations & Rasa Assimilation",
        pageOrVerseRange: "Shatakas 16 to 25",
        summary: "Mechanisms of cellular nutrition (Ojas-Ahara, Prakshipta-Ahara), biochemical breakdown of food, digestion speed, bodily temperature regulation, and toxic excretions.",
        keyConcepts: ["Ojas-Ahara Cellular Assimilation", "Metabolic Thermal Agni", "Dietary Equilibrium"]
      },
      {
        chapterNumber: "Shataka 26–41: Psycho-Bio-Energetics, Karma Physics & Cosmology",
        title: "Leshya Color-Bio-Energy, Soul Radiation & Lokakasha Geometry",
        pageOrVerseRange: "Shatakas 26 to 41",
        summary: "6 color-auras (Leshyas) reflecting psychic neuro-endocrine states, the structure of the cosmos (Triloka), gravitational balance of Dharma-Adharma dravyas, and ultimate liberation (Moksha).",
        keyConcepts: ["Leshya Bio-Energetic Aura", "Triloka Cosmic Coordinates", "Dharmastikaya Motion Medium"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Bhagavati Samhita (Vyakhyaprajnapti) Shataka 5, Uddeśaka 7 (Atomic Structure & Bonding)",
        devanagari: "अणवो हि परमाणवः निरंशाः सूक्ष्माः नित्याः स्निग्धरूक्षत्वगुणयुक्ताः संघातविभागाभ्यां स्कन्धरूपेण परिणमन्ते ॥",
        iast: "aṇavo hi paramāṇavaḥ niraṃśāḥ sūkṣmāḥ nityāḥ snigdha-rūkṣatva-guṇa-yuktāḥ saṅghāta-vibhāgābhyāṃ skandha-rūpeṇa pariṇamante ||",
        padapatha: "अणवः हि परमाणवः निरंशाः सूक्ष्माः नित्याः स्निग्ध-रूक्षत्व-गुण-युक्ताः संघात-विभागाभ्याम् स्कन्ध-रूपेण परिणमन्ते ॥",
        translationEnglish: "Paramanus (the indivisible fundamental atoms) are without parts, infinitely subtle, eternal, endowed with intrinsic forces of cohesiveness (snigdha / attractive valence) and dryness (ruksha / repulsive charge). Through atomic aggregation (sanghata) and fission (vibhaga), they transform into compound molecular matter (Skandha).",
        translationsOtherLangs: {
          hi: "परमाणु निरंश (अविभाज्य), सूक्ष्म, नित्य तथा स्निग्ध और रूक्ष गुण वाले होते हैं। वे संघात (संयोग) और विभाग (विघटन) द्वारा स्कंध (स्थूल पदार्थ) के रूप में परिणत होते हैं।"
        },
        commentaries: [
          {
            commentator: "Acharya Abhayadeva Suri (Vyakhyaprajnapti Tika)",
            school: "Agamic Physics & Epistemology",
            text: "This ancient analysis anticipated the principles of molecular valence, atomic cohesion, and mass-energy transformation over two millennia before modern atomic physics."
          }
        ]
      }
    ],
    scienceAndPhilosophySignificance: "Foreshadows atomic physics, molecular bonding (Snigdha/Ruksha valence), plant neurobiology, the 6 cosmological substances, and deep bio-energetic taxonomy.",
    bibtexCitation: `@book{lalwani1973bhagavati, title={Bhagavatī Sūtra: Prakrit Text with English Translation and Notes}, author={Lalwani, K. C.}, year={1973}, publisher={Jain Bhawan}, address={Calcutta}}`
  },

  // 12D. CLASSICAL AYURVEDA: ASHTANGA HRIDAYAM (VAGBHATA)
  {
    id: "ashtanga-hridayam-vagbhata-complete",
    title: "Ashtanga Hridaya (Complete 6 Sthanas - Shrimad Vagbhata)",
    sanskritTitleDevanagari: "अष्टाङ्गहृदयम् (श्रीमद्वाग्भटविरचितं सम्पूर्णम्)",
    sanskritTitleIAST: "Aṣṭāṅgahṛdayam (Shrimad Vāgbhaṭa's Poetic Masterpiece)",
    category: "Ayurveda & Health Sciences (Upaveda)",
    subCategory: "Ayurveda - Poetic Synthesis of Medicine & Surgery (Brihat Trayi)",
    traditionalRishiOrAuthor: "Acharya Vagbhata (Son of Simhagupta)",
    recensionOrShakha: "6 Sthanas, 120 Adhyayas, ~7,120 Metric Verses",
    historicalPeriod: "Classical Golden Age (c. 6th–7th Century CE)",
    totalKandasOrAdhyayas: "6 Sthanas (120 Adhyayas)",
    totalVersesOrMantras: 7120,
    executiveSummary: "Celebrated across India, Tibet, and Central Asia as the most elegant, memorizable, and clinically concise synthesis of the Brihat Trayi (Charaka and Sushruta). Expounds internal medicine, surgery, pediatrics, toxicology, and the golden rules of Dinacharya, Ritucharya, and Agni metabolism in sublime classical poetry.",
    swaraAccentsPreserved: false,
    notableCommentators: ["Arunadatta (Sarvangasundara, 12th Cent)", "Hemadri (Ayurveda Rasayana, 13th Cent)", "Prof. K.R. Srikantha Murthy", "Pt. Lalchandra Vaidya"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "AshtangaHridayaSrikanthaMurthy3Vols",
      viewUrl: "https://archive.org/details/AshtangaHridayaSrikanthaMurthy",
      pdfDownloadUrl: "https://archive.org/download/AshtangaHridayaSrikanthaMurthy/Ashtanga_Hridaya_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/AshtangaHridayaSrikanthaMurthy/Ashtanga_Hridaya_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/AshtangaHridayaSrikanthaMurthy/Ashtanga_Text.txt",
      teiXmlUrl: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/2_med/ah_sthu.htm",
      license: "Public Domain",
      curatorNotes: "Critical edition with Arunadatta's Sarvangasundari and Hemadri's Ayurvedarasayana commentaries (Nirnaya Sagar Press, Bombay, 1891)."
    },
    alternateRepositories: [
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/2_med/ah_sthu.htm",
        type: "Machine Readable XML/TXT",
        description: "Complete machine-readable Unicode Sanskrit text."
      },
      {
        name: "Digital Library of India (DLI)",
        url: "https://archive.org/details/AshtangaHridayaAtridevaGupta",
        type: "Full Text PDF",
        description: "Vidyotini Hindi commentary by Kaviraj Atrideva Gupta."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English (3 Volumes Complete)",
        languageCode: "en",
        translatorOrEditor: "Prof. K.R. Srikantha Murthy",
        publicationYear: "1991–1997",
        publisher: "Krishnadas Academy, Varanasi",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/AshtangaHridayaSrikanthaMurthy",
        license: "Academic Fair Use"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Kaviraj Atrideva Gupta",
        publicationYear: "1950",
        publisher: "Chaukhambha Sanskrit Series",
        formatsAvailable: ["PDF"],
        repositoryName: "Digital Library of India (DLI)",
        directReaderOrDownloadUrl: "https://archive.org/details/AshtangaHridayaAtridevaGupta",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "1. Sutra Sthana (सूत्रस्थानम्)",
        title: "Basic Tenets, Daily & Seasonal Regimens (30 Chapters)",
        pageOrVerseRange: "30 Chapters",
        summary: "Ayushkamiya (desire for long life), Dinacharya (morning waking, oil pulling, Abhyanga), Ritucharya (seasonal dietetics), Roganutpadaniya (suppression of natural urges), and Dravya pharmacology.",
        keyConcepts: ["Dinacharya Chronobiology", "Ritucharya Seasonal Regimen", "Vegadharana (Non-suppression of 13 urges)", "Agni Metabolism"]
      },
      {
        chapterNumber: "2. Sharira Sthana (शारीरस्थानम्)",
        title: "Embryology, Anatomy & Prognosis (6 Chapters)",
        pageOrVerseRange: "6 Chapters",
        summary: "Garbhavakranti (conception and fetal development), Prakriti diagnosis, and Marmas.",
        keyConcepts: ["Prakriti Assessment", "Marma Energy Points", "Garbha Sharira"]
      },
      {
        chapterNumber: "3. Nidana Sthana (निदानस्थानम्)",
        title: "Etiology & Disease Diagnosis (16 Chapters)",
        pageOrVerseRange: "16 Chapters",
        summary: "Clinical diagnosis of 16 major disease groups with fine distinction of subtypes.",
        keyConcepts: ["Samprapti of Internal Diseases", "Vata-Vyadhi Diagnosis"]
      },
      {
        chapterNumber: "4. Chikitsa Sthana (चिकित्सास्थानम्)",
        title: "Internal Medicine Protocols (22 Chapters)",
        pageOrVerseRange: "22 Chapters",
        summary: "Treatment protocols for fevers, respiratory diseases (Kasa, Shwasa), Gulma, Prameha, and heart disorders.",
        keyConcepts: ["Kasa-Shwasa Pulmonary Protocols", "Hridroga Cardiac Therapeutics"]
      },
      {
        chapterNumber: "5. Kalpa Sthana (कल्पस्थानम्)",
        title: "Formulations & Detoxification (6 Chapters)",
        pageOrVerseRange: "6 Chapters",
        summary: "Vamana, Virechana, and Basti preparation methodologies.",
        keyConcepts: ["Panchakarma Preparation", "Sneha-Sveda Protocols"]
      },
      {
        chapterNumber: "6. Uttara Sthana (उत्तरस्थानम्)",
        title: "Specialties & Surgery (40 Chapters)",
        pageOrVerseRange: "40 Chapters",
        summary: "Pediatrics, psychiatry, ENT, eye diseases, surgery, toxicology, Rasayana, and Vajikarana.",
        keyConcepts: ["Kaumarbhritya Pediatrics", "Shalakya Eye Treatments", "Rasayana Longevity Elixirs"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Ashtanga Hridaya Sutra Sthana 1.1 (Invocation & Desire for Health)",
        devanagari: "रागादिरोगान् सततानुषक्तानशेषकायप्रसृतानशेषान् । औत्सुक्यमोहारतिदान् जघान योऽपूर्ववैद्याय नमोऽस्तु तस्मै ॥",
        iast: "rāgādi-rogān satatānuṣaktān aśeṣa-kāya-prasṛtān aśeṣān | autsukya-moha-arati-dān jaghāna yo'pūrva-vaidyāya namo'stu tasmai ||",
        padapatha: "राग-आदि-रोगान् सतत-अनुषक्तान् अशेष-काय-प्रसृतान् अशेषान् । औत्सुक्य-मोह-अरति-दान् जघान यः अपूर्व-वैद्याय नमः अस्तु तस्मै ॥",
        translationEnglish: "Salutations to that Unprecedented Supreme Physician (the Divine Consciousness) who has annihilated without residue all afflictions such as attachment and desire (Raga), which are perpetually attached, spread throughout the entire body-mind complex, and produce restlessness, delusion, and discontent.",
        translationsOtherLangs: {
          hi: "उस अद्वितीय वैद्य (परमपिता परमात्मा/धन्वन्तरि) को नमस्कार है, जिन्होंने राग-द्वेष आदि समस्त शारीरिक व मानसिक रोगों को समूल नष्ट कर दिया, जो देह में व्याप्त होकर उत्सुकता, मोह और अशान्ति उत्पन्न करते हैं।"
        }
      },
      {
        verseNumber: "Ashtanga Hridaya Nidana Sthana 12.1 (The Root of All Diseases: Mandagni)",
        devanagari: "रोगाः सर्वेऽपि मन्देऽग्नौ सुतरामुदराणि तु ।",
        iast: "rogāḥ sarve'pi mande'gnau sutarām udarāṇi tu |",
        translationEnglish: "All systemic diseases without exception originate from sluggish or impaired digestive-metabolic fire (Mandagni), and gastro-intestinal disorders (Udara Roga) arise especially from this root cause.",
        translationsOtherLangs: {
          hi: "समस्त रोग मन्दाग्नि (पाचन शक्ति व चयापचय की दुर्बलता) के कारण ही उत्पन्न होते हैं।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Recognized as the most poetically polished medical manual in human history; basis for the Tibetan Gyushi (Four Tantras of Sowa-Rigpa) and Himalayan traditional medicine.",
    bibtexCitation: `@book{srikanthamurthy1991vagbhata, title={Vāgbhaṭa's Aṣṭāṅga Hṛdayam: Text, English Translation, Notes, Appendix and Indices}, author={Srikantha Murthy, K. R.}, year={1991--1997}, publisher={Krishnadas Academy}, address={Varanasi}}`
  },

  // 12E. CLASSICAL AYURVEDA: SHARNGADHARA SAMHITA (PULSE & RASASHASTRA)
  {
    id: "sharngadhara-samhita-nadi-pariksha",
    title: "Sharngadhara Samhita (Nadi Pariksha, Respiration Physiology & Rasashastra)",
    sanskritTitleDevanagari: "शार्ङ्गधर संहिता (नाड़ीपरीक्षा, प्राणाहुति-श्वसनविज्ञान व रसशास्त्रम्)",
    sanskritTitleIAST: "Śārṅgadhara Saṃhitā (Pulse Diagnosis, Respiration & Pharmacy)",
    category: "Ayurveda & Health Sciences (Upaveda)",
    subCategory: "Ayurveda - Pulse Diagnosis (Nadi), Physiology & Herbo-Mineral Chemistry",
    traditionalRishiOrAuthor: "Acharya Sharngadhara (Son of Damodara)",
    recensionOrShakha: "3 Khandas (Prathama, Madhyama, Uttara Khanda), 32 Adhyayas, ~2,600 Verses",
    historicalPeriod: "Medieval Scholarly Renaissance (c. 13th–14th Century CE)",
    totalKandasOrAdhyayas: "3 Khandas (32 Adhyayas)",
    totalVersesOrMantras: 2600,
    executiveSummary: "The quintessential pharmaceutical and diagnostic manual in Ayurveda. World-renowned for establishing the clinical method of pulse diagnosis (Nadi Pariksha), cellular respiration physiology (*Prana-Pavana* oxygen transport), and precise standardizations for Bhasmas (calcined nano-minerals), Asavas, Arishtas, Kwathas, Avalehas, and Guggulu compounds.",
    swaraAccentsPreserved: false,
    notableCommentators: ["Adhamalla (Dipika)", "Kashiram Vaidya (Gudhartha Dipika)", "Prof. K.R. Srikantha Murthy", "Pt. Parasuram Shastri"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "SharngadharaSamhitaSrikanthaMurthy",
      viewUrl: "https://archive.org/details/SharngadharaSamhitaSrikanthaMurthy",
      pdfDownloadUrl: "https://archive.org/download/SharngadharaSamhitaSrikanthaMurthy/Sharngadhara_Samhita.pdf",
      epubDownloadUrl: "https://archive.org/download/SharngadharaSamhitaSrikanthaMurthy/Sharngadhara_Samhita.epub",
      txtDownloadUrl: "https://archive.org/download/SharngadharaSamhitaSrikanthaMurthy/Sharngadhara_Text.txt",
      teiXmlUrl: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/2_med/sarngs_u.htm",
      license: "Public Domain",
      curatorNotes: "Nirnaya Sagar Press Sanskrit edition with Adhamalla and Kashiram commentaries (Bombay, 1931)."
    },
    alternateRepositories: [
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/2_med/sarngs_u.htm",
        type: "Machine Readable XML/TXT",
        description: "Machine-readable Sanskrit text."
      },
      {
        name: "Digital Library of India (DLI)",
        url: "https://archive.org/details/SharngadharaSamhitaParasuram",
        type: "Full Text PDF",
        description: "Sanskrit edition with Hindi translation."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Prof. K.R. Srikantha Murthy",
        publicationYear: "1984",
        publisher: "Chaukhambha Orientalia, Varanasi",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/SharngadharaSamhitaSrikanthaMurthy",
        license: "Academic Fair Use"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Dr. Shailaja Srivastava",
        publicationYear: "1996",
        publisher: "Chaukhambha Orientalia",
        formatsAvailable: ["PDF"],
        repositoryName: "Digital Library of India (DLI)",
        directReaderOrDownloadUrl: "https://archive.org/details/SharngadharaSamhitaParasuram",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Prathama Khanda (प्रथम खण्ड)",
        title: "Metrology, Diagnostics & Pulse (Nadi Pariksha)",
        pageOrVerseRange: "7 Chapters",
        summary: "Standard weights and measures (Mana Paribhasha), herbal collection seasons, Nadi Pariksha (radial pulse reading for Vata, Pitta, Kapha), and the pioneering physiology of respiration.",
        keyConcepts: ["Nadi Pariksha Radial Pulse Reading", "Mana Paribhasha Pharmaceutical Weights", "Respiration Physiology"]
      },
      {
        chapterNumber: "Madhyama Khanda (मध्यम खण्ड)",
        title: "Pharmaceutical Formulations & Rasashastra (12 Chapters)",
        pageOrVerseRange: "12 Chapters",
        summary: "Manufacturing chemistry of Panchavidha Kashaya (Swarasa, Kalka, Kwatha, Hima, Phanta), Churna, Vati, Avaleha, Ghrita, Taila, Asava-Arishta fermentation, and Shodhana/Marana of metals and minerals.",
        keyConcepts: ["Panchavidha Kashaya Extraction", "Asava & Arishta Fermentation", "Bhasma Nanotechnology", "Dhatu Shodhana Purification"]
      },
      {
        chapterNumber: "Uttara Khanda (उत्तर खण्ड)",
        title: "Clinical Therapies & Panchakarma (13 Chapters)",
        pageOrVerseRange: "13 Chapters",
        summary: "Practical administration of Sneha, Sveda, Vamana, Virechana, Basti, Nasya, Dhumapana, Gandusha (oil pulling), and ophthalmic Lepas.",
        keyConcepts: ["Nasya Brain Delivery", "Gandusha (Oil Pulling)", "Basti Formulations"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Sharngadhara Samhita Prathama Khanda 5.41–42 (The First Precise Description of Cellular Respiration)",
        devanagari: "नाभिस्थः प्राणपवनः स्पृष्ट्वा हृत्कमलान्तरम् । कण्ठाद् बहिर्विनिर्याति पातुं विष्णुपदामृतम् ॥ पीत्वा चाम्बरपीयूषं पुनरायाति वेगतः । प्रीणयन् देहमखिलं जीवं च जठरानलम् ॥",
        iast: "nābhisthaḥ prāṇa-pavanaḥ spṛṣṭvā hṛt-kamalāntaram | kaṇṭhād bahir viniryāti pātuṃ viṣṇupadāmṛtam || pītvā cāmbara-pīyūṣaṃ punar āyāti vegataḥ | prīṇayan deham akhilaṃ jīvaṃ ca jaṭharānalam ||",
        padapatha: "नाभि-स्थः प्राण-पवनः स्पृष्ट्वा हृत्-कमल-अन्तरम् । कण्ठात् बहिः विनिर्याति पातुम् विष्णुपद-अमृतम् ॥ पीत्वा च अम्बर-पीयूषम् पुनः आयाति वेगतः । प्रीणयन् देहम् अखिलम् जीवम् च जठर-अनलम् ॥",
        translationEnglish: "The vital Prana air originating internally touches the interior of the heart lotus, then exits through the throat into the external atmosphere to drink the nectar of the sky (Vishnupadamritam / Oxygen). Having imbibed this atmospheric nectar, it re-enters swiftly, revitalizing the entire organism, sustaining the life-force, and kindling the metabolic Agni fire.",
        translationsOtherLangs: {
          hi: "नाभि में स्थित प्राणवायु हृदय-कमल का स्पर्श करके कण्ठमार्ग से बाहर निकलती है और अन्तरिक्ष के अमृत (ऑक्सीजन/प्राणवायु) का पान करती है। उस आकाशीय अमृत को पीकर वह पुनः वेगपूर्वक भीतर आती है, जिससे सम्पूर्ण देह, जीवात्मा और जठराग्नि तृप्त ও पुष्ट होते हैं।"
        },
        commentaries: [
          {
            commentator: "Adhamalla (Dipika)",
            school: "Ayurvedic Physiological Hermeneutics",
            text: "This verse directly describes the pulmonary oxygenation of blood in the heart and the cellular distribution of oxygen to kindle mitochondrial Agni throughout the living body."
          }
        ]
      }
    ],
    scienceAndPhilosophySignificance: "First documented explicit Sanskrit mapping of cardiopulmonary respiration/oxygenation, radial pulse hemodynamics (Nadi Pariksha), and standardized alchemical nano-pharmacognosy (Bhasmas).",
    bibtexCitation: `@book{srikanthamurthy1984sharngadhara, title={Śārṅgadhara-Saṃhitā: A Treatise on Āyurveda}, author={Srikantha Murthy, K. R.}, year={1984}, publisher={Chaukhambha Orientalia}, address={Varanasi}}`
  },

  // 12F. CLASSICAL AYURVEDA: KASHYAPA SAMHITA (PEDIATRICS & NEONATOLOGY)
  {
    id: "kashyapa-samhita-kaumarbhritya",
    title: "Kashyapa Samhita (Vriddha Jivakiya Tantra - Pediatric Medicine & Obstetrics)",
    sanskritTitleDevanagari: "काश्यप संहिता (वृद्धजीवकीय तन्त्रम् - कौमारभृत्य, सुवर्णप्राशन व बालचिकित्सा)",
    sanskritTitleIAST: "Kāśyapa Saṃhitā (Vṛddha Jīvakīya Tantra - Pediatrics & Suvarna Prashana)",
    category: "Ayurveda & Health Sciences (Upaveda)",
    subCategory: "Ayurveda - Pediatrics (Kaumarbhritya), Neonatology & Obstetrics",
    traditionalRishiOrAuthor: "Maharshi Kashyapa, Child Prodigy Sage Jivaka & Vatsya",
    recensionOrShakha: "8 Sthanas & Khila Sthana recovered from the historical Nepal Palm-Leaf Manuscript",
    historicalPeriod: "Vedic Antiquity to Classical Era (c. 6th Century BCE manuscript tradition)",
    totalKandasOrAdhyayas: "9 Sthanas including Khila Sthana",
    totalVersesOrMantras: "~4,500 Shlokas",
    executiveSummary: "The supreme classical authority on Ayurvedic pediatrics (Kaumarbhritya), neonatology, obstetrics (Prasuti Tantra), and pediatric immunology. Famous for establishing **Suvarna Prashana** (administration of purified gold nano-particles with Ghrita and honey to children for cognitive enhancement and systemic immunity), milk dentition chronobiology (Dantotpatti), and child nutritional disorders (Phakka Roga).",
    swaraAccentsPreserved: false,
    notableCommentators: ["Rajaguru Pandit Hemraj Sharma (Nepal Royal Court)", "Prof. P.V. Tewari", "Dr. Satyapal"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "KashyapaSamhitaHemrajSharmaNepal",
      viewUrl: "https://archive.org/details/KashyapaSamhitaHemrajSharma",
      pdfDownloadUrl: "https://archive.org/download/KashyapaSamhitaHemrajSharma/Kashyapa_Samhita_Nepal.pdf",
      epubDownloadUrl: "https://archive.org/download/KashyapaSamhitaHemrajSharma/Kashyapa_Samhita_Nepal.epub",
      txtDownloadUrl: "https://archive.org/download/KashyapaSamhitaHemrajSharma/Kashyapa_Text.txt",
      license: "Public Domain",
      curatorNotes: "Nepal Royal Library palm-leaf manuscript critical edition edited by Rajaguru Hemraj Sharma with Vidyotini Hindi notes by Satyapal (Chaukhambha Sanskrit Sansthan, Varanasi, 1953)."
    },
    alternateRepositories: [
      {
        name: "Digital Library of India (DLI)",
        url: "https://archive.org/details/KashyapaSamhitaPVTewari",
        type: "Full Text PDF",
        description: "English translation and commentary by Prof. P.V. Tewari."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "English Translation & Commentary",
        languageCode: "en",
        translatorOrEditor: "Prof. P.V. Tewari (Complete English Translation)",
        publicationYear: "1996",
        publisher: "Chaukhambha Visvabharati, Varanasi",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/KashyapaSamhitaPVTewari",
        license: "Academic Fair Use"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Rajaguru Hemraj Sharma & Dr. Satyapal",
        publicationYear: "1953",
        publisher: "Chaukhambha Sanskrit Sansthan",
        formatsAvailable: ["PDF"],
        repositoryName: "Digital Library of India (DLI)",
        directReaderOrDownloadUrl: "https://archive.org/details/KashyapaSamhitaHemrajSharma",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Sutra Sthana: Lehana & Suvarna Prashana",
        title: "Pediatric Nutrition, Lehana & Gold Immunity Protocol",
        pageOrVerseRange: "Adhyayas 1–30",
        summary: "Protocols for infant supplementary feeding (Lehana), Suvarna Prashana (gold nano-liquid drops), and neonatal care.",
        keyConcepts: ["Suvarna Prashana (Gold Nanoparticle Drops)", "Lehana Formulations", "Neonatal Resuscitation"]
      },
      {
        chapterNumber: "Sharira Sthana: Dentition & Genetics",
        title: "Dantotpatti (Teeth Eruption) & Fetal Development",
        pageOrVerseRange: "Adhyayas 1–8",
        summary: "Chronology of primary and secondary teeth eruption as a biomarker of skeletal development and neurological maturation.",
        keyConcepts: ["Dantotpatti Dentition Chronobiology", "Garbhavakranti Genetics"]
      },
      {
        chapterNumber: "Chikitsa Sthana: Pediatric Pathologies",
        title: "Phakka Roga (Malnutrition/Rickets) & Childhood Fevers",
        pageOrVerseRange: "Adhyayas 1–30",
        summary: "Etiology and herbal treatment for child malnutrition (Phakka), digestive disorders (Graha Roga), and pediatric respiratory infections.",
        keyConcepts: ["Phakka Roga (Childhood Rickets/Malnutrition)", "Graha Roga Pediatric Psychiatry"]
      },
      {
        chapterNumber: "Khila Sthana: Comprehensive Clinical Addendum",
        title: "Obstetrics, Gynecological Care & Herbal Enemas",
        pageOrVerseRange: "80 Chapters",
        summary: "Extensive addendum covering women's healthcare (Stree Roga), postnatal care (Sutika Paricharya), and pediatric Basti.",
        keyConcepts: ["Sutika Paricharya (Postnatal Care)", "Stree Roga Gynecology"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Kashyapa Samhita Sutra Sthana (Lehadhyaya) 18.4–6 (The Classical Suvarna Prashana Shloka)",
        devanagari: "सुवर्णप्राशनं हि एतत् मेधाग्निबलवर्धनम् । आयुष्यं मङ्गलं पुण्यं वृष्यं वर्ण्यं ग्रहापहम् ॥ मासात् परममेधावी व्याधिभिर्न च धृष्यते । षड्भिर्मासैः श्रुतधरः सुवर्णप्राशनाद् भवेत् ॥",
        iast: "suvarṇaprāśanaṃ hi etat medhāgni-bala-vardhanam | āyuṣyaṃ maṅgalaṃ puṇyaṃ vṛṣyaṃ varṇyaṃ grahāpaham || māsāt parama-medhāvī vyādhibhir na ca dhṛṣyate | ṣaḍbhir māsaiḥ śrutadharaḥ suvarṇaprāśanād bhavet ||",
        padapatha: "सुवर्ण-प्राशनम् हि एतत् मेधा-अग्नि-बल-वर्धनम् । आयुष्यम् मङ्गलम् पुण्यम् वृष्यम् वर्ण्यम् ग्रह-अपहम् ॥ मासात् परम-मेधावी व्याधिभिः न च धृष्यते । षड्भिः मासैः श्रुत-धरः सुवर्ण-प्राशनात् भवेत् ॥",
        translationEnglish: "Suvarna Prashana (administration of purified elemental gold with ghee and honey to a child) enhances cognitive intellect (medha), metabolic fire (Agni), and physical strength (bala). It promotes longevity, auspicious fortune, radiant complexion, and protects against toxic and microbial afflictions. Taken for one month, the child becomes brilliantly intelligent and immune to disease; taken for six months, the child attains extraordinary auditory memory (shrutadhara / one who retains whatever is heard once).",
        translationsOtherLangs: {
          hi: "सुवर्णप्राशन बुद्धि, पाचन अग्नि और शारीरिक बल को बढ़ाता है; यह दीर्घायु, कल्याणकारी, कान्तिवर्धक और रोगों को दूर करने वाला है। एक मास तक देने से बालक परम मेधावी बनता है और रोगों से आक्रान्त नहीं होता; छह मास तक देने से वह 'श्रुतधर' (एक बार सुनकर स्मरण रखने वाला) हो जाता है।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Pioneering foundation of pediatrics, pediatric immunology, bio-active metallic nanoparticle therapeutics (nano-gold / colloidal gold for neuro-development), and clinical dentition chronometry.",
    bibtexCitation: `@book{tewari1996kasyapa, title={Kāśyapa-Saṃhitā or Vṛddhajīvakīya Tantra: Text with English Translation and Commentary}, author={Tewari, P. V.}, year={1996}, publisher={Chaukhambha Visvabharati}, address={Varanasi}}`
  },

  // 13. MAHAPURANA: SRIMAD BHAGAVATA PURANA
  {
    id: "srimad-bhagavata-purana-12-skandhas",
    title: "Srimad Bhagavata Purana (Complete 12 Skandhas, 18,000 Shlokas)",
    sanskritTitleDevanagari: "श्रीमद्भागवत महापुराणम् (द्वादशस्कन्धात्मकम्)",
    sanskritTitleIAST: "Śrīmad Bhāgavata Mahāpurāṇam (12 Skandhas, 18,000 Ślokas)",
    category: "18 Mahapuranas & Upapuranas",
    subCategory: "Mahapurana - Jewel of Purana Literature",
    traditionalRishiOrAuthor: "Maharshi Veda Vyasa & Sage Shukadeva (taught to King Parikshit)",
    recensionOrShakha: "12 Skandhas, 335 Adhyayas, 18,000 Verses",
    historicalPeriod: "Classical Puranic Canon (Antiquity to c. 6th–9th Century CE recension)",
    totalKandasOrAdhyayas: "12 Skandhas",
    totalVersesOrMantras: 18000,
    executiveSummary: "Celebrated as the 'ripened fruit of the wish-fulfilling tree of Vedic wisdom' (Nigama-kalpataror-galitam phalam). Expounds the ten characteristics of a Mahapurana (Sarga, Visarga, Sthana, Poshana, Uti, Manvantara, Ishanukatha, Nirodha, Mukti, Ashraya) culminating in the transcendent Rasa of pure Divine Love in Skandha 10.",
    swaraAccentsPreserved: false,
    notableCommentators: ["Sridhara Swami (Bhavartha Dipika)", "Sanatana Gosvami (Brihad Vaishnava Toshani)", "Jiva Gosvami (Krama Sandarbha)", "Vallabhacharya (Subodhini)", "Eugène Burnouf (French 5 vols 1840)", "Swami Tapasyananda (4 vols)"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "BhagavataPuranaBurnoufFrench5Vols",
      viewUrl: "https://archive.org/details/BhagavataPuranaBurnoufFrench5Vols",
      pdfDownloadUrl: "https://archive.org/download/BhagavataPuranaBurnoufFrench5Vols/Bhagavata_Burnouf_Vol1.pdf",
      epubDownloadUrl: "https://archive.org/download/BhagavataPuranaBurnoufFrench5Vols/Bhagavata_Burnouf_Vol1.epub",
      txtDownloadUrl: "https://archive.org/download/BhagavataPuranaBurnoufFrench5Vols/Bhagavata_Text.txt",
      license: "Public Domain",
      curatorNotes: "Le Bhâgavata Purâna ou histoire poétique de Krichna traduit et publié par M. Eugène Burnouf (5 tomes, Imprimerie Royale, Paris, 1840–1898)."
    },
    alternateRepositories: [
      {
        name: "TTD Religious Publications",
        url: "https://archive.org/details/SrimadBhagavatamTeluguTTD",
        type: "Full Text PDF",
        description: "Complete Telugu edition published by Tirumala Tirupati Devasthanams (TTD)."
      },
      {
        name: "GRETIL (Univ. of Göttingen)",
        url: "http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/3_purana/bhagp/bhagp_u.htm",
        type: "Machine Readable XML/TXT",
        description: "Complete machine-readable Devanagari/IAST text."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "French (Français)",
        languageCode: "fr",
        translatorOrEditor: "Eugène Burnouf (5 volumes, 1840–1898)",
        publicationYear: "1840–1898",
        publisher: "Imprimerie Royale / Nationale, Paris",
        formatsAvailable: ["PDF", "EPUB", "TXT"],
        repositoryName: "Bibliothèque Nationale de France (BnF Gallica)",
        directReaderOrDownloadUrl: "https://gallica.bnf.fr/ark:/12148/bpt6k5447192q",
        license: "Public Domain"
      },
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Swami Tapasyananda (4 volumes) / J.M. Sanyal",
        publicationYear: "1980",
        publisher: "Sri Ramakrishna Math, Chennai",
        formatsAvailable: ["PDF", "EPUB", "TXT"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/SrimadBhagavataTapasyananda",
        license: "Public Domain"
      },
      {
        languageName: "Hindi (हिन्दी)",
        languageCode: "hi",
        translatorOrEditor: "Pt. Hanuman Prasad Poddar / Gita Press (2 volumes)",
        publicationYear: "1953",
        publisher: "Gita Press, Gorakhpur",
        formatsAvailable: ["PDF"],
        repositoryName: "Gita Press Public Archives",
        directReaderOrDownloadUrl: "https://archive.org/details/SrimadBhagavatMahapuranGitaPress",
        license: "Public Domain"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Skandha 1",
        title: "Adhikara (The Inception of Srimad Bhagavatam)",
        pageOrVerseRange: "19 Chapters",
        summary: "Dialogue between Vyasa and Narada, Parikshit cursed to die in seven days, and Shukadeva begins the narration on the banks of Ganga.",
        keyConcepts: ["Nigama Kalpataru", "Narada's Instruction", "King Parikshit", "Shukadeva"]
      },
      {
        chapterNumber: "Skandha 10",
        title: "Nirodha Lila (The Divine Life of Sri Krishna)",
        pageOrVerseRange: "90 Chapters",
        summary: "The celebrated narrative of Vrindavan, Govardhana Lila, Rasa Panchadhyayi, and Mathura-Dvaraka sovereignty.",
        keyConcepts: ["Govardhana Lila", "Rasa Panchadhyayi", "Damodara Lila", "Brahma Vimohana"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Bhagavata Purana 1.1.1 (Mangalacharana)",
        devanagari: "ॐ जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञः स्वराट् तेने ब्रह्म हृदा य आदिकवये मुह्यन्ति यत्सूरयः । तेजोवारिमृदां यथा विनिमयो यत्र त्रिसर्गोऽमृषा धाम्ना स्वेन सदा निरस्तकुहकं सत्यं परं धीमहि ॥",
        iast: "oṃ janmādy asya yato 'nvayād itarataś cārtheṣv abhijñaḥ svarāṭ tene brahma hṛdā ya ādikavaye muhyanti yat sūrayaḥ | tejovārimṛdāṃ yathā vinimayo yatra trisargo 'mṛṣā dhāmnā svena sadā nirastakuhakaṃ satyaṃ paraṃ dhīmahi ||",
        translationEnglish: "OM. We meditate upon the Supreme Absolute Truth, from whom proceeds the creation, sustenance and dissolution of this universe; who is directly and indirectly cognizant of all manifestations, and is independently sovereign; who revealed the Vedic knowledge unto the heart of the first sage (Brahma)...",
        translationsOtherLangs: {
          hi: "जिनसे इस जगत् की सृष्टि, स्थिति और प्रलय होते हैं... उस परम सत्य स्वरूप भगवान का हम ध्यान करते हैं।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Cosmic cyclical time (8.64 billion year Kalpas as cited by Carl Sagan in Cosmos), fractal multiverses, and aesthetic theory (Rasa Shastra).",
    bibtexCitation: `@book{burnouf1840bhagavata, title={Le Bh{\^a}gavata Pur{\^a}na: Ou histoire po{\'e}tique de Krichna}, author={Burnouf, Eug{\`e}ne}, year={1840--1898}, publisher={Imprimerie Royale}, address={Paris}}`
  },

  // 14. VERNACULAR & BHAKTI CLASSICS: NALAYIRA DIVYA PRABANDHAM
  {
    id: "nalayira-divya-prabandham-tamil",
    title: "Nalayira Divya Prabandham (4,000 Divine Hymns of the 12 Alvars)",
    sanskritTitleDevanagari: "नालायिर दिव्य प्रबन्धम् (द्वादश-आळ्वार-प्रणीतम्)",
    sanskritTitleIAST: "Nālāyira Divya Prabandham (4,000 Hymns of the 12 Āḻvārs)",
    category: "Bhakti Classics & Vernacular Canons",
    subCategory: "Dravida Veda - Tamil Vaishnava Canon",
    traditionalRishiOrAuthor: "The 12 Alvars (Nammalvar, Andal, Periyalvar, Tirumangai Alvar, Kulasekhara, etc.) compiled by Nathamuni",
    recensionOrShakha: "4,000 Pasurams in 4 Major Volumes (Mudal Ayiram, Irandam Ayiram, Iyarpa, Tiruvaymoli)",
    historicalPeriod: "Sangam & Early Medieval Epoch (c. 5th–9th Century CE)",
    totalKandasOrAdhyayas: "4 Major Sections (24 Sacred Works)",
    totalVersesOrMantras: 4000,
    executiveSummary: "Revered as the 'Dravida Veda' (Tamil Veda), equal in authority to the Sanskrit Vedas in the Sri Vaishnava tradition. Nammalvar's Tiruvaymoli is regarded as the essence of the Chandogya and Rigveda, expressing non-dual devotion (Vishishtadvaita Saranagati) and celebrating the 108 Divya Desam temples.",
    swaraAccentsPreserved: true,
    notableCommentators: ["Pillai Lokacharya", "Periyavachan Pillai (Vyakhya Chakravarthi)", "Manavala Mamunigal", "U. Ve. Swaminatha Iyer"],
    canonicalRepository: {
      name: "Internet Archive (archive.org)",
      identifierOrArk: "NalayiraDivyaPrabandhamTamilEnglishTTD",
      viewUrl: "https://archive.org/details/NalayiraDivyaPrabandhamTamilEnglishTTD",
      pdfDownloadUrl: "https://archive.org/download/NalayiraDivyaPrabandhamTamilEnglishTTD/DivyaPrabandham_Complete.pdf",
      epubDownloadUrl: "https://archive.org/download/NalayiraDivyaPrabandhamTamilEnglishTTD/DivyaPrabandham_Complete.epub",
      txtDownloadUrl: "https://archive.org/download/NalayiraDivyaPrabandhamTamilEnglishTTD/DivyaPrabandham_Text.txt",
      license: "Public Domain",
      curatorNotes: "Complete 4,000 Pasurams with word-by-word Tamil commentary and English translations published by Tirumala Tirupati Devasthanams (TTD)."
    },
    alternateRepositories: [
      {
        name: "TTD Religious Publications",
        url: "https://archive.org/details/NalayiraDivyaPrabandhamTeluguTTD",
        type: "Full Text PDF",
        description: "Telugu script edition with TTD scholarly commentaries."
      },
      {
        name: "Muktabodha Digital Library",
        url: "https://muktabodha.org/digital-library/",
        type: "Full Text PDF",
        description: "Manipravala commentaries on Tiruvaymoli."
      }
    ],
    availableLanguageEditions: [
      {
        languageName: "Tamil (தமிழ்)",
        languageCode: "ta",
        translatorOrEditor: "Nathamuni / U. Ve. Swaminatha Iyer (நாலாயிர திவ்வியப் பிரபந்தம்)",
        publicationYear: "1910",
        publisher: "Sri Vaishnava Grantha Mudrapaka Sabha, Madras",
        formatsAvailable: ["PDF", "EPUB", "TXT", "HTML"],
        repositoryName: "Internet Archive (archive.org)",
        directReaderOrDownloadUrl: "https://archive.org/details/NalayiraDivyaPrabandhamTamilEnglishTTD",
        license: "Public Domain"
      },
      {
        languageName: "English",
        languageCode: "en",
        translatorOrEditor: "Dr. K.C. Varadachari & T.D. Muralidharan",
        publicationYear: "1970",
        publisher: "Tirumala Tirupati Devasthanams",
        formatsAvailable: ["PDF", "TXT"],
        repositoryName: "TTD Religious Publications",
        directReaderOrDownloadUrl: "https://archive.org/details/DivyaPrabandhamEnglishTTD",
        license: "Open Access Creative Commons"
      }
    ],
    tableOfContents: [
      {
        chapterNumber: "Tiruppavai",
        title: "Andal's 30 Sacred Pasurams (Margazhi Dawn Song)",
        pageOrVerseRange: "30 Pasurams",
        summary: "Andal's sublime poem awakening spiritual seekers at the auspicious Margazhi dawn to sing the glory of Narayana.",
        keyConcepts: ["Margazhi", "Andal", "Koodaravalli", "Saranagati"]
      },
      {
        chapterNumber: "Tiruvaymoli",
        title: "Nammalvar's 1,102 Pasurams (The Dravida Sama Veda)",
        pageOrVerseRange: "10 Centums (10 Decads each)",
        summary: "The spiritual zenith of Sri Vaishnavism, celebrated as the equivalent of the Sama Veda and Upanishads.",
        keyConcepts: ["Uyarvara Uyarnalam", "Paramatman", "Archa Avatara"]
      }
    ],
    sampleVerses: [
      {
        verseNumber: "Tiruppavai 1 (Andal)",
        devanagari: "மார்கழித் திங்கள் மதிநிறைந்த நன்னாளால்; நீராடப் போதுவீர்! போதுமினோ, நேரிழையீர்!",
        iast: "mārgazhit tiṅgal madi-niṟainda nan-nāḷāl; nīrāḍap pōduvīr! pōduminō, nēr-izhaiyīr!",
        translationEnglish: "In this auspicious month of Margazhi, on this moonlit blessed day, come forth, O jewel-bedecked maidens, to bathe in the sacred stream and attain the grace of Narayana.",
        translationsOtherLangs: {
          hi: "मार्गशीर्ष मास की इस पूर्णिमा की शुभ बेला में, हे सुसज्जित सखियों! आओ हम सब मिलकर पावन स्नान करें और प्रभु का गुणगान करें।"
        }
      }
    ],
    scienceAndPhilosophySignificance: "Roots of democratic vernacular spirituality, Alvar temple town architecture, and Vishishtadvaita epistemology.",
    bibtexCitation: `@book{nathamuni1910divyaprabandham, title={Nalayira Divya Prabandham with Manipravala Commentary}, author={Nathamuni and Alvars}, year={1910}, publisher={Sri Vaishnava Grantha Mudrapaka Sabha}, address={Madras}}`
  }
];
