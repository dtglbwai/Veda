import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Flame,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Volume2,
  VolumeX,
  Search,
  Eye,
  Zap,
  Award,
  ChevronRight,
  Check,
  Copy,
  Layers,
  AlertTriangle,
  Compass,
  Star,
  Moon,
  Sun,
  Radio,
  ExternalLink,
  HelpCircle,
  Activity,
  Heart,
  Lock,
  Unlock,
  ShieldAlert
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// ---------------------------------------------------------------------------
// TYPES & DATA STRUCTURES
// ---------------------------------------------------------------------------

export interface MahavidyaDetail {
  id: string;
  nameDevanagari: string;
  nameIAST: string;
  titleHindi: string;
  titleEnglish: string;
  kula: "Kadi Kula (कादि कुल)" | "Kali / Sri Kula (कादि व श्री कुल)" | "Sri Kula (श्री कुल)";
  cosmicPrinciple: string;
  planetaryRuler: string;
  associatedChakra: string;
  beejaMantra: string;
  direction: string;
  iconography: string;
  esotericSecretDeepakVerma: string;
  sattvicUpaya: string;
  dhyanaShlokaDevanagari: string;
  dhyanaShlokaMeaning: string;
  keyBenefits: string[];
  astrologicalAfflictionCured: string;
}

export const MAHAVIDYA_CORPUS: MahavidyaDetail[] = [
  {
    id: "kali",
    nameDevanagari: "काली",
    nameIAST: "Kālī",
    titleHindi: "प्रथम महाविद्या — कालरात्रि, समय व परिवर्तन शक्ति",
    titleEnglish: "The 1st Mahavidya — Primal Cosmic Time & Dissolution",
    kula: "Kadi Kula (कादि कुल)",
    cosmicPrinciple: "Absolute Time (Kala), Unmanifest Potential, Destruction of Ego & Illusion",
    planetaryRuler: "Saturn (Shani) & Rahu",
    associatedChakra: "Muladhara (Root Chakra)",
    beejaMantra: "क्रीं (KRĪM)",
    direction: "South (Dakshina)",
    iconography: "Dark cosmic hue, four arms holding severed head & scimitar, standing upon sleeping Shiva, garland of 51 skulls representing the Sanskrit Aksharas.",
    esotericSecretDeepakVerma: "Deepak Verma highlights that Kali is not destruction of life, but the destruction of time-bound ego (Kala). She transforms fear of death into absolute spiritual freedom (Moksha).",
    sattvicUpaya: "Recite Kali Sahasranama or Argala Stotra, offer red hibiscus flowers, practice mindfulness on breath as time pulse, maintain non-attachment.",
    dhyanaShlokaDevanagari: "करालवदनां घोरां मुक्तकेशीं चतुर्भुजाम् । कालिकां दक्षिणां दिव्यां मुण्डमालाविभूषिताम् ॥",
    dhyanaShlokaMeaning: "Meditation on Divine Dakshina Kalika of fierce countenance, untied hair, four arms, adorned with a garland of heads, bestowing fearlessness and victory.",
    keyBenefits: ["Dissolves chronic fear & anxiety", "Protects against Saturnine (Shani) Sade Sati", "Destroys toxic ego & negative energy", "Accelerates Kundalini awakening"],
    astrologicalAfflictionCured: "Severe Saturn (Shani) afflictions, Rahu Dasha fear, chronic depression, black magic/evil eye (Nazar)."
  },
  {
    id: "tara",
    nameDevanagari: "तारा",
    nameIAST: "Tārā",
    titleHindi: "द्वितीय महाविद्या — तारिणी, उग्रतारा, शब्द व ज्ञान की नौका",
    titleEnglish: "The 2nd Mahavidya — The Deliverer & Cosmic Sound (Vak)",
    kula: "Kadi Kula (कादि कुल)",
    cosmicPrinciple: "The Cosmic Vessel (Tarini) crossing the sea of Samsara, Power of Speech & Wisdom",
    planetaryRuler: "Jupiter (Guru)",
    associatedChakra: "Vishuddhi (Throat Chakra)",
    beejaMantra: "स्त्रीं (STRĪM) / ऐं (AIM)",
    direction: "North-East (Ishanya)",
    iconography: "Blue-complexioned (Neela Saraswati), standing on corpse, holding sword, pair of scissors (to sever worldly attachment), skull cup and lotus.",
    esotericSecretDeepakVerma: "Tara represents the power of speech (Vak) that carries one across life's ocean. Deepak Verma explains how Nila Saraswati bestows instant poetic eloquence, supreme intelligence, and protection in crisis.",
    sattvicUpaya: "Chant 'Om Hreem Streem Hum Phat', light camphor before Akshobhya Shiva image, practice truthfulness (Satya-Vrata) and study scriptures.",
    dhyanaShlokaDevanagari: "प्रत्यालीढपदां घोरां मुण्डमालाविभूषिताम् । खर्वं लम्बोदरीं भीमां नीलनीरजलोचनाम् ॥",
    dhyanaShlokaMeaning: "Meditation on Ugra Tara standing in heroic posture, blue lotus-eyed, wielding the shears of wisdom to sever the knots of ignorance.",
    keyBenefits: ["Mastery over speech & debate (Vak-Siddhi)", "Instant rescue from acute financial & life crises", "Deep intellectual & scholarly absorption", "Jupiterian wisdom enhancement"],
    astrologicalAfflictionCured: "Weak Jupiter (Brihaspati), speech defects, academic failure, bankruptcy, court litigation distress."
  },
  {
    id: "tripura_sundari",
    nameDevanagari: "त्रिपुरसुन्दरी (षोडशी)",
    nameIAST: "Tripurasundarī (Ṣoḍaśī)",
    titleHindi: "तृतीय महाविद्या — ललिता, राजराजेश्वरी, श्रीविद्या परम शक्ति",
    titleEnglish: "The 3rd Mahavidya — Cosmic Beauty, Harmony & Sri Vidya",
    kula: "Sri Kula (श्री कुल)",
    cosmicPrinciple: "The Sovereign Beauty of the Three Worlds, Sri Vidya Architecture, Pure Sattvic Bliss",
    planetaryRuler: "Mercury (Budha)",
    associatedChakra: "Sahasrara (Crown Chakra) & Anahata",
    beejaMantra: "श्रीं (ŚRĪM) / क्लीं (KLĪM) / सौः (SAUḤ)",
    direction: "East (Purva)",
    iconography: "Golden-red radiant deity seated upon throne supported by Brahma, Vishnu, Rudra, and Ishana, holding sugarcane bow, flower arrows, noose and goad.",
    esotericSecretDeepakVerma: "Deepak Verma reveals Tripura Sundari as the ruler of Sri Yantra. She governs the 16 phases of consciousness (Shodashi) and transforms desire into divine bliss (Ananda).",
    sattvicUpaya: "Worship Sri Yantra with kumkum, recite Lalita Sahasranama or Khadgamala Stotra, nurture elegance, truth, and aesthetic purity.",
    dhyanaShlokaDevanagari: "बालार्कमण्डलाभासां चतुर्बाहुं त्रिलोचनाम् । पाशाङ्कुशशरांँश्चापं धारयन्तीं शिवां भजे ॥",
    dhyanaShlokaMeaning: "I worship Shiva Tripura Sundari, radiant as the morning rising sun, three-eyed, holding noose, goad, floral arrows and sugarcane bow.",
    keyBenefits: ["Manifestation of Sri (wealth, beauty & harmony)", "Complete resolution of marital discord", "Sri Yantra Kundalini awakening", "Mercury intelligence alignment"],
    astrologicalAfflictionCured: "Afflicted Mercury (Budha), marital turmoil, loss of charm, commercial failure, lack of contentment."
  },
  {
    id: "bhuvaneshwari",
    nameDevanagari: "भुवनेश्वरी",
    nameIAST: "Bhuvaneśvarī",
    titleHindi: "चतुर्थ महाविद्या — अन्तरिक्ष, जगज्जननी व ब्रह्माण्ड स्वामिनी",
    titleEnglish: "The 4th Mahavidya — Sovereign Ruler of Space & Creation",
    kula: "Sri Kula (श्री कुल)",
    cosmicPrinciple: "Cosmic Space (Akasha), The Matrix of Creation, Universal Motherhood & Nurturing",
    planetaryRuler: "Moon (Chandra)",
    associatedChakra: "Hridaya / Anahata (Heart Chakra)",
    beejaMantra: "ह्रीं (HRĪM)",
    direction: "West (Pashchima)",
    iconography: "Radiant like the rising sun, crescent moon on crown, four hands bestowing boons and fearlessness while holding noose and goad, smiling motherly grace.",
    esotericSecretDeepakVerma: "Deepak Verma notes that Bhuvaneshwari is the space in which all creation breathes. Her Beeja 'Hrim' is Maya Beeja, granting command over space, property, and emotional poise.",
    sattvicUpaya: "Chant 'Om Hreem Bhuvaneshwaryai Namah', offer sweet white pudding (Kheer) on Full Moon nights, cultivate expansive unconditional love.",
    dhyanaShlokaDevanagari: "उद्यद्दिनकरद्युतिमिन्दुकिरीटां तुङ्गकुचां नयनत्रययुक्ताम् । स्मेरमुखीं वरदाङ्कुशपाशाभीतिकरां प्रभजे भुवनेशीम् ॥",
    dhyanaShlokaMeaning: "I meditate on Bhuvaneshwari, glowing with morning sun radiance, moon-crowned, three-eyed, smiling graciously while granting boons and protection.",
    keyBenefits: ["Acquisition of land, home & Vastu harmony", "Deep emotional calm & mental peace", "Unbounded prosperity & royal honor", "Moon planetary strength"],
    astrologicalAfflictionCured: "Afflicted Moon (Chandra), anxiety, Vastu Dosha in dwelling, property disputes, lack of shelter."
  },
  {
    id: "bhairavi",
    nameDevanagari: "भैरवी",
    nameIAST: "Bhairavī",
    titleHindi: "पञ्चम महाविद्या — तपोअग्नि, त्रिपुरा भैरवी व कुण्डलिनी तेज",
    titleEnglish: "The 5th Mahavidya — Radiant Ascetic Fire & Kundalini Power",
    kula: "Kali / Sri Kula (कादि व श्री कुल)",
    cosmicPrinciple: "Tapashcharya (Ascetic Fire), Supreme Kundalini Heat (Tejas), Destruction of Inertia",
    planetaryRuler: "Mars (Mangala) & Lagna Fire",
    associatedChakra: "Manipura (Solar Plexus Chakra)",
    beejaMantra: "ह्स्रैं (HSRAĪM) / ह्स्क्ल्रीं (HSKL RĪM)",
    direction: "South-East (Agneya)",
    iconography: "Effulgent red complexion like a thousand suns, wearing garment of red silk and garland of severed heads, holding rosary, book, gesturing boon and protection.",
    esotericSecretDeepakVerma: "Bhairavi is the Kundalini fire of Tapas. Deepak Verma highlights her role in burning away physical lethargy, karmic debris, and granting instant courage to spiritual warriors.",
    sattvicUpaya: "Recite Tripura Bhairavi Stotra, practice Pranayama and Brahmacharya, light ghee lamp, perform courageous self-less service.",
    dhyanaShlokaDevanagari: "उद्यद्भास्करकांतिं त्रिनयनां मंदस्मितमुखीं । मालापुस्तकपाशांकुशधरां भजे त्रिपुराभैरवीम् ॥",
    dhyanaShlokaMeaning: "Meditation on Tripura Bhairavi, blazing with the brilliant light of rising suns, three-eyed, holding rosary, scripture, noose and goad.",
    keyBenefits: ["Awakening of inner Kundalini Tejas", "Eradication of cowardice & inertia (Tamas)", "Mars energy alignment & physical vigor", "Speech &scriptural mastery"],
    astrologicalAfflictionCured: "Afflicted Mars (Mangala), cowardice, blood disorders, lack of drive, lethargy."
  },
  {
    id: "chhinnamasta",
    nameDevanagari: "छिन्नमस्ता",
    nameIAST: "Chinnamastā",
    titleHindi: "षष्ठ महाविद्या — प्रचण्ड चण्डिका, आत्म-बलि व प्राण शक्ति",
    titleEnglish: "The 6th Mahavidya — Pranic Transformation & Self-Mastery",
    kula: "Kadi Kula (कादि कुल)",
    cosmicPrinciple: "Self-Sacrifice, Transmutation of Sexual Energy into Ojas, Severing of Ego/Mind",
    planetaryRuler: "Rahu",
    associatedChakra: "Ajna Chakra (Third Eye) & Sushumna Nadi",
    beejaMantra: "हुं (HUM) / श्रीं क्लीं ह्रीं ऐं वज्रवैरोचनीयै हुं हुं फट् स्वाहा",
    direction: "South-West (Nairritya)",
    iconography: "Holding her own severed head in left hand, drinking one stream of blood from her neck while two attendants (Dakini & Varnini) drink the other two streams, standing on Kama and Rati.",
    esotericSecretDeepakVerma: "Deepak Verma unveils the deepest secret: Chhinnamasta is NOT gruesome; she symbolizes the severing of body-mind identification. She transmutes lower desires (Rati-Kama) into high Pranic Sushumna energy.",
    sattvicUpaya: "Practice Khechari/Mula Bandha, meditate on Ajna chakra, chant Rahu pacifying Sattvic mantras, maintain strict mental discipline.",
    dhyanaShlokaDevanagari: "भास्वद्भास्करमण्डलांतरगतां त्रैलोक्यमोहावहां भास्वच्छिन्नशिरोधरां निजगलद्रक्तां पिबन्तीं मुदा ॥",
    dhyanaShlokaMeaning: "I worship Chhinnamasta seated within the solar orb, holding her severed head, drinking the divine nectar stream of life force in supreme bliss.",
    keyBenefits: ["Mastery over vital Prana & sexual energy", "Instant neutralization of severe Rahu afflictions", "Transcendence of body identification", "Third eye intuition"],
    astrologicalAfflictionCured: "Severe Rahu Dasha/Mahadasha, addiction, uncontrollable desires, mental delusion, nervous breakdown."
  },
  {
    id: "dhumavati",
    nameDevanagari: "धूमावती",
    nameIAST: "Dhūmāvatī",
    titleHindi: "सप्तम महाविद्या — ज्येष्ठा, शून्यता, धैर्य व संकट निवारिणी",
    titleEnglish: "The 7th Mahavidya — The Primal Void, Patience & Adversity Solution",
    kula: "Kadi Kula (कादि कुल)",
    cosmicPrinciple: "The Cosmic Void (Sunyata), Dissolution of Illusions, Ultimate Endurance & Solitude",
    planetaryRuler: "Ketu",
    associatedChakra: "Sushumna Void / Nirguna State",
    beejaMantra: "धूं (DHŪM)",
    direction: "North-West (Vayavya)",
    iconography: "Tall, pale, widow-form, riding a horseless chariot with crow emblem, holding winnowing basket, tremulous hands, embodying cosmic solitude and ultimate truth beyond appearance.",
    esotericSecretDeepakVerma: "Deepak Verma clarifies that Dhumavati represents the lesson of adversity. She teaches that behind poverty, sickness, or loss lies the indestructible void of Truth. She grants unmatched resilience.",
    sattvicUpaya: "Serve destitute elderly people, chant 'Om Dhum Dhumavatyai Namah', practice detachment from worldly outcomes, feed crows and dogs.",
    dhyanaShlokaDevanagari: "विवर्णा चञ्चला दुष्टा दीर्घा च मलिनाम्बरा । विमुक्तकुन्तला रूक्षा विधवा विरलद्विजा ॥",
    dhyanaShlokaMeaning: "Meditation on Dhumavati who reveals the emptiness of temporary worldly glamor, granting unshakeable spiritual fortitude in times of trial.",
    keyBenefits: ["Complete immunity against depression & loss", "Absolute protection during Ketu Dasha", "Development of unshakeable patience", "Liberation from worldly attachments"],
    astrologicalAfflictionCured: "Ketu Dasha, chronic loneliness, sudden misfortune, insolvency, loss of status."
  },
  {
    id: "bagalamukhi",
    nameDevanagari: "बगलामुखी",
    nameIAST: "Bagalāmukhī",
    titleHindi: "अष्टम महाविद्या — पीताम्बरा, स्तम्भन शक्ति व शत्रु/वाक् जय",
    titleEnglish: "The 8th Mahavidya — Pitambara & The Power of Paralysis (Stambhana)",
    kula: "Kali / Sri Kula (कादि व श्री कुल)",
    cosmicPrinciple: "Stambhana (Paralyzing Negative Forces), Turning Opposition into Silence, Golden Radiance",
    planetaryRuler: "Mars & Jupiter (Halidra / Yellow Energy)",
    associatedChakra: "Manipura & Throat (Vishuddhi)",
    beejaMantra: "ह्ल्रीं (HLRĪM) / ॐ ह्ल्रीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय",
    direction: "North (Uttara)",
    iconography: "Golden-yellow complexion, dressed in yellow garments, seated on golden throne in ocean of nectar, pulling out tongue of demon with left hand while raising mace with right.",
    esotericSecretDeepakVerma: "Deepak Verma explains Bagalamukhi's Stambhana: it is stopping the negative thought-vibrations of enemies and internal ego. She paralyzes malice and grants absolute victory in truth.",
    sattvicUpaya: "Wear yellow clothes on Thursdays, offer turmeric (Haldi) and yellow flowers, recite Bagalamukhi Stotram, maintain noble speech.",
    dhyanaShlokaDevanagari: "मध्येसुधाब्धिमणिमण्डपरत्नवेद्यां सिंहासनोपरिगतां परिपीतवर्णाम् । पीताम्बराभरणमाल्यविभूषिताङ्गीं देवी भजामि धृतमुद्गरवैरिजिह्वाम् ॥",
    dhyanaShlokaMeaning: "I worship Goddess Bagalamukhi, yellow-hued, adorned in golden yellow garments, pulling the tongue of hostility while holding the mace of righteousness.",
    keyBenefits: ["Instant victory in court cases & rivalries", "Stambhana (silencing) of false accusations", "Total protection against enemies & envy", "Commanding authority & presence"],
    astrologicalAfflictionCured: "Legal harassment, false scandals, enemy attacks, severe Mars-Jupiter afflictions."
  },
  {
    id: "matangi",
    nameDevanagari: "मातङ्गी",
    nameIAST: "Mātaṅgī",
    titleHindi: "नवम महाविद्या — उच्छिष्ट मातङ्गी, कला, संगीत व वाक्-सिद्धि",
    titleEnglish: "The 9th Mahavidya — Tantric Saraswati, Arts & Esoteric Grace",
    kula: "Sri Kula (श्री कुल)",
    cosmicPrinciple: "Manifested Speech (Vaikhari Vak), Fine Arts, Music, Transcending Social Taboos & Pure Wisdom",
    planetaryRuler: "Sun (Surya) & Venus (Shukra)",
    associatedChakra: "Vishuddhi & Lalana Chakra",
    beejaMantra: "ऐं (AIM) / ॐ ह्रीं क्लीं हूँ मातङ्ग्यै फट् स्वाहा",
    direction: "South-East / Universal",
    iconography: "Emerald-green skin tone, crescent moon on forehead, three eyes, seated on jeweled throne, playing Veena, holding skull cup, sword and goad.",
    esotericSecretDeepakVerma: "Deepak Verma highlights Matangi as Tantric Saraswati. She accepts 'Uchchishta' (leftover/innermost essence), showing that divine wisdom transcends external ritual purity.",
    sattvicUpaya: "Play or listen to classical Veena/Indian music, respect artists, recite Matangi Stotram, offer green cardamoms and sweet fruits.",
    dhyanaShlokaDevanagari: "श्यामाङ्गीं शशिकशेखरां त्रिनयनां रत्नसिंहासनस्थिताम् । वेणां करैर्धारयन्तीं भजे मातङ्गिनीं मुदा ॥",
    dhyanaShlokaMeaning: "I meditate on emerald-complexioned Matangi, crescent-crowned, three-eyed, playing the Veena upon a gem-studded throne of divine arts.",
    keyBenefits: ["Mastery over music, literature & fine arts", "Unexcelled Vak Siddhi (words come true)", "Attraction of harmonious relationships", "Solar & Venusian brilliance"],
    astrologicalAfflictionCured: "Weak Sun/Venus, creative blockages, social isolation, stuttering/speech impairment."
  },
  {
    id: "kamala",
    nameDevanagari: "कमला",
    nameIAST: "Kamalā",
    titleHindi: "दशम महाविद्या — महालक्ष्मी, धन, समृद्धि व पद्मालया",
    titleEnglish: "The 10th Mahavidya — Tantric Lakshmi, Abundance & Lotus Grace",
    kula: "Sri Kula (श्री कुल)",
    cosmicPrinciple: "Supreme Material & Spiritual Wealth, Auspiciousness (Sri), Preservation of Order",
    planetaryRuler: "Venus (Shukra)",
    associatedChakra: "Anahata (Heart) & Manipuraka",
    beejaMantra: "श्रीं (ŚRĪM) / ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद",
    direction: "East-North",
    iconography: "Golden complexion, seated upon a blooming pink lotus, bathed by four celestial white elephants pouring pitchers of golden amrita, holding two lotuses.",
    esotericSecretDeepakVerma: "Kamala is the conclusion of Mahavidya Sadhana. Deepak Verma emphasizes that true Lakshmi is not mere money, but spiritual contentment, commercial prosperity, and lotus-like detachment.",
    sattvicUpaya: "Keep home clean and fragrant, chant Kanakadhara or Sri Suktam, donate food to needy, respect women as embodiments of Kamala.",
    dhyanaShlokaDevanagari: "कान्त्या काञ्चनसन्निभां हिमगिरिप्रख्यैश्चतुर्भिर्गजैर्हस्तोत्क्षिप्तहिरण्मयामृतघटैरासिच्यमानां भजे ॥",
    dhyanaShlokaMeaning: "I worship Goddess Kamala, golden-complexioned, being bathed by four snow-white elephants with vessels of golden nectar.",
    keyBenefits: ["Abundant financial flow & commercial success", "Complete eradication of poverty (Daridrata)", "Graceful family harmony & status", "Venusian beauty & auspiciousness"],
    astrologicalAfflictionCured: "Severe Venus (Shukra) afflictions, chronic debt, financial ruin, poverty mindset."
  }
];

export interface DiagnosticQuestion {
  id: string;
  question: string;
  options: { label: string; mahavidyaId: string; description: string }[];
}

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "q1",
    question: "What is the primary obstacle or life challenge you are facing right now?",
    options: [
      { label: "Chronic fear, Saturnine Sade Sati, or negative energetic attacks", mahavidyaId: "kali", description: "Aligned with Kali Rahasya" },
      { label: "Speech blockages, court cases, academic distress, or crisis navigation", mahavidyaId: "tara", description: "Aligned with Tara Tarini Rahasya" },
      { label: "Desire for high business prosperity, Sri Vidya grace, and beauty", mahavidyaId: "tripura_sundari", description: "Aligned with Tripura Sundari Rahasya" },
      { label: "Property disputes, lack of housing, or emotional turmoil", mahavidyaId: "bhuvaneshwari", description: "Aligned with Bhuvaneshwari Rahasya" },
      { label: "Lethargy, fear of competition, or need for intense Kundalini drive", mahavidyaId: "bhairavi", description: "Aligned with Bhairavi Rahasya" },
      { label: "Addictions, severe Rahu Mahadasha, or overwhelming desires", mahavidyaId: "chhinnamasta", description: "Aligned with Chhinnamasta Rahasya" },
      { label: "Chronic loneliness, severe loss, insolvency, or Ketu affliction", mahavidyaId: "dhumavati", description: "Aligned with Dhumavati Rahasya" },
      { label: "Enemies, false allegations, legal harassment, or need to silence gossip", mahavidyaId: "bagalamukhi", description: "Aligned with Bagalamukhi Rahasya" },
      { label: "Creative block, artistic stagnation, or desire for Vak Siddhi", mahavidyaId: "matangi", description: "Aligned with Matangi Rahasya" },
      { label: "Debt, financial ruin, or lack of commercial luck & harmony", mahavidyaId: "kamala", description: "Aligned with Kamala Rahasya" }
    ]
  }
];

export default function MahavidyaRahasyaStudio() {
  const { t } = useLanguage();
  const [selectedMahavidyaId, setSelectedMahavidyaId] = useState<string>("kali");
  const [activeTab, setActiveTab] = useState<"corpus" | "diagnostic" | "yantra_sound" | "deepak_verma_principles">("corpus");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Sound generator for Beeja Chime
  const [isPlayingChime, setIsPlayingChime] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const activeMahavidya = useMemo(() => {
    return MAHAVIDYA_CORPUS.find((m) => m.id === selectedMahavidyaId) || MAHAVIDYA_CORPUS[0];
  }, [selectedMahavidyaId]);

  const filteredMahavidyas = useMemo(() => {
    if (!searchQuery.trim()) return MAHAVIDYA_CORPUS;
    const q = searchQuery.toLowerCase();
    return MAHAVIDYA_CORPUS.filter(
      (m) =>
        m.nameDevanagari.includes(q) ||
        m.nameIAST.toLowerCase().includes(q) ||
        m.titleHindi.toLowerCase().includes(q) ||
        m.planetaryRuler.toLowerCase().includes(q) ||
        m.beejaMantra.toLowerCase().includes(q) ||
        m.keyBenefits.some((b) => b.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const toggleChime = (freq: number = 432) => {
    if (isPlayingChime) {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (_) {}
      }
      setIsPlayingChime(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4.0);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.start();

        setIsPlayingChime(true);
        setTimeout(() => setIsPlayingChime(false), 4000);
      } catch (err) {
        console.error("Audio error:", err);
      }
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Diagnostic state
  const [selectedDiagnosticChoice, setSelectedDiagnosticChoice] = useState<string>("kali");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-stone-100 font-sans space-y-10">
      {/* Header Banner */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-[#241310] via-[#1c0f0d] to-[#120908] border-2 border-red-900/60 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-red-400/90 tracking-wider">
              <span>दश महाविद्या रहस्य</span>
              <span aria-hidden="true">·</span>
              <span>DEEPAK VERMA TANTRA SHASTRA RESEARCH</span>
              <span aria-hidden="true">·</span>
              <span>10 COSMIC DIMENSIONS</span>
            </div>

            <button
              onClick={() => toggleChime(432)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-serif font-bold transition-all cursor-pointer ${
                isPlayingChime
                  ? "bg-red-950 text-red-200 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  : "bg-stone-900/80 text-stone-300 border-stone-800 hover:text-white"
              }`}
            >
              {isPlayingChime ? <Volume2 className="w-4 h-4 text-red-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span>{isPlayingChime ? "432Hz Om Resonance [Active]" : "Play 432Hz Resonance"}</span>
            </button>
          </div>

          <h1 className="text-2xl md:text-4xl font-serif font-bold text-red-100 tracking-tight leading-snug">
            10 Mahavidyā Rahasya Studio (दस महाविद्या गुप्त विज्ञान व साधना)
          </h1>
          <p className="text-sm md:text-base text-stone-300 font-sans max-w-4xl leading-relaxed">
            The esoteric Tantric science of the 10 Dasa Mahavidyas as expounded by spiritual expositor **Deepak Verma**. Explore the planetary alignments, Sattvic Upaya protocols, Beeja Mantra dynamics, and cosmic space-time energy matrix of each Wisdom Goddess.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-red-300/90">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Sattvic Grihastha Guidelines</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400" /> 10 Planetary Rulers</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-sky-400" /> Beeja Acoustic Resonance</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-purple-400" /> Kadi Kula & Sri Kula Traditions</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Segmented Control */}
      <div className="flex items-center gap-2 p-1.5 bg-[#17120e] border border-stone-800 rounded-2xl overflow-x-auto scrollbar-thin">
        {[
          { id: "corpus", label: "1. 10 Mahavidyas Explorer", icon: Flame },
          { id: "diagnostic", label: "2. Life Crisis & Mahavidya Alignment", icon: Activity },
          { id: "yantra_sound", label: "3. Beeja Mantra & Yantra Lab", icon: Radio },
          { id: "deepak_verma_principles", label: "4. Deepak Verma Sadhana Rules", icon: BookOpen }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-red-950/90 text-red-100 border border-red-700 shadow-lg shadow-red-950/50"
                  : "text-stone-400 hover:text-stone-200 hover:bg-stone-900/60"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-red-400" : "text-stone-500"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: 10 MAHAVIDYAS EXPLORER */}
      {activeTab === "corpus" && (
        <div className="space-y-8">
          {/* Search & Selector Grid */}
          <div className="p-6 bg-[#16110e] border border-stone-800 rounded-3xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase text-red-400 tracking-wider">
                Select Goddess Form (10 Dasa Mahavidya Manifestations)
              </span>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Devanagari, Planet, Mantra..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-[#100d0a] border border-stone-800 rounded-xl text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {filteredMahavidyas.map((m) => {
                const isSelected = m.id === selectedMahavidyaId;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMahavidyaId(m.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-br from-red-950 to-stone-900 border-red-500 text-red-100 shadow-md shadow-red-950/60"
                        : "bg-[#1a1410] border-stone-800 text-stone-300 hover:border-stone-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-serif font-bold text-amber-200">
                        {m.nameDevanagari}
                      </span>
                      <span className="text-[10px] font-mono text-stone-500">{m.beejaMantra}</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 block truncate mt-1">
                      {m.planetaryRuler}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Mahavidya Detailed Dossier */}
          <div className="p-8 bg-[#18110e] border border-red-900/40 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-800 pb-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-serif font-bold text-amber-200">
                    {activeMahavidya.nameDevanagari}
                  </span>
                  <span className="text-lg font-mono text-stone-400">({activeMahavidya.nameIAST})</span>
                  <span className="text-xs font-mono px-3 py-1 bg-red-950 text-red-300 border border-red-800/80 rounded-xl">
                    {activeMahavidya.kula}
                  </span>
                </div>
                <p className="text-sm font-serif text-red-300 mt-1">{activeMahavidya.titleHindi}</p>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-stone-400">
                <span className="p-2 bg-[#100c09] border border-stone-800 rounded-xl">
                  Planet: <span className="text-amber-400 font-bold">{activeMahavidya.planetaryRuler}</span>
                </span>
                <span className="p-2 bg-[#100c09] border border-stone-800 rounded-xl">
                  Beeja: <span className="text-red-400 font-bold">{activeMahavidya.beejaMantra}</span>
                </span>
              </div>
            </div>

            {/* Dhyana Shloka Card */}
            <div className="p-5 bg-[#120d0a] border border-stone-800 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase">ध्यान श्लोक (Meditation Verse)</span>
                <button
                  onClick={() => handleCopy(`${activeMahavidya.dhyanaShlokaDevanagari}\n\n${activeMahavidya.dhyanaShlokaMeaning}`, activeMahavidya.id)}
                  className="text-xs text-stone-400 hover:text-white font-mono flex items-center gap-1 cursor-pointer"
                >
                  {copiedId === activeMahavidya.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === activeMahavidya.id ? "Copied" : "Copy Shloka"}</span>
                </button>
              </div>
              <p className="text-base md:text-lg font-serif font-bold text-amber-100 leading-relaxed">
                {activeMahavidya.dhyanaShlokaDevanagari}
              </p>
              <p className="text-xs text-stone-300 font-sans italic leading-relaxed pt-1">
                "{activeMahavidya.dhyanaShlokaMeaning}"
              </p>
            </div>

            {/* Grid of Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
              
              {/* Esoteric Secret by Deepak Verma */}
              <div className="p-5 bg-[#1e1511] border border-amber-900/40 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-sm">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Deepak Verma Esoteric Rahasya (गुप्त रहस्य)</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  {activeMahavidya.esotericSecretDeepakVerma}
                </p>
              </div>

              {/* Sattvic Upaya & Practice */}
              <div className="p-5 bg-[#151c16] border border-emerald-900/40 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-serif font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sattvic Household Upaya (सात्विक गृहस्थ उपाय)</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  {activeMahavidya.sattvicUpaya}
                </p>
              </div>

              {/* Physical & Esoteric Iconography */}
              <div className="p-5 bg-[#141210] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-amber-400 font-serif font-bold block text-sm">Iconography & Symbolic Attributes</span>
                <p className="text-stone-300 leading-relaxed">
                  {activeMahavidya.iconography}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-stone-400">
                  <span>Chakra: <strong className="text-amber-300">{activeMahavidya.associatedChakra}</strong></span>
                  <span>·</span>
                  <span>Direction: <strong className="text-amber-300">{activeMahavidya.direction}</strong></span>
                </div>
              </div>

              {/* Key Spiritual & Material Benefits */}
              <div className="p-5 bg-[#141210] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-red-400 font-serif font-bold block text-sm">Key Benefits & Astrological Relief</span>
                <ul className="space-y-1.5 text-stone-300 list-disc list-inside">
                  {activeMahavidya.keyBenefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="pt-2 text-[11px] font-mono text-red-300">
                  <span>Affliction Relief: </span>
                  <span>{activeMahavidya.astrologicalAfflictionCured}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DIAGNOSTIC & ALIGNMENT CALCULATOR */}
      {activeTab === "diagnostic" && (
        <div className="space-y-8">
          <div className="p-6 bg-[#181210] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-red-200 flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-400" />
              <span>Mahavidya Alignment Calculator (जीवन संकट व महाविद्या समाधान)</span>
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Select your current primary life obstacle or planetary affliction to identify the aligned Mahavidya energy and Sattvic Upaya recommended in the Rahasya tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Selection */}
            <div className="p-6 bg-[#15100d] border border-stone-800 rounded-3xl space-y-4">
              <label className="text-xs font-mono text-amber-400 block uppercase">
                Select Your Dominant Life Challenge
              </label>

              <div className="space-y-2">
                {DIAGNOSTIC_QUESTIONS[0].options.map((opt) => (
                  <button
                    key={opt.mahavidyaId}
                    onClick={() => setSelectedDiagnosticChoice(opt.mahavidyaId)}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs font-sans transition-all cursor-pointer flex items-center justify-between ${
                      selectedDiagnosticChoice === opt.mahavidyaId
                        ? "bg-red-950/80 border-red-500 text-red-100 shadow-md"
                        : "bg-[#1b1511] border-stone-800 text-stone-300 hover:border-stone-700"
                    }`}
                  >
                    <span>{opt.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-500 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Recommendation */}
            <div className="p-6 bg-[#17110e] border border-red-900/50 rounded-3xl space-y-5">
              <span className="text-xs font-mono text-red-400 uppercase tracking-wider block">
                Aligned Mahavidya Energy Forecast
              </span>

              {(() => {
                const rec = MAHAVIDYA_CORPUS.find((m) => m.id === selectedDiagnosticChoice) || MAHAVIDYA_CORPUS[0];
                return (
                  <div className="space-y-4 text-xs font-sans">
                    <div className="p-4 bg-[#211511] border border-amber-800/60 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-serif font-bold text-amber-200">
                          {rec.nameDevanagari} ({rec.nameIAST})
                        </span>
                        <span className="text-xs font-mono px-2.5 py-1 bg-red-950 text-red-300 border border-red-800 rounded-lg">
                          Beeja: {rec.beejaMantra}
                        </span>
                      </div>
                      <p className="text-stone-300 font-serif italic">{rec.titleHindi}</p>
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-stone-400 uppercase text-[11px] block">Planetary Alignment:</span>
                      <p className="p-3 bg-[#110e0c] border border-stone-800 rounded-xl text-amber-300 font-mono">
                        {rec.planetaryRuler} · Affliction Cured: {rec.astrologicalAfflictionCured}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-emerald-400 uppercase text-[11px] block">Recommended Sattvic Action:</span>
                      <p className="p-3 bg-[#101712] border border-emerald-900/50 rounded-xl text-stone-200 leading-relaxed">
                        {rec.sattvicUpaya}
                      </p>
                    </div>

                    <div className="p-3 bg-[#120f0d] border border-stone-800 rounded-xl text-stone-400 text-[11px] italic">
                      "Deepak Verma Secret: {rec.esotericSecretDeepakVerma}"
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: YANTRA & BEEJA SOUND LAB */}
      {activeTab === "yantra_sound" && (
        <div className="space-y-8">
          <div className="p-6 bg-[#181210] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-red-200 flex items-center gap-2">
              <Radio className="w-5 h-5 text-red-400" />
              <span>Beeja Sound & Yantra Science Laboratory</span>
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Each Mahavidya operates through an exact acoustic Beeja frequency. Sound precedes form in Tantra. Meditate on the 10 Beeja sounds and their cosmic resonance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {MAHAVIDYA_CORPUS.map((m) => (
              <div
                key={m.id}
                className="p-5 bg-[#17110e] border border-stone-800 rounded-3xl space-y-3 hover:border-red-900/60 transition-all text-center"
              >
                <span className="text-2xl font-serif font-bold text-amber-200 block">{m.nameDevanagari}</span>
                <span className="text-xs font-mono text-red-400 block px-2 py-1 bg-[#100d0a] border border-stone-800 rounded-xl">
                  {m.beejaMantra}
                </span>
                <p className="text-[11px] text-stone-400 font-sans line-clamp-2">{m.cosmicPrinciple}</p>
                <button
                  onClick={() => toggleChime(m.id === "kali" ? 432 : m.id === "tara" ? 528 : 639)}
                  className="w-full py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-xs font-mono text-stone-300 transition-colors cursor-pointer"
                >
                  Listen Frequency
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: DEEPAK VERMA SADHANA RULES & SAFETY */}
      {activeTab === "deepak_verma_principles" && (
        <div className="space-y-8">
          <div className="p-6 bg-[#181210] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span>Deepak Verma's Mahavidya Sadhana Discipline & Safety Rules</span>
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Tantra is a sharp blade; without proper guidance and Sattvic purity, improper practice can cause mental imbalance. Follow these cardinal principles outlined by Deepak Verma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#16110e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-serif font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>1. Householder (Grihastha) Safety</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-sans">
                Householders must NEVER undertake Ugra (fierce) Tamasic or Aghora rituals without a physical Guru. Focus purely on **Sattvic Stotra recitation** (such as Sahasranama, Kavacham, Stotram) and simple ghee lamp worship.
              </p>
            </div>

            <div className="p-6 bg-[#16110e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-sm">
                <Star className="w-4 h-4 text-amber-400" />
                <span>2. Guru Deeksha Necessity</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-sans">
                Specific Beeja Mantras (like Bagalamukhi or Chhinnamasta intensive Japa) require direct Guru Deeksha. For uninitiated seekers, chanting Naam Mantras or Stotrams is 100% safe and bestows immense grace.
              </p>
            </div>

            <div className="p-6 bg-[#16110e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-serif font-bold text-sm">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span>3. Purity & No Malice</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-sans">
                Never use Mahavidya energy to harm innocent people or perform malicious acts. Bagalamukhi Stambhana is meant to neutralize active evil in self-defense, not to inflict unprovoked harm.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
