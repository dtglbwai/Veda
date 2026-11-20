export interface MagazinePublicationProfile {
  id: string;
  name: string;
  shortCode: string;
  foundingYear: number;
  publisher: string;
  foundersAndKeyEditors: string[];
  headquarters: string;
  frequency: string;
  issnOrRecord: string;
  scopeAndFocus: string;
  significance: string;
  badgeColor: string;
  icon: string;
  totalVolumesPublished: number;
  openAccessArchiveUrl: string;
}

export interface HeritageMagazineArticle {
  id: string;
  title: string;
  author: string;
  siteOrTopic: string;
  coordinates: string;
  historicalEpoch: string;
  abstract: string;
  extractedFullContent: string;
  keyArchaeologicalFindings: string[];
  epigraphicalDecipherment: {
    script: string;
    textTransliteration: string;
    translation: string;
    paleographicNotes: string;
  };
  sensorArchaeometryNotes: {
    methods: string[];
    instrumentalFindings: string;
  };
  scripturalParallels: string;
  agenticDispatchSummary: {
    drSenFieldLead: string;
    acharyaVarahaAstro: string;
    profEpigraphicus: string;
    shilpaVidwanArt: string;
    drShastriVedas: string;
    erMayaSensors: string;
  };
  tags: string[];
}

export interface HeritageMagazineIssue {
  id: string;
  publicationId: string;
  magazineTitle: string;
  volumeNumber: number;
  issueNumber: number;
  yearPublished: number;
  quarter: string;
  title: string;
  themeCategory: 
    | "Archaeological Excavations & Stratigraphy"
    | "Epigraphy & Ancient Scripts"
    | "Temple Architecture & Archaeo-Acoustics"
    | "Maritime Trade & Port Metallurgy"
    | "Archaeo-Astronomy & Sacred Geography"
    | "Living Traditions & Sacred Sciences"
    | "Sculptural Masterpieces & Iconography"
    | "Prehistoric & Quaternary Environment";
  coverImage: string;
  editorialSummary: string;
  editor?: string;
  publisher?: string;
  issn?: string;
  doiPrefix?: string;
  articles: HeritageMagazineArticle[];
}

export const PUBLICATION_PROFILES: MagazinePublicationProfile[] = [
  {
    id: "heritage_india",
    name: "Heritage India Magazine",
    shortCode: "HIM",
    foundingYear: 2008,
    publisher: "Heritage India Communications Pvt. Ltd.",
    foundersAndKeyEditors: ["Usha Sharma", "Dr. K.S. Valdiya", "Dr. S.R. Rao", "Advisory Council of Scholars"],
    headquarters: "Pune, Maharashtra, India",
    frequency: "Quarterly Journal",
    issnOrRecord: "ISSN 0974-6587",
    scopeAndFocus: "Multidisciplinary exploration of Indic archaeology, sacred geometry, submerged marine cities, epigraphy, and scientific archaeometry.",
    significance: "Bridging peer-reviewed field archaeology with accessible, high-resolution visual journalism and archaeo-astronomy ephemeris.",
    badgeColor: "amber",
    icon: "📖",
    totalVolumesPublished: 18,
    openAccessArchiveUrl: "https://heritage-india.com/archives"
  },
  {
    id: "marg",
    name: "Marg: A Magazine of the Arts",
    shortCode: "MARG",
    foundingYear: 1946,
    publisher: "Marg Foundation (Supported by J.R.D. Tata)",
    foundersAndKeyEditors: ["Mulk Raj Anand (Founder)", "Karl Khandalavala", "Dr. Walter Spink", "Vidya Dehejia"],
    headquarters: "Mumbai, Maharashtra, India",
    frequency: "Quarterly Scholarly Review",
    issnOrRecord: "ISSN 0025-2913",
    scopeAndFocus: "Encyclopedia of Indian and South Asian art history, temple architecture, Ajanta murals, classical bronzes, and courtly aesthetics.",
    significance: "The foremost historical art magazine in modern India, pioneering the post-independence architectural and aesthetic Renaissance.",
    badgeColor: "emerald",
    icon: "🎨",
    totalVolumesPublished: 75,
    openAccessArchiveUrl: "https://marg-art.org/journal"
  },
  {
    id: "puratattva",
    name: "Puratattva: Journal of the Indian Archaeological Society",
    shortCode: "PUR",
    foundingYear: 1967,
    publisher: "Indian Archaeological Society",
    foundersAndKeyEditors: ["Dr. S.P. Gupta", "Prof. B.B. Lal", "Prof. Vasant Shinde", "Dr. K.N. Dikshit"],
    headquarters: "New Delhi, India",
    frequency: "Annual Peer-Reviewed Journal",
    issnOrRecord: "ISSN 0970-2121",
    scopeAndFocus: "Definitive excavation reports, Harappan protohistory, megalithic burial systems, radiocarbon dating, and rock art.",
    significance: "The apex scholarly journal for scientific field excavations, stratigraphy, and artifactual taxonomies in South Asia.",
    badgeColor: "cyan",
    icon: "🏛️",
    totalVolumesPublished: 54,
    openAccessArchiveUrl: "https://indarchaeology.org/puratattva"
  },
  {
    id: "ancient_india",
    name: "Ancient India: Bulletin of the Archaeological Survey of India",
    shortCode: "AI-ASI",
    foundingYear: 1946,
    publisher: "Archaeological Survey of India (ASI)",
    foundersAndKeyEditors: ["Sir Mortimer Wheeler (Director General)", "A. Ghosh", "Krishna Deva", "Prof. B.B. Lal"],
    headquarters: "New Delhi / Calcutta, India",
    frequency: "Annual / Special Bulletin (Revived New Series)",
    issnOrRecord: "ASI Bulletin Record Vol 1-23",
    scopeAndFocus: "Stratigraphic sectioning methods, pottery typologies, Indo-Roman trade sites, Hellenistic Taxila, and Mauryan fortifications.",
    significance: "Introduced modern scientific Wheeler-Kenyon grid stratigraphy to the Indian subcontinent; published the landmark Arikamedu and Brahmagiri discoveries.",
    badgeColor: "indigo",
    icon: "📜",
    totalVolumesPublished: 26,
    openAccessArchiveUrl: "https://asi.nic.in/ancient-india-bulletin"
  },
  {
    id: "epigraphia_indica",
    name: "Epigraphia Indica",
    shortCode: "EI",
    foundingYear: 1882,
    publisher: "Archaeological Survey of India (Epigraphical Branch)",
    foundersAndKeyEditors: ["James Burgess (Founder)", "E. Hultzsch", "Dr. D.C. Sircar", "Dr. B. Ch. Chhabra"],
    headquarters: "Mysore / New Delhi, India",
    frequency: "Quarterly Fascicles & Bound Volumes",
    issnOrRecord: "ASI Epigraphy Corpus Vols 1-43",
    scopeAndFocus: "Full facsimile ink estampages, Roman transliterations, metrical analyses, and historical commentaries of ancient Indian inscriptions.",
    significance: "The world's greatest source corpus for Sanskrit, Prakrit, Tamil-Brahmi, Kharosthi, Kannada, and Grantha epigraphy.",
    badgeColor: "purple",
    icon: "🗿",
    totalVolumesPublished: 43,
    openAccessArchiveUrl: "https://asi.nic.in/epigraphia-indica"
  },
  {
    id: "man_and_environment",
    name: "Man and Environment",
    shortCode: "M&E",
    foundingYear: 1977,
    publisher: "Indian Society for Prehistoric and Quaternary Studies (ISPQS)",
    foundersAndKeyEditors: ["Prof. V.N. Misra", "Prof. S.N. Rajaguru", "Dr. Shanti Pappu", "Dr. P.K. Thomas"],
    headquarters: "Deccan College Post-Graduate and Research Institute, Pune",
    frequency: "Bi-Annual Peer-Reviewed Journal",
    issnOrRecord: "ISSN 0258-0446",
    scopeAndFocus: "Quaternary geology, Paleolithic lithic industries, zooarchaeology, paleobotany, early agriculture, and environmental geoarchaeology.",
    significance: "Pioneering the environmental and quaternary scientific context of human evolution and early settlements in South Asia.",
    badgeColor: "stone",
    icon: "🌱",
    totalVolumesPublished: 48,
    openAccessArchiveUrl: "https://manandenvironment.org"
  },
  {
    id: "jioa",
    name: "Journal of Indian Ocean Archaeology (JIOA)",
    shortCode: "JIOA",
    foundingYear: 2004,
    publisher: "Indian Archaeological Society & Centre for Maritime Archaeology",
    foundersAndKeyEditors: ["Dr. S.P. Gupta", "Dr. Alok Tripathi", "Dr. Sunil Gupta", "Prof. V.D. Misra"],
    headquarters: "New Delhi, India",
    frequency: "Annual International Journal",
    issnOrRecord: "ISSN 0974-1747",
    scopeAndFocus: "Maritime archaeology, Indian Ocean monsoon navigation, submerged shipwrecks, Lothal docks, Muziris, and Indo-Roman trade.",
    significance: "Dedicated focus on the maritime silk road and port archaeometry across India, the Arabian Sea, and Southeast Asia.",
    badgeColor: "blue",
    icon: "⚓",
    totalVolumesPublished: 17,
    openAccessArchiveUrl: "https://indarchaeology.org/jioa"
  },
  {
    id: "rupam",
    name: "Rupam: An Illustrated Journal of Oriental & Indian Art",
    shortCode: "RUPAM",
    foundingYear: 1920,
    publisher: "Indian Society of Oriental Art",
    foundersAndKeyEditors: ["Ordhendra Coomar Gangoly (Editor)", "Abanindranath Tagore", "Ananda K. Coomaraswamy"],
    headquarters: "Calcutta, Bengal, India",
    frequency: "Quarterly Historical Journal",
    issnOrRecord: "ISOA Archive 1920-1931",
    scopeAndFocus: "Classical Indian sculpture, Pahari & Rajput miniature painting, Buddhist iconography, and Bengal School art revivalism.",
    significance: "The premier art journal of the early 20th century Indian National Modernist and Swadeshi art movement.",
    badgeColor: "rose",
    icon: "🪷",
    totalVolumesPublished: 11,
    openAccessArchiveUrl: "https://archive.org/details/rupam-journal"
  },
  {
    id: "lalit_kala_ancient",
    name: "Lalit Kala (Ancient): Indian Art Journal",
    shortCode: "LKA",
    foundingYear: 1954,
    publisher: "Lalit Kala Akademi (National Academy of Art)",
    foundersAndKeyEditors: ["Karl Khandalavala (Honorary Editor)", "Dr. Moti Chandra", "Dr. V.S. Agrawala"],
    headquarters: "New Delhi, India",
    frequency: "Bi-Annual Scholarly Series",
    issnOrRecord: "LKA Ancient Series Nos 1-32",
    scopeAndFocus: "Masterpieces of ancient Indian sculpture, terracottas, early medieval metalwork, rock-cut monuments, and iconographic treatises.",
    significance: "The official national fine arts academy publication documenting premier antiquities in museum and field collections.",
    badgeColor: "amber",
    icon: "👑",
    totalVolumesPublished: 32,
    openAccessArchiveUrl: "https://lalitkala.gov.in/ancient-series"
  },
  {
    id: "intach_journal",
    name: "The INTACH Journal of Heritage Studies",
    shortCode: "IJHS",
    foundingYear: 2015,
    publisher: "Indian National Trust for Art and Cultural Heritage (INTACH)",
    foundersAndKeyEditors: ["Dr. C.T. Misra", "Prof. A.G.K. Menon", "Dr. Swapna Liddle"],
    headquarters: "New Delhi, India",
    frequency: "Bi-Annual Peer-Reviewed Journal",
    issnOrRecord: "ISSN 2347-2553",
    scopeAndFocus: "Architectural conservation, sacred water engineering (Stepwells/Baolis), historic urban landscapes, and vernacular craftsmanship.",
    significance: "Promoting conservation philosophy, legal frameworks, and community stewardship for built and intangible Indian heritage.",
    badgeColor: "emerald",
    icon: "🏰",
    totalVolumesPublished: 12,
    openAccessArchiveUrl: "https://intach.org/journal"
  }
];

export const HERITAGE_INDIA_MAGAZINE_CORPUS: HeritageMagazineIssue[] = [
  // 1. Heritage India Magazine - Saraswati River
  {
    id: "vol-12-issue-3-saraswati",
    publicationId: "heritage_india",
    magazineTitle: "Heritage India Magazine",
    volumeNumber: 12,
    issueNumber: 3,
    yearPublished: 2021,
    quarter: "Monsoon Special",
    title: "The Lost Saraswati: Subsurface Hydro-Archaeology & The Kalibangan-Rakhigarhi Axis",
    themeCategory: "Archaeological Excavations & Stratigraphy",
    coverImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "Investigating the paleochannels of the Vedic Saraswati River using ISRO Cartosat SAR imagery, isotopic hydrology, and Mound 7 excavations at Rakhigarhi to establish unbroken cultural continuity across 8,000 years.",
    editor: "Usha Sharma",
    publisher: "Heritage India Communications",
    issn: "ISSN 0974-6587",
    articles: [
      {
        id: "art-saraswati-paleochannel",
        title: "Tracing the Ghaggar-Hakra Paleochannel: Satellite Radar & Deep Core Stratigraphy",
        author: "Dr. K. S. Valdiya & Archaeological Survey of India",
        siteOrTopic: "Ghaggar-Hakra Basin (Kalibangan, Kunal, Bhirrana, Rakhigarhi)",
        coordinates: "29.2882° N, 76.1158° E",
        historicalEpoch: "Early Hakra to Mature Harappan (5500 BCE – 1900 BCE)",
        abstract: "Synthetic Aperture Radar (SAR) and isotopic tracing of relict groundwater demonstrate a glacier-fed perennial river originating in the Himalayas, matching Rigvedic descriptions of 'Giribhya a Samudrat'.",
        extractedFullContent: "Subsurface radar sounding along the dry Ghaggar riverbed in Haryana and Rajasthan revealed a continuous 3 to 10 km wide paleochannel filled with fine-grained Himalayan micaceous sands. AMS Radiocarbon dating of organic sediments from deep borehole cores at Kalibangan and Kunal confirms active perennial fluvial discharge prior to the seismic avulsion of the Sutlej towards the Indus and the Yamuna towards the Ganga basin around 1900 BCE.",
        keyArchaeologicalFindings: [
          "Identification of 3–10 km wide subsurface paleochannel with Himalayan quartz-mica strata",
          "Continuous Hakra (5500 BCE) to Mature Harappan stratigraphic sequence at Bhirrana & Kunal",
          "Sacrificial fire altars (Yajna Kundas) at Kalibangan oriented to cardinal solstices"
        ],
        epigraphicalDecipherment: {
          script: "Indus-Saraswati Glyphs (Pre-Brahmi Logographic)",
          textTransliteration: "Sign 48 (Fish/Matsya) + Sign 242 (Rimmed Jar/Kumbha) + Sign 342 (Chevron/Tree)",
          translation: "Designating the fluvial offering officer of the northern waterway embankment.",
          paleographicNotes: "Incised on steatite seal with retrograde sign sequence reading right-to-left."
        },
        sensorArchaeometryNotes: {
          methods: ["ISRO RISAT-1 C-band SAR", "400 MHz Subsurface GPR", "Isotopic Oxygen-18 Groundwater Hydrology"],
          instrumentalFindings: "Relict groundwater maintains negative δ18O signatures indicative of high-altitude Himalayan precipitation rather than local monsoon runoff."
        },
        scripturalParallels: "Rig Veda 7.95.2: 'Ekācetat Sarasvatī nadīnāṃ śucir yatī giribhya ā samudrāt' (Saraswati flows pure from the high mountains all the way to the ocean).",
        agenticDispatchSummary: {
          drSenFieldLead: "Stratigraphic cross-sections at Rakhigarhi Mound 7 confirm uninterrupted habitation layer without destructive conquest horizons.",
          acharyaVarahaAstro: "Heliacal rising of Ashwini star correlated with vernal equinox recorded during the peak Hakra hydrological phase (~4000 BCE).",
          profEpigraphicus: "The standardized 417-sign concordance demonstrates administrative continuity across 1,500 km of river settlements.",
          shilpaVidwanArt: "Standardized brick aspect ratios (1:2:4) adhere precisely to Shulba Sutra altar geometric proportions.",
          drShastriVedas: "Nadistuti Sukta (Rig Veda 10.75) lists rivers strictly from East to West: Ganga, Yamuna, Saraswati, Shutudri (Sutlej).",
          erMayaSensors: "GPR profiles reveal mud-brick residential grid foundations buried under 2.4 meters of alluvial silt."
        },
        tags: ["Saraswati", "Rakhigarhi", "Paleohydrology", "Rigveda", "GPR", "Hakra"]
      }
    ]
  },

  // 2. Marg Magazine - Ajanta Frescoes
  {
    id: "marg-vol-25-issue-2-ajanta",
    publicationId: "marg",
    magazineTitle: "Marg: A Magazine of the Arts",
    volumeNumber: 25,
    issueNumber: 2,
    yearPublished: 1972,
    quarter: "Monograph Special",
    title: "Ajanta Murals: Pigment Mineralogy, Lapis Lazuli & Mahayana Narrative Iconography",
    themeCategory: "Sculptural Masterpieces & Iconography",
    coverImage: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "A landmark Marg edition deciphering the organic mud plaster, imported Badakhshan lapis lazuli, and Vakataka court patronage of Cave 1 and Cave 17 murals.",
    editor: "Mulk Raj Anand & Walter Spink",
    publisher: "Marg Foundation, Mumbai",
    issn: "ISSN 0025-2913",
    articles: [
      {
        id: "art-marg-ajanta-pigments",
        title: "The Palette of the Bodhisattva: Micro-Spectroscopy of Padmapani at Cave 1",
        author: "Dr. Walter Spink & Karl Khandalavala",
        siteOrTopic: "Ajanta Caves, Cave 1 & 17 (Waghora Gorge, Maharashtra)",
        coordinates: "20.5519° N, 75.7033° E",
        historicalEpoch: "Vakataka Empire (Harishena's Reign, ~460–477 CE)",
        abstract: "Cross-sectional stratigraphy of the mural ground layer reveals a complex recipe of ferruginous clay, rice husk temper, and glue binders topped with cinnabar, malachite, and imported Badakhshan lapis lazuli.",
        extractedFullContent: "The master painters of Ajanta worked in torchlight using polished metal mirrors to reflect daylight deep into the rock-cut halls. Pigment analysis under Raman spectroscopy demonstrates that the celestial blue robes of the Bodhisattva Padmapani and the flying Gandharvas were painted exclusively with pure Afghan lapis lazuli, an expensive mineral imported across the Silk Road. The subtle shading (chiyaroscuro/Vartana) gives the two-dimensional wall an astonishing three-dimensional spiritual presence.",
        keyArchaeologicalFindings: [
          "Identification of 3-tiered plaster foundation: basalt roughing, clay-husk matrix, and fine lime slip",
          "Trace element confirmation of Badakhshan (Sar-e-Sang) provenance for lapis lazuli pigments",
          "Vakataka royal epigraphs on Cave 16 dedicating the shrine to the Buddhist Sangha"
        ],
        epigraphicalDecipherment: {
          script: "Vakataka Box-Headed Brahmi Script",
          textTransliteration: "Jayati jitaraja-satru-samgho... Varahadevena...",
          translation: "Victorious is the Sangha... Varahadeva, minister to King Harishena, caused this mountain dwelling to be excavated...",
          paleographicNotes: "Distinctive square box-headed serifs incised on the porch wall of Cave 16."
        },
        sensorArchaeometryNotes: {
          methods: ["Portable Raman Spectroscopy", "Multispectral Infrared Reflectography", "Scanning Electron Microscopy (SEM-EDX)"],
          instrumentalFindings: "SEM analysis reveals green pigment composed of celadonite and glauconite sourced locally from Deccan basalt vesicles."
        },
        scripturalParallels: "Vishnudharmottara Purana, Chitrasutra Section: 'Yatha chitre na nimnonnamam drishyate...' (As in painting where relief and depth are rendered through shading and light without physical carving).",
        agenticDispatchSummary: {
          drSenFieldLead: "Stratigraphy of the Waghora gorge reveals simultaneous excavation of Caves 1, 2, 16, and 17 during Harishena's 17-year golden age.",
          acharyaVarahaAstro: "Cave 19 Chaitya hall stupa receives direct illumination from the rising winter solstice sun through its sun-window facade.",
          profEpigraphicus: "Painter guild graffiti tags in cursive Brahmi document individual master artists from Vidarbha and Avanti.",
          shilpaVidwanArt: "The Tribhanga posture of Padmapani perfectly embodies the Natyashastric Bhavas of Karuna (compassion) and Shanta (peace).",
          drShastriVedas: "Iconographic themes mirror the Jataka tales (Mahajanaka, Vessantara) and the Saddharmapundarika (Lotus) Sutra.",
          erMayaSensors: "Infrared reflectography reveals preliminary red ochre under-drawings showing multiple artistic corrections before final painting."
        },
        tags: ["Ajanta", "Marg", "Murals", "Lapis Lazuli", "Vakataka", "Chitrasutra"]
      }
    ]
  },

  // 3. Puratattva Journal - Rakhigarhi Mound 7
  {
    id: "puratattva-vol-49-rakhigarhi",
    publicationId: "puratattva",
    magazineTitle: "Puratattva: Journal of the Indian Archaeological Society",
    volumeNumber: 49,
    issueNumber: 1,
    yearPublished: 2019,
    quarter: "Annual Excavation Issue",
    title: "Rakhigarhi Mound 7 Excavations: Ancient Craniofacial DNA, Steatite Seal Typology & 5500 BCE Continuity",
    themeCategory: "Archaeological Excavations & Stratigraphy",
    coverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "Comprehensive multidisciplinary excavation report on Rakhigarhi Mound 7 (Cemetery and Residential sectors) establishing unbroken genetic and material lineage from Early Hakra to Mature Harappan.",
    editor: "Prof. Vasant Shinde & Prof. B.B. Lal",
    publisher: "Indian Archaeological Society, New Delhi",
    issn: "ISSN 0970-2121",
    articles: [
      {
        id: "art-puratattva-rakhigarhi-dna",
        title: "An Ancient Harappan Genome from Rakhigarhi: Skeletal Cranio-Morphometry & Stratigraphic Context",
        author: "Prof. Vasant Shinde, Dr. Niraj Rai & David Reich",
        siteOrTopic: "Rakhigarhi Mound 7 (Hisar District, Haryana)",
        coordinates: "29.2847° N, 76.1322° E",
        historicalEpoch: "Mature Harappan (2600 BCE – 1900 BCE)",
        abstract: "Extraction of complete ancient nuclear DNA from petrous bone specimens of Skeleton I6113 at Mound 7 demonstrates absence of Steppe pastoralist ancestry, confirming indigenous lineage continuity in South Asia across 10,000 years.",
        extractedFullContent: "Mound 7 excavations at Rakhigarhi yielded 62 undisturbed burials within primary oval-pit interments oriented North-South. Grave goods comprised high-fired painted black-on-red ceramic jars, banded agate necklaces, and micro-steatite beads. Craniofacial reconstruction using high-resolution micro-CT scans revealed facial features consistent with contemporary populations of the northwestern subcontinent.",
        keyArchaeologicalFindings: [
          "Primary pit burials with North-South cranial orientation accompanied by 15-30 funerary vessels",
          "Successful extraction of endogenous ancient DNA (aDNA) with 0.8x genome coverage from petrous bone",
          "Multi-room courtyard architectural layouts with integrated terracotta drainage pipes"
        ],
        epigraphicalDecipherment: {
          script: "Indus-Saraswati Standard Glyphs",
          textTransliteration: "Sign 342 (Bough/Vriksha) + Sign 12 (Brahmani Bull) + Sign 99 (Intersecting Circles)",
          translation: "Royal seal of the metropolitan granary administrator and merchant warden.",
          paleographicNotes: "Intaglio carved on fired steatite button seal with perforated boss on reverse."
        },
        sensorArchaeometryNotes: {
          methods: ["Next-Generation Shotgun Sequencing (Illumina)", "Micro-CT Craniofacial Reconstruction", "Strontium (87Sr/86Sr) Dental Isotope Ratio"],
          instrumentalFindings: "Dental enamel strontium isotopic ratios confirm the buried individual was locally born and reared in the Ghaggar-Hakra alluvial plain."
        },
        scripturalParallels: "Atharva Veda 18.2.34 on burial and cremation rituals in pit chambers (Anagnidagdha and Agnidagdha).",
        agenticDispatchSummary: {
          drSenFieldLead: "Continuous stratigraphic levels from Early Hakra (5500 BCE) to Late Harappan (1800 BCE) without destruction or hiatus.",
          acharyaVarahaAstro: "Burial axes show precise alignment with the circumpolar north star Thuban (Alpha Draconis) during 2600 BCE.",
          profEpigraphicus: "The frequency of the Unicorn icon on Rakhigarhi seals indicates a unified administrative standard throughout the urban phase.",
          shilpaVidwanArt: "Carnelian beads exhibit microscopic laser-like diamond-tipped drill holes measuring less than 0.5 mm in diameter.",
          drShastriVedas: "Vedic concepts of pit-altar preparations mirror the geometric symmetry of the funerary chambers.",
          erMayaSensors: "GPR depth-slices at 500 MHz locate an unexcavated 250-meter long perimeter defensive wall beneath Mound 2."
        },
        tags: ["Puratattva", "Rakhigarhi", "Ancient DNA", "Harappan", "Bio-archaeology", "Strontium"]
      }
    ]
  },

  // 4. Ancient India (ASI) - Arikamedu Indo-Roman Port
  {
    id: "ancient-india-vol-2-arikamedu",
    publicationId: "ancient_india",
    magazineTitle: "Ancient India: Bulletin of the Archaeological Survey of India",
    volumeNumber: 2,
    issueNumber: 1,
    yearPublished: 1946,
    quarter: "Monograph Edition",
    title: "Arikamedu: An Indo-Roman Trading Station on the Coromandel Coast",
    themeCategory: "Maritime Trade & Port Metallurgy",
    coverImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "Sir Mortimer Wheeler's pioneering excavation of Podouke (Arikamedu) near Puducherry, providing the foundational chronological datum for Indian historic archaeology via Roman Arretine ware.",
    editor: "Sir Mortimer Wheeler & A. Ghosh",
    publisher: "Archaeological Survey of India, New Delhi",
    issn: "ASI Bulletin 1946-02",
    articles: [
      {
        id: "art-asi-arikamedu-wheeler",
        title: "Dating South Indian Archaeology: Arretine Ware, Amphorae & Roman Coinage at Arikamedu",
        author: "Sir Mortimer Wheeler, Krishna Deva & A. Ghosh",
        siteOrTopic: "Arikamedu / Podouke Port (Ariyankuppam River, Puducherry)",
        coordinates: "11.9022° N, 79.8178° E",
        historicalEpoch: "Early Historic Indo-Roman Trade Era (1st Century BCE – 2nd Century CE)",
        abstract: "Wheeler's stratigraphic excavations uncovered stratified Italian Arretine tableware (stamped by Arezzo potter VIBII), Mediterranean wine amphorae, and Tamil-Brahmi inscribed ceramics establishing absolute chronological benchmarks.",
        extractedFullContent: "Excavations on the right bank of the Ariyankuppam river lagoon revealed an industrial harbor warehouse with brick dyeing vats and deep timber pilings. The presence of red-glazed Roman Arretine ware dating between 20 BCE and 50 CE provided Indian archaeology with its first absolute chronological peg, fixing the dates of Rouletted Ware and associated Sangam age Tamil-Brahmi scripts.",
        keyArchaeologicalFindings: [
          "Imported Roman Arretine ware stamped with maker trademarks (VIBIE, CAMVRI)",
          "Over 100 diagnostic Mediterranean two-handled amphorae sherds containing dried wine and garum resin residues",
          "Extensive bead-manufacturing workshops processing glass, carnelian, and beryl for export across the Roman Empire"
        ],
        epigraphicalDecipherment: {
          script: "Early Tamil-Brahmi (Damili)",
          textTransliteration: "A-ma-na I-ra-sa-n...",
          translation: "Belonging to Amanan, the royal customs merchant...",
          paleographicNotes: "Scratched post-firing on the shoulder of an indigenous coarse grey-ware dish."
        },
        sensorArchaeometryNotes: {
          methods: ["Petrographic Ceramic Thin-Sectioning", "Gas Chromatography-Mass Spectrometry (GC-MS)", "Reflected Light Microscopy"],
          instrumentalFindings: "GC-MS analysis of amphora interior pitch coatings identified Mediterranean Pinus halepensis resin used to waterproof wine vessels."
        },
        scripturalParallels: "Periplus of the Erythraean Sea (Section 60) mentioning the market town of 'Podouke' and Sangam poetical references to Yavana wine vessels in Purananuru.",
        agenticDispatchSummary: {
          drSenFieldLead: "The northern warehouse sector features tidal sluice channels enabling sea-going vessels to load directly onto quays.",
          acharyaVarahaAstro: "The maritime monsoon sailing calendar coincides exactly with the Varahamihira seasonal wind shifts (Kala-prakasa).",
          profEpigraphicus: "The coexistence of Graeco-Roman graffiti and Tamil-Brahmi epigraphs marks Arikamedu as a bilingual cosmopolitan emporium.",
          shilpaVidwanArt: "Grooved collar beads and micro-glass beads match the export assemblages discovered in Roman Berenike on the Red Sea.",
          drShastriVedas: "Kautilya's Arthashastra Chapter on the Superintendent of Ports (Navadhyaksha) describes the tax rates on foreign Yavana shipping.",
          erMayaSensors: "Underwater bathymetric sonar indicates submerged harbor breakwaters extending 200 meters into the Coromandel shelf."
        },
        tags: ["Ancient India", "Arikamedu", "Mortimer Wheeler", "Roman Trade", "Amphorae", "Sangam"]
      }
    ]
  },

  // 5. Epigraphia Indica - Heliodorus Besnagar Pillar & Junagadh
  {
    id: "epigraphia-indica-vol-8-junagadh",
    publicationId: "epigraphia_indica",
    magazineTitle: "Epigraphia Indica",
    volumeNumber: 8,
    issueNumber: 1,
    yearPublished: 1905,
    quarter: "Scholarly Epigraphy Monograph",
    title: "The Junagadh Rock Inscription of Rudradaman: Classical Sanskrit & The Sudarshana Dam Engineering",
    themeCategory: "Epigraphy & Ancient Scripts",
    coverImage: "https://images.unsplash.com/photo-1600100397608-f010f4438317?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "Prof. F. Kielhorn's definitive decipherment and commentary on the 150 CE rock inscription of Western Kshatrapa ruler Rudradaman I at Junagadh, documenting 800 years of hydraulic dam history from Chandragupta Maurya to Skandagupta.",
    editor: "Prof. F. Kielhorn & James Burgess",
    publisher: "Archaeological Survey of India, Calcutta",
    issn: "ASI Epigraphia Indica Vol VIII",
    articles: [
      {
        id: "art-ei-junagadh-rudradaman",
        title: "The Sudarshana Lake Reservoir: Hydraulic Repair & Sanskrit Kavya Style in 150 CE",
        author: "Prof. F. Kielhorn & Dr. D. C. Sircar",
        siteOrTopic: "Junagadh Rock Inscription (Girnar Foothills, Gujarat)",
        coordinates: "21.5207° N, 70.4728° E",
        historicalEpoch: "Western Kshatrapa Dynasty (Saka Year 72 / 150 CE)",
        abstract: "The Junagadh rock edict represents the earliest major Sanskrit inscription in ornate classical Kavya prose, detailing the construction of the Sudarshana reservoir under Chandragupta Maurya, Ashoka's Yavana governor Tushaspha, and its breach repair by Rudradaman.",
        extractedFullContent: "When a catastrophic cyclonic storm breached the Suvarnasikata and Palasini river dams in 150 CE, emptying the great Sudarshana Lake, King Rudradaman rebuilt the stone embankment without imposing forced labor (Vishti) or extra taxes upon the citizens. The inscription spans 20 monumental lines displaying perfect mastery of Sanskrit grammar, Alaṅkāra rhetoric, and civil hydraulic engineering.",
        keyArchaeologicalFindings: [
          "Monolithic granite boulder bearing edicts of Ashoka (250 BCE), Rudradaman (150 CE), and Skandagupta (456 CE)",
          "Detailed engineering specifications for stone masonry spillways, conduits, and floodgate embankments",
          "Oldest epigraphical use of the high classical Sanskrit prose (Champu/Kavya) style"
        ],
        epigraphicalDecipherment: {
          script: "Western Kshatrapa Brahmi (Mature Kushana-Saka Period)",
          textTransliteration: "Siddham! Idam tat-Sudarsanam sarah... Mauryasya ragnaḥ Candraguptasya rashtriyena Vaisyena Pusyaguptena karitam...",
          translation: "Success! This lake Sudarshana was originally constructed by the provincial governor Vaishya Pushyagupta under King Chandragupta Maurya...",
          paleographicNotes: "Finely engraved with triangular nail-headed vertical strokes and elegant vowel flourishes."
        },
        sensorArchaeometryNotes: {
          methods: ["3D Reflectance Transformation Imaging (RTI)", "Granite Micro-erosion Laser Profilometry", "Digital Photogrammetric Mesh Extraction"],
          instrumentalFindings: "RTI lighting models reveal previously obscured conjunct consonants in lines 14-16 confirming the names of the engineering ministers."
        },
        scripturalParallels: "Kautilya's Arthashastra (Book 2, Chapter 1 on Setubandha - Dam and water reservoir construction law).",
        agenticDispatchSummary: {
          drSenFieldLead: "Field surveying of the Girnar valley identifies the relict masonry core of the 400-meter long earthen-stone barrage.",
          acharyaVarahaAstro: "The storm described in the text matches a severe pre-monsoon cyclonic landfall during the Margashirsha lunar month.",
          profEpigraphicus: "The inscription proves Sanskrit was used as the official language of high state diplomacy and administration centuries before the Guptas.",
          shilpaVidwanArt: "The boulder's placement at the entrance of the sacred Girnar pilgrimage path created a permanent civic and religious gateway.",
          drShastriVedas: "The moral virtues ascribed to Rudradaman reflect the ideal Dharmaraja code of the Mahabharata Shanti Parva.",
          erMayaSensors: "LiDAR digital elevation models reconstruct the water holding capacity of Lake Sudarshana at over 12 million cubic meters."
        },
        tags: ["Epigraphia Indica", "Junagadh", "Rudradaman", "Sanskrit", "Hydraulic Dam", "Maurya"]
      }
    ]
  },

  // 6. Man and Environment (ISPQS) - Attirampakkam 1.5 Million Year Lithics
  {
    id: "man-env-vol-35-attirampakkam",
    publicationId: "man_and_environment",
    magazineTitle: "Man and Environment",
    volumeNumber: 35,
    issueNumber: 1,
    yearPublished: 2011,
    quarter: "Quaternary Prehistory Issue",
    title: "Attirampakkam Acheulian Lithic Assemblages: Luminescence & Cosmic Ray Dating of 1.5 Million Year Old Handaxes",
    themeCategory: "Prehistoric & Quaternary Environment",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "Dr. Shanti Pappu's ground-breaking excavation at Attirampakkam in the Kortallayar basin, dating Indian Lower Paleolithic Acheulian handaxes to 1.51 million years ago using Cosmogenic Radionuclide burial dating (26Al/10Be).",
    editor: "Dr. Shanti Pappu & Prof. S.N. Rajaguru",
    publisher: "Indian Society for Prehistoric and Quaternary Studies (ISPQS), Pune",
    issn: "ISSN 0258-0446",
    articles: [
      {
        id: "art-me-attirampakkam-cosmogenic",
        title: "Early Pleistocene Acheulian Handaxes: 1.5 Million Year Stratigraphy in South Asia",
        author: "Dr. Shanti Pappu, Kumar Akhilesh & Yanni Gunnell",
        siteOrTopic: "Attirampakkam (Kortallayar River Basin, Tamil Nadu)",
        coordinates: "13.2324° N, 79.8821° E",
        historicalEpoch: "Early Pleistocene Lower Paleolithic (~1.51 to 1.07 Million Years BP)",
        abstract: "Aluminium-Beryllium (26Al/10Be) cosmogenic burial dating of quartzite Acheulian cleavers and handaxes at Attirampakkam demonstrates that hominin dispersal and advanced bifacial stone tool technology existed in South Asia 1.5 million years ago, contemporaneously with Africa.",
        extractedFullContent: "Attirampakkam is an open-air Paleolithic site located on a ferricrete terrace in the Kortallayar valley. Systematic excavations down to 9 meters depth uncovered thousands of symmetrical Acheulian handaxes, ovates, and cleavers manufactured from hard Satyavedu quartzite boulders. The transition from Early Acheulian to Middle Paleolithic Levallois prepared-core technology shows continuous indigenous innovation over one million years.",
        keyArchaeologicalFindings: [
          "Bifacial handaxes and cleavers in stratified Jurassic shale and ferricrete alluvial layers",
          "Absolute cosmogenic radionuclide burial date of 1.51 ± 0.14 million years for Layer 6 Acheulian horizon",
          "Abrupt emergence of Middle Paleolithic blade and Levallois points at 385,000 years BP"
        ],
        epigraphicalDecipherment: {
          script: "Pre-Epigraphic Lithic Knapping Flake Scar Concordance",
          textTransliteration: "Soft-hammer wood/antler percussion flake scars on bifacial quartzite core",
          translation: "Techno-morphological intent: High symmetry, invasive soft-hammer thinning, and refined convex cutting edge.",
          paleographicNotes: "Complete absence of text; lithic morphology represents early hominin cognitive spatial mastery."
        },
        sensorArchaeometryNotes: {
          methods: ["Accelerator Mass Spectrometry (AMS) 26Al/10Be Cosmogenic Dating", "Optically Stimulated Luminescence (OSL)", "Quartzite Petrographic Grain-Size Analysis"],
          instrumentalFindings: "Cosmogenic radionuclide decay ratios confirm quartz grains were shielded from cosmic ray exposure 1.5 million years ago upon fluvial burial."
        },
        scripturalParallels: "Puranic cosmological cycles (Kalpas and Yugas) describing primordial epochs of geological formation and early human emergence.",
        agenticDispatchSummary: {
          drSenFieldLead: "The undisturbed ferricrete sediment matrix confirms the handaxes are in primary depositional context rather than transported gravels.",
          acharyaVarahaAstro: "Quaternary glacial-interglacial cycles drove intense monsoon oscillations that governed hominin migration corridors across peninsular India.",
          profEpigraphicus: "The knapping scar patterns show standardized mental templates passed down through hundreds of generations of tool-makers.",
          shilpaVidwanArt: "The exquisite geometric bilateral symmetry of the Attirampakkam ovate handaxes demonstrates an innate sense of aesthetic proportion.",
          drShastriVedas: "Vedic hymns celebrate the earth's ancient stony crust (Prithvi Sukta in Atharva Veda 12.1: 'Girayas te parvata himavanto').",
          erMayaSensors: "3D structured-light optical scanning creates sub-millimeter volumetric models of the stone tool extraction angles."
        },
        tags: ["Man and Environment", "Attirampakkam", "Acheulian", "Lithics", "Cosmogenic Dating", "Paleolithic"]
      }
    ]
  },

  // 7. Journal of Indian Ocean Archaeology (JIOA) - Lothal Tidal Dockyard
  {
    id: "jioa-vol-14-lothal-dockyard",
    publicationId: "jioa",
    magazineTitle: "Journal of Indian Ocean Archaeology (JIOA)",
    volumeNumber: 14,
    issueNumber: 1,
    yearPublished: 2018,
    quarter: "Maritime Special",
    title: "Lothal Tidal Dockyard: Hydraulic Engineering, Sluice Gates & Bronze Age Maritime Trade with Dilmun & Mesopotamia",
    themeCategory: "Maritime Trade & Port Metallurgy",
    coverImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "New maritime archaeological investigation of the world's earliest known tidal dockyard at Lothal (2400 BCE), modeling tidal water-level physics, kiln-fired burnt brick salinity resistance, and Indus-Mesopotamian maritime routes.",
    editor: "Dr. Alok Tripathi & Dr. Sunil Gupta",
    publisher: "Indian Archaeological Society & Centre for Maritime Archaeology",
    issn: "ISSN 0974-1747",
    articles: [
      {
        id: "art-jioa-lothal-hydraulics",
        title: "The Kiln-Burnt Brick Basin of Lothal: Hydrodynamic Modeling of the 2400 BCE Tidal Sluice",
        author: "Dr. S. R. Rao & Marine Archaeology Unit",
        siteOrTopic: "Lothal Archaeological Port (Gulf of Khambhat, Gujarat)",
        coordinates: "22.5218° N, 72.2494° E",
        historicalEpoch: "Mature Harappan Maritime Phase (2400 BCE – 1900 BCE)",
        abstract: "Hydrodynamic simulation of the 214 x 36 meter kiln-burnt brick basin at Lothal proves it functioned as an engineered tidal dockyard capable of berthing 30 ships of 60 tonnes each, utilizing automatic wooden sluice gates to lock in high-tide water levels.",
        extractedFullContent: "Lothal was the premier manufacturing and international export port of the Indus Civilization. Located at the confluence of the Bhogavo and Sabarmati rivers leading into the Gulf of Khambhat, the port featured a massive trapezoidal basin lined with high-fired waterproof burnt bricks. Excavated artifacts include a Persian Gulf circular steatite button seal, copper ingots, and standard Harappan cubical chert weights matching the Mesopotamian Dilmun standard.",
        keyArchaeologicalFindings: [
          "214 x 36 meter burnt-brick tidal basin with spillway channel and wooden vertical sluice gate slots",
          "Bead factory with circular terracotta kilns processing millions of micro-steatite and carnelian beads",
          "Persian Gulf seal with two facing gazelles verifying direct maritime trade with Bahrain (Dilmun) and Ur (Mesopotamia)"
        ],
        epigraphicalDecipherment: {
          script: "Indus-Saraswati Script & Mesopotamian Cuneiform Parallel",
          textTransliteration: "Indus Seal: Horned Bull + Linear Chevron Signs; Cuneiform Text: 'Meluhha' (Land of the Carnelian & Lapis)",
          translation: "Merchant identification seal of the overseas trading guild of Meluhha.",
          paleographicNotes: "Intaglio carved on fine white steatite with glazed alkaline coating."
        },
        sensorArchaeometryNotes: {
          methods: ["Computational Fluid Dynamics (CFD) Tidal Wave Simulation", "Lead Isotope Ratio Analysis (LIA) of Copper Ingots", "Petrological Thin-Sectioning of Brick Clays"],
          instrumentalFindings: "LIA isotopic signatures of Lothal bun-shaped copper ingots match the geological ores of Oman (Magan) and Rajasthan Khetri belt."
        },
        scripturalParallels: "Rig Veda 1.116.3-5 describing the twin Ashwins rescuing Bhujyu from the deep ocean using a 100-oared ship (Nau Shataritram).",
        agenticDispatchSummary: {
          drSenFieldLead: "The high-density acropolis and lower town layout demonstrates zoned urban segregation between master bead craftsmen and administrative overseers.",
          acharyaVarahaAstro: "Ship departures from the Gulf of Khambhat were timed precisely with the Southwest summer monsoon winds (Varuna Vayu).",
          profEpigraphicus: "The presence of seal impressions (clay sealings) on terracotta jar stoppers proves standard commercial bill-of-lading practices.",
          shilpaVidwanArt: "The micro-carved ivory scale found at Lothal features decimal divisions with graduations as small as 1.7 mm.",
          drShastriVedas: "Sacrificial brick fire altars containing terracotta cakes and bovine bone ashes found on the acropolis match Vedic Shrauta altars.",
          erMayaSensors: "Bathymetric paleochannel reconstructions trace the ancient course of the Bhogavo river directly connecting the dock inlet to the open sea."
        },
        tags: ["JIOA", "Lothal", "Maritime Port", "Tidal Dockyard", "Dilmun", "Harappan"]
      }
    ]
  },

  // 8. Rupam Journal - Gandhara vs Mathura Aesthetics
  {
    id: "rupam-vol-18-gandhara-mathura",
    publicationId: "rupam",
    magazineTitle: "Rupam: An Illustrated Journal of Oriental & Indian Art",
    volumeNumber: 18,
    issueNumber: 2,
    yearPublished: 1924,
    quarter: "Quarterly Review",
    title: "The Aesthetics of Gandhara and Mathura: The Origin of the Buddha Image",
    themeCategory: "Sculptural Masterpieces & Iconography",
    coverImage: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "Ordhendra Coomar Gangoly and Ananda Coomaraswamy's masterly comparative aesthetic study in Rupam debating the indigenous Yaksha roots of Mathura vs the Hellenistic Apollo drapery of Gandhara.",
    editor: "Ordhendra Coomar Gangoly (O.C. Gangoly)",
    publisher: "Indian Society of Oriental Art, Calcutta",
    issn: "ISOA Rupam Archive No 18",
    articles: [
      {
        id: "art-rupam-buddha-origin",
        title: "The Origin of the Buddha Image: Indigenous Mathura Iconography vs Hellenistic Syncretism",
        author: "Ordhendra Coomar Gangoly & Ananda K. Coomaraswamy",
        siteOrTopic: "Mathura (Katra Keshavdev) & Gandhara (Taxila / Peshawar)",
        coordinates: "27.4924° N, 77.6737° E",
        historicalEpoch: "Kushana Dynasty (Kanishka I, 1st – 2nd Century CE)",
        abstract: "Examining red spotted sandstone sculptures from Mathura and grey schist statues from Gandhara to prove that the seated meditative Buddha image derived directly from ancient Indian Yaksha and Dhyana-yoga traditions rather than Greek Apollo models.",
        extractedFullContent: "The question of the origin of the anthropomorphic Buddha image is one of the most celebrated debates in Asian art history. In this Rupam monograph, O.C. Gangoly demonstrates that while Gandharan art clothed the Master in Roman toga drapery, the spiritual essence, the Padmasana cross-legged posture, the cranial protuberance (Ushnisha), the Urna tuft, and the webbed fingers (Jala-angula) arose organically from the 32 Mahapurusha Lakshana canon of ancient India.",
        keyArchaeologicalFindings: [
          "Spotted Sikri red sandstone Bodhisattva statues dedicated by Friar Bala in Year 3 of Kanishka",
          "Kanishka gold reliquary casket from Shah-ji-ki-Dheri showing Greek, Persian, and Indian decorative motifs",
          "Identification of early Yaksha colossal statues at Parkham as the stylistic prototype for Mathura Buddhas"
        ],
        epigraphicalDecipherment: {
          script: "Kushana Brahmi & Kharosthi Inscriptions",
          textTransliteration: "Maharajasya Rajatirajasya Devaputrasya Kanishkasya Samvatsare...",
          translation: "In the regnal year of the Great King, King of Kings, Son of Heaven, Kanishka...",
          paleographicNotes: "Incised on the pedestal of the Katra seated Buddha image."
        },
        sensorArchaeometryNotes: {
          methods: ["Petrographic Sandstone Provenance Analysis", "3D Volumetric Contour Mapping", "UV Induced Visible Fluorescence"],
          instrumentalFindings: "Mineralogical thin sections trace Mathura red sandstone exclusively to the Rupbas quarries near Bharatpur."
        },
        scripturalParallels: "Lalitavistara Sutra & Brihat Samhita Chapter 58 (Pratima Lakshana - Iconographic canons of divine proportions).",
        agenticDispatchSummary: {
          drSenFieldLead: "Stratigraphy at Kankali Tila and Sonkh verifies continuous terracotta manufacturing layers from Sunga to Kushana periods.",
          acharyaVarahaAstro: "The circular halo (Prabhamandala) behind the Buddha's head symbolizes the radiating solar orb of Dharma.",
          profEpigraphicus: "Bilingual Kharosthi-Brahmi coin legends of Kanishka reflect royal patron policies embracing diverse linguistic groups.",
          shilpaVidwanArt: "The energetic expansive chest (Prana) in Mathura sculpture represents the internal breath retention of Yogic meditation.",
          drShastriVedas: "The 32 physical marks of the Great Being (Mahapurusha) are rooted in Rigvedic descriptions of the cosmic Purusha.",
          erMayaSensors: "Multi-angle photogrammetry reveals the exact golden ratio (1.618) embedded in the facial geometry of the Sarnath seated Buddha."
        },
        tags: ["Rupam", "Gandhara", "Mathura", "Buddha Image", "Coomaraswamy", "Kushana"]
      }
    ]
  },

  // 9. Lalit Kala (Ancient) - Ahichchhatra Terracotta Masterpieces
  {
    id: "lalit-kala-vol-12-ahichchhatra",
    publicationId: "lalit_kala_ancient",
    magazineTitle: "Lalit Kala (Ancient): Indian Art Journal",
    volumeNumber: 12,
    issueNumber: 1,
    yearPublished: 1965,
    quarter: "Classical Sculptures Edition",
    title: "The Masterpiece Terracottas of Ahichchhatra: Ganga-Yamuna Life-Sized Plaques & Gupta Sculptural Zenith",
    themeCategory: "Sculptural Masterpieces & Iconography",
    coverImage: "https://images.unsplash.com/photo-1600100397608-f010f4438317?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "Dr. V. S. Agrawala's seminal scholarly study on the colossal Gupta period terracotta river goddess panels and Shiva temple plaques excavated from the tiered brick temple of Ahichchhatra.",
    editor: "Karl Khandalavala & Dr. V.S. Agrawala",
    publisher: "Lalit Kala Akademi, New Delhi",
    issn: "Lalit Kala Ancient Series No 12",
    articles: [
      {
        id: "art-lka-ahichchhatra-terracotta",
        title: "Monumental Terracotta Panels: The Ganga and Yamuna Statues of the Ahichchhatra Shiva Temple",
        author: "Dr. V. S. Agrawala & Karl Khandalavala",
        siteOrTopic: "Ahichchhatra (Bareilly District, Uttar Pradesh)",
        coordinates: "28.3719° N, 79.1231° E",
        historicalEpoch: "Imperial Gupta Dynasty (5th Century CE)",
        abstract: "The near life-sized terracotta images of river goddesses Ganga (standing on Makara) and Yamuna (standing on Kurma) flanking the upper terrace of the Ahichchhatra temple represent the absolute summit of clay sculpture in world art history.",
        extractedFullContent: "Excavations at the colossal tiered brick temple (Mound AC-I) at Ahichchhatra revealed high-fired terracotta relief friezes of exceptional artistic refinement. The life-sized Ganga and Yamuna panels, standing over 5 feet high, were molded in sections from local Gangetic clay mixed with fine organic temper, hollow-cast, and fired in large muffled kilns before being assembled on the temple facade.",
        keyArchaeologicalFindings: [
          "Life-sized 5.5-foot hollow-cast terracotta sculptures of Ganga and Yamuna with attendant umbrella bearers",
          "Over 50 narrative terracotta plaques illustrating Shiva-Parvati legends (Dakshina-murti, Kiratarjuniya)",
          "Tiered brick temple structure (Mound AC-I) rising 75 feet in three monumental terraced stages"
        ],
        epigraphicalDecipherment: {
          script: "Imperial Gupta Brahmi Script",
          textTransliteration: "Bhattaraka Sri Kumaraguptasya rajya-samvatsare...",
          translation: "In the reign of the royal master, the illustrious Kumaragupta...",
          paleographicNotes: "Inscribed on votive clay sealings and commemorative bricks recovered from the temple plinth."
        },
        sensorArchaeometryNotes: {
          methods: ["Thermoluminescence (TL) Dating of Terracottas", "X-ray Radiographic Hollow-Core Inspection", "Firing Temperature Pyrometry"],
          instrumentalFindings: "Mineral phase analysis confirms a controlled kiln firing temperature of 850°C–900°C preventing thermal shock and cracking in large clay volumes."
        },
        scripturalParallels: "Kalidasa's Kumarasambhava (Canto 7, Verse 42) describing Ganga and Yamuna with celestial yak-tail whisks attending the marriage of Shiva and Parvati.",
        agenticDispatchSummary: {
          drSenFieldLead: "The AC-I temple represents the missing architectural link between early circular Mauryan brick shrines and medieval Nagara stone temples.",
          acharyaVarahaAstro: "The temple's three terraced tiers correspond to the three cosmic worlds (Bhurloka, Bhuvarloka, Svarloka) oriented to cardinal east.",
          profEpigraphicus: "The terracotta sealing legends show Ahichchhatra was the ancient capital of North Panchala mentioned in the Mahabharata.",
          shilpaVidwanArt: "The rhythmic curvilinear drapery and sensuous modelling of the river goddesses reflect the high classical Gupta aesthetic.",
          drShastriVedas: "The confluence of Ganga and Yamuna represents the holy Prayaga sacred bath transforming the temple doorway into an entrance to heaven.",
          erMayaSensors: "Industrial X-ray CT scans reveal internal clay armature struts that supported the heavy hollow limbs during kiln drying."
        },
        tags: ["Lalit Kala", "Ahichchhatra", "Terracotta", "Gupta", "Ganga Yamuna", "Shiva Temple"]
      }
    ]
  },

  // 10. INTACH Journal - Historic Water Stepwells & Baolis
  {
    id: "intach-vol-6-stepwells",
    publicationId: "intach_journal",
    magazineTitle: "The INTACH Journal of Heritage Studies",
    volumeNumber: 6,
    issueNumber: 1,
    yearPublished: 2020,
    quarter: "Heritage Conservation Special",
    title: "Sacred Hydraulics & Living Subterranean Architecture: The Vavs & Baolis of Gujarat & Rajasthan",
    themeCategory: "Living Traditions & Sacred Sciences",
    coverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
    editorialSummary: "Architectural, hydro-geological, and conservation monograph on Rani ki Vav (Patan), Adalaj, and Chand Baori (Abhaneri), analyzing multi-tier passive cooling, earthquake-resistant stone frames, and community water heritage.",
    editor: "Prof. A.G.K. Menon & Dr. Swapna Liddle",
    publisher: "Indian National Trust for Art and Cultural Heritage (INTACH)",
    issn: "ISSN 2347-2553",
    articles: [
      {
        id: "art-intach-rani-ki-vav-hydraulics",
        title: "Rani ki Vav: Seven Terraces of Subterranean Vishnu Iconography & Geothermal Cooling",
        author: "Dr. Kirit Mankodi & INTACH Architectural Heritage Division",
        siteOrTopic: "Rani ki Vav (Patan, Gujarat) & Chand Baori (Abhaneri)",
        coordinates: "23.8589° N, 72.1017° E",
        historicalEpoch: "Chaulukya / Solanki Dynasty (1063 CE, Queen Udayamati)",
        abstract: "Constructed as an inverted subterranean temple descending 28 meters across seven pillared pavilions, Rani ki Vav integrates 800 high-relief sculptures of the Dashavatara with passive geothermal cooling and seasonal water-table replenishment.",
        extractedFullContent: "Rani ki Vav is an extraordinary inverted monument designed to venerate sacred water. As the visitor descends through the seven stepped tiers, the temperature drops by 6°C to 8°C through earth-sheltered micro-climatic thermal inertia. Over 500 principal sculptures and 1,000 minor panels celebrate Lord Vishnu in his cosmic Sheshashayi slumber on the subterranean water surface, transforming utilitarian water storage into an architectural pilgrimage sanctuary.",
        keyArchaeologicalFindings: [
          "Seven-storey stepped corridor descending 64 meters in length and 20 meters in width into the water table",
          "Over 800 principal sculptures preserved under silt deposits following the 13th century avulsion of the Saraswati River",
          "Interlocking pillared trabeated stone frames with cantilevers engineered to withstand lateral earth pressure"
        ],
        epigraphicalDecipherment: {
          script: "Devanagari / Western Indian Nagari Script",
          textTransliteration: "Prabandha Chintamani reference: Sri Bhimadevasya mahishi Udayamati nama...",
          translation: "Queen Udayamati, the royal consort of King Bhimadeva I, caused this magnificent stepwell (Vav) to be built at Anahilapataka...",
          paleographicNotes: "Recorded in the 1304 CE historical chronicle Prabandha Chintamani of Merutunga."
        },
        sensorArchaeometryNotes: {
          methods: ["Terrestrial 3D LiDAR Scanning", "Thermal Infrared Camera Mapping", "Subsurface Hydro-geological Piezometry"],
          instrumentalFindings: "Thermal infrared imaging confirms continuous 7.2°C temperature reduction between the ground surface and the fourth subterranean terrace."
        },
        scripturalParallels: "Aparajitaprichchha & Vastu Vidya treatises detailing the four canonical architectural types of stepwells: Nanda, Bhadra, Jaya, and Vijaya.",
        agenticDispatchSummary: {
          drSenFieldLead: "The deep alluvium silt layer from the relict Saraswati river acted as an anaerobic preservative protecting the sandstone carvings for 700 years.",
          acharyaVarahaAstro: "The central axis of the stepped descent aligns with the sunset on the winter solstice, casting light across the lowest Sheshashayi panel.",
          profEpigraphicus: "Mason marks (guild badges) incised on the column bases document the artisan cooperative of the Patan Sompura community.",
          shilpaVidwanArt: "The carving of the 24 forms of Vishnu (Chaturvimshati Murti) displays razor-sharp jewelry undercutting and fluid grace.",
          drShastriVedas: "The consecration of public water tanks (Vapi-Kupa-Tadaga) is hailed in the Puranas as the highest merit (Purtadharma).",
          erMayaSensors: "Stress-strain finite element analysis shows the multi-tiered trabeated stone grid distributes soil thrust with a safety factor of 2.8."
        },
        tags: ["INTACH", "Rani ki Vav", "Stepwell", "Hydraulics", "Thermal Cooling", "Solanki"]
      }
    ]
  }
];

export const THEME_CATEGORIES = [
  "All Themes",
  "Archaeological Excavations & Stratigraphy",
  "Epigraphy & Ancient Scripts",
  "Temple Architecture & Archaeo-Acoustics",
  "Maritime Trade & Port Metallurgy",
  "Archaeo-Astronomy & Sacred Geography",
  "Living Traditions & Sacred Sciences",
  "Sculptural Masterpieces & Iconography",
  "Prehistoric & Quaternary Environment"
] as const;
