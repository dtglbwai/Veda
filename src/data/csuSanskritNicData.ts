/**
 * Central Sanskrit University (केन्द्रीय संस्कृत विश्वविद्यालय)
 * Official Portal: http://sanskrit.nic.in/ (formerly Rashtriya Sanskrit Sansthan)
 * Established under an Act of Parliament (Act No. 5 of 2020), Ministry of Education, Govt. of India.
 *
 * Comprehensive repository of:
 * - Academic Programs & NEP 2020 Syllabi (Prak-Shastri, Shastri, Acharya, B.Tech AI & Data Science in SKS)
 * - Mukta Swadhyaya Peetham (MSP - ODL) & स्वाध्यायवेदी LMS Online Courses
 * - Non-Formal Sanskrit Education (NFSE / सरल संस्कृत शिक्षण)
 * - All 12 Campuses across 11 States & Affiliated Network
 * - Computational Sanskrit Tools (Shabda-Roopa, Dhatu-Roopa, Sandhi, Chhandas, Amarakosha, Karaka)
 * - Research Journals (Shodha-Pravaha, Pournamasi) & Encyclopedic Dictionary Projects
 */

export interface CSURegulatoryProfile {
  title: string;
  hindiTitle: string;
  actName: string;
  ministry: string;
  headquarters: string;
  portalUrl: string;
  accreditation: string;
  totalCampuses: number;
  affiliatedInstitutions: number;
  mission: string;
  keySchemes: { name: string; desc: string }[];
}

export interface CSUCourse {
  id: string;
  title: string;
  sanskritTitle: string;
  level: "Prak-Shastri" | "Shastri (UG)" | "Acharya (PG)" | "Vidya-Varidhi (Ph.D.)" | "MSP Online / ODL" | "NFSE Community";
  duration: string;
  eligibility: string;
  overview: string;
  specializations: string[];
  nepCredits: string;
  curriculumHighlights: string[];
}

export interface CSUCampus {
  id: string;
  name: string;
  hindiName: string;
  location: string;
  state: string;
  established: number;
  specialties: string[];
  libraryManuscripts: number;
  description: string;
}

export interface ShabdaRoopaItem {
  stem: string;
  devanagari: string;
  gender: "Masculine" | "Feminine" | "Neuter" | "Pronoun";
  ending: string; // e.g. 'अकारान्त'
  meaning: string;
  forms: {
    vibhakti: string; // Prathama, Dvitiya, ... Sambodhana
    vibhaktiDev: string;
    singular: string;
    dual: string;
    plural: string;
  }[];
}

export interface DhatuRoopaItem {
  dhatu: string;
  devanagari: string;
  gana: string;
  meaning: string;
  pada: "Parasmaipada" | "Atmanepada" | "Ubhayapada";
  forms: {
    lakara: string;
    lakaraDesc: string;
    rows: {
      purusha: "Prathama" | "Madhyama" | "Uttama";
      purushaDev: string;
      singular: string;
      dual: string;
      plural: string;
    }[];
  }[];
}

export interface SandhiRule {
  id: string;
  name: string;
  sanskritName: string;
  sutra: string;
  category: "Svara (Ac)" | "Vyanjana (Hal)" | "Visarga";
  explanation: string;
  examples: {
    word1: string;
    word2: string;
    combined: string;
    breakdown: string;
  }[];
}

export interface ChhandasMeter {
  name: string;
  devanagari: string;
  category: "Varna-Vritta" | "Matra-Vritta";
  pattern: string; // e.g. "। । ऽ ऽ"
  syllablesPerPada: number;
  totalPadas: number;
  yati: string;
  lakshanaSanskrit: string;
  exampleShloka: string;
  exampleTranslation: string;
}

export interface AmarakoshaWord {
  word: string;
  stem: string;
  gender: string;
  synonyms: string[];
  englishMeaning: string;
  varga: string;
  kanda: string;
  shlokaReference: string;
}

export interface CSUPublication {
  title: string;
  devanagari: string;
  type: "Research Journal" | "Critical Edition" | "Dictionary" | "Textbook";
  editorOrAuthor: string;
  yearOrFrequency: string;
  description: string;
  volumeInfo: string;
}

export interface CSUOlympiadQuestion {
  id: number;
  question: string;
  sanskritQuestion: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  shastricTopic: string;
}

// ================= DATA IMPLEMENTATION =================

export const CSU_REGULATORY_PROFILE: CSURegulatoryProfile = {
  title: "Central Sanskrit University (CSU)",
  hindiTitle: "केन्द्रीय संस्कृत विश्वविद्यालय",
  actName: "Central Sanskrit Universities Act, 2020 (Act No. 5 of 2020)",
  ministry: "Ministry of Education, Government of India",
  headquarters: "56-57, Institutional Area, Janakpuri, New Delhi - 110058",
  portalUrl: "http://sanskrit.nic.in/",
  accreditation: "NAAC Accredited 'A++' Grade Central University",
  totalCampuses: 12,
  affiliatedInstitutions: 184,
  mission: "To preserve, propagate, standardize, and computationally advance the Sanskrit language, Shastric knowledge systems, Indian culture, and Vedic philosophical heritage across India and worldwide.",
  keySchemes: [
    { name: "Ashtadashi (18 Flagship Initiatives)", desc: "18 integrated schemes covering digital manuscripts, Shastra Chudamani professorships, Vedic schools assistance, and modern AI in Sanskrit." },
    { name: "Mukta Swadhyaya Peetham (MSP)", desc: "Institute of Open & Distance Education providing स्वाध्यायवेदी LMS online certificate, diploma, and degree courses globally." },
    { name: "Non-Formal Sanskrit Education (NFSE)", desc: "Universal community-level Sanskrit communicative classes running across 1000+ centers in India." },
    { name: "Deccan College 35-Vol Sanskrit Dictionary Collaboration", desc: "Co-sponsoring the monumental 2.2 million vocable Historical Sanskrit-to-English Encyclopedic Dictionary." },
    { name: "Shiksha Shastri & Shiksha Acharya", desc: "NCTE-recognized teacher education programmes training pedagogical Sanskrit masters nationwide." }
  ]
};

export const CSU_COURSES: CSUCourse[] = [
  {
    id: "shastri_ba",
    title: "Shastri / Shastri Pratishtha (B.A. / B.A. Hons.)",
    sanskritTitle: "शास्त्री / शास्त्री-प्रतिष्ठा (स्नातक-पाठ्यक्रमः)",
    level: "Shastri (UG)",
    duration: "3 Years / 4 Years (NEP 2020 with Research Honours)",
    eligibility: "Prak-Shastri, Intermediate (10+2) with Sanskrit, or equivalent recognized examination.",
    overview: "Comprehensive undergraduate degree in classical Sanskrit Shastras combined with modern multidisciplinary subjects (English, Computer Science, Environmental Studies, Political Science).",
    specializations: [
      "Sahitya (Classical Sanskrit Poetry & Aesthetics)",
      "Navya & Prachina Vyakarana (Paninian Grammar)",
      "Siddhanta & Phalita Jyotisha (Astronomy & Horoscopy)",
      "Sarva Darshana & Nyaya-Vaisheshika",
      "Advaita & Vishishtadvaita Vedanta",
      "Dharmashastra & Paurohitya (Vedic Rituals)",
      "Mimamsa & Veda-Bhashya"
    ],
    nepCredits: "120 - 160 Credits (Major, Minor, Skill Enhancement, Value Added)",
    curriculumHighlights: [
      "Raghuvamsha, Kiratarjuniya, Meghaduta & Kadambari",
      "Laghusiddhantakaumudi & Siddhantakaumudi (Karaka, Sandhi, Samasa)",
      "Surya Siddhanta & Aryabhatiya calculation methodologies",
      "Tarkasamgraha & Nyaya-Siddhanta-Muktavali",
      "Computer Applications & Computational Sanskrit Linguistics"
    ]
  },
  {
    id: "btech_ai_data_sks",
    title: "B.Tech in Artificial Intelligence & Data Science (SKS)",
    sanskritTitle: "अभियान्त्रिकी-स्नातकः (कृत्रिमबुद्धिमत्ता संस्कृतज्ञानपरम्परा च)",
    level: "Shastri (UG)",
    duration: "4 Years (8 Semesters)",
    eligibility: "10+2 with Physics, Mathematics, and Computer Science / Sanskrit.",
    overview: "Pioneering technological program bridging Paninian formal grammar, Ashtadhyayi context-free grammars, natural language parsing, and neural language models with ancient Sanskrit manuscript corpora.",
    specializations: [
      "Sanskrit Computational Linguistics & Morphological Analyzers",
      "Knowledge Graph Representation of Shastric Treatises",
      "Neural Machine Translation for Indic Classical Languages",
      "Optical Character Recognition (OCR) for Indic Manuscripts"
    ],
    nepCredits: "160 Credits (Engineering Core + SKS Electives)",
    curriculumHighlights: [
      "Paninian Generative Grammar as Context-Free Production Rules",
      "Python for NLP & Sanskrit Dependency Treebanks",
      "Transformer Architectures & Indic LLM Fine-Tuning",
      "Deep Learning for Birch-bark & Palm-leaf Inscription Recovery"
    ]
  },
  {
    id: "llb_bharatiya_jurisprudence",
    title: "LL.B. (Hons.) in Bharatiya Jurisprudence",
    sanskritTitle: "विधि-स्नातकः (भारतीय-न्यायशास्त्रम्)",
    level: "Shastri (UG)",
    duration: "3 Years / 5-Year Integrated",
    eligibility: "Graduation in any stream or 10+2 with 50% for 5-year integrated.",
    overview: "Unique legal program merging canonical Hindu law (Dharmashastra, Vyavahara Mayukha, Mitakshara, Dayabhaga, Kautilya Arthashastra) with modern constitutional law and civil-criminal procedure.",
    specializations: [
      "Comparative Jurisprudence (Roman vs. Bharatiya)",
      "Mitakshara & Dayabhaga Property Inheritance Laws",
      "Raja Dharma & Public Governance in Arthashastra",
      "Panchayat System & Alternative Dispute Resolution (ADR)"
    ],
    nepCredits: "140 Credits (Bar Council of India + SKS Aligned)",
    curriculumHighlights: [
      "Manusmriti Vyavaharadhyaya & Yajnavalkya Smriti with Mitakshara",
      "Kautilya's Arthashastra (Adhikaranas 1 to 5)",
      "Indian Constitutional Law & Fundamental Duties (Article 51A)",
      "Evidence Law & Sanskrit Epigraphical Proof Systems"
    ]
  },
  {
    id: "acharya_ma",
    title: "Acharya (M.A. in Sanskrit Shastras)",
    sanskritTitle: "आचार्यः (स्नातकोत्तर-पाठ्यक्रमः)",
    level: "Acharya (PG)",
    duration: "2 Years (4 Semesters) / 1-Year Fast Track",
    eligibility: "Shastri, B.A. with Sanskrit, or equivalent degree from a recognized university.",
    overview: "Apex postgraduate mastery over traditional Sanskrit Shastras, qualifying candidates for doctoral research, college professorships, and national research councils.",
    specializations: [
      "Navya Nyaya (Gangesha Upadhyaya & Mathuranatha)",
      "Advaita Vedanta (Brahmasutra Shankarabhashya)",
      "Sanskrit Sahitya & Kavyashastra (Dhvanyaloka, Rasagangadhara)",
      "Siddhanta Jyotisha (Sphuta Ganita, Gola, Grahalaghava)",
      "Navya Vyakarana (Mahabhashya, Vakyapadiya, Paribhashendushekhara)"
    ],
    nepCredits: "80 - 88 Credits (Including Dissertation & Shastrartha)",
    curriculumHighlights: [
      "Brahmasutra Bhashya (Chatussutri & Adhyasa Bhashya)",
      "Dhvanyaloka of Anandavardhana with Lochana Commentary",
      "Siddhanta-Shiromani of Bhaskaracharya (Goladhyaya & Grahaganita)",
      "Panini's Ashtadhyayi with Mahabhashya (Paspashahnika)"
    ]
  },
  {
    id: "shiksha_shastri_bed",
    title: "Shiksha Shastri (B.Ed. in Sanskrit Pedagogy)",
    sanskritTitle: "शिक्षाशास्त्री (बी.एड.)",
    level: "Acharya (PG)",
    duration: "2 Years (NCTE Recognized)",
    eligibility: "Shastri, Acharya, or B.A./M.A. with Sanskrit with at least 50% marks.",
    overview: "Professional pedagogical training for Sanskrit educators, emphasizing direct conversational Sanskrit methodologies, digital audio-visual aids, and NEP 2020 teaching standards.",
    specializations: [
      "Direct Sanskrit Teaching Method (सरलसंस्कृत-शिक्षणविधिः)",
      "Educational Psychology & Classroom Management",
      "Assessment, Evaluation & Shastric Viva Voce Testing",
      "ICT Tools in Sanskrit Pedagogy"
    ],
    nepCredits: "80 Credits (NCTE Mandated)",
    curriculumHighlights: [
      "Pedagogy of Classical Languages (Sanskrit)",
      "Shastric Communication and Chhandas Recitation Training",
      "Internship in Kendriya Vidyalayas & Adarsh Sanskrit Vidyapeethas"
    ]
  },
  {
    id: "prak_shastri_intermediate",
    title: "Prak-Shastri (Intermediate / +2 Senior Secondary)",
    sanskritTitle: "प्राक्-शास्त्री (माध्यमिकोत्तर-पाठ्यक्रमः)",
    level: "Prak-Shastri",
    duration: "2 Years (4 Semesters)",
    eligibility: "10th Class / Purva-Madhyama / Matriculation with Sanskrit.",
    overview: "Foundation curriculum instilling foundational Shastric grammar, Vedic recitation, Epics (Ramayana, Mahabharata), along with English, Hindi, and Computer Education.",
    specializations: ["Vedic Studies", "Sahitya & Vyakarana", "General Shastric Stream"],
    nepCredits: "Board Equivalent (+2 Stage)",
    curriculumHighlights: [
      "Laghusiddhantakaumudi (Samjna, Sandhi, Shabda-roopa)",
      "Valmiki Ramayana (Balakanda) & Hitopadesha",
      "Bhagavad Gita (Adhyayas 1-4 with shloka chanting)",
      "Foundational English and IT Skills"
    ]
  },
  {
    id: "msp_online_courses",
    title: "Mukta Swadhyaya Peetham (MSP) Online Programs",
    sanskritTitle: "मुक्तस्वाध्यायपीठम् (स्वाध्यायवेदी दूरस्थशिक्षा)",
    level: "MSP Online / ODL",
    duration: "6 Months to 2 Years (Self-Paced / Distance Mode)",
    eligibility: "Open to all enthusiasts globally (10th/12th/Graduate depending on course).",
    overview: "Central Sanskrit University's premier online learning system via the स्वाध्यायवेदी LMS portal, offering flexible certifications for working professionals worldwide.",
    specializations: [
      "Certificate in Paurohitya & Vedic Karmakanda",
      "Diploma in Natyashastra & Sanskrit Dramaturgy",
      "Certificate in Indian Classical Vocal with Sanskrit Recital",
      "Certificate in Ayurveda Sahitya & Charaka Samhita",
      "Diploma in Jyotisha & Vastu Shastra",
      "PG Diploma in Manuscriptology & Epigraphy"
    ],
    nepCredits: "Micro-credentials (12 - 32 Credits)",
    curriculumHighlights: [
      "Online interactive lecture modules with Devanagari audio transcriptions",
      "Live Q&A with Acharyas and Traditional Scholars",
      "Automated online assignments, quizzes, and proctored terminal tests"
    ]
  },
  {
    id: "nfse_community",
    title: "Non-Formal Sanskrit Education (NFSE / सरल संस्कृत शिक्षण)",
    sanskritTitle: "अनौपचारिक-संस्कृत-शिक्षणम् (पञ्चदीक्षाः)",
    level: "NFSE Community",
    duration: "1 Year per Diksha (Evening / Weekend Batches)",
    eligibility: "No prior Sanskrit knowledge required. Open to any age above 12.",
    overview: "Nationwide movement operating at over 1,000 centers to teach spoken, conversational, and reading Sanskrit through conversational immersion without cramming grammar rules.",
    specializations: [
      "Prathama Diksha (Conversational Sanskrit & Basic Vocabulary)",
      "Dvitiya Diksha (Reading Sanskrit Literature & Subhashitas)",
      "Tritiya Diksha (Basic Shastras & Bhagavad Gita Understanding)",
      "Turiya Diksha (Upanishads & Sanskrit Writing Proficiency)",
      "Praveshika (Certificate of Sanskrit Literacy)"
    ],
    nepCredits: "Universal Certificate Recognized by Ministry of Education",
    curriculumHighlights: [
      "Vasantik Shibir & Sambhashana Shibir immersive camps",
      "Everyday dialogues, family conversations, and cultural storytelling",
      "Gradual introduction to sandhi and samasa via interactive stories"
    ]
  }
];

export const CSU_CAMPUSES: CSUCampus[] = [
  {
    id: "csu_delhi_hq",
    name: "Central Sanskrit University Headquarters",
    hindiName: "केन्द्रीय संस्कृत विश्वविद्यालय मुख्यालयः",
    location: "Janakpuri, New Delhi",
    state: "Delhi",
    established: 1970,
    specialties: ["Apex Directorate", "Mukta Swadhyaya Peetham HQ", "AI & Computational NLP Lab", "Examination & Syllabi Standards"],
    libraryManuscripts: 25000,
    description: "Central administrative nerve center coordinating academic policy, research grants, syllabus reform under NEP 2020, and computational Sanskrit research."
  },
  {
    id: "ganganath_jha_prayagraj",
    name: "Ganganath Jha Campus",
    hindiName: "गङ्गनाथ झा परिसरः",
    location: "Chandrashekhar Azad Park, Prayagraj",
    state: "Uttar Pradesh",
    established: 1934,
    specialties: ["World-Famous Manuscript Library", "Critical Editions", "Navya Nyaya & Mimamsa Research"],
    libraryManuscripts: 50000,
    description: "One of the greatest manuscript repositories in Asia, housing rare Palm-leaf and Paper pothis collected by Mahamahopadhyaya Sir Ganganath Jha."
  },
  {
    id: "shri_sadashiva_puri",
    name: "Shri Sadashiva Campus",
    hindiName: "श्रीसदाशिव परिसरः",
    location: "Puri",
    state: "Odisha",
    established: 1971,
    specialties: ["Jagannatha Culture", "Orissan Palm-leaf Epigraphy", "Shastric Debates", "Pournamasi Research Journal"],
    libraryManuscripts: 18000,
    description: "Historic coastal center specialized in Utkala Sanskrit traditions, Tantra-Agama Shastras, and traditional Jagannatha temple rituals."
  },
  {
    id: "shri_ranbir_jammu",
    name: "Shri Ranbir Campus",
    hindiName: "श्रीरणवीर परिसरः",
    location: "Kot Bhalwal, Jammu",
    state: "Jammu & Kashmir",
    established: 1971,
    specialties: ["Kashmir Shaivism (Trika)", "Sharada Script Preservation", "Himalayan Herbal Medicine & Sanskrit"],
    libraryManuscripts: 14500,
    description: "Founded to preserve the sacred legacy of Maharaja Ranbir Singh; premier center for Kashmir Shaiva philosophy and Sharada script transcription."
  },
  {
    id: "rajiv_gandhi_sringeri",
    name: "Rajiv Gandhi Campus",
    hindiName: "राजीव गान्धी परिसरः",
    location: "Menase, Sringeri",
    state: "Karnataka",
    established: 1992,
    specialties: ["Advaita Vedanta", "Vedic Chanting Preservation", "South Indian Temple Architecture"],
    libraryManuscripts: 12000,
    description: "Located in the holy seat of Adi Shankaracharya's Dakshinamnaya Peetham; leading institution in Advaita Vedanta and Vedic chanting."
  },
  {
    id: "lucknow_campus",
    name: "Lucknow Campus",
    hindiName: "लखनऊ परिसरः",
    location: "Vishal Khand, Gomti Nagar, Lucknow",
    state: "Uttar Pradesh",
    established: 1986,
    specialties: ["Vedic Bhashya", "Pauranic Studies", "Sanskrit Journalism & Mass Media"],
    libraryManuscripts: 16000,
    description: "Key center for Sanskrit journalism, public outreach, and interdisciplinary Awadh cultural research."
  },
  {
    id: "jaipur_campus",
    name: "Jaipur Campus",
    hindiName: "जयपुर परिसरः",
    location: "Triveni Nagar, Gopalpura Bypass, Jaipur",
    state: "Rajasthan",
    established: 1983,
    specialties: ["Siddhanta Jyotisha (Jantar Mantar Observational Astronomy)", "Vastu Shastra", "Dharmashastra"],
    libraryManuscripts: 19000,
    description: "Premier seat for mathematical astronomy, observational archaeo-astronomy, and classical architectural Vastu shastras."
  },
  {
    id: "bhopal_campus",
    name: "Bhopal Campus",
    hindiName: "भोपाल परिसरः",
    location: "Sanskrit Marg, Bagsewaniya, Bhopal",
    state: "Madhya Pradesh",
    established: 2002,
    specialties: ["Patanjali Yoga Studies", "Natyashastra & Performing Arts", "Sahitya"],
    libraryManuscripts: 11000,
    description: "Center for theatrical Sanskrit productions, Rasa theory, and practical Patanjali yogic sciences."
  },
  {
    id: "guruvayoor_campus",
    name: "Guruvayoor Campus",
    hindiName: "गुरुवायूर परिसरः",
    location: "Puranattukara, Thrissur",
    state: "Kerala",
    established: 1979,
    specialties: ["Kerala Mathematics School (Madhava, Nilakantha)", "Tantrasamucchaya", "Malayalam Malayalam-Sanskrit Manuscripts"],
    libraryManuscripts: 21000,
    description: "Hub for Kerala's medieval astronomy and calculus traditions, Visha Vaidya, and temple architectural rituals."
  },
  {
    id: "kj_somaiya_mumbai",
    name: "K.J. Somaiya Campus",
    hindiName: "के. जे. सोमैया परिसरः",
    location: "Vidyavihar, Mumbai",
    state: "Maharashtra",
    established: 2005,
    specialties: ["Buddhist-Jain-Sanskrit Comparative Philosophy", "Business Ethics in Sanskrit", "Modern Translations"],
    libraryManuscripts: 13500,
    description: "Cosmopolitan campus pioneering corporate ethics derived from Sanskrit treatises and inter-faith philosophical colloquia."
  },
  {
    id: "ekalavya_agartala",
    name: "Ekalavya Campus",
    hindiName: "एकलव्य परिसरः",
    location: "Radhanagar, Agartala",
    state: "Tripura",
    established: 2013,
    specialties: ["North-East Sanskrit Heritage", "Tribal Folkloric Connections with Sanskrit", "Manuscript Conservation"],
    libraryManuscripts: 6500,
    description: "Dedicated to promoting Sanskrit learning and manuscript conservation across the eight Northeastern states."
  },
  {
    id: "raghunath_kirti_devprayag",
    name: "Shri Raghunath Kirti Campus",
    hindiName: "श्रीरघुनाथ कीर्ति परिसरः",
    location: "Devprayag, Garhwal",
    state: "Uttarakhand",
    established: 2016,
    specialties: ["Himalayan Sacred Geography", "Ganga Studies", "Environmental Philosophy in Vedas"],
    libraryManuscripts: 7500,
    description: "Situated at the sacred confluence of the Bhagirathi and Alaknanda rivers; focuses on Vedic ecology and Kedarkhand epigraphy."
  },
  {
    id: "veda_vyasa_balahar",
    name: "Veda Vyasa Campus",
    hindiName: "वेदव्यास परिसरः",
    location: "Balahar, Kangra",
    state: "Himachal Pradesh",
    established: 1999,
    specialties: ["Vedic Samhita Recitation", "Kullu & Chamba Epigraphy", "Shastric Research"],
    libraryManuscripts: 9000,
    description: "Nestled in the Dhauladhar foothills; specializes in oral preservation of Vedic shakhas and hill state copper plate inscriptions."
  }
];

// ================= COMPUTATIONAL TOOLS CORPUS =================

export const SHABDA_ROOPA_CORPUS: ShabdaRoopaItem[] = [
  {
    stem: "Rama",
    devanagari: "राम",
    gender: "Masculine",
    ending: "अकारान्तः पुंल्लिङ्गः",
    meaning: "Lord Rama / Joyful Supreme Entity",
    forms: [
      { vibhakti: "Prathama (Nominative)", vibhaktiDev: "प्रथमा", singular: "रामः", dual: "रामौ", plural: "रामाः" },
      { vibhakti: "Dvitiya (Accusative)", vibhaktiDev: "द्वितीया", singular: "रामम्", dual: "रामौ", plural: "रामान्" },
      { vibhakti: "Tritiya (Instrumental)", vibhaktiDev: "तृतीया", singular: "रामेण", dual: "रामाभ्याम्", plural: "रामैः" },
      { vibhakti: "Chaturthi (Dative)", vibhaktiDev: "चतुर्थी", singular: "रामाय", dual: "रामाभ्याम्", plural: "रामेभ्यः" },
      { vibhakti: "Panchami (Ablative)", vibhaktiDev: "पञ्चमी", singular: "रामात्", dual: "रामाभ्याम्", plural: "रामेभ्यः" },
      { vibhakti: "Shasthi (Genitive)", vibhaktiDev: "षष्ठी", singular: "रामस्य", dual: "रामयोः", plural: "रामाणाम्" },
      { vibhakti: "Saptami (Locative)", vibhaktiDev: "सप्तमी", singular: "रामे", dual: "रामयोः", plural: "रामेषु" },
      { vibhakti: "Sambodhana (Vocative)", vibhaktiDev: "सम्बोधनम्", singular: "हे राम!", dual: "हे रामौ!", plural: "हे रामाः!" }
    ]
  },
  {
    stem: "Hari",
    devanagari: "हरि",
    gender: "Masculine",
    ending: "इकारान्तः पुंल्लिङ्गः",
    meaning: "Lord Vishnu / Remover of Sins",
    forms: [
      { vibhakti: "Prathama (Nominative)", vibhaktiDev: "प्रथमा", singular: "हरिः", dual: "हरी", plural: "हरयः" },
      { vibhakti: "Dvitiya (Accusative)", vibhaktiDev: "द्वितीया", singular: "हरिम्", dual: "हरी", plural: "हरीन्" },
      { vibhakti: "Tritiya (Instrumental)", vibhaktiDev: "तृतीया", singular: "हरिणा", dual: "हरिभ्याम्", plural: "हरिभिः" },
      { vibhakti: "Chaturthi (Dative)", vibhaktiDev: "चतुर्थी", singular: "हरये", dual: "हरिभ्याम्", plural: "हरिभ्यः" },
      { vibhakti: "Panchami (Ablative)", vibhaktiDev: "पञ्चमी", singular: "हरेः", dual: "हरिभ्याम्", plural: "हरिभ्यः" },
      { vibhakti: "Shasthi (Genitive)", vibhaktiDev: "षष्ठी", singular: "हरेः", dual: "हर्योः", plural: "हरीणाम्" },
      { vibhakti: "Saptami (Locative)", vibhaktiDev: "सप्तमी", singular: "हरौ", dual: "हर्योः", plural: "हरिषु" },
      { vibhakti: "Sambodhana (Vocative)", vibhaktiDev: "सम्बोधनम्", singular: "हे हरे!", dual: "हे हरी!", plural: "हे हरयः!" }
    ]
  },
  {
    stem: "Guru",
    devanagari: "गुरु",
    gender: "Masculine",
    ending: "उकारान्तः पुंल्लिङ्गः",
    meaning: "Spiritual Teacher / Heavy / Venerable",
    forms: [
      { vibhakti: "Prathama (Nominative)", vibhaktiDev: "प्रथमा", singular: "गुरुः", dual: "गुरू", plural: "गुरवः" },
      { vibhakti: "Dvitiya (Accusative)", vibhaktiDev: "द्वितीया", singular: "गुरुम्", dual: "गुरू", plural: "गुरून्" },
      { vibhakti: "Tritiya (Instrumental)", vibhaktiDev: "तृतीया", singular: "गुरुणा", dual: "गुरुभ्याम्", plural: "गुरुभिः" },
      { vibhakti: "Chaturthi (Dative)", vibhaktiDev: "चतुर्थी", singular: "गुरवे", dual: "गुरुभ्याम्", plural: "गुरुभ्यः" },
      { vibhakti: "Panchami (Ablative)", vibhaktiDev: "पञ्चमी", singular: "गुरोः", dual: "गुरुभ्याम्", plural: "गुरुभ्यः" },
      { vibhakti: "Shasthi (Genitive)", vibhaktiDev: "षष्ठी", singular: "गुरोः", dual: "गुर्वोः", plural: "गुरुणाम्" },
      { vibhakti: "Saptami (Locative)", vibhaktiDev: "सप्तमी", singular: "गुरौ", dual: "गुर्वोः", plural: "गुरुषु" },
      { vibhakti: "Sambodhana (Vocative)", vibhaktiDev: "सम्बोधनम्", singular: "हे गुरो!", dual: "हे गुरू!", plural: "हे गुरवः!" }
    ]
  },
  {
    stem: "Lata",
    devanagari: "लता",
    gender: "Feminine",
    ending: "आकारान्तः स्त्रीलिङ्गः",
    meaning: "Creeper / Vine / Slender Grace",
    forms: [
      { vibhakti: "Prathama (Nominative)", vibhaktiDev: "प्रथमा", singular: "लता", dual: "लते", plural: "लताः" },
      { vibhakti: "Dvitiya (Accusative)", vibhaktiDev: "द्वितीया", singular: "लताम्", dual: "लते", plural: "लताः" },
      { vibhakti: "Tritiya (Instrumental)", vibhaktiDev: "तृतीया", singular: "लतया", dual: "लताभ्याम्", plural: "लताभिः" },
      { vibhakti: "Chaturthi (Dative)", vibhaktiDev: "चतुर्थी", singular: "लतायै", dual: "लताभ्याम्", plural: "लताभ्यः" },
      { vibhakti: "Panchami (Ablative)", vibhaktiDev: "पञ्चमी", singular: "लतायाः", dual: "लताभ्याम्", plural: "लताभ्यः" },
      { vibhakti: "Shasthi (Genitive)", vibhaktiDev: "षष्ठी", singular: "लतायाः", dual: "लतयोः", plural: "लतानाम्" },
      { vibhakti: "Saptami (Locative)", vibhaktiDev: "सप्तमी", singular: "लतायाम्", dual: "लतयोः", plural: "लतासु" },
      { vibhakti: "Sambodhana (Vocative)", vibhaktiDev: "सम्बोधनम्", singular: "हे लते!", dual: "हे लते!", plural: "हे लताः!" }
    ]
  },
  {
    stem: "Nadi",
    devanagari: "नदी",
    gender: "Feminine",
    ending: "ईकारान्तः स्त्रीलिङ्गः",
    meaning: "Sacred River / Flowing Water",
    forms: [
      { vibhakti: "Prathama (Nominative)", vibhaktiDev: "प्रथमा", singular: "नदी", dual: "नद्यौ", plural: "नद्यः" },
      { vibhakti: "Dvitiya (Accusative)", vibhaktiDev: "द्वितीया", singular: "नदीम्", dual: "नद्यौ", plural: "नदीः" },
      { vibhakti: "Tritiya (Instrumental)", vibhaktiDev: "तृतीया", singular: "नद्या", dual: "नदीभ्याम्", plural: "नदीभिः" },
      { vibhakti: "Chaturthi (Dative)", vibhaktiDev: "चतुर्थी", singular: "नद्यै", dual: "नदीभ्याम्", plural: "नदीभ्यः" },
      { vibhakti: "Panchami (Ablative)", vibhaktiDev: "पञ्चमी", singular: "नद्याः", dual: "नदीभ्याम्", plural: "नदीभ्यः" },
      { vibhakti: "Shasthi (Genitive)", vibhaktiDev: "षष्ठी", singular: "नद्याः", dual: "नद्योः", plural: "नदीनाम्" },
      { vibhakti: "Saptami (Locative)", vibhaktiDev: "सप्तमी", singular: "नद्याम्", dual: "नद्योः", plural: "नदीषु" },
      { vibhakti: "Sambodhana (Vocative)", vibhaktiDev: "सम्बोधनम्", singular: "हे नदि!", dual: "हे नद्यौ!", plural: "हे नद्यः!" }
    ]
  },
  {
    stem: "Phala",
    devanagari: "फल",
    gender: "Neuter",
    ending: "अकारान्तः नपुंसकलिङ्गः",
    meaning: "Fruit / Result / Karma Phala",
    forms: [
      { vibhakti: "Prathama (Nominative)", vibhaktiDev: "प्रथमा", singular: "फलम्", dual: "फले", plural: "फलानि" },
      { vibhakti: "Dvitiya (Accusative)", vibhaktiDev: "द्वितीया", singular: "फलम्", dual: "फले", plural: "फलानि" },
      { vibhakti: "Tritiya (Instrumental)", vibhaktiDev: "तृतीया", singular: "फलेन", dual: "फलाभ्याम्", plural: "फलैः" },
      { vibhakti: "Chaturthi (Dative)", vibhaktiDev: "चतुर्थी", singular: "फलाय", dual: "फलाभ्याम्", plural: "फलेभ्यः" },
      { vibhakti: "Panchami (Ablative)", vibhaktiDev: "पञ्चमी", singular: "फलात्", dual: "फलाभ्याम्", plural: "फलेभ्यः" },
      { vibhakti: "Shasthi (Genitive)", vibhaktiDev: "षष्ठी", singular: "फलस्य", dual: "फलयोः", plural: "फलानाम्" },
      { vibhakti: "Saptami (Locative)", vibhaktiDev: "सप्तमी", singular: "फले", dual: "फलयोः", plural: "फलेषु" },
      { vibhakti: "Sambodhana (Vocative)", vibhaktiDev: "सम्बोधनम्", singular: "हे फल!", dual: "हे फले!", plural: "हे फलानि!" }
    ]
  },
  {
    stem: "Asmad",
    devanagari: "अस्मद् (अहम्)",
    gender: "Pronoun",
    ending: "सर्वनाम त्रिषु लिङ्गेषु समानम्",
    meaning: "First Person Pronoun (I, We Two, We All)",
    forms: [
      { vibhakti: "Prathama (Nominative)", vibhaktiDev: "प्रथमा", singular: "अहम्", dual: "आवाम्", plural: "वयम्" },
      { vibhakti: "Dvitiya (Accusative)", vibhaktiDev: "द्वितीया", singular: "माम् / मा", dual: "आवाम् / नौ", plural: "अस्मान् / नः" },
      { vibhakti: "Tritiya (Instrumental)", vibhaktiDev: "तृतीया", singular: "मया", dual: "आवाभ्याम्", plural: "अस्माभिः" },
      { vibhakti: "Chaturthi (Dative)", vibhaktiDev: "चतुर्थी", singular: "मह्यम् / मे", dual: "आवाभ्याम् / नौ", plural: "अस्मभ्यम् / नः" },
      { vibhakti: "Panchami (Ablative)", vibhaktiDev: "पञ्चमी", singular: "मत्", dual: "आवाभ्याम्", plural: "अस्मत्" },
      { vibhakti: "Shasthi (Genitive)", vibhaktiDev: "षष्ठी", singular: "मम / मे", dual: "आवयोः / नौ", plural: "अस्माकम् / नः" },
      { vibhakti: "Saptami (Locative)", vibhaktiDev: "सप्तमी", singular: "मयि", dual: "आवयोः", plural: "अस्मासु" },
      { vibhakti: "Sambodhana (Vocative)", vibhaktiDev: "सम्बोधनम्", singular: "—", dual: "—", plural: "—" }
    ]
  },
  {
    stem: "Yushmad",
    devanagari: "युष्मद् (त्वम्)",
    gender: "Pronoun",
    ending: "सर्वनाम त्रिषु लिङ्गेषु समानम्",
    meaning: "Second Person Pronoun (Thou, You Two, You All)",
    forms: [
      { vibhakti: "Prathama (Nominative)", vibhaktiDev: "प्रथमा", singular: "त्वम्", dual: "युवाम्", plural: "यूयम्" },
      { vibhakti: "Dvitiya (Accusative)", vibhaktiDev: "द्वितीया", singular: "त्वाम् / त्वा", dual: "युवाम् / वाम्", plural: "युष्मान् / वः" },
      { vibhakti: "Tritiya (Instrumental)", vibhaktiDev: "तृतीया", singular: "त्वया", dual: "युवाभ्याम्", plural: "युष्माभिः" },
      { vibhakti: "Chaturthi (Dative)", vibhaktiDev: "चतुर्थी", singular: "तुभ्यम् / ते", dual: "युवाभ्याम् / वाम्", plural: "युष्मभ्यम् / वः" },
      { vibhakti: "Panchami (Ablative)", vibhaktiDev: "पञ्चमी", singular: "त्वत्", dual: "युवाभ्याम्", plural: "युष्मत्" },
      { vibhakti: "Shasthi (Genitive)", vibhaktiDev: "षष्ठी", singular: "तव / ते", dual: "युवयोः / वाम्", plural: "युष्माकम् / वः" },
      { vibhakti: "Saptami (Locative)", vibhaktiDev: "सप्तमी", singular: "त्वयि", dual: "युवयोः", plural: "युष्मासु" },
      { vibhakti: "Sambodhana (Vocative)", vibhaktiDev: "सम्बोधनम्", singular: "—", dual: "—", plural: "—" }
    ]
  }
];

export const DHATU_ROOPA_CORPUS: DhatuRoopaItem[] = [
  {
    dhatu: "Bhu (Bhavati)",
    devanagari: "भू (सत्तायाम्)",
    gana: "भ्वादिगणः (गण १)",
    meaning: "To be, to exist, to become",
    pada: "Parasmaipada",
    forms: [
      {
        lakara: "Lat Lakara (लट्लकारः - Present Tense)",
        lakaraDesc: "वर्तमानकाले लट्",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "भवति", dual: "भवतः", plural: "भवन्ति" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "भवसि", dual: "भवथः", plural: "भवथ" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "भवामि", dual: "भवावः", plural: "भवामः" }
        ]
      },
      {
        lakara: "Lrt Lakara (लृट्लकारः - Simple Future)",
        lakaraDesc: "अनद्यतने भविष्यति लृट्",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "भविष्यति", dual: "भविष्यतः", plural: "भविष्यन्ति" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "भविष्यसि", dual: "भविष्यथः", plural: "भविष्यथ" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "भविष्यामि", dual: "भविष्यावः", plural: "भविष्यामः" }
        ]
      },
      {
        lakara: "Lan Lakara (लङ्लकारः - Imperfect Past)",
        lakaraDesc: "अनद्यतने भूते लङ्",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "अभवत्", dual: "अभवताम्", plural: "अभवन्" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "अभवः", dual: "अभवतम्", plural: "अभवत" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "अभवम्", dual: "अभवाव", plural: "अभवाम" }
        ]
      },
      {
        lakara: "Lot Lakara (लोट्लकारः - Imperative / Command)",
        lakaraDesc: "आज्ञा-प्रार्थनादौ लोट्",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "भवतु / भवतात्", dual: "भवताम्", plural: "भवन्तु" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "भव / भवतात्", dual: "भवतम्", plural: "भवत" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "भवानि", dual: "भवाव", plural: "भवाम" }
        ]
      },
      {
        lakara: "Vidhilin Lakara (विधिलिङ्लकारः - Potential / Optative)",
        lakaraDesc: "विधिनिमन्त्रणादौ लिङ्",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "भवेत्", dual: "भवेताम्", plural: "भवेयुः" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "भवेः", dual: "भवेतम्", plural: "भवेत" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "भवेयम्", dual: "भवेव", plural: "भवेम" }
        ]
      }
    ]
  },
  {
    dhatu: "Path (Pathati)",
    devanagari: "पठ् (व्यक्तायां वाचि)",
    gana: "भ्वादिगणः (गण १)",
    meaning: "To read, study, recite",
    pada: "Parasmaipada",
    forms: [
      {
        lakara: "Lat Lakara (लट्लकारः - Present Tense)",
        lakaraDesc: "वर्तमानकाले लट्",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "पठति", dual: "पठतः", plural: "पठन्ति" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "पठसि", dual: "पठथः", plural: "पठथ" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "पठामि", dual: "पठावः", plural: "पठामः" }
        ]
      },
      {
        lakara: "Lrt Lakara (लृट्लकारः - Simple Future)",
        lakaraDesc: "अनद्यतने भविष्यति लृट्",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "पठिष्यति", dual: "पठिष्यतः", plural: "पठिष्यन्ति" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "पठिष्यसि", dual: "पठिष्यथः", plural: "पठिष्यथ" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "पठिष्यामि", dual: "पठिष्यावः", plural: "पठिष्यामः" }
        ]
      },
      {
        lakara: "Lot Lakara (लोट्लकारः - Imperative / Request)",
        lakaraDesc: "आज्ञार्थे लोट्",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "पठतु", dual: "पठताम्", plural: "पठन्तु" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "पठ", dual: "पठतम्", plural: "पठत" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "पठानि", dual: "पठाव", plural: "पठाम" }
        ]
      }
    ]
  },
  {
    dhatu: "Kru (Karoti / Kurute)",
    devanagari: "कृ (करणे)",
    gana: "तनादिगणः (गण ८)",
    meaning: "To do, act, perform karma",
    pada: "Ubhayapada",
    forms: [
      {
        lakara: "Lat Lakara (लट्लकारः - Present Tense Parasmaipada)",
        lakaraDesc: "वर्तमानकाले लट् (परस्मैपदम्)",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "करोति", dual: "कुरुतः", plural: "कुर्वन्ति" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "करोषि", dual: "कुरुथः", plural: "कुरुथ" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "करोमि", dual: "कुर्वः", plural: "कुर्मः" }
        ]
      },
      {
        lakara: "Lat Lakara (लट्लकारः - Present Tense Atmanepada)",
        lakaraDesc: "वर्तमानकाले लट् (आत्मनेपदम्)",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "कुरुते", dual: "कुर्वाते", plural: "कुर्वते" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "कुरुषे", dual: "कुर्वाथे", plural: "कुरुध्वे" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "कुर्वे", dual: "कुर्वहे", plural: "कुर्महे" }
        ]
      }
    ]
  },
  {
    dhatu: "Sev (Sevate)",
    devanagari: "सेव् (सेवायाम्)",
    gana: "भ्वादिगणः (गण १)",
    meaning: "To serve, attend upon, revere",
    pada: "Atmanepada",
    forms: [
      {
        lakara: "Lat Lakara (लट्लकारः - Present Tense Atmanepada)",
        lakaraDesc: "वर्तमानकाले लट्",
        rows: [
          { purusha: "Prathama", purushaDev: "प्रथमपुरुषः (अन्य)", singular: "सेवते", dual: "सेवेते", plural: "सेवन्ते" },
          { purusha: "Madhyama", purushaDev: "मध्यमपुरुषः (युष्मद्)", singular: "सेवसे", dual: "सेवेथे", plural: "सेवध्वे" },
          { purusha: "Uttama", purushaDev: "उत्तमपुरुषः (अस्मद्)", singular: "सेवे", dual: "सेवावहे", plural: "सेवामहे" }
        ]
      }
    ]
  }
];

export const SANDHI_RULES_CORPUS: SandhiRule[] = [
  {
    id: "dirgha_sandhi",
    name: "Dirgha Sandhi (Long Vowel Coalescence)",
    sanskritName: "दीर्घसन्धिः",
    sutra: "अकः सवर्णे दीर्घः (६.१.१०१)",
    category: "Svara (Ac)",
    explanation: "When a simple vowel (अ, इ, उ, ऋ, ऌ) is followed by a homogeneous vowel (सवर्णे), both merge into the corresponding single long vowel (आ, ई, ऊ, ॠ).",
    examples: [
      { word1: "हिम", word2: "आलयः", combined: "हिमालयः", breakdown: "अ + आ = आ" },
      { word1: "विद्या", word2: "अर्थी", combined: "विद्यार्थी", breakdown: "आ + अ = आ" },
      { word1: "कपि", word2: "ईशः", combined: "कपीशः", breakdown: "इ + ई = ई" },
      { word1: "भानु", word2: "उदयः", combined: "भानूदयः", breakdown: "उ + उ = ऊ" },
      { word1: "पितृ", word2: "ऋणम्", combined: "पितॄणम्", breakdown: "ऋ + ऋ = ॠ" }
    ]
  },
  {
    id: "guna_sandhi",
    name: "Guna Sandhi",
    sanskritName: "गुणसन्धिः",
    sutra: "आद्गुणः (६.१.८७)",
    category: "Svara (Ac)",
    explanation: "When short or long अ/आ is followed by इ/ई, उ/ऊ, or ऋ/ॠ, the two merge into ए, ओ, or अर् respectively.",
    examples: [
      { word1: "नर", word2: "इन्द्रः", combined: "नरेन्द्रः", breakdown: "अ + इ = ए" },
      { word1: "महा", word2: "ईशः", combined: "महेशः", breakdown: "आ + ई = ए" },
      { word1: "सूर्य", word2: "उदयः", combined: "सूर्योदयः", breakdown: "अ + उ = ओ" },
      { word1: "महा", word2: "ऋषिः", combined: "महर्षिः", breakdown: "आ + ऋ = अर्" }
    ]
  },
  {
    id: "vriddhi_sandhi",
    name: "Vriddhi Sandhi",
    sanskritName: "वृद्धिसन्धिः",
    sutra: "वृद्धिरेचि (६.१.८८)",
    category: "Svara (Ac)",
    explanation: "When short or long अ/आ is followed by a diphthong (ए, ऐ, ओ, औ), both merge into the corresponding Vriddhi vowel (ऐ or औ).",
    examples: [
      { word1: "एक", word2: "एकम्", combined: "एकैकम्", breakdown: "अ + ए = ऐ" },
      { word1: "सदा", word2: "एव", combined: "सदैव", breakdown: "आ + ए = ऐ" },
      { word1: "जल", word2: "ओघः", combined: "जलौघः", breakdown: "अ + ओ = औ" },
      { word1: "महा", word2: "औषधम्", combined: "महौषधम्", breakdown: "आ + औ = औ" }
    ]
  },
  {
    id: "yan_sandhi",
    name: "Yan Sandhi (Semivowel Substitution)",
    sanskritName: "यण्सन्धिः",
    sutra: "इको यणचि (६.१.७७)",
    category: "Svara (Ac)",
    explanation: "When इ/ई, उ/ऊ, or ऋ/ॠ are followed by any dissimilar vowel, they are replaced by य्, व्, or र् respectively.",
    examples: [
      { word1: "यदि", word2: "अपि", combined: "यद्यपि", breakdown: "इ + अ = य् + अ = य" },
      { word1: "इति", word2: "आदि", combined: "इत्यादि", breakdown: "इ + आ = य् + आ = या" },
      { word1: "सु", word2: "आगतम्", combined: "स्वागतम्", breakdown: "उ + आ = व् + आ = वा" },
      { word1: "मातृ", word2: "आज्ञा", combined: "मात्राज्ञा", breakdown: "ऋ + आ = र् + आ = रा" }
    ]
  },
  {
    id: "ayadi_sandhi",
    name: "Ayadi Sandhi",
    sanskritName: "अयादिसन्धिः",
    sutra: "एचोऽयवायावः (६.१.७८)",
    category: "Svara (Ac)",
    explanation: "When ए, ऐ, ओ, औ are followed by any vowel, they are replaced by अय्, आय्, अव्, and आव् respectively.",
    examples: [
      { word1: "ने", word2: "अनम्", combined: "नयनम्", breakdown: "ए + अ = अय् + अ = अय" },
      { word1: "गै", word2: "अकः", combined: "गायकः", breakdown: "ऐ + अ = आय् + अ = आय" },
      { word1: "पो", word2: "अनः", combined: "पवनः", breakdown: "ओ + अ = अव् + अ = अव" },
      { word1: "पौ", word2: "अकः", combined: "पावकः", breakdown: "औ + अ = आव् + अ = आव" }
    ]
  },
  {
    id: "purvarupa_sandhi",
    name: "Purvarupa Sandhi",
    sanskritName: "पूर्वरूपसन्धिः",
    sutra: "एङः पदान्तादति (६.१.१०९)",
    category: "Svara (Ac)",
    explanation: "When a word ending in ए or ओ is followed by short अ, the short अ is absorbed into the preceding vowel and represented orthographically by Avagraha (ऽ).",
    examples: [
      { word1: "हरे", word2: "अव", combined: "हरेऽव", breakdown: "ए + अ = एऽ" },
      { word1: "विष्णो", word2: "अव", combined: "विष्णोऽव", breakdown: "ओ + अ = ओऽ" },
      { word1: "ते", word2: "अपि", combined: "तेऽपि", breakdown: "ए + अ = एऽ" }
    ]
  },
  {
    id: "schutva_sandhi",
    name: "Schutva Sandhi (Palatalization)",
    sanskritName: "श्चुत्वसन्धिः",
    sutra: "स्तोः श्चुना श्चुः (८.४.४०)",
    category: "Vyanjana (Hal)",
    explanation: "When dental letters (स् or त्-वर्ग) come in contact with palatal letters (श् or च्-वर्ग), dentals convert into corresponding palatals (स् -> श्, त् -> च्, थ् -> छ्, द् -> ज्, ध् -> झ्, न् -> ञ्).",
    examples: [
      { word1: "सत्", word2: "चित्", combined: "सच्चित्", breakdown: "त् + च् = च्च" },
      { word1: "कस्", word2: "चित्", combined: "कश्चित्", breakdown: "स् + च् = श्च" },
      { word1: "सत्", word2: "जनः", combined: "सज्जनः", breakdown: "त् + ज् = ज्ज" }
    ]
  },
  {
    id: "jashthva_sandhi",
    name: "Jashthva Sandhi (Voicing)",
    sanskritName: "जश्त्वसन्धिः",
    sutra: "झलां जशोऽन्ते (८.२.३९)",
    category: "Vyanjana (Hal)",
    explanation: "At the end of a word or before soft consonants/vowels, non-nasal consonants (झल्) are replaced by the 3rd unaspirated voiced stop (जश्: ब्, ज्, ड्, द्, ग्).",
    examples: [
      { word1: "वाक्", word2: "ईशः", combined: "वागीशः", breakdown: "क् -> ग्" },
      { word1: "जगत्", word2: "ईशः", combined: "जगदीशः", breakdown: "त् -> द्" },
      { word1: "अच्", word2: "अन्तः", combined: "अजन्ततः", breakdown: "च् -> ज्" }
    ]
  },
  {
    id: "visarga_utva",
    name: "Visarga Utva & O-Kāra",
    sanskritName: "विसर्ग-उत्वसन्धिः",
    sutra: "अतो रोरप्लुतादप्लुते (६.१.११३) / हशि च (६.१.११४)",
    category: "Visarga",
    explanation: "When Visarga is preceded by short 'अ' and followed by short 'अ' or a voiced consonant (हश्), it transforms to 'उ', merging with 'अ' to form 'ओ'.",
    examples: [
      { word1: "बालः", word2: "अयम्", combined: "बालोऽयम्", breakdown: "अः + अ -> ओऽ" },
      { word1: "शिवः", word2: "वन्द्यः", combined: "शिवो वन्द्यः", breakdown: "अः + व् -> ओ" },
      { word1: "रामः", word2: "गच्छति", combined: "रामो गच्छति", breakdown: "अः + ग् -> ओ" }
    ]
  }
];

export const CHHANDAS_METERS_CORPUS: ChhandasMeter[] = [
  {
    name: "Anushtubh (Shloka)",
    devanagari: "अनुष्टुभ् (श्लोकः)",
    category: "Varna-Vritta",
    pattern: "8 syllables per pada (32 total). 5th syllable Laghu, 6th Guru in all quarters; 7th Laghu in 2nd and 4th quarters.",
    syllablesPerPada: 8,
    totalPadas: 4,
    yati: "At the end of each Pada (8 syllables)",
    lakshanaSanskrit: "श्लोके षष्ठं गुरु ज्ञेयं सर्वत्र लघु पञ्चमम् । द्विचतुष्पादयोर्ह्रस्वं सप्तमं दीर्घमन्ययोः ॥",
    exampleShloka: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥",
    exampleTranslation: "Whenever there is a decline in righteousness, O Bharata, and an uprising of unrighteousness, then I manifest Myself."
  },
  {
    name: "Indravajra",
    devanagari: "इन्द्रवज्रा",
    category: "Varna-Vritta",
    pattern: "त-त-ज-ग-ग (ऽ ऽ । ऽ ऽ । । ऽ । ऽ ऽ)",
    syllablesPerPada: 11,
    totalPadas: 4,
    yati: "At the end of Pada (11 syllables)",
    lakshanaSanskrit: "स्यादिन्द्रवज्रा यदि तौ जगौ गः ।",
    exampleShloka: "अर्थो हि कन्या परकीय एव तामद्य संप्रेष्य परिग्रहीतुः ।\nजातो ममायं विशदः प्रकामं प्रत्यर्पितन्यास इवान्तरात्मा ॥",
    exampleTranslation: "A daughter is indeed someone else's treasure; having sent her today to her husband, my inner soul feels utterly at peace, like returning a sacred deposit."
  },
  {
    name: "Upendravajra",
    devanagari: "उपेन्द्रवज्रा",
    category: "Varna-Vritta",
    pattern: "ज-त-ज-ग-ग (। ऽ । ऽ ऽ । । ऽ । ऽ ऽ)",
    syllablesPerPada: 11,
    totalPadas: 4,
    yati: "At the end of Pada (11 syllables)",
    lakshanaSanskrit: "उपेन्द्रवज्रा जतजास्ततो गौ ।",
    exampleShloka: "त्वमेव माता च पिता त्वमेव त्वमेव बन्धुश्च सखा त्वमेव ।\nत्वमेव विद्या द्रविणं त्वमेव त्वमेव सर्वं मम देवदेव ॥",
    exampleTranslation: "Thou alone art mother and father; Thou alone art kin and companion; Thou art knowledge and wealth; Thou art all to me, O God of gods."
  },
  {
    name: "Vasantatilaka",
    devanagari: "वसन्ततिलका",
    category: "Varna-Vritta",
    pattern: "त-भ-ज-ज-ग-ग (ऽ ऽ । ऽ । । । ऽ । । ऽ । ऽ ऽ)",
    syllablesPerPada: 14,
    totalPadas: 4,
    yati: "At 8th and 6th syllables",
    lakshanaSanskrit: "उक्ता वसन्ततिलका तभजा जगौ गः ।",
    exampleShloka: "पापान्निवारयति योजयते हिताय गुह्यं च गूहति गुणान्प्रकटीकरोति ।\nआपद्गतं च न जहाति ददाति काले सन्मित्रलक्षणमिदं प्रवदन्ति सन्तः ॥",
    exampleTranslation: "A true friend turns one away from sin, guides to virtue, conceals secrets, proclaims good qualities, does not abandon in adversity, and gives at the right time."
  },
  {
    name: "Mandakranta",
    devanagari: "मन्दाक्रान्ता",
    category: "Varna-Vritta",
    pattern: "म-भ-न-त-त-ग-ग (ऽ ऽ ऽ ऽ । । । । । ऽ ऽ । ऽ ऽ । ऽ ऽ)",
    syllablesPerPada: 17,
    totalPadas: 4,
    yati: "At 4th, 6th, and 7th syllables (4, 10, 17)",
    lakshanaSanskrit: "मन्दाक्रान्ता जलधिषडगैर्भौ नतौ ताद्गुरू चेत् ।",
    exampleShloka: "कश्चित्कान्ताविरहगुरुणा स्वाधिकारात्प्रमत्ततः\nशापेनास्तंगमितमहिमा वर्षभोग्येण भर्तुः ।\nयक्षश्चक्रे जनकतनयास्नानपुण्योदकेषु\nस्निग्धच्छायातरुषु वसतिं रामगिर्याश्रमेशु ॥",
    exampleTranslation: "A certain Yaksha, negligent in his duties and stripped of his splendor by his lord's curse lasting a year, took abode in the hermitage of Ramagiri shaded by friendly trees."
  },
  {
    name: "Shardulavikridita",
    devanagari: "शार्दूलविक्रीडितम्",
    category: "Varna-Vritta",
    pattern: "म-स-ज-स-त-त-ग (ऽ ऽ ऽ । । ऽ । ऽ । । । ऽ ऽ ऽ । ऽ ऽ । ऽ)",
    syllablesPerPada: 19,
    totalPadas: 4,
    yati: "At 12th and 7th syllables (12, 19)",
    lakshanaSanskrit: "सूर्याश्वैर्मसजस्ततः सगुरवः शार्दूलविक्रीडितम् ।",
    exampleShloka: "केयूरा न विभूषयन्ति पुरुषं हारा न चन्द्रोज्ज्वला\nन स्नानं न विलेपनं न कुसुमं नालंकृता मूर्धजाः ।\nवाण्येका समलङ्करोति पुरुषं या संस्कृता धार्यते\nक्षीयन्ते खलु भूषणानि सततं वाग्भूषणं भूषणम् ॥",
    exampleTranslation: "Bracelets do not adorn a person, nor moon-bright pearl necklaces, nor baths, unguents, flowers, or coiffed hair; it is refined speech alone that truly ornaments one; external jewels perish, but the jewel of speech endures forever."
  }
];

export const AMARAKOSHA_LEXICON: AmarakoshaWord[] = [
  {
    word: "Surya",
    stem: "सूर्य",
    gender: "पुंल्लिङ्गः",
    synonyms: ["आदित्य", "सविता", "भानु", "खग", "पूषन्", "गभस्तिहस्त", "अर्क", "दिवाकर", "मार्तण्ड", "प्रभाकर", "विभावसु", "दिनकर"],
    englishMeaning: "Sun, solar deity, creator of daylight and astronomical cycle",
    varga: "Digvarga / Svargavarga",
    kanda: "Prathama Kanda",
    shlokaReference: "सूरूर्योऽर्यमा भगः पूषा सविता भास्करो रविः । विरोचनो दिनकृतद्वादशात्मा दिवाकरः ॥"
  },
  {
    word: "Agni",
    stem: "अग्नि",
    gender: "पुंल्लिङ्गः",
    synonyms: ["वह्नि", "वैश्वानर", "हुताशन", "पावक", "अनिलसख", "दहन", "चित्रभानु", "हव्यवाहन", "शुचि", "जातवेदस्"],
    englishMeaning: "Fire, divine sacred sacrificial flame, hot elemental radiance",
    varga: "Svargavarga",
    kanda: "Prathama Kanda",
    shlokaReference: "अग्निर्वैश्वानरो वह्निर्वितिहोत्रो धनञ्जयः । कृपीटयोनिर्ज्वलनो जातवेदास्तनू नपात् ॥"
  },
  {
    word: "Jala",
    stem: "जल",
    gender: "नपुंसकलिङ्गः",
    synonyms: ["वारि", "तोय", "पयस्", "अम्बु", "सलिल", "उदक", "अमृत", "जीवन", "आपः", "पानीयं"],
    englishMeaning: "Water, primordial fluid element, sustaining essence of life",
    varga: "Varivarga",
    kanda: "Prathama Kanda",
    shlokaReference: "पानीयं नीरमुदकं तोयं सलिलमम्बु च । मेघपुष्पं घनरसो वारि क्षीरं पयोऽमृतम् ॥"
  },
  {
    word: "Prithvi",
    stem: "पृथिवी",
    gender: "स्त्रीलिङ्गः",
    synonyms: ["भू", "भूमि", "अचला", "अनन्ता", "रसा", "विश्वम्भरा", "स्थिरा", "धरा", "धरित्री", "धरणी", "क्षमा", "ज्या"],
    englishMeaning: "Earth, terrestrial planet, all-bearing soil, steadfast mother nature",
    varga: "Bhumivarga",
    kanda: "Dvitiya Kanda",
    shlokaReference: "भूभूमिर्महल्या गोत्रा पृथिवी पृथिवी रसा । अवनी मेदिनी मही विश्वम्भरा स्थिरा ॥"
  },
  {
    word: "Vidyut",
    stem: "विद्युत्",
    gender: "स्त्रीलिङ्गः",
    synonyms: ["तडित्", "सौदामिनी", "चपला", "चञ्चला", "अचिरप्रभा", "क्षणप्रभा", "इन्द्रवज्रा"],
    englishMeaning: "Lightning, electrical spark, flash of celestial radiance",
    varga: "Svargavarga",
    kanda: "Prathama Kanda",
    shlokaReference: "विद्युत्सौदामनी चम्पकाभा तडित्तथा । क्षणप्रभा चपला च चञ्चलाऽचिररोचिषा ॥"
  }
];

export const CSU_PUBLICATIONS: CSUPublication[] = [
  {
    title: "Shodha-Pravaha (शोधप्रवाहः)",
    devanagari: "शोधप्रवाहः (त्रैमासिकी शोधपत्रिका)",
    type: "Research Journal",
    editorOrAuthor: "Central Sanskrit University Editorial Board (Chief Editor: Vice Chancellor)",
    yearOrFrequency: "Quarterly (UGC-CARE Listed)",
    description: "Premier double-blind peer-reviewed international research journal publishing high-impact original papers in Sanskrit across all Darshanas, Epigraphy, Manuscriptology, and Computational Sanskrit.",
    volumeInfo: "Over 60 volumes published with international indexing"
  },
  {
    title: "Sanskrit Encyclopedic Dictionary (35 Volumes)",
    devanagari: "ऐतिहासिक-संस्कृत-महाकोशः (डेक्कन कॉलेज सहभागिता)",
    type: "Dictionary",
    editorOrAuthor: "Collaborative project: Central Sanskrit University & Deccan College Pune",
    yearOrFrequency: "Continuous Monumental Project (Initiated 1948 - Ongoing)",
    description: "The world's largest lexicographical project containing over 2.2 million vocables chronologically extracted from 1500+ ancient texts spanning 3,500 years of Sanskrit literature.",
    volumeInfo: "35 Large Quarto Volumes in progress with live digital concordance"
  },
  {
    title: "Pournamasi Research Journal (पौर्णमासी)",
    devanagari: "पौर्णमासी (श्रीसदाशिव परिसर पत्रिका)",
    type: "Research Journal",
    editorOrAuthor: "Shri Sadashiva Campus, Puri",
    yearOrFrequency: "Bi-Annual",
    description: "Specialized scholarly journal publishing Indological research on Jagannatha temple epigraphy, Orissan Shastric traditions, and Vaisheshika logic.",
    volumeInfo: "30+ years continuous publication"
  },
  {
    title: "Sanskrit Vangmaya Critical Series",
    devanagari: "संस्कृतवाङ्मय-ग्रन्थमाला (केन्द्रीय संस्कृत विश्वविद्यालयः)",
    type: "Critical Edition",
    editorOrAuthor: "CSU Rare Manuscript Directorate",
    yearOrFrequency: "500+ Monograph Titles",
    description: "Critical editions of unpublished palm-leaf manuscripts from the Ganganath Jha and Ranbir collections with photolithographic plates and variant readings.",
    volumeInfo: "Over 500 published critical editions in open access"
  }
];

export const CSU_OLYMPIAD_QUESTIONS: CSUOlympiadQuestion[] = [
  {
    id: 1,
    question: "Which Paninian sutra prescribes the coalescence of homogeneous simple vowels into a single long vowel (Dirgha Sandhi)?",
    sanskritQuestion: "सवर्णानां दीर्घादेशं कुर्वत् पाणिनीयं सूत्रं किम्?",
    options: ["अकः सवर्णे दीर्घः", "आद्गुणः", "वृद्धिरेचि", "इको यणचि"],
    correctIndex: 0,
    explanation: "Sutra 6.1.101 'अकः सवर्णे दीर्घः' states that when an Ak pratyahara vowel (अ, इ, उ, ऋ, ऌ) is followed by a savarna (homogeneous) vowel, they merge into their dirgha form.",
    shastricTopic: "Paninian Vyakarana (Sandhi)"
  },
  {
    id: 2,
    question: "Under the Central Sanskrit Universities Act 2020, which historic institution was converted into the Central Sanskrit University?",
    sanskritQuestion: "केन्द्रीय-संस्कृत-विश्वविद्यालय-अधिनियम-२०२० माध्यमेन कस्याः संस्थायाः स्तरोन्नयनं जातम्?",
    options: ["Rashtriya Sanskrit Sansthan", "Deccan College", "Sanskrit Bharati", "Sampurnanand Sanskrit Vishwavidyalaya"],
    correctIndex: 0,
    explanation: "Rashtriya Sanskrit Sansthan (established 1970) was elevated by Parliament to full Central University status in March 2020.",
    shastricTopic: "CSU Institutional History"
  },
  {
    id: 3,
    question: "What is the meter (Chhandas) of the Bhagavad Gita's primary shlokas containing 8 syllables in each of four quarters (32 syllables)?",
    sanskritQuestion: "श्रीमद्भगवद्गीतायाः प्रमुख-श्लोकेषु प्रयुक्तं ३२-अक्षर-सहितं वृत्तं किम्?",
    options: ["इन्द्रवज्रा", "अनुष्टुभ्", "मन्दाक्रान्ता", "वसन्ततिलका"],
    correctIndex: 1,
    explanation: "Anushtubh (also known simply as Shloka) consists of 8 syllables per pada with the 5th laghu and 6th guru throughout.",
    shastricTopic: "Chhandashastra (Metrics)"
  },
  {
    id: 4,
    question: "Which campus of Central Sanskrit University houses the world-famous manuscript collection founded by Sir Ganganath Jha?",
    sanskritQuestion: "महामहोपाध्याय-गङ्गनाथ-झा-हस्तलेख-सङ्ग्रहः कस्मिन परिसरे वर्तते?",
    options: ["Puri Campus", "Prayagraj (Allahabad) Campus", "Sringeri Campus", "Jammu Campus"],
    correctIndex: 1,
    explanation: "The Ganganath Jha Campus in Prayagraj holds over 50,000 priceless Sanskrit, Prakrit, and Pali manuscripts.",
    shastricTopic: "Manuscriptology & Campuses"
  },
  {
    id: 5,
    question: "In Panini's Karaka system, which vibhakti is governed by 'साधकतमं करणम्' (the most effective instrument in accomplishing an action)?",
    sanskritQuestion: "पाणिनीये 'साधकतमं करणम्' इत्यनेन कस्य कारकस्य तृतीया विभक्तिः विधीयते?",
    options: ["कर्मकारकम्", "करणकारकम्", "अपादानकारकम्", "अधिकरणकारकम्"],
    correctIndex: 1,
    explanation: "Sutra 1.4.42 'साधकतमं करणम्' designates the primary instrument as Karana Karaka, which takes Tritiya Vibhakti by 'कर्तृकरणयोस्तृतीया' (2.3.18).",
    shastricTopic: "Paninian Karaka Shastra"
  },
  {
    id: 6,
    question: "What is the name of Central Sanskrit University's online LMS learning platform under Mukta Swadhyaya Peetham?",
    sanskritQuestion: "केन्द्रीयसंस्कृतविश्वविद्यालयस्य मुक्तस्वाध्यायपीठान्तर्गता दूरस्थ-ई-अधिगम-वेदी का?",
    options: ["स्वाध्यायवेदी (Swadhyaya-Vedi)", "ज्ञानवापी", "संस्कृतभारती", "ई-पाठशाला"],
    correctIndex: 0,
    explanation: "CSU operates the स्वाध्यायवेदी (Swadhyaya-Vedi) LMS portal for distance and open online Sanskrit education.",
    shastricTopic: "Digital Sanskrit Infrastructure"
  }
];
