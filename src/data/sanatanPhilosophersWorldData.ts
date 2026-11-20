export interface SanatanPhilosopher {
  id: string;
  name: string;
  sanskritName: string;
  epithet: string;
  region: string;
  regionCategory: "bharatavarsha" | "northwest_central_asia" | "persia_west_asia" | "southeast_asia" | "yavana_mediterranean" | "mahachina_tibet_east" | "transoceanic_patala" | "twelve_mahajanas";
  regionNameSanskrit: string;
  dweepaOrVarsha: string;
  approxEra: string;
  primarySchool: string; // e.g. "Sankhya", "Advaita Vedanta", "Shaiva Siddhanta", "Avestan-Vedic Rta", "Neoplatonic Monism", etc.
  astikaDarshana: "Sankhya" | "Yoga" | "Nyaya" | "Vaisheshika" | "Mimamsa" | "Vedanta" | "Shaiva/Shakta" | "Vedic Agamic" | "Global Cognate / Yavana";
  isBrahmavadini?: boolean;
  isTwelveMahajana?: boolean;
  coreEpistemology: string; // Key philosophical thesis
  vedicScriptureSource: {
    text: string;
    chapterVerse: string;
    sanskritShloka: string;
    transliteration: string;
    translation: string;
  };
  keyTreatises: string[];
  philosophicalDoctrines: string[];
  globalInfluenceAndLegacy: string;
  keyDisciplesOrDebateOpponents?: string[];
}

export interface RegionFilterCategory {
  id: SanatanPhilosopher["regionCategory"] | "all";
  label: string;
  sanskrit: string;
  description: string;
  count?: number;
}

export const REGION_CATEGORIES: RegionFilterCategory[] = [
  {
    id: "all",
    label: "Global Sanatan Heritage (All)",
    sanskrit: "सर्ववैदिक दार्शनिक मण्डल",
    description: "Comprehensive corpus of Sanatan philosophers across all continents, Dweepas, and civilizational spheres."
  },
  {
    id: "bharatavarsha",
    label: "Aryavarta & Bharatavarsha",
    sanskrit: "भारतवर्ष एवं आर्यावर्त",
    description: "Founders of the 6 Astika Darshanas, Vedic Upanishadic Rishis, Brahmavadinis, and Vedanta Acharyas."
  },
  {
    id: "northwest_central_asia",
    label: "Gandhara, Bahlika & Central Asia",
    sanskrit: "गान्धार, बाह्लीक एवं उत्तरकुरु",
    description: "Panini, Charaka, Kashyapa, and the Vedic seers of Sapta Sindhu, Oxus, and Pamir regions."
  },
  {
    id: "persia_west_asia",
    label: "Ancient Iran, Shakadvipa & West Asia",
    sanskrit: "शाकद्वीप, आर्याण एवं पश्चिम एशिया",
    description: "Zarathushtra (Angirasa/Atharvan cognate), Sakaldwipiya Maga Solar Rishis, and Mitanni Vedic treaties."
  },
  {
    id: "southeast_asia",
    label: "Suvarnabhumi & Nusantara (SE Asia)",
    sanskrit: "सुवर्णभूमि, यवद्वीप एवं कम्बोज",
    description: "Agastya (Bhatara Guru), Rishi Kaundinya (Cambodia), Dang Hyang Dwijendra & Markandeya (Bali)."
  },
  {
    id: "yavana_mediterranean",
    label: "Yavanadvipa & Mediterranean (Greece/Rome)",
    sanskrit: "यवनद्वीप, रोमक एवं अलेक्जेंड्रिया",
    description: "Yavanacharyas (Brihat Samhita 2.14), Pythagoras, Plotinus (Neoplatonic Monism), and Apollonius of Tyana."
  },
  {
    id: "mahachina_tibet_east",
    label: "Mahachina, Bhotadesha & East Asia",
    sanskrit: "महाचीन, भोटदेश एवं पूर्व एशिया",
    description: "Vasishtha's Cinachara, Bodhidharma (Chan/Zen Dhyana), Padmasambhava, and Kumarajiva."
  },
  {
    id: "transoceanic_patala",
    label: "Maya Danava & Trans-Oceanic Hemispheres",
    sanskrit: "मय दानव, पाताल एवं पश्चिमी गोलार्ध",
    description: "Maya Danava (Surya Siddhanta cosmologist & architect) and trans-oceanic cosmic seers."
  },
  {
    id: "twelve_mahajanas",
    label: "The 12 Universal Mahajanas",
    sanskrit: "द्वादश महाजन मण्डल (श्रीमद्भागवतम्)",
    description: "The 12 primordial authorities on cosmic Sanatan Dharma as defined in Srimad Bhagavatam 6.3.20-21."
  }
];

export const SANATAN_PHILOSOPHERS_CORPUS: SanatanPhilosopher[] = [
  // 1. BHARATAVARSHA - ASTIKA FOUNDERS & UPANISHADIC SAGES
  {
    id: "kapila-muni",
    name: "Maharshi Kapila",
    sanskritName: "महर्षि कपिल",
    epithet: "Founding Father of Sankhya Philosophy & Incarnation of Pure Jnana",
    region: "Bharatavarsha (Ganga Sagar & Himalayas)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (गङ्गासागर-हिमालय)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "Treta Yuga / Vedic Antiquity",
    primarySchool: "Sankhya Darshana (Dualistic Realism & 24 Tattvas)",
    astikaDarshana: "Sankhya",
    isTwelveMahajana: true,
    coreEpistemology: "Discrimination (Viveka-Khyati) between Purusha (Pure Conscious Witness) and Prakriti (Dynamic Material Nature) via 24 cosmic principles to attain Kaivalya (liberation from threefold miseries).",
    vedicScriptureSource: {
      text: "Srimad Bhagavatam & Shvetashvatara Upanishad",
      chapterVerse: "Bhagavatam 3.25.25 & Shvetashvatara 5.2",
      sanskritShloka: "ऋषिं प्रसूतं कपिलं यस्तमग्रे ज्ञानैर्बिभर्ति जायमानं च पश्येत् ॥\nसतां प्रसङ्गान्मम वीर्यसंविदो भवन्ति हृत्कर्णरसायनाः कथाः ।",
      transliteration: "ṛṣiṁ prasūtaṁ kapilaṁ yastamagre jñānairbibharti jāyamānaṁ ca paśyet ||\nsatāṁ prasaṅgānmama vīryasaṁvido bhavanti hṛtkarṇarasāyanāḥ kathāḥ |",
      translation: "The Supreme Lord sustained Sage Kapila who was born at the dawn of creation with all wisdom; through the association of realized sages, discourses on the Divine become nectar for the heart and ears."
    },
    keyTreatises: ["Sankhya Sutras", "Tattva Samasa", "Kapila Gita (Bhagavatam Skandha 3)"],
    philosophicalDoctrines: [
      "Satkaryavada (Pre-existence of effect in the cause)",
      "24 Tattvas (Mahat, Ahankara, Manas, 5 Tanmatras, 5 Mahabhutas, 10 Indriyas)",
      "Tri-Guna Dynamics (Sattva, Rajas, Tamas in dynamic equilibrium)",
      "Kaivalya through discernment of Purusha from Prakriti"
    ],
    globalInfluenceAndLegacy: "Sankhya constitutes the foundational metaphysical schema for Yoga, Ayurveda, Tibetan metaphysics, Buddhist Abhidharma cosmology, and ancient Greek cosmological classification.",
    keyDisciplesOrDebateOpponents: ["Devahuti (Mother & Disciple)", "Asuri", "Panchashikha"]
  },
  {
    id: "patanjali-maharshi",
    name: "Maharshi Patanjali",
    sanskritName: "महर्षि पतञ्जलि",
    epithet: "Author of Yoga Sutras, Mahabhashya on Grammar, and Ayurveda Treatise",
    region: "Bharatavarsha (Gonarda / Kashmir / North India)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (गोनर्द / काश्मीर)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "c. 4th–2nd Century BCE (Trad: Incarnation of Shesha Naga)",
    primarySchool: "Yoga Darshana (Raja Yoga / Ashtanga Yoga)",
    astikaDarshana: "Yoga",
    coreEpistemology: "Yoga is the cessation of the modifications of the mind-stuff (Yogas chitta-vritti-nirodha), leading to the resting of the Seer in their true essential nature (Tada drashtuh svarupe avasthanam).",
    vedicScriptureSource: {
      text: "Patanjala Yoga Sutras",
      chapterVerse: "Samadhi Pada 1.2-3",
      sanskritShloka: "योगश्चित्तवृत्तिनिरोधः ॥ तदा द्रष्टुः स्वरूपेऽवस्थानम् ॥",
      transliteration: "yogaścittavṛttinirodhaḥ || tadā draṣṭuḥ svarūpe'vasthānam ||",
      translation: "Yoga is the complete stilling of the fluctuations of consciousness. Then the Witness Consciousness abides in its pristine true nature."
    },
    keyTreatises: ["Yoga Sutras", "Mahabhashya on Panini's Ashtadhyayi", "Charaka-Pratisamskarana (Ayurveda Commentary)"],
    philosophicalDoctrines: [
      "Ashtanga Yoga (Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi)",
      "5 Chitta Vrittis (Pramana, Viparyaya, Vikalpa, Nidra, Smriti)",
      "Kriya Yoga (Tapas, Svadhyaya, Ishvara Pranidhana)",
      "Samprajnata and Asamprajnata / Nirbija Samadhi"
    ],
    globalInfluenceAndLegacy: "Patanjali's 196 Yoga Sutras serve as the universal gold standard of consciousness science, meditation psychology, neuroplasticity, and mind-body harmony across the entire world.",
    keyDisciplesOrDebateOpponents: ["Vyasa (Yoga-Bhashyakara)", "Vachaspati Mishra", "Bhoja Raja"]
  },
  {
    id: "yajnavalkya-maharshi",
    name: "Maharshi Yajnavalkya",
    sanskritName: "महर्षि याज्ञवल्क्य",
    epithet: "Supreme Visionary of Shukla Yajurveda & Incomparable Master of Mithila Debates",
    region: "Bharatavarsha (Mithila / Videha)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (मिथिला / विदेह)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "Vedic Upanishadic Antiquity (Court of King Janaka)",
    primarySchool: "Vedanta (Neti Neti Transcendental Monism)",
    astikaDarshana: "Vedanta",
    coreEpistemology: "The ultimate Truth is the self-luminous Atman identical with Brahman, cognized via 'Neti, Neti' (Not this, Not this), beyond all phenomenal attributes and sensory grasps.",
    vedicScriptureSource: {
      text: "Brihadaranyaka Upanishad",
      chapterVerse: "Brihadaranyaka 3.8.8 & 4.5.15",
      sanskritShloka: "स एष नेति नेत्यात्माऽगृह्यो न हि गृह्यतेऽशीर्यो न हि शीर्यतेऽसङ्गो न हि सज्यते ॥\nयत्र हि द्वैतमिव भवति तदितर इतरं पश्यति... यत्र त्वस्य सर्वमात्मैवाभूत्तत्केन कं पश्येत् ॥",
      transliteration: "sa eṣa neti netyātmā'gṛhyo na hi gṛhyate'śīryo na hi śīryate'saṅgo na hi sajyate ||\nyatra hi dvaitamiva bhavati taditara itaraṁ paśyati... yatra tvasya sarvamātmaivābhūttatkena kaṁ paśyet ||",
      translation: "This Self is described as 'Neti, Neti' (Not this, Not that). It is imperishable, detached, and free. Where there is duality, one sees another; but where everything has become the Self alone, by what and whom should one see?"
    },
    keyTreatises: ["Shukla Yajurveda (Vajasaneyi Samhita)", "Shatapatha Brahmana", "Brihadaranyaka Upanishad", "Yajnavalkya Smriti", "Yoga Yajnavalkya"],
    philosophicalDoctrines: [
      "Neti-Neti (Apophatic dialectic of pure consciousness)",
      "Self-luminosity (Svayam-jyoti) of Atman",
      "Atman as the Inner Controller (Antaryami)",
      "Supreme debate triumphs over Shakalya, Ushasta, Kahola, and Artabhaga"
    ],
    globalInfluenceAndLegacy: "Introduced the highest non-dual ontology in world philosophy, directly inspiring Adi Shankara, Spinoza, Arthur Schopenhauer, and Ralph Waldo Emerson.",
    keyDisciplesOrDebateOpponents: ["Gargi Vachaknavi", "Maitreyi", "Vidagdha Shakalya", "King Janaka"]
  },
  {
    id: "gargi-vachaknavi",
    name: "Brahmavadini Gargi Vachaknavi",
    sanskritName: "ब्रह्मवादिनी गार्गी वाचक्नवी",
    epithet: "Pioneering Female Ontologist & Cosmological Debater of the Upanishads",
    region: "Bharatavarsha (Mithila / Videha)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (मिथिला)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "c. 8th–7th Century BCE (Vedic Upanishadic Era)",
    primarySchool: "Vedic Ontology & Cosmological Matrix (Ota-Prota Dialectic)",
    astikaDarshana: "Vedanta",
    isBrahmavadini: true,
    coreEpistemology: "Cosmological regress analysis: Every material plane is woven (ota-prota) warp and woof into a subtler plane, culminating in the unconditioned, imperishable Brahman (Akshara) which weaves space itself.",
    vedicScriptureSource: {
      text: "Brihadaranyaka Upanishad",
      chapterVerse: "Brihadaranyaka 3.8.7-8",
      sanskritShloka: "कस्मिन्नु खल्वाकाश ओतश्च प्रोतश्चेति । स होवाचैतद्वै तदक्षरं गार्गि ब्राह्मणा अभिवदन्त्यस्थूलमनण्वह्रस्वमदीर्घम् ॥",
      transliteration: "kasminnu khalvākāśa otaśca protaśceti | sa hovācaitadvai tadakṣaraṁ gārgi brāhmaṇā abhivadantyasthūlamanaṇvahrasvamadīrgham ||",
      translation: "Gargi asked: 'In what then is Space (Akasha) woven warp and woof?' Yajnavalkya replied: 'O Gargi, that is the Imperishable (Akshara) which the knowers of Brahman proclaim; it is neither gross nor subtle, neither short nor long.'"
    },
    keyTreatises: ["Philosophical dialogues in Brihadaranyaka Upanishad", "Gargi Samhita (Astronomical/Astrological traditions)"],
    philosophicalDoctrines: [
      "Cosmic Weaving Principle (Ota-Prota Siddhanta)",
      "Epistemic limit testing of infinite regress",
      "Equal intellectual sovereignty of women (Brahmavadinis) in supreme Vedic debate councils"
    ],
    globalInfluenceAndLegacy: "Stands as the world's first recorded female philosopher of cosmic ontology, questioning the ultimate fabric of space, time, and consciousness.",
    keyDisciplesOrDebateOpponents: ["Maharshi Yajnavalkya", "King Janaka of Videha"]
  },
  {
    id: "gautama-akshapada",
    name: "Maharshi Gautama Akshapada",
    sanskritName: "महर्षि गौतम अक्षपाद",
    epithet: "Founder of Nyaya Darshana (Epistemology, Formal Logic & Debate Science)",
    region: "Bharatavarsha (Mithila / Gautama Ashrama)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (मिथिला / गौतम आश्रम)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "c. 6th–4th Century BCE",
    primarySchool: "Nyaya Darshana (16 Epistemological Categories & 5-Member Syllogism)",
    astikaDarshana: "Nyaya",
    coreEpistemology: "Attainment of the highest good (Nihshreyasa) through valid knowledge (Prama) derived from four instruments: Pratyaksha (Perception), Anumana (Inference), Upamana (Comparison), and Shabda (Testimony).",
    vedicScriptureSource: {
      text: "Nyaya Sutras of Gautama",
      chapterVerse: "Adhyaya 1, Ahnika 1, Sutra 1",
      sanskritShloka: "प्रमाणप्रमेयसंशयप्रयोजनदृष्टान्तसिद्धान्तावयवतर्कनिर्णयवादजल्पवितण्डाहेत्वाभासच्छलजातिनिग्रहस्थानानां तत्त्वज्ञानान्निःश्रेयसाधिगमः ॥",
      transliteration: "pramāṇa-prameya-saṁśaya-prayojana-dṛṣṭānta-siddhāntāvayava-tarka-nirṇaya-vāda-jalpa-vitaṇḍā-hetvābhāsa-chala-jāti-nigrahasthānānāṁ tattvajñānānniḥśreyasādhigamaḥ ||",
      translation: "Supreme bliss is attained through thorough knowledge of the true nature of the 16 subjects: means of valid cognition, objects of knowledge, doubt, purpose, exemplar, established doctrine, syllogistic members, hypothetical reasoning, ascertainment, truth-seeking debate, disputation, cavil, fallacies, quibble, futile rejoinder, and clinchers."
    },
    keyTreatises: ["Nyaya Sutras", "Nyaya Bhashya (commentary lineage)"],
    philosophicalDoctrines: [
      "4 Valid Pramanas (Pratyaksha, Anumana, Upamana, Shabda)",
      "Pancha-Avayava 5-Member Syllogism (Pratijna, Hetu, Udaharana, Upanaya, Nigamana)",
      "Classification of Hetvabhasas (Logical Fallacies)",
      "Tarka and Vada (Formal Debate Rules)"
    ],
    globalInfluenceAndLegacy: "Nyaya established the world's most rigorous system of formal logic and debate epistemology, preceding and surpassing Aristotelian syllogism in logical completeness.",
    keyDisciplesOrDebateOpponents: ["Vatsyayana", "Uddyotakara", "Dignaga (Buddhist Logician Debate)"]
  },
  {
    id: "kanada-ulukha",
    name: "Maharshi Kanada (Kashyapa / Ulukha)",
    sanskritName: "महर्षि कणाद (उलूक)",
    epithet: "Pioneer of Vaisheshika Atomic Physics & Categorical Realism (Padartha-Shastra)",
    region: "Bharatavarsha (Prabhasa Kshetra / Gujarat)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (प्रभातक्षेत्र / सौराष्ट्र)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "c. 6th Century BCE",
    primarySchool: "Vaisheshika Darshana (Atomic Pluralism & 6 Padarthas)",
    astikaDarshana: "Vaisheshika",
    coreEpistemology: "The physical universe is constituted of indivisible, eternal spherical atoms (Parmanu) combining into Dvyanuka (di-atoms) and Tryanuka (tri-atoms) governed by Adrishta (cosmic moral invisible force).",
    vedicScriptureSource: {
      text: "Vaisheshika Sutras",
      chapterVerse: "Adhyaya 1, Ahnika 1, Sutra 2",
      sanskritShloka: "यतोऽभ्युदयनिःश्रेयससिद्धिः स धर्मः ॥\nद्रव्यगुणकर्मसामान्यविशेषसमवायानां षण्णां पदार्थानां साधर्म्यवैधर्म्याभ्यां तत्त्वज्ञानान्निःश्रेयसम् ॥",
      transliteration: "yato'bhyudayaniḥśreyasasiddhiḥ sa dharmaḥ ||\ndravyaguṇakarmasāmānyaviśeṣasamavāyānāṁ ṣaṇṇāṁ padārthānāṁ sādharmyavaidharmyābhyāṁ tattvajñānānniḥśreyasam ||",
      translation: "Dharma is that from which both material prosperity in the world (Abhyudaya) and supreme spiritual liberation (Nihshreyasa) are achieved. Liberation arises from knowledge of the 6 ontological categories."
    },
    keyTreatises: ["Vaisheshika Sutras"],
    philosophicalDoctrines: [
      "Parmanu-Vada (Indivisible spherical atomic theory)",
      "6 Fundamental Padarthas (Dravya, Guna, Karma, Samanya, Vishesha, Samavaya + Abhava)",
      "Pilupaka vs Pitharapaka (Heat and chemical atomic transformation)",
      "Adrishta as the transcendental causal mechanism"
    ],
    globalInfluenceAndLegacy: "Formulated the earliest atomic physics and ontological taxonomy centuries before Democritus, Leucippus, and John Dalton.",
    keyDisciplesOrDebateOpponents: ["Prashastapada (Padartha Dharma Sangraha)", "Udayana"]
  },
  {
    id: "adi-shankaracharya",
    name: "Jagadguru Adi Shankaracharya",
    sanskritName: "जगद्गुरु आदि शङ्कराचार्य",
    epithet: "Revitalizer of Advaita Vedanta, Establisher of 4 Amnaya Peethas & Shanmata Sthapana",
    region: "Bharatavarsha (Kalady, Kerala to Kedarnath / Badrinath)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (कालडी, शृङ्गेरी, द्वारका, पुरी, बदरिकाश्रम)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "c. 509 BCE / 788–820 CE",
    primarySchool: "Advaita Vedanta (Absolute Non-Dualism)",
    astikaDarshana: "Vedanta",
    coreEpistemology: "Brahman Satyam, Jagan Mithya, Jivo Brahmaiva Naparah — Brahman alone is absolute Reality, the world is phenomenal appearance (Mithya), and the individual self is non-different from Brahman.",
    vedicScriptureSource: {
      text: "Brahma Sutra Bhashya & Vivekachudamani",
      chapterVerse: "Brahmasutra Bhashya 1.1.4 & Vivekachudamani 20",
      sanskritShloka: "ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः ।\nअनेन वेद्यं सच्छास्त्रमिति वेदान्तडिण्डिमः ॥",
      transliteration: "brahma satyaṁ jaganmithyā jīvo brahmaiva nāparaḥ |\nanena vedyaṁ sacchāstramiti vedāntaḍiṇḍimaḥ ||",
      translation: "Brahman is the absolute truth; the universe is an impermanent appearance; the individual soul is non-other than Brahman. This is the resounding proclamation of Vedanta."
    },
    keyTreatises: ["Prasthanatrayi Bhashyas (Upanishads, Bhagavad Gita, Brahma Sutras)", "Vivekachudamani", "Upadeshasahasri", "Atmabodha", "Saundarya Lahari"],
    philosophicalDoctrines: [
      "Vivartavada (Superimposition and illusory transformation)",
      "Three Orders of Reality (Paramarthika, Vyavaharika, Pratibhasika)",
      "Adhyasa (Superimposition of non-Self on the Self)",
      "Establishment of 4 Amnaya Maths (Puri, Sringeri, Dwaraka, Jyotirmath)"
    ],
    globalInfluenceAndLegacy: "Unquestioned titan of non-dual metaphysics whose dialectic rigor harmonized all Vedic traditions, shaping modern thinkers from Vivekananda to Erwin Schrödinger and David Bohm.",
    keyDisciplesOrDebateOpponents: ["Mandana Mishra", "Padmapadacharya", "Sureshvaracharya", "Totakacharya", "Hastamalakacharya"]
  },
  {
    id: "ramanujacharya",
    name: "Bhagavad Ramanujacharya",
    sanskritName: "भगवद् रामानुजाचार्य",
    epithet: "Propounder of Vishishtadvaita Vedanta & Universalizer of Saranagati",
    region: "Bharatavarsha (Sriperumbudur / Srirangam / Melukote / Tamil Nadu)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (श्रीपेरुम्बुदूर / श्रीरङ्गम् / मेलुकोटे)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "1017–1137 CE",
    primarySchool: "Vishishtadvaita Vedanta (Qualified Non-Dualism & Ubhaya Vedanta)",
    astikaDarshana: "Vedanta",
    coreEpistemology: "Brahman is qualified (Vishishta) by Chit (sentient souls) and Achit (insentient matter) in a Sharira-Shariri Bhava (body-soul relationship); supreme liberation is achieved through Bhakti and Prapatti (Saranagati).",
    vedicScriptureSource: {
      text: "Sri Bhashya on Brahma Sutras",
      chapterVerse: "Sri Bhashya Mangala Shloka 1.1.1",
      sanskritShloka: "अखिलभुवनजन्मस्थेमभङ्गादिलीले विनतविविधभूतव्रातरक्षैकदीक्षे ।\nश्रुतिशिरसि विदीप्ते ब्रह्मणि श्रीनिवासे भवतु मम परस्मिन् शेमुषी भक्तिरूपा ॥",
      transliteration: "akhilabhuvanajanmasthemabhaṅgādilīle vinatavividhabhūtavrātarakṣaikadīkṣe |\nśrutiśirasi vidīpte brahmaṇi śrīnivāse bhavatu mama parasmin śemuṣī bhaktirūpā ||",
      translation: "May my intellect assume the form of devotional love (Bhakti) toward the Supreme Brahman, Lord Shrinivasa, whose cosmic sport is the creation, preservation, and dissolution of the universes, and who is radiant in the crowns of the Upanishads."
    },
    keyTreatises: ["Sri Bhashya", "Vedarthasangraha", "Gita Bhashya", "Vedantadipa", "Vedantasara", "Saranagati Gadya"],
    philosophicalDoctrines: [
      "Sharira-Shariri Bhava (Universe as the cosmic body of God)",
      "Prapatti / Saranagati (6-fold unconditional self-surrender)",
      "Aprithak-Siddhi (Inseparable relationship between God, soul, and matter)",
      "Ubhaya Vedanta (Synthesis of Sanskrit Vedas and Tamil Divya Prabandham)"
    ],
    globalInfluenceAndLegacy: "Democratized sacred mantras from temple towers for all humanity regardless of caste; established egalitarian devotional social philosophy across India.",
    keyDisciplesOrDebateOpponents: ["Kuresha (Kurathazhwan)", "Mudaliandan", "Yadavaprakasha (Guru turned disciple)"]
  },
  {
    id: "madhvacharya",
    name: "Sri Madhvacharya (Anandatirtha / Purnaprajna)",
    sanskritName: "श्री मध्वाचार्य (आनन्दतीर्थ)",
    epithet: "Propounder of Tattvavada / Dvaita Vedanta & Incarnation of Vayu",
    region: "Bharatavarsha (Pajaka / Udupi / Karnataka)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (पाजक / उडुपी / कर्नाटक)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "1238–1317 CE",
    primarySchool: "Dvaita Vedanta (Tattvavada / Uncompromising Realism)",
    astikaDarshana: "Vedanta",
    coreEpistemology: "The universe is fundamentally real (Jagat Satyam), and there are five eternal, irreducible distinctions (Pancha Bheda) with Lord Vishnu as the independent Supreme Reality (Svatantra) and all souls and matter as dependent (Paratantra).",
    vedicScriptureSource: {
      text: "Anu Vyakhyana & Tattvaviveka",
      chapterVerse: "Tattvaviveka 1",
      sanskritShloka: "स्वतन्त्रमस्वतन्त्रं च द्विविधं तत्त्वमिष्यते ।\nस्वतन्त्रो भगवान् विष्णुर्निर्दोषोऽशेषसद्गुणः ॥",
      transliteration: "svatantramasvatantraṁ ca dvividhaṁ tattvamiṣyate |\nsvatantro bhagavān viṣṇurnirdoṣo'śeṣasadguṇaḥ ||",
      translation: "Reality is known to be twofold: the Independent (Svatantra) and the Dependent (Asvatantra). Lord Vishnu alone is the Independent Reality, free of all blemishes and endowed with infinite auspicious attributes."
    },
    keyTreatises: ["Sarvamoola Granthas (37 Works)", "Anu Vyakhyana", "Gita Tatparya Nirnaya", "Mahabharata Tatparya Nirnaya", "Tattva Nirnaya"],
    philosophicalDoctrines: [
      "Pancha Bheda (5 Eternal Distinctions: God-Soul, God-Matter, Soul-Soul, Soul-Matter, Matter-Matter)",
      "Taratamya (Hierarchy of souls according to intrinsic spiritual capacity)",
      "Sakshi-Pramana (Innate intuitive witness as the ultimate validator of knowledge)",
      "Svarupa-Damodara / Svarupa-Ananda in Mukti"
    ],
    globalInfluenceAndLegacy: "Engineered the most rigorous realistic epistemological system in Indian philosophy, founding the Ashta Mathas of Udupi and revitalizing Haridasa Bhakti movement.",
    keyDisciplesOrDebateOpponents: ["Padmanabha Tirtha", "Narahari Tirtha", "Jayatirtha (Tikacharya)", "Vadiraja Tirtha"]
  },
  {
    id: "abhinavagupta",
    name: "Acharya Abhinavagupta",
    sanskritName: "आचार्य अभिनवगुप्त",
    epithet: "Supreme Master of Kashmir Shaivism, Tantraloka & Aesthetic Rasa Theory",
    region: "Bharatavarsha (Kashmir Valley)",
    regionCategory: "bharatavarsha",
    regionNameSanskrit: "भारतवर्ष (काश्मीर मण्डल)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "c. 950–1020 CE",
    primarySchool: "Trika Kashmir Shaivism (Pratyabhijna Non-Dualism & Spanda)",
    astikaDarshana: "Shaiva/Shakta",
    coreEpistemology: "Supreme Reality is Parama Shiva — dynamic, self-luminous consciousness (Prakasha) imbued with self-reflective pulsation (Vimarsha). The universe is Shiva's free ecstatic self-expression (Svatantrya), and liberation is spontaneous self-recognition (Pratyabhijna).",
    vedicScriptureSource: {
      text: "Tantraloka & Ishvara-Pratyabhijna-Vimarshini",
      chapterVerse: "Tantraloka 1.1",
      sanskritShloka: "नौमि चित्प्रतिभां देवीं परां परतरैस्तथा ।\nस्वात्मनि स्वेन रूपेण स्फुरन्तीं विश्वमातृकाम् ॥",
      transliteration: "naumi citpratibhāṁ devīṁ parāṁ parataraistathā |\nsvātmani svena rūpeṇa sphurantīṁ viśvamātṛkām ||",
      translation: "I bow to the supreme Goddess of Pure Consciousness (Chit-Pratibha), who vibrates within Her own Self in Her pristine splendor as the universal mother matrix of all manifestation."
    },
    keyTreatises: ["Tantraloka (37 Ahnikas)", "Abhinavabharati (on Natyashastra)", "Locana (on Dhvanyaloka)", "Ishvara-Pratyabhijna-Vimarshini", "Paramarthasara"],
    philosophicalDoctrines: [
      "Prakasha-Vimarsha (Light of awareness and its vibrant self-awareness)",
      "Pratyabhijna (Liberating instant recognition of one's identity as Shiva)",
      "Spanda (Cosmic divine pulsation/vibration)",
      "Shanta Rasa as the transcendental root of all aesthetic experience"
    ],
    globalInfluenceAndLegacy: "Synthesized integral metaphysics, aesthetics, and esoteric consciousness studies; acclaimed worldwide as one of humanity's greatest polymaths.",
    keyDisciplesOrDebateOpponents: ["Kshemaraja", "Jayaratha", "Somānanda (Lineage)"]
  },

  // 2. GANDHARA, BAHLIKA, CENTRAL ASIA & UTTARAKURU
  {
    id: "panini-maharshi",
    name: "Acharya Panini",
    sanskritName: "आचार्य पाणिनि",
    epithet: "Father of Generative Grammar, Formal Linguistics & Ashtadhyayi Logic",
    region: "Gandhara / Salatura (Modern Khyber Pakhtunkhwa / Indus confluence)",
    regionCategory: "northwest_central_asia",
    regionNameSanskrit: "गान्धार (शालातुर / सिन्धु तट)",
    dweepaOrVarsha: "Jambudvipa - Gandhara & Aryavarta",
    approxEra: "c. 6th–4th Century BCE",
    primarySchool: "Vyakarana Darshana (Philosophy of Language & Shabda-Brahman)",
    astikaDarshana: "Vedic Agamic",
    coreEpistemology: "Language is a generative, algorithmic algebraic system of 3,959 sutras (Ashtadhyayi) mapping phonological, morphological, and semantic transformations reflecting the cosmic vibration of Shabda-Brahman.",
    vedicScriptureSource: {
      text: "Shiva Sutras (Maheshvara Sutras of Panini)",
      chapterVerse: "Maheshvara Sutra Inception",
      sanskritShloka: "नृत्तावसाने नटराजराजो ननाद ढक्कां नवपञ्चवारम् ।\nउद्धर्तुकामः सनकादिसिद्धानेstate विमर्शे शिवसूत्रजालम् ॥",
      transliteration: "nṛttāvasāne naṭarājarājo nanāda ḍhakkāṁ navapañcavāram |\nuddhartukāmaḥ sanakādisiddhānetadvimarśe śivasūtrajālam ||",
      translation: "At the conclusion of His cosmic dance, Nataraja (Lord Shiva) sounded His Damaru drum 14 times (9 + 5) to reveal the matrix of sounds for the liberation of Sanaka and the sages — this is the web of Shiva Sutras."
    },
    keyTreatises: ["Ashtadhyayi (8 Chapters, ~4000 Rules)", "Dhatupatha", "Ganapatha", "Shiksha"],
    philosophicalDoctrines: [
      "Formal Generative Metalanguage and Auxiliary Markers (It-samjna)",
      "Sutra recursion and context-free rule hierarchy",
      "Sphota Theory (Indivisible semantic burst of consciousness)",
      "Shabda-Brahman as ultimate ontological substance"
    ],
    globalInfluenceAndLegacy: "Directly inspired modern computer science formal grammars, Backus-Naur Form (BNF), Noam Chomsky's universal generative grammar, and computational semantics.",
    keyDisciplesOrDebateOpponents: ["Katyayana (Vartikakara)", "Patanjali (Mahabhashyakara)"]
  },
  {
    id: "charaka-maharshi",
    name: "Maharshi Charaka",
    sanskritName: "महर्षि चरक",
    epithet: "Rishi of Holistic Bio-Philosophy, Epistemology & Ayurveda Philosophy",
    region: "Gandhara / Bahlika / North-Western Himalaya",
    regionCategory: "northwest_central_asia",
    regionNameSanskrit: "गान्धार / बाह्लीक / काश्मीर",
    dweepaOrVarsha: "Jambudvipa - Gandhara & Bahlika",
    approxEra: "c. 6th–2nd Century BCE",
    primarySchool: "Ayurveda Philosophy (Tridosha, Panchamahabhuta & Holistic Teleology)",
    astikaDarshana: "Nyaya",
    coreEpistemology: "Human life (Ayu) is the integrated union of Sharira (body), Indriya (senses), Satva (mind), and Atman (spirit). Healing requires comprehensive Nyaya epistemological inquiry and living in harmony with cosmic Rta.",
    vedicScriptureSource: {
      text: "Charaka Samhita",
      chapterVerse: "Sutra Sthana 1.41-42",
      sanskritShloka: "शरीरेन्द्रियसत्त्वात्मसंयोगो धारि जीवितम् ।\nनित्यगश्चानुबन्धश्च पर्यायैरायुरुच्यते ॥\nसर्वदा सर्वभावानां सामान्यं वृद्धिकारणम् । ह्रासहेतुर्विशेषश्च प्रवृत्तिरुभयस्य तु ॥",
      transliteration: "śarīrendriyasattvātmasaṁyogo dhāri jīvitam |\nnityagaścānubandhaśca paryāyairāyurucyate ||\nsarvadā sarvabhāvānāṁ sāmānyaṁ vṛddhikāraṇam | hrāsaheturviśeṣaśca pravṛttirubhayasya tu ||",
      translation: "Life (Ayu) is defined as the harmonious conjunction of body, senses, mind, and the immortal Self. The common principle (Samanya) increases all attributes, while diversity (Vishesha) decreases them."
    },
    keyTreatises: ["Charaka Samhita (Sutra, Nidana, Vimana, Sharira, Indriya, Chikitsa, Kalpa, Siddhi Sthanas)"],
    philosophicalDoctrines: [
      "Tridosha Dynamic Equilibrium (Vata, Pitta, Kapha)",
      "Pancha-Mahabhuta substrate of all physical entities",
      "Karya-Karana Siddhanta (Causal determinism in biology)",
      "Sadvritta (Ethical and spiritual hygiene as preventative medicine)"
    ],
    globalInfluenceAndLegacy: "Founded the earliest holistic medical philosophy integrating medical ethics, clinical observation, logical debate protocols (Vimana Sthana), and mind-body psychosomatics.",
    keyDisciplesOrDebateOpponents: ["Agnivesha", "Atreya Punarvasu", "Dridhabala"]
  },
  {
    id: "dirghatamas-mamateya",
    name: "Rishi Dirghatamas Mamateya",
    sanskritName: "ऋषि दीर्घतमा मामतेय",
    epithet: "Visionary Seer of Ekam Sat Vipra Bahudha Vadanti & The Cosmic Wheel of Time",
    region: "Gandhara / Sapta Sindhu / Sarasvati Basin",
    regionCategory: "northwest_central_asia",
    regionNameSanskrit: "सप्तसिन्धु / गान्धार / सरस्वती कूल",
    dweepaOrVarsha: "Jambudvipa - Sapta Sindhu",
    approxEra: "Rigvedic Primordial Antiquity",
    primarySchool: "Rigvedic Mystical Monism (Asya Vamasya Hymn)",
    astikaDarshana: "Vedanta",
    coreEpistemology: "The ultimate Truth is One, though sages call It by many names (Indra, Mitra, Varuna, Agni, Garutman). The entire cosmos is a self-revolving wheel of Time (Kala-Chakra) with 720 spokes.",
    vedicScriptureSource: {
      text: "Rigveda Samhita",
      chapterVerse: "Mandala 1, Sukta 164, Mantra 46",
      sanskritShloka: "इन्द्रं॑ मि॒त्रं वरु॑णम॒ग्निमा॑हु॒रथो॑ दि॒व्यः स सु॑प॒र्णो ग॒रुत्मान्॑ ।\nएकं॒ सद्विप्रा॑ बहु॒धा व॑दन्त्य॒ग्निं य॒मं मा॑त॒रिश्वा॑नमाहुः ॥",
      transliteration: "indraṁ mitraṁ varuṇamagnimāhuratho divyaḥ sa suparṇo garutmān |\nekaṁ sadviprā bahudhā vadantyagniṁ yamaṁ mātariśvānamāhuḥ ||",
      translation: "They call Him Indra, Mitra, Varuna, and Agni, and He is the celestial winged Garutman. Truth is One; the wise perceive and speak of It in diverse ways; they call It Agni, Yama, and Matarishvan."
    },
    keyTreatises: ["Rigveda Mandala 1 (Suktas 140 to 164 - The Asya Vamasya Hymn)"],
    philosophicalDoctrines: [
      "Ekam Sat (Universal ontological Non-Dual Unity of the Divine)",
      "Dvā Suparṇā Sayujā Sakhāyā (The two birds of consciousness in the body)",
      "Kala Chakra (The 12-spoked solar astronomical calendar of the universe)",
      "Vak Catvari Padani (The 4 levels of speech: Para, Pashyanti, Madhyama, Vaikhari)"
    ],
    globalInfluenceAndLegacy: "The Asya Vamasya Sukta is universally acknowledged as the foundational bedrock of all Indian monistic philosophy, religious pluralism, and astronomical allegory.",
    keyDisciplesOrDebateOpponents: ["Sage Bharadvaja", "King Anga"]
  },

  // 3. ANCIENT PERSIA, SHAKADVIPA & WEST ASIA
  {
    id: "zarathushtra-jarathushtra",
    name: "Rishi Zarathushtra (Jarathushtra Spitama)",
    sanskritName: "ऋषि जरथुष्ट्र / जरथुष्ट्र स्पितम (आङ्गिरस शाखा)",
    epithet: "Avestan-Vedic Seer of Asha (Ṛta), Ahura Mazda (Asura Mahat) & Fire Sanctuary",
    region: "Bactria / Airyanem Vaejah / Ancient Persia (Shakadvipa / Plakshadvipa)",
    regionCategory: "persia_west_asia",
    regionNameSanskrit: "शाकद्वीप / आर्याणम् / बाह्लीक-पर्शव",
    dweepaOrVarsha: "Shakadvipa / Plakshadvipa (Aryana / Persia)",
    approxEra: "c. 1500–1000 BCE",
    primarySchool: "Avestan-Vedic Asha/Rta Cosmic Order (Zoroastrian-Vedic Monotheistic Ethics)",
    astikaDarshana: "Global Cognate / Yavana",
    coreEpistemology: "Cosmic balance is maintained through adherence to Asha (Sanskrit: Ṛta / Cosmic Moral Order), good thoughts (Humata / Sumati), good words (Hukhta / Sukta), and good deeds (Hvarshta / Sukrita), centered on the sacred Fire (Atar / Agni).",
    vedicScriptureSource: {
      text: "Avesta (Gathas: Yasna 30.2-3) & Rigvedic Cognate (Atharvaveda & Mandala 10)",
      chapterVerse: "Yasna 30.3 (Gathic Sanskrit Cognate) / Rigveda 10.124",
      sanskritShloka: "ऋतं च सत्यं चाभीद्धात्तपसोऽध्यजायत ।\n(Avestan: At tā manyū pouruyē yā khavnā asrvātem... ashāicā...) \nशुद्धा मतिः शुद्धं वचः शुद्धं कर्म च धारयेत् ॥",
      transliteration: "ṛtaṁ ca satyaṁ cābhīddhāttapaso'dhyajāyata |\n(Avestan: at tā mainyū paouruyē yā kəmərəfā asrvātəm...)\nśuddhā matiḥ śuddhaṁ vacaḥ śuddhaṁ karma ca dhārayet ||",
      translation: "From cosmic radiance and penance, Cosmic Order (Rta/Asha) and Truth (Satya) were born. Let humanity uphold pure thought, pure speech, and righteous action aligned with the Divine Light."
    },
    keyTreatises: ["Gathas of the Yasna (Ahunavaiti, Ushtavaiti, Spenta Mainyu, Vohu Khshathra, Vahishto Ishti)"],
    philosophicalDoctrines: [
      "Asha (Vedic Ṛta: The cosmic truth, rhythm, and moral law governing the universe)",
      "Ahura Mazda (Asura Mahat: The Lord of Wisdom and Cosmic Consciousness)",
      "Atar / Fire Veneration (Agni as the living portal to spiritual purity)",
      "Ethical Triad: Humata, Hukhta, Hvarshta (Manasa, Vacha, Karmana)",
      "Soma / Haoma Sacramental Epiphany"
    ],
    globalInfluenceAndLegacy: "Linguistically and conceptually identical to Vedic Sanskrit; served as the profound philosophical bridge linking Vedic Sarasvati civilization with the Plateau of Iran and the Near East.",
    keyDisciplesOrDebateOpponents: ["King Vishtaspa", "Frashaoshtra", "Jamaspa"]
  },
  {
    id: "maga-brahmanas-medhatithi",
    name: "Sage Medhatithi & The Sakaldwipiya Maga Rishis",
    sanskritName: "ऋषि मेधातिथि एवं शाकद्वीपीय मग ऋषि मण्डल",
    epithet: "Solar Philosophers of Shakadvipa, Custodians of Surya Siddhanta & Sun Temples",
    region: "Shakadvipa (Seistan / Eastern Persia to Bharatavarsha)",
    regionCategory: "persia_west_asia",
    regionNameSanskrit: "शाकद्वीप (सीस्तान / ईरान) तः मूलस्थान (मुलतान) व कोणार्क",
    dweepaOrVarsha: "Shakadvipa",
    approxEra: "Dvapara-Kali Transition (Samba Purana & Bhavishya Purana)",
    primarySchool: "Saura Darshana (Vedic Solar Monotheism & Helio-Cosmology)",
    astikaDarshana: "Vedic Agamic",
    coreEpistemology: "Surya is the soul of all that moves and is motionless (Surya Atma Jagatas Tasthushashcha); worship of the light-embodying Solar deity cures all maladies, illuminates intellect (Gayatri), and grants Moksha.",
    vedicScriptureSource: {
      text: "Bhavishya Purana & Samba Purana",
      chapterVerse: "Bhavishya Purana Brahma Parva 139.30-33",
      sanskritShloka: "शाकद्वीपे तु ये विप्रा मगगागमुखाः स्मृताः ।\nसूर्योपासनाशीलास्ते वेदवेदान्तपारगाः ॥\nसूर्य आत्मा जगतस्तस्थुषश्च पश्येम शरदः शतम् ॥",
      transliteration: "śākadvīpe tu ye viprā magagāgamukhāḥ smṛtāḥ |\nsūryopāsanāśīlāste vedavedāntapāragāḥ ||\nsūrya ātmā jagatastasthuṣaśca paśyema śaradaḥ śatam ||",
      translation: "In Shakadvipa, the enlightened seers known as the Magas are devoted to the adoration of the Sun God and are masters of the Vedas and Vedanta. The Sun is the soul of all moving and unmoving beings."
    },
    keyTreatises: ["Samba Purana", "Bhavishya Purana (Brahma Parva)", "Surya Samhita", "Maga Samhita"],
    philosophicalDoctrines: [
      "Surya-Adhyatma (The Sun as the external lens of the internal Paramatman)",
      "Maga-Avyanga sacred girdle transmission (Cognate to Zoroastrian Kusti & Yajnopavita)",
      "Establishment of the Great Sun Temples at Mulasthana (Multan), Modhera, and Konark",
      "Solar medicine and chronobiology"
    ],
    globalInfluenceAndLegacy: "Brought together trans-Asian astronomical and solar worship systems, documenting the continuous maritime and overland exchange between Shakadvipa and Bharatavarsha.",
    keyDisciplesOrDebateOpponents: ["Samba (Son of Sri Krishna)", "Sage Narada", "King Ugrasena"]
  },

  // 4. SOUTHEAST ASIA (SUVARNABHUMI, BALI, CAMBODIA, JAVA)
  {
    id: "agastya-bhatara-guru",
    name: "Maharshi Agastya (Bhatara Guru / Shiva Guru)",
    sanskritName: "महर्षि अगस्त्य (भटार गुरु / शिवगुरु)",
    epithet: "Civilizer of the South, Crosser of the Oceans, Patron Rishi of Nusantara & Indochina",
    region: "Bharatavarsha to Suvarnabhumi, Java, Bali, Cambodia, Champa (Vietnam)",
    regionCategory: "southeast_asia",
    regionNameSanskrit: "सुवर्णभूमि, यवद्वीप (इण्डोनेशिया), कम्बोज, चम्पा",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha & Suvarnadvipa",
    approxEra: "Rigvedic Seer to Classical Maritime Era",
    primarySchool: "Shaiva Siddhanta & Vedic Agamic Maritime Ethics",
    astikaDarshana: "Shaiva/Shakta",
    coreEpistemology: "Integration of Vedic rituals with Shaiva Agamas; worship of Lord Shiva as the supreme teacher of wisdom (Bhatara Guru) who removes spiritual darkness, tames natural forces, and balances cosmic ecology.",
    vedicScriptureSource: {
      text: "Rigveda, Agastya Samhita & Prambanan/Canggal Inscriptions",
      chapterVerse: "Canggal Inscription of Java (732 CE) & Ramayana Yudha Kanda (Aditya Hridaya)",
      sanskritShloka: "ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम् । रावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम् ॥\nदैवतैश्च समागम्य द्रष्टुमभ्यागतो रणम् । उपगम्याब्रवीद्राममगस्त्यो भगवानृषिः ॥",
      transliteration: "tato yuddhaparikhrāntaṁ samare cintayā sthitam | rāvaṇaṁ cāgrato dṛṣṭvā yuddhāya samupasthitam ||\ndaivataiśca samāgamya draṣṭumabhyāgato raṇam | upagamyābravīdrāmamagastyo bhagavānṛṣiḥ ||",
      translation: "Beholding Rama fatigued on the battlefield, the glorious Sage Agastya, who had arrived with the gods to witness the battle, approached Rama and imparted to him the eternal Aditya Hridaya hymn."
    },
    keyTreatises: ["Agastya Samhita", "Aditya Hridaya Stotra (Ramayana)", "Agattiyam (Earliest Tamil Grammar)", "Lontar Agastya Parwa (Javanese-Balinese Palm Leaves)"],
    philosophicalDoctrines: [
      "Aditya Hridaya (Solar empowerment for vanquishing inner and outer obstacles)",
      "Bhatara Guru (Shiva as the primordial universal Guru of Southeast Asia)",
      "Pashupata & Shaiva Siddhanta harmonization",
      "Vedic hydraulics and geography (drinking the ocean / subduing Vindhyas)"
    ],
    globalInfluenceAndLegacy: "Statues of Agastya (depicted with beard, rosary, water pot, and sacred trident) are venerated in ancient temples throughout Indonesia (Prambanan, Dieng), Cambodia (Angkor), and Vietnam (Champa).",
    keyDisciplesOrDebateOpponents: ["Lopamudra (Philosopher-Wife)", "King Harischandra", "Tolkappiyar"]
  },
  {
    id: "dang-hyang-dwijendra",
    name: "Dang Hyang Dwijendra (Pedanda Sakti Nirartha)",
    sanskritName: "डाङ्ग ह्याङ्ग द्विजेन्द्र (निरर्थ)",
    epithet: "Architect of Balinese Vedic Synthesis, Tri Hita Karana & Padmasana Cosmology",
    region: "Yavadvipa / Bali (Nusantara / Indonesia)",
    regionCategory: "southeast_asia",
    regionNameSanskrit: "यवद्वीप / बलिद्वीप (इण्डोनेशिया)",
    dweepaOrVarsha: "Suvarnadvipa - Bali",
    approxEra: "c. 1489–1560 CE",
    primarySchool: "Ciwa-Buddha Tri Hita Karana (Balinese Non-Dual Vedic Philosophy)",
    astikaDarshana: "Shaiva/Shakta",
    coreEpistemology: "Supreme liberation is attained through Tri Hita Karana (Harmony with Hyang Widhi Wasa/God, Pawongan/fellow humans, and Palemahan/nature) mediated by the empty throne (Padmasana) honoring the unmanifest Achintya.",
    vedicScriptureSource: {
      text: "Balinese Lontar Dwijendra Tattwa & Kakawin Sutasoma",
      chapterVerse: "Lontar Dwijendra Tattwa / Kakawin Sutasoma 139.5",
      sanskritShloka: "ह्यङ् विधिकृपा त्रिसन्ध्या ध्यानमग्निहोत्रम् ।\n(Kawi: Bhinneka Tunggal Ika tan hana Dharma mangrwa) \nएकमेवाद्वितीयं ब्रह्म नेह नानास्ति किञ्चन ॥",
      transliteration: "hyang vidhikṛpā trisandhyā dhyānamagnihotram |\n(Bhinneka Tunggal Ika tan hana Dharma mangrwa)\nekamevādvitīyaṁ brahma neha nānāsti kiñcana ||",
      translation: "Unity in Diversity, there is no second Truth. God (Sang Hyang Widhi Wasa) is One without a second; through Tri Sandhya prayer and Agnihotra, cosmic balance is sustained."
    },
    keyTreatises: ["Dwijendra Tattwa", "Sebun Bangkung", "Geguritan Padmasana", "Kakawin Nirartha Prakreta"],
    philosophicalDoctrines: [
      "Tri Hita Karana (Tripartite harmony: Divine, Human, Ecological)",
      "Sang Hyang Widhi Wasa (Supreme Ineffable Achintya / Brahman)",
      "Padmasana Open-Air Lotus Throne architecture (Pura Besakih, Tanah Lot, Uluwatu)",
      "Tri Sandhya daily Gayatri protocol preserved across Bali"
    ],
    globalInfluenceAndLegacy: "Safeguarded and revolutionized the surviving Vedic-Hindu civilization in Bali after the fall of Majapahit, establishing world-famous architectural and spiritual landmarks.",
    keyDisciplesOrDebateOpponents: ["King Dalem Baturenggong", "Dang Hyang Astapaka"]
  },
  {
    id: "rishi-kaundinya-cambodia",
    name: "Maharshi Kaundinya (Preah Thaong / Hun-Tien)",
    sanskritName: "महर्षि कौण्डिन्य (कम्बोज देश संस्थापक)",
    epithet: "Philosopher-Founder of Vedic Civilization in Funan & Angkor (Cambodia)",
    region: "Suvarnabhumi / Kamboja (Modern Cambodia / Mekong Delta)",
    regionCategory: "southeast_asia",
    regionNameSanskrit: "कम्बोज देश (कम्बोडिया) / मेकाङ्ग तट",
    dweepaOrVarsha: "Suvarnabhumi - Kamboja",
    approxEra: "c. 1st Century CE",
    primarySchool: "Vedic Dharmashastra & Agamic Statecraft (Rajarshi Governance)",
    astikaDarshana: "Vedic Agamic",
    coreEpistemology: "Governance of human society must reflect cosmic Deva-Raja (divine-cosmic stewardship); statecraft is grounded in the laws of Manu and consecration of Shiva-Lingam and Vishnu mandalas.",
    vedicScriptureSource: {
      text: "My Son & Funan Sanskrit Inscriptions of Cambodia",
      chapterVerse: "Prasat Kandol Dom Inscription (Sanskrit Corpus of Cambodia)",
      sanskritShloka: "ततः कौण्डिन्यनामाभूत् द्विजः श्रुतिविदां वरः ।\nसोमया सह संसृज्य धर्मराज्यं प्रवर्तयत् ॥",
      transliteration: "tataḥ kauṇḍinyanāmābhūt dvijaḥ śrutividāṁ varaḥ |\nsomayā saha saṁsṛjya dharmarājyaṁ pravartayat ||",
      translation: "There appeared a noble Brahmana named Kaundinya, foremost among the knowers of the Vedas, who united with Queen Soma (Nagi) and established a kingdom rooted in the eternal Vedic Dharma."
    },
    keyTreatises: ["Funan Sanskrit Legal Charters", "Kaundinya Smriti traditions in Southeast Asia"],
    philosophicalDoctrines: [
      "Dharmaraja & Devaraja statecraft based on Vedic Agamas",
      "Synthesis of indigenous matriarchal leadership with Vedic Sanskrit jurisprudence",
      "Hydraulic temple mandalas representing Mount Meru on earth",
      "Establishment of Sanskrit education and Pashupata monastic universities in Khmer lands"
    ],
    globalInfluenceAndLegacy: "Laid the philosophical, epigraphic, and architectural foundations for the Khmer Empire, leading directly to the creation of the world's largest religious monument: Angkor Wat.",
    keyDisciplesOrDebateOpponents: ["Queen Soma (Neang Neak)", "Gunavarman"]
  },

  // 5. YAVANADVIPA, GREECE, ALEXANDRIA & MEDITERRANEAN
  {
    id: "yavanacharya-varahamihira",
    name: "Yavanacharya (The Yavana Sages of Jyotisha & Philosophy)",
    sanskritName: "यवनाचार्य (बृहत्संहिता एवं पञ्चसिद्धान्तिका प्रतिपादित)",
    epithet: "Greek & Alexandrian Sages Honored as Rishis in Vedic Astronomical Texts",
    region: "Yavanadvipa / Alexandria / Ancient Greece / Ionia",
    regionCategory: "yavana_mediterranean",
    regionNameSanskrit: "यवनद्वीप / रोमक / अलेक्जेंड्रिया",
    dweepaOrVarsha: "Plakshadvipa / Yavanadvipa",
    approxEra: "c. 3rd Century BCE – 2nd Century CE",
    primarySchool: "Yavana Jyotisha & Heliocentric Geometry (Romaka & Paulisha Siddhantas)",
    astikaDarshana: "Global Cognate / Yavana",
    coreEpistemology: "The movement of celestial bodies, mathematical epicycles, and cosmic periods obey inviolable astronomical laws, proving the unity of natural philosophy between Aryavarta and the Yavanas.",
    vedicScriptureSource: {
      text: "Varahamihira's Brihat Samhita & Panchasiddhantika",
      chapterVerse: "Brihat Samhita 2.14",
      sanskritShloka: "म्लेच्छा हि यवनास्तेषु सम्यक् शास्त्रमिदं स्थितम् ।\nऋषिवत् तेऽपि पूज्यन्ते किं पुनर्दैवविद् द्विजः ॥",
      transliteration: "mlecchā hi yavanāsteṣu samyak śāstramidaṁ sthitam |\nṛṣivat te'pi pūjyante kiṁ punardaivavid dvijaḥ ||",
      translation: "Though the Yavanas are foreigners, this sacred science of astrology and cosmic mathematics is thoroughly established among them. Therefore, they are venerated like Rishis; how much more then a twice-born astronomer?"
    },
    keyTreatises: ["Yavanajataka (of Sphujidhvaja / Yavaneshwara)", "Paulisha Siddhanta", "Romaka Siddhanta"],
    philosophicalDoctrines: [
      "Mathematical epicycle calculation and planetary longitudes",
      "Horoscopy and Dodecatemoria aligned with Vedic Rashis",
      "Reverence for foreign masters of science as equivalent to Rishis",
      "Cross-cultural harmonization of Hellenistic and Vedic planetary cosmologies"
    ],
    globalInfluenceAndLegacy: "Stands as indisputable textual proof in Vedic literature of the deep mutual respect, scholarly exchange, and philosophical kinship between ancient India and the Mediterranean.",
    keyDisciplesOrDebateOpponents: ["Varahamihira", "Aryabhata I", "Sphujidhvaja"]
  },
  {
    id: "pythagoras-of-samos",
    name: "Pythagoras of Samos",
    sanskritName: "पिथागोरस (सामोस देशीय यवन ऋषि)",
    epithet: "Greek Philosopher of Transmigration (Metempsychosis), Ahimsa & Cosmic Harmonics",
    region: "Samos / Magna Graecia (Croton) — Traveled to Egypt & India (Yavanadvipa)",
    regionCategory: "yavana_mediterranean",
    regionNameSanskrit: "यवनद्वीप / सामोस / क्रोटोन",
    dweepaOrVarsha: "Yavanadvipa",
    approxEra: "c. 570–495 BCE",
    primarySchool: "Harmonics of Numbers & Metempsychosis (Punarjanma & Shulba Geometry)",
    astikaDarshana: "Global Cognate / Yavana",
    coreEpistemology: "All things are numbers and vibrations; the soul is immortal and undergoes transmigration (Punarjanma) through various bodily forms until purified by philosophical contemplation, Ahimsa (vegetarianism), and cosmic mathematics.",
    vedicScriptureSource: {
      text: "Baudhayana Shulba Sutras (Cognate) & Porphyry's Life of Pythagoras",
      chapterVerse: "Baudhayana Shulba Sutra 1.48 (Geometric Theorem) & Porphyry c. 19",
      sanskritShloka: "दीर्घचतुरश्रस्याक्ष्णया रज्जुः पार्श्वमानी तिर्यङ् मानी च ।\nयत्पृथग्भूते कुरुतस्तदुभयं करोति ॥\n(Porphyry: He visited the Egyptians, Arabians, Chaldeans, and the Brahmans of India...)",
      transliteration: "dīrghacaturaśrasyākṣṇayā rajjuḥ pārśvamānī tiryaṅ mānī ca |\nyatpṛthagbhūte kurutastadubhayaṁ karoti ||",
      translation: "The diagonal cord of an oblong produces both areas which the flanking and transverse sides produce separately. (Identical to the Pythagorean geometric theorem)."
    },
    keyTreatises: ["Golden Verses of Pythagoras", "Oral Brotherhood Treatises (Akousmata and Mathēmatikoi)"],
    philosophicalDoctrines: [
      "Metempsychosis (Punarjanma / Rebirth of the soul according to karma)",
      "Strict Vegetarianism and Ahimsa toward all sentient beings",
      "Musica Universalis (Music of the Spheres / Nada-Brahman harmonics)",
      "Sacred Geometry of the Tetractys and Right-Angled Triangles (Sulba Sutras)"
    ],
    globalInfluenceAndLegacy: "Voltaire, François Bernier, and Indologists noted that Pythagoras's core teachings—vegetarianism, reincarnation, and geometry—were direct cognates inherited from his study with Indian Brahmans.",
    keyDisciplesOrDebateOpponents: ["Philolaus", "Archytas", "Empedocles"]
  },
  {
    id: "plotinus-neoplatonism",
    name: "Plotinus & Ammonius Saccas",
    sanskritName: "प्लोटिनस एवं अम्मोनियस सक्कास (अलेक्जेंड्रिया)",
    epithet: "Founders of Neoplatonism: The Transcendent 'One' (To Hen) & Monistic Emanation",
    region: "Alexandria, Egypt & Rome (Joined Emperor Gordian III's expedition to India)",
    regionCategory: "yavana_mediterranean",
    regionNameSanskrit: "रोमक / अलेक्जेंड्रिया (मिस्र)",
    dweepaOrVarsha: "Romaka / Yavanadvipa",
    approxEra: "c. 204–270 CE",
    primarySchool: "Neoplatonic Monism (Direct Cognate to Advaita Vedanta)",
    astikaDarshana: "Global Cognate / Yavana",
    coreEpistemology: "The ultimate source of all existence is 'The One' (To Hen / Nirguna Brahman) beyond all being, thought, and duality, from which emanates Divine Intellect (Nous / Mahat), the World Soul (Psyche / Hiranyagarbha), and matter.",
    vedicScriptureSource: {
      text: "The Enneads (Plotinus) & Mandukya Upanishad Cognate",
      chapterVerse: "Enneads VI.9.3 & Mandukya Upanishad Mantra 7",
      sanskritShloka: "नान्तष्प्रज्ञं न बहिष्प्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनम् ।\nअदृष्टमव्यवहार्यमग्राह्यमलक्षणमचिन्त्यमव्यपदेश्यमेकात्मप्रत्ययसारम् ॥",
      transliteration: "nāntaṣprajñaṁ na bahiṣprajñaṁ nobhayataḥprajñaṁ na prajñānaghanam |\nadṛṣṭamavyavahāryamagrāhyamalakṣaṇamacintyamavyapadeśyamekātmapratyayasāram ||",
      translation: "The Fourth (Turiya) is neither inward nor outward conscious, ungraspable, ineffable, the essence of the consciousness of the One Self, the peaceful, the auspicious, non-dual."
    },
    keyTreatises: ["The Six Enneads (Compiled by Porphyry)"],
    philosophicalDoctrines: [
      "The One (To Hen: Indivisible, Transcendent, Non-Dual Source)",
      "Emanationism (Cosmos as radiant overflow of divine light, not creation ex nihilo)",
      "Henosis (Ecstatic mystical union of the soul with the Supreme One)",
      "The Three Hypostases: The One, The Intellect (Nous), and The Soul"
    ],
    globalInfluenceAndLegacy: "Directly reshaped Western Christian mysticism (Pseudo-Dionysius, Meister Eckhart), Islamic Sufism (Ibn Arabi), and Renaissance humanism through unmistakable Upanishadic non-dual structures.",
    keyDisciplesOrDebateOpponents: ["Porphyry", "Iamblichus", "Hypatia of Alexandria"]
  },

  // 6. MAHACHINA, BHOTADESHA & EAST ASIA
  {
    id: "vasishtha-cinachara",
    name: "Maharshi Vasishtha (Cinachara & Mahachina Tantra)",
    sanskritName: "महर्षि वसिष्ठ (महाचीन साधन एवं तारा विद्या)",
    epithet: "Saptarshi Visionary Who Journeyed to Mahachina to Realize Tara Vidya",
    region: "Mahachina (Ancient China / Tibet / Far East) & Bharatavarsha",
    regionCategory: "mahachina_tibet_east",
    regionNameSanskrit: "महाचीन / भोटदेश / कैलास",
    dweepaOrVarsha: "Jambudvipa - Mahachina & Uttarakuru",
    approxEra: "Puranic Antiquity (Documented in Rudrayamala & Brahmayamala Tantras)",
    primarySchool: "Cinachara Tantra & Non-Dual Tara Vidya (Vedic-Taoist Synthesis)",
    astikaDarshana: "Shaiva/Shakta",
    coreEpistemology: "Supreme transcendence is attained through spontaneous natural awareness (Sahaja), recognizing pure divinity in all actions without rigid ritual dualities, bridging Vedic Mahavidya with Taoist internal alchemy.",
    vedicScriptureSource: {
      text: "Rudrayamala Tantra & Mahachinachara Tantra",
      chapterVerse: "Rudrayamala Tantra Patala 17",
      sanskritShloka: "गत्वा च भारते वर्षे महाचीनं समाश्रितः ।\nतत्र गत्वा वसिष्ठश्च ददर्श तारां महादेवीम् ॥\nबुद्धरूपं समालोक्य ज्ञानयुक्तं जगद्गुरुम् ॥",
      transliteration: "gatvā ca bhārate varṣe mahācīnaṁ samāśritaḥ |\ntatra gatvā vasiṣṭhaśca dadarśa tārāṁ mahādevīm ||\nbuddharūpaṁ samālokya jñānayuktaṁ jagadgurum ||",
      translation: "Having departed Bharatavarsha, Sage Vasishtha took shelter in Mahachina (Great China). Arriving there, he beheld the Great Mother Tara and witnessed the synthesis of wisdom embodying the universal Master."
    },
    keyTreatises: ["Cinachara Tantra", "Vasishtha Samhita", "Yoga Vasishtha (Dialogue with Sri Rama)"],
    philosophicalDoctrines: [
      "Cinachara (Trans-Himalayan path of unconditioned pure awareness)",
      "Tara Mahavidya (The goddess who ferries consciousness across the ocean of samsara)",
      "Integration of Vedic mantra science with East Asian internal meditation",
      "Ajata-Vada in Yoga Vasishtha (Theory of non-origination: reality as pure consciousness)"
    ],
    globalInfluenceAndLegacy: "Documents the sacred historic trans-Himalayan philosophical synthesis between Indian Vedic Mahavidyas and Chinese-Tibetan meditative traditions.",
    keyDisciplesOrDebateOpponents: ["Arundhati (Spiritual Partner)", "Sage Vishvamitra", "Sri Ramachandra"]
  },
  {
    id: "bodhidharma-kanchipuram",
    name: "Acharya Bodhidharma (Da Mo)",
    sanskritName: "आचार्य बोधिधर्म (काञ्चीपुरम् पल्लव राजकुमार)",
    epithet: "Pallava Prince Who Brought Dhyana (Chan / Zen) & Martial Kalaripayattu to China",
    region: "Kanchipuram, Tamil Nadu to Shaolin Monastery, Song Mountain, China",
    regionCategory: "mahachina_tibet_east",
    regionNameSanskrit: "काञ्चीपुरम् (भारत) तः शाओलिन / हेनान (चीन)",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha & Mahachina",
    approxEra: "c. 5th–6th Century CE",
    primarySchool: "Chan / Zen Dhyana (Direct Mind-to-Mind Transmission & Lankavatara Sutra)",
    astikaDarshana: "Global Cognate / Yavana",
    coreEpistemology: "A special transmission outside the scriptures; not founded upon words and letters; pointing directly to the human mind; seeing into one's true nature and attaining realization.",
    vedicScriptureSource: {
      text: "Lankavatara Sutra & Anthology of the Patriarchal Hall",
      chapterVerse: "Bodhidharma's Two Entrances and Four Practices",
      sanskritShloka: "चित्तमात्रं समाश्रित्य बाह्यार्थं न प्रकल्पयेत् ।\n(Chinese: 不立文字 教外別傳 直指人心 見性成佛) \nआत्मन्येवात्मानं पश्येत् सर्वं ब्रह्मेति संस्थितम् ॥",
      transliteration: "cittamātraṁ samāśritya bāhyārthaṁ na prakalpayet |\n(Bù lì wénzì, jiàowài biéchuán, zhízhǐ rénxīn, jiànxìng chéngfó)\nātmanyevātmānaṁ paśyet sarvaṁ brahmeti saṁsthitam ||",
      translation: "Relying on Pure Consciousness alone, do not construct external dualities. Without relying on letters, transmit directly outside scriptures: point directly to the heart-mind, see into your true nature, and awaken."
    },
    keyTreatises: ["Treatise on the Two Entrances and Four Practices", "Bloodstream Sermon", "Wake-up Sermon", "Breakthrough Sermon"],
    philosophicalDoctrines: [
      "Wall-Gazing Meditation (Biguan / Still Dhyana)",
      "Direct intuition of the Buddha-Nature (identical to Atma-Sakshatkara)",
      "Integration of physical breath, Prana, and martial discipline (Shaolin Kung Fu / Kalaripayattu)",
      "Four Practices: Accepting retribution, Adapting to conditions, Seeking nothing, Accordance with Dharma"
    ],
    globalInfluenceAndLegacy: "Transformed East Asian civilization permanently, founding Chan in China, Zen in Japan, Seon in Korea, and Thiền in Vietnam, alongside the world's most famous martial tradition.",
    keyDisciplesOrDebateOpponents: ["Dazu Huike (Second Patriarch)", "Emperor Wu of Liang"]
  },
  {
    id: "padmasambhava-rinpoche",
    name: "Guru Padmasambhava (Guru Rinpoche)",
    sanskritName: "गुरु पद्मसम्भव (ओड्डियान / स्वात घाटी)",
    epithet: "The Lotus-Born Master Who Consecrated Samye & Established Dzogchen in Tibet",
    region: "Oddiyana (Swat Valley) to Tibet, Bhutan, Nepal, and Himalayas",
    regionCategory: "mahachina_tibet_east",
    regionNameSanskrit: "ओड्डियान (स्वात) तः भोटदेश (तिब्बत) एवं भूटान",
    dweepaOrVarsha: "Jambudvipa - Oddiyana & Bhotadesha",
    approxEra: "c. 8th Century CE",
    primarySchool: "Dzogchen (The Great Perfection / Atiyoga) & Tantric Transformation",
    astikaDarshana: "Global Cognate / Yavana",
    coreEpistemology: "The nature of mind is primordial purity (Kadag) and spontaneous presence (Lhundrub); all phenomena arise as the self-radiant play of rigpa (pristine awareness) free from effort.",
    vedicScriptureSource: {
      text: "The Tibetan Book of the Dead (Bardo Thodol) & Dzogchen Tantras",
      chapterVerse: "Self-Liberation through Seeing with Naked Awareness",
      sanskritShloka: "स्वभावशुद्धं विमलं प्रत्यगात्मानमद्वयम् ।\nसर्वाकारवरोपेतं सर्वज्ञं ज्ञानसागरम् ॥",
      transliteration: "svabhāvaśuddhaṁ vimalaṁ pratyagātmānamadvayam |\nsarvākāravaropetaṁ sarvajñaṁ jñānasāgaram ||",
      translation: "Pristine, intrinsically pure, and stainless is the non-dual inner Self, endowed with all supreme qualities, omniscient, and an ocean of wisdom."
    },
    keyTreatises: ["Bardo Thodol (Liberation by Hearing in the Intermediate State)", "Manjushrimitra Dialogues", "Terma Treasure Treatises"],
    philosophicalDoctrines: [
      "Rigpa (Self-radiant pristine non-dual awareness)",
      "Trekchö (Cutting through spiritual clinging) & Tögal (Direct leap into pure reality)",
      "Terma Tradition (Hiding spiritual treasures in elements, space, and mind for future eras)",
      "Subjugation and harmonization of local ecological and planetary spirit energies"
    ],
    globalInfluenceAndLegacy: "Revered throughout the Himalayan kingdom as the Second Buddha; united Indian Tantric and Vedic-Agamic metaphysics with the landscape and culture of Tibet, Bhutan, and Ladakh.",
    keyDisciplesOrDebateOpponents: ["Yeshe Tsogyal", "King Trisong Detsen", "Vimalamitra"]
  },

  // 7. MAYA DANAVA & TRANS-OCEANIC HEMISPHERES (PATALA & AMERICAS)
  {
    id: "maya-danava",
    name: "Maharshi Maya Danava",
    sanskritName: "मय दानव (सूर्यसिद्धान्त एवं मयमत प्रणेता)",
    epithet: "Cosmologist, Master Architect of the Devas and Asuras, Author of Surya Siddhanta",
    region: "Patala Loka (Western / Antipodal Hemispheres) to Bharatavarsha",
    regionCategory: "transoceanic_patala",
    regionNameSanskrit: "पाताल लोक (पश्चिमी गोलार्ध) एवं भारतवर्ष",
    dweepaOrVarsha: "Patala Loka / Western Continents (Pushkara / Krauncha)",
    approxEra: "End of Satya Yuga (Surya Siddhanta Revelation)",
    primarySchool: "Surya Siddhanta Planetary Astronomy & Vastu Shastra Architecture",
    astikaDarshana: "Vedic Agamic",
    coreEpistemology: "The cosmos is a mathematical manifestation of solar energy and sacred geometric proportions; celestial positions, planetary diameters, and equinoctial precessions precisely govern earthly architecture and consciousness.",
    vedicScriptureSource: {
      text: "Surya Siddhanta & Mayamata",
      chapterVerse: "Surya Siddhanta Madhyamadhikara 1.2-4 & 1.6",
      sanskritShloka: "अल्पावशिष्टे तु कृते मयो नाम महासुरः ।\nरहस्यं परमं पुण्यं जिज्ञासुर्ज्ञानमुत्तमम् ॥\nतस्मै प्रकाशं प्रत्यक्षं ददावग्र्यं विवस्वतः ।",
      transliteration: "alpāvaśiṣṭe tu kṛte mayo nāma mahāsuraḥ |\nrahasyaṁ paramaṁ puṇyaṁ jijñāsurjñānamuttamam ||\ntasmai prakāśaṁ pratyakṣaṁ dadāvagryaṁ vivasvataḥ |",
      translation: "When only a little of the Satya (Krita) Yuga remained, a great master named Maya, desiring to understand the supreme sacred mystery of cosmic science, performed penance to the Sun God, who bestowed upon him the direct revelation of the universe."
    },
    keyTreatises: ["Surya Siddhanta", "Mayamata (Vastu Shastra Treatises)", "Maya Vastu Shilpa"],
    philosophicalDoctrines: [
      "Spherical Earth floating unsupported in space with antipodal inhabitants (Bhugola)",
      "Exact calculations of planetary orbits, synodic periods, and lunar eclipses",
      "Vastu Purusha Mandala (Sacred 64 and 81 grid resonance in architectural engineering)",
      "Yuga Chronology (4,320,000 year Mahayuga cycles)"
    ],
    globalInfluenceAndLegacy: "The architectural, calendrical, and astronomical parallels between Maya Danava's Surya Siddhanta and the Mesoamerican Maya pyramid architecture and calendar mathematics remain one of the most intriguing cross-continental correlations in ancient science.",
    keyDisciplesOrDebateOpponents: ["Vivasvan (Surya's Celestial Emissary)", "Mandodari (Daughter)", "Pandavas (Mayasabha builder)"]
  },

  // 8. THE 12 MAHAJANAS (UNIVERSAL COSMIC PHILOSOPHERS)
  {
    id: "brahma-prajapati",
    name: "Lord Brahma (Svayambhu)",
    sanskritName: "भगवान् ब्रह्मा (स्वयम्भू)",
    epithet: "First Progenitor of the Cosmos, Bearer of the Four Vedas, Supreme Cosmologist",
    region: "Satya Loka (Brahma Loka) — All 14 Planetary Spheres",
    regionCategory: "twelve_mahajanas",
    regionNameSanskrit: "सत्यलोक / ब्रह्मलोक (त्रैलोक्य)",
    dweepaOrVarsha: "Universal / Cosmic",
    approxEra: "Beginning of the Shvetavaraha Kalpa (1.972 Billion Years Ago)",
    primarySchool: "Brahma Sampradaya & Vedic Revelation",
    astikaDarshana: "Vedanta",
    isTwelveMahajana: true,
    coreEpistemology: "Supreme Brahman is Govinda, the primal Lord (Ishvara Parama Krishna Sachidananda Vigraha), from whose glance material nature is activated and the four Vedas are sounded as cosmic blueprints.",
    vedicScriptureSource: {
      text: "Srimad Bhagavatam & Brahma Samhita",
      chapterVerse: "Bhagavatam 6.3.20 & Brahma Samhita 5.1",
      sanskritShloka: "स्वयम्भूर्नारदः शम्भुः कुमारः कपिलो मनुः ।\nप्रह्लादो जनको भीष्मो बलिर्वैयासकिर्वयम् ॥\nईश्वरः परमः कृष्णः सच्चिदानन्दविग्रहः । अनादिरादिर्गोविन्दः सर्वकारणकारणम् ॥",
      transliteration: "svayambhūrnāradaḥ śambhuḥ kumāraḥ kapilo manuḥ |\nprahlādo janako bhīṣmo balirvaiyāsakirvayam ||\nīśvaraḥ paramaḥ kṛṣṇaḥ saccidānandavigrahaḥ | anādirādirgovindaḥ sarvakāraṇakāraṇam ||",
      translation: "Lord Brahma, Narada, Shiva, the Four Kumaras, Kapila, Manu, Prahlada, Janaka, Bhishma, Bali, Sukadeva, and Yamaraja — these twelve understand the pure eternal Dharma. Krishna is the Supreme Ishvara, of eternity, knowledge, and bliss, the cause of all causes."
    },
    keyTreatises: ["Brahma Samhita", "Chatushloki Bhagavatam (Bhagavatam 2.9)"],
    philosophicalDoctrines: [
      "Cosmic creation via Shabda-Brahman (primordial sound matrix)",
      "Universal design of 14 Lokas and planetary orbits",
      "Transmission of the Vedas to Narada and the Saptarshis"
    ],
    globalInfluenceAndLegacy: "The source of the Brahma-Madhva-Gaudiya Sampradaya and the cosmological architecture of all Puranas.",
    keyDisciplesOrDebateOpponents: ["Narada Muni", "The 4 Kumaras", "Marichi & Saptarshis"]
  },
  {
    id: "narada-muni",
    name: "Deva-Rishi Narada",
    sanskritName: "देवर्षि नारद",
    epithet: "Cosmic Traveling Sage of Bhakti Sutras, Nada Yoga & Srimad Bhagavatam Inspiration",
    region: "Triloka (All Three Worlds: Svarga, Martya, Patala & All Continents)",
    regionCategory: "twelve_mahajanas",
    regionNameSanskrit: "त्रैलोक्य सञ्चारी (स्वर्ग, मर्त्य, पाताल)",
    dweepaOrVarsha: "Triloka Sanchari (Universal)",
    approxEra: "Eternal Across All Kalpas and Manvantaras",
    primarySchool: "Bhakti Darshana & Nada Yoga (Spiritual Sound Metaphysics)",
    astikaDarshana: "Vedanta",
    isTwelveMahajana: true,
    coreEpistemology: "Supreme liberation is attained through unconditional, unmotivated divine love (Parama Prema Rupa), wherein the individual consciousness completely merges in devotional absorption with the Divine Name.",
    vedicScriptureSource: {
      text: "Narada Bhakti Sutras & Srimad Bhagavatam",
      chapterVerse: "Narada Bhakti Sutra 1.2-3",
      sanskritShloka: "सा त्वस्मिन् परमप्रेमरूपा ॥ अमृतस्वरूपा च ॥\nयल्लव्ध्वा पुमान् सिद्धो भवति, अमृतो भवति, तृप्तो भवति ॥",
      transliteration: "sā tvasmin paramapremarūpā || amṛtasvarūpā ca ||\nyallabdhvā pumān siddho bhavati, amṛto bhavati, tṛpto bhavati ||",
      translation: "Bhakti is of the nature of supreme, intense love for the Divine. It is of the nature of immortality, attaining which a person becomes perfected, immortal, and completely fulfilled."
    },
    keyTreatises: ["Narada Bhakti Sutras (84 Sutras)", "Narada Pancharatra", "Naradiya Shiksha (Musicology)", "Narada Purana"],
    philosophicalDoctrines: [
      "Parama-Prema (Supreme Love as the 5th Purushartha, transcending Moksha)",
      "Veena Mahati (The universe vibrating as Nada-Brahman acoustic frequency)",
      "Initiation of Vyasa to compose Srimad Bhagavatam",
      "Universal accessibility of devotion regardless of caste, species, or realm"
    ],
    globalInfluenceAndLegacy: "The universal spiritual catalyst across all Vedic history; transformed Valmiki, Prahlada, Dhruva, Vyasa, and King Chitraketu.",
    keyDisciplesOrDebateOpponents: ["Maharshi Veda Vyasa", "Prahlada Maharaja", "Dhruva Maharaja", "Valmiki"]
  },
  {
    id: "shambhu-shiva",
    name: "Lord Shiva (Shambhu / Dakshinamurti)",
    sanskritName: "भगवान् शम्भु / दक्षिणामूर्ति",
    epithet: "Primordial Guru of Silence, Yoga, Tantra, Music and All 64 Arts",
    region: "Mount Kailash / Banyan Tree of Dakshinamurti (Trans-Cosmic)",
    regionCategory: "twelve_mahajanas",
    regionNameSanskrit: "कैलास / दक्षिणामूर्ति क्षेत्र",
    dweepaOrVarsha: "Universal / Cosmic",
    approxEra: "Anadi (Beginningless)",
    primarySchool: "Pashupata & Shaiva Darshana / Silence of Dakshinamurti",
    astikaDarshana: "Shaiva/Shakta",
    isTwelveMahajana: true,
    coreEpistemology: "The ultimate Truth is communicated in pregnant, profound Silence (Mouna-Vyakhyana), dissolving the disciple's doubts instantly by revealing the Self as pure Awareness (Dakshinamurti).",
    vedicScriptureSource: {
      text: "Sri Dakshinamurti Stotram & Shvetashvatara Upanishad",
      chapterVerse: "Dakshinamurti Stotram Verse 1 & Shvetashvatara 3.11",
      sanskritShloka: "चित्रं वटतरोर्मूले वृद्धाः शिष्या गुरुर्युवा ।\nगुरोस्तु मौनं व्याख्यानं शिष्यास्तु छिन्नसंशयाः ॥\nविश्वं दर्पणदृश्यमाननगरीतुल्यं निजान्तर्गतम् ॥",
      transliteration: "citraṁ vaṭatorormūle vṛddhāḥ śiṣyā gururyuvā |\ngurostu maunaṁ vyākhyānaṁ śiṣyāstu chinnasaṁśayāḥ ||\nviśvaṁ darpaṇadṛśyamānanagarītulyaṁ nijāntargatam ||",
      translation: "How wondrous beneath the banyan tree: the disciples are aged sages, while the Guru is ever-youthful! The Guru's exposition is deep Silence, yet all doubts of the disciples are eradicated. The universe is like a city seen within a mirror."
    },
    keyTreatises: ["Shiva Sutras", "Vijnana Bhairava Tantra (112 Meditation Techniques)", "Dakshinamurti Stotram", "Rudra Samhita"],
    philosophicalDoctrines: [
      "112 Dharanas for instantaneous enlightenment (Vijnana Bhairava)",
      "Mouna-Upadesha (Silent direct transmission of Brahman)",
      "Prakasha-Vimarsha (Pure light and infinite self-reflection)",
      "Nataraja Tandava (Cosmic continuous 5-fold acts: Srishti, Sthiti, Samhara, Tirobhava, Anugraha)"
    ],
    globalInfluenceAndLegacy: "The source of all 64 classical sciences, classical dance, Sanskrit grammar phonemes (Maheshvara Sutras), and Yogic meditation postures.",
    keyDisciplesOrDebateOpponents: ["The 4 Kumaras (Sanaka, Sanandana, Sanatana, Sanatkumara)", "Sage Agastya", "Patanjali"]
  },
  {
    id: "janaka-maharshi",
    name: "Maharaja Janaka (Videha)",
    sanskritName: "महाराज जनक (विदेह)",
    epithet: "The Rajarshi (King-Sage) of Nishkama Karma Yoga & Ashtavakra Gita Disciple",
    region: "Mithila / Videha (Bharatavarsha)",
    regionCategory: "twelve_mahajanas",
    regionNameSanskrit: "मिथिला / विदेह मण्डल",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "Treta-Dvapara Eras (Ramayana & Upanishads)",
    primarySchool: "Karma Yoga & Ashtavakra Non-Dualism (Ashtavakra Samhita)",
    astikaDarshana: "Vedanta",
    isTwelveMahajana: true,
    coreEpistemology: "One can rule a sovereign empire in the world while remaining completely unattached and spiritually liberated (Jivanmukta), because the Atman is unentangled in the actions of the body and mind.",
    vedicScriptureSource: {
      text: "Bhagavad Gita & Ashtavakra Gita",
      chapterVerse: "Gita 3.20 & Ashtavakra Gita 1.1-2",
      sanskritShloka: "कर्मणैव हि संसिद्धिमास्थिता जनकादयः ।\nलोकसंग्रहमेवापि संपश्यन्कर्तुमर्हसि ॥",
      transliteration: "karmaṇaiva hi saṁsiddhimāsthitā janakādayaḥ |\nlokasaṁgrahamevāpi saṁpaśyankartumarhasi ||",
      translation: "Janaka and other great kings attained perfection through selfless action alone (Karma Yoga). Therefore, you too should perform your duty, keeping in view the welfare and guidance of the world."
    },
    keyTreatises: ["Ashtavakra Gita (Dialogue between Sage Ashtavakra and King Janaka)", "Janaka-Sulabha Samvada (Mahabharata Shanti Parva)"],
    philosophicalDoctrines: [
      "Jivanmukti in statecraft (Action without attachment / Nishkama Karma)",
      "Ashtavakra Direct Realization (You are not the body, you are pure consciousness)",
      "Lokasamgraha (Selfless stewardship for the maintenance of society)",
      "Patronage of the greatest philosophical symposia in world history"
    ],
    globalInfluenceAndLegacy: "Cited by Sri Krishna in the Bhagavad Gita as the ultimate historical exemplar of enlightened leadership and selfless action.",
    keyDisciplesOrDebateOpponents: ["Sage Ashtavakra (Guru)", "Maharshi Yajnavalkya", "Sulabha (Philosopher debate)"]
  },
  {
    id: "prahlada-maharaja",
    name: "Prahlada Maharaja",
    sanskritName: "प्रह्लाद महाराज",
    epithet: "Universal Master of Ananya Bhakti, Navadha Bhakti & Inviolable Faith",
    region: "Mulasthana (Multan / Kashyapa-pura / Jambudvipa)",
    regionCategory: "twelve_mahajanas",
    regionNameSanskrit: "मूलस्थान (मुलतान) / कश्यपपुर",
    dweepaOrVarsha: "Jambudvipa",
    approxEra: "Satya Yuga (Avatar of Lord Narasimha)",
    primarySchool: "Navadha Bhakti & Sarvatra Hari Darshana (Omnipresent Divinity)",
    astikaDarshana: "Vedanta",
    isTwelveMahajana: true,
    coreEpistemology: "The Supreme Lord is all-pervading (Sarva-Vyapi) in every pillar, atom, and living being; supreme friendship and compassion toward all creatures (Sarva-Bhuta-Hite Rata) is true worship.",
    vedicScriptureSource: {
      text: "Srimad Bhagavatam (Skandha 7)",
      chapterVerse: "Bhagavatam 7.5.23-24",
      sanskritShloka: "श्रवणं कीर्तनं विष्णोः स्मरणं पादसेवनम् ।\nअर्चनं वन्दनं दास्यं सख्यमात्मनिवेदनम् ॥\nइति पुंसाऽर्पिता विष्णौ भक्तिश्चेन्नवलक्षणा । क्रियेत भगवत्यद्धा तन्मन्येऽधीतमुत्तमम् ॥",
      transliteration: "śravaṇaṁ kīrtanaṁ viṣṇoḥ smaraṇaṁ pādasevanam |\narcanaṁ vandanaṁ dāsyaṁ sakhyamātmanivedanam ||\niti puṁsā'rpitā viṣṇau bhaktiścennavalakṣaṇā | kriyeta bhagavatyaddhā tanmanye'dhītamuttamam ||",
      translation: "Hearing, chanting, remembering, serving the lotus feet, worshiping, praying, executing servitude, cultivating intimate friendship, and completely surrendering the Self — these nine forms of devotion offer the highest realization."
    },
    keyTreatises: ["Prahlada Gita (Bhagavatam Skandha 7)", "Navadha Bhakti Matrix"],
    philosophicalDoctrines: [
      "Navadha Bhakti (Ninefold limbs of devotional epistemology)",
      "Sarvatra Hari-Darshana (Perceiving God everywhere including in the pillar)",
      "Equal vision towards friends, foes, and all living entities",
      "Transcendence of fear through unshakeable surrender to the Divine"
    ],
    globalInfluenceAndLegacy: "The eternal prototype of divine faith triumphing over totalitarian material power, celebrated worldwide during the festival of Holi.",
    keyDisciplesOrDebateOpponents: ["Hiranyakashipu (Father & Opponent)", "Asura schoolmates (Disciples)", "Sage Narada (Preceptor)"]
  },
  {
    id: "bhishma-pitamaha",
    name: "Bhishma Pitamaha (Devavrata)",
    sanskritName: "भीष्म पितामह (देवव्रत)",
    epithet: "Grand Patriarch of Kurus, Master of Rajadharma, Mokshadharma & Vishnu Sahasranama",
    region: "Hastinapura / Kurukshetra (Bharatavarsha)",
    regionCategory: "twelve_mahajanas",
    regionNameSanskrit: "हस्तिनापुर / कुरुक्षेत्र",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "Dvapara-Kali Transition (Kurukshetra War c. 3138 BCE)",
    primarySchool: "Dharmashastra, Rajadharma & Vishnu Sahasranama",
    astikaDarshana: "Vedanta",
    isTwelveMahajana: true,
    coreEpistemology: "Dharma is the supreme protector of society (Dharmo Rakshati Rakshitah); from the bed of arrows, Bhishma expounded the entire science of governance, duties of human beings, and the 1,000 sacred names of Vishnu.",
    vedicScriptureSource: {
      text: "Mahabharata Shanti Parva & Anushasana Parva",
      chapterVerse: "Anushasana Parva 149.4-5 (Vishnu Sahasranama)",
      sanskritShloka: "किमेकं दैवतं लोके किं वाप्येकं परायणम् ।\nस्तुवन्तः कं कमर्चन्तः प्राप्नुयुर्मानवाः शुभम् ॥\nजगतः प्रभुं देवदेवमनन्तं पुरुषोत्तमम् । स्तुवन्नामसहस्रेण पुरुषः सततोत्थितः ॥",
      transliteration: "kimekaṁ daivataṁ loke kiṁ vāpyekaṁ parāyaṇam |\nstuvantaḥ kaṁ kamarcantaḥ prāpnuyurmānavāḥ śubham ||\njagataḥ prabhuṁ devadevamanantaṁ puruṣottamam | stuvannāmasahasreṇa puruṣaḥ satatotthitaḥ ||",
      translation: "Yudhishthira asked: 'Who is the one Deity in the world? What is the supreme refuge? Praising whom do human beings attain all auspiciousness?' Bhishma replied: 'By meditating upon and praising with 1,000 names the Sovereign Lord of the Universe, Purushottama.'"
    },
    keyTreatises: ["Vishnu Sahasranama Stotram", "Rajadharma Parva", "Apaddharma Parva", "Mokshadharma Parva (Mahabharata Shanti Parva)"],
    philosophicalDoctrines: [
      "Vishnu Sahasranama (1,000 names containing the metaphysical summary of the Upanishads)",
      "Rajadharma (Duties, diplomacy, taxation, ethics, and judicial systems of a ruler)",
      "Apaddharma (Ethical conduct during national and personal catastrophic crises)",
      "Iccha-Mrityu (Transcendence of death through mastery of Prana)"
    ],
    globalInfluenceAndLegacy: "The Shanti and Anushasana Parvas delivered by Bhishma from his arrow bed constitute the world's most comprehensive encyclopedic treatise on ethics, politics, psychology, and liberation.",
    keyDisciplesOrDebateOpponents: ["Maharaja Yudhishthira", "Bhagavan Sri Krishna", "Sage Veda Vyasa", "Drona"]
  },
  {
    id: "sukadeva-gosvami",
    name: "Sri Sukadeva Gosvami (Vaiyasaki)",
    sanskritName: "श्री शुकदेव गोस्वामी (वैयासकि)",
    epithet: "Ever-Liberated Paramahamsa Who Spoke the 18,000 Verses of Srimad Bhagavatam",
    region: "Shuka Tala / Ganga Banks (Bharatavarsha)",
    regionCategory: "twelve_mahajanas",
    regionNameSanskrit: "शुकताल / गङ्गा तट / हस्तिनापुर",
    dweepaOrVarsha: "Jambudvipa - Bharatavarsha",
    approxEra: "Dvapara-Kali Transition (Parikshit's 7-Day Fast to Death)",
    primarySchool: "Bhagavata Vedanta & Paramahamsa Samhita",
    astikaDarshana: "Vedanta",
    isTwelveMahajana: true,
    coreEpistemology: "The highest fruit of all Vedic knowledge is Srimad Bhagavatam (Nigama-Kalpataror Galitam Phalam); supreme consciousness realizes the non-dual Absolute as Brahman (Impersonal Light), Paramatman (Inner Witness), and Bhagavan (Supreme Person).",
    vedicScriptureSource: {
      text: "Srimad Bhagavatam (Bhagavata Purana)",
      chapterVerse: "Bhagavatam 1.2.11 & 1.1.3",
      sanskritShloka: "वदन्ति तत्तत्त्वविदस्तत्त्वं यज्ज्ञानमद्वयम् ।\nब्रह्मेति परमात्मेति भगवानिति शब्द्यते ॥\nनिगमकल्पतरोर्गलितं फलं शुकमुखादमृतद्रवसंयुतम् ।\nपिबत भागवतं रसमालयं मुहुरहो रसिका भुवि भावुकाः ॥",
      transliteration: "vadanti tattattvavidastattvaṁ yajjñānamadvayam |\nbrahmeti paramātmeti bhagavāniti śabdyate ||\nnigamakalpatarorgalitaṁ phalaṁ śukamukhādamṛtadravasaṁyutam |\npibata bhāgavataṁ rasamālayaṁ muhuraho rasikā bhuvi bhāvukāḥ ||",
      translation: "Learned transcendentalists who know the Absolute Truth call this non-dual substance Brahman, Paramatman, or Bhagavan. Srimad Bhagavatam is the ripe fruit dropped from the wish-fulfilling tree of the Vedas, rendered even more nectarine by touching the lips of Sri Sukadeva."
    },
    keyTreatises: ["Srimad Bhagavatam (12 Skandhas, 335 Chapters, 18,000 Shlokas)"],
    philosophicalDoctrines: [
      "Tattva Tri-Vadhita: Brahman, Paramatman, and Bhagavan as facets of One Absolute",
      "Leela-Katha (Purification of the subconscious through divine narrative absorption)",
      "Paramahamsa-Sannyasa (Natural renunciation rooted in ecstatic inner fullness)",
      "Liberation in 7 days through concentrated contemplative hearing (Shravana)"
    ],
    globalInfluenceAndLegacy: "The primary teacher of the Bhagavata Purana, inspiring centuries of music, philosophy, temple iconography, and devotional revivals across the planet.",
    keyDisciplesOrDebateOpponents: ["Maharaja Parikshit", "Suta Gosvami", "Shaunaka and 88,000 Sages of Naimisharanya"]
  }
];
