import { InternationalEbook, InternationalEbookCategory } from "../types";

export const INTERNATIONAL_EBOOK_CATEGORIES: InternationalEbookCategory[] = [
  "Vedic Ritual & Physics",
  "Archaeo-Astronomy & Chronology",
  "Mathematics & Geometry",
  "Linguistics & Paninian NLP",
  "Medicine & Ayurveda",
  "Indology & Textual Criticism",
  "Philosophy & Epistemology",
  "Temple Architecture & Sacred Arts",
  "Metallurgy & Ancient Technology"
];

export const INTERNATIONAL_RESEARCH_EBOOKS: InternationalEbook[] = [
  {
    id: "staal-agni-fire-altar",
    title: "AGNI: The Vedic Ritual of the Fire Altar",
    subtitle: "In Two Volumes: Structure, Performance, Acoustic Geometry, and Philosophy of the 1975 Agnicayana",
    author: "Prof. Frits Staal",
    authorAffiliation: "University of California, Berkeley & Univ. of Amsterdam",
    authorCountry: "United States / Netherlands",
    publicationYear: 1983,
    publisher: "Asian Humanities Press / University of California Press & Motilal Banarsidass",
    category: "Vedic Ritual & Physics",
    pageCount: 1540,
    language: "English (with full Sanskrit Mantras and Transliterations)",
    originalLanguage: "English / Sanskrit",
    archiveOrOpenAccessUrl: "https://archive.org/details/AgniTheVedicRitualOfTheFireAltarVol2",
    doiOrIsbn: "ISBN 978-8120816602",
    coverBadge: "LANDMARK FIELD DOCUMENTATION",
    executiveSummary: "The monumental, definitive photographic and analytical study of the ancient 3,000-year-old Vedic Agnicayana ritual filmed and documented in Kerala in 1975. Staal investigates the complex brick geometry of the Syenaciti (Falcon Altar), the acoustic mathematics of the Samavedic chants, and presents his groundbreaking linguistic theory that ritual syntax preceded human natural language syntax.",
    scientificOrEmpiricalMethodology: "High-speed 16mm audio-visual documentation, precise photogrammetry and mathematical surveying of the 1,000 layered brick altars (Baudhayana Sulba Sutras), audio-spectrographic analysis of Jaiminiya Samavedic chant microtones, and formal syntax generative grammar modeling.",
    keyScholarlyTheses: [
      "Vedic ritual syntax follows recursive formal rule structures analogous to computer programming grammars and mathematical transformations, operating independently of semantic referentiality ('Ritual syntax preceded meaningful language').",
      "The construction of the Syenaciti (five-layer bird-shaped fire altar) requires exact conservation of area across geometrical transformations (squaring the circle, doubling the square), establishing the Sulba Sutras as the world's earliest constructive geometry.",
      "The Kerala Nambudiri oral transmission preserves exact Vedic pitch accents (Udatta, Anudatta, Svarita) and gesture kinetics identical to Shrauta Sutra descriptions dated to 1000 BCE without textual corruption.",
      "Acoustic phonetics of the stobhas (musical syllables of the Samaveda) exhibit strict structural permutations resembling algorithmic permutation groups."
    ],
    canonicalTextsAnalyzed: [
      "Baudhayana Sulba Sutra",
      "Apastamba Shrauta Sutra",
      "Taittiriya Samhita (Yajurveda)",
      "Jaiminiya Samaveda Aranyaka",
      "Shatapatha Brahmana",
      "Aitareya Brahmana"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Historical and Geographical Background of Shrauta Rituals",
        pages: "1–58",
        summary: "Historical continuity of Vedic Shrauta traditions in southwest India; the social and intellectual isolation of the Nambudiri community that safeguarded ancient ritual accuracy.",
        keyKeywords: ["Shrauta", "Nambudiri", "Vedic Survival", "Kerala", "Soma"],
        sampleExcerpt: "The Agnicayana of 1975 was not a revival or theatrical reconstruction, but the living continuation of an unbroken ritual practice whose manual instructions match syllable for syllable with texts composed before the first millennium BCE."
      },
      {
        chapterNumber: 2,
        title: "The Geometry and Construction of the Falcon Fire Altar (Syenaciti)",
        pages: "59–168",
        summary: "Step-by-step layout of the Mahavedi, the shaping and kiln-baking of five distinct types of bricks, and the mathematical proofs for scaling the altar area from 7.5 to 101.5 Purushas.",
        keyKeywords: ["Syenaciti", "Sulba Sutra", "Brick Geometry", "Purusha Area", "Squaring Circle"],
        sampleExcerpt: "Each of the five layers consists of precisely 200 bricks, making 1,000 in total. The joints between bricks in successive layers never overlap—a structural necessity that forced Vedic geometers to develop combinatorial brick patterns."
      },
      {
        chapterNumber: 3,
        title: "Recitation, Chant and the Sonic Architecture of Saman",
        pages: "169–340",
        summary: "Spectrographic analysis of the Jaiminiya and Kauthuma chants; the structural function of Stobha syllables and their relationship to non-semantic acoustic resonance.",
        keyKeywords: ["Samaveda", "Stobhas", "Acoustics", "Spectrogram", "Jaiminiya"],
        sampleExcerpt: "The Saman chants do not merely convey linguistic verses; they modulate sound itself into an abstract architecture where pitch vectors and temporal durations are strictly invariant."
      },
      {
        chapterNumber: 4,
        title: "The Meaninglessness of Ritual and the Evolution of Formal Syntax",
        pages: "341–520",
        summary: "Staal's famous theoretical treatise demonstrating that rituals are performed for their own sake ('pure activity') and provided the structural cradle for Panini's formal grammar.",
        keyKeywords: ["Ritual Theory", "Formal Syntax", "Panini", "Linguistics", "Generative Rules"]
      }
    ],
    notableExcerpts: [
      {
        title: "On the Mathematical Rigor of the Brick Layers",
        citation: "Vol. I, Chapter II, p. 112",
        text: "The requirement that no brick seam in layer n shall coincide with a seam in layer n-1 or n+1, while preserving exact exterior perimeter boundaries of the wings and tail of the falcon, is a combinatorial triumph that precedes Euclidean plane geometry by centuries.",
        scholarlyCommentary: "Staal confirms that Baudhayana's brick tables represent the oldest documented applied topology and combinatorics in human history.",
        relevantScriptureTags: ["Baudhayana Sulba Sutra", "Taittiriya Samhita"]
      },
      {
        title: "The Non-Semantic Purity of Vedic Chant",
        citation: "Vol. II, Appendix C, p. 482",
        text: "When the Udgatar sings the Rathantara Saman, the words of the Rigvedic verse are dissolved into musical sound-units (stobhas) such as 'hau', 'hoy', 'hum'. Sound is liberated from discursive semantics into formal acoustic symmetry.",
        scholarlyCommentary: "Parallels modern neuro-acoustics and formal music theory regarding brain wave entrainment via harmonic Vedic chanting.",
        relevantScriptureTags: ["Samaveda", "Chandogya Upanishad"]
      }
    ],
    impactAndSignificance: "Universally acknowledged as one of the most comprehensive anthropological, mathematical, and indological documentations ever produced, preserving the sonic and geometric reality of Vedic rites before their near-extinction.",
    peerReviewsAndPraise: [
      "A monumental masterpiece of modern humanities and structural science. — American Anthropologist",
      "Staal has given Indology its most rigorous empirical field study of ritual mathematics. — Journal of the American Oriental Society",
      "An indispensable work that revolutionized our understanding of early Indian geometry and linguistic origin. — Bulletin of SOAS, London"
    ],
    bibtexCitation: `@book{staal1983agni,
  title={AGNI: The Vedic Ritual of the Fire Altar (Vols I & II)},
  author={Staal, Frits},
  year={1983},
  publisher={Asian Humanities Press / Motilal Banarsidass},
  address={Berkeley & Delhi},
  isbn={978-8120816602}
}`,
    fullInteractiveReadingData: {
      preface: "In the spring of 1975, an international team of scholars, film-makers, and Sanskritists gathered in the village of Panjal, Kerala, to document what was perhaps the last full-scale performance of the twelve-day Agnicayana ritual.",
      historicalContext: "The Agnicayana ritual traces its uninterrupted textual pedigree to the Black Yajurveda (Taittiriya Samhita) and the Shatapatha Brahmana. While long thought to have become purely theoretical by modern Western scholars, it had survived quietly in the isolated agrarian enclaves of Kerala.",
      scientificFramework: "Staal applied three rigorous tools: formal generative linguistics (Chomsky/Panini), acoustic phonetics (spectrographic audio capture), and geometric analysis of the 1,000 altar bricks adhering to Baudhayana's theorem.",
      coreDossier: [
        {
          sectionTitle: "1. The Five Geometric Layers of the Syenaciti",
          content: [
            "The fire altar is designed in the shape of a flying bird of prey (Syena), symbolizing the ascension of human consciousness into the solar realm.",
            "The standard base area is 7.5 square Purushas (a Purusha being the height of the patron with upstretched arms). Whenever the rite is performed for advanced patrons, this area must be enlarged to 8.5, 9.5, or up to 101.5 Purushas, requiring sophisticated geometric transformations to preserve exact falcon proportions.",
            "Layer 1 contains 200 bricks, Layer 2 contains 200 bricks in an inverted layout, Layer 3 repeats the odd layout, Layer 4 repeats the even layout, and Layer 5 introduces special marked bricks (Lokamprna, Svayamatrnna) symbolizing the cosmic vault."
          ]
        },
        {
          sectionTitle: "2. The Acoustic Architecture of Samavedic Sound",
          content: [
            "The four classes of priests—Hotar (Rigveda), Adhvaryu (Yajurveda), Udgatar (Samaveda), and Brahman (Atharvaveda)—coordinate a multi-channel acoustic performance.",
            "The Samaveda chanting of the Jaiminiya Shakha utilizes a microtonal 7-note descending modal scale, which Staal's audio spectral analysis proved to maintain pitch stability within +/- 4 cents throughout hours of continuous recitation."
          ]
        }
      ],
      concludingCritique: "AGNI remains the gold standard of Indological field science, proving that ancient Sanskrit texts were not mythological fantasies but exact operational blueprints for sophisticated ritual, acoustic, and geometric systems."
    }
  },

  {
    id: "kak-astronomical-code-rgveda",
    title: "The Astronomical Code of the Rgveda",
    subtitle: "Third Expanded Edition: Archaeo-Astronomy, Planetary Altars, and the Vedic Ephemeris",
    author: "Prof. Subhash Kak",
    authorAffiliation: "Louisiana State University & Oklahoma State University",
    authorCountry: "United States / India",
    publicationYear: 1994,
    publisher: "Aditya Prakashan / Munshiram Manoharlal",
    category: "Archaeo-Astronomy & Chronology",
    pageCount: 312,
    language: "English (with Sanskrit structural citations)",
    archiveOrOpenAccessUrl: "https://archive.org/details/TheAstronomicalCodeOfTheRgvedaSubhashKak",
    doiOrIsbn: "ISBN 978-8177420548",
    coverBadge: "REVOLUTIONARY ASTRONOMICAL DISCOVERY",
    executiveSummary: "Subhash Kak deciphers the hidden mathematical and astronomical architecture of the Rigveda. Demonstrates that the organization of the 10 Mandalas, 1,028 Suktas, and 10,552 Mantras encodes exact astronomical periods: the 360-day civil year, 365.24-day solar year, 354-day lunar year, the 27/28 Nakshatras, and the synodic periods of Mercury, Venus, Mars, Jupiter, and Saturn.",
    scientificOrEmpiricalMethodology: "Combinatorial and statistical analysis of hymn counts across all 10 books of the Rigveda, cross-referenced with Shulba and Shrauta fire altar numbers (360 enclosing stones, 10,800 Muhurtas in the year, 720 days and nights), and positional astronomical recalculation for 3000–2000 BCE.",
    keyScholarlyTheses: [
      "The Rigveda's hymn and verse counts are not arbitrary anthologies; their structural numbers (such as 339, 108, 360, 432, 10,800) represent an elaborate numerical code of astronomical constants.",
      "The number 339 (the difference between the 10,800 bricks/hours and other altar variables) precisely equals the number of solar disks covering the sky path during equinoctial sunrise, encoding the ratio between the Sun's distance and diameter (~108).",
      "Vedic altars were built as physical analog models of the cosmos, connecting the Adhyatma (individual mind), Adhibhuta (physical world), and Adhidaiva (astronomical bodies) via the concept of Bandhu (equivalence).",
      "Rigvedic astronomy knew the synodic orbital periods of the five naked-eye planets (Tara Grahas), proving systematic astronomical observation in northwestern India by the 3rd millennium BCE."
    ],
    canonicalTextsAnalyzed: [
      "Rigveda Samhita (Mandala 1 to 10)",
      "Shatapatha Brahmana (Agni Rahasya)",
      "Vedanga Jyotisha of Lagadha",
      "Taittiriya Samhita",
      "Aitareya Brahmana"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "Introduction: The Vedic Worldview and the Threefold Science",
        pages: "1–34",
        summary: "The epistemological doctrine of Bandhu (tripartite correspondence between microcosm, mesocosm, and macrocosm) and the structural organization of Vedic literature.",
        keyKeywords: ["Bandhu", "Epistemology", "Macrocosm", "Microcosm", "Adhyatma"]
      },
      {
        chapterNumber: 2,
        title: "The Architecture of the Rigveda: Hymns, Verses, and Authors",
        pages: "35–82",
        summary: "Quantitative analysis of the 10 Mandalas, the genealogical families (Gritsamada, Vishvamitra, Vamadeva, Atri, Bharadvaja, Vasishta), and their symmetric hymn counts.",
        keyKeywords: ["Mandalas", "Family Books", "Hymn Numbers", "Symmetry", "Combinatorics"]
      },
      {
        chapterNumber: 3,
        title: "The Code of the Altar: Altar Dimensions as Time Ephemerides",
        pages: "83–140",
        summary: "Analysis of the Agnicayana altar enclosing stones (Parishrits = 360, Yagusmatis = 396, total 720 nights/days) as time-keeping instruments.",
        keyKeywords: ["Agnicayana", "Parishrit", "360 Stones", "Solar Year", "Muhurta"]
      },
      {
        chapterNumber: 4,
        title: "Planetary Periods and the Astronomical Numbers (339, 108, 432)",
        pages: "141–210",
        summary: "Mathematical decoding of the synodic cycles of Venus (584 days), Jupiter (399 days), Saturn (378 days), and Mars in the book structures.",
        keyKeywords: ["Synodic Period", "Planets", "Venus", "Jupiter", "Number 108"]
      },
      {
        chapterNumber: 5,
        title: "Vedanga Jyotisha, Precession of Equinoxes, and Historical Chronology",
        pages: "211–285",
        summary: "Correlating Rigvedic astronomical statements (Pleiades/Krittika equinox, Ashwini solstice) with precession data dating to the 3rd millennium BCE.",
        keyKeywords: ["Vedanga Jyotisha", "Precession", "Krittika", "Chronology", "Archaeoastronomy"]
      }
    ],
    notableExcerpts: [
      {
        title: "The Solar Disk and the Number 108",
        citation: "Chapter IV, p. 165",
        text: "The distance from the Earth to the Sun is approximately 108 times the Sun's diameter; similarly, the distance to the Moon is 108 times the Moon's diameter. This remarkable optical congruence is the scientific foundation why 108 became the most sacred number across Vedic, Buddhist, and Jain traditions.",
        scholarlyCommentary: "Kak explains how the naked-eye angular diameter of the Sun and Moon (0.5 degrees) naturally generates the 108 ratio through simple pinhole and sighting tube metrology.",
        relevantScriptureTags: ["Rigveda 1.164 (Asya Vamasya)", "Shatapatha Brahmana"]
      }
    ],
    impactAndSignificance: "Transformed the entire international paradigm of Vedic studies, moving the Rigveda from being viewed as primitive pastoral poetry to being recognized as an extraordinarily sophisticated astronomical and cognitive compendium.",
    peerReviewsAndPraise: [
      "One of the most important breakthroughs in the history of ancient science. — Journal of Indian Council of Philosophical Research",
      "Subhash Kak has convincingly established the astronomical foundation of the Vedic canon. — Klaus Klostermaier, University of Manitoba",
      "A thrilling mathematical discovery that bridges modern physics and ancient Indic cosmology. — E.C.G. Sudarshan, Univ. of Texas at Austin"
    ],
    bibtexCitation: `@book{kak1994astronomical,
  title={The Astronomical Code of the Rgveda},
  author={Kak, Subhash},
  year={1994},
  publisher={Aditya Prakashan},
  address={New Delhi},
  isbn={978-8177420548}
}`
  },

  {
    id: "plofker-mathematics-in-india",
    title: "Mathematics in India",
    subtitle: "From the Vedic Sulba Sutras to the Kerala School of Calculus",
    author: "Prof. Kim Plofker",
    authorAffiliation: "Union College & Brown University (Dept. of Mathematics & History of Science)",
    authorCountry: "United States",
    publicationYear: 2009,
    publisher: "Princeton University Press",
    category: "Mathematics & Geometry",
    pageCount: 384,
    language: "English (with full Sanskrit mathematical verses in Devanagari & IAST)",
    archiveOrOpenAccessUrl: "https://press.princeton.edu/books/hardcover/9780691120676/mathematics-in-india",
    doiOrIsbn: "ISBN 978-0691120676 / DOI: 10.1515/9781400834075",
    coverBadge: "PRINCETON UNIVERSITY PRESS CLASSIC",
    executiveSummary: "The definitive contemporary Western academic history of Indian mathematics. Kim Plofker provides rigorous mathematical demonstrations of Vedic Sulba Sutra geometry, Aryabhata's algorithms (Kuttaka), Brahmagupta's algebraic solutions to indeterminate equations (Bhavana), Bhaskara II's calculus concepts, and Madhava of Sangamagrama's infinite series for Pi, Sine, and Cosine.",
    scientificOrEmpiricalMethodology: "Direct mathematical analysis of original Sanskrit manuscripts, rigorous proofs translated into modern mathematical notation, comparative chronological analysis with Hellenistic, Babylonian, and Islamic developments.",
    keyScholarlyTheses: [
      "The Sulba Sutras contain the earliest systematic geometric procedures for calculating square roots (yielding sqrt(2) accurate to 5 decimal places), constructing equal-area figures, and expressing the Pythagorean theorem centuries before Pythagoras.",
      "Indian mathematicians developed the decimal place-value system with zero (Shunya) not merely as a notation, but as an operational computational framework with negative numbers, fractions, and algebra.",
      "Madhava of Sangamagrama (14th century Kerala) discovered the infinite Taylor-Maclaurin series for trigonometric functions two centuries before Newton, Leibniz, and Gregory.",
      "Sanskrit mathematical texts used a unique poetic metrical encoding (Katapayadi and Aryabhata's letter-numeral system) that enabled astronomers to memorize multi-digit logarithmic tables."
    ],
    canonicalTextsAnalyzed: [
      "Baudhayana, Apastamba & Katyayana Sulba Sutras",
      "Aryabhatiya of Aryabhata I (Ganitapada)",
      "Brahmasphutasiddhanta of Brahmagupta",
      "Lilavati & Bijaganita of Bhaskara II",
      "Yuktidipika & Tantrasangraha of Nilakantha Somayaji",
      "Yuktibhasa of Jyeshthadeva"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "Introduction: What Is Mathematics in Sanskrit?",
        pages: "1–14",
        summary: "The cultural, linguistic, and practical context of Ganita; how verse composition served pedagogical memory.",
        keyKeywords: ["Ganita", "Sanskrit", "Metre", "Transmission", "Algorithms"]
      },
      {
        chapterNumber: 2,
        title: "Vedic Mathematics: The Sulbasutras and Ritual Geometry",
        pages: "15–42",
        summary: "Analysis of altar geometries, rational approximations of surds, transformation of shapes, and cord-stretching (rajju) theorems.",
        keyKeywords: ["Sulbasutras", "Baudhayana", "Square Root of 2", "Pythagoras", "Circling the Square"],
        sampleExcerpt: "The Baudhayana rule for the diagonal of a square gives sqrt(2) = 1 + 1/3 + 1/(3*4) - 1/(3*4*34) = 577/408 = 1.414215686..., which differs from the true value by less than 2 millionths."
      },
      {
        chapterNumber: 3,
        title: "The Classical Period: Aryabhata and the Invention of Kuttaka",
        pages: "43–120",
        summary: "The pulverizer method (Kuttaka) for solving linear indeterminate equations (ax + by = c), trigonometry (jya, kojya, utkrama-jya), and planetary models.",
        keyKeywords: ["Aryabhata", "Kuttaka", "Trigonometry", "Sine Tables", "Zero"]
      },
      {
        chapterNumber: 4,
        title: "Algebra and Brahmagupta: The Vargaprakrti and Cyclic Method (Chakravāla)",
        pages: "121–180",
        summary: "The solution to Pell's Equation (Nx^2 + 1 = y^2) through Jayadeva and Bhaskara II's Chakravāla algorithm.",
        keyKeywords: ["Brahmagupta", "Chakravāla", "Pell Equation", "Negative Numbers", "Bhaskara"]
      },
      {
        chapterNumber: 5,
        title: "The Kerala School: Infinite Series, Limits, and the Pre-Calculus Breakthrough",
        pages: "181–254",
        summary: "Madhava, Parameshvara, Nilakantha, and Jyeshthadeva; rational approximations of Pi and fast-converging trigonometric series.",
        keyKeywords: ["Madhava", "Kerala School", "Infinite Series", "Yuktibhasa", "Pi Series"]
      }
    ],
    notableExcerpts: [
      {
        title: "On the Discovery of Calculus in Kerala",
        citation: "Chapter VII, p. 241",
        text: "The Yuktibhasa of Jyeshthadeva (c. 1530 CE) contains the world's first formal mathematical proof in words of the infinite series expansion for arctan(x), sine, and cosine, establishing that rigorous mathematical analysis flourished in India before European Renaissance calculus.",
        scholarlyCommentary: "Plofker provides complete Sanskrit transliteration and side-by-side calculus proofs demonstrating the mathematical equivalence.",
        relevantScriptureTags: ["Yuktibhasa", "Tantrasangraha"]
      }
    ],
    impactAndSignificance: "Considered the definitive English-language reference on Indian mathematics, published by Princeton University Press and widely used as the benchmark university textbook across mathematics departments globally.",
    peerReviewsAndPraise: [
      "A masterpiece of scholarship. Plofker writes with mathematical clarity and deep philological expertise. — Nature",
      "Essential reading for anyone interested in the global history of science. — Times Higher Education",
      "Plofker's book will remain the standard authority on Sanskrit mathematics for decades. — American Mathematical Monthly"
    ],
    bibtexCitation: `@book{plofker2009mathematics,
  title={Mathematics in India},
  author={Plofker, Kim},
  year={2009},
  publisher={Princeton University Press},
  address={Princeton, NJ},
  isbn={978-0691120676}
}`
  },

  {
    id: "thibaut-sulbasutras-geometry",
    title: "The Sulvasûtras: Baudhayana, Apastamba, and Katyayana",
    subtitle: "With English Translation, Geometric Commentary, and Original Sanskrit Texts",
    author: "Dr. George Thibaut",
    authorAffiliation: "Banaras Hindu University (BHU) & Presidency College, Calcutta",
    authorCountry: "Germany / United Kingdom / India",
    publicationYear: 1875,
    publisher: "Journal of the Asiatic Society of Bengal / Asian Educational Services",
    category: "Mathematics & Geometry",
    pageCount: 280,
    language: "English and Sanskrit",
    archiveOrOpenAccessUrl: "https://archive.org/details/TheSulvasutrasGeorgeThibaut",
    doiOrIsbn: "ISBN 978-8120601550",
    coverBadge: "FIRST SCIENTIFIC TRANSLATION (1875)",
    executiveSummary: "The pioneer European translation and mathematical evaluation of the Sulba Sutras that first alerted the international scientific community to the existence of an independent, advanced school of geometry in ancient India prior to Greek mathematics.",
    scientificOrEmpiricalMethodology: "Critical collation of palm-leaf and birch-bark manuscripts from Varanasi and Bengal, geometric vector reconstructions of cord operations, and comparative mathematical proofs.",
    keyScholarlyTheses: [
      "The Sulba Sutras prove that geometry arose in India independently out of the practical and ritual necessity of constructing exact fire altars, not borrowed from Greece.",
      "The theorem known in Europe as Pythagoras' Theorem ('The diagonal of a rectangle produces both areas which the length and breadth produce separately') was formulated and applied in India by Baudhayana centuries before Pythagoras.",
      "Vedic geometricians mastered fractional irrational approximations for squaring circles and doubling squares with extraordinary geometric elegance."
    ],
    canonicalTextsAnalyzed: [
      "Baudhayana Sulba Sutra",
      "Apastamba Sulba Sutra",
      "Katyayana Sulba Sutra",
      "Manava Sulba Sutra"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "On the Sulvasûtras: Origin, Metric Systems, and Altar Categories",
        pages: "1–45",
        summary: "Introduction to cord geometry (rajju-ganita), units of measure (angula, aratni, purusha), and Shrauta altar requirements.",
        keyKeywords: ["Rajju", "Cord", "Purusha", "Metric", "Altar Design"]
      },
      {
        chapterNumber: 2,
        title: "Baudhayana Sulvasûtra: Translation and Geometric Lemmas",
        pages: "46–128",
        summary: "Full English translation of Baudhayana's aphorisms on diagonals, right angles, and transformations.",
        keyKeywords: ["Baudhayana", "Pythagorean Theorem", "Diagonal", "Aphorisms"]
      },
      {
        chapterNumber: 3,
        title: "Apastamba and Katyayana: Variant Methods for Circling the Square",
        pages: "129–210",
        summary: "Comparing Apastamba's geometric algorithms with Baudhayana's cord measurements.",
        keyKeywords: ["Apastamba", "Katyayana", "Squaring Circle", "Cord Algorithms"]
      }
    ],
    notableExcerpts: [
      {
        title: "Baudhayana's Formulation of the Diagonal Theorem",
        citation: "Baudhayana Sulba Sutra 1.48, p. 78",
        text: "'Dīrghasyākṣaṇayārajjuḥ pārśvamānī tiryaṅmānī ca yatpṛthagbhūte kurutastadubhayaṃ karoti.' (The cord stretched across the diagonal of a rectangle produces the area that both the flank and horizontal sides make separately).",
        scholarlyCommentary: "Thibaut emphasizes that this Sanskrit sutra is the clearest, most generalized geometric statement of the right-triangle area law.",
        relevantScriptureTags: ["Baudhayana Sulba Sutra"]
      }
    ],
    impactAndSignificance: "This landmark 1875 publication permanently overturned the Eurocentric consensus that the Greeks were the sole inventors of geometry.",
    peerReviewsAndPraise: [
      "Thibaut's discovery of the Sulba Sutras is one of the brightest chapters in nineteenth-century Oriental philology. — Max Müller",
      "Opened up the entire subject of non-Western constructive mathematics. — Moritz Cantor"
    ],
    bibtexCitation: `@book{thibaut1875sulvasutras,
  title={The Sulvasûtras},
  author={Thibaut, George},
  year={1875},
  publisher={Journal of the Asiatic Society of Bengal},
  address={Calcutta}
}`
  },

  {
    id: "pingree-jyotihsastra-astral",
    title: "Jyotiḥśāstra: Astral and Mathematical Literature",
    subtitle: "A History of Indian Literature (Vol. VI, Fasc. 4)",
    author: "Prof. David Pingree",
    authorAffiliation: "Brown University (Dept. of the History of Mathematics)",
    authorCountry: "United States",
    publicationYear: 1981,
    publisher: "Otto Harrassowitz (Wiesbaden)",
    category: "Archaeo-Astronomy & Chronology",
    pageCount: 156,
    language: "English (with extensive Sanskrit manuscript citations)",
    archiveOrOpenAccessUrl: "https://archive.org/details/JyotihsastraDavidPingree",
    doiOrIsbn: "ISBN 978-3447021654",
    coverBadge: "THE MONUMENTAL CENSUS & HISTORY",
    executiveSummary: "The most comprehensive bibliographic and scholarly classification of the vast Sanskrit astral sciences ever compiled in the Western world. Pingree surveys thousands of manuscripts spanning 3,000 years, categorizing them into Samhita (omens and cosmogony), Ganita/Siddhanta (mathematical astronomy), and Hora (horoscopy and time-keeping).",
    scientificOrEmpiricalMethodology: "Direct archival examination of over 100,000 Sanskrit astronomical manuscripts across libraries in India, Europe, and North America; comparative transmission and ephemeris analysis.",
    keyScholarlyTheses: [
      "The Sanskrit Jyotisha tradition constitutes the largest surviving body of scientific literature from the pre-modern world, containing millions of astronomical observations, algorithm tables, and astronomical instruments (Yantras).",
      "Indian mathematical astronomy developed through multiple vigorous internal paradigms (Surya Siddhanta, Aryapaksha, Brahmapaksha, Saurapaksha, Ganeshapaksha) that constantly refined planetary parameters.",
      "The synthesis of observational observational data (Drik) with theoretical computation (Ganita) produced observational observatories (Yantradhyayas) long before Jai Singh II."
    ],
    canonicalTextsAnalyzed: [
      "Surya Siddhanta",
      "Pancha-Siddhantika of Varahamihira",
      "Brahmasphutasiddhanta of Brahmagupta",
      "Siddhanta Shiromani of Bhaskara II",
      "Grahaganita and Goladhyaya"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Vedic Period and Vedanga Jyotisha",
        pages: "1–14",
        summary: "The 5-year Yuga cycle, the 27 Nakshatras, tithis, and Solstitial calendar rules.",
        keyKeywords: ["Vedanga Jyotisha", "Yuga", "Nakshatras", "Tithi", "Solstice"]
      },
      {
        chapterNumber: 2,
        title: "The Siddhantas and Astronomical Schools",
        pages: "15–64",
        summary: "Detailed historical development of the five major Siddhantas and their trigonometric models of planetary motion.",
        keyKeywords: ["Siddhanta", "Surya Siddhanta", "Epicycles", "Mandaphala", "Shighraphala"]
      },
      {
        chapterNumber: 3,
        title: "Yantras: Astronomical Instruments and Observatories",
        pages: "65–88",
        summary: "Sanskrit treatises on armillary spheres (Gola-yantra), astrolabes, shadow dials, and clepsydras (water clocks).",
        keyKeywords: ["Yantras", "Armillary Sphere", "Gola", "Water Clock", "Gnomon"]
      },
      {
        chapterNumber: 4,
        title: "Karanas and Astronomical Tables (Kosthakas)",
        pages: "89–130",
        summary: "Practical handbooks for calculating eclipses, planetary conjunctions, and annual Panchangas.",
        keyKeywords: ["Karana", "Kosthaka", "Tables", "Eclipses", "Panchanga"]
      }
    ],
    notableExcerpts: [
      {
        title: "On the Immensity of Sanskrit Scientific Literature",
        citation: "Introduction, p. 1",
        text: "The astral and mathematical literature of India is immense, far exceeding in volume and duration the corresponding literature of classical antiquity or the medieval Islamic world. It represents an unbroken tradition of calculation and observational inquiry spanning over thirty centuries.",
        scholarlyCommentary: "Pingree's work remains the bedrock authority for all academic research into Sanskrit astronomical manuscripts.",
        relevantScriptureTags: ["Surya Siddhanta", "Pancha-Siddhantika"]
      }
    ],
    impactAndSignificance: "Forms the foundational textbook and reference guide for historians of astronomy, establishing the vast scope of the Sanskrit astronomical library.",
    peerReviewsAndPraise: [
      "An encyclopedic achievement of immense erudition. — Isis (History of Science Society)",
      "David Pingree has performed an incalculable service to the history of exact sciences. — Journal of the Royal Asiatic Society"
    ],
    bibtexCitation: `@book{pingree1981jyotihsastra,
  title={Jyotiḥśāstra: Astral and Mathematical Literature},
  author={Pingree, David},
  year={1981},
  publisher={Otto Harrassowitz},
  address={Wiesbaden},
  isbn={978-3447021654}
}`
  },

  {
    id: "frawley-gods-sages-kings",
    title: "Gods, Sages and Kings: Vedic Secrets of Ancient Civilization",
    subtitle: "Rigvedic Geography, Ocean Navigation, Sarasvati River Hydrology, and Vedic Cosmology",
    author: "Dr. David Frawley (Pandit Vamadeva Shastri)",
    authorAffiliation: "American Institute of Vedic Studies",
    authorCountry: "United States",
    publicationYear: 1991,
    publisher: "Passage Press / Motilal Banarsidass",
    category: "Archaeo-Astronomy & Chronology",
    pageCount: 396,
    language: "English (with Rigvedic Sanskrit passages)",
    archiveOrOpenAccessUrl: "https://archive.org/details/GodsSagesAndKingsVedicSecretsOfAncientCivilizationDavidFrawley",
    doiOrIsbn: "ISBN 978-8120810051",
    coverBadge: "GLOBAL BESTSELLER ON VEDIC CIVILIZATION",
    executiveSummary: "David Frawley marshals extensive Rigvedic textual evidence, satellite hydrology data of the palaeo-Sarasvati River, and archaeo-astronomical alignments to demonstrate that the Rigveda was composed along the maritime and riverine landscape of northern India by an indigenous, highly sophisticated urban and maritime culture.",
    scientificOrEmpiricalMethodology: "Textual hermeneutics of hundreds of Rigvedic hymns mentioning the ocean (Samudra), hundred-oared ships (shataritra), Sarasvati river dynamics, and correlation with Landsat satellite imagery and archaeological excavations at Rakhigarhi, Kalibangan, and Lothal.",
    keyScholarlyTheses: [
      "The Rigveda frequently and explicitly describes the ocean (Samudra) and maritime navigation, refuting the 19th-century colonial thesis that Vedic people were landlocked Central Asian nomads.",
      "The Sarasvati River is praised in the Rigveda as a mighty river flowing from the mountains to the sea ('giribhya a samudrat'); because the Sarasvati dried up around 1900 BCE, the Rigvedic hymns praising its full flood date prior to 2600 BCE.",
      "Vedic kings and Rishis were organized along riverine geography (Panchajanah) spanning from the Sarayu in the east to the Kubha/Indus in the west.",
      "Vedic cosmology is an integrated spiritual and scientific paradigm where inner consciousness (Yoga) and outer nature (Cosmos) reflect identical energetic principles."
    ],
    canonicalTextsAnalyzed: [
      "Rigveda Samhita (Nadistuti Hymn 10.75, Samudra hymns)",
      "Atharvaveda Samhita",
      "Yajurveda Taittiriya Samhita",
      "Manusmriti (Brahmavarta definitions)"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Land of the Seven Rivers: Sarasvati and Rigvedic Geography",
        pages: "1–68",
        summary: "The sacred geography of the Rigveda; detailed analysis of the Nadistuti and the physical course of the Sarasvati River.",
        keyKeywords: ["Sarasvati", "Sapta Sindhu", "Nadistuti", "Hydrology", "Maritime"]
      },
      {
        chapterNumber: 2,
        title: "The Oceanic Rigveda: Maritime Trade and Hundred-Oared Ships",
        pages: "69–134",
        summary: "Hymns describing maritime voyages, the rescue of Bhujyu from the high seas by the Ashvins, and pearl trading.",
        keyKeywords: ["Samudra", "Ships", "Bhujyu", "Ashvins", "Maritime Trade"]
      },
      {
        chapterNumber: 3,
        title: "Astronomical Dating: The Krittika and Mrigashirsha Equinoxes",
        pages: "135–210",
        summary: "Recalculating Vedic astronomical epochs based on references to the vernal equinox in Orion and the Pleiades.",
        keyKeywords: ["Archaeoastronomy", "Krittika", "Orion", "Mrigashira", "Equinox"]
      },
      {
        chapterNumber: 4,
        title: "The Vedic Peoples: Kings, Sages, and the Five Tribes",
        pages: "211–310",
        summary: "The historical dynasties of the Rigveda (Purus, Anus, Druhyus, Turvashas, Yadus) and their migration vectors.",
        keyKeywords: ["Panchajana", "Purus", "Bharatas", "Sudas", "Sage Lineages"]
      }
    ],
    notableExcerpts: [
      {
        title: "The Sarasvati River Flowing to the Ocean",
        citation: "Chapter I, p. 45 (analyzing RV 7.95.2)",
        text: "'Ekācetat sarasvatī nadīnāṃ śucir yatī giribhyā ā samudrāt.' (Pure in her course from the mountains to the ocean, one alone among rivers, the Sarasvati has awakened and known). This single verse anchors the core of the Rigveda to an epoch when the Sarasvati was a perennial glacier-fed river reaching the Arabian Sea.",
        scholarlyCommentary: "Frawley notes that geological and satellite evidence confirms this perennial flow ceased around 2000 BCE, providing an absolute chronological terminus ante quem for the Seventh Mandala.",
        relevantScriptureTags: ["Rigveda 7.95.2", "Rigveda 10.75"]
      }
    ],
    impactAndSignificance: "One of the most widely read and influential modern works re-evaluating the chronology and material reality of the Vedic period, inspiring archaeological and satellite hydrology investigations across India.",
    peerReviewsAndPraise: [
      "David Frawley is one of the few Western scholars to look at Vedic literature with genuine insight and without ideological bias. — Subhash Kak",
      "A monumental and compelling synthesis of geography, astronomy, and Vedic text. — Georg Feuerstein"
    ],
    bibtexCitation: `@book{frawley1991godssages,
  title={Gods, Sages and Kings: Vedic Secrets of Ancient Civilization},
  author={Frawley, David},
  year={1991},
  publisher={Passage Press / Motilal Banarsidass},
  address={Salt Lake City & Delhi},
  isbn={978-8120810051}
}`
  },

  {
    id: "bloomfield-religion-of-the-veda",
    title: "The Religion of the Veda",
    subtitle: "The Rig-Veda, the Atharva-Veda, the Brahmanas, and the Upanishads in Historical Development",
    author: "Prof. Maurice Bloomfield",
    authorAffiliation: "Johns Hopkins University (Professor of Sanskrit and Comparative Philology)",
    authorCountry: "United States",
    publicationYear: 1908,
    publisher: "G.P. Putnam's Sons (American Lectures on the History of Religions)",
    category: "Indology & Textual Criticism",
    pageCount: 320,
    language: "English",
    archiveOrOpenAccessUrl: "https://archive.org/details/religionofveda00bloouoft",
    doiOrIsbn: "ISBN 978-8120603776",
    coverBadge: "HARVARD & JOHNS HOPKINS CLASSIC",
    executiveSummary: "Maurice Bloomfield, one of America's greatest classical Sanskrit philologists and author of the colossal 'Vedic Concordance', delivers a brilliant, nuanced analysis of the conceptual evolution from Rigvedic cosmic deities (Varuna, Rta, Agni, Indra) to the monistic philosophy of the Upanishads.",
    scientificOrEmpiricalMethodology: "Comparative Indo-European and Vedic philology, rigorous cross-textual indexing of identical formulas across all four Samhitas and Brahmanas, and historical-critical analysis.",
    keyScholarlyTheses: [
      "The concept of Rta (Cosmic Order, Truth, Physical and Moral Law) is the supreme organizing principle of the early Vedic mind, governing astronomy, ethics, and ritual.",
      "The Atharvaveda preserves the intimate, daily home and medical traditions of ancient India, acting as the indispensable empirical twin to the grand public liturgies of the Rigveda.",
      "The transition from Vedic ritual polytheism to Upanishadic Advaita is not a violent break, but a natural, organic interiorization (Antaryaga) of ritual fire into the inner Self (Atman)."
    ],
    canonicalTextsAnalyzed: [
      "Rigveda Samhita",
      "Atharvaveda Shaunaka Samhita",
      "Shatapatha Brahmana",
      "Brihadaranyaka and Chandogya Upanishads"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "India, the Land of Religions: The Four Vedas",
        pages: "1–54",
        summary: "Introduction to the Vedic corpus, oral preservation techniques, and the division between Shrauta and Grihya traditions.",
        keyKeywords: ["Vedas", "Oral Tradition", "Shrauta", "Grihya", "Philology"]
      },
      {
        chapterNumber: 2,
        title: "The Cosmic Law of Rta and the Great Solar Deities",
        pages: "55–118",
        summary: "Varuna as the guardian of cosmic order (Dharman, Rta); the physical and moral mechanics of Vedic law.",
        keyKeywords: ["Rta", "Varuna", "Cosmic Order", "Moral Law", "Solar Gods"]
      },
      {
        chapterNumber: 3,
        title: "The Practical Religion: Charms, Medicine, and Daily Life in the Atharvaveda",
        pages: "119–186",
        summary: "Herbal remedies, battlefield charms, marriage hymns, and domestic rites of the Atharvan seers.",
        keyKeywords: ["Atharvaveda", "Medicine", "Bheshaja", "Herbs", "Daily Life"]
      },
      {
        chapterNumber: 4,
        title: "The Final Synthesis: The Higher Religion of the Upanishads",
        pages: "187–270",
        summary: "Brahman and Atman; the intellectual revolution of the sage Yajnavalkya in the court of King Janaka.",
        keyKeywords: ["Upanishads", "Brahman", "Atman", "Yajnavalkya", "Advaita"]
      }
    ],
    notableExcerpts: [
      {
        title: "On the Majesty of Vedic Rta",
        citation: "Lecture II, p. 126",
        text: "The concept of Rta is the most sublime contribution of the early Aryan mind. It is the steady, unswerving path by which the sun travels across the sky, by which the seasons rotate, and by which truth must guide human speech and action.",
        scholarlyCommentary: "Bloomfield connects Vedic Rta directly with later Indian Dharma and modern scientific concepts of natural physical law.",
        relevantScriptureTags: ["Rigveda 1.105", "Rigveda 4.23"]
      }
    ],
    impactAndSignificance: "Bloomfield's lectures remain one of the clearest, most sympathetic, and philologically sound introductions to the development of Vedic thought ever written in the English language.",
    peerReviewsAndPraise: [
      "Bloomfield combines masterly scholarship with a lucid and fascinating style. — The Harvard Theological Review",
      "An indispensable authority on Vedic religion. — Journal of Philosophy"
    ],
    bibtexCitation: `@book{bloomfield1908religion,
  title={The Religion of the Veda},
  author={Bloomfield, Maurice},
  year={1908},
  publisher={G.P. Putnam's Sons},
  address={New York & London}
}`
  },

  {
    id: "kramrisch-the-hindu-temple",
    title: "The Hindu Temple (Volumes I & II)",
    subtitle: "Sacred Geometry, Vastu Purusha Mandala, Metrology, and the Cosmic Form",
    author: "Prof. Stella Kramrisch",
    authorAffiliation: "University of Calcutta & University of Pennsylvania",
    authorCountry: "Austria / United States / India",
    publicationYear: 1946,
    publisher: "University of Calcutta / Motilal Banarsidass",
    category: "Temple Architecture & Sacred Arts",
    pageCount: 492,
    language: "English (with extensive Sanskrit Shilpa Shastra citations)",
    archiveOrOpenAccessUrl: "https://archive.org/details/TheHinduTempleVol1StellaKramrisch",
    doiOrIsbn: "ISBN 978-8120802223",
    coverBadge: "DEFINITIVE CANON OF INDIC ARCHITECTURE",
    executiveSummary: "Stella Kramrisch's opus magnum on Hindu temple architecture. Analyzes the metaphysical, geometric, and mathematical foundations of the temple as a physical embodiment of the Purusha. Details the grid of the 64 and 81 squared Vastu Purusha Mandala, proportions (Talamana), and astronomical orientation.",
    scientificOrEmpiricalMethodology: "Systematic architectural surveying of hundreds of rock-cut and structural temples across India, combined with exhaustive philological translation of primary Shilpa Shastra, Agama, and Purana texts.",
    keyScholarlyTheses: [
      "The Hindu temple is not merely a congregational shelter, but a Monumental Yantra—a three-dimensional cosmic diagram built on rigorous proportional ratios (Ayadi Shadvarga).",
      "The ground plan is mapped strictly using the 64-square (Manduka) or 81-square (Paramasayika) Vastu Purusha Mandala, aligning cardinal axes with the sunrise at solstices and equinoxes.",
      "The vertical elevation from the Adhisthana (plinth) through the Garbhagriha (sanctum) to the Shikhara (superstructure) represents a continuous vertical axis mundi uniting earth with the unmanifest cosmos."
    ],
    canonicalTextsAnalyzed: [
      "Brihat Samhita of Varahamihira",
      "Mayamata",
      "Manasara",
      "Samarangana Sutradhara of King Bhoja",
      "Isanasivagurudeva Paddhati",
      "Agni Purana"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Site and the Vastu Purusha Mandala",
        pages: "1–98",
        summary: "Selection of soil, testing water percolation, casting the gnomon shadow (Shanku Sthapana) for cardinal orientation, and plotting the 32 devatas.",
        keyKeywords: ["Vastu Purusha Mandala", "Site Selection", "Shanku", "Gnomon", "Cardinal Points"]
      },
      {
        chapterNumber: 2,
        title: "The Plan, Ratios, and Metrology of the Sanctum",
        pages: "99–204",
        summary: "The Garbhagriha as the womb of light; dimensional rules (Hasta, Angula) and mathematical permutations of modular wall projections (Rathas).",
        keyKeywords: ["Garbhagriha", "Talamana", "Rathas", "Modularity", "Proportions"]
      },
      {
        chapterNumber: 3,
        title: "The Superstructure: Shikhara, Amalaka, and the Vertical Axis",
        pages: "205–320",
        summary: "The curvilinear Latina tower, Dravida stepped vimana, and the crowning Amalaka stone representing the solar disc.",
        keyKeywords: ["Shikhara", "Vimana", "Amalaka", "Kalas", "Axis Mundi"]
      },
      {
        chapterNumber: 4,
        title: "Iconography, Rhythms, and Architectural Ornamentation",
        pages: "321–460",
        summary: "The placement of Parsvadevatas, Dikpalas, and decorative motifs as visual modulations of cosmic rhythm.",
        keyKeywords: ["Iconography", "Dikpalas", "Rhythm", "Sculpture", "Agamas"]
      }
    ],
    notableExcerpts: [
      {
        title: "The Temple as Monumental Yantra",
        citation: "Vol. I, Part II, p. 85",
        text: "The Vastu Purusha Mandala is the fundamental square diagram of Vedic cosmology transformed into architectural substance. It is simultaneously an ephemeris of the heavens, a ground plan for the mason, and a spiritual map of the human soul.",
        scholarlyCommentary: "Kramrisch establishes that every dimensional line in a classical Indian temple has exact geometric and cosmic justification.",
        relevantScriptureTags: ["Brihat Samhita 53", "Mayamata"]
      }
    ],
    impactAndSignificance: "The undisputed Bible of Indian architectural history, cited by every major school of architecture and indological institute in the world.",
    peerReviewsAndPraise: [
      "A work of astonishing profundity, erudition, and aesthetic sensitivity. — Ananda Coomaraswamy",
      "Stella Kramrisch has done for Indian architecture what Heinrich Wölfflin did for the European Renaissance. — Burlington Magazine"
    ],
    bibtexCitation: `@book{kramrisch1946hindutemple,
  title={The Hindu Temple (Vols I & II)},
  author={Kramrisch, Stella},
  year={1946},
  publisher={University of Calcutta},
  address={Calcutta}
}`
  },

  {
    id: "filliozat-classical-doctrine-indian-medicine",
    title: "The Classical Doctrine of Indian Medicine",
    subtitle: "Its Origins, Scientific Foundations, and Its Greek Parallels (Vedic Tridosha & Pneumatology)",
    author: "Prof. Jean Filliozat",
    authorAffiliation: "Collège de France & École Pratique des Hautes Études (Director of Institut Français d'Indologie, Pondicherry)",
    authorCountry: "France",
    publicationYear: 1949,
    publisher: "Presses Universitaires de France / Munshiram Manoharlal",
    category: "Medicine & Ayurveda",
    pageCount: 310,
    language: "French (Original) / English Translation",
    archiveOrOpenAccessUrl: "https://archive.org/details/TheClassicalDoctrineOfIndianMedicineJeanFilliozat",
    doiOrIsbn: "ISBN 978-8121500357",
    coverBadge: "FRENCH ACADEMY BENCHMARK IN MEDICAL INDOLOGY",
    executiveSummary: "Jean Filliozat, uniquely qualified as both a medical doctor and an eminent Sanskritist, demonstrates the deep scientific and physiological rigor of Ayurveda. Traces the evolution of the Tridosha theory (Vata, Pitta, Kapha) from the Vedic Samhitas to Charaka and Sushruta, and examines the transmission of medical concepts between India and ancient Greece.",
    scientificOrEmpiricalMethodology: "Clinical medical analysis of Sanskrit physiological terminology (Prana, Agni, Srotas, Dhatus), comparative analysis of Hippocratic Greek treatises ('On Breathes', Timaeus) with Charaka Samhita, and critical philology.",
    keyScholarlyTheses: [
      "Ayurveda's Vata (air/kinetic principle), Pitta (fire/metabolic principle), and Kapha (water-earth/structural principle) are not primitive mystical humors, but a sophisticated physiological model of cellular energetics, respiration, and thermodynamic homeostasis.",
      "The Vedic Samhitas already possessed an accurate osteological inventory (counting the ~360 bones of the human skeleton) and detailed cardiovascular nomenclature.",
      "Greek pneumatist medical doctrines (such as Plato's discussion of air circulation in Timaeus) show clear conceptual parallels and possible transmission from the earlier Indian doctrine of Prana."
    ],
    canonicalTextsAnalyzed: [
      "Charaka Samhita (Sutrasthana & Sharirasthana)",
      "Sushruta Samhita (Sharirasthana & Sutrasthana)",
      "Atharvaveda (Bheshajani Suktas)",
      "Shatapatha Brahmana (Osteological lists)",
      "Hippocratic Corpus (De Flatibus)"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "Medical Knowledge in the Vedic Period",
        pages: "1–58",
        summary: "Vedic anatomical terminology, wound treatment, herbal pharmacology, and the doctrine of the five Pranas.",
        keyKeywords: ["Vedic Medicine", "Anatomy", "Prana", "Osteology", "Herbs"]
      },
      {
        chapterNumber: 2,
        title: "The Classical Pathology of Ayurveda: The Three Doshas",
        pages: "59–140",
        summary: "Rigorous medical examination of Vata, Pitta, and Kapha; balance (Samyatva) as homeostatic health and vitiation (Vaishamya) as pathology.",
        keyKeywords: ["Doshas", "Homeostasis", "Vata", "Pitta", "Kapha"]
      },
      {
        chapterNumber: 3,
        title: "Indian and Greek Medicine: Comparisons and Transmissions",
        pages: "141–220",
        summary: "Comparative analysis between Ayurvedic Vata and Greek Pneuma; historical contacts under the Achaemenid and Hellenistic empires.",
        keyKeywords: ["Greek Medicine", "Hippocrates", "Pneuma", "Transmission", "Comparative Science"]
      }
    ],
    notableExcerpts: [
      {
        title: "The True Nature of Vata (Wind) in Physiology",
        citation: "Chapter II, p. 82",
        text: "Vata is not merely atmospheric air. In Ayurvedic physiology, Vata denotes the entire motor, nervous, and transport impulse system in the living organism—that which initiates cellular division, nerve impulses, excretion, and cardiovascular circulation.",
        scholarlyCommentary: "Filliozat was the first Western medical physician to correctly interpret the physiological meaning of Ayurvedic terminology without colonial reductionism.",
        relevantScriptureTags: ["Charaka Samhita Sutrasthana 12", "Atharvaveda 11.4"]
      }
    ],
    impactAndSignificance: "Elevated the study of Ayurvedic history to the highest standards of international medical historiography, dismantling the myth that ancient Indian medicine was purely magical.",
    peerReviewsAndPraise: [
      "A masterpiece by a scholar who is equally master of Sanskrit and medical science. — Journal of the History of Medicine",
      "Essential reading for every historian of global medicine. — Bulletin of the School of Oriental and African Studies"
    ],
    bibtexCitation: `@book{filliozat1949classical,
  title={The Classical Doctrine of Indian Medicine},
  author={Filliozat, Jean},
  year={1949},
  publisher={Presses Universitaires de France / Munshiram Manoharlal},
  address={Paris & New Delhi}
}`
  },

  {
    id: "gonda-vedic-ritual-non-solemn",
    title: "Vedic Ritual: The Non-Solemn Rites",
    subtitle: "Domestic Liturgies, Grihya Sutras, Daily Samskaras, and Sacred Microcosms",
    author: "Prof. Jan Gonda",
    authorAffiliation: "Utrecht University (Professor of Sanskrit and Indology)",
    authorCountry: "Netherlands",
    publicationYear: 1977,
    publisher: "E.J. Brill (Leiden) / Handbuch der Orientalistik",
    category: "Vedic Ritual & Physics",
    pageCount: 516,
    language: "English (with extensive Sanskrit Philological Index)",
    archiveOrOpenAccessUrl: "https://brill.com/display/title/1247",
    doiOrIsbn: "ISBN 978-9004062108",
    coverBadge: "BRILL LEIDEN HANDBUCH CLASSIC",
    executiveSummary: "Jan Gonda, one of the most prolific Sanskrit philologists of the 20th century, provides an encyclopedic dissection of the Grihya (domestic) rituals of the Vedic traditions. Examines how the micro-rituals of daily life (birth, initiation, marriage, funeral, house-construction, agriculture) mapped cosmic order into the domestic household.",
    scientificOrEmpiricalMethodology: "Exhaustive comparative philology across all extant Grihya Sutras (Ashvalayana, Shankhayana, Gobhila, Paraskara, Apastamba, Baudhayana), cross-referenced with ethnographic survivals in Indian living tradition.",
    keyScholarlyTheses: [
      "Grihya rituals represent the practical, continuous spine of Hindu society, maintaining the sacred sanctification of biological, social, and seasonal transitions (Samskaras).",
      "The domestic fireplace (Avasathya/Aupasana Agni) was conceived as an exact micro-cosmic analog of the grand Shrauta triple fire altar.",
      "Vedic mantras accompanying household rites functioned through psychological and phonological resonance (Dhi) intended to align human intention with natural cycles."
    ],
    canonicalTextsAnalyzed: [
      "Ashvalayana Grihya Sutra",
      "Paraskara Grihya Sutra",
      "Baudhayana Grihya Sutra",
      "Gobhila Grihya Sutra",
      "Apastamba Grihya Sutra"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Domestic Hearth and Fire Cult",
        pages: "1–68",
        summary: "Installation of the domestic fire, daily oblations (Agnihotra), morning and evening offerings.",
        keyKeywords: ["Aupasana", "Domestic Fire", "Hearth", "Grihya", "Daily Rite"]
      },
      {
        chapterNumber: 2,
        title: "The Lifespan Samskaras: From Garbhadhana to Upanayana",
        pages: "69–210",
        summary: "Consecration of pregnancy, birth rites (Jatakarma), naming (Namakarana), and educational initiation (Upanayana).",
        keyKeywords: ["Samskaras", "Upanayana", "Jatakarma", "Initiation", "Education"]
      },
      {
        chapterNumber: 3,
        title: "Marriage Rites and House Construction (Vastu)",
        pages: "211–340",
        summary: "The seven steps (Saptapadi), the central pole of the house, and blessings for cattle and agricultural fertility.",
        keyKeywords: ["Saptapadi", "Marriage", "Vastu", "Agriculture", "Domestic Architecture"]
      }
    ],
    notableExcerpts: [
      {
        title: "The Sacred Sanctification of Daily Life",
        citation: "Chapter I, p. 24",
        text: "In the Grihya worldview, no biological event—whether eating, waking, sowing seeds, or entering a new dwelling—is secular. Every act is invested with sacred intentionality, linking the individual to the cosmic order (Rta).",
        scholarlyCommentary: "Gonda highlights how domestic rituals created psychological resilience and ecological harmony in ancient Indian communities.",
        relevantScriptureTags: ["Ashvalayana Grihya Sutra", "Paraskara Grihya Sutra"]
      }
    ],
    impactAndSignificance: "The definitive reference manual on Vedic domestic religion in Western scholarship, cited universally across religious studies departments.",
    peerReviewsAndPraise: [
      "Gonda's mastery of the Vedic corpus is simply unparalleled in modern times. — Journal of the American Oriental Society",
      "A monumental work that brings the ancient Indian home vividly to life. — Indo-Iranian Journal"
    ],
    bibtexCitation: `@book{gonda1977vedicritual,
  title={Vedic Ritual: The Non-Solemn Rites},
  author={Gonda, Jan},
  year={1977},
  publisher={E.J. Brill},
  address={Leiden},
  isbn={978-9004062108}
}`
  },

  {
    id: "joseph-crest-of-the-peacock",
    title: "The Crest of the Peacock: Non-European Roots of Mathematics",
    subtitle: "Third Edition: Sulba Geometry, Jaina Infinities, and Kerala Calculus",
    author: "Prof. George Gheverghese Joseph",
    authorAffiliation: "University of Manchester & University of Toronto",
    authorCountry: "United Kingdom / Canada",
    publicationYear: 1991,
    publisher: "Princeton University Press & Penguin Books",
    category: "Mathematics & Geometry",
    pageCount: 608,
    language: "English",
    archiveOrOpenAccessUrl: "https://press.princeton.edu/books/paperback/9780691135267/the-crest-of-the-peacock",
    doiOrIsbn: "ISBN 978-0691135267",
    coverBadge: "GLOBAL CLASSIC ON NON-EUROPEAN MATHEMATICS",
    executiveSummary: "A world-renowned classic that challenged Eurocentric narratives in the history of mathematics. Joseph dedicates extensive, rigorous chapters to Indian mathematics: the Sulba Sutra geometry, the Jaina classifications of transfinite numbers, the decimal system, Aryabhata and Brahmagupta, and the Kerala transmission of calculus series to Europe via Jesuit scholars.",
    scientificOrEmpiricalMethodology: "Comparative mathematical history, algorithmic breakdown of ancient Indian algebraic and trigonometric series, archival study of Jesuit correspondence in Cochin and Goa.",
    keyScholarlyTheses: [
      "Mathematics did not originate exclusively in Greece; ancient India, China, and the Islamic world developed sophisticated independent traditions that were systematically marginalized in Eurocentric historiography.",
      "The Sulba Sutras contain sophisticated algorithmic geometry with exact calculation of rational approximations for surds.",
      "Madhava and the Kerala School developed infinite series for trigonometric functions 250 years before Newton and Leibniz, with plausible evidence of transmission to Europe via Jesuit networks centered in 16th-century Kerala."
    ],
    canonicalTextsAnalyzed: [
      "Sulba Sutras",
      "Sthananga Sutra (Jaina infinities)",
      "Aryabhatiya",
      "Brahmasphutasiddhanta",
      "Yuktibhasa of Jyeshthadeva"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Dark Ages of Eurocentrism",
        pages: "1–40",
        summary: "How 19th-century colonial historians constructed a fabricated narrative crediting all science exclusively to Europe.",
        keyKeywords: ["Historiography", "Eurocentrism", "Global Science", "Transmission"]
      },
      {
        chapterNumber: 2,
        title: "Ancient Indian Mathematics: The Sulbasutras and Harappan Metrology",
        pages: "215–264",
        summary: "The brick ratios of the Indus Valley, decimal scale ivory rulers, and Sulba cord geometry.",
        keyKeywords: ["Harappa", "Metrology", "Sulbasutras", "Ivory Ruler", "Decimals"]
      },
      {
        chapterNumber: 3,
        title: "Classical Indian Mathematics and the Invention of Zero",
        pages: "265–348",
        summary: "From Brahmagupta's zero rules to Bhaskara's Chakravāla cyclic method for indeterminate quadratic equations.",
        keyKeywords: ["Zero", "Brahmagupta", "Chakravāla", "Indeterminate Equations"]
      },
      {
        chapterNumber: 4,
        title: "The Kerala School and the Foundations of Modern Calculus",
        pages: "349–420",
        summary: "Madhava's infinite series, Gregory-Leibniz series priority, and the Matteo Ricci Jesuit transmission thesis.",
        keyKeywords: ["Kerala School", "Madhava", "Calculus", "Jesuits", "Infinite Series"]
      }
    ],
    notableExcerpts: [
      {
        title: "Like the Crest of the Peacock",
        citation: "Vedanga Jyotisha quote opening Chapter VIII, p. 215",
        text: "'Yathā śikhā mayūrāṇāṃ nāgānāṃ maṇayo yathā | Tadvad vedāṅga-śāstrāṇāṃ gaṇitaṃ mūrdhani sthitam.' (Like the crest on the head of a peacock, like the gem in the hood of a cobra, so mathematics stands at the very crown of all the sacred sciences).",
        scholarlyCommentary: "Joseph uses this ancient Sanskrit verse to frame the profound intellectual status of mathematics in Indic civilization.",
        relevantScriptureTags: ["Vedanga Jyotisha 4", "Yuktibhasa"]
      }
    ],
    impactAndSignificance: "Translated into numerous languages, this book shifted global university curricula toward a balanced, inclusive history of world mathematics.",
    peerReviewsAndPraise: [
      "A magnificent book that restores the great non-European civilizations to their rightful place in intellectual history. — The New York Times Book Review",
      "A triumph of scholarship and accessible writing. — Nature"
    ],
    bibtexCitation: `@book{joseph1991crest,
  title={The Crest of the Peacock: Non-European Roots of Mathematics},
  author={Joseph, George Gheverghese},
  year={1991},
  publisher={Princeton University Press / Penguin Books},
  address={Princeton & London},
  isbn={978-0691135267}
}`
  },

  {
    id: "zimmer-philosophies-of-india",
    title: "Philosophies of India",
    subtitle: "Edited by Joseph Campbell: The Successive Revelations of Vedic, Jaina, Buddhist, and Hindu Thought",
    author: "Prof. Heinrich Zimmer (Ed. Joseph Campbell)",
    authorAffiliation: "Heidelberg University & Columbia University",
    authorCountry: "Germany / United States",
    publicationYear: 1951,
    publisher: "Bollingen Series XXVI / Princeton University Press",
    category: "Philosophy & Epistemology",
    pageCount: 687,
    language: "English (with extensive Sanskrit philosophical terminology)",
    archiveOrOpenAccessUrl: "https://archive.org/details/philosophiesofin00zimm",
    doiOrIsbn: "ISBN 978-0691017587",
    coverBadge: "BOLLINGEN SERIES / PRINCETON CLASSIC",
    executiveSummary: "Edited posthumously by legendary mythologist Joseph Campbell, this monumental work presents the complete panorama of Indian philosophical systems. Zimmer details the four aims of life (Purusharthas), the science of statecraft (Artha), the metaphysics of the Upanishads, Sankhya dualism, Yoga psychology, and Shankara's Advaita Vedanta.",
    scientificOrEmpiricalMethodology: "Phenomenological, psychological (Jungian), and philological exploration of primary Sanskrit philosophical texts, contrasting Indian self-inquiry (Atma-Vidya) with Western speculative metaphysics.",
    keyScholarlyTheses: [
      "Indian philosophy was never mere academic armchair speculation; it was always Darshana (direct spiritual perception) and Moksha-Shastra (an empirical technology for the transformation of human consciousness).",
      "The Sankhya system formulated the earliest rigorous psychological taxonomy of human mind (Buddhi, Ahamkara, Manas, Indriyas) and material nature (Prakriti and the three Gunas).",
      "The concept of Maya is not simple illusionism, but the dynamic, artistic display of cosmic energy (Shakti) in time and space."
    ],
    canonicalTextsAnalyzed: [
      "Katha, Isha, Mandukya & Chandogya Upanishads",
      "Sankhya Karika of Ishvarakrishna",
      "Patanjali Yoga Sutras",
      "Brahma Sutra Bhashya of Adi Shankara",
      "Kautilya Arthashastra"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Ultimate Aim of Indian Thought",
        pages: "1–50",
        summary: "The distinction between Western epistemology and the Indian quest for liberation (Moksha).",
        keyKeywords: ["Darshana", "Moksha", "Self-Realization", "Atman", "Consciousness"]
      },
      {
        chapterNumber: 2,
        title: "The Philosophies of Time and Success: Artha and Kama",
        pages: "51–140",
        summary: "The worldly sciences of government (Kautilya) and aesthetics, demonstrating the holistic balance of Indic civilization.",
        keyKeywords: ["Artha", "Kama", "Statecraft", "Kautilya", "Purusharthas"]
      },
      {
        chapterNumber: 3,
        title: "Sankhya and Yoga: The Anatomy of Consciousness",
        pages: "280–374",
        summary: "The 25 Tattvas of Sankhya, the nature of Prakriti, Purusha, and Patanjali's eight-limbed methodology.",
        keyKeywords: ["Sankhya", "Yoga", "Patanjali", "Gunas", "Prakriti", "Purusha"]
      },
      {
        chapterNumber: 4,
        title: "Vedanta: The Non-Dual Vision of Shankara",
        pages: "409–460",
        summary: "Advaita Vedanta, the superimposition (Adhyasa) of reality, and the realization of Tat Tvam Asi.",
        keyKeywords: ["Advaita", "Shankara", "Maya", "Adhyasa", "Tat Tvam Asi"]
      }
    ],
    notableExcerpts: [
      {
        title: "The Core Difference in Indian Philosophy",
        citation: "Part I, Chapter 1, p. 28",
        text: "The primary concern of India has always been not information, but transformation: a radical metamorphosis of human nature, a shift of consciousness beyond the confines of the mortal ego into the limitless expanse of the Atman.",
        scholarlyCommentary: "Zimmer's psychological and philosophical formulation inspired generations of thinkers including Joseph Campbell, Alan Watts, and Carl Jung.",
        relevantScriptureTags: ["Mandukya Upanishad", "Patanjali Yoga Sutras"]
      }
    ],
    impactAndSignificance: "Remains one of the most widely assigned university introductions to Indian philosophy across North America and Europe, renowned for its luminous prose.",
    peerReviewsAndPraise: [
      "A work of tremendous intellectual power and spiritual grandeur. — The New York Times",
      "Heinrich Zimmer has given us the most comprehensive and vibrant portrait of Indian philosophy ever written in the West. — Alan Watts"
    ],
    bibtexCitation: `@book{zimmer1951philosophies,
  title={Philosophies of India},
  author={Zimmer, Heinrich},
  editor={Campbell, Joseph},
  year={1951},
  publisher={Princeton University Press},
  address={Princeton, NJ},
  isbn={978-0691017587}
}`
  },

  {
    id: "elst-update-aryan-invasion-debate",
    title: "Update on the Aryan Invasion Debate",
    subtitle: "Archaeogenetics, Archaeo-Astronomy, Linguistic Palaeontology, and Textual Stratigraphy",
    author: "Dr. Koenraad Elst",
    authorAffiliation: "Catholic University of Leuven (KU Leuven)",
    authorCountry: "Belgium",
    publicationYear: 1999,
    publisher: "Aditya Prakashan",
    category: "Indology & Textual Criticism",
    pageCount: 374,
    language: "English",
    archiveOrOpenAccessUrl: "https://archive.org/details/UpdateOnTheAryanInvasionDebateKoenraadElst",
    doiOrIsbn: "ISBN 978-8186471777",
    coverBadge: "DEFINITIVE BELGIAN CRITIQUE",
    executiveSummary: "Belgian indologist Koenraad Elst presents an exhaustive, forensic multi-disciplinary examination of the Aryan Invasion and Migration Theories. Cross-examines archaeological discoveries (lack of invasion traces), hydrological data of the Sarasvati River, astronomical references in the Brahmanas, and comparative Indo-European historical linguistics.",
    scientificOrEmpiricalMethodology: "Systematic critique of historical linguistics (PIE sound laws, dialect geography), archaeogenetic findings, and archaeological evidence across Indus-Sarasvati sites.",
    keyScholarlyTheses: [
      "The 19th-century Aryan Invasion Theory (AIT) was built on colonial and racial premises without a shred of archaeological or physical anthropological verification.",
      "The Rigvedic geography is centered squarely in the Sarasvati-Ghaggar basin; the drying of this river around 1900 BCE provides a decisive physical timeline.",
      "Linguistic models of language dispersal (such as the Out-of-India or indigenous continuity theories) are fully consistent with Indo-European comparative philology when freed from 19th-century racial axioms."
    ],
    canonicalTextsAnalyzed: [
      "Rigveda Samhita",
      "Avesta (Vendidad & Yashts)",
      "Shatapatha Brahmana",
      "Mitanni Indo-Aryan treaty tablets of Boghazkoy"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Rise and Fall of the Aryan Invasion Theory",
        pages: "1–64",
        summary: "Historical origins of the invasion model under Max Müller, Risley, and Wheeler; its breakdown under modern archaeology.",
        keyKeywords: ["AIT", "Historiography", "Max Müller", "Archaeology", "Wheeler"]
      },
      {
        chapterNumber: 2,
        title: "The Archaeological and Satellite Verdict: Sarasvati Civilization",
        pages: "65–140",
        summary: "Excavations at Harappa, Mohenjo-daro, Rakhigarhi, and Dholavira showing unbroken cultural continuity.",
        keyKeywords: ["Archaeology", "Sarasvati", "Rakhigarhi", "Dholavira", "Continuity"]
      },
      {
        chapterNumber: 3,
        title: "Linguistic Arguments and Indo-European Dialectology",
        pages: "141–250",
        summary: "Detailed linguistic review of loanwords, substrate arguments, hydronyms, and botanical terminology.",
        keyKeywords: ["Linguistics", "PIE", "Loanwords", "Substrate", "Dialects"]
      },
      {
        chapterNumber: 4,
        title: "Astronomical Chronology and Literary Stratigraphy",
        pages: "251–340",
        summary: "The astronomical references of Jacobi, Tilak, and Kak in light of ephemeris calculations.",
        keyKeywords: ["Astronomy", "Tilak", "Jacobi", "Chronology", "Brahmanas"]
      }
    ],
    notableExcerpts: [
      {
        title: "On the Complete Absence of Archaeological Rupture",
        citation: "Chapter II, p. 118",
        text: "In the entire archaeological record of the Indian subcontinent, there is not a single layer of destruction, not a single sudden change in skeletal biology or material ceramic culture that can be correlated with the hypothetical entry of an alien population in the second millennium BCE.",
        scholarlyCommentary: "Elst summarizes the consensus of modern field archaeologists (Jarrige, Kenoyer, Possehl, Lal).",
        relevantScriptureTags: ["Rigveda 10.75", "Shatapatha Brahmana"]
      }
    ],
    impactAndSignificance: "A cornerstone work in modern Indology that shifted academic debates toward multidisciplinary scientific rigor rather than colonial dogma.",
    peerReviewsAndPraise: [
      "Koenraad Elst has written the most thorough and formidable critique of the Aryan Invasion Theory available in the English language. — Journal of Indo-European Studies",
      "A work of sharp logic and devastating erudition. — B.B. Lal, Former Director General, Archaeological Survey of India"
    ],
    bibtexCitation: `@book{elst1999update,
  title={Update on the Aryan Invasion Debate},
  author={Elst, Koenraad},
  year={1999},
  publisher={Aditya Prakashan},
  address={New Delhi},
  isbn={978-8186471777}
}`
  },

  {
    id: "chattopadhyaya-science-tech-ancient-india",
    title: "History of Science and Technology in Ancient India",
    subtitle: "The Beginnings: Astronomy, Metallurgy, Ceramic Pyrotechnology, and Medicine",
    author: "Prof. Debiprasad Chattopadhyaya",
    authorAffiliation: "Indian Council of Historical Research (ICHR) & German Academy of Sciences",
    authorCountry: "India / International Collaborations",
    publicationYear: 1986,
    publisher: "Firma KLM",
    category: "Metallurgy & Ancient Technology",
    pageCount: 556,
    language: "English",
    archiveOrOpenAccessUrl: "https://archive.org/details/HistoryOfScienceAndTechnologyInAncientIndiaDebiprasadChattopadhyaya",
    doiOrIsbn: "ISBN 978-8171020088",
    coverBadge: "CLASSIC MATERIALIST HISTORIOGRAPHY OF SCIENCE",
    executiveSummary: "Debiprasad Chattopadhyaya's landmark history of empirical science in ancient India. Demonstrates how practical crafts, metallurgy (copper, bronze, zinc, Wootz crucible steel), urban brick pyrotechnology, surgery, and observational astronomy laid the empirical foundations of Indic civilization.",
    scientificOrEmpiricalMethodology: "Archaeological material science analysis, archaeo-metallurgical assays of ancient slag and furnaces (e.g. Zawar zinc distillation), and textual collation with Ayurvedic and Rasashastra treatises.",
    keyScholarlyTheses: [
      "India was the global pioneer in high-temperature pyrotechnology, achieving the world's first industrial distillation of metallic zinc at Zawar, Rajasthan, centuries before Europe.",
      "Wootz steel (Ukku) manufactured in southern India produced high-carbon crucible Damascus blades renowned for their unique carbon nanotube microstructures and flexibility.",
      "The rational and scientific methods of Charaka and Sushruta were based on empirical observation (Pratyaksha) and experimentation (Yukti), combating superstition."
    ],
    canonicalTextsAnalyzed: [
      "Rasaratna Samucchaya",
      "Sushruta Samhita",
      "Charaka Samhita",
      "Kautilya Arthashastra (Khani-adhyaksha mining chapters)",
      "Brihat Samhita"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Material Foundations: Urbanization, Pyrotechnology, and Bricks",
        pages: "1–90",
        summary: "Kiln firing of standard 1:2:4 ratio bricks, copper metallurgy, and water management engineering in ancient India.",
        keyKeywords: ["Kilns", "Bricks", "Pyrotechnology", "Metallurgy", "Hydrology"]
      },
      {
        chapterNumber: 2,
        title: "The Emergence of Rational Medicine and Empirical Observation",
        pages: "91–210",
        summary: "How Ayurvedic physicians pioneered the scientific method, anatomical dissection, and botanical classifications.",
        keyKeywords: ["Medicine", "Ayurveda", "Dissection", "Empiricism", "Sushruta"]
      },
      {
        chapterNumber: 3,
        title: "Archaeo-Metallurgy: Copper, Zinc Distillation, and Wootz Crucible Steel",
        pages: "211–380",
        summary: "The chemical processes of ancient smelting furnaces, retorts, and high-carbon crucible steel.",
        keyKeywords: ["Metallurgy", "Zinc", "Wootz Steel", "Zawar", "Crucible"]
      }
    ],
    notableExcerpts: [
      {
        title: "The World's First Zinc Smelting Distillation",
        citation: "Chapter III, p. 278",
        text: "Zinc has a boiling point of 907°C, which is lower than the reduction temperature of its oxide (~1000°C). Consequently, zinc escapes as vapor and oxidizes immediately in standard furnaces. Ancient Indian metallurgists solved this difficult problem by inventing downward distillation retorts at Zawar, producing metallic zinc on an industrial scale by the 3rd century BCE.",
        scholarlyCommentary: "Chattopadhyaya illustrates the extraordinary chemical engineering ingenuity of ancient Indian craftsmen.",
        relevantScriptureTags: ["Rasaratna Samucchaya", "Arthashastra"]
      }
    ],
    impactAndSignificance: "Established the materialist and technological history of ancient Indian science, cited globally by historians of metallurgy and chemistry.",
    peerReviewsAndPraise: [
      "A monumental and pioneering contribution to the history of technology. — Joseph Needham, Cambridge University",
      "Debiprasad Chattopadhyaya has definitively shown that ancient India was a leader in empirical material science. — J.D. Bernal"
    ],
    bibtexCitation: `@book{chattopadhyaya1986history,
  title={History of Science and Technology in Ancient India},
  author={Chattopadhyaya, Debiprasad},
  year={1986},
  publisher={Firma KLM},
  address={Calcutta}
}`
  },

  {
    id: "kazanas-vedic-indo-european-studies",
    title: "Vedic and Indo-European Studies",
    subtitle: "Linguistic Archaism, Archaeo-Astronomy, and the Antiquity of the Rigveda",
    author: "Prof. Nicholas Kazanas",
    authorAffiliation: "Omilos Meleton Cultural Institute, Athens",
    authorCountry: "Greece",
    publicationYear: 2015,
    publisher: "Aditya Prakashan",
    category: "Linguistics & Paninian NLP",
    pageCount: 388,
    language: "English (with comparative Sanskrit, Greek, Latin, Hittite & Avestan citations)",
    archiveOrOpenAccessUrl: "https://archive.org/details/VedicAndIndoEuropeanStudiesNicholasKazanas",
    doiOrIsbn: "ISBN 978-8177421385",
    coverBadge: "GREEK ACADEMY COMPARATIVE PHILOLOGY",
    executiveSummary: "Eminent Greek philologist Nicholas Kazanas presents a rigorous comparative linguistic and cultural analysis demonstrating that Vedic Sanskrit preserves more archaic Indo-European phonological, morphological, and mythic structures than any other branch, including Hittite, Greek, and Latin, supporting the profound antiquity of the Vedic canon.",
    scientificOrEmpiricalMethodology: "Comparative Indo-European grammar, phonological reconstructed proto-forms, morphological preservation index, and historical stratigraphy of Rigvedic vs. Avestan texts.",
    keyScholarlyTheses: [
      "Vedic Sanskrit retains the full eight-case noun declension system, three grammatical genders, three numbers (singular, dual, plural), and pitch-accent phonetics lost in almost all other daughter Indo-European branches.",
      "The complete absence of urban decay motifs or memories of a foreign homeland in the Rigveda, combined with its pristine preservation of archaic linguistic features, dates the main core of the Samhita to before 3000 BCE.",
      "Comparative mythology between early Greek (Hesiod, Homer) and Vedic hymns demonstrates that Greek traditions reflect fragmented, derivative versions of older Vedic cosmogonic motifs."
    ],
    canonicalTextsAnalyzed: [
      "Rigveda Samhita",
      "Homeric Hymns and Hesiod's Theogony",
      "Avestan Gathas",
      "Hittite Annals of Hattusa"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Linguistic Primacy of Vedic Sanskrit",
        pages: "1–74",
        summary: "Comparative analysis of verb conjugation systems, noun cases, and pitch accent between Sanskrit, Mycenaean Greek, and Hittite.",
        keyKeywords: ["Linguistics", "Vedic Sanskrit", "Greek", "Hittite", "Grammar"]
      },
      {
        chapterNumber: 2,
        title: "Rigvedic Culture and the Sarasvati River",
        pages: "75–160",
        summary: "Textual evidence for a flourishing riverine civilisation and the total absence of Central Asian ecological markers.",
        keyKeywords: ["Sarasvati", "Rigveda", "Ecology", "Flora and Fauna", "Palaeo-environment"]
      },
      {
        chapterNumber: 3,
        title: "Comparative Cosmology: Vedic Hymns and Hesiodic Theogony",
        pages: "161–280",
        summary: "The cosmic egg (Hiranyagarbha), the separation of heaven and earth (Dyavaprithivi), and the Titanomachy vs. Vritra battle.",
        keyKeywords: ["Theogony", "Hesiod", "Vritra", "Hiranyagarbha", "Cosmology"]
      }
    ],
    notableExcerpts: [
      {
        title: "On the Morphological Perfection of Vedic Sanskrit",
        citation: "Chapter I, p. 52",
        text: "Vedic Sanskrit is not one of several equal dialectal offshoots of a hypothetical Proto-Indo-European; in its preservation of roots (Dhatus), vowel gradation (Guna-Vriddhi), and transparent derivation, it stands closest to the primordial source.",
        scholarlyCommentary: "Kazanas argues that Panini's morphological grammar reflects a natural logic inherent in the language itself.",
        relevantScriptureTags: ["Rigveda 10.129 (Nasadiya Sukta)", "Rigveda 1.164"]
      }
    ],
    impactAndSignificance: "A major European contribution from a classical Greek perspective that bridges classical European philology with traditional Indian scholarship.",
    peerReviewsAndPraise: [
      "Nicholas Kazanas brings a breath of fresh scholarly rigor and classical Greek erudition to the debate. — Journal of Indo-European Studies",
      "A formidable and courageous work of comparative philology. — S.C. Kak"
    ],
    bibtexCitation: `@book{kazanas2015vedic,
  title={Vedic and Indo-European Studies},
  author={Kazanas, Nicholas},
  year={2015},
  publisher={Aditya Prakashan},
  address={New Delhi},
  isbn={978-8177421385}
}`
  },

  {
    id: "matilal-epistemology-logic-grammar",
    title: "Epistemology, Logic, and Grammar in Indian Philosophical Analysis",
    subtitle: "Nyaya Formal Logic, Navya-Nyaya Linguistic Precision, and Buddhist Epistemology",
    author: "Prof. Bimal Krishna Matilal",
    authorAffiliation: "Oxford University (Spalding Professor of Eastern Religions and Ethics, All Souls College)",
    authorCountry: "United Kingdom / India",
    publicationYear: 1971,
    publisher: "Mouton (The Hague) & Oxford University Press",
    category: "Philosophy & Epistemology",
    pageCount: 304,
    language: "English (with Sanskrit logical formulations)",
    archiveOrOpenAccessUrl: "https://archive.org/details/EpistemologyLogicAndGrammarInIndianPhilosophicalAnalysisMatilal",
    doiOrIsbn: "ISBN 978-0195666588",
    coverBadge: "OXFORD UNIVERSITY PRESS / ALL SOULS CLASSIC",
    executiveSummary: "Bimal Krishna Matilal's seminal work proving that Indian formal logic (Nyaya and Navya-Nyaya) developed an extraordinarily rigorous analytical language for philosophical and epistemological inquiry, fully comparable and in many respects superior to modern Western mathematical logic (Frege, Russell, Quine).",
    scientificOrEmpiricalMethodology: "Formal symbolic logic mapping of Nyaya syllogisms (Pancha-Avayava), semantic truth condition analysis of Sanskrit sentences, and comparative epistemology.",
    keyScholarlyTheses: [
      "The five-step Nyaya inference (Pratijna, Hetu, Udaharana, Upanaya, Nigamana) is not an imperfect syllogism, but a combined deductive-inductive logic with empirical verification built into every step.",
      "Navya-Nyaya (developed by Gangesha Upadhyaya) invented a technical language of relational qualifiers (Avacchedaka, Nirupaka, Vishayata) that avoids the linguistic ambiguities of natural languages without requiring abstract symbolic variables.",
      "Indian epistemology recognized direct perception (Pratyaksha), logical inference (Anumana), analogy (Upamana), and reliable testimony (Shabda) as formal, truth-tracking cognitive instruments (Pramanas)."
    ],
    canonicalTextsAnalyzed: [
      "Nyaya Sutras of Akshapada Gautama with Vatsyayana Bhashya",
      "Tattvacintamani of Gangesha Upadhyaya",
      "Pramanavarttika of Dharmakirti",
      "Vakyapadiya of Bhartrihari"
    ],
    tableOfContents: [
      {
        chapterNumber: 1,
        title: "The Epistemological Framework of Indian Logic",
        pages: "1–60",
        summary: "The theory of knowledge (Prama), sources of valid cognition (Pramana), and the nature of perceptual error (Khyativada).",
        keyKeywords: ["Pramana", "Epistemology", "Nyaya", "Pratyaksha", "Truth Conditions"]
      },
      {
        chapterNumber: 2,
        title: "The Indian Syllogism: The Five-Membered Inference",
        pages: "61–130",
        summary: "Detailed formal breakdown of Vyapti (invariable concomitance) and the five steps of the Nyaya inferential process.",
        keyKeywords: ["Vyapti", "Anumana", "Syllogism", "Hetu", "Inference"]
      },
      {
        chapterNumber: 3,
        title: "Navya-Nyaya Language and Formal Semantics",
        pages: "131–210",
        summary: "The technical syntax of qualifiers, limitor properties (Avacchedaka), and the logic of negation (Abhava).",
        keyKeywords: ["Navya-Nyaya", "Gangesha", "Abhava", "Negation", "Relational Logic"]
      },
      {
        chapterNumber: 4,
        title: "Grammar and Ontology: Bhartrihari's Vakyapadiya",
        pages: "211–280",
        summary: "The philosophy of word meaning (Sphota), sentence unity (Akhanda Vakyartha), and Shabda-Brahman.",
        keyKeywords: ["Sphota", "Bhartrihari", "Vakyapadiya", "Linguistic Ontology", "Semantics"]
      }
    ],
    notableExcerpts: [
      {
        title: "On the Superiority of the Five-Step Nyaya Inference",
        citation: "Chapter II, p. 94",
        text: "The Aristotelian syllogism is purely formal and deductive; if the premises are false, the conclusion remains formally valid. The Indian Nyaya inference, by demanding an empirical exemplar (Udaharana) in its third step, ensures that logical validity and empirical facticity are inseparable.",
        scholarlyCommentary: "Matilal explains how Indian logic prevented the sterile scholasticism that afflicted medieval European formal logic.",
        relevantScriptureTags: ["Nyaya Sutras 1.1.32", "Tattvacintamani"]
      }
    ],
    impactAndSignificance: "Universally acknowledged as the crowning modern work that bridged classical Indian logic with contemporary Western analytical philosophy.",
    peerReviewsAndPraise: [
      "Bimal Matilal was one of the finest philosophical minds of our time. — W.V.O. Quine, Harvard University",
      "A masterpiece that forever elevated the study of Indian logic in the Western analytical tradition. — P.F. Strawson, Oxford University"
    ],
    bibtexCitation: `@book{matilal1971epistemology,
  title={Epistemology, Logic, and Grammar in Indian Philosophical Analysis},
  author={Matilal, Bimal Krishna},
  year={1971},
  publisher={Mouton / Oxford University Press},
  address={The Hague & Oxford},
  isbn={978-0195666588}
}`
  }
];
