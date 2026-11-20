export interface VerseCorpusItem {
  id: string;
  category: "Vedas" | "Upanishads" | "Shastras & Astronomy" | "Darshana & Yoga" | "Epics & Gita";
  book: string;
  subBook?: string;
  chapter: string;
  verseNumber: string;
  devanagari: string;
  iast: string;
  wordForWord: { word: string; meaning: string }[];
  translation: string;
  deepInsight: string;
  philosophicalStream: string;
  translations?: Partial<Record<string, string>>;
  deepInsights?: Partial<Record<string, string>>;
  archaeoScienceDossier: {
    astronomicalAlignment?: string;
    archaeologicalSiteRef?: string;
    datingRange?: string;
    scientificConcept?: string;
    sensorCorrelation?: string;
  };
}

export const SCRIPTURE_CORPUS: VerseCorpusItem[] = [
  // =========================================================================
  // 1. RIGVEDA SAMHITA (FOREMOST OF ALL CANONICAL SRUTIS & SCRIPTURES)
  // =========================================================================
  {
    id: "rigveda-agni-sukta-1-1",
    category: "Vedas",
    book: "Rig Veda",
    subBook: "Mandala 1 (Agni Sukta — Rishi Madhucchandas Vaishvamitra)",
    chapter: "1",
    verseNumber: "1.1",
    devanagari: "अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म् ।\nहोता॑रं रत्न॒धात॑मम् ॥",
    iast: "agním īḷe puróhitaṃ yajñásya devám ṛtvíjam |\nhótāraṃ ratnadhā́tamam ||",
    wordForWord: [
      { word: "agnim", meaning: "unto Agni (the divine illuminating fire/consciousness)" },
      { word: "īḷe", meaning: "I laud / invoke / adore" },
      { word: "purohitam", meaning: "the foremost placed / divine high priest" },
      { word: "yajñasya", meaning: "of the sacred cosmic sacrifice/order" },
      { word: "devam", meaning: "the resplendent, self-luminous deity" },
      { word: "ṛtvijam", meaning: "the officiating minister of seasons & cosmic cycles" },
      { word: "hotāram", meaning: "the invoking summoner of truth" },
      { word: "ratna-dhātamam", meaning: "the greatest bestower of supreme treasures and spiritual bliss" }
    ],
    translation: "I invoke and adore Agni, the foremost Priest placed at the helm of cosmic sacrifice, the radiant Deity of natural seasons, the supreme summoner who bestows the highest treasures of wisdom and abundance.",
    deepInsight: "The opening mantra of the entire Rigveda and the foundational phrase of all Indo-European literature. Rishi Madhucchandas Vaishvamitra honors Agni not merely as combustion, but as the cosmic conscious energy (Vaishvanara) that transmutes terrestrial matter into solar radiance and spiritual realization.",
    philosophicalStream: "Rigvedic Shruti & Yajna Metaphysics",
    archaeoScienceDossier: {
      astronomicalAlignment: "Vernal equinox sunrise alignment of Vedic Yajna altars oriented to Krittika (Pleiades).",
      archaeologicalSiteRef: "Kalibangan sacrificial fire altars (Trench KLB-1, Sector 2) & Lothal ritual brick hearths",
      datingRange: "Deep Vedic antiquity (c. 3500–1900 BCE continuous oral canon verified through Padapatha accentuation)",
      scientificConcept: "Thermodynamics of energy transmutation, bio-photonic luminescence & cosmic metabolic fire",
      sensorCorrelation: "Spectrophotometric analysis of sacrificial ash and isotopic carbon ratios in Bronze Age Vedic altars"
    }
  },
  {
    id: "nasadiya-sukta",
    category: "Vedas",
    book: "Rig Veda",
    subBook: "Mandala 10 (Nasadiya Sukta — Hymn of Creation & Cosmogenesis)",
    chapter: "10",
    verseNumber: "129.1",
    devanagari: "नास॑दासी॒न्नो सदा॑सीत्त॒दानीं॒ नासी॒द्रजो॒ नो व्यो॑मा प॒रो यत् ।\nकिमाव॑रीव॒: कुह॒ कस्य॒ शर्म॒न्नम्भ॒: किमा॑सी॒द्गह॑नं गभी॒रम् ॥",
    iast: "nā́sad āsīn nó sád āsīt tadā́nīṃ nāsīd rájo nó víomā paró yát |\nkím ā́varīvaḥ kúha kásya śármann ámbhaḥ kím āsīd gáhanaṃ gabhīrám ||",
    wordForWord: [
      { word: "na asat āsīt", meaning: "neither non-existence was there" },
      { word: "no sat āsīt", meaning: "nor existence was there" },
      { word: "tadānīm", meaning: "at that primordial pre-cosmic epoch" },
      { word: "na āsīt rajaḥ", meaning: "neither was there intermediate cosmic atmosphere" },
      { word: "no vyoma", meaning: "nor celestial vault beyond" },
      { word: "kim āvarīvaḥ", meaning: "what encompassed or covered it?" },
      { word: "kuha", meaning: "where and in whose custody?" },
      { word: "ambhaḥ", meaning: "was primordial deep unmanifest water there?" }
    ],
    translation: "Then was not non-existence nor existence: there was no realm of air, no sky beyond it. What covered it, and where? And what gave shelter? Was water there, unfathomed depth of water?",
    deepInsight: "The Nasadiya Sukta anticipates modern quantum vacuum fluctuation and the pre-Big Bang singularity. It captures the pre-spatiotemporal epoch where binary dualities (being vs. non-being, space vs. vacuum) had not yet nucleated.",
    philosophicalStream: "Nasadiya Vedic Cosmology & Advaita Vedanta",
    archaeoScienceDossier: {
      astronomicalAlignment: "Pre-vernal equinoctial alignment preserved through unbroken oral Chhandas pitch accents.",
      archaeologicalSiteRef: "Saraswati River basin (Kalibangan & Rakhigarhi early Hakra phase settlement layers)",
      datingRange: "Archaeo-linguistic & astronomical retrograde calculations: c. 3500–1900 BCE",
      scientificConcept: "Quantum vacuum potentiality, zero-point energy prior to cosmic inflation",
      sensorCorrelation: "Acoustic Vedic chant resonance matching 108Hz–432Hz harmonic fundamentals"
    }
  },
  {
    id: "purusha-sukta",
    category: "Vedas",
    book: "Rig Veda",
    subBook: "Mandala 10 (Purusha Sukta — Rishi Narayana's Holographic Universe)",
    chapter: "10",
    verseNumber: "90.1",
    devanagari: "स॒हस्र॑शीर्षा॒ पुरु॑षः सहस्रा॒क्षः स॒हस्र॑पात् ।\nस भूमिं॑ वि॒श्वतो॑ वृ॒त्वात्य॑तिष्ठद्दशाङ्गु॒लम् ॥",
    iast: "sahásraśīrṣā púruṣaḥ sahasrākṣáḥ sahásrapāt |\nsá bhū́miṃ viśváto vṛtvā́ty atiṣṭhad daśāṅgulám ||",
    wordForWord: [
      { word: "sahasra-śīrṣā", meaning: "having thousands (infinite) of heads" },
      { word: "puruṣaḥ", meaning: "the omnipresent Cosmic Being" },
      { word: "sahasrākṣaḥ", meaning: "with infinite luminous eyes" },
      { word: "sahasra-pāt", meaning: "with infinite feet" },
      { word: "saḥ", meaning: "He / that Supreme Consciousness" },
      { word: "bhūmim", meaning: "the entire manifested universe" },
      { word: "viśvataḥ vṛtvā", meaning: "pervading and encompassing on all sides" },
      { word: "ati-atiṣṭhat", meaning: "transcended and stood beyond" },
      { word: "daśāṅgulam", meaning: "by ten fingers' measure (infinite transcendence)" }
    ],
    translation: "The Supreme Cosmic Being has a thousand heads, a thousand eyes, and a thousand feet. Pervading the manifest universe on every side, He encompasses the cosmos and yet transcends it by ten fingers' breadth.",
    deepInsight: "The foundational text of Indic pantheism and holographic cosmology. Every creature's eyes and organs of perception are the limbs of the singular Cosmic Purusha. The universe is not external to God; it is the living organic manifestation of the Divine.",
    philosophicalStream: "Vedantic Panentheism & Vaishnava Theology",
    archaeoScienceDossier: {
      astronomicalAlignment: "Universal celestial coordinate projection of the Virāt Purusha across the 27 Nakshatras.",
      archaeologicalSiteRef: "Harappan Pashupati / Mahayogi iconographies and Dholavira cosmic harmonic ratios",
      datingRange: "Rigvedic late Bronze Age compilation (c. 2500–1500 BCE)",
      scientificConcept: "Holographic principle in theoretical physics; omni-directional quantum coherence across spacetime",
      sensorCorrelation: "Fractal dimension calculation of cosmic filamentary web matching Vedic macrocosm-microcosm geometry"
    }
  },
  {
    id: "gayatri-sukta",
    category: "Vedas",
    book: "Rig Veda",
    subBook: "Mandala 3 (Gayatri Mantra — Brahmarshi Vishvamitra)",
    chapter: "3",
    verseNumber: "62.10",
    devanagari: "तत् स॑वि॒तुर्वरे॑ण्यं॒ भर्गो॑ दे॒वस्य॑ धीमहि ।\nधियो॒ यो न॑: प्रचो॒दया॑त् ॥",
    iast: "tát savitúr váreṇyaṃ bhárgo devásya dhīmahi |\ndhíyo yó naḥ pracodáyāt ||",
    wordForWord: [
      { word: "tat", meaning: "that supreme" },
      { word: "savituḥ", meaning: "of Savitr (the divine illuminating Solar consciousness)" },
      { word: "vareṇyam", meaning: "most adorable / worthy of reverence" },
      { word: "bhargaḥ", meaning: "radiant spiritual effulgence / destroyer of darkness" },
      { word: "devasya", meaning: "of the divine resplendent Lord" },
      { word: "dhīmahi", meaning: "we meditate upon" },
      { word: "dhiyaḥ", meaning: "intellects, intuition and faculties of discernment" },
      { word: "yaḥ", meaning: "who" },
      { word: "naḥ", meaning: "our" },
      { word: "pracodayāt", meaning: "may inspire, awaken and guide" }
    ],
    translation: "We meditate upon the supreme, most adorable radiance of the divine Solar Creator (Savitr). May that brilliant light awaken, inspire, and guide our intellect and inner faculties of wisdom.",
    deepInsight: "Composed by Brahmarshi Vishvamitra in the Rigveda, the Gayatri Mantra is revered as the mother of all Vedic mantras. It bridges biological circadian sunlight absorption with pineal gland activation and transcendent spiritual illumination.",
    philosophicalStream: "Surya Upasana & Vedic Savitr Vidya",
    archaeoScienceDossier: {
      astronomicalAlignment: "Solar sunrise heliacal alignment on equinoxes and solstices.",
      archaeologicalSiteRef: "Vedic Sun temple foundations and prehistoric megalithic stone circle solar alignments (e.g. Hanamsagar)",
      datingRange: "c. 3000–1900 BCE (Vishvamitra lineage oral tradition)",
      scientificConcept: "Solar photo-biomodulation, circadian neural alignment, gamma-wave synchrony during Japa",
      sensorCorrelation: "EEG quantitative electroencephalography showing alpha-theta elevation during 108 Gayatri repetitions"
    }
  },
  {
    id: "samjnana-sukta",
    category: "Vedas",
    book: "Rig Veda",
    subBook: "Mandala 10 (Samjnana Sukta — Universal Concord & Unity Hymn)",
    chapter: "10",
    verseNumber: "191.2",
    devanagari: "सं ग॑च्छध्वं॒ सं व॑दध्वं॒ सं वो॒ मनां॑सि जानताम् ।\nदे॒वा भा॒गं यथा॒ पूर्वे॑ संजाना॒ना उ॒पास॑ते ॥",
    iast: "sáṃ gacchadhvaṃ sáṃ vadadhvaṃ sáṃ vo mánāṃsi jānatām |\ndevā́ bhāgáṃ yáthā pū́rve saṃjānānā́ upā́sate ||",
    wordForWord: [
      { word: "saṃ gacchadhvam", meaning: "walk together in harmony and solidarity" },
      { word: "saṃ vadadhvam", meaning: "speak together with one concordant voice" },
      { word: "saṃ vaḥ manāṃsi jānatām", meaning: "may your minds and intellects be in deep mutual accord" },
      { word: "devāḥ", meaning: "the luminous deities / enlightened forebears" },
      { word: "bhāgam", meaning: "their allotted portions of cosmic yajna" },
      { word: "yathā pūrve", meaning: "just as in ancient times" },
      { word: "saṃjānānāḥ", meaning: "with unified concordant awareness" },
      { word: "upāsate", meaning: "reverently accepted and honored" }
    ],
    translation: "Walk together, speak together in harmony, and let your minds be in deep accord and mutual understanding—just as the enlightened sages of old shared their portions in unity.",
    deepInsight: "The climactic concluding sukta of the entire Rigveda canon. It lays down the universal democratic charter of the Vedic Sabha and Samiti, establishing collective consensus, egalitarian mutual respect, and harmonious collaboration as sacred duties.",
    philosophicalStream: "Universal Vedic Concord & Social Harmony",
    archaeoScienceDossier: {
      astronomicalAlignment: "Universal diurnal solar cycle symbolizing collective circadian harmony.",
      archaeologicalSiteRef: "Pillared public assembly halls and civic council forums at Dholavira and Rakhigarhi",
      datingRange: "Conclusive canonical codification of the 10th Mandala of the Rigveda",
      scientificConcept: "Collective social intelligence, cooperative game theory Nash equilibrium, neural entrainment",
      sensorCorrelation: "Acoustic room acoustics testing in ancient assembly halls confirming vocal resonance"
    }
  },
  {
    id: "rigveda-saraswati",
    category: "Vedas",
    book: "Rig Veda",
    subBook: "Mandala 7 (Vashistha Hymns — Saraswati Nadi Sukta)",
    chapter: "7",
    verseNumber: "95.2",
    devanagari: "एका॑चेतत्सर॑स्वती न॒दीनां॒ शुचि॑र्य॒ती गि॒रिभ्य॒ आ स॑मु॒द्रात् ।\nरा॒यश्चेत॑न्ती॒ भुव॑नस्य॒ भूरे॑र्घृ॒तं पयो॑ दुदुहे॒ नाहु॑षाय ॥",
    iast: "ékā́ cetat sárasvatī nadī́nāṃ śúcir yatī́ giríbhya ā́ samudrā́t |\nrāyáś cétantī bhúvanasya bhū́rer ghṛtáṃ páyo duduhe nāhuṣā́ya ||",
    wordForWord: [
      { word: "ekā cetat", meaning: "the foremost one alone" },
      { word: "sarasvatī", meaning: "River Saraswati" },
      { word: "nadīnām", meaning: "among all rivers" },
      { word: "śuciḥ yatī", meaning: "flowing pure and crystalline" },
      { word: "giribhyaḥ", meaning: "from the snow-clad Himalayas" },
      { word: "ā samudrāt", meaning: "all the way down to the ocean" },
      { word: "rāyaḥ", meaning: "boundless wealth and agricultural abundance" },
      { word: "cétantī", meaning: "bestowing conscious nourishment" },
      { word: "bhūrer ghṛtam payaḥ", meaning: "plentiful milk and clarified butter" },
      { word: "duduhe nāhuṣāya", meaning: "yielded unto mankind" }
    ],
    translation: "Pure in her course from the snowy mountains to the ocean, alone of rivers Saraswati hath listened. Giving limitless prosperity to the whole world, she bestowed her bountiful milk and clarified butter upon mankind.",
    deepInsight: "Explicit geological description of the mighty trans-Himalayan Saraswati flowing directly to the Arabian Sea (Rann of Kutch), prior to tectonic events that diverted the Yamuna and Sutlej, causing it to desiccate around 1900 BCE.",
    philosophicalStream: "Vedic Shrutis & Riverine Geology",
    archaeoScienceDossier: {
      astronomicalAlignment: "Winter solstice heliacal rising along the Ghaggar-Hakra paleochannel.",
      archaeologicalSiteRef: "Kalibangan, Banawali, Bhirrana, Kunal, Rakhigarhi (Ghaggar-Hakra Paleochannel)",
      datingRange: "Satellite paleochannel hydro-dating: Active glacial flow prior to 2000 BCE",
      scientificConcept: "Paleo-hydrology, satellite synthetic aperture radar (SAR) drainage mapping",
      sensorCorrelation: "ISRO Cartosat & RISAT-1 subsurface paleochannel telemetry"
    }
  },

  // =========================================================================
  // 2. CLASSICAL SHASTRAS, ASTRONOMY, EPICS & UPANISHADS
  // =========================================================================
  {
    id: "surya-siddhanta-1",
    category: "Shastras & Astronomy",
    book: "Surya Siddhanta",
    subBook: "Madhyamadhikara (Planetary Motions)",
    chapter: "1",
    verseNumber: "29-30",
    devanagari: "सर्वतो भ्रममाणस्य भचक्रस्य ग्रहैः सह ।\nप्राङ्मुखा भ्रमणा भाति गतिः पश्चान्मुखी खलु ॥",
    iast: "sarvato bhramamāṇasya bhacakrasya grahaiḥ saha |\nprāṅmukhā bhramaṇā bhāti gatiḥ paścānmukhī khalu ||",
    wordForWord: [
      { word: "sarvataḥ", meaning: "everywhere / on all sides" },
      { word: "bhramamāṇasya", meaning: "of the revolving" },
      { word: "bhacakrasya", meaning: "celestial sphere / zodiac" },
      { word: "grahaiḥ saha", meaning: "along with the planets" },
      { word: "prāṅmukhā", meaning: "eastward" },
      { word: "bhramaṇā", meaning: "apparent revolution" },
      { word: "paścānmukhī", meaning: "westward" },
      { word: "khalu", meaning: "indeed" }
    ],
    translation: "While the entire celestial sphere along with the planets appears to revolve westward daily due to the cosmic wind, the true sidereal motion of the planets is eastward through the constellations of the zodiac.",
    deepInsight: "The Surya Siddhanta distinguishes between diurnal apparent motion (due to Earth's axial rotation) and true orbital sidereal velocity. It calculates the circumference of Earth as 5,059 Yojanas (approx 40,000 km, within 1% of modern satellite geodetic measurements).",
    philosophicalStream: "Jyotisha Shastra (Mathematical Astronomy)",
    archaeoScienceDossier: {
      astronomicalAlignment: "Ujjain Prime Meridian (0° Avanti, 75.78° E) sidereal time baseline.",
      archaeologicalSiteRef: "Jantar Mantar Observatories & Ujjain Varahamihira Meridian Pillar",
      datingRange: "Core algorithmic epoch ~3102 BCE with Varahamihira recension ~505 CE",
      scientificConcept: "Diurnal apparent motion vs True orbital sidereal velocity vector",
      sensorCorrelation: "Optical astrometry and GPS sidereal time synchronizer"
    }
  },
  {
    id: "gita-2-47",
    category: "Epics & Gita",
    book: "Bhagavad Gita",
    subBook: "Sankhya Yoga",
    chapter: "2",
    verseNumber: "47",
    devanagari: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    iast: "karmaṇy-evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||",
    wordForWord: [
      { word: "karmaṇi", meaning: "in prescribed duty/action" },
      { word: "eva", meaning: "only/certainly" },
      { word: "adhikāraḥ", meaning: "right/prerogative" },
      { word: "te", meaning: "your" },
      { word: "mā", meaning: "never/not" },
      { word: "phaleṣu", meaning: "in the fruits/results" },
      { word: "kadācana", meaning: "at any time" },
      { word: "mā karma-phala-hetuḥ", meaning: "do not be motivated by results" },
      { word: "akarmaṇi", meaning: "in inaction/apathy" }
    ],
    translation: "You have a right only to perform your prescribed action, but never to the fruits of action. Never let the fruits of action be your motive, nor let your attachment be to inaction.",
    deepInsight: "The foundational doctrine of Nishkama Karma (unattached dynamic action). In cognitive psychology and flow state neuroscience, detaching from future reward anticipation minimizes amygdala threat response and maximizes prefrontal cortical focus.",
    philosophicalStream: "Karma Yoga & Vedanta",
    archaeoScienceDossier: {
      astronomicalAlignment: "Mahabharata war astronomical conjunction: New Moon (Amavasya) at Jyeshtha/Mula transition with Saturn retrograde in Rohini.",
      archaeologicalSiteRef: "Kurukshetra (Brahma Sarovar) & Painted Grey Ware (PGW) strata at Hastinapur",
      datingRange: "Astronomical retro-calculation: c. 3138–3067 BCE; PGW stratum: c. 1200–800 BCE",
      scientificConcept: "Cognitive equilibrium, entropy reduction in intentional agency",
      sensorCorrelation: "EEG Alpha/Theta synchrony during meditative action"
    }
  },
  {
    id: "aryabhatiya-rotation",
    category: "Shastras & Astronomy",
    book: "Aryabhatiya",
    subBook: "Golapada (Spherical Astronomy)",
    chapter: "4",
    verseNumber: "9",
    devanagari: "अनुलोमगतिर्नौस्थः पश्यत्यचलं विलोमगं यद्वत् ।\nअचलानि भानि तद्वत् समपश्चिमगानि लङ्कायाम् ॥",
    iast: "anulomagathir nausthaḥ paśyaty acalaṃ vilomagaṃ yadvat |\nacalāni bhāni tadvat sama-paścimagāni laṅkāyām ||",
    wordForWord: [
      { word: "anuloma-gatiḥ", meaning: "moving forward in normal direction" },
      { word: "nausthaḥ", meaning: "a person situated in a boat" },
      { word: "paśyati", meaning: "sees/observes" },
      { word: "acalam", meaning: "stationary objects on the bank" },
      { word: "vilomagam", meaning: "moving backward in opposite direction" },
      { word: "yadvat", meaning: "just as" },
      { word: "acalāni bhāni", meaning: "the stationary stars/constellations" },
      { word: "sama-paścimagāni", meaning: "moving uniformly to the west" }
    ],
    translation: "Just as a traveler moving forward in a boat sees stationary trees and rocks on the riverbank moving backward in the opposite direction, so do the stationary stars appear to an observer on Earth to move uniformly westward.",
    deepInsight: "Aryabhata I (476–550 CE) explicitly declared the Earth's diurnal axial rotation from West to East over 1,000 years prior to Copernicus and Galileo. He computed the duration of one sidereal rotation as 23h 56m 4.1s (modern value: 23h 56m 4.091s).",
    philosophicalStream: "Aryabhata School of Astronomy",
    archaeoScienceDossier: {
      astronomicalAlignment: "Sidereal rotation referenced to Fixed Star Ashwini (Beta Arietis).",
      archaeologicalSiteRef: "Taregna Observatory & Nalanda University Astronomical Complex (Bihar)",
      datingRange: "Composed in 499 CE (Year 3600 of Kali Yuga at age 23)",
      scientificConcept: "Relativity of motion & terrestrial diurnal axial rotation",
      sensorCorrelation: "Foucault pendulum dynamics & GPS sidereal clocking"
    }
  },
  {
    id: "sulba-sutra-pythagoras",
    category: "Shastras & Astronomy",
    book: "Baudhayana Sulba Sutras",
    subBook: "Sacred Altar Geometry",
    chapter: "1",
    verseNumber: "48",
    devanagari: "दीर्घचतुरश्रस्याक्ष्णया रज्जुः पार्श्वमानी तिर्यङ्ग्मानी च ।\nयत् पृथग्भूते कुरुतस्तदुभयं करोति ॥",
    iast: "dīrghacaturaśrasyākṣṇayā rajjuḥ pārśvamānī tiryaṅmānī ca |\nyat pṛthagbhūte kurutas tad ubhayaṃ karoti ||",
    wordForWord: [
      { word: "dīrgha-caturaśrasya", meaning: "of an oblong rectangle" },
      { word: "akṣṇayā rajjuḥ", meaning: "the diagonal rope/cord" },
      { word: "pārśvamānī", meaning: "the flank (length) measure" },
      { word: "tiryaṅmānī", meaning: "the transverse (width) measure" },
      { word: "yat pṛthagbhūte kurutaḥ", meaning: "produce separately" },
      { word: "tad ubhayaṃ karoti", meaning: "the diagonal produces both combined" }
    ],
    translation: "The diagonal cord of a rectangle produces by itself an area equal to the sum of the areas produced separately by its length and its breadth (a² + b² = c²).",
    deepInsight: "Baudhayana formulated the geometric Pythagorean theorem and computed the square root of 2 accurately to 5 decimal places: √2 ≈ 1 + 1/3 + 1/(3×4) - 1/(3×4×34) = 577/408 ≈ 1.4142156... for constructing sacrificial altars (Shyena Chiti).",
    philosophicalStream: "Shulba Shastra (Sacred Mathematics)",
    archaeoScienceDossier: {
      astronomicalAlignment: "Falcon-shaped Shyena Chiti oriented strictly to true cardinal solar solstices.",
      archaeologicalSiteRef: "Purola (Uttarakhand) & Kaushambi Falcon-shaped Vedic Altar excavations",
      datingRange: "c. 800–500 BCE (Textual codification with roots in Harappan brick metrology)",
      scientificConcept: "Euclidean quadratic geometry, irrational numbers & Pythagorean triples",
      sensorCorrelation: "3D Structured Light photogrammetry of fired brick ratios (1:2:4)"
    }
  },
  {
    id: "mandukya-omkara",
    category: "Upanishads",
    book: "Mandukya Upanishad",
    subBook: "Atharva Veda",
    chapter: "1",
    verseNumber: "1",
    devanagari: "ओमित्येतदक्षरमिदं सर्वं तस्योपव्याख्यानं भूतं भवद् भविष्यदिति सर्वमोङ्कार एव ।\nयच्चान्यत् त्रिकालातीतं तदप्योङ्कार एव ॥",
    iast: "om ity etad akṣaram idaṃ sarvaṃ tasyopavyākhyānaṃ bhūtaṃ bhavad bhaviṣyad iti sarvam oṅkāra eva |\nyac cānyat trikālātītaṃ tad apy oṅkāra eva ||",
    wordForWord: [
      { word: "om", meaning: "The sacred syllable OM" },
      { word: "iti etat akṣaram", meaning: "this imperishable syllable" },
      { word: "idam sarvam", meaning: "is all this universe" },
      { word: "tasya upavyākhyānam", meaning: "its clear exposition" },
      { word: "bhūtam bhavat bhaviṣyat", meaning: "past, present, and future" },
      { word: "sarvam oṅkāra eva", meaning: "all is truly Omkara" },
      { word: "trikāla-atītam", meaning: "that which transcends three-fold time" }
    ],
    translation: "OM—this imperishable word is all this! All that is past, the present and the future is indeed the sound OM. And whatever transcends the three periods of time is also verily OM.",
    deepInsight: "The Mandukya maps human consciousness into four states: Waking (Jagrat/A), Dreaming (Swapna/U), Deep Sleep (Sushupti/M), and Pure Consciousness (Turiya/Silence). Modern neuro-acoustics validates that chant resonance alters thalamocortical oscillations.",
    philosophicalStream: "Advaita Vedanta (Gaudapada Karika)",
    archaeoScienceDossier: {
      astronomicalAlignment: "Trikala time matrix corresponding to cosmological solar/lunar yuga cycles.",
      archaeologicalSiteRef: "Omkareshwar & Narmada Valley Hermitages",
      datingRange: "c. 800–500 BCE",
      scientificConcept: "Acoustic resonance, 4-state consciousness neurology",
      sensorCorrelation: "Fourier Transform spectrum analysis showing 432Hz Om resonance"
    }
  },
  {
    id: "patanjali-yoga-definition",
    category: "Darshana & Yoga",
    book: "Patanjali Yoga Sutras",
    subBook: "Samadhi Pada",
    chapter: "1",
    verseNumber: "2",
    devanagari: "योगश्चित्तवृत्तिनिरोधः ॥",
    iast: "yogaś citta-vṛtti-nirodhaḥ ||",
    wordForWord: [
      { word: "yogaḥ", meaning: "Yoga / unitive union" },
      { word: "citta", meaning: "mind-stuff / consciousness" },
      { word: "vṛtti", meaning: "fluctuations / modifications / whirlpools" },
      { word: "nirodhaḥ", meaning: "stillness / cessation / mastery" }
    ],
    translation: "Yoga is the intentional quieting and mastery of the fluctuations and whirlpools of consciousness.",
    deepInsight: "The foundational sutra of classical Indian psychology. By calming the wandering default mode network (DMN), the observer rests in pure self-luminous awareness (Svarupe Avasthanam).",
    philosophicalStream: "Raja Yoga & Samkhya",
    archaeoScienceDossier: {
      astronomicalAlignment: "Equinoctial stillness during Sandhya (twilight transition).",
      archaeologicalSiteRef: "Mohenjo-daro Pashupati Seal (Seal 420 in Mulabandhasana)",
      datingRange: "c. 400 BCE – 200 CE (Patanjali synthesis of ancient proto-Yogic canons)",
      scientificConcept: "Default Mode Network down-regulation & parasympathetic vagal activation",
      sensorCorrelation: "fMRI neuroimaging of DMN inhibition during Dhyana"
    }
  }
];
