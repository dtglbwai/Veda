export interface DynastyNode {
  id: string;
  nameEn: string;
  nameSa: string;
  titles?: string;
  generation: number;
  fatherId?: string;
  motherName?: string;
  spouseName?: string;
  dynasty: "Cosmic Origin" | "Svayambhuva Lineage" | "Suryavansha (Solar)" | "Chandravansha (Lunar)" | "Yaduvansha (Yadu)" | "Pauravavansha (Kuru/Bharata)" | "Saryati Lineage" | "Nabhaga Lineage";
  manvantara: number; // 1 to 7
  era?: string;
  description: string;
  keyFeats: string[];
  scripturalReferences: string[];
  childrenIds?: string[];
  isAvatarOrDivine?: boolean;
  avatarDetail?: string;
}

export interface ManvantaraRecord {
  id: number;
  nameEn: string;
  nameSa: string;
  orderNumber: string;
  isCurrent: boolean;
  manu: {
    nameEn: string;
    nameSa: string;
    parentage: string;
    description: string;
  };
  indra: {
    nameEn: string;
    nameSa: string;
    description: string;
  };
  avatar: {
    nameEn: string;
    nameSa: string;
    manifestation: string;
    significance: string;
  };
  saptarshis: {
    nameEn: string;
    nameSa: string;
    gotraOrRole: string;
  }[];
  devaGanas: {
    nameEn: string;
    count: string;
    members: string;
  }[];
  prominentSons: string[];
  durationYears: number; // 306,720,000 human years
  sandhiYears: number; // 1,728,000 human years
  puranicSignificance: string;
  keyEvents: string[];
  scripturalCitations: string[];
}

export const COSMIC_TIME_CONSTANTS = {
  humanYearPerDevaDay: 360,
  kritaYugaYears: 1728000,
  tretaYugaYears: 1296000,
  dvaparaYugaYears: 864000,
  kaliYugaYears: 432000,
  chaturyugaTotalYears: 4320000,
  chaturyugasPerManvantara: 71,
  manvantaraDurationYears: 306720000, // 71 * 4,320,000
  sandhiPeriodYears: 1728000, // Duration of Krita Yuga
  totalManvantarasInKalpa: 14,
  totalSandhisInKalpa: 15, // 1 before 1st + 14 after each
  kalpaTotalYears: 4320000000, // 1000 Mahayugas = 4.32 Billion Years
  currentManvantaraNumber: 7, // Vaivasvata
  currentMahayugaNumber: 28, // 28th Mahayuga
  currentYuga: "Kali Yuga",
  kaliYugaStartBCE: 3102, // 18 Feb 3102 BCE at departure of Sri Krishna
  kaliYugaElapsedYears2026: 5128 // Approximate elapsed years
};

export const MANVANTARA_CORPUS: ManvantaraRecord[] = [
  {
    id: 1,
    nameEn: "Svayambhuva Manvantara",
    nameSa: "स्वायम्भुव मन्वन्तर",
    orderNumber: "1st Epoch of Manu",
    isCurrent: false,
    manu: {
      nameEn: "Svayambhuva Manu",
      nameSa: "स्वायम्भुव मनु",
      parentage: "Manifested directly from the body of Lord Brahma & Queen Shatarupa (शतस्वरूपा)",
      description: "The primary progenitor of mankind in the Shvetavaraha Kalpa. Author of the foundational cosmic order and ancestral root of both cosmic dynasties."
    },
    indra: {
      nameEn: "Yajna (Yajnapati)",
      nameSa: "यज्ञ (यज्ञपति)",
      description: "Incarnation of Lord Vishnu born to Prajapati Ruchi and Akuti (daughter of Svayambhuva Manu), who assumed the throne of Indra."
    },
    avatar: {
      nameEn: "Kapila Muni & Yajna Avatar",
      nameSa: "कपिल मुनि एवं यज्ञावतार",
      manifestation: "Lord Kapila (son of Kardama Prajapati & Devahuti) expounded Sankhya Philosophy; Yajna sustained the celestial realms.",
      significance: "Founding of Sankhya Metaphysics, cosmogenesis enumeration, and cosmic sacrifice."
    },
    saptarshis: [
      { nameEn: "Marichi", nameSa: "मरीचि", gotraOrRole: "Prajapati, father of Kashyapa" },
      { nameEn: "Atri", nameSa: "अत्रि", gotraOrRole: "Father of Dattatreya, Soma, Durvasa" },
      { nameEn: "Angiras", nameSa: "अङ्गिरा", gotraOrRole: "Father of Brihaspati, Sage of Atharva" },
      { nameEn: "Pulaha", nameSa: "पुलह", gotraOrRole: "Prajapati of wildlife and nature" },
      { nameEn: "Kratu", nameSa: "क्रतु", gotraOrRole: "Master of 60,000 Valakhilya sages" },
      { nameEn: "Pulastya", nameSa: "पुलस्त्य", gotraOrRole: "Father of Vishrava, grandfather of Kubera & Ravana" },
      { nameEn: "Vashistha", nameSa: "वसिष्ठ", gotraOrRole: "Brahmarshi, guardian of Kamadhenu" }
    ],
    devaGanas: [
      { nameEn: "Yamas (यामाः)", count: "12", members: "Gods presiding over cosmic restraint and yajnas" },
      { nameEn: "Tushitas (तुषिताः)", count: "36", members: "Higher luminous celestials" }
    ],
    prominentSons: ["Priyavrata (प्रियव्रत)", "Uttanapada (उत्तानपाद)", "Akuti (आकूति - daughter)", "Devahuti (देवहूति - daughter)", "Prasuti (प्रसूति - daughter)"],
    durationYears: 306720000,
    sandhiYears: 1728000,
    puranicSignificance: "The foundation of the entire cosmic lineage. From Priyavrata arose the division of the 7 Earthly Continents (Sapta Dweepas: Jambu, Plaksha, Salmali, Kusha, Krauncha, Shaka, Pushkara). From Uttanapada arose the lineage of Dhruva, the unmoving Pole Star (Dhruvaloka).",
    keyEvents: [
      "Manifestation of Svayambhuva Manu and Shatarupa from Brahma's two halves.",
      "Descent of Lord Varaha to lift Bhudevi from the Cosmic Waters (Rasa / Garbhodaka).",
      "Kardama Muni's penance at Bindu Sarovar and birth of Lord Kapila to Devahuti.",
      "Dhruva's 6-month intense penance at Madhuvana achieving the immortal Dhruvaloka status.",
      "Priyavrata driving his divine celestial chariot to create the seven concentric oceans and seven Dweepas."
    ],
    scripturalCitations: [
      "Bhagavata Purana Skandha 3 (Ch. 12-33) & Skandha 4 (Ch. 1-12)",
      "Vishnu Purana Book 1 Ch. 7-13",
      "Manusmriti Chapter 1, Shlokas 32-36",
      "Matsya Purana Adhyaya 4"
    ]
  },
  {
    id: 2,
    nameEn: "Svarochisha Manvantara",
    nameSa: "स्वारोचिष मन्वन्तर",
    orderNumber: "2nd Epoch of Manu",
    isCurrent: false,
    manu: {
      nameEn: "Svarochisha Manu",
      nameSa: "स्वारोचिष मनु",
      parentage: "Son of Svarochi (son of the celestial maiden Varuthini and Gandharva Kali)",
      description: "Renowned for luminous radiance (Sva-Rochisha = self-effulgent) and mastery over all botanical, avian, and animal languages."
    },
    indra: {
      nameEn: "Rochana / Vipaschit",
      nameSa: "रोचन / विपश्चित्",
      description: "The sovereign of the celestial realm celebrated for luminous cosmic warfare and virtue."
    },
    avatar: {
      nameEn: "Vibhu Avatar",
      nameSa: "विभु अवतार",
      manifestation: "Son of Vedashiras and Tushita.",
      significance: "Guided 88,000 self-restrained Vaikhanasa ascetics in unbroken Brahmacharya and cosmic preservation."
    },
    saptarshis: [
      { nameEn: "Urja", nameSa: "ऊर्ज", gotraOrRole: "Sage of vital energy and Prana" },
      { nameEn: "Stambha", nameSa: "स्तम्भ", gotraOrRole: "Sage of cosmic stability" },
      { nameEn: "Prana", nameSa: "प्राण", gotraOrRole: "Master of breath mechanics" },
      { nameEn: "Dattoli (Rishabha)", nameSa: "दत्तोली", gotraOrRole: "Son of Pulastya Prajapati" },
      { nameEn: "Rishabha", nameSa: "ऋषभ", gotraOrRole: "Cosmic ascetic" },
      { nameEn: "Nischara", nameSa: "निश्चर", gotraOrRole: "Sage of immovable contemplation" },
      { nameEn: "Arvarivat (Chyavana)", nameSa: "अर्वरीवत्", gotraOrRole: "Seer of medicinal sciences" }
    ],
    devaGanas: [
      { nameEn: "Tushitas (तुषिताः)", count: "12", members: "Radiant deities" },
      { nameEn: "Paravatas (पारावताः)", count: "12", members: "Atmospheric celestial guides" }
    ],
    prominentSons: ["Dyumat (द्युमत्)", "Sushena (सुषेण)", "Rochishmat (रोचिष्मत्)", "Chaitra (चैत्र)", "Navagva (नवग्व)"],
    durationYears: 306720000,
    sandhiYears: 1728000,
    puranicSignificance: "Era marked by harmony with the animal and herbal kingdoms; Svarochisha learned the communication of flora and fauna, establishing forest sanctuaries.",
    keyEvents: [
      "Varuthini and Svarochi penance on Mount Mandara.",
      "Institution of Vaikhanasa Brahmacharya tradition by Vibhu Avatar.",
      "Defeat of asuric disturbances threatening the seasonal rhythms."
    ],
    scripturalCitations: [
      "Bhagavata Purana Skandha 8 Adhyaya 1 Shlokas 19-23",
      "Vishnu Purana Book 3 Chapter 1",
      "Markandeya Purana Adhyayas 61-68"
    ]
  },
  {
    id: 3,
    nameEn: "Uttama Manvantara",
    nameSa: "उत्तम मन्वन्तर",
    orderNumber: "3rd Epoch of Manu",
    isCurrent: false,
    manu: {
      nameEn: "Uttama Manu",
      nameSa: "उत्तम मनु",
      parentage: "Son of King Priyavrata and Queen Barhishmati (grandson of Svayambhuva Manu)",
      description: "Solemn ruler of pristine rectitude who expanded righteous governance across the oceans."
    },
    indra: {
      nameEn: "Sushanti / Satyajit",
      nameSa: "सुशान्ति / सत्यजित्",
      description: "Revered for subduing celestial turbulence through profound meditative peace."
    },
    avatar: {
      nameEn: "Satyasena Avatar",
      nameSa: "सत्यसेन अवतार",
      manifestation: "Son of Dharma and Sunrita.",
      significance: "Annihilated untruthful fiends (Yatudhanas), Yakshas, and evil spirits that harmed virtuous scholars and ascetics."
    },
    saptarshis: [
      { nameEn: "Kaukundihi", nameSa: "कौकुण्डिहि", gotraOrRole: "Sage of ritual liturgy" },
      { nameEn: "Kurundi", nameSa: "कुरुण्डि", gotraOrRole: "Vedic master" },
      { nameEn: "Dalbha", nameSa: "दाल्भ्य", gotraOrRole: "Sage of sacred chants" },
      { nameEn: "Sankha", nameSa: "शङ्ख", gotraOrRole: "Author of Dharma codes" },
      { nameEn: "Pravahana", nameSa: "प्रवाहण", gotraOrRole: "Panchala philosopher sage" },
      { nameEn: "Mita", nameSa: "मित", gotraOrRole: "Sage of planetary measures" },
      { nameEn: "Sammita", nameSa: "सम्मित", gotraOrRole: "Sage of mathematical cosmic balance" }
    ],
    devaGanas: [
      { nameEn: "Bhanus (भानवः)", count: "12", members: "Solar effulgence deities" },
      { nameEn: "Satyas (सत्याः)", count: "12", members: "Guardians of cosmic truth" },
      { nameEn: "Svadhyas (स्वाध्याः)", count: "12", members: "Preservers of sacred study" }
    ],
    prominentSons: ["Aja (अज)", "Parashu (परशु)", "Divya (दिव्य)", "Shantabhaya (शान्तभय)", "Mahavira (महावीर)"],
    durationYears: 306720000,
    sandhiYears: 1728000,
    puranicSignificance: "Demonstrated the victory of truthful vows (Satya Vrata) over deceit; universal protection of seekers across all seven dvipas.",
    keyEvents: [
      "Battle against the subterranean Rakshasas led by Satyasena.",
      "Consolidation of Vedic recensions under the guidance of Sage Dalbha."
    ],
    scripturalCitations: [
      "Bhagavata Purana Skandha 8 Adhyaya 1 Shlokas 24-29",
      "Vishnu Purana Book 3 Chapter 1",
      "Vayu Purana Chapter 62"
    ]
  },
  {
    id: 4,
    nameEn: "Tamasa (Tapasa) Manvantara",
    nameSa: "तामस मन्वन्तर",
    orderNumber: "4th Epoch of Manu",
    isCurrent: false,
    manu: {
      nameEn: "Tamasa Manu",
      nameSa: "तामस मनु",
      parentage: "Brother of Uttama, son of King Priyavrata",
      description: "Master of severe tapas (austerity) who pierced through cosmic darkness (Tamas) via Vedic light."
    },
    indra: {
      nameEn: "Shibhi / Trishikha",
      nameSa: "शिबि / त्रिशिख",
      description: "Famed for self-sacrifice, universal compassion, and unshakeable courage."
    },
    avatar: {
      nameEn: "Hari Avatar (Gajendra-Mokshadata)",
      nameSa: "हरि अवतार (गजेन्द्रमोक्षदाता)",
      manifestation: "Born to Harimedha and Harini.",
      significance: "Appeared on Garuda at Trikuta Mountain lake to rescue Gajendra the Elephant King from the jaws of the crocodile Makara (Huhu the Gandharva), imparting immortal liberation."
    },
    saptarshis: [
      { nameEn: "Jyotirdhama", nameSa: "ज्योतिर्धामा", gotraOrRole: "Sage of primal stellar light" },
      { nameEn: "Prithu", nameSa: "पृथु", gotraOrRole: "Seer of agriculture and stability" },
      { nameEn: "Kavya", nameSa: "काव्य", gotraOrRole: "Sage of poetic wisdom" },
      { nameEn: "Chaitra", nameSa: "चैत्र", gotraOrRole: "Master of calendar cycles" },
      { nameEn: "Agni", nameSa: "अग्नि", gotraOrRole: "Lord of sacrificial flames" },
      { nameEn: "Vanaka", nameSa: "वनक", gotraOrRole: "Guardian of wilderness hermitages" },
      { nameEn: "Pivara", nameSa: "पीवर", gotraOrRole: "Sage of celestial vigor" }
    ],
    devaGanas: [
      { nameEn: "Surupas (सुरूपाः)", count: "27", members: "Deities of perfect harmonic form" },
      { nameEn: "Haris (हरयः)", count: "27", members: "Protective radiant guardians" },
      { nameEn: "Satyas (सत्याः)", count: "27", members: "Truth maintainers" }
    ],
    prominentSons: ["Janajangha (जनजङ्घ)", "Shantabhaya (शान्तभय)", "Nara (नर)", "Khyati (ख्याति)", "Dhiman (धीमान्)"],
    durationYears: 306720000,
    sandhiYears: 1728000,
    puranicSignificance: "The setting of the celebrated Gajendra Moksha allegory, illustrating absolute surrender (Sharanagati) and immediate divine intervention.",
    keyEvents: [
      "Gajendra, trapped for 1,000 celestial years, offered a golden lotus from the pond with his trunk.",
      "Lord Hari severed the crocodile's jaw with the Sudarshana Chakra, liberating King Indradyumna and Gandharva Huhu.",
      "Establishment of the Bhakti Sharanagati doctrine."
    ],
    scripturalCitations: [
      "Bhagavata Purana Skandha 8 Adhyayas 2-4 (Gajendra Moksha Leela)",
      "Vishnu Purana Book 3 Chapter 1",
      "Garuda Purana Purva Khanda"
    ]
  },
  {
    id: 5,
    nameEn: "Raivata Manvantara",
    nameSa: "रैवत मन्वन्तर",
    orderNumber: "5th Epoch of Manu",
    isCurrent: false,
    manu: {
      nameEn: "Raivata Manu",
      nameSa: "रैवत मनु",
      parentage: "Son of King Priyavrata and Queen Barhishmati",
      description: "Renowned for deep astronomical knowledge, music of the spheres, and steadfast devotion."
    },
    indra: {
      nameEn: "Vibhu / Vibhuti",
      nameSa: "विभु / विभूति",
      description: "Lord of the three worlds whose reign was marked by abundance and virtue."
    },
    avatar: {
      nameEn: "Vaikuntha Avatar",
      nameSa: "वैकुण्ठ अवतार",
      manifestation: "Born to Shubhra and Vaikunthi.",
      significance: "Created the supreme transcendent spiritual planet Vaikuntha Loka at the behest of Goddess Lakshmi for eternal shelter."
    },
    saptarshis: [
      { nameEn: "Hiranyaroma", nameSa: "हिरण्यरोमा", gotraOrRole: "Sage with golden aura" },
      { nameEn: "Vedashri", nameSa: "वेदश्री", gotraOrRole: "Preserver of Vedic cadence" },
      { nameEn: "Urdhvabahu", nameSa: "ऊर्ध्वबाहु", gotraOrRole: "Ascetic of upward aspiration" },
      { nameEn: "Vedabahu", nameSa: "वेदबाहु", gotraOrRole: "Master of liturgical arts" },
      { nameEn: "Sudhama", nameSa: "सुधामा", gotraOrRole: "Sage of pure nectar" },
      { nameEn: "Parjanya", nameSa: "पर्जन्य", gotraOrRole: "Cosmic rain invocator" },
      { nameEn: "Mahamuni", nameSa: "महामुनि", gotraOrRole: "Seer of ultimate reality" }
    ],
    devaGanas: [
      { nameEn: "Amitabhas (अमिताभाः)", count: "14", members: "Deities of limitless effulgence" },
      { nameEn: "Bhutarayas (भूतरायाः)", count: "14", members: "Protectors of the elements" },
      { nameEn: "Vaikunthas (वैकुण्ठाः)", count: "14", members: "Attendants of Vaikuntha realm" }
    ],
    prominentSons: ["Arjuna (अर्जुन)", "Bali (बलि - prince)", "Vindhya (विन्ध्य)", "Mahavita (महावीत)", "Varuna (वरुण)"],
    durationYears: 306720000,
    sandhiYears: 1728000,
    puranicSignificance: "The manifestation of Vaikuntha-loka, the supreme abode free from anxiety (vi-kuntha), established for all devotees throughout the cosmos.",
    keyEvents: [
      "Manifestation of Vaikuntha realm upon the waters of creation.",
      "Establishment of planetary architecture for heavenly devatas."
    ],
    scripturalCitations: [
      "Bhagavata Purana Skandha 8 Adhyaya 5 Shlokas 1-6",
      "Vishnu Purana Book 3 Chapter 1",
      "Padma Purana Srishti Khanda"
    ]
  },
  {
    id: 6,
    nameEn: "Chakshusha Manvantara",
    nameSa: "चाक्षुष मन्वन्तर",
    orderNumber: "6th Epoch of Manu",
    isCurrent: false,
    manu: {
      nameEn: "Chakshusha Manu",
      nameSa: "चाक्षुष मनु",
      parentage: "Son of Chakshu (Ripu & Pushkarini, 6th descendant in the line of Dhruva Maharaja)",
      description: "Direct royal descendant of Dhruva who unified cosmic vision across dimensions."
    },
    indra: {
      nameEn: "Manojava / Mantradruma",
      nameSa: "मनोजव / मन्त्रद्रुम",
      description: "Indra swift as thought (Manojava), champion of the cosmic gods during the ocean churning."
    },
    avatar: {
      nameEn: "Ajita Avatar & Kurma Avatar (Samudra Manthan)",
      nameSa: "अजित एवं कूर्मावतार (समुद्रमन्थन)",
      manifestation: "Son of Vairaja and Devasambuti. Manifested as the cosmic Tortoise Kurma.",
      significance: "Churned the Kshirasagara (Ocean of Milk) using Mount Mandara as churning rod and Vasuki as rope, revealing the 14 Ratnas, Dhanvantari, Amrita, and Goddess Lakshmi."
    },
    saptarshis: [
      { nameEn: "Sumedhas", nameSa: "सुमेधा", gotraOrRole: "Sage of exalted intellect" },
      { nameEn: "Virajas", nameSa: "विराजस्", gotraOrRole: "Sage of pristine purity" },
      { nameEn: "Havishman", nameSa: "हविष्मान्", gotraOrRole: "Lord of ghee oblations" },
      { nameEn: "Uttama", nameSa: "उत्तम", gotraOrRole: "Seer of highest dharma" },
      { nameEn: "Madhu", nameSa: "मधु", gotraOrRole: "Sage of honeyed wisdom (Madhu Vidya)" },
      { nameEn: "Sahishnu", nameSa: "सहिष्णु", gotraOrRole: "Sage of divine forbearance" },
      { nameEn: "Atinama", nameSa: "अतिनामा", gotraOrRole: "Transcendent seer" }
    ],
    devaGanas: [
      { nameEn: "Apyas (आप्याः)", count: "8", members: "Primal water gods" },
      { nameEn: "Aryapas (आर्यपाः)", count: "8", members: "Guardians of the noble path" },
      { nameEn: "Pradyotanas (प्रद्योतनाः)", count: "8", members: "Luminaries of dawn" }
    ],
    prominentSons: ["Uru (उरु)", "Puru (पूरु - Chakshusha's son)", "Shatadyumna (शतद्युम्न)", "Tapasvi (तपस्वी)", "Satyaka (सत्यक)"],
    durationYears: 306720000,
    sandhiYears: 1728000,
    puranicSignificance: "The climax of cosmic history: the Churning of the Ocean of Milk (Samudra Manthan) where the cosmic nectar (Amrita) was retrieved, Mahadeva drank the Halahala poison, and Kurma supported the axis mundi.",
    keyEvents: [
      "Sage Durvasa's curse upon Indra causing loss of Sri (prosperity).",
      "Alliance between Devas and Asuras under Ajita's counsel.",
      "Descent of Kurmaraja to balance Mount Mandara on His back.",
      "Emergence of 14 Gems: Halahala poison, Kamadhenu, Uchchaishravas, Airavata, Kaustubha Mani, Parijata tree, Apsaras, Goddess Lakshmi, Sura (Varuni), Chandra, Dhanvantari with Amrita Kalasha, and Mohini Murti."
    ],
    scripturalCitations: [
      "Bhagavata Purana Skandha 8 Adhyayas 5-12 (Samudra Manthan Episode)",
      "Vishnu Purana Book 1 Chapter 9 & Book 3 Chapter 1",
      "Mahabharata Adi Parva Ch. 18"
    ]
  },
  {
    id: 7,
    nameEn: "Vaivasvata (Shraddhadeva) Manvantara",
    nameSa: "वैवस्वत (श्राद्धदेव) मन्वन्तर",
    orderNumber: "7th Epoch of Manu — Current Present Era",
    isCurrent: true,
    manu: {
      nameEn: "Shraddhadeva (Vaivasvata Manu / Satyavrata)",
      nameSa: "श्राद्धदेव (वैवस्वत मनु / सत्यव्रत)",
      parentage: "Son of Vivasvan (Surya Deva) and Samjna (Saranju, daughter of Vishvakarma)",
      description: "King Satyavrata of Dravidadesha rescued by Matsya Avatar during the cosmic pralaya. Sole progenitor of the great Suryavansha (Solar Dynasty) and Chandravansha (Lunar Dynasty via daughter Ila)."
    },
    indra: {
      nameEn: "Purandara (पुरन्दर)",
      nameSa: "पुरन्दर",
      description: "Current ruler of Svarga, master of the Vajra, vanquisher of Vritra."
    },
    avatar: {
      nameEn: "Matsya Avatar & Vamana Avatar (Trivikrama)",
      nameSa: "मत्स्य एवं वामनावतार (त्रिविक्रम)",
      manifestation: "Lord Matsya rescued the Vedas and Satyavrata's ark. Lord Vamana (son of Kashyapa & Aditi) reclaimed the three worlds from King Bali with three strides.",
      significance: "Preservation of human seeds and Vedic knowledge during deluge; re-establishment of cosmic cosmic balance through Vamana's measuring of the universe."
    },
    saptarshis: [
      { nameEn: "Kashyapa", nameSa: "कश्यप", gotraOrRole: "Prajapati, father of Adityas, Daityas, Nagas, Birds" },
      { nameEn: "Atri", nameSa: "अत्रि", gotraOrRole: "Seer of Rigveda Mandala 5, father of Chandra" },
      { nameEn: "Vashistha", nameSa: "वसिष्ठ", gotraOrRole: "Kulaguru of Suryavansha, seer of Mandala 7" },
      { nameEn: "Vishvamitra", nameSa: "विश्वामित्र", gotraOrRole: "Seer of Gayatri Mantra (Rigveda 3.62.10)" },
      { nameEn: "Gautama", nameSa: "गौतम", gotraOrRole: "Author of Nyaya Sutras and Rigveda Mandala 4" },
      { nameEn: "Jamadagni", nameSa: "जमदग्नि", gotraOrRole: "Father of Lord Parashurama (Bhargava lineage)" },
      { nameEn: "Bharadvaja", nameSa: "भारद्वाज", gotraOrRole: "Seer of Rigveda Mandala 6, master of Yantra Sarvasva" }
    ],
    devaGanas: [
      { nameEn: "12 Adityas (द्वादशादित्याः)", count: "12", members: "Varuna, Mitra, Aryaman, Bhaga, Amsha, Dhatri, Vivasvan, Pushan, Tvashta, Savitra, Shakra, Vishnu (Vamana)" },
      { nameEn: "8 Vasus (अष्टवसवः)", count: "8", members: "Dhara, Dhruva, Soma, Aha, Anila, Anala, Pratyusha, Prabhasa" },
      { nameEn: "11 Rudras (एकादशरुद्राः)", count: "11", members: "Manyu, Manu, Mahinasa, Mahan, Shiva, Ritadhvaja, Ugrareta, Bhava, Kala, Vamadeva, Dhritavrata" },
      { nameEn: "2 Ashvini Kumaras (अश्विनीकुमारौ)", count: "2", members: "Nasatya and Dasra (Divine physicians)" },
      { nameEn: "49 Maruts (एकोनपञ्चाशन्मरुतः)", count: "49", members: "Wind deities born of Diti" }
    ],
    prominentSons: [
      "Ikshvaku (इक्ष्वाकु - Founder of Solar Dynasty)",
      "Nabhaga (नाभाग)",
      "Dhrishta (धृष्ट)",
      "Saryati (शर्याति)",
      "Narishyanta (नरिष्यन्त)",
      "Pramshu (प्रांशु)",
      "Nabhagadishta (नाभागादिष्ट)",
      "Karusha (करूष)",
      "Prishadhra (पृषध्र)",
      "Ila / Sudyumna (इला/सुद्युम्न - Mother/Founder of Lunar Dynasty with Budha)"
    ],
    durationYears: 306720000,
    sandhiYears: 1728000,
    puranicSignificance: "Our present world epoch. We are currently living in the 28th Mahayuga (Chaturyuga) of this 7th Vaivasvata Manvantara, specifically in the 5,128th elapsed year of Kali Yuga. All historical human civilizations, epics (Ramayana & Mahabharata), and dynastic lineages descend from Vaivasvata Manu.",
    keyEvents: [
      "Matsya Avatar warning King Satyavrata to gather Saptarshis, seeds, and medicinal herbs on the cosmic boat.",
      "Tying the boat to Matsya's golden horn using serpent Vasuki during the transition.",
      "Establishment of Ayodhya on the banks of Sarayu by Vaivasvata Manu and Ikshvaku.",
      "Vamana Avatar requesting 3 paces of land from Bali Maharaja at Bhrigukachcha.",
      "Descent of Ganga via Bhagiratha's intense penance.",
      "Treta Yuga: Manifestation of Sri Rama in Suryavansha.",
      "Dvapara Yuga: Manifestation of Sri Krishna and Kurukshetra War in Chandravansha/Yaduvansha/Pauravavansha."
    ],
    scripturalCitations: [
      "Bhagavata Purana Skandha 8 (Ch. 13, 24) & Skandha 9 (Ch. 1-24: Complete Dynasties)",
      "Vishnu Purana Book 3 Ch. 1-2 & Book 4 (Complete Royal Genealogies)",
      "Matsya Purana Adhyayas 1-2 & 11-12",
      "Surya Siddhanta Madhyamadhikara Shlokas 15-24"
    ]
  }
];

export const FUTURE_MANVANTARAS_SUMMARY = [
  { id: 8, name: "Savarni Manu (सावर्णि मनु)", avatar: "Sarvabhauma", indra: "Bali Maharaja (बलि)", saptarshis: "Galava, Diptiman, Parashurama, Ashvatthama, Kripacharya, Rishyasringa, Vyasadeva" },
  { id: 9, name: "Daksha Savarni (दक्ष सावर्णि)", avatar: "Rishabha", indra: "Adbhuta", saptarshis: "Medhatithi, Vasu, Satya, Jyotishman, Dyumat, Savana, Havyavahana" },
  { id: 10, name: "Brahma Savarni (ब्रह्म सावर्णि)", avatar: "Vishvaksena", indra: "Shambhu", saptarshis: "Havishman, Sukriti, Satya, Apammurti, Nabhaga, Apratimauja, Satyaketu" },
  { id: 11, name: "Dharma Savarni (धर्म सावर्णि)", avatar: "Dharmasetu", indra: "Vaidhrita", saptarshis: "Havishmat, Varishtha, Anagha, Vishtara, Charuvahana, Paulastya, Dhiman" },
  { id: 12, name: "Rudra Savarni (रुद्र सावर्णि)", avatar: "Sudhama", indra: "Ritadhama", saptarshis: "Dyuti, Tapasvi, Sutapas, Tapomurti, Taponidhi, Taporati, Tapodhriti" },
  { id: 13, name: "Raucya / Deva Savarni (रौच्य/देव सावर्णि)", avatar: "Yogeshvara", indra: "Divaspati", saptarshis: "Dhiriti, Havishman, Tattvadarsha, Nirmoha, Nishprakampa, Nirutsuka, Dhritiman" },
  { id: 14, name: "Indra Savarni / Bhautya (इन्द्र सावर्णि/भौत्य)", avatar: "Brihadbhanu", indra: "Shuchi", saptarshis: "Agnibahu, Shuchi, Shukra, Magadha, Gridhra, Yukta, Ajita" }
];

export const GENEALOGICAL_TREE_NODES: DynastyNode[] = [
  // COSMIC ORIGIN
  {
    id: "brahma",
    nameEn: "Lord Brahma (Svayambhu)",
    nameSa: "ब्रह्मा (स्वयम्भू)",
    titles: "The Creator of the Universe, Grandfather of All Worlds",
    generation: 0,
    dynasty: "Cosmic Origin",
    manvantara: 1,
    description: "Born from the lotus arising from the navel of Garbhodakashayi Vishnu. Projected the cosmic hierarchy, Prajapatis, and the first Manu.",
    keyFeats: ["Manifested the four Vedas from his four mouths", "Created 10 Prajapatis through mental will (Manasaputras)", "Manifested Svayambhuva Manu and Shatarupa from his body"],
    scripturalReferences: ["Rigveda 10.129 (Nasadiya Sukta)", "Bhagavata Purana 3.8-12", "Vishnu Purana 1.7"]
  },
  {
    id: "svayambhuva_manu",
    nameEn: "Svayambhuva Manu",
    nameSa: "स्वायम्भुव मनु",
    titles: "1st Manu, Adi Manu",
    generation: 1,
    fatherId: "brahma",
    spouseName: "Shatarupa (शतस्वरूपा)",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    description: "The first cosmic lawgiver and emperor of the Earth in the current Shvetavaraha Kalpa.",
    keyFeats: ["Established the foundational Dharma Shastras", "Fathered Priyavrata and Uttanapada, giving rise to all planetary dynasties", "Reclaimed Earth with Varaha Avatar"],
    scripturalReferences: ["Manusmriti 1.34", "Bhagavata Purana 3.12.54", "Matsya Purana 4.24"]
  },

  // SVAAYAMBHUVA BRANCH: PRIYAVRATA (Continent Rulers)
  {
    id: "priyavrata",
    nameEn: "King Priyavrata",
    nameSa: "राजा प्रियव्रत",
    titles: "Chakravartin of Seven Oceans, Son of Svayambhuva",
    generation: 2,
    fatherId: "svayambhuva_manu",
    motherName: "Shatarupa",
    spouseName: "Barhishmati (daughter of Vishvakarma)",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    description: "Great ascetic and cosmic king who drove his effulgent chariot behind the sun, carving the seven concentric oceans and seven Dweepas.",
    keyFeats: ["Divided Earth into 7 continents (Jambu, Plaksha, Salmali, Kusha, Krauncha, Shaka, Pushkara)", "Fathered Uttama Manu (3rd), Tamasa Manu (4th), and Raivata Manu (5th)", "Installed his sons as kings of the seven continents"],
    scripturalReferences: ["Bhagavata Purana 5.1.1-40", "Vishnu Purana 2.1"]
  },
  {
    id: "agnidhra",
    nameEn: "King Agnidhra",
    nameSa: "राजा आग्नीध्र",
    titles: "Sovereign of Jambudvipa",
    generation: 3,
    fatherId: "priyavrata",
    spouseName: "Purvachitti (Apsara)",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    description: "Eldest son of Priyavrata, appointed ruler of Jambudvipa. Divided Jambudvipa into nine varshas for his nine illustrious sons.",
    keyFeats: ["Divided Jambudvipa into 9 Varshas", "Fathered Nabhi (ruler of Hima-varsha / Bharata-varsha)"],
    scripturalReferences: ["Bhagavata Purana 5.2", "Vishnu Purana 2.1.15"]
  },
  {
    id: "nabhi",
    nameEn: "King Nabhi",
    nameSa: "राजा नाभि",
    titles: "King of Hima-varsha, Father of Rishabhadeva",
    generation: 4,
    fatherId: "agnidhra",
    spouseName: "Merudevi (daughter of Mount Meru)",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    description: "Pious ruler of Hima-varsha whose sacrificial devotion compelled the Supreme Lord to incarnate as his son Rishabhadeva.",
    keyFeats: ["Performed the Putrakameshti sacrifice resulting in Lord Rishabha's avatara", "Guided subjects in absolute righteousness"],
    scripturalReferences: ["Bhagavata Purana 5.3", "Vishnu Purana 2.1.27"]
  },
  {
    id: "rishabhadeva",
    nameEn: "Lord Rishabhadeva",
    nameSa: "भगवान् ऋषभदेव",
    titles: "8th Avatar of Vishnu, Foremost Paramahamsa",
    generation: 5,
    fatherId: "nabhi",
    motherName: "Merudevi",
    spouseName: "Jayanti (daughter of Indra)",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    isAvatarOrDivine: true,
    avatarDetail: "8th Avatar of Lord Vishnu (Avadhuta / Paramahamsa Lila)",
    description: "Incarnation of Lord Vishnu who taught the path of detached asceticism (Paramahamsa Dharma). Father of 100 sons, including Emperor Bharata and 9 Nava Yogendras.",
    keyFeats: ["Delivered the celebrated Upadesham on self-realization in Bhagavata 5.5", "Gave birth to Emperor Bharata, after whom this sacred land was named BHARATAVARSHA", "Wandered as an unattached Avadhuta exhibiting transcendental freedom"],
    scripturalReferences: ["Bhagavata Purana 5.3-6", "Vishnu Purana 2.1.28-32"]
  },
  {
    id: "bharata_priyavrata_line",
    nameEn: "Chakravartin Bharata (Son of Rishabha)",
    nameSa: "चक्रवर्ती भरत (ऋषभपुत्र)",
    titles: "First Emperor of Bharatavarsha (Jada Bharata)",
    generation: 6,
    fatherId: "rishabhadeva",
    motherName: "Jayanti",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    description: "The supreme emperor after whose name Hima-varsha became immortalized as 'Bharatavarsha' (भारतं वर्षम्). Later attained liberation as Jada Bharata after rebirth as a deer.",
    keyFeats: ["Renamed the subcontinent as BHARATAVARSHA", "Attained supreme transcendental knowledge expounded to King Rahugana of Sauvira"],
    scripturalReferences: ["Bhagavata Purana 5.7-10", "Vishnu Purana 2.1.32: 'उत्तरं यत्समुद्रस्य हिमाद्रेश्चैव दक्षिणम्। वर्षं तद् भारतं नाम भारती यत्र संततिः॥'"]
  },

  // SVAAYAMBHUVA BRANCH: UTTANAPADA (Dhruva Dynasty -> Chakshusha Manu)
  {
    id: "uttanapada",
    nameEn: "King Uttanapada",
    nameSa: "राजा उत्तानपाद",
    titles: "Father of Dhruva, Son of Svayambhuva",
    generation: 2,
    fatherId: "svayambhuva_manu",
    motherName: "Shatarupa",
    spouseName: "Suniti (mother of Dhruva) & Suruchi (mother of Uttama)",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    description: "Second son of Svayambhuva Manu. His elder son Dhruva attained the highest unmoving station in the cosmos.",
    keyFeats: ["Ruler of Brahmavarta", "Initiated the Dhruva dynastic line leading to Prithu and Chakshusha Manu (6th)"],
    scripturalReferences: ["Bhagavata Purana 4.8.6", "Vishnu Purana 1.11"]
  },
  {
    id: "dhruva_maharaja",
    nameEn: "Dhruva Maharaja",
    nameSa: "ध्रुव महाराज",
    titles: "Master of Dhruvaloka (The North Star / Celestial Pivot)",
    generation: 3,
    fatherId: "uttanapada",
    motherName: "Suniti",
    spouseName: "Bhrami & Ila",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    description: "At age five, inspired by his mother Suniti and instructed by Sage Narada in the Om Namo Bhagavate Vasudevaya mantra, performed five months of penance at Madhuvana, obtaining the immortal polar station around which the entire stellar zodiac orbits.",
    keyFeats: ["Attained direct Darshana of Lord Vishnu in 5 months at Madhuvana", "Installed as the supreme unmoving pivot of the universe (Dhruva Mandala)", "Ruled the Earth for 36,000 years with perfect justice"],
    scripturalReferences: ["Bhagavata Purana 4.8-12", "Vishnu Purana 1.11-12", "Matsya Purana 4"]
  },
  {
    id: "utkala_vatsara",
    nameEn: "Utkala & Vatsara",
    nameSa: "उत्कल एवं वत्सर",
    titles: "Sons of Dhruva",
    generation: 4,
    fatherId: "dhruva_maharaja",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    description: "Vatsara continued the dynastic lineage; Utkala embraced pure sannyasa from childhood.",
    keyFeats: ["Continuation of the lineage of astronomers and cosmic observers"],
    scripturalReferences: ["Bhagavata Purana 4.13.6", "Vishnu Purana 1.13.1"]
  },
  {
    id: "king_vena",
    nameEn: "King Vena",
    nameSa: "राजा वेन",
    titles: "Tyrannical King of Dhruva Lineage",
    generation: 8,
    fatherId: "utkala_vatsara",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    description: "Descendant of Dhruva who banned all sacrifices and dharma. The sages chanted sacred Kusha blades to neutralize him, churning his arms to manifest Emperor Prithu.",
    keyFeats: ["Illustrates the vital role of Saptarshis in rectifying royal adharma"],
    scripturalReferences: ["Bhagavata Purana 4.14", "Vishnu Purana 1.13.11-30"]
  },
  {
    id: "emperor_prithu",
    nameEn: "Avatara Emperor Prithu",
    nameSa: "अवतार चक्रवर्ती पृथु",
    titles: "First Consecrated King (Adi Raja), Shaktyavesha Avatar",
    generation: 9,
    fatherId: "king_vena",
    spouseName: "Archi",
    dynasty: "Svayambhuva Lineage",
    manvantara: 1,
    isAvatarOrDivine: true,
    avatarDetail: "Shaktyavesha Avatar of Vishnu (Preservation & Agriculture)",
    description: "Manifested from the churning of Vena's arms. Leveled the planetary surface, milked Mother Earth (Bhudevi as a cow) to extract all grains, herbs, and minerals, making the Earth 'Prithvi' after his name.",
    keyFeats: ["Named the planet PRITHVI (पृथ्वी)", "Performed 100 Ashvamedha sacrifices", "Invented town planning, agriculture, and grain storage systems"],
    scripturalReferences: ["Bhagavata Purana 4.15-23", "Vishnu Purana 1.13.35-85", "Mahabharata Drona Parva 69"]
  },

  // 7TH MANVANTARA: SOLAR DYNASTY (SURYAVANSHA)
  {
    id: "vivasvan_surya",
    nameEn: "Vivasvan (Surya Deva)",
    nameSa: "विवस्वान् (सूर्यदेव)",
    titles: "The Sun God, Source of Suryavansha",
    generation: 1,
    fatherId: "kashyapa_prajapati",
    motherName: "Aditi",
    spouseName: "Samjna (Saranju) & Chhaya",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    description: "Son of Sage Kashyapa and Aditi (one of the 12 Adityas). Taught the eternal science of Yoga to Vaivasvata Manu as noted in Bhagavad Gita 4.1.",
    keyFeats: ["Imparted Yoga knowledge to Manu (Gita 4.1: 'इमं विवस्वते योगं प्रोक्तवानहमव्ययम्')", "Father of Vaivasvata Manu, Yama, Yami (Yamuna), Ashvini Kumaras, and Shani"],
    scripturalReferences: ["Bhagavad Gita 4.1", "Bhagavata Purana 9.1", "Vishnu Purana 3.2"]
  },
  {
    id: "vaivasvata_manu_node",
    nameEn: "Vaivasvata Manu (Shraddhadeva)",
    nameSa: "वैवस्वत मनु (श्राद्धदेव)",
    titles: "7th Manu, Ruler of Current Manvantara",
    generation: 2,
    fatherId: "vivasvan_surya",
    motherName: "Samjna",
    spouseName: "Shraddha",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    description: "The primary progenitor of our current 7th Manvantara. Saved by Matsya Avatar in the deluge, founded Ayodhya, and fathered 10 illustrious sons including Ikshvaku, and daughter Ila.",
    keyFeats: ["Established the civilization of the 7th Manvantara after the Pralaya", "Founded the holy city of Ayodhya", "Father of Ikshvaku (Suryavansha) and progenitor of Chandravansha through daughter Ila"],
    scripturalReferences: ["Bhagavata Purana 8.24 & 9.1", "Vishnu Purana 4.1", "Matsya Purana 1-2"]
  },
  {
    id: "ikshvaku",
    nameEn: "King Ikshvaku",
    nameSa: "महाराज इक्ष्वाकु",
    titles: "Founder of Ikshvaku Dynasty (Suryavansha)",
    generation: 3,
    fatherId: "vaivasvata_manu_node",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    era: "Early Treta / Krita Transition",
    description: "Eldest son of Vaivasvata Manu. Established the imperial seat of Ayodhya and received the solar science of Yoga. Father of 100 sons including Vikukshi, Nimi (founder of Mithila/Videha dynasty), and Dandaka.",
    keyFeats: ["Established Ayodhya as the world capital", "Established Nimi who founded the Janaka line of Mithila", "Gave his name to the glorious Ikshvaku Dynasty"],
    scripturalReferences: ["Valmiki Ramayana Bala Kanda 70", "Bhagavata Purana 9.6", "Vishnu Purana 4.2"]
  },
  {
    id: "vikukshi_shashada",
    nameEn: "Vikukshi (Shashada)",
    nameSa: "विकुक्षि (शशाद)",
    titles: "King of Ayodhya, Son of Ikshvaku",
    generation: 4,
    fatherId: "ikshvaku",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    description: "Eldest son of Ikshvaku who succeeded to the throne of Ayodhya after performing grand sacrifices.",
    keyFeats: ["Maintained the imperial sovereignty of Ayodhya", "Father of Kakutstha (Puranjaya)"],
    scripturalReferences: ["Bhagavata Purana 9.6.11", "Vishnu Purana 4.2.11"]
  },
  {
    id: "kakutstha_puranjaya",
    nameEn: "Kakutstha (Puranjaya)",
    nameSa: "ककुत्स्थ (पुरञ्जय)",
    titles: "Hero of the Devas, Conqueror of Asuras",
    generation: 5,
    fatherId: "vikukshi_shashada",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    description: "Rode the hump (Kakud) of Indra disguised as a mighty bull in the Devasura war, earning the title 'Kakutstha'. Descendants were called 'Kakutsthas' (including Sri Rama).",
    keyFeats: ["Defeated the Asuras and restored the throne of heaven to Indra", "Conferred the patronymic 'Kakutstha' on all descendant kings"],
    scripturalReferences: ["Valmiki Ramayana Bala Kanda 70.24", "Bhagavata Purana 9.6.12-19"]
  },
  {
    id: "mandhata",
    nameEn: "Chakravartin Mandhata",
    nameSa: "सम्राट् मान्धाता",
    titles: "Emperor of the Whole Earth, Tri-Loka Conqueror",
    generation: 15,
    fatherId: "kakutstha_puranjaya",
    spouseName: "Bindumati (daughter of Shashabindu)",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    description: "Born from King Yuvanashva after consuming consecrated water. Indra declared 'Mām Dhātā' (He will be nourished by me), placing his thumb infused with nectar in his mouth. Ruled all lands from sunrise to sunset.",
    keyFeats: ["Conquered the entire Earth in a single day (from rising to setting sun)", "Defeated Ravana in single combat and accepted Sage Pulastya's peace truce", "Puranic verse: 'यावत्सूर्य उदेति स्म यावच्च प्रतितिष्ठति। सर्वं तद्यौवनाश्वस्य मान्धातुः क्षेत्रमुच्यते॥'"],
    scripturalReferences: ["Bhagavata Purana 9.6.30-38", "Vishnu Purana 4.2.65", "Mahabharata Vana Parva 126"]
  },
  {
    id: "harishchandra",
    nameEn: "King Harishchandra",
    nameSa: "सत्यवादी राजा हरिश्चन्द्र",
    titles: "Champion of Absolute Truth (Satyavadi)",
    generation: 25,
    fatherId: "mandhata",
    spouseName: "Taramati (Shaivya)",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    description: "Famous king tested by Sage Vishvamitra who sacrificed his kingdom, wealth, wife, son Rohitashva, and served as a crematorium guard at Kashi without violating Truth.",
    keyFeats: ["Attained highest celestial regions along with his entire citizenry for uncompromising Satya", "Established the sacred proverb 'चन्द्रो तारा गहे सो गहे, हरिश्चन्द्र को टरै न सत्य'"],
    scripturalReferences: ["Markandeya Purana 7-8", "Bhagavata Purana 9.7", "Vishnu Purana 4.3"]
  },
  {
    id: "sagara_maharaja",
    nameEn: "King Sagara",
    nameSa: "राजा सगर",
    titles: "Father of 60,000 Sons, Creator of Ocean (Sagara)",
    generation: 35,
    fatherId: "harishchandra",
    spouseName: "Keshini (mother of Asamanjas) & Sumati (mother of 60,000)",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    description: "Conquered foreign tribes (Sakas, Yavanas, Kambojas, Pahlavas) and initiated the 100th Ashvamedha sacrifice. His 60,000 sons dug up the earth searching for the horse, creating the ocean (Sagara) and were reduced to ashes by Sage Kapila's glance.",
    keyFeats: ["Gave his name to the Ocean (Sagara = सागर)", "Subdued all mlechchha tribes under royal decree", "Initiated the spiritual quest for Ganga's descent"],
    scripturalReferences: ["Valmiki Ramayana Bala Kanda 38-41", "Bhagavata Purana 9.8", "Vishnu Purana 4.4.1-30"]
  },
  {
    id: "bhagiratha",
    nameEn: "Maharaja Bhagiratha",
    nameSa: "महाराज भगीरथ",
    titles: "Bringer of Holy River Ganga (Bhagirathi)",
    generation: 38,
    fatherId: "sagara_maharaja",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    description: "Performed unparalleled thousands of years of austerities to Lord Shiva and Brahma to bring the celestial river Ganga from heaven down to Earth and to Patala, liberating the 60,000 sons of Sagara.",
    keyFeats: ["Brought River Ganga from Svarga to Earth (Bhagiratha Prayatna)", "Entreated Lord Shiva to catch Ganga in His Jata (matted locks)", "Liberated his ancestors at the Ganga-Sagara confluence"],
    scripturalReferences: ["Valmiki Ramayana Bala Kanda 42-44", "Bhagavata Purana 9.9.1-17", "Mahabharata Vana Parva 108-109"]
  },
  {
    id: "raghu_maharaja",
    nameEn: "Chakravartin Raghu",
    nameSa: "सम्राट् रघु",
    titles: "Founder of Raghuvansha, Son of Dilipa",
    generation: 48,
    fatherId: "bhagiratha",
    motherName: "Sudakshina",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    description: "Son of King Dilipa who guarded Kamadhenu's calf Nandini. Raghu performed the universal Digvijaya conquering all directions and gave away all his wealth in the Vishvajit Yajna, naming the dynasty Raghuvansha.",
    keyFeats: ["Conquered the entire Earth in a continuous campaign (Kalidasa's Raghuvamsham)", "Gave his name to the lineage: Raghuvansha (रघुवंश)", "Donated 140 million golden mudras to Sage Kautsa"],
    scripturalReferences: ["Kalidasa's Raghuvamsham Cantos 3-5", "Bhagavata Purana 9.10.1", "Vishnu Purana 4.4.36"]
  },
  {
    id: "dasharatha_maharaja",
    nameEn: "Chakravartin Dasharatha",
    nameSa: "महाराज दशरथ",
    titles: "Lord of 10 Chariot Directions, Father of Sri Rama",
    generation: 51,
    fatherId: "raghu_maharaja",
    motherName: "Indumati",
    spouseName: "Kaushalya, Kaikeyi, Sumitra",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    era: "Treta Yuga (24th Mahayuga)",
    description: "Righteous emperor of Ayodhya whose chariots could fight in all ten directions. Performed the Putrakameshti Yajna with Sage Rishyasringa, leading to the birth of the four divine brothers.",
    keyFeats: ["Allied with Indra to fight Sambara Asura in the heavens", "Performed the Putrakameshti sacrifice yielding the Payasam for the divine incarnations"],
    scripturalReferences: ["Valmiki Ramayana Bala Kanda", "Bhagavata Purana 9.10", "Vishnu Purana 4.4.40"]
  },
  {
    id: "sri_rama_avatar",
    nameEn: "Bhagavan Sri Ramachandra",
    nameSa: "भगवान् श्रीरामचन्द्र",
    titles: "7th Purna Avatar of Vishnu, Maryada Purushottama",
    generation: 52,
    fatherId: "dasharatha_maharaja",
    motherName: "Kaushalya",
    spouseName: "Mata Sita (Janaki, Avatar of Lakshmi)",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    era: "Treta Yuga (24th Mahayuga)",
    isAvatarOrDivine: true,
    avatarDetail: "Maryada Purushottama Avatar of Vishnu",
    description: "The Supreme Lord appearing in human form to establish ideal Dharma. Slue Ravana, Kumbhakarna, and demons, protected the sages, built the Rama Setu, and ruled for 11,000 years in the golden era of Rama Rajya.",
    keyFeats: ["Broke Lord Shiva's Pinaka bow at Janakapura", "Constructed the 100-yojana Rama Setu across the southern ocean", "Annihilated Ravana and restored Dharma across the three worlds", "Established 'Rama Rajya' (रामराज्य) as the eternal model of righteous governance"],
    scripturalReferences: ["Valmiki Ramayana (All 7 Kandas)", "Bhagavata Purana 9.10-11", "Vishnu Purana 4.4.40-48", "Ramcharitmanas"]
  },
  {
    id: "lava_and_kusha",
    nameEn: "Lava & Kusha",
    nameSa: "लव एवं कुश",
    titles: "Sons of Sri Rama, Kings of Shravasti & Kushavati",
    generation: 53,
    fatherId: "sri_rama_avatar",
    motherName: "Mata Sita",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    era: "Late Treta Yuga",
    description: "Twin sons of Sri Rama and Sita raised in Sage Valmiki's hermitage. Learned the entire Ramayana and defeated the royal army protecting the Ashvamedha horse.",
    keyFeats: ["Recited the Ramayana before Sri Rama in the royal court of Ayodhya", "Kusha ruled Southern Kosala from Kushavati; Lava ruled Northern Kosala from Shravasti", "Continued the Solar Dynasty into Dvapara and Kali Yuga"],
    scripturalReferences: ["Valmiki Ramayana Uttara Kanda", "Raghuvamsham Canto 15-16", "Bhagavata Purana 9.12"]
  },
  {
    id: "brihadbala_solar",
    nameEn: "Maharaja Brihadbala",
    nameSa: "महाराज बृहद्बल",
    titles: "Suryavanshi King of Kosala during Mahabharata",
    generation: 85,
    fatherId: "lava_and_kusha",
    dynasty: "Suryavansha (Solar)",
    manvantara: 7,
    era: "End of Dvapara Yuga (28th Mahayuga)",
    description: "Last great ruler of the Ikshvaku line mentioned during the Kurukshetra War. Fought on the Kaurava side and was martyred by Abhimanyu on the 13th day.",
    keyFeats: ["Led the Kosala army in the Kurukshetra War", "The dynasty continued until Sumitra in early Kali Yuga"],
    scripturalReferences: ["Mahabharata Drona Parva", "Bhagavata Purana 9.12.7-8", "Vishnu Purana 4.22"]
  },

  // 7TH MANVANTARA: LUNAR DYNASTY (CHANDRAVANSHA / PURU / YADU)
  {
    id: "chandra_soma",
    nameEn: "Chandra Deva (Soma)",
    nameSa: "चन्द्रदेव (सोम)",
    titles: "The Moon God, Source of Chandravansha",
    generation: 1,
    fatherId: "atri_sage",
    motherName: "Anasuya",
    spouseName: "27 Nakshatras (daughters of Daksha) & Tara",
    dynasty: "Chandravansha (Lunar)",
    manvantara: 7,
    description: "Born of Sage Atri and Anasuya. Presides over the mind, nectar (Soma), and vegetation. Father of Budha.",
    keyFeats: ["Lord of all 27 Nakshatras and herbal medicines (Oshadhipati)", "Fathered Budha, founding the Lunar Dynasty"],
    scripturalReferences: ["Bhagavata Purana 9.14", "Vishnu Purana 4.6", "Matsya Purana 23"]
  },
  {
    id: "budha_and_ila",
    nameEn: "Budha & Devi Ila",
    nameSa: "बुध एवं देवी इला",
    titles: "Progenitors of the Lunar Dynasty",
    generation: 2,
    fatherId: "chandra_soma",
    spouseName: "Ila (daughter of Vaivasvata Manu)",
    dynasty: "Chandravansha (Lunar)",
    manvantara: 7,
    description: "Budha (Mercury) married Ila, the miraculous offspring of Vaivasvata Manu. Their union merged the Solar Manu's blessing directly with the Lunar line, giving birth to Pururavas.",
    keyFeats: ["Unified the solar genetic lineage with the lunar intellect", "Birthed Pururavas, the first Chandravanshi monarch of Pratishthana"],
    scripturalReferences: ["Bhagavata Purana 9.1.11-42 & 9.14", "Vishnu Purana 4.6.19"]
  },
  {
    id: "pururavas_aylas",
    nameEn: "King Pururavas (Aila)",
    nameSa: "राजा पुरूरवा (ऐल)",
    titles: "First Emperor of Chandravansha",
    generation: 3,
    fatherId: "budha_and_ila",
    motherName: "Devi Ila",
    spouseName: "Urvashi (Celestial Apsara)",
    dynasty: "Chandravansha (Lunar)",
    manvantara: 7,
    description: "Established the imperial capital of Pratishthana (near Prayagraj). In his reign, the single sacrificial fire was divided into the three sacred Vedic fires (Garhapatya, Ahavaniya, Dakshinagni).",
    keyFeats: ["Divided the one Veda and one fire into three sacred Agnis (Rigveda 10.95)", "Hero of Kalidasa's Vikramorvashiyam and celebrated Rigvedic dialogue"],
    scripturalReferences: ["Rigveda 10.95", "Bhagavata Purana 9.14.43-49", "Vishnu Purana 4.6.34-64"]
  },
  {
    id: "nahusha_maharaja",
    nameEn: "Maharaja Nahusha",
    nameSa: "महाराज नहुष",
    titles: "Earthly King who became Indra of Svarga",
    generation: 5,
    fatherId: "pururavas_aylas",
    spouseName: "Viraja / Ashokasundari",
    dynasty: "Chandravansha (Lunar)",
    manvantara: 7,
    description: "Great grandson of Pururavas. When Indra fled after killing Vritra, Nahusha was consecrated as Indra of Heaven due to immense merit. When he arrogantly kicked Sage Agastya's head while being carried in a palanquin by sages, he fell to Earth as a python until liberated by Yudhishthira.",
    keyFeats: ["Ruled Svarga and the three worlds through supreme tapasya", "His encounter with Yudhishthira in Mahabharata forms the great philosophical Yaksha/Sarpa Prashna on Brahminhood"],
    scripturalReferences: ["Mahabharata Udyoga Parva 11-17 & Vana Parva 180", "Bhagavata Purana 9.18.1-4"]
  },
  {
    id: "yayati_maharaja",
    nameEn: "Chakravartin Yayati",
    nameSa: "सम्राट् ययाति",
    titles: "Divider of Dynasties (Yadu, Turvasu, Druhyu, Anu, Puru)",
    generation: 6,
    fatherId: "nahusha_maharaja",
    spouseName: "Devayani (daughter of Shukracharya) & Sharmishtha (daughter of Vrishaparva)",
    dynasty: "Chandravansha (Lunar)",
    manvantara: 7,
    description: "Cursed by Shukracharya with premature old age. Exchanged his old age for the youth of his youngest son Puru for 1,000 years, eventually realizing desire is never quenched by enjoyment. Divided the world among his five sons.",
    keyFeats: ["Birthed the five great Vedic tribes (Pancha Janah): Yadu, Turvasu, Druhyu, Anu, Puru", "Famous aphorism in Bhagavata 9.19.14: 'न जातु कामः कामानामुपभोगेन शाम्यति। हविषा कृष्णवर्त्मव भूय एवाभिवर्धते॥'"],
    scripturalReferences: ["Mahabharata Adi Parva 75-85", "Bhagavata Purana 9.18-19", "Vishnu Purana 4.10"]
  },

  // CHANDRAVANSHA BRANCH A: YADUVANSHA (From Yadu -> Sri Krishna)
  {
    id: "yadu_prince",
    nameEn: "Prince Yadu",
    nameSa: "राजकुमार यदु",
    titles: "Founder of the Yaduvansha (Yadavas)",
    generation: 7,
    fatherId: "yayati_maharaja",
    motherName: "Devayani",
    dynasty: "Yaduvansha (Yadu)",
    manvantara: 7,
    description: "Eldest son of Yayati. For refusing to take his father's old age, Yayati decreed that his lineage would never inherit the imperial throne of Pratishthana, yet it became the most glorious dynasty due to Lord Krishna's descent.",
    keyFeats: ["Founded the Yaduvansha comprising the Vrishnis, Andhakas, Bhojas, and Chedis", "His descendant King Sahasrajit founded the Haihaya line (Kartavirya Arjuna)"],
    scripturalReferences: ["Bhagavata Purana 9.23-24", "Vishnu Purana 4.11-15", "Harivamsha Harivamsha Parva"]
  },
  {
    id: "kartavirya_arjuna",
    nameEn: "Kartavirya Arjuna (Sahasrabahu)",
    nameSa: "कार्तवीर्य अर्जुन (सहस्रबाहु)",
    titles: "Thousand-Armed Chakravartin of Mahishmati",
    generation: 15,
    fatherId: "yadu_prince",
    dynasty: "Yaduvansha (Yadu)",
    manvantara: 7,
    description: "Disciple of Lord Dattatreya who gained 1,000 arms and golden rule of Mahishmati. Defeated and imprisoned Ravana. Later stole Sage Jamadagni's Kamadhenu, leading to his demise at the hands of Lord Parashurama.",
    keyFeats: ["Imprisoned Ravana at Mahishmati until Sage Pulastya requested his release", "Ruled 85,000 years in unparalleled military might"],
    scripturalReferences: ["Bhagavata Purana 9.15.17-41", "Vishnu Purana 4.11", "Mahabharata Vana Parva 116"]
  },
  {
    id: "shurasena_vasudeva",
    nameEn: "Shurasena & Anakadundubhi Vasudeva",
    nameSa: "शूरसेन एवं आनकदुन्दुभि वसुदेव",
    titles: "Father of Sri Krishna and Balarama",
    generation: 35,
    fatherId: "yadu_prince",
    spouseName: "Devaki, Rohini",
    dynasty: "Yaduvansha (Yadu)",
    manvantara: 7,
    era: "End of Dvapara Yuga (28th Mahayuga)",
    description: "King of Mathura and righteous leader of the Vrishnis. At his birth, divine drums (Anaka & Dundubhi) sounded in heaven. Married Devaki, daughter of Devaka.",
    keyFeats: ["Endured imprisonment by Kamsa to protect the divine descent", "Fathered Bhagavan Sri Krishna, Balarama, and Subhadra"],
    scripturalReferences: ["Bhagavata Purana 9.24.27-55 & 10.1-3", "Vishnu Purana 4.15"]
  },
  {
    id: "sri_krishna_avatar",
    nameEn: "Bhagavan Sri Krishna (Svayam Bhagavan)",
    nameSa: "भगवान् श्रीकृष्ण (स्वयं भगवान्)",
    titles: "8th Purna Avatar / Source of All Avatars",
    generation: 36,
    fatherId: "shurasena_vasudeva",
    motherName: "Devaki & Yashoda (Nanda)",
    spouseName: "Rukmini, Satyabhama, Jambavati, Kalindi, Mitravinda, Nagnajiti, Bhadra, Lakshmana (Ashta-Mahishi) & 16,100 queens",
    dynasty: "Yaduvansha (Yadu)",
    manvantara: 7,
    era: "End of Dvapara Yuga (28th Mahayuga, 3228 BCE - 3102 BCE)",
    isAvatarOrDivine: true,
    avatarDetail: "Purna Purushottama Avatar (Bhagavata 1.3.28: 'कृष्णास्तु भगवान् स्वयम्')",
    description: "The Supreme Personality of Godhead descended to vanquish demonic burdens, deliver the Bhagavad Gita at Kurukshetra, establish the eternal Dharma of Bhakti, and guide the Pandavas.",
    keyFeats: ["Vanquished Kamsa, Jarasandha, Shishupala, and Narakasura", "Delivered the immortal BHAGAVAD GITA to Arjuna at Kurukshetra", "Established the golden marine fortress city of DVARAKA (द्वारका)", "Protected Draupadi in the Kuru assembly and guided the Pandavas to victory"],
    scripturalReferences: ["Bhagavad Gita", "Bhagavata Purana Skandhas 10 & 11", "Mahabharata", "Vishnu Purana Book 5", "Harivamsha"]
  },
  {
    id: "balarama_avatar",
    nameEn: "Bhagavan Balarama (Sankarshana)",
    nameSa: "भगवान् बलराम (सङ्कर्षण)",
    titles: "Avatar of Adi Shesha, Holder of the Plough (Haladhara)",
    generation: 36,
    fatherId: "shurasena_vasudeva",
    motherName: "Rohini",
    spouseName: "Revati (daughter of King Kakudmi / Raivata)",
    dynasty: "Yaduvansha (Yadu)",
    manvantara: 7,
    era: "Dvapara Yuga",
    isAvatarOrDivine: true,
    avatarDetail: "Incarnation of Ananta Shesha Naga / Sankarshana",
    description: "Elder brother of Sri Krishna. Master of the mace (Gada-yuddha guru of Bhima and Duryodhana) and plough (Hala). Married Revati of the earlier Treta/Krita epoch who was brought to him by King Raivata.",
    keyFeats: ["Diverted the River Yamuna with his plough", "Slue Pralambasura, Dhenuka, and Dvivida gorilla", "Conducted the sacred Sarasvati Pilgrimage during Kurukshetra War"],
    scripturalReferences: ["Bhagavata Purana 10.65-79", "Mahabharata Shalya Parva (Sarasvati Tirtha)", "Vishnu Purana Book 5"]
  },

  // CHANDRAVANSHA BRANCH B: PAURAVAVANSHA (Puru -> Bharata -> Kuru -> Pandavas)
  {
    id: "puru_prince",
    nameEn: "Maharaja Puru",
    nameSa: "महाराज पूरु",
    titles: "Youngest Son of Yayati, Progenitor of Pauravas",
    generation: 7,
    fatherId: "yayati_maharaja",
    motherName: "Sharmishtha",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    description: "Willingly accepted his father Yayati's old age out of filial devotion. Yayati blessed him to become the sole inheritor of the imperial throne of Pratishthana, founding the Paurava dynasty.",
    keyFeats: ["Inherited the imperial central territory of the earth", "Progenitor of Dushyanta, Bharata, Hastin, Kuru, and the Pandavas"],
    scripturalReferences: ["Mahabharata Adi Parva 85-88", "Bhagavata Purana 9.20.1-6", "Vishnu Purana 4.19"]
  },
  {
    id: "dushyanta_maharaja",
    nameEn: "King Dushyanta",
    nameSa: "राजा दुष्यन्त",
    titles: "King of Hastinapura, Hero of Shakuntala",
    generation: 15,
    fatherId: "puru_prince",
    spouseName: "Shakuntala (daughter of Vishvamitra and Menaka)",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    description: "Righteous Paurava king who met Shakuntala in Sage Kanva's ashrama and married her through Gandharva rites, fathering Sarvadamana (Bharata).",
    keyFeats: ["Hero of Kalidasa's masterwork Abhijnanashakuntalam", "Reunited with Shakuntala and Bharata at Maricha Rishi's hermitage"],
    scripturalReferences: ["Mahabharata Adi Parva 68-74", "Kalidasa's Abhijnanashakuntalam", "Bhagavata Purana 9.20.7-22"]
  },
  {
    id: "chakravartin_bharata_paurava",
    nameEn: "Chakravartin Bharata (Sarvadamana)",
    nameSa: "सम्राट् भरत (सर्वदमन)",
    titles: "Chakravartin of Bharatavarsha, Son of Shakuntala",
    generation: 16,
    fatherId: "dushyanta_maharaja",
    motherName: "Shakuntala",
    spouseName: "Sunanda",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    description: "Counted lion teeth as a child in Kanva's ashrama. Conquered the entire world and performed 1,000 Somayagas and 100 Ashvamedhas along the Yamuna and Ganga. Chose the virtuous Sage Bharadvaja's adopted son Bhumanyu as his successor over his own unfit sons, setting the highest standard of meritocracy.",
    keyFeats: ["Tied 1,000 horses in Ashvamedha sacrifices across the country", "Renounced dynastic nepotism to appoint the most qualified successor", "Reinforced the sacred identity of BHARATAVARSHA"],
    scripturalReferences: ["Mahabharata Adi Parva 74", "Bhagavata Purana 9.20.23-39", "Vishnu Purana 4.19.10-14"]
  },
  {
    id: "hastin_king",
    nameEn: "King Hastin",
    nameSa: "राजा हस्ती",
    titles: "Founder of Imperial City Hastinapura",
    generation: 22,
    fatherId: "chakravartin_bharata_paurava",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    description: "Great-grandson of Bharata who founded the world-famous imperial capital city HASTINAPURA on the banks of the Ganga.",
    keyFeats: ["Founded HASTINAPURA (हस्तिनापुर), which remained the political capital through the Mahabharata era"],
    scripturalReferences: ["Mahabharata Adi Parva 95.34", "Bhagavata Purana 9.21.20", "Vishnu Purana 4.19.29"]
  },
  {
    id: "kuru_king",
    nameEn: "King Kuru",
    nameSa: "राजा कुरु",
    titles: "Founder of Kuruvansha, Consecrator of Kurukshetra",
    generation: 28,
    fatherId: "hastin_king",
    spouseName: "Shubhangi",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    description: "Consecrated the sacred soil of KURUKSHETRA (Dharmakshetra) by plowing the land with an eight-fold gold plough for years under divine vows of truth, penance, compassion, and charity. Blessed by Lord Indra that anyone dying here in Dharma would attain Svarga.",
    keyFeats: ["Consecrated KURUKSHETRA as Dharmakshetra (धर्मक्षेत्रे कुरुक्षेत्रे)", "Gave his name to the entire Kuruvansha (Kauravas and Pandavas)"],
    scripturalReferences: ["Mahabharata Shalya Parva 53 (Kurukshetra Mahatmya)", "Bhagavata Purana 9.22.4-5", "Vishnu Purana 4.19.75"]
  },
  {
    id: "shantanu_maharaja",
    nameEn: "Maharaja Shantanu",
    nameSa: "महाराज शान्तनु",
    titles: "King of Hastinapura, Father of Bhishma",
    generation: 35,
    fatherId: "kuru_king",
    spouseName: "Ganga (mother of Devavrata) & Satyavati (mother of Chitrangada & Vichitravirya)",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    era: "Dvapara Yuga",
    description: "Son of King Pratipa. His touch brought peace (Shanti) to any aged or ailing person. Father of the immortal warrior Bhishma and grandfather of Dhritarashtra and Pandu.",
    keyFeats: ["Father of Ganga-putra Bhishma", "Reigned with peace and abundance in Hastinapura"],
    scripturalReferences: ["Mahabharata Adi Parva 96-100", "Bhagavata Purana 9.22.12-20"]
  },
  {
    id: "bhishma_pitamaha",
    nameEn: "Bhishma Pitamaha (Devavrata)",
    nameSa: "भीष्म पितामह (देवव्रत)",
    titles: "Grand Patriarch of Kurus, Eighth Vasu",
    generation: 36,
    fatherId: "shantanu_maharaja",
    motherName: "Devi Ganga",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    era: "Dvapara Yuga (Kurukshetra War)",
    description: "Incarnation of Dyu (Prabhasa Vasu). Took the awe-inspiring lifelong vow of celibacy (Bhishma Pratijna) so his father could marry Satyavati. Blessed with Ichha-Mrityu (death at will). Delivered the monumental Shanti Parva and Anushasana Parva discourses on governance and Vishnu Sahasranama from his bed of arrows.",
    keyFeats: ["Proclaimed the VISHNU SAHASRANAMA (1,000 Names of Vishnu) to Yudhishthira", "Expounded the complete Rajadharma & Mokshadharma in Shanti Parva", "Supreme commander of Kaurava forces for first 10 days of Kurukshetra war"],
    scripturalReferences: ["Mahabharata Shanti Parva & Anushasana Parva", "Bhagavata Purana 1.9 (Bhishma Stuti)"]
  },
  {
    id: "pandu_and_kunti",
    nameEn: "King Pandu & Maharani Kunti",
    nameSa: "महाराज पाण्डु एवं महारानी कुन्ती",
    titles: "Parents of the Five Pandavas",
    generation: 38,
    fatherId: "shantanu_maharaja",
    spouseName: "Kunti (Pritha, aunt of Sri Krishna) & Madri",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    era: "Dvapara Yuga",
    description: "Conquered all directions for Hastinapura. Through the divine boon of Sage Durvasa, Kunti invoked Dharma, Vayu, and Indra, and Madri invoked the Ashvins to manifest the five divine Pandavas.",
    keyFeats: ["Birthed the five virtuous Pandavas who upheld cosmic Dharma"],
    scripturalReferences: ["Mahabharata Adi Parva 114-123", "Bhagavata Purana 9.22.25-28"]
  },
  {
    id: "five_pandavas",
    nameEn: "The Five Pandavas (Dharmaraja, Bhima, Arjuna, Nakula, Sahadeva)",
    nameSa: "पञ्च पाण्डवाः (युधिष्ठिर, भीम, अर्जुन, नकुल, सहदेव)",
    titles: "Heroes of Mahabharata, Champions of Dharma",
    generation: 39,
    fatherId: "pandu_and_kunti",
    motherName: "Kunti & Madri",
    spouseName: "Draupadi (Yajnaseni), Subhadra, Hidimbi, Ulupi, Chitrangada",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    era: "Dvapara Yuga (Kurukshetra War)",
    description: "Yudhishthira (son of Yama/Dharma), Bhima (son of Vayu, slayer of Duryodhana and Jarasandha), Arjuna (son of Indra, recipient of Bhagavad Gita, master of Gandiva), Nakula and Sahadeva (sons of Ashvini Kumaras). Restored Dharma at Kurukshetra.",
    keyFeats: ["Performed the imperial Rajasuya and Ashvamedha Yajnas at Indraprastha", "Arjuna received the divine Bhagavad Gita from Sri Krishna", "Ruled the entire world in righteous peace for 36 years after Kurukshetra"],
    scripturalReferences: ["Mahabharata (All 18 Parvas)", "Bhagavata Purana 1.7-16 & 9.22"]
  },
  {
    id: "abhimanyu_hero",
    nameEn: "Veera Abhimanyu",
    nameSa: "वीर अभिमन्यु",
    titles: "Son of Arjuna and Subhadra, Avatar of Varchas",
    generation: 40,
    fatherId: "five_pandavas",
    motherName: "Subhadra (sister of Sri Krishna)",
    spouseName: "Uttara (daughter of King Virata of Matsya)",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    era: "End of Dvapara Yuga (13th Day of Kurukshetra)",
    description: "Incarnation of Varchas (son of Soma). Mastered the knowledge of entering the Chakravyuha while in his mother's womb. At age sixteen, fought single-handedly against the combined maharathis of the Kauravas on Day 13.",
    keyFeats: ["Broke into the impregnable Chakravyuha created by Acharya Drona", "Father of Parikshit, through whom the human royal seed was preserved"],
    scripturalReferences: ["Mahabharata Drona Parva (Abhimanyu Badha Parva)", "Bhagavata Purana 1.8 & 1.12"]
  },
  {
    id: "parikshit_maharaja",
    nameEn: "Maharaja Parikshit (Vishnuraata)",
    nameSa: "महाराज परीक्षित् (विष्णुरात)",
    titles: "Hearer of Srimad Bhagavatam, Sole Heir of Kurus",
    generation: 41,
    fatherId: "abhimanyu_hero",
    motherName: "Uttara",
    spouseName: "Iravati (daughter of Uttara)",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    era: "Transition into Kali Yuga (3102 BCE)",
    description: "Saved in his mother's womb from Ashvatthama's Brahmashira weapon by Sri Krishna's Sudarshana Chakra. Reigned as the ideal world emperor. When cursed by Shringi to die in seven days by Takshaka, he fasted without water on the banks of the Ganga at Shukatal and heard the complete Srimad Bhagavatam from Sri Shukadeva Gosvami, attaining Moksha.",
    keyFeats: ["Subdued Kali Purusha, restricting his presence to gold, gambling, intoxication, prostitution, and slaughter", "Heard the complete 18,000 verses of Srimad Bhagavatam in 7 days", "Attained supreme Vaikuntha liberation through Shravana Bhakti"],
    scripturalReferences: ["Bhagavata Purana Skandhas 1 & 12", "Vishnu Purana 4.21", "Mahabharata Adi Parva"]
  },
  {
    id: "janamejaya_sarpa_satra",
    nameEn: "Maharaja Janamejaya",
    nameSa: "महाराज जनमेजय",
    titles: "Performer of Sarpa Satra, Hearer of Mahabharata",
    generation: 42,
    fatherId: "parikshit_maharaja",
    motherName: "Iravati",
    dynasty: "Pauravavansha (Kuru/Bharata)",
    manvantara: 7,
    era: "Early Kali Yuga (around 3050 BCE)",
    description: "Son of Parikshit. Performed the mighty Sarpa Satra yajna to avenge his father's death, which was stopped by Sage Astika. During this yajna, Sage Vaishampayana recited the complete Mahabharata to him as composed by Sri Krishna Dvaipayana Vyasa.",
    keyFeats: ["First recipient of the recited MAHABHARATA from Sage Vaishampayana", "Conquered Takshashila (Taxila) and established northern frontiers"],
    scripturalReferences: ["Mahabharata Adi Parva (Astika Parva)", "Bhagavata Purana 12.5-6", "Vishnu Purana 4.21.1-3"]
  }
];

export const OTHER_VAIVASVATA_BRANCHES = [
  {
    nameEn: "Saryati Lineage (शर्याति वंश)",
    description: "Saryati's daughter Sukanya married Sage Chyavana (origin of Chyavanaprash). His son Anarta ruled Anarta-desha (Gujarat), and grandson Kakudmi / Revata founded Kushasthali (Dvaraka). Kakudmi took daughter Revati to Brahmaloka to consult Brahma; due to time dilation, 27 Chaturyugas passed, and Brahma arranged Revati's marriage to Balarama in Dvapara Yuga."
  },
  {
    nameEn: "Nabhaga & Ambarisha Lineage (नाभाग एवं अम्बरीष वंश)",
    description: "Nabhaga's son Ambarisha Maharaja observed the strict Ekadashi-Dvadashi Mahavrata. When Sage Durvasa angrily manifested a fiery demon against him, Lord Vishnu's Sudarshana Chakra pursued Durvasa across the cosmos until Durvasa sought Ambarisha's pardon, illustrating the supreme power of pure Vaishnava Bhakti."
  },
  {
    nameEn: "Dhrishta Lineage (धृष्ट वंश - Dharstaka)",
    description: "The descendants of Dhrishta were born as Kshatriyas but elevated to the status of revered Brahmanas through spiritual realization, demonstrating the Vedic principle of guna-karma over mere birth."
  },
  {
    nameEn: "Karusha Lineage (करूष वंश)",
    description: "Descendants of Karusha were renowned as the Karusha warriors, staunch defenders of northern river valleys and chivalric martial codes."
  },
  {
    nameEn: "Narishyanta Lineage (नरिष्यन्त वंश)",
    description: "Founded the northern frontier tribes and the early Sakas/Bactrian regions through generations of royal expansion."
  },
  {
    nameEn: "Nabhagadishta / Dista Lineage (नाभागादिष्ट वंश)",
    description: "His son Bhalandana and grandson Vatsapriti were celebrated hymn-composers and patrons of Vedic sacrifices."
  },
  {
    nameEn: "Prishadhra Lineage (पृषध्र)",
    description: "Became a wandering ascetic observing Ahimsa after an accidental killing of a cow in the dark while defending his preceptor's cattle."
  }
];
