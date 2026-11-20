import { KotiDevata, ReductionLevel } from "../types/sanskarAndDevataTypes";

export const KOTI_ETYMOLOGY_EXPOSITION = {
  title: "Vedic Etymology of 'Koti' (कोटि शब्दार्थ विमर्श)",
  sanskritHeader: "त्रयस्त्रिंशत् कोटि देवाः — ३३ प्रकाराः, न तु ३३ कोटि (३३ करोड़) सङ्ख्या",
  primaryInsight: "In Vedic Sanskrit, the word 'Koti' (कोटि) means 'Class, Category, Division, Supreme Dimension, or Peak' (प्रकार, वर्ग, विभाग, उत्कर्ष), exactly as used in Nyaya logic ('Chatushkoti' = fourfold category) and grammar. It does NOT denote the colloquial numerical figure of 10 million (crore).",
  scripturalFoundations: [
    {
      source: "Brihadaranyaka Upanishad 3.9.1-9 (बृहदारण्यकोपनिषद्)",
      quote: "कतमे ते त्रयस्त्रिंशदिति । अष्टौ वसवः, एकादश रुद्राः, द्वादशादित्याः, त एकत्रिंशत्, इन्द्रश्चैव प्रजापतिश्च त्रयस्त्रिंशाविति ॥",
      translation: "Which are those thirty-three? The 8 Vasus, the 11 Rudras, the 12 Adityas—these make thirty-one; and Indra and Prajapati make thirty-three."
    },
    {
      source: "Shukla Yajurveda Samhita 14.31 (शुक्ल यजुर्वेद)",
      quote: "त्रयस्त्रिंशता स्तुवत प्रजा असृज्यन्त...",
      translation: "Through the thirty-three cosmic principles the creative forces of the universe were sustained and brought forth."
    },
    {
      source: "Rigveda Samhita 1.139.11 (ऋग्वेद)",
      quote: "ये देवासो दिव्येकादश स्थ पृथिव्यामध्येकादश स्थ । अप्सुक्षितो महिनैकादश स्थ ते देवासो यज्ञमिमं जुषध्वम् ॥",
      translation: "O ye Gods who are eleven in the heavenly realm, eleven on Mother Earth, and eleven dwelling in the atmospheric waters—may you all rejoice in this sacred communion!"
    }
  ]
};

export const ALL_33_KOTI_DEVATAS: KotiDevata[] = [
  // =========================================================================
  // 1. THE 8 VASUS (अष्ट वसवः) — The Cosmic Dwellings & Elemental Foundations
  // =========================================================================
  {
    id: "vasu_prithvi",
    group: "vasu",
    groupName: "The 8 Vasus (अष्ट वसवः)",
    groupSanskrit: "अष्ट वसवः",
    orderNumber: 1,
    name: "Prithvi / Dhara (Mother Earth)",
    sanskritName: "पृथिवी / धरा वसु",
    cosmicElement: "Solid Matter & Gravitational Stability (भूमि तत्त्व)",
    microcosmicCorrespondence: "The physical skeletal frame, flesh, and sensory stability in the Annamaya Kosha.",
    macrocosmicFunction: "The solid celestial matrix supporting all terrestrial organic life and anchoring ecosystems.",
    associatedMonthOrDirection: "Center & Base (Muladhara Chakra)",
    vedicMantra: {
      sanskrit: "ॐ पृथिव्यै स्वाहा । ॐ भूम्यै नमः । माता भूमिः पुत्रोऽहं पृथिव्याः ॥",
      transliteration: "om pṛthivyai svāhā | om bhūmyai namaḥ | mātā bhūmiḥ putro'haṁ pṛthivyāḥ ||",
      meaning: "Oblation to Mother Earth! Earth is my Mother, and I am the child of the soil (Atharvaveda Bhumi Sukta).",
      source: "Atharvaveda 12.1.12"
    },
    symbolOrIcon: "Earth / Soil / Terra",
    philosophicalSignificance: "Brihadaranyaka: All beings dwell upon Earth; hence it is called 'Vasu' (from the root 'Vas' = to abide or dwell)."
  },
  {
    id: "vasu_agni",
    group: "vasu",
    groupName: "The 8 Vasus (अष्ट वसवः)",
    groupSanskrit: "अष्ट वसवः",
    orderNumber: 2,
    name: "Agni / Anala (Sacred Fire & Combustion)",
    sanskritName: "अग्नि / अनल वसु",
    cosmicElement: "Thermal Energy, Plasma & Transformation (तेजस् तत्त्व)",
    microcosmicCorrespondence: "The gastric digestive fire (Jatharagni), enzymatic metabolism, and optic visual perception.",
    macrocosmicFunction: "Thermodynamic heat, solar core reactions, lightning ionization, and sacrificial transmission to the cosmos.",
    associatedMonthOrDirection: "Southeast (Agneya)",
    vedicMantra: {
      sanskrit: "ॐ अग्नये स्वाहा । ॐ पावक नः पुरोहितं यज्ञस्य देवमृत्विजम् ॥",
      transliteration: "om agnaye svāhā | om pāvaka naḥ purohitaṁ yajñasya devamṛtvijam ||",
      meaning: "Oblations to Agni! The purifier, the divine minister of the cosmic sacrifice, bestower of spiritual riches.",
      source: "Rigveda 1.1.1"
    },
    symbolOrIcon: "Flame / Blaze",
    philosophicalSignificance: "Agni is the universal transformer. Without thermal exchange, no chemistry, life, or cellular respiration is possible."
  },
  {
    id: "vasu_vayu",
    group: "vasu",
    groupName: "The 8 Vasus (अष्ट वसवः)",
    groupSanskrit: "अष्ट वसवः",
    orderNumber: 3,
    name: "Vayu / Anila (Cosmic Wind & Atmosphere)",
    sanskritName: "वायु / अनिल वसु",
    cosmicElement: "Gaseous Kinetic Circulation & Respiration (वायु तत्त्व)",
    microcosmicCorrespondence: "Cellular oxygenation, pulmonary respiratory exchange, and nerve impulse conductivity.",
    macrocosmicFunction: "Atmospheric weather circulation, tropospheric convection, and global oxygen-carbon recycling.",
    associatedMonthOrDirection: "Northwest (Vayavya)",
    vedicMantra: {
      sanskrit: "ॐ वायवे स्वाहा । ॐ त्वमेव प्रत्यक्षं ब्रह्मासि त्वामेव प्रत्यक्षं ब्रह्म वदिष्यामि ॥",
      transliteration: "om vāyave svāhā | om tvameva pratyakṣaṁ brahmāsi tvāmeva pratyakṣaṁ brahma vadiṣyāmi ||",
      meaning: "Oblation to Vayu! Thou art indeed the perceptible Brahman manifest in breath; thee alone I declare as living Spirit!",
      source: "Taittiriya Upanishad 1.1"
    },
    symbolOrIcon: "Wind / Air Swirl",
    philosophicalSignificance: "Vayu is the thread (Sutratman) upon which all worlds and life-forms are strung like beads."
  },
  {
    id: "vasu_antariksha",
    group: "vasu",
    groupName: "The 8 Vasus (अष्ट वसवः)",
    groupSanskrit: "अष्ट वसवः",
    orderNumber: 4,
    name: "Antariksha (The Atmosphere & Intermediate Space)",
    sanskritName: "अन्तरिक्ष वसु",
    cosmicElement: "Spatial Continuum between Earth and Sun (आकाश/मध्यम लोक)",
    microcosmicCorrespondence: "The internal thoracic and abdominal cavities permitting bodily organs to expand and pulsate.",
    macrocosmicFunction: "The atmospheric buffer protecting life from cosmic gamma rays and providing the arena for clouds and birds.",
    associatedMonthOrDirection: "Mid-heavens (Bhuvah Loka)",
    vedicMantra: {
      sanskrit: "ॐ अन्तरिक्षाय स्वाहा । ॐ विष्णो रराटमसि विष्णोः श्नोत्रे स्थो विष्णोः स्यूरसि ॥",
      transliteration: "om antarikṣāya svāhā | om viṣṇo rarāṭamasi viṣṇoḥ śnotre stho viṣṇoḥ syūrasi ||",
      meaning: "Oblations to the Intermediate Sky! Thou art the expansive expanse of all-pervading Vishnu.",
      source: "Shukla Yajurveda 5.21"
    },
    symbolOrIcon: "Atmospheric Vault / Sky",
    philosophicalSignificance: "The intermediate sphere connecting the physical earth (Bhur) with the divine celestial realms (Svah)."
  },
  {
    id: "vasu_aditya",
    group: "vasu",
    groupName: "The 8 Vasus (अष्ट वसवः)",
    groupSanskrit: "अष्ट वसवः",
    orderNumber: 5,
    name: "Aditya (The Central Sun)",
    sanskritName: "आदित्य वसु",
    cosmicElement: "Electromagnetic Radiation, Light & Photons (द्योतमान प्रकाश)",
    microcosmicCorrespondence: "The visual organ (Chakshu) and the Ajna chakra of inner intuitive illumination.",
    macrocosmicFunction: "The gravitational epicenter of the solar system, driving photosynthesis, planetary orbits, and diurnal time.",
    associatedMonthOrDirection: "East / Zenith",
    vedicMantra: {
      sanskrit: "ॐ सूर्याय स्वाहा । ॐ चित्रं देवानामुदगादनीकं चक्षुर्मित्रस्य वरुणस्याग्नेः । आप्रा द्यावापृथिवी अन्तरिक्षं सूर्य आत्मा जगतस्तस्थुषश्च ॥",
      transliteration: "om sūryāya svāhā | om citraṁ devānāmudagādanīkaṁ cakṣurmitrasya varuṇasyāgneḥ | āprā dyāvāpṛthivī antarikṣaṁ sūrya ātmā jagatastasthuṣaśca ||",
      meaning: "The radiant face of the Gods has ascended—the brilliant eye of Mitra, Varuna, and Agni! Pervading heaven, earth, and sky, the Sun is the Soul of everything that moves and is motionless!",
      source: "Rigveda 1.115.1"
    },
    symbolOrIcon: "Radiant Sun",
    philosophicalSignificance: "The Sun is the cosmic eye and the perceptible emblem of the transcendent Brahman (Asavadityo Brahma)."
  },
  {
    id: "vasu_dyu",
    group: "vasu",
    groupName: "The 8 Vasus (अष्ट वसवः)",
    groupSanskrit: "अष्ट वसवः",
    orderNumber: 6,
    name: "Dyu / Prabhasa (The Celestial Vault / Deep Space)",
    sanskritName: "द्यौः / प्रभास वसु",
    cosmicElement: "Cosmic Ether, Outer Space & Stars (द्युलोक)",
    microcosmicCorrespondence: "The Sahasrara crown aperture connecting personal awareness with cosmic universal space.",
    macrocosmicFunction: "The boundless cosmic fabric containing stellar nebulae, galaxies, and the overarching field of gravity.",
    associatedMonthOrDirection: "Zenith / Celestial North",
    vedicMantra: {
      sanskrit: "ॐ दिवे स्वाहा । ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिः ॥",
      transliteration: "om dive svāhā | om dyauḥ śāntirantarikṣaṁ śāntiḥ pṛthivī śāntirāpaḥ śāntiḥ ||",
      meaning: "Oblation to the Heavenly Realm! May peace radiate in the celestial deeps, peace in the atmosphere, peace on earth!",
      source: "Shukla Yajurveda 36.17"
    },
    symbolOrIcon: "Celestial Firmament / Deep Cosmos",
    philosophicalSignificance: "Dyu represents the Father principle of cosmic space, married to Mother Earth (Dyauh Pita Prithvi Mata)."
  },
  {
    id: "vasu_chandramas",
    group: "vasu",
    groupName: "The 8 Vasus (अष्ट वसवः)",
    groupSanskrit: "अष्ट वसवः",
    orderNumber: 7,
    name: "Chandramas / Soma (The Moon & Nectar)",
    sanskritName: "चन्द्रमाः / सोम वसु",
    cosmicElement: "Rasa, Tidal Resonance & Biological Fluids (आप्य/सोम तत्त्व)",
    microcosmicCorrespondence: "The human mind (Manas), neuro-endocrinal pineal cycles, and emotional tranquility.",
    macrocosmicFunction: "Drives oceanic tides, regulates botanical sap flows (Oshadhi), and modulates biological nocturnal biorhythms.",
    associatedMonthOrDirection: "Northeast / Night",
    vedicMantra: {
      sanskrit: "ॐ चन्द्रमसे स्वाहा । ॐ चक्षुषः सूर्यो अजायत मुखादिन्द्रश्चाग्निश्च प्राणाद्वायुरजायत । मनसो जातस्तन्म आप्यायताम् ॥",
      transliteration: "om candramase svāhā | om cakṣuṣaḥ sūryo ajāyata mukhādindraścāgniśca prāṇādvāyurajāyata | manaso jātastanma āpyāyatām ||",
      meaning: "From the cosmic Mind of the Purusha, the Moon was born! May that soothing lunar essence replenish our vital fluids.",
      source: "Rigveda 10.90.13 (Purusha Sukta)"
    },
    symbolOrIcon: "Crescent Moon",
    philosophicalSignificance: "'Chandrama Manaso Jatah'—the mind is intrinsically linked to lunar resonance and subtle emotional waters."
  },
  {
    id: "vasu_nakshatrani",
    group: "vasu",
    groupName: "The 8 Vasus (अष्ट वसवः)",
    groupSanskrit: "अष्ट वसवः",
    orderNumber: 8,
    name: "Nakshatrani (The Constellations & Star Fields)",
    sanskritName: "नक्षत्राणि वसु",
    cosmicElement: "Astrophysical Coordinate Grid & Starlight (तारामण्डल)",
    microcosmicCorrespondence: "The neural synaptic constellations and the 27 vital marma zones across the human physiology.",
    macrocosmicFunction: "The 27 ecliptic stellar markers providing the sidereal chronometric clock of cosmic time (Kala Chakra).",
    associatedMonthOrDirection: "The 360-degree Zodiac Belt",
    vedicMantra: {
      sanskrit: "ॐ नक्षत्रेभ्यः स्वाहा । ॐ नक्षत्राणामधिपत्नी विशाखे श्रेष्ठाविन्द्राग्नी भुवनस्य गोपौ ॥",
      transliteration: "om nakṣatrebhyaḥ svāhā | om nakṣatrāṇāmadhipatnī viśākhe śreṣṭhāvindrāgnī bhuvanasya gopau ||",
      meaning: "Oblations to the sacred Star Constellations! Guardians of cosmic time and guides of universal consciousness.",
      source: "Taittiriya Brahmana 3.1.1"
    },
    symbolOrIcon: "Cluster of Stars / Constellation",
    philosophicalSignificance: "The stars represent the celestial seats of enlightened Rishis and the cosmic measuring rod of evolution."
  },

  // =========================================================================
  // 2. THE 11 RUDRAS (एकादश रुद्राः) — The 10 Vital Breaths + The 11th Atman/Mind
  // =========================================================================
  {
    id: "rudra_prana",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 9,
    name: "Prana Vayu (The Inward Vital Force)",
    sanskritName: "प्राण वायु (प्रथम रुद्र)",
    cosmicElement: "Forward-Moving Cosmic Life-Current (प्रवहण)",
    microcosmicCorrespondence: "Resides in the heart and chest; governs inhalation, cardiovascular pulse, and life intake.",
    macrocosmicFunction: "The cosmic centripetal drawing force that gathers stellar gases into living planetary systems.",
    vedicMantra: {
      sanskrit: "ॐ प्राणाय स्वाहा । ॐ नमस्ते रुद्र मन्यव उतो त इषवे नमः । बाहुभ्यामुत ते नमः ॥",
      transliteration: "om prāṇāya svāhā | om namaste rudra manyava uto ta iṣave namaḥ | bāhubhyāmuta te namaḥ ||",
      meaning: "Oblation to Prana! Salutations to thy fiery intensity, O Rudra, and salutations to thy arrow and thy twin arms!",
      source: "Shukla Yajurveda 16.1 (Shri Rudram)"
    },
    symbolOrIcon: "Inward Breath / Heart Vortex",
    philosophicalSignificance: "Brihadaranyaka 3.9.4: When the pranas depart from this mortal body, they cause tears (rudanti), hence called Rudras."
  },
  {
    id: "rudra_apana",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 10,
    name: "Apana Vayu (The Downward Eliminative Force)",
    sanskritName: "अपान वायु (द्वितीय रुद्र)",
    cosmicElement: "Gravitational Excretory & Descending Dynamic (अपवहण)",
    microcosmicCorrespondence: "Resides in the pelvic basin; governs exhalation, elimination of metabolic waste, and childbirth.",
    macrocosmicFunction: "The cosmic cleansing and entropic breakdown mechanism recycling discarded planetary matter.",
    vedicMantra: {
      sanskrit: "ॐ अपानाय स्वाहा । ॐ या ते रुद्र शिवा तनूः शिवा विश्वाहभेषजी । शिवा रुद्रस्य भेषजी तया नो मृड जीवसे ॥",
      transliteration: "om apānāya svāhā | om yā te rudra śivā tanūḥ śivā viśvāhabheṣajī | śivā rudrasya bheṣajī tayā no mṛḍa jīvase ||",
      meaning: "Oblation to Apana! That form of thine, O Rudra, which is benevolent, auspicious, and the universal healer—with that bestow life!",
      source: "Shukla Yajurveda 16.2"
    },
    symbolOrIcon: "Downward Flow / Pelvic Force",
    philosophicalSignificance: "Apana prevents the accumulation of toxic biological debris, preserving homeostasis."
  },
  {
    id: "rudra_vyana",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 11,
    name: "Vyana Vayu (The Pervasive Circulatory Force)",
    sanskritName: "व्यान वायु (तृतीय रुद्र)",
    cosmicElement: "All-Pervading Kinetic Matrix (संवहण)",
    microcosmicCorrespondence: "Diffused throughout the 72,000 Nadis, nervous system, and blood vessels; governs blood flow and movement.",
    macrocosmicFunction: "The cosmic distribution network that conveys light and energetic radiation across interstellar space.",
    vedicMantra: {
      sanskrit: "ॐ व्यानाय स्वाहा । ॐ नमो भगवते रुद्राय विष्णवे मृत्युर्मे पाहि ॥",
      transliteration: "om vyānāya svāhā | om namo bhagavate rudrāya viṣṇave mṛtyurme pāhi ||",
      meaning: "Oblation to Vyana! Salutations to Bhagavan Rudra the all-pervading; protect me from premature dissolution!",
      source: "Taittiriya Aranyaka 10.18"
    },
    symbolOrIcon: "Expanding Radiance / Circulation",
    philosophicalSignificance: "Vyana holds the human form together; when it ceases, somatic coherence collapses immediately."
  },
  {
    id: "rudra_udana",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 12,
    name: "Udana Vayu (The Ascending Spiritual Current)",
    sanskritName: "उदान वायु (चतुर्थ रुद्र)",
    cosmicElement: "Ascending Anti-Gravitational Vector (उद्वहण)",
    microcosmicCorrespondence: "Resides in the throat (Vishuddhi); governs vocal speech, swallowing, and the soul's exit at death.",
    macrocosmicFunction: "Cosmic escape velocity, solar flares, and upward evolutionary ascent of matter into consciousness.",
    vedicMantra: {
      sanskrit: "ॐ उदानाय स्वाहा । ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृ त्योर्मुक्षीय मामृतात् ॥",
      transliteration: "om udānāya svāhā | om tryambakaṁ yajāmahe sugandhiṁ puṣṭivardhanam | urvārukamiva bandhanānmṛtyormukṣīya māmṛtāt ||",
      meaning: "Oblation to Udana! We worship the three-eyed Lord who is fragrant and nourishes all! As a ripe gourd is freed from its vine, may we be liberated from death into immortality!",
      source: "Rigveda 7.59.12 (Maha Mrityunjaya)"
    },
    symbolOrIcon: "Ascending Flame / Throat",
    philosophicalSignificance: "Udana conducts the Jivatman through the Sushumna Nadi toward higher celestial spheres."
  },
  {
    id: "rudra_samana",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 13,
    name: "Samana Vayu (The Balancing Digestive Current)",
    sanskritName: "समान वायु (पञ्चम रुद्र)",
    cosmicElement: "Equilibrium, Center of Gravity & Digestion (समवहण)",
    microcosmicCorrespondence: "Resides at the navel (Manipura); digests food, assimilates nutrients, and balances catabolism and anabolism.",
    macrocosmicFunction: "The cosmic gravitational equilibrium keeping stellar systems in stable orbital balances.",
    vedicMantra: {
      sanskrit: "ॐ समानाय स्वाहा । ॐ नमो अस्तु नीलप्रीवाय सहस्राक्षाय मीढुषे । अथो ये अस्य सत्त्वानोऽहं तेभ्योऽकरं नमः ॥",
      transliteration: "om samānāya svāhā | om namo astu nīlagrīvāya sahasrākṣāya mīḍhuṣe | atho ye asya sattvāno'haṁ tebhyo'karaṁ namaḥ ||",
      meaning: "Oblation to Samana! Salutations to the blue-throated, thousand-eyed granter of abundance! To all his radiant attendants, I bow.",
      source: "Shukla Yajurveda 16.8"
    },
    symbolOrIcon: "Navel Fire / Balance Scales",
    philosophicalSignificance: "Samana converts ingested food into bio-energy and equalizes the fiery and cool currents of the body."
  },
  {
    id: "rudra_naga",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 14,
    name: "Naga Upa-Prana (Eructation & Upper Gastric Pressure)",
    sanskritName: "नाग उपप्राण (षष्ठ रुद्र)",
    cosmicElement: "Sudden Gas Expulsion & Volcanic Eruption",
    microcosmicCorrespondence: "Relieves abdominal and thoracic gaseous distension via burping and reverse peristalsis.",
    macrocosmicFunction: "Volcanic venting, geothermal geysers, and sudden planetary gas releases maintaining tectonic balance.",
    vedicMantra: {
      sanskrit: "ॐ नागाय स्वाहा । ॐ नमो भवाय च रुद्राय च नमः शर्वाय च पशुपतये च ॥",
      transliteration: "om nāgāya svāhā | om namo bhavāya ca rudrāya ca namaḥ śarvāya ca paśupataye ca ||",
      meaning: "Oblation to Naga! Salutations to Bhava (originator) and Rudra; salutations to Sharva and the Protector of all souls.",
      source: "Shukla Yajurveda 16.18"
    },
    symbolOrIcon: "Serpentine Spiral / Upward Vent",
    philosophicalSignificance: "Naga restores comfort by immediately dissipating excess intra-cranial and gastric pressure."
  },
  {
    id: "rudra_kurma",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 15,
    name: "Kurma Upa-Prana (Ocular Blinking & Iris Modulation)",
    sanskritName: "कूर्म उपप्राण (सप्तम रुद्र)",
    cosmicElement: "Pulsatile Shielding & Photoreception",
    microcosmicCorrespondence: "Governs involuntary blinking, pupillary constriction/dilation, and optic corneal hydration.",
    macrocosmicFunction: "Planetary magnetic fields pulsing to deflect destructive cosmic radiation bursts.",
    vedicMantra: {
      sanskrit: "ॐ कूर्माय स्वाहा । ॐ नमः शम्भवे च मयोभवे च नमः शङ्कराय च मयस्कराय च ॥",
      transliteration: "om kūrmāya svāhā | om namaḥ śambhave ca mayobhave ca namaḥ śaṅkarāya ca mayaskarāya ca ||",
      meaning: "Oblation to Kurma! Salutations to the source of auspiciousness, the author of divine bliss and peace!",
      source: "Shukla Yajurveda 16.41"
    },
    symbolOrIcon: "Eye Blink / Cosmic Turtle Shell",
    philosophicalSignificance: "Named after Kurma (the tortoise that retracts its limbs); shields the delicate lens from sensory overload."
  },
  {
    id: "rudra_krikara",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 16,
    name: "Krikara Upa-Prana (Sternutation & Sneeze Reflex)",
    sanskritName: "कृकर उपप्राण (अष्टम रुद्र)",
    cosmicElement: "Violent Purification & Cleansing Shockwave",
    microcosmicCorrespondence: "Produces the sneeze reflex and induces the biological hunger/thirst sensations.",
    macrocosmicFunction: "Atmospheric lightning bolts clearing particulate dust and smog from the lower skies.",
    vedicMantra: {
      sanskrit: "ॐ कृकराय स्वाहा । ॐ नमः कपर्दिने च व्युप्तकेशाय च नमः सहस्राक्षाय च शतधन्वने च ॥",
      transliteration: "om kṛkarāya svāhā | om namaḥ kapardine ca vyuptakeśāya ca namaḥ sahasrākṣāya ca śatadhanvane ca ||",
      meaning: "Oblation to Krikara! Salutations to Him with matted hair, and Him with shaved head; the thousand-eyed Lord with a hundred bows!",
      source: "Shukla Yajurveda 16.29"
    },
    symbolOrIcon: "Shockwave / Sneeze Flash",
    philosophicalSignificance: "Krikara expels airborne toxins and foreign particles from the nasal mucosa at supersonic speeds."
  },
  {
    id: "rudra_devadatta",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 17,
    name: "Devadatta Upa-Prana (Yawning & Brain Oxygenation)",
    sanskritName: "देवदत्त उपप्राण (नवम रुद्र)",
    cosmicElement: "Hypothalamic Cooling & Restorative Inhalation",
    microcosmicCorrespondence: "Induces yawning and sighing; flushes venous blood from the cerebral vessels and cools the brain.",
    macrocosmicFunction: "Nocturnal cooling cycles of planetary surfaces after intense solar daytime heating.",
    vedicMantra: {
      sanskrit: "ॐ देवदत्ताय स्वाहा । ॐ नमः शिवाय च शिवतराय च नमस्तीर्थ्याय च कूल्याय च ॥",
      transliteration: "om devadattāya svāhā | om namaḥ śivāya ca śivatarāya ca namastīrthyāya ca kūlyāya ca ||",
      meaning: "Oblation to Devadatta! Salutations to the Auspicious One, to Him who is supremely benevolent; to Him of the sacred fords!",
      source: "Shukla Yajurveda 16.42"
    },
    symbolOrIcon: "Yawning Respiration / Cooling Breeze",
    philosophicalSignificance: "Meaning 'God-given' (Deva-datta); resets cerebral fatigue and stimulates cerebrospinal fluid circulation."
  },
  {
    id: "rudra_dhananjaya",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 18,
    name: "Dhananjaya Upa-Prana (Nourishment & Post-Mortem Dissolution)",
    sanskritName: "धनञ्जय उपप्राण (दशम रुद्र)",
    cosmicElement: "Residual Bio-Electric Cohesion & Dissolution",
    microcosmicCorrespondence: "Diffuses nutrients throughout tissues; remains in the physical body even after clinical death, assisting decomposition.",
    macrocosmicFunction: "The gravitational remnant in dead stars (white dwarfs/neutron stars) governing final matter collapse.",
    vedicMantra: {
      sanskrit: "ॐ धनञ्जयाय स्वाहा । ॐ नमः पार्याय चावार्याय च नमः प्रतरणाय चोत्तरणाय च ॥",
      transliteration: "om dhanañjayāya svāhā | om namaḥ pāryāya cāvāryāya ca namaḥ prataraṇāya cottaraṇāya ca ||",
      meaning: "Oblation to Dhananjaya! Salutations to Him who is on the further shore and the near shore; to Him who ferries across samsara!",
      source: "Shukla Yajurveda 16.42"
    },
    symbolOrIcon: "Undying Spark / Post-Mortem Force",
    philosophicalSignificance: "Named 'Winner of Wealth' (Dhana-jaya); it does not abandon the corpse until cremation or total dissolution."
  },
  {
    id: "rudra_atman",
    group: "rudra",
    groupName: "The 11 Rudras (एकादश रुद्राः)",
    groupSanskrit: "एकादश रुद्राः",
    orderNumber: 19,
    name: "Atman / Manas (The 11th Rudra — Mind & Inner Self)",
    sanskritName: "आत्मा / मनस् (एकादश रुद्र - अधीश्वर)",
    cosmicElement: "Self-Aware Consciousness (चित् / साक्षी चैतन्य)",
    microcosmicCorrespondence: "The conscious observer presiding in the cardiac cave (Hridaya Guha), synthesizing all sensory percepts.",
    macrocosmicFunction: "The Cosmic Mind (Mahat) through which the universe experiences its own existence.",
    vedicMantra: {
      sanskrit: "ॐ आत्मने स्वाहा । ॐ ईशानाय नमः । ईशानः सर्वविद्यानामीश्वरः सर्वभूतानां ब्रह्माधिपतिर्ब्रह्मणोऽधिपतिर्ब्रह्मा शिवो मे अस्तु सदाशिवोम् ॥",
      transliteration: "om ātmane svāhā | om īśānāya namaḥ | īśānaḥ sarvavidyānāmīśvaraḥ sarvabhūtānāṁ brahmādhipatirbrahmaṇo'dhipatirbrahmā śivo me astu sadāśivom ||",
      meaning: "Oblation to the Atman! Ishana, the Lord of all wisdom, the Ruler of all beings, the Sovereign of Brahman—may that benevolent Shiva bless me!",
      source: "Taittiriya Aranyaka 10.47"
    },
    symbolOrIcon: "Eye of Shiva / Pure Witness",
    philosophicalSignificance: "Brihadaranyaka 3.9.4: 'The ten pranas in man, and the Atman as the eleventh.' When the Atman withdraws, everything weeps!"
  },

  // =========================================================================
  // 3. THE 12 ADITYAS (द्वादश आदित्याः) — The 12 Solar Months of Time & Radiance
  // =========================================================================
  {
    id: "aditya_dhatri",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 20,
    name: "Dhatri (The Cosmic Creator & Stabilizer)",
    sanskritName: "धाता आदित्य (चैत्र मास)",
    cosmicElement: "Morphogenetic Formation & Life Architecture",
    microcosmicCorrespondence: "The genetic DNA blueprint and bone marrow matrix structuring human anatomy.",
    macrocosmicFunction: "Presides over the cosmic month of Chaitra (Spring equinox), instigating seasonal flowering and new creation.",
    associatedMonthOrDirection: "Chaitra (March - April)",
    vedicMantra: {
      sanskrit: "ॐ धात्रे स्वाहा । ॐ धाता विधाता भुवनस्य यस्पतिः । स नः कृणोतु द्रविणं यदस्य ॥",
      transliteration: "om dhātre svāhā | om dhātā vidhātā bhuvanasya yaspatiḥ | sa naḥ kṛṇotu draviṇaṁ yadasya ||",
      meaning: "Oblation to Dhatri! The creator, the ordainer, the Lord of the world—may he bestow upon us boundless spiritual and material wealth!",
      source: "Rigveda 10.128.7"
    },
    symbolOrIcon: "Spring Sprout / Architect Compass",
    philosophicalSignificance: "Dhatri brings potential forms out of unmanifest Prakriti into physical realization."
  },
  {
    id: "aditya_aryaman",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 21,
    name: "Aryaman (Nobility, Sunlight & Ancestral Paths)",
    sanskritName: "अर्यमा आदित्य (वैशाख मास)",
    cosmicElement: "Societal Honor, Galactic Wind & Chivalry",
    microcosmicCorrespondence: "The ethical moral conscience and the arterial pulsing of pure noble blood.",
    macrocosmicFunction: "Presides over Vaishakha, guiding the ancestral pathway (Pitriyana) and illuminating stellar navigation.",
    associatedMonthOrDirection: "Vaishakha (April - May)",
    vedicMantra: {
      sanskrit: "ॐ अर्यम्णे स्वाहा । ॐ अर्यमा याति पथिभी रजीयिष्ठैः सूर्यस्य रश्मिभिः ॥",
      transliteration: "om aryamṇe svāhā | om aryamā yāti pathibhī rajīyiṣṭhaiḥ sūryasya raśmibhiḥ ||",
      meaning: "Oblation to Aryaman! Aryaman traverses the straightest celestial pathways guided by the golden rays of the Sun!",
      source: "Rigveda 10.85.23"
    },
    symbolOrIcon: "Sun Chariot / Golden Road",
    philosophicalSignificance: "Aryaman is the supreme deity of righteous oaths, noble hospitality, and honorable conduct."
  },
  {
    id: "aditya_mitra",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 22,
    name: "Mitra (Friendship, Harmony & Dawn Radiance)",
    sanskritName: "मित्र आदित्य (ज्येष्ठ मास)",
    cosmicElement: "Universal Concord, Cohesion & Photosynthesis",
    microcosmicCorrespondence: "The thymus gland, loving empathy, and social cooperation in the Anahata chakra.",
    macrocosmicFunction: "Presides over Jyeshtha, awakening beings to collaborative endeavor and morning light.",
    associatedMonthOrDirection: "Jyeshtha (May - June)",
    vedicMantra: {
      sanskrit: "ॐ मित्राय स्वाहा । ॐ मित्रो जनान्यातयति ब्रुवाणो मित्रो दाधार पृथिवीमुत द्याम् । मित्रः कृष्टीरनिमिषाभि चष्टे मित्राय हव्यं घृतवज्जुहोत ॥",
      transliteration: "om mitrāya svāhā | om mitro janānyātayati bruvāṇo mitro dādhāra pṛthivīmuta dyām | mitraḥ kṛṣṭīranimiṣābhi caṣṭe mitrāya havyaṁ ghṛtavajjuhota ||",
      meaning: "Mitra, speaking aloud, brings all peoples together in harmony! Mitra upholds both heaven and earth. Mitra beholds all beings with unwinking gaze; offer ghee-laden oblations to Mitra!",
      source: "Rigveda 3.59.1"
    },
    symbolOrIcon: "Clasped Hands / Dawn Rays",
    philosophicalSignificance: "Mitra represents universal friendship (Maitri); without Mitra's cohesive force, society fractures into discord."
  },
  {
    id: "aditya_varuna",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 23,
    name: "Varuna (Cosmic Moral Law, Oceans & Night Sky)",
    sanskritName: "वरुण आदित्य (आषाढ मास)",
    cosmicElement: "Rta (Cosmic Order), Hydrodynamic Cycles & Depths",
    microcosmicCorrespondence: "The kidneys, urinary osmotic balance, and the subconscious memory repositories.",
    macrocosmicFunction: "Presides over Ashadha, unleashing the monsoon torrents and maintaining the universal ethical law (Rta).",
    associatedMonthOrDirection: "Ashadha (June - July) / West",
    vedicMantra: {
      sanskrit: "ॐ वरुणाय स्वाहा । ॐ तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः । अहेडमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥",
      transliteration: "om varuṇāya svāhā | om tattvā yāmi brahmaṇā vandamānastadā śāste yajamāno havirbhiḥ | aheḍamāno varuṇeha bodhyuruśaṁsa mā na āyuḥ pra moṣīḥ ||",
      meaning: "With prayers I approach thee, O Varuna! The sacrificer asks this with oblations: Hear us without anger, O far-famed one, and diminish not our lifespan!",
      source: "Rigveda 1.24.11"
    },
    symbolOrIcon: "Ocean Wave / Cosmic Net (Pasha)",
    philosophicalSignificance: "Varuna's thousand eyes (the stars) watch over human deeds, forgiving sins upon sincere prayer."
  },
  {
    id: "aditya_amsha",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 24,
    name: "Amsha (Divine Equity, Sharing & Distribution)",
    sanskritName: "अंश आदित्य (श्रावण मास)",
    cosmicElement: "Equitable Distribution of Energy & Solar Flare Flux",
    microcosmicCorrespondence: "Digestive distribution of glucose, amino acids, and cellular energy across 37 trillion cells.",
    macrocosmicFunction: "Presides over Shravana, ensuring equitable distribution of rainwater and agricultural abundance.",
    associatedMonthOrDirection: "Shravana (July - August)",
    vedicMantra: {
      sanskrit: "ॐ अंशाय स्वाहा । ॐ भगो अर्यमा सविता पुरन्धिर्मह्यं त्वादुर्गार्हपत्याय देवाः ॥",
      transliteration: "om aṁśāya svāhā | om bhago aryamā savitā purandhirmahyaṁ tvāadurgārhapatyāya devāḥ ||",
      meaning: "Oblations to Amsha! Who equitably apportions divine inheritance and blessings to all seekers.",
      source: "Rigveda 10.85.36"
    },
    symbolOrIcon: "Scales of Equity / Shared Portion",
    philosophicalSignificance: "Amsha signifies that every being receives their rightful cosmic measure (Amsha) of grace and sustenance."
  },
  {
    id: "aditya_bhaga",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 25,
    name: "Bhaga (Prosperity, Fortune & Auspicious Heritage)",
    sanskritName: "भग आदित्य (भाद्रपद मास)",
    cosmicElement: "Auspicious Fortune, Grace & Solar Glory",
    microcosmicCorrespondence: "The reproductive vitality, radiant facial aura (Tejas), and inner happiness.",
    macrocosmicFunction: "Presides over Bhadrapada, ripening grains and bestowing fruitful prosperity upon domestic life.",
    associatedMonthOrDirection: "Bhadrapada (August - September)",
    vedicMantra: {
      sanskrit: "ॐ भगाय स्वाहा । ॐ प्रातर्जितं भगमुग्रं हुवेम वयं पुत्रमदितेर्यो विधर्ता । आध्रश्चिद्यं मन्यमानस्तुरश्चिद्राजा चिद्यं भगं भक्षीत्याह ॥",
      transliteration: "om bhagāya svāhā | om prātarjitaṁ bhagamugraṁ huvema vayaṁ putramaditeryo vidhartā | ādhraścidyaṁ manyamānasturaścidrājā cidyaṁ bhagaṁ bhakṣītyāha ||",
      meaning: "In the early morning we invoke victorious, mighty Bhaga, the son of Aditi who sustains all! The poor and the rich, the king and the humble, all pray: May I partake of divine Bhaga (fortune)!",
      source: "Rigveda 7.41.2"
    },
    symbolOrIcon: "Cornucopia / Ripe Sheaf",
    philosophicalSignificance: "From 'Bhaga' comes the word 'Bhagavan'—the possessor of the 6 supreme splendors (Jnana, Vairagya, Yashas, Shri, Aishwarya, Dharma)."
  },
  {
    id: "aditya_vivasvan",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 26,
    name: "Vivasvan (The Radiant Ancestor & Primordial Fire)",
    sanskritName: "विवस्वान् आदित्य (आश्विन मास)",
    cosmicElement: "Solar Core Luminosity & Lineage Ancestry",
    microcosmicCorrespondence: "The immune defense system, basal metabolic vitality, and hereditary cellular memory.",
    macrocosmicFunction: "Presides over Ashvina (Sharad Ritu), father of Vaivasvata Manu and Yama; sustains solar genealogy.",
    associatedMonthOrDirection: "Ashvina (September - October)",
    vedicMantra: {
      sanskrit: "ॐ विवस्वते स्वाहा । ॐ विवस्वन्तं हुवेम स नः शर्म यच्छतु । यः सर्वस्य जगतः प्रभवो जगत्पतिः ॥",
      transliteration: "om vivasvate svāhā | om vivasvantaṁ huvema sa naḥ śarma yacchatu | yaḥ sarvasya jagataḥ prabhavo jagatpatiḥ ||",
      meaning: "Oblations to Vivasvan! We invoke the brilliant progenitor; may he grant us peace and shelter, the Lord of all creation!",
      source: "Rigveda 10.14.5"
    },
    symbolOrIcon: "Golden Crown / Ancestral Flame",
    philosophicalSignificance: "Vivasvan received the timeless Yoga first, as Krishna declares in Bhagavad Gita 4.1: 'Imam Vivasvate Yogam Proktavanahamavyayam'."
  },
  {
    id: "aditya_savitri",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 27,
    name: "Savitri (The Divine Stimulator & Gayatri Shakti)",
    sanskritName: "सविता आदित्य (कार्तिक मास)",
    cosmicElement: "Electromagnetic Awakening & Neural Stimulation",
    microcosmicCorrespondence: "The pineal gland, circadian arousal from sleep, and awakened intellectual intuition (Dhee).",
    macrocosmicFunction: "Presides over Kartika, driving Deepavali's triumph of light and rousing life from slumber.",
    associatedMonthOrDirection: "Kartika (October - November)",
    vedicMantra: {
      sanskrit: "ॐ सवित्रे स्वाहा । ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥",
      transliteration: "om savitre svāhā | om tatsaviturvareṇyaṁ bhargo devasya dhīmahi | dhiyo yo naḥ pracodayāt ||",
      meaning: "Oblations to Savitri! May we meditate upon that supreme adorable effulgence of God Savitri; may He inspire our intellects!",
      source: "Rigveda 3.62.10 (Gayatri)"
    },
    symbolOrIcon: "Rising Sun / Golden Wheel",
    philosophicalSignificance: "Savitri does not merely shine; He awakens, spurs, and impels consciousness toward higher evolution."
  },
  {
    id: "aditya_pushan",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 28,
    name: "Pushan (The Nourisher of Paths, Flocks & Travellers)",
    sanskritName: "पूषा आदित्य (मार्गशीर्ष मास)",
    cosmicElement: "Cosmic Guidance, Botanical Nourishment & Safe Travel",
    microcosmicCorrespondence: "The sensory nerve endings, feet, gait balance, and enteric microbiome nutrition.",
    macrocosmicFunction: "Presides over Margashirsha (Hemanta ritu), guarding lost cattle, protecting pilgrims, and guiding departed souls.",
    associatedMonthOrDirection: "Margashirsha (November - December)",
    vedicMantra: {
      sanskrit: "ॐ पूष्णे स्वाहा । ॐ पूषन् तव व्रते वयं न रिष्येम कदा चन । स्तोतारस्त इह स्मसि ॥",
      transliteration: "om pūṣṇe svāhā | om pūṣan tava vrate vayaṁ na riṣyema kadā cana | stotārasta iha smasi ||",
      meaning: "Oblations to Pushan! In thy sacred fold may we never suffer harm; we who praise thee here on the path!",
      source: "Rigveda 6.54.9"
    },
    symbolOrIcon: "Golden Shepherd's Staff / Path",
    philosophicalSignificance: "Pushan has golden goats drawing his chariot; in Isha Upanishad 15, the dying sage prays: 'Pushan, unveil the golden disk covering the Truth!'"
  },
  {
    id: "aditya_tvashtri",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 29,
    name: "Tvashtri (The Divine Craftsman & Sculptor of Forms)",
    sanskritName: "त्वष्टा आदित्य (पौष मास)",
    cosmicElement: "Atomic Geometry, Crystallography & Organic Morphogenesis",
    microcosmicCorrespondence: "The hands, fine motor dexterity, tool manipulation, and cellular structural proteins.",
    macrocosmicFunction: "Presides over Pausha (Winter solstice), forging the shapes of animals, humans, and crystalline snowflakes.",
    associatedMonthOrDirection: "Pausha (December - January)",
    vedicMantra: {
      sanskrit: "ॐ त्वष्ट्रे स्वाहा । ॐ त्वष्टा रूपाणि पिंशतु प्रजापतिरासिञ्चतु । धाता गर्भं दधातु ते ॥",
      transliteration: "om tvaṣṭre svāhā | om tvaṣṭā rūpāṇi piṁśatu prajāpatirāsiñcatu | dhātā garbhaṁ dadhātu te ||",
      meaning: "Oblations to Tvashtri! May Tvashta, the divine craftsman, sculpt the bodily forms in perfection!",
      source: "Rigveda 10.184.1"
    },
    symbolOrIcon: "Golden Anvil / Sculptor's Chisel",
    philosophicalSignificance: "Tvashtri fashioned Indra's thunderbolt (Vajra) from the bones of Rishi Dadhichi and crafted the Soma chalice."
  },
  {
    id: "aditya_vishnu",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 30,
    name: "Vishnu (The All-Pervading Solar Zenith)",
    sanskritName: "विष्णु आदित्य (माघ मास)",
    cosmicElement: "Space-Time Pervasion, Preservation & Zero-Point Energy",
    microcosmicCorrespondence: "The all-pervading life force sustaining the neuromuscular coordination across all three states (Waking, Dreaming, Deep Sleep).",
    macrocosmicFunction: "Presides over Magha, manifesting the three cosmic strides (Trivikrama) across Earth, Atmosphere, and Heaven.",
    associatedMonthOrDirection: "Magha (January - February)",
    vedicMantra: {
      sanskrit: "ॐ विष्णवे स्वाहा । ॐ इदं विष्णुर्वि चक्रमे त्रेधा नि दधे पदम् । समूळ्हमस्य पांसुरे ॥ तद्विष्णोः परमं पदं सदा पश्यन्ति सूरयः । दिवीव चक्षुराततम् ॥",
      transliteration: "om viṣṇave svāhā | om idaṁ viṣṇurvi cakrame tredhā ni dadhe padam | samūḻhamasya pāṁsure || tadviṣṇoḥ paramaṁ padaṁ sadā paśyanti sūrayaḥ | divīva cakṣurātatam ||",
      meaning: "Through all this universe strode Vishnu; thrice he planted his foot; the entire cosmos is gathered in his dust! That highest abode of Vishnu the enlightened seers behold always, like an eye outspread across heaven!",
      source: "Rigveda 1.22.17, 1.22.20"
    },
    symbolOrIcon: "Three Cosmic Footprints / Sudarshana",
    philosophicalSignificance: "In the Vedas, Vishnu is celebrated as the youngest yet supreme Aditya, pervading every atom with grace."
  },
  {
    id: "aditya_indra",
    group: "aditya",
    groupName: "The 12 Adityas (द्वादशादित्याः)",
    groupSanskrit: "द्वादश आदित्याः",
    orderNumber: 31,
    name: "Indra / Shakra (The Sovereign Will & Lightning Power)",
    sanskritName: "इन्द्र / शक्र आदित्य (फाल्गुन मास)",
    cosmicElement: "Cosmic Electro-Dynamic Willpower & Monsoon Lightning",
    microcosmicCorrespondence: "The executive willpower, courage, and focused concentration in the prefrontal cortex.",
    macrocosmicFunction: "Presides over Phalguna, concluding the annual solar cycle and vanquishing atmospheric obstruction (Vritra).",
    associatedMonthOrDirection: "Phalguna (February - March) / East",
    vedicMantra: {
      sanskrit: "ॐ इन्द्राय स्वाहा । ॐ इन्द्रं मित्रं वरुणमग्निमाहुरथो दिव्यः स सुपर्णो गरुत्मान् । एकं सद्विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः ॥",
      transliteration: "om indrāya svāhā | om indraṁ mitraṁ varuṇamagnimāhuratho divyaḥ sa suparṇo garutmān | ekaṁ sadviprā bahudhā vadantyagniṁ yamaṁ mātariśvānamāhuḥ ||",
      meaning: "They call Him Indra, Mitra, Varuna, Agni, and that celestial winged bird Garutman. Truth is One; the wise describe It in manifold ways: they call It Agni, Yama, and Matarishvan!",
      source: "Rigveda 1.164.46"
    },
    symbolOrIcon: "Diamond Thunderbolt (Vajra)",
    philosophicalSignificance: "Indra is the victor over inertia, releasing the imprisoned rivers of wisdom and vitality."
  },

  // =========================================================================
  // 4. THE 2 SUMMITS (इन्द्र एवं प्रजापति) — Brihadaranyaka 3.9.6
  // =========================================================================
  {
    id: "summit_indra",
    group: "indra_prajapati",
    groupName: "Indra & Prajapati (इन्द्र एवं प्रजापति)",
    groupSanskrit: "द्वावधिकौ — इन्द्रः प्रजापतिश्च",
    orderNumber: 32,
    name: "Indra / Stanayitnu (Cosmic Thunder & Electrical Shakti)",
    sanskritName: "इन्द्रः (स्तनयित्नुः / अशनिः)",
    cosmicElement: "Cosmic Electromagnetism, Lightning & Life Will (विद्युत् शक्ति)",
    microcosmicCorrespondence: "The bio-electric action potentials flashing through human synapses and motor nerves.",
    macrocosmicFunction: "Brihadaranyaka 3.9.6: 'Which is Indra? Thunder is Indra! Which is thunder? The lightning bolt (Ashani)!'",
    vedicMantra: {
      sanskrit: "ॐ इन्द्राय स्वाहा । ॐ स्तनयित्नवे स्वाहा । ॐ अशनये नमः ॥",
      transliteration: "om indrāya svāhā | om stanayitnave svāhā | om aśanaye namaḥ ||",
      meaning: "Oblations to Indra! Oblations to the roaring cosmic Thunder! Salutations to the primordial lightning strike!",
      source: "Brihadaranyaka Upanishad 3.9.6"
    },
    symbolOrIcon: "Lightning Flash / Thunderbolt",
    philosophicalSignificance: "Indra represents the sudden, irresistible flash of illumination that shatters ignorance (Avidya)."
  },
  {
    id: "summit_prajapati",
    group: "indra_prajapati",
    groupName: "Indra & Prajapati (इन्द्र एवं प्रजापति)",
    groupSanskrit: "द्वावधिकौ — इन्द्रः प्रजापतिश्च",
    orderNumber: 33,
    name: "Prajapati / Yajna (Cosmic Creator & Sacrificial Order)",
    sanskritName: "प्रजापतिः (यज्ञः / सर्वसृष्टिकर्ता)",
    cosmicElement: "The Cosmic Sacrificial Matrix & Evolutionary Cycle (यज्ञ चक्र)",
    microcosmicCorrespondence: "The reproductive germ-cell potential and the heart's willingness to sacrifice the ego for the greater good.",
    macrocosmicFunction: "Brihadaranyaka 3.9.6: 'Which is Prajapati? Yajna (the divine sacrifice) is Prajapati! Which is Yajna? All beings (Pashavah)!'",
    vedicMantra: {
      sanskrit: "ॐ प्रजापतये स्वाहा । न त्वदेतान्यन्यो विश्वा जातानि परि ता बभूव । यत्कामास्ते जुहुमस्तन्नो अस्तु वयं स्याम पतयो रयीणाम् ॥",
      transliteration: "om prajāpataye svāhā | na tvadetānyanyo viśvā jātāni pari tā babhūva | yatkāmāste juhumastanno astu vayaṁ syāma patayo rayīṇām ||",
      meaning: "Oblations to Prajapati! None other than Thee has encompassed all these created beings! Whatever desire we harbor as we offer this oblations, may that be granted unto us; may we be masters of spiritual and material abundance!",
      source: "Rigveda 10.121.10 (Hiranyagarbha Sukta)"
    },
    symbolOrIcon: "Golden Womb / Sacrificial Hearth",
    philosophicalSignificance: "Prajapati embodies the principle of self-giving: the universe exists because the Divine offered Itself as the cosmos."
  }
];

export const BRIHADARANYAKA_REDUCTION_ENGINE: ReductionLevel[] = [
  {
    level: 3303,
    sanskritTerm: "त्रयश्च त्री च शता, त्रयश्च त्री च सहस्रा (३३०३ / ३०३)",
    constituents: ["3003 + 300 Devas mentioned in the Nivid of the Vaishvadeva Shastra hymn"],
    dialogueExcerpt: "Sakalya asked: 'How many Gods are there, Yajnavalkya?' Yajnavalkya replied with the Nivid: 'As many as are mentioned in the hymn to the Vishvedevas: 3303!'",
    philosophicalEssence: "The macrocosmic infinite facets of divinity expressing through every galaxy, star, and creature in the universe."
  },
  {
    level: 33,
    sanskritTerm: "त्रयस्त्रिंशत् देवाः (३३ कोटि देवाः)",
    constituents: [
      "8 Vasus (Dwellings/Elements)",
      "11 Rudras (10 Pranas + Mind/Atman)",
      "12 Adityas (12 Months/Sun)",
      "Indra (Thunder/Energy)",
      "Prajapati (Yajna/Cosmic Sacrifice)"
    ],
    dialogueExcerpt: "'Yes,' said Sakalya, 'but how many Gods are there really?' Yajnavalkya replied: 'Thirty-three (Trayastrimshat).' 'Which are those thirty-three?' 'The 8 Vasus, 11 Rudras, 12 Adityas, Indra, and Prajapati.'",
    philosophicalEssence: "The thirty-three fundamental operational categories maintaining the physical, psychological, and temporal architecture of existence."
  },
  {
    level: 6,
    sanskritTerm: "षड् देवाः (६ देवाः)",
    constituents: [
      "Agni (Fire)",
      "Prithvi (Earth)",
      "Vayu (Air)",
      "Antariksha (Atmosphere)",
      "Aditya (Sun)",
      "Dyu (Heaven)"
    ],
    dialogueExcerpt: "'Yes,' said Sakalya, 'but how many Gods are there really?' Yajnavalkya replied: 'Six!' 'Which are the six?' 'Agni, Prithvi, Vayu, Antariksha, Aditya, and Dyu. For these six include all the thirty-three!'",
    philosophicalEssence: "The collapse of temporal and physiological categories into the six primordial macrocosmic structural pillars."
  },
  {
    level: 3,
    sanskritTerm: "त्रयो देवाः (३ देवाः - त्रिलोक)",
    constituents: [
      "Bhur / Prithvi (The Terrestrial Realm)",
      "Bhuvah / Antariksha (The Intermediate Atmospheric Realm)",
      "Svah / Dyu (The Celestial Luminous Realm)"
    ],
    dialogueExcerpt: "'Yes,' said Sakalya, 'but how many Gods are there really?' Yajnavalkya replied: 'Three!' 'Which are the three?' 'These three worlds—Earth, Atmosphere, and Heaven. For in them all the gods are contained!'",
    philosophicalEssence: "The three primary planes of reality represented in the sacred Vyahritis (ॐ भूर्भुवः स्वः) and the Trivikrama strides of Vishnu."
  },
  {
    level: 2,
    sanskritTerm: "द्वौ देवौ (२ देवौ - अन्न एवं प्राण)",
    constituents: [
      "Anna (Matter / Food / The Consumed Matrix)",
      "Prana (Consciousness / Breath / The Consuming Life Force)"
    ],
    dialogueExcerpt: "'Yes,' said Sakalya, 'but how many Gods are there really?' Yajnavalkya replied: 'Two!' 'Which are the two?' 'Food (Anna) and Life-breath (Prana).' For life is the dynamic interaction between matter that is consumed and consciousness that consumes!",
    philosophicalEssence: "The fundamental duality of Physics and Philosophy: Matter (Prakriti) and Spirit (Purusha), the fuel and the flame."
  },
  {
    level: "1.5 (अध्यर्ध)",
    sanskritTerm: "अध्यर्धः (१.५ देवः)",
    constituents: ["Vayu / The Cosmic Breath that blows and swells all things into manifestation"],
    dialogueExcerpt: "'Yes,' said Sakalya, 'but how many Gods are there really?' Yajnavalkya replied: 'One and a half (Adhyardha)!' 'Which is that one and a half?' 'This wind that blows. Why is it called one and a half? Because as it blows, everything swells and prospers (Adhyardhnot)!'",
    philosophicalEssence: "The dynamic transitional state of Becoming: kinetic movement, cosmic expansion, and the breath of life animating static matter."
  },
  {
    level: 1,
    sanskritTerm: "एक एव देवः (१ देवः - ॐ तत्सत् ब्रह्म)",
    constituents: ["Brahman / Supreme Non-Dual Consciousness (सच्चिदानन्द)"],
    dialogueExcerpt: "'Yes,' said Sakalya, 'but how many Gods are there really?' Yajnavalkya replied: 'ONE (Eka eva)!' 'Which is that One?' 'Prana—He is Brahman, and they call Him THAT (Tyat)!'",
    philosophicalEssence: "The ultimate climax of Advaita Vedanta: All multiplicity dissolves into the unconditioned, self-luminous, non-dual Supreme Reality (एकमेवाद्वितीयम् ब्रह्म)."
  }
];
