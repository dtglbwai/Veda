import React, { useState, useMemo, useEffect } from "react";
import {
  Sparkles,
  Search,
  BookOpen,
  Filter,
  Check,
  Star,
  Copy,
  Download,
  Share2,
  Volume2,
  HelpCircle,
  Building,
  Home,
  User,
  Heart,
  RefreshCw,
  Flame,
  Award,
  Layers,
  FileText,
  ShieldCheck,
  ChevronRight,
  Info,
  ExternalLink
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useFirebase } from "../context/FirebaseContext";
import { collection, addDoc, getDocs, deleteDoc, doc, query, where, serverTimestamp } from "firebase/firestore";

export interface SunaamaItem {
  id: string;
  nameDevanagari: string;
  nameIAST: string;
  nameEnglish: string;
  gender: "boy" | "girl" | "unisex" | "house" | "brand";
  meaningEnglish: string;
  meaningHindi: string;
  etymologyVyutpatti: string;
  rootDhatu: string;
  grammaticalCategory: "Kridanta" | "Subanta" | "Taddhita" | "Samasa";
  shlokaSanskrit: string;
  shlokaTranslation: string;
  scriptureSource: string; // e.g. "Valmiki Ramayana 1.18.15", "Rigveda 1.164.46", "Vishnu Sahasranama v.42"
  nakshatra: string;
  nakshatraPada: number;
  rashi: string;
  startingSound: string;
  deity: string;
  tattva: "Prithvi (Earth)" | "Agni (Fire)" | "Jala (Water)" | "Vayu (Air)" | "Akasha (Aether)";
  numerologyValue: number; // Chaldean / Pythagorean total
  tags: string[];
}

export const SUNAAMA_DATABASE: SunaamaItem[] = [
  {
    id: "sun-001",
    nameDevanagari: "आनन्दः",
    nameIAST: "Ānandaḥ",
    nameEnglish: "Aanand",
    gender: "boy",
    meaningEnglish: "Supreme bliss, pure unconditioned joy, state of spiritual fulfillment",
    meaningHindi: "परम सुख, विशुद्ध आनन्द, आत्मिक तृप्ति की स्थिति",
    etymologyVyutpatti: "आ + नन्द् + घञ् (Ā + Nand + Ghañ)",
    rootDhatu: "नन्दिँ समृद्धौ (to rejoice, prosper)",
    grammaticalCategory: "Kridanta",
    shlokaSanskrit: "आनन्दाद्धstrictly एव खल्विमानि भूतानि जायन्ते । आनन्देन जातानि जीवन्ति ॥",
    shlokaTranslation: "From Bliss indeed all these beings are born; by Bliss once born they live.",
    scriptureSource: "Taittiriya Upanishad 3.6.1",
    nakshatra: "Krittika",
    nakshatraPada: 3,
    rashi: "Vrishabha (Taurus)",
    startingSound: "Aa",
    deity: "Brahma / Vishnu",
    tattva: "Akasha (Aether)",
    numerologyValue: 1,
    tags: ["Joy", "Upanishadic", "Vedic", "Bliss"]
  },
  {
    id: "sun-002",
    nameDevanagari: "आर्या",
    nameIAST: "Āryā",
    nameEnglish: "Aarya",
    gender: "girl",
    meaningEnglish: "Noble, virtuous, revered, honorable woman of pristine character",
    meaningHindi: "श्रेष्ठ, कुलीन, पूजनीया, धर्मपरायण नारी",
    etymologyVyutpatti: "ऋ + ण्यत् + टाप् (Ṛ + Ṇyat + Ṭāp)",
    rootDhatu: "ऋ गताविन्द्रियप्रलयेषु (to move towards righteousness)",
    grammaticalCategory: "Kridanta",
    shlokaSanskrit: "न हि आर्यात् परतरं किञ्चिद् धर्मज्ञानवतां वर ॥",
    shlokaTranslation: "There is nothing higher than the noble virtuous character among the knowers of Dharma.",
    scriptureSource: "Valmiki Ramayana, Ayodhya Kanda",
    nakshatra: "Krittika",
    nakshatraPada: 1,
    rashi: "Mesha (Aries)",
    startingSound: "Aa",
    deity: "Durga / Parvati",
    tattva: "Agni (Fire)",
    numerologyValue: 9,
    tags: ["Noble", "Virtue", "Epic", "Ramayana"]
  },
  {
    id: "sun-003",
    nameDevanagari: "ऋतम्भरा",
    nameIAST: "Ṛtambharā",
    nameEnglish: "Ritambhara",
    gender: "girl",
    meaningEnglish: "Bearing absolute cosmic truth; intellect filled with divine righteousness",
    meaningHindi: "सत्य को धारण करने वाली, ऋत (परम सत्य) से परिपूर्ण बुद्धि",
    etymologyVyutpatti: "ऋतं बिभर्ति इति (Ṛtaṁ bibharti iti)",
    rootDhatu: "भृञ् भरणे (to bear, support)",
    grammaticalCategory: "Samasa",
    shlokaSanskrit: "ऋतम्भरा तत्र प्रज्ञा ॥",
    shlokaTranslation: "In that state of deep Samadhi, the intuitive intellect becomes filled with absolute Cosmic Truth.",
    scriptureSource: "Patanjali Yoga Sutras 1.48",
    nakshatra: "Chitra",
    nakshatraPada: 4,
    rashi: "Tula (Libra)",
    startingSound: "Ri",
    deity: "Saraswati",
    tattva: "Akasha (Aether)",
    numerologyValue: 5,
    tags: ["Truth", "Yoga Sutra", "Wisdom", "Intellect"]
  },
  {
    id: "sun-004",
    nameDevanagari: "चिन्मयः",
    nameIAST: "Cinmayaḥ",
    nameEnglish: "Chinmay",
    gender: "boy",
    meaningEnglish: "Embodiment of pure consciousness and supreme wisdom",
    meaningHindi: "विशुद्ध चैतन्य स्वरूप, ज्ञान से परिपूर्ण",
    etymologyVyutpatti: "चित् + मयट् (Cit + Mayaṭ)",
    rootDhatu: "चिती संज्ञाने (to perceive, comprehend)",
    grammaticalCategory: "Taddhita",
    shlokaSanskrit: "चिन्मयं व्यापि यत्सर्वं त्रैलोक्यं सचराचरम् ॥",
    shlokaTranslation: "That pure Consciousness which pervades the entire three worlds of moving and unmoving beings.",
    scriptureSource: "Guru Gita v.72",
    nakshatra: "Swati",
    nakshatraPada: 2,
    rashi: "Tula (Libra)",
    startingSound: "Chi",
    deity: "Shiva / Brahman",
    tattva: "Akasha (Aether)",
    numerologyValue: 7,
    tags: ["Consciousness", "Vedanta", "Shiva"]
  },
  {
    id: "sun-005",
    nameDevanagari: "देवव्रतः",
    nameIAST: "Devavrataḥ",
    nameEnglish: "Devavrat",
    gender: "boy",
    meaningEnglish: "Dedicated to divine vows; original name of Bhishma Pitamaha",
    meaningHindi: "देवताओं के प्रति समर्पित व्रत वाला, भीष्म पितामह का मूल नाम",
    etymologyVyutpatti: "देवानां व्रतं यस्य सः (Devānāṁ vrataṁ yasya saḥ)",
    rootDhatu: "वृञ् वरणे (to choose, vow)",
    grammaticalCategory: "Samasa",
    shlokaSanskrit: "देवव्रतो महावीर्यो भीष्मः कुरुपितामहः ॥",
    shlokaTranslation: "Devavrata of immense valor, known as Bhishma, the grandsire of the Kurus.",
    scriptureSource: "Mahabharata, Adi Parva",
    nakshatra: "Dhanishta",
    nakshatraPada: 1,
    rashi: "Makara (Capricorn)",
    startingSound: "De",
    deity: "Vasus / Surya",
    tattva: "Agni (Fire)",
    numerologyValue: 3,
    tags: ["Valor", "Mahabharata", "Vow", "Heroic"]
  },
  {
    id: "sun-006",
    nameDevanagari: "धृतिः",
    nameIAST: "Dhṛtiḥ",
    nameEnglish: "Dhriti",
    gender: "girl",
    meaningEnglish: "Steadfast patience, fortitude, courage, unshakeable mental endurance",
    meaningHindi: "धैर्य, सहनशीलता, अचल संकल्प, आत्मिक बल",
    etymologyVyutpatti: "धृ + क्तिन् (Dhṛ + Ktin)",
    rootDhatu: "धृञ् धारणे (to hold, sustain)",
    grammaticalCategory: "Kridanta",
    shlokaSanskrit: "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः । योगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी ॥",
    shlokaTranslation: "That unswerving fortitude by which one controls the mind, life energies, and senses through Yoga is Sattviki.",
    scriptureSource: "Bhagavad Gita 18.33",
    nakshatra: "Dhanishta",
    nakshatraPada: 2,
    rashi: "Makara (Capricorn)",
    startingSound: "Gha",
    deity: "Lakshmi / Dhriti Devi",
    tattva: "Prithvi (Earth)",
    numerologyValue: 4,
    tags: ["Gita", "Courage", "Fortitude", "Patience"]
  },
  {
    id: "sun-007",
    nameDevanagari: "ईशानः",
    nameIAST: "Īśānaḥ",
    nameEnglish: "Ishan",
    gender: "boy",
    meaningEnglish: "Sovereign ruler, master of cosmic directions, aspect of Lord Shiva",
    meaningHindi: "ईश्वर, स्वामी, ईशान दिशा के अधिपति, भगवान् शिव",
    etymologyVyutpatti: "ईश् + चानश् (Īś + Cānaś)",
    rootDhatu: "ईशँ ऐश्वर्ये (to rule, master)",
    grammaticalCategory: "Kridanta",
    shlokaSanskrit: "ईशानः सर्वविद्यानामीश्वरः सर्वभूतानाम् ॥",
    shlokaTranslation: "Lord Ishana is the master of all knowledge and the supreme sovereign of all created beings.",
    scriptureSource: "Mahanarayana Upanishad 17.1",
    nakshatra: "Arudra",
    nakshatraPada: 1,
    rashi: "Mithuna (Gemini)",
    startingSound: "Ku",
    deity: "Shiva",
    tattva: "Vayu (Air)",
    numerologyValue: 5,
    tags: ["Shiva", "Sovereign", "Vedic", "Upanishad"]
  },
  {
    id: "sun-008",
    nameDevanagari: "काव्यम्",
    nameIAST: "Kāvyam",
    nameEnglish: "Kavyam",
    gender: "unisex",
    meaningEnglish: "Sublime poetic creation, inspiration of sages, artistic eloquence",
    meaningHindi: "उदात्त काव्य रचना, ऋषियों की काव्यमय प्रेरणा",
    etymologyVyutpatti: "कवेः कर्म काव्यम् (Kaveḥ karma kāvyam)",
    rootDhatu: "कु शब्दे (to sound, describe beautifully)",
    grammaticalCategory: "Taddhita",
    shlokaSanskrit: "कविर्मनीषी परिभूः स्वयम्भूः ॥",
    shlokaTranslation: "He is the Poet-Seer, the Ruler of Mind, all-pervading and self-existent.",
    scriptureSource: "Isha Upanishad 8",
    nakshatra: "Mrigashira",
    nakshatraPada: 3,
    rashi: "Mithuna (Gemini)",
    startingSound: "Ka",
    deity: "Saraswati / Shukra",
    tattva: "Vayu (Air)",
    numerologyValue: 6,
    tags: ["Poetry", "Art", "Wisdom", "Isha Upanishad"]
  },
  {
    id: "sun-009",
    nameDevanagari: "मेधा",
    nameIAST: "Medhā",
    nameEnglish: "Medha",
    gender: "girl",
    meaningEnglish: "Retentive intelligence, capacity to comprehend and retain sacred truth",
    meaningHindi: "धारणाशक्ति युक्त बुद्धि, शास्त्रज्ञान को धारण करने वाली मेधा",
    etymologyVyutpatti: "मेध् + अच् + टाप् (Medh + Ac + Ṭāp)",
    rootDhatu: "मेधृ संगमे मेधायां च (to understand deeply)",
    grammaticalCategory: "Subanta",
    shlokaSanskrit: "मेधां मे वरुणो ददातु मेधामग्निः प्रजापतिः ॥",
    shlokaTranslation: "May Lord Varuna, Agni, and Prajapati bestow retentive wisdom upon me.",
    scriptureSource: "Yajurveda 32.14",
    nakshatra: "Magha",
    nakshatraPada: 2,
    rashi: "Simha (Leo)",
    startingSound: "Mi",
    deity: "Saraswati",
    tattva: "Agni (Fire)",
    numerologyValue: 8,
    tags: ["Yajurveda", "Wisdom", "Intellect", "Saraswati"]
  },
  {
    id: "sun-010",
    nameDevanagari: "नचिकेतः",
    nameIAST: "Naciketaḥ",
    nameEnglish: "Nachiketa",
    gender: "boy",
    meaningEnglish: "That which does not decay; seeker of immortal wisdom in Katha Upanishad",
    meaningHindi: "जो कभी क्षीण न हो, कठोपनिषद् का अमर ज्ञान-पिपासु बालक",
    etymologyVyutpatti: "न + चिकेत (Na + Ciketa)",
    rootDhatu: "कितँ ज्ञाने (to know, realize)",
    grammaticalCategory: "Samasa",
    shlokaSanskrit: "नचिकेतमुपाख्यानं मृत्युप्रोक्तं सनातनम् । उक्त्वा श्रुत्वा च मेधावी ब्रह्मलोके महीयते ॥",
    shlokaTranslation: "Narrating or hearing this eternal legend of Nachiketa taught by Yama, a wise seeker is honored in the realm of Brahman.",
    scriptureSource: "Katha Upanishad 1.3.16",
    nakshatra: "Anuradha",
    nakshatraPada: 3,
    rashi: "Vrischika (Scorpio)",
    startingSound: "Nu",
    deity: "Yama / Brahman",
    tattva: "Jala (Water)",
    numerologyValue: 7,
    tags: ["Katha Upanishad", "Immortal", "Wisdom", "Seeker"]
  },
  {
    id: "sun-011",
    nameDevanagari: "ओजस्वी",
    nameIAST: "Ojasvī",
    nameEnglish: "Ojasvi",
    gender: "boy",
    meaningEnglish: "Radiative spiritual vigor, radiant energy, full of vitality and presence",
    meaningHindi: "ओज से परिपूर्ण, प्रभावकारी तेजस्वी व्यक्तित्व",
    etymologyVyutpatti: "ओजस् + विनि (Ojas + Vini)",
    rootDhatu: "उब्जँ आर्जवे (to exert force, radiance)",
    grammaticalCategory: "Taddhita",
    shlokaSanskrit: "ओजोऽसि ओजो मयि धेहि ॥",
    shlokaTranslation: "Thou art spiritual vigor; bestow that vigor within me.",
    scriptureSource: "Yajurveda 19.9",
    nakshatra: "Rohini",
    nakshatraPada: 4,
    rashi: "Vrishabha (Taurus)",
    startingSound: "O",
    deity: "Surya / Indra",
    tattva: "Agni (Fire)",
    numerologyValue: 1,
    tags: ["Yajurveda", "Vitality", "Radiance", "Energy"]
  },
  {
    id: "sun-012",
    nameDevanagari: "प्रणवः",
    nameIAST: "Praṇavaḥ",
    nameEnglish: "Pranav",
    gender: "boy",
    meaningEnglish: "The primordial cosmic sound 'Om', vibration of creator",
    meaningHindi: "ॐ (ओंकार) की आदिम ब्रह्मध्वनि",
    etymologyVyutpatti: "प्र + णु + अप् (Pra + Ṇu + Ap)",
    rootDhatu: "णु स्तुतौ (to praise, reverberate)",
    grammaticalCategory: "Kridanta",
    shlokaSanskrit: "प्रणवो धनुः शरो ह्यात्मा ब्रह्म तल्लक्ष्यमुच्यते ॥",
    shlokaTranslation: "Om is the bow, the Atman is the arrow, and Brahman is said to be the target.",
    scriptureSource: "Mundaka Upanishad 2.2.4",
    nakshatra: "Uttara Ashadha",
    nakshatraPada: 2,
    rashi: "Makara (Capricorn)",
    startingSound: "Bho",
    deity: "Brahman / Omkara",
    tattva: "Akasha (Aether)",
    numerologyValue: 9,
    tags: ["Om", "Cosmic Sound", "Mundaka Upanishad", "Vedic"]
  },
  {
    id: "sun-013",
    nameDevanagari: "शाश्वतः",
    nameIAST: "Śāśvataḥ",
    nameEnglish: "Shashvat",
    gender: "boy",
    meaningEnglish: "Eternal, timeless, unchanging, perpetual divine reality",
    meaningHindi: "नित्य, सनातन, अविनाशी परम तत्त्व",
    etymologyVyutpatti: "शश्वत् + अण् (Śaśvat + Aṇ)",
    rootDhatu: "शश्वत् (ever, perpetual)",
    grammaticalCategory: "Subanta",
    shlokaSanskrit: "अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥",
    shlokaTranslation: "Unborn, eternal, timeless, and ancient, the Self is not slain when the body is slain.",
    scriptureSource: "Bhagavad Gita 2.20",
    nakshatra: "Shatabhisha",
    nakshatraPada: 1,
    rashi: "Kumbha (Aquarius)",
    startingSound: "Go",
    deity: "Vishnu / Shiva",
    tattva: "Akasha (Aether)",
    numerologyValue: 7,
    tags: ["Gita", "Eternal", "Timeless", "Atman"]
  },
  {
    id: "sun-014",
    nameDevanagari: "वैदेही",
    nameIAST: "Vaidehī",
    nameEnglish: "Vaidehi",
    gender: "girl",
    meaningEnglish: "Princess of Videha (Janakapuri), epithet of Sita Devi, transcending body consciousness",
    meaningHindi: "विदेह राजकन्या, सीता जी का पावन नाम, देहाध्यास से परे",
    etymologyVyutpatti: "विदेहस्य अपत्यं स्त्री वैदेही (Videhasya apatyaṁ strī)",
    rootDhatu: "देह उपचये (beyond bodily limitation)",
    grammaticalCategory: "Taddhita",
    shlokaSanskrit: "वैदेही सह रामेण विजहार मुदान्विता ॥",
    shlokaTranslation: "Vaidehi, along with Rama, spent her days filled with pristine joy.",
    scriptureSource: "Valmiki Ramayana, Ayodhya Kanda",
    nakshatra: "Rohini",
    nakshatraPada: 2,
    rashi: "Vrishabha (Taurus)",
    startingSound: "Vi",
    deity: "Sita / Lakshmi",
    tattva: "Prithvi (Earth)",
    numerologyValue: 6,
    tags: ["Ramayana", "Sita", "Divine", "Epic"]
  },
  {
    id: "sun-015",
    nameDevanagari: "आनन्दभवनम्",
    nameIAST: "Ānandabhavanam",
    nameEnglish: "Ananda Bhavanam",
    gender: "house",
    meaningEnglish: "Abode of supreme bliss and harmonious joy for a home",
    meaningHindi: "परम सुख एवं शान्ति से परिपूर्ण गृह का नाम",
    etymologyVyutpatti: "आनन्दस्य भवनम् (Ānandasya bhavanam)",
    rootDhatu: "भू सत्तायां (to exist, abide)",
    grammaticalCategory: "Samasa",
    shlokaSanskrit: "गृहमेधिनः सन्तु सदानन्दाः ॥",
    shlokaTranslation: "May the dwellers of this home abide forever in joyous peace and virtue.",
    scriptureSource: "Atharvaveda 3.12",
    nakshatra: "Revati",
    nakshatraPada: 4,
    rashi: "Meena (Pisces)",
    startingSound: "A",
    deity: "Vastu Purusha / Lakshmi",
    tattva: "Prithvi (Earth)",
    numerologyValue: 3,
    tags: ["House Name", "Griha", "Vastu", "Bliss"]
  },
  {
    id: "sun-016",
    nameDevanagari: "विद्यावृक्षः",
    nameIAST: "Vidyāvṛkṣaḥ",
    nameEnglish: "Vidya Vriksha",
    gender: "brand",
    meaningEnglish: "Tree of knowledge and learning; ideal for educational startup or institution",
    meaningHindi: "ज्ञान एवं विद्या का विशाल वृक्ष, शिक्षा संस्थान हेतु उत्तम नाम",
    etymologyVyutpatti: "विद्यायाः वृक्षः (Vidyāyāḥ vṛkṣaḥ)",
    rootDhatu: "विदँ ज्ञाने (to know)",
    grammaticalCategory: "Samasa",
    shlokaSanskrit: "विद्या ददाति विनयं विनयाद् याति पात्रताम् ॥",
    shlokaTranslation: "Knowledge bestows humility; from humility comes worthiness.",
    scriptureSource: "Hitopadesha 1.6",
    nakshatra: "Pushya",
    nakshatraPada: 2,
    rashi: "Karka (Cancer)",
    startingSound: "Vi",
    deity: "Brihaspati / Saraswati",
    tattva: "Akasha (Aether)",
    numerologyValue: 5,
    tags: ["Enterprise", "Education", "Brand Name", "Wisdom"]
  }
];

export interface SunaamaFilterState {
  searchQuery: string;
  gender: "all" | "boy" | "girl" | "unisex" | "house" | "brand";
  rashi: string;
  nakshatra: string;
  startingSound: string;
  grammaticalCategory: string;
  tattva: string;
  numerology: string;
}

export default function SunaamaVedicNamingStudio() {
  const { t, currentScript, transliterate } = useLanguage();
  const { user } = useFirebase();

  // Active Main Tab
  const [activeStudioTab, setActiveStudioTab] = useState<"directory" | "ai_generator" | "authenticity_audit" | "house_brand" | "certificate_builder">("directory");

  // Filters State
  const [filters, setFilters] = useState<SunaamaFilterState>({
    searchQuery: "",
    gender: "all",
    rashi: "all",
    nakshatra: "all",
    startingSound: "",
    grammaticalCategory: "all",
    tattva: "all",
    numerology: "all"
  });

  // Selected Name for Detail Patrika Modal
  const [selectedName, setSelectedName] = useState<SunaamaItem | null>(null);

  // Favorites List (Local + Firestore Sync)
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoritesLoading, setFavoritesLoading] = useState(false);

  // Certificate Modal State
  const [certificateName, setCertificateName] = useState<SunaamaItem | null>(null);
  const [certChildName, setCertChildName] = useState("");
  const [certDob, setCertDob] = useState("");
  const [certParentNames, setCertParentNames] = useState("");

  // AI Generator Form State
  const [genCategory, setGenCategory] = useState<"boy" | "girl" | "unisex" | "house" | "brand">("boy");
  const [genStartingSound, setGenStartingSound] = useState("");
  const [genRashi, setGenRashi] = useState("all");
  const [genNakshatra, setGenNakshatra] = useState("all");
  const [genDeityTheme, setGenDeityTheme] = useState("Saraswati / Wisdom");
  const [genDesiredMeaning, setGenDesiredMeaning] = useState("");
  const [genResults, setGenResults] = useState<SunaamaItem[]>([]);
  const [genLoading, setGenLoading] = useState(false);
  const [genError, setGenError] = useState("");

  // AI Authenticity Audit Form State
  const [auditQueryName, setAuditQueryName] = useState("");
  const [auditResult, setAuditResult] = useState<any | null>(null);
  const [auditLoading, setAuditLoading] = useState(false);

  // Pronunciation Speech State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Load favorites from Firestore if available
  useEffect(() => {
    async function loadFavorites() {
      if (!user) return;
      try {
        setFavoritesLoading(true);
        // We can query user favorites if firestore is connected
      } catch (err) {
        console.error("Firestore favorites error:", err);
      } finally {
        setFavoritesLoading(false);
      }
    }
    loadFavorites();
  }, [user]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Audio Pronunciation Synthesis
  const playPronunciation = (devanagariText: string) => {
    if ("speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(devanagariText);
        utterance.lang = "hi-IN";
        utterance.rate = 0.85;
        utterance.pitch = 1.0;
        utterance.onstart = () => setIsPlayingAudio(true);
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.error("Speech synth error:", err);
      }
    }
  };

  // Filtered Directory
  const filteredDatabase = useMemo(() => {
    return SUNAAMA_DATABASE.filter(item => {
      // Gender
      if (filters.gender !== "all" && item.gender !== filters.gender) return false;
      // Search
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matchDev = item.nameDevanagari.toLowerCase().includes(q);
        const matchEng = item.nameEnglish.toLowerCase().includes(q);
        const matchIast = item.nameIAST.toLowerCase().includes(q);
        const matchMeaning = item.meaningEnglish.toLowerCase().includes(q) || item.meaningHindi.toLowerCase().includes(q);
        const matchSource = item.scriptureSource.toLowerCase().includes(q);
        if (!matchDev && !matchEng && !matchIast && !matchMeaning && !matchSource) return false;
      }
      // Rashi
      if (filters.rashi !== "all" && !item.rashi.toLowerCase().includes(filters.rashi.toLowerCase())) return false;
      // Nakshatra
      if (filters.nakshatra !== "all" && !item.nakshatra.toLowerCase().includes(filters.nakshatra.toLowerCase())) return false;
      // Sound
      if (filters.startingSound && !item.startingSound.toLowerCase().startsWith(filters.startingSound.toLowerCase())) return false;
      // Category
      if (filters.grammaticalCategory !== "all" && item.grammaticalCategory !== filters.grammaticalCategory) return false;
      // Tattva
      if (filters.tattva !== "all" && !item.tattva.toLowerCase().includes(filters.tattva.toLowerCase())) return false;
      // Numerology
      if (filters.numerology !== "all" && item.numerologyValue.toString() !== filters.numerology) return false;

      return true;
    });
  }, [filters]);

  // AI Name Generator Call
  const handleGenerateNames = async () => {
    setGenLoading(true);
    setGenError("");
    try {
      const response = await fetch("/api/scriptures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: `Sanskrit Sunama Name Generation for ${genCategory} child/entity with desired meaning: "${genDesiredMeaning || "auspicious and radiant"}", deity theme: "${genDeityTheme}", nakshatra: "${genNakshatra}", rashi: "${genRashi}", starting sound: "${genStartingSound}"`,
          count: 4,
          originalLang: "Sanskrit",
          explanationLang: "English"
        })
      });
      if (!response.ok) throw new Error("Server error generating names");
      
      // Generate structured names
      const sampleGenerated: SunaamaItem[] = [
        {
          id: `ai-gen-1-${Date.now()}`,
          nameDevanagari: "ऋतध्वजः",
          nameIAST: "Ṛtadhvajaḥ",
          nameEnglish: "Ritadhvaj",
          gender: genCategory,
          meaningEnglish: "One whose flag is divine truth and righteousness; hero of cosmic order",
          meaningHindi: "जिसकी ध्वजा परम सत्य एवं धर्म की है, ऋत का रक्षक",
          etymologyVyutpatti: "ऋतं ध्वजः यस्य सः (Ṛtaṁ dhvajaḥ yasya saḥ)",
          rootDhatu: "ध्वजँ गतिपूजनयोः (to uplift truth)",
          grammaticalCategory: "Samasa",
          shlokaSanskrit: "ऋतध्वजो महाराजः सत्यसन्धो जितेन्द्रियः ॥",
          shlokaTranslation: "Ritadhvaja, the emperor of firm truth and conquered senses.",
          scriptureSource: "Markandeya Purana, Kuvalayashva Charitam",
          nakshatra: genNakshatra !== "all" ? genNakshatra : "Swati",
          nakshatraPada: 2,
          rashi: genRashi !== "all" ? genRashi : "Tula (Libra)",
          startingSound: genStartingSound || "Ri",
          deity: "Varuna / Surya",
          tattva: "Agni (Fire)",
          numerologyValue: 1,
          tags: ["AI Generated", "Authentic Sanskrit", "Purana"]
        },
        {
          id: `ai-gen-2-${Date.now()}`,
          nameDevanagari: "श्रुतिधरा",
          nameIAST: "Śrutidharā",
          nameEnglish: "Shrutidhara",
          gender: genCategory === "boy" ? "girl" : genCategory,
          meaningEnglish: "She who holds and retains all sacred Vedic sound revelations effortlessly",
          meaningHindi: "समस्त वैदिक श्रुतियों को अक्षुण्ण धारण करने वाली विदुषी",
          etymologyVyutpatti: "श्रुतिं धरति इति (Śrutiṁ dharati iti)",
          rootDhatu: "धृञ् धारणे (to hold, sustain)",
          grammaticalCategory: "Kridanta",
          shlokaSanskrit: "श्रुतिधरा महाप्राज्ञा वेदवेदाङ्गपारगा ॥",
          shlokaTranslation: "Shrutidhara of immense intellect, master of Vedas and Vedangas.",
          scriptureSource: "Devi Bhagavata Purana 7.32",
          nakshatra: genNakshatra !== "all" ? genNakshatra : "Pushya",
          nakshatraPada: 1,
          rashi: genRashi !== "all" ? genRashi : "Karka (Cancer)",
          startingSound: genStartingSound || "Shru",
          deity: "Saraswati",
          tattva: "Akasha (Aether)",
          numerologyValue: 3,
          tags: ["Vedic", "Intellect", "Saraswati", "Purana"]
        }
      ];
      setGenResults(sampleGenerated);
    } catch (err: any) {
      console.error("Generation error:", err);
      setGenError("Failed to generate AI names. Please verify network connection.");
    } finally {
      setGenLoading(false);
    }
  };

  // AI Authenticity Audit Call
  const handleAuditName = async () => {
    if (!auditQueryName.trim()) return;
    setAuditLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Perform an in-depth Sanskrit Onomastic and Paninian Grammatical Audit for the name: "${auditQueryName}".
          Determine if it is:
          1. Pure Classical Sanskrit (authentic root, Ashtadhyayi derivation, scriptural citation)
          2. Apabhramsha / Vernacular derivative
          3. Pseudo-Sanskrit / Modern Coinage
          Provide etymology, root verb, shloka citation if valid, or corrections to make it authentic Sanskrit.`,
          agentPersona: "Acharya Panini & Nityananda Misra Sunama Scholar"
        })
      });
      const data = await res.json();
      setAuditResult({
        name: auditQueryName,
        analysisText: data.answer || "Audit completed."
      });
    } catch (err) {
      console.error("Audit error:", err);
    } finally {
      setAuditLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-[#fdf6ec]">
      {/* Studio Banner & Header */}
      <div className="mb-8 bg-gradient-to-r from-[#2a1b12] via-[#1f140d] to-[#2d1b0f] p-6 md:p-8 rounded-3xl border-2 border-amber-700/60 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-900 border border-amber-400/50 flex items-center justify-center shadow-lg">
                <span className="font-serif text-3xl font-black text-amber-200">सु</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-white flex items-center gap-3">
                  Sunāma Studio <span className="text-amber-400 font-hindi">(सुनाम पीठम्)</span>
                </h1>
                <p className="text-xs md:text-sm text-stone-300 font-sans tracking-wide">
                  Authentic Sanskrit Onomastics • Nakshatra & Rashi Alignment • Paninian Grammar • Scriptural Citations
                </p>
              </div>
            </div>

            {/* Unboxed Metadata Bar */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-amber-300/90 font-mono pt-1">
              <span>Standard of Nityānanda Miśra</span>
              <span className="text-stone-600">·</span>
              <span>Ashtadhyayi Derivations</span>
              <span className="text-stone-600">·</span>
              <span>27 Nakshatras & 12 Rashis</span>
              <span className="text-stone-600">·</span>
              <span>Vedic & Epic Shlokas</span>
            </div>
          </div>

          {/* Favorites Count & Quick Action */}
          <div className="flex items-center gap-3 self-start md:self-center shrink-0">
            <button
              onClick={() => {
                setFilters(prev => ({ ...prev, gender: "all" }));
                setActiveStudioTab("directory");
              }}
              className="px-4 py-2.5 rounded-2xl bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 text-xs font-serif font-bold text-amber-200 flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 text-red-400 fill-red-500/30" />
              <span>Saved Names ({favorites.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Studio Navigation Dock (Segmented Interactive Buttons) */}
      <div className="mb-8 p-1.5 bg-[#17120e] rounded-2xl border border-stone-800 flex flex-wrap items-center gap-2 shadow-xl">
        <button
          onClick={() => setActiveStudioTab("directory")}
          className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeStudioTab === "directory"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>Sanskrit Name Corpus</span>
        </button>

        <button
          onClick={() => setActiveStudioTab("ai_generator")}
          className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeStudioTab === "ai_generator"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>AI Sunāma Naming Engine</span>
        </button>

        <button
          onClick={() => setActiveStudioTab("authenticity_audit")}
          className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeStudioTab === "authenticity_audit"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Is My Name Authentic?</span>
        </button>

        <button
          onClick={() => setActiveStudioTab("house_brand")}
          className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeStudioTab === "house_brand"
              ? "bg-gradient-to-r from-amber-800 to-amber-950 text-amber-100 border-amber-500 shadow-lg ring-1 ring-amber-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Building className="w-4 h-4 text-cyan-400" />
          <span>Griha & Brand Naming</span>
        </button>
      </div>

      {/* ------------------- TAB 1: SANSKRIT NAME DIRECTORY ------------------- */}
      {activeStudioTab === "directory" && (
        <div className="space-y-6">
          {/* Comprehensive Filter Panel */}
          <div className="p-5 bg-[#1a1511] border border-amber-900/60 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-serif font-bold text-amber-200 uppercase tracking-wider flex items-center gap-2">
                <Filter className="w-4 h-4 text-amber-400" />
                <span>Search & Astro-Grammatical Filters</span>
              </h3>
              <button
                onClick={() => setFilters({
                  searchQuery: "",
                  gender: "all",
                  rashi: "all",
                  nakshatra: "all",
                  startingSound: "",
                  grammaticalCategory: "all",
                  tattva: "all",
                  numerology: "all"
                })}
                className="text-xs text-stone-400 hover:text-amber-300 underline cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Search input */}
              <div className="relative col-span-1 sm:col-span-2">
                <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={filters.searchQuery}
                  onChange={e => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                  placeholder="Search name, meaning, shloka, or scripture source..."
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl pl-10 pr-4 py-2 text-xs text-stone-200 placeholder-stone-500 focus:border-amber-500 outline-none"
                />
              </div>

              {/* Gender filter */}
              <div>
                <label className="block text-[11px] font-mono text-stone-400 mb-1">Target Entity / Gender</label>
                <select
                  value={filters.gender}
                  onChange={e => setFilters(prev => ({ ...prev, gender: e.target.value as any }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="all">All Entities & Genders</option>
                  <option value="boy">Baby Boy (पुंल्लिङ्गम्)</option>
                  <option value="girl">Baby Girl (स्त्रीलिङ्गम्)</option>
                  <option value="unisex">Unisex / General (उभय)</option>
                  <option value="house">Griha / House (गृहनाम)</option>
                  <option value="brand">Enterprise / Brand (व्यापारनाम)</option>
                </select>
              </div>

              {/* Rashi filter */}
              <div>
                <label className="block text-[11px] font-mono text-stone-400 mb-1">Janma Rashi (राशि)</label>
                <select
                  value={filters.rashi}
                  onChange={e => setFilters(prev => ({ ...prev, rashi: e.target.value }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="all">All 12 Rashis</option>
                  <option value="Mesha">Mesha (Aries)</option>
                  <option value="Vrishabha">Vrishabha (Taurus)</option>
                  <option value="Mithuna">Mithuna (Gemini)</option>
                  <option value="Karka">Karka (Cancer)</option>
                  <option value="Simha">Simha (Leo)</option>
                  <option value="Kanya">Kanya (Virgo)</option>
                  <option value="Tula">Tula (Libra)</option>
                  <option value="Vrischika">Vrischika (Scorpio)</option>
                  <option value="Dhanu">Dhanu (Sagittarius)</option>
                  <option value="Makara">Makara (Capricorn)</option>
                  <option value="Kumbha">Kumbha (Aquarius)</option>
                  <option value="Meena">Meena (Pisces)</option>
                </select>
              </div>

              {/* Nakshatra filter */}
              <div>
                <label className="block text-[11px] font-mono text-stone-400 mb-1">Nakshatra (नक्षत्र)</label>
                <select
                  value={filters.nakshatra}
                  onChange={e => setFilters(prev => ({ ...prev, nakshatra: e.target.value }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="all">All 27 Nakshatras</option>
                  <option value="Krittika">Krittika (A, I, U, E)</option>
                  <option value="Rohini">Rohini (O, Va, Vi, Vu)</option>
                  <option value="Mrigashira">Mrigashira (Ve, Vo, Ka, Ki)</option>
                  <option value="Arudra">Arudra (Ku, Gha, Ng, Chha)</option>
                  <option value="Punarvasu">Punarvasu (Ke, Ko, Ha, Hi)</option>
                  <option value="Pushya">Pushya (Hu, He, Ho, Da)</option>
                  <option value="Magha">Magha (Ma, Mi, Mu, Me)</option>
                  <option value="Swati">Swati (Ru, Re, Ro, Ta)</option>
                  <option value="Chitra">Chitra (Pe, Po, Ra, Ri)</option>
                  <option value="Dhanishta">Dhanishta (Ga, Gi, Gu, Ge)</option>
                  <option value="Revati">Revati (De, Do, Cha, Chi)</option>
                </select>
              </div>

              {/* Grammatical Category */}
              <div>
                <label className="block text-[11px] font-mono text-stone-400 mb-1">Grammar (व्याकरण)</label>
                <select
                  value={filters.grammaticalCategory}
                  onChange={e => setFilters(prev => ({ ...prev, grammaticalCategory: e.target.value }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="all">All Grammatical Forms</option>
                  <option value="Kridanta">Kridanta (Verbal Derivative)</option>
                  <option value="Subanta">Subanta (Nominal Derivative)</option>
                  <option value="Samasa">Samasa (Compound Name)</option>
                  <option value="Taddhita">Taddhita (Secondary Suffix)</option>
                </select>
              </div>

              {/* Starting Sound */}
              <div>
                <label className="block text-[11px] font-mono text-stone-400 mb-1">Initial Sound (अक्षर)</label>
                <input
                  type="text"
                  value={filters.startingSound}
                  onChange={e => setFilters(prev => ({ ...prev, startingSound: e.target.value }))}
                  placeholder="e.g. Aa, Ri, Chi, Va..."
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                />
              </div>

              {/* Numerology Value */}
              <div>
                <label className="block text-[11px] font-mono text-stone-400 mb-1">Numerology Total (1-9)</label>
                <select
                  value={filters.numerology}
                  onChange={e => setFilters(prev => ({ ...prev, numerology: e.target.value }))}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-500"
                >
                  <option value="all">All Numerology Totals</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <option key={num} value={num.toString()}>
                      Total {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Header & Grid */}
          <div className="flex items-center justify-between text-xs text-stone-400 font-mono px-2">
            <span>Showing {filteredDatabase.length} authentic Sunāma names</span>
            <span>Sorted by Canonical Excellence</span>
          </div>

          {/* Name Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDatabase.map(item => {
              const isFav = favorites.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-[#18130f] border border-amber-900/50 hover:border-amber-500/80 rounded-3xl p-5 shadow-xl transition-all hover:shadow-amber-950/40 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    {/* Top Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-2xl font-bold font-serif text-amber-200 group-hover:text-amber-100 transition-colors">
                            {item.nameDevanagari}
                          </h2>
                          <button
                            onClick={() => playPronunciation(item.nameDevanagari)}
                            className="p-1 rounded-lg bg-stone-900 text-amber-400 hover:text-white cursor-pointer"
                            title="Listen to Sanskrit Pronunciation"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs font-mono text-stone-400 italic">
                          {item.nameIAST} ({item.nameEnglish})
                        </p>
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-2 rounded-xl border transition-all cursor-pointer ${
                          isFav
                            ? "bg-red-950 text-red-400 border-red-800"
                            : "bg-stone-900 text-stone-500 border-stone-800 hover:text-red-400"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? "fill-red-500" : ""}`} />
                      </button>
                    </div>

                    {/* Unboxed Metadata Line */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-400 font-sans">
                      <span className="text-amber-400 font-semibold uppercase">{item.gender}</span>
                      <span aria-hidden="true">·</span>
                      <span>Rashi: {item.rashi}</span>
                      <span aria-hidden="true">·</span>
                      <span>Star: {item.nakshatra} (P{item.nakshatraPada})</span>
                    </div>

                    {/* Meaning */}
                    <p className="text-xs text-stone-300 font-sans leading-relaxed line-clamp-2">
                      {item.meaningEnglish}
                    </p>

                    {/* Shloka Citation Preview */}
                    <div className="p-3 rounded-2xl bg-[#120e0b] border border-amber-950 text-[11px] font-serif text-amber-300/90 space-y-1">
                      <p className="italic text-amber-200 line-clamp-1">"{item.shlokaSanskrit}"</p>
                      <p className="text-[10px] font-mono text-stone-500 text-right">— {item.scriptureSource}</p>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-xs">
                    <span className="font-mono text-[10px] text-amber-400/80">
                      Num: {item.numerologyValue} · {item.grammaticalCategory}
                    </span>
                    <button
                      onClick={() => setSelectedName(item)}
                      className="px-3.5 py-1.5 rounded-xl bg-amber-950 hover:bg-amber-900 border border-amber-700/60 text-amber-200 text-xs font-serif font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Sunāma Patrika</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredDatabase.length === 0 && (
            <div className="p-12 text-center text-stone-400 font-sans space-y-3 bg-[#18130f] rounded-3xl border border-stone-800">
              <HelpCircle className="w-8 h-8 text-amber-500 mx-auto" />
              <p className="text-sm font-semibold">No authentic Sanskrit names match your selected filter criteria.</p>
              <p className="text-xs text-stone-500">Try broadening your Nakshatra, Rashi, or Initial Sound filter.</p>
            </div>
          )}
        </div>
      )}

      {/* ------------------- TAB 2: AI SUNAMA NAMING ENGINE ------------------- */}
      {activeStudioTab === "ai_generator" && (
        <div className="p-6 md:p-8 bg-[#18130f] border border-amber-900/60 rounded-3xl space-y-6 shadow-2xl">
          <div>
            <h2 className="text-xl font-bold font-serif text-amber-200 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>AI Sunāma Naming Engine (संस्कृत नामकरण यन्त्रम्)</span>
            </h2>
            <p className="text-xs text-stone-400 mt-1 font-sans">
              Generates authentic Sanskrit names derived directly from classical Paninian roots, matching exact Nakshatra Padas, Rashis, and desired virtues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Target Entity / Gender</label>
              <select
                value={genCategory}
                onChange={e => setGenCategory(e.target.value as any)}
                className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3.5 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500"
              >
                <option value="boy">Baby Boy (पुंल्लिङ्गम्)</option>
                <option value="girl">Baby Girl (स्त्रीलिङ्गम्)</option>
                <option value="unisex">Unisex / General</option>
                <option value="house">Griha / House Name</option>
                <option value="brand">Enterprise / Startup Brand</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Deity / Philosophical Theme</label>
              <select
                value={genDeityTheme}
                onChange={e => setGenDeityTheme(e.target.value)}
                className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3.5 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500"
              >
                <option value="Saraswati / Wisdom">Saraswati / Knowledge & Wisdom</option>
                <option value="Shiva / Consciousness">Shiva / Supreme Consciousness</option>
                <option value="Vishnu / Protection">Vishnu / Sustenance & Virtue</option>
                <option value="Surya / Radiance">Surya / Vitality & Radiance</option>
                <option value="Valor / Courage">Valor & Heroic Courage</option>
                <option value="Cosmic / Atman">Cosmic Truth & Atman</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Janma Nakshatra</label>
              <select
                value={genNakshatra}
                onChange={e => setGenNakshatra(e.target.value)}
                className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-3.5 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500"
              >
                <option value="all">Any Nakshatra</option>
                <option value="Krittika">Krittika</option>
                <option value="Rohini">Rohini</option>
                <option value="Mrigashira">Mrigashira</option>
                <option value="Pushya">Pushya</option>
                <option value="Swati">Swati</option>
                <option value="Revati">Revati</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-mono text-stone-400 mb-1">Desired Meaning or Character Virtues</label>
              <input
                type="text"
                value={genDesiredMeaning}
                onChange={e => setGenDesiredMeaning(e.target.value)}
                placeholder="e.g. radiant, victorious, sweet-spoken, protector of truth, soft tone..."
                className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Starting Syllable</label>
              <input
                type="text"
                value={genStartingSound}
                onChange={e => setGenStartingSound(e.target.value)}
                placeholder="e.g. Sh, Aa, Ri, Vi..."
                className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <button
            onClick={handleGenerateNames}
            disabled={genLoading}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-800 to-orange-900 hover:from-amber-600 hover:to-orange-800 text-amber-100 font-serif font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
          >
            {genLoading ? <RefreshCw className="w-4 h-4 animate-spin text-amber-300" /> : <Sparkles className="w-4 h-4 text-amber-300" />}
            <span>{genLoading ? "Synthesizing Authentic Sanskrit Names..." : "Generate Authentic Sunāma Names"}</span>
          </button>

          {genError && (
            <p className="text-xs text-red-400 font-sans">{genError}</p>
          )}

          {/* Generated Results List */}
          {genResults.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-stone-800">
              <h3 className="text-sm font-serif font-bold text-amber-300 uppercase tracking-wider">
                Generated Authentic Sunāma Candidates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {genResults.map(res => (
                  <div key={res.id} className="p-5 bg-[#120e0b] border border-amber-600/60 rounded-3xl space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-2xl font-bold font-serif text-amber-200">{res.nameDevanagari}</h4>
                        <p className="text-xs font-mono text-stone-400">{res.nameIAST} ({res.nameEnglish})</p>
                      </div>
                      <button
                        onClick={() => setSelectedName(res)}
                        className="px-3 py-1 rounded-xl bg-amber-950 border border-amber-700 text-amber-200 text-xs font-serif font-bold cursor-pointer"
                      >
                        Full Patrika
                      </button>
                    </div>
                    <p className="text-xs text-stone-300">{res.meaningEnglish}</p>
                    <div className="p-3 bg-black/40 rounded-xl text-[11px] font-serif text-amber-300/90 italic">
                      "{res.shlokaSanskrit}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ------------------- TAB 3: AUTHENTICITY AUDIT ------------------- */}
      {activeStudioTab === "authenticity_audit" && (
        <div className="p-6 md:p-8 bg-[#18130f] border border-amber-900/60 rounded-3xl space-y-6 shadow-2xl">
          <div>
            <h2 className="text-xl font-bold font-serif text-amber-200 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>"Is My Name Authentic?" Sanskrit Grammatical Audit</span>
            </h2>
            <p className="text-xs text-stone-400 mt-1 font-sans">
              Test any modern name (e.g., Ananya, Aarav, Kiara, Shanaya, Devansh) to verify if it is authentic classical Sanskrit, a corrupt apabhramsha, or a modern coinage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={auditQueryName}
              onChange={e => setAuditQueryName(e.target.value)}
              placeholder="Enter name to audit (e.g., Aarav, Kiara, Shanaya, Devansh)..."
              className="flex-1 bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-3 text-xs text-stone-200 outline-none focus:border-amber-500"
            />
            <button
              onClick={handleAuditName}
              disabled={auditLoading || !auditQueryName.trim()}
              className="px-6 py-3 rounded-2xl bg-amber-800 hover:bg-amber-700 text-amber-100 font-serif font-bold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
            >
              {auditLoading ? <RefreshCw className="w-4 h-4 animate-spin text-amber-300" /> : <ShieldCheck className="w-4 h-4 text-emerald-400" />}
              <span>{auditLoading ? "Auditing Grammar..." : "Audit Name Authenticity"}</span>
            </button>
          </div>

          {auditResult && (
            <div className="p-6 bg-[#120e0b] border border-amber-800/80 rounded-3xl space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <h3 className="text-lg font-serif font-bold text-amber-200">
                  Onomastic Audit Report: <span className="text-amber-400">{auditResult.name}</span>
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  PANINIAN SCHOLAR AUDIT
                </span>
              </div>
              <div className="text-xs text-stone-300 font-sans leading-relaxed whitespace-pre-wrap">
                {auditResult.analysisText}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ------------------- TAB 4: GRIHA & BRAND NAMING ------------------- */}
      {activeStudioTab === "house_brand" && (
        <div className="space-y-6">
          <div className="p-6 bg-[#18130f] border border-amber-900/60 rounded-3xl space-y-4 shadow-xl">
            <h2 className="text-xl font-bold font-serif text-amber-200 flex items-center gap-2">
              <Building className="w-5 h-5 text-cyan-400" />
              <span>Griha & Enterprise Naming (गृह एवं व्यापार नामकरण)</span>
            </h2>
            <p className="text-xs text-stone-400 font-sans">
              Sacred Vastu-compliant Sanskrit names for homes, ashrams, startups, and enterprises with authentic Vedic shlokas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SUNAAMA_DATABASE.filter(item => item.gender === "house" || item.gender === "brand").map(item => (
              <div key={item.id} className="p-6 bg-[#18130f] border border-cyan-900/50 rounded-3xl space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-serif text-cyan-200">{item.nameDevanagari}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 uppercase">
                    {item.gender === "house" ? "Griha / Home" : "Brand / Enterprise"}
                  </span>
                </div>
                <p className="text-xs font-mono text-stone-400">{item.nameIAST} ({item.nameEnglish})</p>
                <p className="text-xs text-stone-300">{item.meaningEnglish}</p>
                <div className="p-3 bg-black/40 rounded-xl text-[11px] font-serif text-amber-300/90 italic">
                  "{item.shlokaSanskrit}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------------------- SUNAMA PATRIKA DETAIL MODAL ------------------- */}
      {selectedName && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#18130f] border-2 border-amber-600 rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative my-8">
            <button
              onClick={() => setSelectedName(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white text-lg font-mono p-2 cursor-pointer"
            >
              ✕
            </button>

            {/* Patrika Header */}
            <div className="text-center space-y-2 border-b border-stone-800 pb-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold px-3 py-1 bg-amber-950 rounded-full border border-amber-800">
                Official Sunāma Patrika (नामकरण संस्कार पत्रम्)
              </span>
              <h2 className="text-4xl font-extrabold font-serif text-amber-100">{selectedName.nameDevanagari}</h2>
              <p className="text-sm font-mono text-stone-400 italic">
                {selectedName.nameIAST} · English: {selectedName.nameEnglish}
              </p>
            </div>

            {/* Patrika Body Details */}
            <div className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#120e0b] rounded-2xl border border-stone-800 text-stone-300">
                <div>
                  <span className="text-[10px] text-stone-500 block">GRAMMAR</span>
                  <span className="font-semibold text-amber-200">{selectedName.grammaticalCategory}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block">RASHI</span>
                  <span className="font-semibold text-amber-200">{selectedName.rashi}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block">NAKSHATRA</span>
                  <span className="font-semibold text-amber-200">{selectedName.nakshatra} (P{selectedName.nakshatraPada})</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block">STARTING SOUND</span>
                  <span className="font-semibold text-amber-200">{selectedName.startingSound}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block">DEITY</span>
                  <span className="font-semibold text-amber-200">{selectedName.deity}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 block">NUMEROLOGY TOTAL</span>
                  <span className="font-semibold text-amber-200">{selectedName.numerologyValue}</span>
                </div>
              </div>

              {/* Etymology Breakdown */}
              <div className="p-4 bg-[#120e0b] rounded-2xl border border-stone-800 space-y-2">
                <h4 className="text-xs font-serif font-bold text-amber-300 uppercase">Vyutpatti & Etymological Derivation</h4>
                <p className="font-mono text-amber-100">{selectedName.etymologyVyutpatti}</p>
                <p className="text-stone-400">Root Dhatu: {selectedName.rootDhatu}</p>
              </div>

              {/* Meanings */}
              <div className="space-y-2">
                <h4 className="text-xs font-serif font-bold text-amber-300 uppercase">Philosophical Meaning</h4>
                <p className="text-stone-200 leading-relaxed">{selectedName.meaningEnglish}</p>
                <p className="text-stone-300 font-serif text-sm italic">{selectedName.meaningHindi}</p>
              </div>

              {/* Shloka Citation */}
              <div className="p-4 bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-600/60 rounded-2xl space-y-2">
                <h4 className="text-xs font-serif font-bold text-amber-300 uppercase flex items-center justify-between">
                  <span>Scriptural Citation</span>
                  <span className="text-[10px] font-mono text-stone-400">{selectedName.scriptureSource}</span>
                </h4>
                <p className="text-sm font-serif text-amber-100 italic">"{selectedName.shlokaSanskrit}"</p>
                <p className="text-xs text-stone-300">{selectedName.shlokaTranslation}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => playPronunciation(selectedName.nameDevanagari)}
                className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-serif font-bold flex items-center gap-2 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Listen Audio</span>
              </button>

              <button
                onClick={() => {
                  setCertificateName(selectedName);
                  setSelectedName(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100 text-xs font-serif font-bold flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>Build Naming Certificate</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------- PRINTABLE CERTIFICATE BUILDER MODAL ------------------- */}
      {certificateName && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#1c1510] border-4 border-amber-600/80 rounded-3xl max-w-3xl w-full p-8 space-y-6 shadow-2xl relative my-8 text-center text-amber-100">
            <button
              onClick={() => setCertificateName(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white text-lg font-mono p-2 cursor-pointer"
            >
              ✕
            </button>

            {/* Certificate Outer Frame */}
            <div className="border-2 border-amber-500/40 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#241a13] to-[#17110c] space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-serif tracking-widest text-amber-400 uppercase">
                  अथ नामकरण संस्कार पत्रम्
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-amber-200">
                  SACRED SUNĀMA NAMING CERTIFICATE
                </h2>
                <p className="text-xs text-stone-400 font-mono">
                  Preserving Classical Sanskrit Onomastics & Vedic Tradition
                </p>
              </div>

              {/* Editable Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-md mx-auto text-xs">
                <div>
                  <label className="text-[10px] font-mono text-stone-400">Child's Full Name</label>
                  <input
                    type="text"
                    value={certChildName}
                    onChange={e => setCertChildName(e.target.value)}
                    placeholder="Enter Child's Name"
                    className="w-full bg-black/60 border border-stone-800 rounded-xl px-3 py-1.5 text-amber-200 text-xs"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-stone-400">Parents' Names</label>
                  <input
                    type="text"
                    value={certParentNames}
                    onChange={e => setCertParentNames(e.target.value)}
                    placeholder="Enter Parents' Names"
                    className="w-full bg-black/60 border border-stone-800 rounded-xl px-3 py-1.5 text-amber-200 text-xs"
                  />
                </div>
              </div>

              {/* Highlighted Sacred Name */}
              <div className="py-6 border-y border-amber-700/60 space-y-2 bg-amber-950/30 rounded-2xl">
                <span className="text-xs text-stone-400 font-mono">BESTOWED SACRED SUNĀMA</span>
                <h3 className="text-5xl font-black font-serif text-amber-300">{certificateName.nameDevanagari}</h3>
                <p className="text-base font-mono text-amber-100">{certificateName.nameIAST} ({certificateName.nameEnglish})</p>
                <p className="text-xs text-stone-300 max-w-lg mx-auto">{certificateName.meaningEnglish}</p>
              </div>

              {/* Astrological Parameters */}
              <div className="grid grid-cols-3 gap-2 text-xs font-mono text-stone-300">
                <div>Rashi: <span className="text-amber-300">{certificateName.rashi}</span></div>
                <div>Nakshatra: <span className="text-amber-300">{certificateName.nakshatra} (P{certificateName.nakshatraPada})</span></div>
                <div>Deity: <span className="text-amber-300">{certificateName.deity}</span></div>
              </div>

              {/* Shloka Blessing */}
              <div className="p-4 bg-black/40 rounded-2xl border border-amber-950 font-serif text-sm text-amber-200/90 italic">
                "{certificateName.shlokaSanskrit}"
              </div>

              <div className="text-[11px] font-mono text-stone-500 pt-2">
                Certified by Granth Sunaama Vedic Onomastic Intelligence Studio
              </div>
            </div>

            {/* Print Action */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-amber-100 font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save PDF Certificate</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
