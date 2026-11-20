import {
  ShivaSutraItem,
  PratyaharaDefinition,
  AshtadhyayiAdhyaya,
  DhatuClass,
  GanapathaGroup,
  UnadiSutraRule,
  LinganushasanaSection,
  PaniniyaShikshaVerse,
  JambavatiKavyaVerse,
  ComputationalPaniniFeature
} from "../types/paniniTypes";

export interface PaniniBio {
  name: string;
  titles: string[];
  era: string;
  birthplace: string;
  parentsAndLineage: string;
  preceptor: string;
  educationCenter: string;
  patronDeity: string;
  theTriumvirate: string;
  overview: string;
}

export const PANINI_BIOGRAPHY: PaniniBio = {
  name: "Maharshi Pāṇini (महर्षि पाणिनि)",
  titles: ["Sūtrakāra (सूत्रकार)", "Śabdānuśāsaka (शब्दानुशासक)", "Aparā Vidyā Pravartaka", "Father of Generative Linguistics"],
  era: "c. 6th–4th Century BCE (Pre-Mauryan / Late Vedic)",
  birthplace: "Śālātura (शलातुर), near modern Lahor / Attock (Gandhāra, North-West Ancient Bhārata)",
  parentsAndLineage: "Son of Maharshi Paṇin and Mother Dākṣī (hence also revered as Dākṣīputra). Brother of Piṅgala (author of Chhandas Shastra).",
  preceptor: "Acārya Varṣa (आचार्य वर्ष) of the celebrated Pāṭaliputra / Takṣaśilā Academy",
  educationCenter: "Takṣaśilā Mahāvihāra (तक्षशिला विश्वविद्यालय) - The global hub of Vedic sciences",
  patronDeity: "Lord Śiva (Naṭarāja) — whose cosmic drum (Ḍamaru) struck 14 times to reveal the Māheśvara Sūtras",
  theTriumvirate: "Muni-Traya of Sanskrit Grammar: Pāṇini (Sūtrakāra), Kātyāyana / Vararuci (Vārttikakāra), and Patañjali (Mahābhāṣyakāra)",
  overview: "Maharshi Panini represents the zenith of human intellectual rigor. He formulated a generative algebraic grammar of Sanskrit (Aṣṭādhyāyī) comprising 3,995 interconnected, non-redundant aphorisms. Using zero-morphemes, meta-markers (it/anubandha), context-free transformation rules, and rule precedence algorithms, Panini constructed the world's first complete formal language description — over two millennia before John Backus and Noam Chomsky."
};

// 1. SHIVA SUTRAS / MAHESHVARA SUTRAS (14 Sutras)
export const SHIVA_SUTRAS_CORPUS: ShivaSutraItem[] = [
  {
    id: 1,
    sutra: "अ इ उ ण्",
    transliteration: "a i u Ṇ",
    itMarker: "ण् (Ṇ)",
    letters: ["अ (a)", "इ (i)", "उ (u)"],
    vowelOrConsonant: "Vowels (Ac)",
    pratyaharaSignificance: "Forms Aṇ (अण्) and Ak (अक्). Encompasses the fundamental pure short vowels.",
    modernPhoneticClass: "Low central, high front, and high back basic unrounded/rounded vowels."
  },
  {
    id: 2,
    sutra: "ऋ ऌ क्",
    transliteration: "ṛ ḷ K",
    itMarker: "क् (K)",
    letters: ["ऋ (ṛ)", "ऌ (ḷ)"],
    vowelOrConsonant: "Vowels (Ac)",
    pratyaharaSignificance: "Forms Ak (अक्), Ik (इक्), and Uk (उक्). Vocalic liquids crucial in Vedic recitation.",
    modernPhoneticClass: "Retroflex vocalic rhotics and alveolar lateral vocalics."
  },
  {
    id: 3,
    sutra: "ए ओ ङ्",
    transliteration: "e o Ṅ",
    itMarker: "ङ् (Ṅ)",
    letters: ["ए (e)", "ओ (o)"],
    vowelOrConsonant: "Vowels (Ac)",
    pratyaharaSignificance: "Forms Eṅ (एङ्) - the basic Guṇa vowels (अदेङ् गुणः 1.1.2). Monophthongized diphthongs.",
    modernPhoneticClass: "Mid front and mid back close vowels."
  },
  {
    id: 4,
    sutra: "ऐ औ च्",
    transliteration: "ai au C",
    itMarker: "च् (C)",
    letters: ["ऐ (ai)", "औ (au)"],
    vowelOrConsonant: "Vowels (Ac)",
    pratyaharaSignificance: "Forms Ec (एच), Aic (ऐच्) - the Vṛddhi vowels (वृद्धिरादैच् 1.1.1) and Ac (अच् = All Vowels).",
    modernPhoneticClass: "True open diphthongs."
  },
  {
    id: 5,
    sutra: "ह य व र ट्",
    transliteration: "ha ya va ra Ṭ",
    itMarker: "ट् (Ṭ)",
    letters: ["ह (ha)", "य (ya)", "व (va)", "र (ra)"],
    vowelOrConsonant: "Semi-vowels (Antastha)",
    pratyaharaSignificance: "Initiates Aṭ (अट्) and Yaṇ (यण् - Antasthas). 'Ha' is listed twice in the 14 sutras for computational grouping.",
    modernPhoneticClass: "Glottal fricative and voiced approximants / semivowels."
  },
  {
    id: 6,
    sutra: "लँ ण्",
    transliteration: "la Ṇ",
    itMarker: "ण् (Ṇ)",
    letters: ["ल (la)"],
    vowelOrConsonant: "Semi-vowels (Antastha)",
    pratyaharaSignificance: "Contains nasalized 'la'. Crucial for deriving the 'Raṇ' pratyahara and lateral liquid morphology.",
    modernPhoneticClass: "Voiced lateral approximant."
  },
  {
    id: 7,
    sutra: "ञ म ङ ण न म्",
    transliteration: "ña ma ṅa ṇa na M",
    itMarker: "म् (M)",
    letters: ["ञ (ña)", "म (ma)", "ङ (ṅa)", "ण (ṇa)", "न (na)"],
    vowelOrConsonant: "Nasals",
    pratyaharaSignificance: "Forms Ñam (ञम्) - all 5 class nasals (Pañcama-varṇas) in reverse order of articulation.",
    modernPhoneticClass: "Palatal, labial, velar, retroflex, and dental nasals."
  },
  {
    id: 8,
    sutra: "झ भ ञ्",
    transliteration: "jha bha Ñ",
    itMarker: "ञ् (Ñ)",
    letters: ["झ (jha)", "भ (bha)"],
    vowelOrConsonant: "Voiced Aspirates",
    pratyaharaSignificance: "Forms Jhaṣ (झष्) - 4th consonants (Caturtha-varṇas) of vargas.",
    modernPhoneticClass: "Voiced aspirated palatal and bilabial plosives."
  },
  {
    id: 9,
    sutra: "घ ढ ध ष्",
    transliteration: "gha ḍha dha Ṣ",
    itMarker: "ष् (Ṣ)",
    letters: ["घ (gha)", "ढ (ḍha)", "ध (dha)"],
    vowelOrConsonant: "Voiced Aspirates",
    pratyaharaSignificance: "Completes the 4th consonants of the 5 vargas (Ghaṣ).",
    modernPhoneticClass: "Voiced aspirated velar, retroflex, and dental plosives."
  },
  {
    id: 10,
    sutra: "ज ब ग ड द श्",
    transliteration: "ja ba ga ḍa da Ś",
    itMarker: "श् (Ś)",
    letters: ["ज (ja)", "ब (ba)", "ग (ga)", "ड (ḍa)", "द (da)"],
    vowelOrConsonant: "Voiced Non-aspirates",
    pratyaharaSignificance: "Forms Jaś (जश्) - 3rd consonants of all 5 vargas. Fundamental in Jaśtva Sandhi.",
    modernPhoneticClass: "Voiced unaspirated plosives."
  },
  {
    id: 11,
    sutra: "ख फ छ ठ थ च ट त व्",
    transliteration: "kha pha cha ṭha tha ca ṭa ta V",
    itMarker: "व् (V)",
    letters: ["ख (kha)", "फ (pha)", "छ (cha)", "ठ (ṭha)", "थ (tha)", "च (ca)", "ट (ṭa)", "त (ta)"],
    vowelOrConsonant: "Unvoiced Aspirates",
    pratyaharaSignificance: "Combines 2nd consonants (aspirated unvoiced) and 1st consonants (unaspirated unvoiced plosives).",
    modernPhoneticClass: "Voiceless aspirated and voiceless unaspirated plosives."
  },
  {
    id: 12,
    sutra: "क प य्",
    transliteration: "ka pa Y",
    itMarker: "य् (Y)",
    letters: ["क (ka)", "प (pa)"],
    vowelOrConsonant: "Unvoiced Non-aspirates",
    pratyaharaSignificance: "Completes 1st consonants of vargas (Velar and Labial). Completes the Yay (यय्) and Cay (चय्) pratyaharas.",
    modernPhoneticClass: "Voiceless velar and bilabial stops."
  },
  {
    id: 13,
    sutra: "श ष स र्",
    transliteration: "śa ṣa sa R",
    itMarker: "र् (R)",
    letters: ["श (śa)", "ष (ṣa)", "स (sa)"],
    vowelOrConsonant: "Sibilants & Aspirate (Śal)",
    pratyaharaSignificance: "Forms Śar (शर्) - the three unvoiced sibilants (Palatal, Retroflex, Dental).",
    modernPhoneticClass: "Voiceless fricatives (Palato-alveolar, Retroflex, Alveolar)."
  },
  {
    id: 14,
    sutra: "ह ल्",
    transliteration: "ha L",
    itMarker: "ल् (L)",
    letters: ["ह (ha)"],
    vowelOrConsonant: "Sibilants & Aspirate (Śal)",
    pratyaharaSignificance: "Concludes Hal (हल् = All Consonants), Śal (शल = Sibilants + h), and Al (अल् = All Sounds of Sanskrit).",
    modernPhoneticClass: "Voiced glottal fricative consonant."
  }
];

// CANONICAL PRATYAHARAS (42 Standard Pratyaharas)
export const PRATYAHARA_CATALOG: PratyaharaDefinition[] = [
  {
    name: "अण् (Aṇ - 1)",
    startingSound: "अ",
    endingMarker: "ण् (Sutra 1)",
    includedSounds: ["अ", "इ", "उ"],
    totalSounds: 3,
    significance: "Refers to the basic short vowels (excluding ṛ, ḷ). Governed by sūtra 'अणुदित्सवर्णस्य चाप्रत्ययः' (1.1.69).",
    sampleSutras: ["1.1.51 उरण् रपरः", "1.1.69 अणुदित्सवर्णस्य चाप्रत्ययः"]
  },
  {
    name: "अक् (Ak)",
    startingSound: "अ",
    endingMarker: "क् (Sutra 2)",
    includedSounds: ["अ", "इ", "उ", "ऋ", "ऌ"],
    totalSounds: 5,
    significance: "All five simple vowels (both short and long varieties by Savarna rule).",
    sampleSutras: ["6.1.101 अकः सवर्णे दीर्घः", "6.1.128 ऋत्यकः"]
  },
  {
    name: "इक् (Ik)",
    startingSound: "इ",
    endingMarker: "क् (Sutra 2)",
    includedSounds: ["इ", "उ", "ऋ", "ऌ"],
    totalSounds: 4,
    significance: "The vowels capable of being replaced by semivowels (Yaṇ) or Guṇa/Vṛddhi.",
    sampleSutras: ["1.1.3 इको गुणवृद्धी", "6.1.77 इको यणचि"]
  },
  {
    name: "उक् (Uk)",
    startingSound: "उ",
    endingMarker: "क् (Sutra 2)",
    includedSounds: ["उ", "ऋ", "ऌ"],
    totalSounds: 3,
    significance: "Back and liquid vowels.",
    sampleSutras: ["1.2.12 उषविदजागृभ्योन्यतरस्याम्", "7.2.11 श्र्युकः किति"]
  },
  {
    name: "एङ् (Eṅ)",
    startingSound: "ए",
    endingMarker: "ङ् (Sutra 3)",
    includedSounds: ["ए", "ओ"],
    totalSounds: 2,
    significance: "The basic Guṇa vowels; also governs Pūrvarūpa Sandhi at word endings.",
    sampleSutras: ["1.1.2 अदेङ् गुणः", "6.1.109 एङः पदान्तादति"]
  },
  {
    name: "अच् (Ac)",
    startingSound: "अ",
    endingMarker: "च् (Sutra 4)",
    includedSounds: ["अ", "इ", "उ", "ऋ", "ऌ", "ए", "ओ", "ऐ", "औ"],
    totalSounds: 9,
    significance: "THE ENTIRE VOWEL INVENTORY OF SANSKRIT. In Panini's grammar, 'Ac' = Vowel (Svara).",
    sampleSutras: ["6.1.77 इको यणचि", "1.2.28 अचश्च", "8.4.57 अचो रहाभ्यां द्वे"]
  },
  {
    name: "इच् (Ic)",
    startingSound: "इ",
    endingMarker: "च् (Sutra 4)",
    includedSounds: ["इ", "उ", "ऋ", "ऌ", "ए", "ओ", "ऐ", "औ"],
    totalSounds: 8,
    significance: "All vowels except 'a'. Governs critical vowel modifications.",
    sampleSutras: ["6.3.68 इच एकाचोऽम्प्रत्ययवच्च"]
  },
  {
    name: "एच (Ec)",
    startingSound: "ए",
    endingMarker: "च् (Sutra 4)",
    includedSounds: ["ए", "ओ", "ऐ", "औ"],
    totalSounds: 4,
    significance: "All diphthongs and compound vowels. Governs Ayādi Sandhi.",
    sampleSutras: ["6.1.78 एचोऽयवायावः", "1.1.48 एच इग्घ्रस्वादेशे"]
  },
  {
    name: "ऐच् (Aic)",
    startingSound: "ऐ",
    endingMarker: "च् (Sutra 4)",
    includedSounds: ["ऐ", "औ"],
    totalSounds: 2,
    significance: "The long compound vowels constituting Vṛddhi along with 'ā'.",
    sampleSutras: ["1.1.1 वृद्धिरादैच्", "6.1.88 वृद्धिरेचि"]
  },
  {
    name: "अट् (Aṭ)",
    startingSound: "अ",
    endingMarker: "ट् (Sutra 5)",
    includedSounds: ["अ", "इ", "उ", "ऋ", "ऌ", "ए", "ओ", "ऐ", "औ", "ह", "य", "व", "र"],
    totalSounds: 13,
    significance: "Vowels + glottal fricative + semivowels. Defines transparency in Natva/Shatva rules.",
    sampleSutras: ["8.4.2 अट्कुप्वाङ्नुम्व्यवायेऽपि"]
  },
  {
    name: "यण् (Yaṇ)",
    startingSound: "य",
    endingMarker: "ण् (Sutra 6)",
    includedSounds: ["य", "व", "र", "ल"],
    totalSounds: 4,
    significance: "All semivowels (Antastha). Replaces 'Ik' vowels before vowels.",
    sampleSutras: ["6.1.77 इको यणचि"]
  },
  {
    name: "ञम् (Ñam)",
    startingSound: "ञ",
    endingMarker: "म् (Sutra 7)",
    includedSounds: ["ञ", "म", "ङ", "ण", "न"],
    totalSounds: 5,
    significance: "All 5 class nasals (Pañcama-varṇa).",
    sampleSutras: ["8.3.32 ङमो ह्रस्वादचि ङमुण्नित्यम्"]
  },
  {
    name: "झष् (Jhaṣ)",
    startingSound: "झ",
    endingMarker: "ष् (Sutra 9)",
    includedSounds: ["झ", "भ", "घ", "ढ", "ध"],
    totalSounds: 5,
    significance: "Voiced aspirated stops (4th consonants of vargas).",
    sampleSutras: ["8.2.40 झषस्तथोर्धोऽधः"]
  },
  {
    name: "जश् (Jaś)",
    startingSound: "ज",
    endingMarker: "श् (Sutra 10)",
    includedSounds: ["ज", "ब", "ग", "ड", "द"],
    totalSounds: 5,
    significance: "Voiced unaspirated stops (3rd consonants of vargas). Jaśtva Sandhi replaces consonants with these.",
    sampleSutras: ["8.2.39 झलां जशोऽन्ते", "8.4.53 झलां जश् झशि"]
  },
  {
    name: "झल् (Jhal)",
    startingSound: "झ",
    endingMarker: "ल् (Sutra 14)",
    includedSounds: ["झ", "भ", "घ", "ढ", "ध", "ज", "ब", "ग", "ड", "द", "ख", "फ", "छ", "ठ", "थ", "च", "ट", "त", "क", "प", "श", "ष", "स", "ह"],
    totalSounds: 24,
    significance: "All non-nasal consonants and non-semivowels (All stops + all sibilants).",
    sampleSutras: ["8.2.39 झलां जशोऽन्ते", "8.4.54 अभ्यासे चर्च"]
  },
  {
    name: "खर् (Khar)",
    startingSound: "ख",
    endingMarker: "र् (Sutra 13)",
    includedSounds: ["ख", "फ", "छ", "ठ", "थ", "च", "ट", "त", "क", "प", "श", "ष", "स"],
    totalSounds: 13,
    significance: "All voiceless consonants (1st and 2nd stops + sibilants). Triggers devoicing (Cartva).",
    sampleSutras: ["8.4.55 खरि च", "8.3.15 खरवसानयोर्विसर्जनीयः"]
  },
  {
    name: "हल् (Hal)",
    startingSound: "ह",
    endingMarker: "ल् (Sutra 14)",
    includedSounds: ["All 33 Consonants of Sanskrit"],
    totalSounds: 33,
    significance: "THE ENTIRE CONSONANT INVENTORY OF SANSKRIT. 'Hal' = Consonant (Vyañjana).",
    sampleSutras: ["1.3.3 हलन्त्यम्", "1.1.7 हलन्तरानन्तराः संयोगः"]
  },
  {
    name: "अल् (Al)",
    startingSound: "अ",
    endingMarker: "ल् (Sutra 14)",
    includedSounds: ["All Vowels + All Consonants"],
    totalSounds: 42,
    significance: "THE COMPLETE PHONEME INVENTORY OF SANSKRIT. Equivalent to 'Any Sound / Letter'.",
    sampleSutras: ["1.1.52 अलोऽन्त्यस्य", "1.1.55 अनेकाल् शित्सर्वस्य"]
  }
];

// 2. ASHTADHYAYI (8 Adhyayas Overview & Core Computational Sutras)
export const ASHTADHYAYI_CORPUS: AshtadhyayiAdhyaya[] = [
  {
    adhyaya: 1,
    title: "प्रथमोध्यायः — Saṁjñā (Technical Definitions) & Paribhāṣā (Metarules)",
    padasCount: 4,
    sutraCountEstimate: 351,
    primaryThemes: [
      "Technical vocabulary (Samjna): Guna, Vriddhi, Pratisiddha, It-markers, Pragrihya",
      "Interpretive axioms (Paribhasha): How to read and prioritize rules",
      "Pada governance (Atmanepada vs. Parasmaipada conditions)",
      "Karaka definitions and semantic case relationships"
    ],
    keySutras: [
      {
        number: "1.1.1",
        sutra: "वृद्धिरादैच्",
        transliteration: "vṛddhir ād aic",
        type: "Samjna (Definition)",
        meaning: "The vowels 'ā', 'ai', and 'au' are designated as 'Vṛddhi'.",
        scholarlyExplanation: "The foundational opening sutra of Ashtadhyayi. Deliberately starts with 'Vṛddhi' (growth, prosperity, auspiciousness) as a divine Mangala. Defines algebraic term 'Vṛddhi' = ā + aic.",
        applicationExample: "गम् + घञ् → गाम (vriddhi of a to ā); विद्या + आलयः → विद्यालयः"
      },
      {
        number: "1.1.2",
        sutra: "अदेङ् गुणः",
        transliteration: "ad eṅ guṇaḥ",
        type: "Samjna (Definition)",
        meaning: "The vowels 'a', 'e', and 'o' are designated as 'Guṇa'.",
        scholarlyExplanation: "Mathematical definition of Guṇa grade: short 'a' + Eṅ (e, o). Used in vowel gradation throughout morphology.",
        applicationExample: "भू + तिप् → भो + ति → भवति (Guṇa of ū is o)"
      },
      {
        number: "1.1.3",
        sutra: "इको गुणवृद्धी",
        transliteration: "iko guṇa-vṛddhī",
        type: "Paribhasha (Metarule)",
        meaning: "Whenever Guṇa or Vṛddhi is prescribed without specifying what is replaced, it replaces an 'Ik' vowel (i, u, ṛ, ḷ).",
        scholarlyExplanation: "Critical metarule preventing ambiguity. Guṇa and Vṛddhi cannot replace consonants or non-Ik vowels."
      },
      {
        number: "1.1.71",
        sutra: "आदिरन्त्येन सहेता",
        transliteration: "ādir antyena sahetā",
        type: "Samjna (Definition)",
        meaning: "An initial sound paired with a final marker (It) denotes both itself and all intervening sounds.",
        scholarlyExplanation: "The formula generating all Pratyāhāras! Enables Panini's supreme compression technique.",
        applicationExample: "अ (first) + च् (marker) = 'अच्' (a, i, u, ṛ, ḷ, e, o, ai, au)"
      },
      {
        number: "1.4.2",
        sutra: "विप्रतिषेधे परं कार्यम्",
        transliteration: "vipratiṣedhe paraṁ kāryam",
        type: "Paribhasha (Metarule)",
        meaning: "In case of conflict between two rules of equal strength, the subsequent rule in the text prevails.",
        scholarlyExplanation: "Conflict resolution algorithm governing the Sapadasaptadhyayi (the first 7¼ chapters)."
      }
    ]
  },
  {
    adhyaya: 2,
    title: "द्वितीयोध्यायः — Samāsa (Compounds) & Kārakas (Case Assignment)",
    padasCount: 4,
    sutraCountEstimate: 268,
    primaryThemes: [
      "Compound nominal generation (Samasa): Avyayibhava, Tatpurusha, Karmadharaya, Dvigu, Bahuvrihi, Dvandva",
      "Vibhakti-artha: Syntactic meanings and triggers for the 7 nominal cases (Karaka Vibhakti vs Upapada Vibhakti)",
      "Lopa / Luk / Lup: Deletion algorithms for affixes inside compounds"
    ],
    keySutras: [
      {
        number: "2.1.3",
        sutra: "प्राक्कडारात् समासः",
        transliteration: "prāk kaḍārāt samāsaḥ",
        type: "Adhikara (Governing)",
        meaning: "Head rule: Any construction taught before rule 'कडाराः कर्मधारये' is called a Samāsa (Compound).",
        scholarlyExplanation: "Adhikara governing the entirety of compound formation in Sanskrit."
      },
      {
        number: "2.1.6",
        sutra: "अव्ययं विभक्तिसमीपसमृद्धि...",
        transliteration: "avyayaṁ vibhakti-samīpa-samṛddhi...",
        type: "Vidhi (Operational)",
        meaning: "An indeclinable (Avyaya) combines with a noun to form an Avyayībhāva compound in meanings of case, proximity, abundance, etc.",
        scholarlyExplanation: "Generates indeclinable adverbial compounds like Upaganga (near the Ganga), Pratyaksham (before eyes)."
      },
      {
        number: "2.3.1",
        sutra: "अनभिहिते",
        transliteration: "anabhihite",
        type: "Adhikara (Governing)",
        meaning: "Case endings are affixed to express a Karaka only when that Karaka has not already been expressed (by a verb, suffix, or compound).",
        scholarlyExplanation: "Master principle of Paninian syntax: No semantic redundancy. If Karta is expressed by verb (e.g. पठति), nominative (Prathama) is used; if not expressed (कर्मणि प्रयोग), instrumental (Tritiya) is used."
      }
    ]
  },
  {
    adhyaya: 3,
    title: "तृतीयोध्यायः — Tin-Pratyaya (Verb Inflections) & Kṛt (Primary Affixes)",
    padasCount: 4,
    sutraCountEstimate: 631,
    primaryThemes: [
      "The 10 Lakāras (Tenses and Moods: Laṭ, Liṭ, Luṭ, Lṛṭ, Leṭ, Loṭ, Laṅ, Liṅ, Luṅ, Lṛṅ)",
      "Verbal root suffixes and voice (Kartari Prayoga, Karmani Prayoga, Bhave Prayoga)",
      "Primary nominal suffixes (Kridanta): Ktvā, Lyap, Tumun, Tavya, Anīya, Kta, Ktavatu, Śatṛ, Śānac, Ghañ, etc."
    ],
    keySutras: [
      {
        number: "3.1.91",
        sutra: "धातोः",
        transliteration: "dhātoḥ",
        type: "Adhikara (Governing)",
        meaning: "Henceforth, affixes are introduced after a verbal root (Dhātu).",
        scholarlyExplanation: "Governs the entire 3rd Adhyaya: verbal conjugation and verbal derivation."
      },
      {
        number: "3.2.124",
        sutra: "लटः शतृशानचावप्रथमासमानाधिकरणे",
        transliteration: "laṭaḥ śatṛ-śānacāv aprathamā...",
        type: "Vidhi (Operational)",
        meaning: "The suffixes Śatṛ and Śānac (Present Participles -ing) replace Laṭ when in agreement with a non-nominative word.",
        scholarlyExplanation: "Derives words like पठन् (reading), गच्छन् (going), कुर्वाणः (doing)."
      },
      {
        number: "3.4.78",
        sutra: "तिप्तस्झि सिप्थस्थ मिब्वस्मस्ताताञ्...",
        transliteration: "tip-tas-jhi sip-thas-tha...",
        type: "Vidhi (Operational)",
        meaning: "The 18 verbal suffixes (9 Parasmaipada: tip, tas, jhi... and 9 Atmanepada: ta, ātām, jha...) that replace Lakāras.",
        scholarlyExplanation: "The master inventory of verbal personal inflections (3 persons × 3 numbers × 2 voices)."
      }
    ]
  },
  {
    adhyaya: 4,
    title: "चतुर्थोध्यायः — Strī-Pratyaya (Feminine) & Taddhita (Secondary Affixes)",
    padasCount: 4,
    sutraCountEstimate: 635,
    primaryThemes: [
      "Feminine nominal suffixes: Ṭāp, Ḍāp, Cāp, Ṅīp, Ṅīṣ, Ṅīn",
      "Taddhita affixes: Patronymic / Lineage (Apatyādhikāra - derived names like Vāsudeva from Vasudeva, Gārgya from Garga)",
      "Regional, geographic, and relational suffixes (Cāturarthika)"
    ],
    keySutras: [
      {
        number: "4.1.1",
        sutra: "ङ्याप्प्रातिपदिकात्",
        transliteration: "ṅy-āp-prātipadikāt",
        type: "Adhikara (Governing)",
        meaning: "Affixes are introduced after feminine stems ending in Ṅī and Āp, or after nominal stems (Prātipadika).",
        scholarlyExplanation: "Establishes base condition for all nominal case affixes (Sup) and Taddhita affixes."
      },
      {
        number: "4.1.2",
        sutra: "स्वौजसमौट्छष्टाभ्याम्भिस्ङेभ्याम्भ्यस्...",
        transliteration: "su-au-jas am-auṭ-śas ṭā-bhyām-bhis...",
        type: "Vidhi (Operational)",
        meaning: "The 21 nominal case inflections (Sup-pratyayas: 7 cases × 3 numbers).",
        scholarlyExplanation: "The universal nominal declension engine of Sanskrit."
      },
      {
        number: "4.1.4",
        sutra: "अजाद्यतष्टाप्",
        transliteration: "ajādy-ataṣ-ṭāp",
        type: "Vidhi (Operational)",
        meaning: "The feminine suffix Ṭāp (-ā) is added to the word 'Aja' etc. and stems ending in short 'a'.",
        scholarlyExplanation: "Derives feminine words: अज + टाप् → अजा (she-goat), अश्व + टाप् → अश्वा (mare)."
      }
    ]
  },
  {
    adhyaya: 5,
    title: "पञ्चमोध्यायः — Taddhita Continued (Abstract, Possessive & Comparison)",
    padasCount: 4,
    sutraCountEstimate: 555,
    primaryThemes: [
      "Possessive affixes (Matvarthīya: Matup, Ini, Than - e.g. Dhīmān, Jñānī)",
      "Abstract nouns of state and quality (Tva, Tal: -tva, -tā - e.g. Devatva, Sundaratā)",
      "Diminutives, comparatives (Tara, Tama, Īyas, Iṣṭha), and numbers"
    ],
    keySutras: [
      {
        number: "5.1.119",
        sutra: "तस्य भावस्त्वतलौ",
        transliteration: "tasya bhāvas tva-talau",
        type: "Vidhi (Operational)",
        meaning: "The affixes 'Tva' (neuter) and 'Tal' (feminine -tā) denote the abstract essence or state of a thing.",
        scholarlyExplanation: "Generates philosophical terms: पुरुष + त्व → पुरुषत्वम्, गुरु + ता → गुरुता."
      },
      {
        number: "5.2.94",
        sutra: "तदस्यास्त्यस्मिन्निति मतुप्",
        transliteration: "tad asyāsty asminn iti matup",
        type: "Vidhi (Operational)",
        meaning: "The affix Matup ('possessing that') is added in the sense of 'this belongs to him' or 'this is in him'.",
        scholarlyExplanation: "Generates words like गोमन्त् (Gomān - possessing cows), धीमन्त् (Dhīmān - possessing intellect)."
      }
    ]
  },
  {
    adhyaya: 6,
    title: "षष्ठोध्यायः — Sandhi, Augments (Āgama), Reduplication & Accentuation",
    padasCount: 4,
    sutraCountEstimate: 736,
    primaryThemes: [
      "Internal Sandhi and stem phonology",
      "Reduplication algorithms (Dvitva) in verbs (Abhyāsa)",
      "Vowel lengthening, Guṇa, Vṛddhi, Samprasāraṇa (vowelization of semivowels)",
      "Vedic accentuation rules (Udātta, Anudātta, Svarita)"
    ],
    keySutras: [
      {
        number: "6.1.77",
        sutra: "इको यणचि",
        transliteration: "iko yaṇ aci",
        type: "Vidhi (Operational)",
        meaning: "An 'Ik' vowel (i, u, ṛ, ḷ) is replaced by 'Yaṇ' (y, v, r, l) when followed by any vowel (Ac).",
        scholarlyExplanation: "The quintessential Sandhi rule. Foundational in both spoken and Vedic Sanskrit.",
        applicationExample: "यदि + अपि → यद्यपि; सु + आगतम् → स्वागतम्"
      },
      {
        number: "6.1.78",
        sutra: "एचोऽयवायावः",
        transliteration: "eco 'yavāyāvaḥ",
        type: "Vidhi (Operational)",
        meaning: "The diphthongs (Ec: e, o, ai, au) are replaced respectively by ay, av, āy, āv when followed by a vowel.",
        scholarlyExplanation: "Transforms verbal roots: ने + अनम् → नयनम्; पो + अनम् → पवनम्; पौ + अकः → पावकः."
      },
      {
        number: "6.1.87",
        sutra: "आद् गुणः",
        transliteration: "ād guṇaḥ",
        type: "Vidhi (Operational)",
        meaning: "When 'a' or 'ā' is followed by an 'Ik' vowel, a single Guṇa vowel replaces both.",
        scholarlyExplanation: "Generates: देव + इन्द्रः → देवेन्द्रः; महा + उत्सवः → महोत्सवः; महा + ऋषिः → महर्षिः."
      },
      {
        number: "6.1.101",
        sutra: "अकः सवर्णे दीर्घः",
        transliteration: "akaḥ savarṇe dīrghaḥ",
        type: "Vidhi (Operational)",
        meaning: "When an 'Ak' vowel (a, i, u, ṛ, ḷ) is followed by a homogeneous vowel (Savarṇa), a single long vowel replaces both.",
        scholarlyExplanation: "Generates: विद्या + आलयः → विद्यालयः; मुनि + ईश्वरः → मुनीश्वरः."
      }
    ]
  },
  {
    adhyaya: 7,
    title: "सप्तमोध्यायः — Aṅga Modifications, Vikaraṇas & Conjugational Shifts",
    padasCount: 4,
    sutraCountEstimate: 438,
    primaryThemes: [
      "Stem transformations under specific suffixes (Aṅgasya adhikāra)",
      "Augments (Āgama): It-āgama (Seṭ vs. Aniṭ roots), Num-āgama",
      "Special verb stem alternations across the 10 verb classes"
    ],
    keySutras: [
      {
        number: "7.1.1",
        sutra: "युवोरनाकौ",
        transliteration: "yuvor an-ākau",
        type: "Vidhi (Operational)",
        meaning: "The elements 'Yu' and 'Vu' in suffixes are replaced by 'Ana' and 'Aka' respectively.",
        scholarlyExplanation: "Explains how suffix Lyuṭ becomes -ana (पठ् + ल्युट् → पठनम्) and Nvul becomes -aka (कृ + ण्वुल् → कारकः)."
      },
      {
        number: "7.2.115",
        sutra: "अचो ञ्णिति",
        transliteration: "aco ñṇiti",
        type: "Vidhi (Operational)",
        meaning: "Vṛddhi replaces the final vowel of a stem before a suffix having 'ñ' or 'ṇ' as an It-marker.",
        scholarlyExplanation: "Explains vowel upgrades: पठ् + घञ् → पाठः; नी + ण्वुल् → नायकः."
      },
      {
        number: "7.3.84",
        sutra: "सार्वधातुकार्धधातुकयोः",
        transliteration: "sārvadhātukārdhadhātukayoḥ",
        type: "Vidhi (Operational)",
        meaning: "An 'Ik' vowel of an Aṅga takes Guṇa before a Sārvadhātuka or Ārdhadhātuka suffix.",
        scholarlyExplanation: "Explains basic verbal root changes: जि + तिप् → जेति → जयति."
      }
    ]
  },
  {
    adhyaya: 8,
    title: "अष्टमोध्यायः — Padānta Sandhi, Consonants & The Famous Tripādī",
    padasCount: 4,
    sutraCountEstimate: 369,
    primaryThemes: [
      "Reduplication of words, Visarga modifications, Consonant assimilation (Ścutva, Ṣṭutva, Jaśtva)",
      "Natva (retroflexion of n to ṇ) and Ṣatva (retroflexion of s to ṣ)",
      "THE TRIPĀDĪ (8.2 to 8.4): Strictly ordered, irreversible transformation rules where later rules are Asiddha (non-existent) to earlier ones",
      "Final sutra: 'अ अ' (8.4.68) restoring open short 'a' from closed 'a'"
    ],
    keySutras: [
      {
        number: "8.2.1",
        sutra: "पूर्वत्रासिद्धम्",
        transliteration: "pūrvatrāsiddham",
        type: "Adhikara (Governing)",
        meaning: "The rules in the remaining three Pādas (the Tripādī) are considered as non-existent (asiddha) with respect to the preceding chapters, and within the Tripādī, each subsequent rule is asiddha to each prior rule.",
        scholarlyExplanation: "ONE OF THE GREATEST ALGORITHMIC FORMULATIONS IN HUMAN HISTORY. Establishes a strictly feed-forward, non-cyclic, destructive rewrite cascade. Precludes infinite loops and guarantees deterministic termination."
      },
      {
        number: "8.2.39",
        sutra: "झलां जशोऽन्ते",
        transliteration: "jhalāṁ jaśo 'nte",
        type: "Vidhi (Operational)",
        meaning: "At the end of a Pada, non-nasal consonants (Jhal) are replaced by their corresponding 3rd-class voiced unaspirated stops (Jaś).",
        scholarlyExplanation: "Explains why वाच् becomes वाग्; जगत् becomes जगद्."
      },
      {
        number: "8.3.15",
        sutra: "खरवसानयोर्विसर्जनीयः",
        transliteration: "khar-avasānayor visarjanīyaḥ",
        type: "Vidhi (Operational)",
        meaning: "A 'r' (from Ru) is replaced by Visarga (ḥ) before a voiceless consonant (Khar) or at the end of a sentence (Avasāna).",
        scholarlyExplanation: "Explains the pervasive terminal Visarga in Sanskrit: रामस् → रामर् → रामः."
      },
      {
        number: "8.4.40",
        sutra: "स्तोः श्चुना श्चुः",
        transliteration: "stoḥ ścunā ścuḥ",
        type: "Vidhi (Operational)",
        meaning: "Dental sibilant 's' and dental stops (t-varga) become palatal sibilant 'ś' and palatal stops (c-varga) when in contact with palatals.",
        scholarlyExplanation: "Ścutva Sandhi: सत् + चित् → सच्चित्; रामस् + शेते → रामश्शेते."
      },
      {
        number: "8.4.68",
        sutra: "अ अ",
        transliteration: "a a",
        type: "Vidhi (Operational)",
        meaning: "The closed vowel 'a' (Saṁvṛta), which was treated as open (Vivṛta) for all grammatical operations, is restored to its natural closed state.",
        scholarlyExplanation: "THE ENIGMATIC FINAL SUTRA OF ASHTADHYAYI. Throughout the entire grammar, short 'a' was treated as open (Vivrita) to maintain Savarna homorganicity with long 'ā'. Now that all derivations are finished, Panini restores phonetic reality."
      }
    ]
  }
];

// 3. DHATUPATHA (10 Ganas with representative canonical roots)
export const DHATUPATHA_CORPUS: DhatuClass[] = [
  {
    ganaNumber: 1,
    ganaName: "Bhvādi Gaṇa (भ्वादिगण)",
    ganaNameSanskrit: "भ्वादिगणः (भू-आदि)",
    vikarana: "शप् (Śap = -a-)",
    thematicSuffix: "a",
    approximateCount: 1035,
    description: "The largest class containing over 50% of all Sanskrit roots. Thematic root-accented class where stem vowel takes Guṇa before the affix -a-.",
    roots: [
      {
        root: "भू (bhū)",
        transliteration: "bhū (bhū sattāyām)",
        anubandha: "None (Anit)",
        meaningEnglish: "To be, exist, become",
        meaningSanskrit: "सत्तायाम् (to exist)",
        pada: "Parasmaipada",
        itStatus: "Set",
        presentThirdPersonSingular: "भवति (bhavati)",
        pastImperfect: "अभवत् (abhavat)",
        future: "भविष्यति (bhaviṣyati)",
        perfect: "बभूव (babhūva)",
        exampleSentence: "सत्यं सर्वदा विजयि भवति। (Truth always becomes victorious.)"
      },
      {
        root: "पठ् (paṭh)",
        transliteration: "paṭh (paṭha vyaktāyāṁ vāci)",
        anubandha: "व्यक्तायां वाचि",
        meaningEnglish: "To read, recite, study",
        meaningSanskrit: "व्यक्तायां वाचि (articulated speech)",
        pada: "Parasmaipada",
        itStatus: "Set",
        presentThirdPersonSingular: "पठति (paṭhati)",
        pastImperfect: "अपठत् (apaṭhat)",
        future: "पठिष्यति (paṭhiṣyati)",
        perfect: "पपाठ (papāṭha)",
        exampleSentence: "छात्रः अष्टाध्यायीं पठति। (The student recites the Ashtadhyayi.)"
      },
      {
        root: "गम् (gam / gacch)",
        transliteration: "gamḷ (gamḷ gatau)",
        anubandha: "ऌ (Gamḷ)",
        meaningEnglish: "To go, move, attain",
        meaningSanskrit: "गतौ (motion, attainment)",
        pada: "Parasmaipada",
        itStatus: "Anit",
        presentThirdPersonSingular: "गच्छति (gacchati)",
        pastImperfect: "अगच्छत् (agacchat)",
        future: "गमिष्यति (gamiṣyati)",
        perfect: "जगाम (jagāma)",
        exampleSentence: "सत्यस्य मार्गं धीराः गच्छन्ति। (The wise tread the path of truth.)"
      },
      {
        root: "स्था (sthā / tiṣṭh)",
        transliteration: "ṣṭhā (ṣṭhā gatinivṛttau)",
        anubandha: "ष (becomes s)",
        meaningEnglish: "To stand, abide, remain",
        meaningSanskrit: "गतिनिवृत्तौ (cessation of motion)",
        pada: "Parasmaipada",
        itStatus: "Anit",
        presentThirdPersonSingular: "तिष्ठति (tiṣṭhati)",
        pastImperfect: "अतिष्ठत् (atiṣṭhat)",
        future: "स्थास्यति (sthāsyati)",
        perfect: "तस्थौ (tasthau)",
        exampleSentence: "योगी समाधौ तिष्ठति। (The yogi remains in meditation.)"
      }
    ]
  },
  {
    ganaNumber: 2,
    ganaName: "Adādi Gaṇa (अदादिगण)",
    ganaNameSanskrit: "अदादिगणः (अद्-आदि)",
    vikarana: "लुक् (Luk = zero-affix)",
    thematicSuffix: "Ø (Athematic)",
    approximateCount: 72,
    description: "Root class. The affix Śap is elided by Luk (अदिप्रभृतिभ्यः शपः 2.4.72). Personal endings attach directly to the root, exhibiting strong/weak stem alternation.",
    roots: [
      {
        root: "अद् (ad)",
        transliteration: "ad (ada bhakṣaṇe)",
        anubandha: "अद भक्षणे",
        meaningEnglish: "To eat, consume",
        meaningSanskrit: "भक्षणे (consumption)",
        pada: "Parasmaipada",
        itStatus: "Anit",
        presentThirdPersonSingular: "अत्ति (atti)",
        pastImperfect: "आदत् (ādat)",
        future: "अत्स्यति (atsyati)",
        perfect: "आद (āda)",
        exampleSentence: "अन्नं प्राणाः अत्ति। (Living beings consume food.)"
      },
      {
        root: "अस् (as)",
        transliteration: "as (asa bhuvi)",
        anubandha: "अविद्यमान",
        meaningEnglish: "To be, exist (copula)",
        meaningSanskrit: "भुवि (being)",
        pada: "Parasmaipada",
        itStatus: "Anit",
        presentThirdPersonSingular: "अस्ति (asti)",
        pastImperfect: "आसीत् (āsīt)",
        future: "भविष्यति (bhaviṣyati - suppletion)",
        perfect: "बभूव (babhūva)",
        exampleSentence: "ब्रह्म सत्यं जगन्मिथ्या अस्ति। (Brahman is truth, transient world is illusion.)"
      },
      {
        root: "या (yā)",
        transliteration: "yā (yā prāpaṇe)",
        anubandha: "प्रापणे",
        meaningEnglish: "To go, travel, reach",
        meaningSanskrit: "प्रापणे (reaching)",
        pada: "Parasmaipada",
        itStatus: "Anit",
        presentThirdPersonSingular: "याति (yāti)",
        pastImperfect: "अयात् (ayāt)",
        future: "यास्यति (yāsyati)",
        perfect: "ययौ (yayau)",
        exampleSentence: "सूर्यः आकाशे याति। (The sun travels across the sky.)"
      }
    ]
  },
  {
    ganaNumber: 3,
    ganaName: "Juhotyādi Gaṇa (जुहोत्यादिगण)",
    ganaNameSanskrit: "जुहोत्यादिगणः (हु-आदि)",
    vikarana: "श्लु (Ślu = Reduplication & Elision)",
    thematicSuffix: "Reduplication",
    approximateCount: 24,
    description: "Reduplicating class. Śap is elided by Ślu (जुहोत्यादिभ्यः श्लुः 2.4.75), which triggers reduplication of the verbal root (श्लौ 6.1.10).",
    roots: [
      {
        root: "हु (hu)",
        transliteration: "hu (hu dānādanayoḥ)",
        anubandha: "दानादनयोः",
        meaningEnglish: "To sacrifice, offer oblation into fire",
        meaningSanskrit: "दानादनयोः (giving / offering)",
        pada: "Parasmaipada",
        itStatus: "Anit",
        presentThirdPersonSingular: "जुहोति (juhoti)",
        pastImperfect: "अजुहोत् (ajuhot)",
        future: "होष्यति (hoṣyati)",
        perfect: "जुहाव (juhāva)",
        exampleSentence: "ऋत्विक् अग्नौ हविः जुहोति। (The priest offers oblation into Agni.)"
      },
      {
        root: "दा (dā)",
        transliteration: "ḍu-dāñ (ḍu-dāñ dāne)",
        anubandha: "डु, ञ् (Ubhayapada)",
        meaningEnglish: "To give, bestow, impart",
        meaningSanskrit: "दाने (giving)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "ददाति / दत्ते (dadāti / datte)",
        pastImperfect: "अददात् / अदत्त (adadāt / adatta)",
        future: "दास्यति / दास्यते (dāsyati / dāsyate)",
        perfect: "ददौ (dadau)",
        exampleSentence: "विद्या ददाति विनयम्। (Knowledge bestows humility.)"
      },
      {
        root: "धा (dhā)",
        transliteration: "ḍu-dhāñ (ḍu-dhāñ dhāraṇapoṣaṇayoḥ)",
        anubandha: "डु, ञ् (Ubhayapada)",
        meaningEnglish: "To place, support, sustain",
        meaningSanskrit: "धारणपोषणयोः (sustaining, placing)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "दधाति / धत्ते (dadhāti / dhatte)",
        pastImperfect: "अदधात् (adadhāt)",
        future: "धास्यति (dhāsyati)",
        perfect: "दधौ (dadhau)",
        exampleSentence: "पृथिवी सर्वान् प्राणिनान् धत्ते। (The Earth sustains all living beings.)"
      }
    ]
  },
  {
    ganaNumber: 4,
    ganaName: "Divādi Gaṇa (दिवादिगण)",
    ganaNameSanskrit: "दिवादिगणः (दिव्-आदि)",
    vikarana: "श्यन् (Śyan = -ya-)",
    thematicSuffix: "ya",
    approximateCount: 140,
    description: "The 'ya'-class. Suffix Śyan is inserted before personal endings (दिवादिभ्यः श्यन् 3.1.69). Characterized by accent on the affix.",
    roots: [
      {
        root: "दिव् (div)",
        transliteration: "divu (divu krīḍāvijigīṣā...)",
        anubandha: "उ",
        meaningEnglish: "To play, shine, gamble, illuminate",
        meaningSanskrit: "क्रीडाविजिगीषाद्योतिषु (sport, victory, radiance)",
        pada: "Parasmaipada",
        itStatus: "Set",
        presentThirdPersonSingular: "दीव्यति (dīvyati)",
        pastImperfect: "अदीव्यत् (adīvyat)",
        future: "देविष्यति (deviṣyati)",
        perfect: "दिदेव (dideva)",
        exampleSentence: "आदित्यः नभसि दीव्यति। (The sun shines in the celestial sphere.)"
      },
      {
        root: "नृत् (nṛt)",
        transliteration: "nṛtī (nṛtī gātravikṣepe)",
        anubandha: "ई",
        meaningEnglish: "To dance, move rhythmic limbs",
        meaningSanskrit: "गात्रविक्षेपे (rhythmic movement)",
        pada: "Parasmaipada",
        itStatus: "Set",
        presentThirdPersonSingular: "नृत्यति (nṛtyati)",
        pastImperfect: "अनृत्यत् (anṛtyat)",
        future: "नर्तिष्यति (nartiṣyati)",
        perfect: "ननर्त (nanarta)",
        exampleSentence: "मयूरः मेघदर्शने नृत्यति। (The peacock dances upon seeing the clouds.)"
      },
      {
        root: "जन् (jan)",
        transliteration: "janī (janī prādurbhāve)",
        anubandha: "ई",
        meaningEnglish: "To be born, originate, manifest",
        meaningSanskrit: "प्रादुर्भावे (manifestation)",
        pada: "Atmanepada",
        itStatus: "Anit",
        presentThirdPersonSingular: "जायते (jāyate)",
        pastImperfect: "अजायत (ajāyata)",
        future: "जनिष्यते (janiṣyate)",
        perfect: "जज्ञे (jajñe)",
        exampleSentence: "सत्यात् धर्मः जायते। (From truth is righteousness born.)"
      }
    ]
  },
  {
    ganaNumber: 5,
    ganaName: "Svādi Gaṇa (स्वादिगण)",
    ganaNameSanskrit: "स्वादिगणः (सु-आदि)",
    vikarana: "श्नौ (Śnu = -nu-)",
    thematicSuffix: "nu",
    approximateCount: 35,
    description: "The 'nu'-class. Suffix Śnu is inserted between root and ending (स्वादिभ्यः श्नुः 3.1.73). Takes Guṇa to 'no' before singular active endings.",
    roots: [
      {
        root: "सु (su)",
        transliteration: "ṣuñ (ṣuñ abhiṣave)",
        anubandha: "ष, ञ्",
        meaningEnglish: "To extract, press Soma juice",
        meaningSanskrit: "अभिषवे (extracting juice)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "सुनोति / सुनुते (sunoti / sunute)",
        pastImperfect: "असुनोत् (asunot)",
        future: "सोष्यति (soṣyati)",
        perfect: "सुषाव (suṣāva)",
        exampleSentence: "यजमानः यज्ञे सोमं सुनोति। (The patron presses Soma at the sacrifice.)"
      },
      {
        root: "आप् (āp)",
        transliteration: "āpḷ (āpḷ vyāptau)",
        anubandha: "ऌ",
        meaningEnglish: "To obtain, reach, pervade",
        meaningSanskrit: "व्याप्तौ (pervading, obtaining)",
        pada: "Parasmaipada",
        itStatus: "Anit",
        presentThirdPersonSingular: "आप्नोति (āpnoti)",
        pastImperfect: "आप्नोत् (āpnot)",
        future: "आप्स्यति (āpsyati)",
        perfect: "आप (āpa)",
        exampleSentence: "श्रद्धावान् लभते ज्ञानं तत्परः आप्नोति शान्तिम्। (The devout attains wisdom and obtains peace.)"
      }
    ]
  },
  {
    ganaNumber: 6,
    ganaName: "Tudādi Gaṇa (तुदादिगण)",
    ganaNameSanskrit: "तुदादिगणः (तुद्-आदि)",
    vikarana: "श (Śa = -a- with suffix accent)",
    thematicSuffix: "a (unaccented root)",
    approximateCount: 157,
    description: "The accented -a- class (तुदादिभ्यः शः 3.1.77). Unlike Bhvadi, the root vowel does NOT undergo Guṇa before this suffix.",
    roots: [
      {
        root: "तुद् (tud)",
        transliteration: "tuda (tuda vyathane)",
        anubandha: "व्यथने",
        meaningEnglish: "To push, strike, torment",
        meaningSanskrit: "व्यथने (causing distress/striking)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "तुदति / तुदते (tudati / tudate)",
        pastImperfect: "अतुदत् (atudat)",
        future: "तोत्स्यति (totsyati)",
        perfect: "तुतोद (tutoda)",
        exampleSentence: "दुर्वचनं हृदयं तुदति। (Harsh words pierce the heart.)"
      },
      {
        root: "विश् (viś)",
        transliteration: "viśa (viśa praveśane)",
        anubandha: "प्रवेशने",
        meaningEnglish: "To enter, settle into",
        meaningSanskrit: "प्रवेशने (entering)",
        pada: "Parasmaipada",
        itStatus: "Anit",
        presentThirdPersonSingular: "विशति (viśati)",
        pastImperfect: "अविशत् (aviśat)",
        future: "वेक्ष्यति (vekṣyati)",
        perfect: "विवेश (viveśa)",
        exampleSentence: "शिष्यः गुरुकुलं विशति। (The student enters the preceptor's hermitage.)"
      },
      {
        root: "मुच् (muc)",
        transliteration: "muca (mucaḷ mocane)",
        anubandha: "ऌ",
        meaningEnglish: "To release, liberate, untie",
        meaningSanskrit: "मोचने (liberating)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "मुञ्चति / मुञ्चते (muñcati / muñcate)",
        pastImperfect: "अमुञ्चत् (amuñcat)",
        future: "मोक्ष्यति (mokṣyati)",
        perfect: "मुमोच (mumoca)",
        exampleSentence: "ज्ञानं संसारबन्धनात् मुञ्चति। (Knowledge liberates from worldly bondage.)"
      }
    ]
  },
  {
    ganaNumber: 7,
    ganaName: "Rudhādi Gaṇa (रुधादिगण)",
    ganaNameSanskrit: "रुधादिगणः (रुध्-आदि)",
    vikarana: "श्नम् (Śnam = internal nasal infix -na-/-n-)",
    thematicSuffix: "na / n (infix)",
    approximateCount: 25,
    description: "Nasal infix class. Suffix Śnam is placed immediately after the vowel of the root, not at the end (रुधादिभ्यः श्नम् 3.1.78, मिदचोऽन्त्यात्परः 1.1.47).",
    roots: [
      {
        root: "रुध् (rudh)",
        transliteration: "rudhir (rudhir āvaraṇe)",
        anubandha: "इर्",
        meaningEnglish: "To obstruct, block, restrain",
        meaningSanskrit: "आवरणे (covering, obstructing)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "रुणद्धि / रुन्द्धे (ruṇaddhi / runddhe)",
        pastImperfect: "अरुणत् (aruṇat)",
        future: "रोत्स्यति (rotsyati)",
        perfect: "रुरोध (rurodha)",
        exampleSentence: "सेतुः जलवेगं रुणद्धि। (The dam restrains the torrent of water.)"
      },
      {
        root: "भुज् (bhuj)",
        transliteration: "bhuja (bhuja pālanābhyavahārayoḥ)",
        anubandha: "पालनाभ्यवहारयोः",
        meaningEnglish: "To protect, enjoy, rule, consume",
        meaningSanskrit: "पालने, अभ्यवहारे (protecting, eating)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "भुनक्ति / भुङ्क्ते (bhunakti / bhuṅkte)",
        pastImperfect: "अभुनक् (abhunak)",
        future: "भोक्ष्यति / भोक्ष्यते (bhokṣyati / bhokṣyate)",
        perfect: "बुभोज (bubhoja)",
        exampleSentence: "राजा धर्मेण पृथिवीं भुनक्ति। (The King rules the Earth righteously.)"
      },
      {
        root: "छिद् (chid)",
        transliteration: "chidir (chidir dvaidhīkaraṇe)",
        anubandha: "इर्",
        meaningEnglish: "To cut, sever, split",
        meaningSanskrit: "द्वैधीकरणे (dividing into two)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "छिनत्ति / छिन्ते (chinatti / chintte)",
        pastImperfect: "अच्छिनत् (acchinat)",
        future: "छेत्स्यति (chetsyati)",
        perfect: "चिच्छेद (ciccheda)",
        exampleSentence: "शस्त्रं संशयं छिनत्ति। (The weapon of wisdom cuts through doubt.)"
      }
    ]
  },
  {
    ganaNumber: 8,
    ganaName: "Tanādi Gaṇa (तनादिगण)",
    ganaNameSanskrit: "तनादिगणः (तन्-आदि)",
    vikarana: "उ (u)",
    thematicSuffix: "u",
    approximateCount: 10,
    description: "The 'u'-class (तनादिकृञ्भ्य उः 3.1.79). Contains verbal root 'Kṛ' (to do), the most fundamental auxiliary and action verb in Sanskrit.",
    roots: [
      {
        root: "तन् (tan)",
        transliteration: "tanu (tanu vistāre)",
        anubandha: "विस्तारे",
        meaningEnglish: "To stretch, expand, extend",
        meaningSanskrit: "विस्तारे (expansion)",
        pada: "Ubhayapada",
        itStatus: "Set",
        presentThirdPersonSingular: "तनोति / तनुते (tanoti / tanute)",
        pastImperfect: "अतनोत् (atanot)",
        future: "तनिष्यति (taniṣyati)",
        perfect: "ततान (tatāna)",
        exampleSentence: "कीर्तिं सर्वत्र तनोति। (His noble fame expands everywhere.)"
      },
      {
        root: "कृ (kṛ)",
        transliteration: "ḍukṛñ (ḍukṛñ karaṇe)",
        anubandha: "डु, ञ् (Ubhayapada)",
        meaningEnglish: "To do, make, perform, accomplish",
        meaningSanskrit: "करणे (action, making)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "करोति / कुरुते (karoti / kurute)",
        pastImperfect: "अकरोत् / अकुरुत (akarot / akuruta)",
        future: "करिष्यति / करिष्यते (kariṣyati / kariṣyate)",
        perfect: "चकार / चक्रे (cakāra / cakre)",
        exampleSentence: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। (Your right is to action alone, never to fruits.)"
      }
    ]
  },
  {
    ganaNumber: 9,
    ganaName: "Kryādi Gaṇa (क्र्यादिगण)",
    ganaNameSanskrit: "क्र्यादिगणः (क्री-आदि)",
    vikarana: "श्ना (Śnā = -nā-/-nī-)",
    thematicSuffix: "nā / nī",
    approximateCount: 61,
    description: "The 'nā'-class (क्र्यादिभ्यः श्ना 3.1.81). Suffix shows alternation between long nā and short nī.",
    roots: [
      {
        root: "क्री (krī)",
        transliteration: "ḍukrīñ (ḍukrīñ dravyavinimaye)",
        anubandha: "डु, ञ्",
        meaningEnglish: "To buy, purchase, barter",
        meaningSanskrit: "द्रव्यविनिमये (barter, trade)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "क्रीणाति / क्रीणीते (krīṇāti / krīṇīte)",
        pastImperfect: "अक्रीणात् (akrīṇāt)",
        future: "क्रेष्यति (kreṣyati)",
        perfect: "चिक्रीय (cikrīya)",
        exampleSentence: "वणिक् विपणौ वस्तु क्रीणाति। (The merchant purchases goods in the market.)"
      },
      {
        root: "ज्ञा (jñā)",
        transliteration: "jñā (jñā avabodhane)",
        anubandha: "अवबोधने",
        meaningEnglish: "To know, understand, cognize",
        meaningSanskrit: "अवबोधने (understanding, knowing)",
        pada: "Ubhayapada",
        itStatus: "Anit",
        presentThirdPersonSingular: "जानाति / जानीते (jānāti / jānīte)",
        pastImperfect: "अजानात् (ajānāt)",
        future: "ज्ञास्यति (jñāsyati)",
        perfect: "जज्ञौ (jajñau)",
        exampleSentence: "आत्मवित् शोकं तरति इति ऋषिः जानाति। (The knower of Self crosses sorrow, so knows the seer.)"
      },
      {
        root: "बन्ध् (bandh)",
        transliteration: "bandha (bandha bandhane)",
        anubandha: "बन्धने",
        meaningEnglish: "To bind, tie, fasten",
        meaningSanskrit: "बन्धने (binding)",
        pada: "Parasmaipada",
        itStatus: "Anit",
        presentThirdPersonSingular: "बध्नाति (badhnāti)",
        pastImperfect: "अबध्नात् (abadhnāt)",
        future: "भन्त्स्यति (bhantsyati)",
        perfect: "बबन्ध (babandha)",
        exampleSentence: "रज्जुः पशुं बध्नाति। (The rope ties the animal.)"
      }
    ]
  },
  {
    ganaNumber: 10,
    ganaName: "Curādi Gaṇa (चुरादिगण)",
    ganaNameSanskrit: "चुरादिगणः (चुर्-आदि)",
    vikarana: "णिच् (Ṇic = -aya- causative/inherent affix)",
    thematicSuffix: "aya",
    approximateCount: 410,
    description: "The Ṇic class (सत्यापपाशरूप... 3.1.25, चुरादिभ्यो णिच्). Suffix Ṇic is obligatory (Svārthe Ṇic) even without causative meaning.",
    roots: [
      {
        root: "चुर् (cur)",
        transliteration: "cura (cura steye)",
        anubandha: "स्तेये",
        meaningEnglish: "To steal, rob",
        meaningSanskrit: "स्तेये (stealing)",
        pada: "Ubhayapada",
        itStatus: "Set",
        presentThirdPersonSingular: "चोरयति / चोरयते (corayati / corayate)",
        pastImperfect: "अचोरयत् (acorayat)",
        future: "चोरयिष्यति (corayiṣyati)",
        perfect: "चोरयामास (corayāmāsa)",
        exampleSentence: "तस्करः धनं चोरयति। (The thief steals wealth.)"
      },
      {
        root: "कथ् (kath)",
        transliteration: "katha (katha vākyaprabandhe)",
        anubandha: "वाक्यप्रबन्धे",
        meaningEnglish: "To narrate, tell, recite",
        meaningSanskrit: "वाक्यप्रबन्धे (discourse, narration)",
        pada: "Ubhayapada",
        itStatus: "Set",
        presentThirdPersonSingular: "कथयति / कथयते (kathayati / kathayate)",
        pastImperfect: "अकथयत् (akathayat)",
        future: "कथयिष्यति (kathayiṣyati)",
        perfect: "कथयामास (kathayāmāsa)",
        exampleSentence: "माता बालकाय कथां कथयति। (The mother narrates a story to the child.)"
      },
      {
        root: "गण् (gaṇ)",
        transliteration: "gaṇa (gaṇa saṅkhyāne)",
        anubandha: "संख्याने",
        meaningEnglish: "To count, calculate, consider",
        meaningSanskrit: "संख्याने (counting, enumerating)",
        pada: "Ubhayapada",
        itStatus: "Set",
        presentThirdPersonSingular: "गणयति / गणयते (gaṇayati / gaṇayate)",
        pastImperfect: "अगणयत् (agaṇayat)",
        future: "गणयिष्यति (gaṇayiṣyati)",
        perfect: "गणयामास (gaṇayāmāsa)",
        exampleSentence: "गणकः ग्रहाणां गतिं गणयति। (The astronomer calculates the motion of planets.)"
      }
    ]
  }
];

// 4. GANAPATHA (The Nominal Word-Lists)
export const GANAPATHA_CORPUS: GanapathaGroup[] = [
  {
    id: "sarvadi",
    name: "Sarvādi Gaṇa (सर्वादिगण)",
    nameSanskrit: "सर्वादीनि सर्वनामानि (१.१.२७)",
    ashtadhyayiReference: "1.1.27 सर्वादीनि सर्वनामानि",
    description: "The closed list of 35 Pronouns (Sarvanāman) which undergo distinct declension patterns (such as -asmai in dative, -asmāt in ablative, -e in nominative plural).",
    significance: "Determines pronominal morphology across all cases. A word behaves as a pronoun only if it belongs to this Gaṇa.",
    sampleStems: ["सर्व (sarva - all)", "विश्व (viśva - whole)", "उभ (ubha - both)", "अन्य (anya - other)", "इतर (itara - different)", "त्यद् (tyad - that)", "तद् (tad - he/that)", "यद् (yad - who/which)", "एतद् (etad - this)", "इदम् (idam - this)", "अदस् (adas - yonder)", "युष्मद् (yuṣmad - you)", "अस्मद् (asmad - I/we)"],
    derivationalOutcome: "Nominative plural: सर्वे (sarve), Dative singular: सर्वस्मै (sarvasmai), Ablative singular: सर्वस्मात् (sarvasmāt)."
  },
  {
    id: "pradi",
    name: "Prādi Gaṇa (प्रादिगण — The 22 Upasargas)",
    nameSanskrit: "प्रादयः (१.४.५८) / उपसर्गाः क्रियायोगे (१.४.५९)",
    ashtadhyayiReference: "1.4.58 प्रादयः, 1.4.59 उपसर्गाः क्रियायोगे",
    description: "The 22 fundamental verbal prefixes (Upasargas) that fundamentally alter, intensify, or reverse the semantic valence of verbal roots.",
    significance: "Famous verse: 'उपसर्गवशाद्धातोर्बलादन्यत्र नीयते । प्रहाराहारसंहारविहारपरिहारवत् ॥' (By prefix, root meaning is forcibly shifted, like hṛ with pra = strike, ā = eat, sam = destroy, vi = roam, pari = avoid).",
    sampleStems: ["प्र (pra - forward/forth)", "परा (parā - away/back)", "अप (apa - off/away)", "सम् (sam - together/well)", "अनु (anu - after/along)", "अव (ava - down/off)", "निस् (nis - out/forth)", "निर् (nir - out)", "दुस् (dus - ill/bad)", "दुर् (dur - difficult)", "वि (vi - apart/away)", "आङ् (ā - toward/back)", "नि (ni - down/into)", "अधि (adhi - over/above)", "अपि (api - on/close)", "अति (ati - beyond)", "सु (su - good/well)", "उत् (ut - up/out)", "अभि (abhi - toward/upon)", "प्रति (prati - back/against)", "परि (pari - around)", "उप (upa - near/towards)"],
    derivationalOutcome: "Changes roots: गम् (to go) + आङ् → आगच्छति (comes); स्था + प्र → प्रतिष्ठते (departs)."
  },
  {
    id: "svaradi",
    name: "Svarādi Gaṇa (स्वरादिगण — Indeclinables / Avyayas)",
    nameSanskrit: "स्वरादिनिपातमव्ययम् (१.१.३७)",
    ashtadhyayiReference: "1.1.37 स्वरादिनिपातमव्ययम्",
    description: "The comprehensive inventory of Avyayas (indeclinables) whose form never alters across cases, numbers, or genders (सदृशं त्रिषु लिङ्गेषु...).",
    significance: "Case affixes (Sup) attached to these words are deleted by rule 'अव्ययादाप्सुपः' (2.4.82).",
    sampleStems: ["स्वर् (svar - heaven/light)", "अन्तर् (antar - inside)", "प्रातर् (prātar - early morning)", "पुनर् (punar - again)", "सानुतर (sānutar)", "उच्चैः (uccaiḥ - loudly/high)", "नीचैः (nīcaiḥ - softly/low)", "शनैः (śanaiḥ - slowly)", "ऋधक् (ṛdhak)", "पृथक् (pṛthak - separately)"],
    derivationalOutcome: "प्रातः + सु → प्रातः (Sup elided by Luk; no case inflections)."
  },
  {
    id: "cadi",
    name: "Cādi Gaṇa (चादिगण — Particles & Conjunctions)",
    nameSanskrit: "चादयोऽसत्त्वे (१.४.५७)",
    ashtadhyayiReference: "1.4.57 चादयोऽसत्त्वे",
    description: "Particles (Nipātas) that denote non-substance relations (relations, conditions, emphasis, coordination).",
    significance: "Crucial for syntactic cohesion and Vedic sentence construction.",
    sampleStems: ["च (ca - and)", "वा (vā - or)", "ह (ha - indeed)", "अह (aha)", "एव (eva - only/alone)", "एवम् (evam - thus)", "नूनम् (nūnam - certainly)", "शश्वत् (śaśvat - perpetual)", "युगपत् (yugapat - simultaneously)"],
    derivationalOutcome: "रामो लक्ष्मणश्च (Rama and Lakshmana); सत्यमेव जयते (Truth alone triumphs)."
  },
  {
    id: "gargadi",
    name: "Gargādi Gaṇa (गर्गादिगण — Gotra & Patronymics)",
    nameSanskrit: "गर्गादिभ्यो यञ् (४.१.१०५)",
    ashtadhyayiReference: "4.1.105 गर्गादिभ्यो यञ्",
    description: "Lineage and ancestral patronymics taking the suffix 'Yañ' in the sense of Gotra offspring (grandson downwards).",
    significance: "Foundation of ancient Indian genealogies and Vedic Gotra designations.",
    sampleStems: ["गर्ग (garga)", "वत्स (vatsa)", "वाभ्रव्य (vābhravya)", "कपिल (kapila)", "कण्व (kaṇva)", "अगस्ति (agasti)"],
    derivationalOutcome: "गर्ग + यञ् → गार्ग्यः (Gārgya - descendant of Garga); वत्स + यञ् → वात्स्यः (Vātsya)."
  },
  {
    id: "kambojadi",
    name: "Kambojādi Gaṇa (कम्बोजादिगण — Royal & Tribal Designations)",
    nameSanskrit: "कम्बोजाल्लुक् (४.१.१७५)",
    ashtadhyayiReference: "4.1.175 कम्बोजाल्लुक्",
    description: "List of ancient Janapada tribes and kingdoms where the suffix denoting the King is elided by Luk.",
    significance: "Historic socio-geographic evidence of Panini's familiarity with North-Western frontiers (Gandhara, Kamboja, Yavana).",
    sampleStems: ["कम्बोज (Kamboja)", "चोल (Chola)", "केरल (Kerala)", "यवन (Yavana)", "शक्य (Shakya)"],
    derivationalOutcome: "कम्बोजानां राजा → कम्बोजः (The word 'Kamboja' denotes both the tribe and the King of Kamboja)."
  }
];

// 5. UNADIPATHA (Uṇādi Sūtras — Primitive & Irregular Derivations)
export const UNADIPATHA_CORPUS: UnadiSutraRule[] = [
  {
    sutraNumber: "उणादि १.१",
    sutra: "कृवापाजिमिस्वदिसाध्यशूभ्य उण्",
    transliteration: "kṛ-vā-pā-ji-mi-svadi-sādhy-aśūbhya uṇ",
    affix: "उण् (uṇ = -u)",
    derivedWords: [
      {
        word: "कारुः (kāruḥ)",
        root: "कृ (kṛ - to make)",
        meaning: "Artisan, craftsman, maker",
        linguisticNote: "Root kṛ takes Vriddhi and affix uṇ → kāru."
      },
      {
        word: "वायुः (vāyuḥ)",
        root: "वा (vā - to blow)",
        meaning: "Wind, atmospheric deity Vayu",
        linguisticNote: "Root vā takes yuk augment and affix uṇ → vā-y-u."
      },
      {
        word: "पायुः (pāyuḥ)",
        root: "पा (pā - to protect/drink)",
        meaning: "Organ of excretion",
        linguisticNote: "Root pā + yuk augment + uṇ → pā-y-u."
      },
      {
        word: "आयुः (āyuḥ)",
        root: "इ (i - to go)",
        meaning: "Lifespan, vital longevity",
        linguisticNote: "Root i takes Vriddhi to ai + ay-ādeśa + uṇ → āyu."
      }
    ],
    explanation: "The historic opening rule of the Uṇādipāṭha. Derives fundamental nouns denoting cosmic elements and bodily organs by attaching the suffix 'Un'."
  },
  {
    sutraNumber: "उणादि १.१५६",
    sutra: "भ्रंशोधः",
    transliteration: "brahma-ātma-śabdāḥ (manin)",
    affix: "मनिन् (manin / man)",
    derivedWords: [
      {
        word: "ब्रह्मन् (brahman)",
        root: "बृह् (bṛh - to expand, grow)",
        meaning: "The Supreme Infinite Reality; Ultimate Consciousness",
        linguisticNote: "Root bṛh + manin affix with vocalic guna → bráh-man."
      },
      {
        word: "आत्मन् (ātman)",
        root: "अत् (at - to move continuously) or आप् (āp - to pervade)",
        meaning: "The True Self, Pure Consciousness",
        linguisticNote: "Root at / an + manin → ātman (that which constantly breathes and moves)."
      }
    ],
    explanation: "Derives the highest philosophical terms in Vedic thought from dynamic verbal roots signifying boundless expansion (Bṛhatva) and all-pervading continuity."
  },
  {
    sutraNumber: "उणादि ४.१",
    sutra: "ऋतन्यञ्जिशिवदिभ्यः कित्",
    transliteration: "agni-sūrya-śabdāḥ",
    affix: "नि (ni) / क्यप् (kyap)",
    derivedWords: [
      {
        word: "अग्निः (agniḥ)",
        root: "अग् (ag - to go upward / move tortuously)",
        meaning: "Sacred Fire, Primordial Messenger",
        linguisticNote: "अग् + नि (ni affix with kit property) → agni."
      },
      {
        word: "सूर्यः (sūryaḥ)",
        root: "सृ (sṛ - to move across the sky) / सू (sū - to generate life)",
        meaning: "The Sun, Celestial Witness",
        linguisticNote: "Root sū / sṛ + kyap / ya affix → sūr-ya."
      }
    ],
    explanation: "Derives the core Vedic devatas Agni and Surya, anchoring cosmology directly in active kinetic roots."
  }
];

// 6. LINGANUSHASANA (Rules of Grammatical Gender)
export const LINGANUSHASANA_CORPUS: LinganushasanaSection[] = [
  {
    gender: "Masculine (Pullinga)",
    rules: [
      {
        category: "Affix-Derived Masculines (Kṛdanta)",
        sanskritRule: "घञ्-अप-अप्-प्रत्ययान्ताः पुंसि",
        englishExplanation: "Words formed with the primary nominal suffixes Ghañ, Ap, and Ka are inherently masculine.",
        examples: ["पाकः (pākaḥ - cooking)", "रागः (rāgaḥ - passion/melody)", "भावः (bhāvaḥ - emotion/being)", "जयः (jayaḥ - victory)"]
      },
      {
        category: "Semantic Semantic Domains (Arthatas)",
        sanskritRule: "समुद्राद्रिऋतुग्रहदेवासुरपर्यायाः",
        englishExplanation: "Words synonymous with oceans, mountains, seasons, celestial planets, and devas/asuras are masculine.",
        examples: ["सागरः / सिन्धुः (ocean)", "पर्वतः / गिरिः (mountain)", "वसन्तः / ग्रीष्मः (spring/summer)", "सूर्यः / चन्द्रः (sun/moon)", "इन्द्रः / वरुणः (gods)"]
      },
      {
        category: "Time & Heavenly Bodies",
        sanskritRule: "कालवाचिनः शब्दाः प्रायेण पुंसि",
        englishExplanation: "Words denoting units of time (day, month, year, moment) are predominantly masculine.",
        examples: ["दिवसः / वासरः (day)", "मासः (month)", "संवत्सरः (year)", "क्षणः (moment)"]
      }
    ]
  },
  {
    gender: "Feminine (Strilinga)",
    rules: [
      {
        category: "Affix-Derived Feminines",
        sanskritRule: "क्तिन्-अ प्रत्ययान्ताः स्त्रियाम्",
        englishExplanation: "Words ending in the abstract noun suffix Ktin (-ti), Tal (-tā), and feminine markers (Ṭāp, Ṅīp, Ṅīṣ) are feminine.",
        examples: ["मतिः (matiḥ - intellect)", "गतिः (gatiḥ - movement/path)", "शान्तिः (śāntiḥ - peace)", "विद्या (vidyā - knowledge)", "नदी (nadī - river)"]
      },
      {
        category: "Rivers, Night, and Creepers",
        sanskritRule: "नदीनिशालतावाचिनः स्त्रियाम्",
        englishExplanation: "Words designating rivers, nights, creepers, lightning, and directions are grammatically feminine.",
        examples: ["गङ्गा / यमुना (rivers)", "रात्रिः / निशा (night)", "लता / वल्लरी (creeper)", "विद्युत् (lightning)", "दिक् (direction)"],
        exceptions: ["शोणः, सिन्धुः, नदः (masculine rivers)"]
      }
    ]
  },
  {
    gender: "Neuter (Napumsakalinga)",
    rules: [
      {
        category: "Affix-Derived Neuters",
        sanskritRule: "ल्युट्-तव्य-अनीयर्-अस्-प्रत्ययान्तानि क्लीबे",
        englishExplanation: "Words formed with suffix Lyuṭ (-ana), abstract -as, and passive participial adjectives in isolation are neuter.",
        examples: ["पठनम् (paṭhanam - reading)", "ज्ञानम् (jñānam - knowledge)", "तेजस् (tejas - brilliance)", "मनस् (manas - mind)", "पयस् (payas - milk/water)"]
      },
      {
        category: "Fruits, Flowers, and Woods",
        sanskritRule: "फलपुष्पारण्यवाचिनि नपुंसके",
        englishExplanation: "Words denoting fruits, flowers, and deep forests are neuter.",
        examples: ["फलम् (fruit)", "आम्रम् (mango)", "पुष्पम् / कमलम् (flower/lotus)", "वनम् / अरण्यम् (forest)"]
      }
    ]
  },
  {
    gender: "Variable / Common (Sarvalinga & Dvilinga)",
    rules: [
      {
        category: "Adjectives (Viśeṣaṇa)",
        sanskritRule: "विशेष्याधीनानि विशेषणानि त्रिषु",
        englishExplanation: "Adjectives take the gender, number, and case of the substantive noun they qualify.",
        examples: ["सुन्दरः बालः (handsome boy - m)", "सुन्दरी बालिका (beautiful girl - f)", "सुन्दरं गृहम् (beautiful house - n)"]
      },
      {
        category: "Dual-Gender Nouns",
        sanskritRule: "केचिच्छब्दाः पुन्नपुंसकयोः समानाः",
        englishExplanation: "Certain nouns are used interchangeably in both masculine and neuter without shift in meaning.",
        examples: ["पद्मः / पद्मम् (lotus)", "पात्रः / पात्रम् (vessel)", "मुकुलः / मुकुलम् (blossom)"]
      }
    ]
  }
];

// 7. PANINIYA SHIKSHA (The 60 Phonetic Stanzas & Articulation Science)
export const PANINIYA_SHIKSHA_CORPUS: PaniniyaShikshaVerse[] = [
  {
    verseNumber: 1,
    sanskrit: "अथ शिक्षां प्रवक्ष्यामि पाणिनीयां मतं यथा ।\nशास्त्रानुपूर्व्यं तद् विद्याद् यथोक्तं लोकवेदयोः ॥",
    transliteration: "atha śikṣāṁ pravakṣyāmi pāṇinīyāṁ mataṁ yathā |\nśāstrānupūrvyaṁ tad vidyād yathoktaṁ lokavedayoḥ ||",
    translation: "Now I shall propound the science of phonetics according to the canonical doctrine of Panini; as verified in both traditional scripture (Veda) and classical worldly speech (Loka).",
    topic: "Invocation & Divine Origin of Vak",
    deepSignificance: "Sets the dual mandate: Paninian phonetics governs both transcendental Vedic intonation and empirical Sanskrit communication."
  },
  {
    verseNumber: 3,
    sanskrit: "त्रिपञ्चाशच्चतुःषष्टिर्वा वर्णाः शम्भुमते मताः ।\nप्राकृते संस्कृते चापि स्वयं प्रोक्ताः स्वयम्भुवा ॥",
    transliteration: "tripañcāśac catuḥṣaṣṭir vā varṇāḥ śambhumate matāḥ |\nprākṛte saṁskṛte cāpi svayaṁ proktāḥ svayambhuvā ||",
    translation: "Sixty-three or sixty-four speech sounds are acknowledged according to Lord Shambhu's doctrine; revealed by the Self-born in both Prakrita and Samskrita.",
    topic: "Invocation & Divine Origin of Vak",
    deepSignificance: "Acknowledges the 63/64 phoneme inventory: 21 vowels, 25 stops, 4 semivowels, 4 sibilants, 4 Ayogavahas (Anusvara, Visarga, Jihvamuliya, Upadhmaniya), and 8 Yamas + Dusprishta (ḷh)."
  },
  {
    verseNumber: 6,
    sanskrit: "आत्मा बुद्ध्या समेत्यार्थान् मनो युङ्क्ते विवक्षया ।\nमनः कायाग्निमाहन्ति स प्रेरयति मारुतम् ॥",
    transliteration: "ātmā buddhyā sametyārthān mano yuṅkte vivakṣayā |\nmanaḥ kāyāgnim āhanti sa prerayati mārutam ||",
    translation: "The Self (Atman), synthesizing cognitive concepts through the intellect (Buddhi), inspires the mind with the desire to speak. The mind strikes the bodily fire (Prana), which in turn sets the breath (Maruta) into upward motion.",
    topic: "Places of Articulation (Sthana)",
    deepSignificance: "A MASTERPIECE OF NEURO-LINGUISTIC COGNITION. Traces speech from the metaphysical consciousness down to somatic breath and acoustic waves."
  },
  {
    verseNumber: 13,
    sanskrit: "अष्टौ स्थानानि वर्णानामुरः कण्ठः शिरस्तथा ।\nजिह्वामूलं च दन्ताश्च नासिकौष्ठौ च तालु च ॥",
    transliteration: "aṣṭau sthānāni varṇānām uraḥ kaṇṭhaḥ śiras tathā |\njihvāmūlaṁ ca dantāś ca nāsikauṣṭhau ca tālu ca ||",
    translation: "Eight are the anatomical places of articulation for sounds: the chest (Uras), throat (Kantha), head/cerebrum (Shiras/Murdha), root of tongue (Jihvamula), teeth (Danta), nose (Nasika), lips (Oshtha), and palate (Talu).",
    topic: "Places of Articulation (Sthana)",
    deepSignificance: "The 8 articulatory coordinates defining every phoneme in Sanskrit generative phonology."
  },
  {
    verseNumber: 32,
    sanskrit: "गीती शीघ्री शिरःकम्पी तथा लिखितपाठकः ।\nअनर्थज्ञोऽल्पकण्ठश्च षडेते पाठकाधमाः ॥",
    transliteration: "gītī śīghrī śiraḥkampī tathā likhitapāṭhakaḥ |\nanarthajño 'lpakaṇṭhaś ca ṣaḍ ete pāṭhakādhamāḥ ||",
    translation: "One who chants sing-song like a song, one who rushes too fast, one who shakes the head, one who blindly reads from script without heart, one who is ignorant of the meaning, and one with a feeble voice — these six are the lowest of reciters.",
    topic: "Faults & Virtues in Recitation",
    deepSignificance: "Pedagogical discipline: Vedic chanting requires absolute semantic consciousness and calm acoustic poise."
  },
  {
    verseNumber: 33,
    sanskrit: "माधुर्यमक्षरव्यक्तिः पदच्छेदस्तु सुस्वरः ।\nधैर्यं लयसमर्थं च षडेते पाठका गुणाः ॥",
    transliteration: "mādhuryam akṣaravyaktiḥ padacchedas tu susvaraḥ |\ndhairyaṁ layasamarthaṁ ca ṣaḍ ete pāṭhakā guṇāḥ ||",
    translation: "Sweetness of tone, crisp articulation of syllables, distinct separation of words, melodious pitch, courageous patience, and mastery of rhythm — these six are the supreme virtues of a master chanter.",
    topic: "Faults & Virtues in Recitation",
    deepSignificance: "The six gold standards of Sanatan oratory and phonetic chanting."
  }
];

// 8. PATALAVIJAYA & JAMBAVATIVIJAYA (The Lost Mahakavyas of Panini)
export const JAMBAVATI_KAVYA_CORPUS: JambavatiKavyaVerse[] = [
  {
    id: "verse_1",
    title: "The Sunset at the Ocean (समुद्रास्तमयवर्णनम्)",
    context: "Preserved in Vallabhadeva's Subhāṣitāvalī (No. 1957) and attributed directly to Sūtrakāra Pāṇini. Describes the crimson setting sun diving into the western sea.",
    sanskrit: "गतावस्तं रक्तावभिनवबधूसङ्गम इव\nप्रवृत्ते सम्भोगाभिनयरसिके चक्रमिथुने ।\nदिनान्ते सम्भ्रान्तं दिशि दिशि निषण्णाङ्गवलयं\nतमोऽङ्गे लग्नानां कुसुममिव धूमायति वनम् ॥",
    transliteration: "gatāv astaṁ raktāv abhinavabadhū-saṅgama iva\npravṛtte sambhogābhinaya-rasike cakra-mithune |\ndinānte sambhrāntaṁ diśi diśi niṣaṇṇāṅga-valayaṁ\ntamo 'ṅge lagnānāṁ kusumam iva dhūmāyati vanam ||",
    translation: "As the sun sinks red in the west like a lover blushing at the fresh union with his bride, while the pair of Chakravaka birds engage in twilight longing, darkness swirls softly through the forest glades like smoke rising from twilight blossoms.",
    poeticMeter: "Śikhariṇī (शिखरिणी वृत्त)",
    literarySource: "Vallabhadeva Subhāṣitāvalī / Saduktikarṇāmṛta",
    criticalAppraisal: "Demonstrates that the great analytical grammarian was simultaneously a supreme lyric poet, combining exquisite alankaras with flawless metric cadence."
  },
  {
    id: "verse_2",
    title: "Tribute to Panini's Poetry by Kaviraja Rajashekhara",
    context: "Celebrated stanza from Rājaśekhara's Sūktimuktāvalī & Kāvyamīmāṁsā honouring Panini's twin mastery over grammar and kavya.",
    sanskrit: "नमः पाणिनये तस्मै यस्मादाविरभूदिह ।\nसुबन्धुकपिलेशानपूजिता काव्यपद्धतिः ॥\nसूत्राणां कर्तृभूतस्य जाम्बवत्युद्भवेऽपि यः ।\nकविरासीन्महामान्यो वन्द्यते व्याकरणे च यः ॥",
    transliteration: "namaḥ pāṇinaye tasmai yasmād āvirabhūd iha |\nsubandhu-kapileśāna-pūjitā kāvya-paddhatiḥ ||\nsūtrāṇāṁ kartṛbhūtasya jāmbavaty-udbhave 'pi yaḥ |\nkavir āsīn mahāmānyo vandyate vyākaraṇe ca yaḥ ||",
    translation: "Salutations to that illustrious Panini from whom burst forth that path of poetry worshipped by Subandhu, Kapila, and Ishana! He who was the author of the Sutras was equally renowed as the immortal poet of Jambavati-Vijaya.",
    poeticMeter: "Anuṣṭubh (अनुष्टुप्)",
    literarySource: "Jalhaṇa Sūktimuktāvalī (4.84)",
    criticalAppraisal: "Irrefutable historical testament bridging the Paninian grammatical tradition with the classical Kavya canon."
  },
  {
    id: "verse_3",
    title: "Krishna's Descent to the Netherworld (पातालप्रवेशः)",
    context: "Fragment from Pātālavijaya describing Sri Krishna's valorous descent into the subterranean realm of Jambavan to recover the Syamantaka jewel.",
    sanskrit: "अगाधपातालतले निमग्नं\nमणिशिया दीपितदिङ्मुखं तम् ।\nदृष्ट्वा हरिर्विस्मयमाससाद\nसिंहो यथा मत्तकरीन्द्रदर्पम् ॥",
    transliteration: "agādha-pātāla-tale nimagnaṁ\nmaṇi-śriyā dīpita-diṅ-mukhaṁ tam |\ndṛṣṭvā harir vismayam āsasāda\nsiṁho yathā matta-karīndra-darpam ||",
    translation: "Dwelling in the fathomless subterranean depths, illuminated on every horizon by the dazzling effulgence of the Syamantaka jewel, Hari gazed upon the mighty bear Jambavan without fear — as a roaring lion contemplates the pride of an elephant in rut.",
    poeticMeter: "Upajāti (उपजाति वृत्त)",
    literarySource: "Namisādhu's Commentary on Rudraṭa's Kāvyālaṅkāra",
    criticalAppraisal: "Vivid depiction of heroics (Vira Rasa) and wonder (Adbhuta Rasa), proving Panini's epic dramatic range."
  }
];

// 9. COMPUTATIONAL LINGUISTICS & ALGORITHMIC ARCHITECTURE
export const COMPUTATIONAL_PANINI_CORPUS: ComputationalPaniniFeature[] = [
  {
    id: "bnf_panini",
    title: "Panini-Backus Form & Context-Free Grammars",
    computerScienceConcept: "Backus-Naur Form (BNF) & Context-Free Grammars (Chomsky Type-2)",
    paninianCounterpart: "Māheśvara Pratyāhāras & Sūtra Meta-Syntax (आदिरन्त्येन सहेता 1.1.71)",
    academicCitation: "Peter Z. Ingerman (1967), 'Panini-Backus Form Suggestion', Communications of the ACM; Frits Staal (1988), 'Universals: Studies in Indian Logic and Linguistics'.",
    explanation: "In 1967, computer scientist Peter Ingerman proved that John Backus's formal notation for ALGOL 60 was an independent reinvention of Panini's syntactic notation. The IT world officially recognizes the term 'Panini-Backus Form' (PBF). Panini's use of non-terminals, production rules, and auxiliary markers (anubandhas) anticipates compiler construction by 2,400 years.",
    interactiveModel: "<Sutra> ::= <Condition> <Operation> <Environment>\nExample: इको यणचि (6.1.77) translates precisely to:\n[+Ik] -> [+Yan] / __ [+Ac]"
  },
  {
    id: "turing_completeness",
    title: "Turing Machine Equivalence & Termination Guarantees",
    computerScienceConcept: "Turing Completeness, Strict Rule-Ordering & Halting Problem Avoidance",
    paninianCounterpart: "Tripādī Architecture & Asiddhatva (पूर्वत्रासिद्धम् 8.2.1)",
    academicCitation: "Paul Kiparsky (2002), 'On the Architecture of Panini's Grammar'; Rick Briggs (1985), 'Knowledge Representation in Sanskrit and Artificial Intelligence', AI Magazine (NASA).",
    explanation: "A major hazard in production rule engines is infinite looping (cycles). Panini solved this via the 'Tripādī' (the final three sections 8.2-8.4). Here, rule application is strictly linear and unidirectional: later rules are invisible (asiddha) to earlier ones. This design makes the grammar a finite, deterministic string-rewriting transducer with guaranteed termination.",
    interactiveModel: "Step 1: Input String\nStep 2: Sapadasaptadhyayi (Mutual visibility with conflict resolution 1.4.2)\nStep 3: Tripadi Cascade (Single-pass forward-only execution)\nStep 4: Output Terminal Surface Form"
  },
  {
    id: "semantic_karakas",
    title: "Karaka Theory as Dependency Grammar & Case Grammar",
    computerScienceConcept: "Semantic Role Labeling (SRL), Fillmore's Case Grammar & Dependency Syntax",
    paninianCounterpart: "The 6 Kārakas (कर्ता, कर्म, करण, सम्प्रदान, अपादान, अधिकरण 1.4.23-55)",
    academicCitation: "Charles Fillmore (1968), 'The Case for Case'; George Cardona (1976), 'Panini: A Survey of Research'.",
    explanation: "Panini strictly distinguished between deep semantic relations (Kārakas) and surface syntactic markers (Vibhaktis). A semantic agent (Kartā) can surface as Nominative (active voice), Instrumental (passive voice), or Genitive (in nominalizations). Modern AI Natural Language Processing (NLP) dependencies mirror this exact two-tiered architecture.",
    interactiveModel: "Deep Semantic Layer: {Action: पच् (cook), Agent: देवदत्त, Patient: ओदन}\nSurface Layer Mapping (Active): देवदत्तः (Prathama) ओदनं (Dvitiya) पचति (Active verb)\nSurface Layer Mapping (Passive): देवदत्तेन (Tritiya) ओदनः (Prathama) पच्यते (Passive verb)"
  },
  {
    id: "anubandha_markers",
    title: "Zero-Morphemes, Meta-Markers & Type Flags",
    computerScienceConcept: "Data Typing, Abstract Flags & Zero-Cost Garbage Collection",
    paninianCounterpart: "Anubandhas / It-Saṁjñās (उपदेशेऽजनुनासिक इत् 1.3.2, तस्य लोपः 1.3.9)",
    academicCitation: "B.K. Matilal (1990), 'The Word and the World: India's Contribution to the Study of Language'.",
    explanation: "Panini attaches auxiliary letters called 'It' markers to roots, suffixes, and augments. These letters act as type-tags: a 'P-it' marker causes accent shift; an 'N-it' marker triggers Vriddhi; an 'S-it' marker designates Sarvadhatuka status. Crucially, once their computational duty is executed, rule 'तस्य लोपः' (1.3.9) deletes them completely, leaving a clean surface string.",
    interactiveModel: "Rule Input: भू + तिप् (P-it flag)\nP-it triggers: Sārvadhātuka designation -> triggers Guṇa (bhū -> bho)\nMarker Cleanup: तिप् -> ति (P elided by 1.3.9)\nSurface Result: भवति"
  }
];
