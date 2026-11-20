import { AcharyaProfile } from "../types/acharyaTypes";

export const ACHARYA_WORKS_CORPUS: AcharyaProfile[] = [
  // 1. SAGE BHASKARACHARYA (BHASKARA II)
  {
    id: "bhaskaracharya",
    name: "Bhāskarācārya (Bhāskara II)",
    sanskritName: "भास्कराचार्यः (भास्कर द्वितीय)",
    honorific: "Gaṇakacakracūḍāmaṇi (The Crest-Jewel of Mathematician-Astronomers)",
    era: "1114 – 1185 CE",
    region: "Vijjadavida (Modern Patan/Bijapur, Western Ghats)",
    traditionOrSchool: "Ujjain Astronomical Observatory (Successor to Brahmagupta)",
    domains: ["Arithmetic", "Algebra", "Differential Calculus", "Spherical Astronomy", "Planetary Gravitation"],
    biography:
      "Born in 1114 CE to the scholar Maheśvara, Bhāskarācārya headed the premier astronomical observatory at Ujjain. His monumental mathematical treatise, the Siddhānta Śiromaṇi, completed in 1150 CE when he was 36 years old, synthesizes and transcends all prior Indian mathematics. Centuries before Isaac Newton and Gottfried Leibniz, Bhāskara formulated infinitesimal calculus concepts, differential coefficients (tātkālika-gati), and demonstrated that the derivative of sine is cosine. He solved the indeterminate quadratic equation (Pell's equation) using the cyclic Cakraavāla algorithm, which amazed European mathematicians when discovered by modern scholarship.",
    magnusOpus: "Siddhānta Śiromaṇi (सिद्धान्तशिरोमणिः)",
    quote: {
      sanskrit: "आकृष्टशक्तिश्च मही तया यत् खस्थं गुरुस्वाभिमुखं स्वशक्त्या। आकृष्यते तत्पततीव भाति समे समन्तात् क्व पतत्वियं खे॥",
      transliteration: "ākṛṣṭa-śaktiś-ca mahī tayā yat khasthaṁ guru-svābhimukhaṁ sva-śaktyā | ākṛṣyate tat-patatīva bhāti same samantāt kva patatv-iyaṁ khe ||",
      meaning: "The Earth possesses an attractive force (ākarṣaṇa-śaktiḥ) by which it draws down towards itself any heavy object in space. The object appears to fall, but the Earth is balanced equally on all sides in empty space; where can it fall?"
    },
    globalImpact:
      "Bhaskara's Lilavati and Bijaganita were translated into Persian by Faizi (1587 CE) by order of Akbar, and later translated into English by H.T. Colebrooke (1817), introducing Western civilization to Indian algebraic prowess and the cyclic method.",
    treatises: [
      {
        id: "lilavati",
        title: "Līlāvatī (Arithmetic, Geometry & Combinatorics)",
        sanskritTitle: "लीलावती (पाटीगणितम्)",
        totalVersesOrChapters: "277 Verses in 13 Chapters",
        coreThemes: ["Base-10 Arithmetic", "Fractions & Zero", "Rule of Three", "Combinatorics (Aṅka-pāśa)", "Plane & Solid Geometry", "Shadow Problems"],
        summary:
          "Named poetically after his daughter Lilavati, this enchanting work presents rigorous mathematical proofs through poetic riddles framed with peacocks, bees, swans, and blossoming lotuses. It covers operations on zero, inversions (Vilomagati), permutations and combinations, right-angled triangles, and shadow measurements.",
        keyContributions: [
          "Arithmetic of Zero and Infinites: Formulated that any finite quantity divided by zero yields an infinite entity (Khahara), analogous to the infinite divine Brahman which remains unchanged by additions or subtractions.",
          "Combinatorics (Aṅka-pāśa): Derived exact formulas for permutations nPr and combinations nCr centuries before European combinatorics.",
          "The Lotus Riddle: Elegant geometric solution for finding pond depth using the hypotenuse theorem without calculus."
        ],
        sampleVerses: [
          {
            id: "lilavati_lotus",
            sanskrit: "सरसोऽमलवारिपूर्णे नीरपृष्ठादधः स्थितात्। उत्पलेनोद्गतं पश्यन् कश्चित् कौतुकवान् जनः॥",
            transliteration: "saraso'mala-vāri-pūrṇe nīra-pṛṣṭhād-adhaḥ sthitāt | utpalenodgataṁ paśyan kaścit kautukavān janaḥ ||",
            translation: "In a lake filled with pristine water, the tip of a lotus bud was seen standing half a cubit above the surface. Swayed gently by the wind, it became completely submerged at a distance of two cubits from its original vertical position. O mathematician, tell quickly the depth of the water in that lake!",
            scientificSignificance: "Demonstrates the practical application of right-angled triangle geometry (Baudhāyana/Pythagorean relation): (d + 0.5)² = d² + 2², yielding depth d = 3.75 cubits.",
            mathematicalProofOrExplanation: "Let water depth be d. Total lotus stem length = d + h. When blown over by distance x, hypotenuse = d + h, base = x, vertical side = d. Hence d² + x² = (d + h)² => d = (x² - h²) / (2h).",
            sourceTreatise: "Līlāvatī, Chapter on Kṣetravyavahāra",
            chapterOrSutraNumber: "Verse 153",
            practicalExample: "Given height above water h = 0.5 cubit, distance tilted x = 2 cubits: Depth = (4 - 0.25) / (2 × 0.5) = 3.75 cubits."
          },
          {
            id: "lilavati_swarm",
            sanskrit: "अलि कुलदलमर्द्धं पङ्कजं चापि जातं दल-महि महि-भागे पाद-मेकं कदम्बे।",
            transliteration: "ali-kula-dalam-arddhaṁ paṅkajaṁ cāpi jātaṁ dala-mahi mahi-bhāge pāda-mekaṁ kadambe |",
            translation: "The square root of half the number of bees in a swarm flew away to a jasmine bush; eight-ninths of the whole swarm remained behind. One solitary female bee flew humming around a male lotus bee trapped in a blossom at night. Tell me, lovely maiden, the total number of bees in the swarm!",
            scientificSignificance: "Formulates and solves non-linear quadratic equations: x - √(x/2) - (8/9)x - 2 = 0.",
            mathematicalProofOrExplanation: "Let x be the total bees. (1/9)x - √(x/2) = 2. Let y = √(x/2), then x = 2y². The equation becomes 2y²/9 - y - 2 = 0 => 2y² - 9y - 18 = 0 => (2y + 3)(y - 6) = 0 => y = 6. Total bees x = 2 × 6² = 72.",
            sourceTreatise: "Līlāvatī, Chapter on Miśravyavahāra",
            chapterOrSutraNumber: "Verse 54",
            practicalExample: "Total swarm = 72 bees. Half = 36; square root = 6 bees in jasmine. 8/9 of 72 = 64 bees. 2 trapped in lotus. 6 + 64 + 2 = 72 bees."
          }
        ]
      },
      {
        id: "bijaganita",
        title: "Bījagaṇita (Advanced Algebra & Indeterminate Equations)",
        sanskritTitle: "बीजगणितम् (अव्यक्तगणितम्)",
        totalVersesOrChapters: "213 Verses in 12 Chapters",
        coreThemes: ["Positive & Negative Operations (Dhana & Ṛṇa)", "Zero Arithmetic", "Chakravala Algorithm", "Indeterminate Equations of 1st & 2nd Order (Kuṭṭaka & Vargaprakṛti)", "Surds & Radicals"],
        summary:
          "The paramount ancient treatise on algebra. Bhaskara systematized the arithmetic of positive and negative numbers (calling debt negative and asset positive), introduced letter symbols for multiple unknowns, and invented the Cakraavāla (cyclic) method for solving the equation Nx² + 1 = y², solving cases like 61x² + 1 = y² which took Fermat and Lagrange centuries to crack.",
        keyContributions: [
          "Chakravala (Cyclic) Method: An algorithmic masterpiece that systematically derives integer solutions for indeterminate quadratic equations without infinite loops.",
          "Zero Calculus Insight: Recognized that 0 × a = 0, but a / 0 is Khahara (infinite magnitude). In limits, he showed that the differential change in function approaches zero as the independent variable increment tends to zero.",
          "Solutions to Pell's Equation 61x² + 1 = y²: Bhaskara found x = 226,153,980 and y = 1,766,319,049 in a few iterative cyclic steps."
        ],
        sampleVerses: [
          {
            id: "bijaganita_chakravala",
            sanskrit: "ह्रस्वज्येष्ठपदक्षेपान् परिकल्प्य तेभ्योऽन्ये। चक्रवालेन विधिना लभ्यन्तेऽनन्ताः पदाः॥",
            transliteration: "hrasva-jyeṣṭha-pada-kṣepān parikalpya tebhyo'nye | cakravālena vidhinā labhyante'nantāḥ padāḥ ||",
            translation: "Setting down the lesser root, the greater root, and the additive/interpolator (Kṣepa), and applying the cyclic algorithm (Cakraavāla), an endless succession of integer roots can be discovered for any indeterminate square equation.",
            scientificSignificance: "Preceded European discovery by 500 years. Hermann Hankel called the Chakravala method 'the finest thing achieved in number theory prior to Lagrange.'",
            mathematicalProofOrExplanation: "For Nx² + k = y², using auxiliary equation Na² + b = m², combine via Bhāvanā to produce N(am + yb)² + kb = (ym + Nab)², then choose m such that (am + y)/k is an integer and m² - N is minimized.",
            sourceTreatise: "Bījagaṇita, Vargaprakṛti Section",
            chapterOrSutraNumber: "Verses 71-75",
            practicalExample: "Solving 61x² + 1 = y²: Starting with approximation 61(1)² + 3 = 8², the cyclic method yields in 4 cycles the minimal integer solution: x = 226,153,980 and y = 1,766,319,049."
          }
        ]
      },
      {
        id: "goladhyaya",
        title: "Golādhyāya (Spherical Astronomy & Gravitational Physics)",
        sanskritTitle: "गोलाध्यायः (खगोलशास्त्रम्)",
        totalVersesOrChapters: "400+ Verses in 13 Chapters",
        coreThemes: ["Spherical Geometry", "Armillary Sphere (Gola-yantra)", "Celestial Coordinates", "Universal Gravity (Ākarṣaṇa-śakti)", "Instantaneous Motion (Tātkālika-gati)", "Eclipses"],
        summary:
          "The crowning astronomical section of Siddhanta Shiromani. Demonstrates the spherical nature of Earth and celestial bodies, armillary construction, parallax corrections, planetary orbits, and lays the foundations of differential calculus.",
        keyContributions: [
          "Instantaneous Velocity & Differential Calculus: Bhaskara defined 'Tātkālika-gati' (instantaneous speed) as the ratio of infinitesimal celestial displacement to infinitesimal time interval: δθ / δt, establishing that when a planet reaches its apogee, its daily motion derivative is zero (extreme value theorem).",
          "Universal Gravitation: Clearly articulated 500 years before Newton that the Earth has an inherent gravitational pull holding everything on its surface.",
          "Surface Area of a Sphere: Proved geometrically by dividing a sphere into infinitesimally thin spherical rings that the surface area of a sphere equals four times the area of its great circle (A = 4πr²)."
        ],
        sampleVerses: [
          {
            id: "goladhyaya_tatkalika",
            sanskrit: "बिम्बाधैक्यदलात् स्पष्टा गतिः स्यात् तात्कालिकी तु सा। यत्र गतेः फलं शून्यं तत्र परमं पदम्॥",
            transliteration: "bimbādhaikya-dalāt spaṣṭā gatiḥ syāt tātkālikī tu sā | yatra gateḥ phalaṁ śūnyaṁ tatra paramaṁ padam ||",
            translation: "From the infinitesimal differential of the planetary arc arises the instantaneous velocity (tātkālikī gati). Where the differential of the motion becomes zero, there lies the supreme extreme position (apogee/perigee).",
            scientificSignificance: "This is the exact statement of Rolle's Theorem and the vanishing of the first derivative at extrema (f'(x) = 0), formulated in 1150 CE.",
            sourceTreatise: "Golādhyāya, Spashṭādhikāra",
            chapterOrSutraNumber: "Verse 36-39",
            practicalExample: "In computing true planetary longitudes, the equation of center correction reaches its maximum exactly when the mean anomaly derivative vanishes."
          }
        ]
      }
    ]
  },

  // 2. SAGE ARYABHATA
  {
    id: "aryabhata",
    name: "Āryabhaṭa (Āryabhaṭa I)",
    sanskritName: "आर्यभटः (प्रथमः)",
    honorific: "Kusumapura-Kulapa (Master Astronomer of Pāṭaliputra)",
    era: "Born 476 CE (Composed Āryabhaṭīya at age 23 in 499 CE)",
    region: "Kusumapura (Ancient Pāṭaliputra, Modern Patna, Bihar) & Aśmaka",
    traditionOrSchool: "Audāyaka & Ārdharātrika Astronomical Systems",
    domains: ["Trigonometry", "Indeterminate Equations (Kuṭṭaka)", "Heliocentrism & Axial Rotation", "Value of Pi", "Eclipse Science"],
    biography:
      "Āryabhaṭa is the foundational patriarch of classical Indian astronomy and mathematics. Born in 476 CE during the Golden Age of the Guptas, he composed the immortal Āryabhaṭīya at the extraordinary age of twenty-three. Āryabhaṭa revolutionized world science by declaring that the Earth rotates daily on its own axis, explaining that the apparent rotation of stars is an optical illusion, identical to a person riding in a boat who sees the stationary trees on the bank moving backwards. He gave the value of Pi correct to four decimal places (3.1416) explicitly identifying it as 'āsanna' (approximate/incommensurable), created the world's first sine table, and eliminated mythological explanations of eclipses by proving they are caused by the geometric shadow of the Earth and Moon.",
    magnusOpus: "Āryabhaṭīya (आर्यभटीयम्)",
    quote: {
      sanskrit: "अनुलोमगतिर्नौस्थः पश्यत्यचलं विलोमगं यद्वत्। अचलानि भानि तद्वत् समपश्चिमगानि लङ्कायाम्॥",
      transliteration: "anuloma-gatir-nausthaḥ paśyaty-acalaṁ vilomagaṁ yad-vat | acalāni bhāni tad-vat sama-paścima-gāni laṅkāyām ||",
      meaning: "Just as a person in a boat traveling forwards sees the stationary trees and rocks on the riverbank moving in the reverse direction, exactly so do the stationary constellations appear to move uniformly westward to an observer on the rotating Earth."
    },
    globalImpact:
      "Translated into Arabic in the 8th century as Zij al-Arjabhar, inspiring Al-Khwarizmi, Al-Biruni, and the Islamic Golden Age, which subsequently ignited the European scientific renaissance.",
    treatises: [
      {
        id: "aryabhatiya",
        title: "Āryabhaṭīya (Foundational Canon of Mathematics & Astronomy)",
        sanskritTitle: "आर्यभटीयम्",
        totalVersesOrChapters: "121 Verses in 4 Pādas (Gītikā, Gaṇita, Kālakriyā, Gola)",
        coreThemes: ["Alphabetic Numeral System", "Trigonometric Sine Tables (Jyā)", "Value of Pi (3.1416)", "The Pulverizer (Kuṭṭaka)", "Diurnal Axial Rotation of Earth", "Shadow Astronomy of Eclipses"],
        summary:
          "Composed in terse, poetic Āryā meter, this concise masterwork laid the foundations of Indian science. It is divided into four sections: Gītikāpāda (cosmological constants), Gaṇitapāda (pure mathematics), Kālakriyāpāda (reckoning of time and planetary motions), and Golapāda (spherical celestial mechanics).",
        keyContributions: [
          "Computation of Pi (π ≈ 3.1416): Verse 2.10 gives the ratio of circumference to diameter as 62,832 / 20,000 = 3.1416, specifically qualifying it as 'āsanna' (approximate), anticipating the irrationality of Pi.",
          "Table of Sines (Jyā-ardha): Created the earliest recorded sine table for 24 arcs at intervals of 3° 45', using second-order difference recurrence equations.",
          "Kuṭṭaka (The Pulverizer): The definitive algorithm for solving first-order indeterminate Diophantine linear equations (by = ax + c), still taught in modern discrete mathematics.",
          "Planetary Eclipses: Formulated the exact geometry of umbra and penumbra, calculating the diameter of Earth's shadow cone at the Moon's distance."
        ],
        sampleVerses: [
          {
            id: "aryabhatiya_pi",
            sanskrit: "चतुरधिकं शतमष्टगुणं द्वाषष्टिस्तथा सहस्राणाम्। अयुतद्वयविष्कम्भस्यासन्नो वृत्तपरिणाहः॥",
            transliteration: "catur-adhikaṁ śatam-aṣṭa-guṇaṁ dvāṣaṣṭis-tathā sahasrāṇām | ayuta-dvaya-viṣkambhasyāsanno vṛtta-pariṇāhaḥ ||",
            translation: "Add 4 to 100, multiply by 8, and add 62,000. This is the approximate (āsannaḥ) circumference of a circle whose diameter is twenty thousand (20,000).",
            scientificSignificance: "Formula: Circumference = ((100 + 4) × 8 + 62000) = (832 + 62000) = 62,832 for diameter 20,000. Hence π = 62832 / 20000 = 3.1416. The word 'āsannaḥ' (approaching/approximate) shows Aryabhata knew π is irrational!",
            mathematicalProofOrExplanation: "π = 62,832 / 20,000 = 3.1416. True value of π = 3.14159265... Error is under 0.0002%!",
            sourceTreatise: "Āryabhaṭīya, Gaṇitapāda",
            chapterOrSutraNumber: "Verse 10",
            practicalExample: "For a circle of diameter d = 100 meters: Circumference = 100 × 3.1416 = 314.16 meters."
          },
          {
            id: "aryabhatiya_eclipses",
            sanskrit: "चन्द्रो जलमर्कोऽग्निर्मृद्भूश्छायापि या तमस्तद्धि। छादयति शशी सूर्यं शशिनं महती च भूच्छाया॥",
            transliteration: "candro jalam-arko'gnir-mṛd-bhūś-chāyāpi yā tamas-tad-dhi | chādayati śaśī sūryaṁ śaśinaṁ mahatī ca bhū-cchāyā ||",
            translation: "The Moon is of water (reflective), the Sun is of fire (radiant); the Earth is composed of earth and rock, and its dark shadow is cast into space. The Moon obstructs the Sun (producing a solar eclipse), and the immense shadow of the Earth obscures the Moon (producing a lunar eclipse).",
            scientificSignificance: "Dismantled ancient astrological myths of Rahu swallowing the sun and moon, replacing it with pure ray optics and geometric occlusion.",
            sourceTreatise: "Āryabhaṭīya, Golapāda",
            chapterOrSutraNumber: "Verse 37",
            practicalExample: "A lunar eclipse occurs only on a full moon day when Sun, Earth, and Moon align linearly and the Moon enters the umbral shadow cone."
          }
        ]
      }
    ]
  },

  // 3. SAGE PATANJALI
  {
    id: "patanjali",
    name: "Sage Patañjali (Bhagavān Patañjali)",
    sanskritName: "भगवान् पतञ्जलिः (शेष-अवतारः)",
    honorific: "Trimuni-Carama / Śeṣāvatāra (Master of Yoga, Grammar & Medicine)",
    era: "c. 2nd – 4th Century BCE",
    region: "Gonarda (Avanti / Northern India) & Chidambaram tradition",
    traditionOrSchool: "Rāja Yoga Darśana & Pāṇinīya Vyākaraṇa Paramparā",
    domains: ["Consciousness Science", "Rāja Yoga (Aṣṭāṅga)", "Linguistic Philosophy", "Mahābhāṣya", "Ayurvedic Medicine"],
    biography:
      "Revered across Indian civilization as the divine incarnation of Ādi Śeṣa (the thousand-headed serpent of cosmic awareness), Sage Patañjali is venerated for granting humanity the three supreme sciences of purification: Yoga to purify the mind (citta), the Mahābhāṣya to purify speech (vāc), and Āyurveda/Caraka redaction to purify the body (śarīra). His Pātañjala Yoga Sūtras constitute the definitive textbook of psychology, consciousness meditation, and spiritual liberation.",
    magnusOpus: "Pātañjala Yoga Sūtras & Vyākaraṇa Mahābhāṣya",
    quote: {
      sanskrit: "योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन। योऽपाकरोत्तं प्रवरं मुनीनां पतञ्जलिं प्राञ्जलिरानतोऽस्मि॥",
      transliteration: "yogena cittasya padena vācāṁ malaṁ śarīrasya ca vaidyakena | yo'pākarot-taṁ pravaraṁ munīnāṁ patañjaliṁ prāñjalir-ānato'smi ||",
      meaning: "I bow with folded hands to Patañjali, the preeminent among sages, who cleansed the impurities of the mind through Yoga, the impurities of speech through grammar (Mahābhāṣya), and the impurities of the body through medicine (Ayurveda)."
    },
    globalImpact:
      "The Yoga Sutras constitute the universal global text on meditation, mindfulness, and cognitive equilibrium, while the Mahabhashya forms the bedrock of linguistic ontology.",
    treatises: [
      {
        id: "yoga_sutras",
        title: "Pātañjala Yoga Sūtras (The Science of Pure Consciousness)",
        sanskritTitle: "पातञ्जल-योगसूत्राणि",
        totalVersesOrChapters: "196 Sūtras in 4 Pādas",
        coreThemes: ["Citta-vṛtti Nirodha (Stilling Mental Fluctuations)", "Aṣṭāṅga Yoga (8 Limbs)", "Samyama (Dhāraṇā, Dhyāna, Samādhi)", "Kriya Yoga", "Kaivalya (Liberation)"],
        summary:
          "The foundational text of classical Yoga philosophy. Divided into four Pādas: Samādhi Pāda (nature of contemplation and samadhi), Sādhana Pāda (practical eight-limbed path), Vibhūti Pāda (inner powers and superconscious absorption), and Kaivalya Pāda (absolute spiritual transcendence).",
        keyContributions: [
          "Definition of Yoga (1.2): योगश्चित्तवृत्तिनिरोधः (Yoga is the intentional cessation of the modifications of the mind-field).",
          "Aṣṭāṅga Yoga Architecture (2.29): Yama (ethical restraints), Niyama (internal observances), Āsana (stable posture), Prāṇāyāma (breath regulation), Pratyāhāra (sensory withdrawal), Dhāraṇā (focused concentration), Dhyāna (sustained meditation), and Samādhi (unitary consciousness).",
          "Psychological Theory of Kleshas (2.3): Identified the 5 root causes of human suffering: Avidyā (ignorance), Asmitā (egoism), Rāga (attachment), Dveṣa (aversion), and Abhiniveśa (fear of death)."
        ],
        sampleVerses: [
          {
            id: "ys_1_2",
            sanskrit: "योगश्चित्तवृत्तिनिरोधः॥ तदा द्रष्टुः स्वरूपेऽवस्थानम्॥",
            transliteration: "yogaś-citta-vṛtti-nirodhaḥ || tadā draṣṭuḥ svarūpe'vasthānam ||",
            translation: "Yoga is the inhibition (stilling) of the fluctuations of the mind-stuff. Then the Seer abides in its own pristine nature.",
            scientificSignificance: "Defines consciousness as distinct from cognitive mental constructs (vṛttis). When neurological noise subsides, the observer experiences pure unconditioned awareness.",
            sourceTreatise: "Yoga Sūtras, Samādhi Pāda",
            chapterOrSutraNumber: "Sūtras 1.2 & 1.3"
          },
          {
            id: "ys_2_29",
            sanskrit: "यमनियमासनप्राणायामप्रत्याहारधारणाध्यानसमाधयोऽष्टावङ्गानि॥",
            transliteration: "yama-niyamāsana-prāṇāyāma-pratyāhāra-dhāraṇā-dhyāna-samādhayo'ṣṭāv-aṅgāni ||",
            translation: "Restraint (Yama), observance (Niyama), posture (Āsana), breath control (Prāṇāyāma), sense withdrawal (Pratyāhāra), concentration (Dhāraṇā), meditation (Dhyāna), and absorption (Samādhi) are the eight limbs of Yoga.",
            scientificSignificance: "The comprehensive 8-step holistic methodology for physiological stabilization, somatic coherence, and psychological integration.",
            sourceTreatise: "Yoga Sūtras, Sādhana Pāda",
            chapterOrSutraNumber: "Sūtra 2.29"
          }
        ]
      },
      {
        id: "mahabhashya",
        title: "Vyākaraṇa Mahābhāṣya (The Great Commentary on Grammar)",
        sanskritTitle: "व्याकरण-महाभाष्यम्",
        totalVersesOrChapters: "85 Āhnikas (Daily Lessons)",
        coreThemes: ["Paspaśāhnika (Purposes of Grammar)", "Sphota (Linguistic Semiotics)", "Eternal Nature of Words (Śabda-Brahman)", "Dialectical Refinement"],
        summary:
          "The supreme commentary on Panini's Ashtadhyayi and Katyayana's Varttikas. The opening chapter, the Paspaśāhnika, discusses the epistemology of language, why grammar must be studied, and how words connect to reality.",
        keyContributions: [
          "The Five Motives for Studying Grammar (Paspaśā): Rakṣā (preservation of the Vedas), Ūha (deductive adaptation), Āgama (scriptural mandate), Laghu (economy of thought), and Asaṁdeha (elimination of ambiguity).",
          "Concept of Sphoṭa: Established that a word is not merely a sequence of auditory phonemes, but an indivisible flash of meaning revealed in consciousness."
        ],
        sampleVerses: [
          {
            id: "mb_paspasha",
            sanskrit: "रक्षोहागमलघ्वसन्देहाः प्रयोजनम्॥ ब्राह्मणेन निष्कारणो धर्मः षडङ्गो वेदोऽध्येयो ज्ञेयश्चेति॥",
            transliteration: "rakṣohāgama-laghv-asandehāḥ prayojanam || brāhmaṇena niṣkāraṇo dharmaḥ ṣaḍ-aṅgo vedo'dhyeyo jñeyaś-ceti ||",
            translation: "Preservation of sacred wisdom, deductive adaptation, scriptural command, simplicity, and freedom from ambiguity are the purposes of studying grammar. Without motive of personal gain, sacred knowledge with its six limbs must be studied and comprehended.",
            scientificSignificance: "Foundational statement of linguistic rigor and objective philological preservation.",
            sourceTreatise: "Vyākaraṇa Mahābhāṣya, Paspaśāhnika",
            chapterOrSutraNumber: "Āhnika 1"
          }
        ]
      }
    ]
  },

  // 4. SAGE BHAGAVATI & REVERED VEDIC SEERESSES (RISHIKAS & BRAHMAVADINIS)
  {
    id: "bhagavati_rishikas",
    name: "Bhagavatī & Vedic Ṛṣikās (Brahmavādinīs)",
    sanskritName: "भगवती एवं वैदिक-ऋषिकाः (ब्रह्मवादिन्यः)",
    honorific: "Mantra-Draṣṭrī & Jñāna-Svarūpiṇī (Seeresses of the Supreme Reality)",
    era: "Vedic Antiquity to Classical Upanishadic Era (c. 1500 – 600 BCE)",
    region: "Naimiṣāraṇya, Mithilā (King Janaka's Court), Sarasvatī Basin",
    traditionOrSchool: "Vedic Mantra Samhitās & Bṛhadāraṇyaka Upaniṣad",
    domains: ["Cosmology", "Ontology of Space-Time", "Vāc (Divine Logos)", "Non-Dual Self-Inquiry", "Sacred Liturgy"],
    biography:
      "In the Sanatana Vedic tradition, the Divine Feminine is venerated both as the primordial ontological reality (Bhagavatī / Mahāśakti) and as realized historical sage-philosophers: the Brahmavādinīs. Foremost among them was Sage Gārgī Vācaknavī, who famously debated Sage Yājñavalkya in the court of Emperor Janaka, questioning the ultimate fabric that weaves space and cosmic dimensions. Sage Maitreyī rejected all gold and terrestrial wealth for the knowledge of immortality. Seeress Vāk Āmbhṛṇī authored the immortal Devī Sūkta (Rigveda 10.125), declaring herself the sovereign ground of all deities, cosmos, and awareness.",
    magnusOpus: "Devī Sūkta (Ṛgveda 10.125) & Bṛhadāraṇyaka Philosophical Dialogues",
    quote: {
      sanskrit: "अहं राष्ट्री संगमनी वसूनां चिकितुषी प्रथमा यज्ञियानाम्। मया सो अन्नमत्ति यो विपश्यति यः प्राणिति य ईं शृणोत्युक्तम्॥",
      transliteration: "ahaṁ rāṣṭrī saṁgamanī vasūnāṁ cikituṣī prathamā yajñiyānām | mayā so annam-atti yo vipaśyati yaḥ prāṇiti ya īṁ śṛṇoty-uktam ||",
      meaning: "I am the Sovereign Queen, the gatherer of all treasures, the most thoughtful, first among those worthy of worship. Through me alone all eat food, all see, all breathe, and all hear what is spoken, though they know it not."
    },
    globalImpact:
      "Established that supreme metaphysical wisdom and scientific inquiry in ancient India were co-created and championed by women philosopher-seers.",
    treatises: [
      {
        id: "gargi_dialogue",
        title: "Gārgī Vācaknavī's Cosmic Warp & Weft Dialogue",
        sanskritTitle: "गार्गी-याज्ञवल्क्य-संवादः (बृहदारण्यकोपनिषत्)",
        totalVersesOrChapters: "Bṛhadāraṇyaka Upaniṣad, Chapter 3, Brāhmaṇas 6 & 8",
        coreThemes: ["Structure of Space-Time", "Ultimate Substratum of the Universe", "Akṣara (The Imperishable Absolute)", "Dialectical Debate"],
        summary:
          "In the royal assembly of King Janaka, Sage Gārgī challenged the sage of sages, Yājñavalkya, with questions that penetrated the layered architecture of the cosmos: 'If water is woven on air, on what is air woven? On what is space woven?' Yājñavalkya had to reveal the highest mystery of the Imperishable Brahman (Akṣara) upon which unmanifest space itself is woven.",
        keyContributions: [
          "The Dimensional Hierarchy of the Cosmos: Gārgī systematically deduced that each physical layer is woven like warp and weft (otaṁ ca protaṁ ca) on a more subtle dimension, culminating in pure unconditioned consciousness.",
          "Concept of Akṣara: Led to Yājñavalkya's immortal exposition: 'By the command of this Imperishable, O Gārgī, the sun and moon stand in their orbits; heaven and earth remain held apart.'"
        ],
        sampleVerses: [
          {
            id: "gargi_verse",
            sanskrit: "यदुर्ध्वं दिवो यदवाक् पृथिव्या यदन्तरा द्यावापृथिवी इमे। कस्मिंस्तदोतं च प्रोतं चेति॥ एतस्य वा अक्षरस्य प्रशासने गार्गि सूर्याचन्द्रमसौ विधृतौ तिष्ठतः॥",
            transliteration: "yad-ūrdhvaṁ divo yad-avāk pṛthivyā yad-antarā dyāvāpṛthivī ime | kasmins-tad-otaṁ ca protaṁ ceti || etasya vā akṣarasya praśāsane gārgi sūryācandramasau vidhṛtau tiṣṭhataḥ ||",
            translation: "Gargi asked: 'That which is above the heavens, that which is beneath the earth, that which is between heaven and earth: in what is that space itself woven like warp and weft?' Yajnavalkya replied: 'In the Imperishable Brahman, O Gargi, is unmanifest space woven! By Its immutable command, the sun and moon are held in their courses!'",
            scientificSignificance: "Anticipates modern astrophysics where space-time itself is not an empty container, but a fabric woven on fundamental quantum and relativistic geometry.",
            sourceTreatise: "Bṛhadāraṇyaka Upaniṣad",
            chapterOrSutraNumber: "3.8.3 – 3.8.9"
          }
        ]
      },
      {
        id: "devi_sukta",
        title: "Devī Sūkta (Ṛgveda 10.125 by Ṛṣikā Vāk Āmbhṛṇī)",
        sanskritTitle: "देवीसूक्तम् (वागाम्भृणी-ऋषिका)",
        totalVersesOrChapters: "8 Verses in Ṛgveda",
        coreThemes: ["Immanence and Transcendence", "The Cosmic Word (Vāc)", "Universal Power", "Divine Non-Duality"],
        summary:
          "Chanted daily across temples worldwide. Ṛṣikā Vāk Āmbhṛṇī identifies her own consciousness with the ultimate creative energy of the universe, sustaining all gods, mortals, winds, and oceans.",
        keyContributions: [
          "Non-dual declaration of consciousness as the ultimate animator of the cosmos.",
          "Integration of divine power (Śakti) and metaphysical reality (Brahman)."
        ],
        sampleVerses: [
          {
            id: "devi_sukta_v8",
            sanskrit: "अहमेव वात इव प्रवाम्यारभमाणा भुवनानि विश्वा। परो दिवा पर एना पृथिव्यैतावती महिना संबभूव॥",
            transliteration: "aham-eva vāta iva pravāmy-ārabhamāṇā bhuvanāni viśvā | paro divā para enā pṛthivy-aitāvatī mahinā saṁbabhūva ||",
            translation: "Like the cosmic wind I blow forth freely, setting in motion all created universes. Far beyond the highest heavens, far beyond this vast earth, such am I in my transcendent majesty!",
            scientificSignificance: "Cosmological vision of continuous dynamic generation of universes through fundamental energy.",
            sourceTreatise: "Ṛgveda Saṁhitā, Maṇḍala 10",
            chapterOrSutraNumber: "Sūkta 125, Verse 8"
          }
        ]
      }
    ]
  },

  // 5. BRAHMAGUPTA
  {
    id: "brahmagupta",
    name: "Brahmagupta",
    sanskritName: "ब्रह्मगुप्तः",
    honorific: "Gaṇita-cakra-pravartaka (Codifier of Zero & Cyclic Geometry)",
    era: "598 – 668 CE",
    region: "Bhillamāla (Bhinmal, Rajasthan) & Ujjain",
    traditionOrSchool: "Brahmapakṣa Astronomical School",
    domains: ["Rules of Zero", "Negative Arithmetic", "Cyclic Quadrilaterals", "Algebra (Kuṭṭaka)", "Astronomical Ephemerides"],
    biography:
      "Brahmagupta was one of the most brilliant mathematicians and astronomers of world history. In 628 CE, at age 30, he composed the Brāhmasphuṭa Siddhānta, which contains the first systematic, formal mathematical rules for treating Zero as a distinct number with full arithmetic operations, as well as operations with negative numbers (debt) and positive numbers (fortune). He discovered Brahmagupta's formula for the area of a cyclic quadrilateral, Brahmagupta's identity, and the quadratic formula.",
    magnusOpus: "Brāhmasphuṭa Siddhānta (ब्राह्मस्फुटसिद्धान्तः)",
    quote: {
      sanskrit: "ऋणमृणधनयोर्घातो धनमृणयोर्धनवधो धनं भवति। शून्यविहीनमृणमृणं धनं धनं भवति शून्यं च॥",
      transliteration: "ṛṇam-ṛṇa-dhanayor-ghāto dhanam-ṛṇayor-dhana-vadho dhanaṁ bhavati | śūnya-vihīnam-ṛṇam-ṛṇaṁ dhanaṁ dhanaṁ bhavati śūnyaṁ ca ||",
      meaning: "The product of two negatives is positive; the product of a positive and a negative is negative. The product of two positives is positive. A negative subtracted from zero becomes positive; a positive subtracted from zero is negative; zero minus zero is zero."
    },
    globalImpact:
      "The Brahmasphuta Siddhanta was brought to Baghdad by Caliph Al-Mansur in 771 CE and translated by Al-Fazari as Sindhind, directly introducing the Hindu numeral system, decimal notation, and zero to the Arab world and Europe.",
    treatises: [
      {
        id: "brahmasphuta",
        title: "Brāhmasphuṭa Siddhānta (The Revised System of Brahma)",
        sanskritTitle: "ब्राह्मस्फुटसिद्धान्तः",
        totalVersesOrChapters: "1,008 Verses in 25 Chapters",
        coreThemes: ["Arithmetic of Zero", "Negative Numbers", "Cyclic Quadrilaterals", "Brahmagupta's Identity", "Khandakhadyaka"],
        summary:
          "A masterpiece of 25 chapters covering arithmetic, algebra, lunar and solar eclipses, planetary conjunctions, and astronomical instruments.",
        keyContributions: [
          "Rules of Zero: Complete algebraic operational rules for zero: 0 + 0 = 0, a - 0 = a, 0 - a = -a, a × 0 = 0, 0 × 0 = 0.",
          "Brahmagupta's Area Formula for Cyclic Quadrilaterals: Area = √((s-a)(s-b)(s-c)(s-d)) where s is the semi-perimeter.",
          "Brahmagupta's Identity: (a² + nb²)(c² + nd²) = (ac - nbd)² + n(ad + bc)², which is the algebraic basis for composition of binary quadratic forms."
        ],
        sampleVerses: [
          {
            id: "brahmagupta_quadrilateral",
            sanskrit: "स्थूलफलं त्रिचतुर्भुजबाहुप्रतिबाहुयोगदलघातः। भुजयोगार्धचतुष्टयभुजोनघातात् पदं सूक्ष्मम्॥",
            transliteration: "sthūla-phalaṁ tri-catur-bhuja-bāhu-prati-bāhu-yoga-dala-ghātaḥ | bhuja-yogārdha-catuṣṭaya-bhujona-ghātāt padaṁ sūkṣmam ||",
            translation: "The approximate area of a quadrilateral is the product of half the sums of opposite sides. The exact (sūkṣmam) area is the square root of the product of the semi-perimeter diminished by each of the four sides.",
            scientificSignificance: "Famous formula for cyclic quadrilaterals: Area = √((s - a)(s - b)(s - c)(s - d)), an exact generalization of Heron's formula for triangles.",
            sourceTreatise: "Brāhmasphuṭa Siddhānta, Kṣetravyavahāra",
            chapterOrSutraNumber: "Chapter 12, Verse 21",
            practicalExample: "For sides 10, 20, 14, 25 with semi-perimeter s = 34.5: Area = √((24.5)(14.5)(20.5)(9.5)) = √(69213.9) ≈ 263.08."
          }
        ]
      }
    ]
  },

  // 6. VARAHAMIHIRA
  {
    id: "varahamihira",
    name: "Varāhamihira",
    sanskritName: "वराहमिहिरः",
    honorific: "Navaratna-Ratnam (The Jewel of King Vikramāditya's Court)",
    era: "505 – 587 CE",
    region: "Avanti (Ujjain, Madhya Pradesh)",
    traditionOrSchool: "Ujjain Scientific Tradition & Royal Academy",
    domains: ["Encyclopedic Science", "Hydrology & Geohydrology", "Meteorology", "Architecture (Vāstu)", "Trigonometry"],
    biography:
      "One of the legendary Nine Jewels (Navaratnas) of the court of King Vikramaditya in Ujjain. His father and teacher was Adityadasa. Varahamihira was a polymath of immense breadth, synthesizing astronomy in his Pañcasiddhāntikā and authoring the Bṛhat Saṁhitā, an all-encompassing encyclopedia of hydrology, subterranean water detection, meteorology, metallurgy, earthquake prediction, botany, and gemology.",
    magnusOpus: "Pañcasiddhāntikā & Bṛhat Saṁhitā (बृहत्संहिता)",
    quote: {
      sanskrit: "धर्मार्थकाममोक्षाणां निमित्तं शास्त्रमुच्यते। खगोलविदुषां श्रेष्ठो वराहो ज्ञानभास्करः॥",
      transliteration: "dharmārtha-kāma-mokṣāṇāṁ nimittaṁ śāstram-ucyate | khagola-viduṣāṁ śreṣṭho varāho jñāna-bhāskaraḥ ||",
      meaning: "The sacred science is declared to be the vehicle for Dharma, Artha, Kama, and Moksha. Preeminent among celestial astronomers shines Varahamihira, a radiant sun of wisdom."
    },
    globalImpact:
      "His hydrology and ground-water detection methods using plant bio-indicators and termite mounds (Dakārgala) are studied today by modern geologists and environmental scientists for eco-friendly water table mapping.",
    treatises: [
      {
        id: "brihat_samhita",
        title: "Bṛhat Saṁhitā (The Great Scientific Encyclopedia)",
        sanskritTitle: "बृहत्संहिता",
        totalVersesOrChapters: "106 Chapters, ~4,000 Verses",
        coreThemes: ["Dakārgala (Groundwater Exploration)", "Meteorology & Cloud Formation", "Earthquake Prediction", "Vāstu Śāstra", "Botanical Grafting (Vṛkṣāyurveda)"],
        summary:
          "An astonishing encyclopedia covering planetary motions, cloud classification, earthquake precursors (animal behavior and water thermal changes), groundwater detection using termite mounds and tree roots, gemology, and temple architecture.",
        keyContributions: [
          "Dakārgala (Subterranean Hydrology): Documented in 125 verses how to locate underground water aquifers by observing bio-indicators like termite colonies, Jamun, Bilva, and Arjuna trees.",
          "Earthquake Signs: Correlated sudden changes in well water clarity, anomalous ground thermal shifts, and seismic clouds.",
          "Pascal's Triangle in Combinatorics: Enumerated perfume mixtures and architectural permutations using combinatorial patterns."
        ],
        sampleVerses: [
          {
            id: "brihat_dakargala",
            sanskrit: "यदि वेतसोऽम्बुहीने देशे दृश्येत तस्य पूर्वस्याम्। हस्तत्रये सिरा स्यात् षड्भिर्हस्तैः क्षितिमवाप्य॥",
            transliteration: "yadi vetaso'mbuhīne deśe dṛśyeta tasya pūrvasyām | hasta-traye sirā syāt ṣaḍbhir-hastaiḥ kṣitim-avāpya ||",
            translation: "If a Vetasa (cane/willow) tree is sighted in a dry, waterless tract of land, then three cubits to its east, at a depth of six cubits underground, flows a perennial potable water stream (sirā).",
            scientificSignificance: "Phreatophyte botany: Using plants whose deep taproot systems obligatorily contact groundwater to pinpoint sweet water aquifers.",
            sourceTreatise: "Bṛhat Saṁhitā, Dakārgala Chapter",
            chapterOrSutraNumber: "Chapter 54, Verse 7"
          }
        ]
      }
    ]
  },

  // 7. MADHAVA OF SANGAMAGRAMA (KERALA SCHOOL)
  {
    id: "madhava_kerala",
    name: "Mādhava of Saṅgamagrāma",
    sanskritName: "सङ्गमग्राम-माधवः",
    honorific: "Golavid (The Founder of Mathematical Analysis & Infinite Series)",
    era: "c. 1340 – 1425 CE",
    region: "Saṅgamagrāma (Irinjalakuda near Thrissur, Kerala)",
    traditionOrSchool: "Kerala School of Astronomy and Mathematics",
    domains: ["Infinite Power Series Calculus", "Pi Series", "Sine & Cosine Series", "Correction Terms (Antya-saṁskāra)", "Mathematical Analysis"],
    biography:
      "Mādhava of Saṅgamagrāma is now universally recognized as the true founder of mathematical analysis. Living in Kerala three centuries before Isaac Newton, James Gregory, and Gottfried Wilhelm Leibniz, Madhava discovered infinite series expansions for trigonometric functions (sine, cosine, and arctangent) and the value of Pi. He introduced rapidly converging series and error correction terms (Antyasaṁskāra) that produced Pi correct to 11 and 13 decimal places. His discoveries were passed down through generations of the Kerala School (Parameśvara, Dāmodara, Nīlakaṇṭha Somayājī, and Jyeṣṭhadeva).",
    magnusOpus: "Sphuṭacandrāpti & Tantrasaṅgraha-vyākhyā (Preserved in Yuktibhāṣā)",
    quote: {
      sanskrit: "व्यासे वारिधिनिहते रूपहृते व्याससागराभ्यासे। त्रिशरादिभिश्च विहृते विषमसंख्याभिः समं फलं लभ्यते॥",
      transliteration: "vyāse vāridhi-nihate rūpa-hṛte vyāsa-sāgarābhyāse | tri-śarādibhiś-ca vihṛte viṣama-saṁkhyābhiḥ samaṁ phalaṁ labhyate ||",
      meaning: "Multiply the diameter by 4, and divide by 1. Separately, from the diameter multiplied by 4, subtract and add alternately the divisions by odd numbers 3, 5, 7, etc. The result obtained is the exact circumference of the circle (Madhava-Leibniz Series for Pi)."
    },
    globalImpact:
      "Discovered the Taylor-Maclaurin series for sine and cosine and the Gregory series for arctangent 300 years before Europe, as documented in Jyeshthadeva's Yuktibhasha (the world's first calculus textbook).",
    treatises: [
      {
        id: "kerala_series",
        title: "Mādhava's Infinite Series for Pi, Sine & Cosine",
        sanskritTitle: "माधवस्य अनन्तश्रेणी (युक्तिभाषा-प्रदर्शिता)",
        totalVersesOrChapters: "Preserved across Yuktibhāṣā and Tantrasaṅgraha",
        coreThemes: ["Infinite Power Series for Arctan", "Madhava-Leibniz Series for Pi", "Madhava-Newton Sine Series", "Antya-saṁskāra (Limit Correction Terms)"],
        summary:
          "The groundbreaking discovery that continuous geometric arcs and trigonometric curves can be represented by infinite algebraic polynomials with alternating signs.",
        keyContributions: [
          "Madhava Series for Pi: π/4 = 1 - 1/3 + 1/5 - 1/7 + 1/9 - ... (attributed to Leibniz in 1673, but discovered by Madhava in 1380).",
          "Madhava Sine Series: sin θ = θ - θ³/3! + θ⁵/5! - θ⁷/7! + ... (attributed to Newton in 1670).",
          "Madhava Cosine Series: cos θ = 1 - θ²/2! + θ⁴/4! - θ⁶/6! + ...",
          "Convergence Acceleration: Introduced fractional remainders Rn to calculate Pi accurately with fewer terms."
        ],
        sampleVerses: [
          {
            id: "madhava_pi_shloka",
            sanskrit: "व्यासाद् भनन्दिहव्यवाहगुणेन्द्रियत्रिनेत्रेषुत्रिविधेषु द्विशरेन्दुनेत्रे। परिधिः स्यात् सुसूक्ष्मः॥",
            transliteration: "vyāsād bhanandi-havyavāha-guṇendriya-trinetreṣu-trividheṣu dvi-śarendu-netre | paridhiḥ syāt su-sūkṣmaḥ ||",
            translation: "For a diameter of 10¹⁰ units, the extremely precise circumference is 31,415,926,536 units.",
            scientificSignificance: "Gives Pi = 3.14159265359... correct to 11 decimal places, the most accurate calculation in the world for over two centuries.",
            sourceTreatise: "Tantrasaṅgraha & Karaṇapaddhati",
            chapterOrSutraNumber: "Quoted in Yuktibhāṣā Chapter 6",
            practicalExample: "π ≈ 31415926536 / 10000000000 = 3.1415926536."
          }
        ]
      }
    ]
  },

  // 8. SAGE KANADA
  {
    id: "kanada",
    name: "Sage Kaṇāda (Ulūka / Kaśyapa)",
    sanskritName: "महर्षि-कणादः (उलूकः)",
    honorific: "Paramāṇu-Tattva-Draṣṭā (The Father of Atomic Theory)",
    era: "c. 6th – 2nd Century BCE",
    region: "Prabhāsa Pāṭana (Saurashtra, Gujarat)",
    traditionOrSchool: "Vaiśeṣika Darśana (System of Analytical Physics & Metaphysics)",
    domains: ["Atomic Physics (Paramāṇuvāda)", "Mechanics & Inertia", "Thermodynamics & Chemical Change (Pāka)", "Ontology of 6 Padārthas"],
    biography:
      "Sage Kaṇāda founded the Vaiśeṣika school of Sanātana philosophy, the world's earliest systematic physics of indivisible elementary particles (Paramāṇu). Legend recounts that he gathered grains (Kaṇa) scattered on roadsides while absorbed in contemplation, leading to his name Kaṇāda ('the grain-eater' or 'atom-counter'). He proposed that all macroscopic matter is composed of eternal, indestructible, infinitesimal particles which combine in pairs (Dyaṇuka) and triplets (Tryaṇuka) through inherent physical affinities. He enunciated laws of motion and momentum centuries before Newton.",
    magnusOpus: "Vaiśeṣika Sūtras (वैशेषिकसूत्राणि)",
    quote: {
      sanskrit: "नित्यं परिमण्डलं कारणमविद्यमानम्। कार्याभावतः कारणानुपलब्धिः॥",
      transliteration: "nityaṁ parimaṇḍalaṁ kāraṇam-avidyamānam | kāryābhāvataḥ kāraṇānupalabdhiḥ ||",
      meaning: "The atom (Paramāṇu) is eternal, spherical (infinitesimally round), and possesses no internal cause or parts. When the effect ceases, the atomic cause itself remains indestructible."
    },
    globalImpact:
      "A rigorous non-mechanistic atomic philosophy that explained color, smell, taste, fluid viscosity, and thermal transformation through microscopic particle rearrangement.",
    treatises: [
      {
        id: "vaisheshika_sutras",
        title: "Vaiśeṣika Sūtras (The Axiomatic Physics of Substance & Motion)",
        sanskritTitle: "वैशेषिक-सूत्राणि",
        totalVersesOrChapters: "370 Sūtras in 10 Adhyāyas",
        coreThemes: ["The 6 Padārthas (Categories)", "Paramāṇu (The Indivisible Atom)", "Dyaṇuka & Tryaṇuka (Molecules)", "Karma (Motion & Velocity)", "Pīlupāka & Piṭharapāka (Chemical Heat Reactions)"],
        summary:
          "The definitive scientific aphorisms of physical reality, classifying existence into 6 Padārthas (Substance, Quality, Motion, Generality, Particularity, Inherence) and explaining physical causality.",
        keyContributions: [
          "Paramāṇuvāda (Atomic Theory): Atoms are eternal, indestructible, spherical points with zero dimensions. They aggregate through chemical and physical forces into binary dyads (Dyaṇuka) and triad molecules (Tryaṇuka/Trasareṇu).",
          "Laws of Motion (Karma): Sūtra 5.1.10–12 describes that initial motion requires an applied force (Prayatna or Vega), and that momentum (Sanskāra) sustains uniform motion in the absence of opposing force.",
          "Thermodynamics: Distinguished between Pīlupāka (heating that breaks down molecules to atomic level, as in chemistry) and Piṭharapāka (heating that modifies qualities while retaining molecular framework)."
        ],
        sampleVerses: [
          {
            id: "kanada_atom",
            sanskrit: "सदकारणवन्नित्यम्॥ तस्य कार्यं लिङ्गम्॥ कारणभावात् कार्यभावः॥",
            transliteration: "sad-akāraṇavan-nityam || tasya kāryaṁ liṅgam || kāraṇa-bhāvāt kārya-bhāvaḥ ||",
            translation: "That which is existent, without a cause, is eternal (the Paramāṇu). The existence of the macroscopic effect is the proof of the existence of the microscopic atom. From the existence of the cause arises the effect.",
            scientificSignificance: "The law of conservation of mass and the atomic constitution of physical substances.",
            sourceTreatise: "Vaiśeṣika Sūtras",
            chapterOrSutraNumber: "4.1.1 – 4.1.3"
          }
        ]
      }
    ]
  },

  // 9. SAGE BAUDHAYANA
  {
    id: "baudhayana",
    name: "Sage Baudhāyana",
    sanskritName: "महर्षि-बौधायनः",
    honorific: "Śulba-Sūtra-Kāra (The Forefather of Sacred Geometry)",
    era: "c. 800 – 600 BCE",
    region: "Vedic Aryavarta (Ganges-Yamuna-Sarasvati basin)",
    traditionOrSchool: "Kṛṣṇa Yajurveda Taittirīya Tradition",
    domains: ["Vedic Sacrificial Geometry", "Pythagorean Theorem", "Square Root Approximation (√2)", "Circling the Square", "Altar Mensuration"],
    biography:
      "Sage Baudhāyana was the great Vedic seer-mathematician who composed the Baudhāyana Śulba Sūtra, the oldest surviving mathematical treatise on geometry and algebra. Centuries before Pythagoras of Samos, Baudhāyana stated the geometric principle that the diagonal of a rectangle produces by itself an area equal to the sum of the areas produced by both adjacent sides. He computed the square root of 2 accurate to five decimal places to construct astronomical brick altars (Yajña Kuṇḍas) such as the falcon-shaped Śyenaciti.",
    magnusOpus: "Baudhāyana Śulba Sūtra (बौधायन-शुल्बसूत्रम्)",
    quote: {
      sanskrit: "दीर्घचतुरश्रस्याक्ष्णया रज्जुः पार्श्वमानी तिर्यङ्मानी च। यत् पृथग् भूते कुरुतस्तदुभयं करोति॥",
      transliteration: "dīrgha-caturaśrasyākṣṇayā rajjuḥ pārśvamānī tiryaṅmānī ca | yat pṛthag bhūte kurutas-tad-ubhayaṁ karoti ||",
      meaning: "The diagonal cord of a rectangle produces by itself an area which both the length and breadth sides produce separately (The Baudhāyana-Pythagorean Theorem: c² = a² + b²)."
    },
    globalImpact:
      "Proves that geometric rigor, square-root infinite series, and rectangular area conservation originated in the Vedic ritual altar science of India centuries prior to Greece.",
    treatises: [
      {
        id: "baudhayana_sulba",
        title: "Baudhāyana Śulba Sūtra (The Geometry of the Sacrificial Cord)",
        sanskritTitle: "बौधायन-शुल्बसूत्रम्",
        totalVersesOrChapters: "3 Chapters, 523 Sūtras",
        coreThemes: ["The Baudhāyana Theorem (Hypotenuse Relation)", "Approximation of √2", "Squaring the Circle", "Geometric Construction of Vedic Fire Altars"],
        summary:
          "Prescribes exact cord measurements (Śulba means measuring cord) to construct multi-tiered Vedic altars having identical surface areas but distinct geometric forms (circles, squares, trapezoids, falcons).",
        keyContributions: [
          "Baudhāyana Theorem (Sūtra 1.48): Explicit mathematical formulation of a² + b² = c².",
          "Value of √2 (Sūtra 1.61): √2 ≈ 1 + 1/3 + 1/(3×4) - 1/(3×4×34) = 577/408 = 1.414215686..., accurate to within 0.000002!",
          "Geometric Altar Transformation: Converting a square altar into a circular altar of identical surface area without changing area."
        ],
        sampleVerses: [
          {
            id: "baudhayana_sqrt2",
            sanskrit: "प्रमाणं तृतीयेन वर्धयेत् तच्च चतुर्थेनात्मचतुस्त्रिंशोनेन। सविशेषः॥",
            transliteration: "pramāṇaṁ tṛtīyena vardhayet tac-ca caturthenātma-catustriṁśonena | saviśeṣaḥ ||",
            translation: "Increase the unit measure by its third; and this third again by its own fourth diminished by the thirty-fourth part of that fourth. This is the approximate diagonal of a square (the value of √2).",
            scientificSignificance: "Formula: √2 ≈ 1 + 1/3 + 1/(3×4) - 1/(3 × 4 × 34) = 1 + 0.333333 + 0.083333 - 0.00245098 = 1.414215686... True √2 = 1.41421356... Accurate to five decimal places in 800 BCE!",
            sourceTreatise: "Baudhāyana Śulba Sūtra",
            chapterOrSutraNumber: "Sūtra 1.61-62",
            practicalExample: "Constructing a diagonal cord for a 1-meter square: Length = 1.414216 meters."
          }
        ]
      }
    ]
  },

  // 10. SAGE PINGALA
  {
    id: "pingala",
    name: "Sage Piṅgala (Piṅgalācārya)",
    sanskritName: "आचार्य-पिङ्गलः",
    honorific: "Chandaḥ-Śāstra-Pravartaka (The Inventor of Binary Numbers)",
    era: "c. 3rd – 2nd Century BCE",
    region: "Ancient Northern India / Takṣaśilā tradition",
    traditionOrSchool: "Chandaḥ Vedāṅga (Vedic Prosody & Combinatorics)",
    domains: ["Binary Number System", "Pascal's Triangle (Meru Prastāra)", "Fibonacci Sequence (Mātrāvṛtta)", "Combinatorial Permutations", "Information Theory"],
    biography:
      "Sage Piṅgala was the visionary author of the Chandaḥśāstra, the Vedāṅga treatise on poetic meter. In analyzing all possible rhythmic combinations of light syllables (Laghu, 0) and heavy syllables (Guru, 1), Piṅgala invented the binary numeral system, the null symbol, and the algorithmic table of binomial coefficients known as Meru Prastāra (The Staircase of Mount Meru, identical to Pascal's Triangle by 1,800 years). He also discovered the Fibonacci sequence through the classification of meters based on morae (Mātrā).",
    magnusOpus: "Chandaḥśāstra (छन्दःशास्त्रम्)",
    quote: {
      sanskrit: "परे पूर्णं द्वौ द्वौ परं परं प्रस्तार्य। मेरुप्रस्तारो भवति सर्वच्छन्दसाम्॥",
      transliteration: "pare pūrṇaṁ dvau dvau paraṁ paraṁ prastārya | meru-prastāro bhavati sarva-cchandasām ||",
      meaning: "On the top place one. On the second row place two ones. On each subsequent row, add adjacent pairs from the previous row to obtain the Meru Prastāra (Pascal's Triangle) for all metric combinations."
    },
    globalImpact:
      "The foundational ancestor of binary computing, computer science data structures, and algorithmic combinatorics.",
    treatises: [
      {
        id: "chandashastra",
        title: "Chandaḥśāstra (Binary Prosody & The Meru Pyramid)",
        sanskritTitle: "छन्दःशास्त्रम्",
        totalVersesOrChapters: "8 Adhyāyas",
        coreThemes: ["Laghu & Guru as Binary 0 & 1", "Prastāra (Exhaustive Permutations)", "Meru Prastāra (Binomial Triangle)", "Saṅkhyāna (Combinatorics)", "Binary Exponentiation"],
        summary:
          "The world's earliest treatise on combinatorial mathematics. It demonstrates how to encode rhythmic meters as binary strings, calculate the total possible meters (2ⁿ), map any index to its binary pattern (Naṣṭam), and retrieve the index from a pattern (Uddiṣṭam).",
        keyContributions: [
          "Binary Numeral System: Used Laghu (short syllable = 0) and Guru (long syllable = 1) to represent all 2ⁿ permutations of poetic lines.",
          "Meru Prastāra: Halāyudha's 10th-century commentary preserved Piṅgala's pyramid: Row n yields the binomial coefficients of (a + b)ⁿ.",
          "Fast Binary Exponentiation: Formulated rules (Dvirdvau rūpe śūnye) equivalent to the modern O(log n) algorithm for computing powers."
        ],
        sampleVerses: [
          {
            id: "pingala_meru",
            sanskrit: "परे पूर्णम्। द्वयोर्द्वयोः परिपूर्य प्रस्तारः॥",
            transliteration: "pare pūrṇam | dvayor-dvayoḥ paripūrya prastāraḥ ||",
            translation: "At the apex place one (1). For subsequent steps, fill each cell by adding the two cells directly above it. This is the Meru Prastāra.",
            scientificSignificance: "Generates the binomial coefficients: Row 0: 1; Row 1: 1 1; Row 2: 1 2 1; Row 3: 1 3 3 1; Row 4: 1 4 6 4 1; Row 5: 1 5 10 10 5 1.",
            sourceTreatise: "Chandaḥśāstra, Adhyāya 8",
            chapterOrSutraNumber: "Sūtra 8.35",
            practicalExample: "For a 4-syllable line: 1 meter with 0 heavy, 4 with 1 heavy, 6 with 2 heavy, 4 with 3 heavy, 1 with 4 heavy. Total = 1 + 4 + 6 + 4 + 1 = 16 = 2⁴."
          }
        ]
      }
    ]
  }
];
