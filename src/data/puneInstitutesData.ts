import { PuneInstitution, AcademicProgram, CourseSyllabus } from "../types";

export const PUNE_IKS_INSTITUTIONS: PuneInstitution[] = [
  // =========================================================================
  // 1. BHISHMA SCHOOL OF INDIAN KNOWLEDGE SYSTEMS (BSIKS)
  // =========================================================================
  {
    id: "bsiks",
    name: "Bhishma School of Indian Knowledge Systems (BSIKS)",
    shortName: "Bhishma School of IKS",
    tagline: "Pioneer Independent Academy for Master's in IKS, Hindu Studies & Ancient Indian Architecture",
    establishedYear: 2014,
    category: "Independent IKS Academy",
    location: {
      address: "1533/A, Pulachi Wadi, Near Deccan Gymkhana, Off Karve Road",
      area: "Deccan Gymkhana",
      pincode: "411004",
      city: "Pune, Maharashtra, India",
      coordinates: { lat: 18.5167, lng: 73.8415 }
    },
    overview: "Bhishma School of Indian Knowledge Systems (BSIKS) is a premier autonomous research and educational academy headquartered in Deccan Gymkhana, Pune. Established to bridge traditional Indic paramparas with modern scholarly rigor, BSIKS offers an accredited Master's degree in Indian Knowledge Systems (MIKS) in academic collaboration with the Central Sanskrit University (CSU, New Delhi). BSIKS is renowned for its immersive curriculum covering 64 traditional Kalas, Vastu Vidya, Vedic Epistemology, Shilpa Shastra, and Puranic historiography.",
    accreditationAndAffiliation: [
      "Academic Collaboration & Program Recognition by Central Sanskrit University (CSU, New Delhi)",
      "Aligned with Ministry of Education (MoE) IKS Division Guidelines & NEP 2020",
      "Registered Autonomous Academic Society under Indian Societies Act"
    ],
    nep2020StandardsCompliance: {
      interdisciplinaryIntegration: "Synthesizes Sanskrit source texts with applied architecture, epistemology, cosmology, and civilizational history.",
      creditTransferABC: "Integrated with Academic Bank of Credits (ABC) through Central Sanskrit University framework.",
      multilingualAndSourceTexts: "Bilingual instruction (English/Marathi/Hindi) with direct textual study from original Sanskrit treatises with Padapatha and Bhashyas.",
      experientialLearningAndFieldwork: "Mandatory temple architectural surveying, iconography documentation, and manuscript transcription fieldwork."
    },
    keyFacilitiesAndTreasures: [
      "Bhishma Indological Reference Library with over 15,000 Indic research titles",
      "Traditional Vastu & Shilpa Shastra Studio for scale-drawing & geometric analysis",
      "Manuscriptology & Epigraphy Lab for palm-leaf curation and Brahmi/Devanagari decipherment",
      "Audio-Visual Studio for oral recitation and Chhandashastra metrics analysis"
    ],
    leadFacultyOrScholars: [
      {
        name: "Dr. Kshitija Gholap",
        designation: "Dean & Academic Director",
        specialization: "Indian Knowledge Systems, Ancient Indian Polity & Epistemology"
      },
      {
        name: "Prof. Vinayak Kulkarni",
        designation: "Senior Professor of Vastu & Shilpa Shastra",
        specialization: "Temple Architecture, Mayamata & Manasara Canonical Canons"
      },
      {
        name: "Dr. Anuradha Deshmukh",
        designation: "Head of Sanskrit & Manuscriptology",
        specialization: "Vedic Exegesis, Puranic Chronology & Paleography"
      }
    ],
    uniqueInstitutionalStrengths: [
      "First dedicated standalone Master's in Indian Knowledge Systems (MIKS) in Western India",
      "Rigorous emphasis on traditional Indian Temple Architecture (Nagara, Dravida, Vesara, Hemadpanthi)",
      "Weekend and hybrid flexible modules designed for working scholars, architects, and historians",
      "Direct Sanskrit textual engagement avoiding post-colonial secondary distortions"
    ],
    officialWebsiteUrl: "https://www.bhishmaiks.org/",
    programs: [
      {
        programId: "bsiks-miks",
        title: "Master of Arts in Indian Knowledge Systems (M.A. / MIKS)",
        level: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
        duration: "2 Years (4 Semesters)",
        totalCredits: 80,
        recognitionOrAffiliation: "Recognized / Jointly awarded with Central Sanskrit University (CSU, Delhi)",
        nepComplianceSummary: "Follows NEP 2020 Choice Based Credit System (CBCS) with 4 Semesters of 20 Credits each, including Core Theory, Electives, Field Practicum, and a final Master's Dissertation.",
        eligibility: "Bachelor's Degree in any discipline from a recognized University with foundational interest in Indic disciplines.",
        targetAudience: "Architects, historians, civil service aspirants, Indology researchers, educators, and cultural heritage managers.",
        programObjectives: [
          "Impart comprehensive mastery over the 14 Vidyasthanas (4 Vedas, 6 Vedangas, Purana, Nyaya, Mimamsa, Dharmashastra).",
          "Develop rigorous hermeneutical competence to interpret Sanskrit source treatises on sciences, governance, and arts.",
          "Provide applied field training in Vastu, temple iconometry, ancient water harvesting, and epigraphy.",
          "Train scholars in contemporary research methodologies aligned with international academic standards."
        ],
        curriculumStructure: [
          {
            semesterOrYear: "Semester I",
            semesterTitle: "Foundational Epistemology, Vedas & Indic Worldview",
            credits: 20,
            courses: [
              {
                courseCode: "BSIKS-101",
                courseTitle: "Pramana Shastra & Foundational Indic Epistemology",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 15, practicalOrField: 0 },
                domain: "Vedic Sciences & Epistemology",
                semesterOrTerm: "Semester I",
                courseOverview: "Systematic investigation into the means of valid knowledge (Pramanas) across the Shad Darshanas (Nyaya, Vaisheshika, Sankhya, Yoga, Mimamsa, Vedanta) and heterodox traditions (Bauddha, Jaina, Charvaka). Focuses on Pratyaksha (perception), Anumana (inference), Upamana (analogy), and Shabda (verbal testimony) as rigorous scientific tools of discovery.",
                learningOutcomes: [
                  "Critically distinguish the 6 classical Pramanas and their epistemological validity criteria.",
                  "Apply Nyaya 5-membered syllogism (Pancha Avayava) to logical argumentation and modern research verification.",
                  "Analyze the doctrine of causation (Satkaryavada vs Asatkaryavada vs Vivartavada)."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Nature of Knowledge (Jnana) & The 6 Pramanas",
                    durationHours: 15,
                    description: "Definition of Prama (valid knowledge), Aprama (invalid cognition), and the epistemological taxonomies of Nyaya-Vaisheshika and Purva-Mimamsa.",
                    keyTopics: ["Prama Lakshana", "Pratyaksha Sannikarsha (6-fold perceptual contact)", "Hetvabhasa (logical fallacies)", "Shabda Pramana & Aptavakya"],
                    canonicalSourceTexts: ["Tarkasangraha with Dipika of Annambhatta", "Nyaya Sutras of Aksapada Gautama (Adhyaya 1)", "Manameyodaya of Narayana Bhatta"]
                  },
                  {
                    unitNumber: 2,
                    title: "Sankhya-Yoga Metaphysics & Cognitive Psychology",
                    durationHours: 15,
                    description: "Prakriti-Purusha dualism, 24 Tattvas, Guna theory, Antahkarana (Manas, Buddhi, Ahamkara, Chitta), and the cognitive stages of Samadhi.",
                    keyTopics: ["Sankhya Tattva Samasa", "Triguna dynamics in cognition", "Chitta Vritti Nirodha", "Kleshas & cognitive bias eradication"],
                    canonicalSourceTexts: ["Sankhya Karika of Ishvarakrishna", "Patanjala Yoga Sutras (Samadhi & Sadhana Padas)"]
                  },
                  {
                    unitNumber: 3,
                    title: "Mimamsa Hermeneutics & Textual Interpretation",
                    durationHours: 15,
                    description: "Rules of Vedic exegesis, sentence construction (Vakyartha), Bhavana, and the 6 principles of textual hermeneutics (Upakrama-Upasamhara, Abhyasa, Apurvata, Phala, Arthavada, Upapatti).",
                    keyTopics: ["Shad-lingas of textual analysis", "Vidhi, Nishedha, and Arthavada", "Bhatta vs Prabhakara schools of meaning"],
                    canonicalSourceTexts: ["Mimamsa Nyaya Prakasha of Apadeva", "Arthasangraha of Laugakshi Bhaskara"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "Annambhatta: Tarkasangraha with Tarkadipika (Ed. Satkari Mukhopadhyaya)",
                  "Ishvarakrishna: Sankhyakarika with Gaudapada Bhashya",
                  "Laugakshi Bhaskara: Arthasangraha (Ed. G. Thibaut)"
                ],
                referenceScholarlyWorks: [
                  "B.K. Matilal: The Character of Logic in India (SUNY Press)",
                  "Surendranath Dasgupta: A History of Indian Philosophy (Vol. 1)",
                  "J.N. Mohanty: Reason and Tradition in Indian Thought (Oxford University Press)"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 60,
                  practicalOrProjectPercent: 0,
                  criteria: ["Term Paper on Nyaya Syllogism vs Aristotelian Logic", "Mid-term Written Exam", "Sanskrit Textual Translation Viva"]
                }
              },
              {
                courseCode: "BSIKS-102",
                courseTitle: "Vedic Literature, Vedangas & Oral Transmission Physics",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 15, practicalOrField: 0 },
                domain: "Vedic Sciences & Epistemology",
                semesterOrTerm: "Semester I",
                courseOverview: "In-depth study of the Samhitas, Brahmanas, Aranyakas, and Upanishads, paired with the 6 Vedangas (Shiksha, Kalpa, Vyakarana, Nirukta, Chhandas, Jyotisha). Analyzes the mathematical permutation techniques of Vedic oral preservation (Samhita, Pada, Krama, Jata, Ghana pathas).",
                learningOutcomes: [
                  "Understand the structural taxonomy of the four Vedas and their Shakhas.",
                  "Master the 8 modified pathas of Vedic oral mnemonics and error-correction physics.",
                  "Examine the phonetics of Paniniya Shiksha and the semantic etymology of Yaska's Nirukta."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Vedic Corpus & Shakha Transmission",
                    durationHours: 15,
                    description: "Structure of Rig, Yajur, Sama, and Atharva Vedas; key Suktas (Nasadiya, Purusha, Sri, Prithvi Sukta).",
                    keyTopics: ["Veda Trayi & Atharva Veda", "Samhita-Brahmana-Aranyaka-Upanishad continuum", "Mahavakyas in Chandogya & Brihadaranyaka"],
                    canonicalSourceTexts: ["Rigveda Samhita", "Taittiriya Brahmana", "Chandogya Upanishad"]
                  },
                  {
                    unitNumber: 2,
                    title: "The Six Vedangas (Auxiliary Sciences)",
                    durationHours: 15,
                    description: "Phonetics (Shiksha), Ritual Geometry (Kalpa/Sulba), Grammar (Vyakarana), Etymology (Nirukta), Prosody (Chhandas), and Timekeeping (Jyotisha).",
                    keyTopics: ["Uccarana Sthana & Karana", "Sulba Sutra geometries", "Nirukta's 4 parts of speech (Nama, Akhyata, Upasarga, Nipata)"],
                    canonicalSourceTexts: ["Paniniya Shiksha", "Yaska's Nirukta (Nighantu Adhyaya 1)", "Pingala Chhandas Sutras"]
                  },
                  {
                    unitNumber: 3,
                    title: "Vikriti Pathas & Algorithmic Mnemonic Protection",
                    durationHours: 15,
                    description: "Mathematical structures of Krama, Jata, Shikha, Rekha, Dhvaja, Danda, Ratha, and Ghana pathas as cryptographic error-checking systems.",
                    keyTopics: ["Permutational algorithms of Ghana Patha", "Acoustic preservation over 3,500+ years", "UNESCO Intangible Cultural Heritage recognition"],
                    canonicalSourceTexts: ["Rigveda Pratishakhya of Shaunaka", "Krama Deepika"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "Yaska: The Nighantu and the Nirukta (Ed. Lakshman Sarup)",
                  "Shaunaka: Rigveda Pratishakhya",
                  "Swami Dayananda Saraswati: Rigvedadibhashyabhumika"
                ],
                referenceScholarlyWorks: [
                  "Maurice Winternitz: A History of Indian Literature (Vol. 1)",
                  "Frits Staal: Discovering the Vedas: Origins, Mantras, Rituals, Insights",
                  "Subhash Kak: The Astronomical Code of the Rigveda"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 60,
                  practicalOrProjectPercent: 0,
                  criteria: ["Vedic Chhandas Metrical Analysis Assignment", "Oral Chanting & Phonetic Lab Viva", "End-Sem Theory Exam"]
                }
              },
              {
                courseCode: "BSIKS-103",
                courseTitle: "Ancient Indian Architecture, Vastu Vidya & Town Planning",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 30, tutorial: 15, practicalOrField: 30 },
                domain: "Ancient Indian Architecture & Vastu",
                semesterOrTerm: "Semester I",
                courseOverview: "Exploration of canonical Vastu Shastra texts (Mayamata, Manasara, Brihat Samhita, Samarangana Sutradhara). Covers the Vastu Purusha Mandala (64-pada and 81-pada grids), solar orientation, directional energy gradients, Ayadi Shadvarga mathematical formulas, and civil settlement planning.",
                learningOutcomes: [
                  "Construct and calculate the 81-pada Paramashayika and 64-pada Manduka Vastu Purusha Mandalas.",
                  "Apply Ayadi calculations (Aya, Vyaya, Yoni, Rashi, Vara, Tithi) for dimensional harmony.",
                  "Analyze town planning layouts from Kautilya's Arthashastra and Manasara (Dandaka, Padmaka, Sarvatobhadra, Prastara)."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Principles of Vastu Purusha Mandala & Orientation",
                    durationHours: 15,
                    description: "Cosmological origins, Brahmastana, 45 Devatas of the grid, solar path alignment, and geopathic sensitivity.",
                    keyTopics: ["Manduka vs Paramashayika grid", "Prana and Jaivika energy flows", "Cardinal & ordinal directional zoning (Isanya, Agneya, Nairutya, Vayavya)"],
                    canonicalSourceTexts: ["Mayamata (Adhyayas 1-7)", "Brihat Samhita of Varahamihira (Vastuvidya Adhyaya 53)"]
                  },
                  {
                    unitNumber: 2,
                    title: "Ayadi Shadvarga & Mathematical Proportions",
                    durationHours: 15,
                    description: "The 6 mathematical formulas used to test auspicious dimensions, perimeter perimeter resonances, and dimensional scaling.",
                    keyTopics: ["Aya (Gain) and Vyaya (Expenditure)", "Yoni (Directional orientation)", "Hasta and Angula dimensional units"],
                    canonicalSourceTexts: ["Samarangana Sutradhara of Raja Bhoja", "Manasara (Chapters 9-11)"]
                  },
                  {
                    unitNumber: 3,
                    title: "Settlement Planning & Civic Architecture",
                    durationHours: 15,
                    description: "Types of ancient Indian town layouts, fortresses (Durga Vidya), water tanks, road networks, and market zoning.",
                    keyTopics: ["Dandaka, Sarvatobhadra, Nandyavarta layouts", "Arthashastra municipal norms", "Dholavira & Harappan urban alignment"],
                    canonicalSourceTexts: ["Kautilya's Arthashastra (Durgavidhana Prakarana)", "Aparajitapriccha of Bhuvanadeva"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "Bruno Dagens (Trans.): Mayamata: An Indian Treatise on Housing Architecture and Iconography",
                  "P.K. Acharya: Architecture of Manasara (Oxford University Press)",
                  "Raja Bhoja: Samarangana Sutradhara (Ed. V.S. Agrawala)"
                ],
                referenceScholarlyWorks: [
                  "Stella Kramrisch: The Hindu Temple (Vols. 1 & 2)",
                  "Adam Hardy: The Temple Architecture of India (Wiley)",
                  "V.B. Sreekumar: Indian Architectural Theory: Contemporary Uses of Vastu Vidya"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 40,
                  practicalOrProjectPercent: 20,
                  criteria: ["Vastu Purusha Mandala Drafting Studio Project", "Ayadi Dimensioning Portfolio", "Site Visit Report"]
                }
              },
              {
                courseCode: "BSIKS-104",
                courseTitle: "Introduction to Manuscriptology, Paleography & Epigraphy",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 30, tutorial: 15, practicalOrField: 30 },
                domain: "Classical Indology, Manuscripts & Textual Criticism",
                semesterOrTerm: "Semester I",
                courseOverview: "Practical and theoretical training in ancient Indian writing materials (Bhurjapatra, Tadapatra, Tulapatra, copper plates), script evolution (Brahmi, Kharosthi, Sharada, Grantha, Devanagari), cataloging standards, collation, and preventive conservation.",
                learningOutcomes: [
                  "Read and transcribe Asokan Brahmi and Early Gupta Inscriptional scripts.",
                  "Identify palm-leaf manuscript damage factors (fungal, insect, brittleness) and apply conservation oils (lemongrass, citronella).",
                  "Prepare descriptive manuscript catalog entries according to National Mission for Manuscripts (NMM) standards."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "History of Writing in India & Paleographic Evolution",
                    durationHours: 15,
                    description: "Indus script hypotheses, origins and decipherment of Brahmi by James Prinsep, regional script family trees.",
                    keyTopics: ["Asokan Brahmi phonetics", "Kushan & Gupta Brahmi transitions", "Southern scripts (Pallava Grantha, Tigalari, Vatteluttu)"],
                    canonicalSourceTexts: ["Lalitavistara (Lipishala Sandarshana Parivarta)", "Al-Biruni's Kitab al-Hind (Chapter on Indian Scripts)"]
                  },
                  {
                    unitNumber: 2,
                    title: "Manuscript Materials, Preparation & Conservation",
                    durationHours: 15,
                    description: "Talipot vs Palmyra palm-leaves, birch bark curing, iron-gall and lampblack inks, binding cords, wooden patlis.",
                    keyTopics: ["Herbal biocides and fumigation", "Deacidification techniques", "Digital imaging and metadata curation"],
                    canonicalSourceTexts: ["Yuktidipika", "Pustaka Rakshana Vidhi (Traditional treatises)"]
                  },
                  {
                    unitNumber: 3,
                    title: "Epigraphy & Copper Plate Grants (Tamrapatra)",
                    durationHours: 15,
                    description: "Structure of royal charters: Invocation (Mangalacharana), Genealogy (Prashasti), Grant details, Boundaries, Curse and Benediction stanzas.",
                    keyTopics: ["Deciphering stone prasastis", "Dating systems (Vikrama, Shaka, Kali Yuga eras)", "Epigraphia Indica reading practice"],
                    canonicalSourceTexts: ["Selected Asokan Rock Edicts", "Aihole Inscription of Pulakeshin II", "Heliodorus Pillar Inscription"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "Georg Bühler: Indian Paleography (Indische Palaeographie)",
                  "D.C. Sircar: Indian Epigraphy & Select Inscriptions",
                  "K.T. Pandurangi: The Technology of Manuscript Preservation"
                ],
                referenceScholarlyWorks: [
                  "Richard Salomon: Indian Epigraphy: A Guide to the Study of Inscriptions",
                  "National Mission for Manuscripts (NMM): Samrakshika: Preventive Conservation Guidelines",
                  "B.Ch. Chhabra: Diplomatic of Sanskrit Copper-Plate Grants"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 40,
                  practicalOrProjectPercent: 20,
                  criteria: ["Brahmi to Devanagari Inscription Transcription Exam", "Palm-leaf Restoration Practical", "Museum/BORI Field Diary"]
                }
              }
            ]
          },
          {
            semesterOrYear: "Semester II",
            semesterTitle: "Temple Arts, Astronomy, Kautilyan Polity & Rasashastra",
            credits: 20,
            courses: [
              {
                courseCode: "BSIKS-201",
                courseTitle: "Indian Temple Architecture & Shilpa Shastra Iconography",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 30, tutorial: 15, practicalOrField: 30 },
                domain: "Ancient Indian Architecture & Vastu",
                semesterOrTerm: "Semester II",
                courseOverview: "Detailed study of temple structural anatomy (Garbhagriha, Mandapa, Shikhara/Vimana, Antarala, Jagati, Amalaka, Kalasha). Stylistic evolution of Nagara (Latina, Shekhari, Bhumija), Dravida (Chola, Pandya, Vijayanagara), Vesara (Chalukyan, Hoysala), and Maharashtra's Hemadpanthi temples. In-depth training in Pratima Lakshana and Talamana iconometric systems.",
                learningOutcomes: [
                  "Identify and diagram the complete vertical and horizontal elevational components of a Hindu temple.",
                  "Master the Dasha Tala (120 Angulas) iconometric canon for Murti sculpting and casting.",
                  "Decode Mudras, Asanas, Bhangas (Abhanga, Tribhanga, Atibhanga), and Ayudhas across Shaiva, Vaishnava, and Shakta icons."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Temple Anatomy & Regional Orders",
                    durationHours: 15,
                    description: "Evolution from Gupta cave temples to monolithic rock-cut shrines (Ellora Kailasa) and monumental temple complexes (Brihadisvara, Khajuraho, Sun Temple Modhera).",
                    keyTopics: ["Nagara, Dravida, Vesara, Kalinga orders", "Bhumija temples of Maharashtra (Ambreshwar, Gondeshwar)", "Acoustic and vibrational design of sanctums"],
                    canonicalSourceTexts: ["Brihat Samhita (Prasadalakshana)", "Aparajitapriccha", "Ishanasivagurudeva Paddhati"]
                  },
                  {
                    unitNumber: 2,
                    title: "Talamana System & Iconometry",
                    durationHours: 15,
                    description: "Mathematical measurement units: Angula, Tala, Dasha Tala (Uttama, Madhyama, Adhama), Nava Tala, Ashta Tala proportions for divinities, demigods, and humans.",
                    keyTopics: ["Plumb-line alignment (Sutramana)", "Bhanga postures and emotional states (Rasa Bhava)", "Lost-wax bronze casting (Madhuchehishtavidhana)"],
                    canonicalSourceTexts: ["Manasara (Pratimalakshana Adhyaya 65)", "Shukraniti (Chapter 4, Section 4)", "Kashyapa Shilpa Shastra"]
                  },
                  {
                    unitNumber: 3,
                    title: "Iconography of the Hindu Pantheon",
                    durationHours: 15,
                    description: "Shaiva (Sadashiva, Nataraja, Dakshinamurti), Vaishnava (Dashavatara, Vaikunthanatha), Shakta (Mahishasuramardini, Saptamatrikas), and composite icons (Harihara, Ardhanarishvara).",
                    keyTopics: ["Mudra taxonomy (Abhaya, Varada, Dhyana, Jnana, Tarjani)", "Vahana symbology", "Decoding temple exterior narrative relief registers"],
                    canonicalSourceTexts: ["Rupamandana of Mandana Sutradhara", "Vishnudharmottara Purana (Chitrasutra)"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "T.A. Gopinatha Rao: Elements of Hindu Iconography (Vols. 1 & 2)",
                  "Mandana Sutradhara: Rupamandana with Hindi Commentary",
                  "Stella Kramrisch: The Vishnudharmottara (Part III): A Treatise on Indian Painting and Image-Making"
                ],
                referenceScholarlyWorks: [
                  "J.N. Banerjea: The Development of Hindu Iconography (Munshiram Manoharlal)",
                  "Krishna Deva: Temples of North India & Temples of South India",
                  "M.A. Dhaky: The Indian Temple Traceries"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 40,
                  practicalOrProjectPercent: 20,
                  criteria: ["Hemadpanthi Temple Measured Drawing Field Project", "Iconometric Point-cloud Analysis", "Viva Voce"]
                }
              },
              {
                courseCode: "BSIKS-202",
                courseTitle: "Kautilya's Arthashastra, Dandaniti & Ancient Indian Statecraft",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 15, practicalOrField: 0 },
                domain: "Governance, Arthashastra & Public Policy",
                semesterOrTerm: "Semester II",
                courseOverview: "Comprehensive study of Kautilya's 15-book masterwork on political realism, macroeconomic administration, internal security, espionage network design, foreign policy (Shadgunya Siddhanta), interstate geopolitics (Mandala Theory), and ethics in warfare.",
                learningOutcomes: [
                  "Analyze the Saptanga theory of state (Swami, Amatya, Janapada, Durga, Kosha, Danda, Mitra).",
                  "Evaluate Kautilyan economic taxation frameworks, market regulation, and resource management.",
                  "Apply the 6 foreign policy postures (Sandhi, Vigraha, Asana, Yana, Samshraya, Dvaidhibhava) to contemporary global strategic studies."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Foundations of Statehood & Saptanga Theory",
                    durationHours: 15,
                    description: "The 4 Vidyas (Anvikshiki, Trayi, Varta, Dandaniti), qualities of the ideal leader (Rajarshi), council of ministers, and bureaucratic oversight.",
                    keyTopics: ["Anvikshiki as lamp of all sciences", "Saptanga organic state model", "Varta: Agriculture, animal husbandry, trade"],
                    canonicalSourceTexts: ["Kautilya's Arthashastra (Adhikarana 1: Vinayadhikarana & Adhikarana 6: Mandalayoni)"]
                  },
                  {
                    unitNumber: 2,
                    title: "Public Finance, Trade & Resource Economics",
                    durationHours: 15,
                    description: "State revenue generation, mine administration, toll superintendents, treasury audit mechanisms, disaster relief, and wage regulations.",
                    keyTopics: ["Kosha Vriddhi strategies", "Akaradhyaksha (Director of Mines)", "Consumer price indexation and merchant anti-hoarding laws"],
                    canonicalSourceTexts: ["Kautilya's Arthashastra (Adhikarana 2: Adhyakshapracara)"]
                  },
                  {
                    unitNumber: 3,
                    title: "Mandala Theory & Geopolitical Strategy",
                    durationHours: 15,
                    description: "The 12-state circle of geopolitics (Vijigishu, Ari, Mitra, Ari-Mitra, Madhyama, Udasina), intelligence rings, diplomatic envoys (Duta), and defense strategy.",
                    keyTopics: ["4 Upayas (Sama, Dana, Bheda, Danda)", "Shadgunya diplomatic matrix", "Asymmetric warfare (Kuta Yuddha) and defense fortresses"],
                    canonicalSourceTexts: ["Kautilya's Arthashastra (Adhikaranas 7 & 10: Shadgunya & Sangramika)"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "R.P. Kangle: The Kautiliya Arthashastra (Parts I, II & III, Motilal Banarsidass)",
                  "L.N. Rangarajan: Kautilya: The Arthashastra (Penguin Classics)"
                ],
                referenceScholarlyWorks: [
                  "V.R. Ramachandra Dikshitar: War in Ancient India",
                  "Subrata K. Mitra: Kautilya's Arthashastra: An Intellectual Biography",
                  "P.K. Gautam: One Hundred Years of Kautilya's Arthashastra (IDSA Monograph)"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 60,
                  practicalOrProjectPercent: 0,
                  criteria: ["Strategic Case Study on Kautilyan Mandala Theory Applied to Indo-Pacific Geopolitics", "Term Exam", "Presentation"]
                }
              }
            ]
          }
        ]
      },
      {
        programId: "bsiks-dip-vastu",
        title: "Postgraduate Diploma in Ancient Indian Architecture, Vastu & Temple Art",
        level: "Postgraduate Diploma",
        duration: "1 Year (2 Semesters)",
        totalCredits: 32,
        recognitionOrAffiliation: "BSIKS Autonomous Professional Diploma / CSU Affiliated",
        nepComplianceSummary: "Skill Enhancement & Vocational IKS Framework (UGC-NSQF Level 7).",
        eligibility: "Graduation in Architecture (B.Arch), Civil Engineering, Fine Arts, History or allied fields.",
        targetAudience: "Practicing architects, interior designers, temple conservationists, and civil engineers.",
        programObjectives: [
          "Enable contemporary architects to integrate authentic Vastu Vidya without superstition.",
          "Provide hands-on mastery over traditional material sciences (lime mortar, stone interlocking, timber joinery).",
          "Train specialists in heritage structural restoration and temple conservation."
        ],
        curriculumStructure: [
          {
            semesterOrYear: "Semester I & II",
            semesterTitle: "Applied Vastu, Ayadi Math & Heritage Conservation",
            credits: 32,
            courses: []
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 2. MIT SCHOOL OF VEDIC SCIENCES (MIT-SVS)
  // =========================================================================
  {
    id: "mitsvs",
    name: "MIT School of Vedic Sciences (MIT-SVS)",
    shortName: "MIT-SVS (MIT-ADT University)",
    tagline: "Pioneering the Scientific Interface of Vedic Knowledge, Computer Science & Cognitive Systems",
    establishedYear: 2016,
    category: "Vedic Science University School",
    location: {
      address: "Rajbaug Educational Complex, Solapur Highway, Loni Kalbhor",
      area: "Loni Kalbhor",
      pincode: "412201",
      city: "Pune, Maharashtra, India",
      coordinates: { lat: 18.4908, lng: 74.0245 }
    },
    overview: "MIT School of Vedic Sciences (MIT-SVS) is an avant-garde constituent school of MIT Art, Design and Technology University (MIT-ADT), situated at the historic Rajbaug campus in Loni Kalbhor, Pune. Founded on the visionary principle that Vedic knowledge is structured science, MIT-SVS spearheads contemporary applications across Ayur-informatics, Computational Sanskrit Linguistics, Paninian Formal Grammars, Vedic Mathematics for High-Speed Computing, Cognitive Neuro-Psychology, and Tantrayukti (Indic scientific methodology).",
    accreditationAndAffiliation: [
      "Constituent Faculty of MIT-ADT University (UGC Recognized Private State University)",
      "Approved by Government of Maharashtra & Ministry of Education IKS Division",
      "Member of Association of Indian Universities (AIU)"
    ],
    nep2020StandardsCompliance: {
      interdisciplinaryIntegration: "Full integration of Sanskrit shastric algorithms with Python, AI/ML, NLP pipelines, and bio-informatics.",
      creditTransferABC: "Universal ABC compliance with multi-disciplinary major/minor pathways across engineering, computing, and humanities.",
      multilingualAndSourceTexts: "Formal logical notation and programming languages directly mapped to Paninian Sutras and Charaka Samhita formulations.",
      experientialLearningAndFieldwork: "Laboratory-driven empirical research in bio-feedback, electroencephalography (EEG) during Vedic chanting, and algorithmic benchmark tests."
    },
    keyFacilitiesAndTreasures: [
      "Center for Computational Sanskrit & Natural Language Processing (NLP)",
      "Ayur-Informatics & Tridosha Biometric Phenotyping Laboratory",
      "Vedic Cognitive Science & EEG Brainwave Laboratory",
      "Vedic Mathematics High-Performance Computing Cluster"
    ],
    leadFacultyOrScholars: [
      {
        name: "Prof. (Dr.) Nagaraj Paturi",
        designation: "Distinguished Professor & Senior Mentor",
        specialization: "Vedic Epistemology, Cultural Anthropology, Tantrayukti & Shastra Methodologies"
      },
      {
        name: "Dr. Sai Susarla",
        designation: "Founding Dean & Professor of Computational Vedic Sciences",
        specialization: "Sanskrit Knowledge Representation, NLP, Graph Databases & Vedic Ontology"
      },
      {
        name: "Dr. Shripad Bhat",
        designation: "Associate Professor of Vedic Sciences",
        specialization: "Ayur-informatics, Yoga Psychology & Darshana Shastras"
      }
    ],
    uniqueInstitutionalStrengths: [
      "World leader in computational modeling of Panini's Ashtadhyayi (Generative Grammar as State Machine)",
      "Pioneered 'Tantrayukti' as an automated structural framework for research thesis authoring",
      "Interdisciplinary B.Sc., M.Sc., and Ph.D. programs bridging STEM with Shastras",
      "Ayur-Informatics research integrating genomics with Prakriti phenotyping"
    ],
    officialWebsiteUrl: "https://mitvedicsciences.edu.in/",
    programs: [
      {
        programId: "mitsvs-msc-vedic-science",
        title: "M.Sc. in Vedic Sciences & Ayur-Informatics",
        level: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
        duration: "2 Years (4 Semesters)",
        totalCredits: 84,
        recognitionOrAffiliation: "MIT-ADT University Degree (UGC Recognized)",
        nepComplianceSummary: "Four-semester Master of Science program with rigorous STEM-IKS interdisciplinary weighting: 40% Shastra texts, 40% Computational/Data Science tools, 20% Research Practicum.",
        eligibility: "B.Sc. / B.Tech / BAMS / BCA / B.A. with Mathematics, Computer Science, Biology, or Sanskrit background.",
        targetAudience: "Data scientists, AI/NLP engineers, bioinformaticians, Ayurveda doctors, and cognitive science researchers.",
        programObjectives: [
          "Model traditional Sanskrit knowledge systems as structured ontologies, knowledge graphs, and semantic networks.",
          "Apply Ayur-informatics to clinical diagnostics, pharmacogenomics, and digital health phenotyping.",
          "Implement Tantrayukti 32-method devices for systematic research authoring and scientific critique.",
          "Harness Vedic Mathematics algorithms for VLSI architecture design and signal processing efficiency."
        ],
        curriculumStructure: [
          {
            semesterOrYear: "Semester I",
            semesterTitle: "Computational Shastra Foundations & Epistemic Algorithms",
            credits: 22,
            courses: [
              {
                courseCode: "MVS-501",
                courseTitle: "Tantrayukti: Indic Scientific Research Methodology & Textual Epistemology",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 15, practicalOrField: 0 },
                domain: "Vedic Sciences & Epistemology",
                semesterOrTerm: "Semester I",
                courseOverview: "Deep dive into the 32/36 Tantrayuktis (structural compositional techniques) formulated in Sushruta Samhita, Charaka Samhita, Kautilya's Arthashastra, and Vishnu Dharmottara Purana. Teaches students how ancient Indic treatises achieved unambiguous clarity, encyclopedic cross-referencing, hypothesis falsification, and structural completeness.",
                learningOutcomes: [
                  "Identify and utilize all 32 classical Tantrayuktis (Adhikarana, Yoga, Padartha, Hetvartha, Udvesha, etc.) in modern scientific paper authoring.",
                  "Differentiate between Purvapaksha (thesis-counter), Uttarapaksha (refutation), and Siddhanta (established theorem).",
                  "Construct machine-parsable hierarchical knowledge models using shastric structural devices."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Genesis & Taxonomy of Tantrayukti",
                    durationHours: 15,
                    description: "Historical evolution of research methodologies in ancient India; comparison of Kautilya's 32 yuktis, Sushruta's 32 yuktis, and Charaka's 36 yuktis.",
                    keyTopics: ["Definition of Tantra (treatise) and Yukti (structural device)", "Anvikshiki as systemic inquiry", "Comparison with modern scientific methodology (Popper/Kuhn)"],
                    canonicalSourceTexts: ["Sushruta Samhita (Uttaratantra Adhyaya 65: Tantrayukti Adhyaya)", "Kautilya's Arthashastra (Book 15: Tantrayukti)", "Charaka Samhita (Siddhi Sthana 12.41-45)"]
                  },
                  {
                    unitNumber: 2,
                    title: "Structural Devices for Scientific Argumentation",
                    durationHours: 15,
                    description: "Analysis of core yuktis: Adhikarana (subject formulation), Yoga (contextual synthesis), Padartha (semantic definition), Hetvartha (analogical deduction), Apadesha (statement of reason), and Drishtanta (empirical exemplar).",
                    keyTopics: ["Pramana integration in Tantrayukti", "Avoiding Samsaya (ambiguity) and Viparyaya (error)", "Algorithmic rule chaining"],
                    canonicalSourceTexts: ["Bhattara Harichandra's Charakanyasa", "Yuktidipika on Sankhya Karika"]
                  },
                  {
                    unitNumber: 3,
                    title: "Applied Tantrayukti in Modern Computational Documentation",
                    durationHours: 15,
                    description: "Mapping Tantrayuktis to UML class diagrams, Markdown documentation architectures, and ontology engineering in Protégé/OWL.",
                    keyTopics: ["Software requirements engineering using Tantrayukti", "AI Prompt Engineering using shastric context nesting", "Authoring an IKS research paper"],
                    canonicalSourceTexts: ["Vidyabhusana's History of Indian Logic", "SVS Faculty Research Compendium on Tantrayukti"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "W.K. Lele: The Methodology of Ancient Indian Sciences (Chaukhambha)",
                  "K.V. Sharma (Ed.): Tantrayukti: The Science of Systematic Treatises",
                  "Vaidya P.V. Sharma: Scientific Methodology in Charaka Samhita"
                ],
                referenceScholarlyWorks: [
                  "Subhash Kak: Computing Science in Ancient India",
                  "Nagaraj Paturi: Research Methodology in Indian Knowledge Systems (MIT-SVS Monograph)",
                  "Kapil Kapoor: Text and Interpretation: The Indian Tradition"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 50,
                  endSemesterExamPercent: 50,
                  practicalOrProjectPercent: 0,
                  criteria: ["Tantrayukti Structural Decomposition of a Modern Research Paper", "Mid-Semester Shastric Exam", "Term Paper"]
                }
              },
              {
                courseCode: "MVS-502",
                courseTitle: "Computational Linguistics & Paninian Ashtadhyayi as Formal Grammar",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 0, practicalOrField: 30 },
                domain: "Computational Sanskrit & Ayur-Informatics",
                semesterOrTerm: "Semester I",
                courseOverview: "Exploration of Panini's Ashtadhyayi (c. 500 BCE) as the world's first formal, generative, context-sensitive algebraic programming language. Covers Maheshvara Sutras (phonetic indexing / hashing), Pratyaharas (regular expressions), Karaka Theory (semantic dependency parsing), and rule precedence resolution (Asiddhavat, Paratva, Nityatva, Antarangatva).",
                learningOutcomes: [
                  "Understand the architecture of Panini's 4,000 algorithmic sutras as a complete generative state machine.",
                  "Apply Paninian Karaka Theory to modern natural language dependency parsing and Knowledge Graph entity relations.",
                  "Build computational Sanskrit morphology analyzers and Sandhi splitters in Python."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Panini's Meta-Language Architecture",
                    durationHours: 15,
                    description: "The 14 Shiva/Maheshvara Sutras, Pratyahara formulation as phonetic clustering, It-samjna markers, and context-free rewriting rules.",
                    keyTopics: ["Shiva Sutras & optimal acoustic encoding", "Sutra types (Samjna, Paribhasha, Vidhi, Niyama, Atidesha, Adhikara)", "Backus-Naur Form (BNF) equivalence"],
                    canonicalSourceTexts: ["Panini's Ashtadhyayi (Adhyayas 1-2)", "Siddhanta Kaumudi of Bhattoji Dikshita"]
                  },
                  {
                    unitNumber: 2,
                    title: "Rule Conflict Resolution & Computation Hierarchy",
                    durationHours: 15,
                    description: "Tripadi (8.2.1 to 8.4.68) vs Sapadasaptadhyayi, rule precedence hierarchy: Para, Nitya, Antaranga, Apavada (PNAA principle).",
                    keyTopics: ["Asiddhatva (rule concealment / memory stack management)", "Recursion and looping in Sutra execution", "Paninian machine simulation in Python/Haskell"],
                    canonicalSourceTexts: ["Paribhashendushekhara of Nagesha Bhatta", "Mahabhashya of Patanjali (Paspashahnika)"]
                  },
                  {
                    unitNumber: 3,
                    title: "Karaka Theory vs Modern Semantic Roles (NLP)",
                    durationHours: 15,
                    description: "The 6 Karakas (Karta, Karma, Karana, Sampradana, Apadana, Adhikarana) as deep semantic structures independent of surface Vibhakti (case).",
                    keyTopics: ["Karaka vs Case inflection", "Dependency parsing tree construction", "Application to Sanskrit-English machine translation pipelines"],
                    canonicalSourceTexts: ["Vakyapadiya of Bhartrihari (Sadhanasamuddesha)", "Ashtadhyayi (1.4.23 to 1.4.55)"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "Saroja Bhate & Subhash Kak: Panini's Grammar and Computer Science",
                  "Paul Kiparsky: Panini as a Variationist & On the Architecture of Panini's Grammar",
                  "Bhattoji Dikshita: Vaiyakarana Siddhanta Kaumudi"
                ],
                referenceScholarlyWorks: [
                  "Rick Briggs: Knowledge Representation in Sanskrit and Artificial Intelligence (AI Magazine 1985)",
                  "Girish Nath Jha: The Paninian Model of Sanskrit Grammar (Springer)",
                  "Akshar Bharati, Vineet Chaitanya, Rajeev Sangal: Natural Language Processing: A Paninian Perspective"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 40,
                  practicalOrProjectPercent: 20,
                  criteria: ["Python-based Paninian Sandhi Generator Project", "Karaka Dependency Tree Parsing Assignment", "Final Exam"]
                }
              },
              {
                courseCode: "MVS-503",
                courseTitle: "Ayur-Informatics & Tridosha Biometric Phenotyping",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 0, practicalOrField: 30 },
                domain: "Computational Sanskrit & Ayur-Informatics",
                semesterOrTerm: "Semester I",
                courseOverview: "Pioneering the intersection of Ayurveda's Tridosha system (Vata, Pitta, Kapha), Prakriti constitutional analysis, Dhatu physiology, and modern machine learning classification, wearable sensor analytics, and genomic correlations (Ayurgenomics).",
                learningOutcomes: [
                  "Formulate mathematical and multi-variate statistical models for Prakriti assessment questionnaires.",
                  "Correlate Nadi Pariksha (pulse diagnostics) acoustic/frequency spectra with cardiovascular telemetry.",
                  "Analyze genome-wide association studies (GWAS) linking specific SNP variants to Vata/Pitta/Kapha phenotypes."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Foundations of Tridosha & Dhatus in Information Theory",
                    durationHours: 15,
                    description: "Vata (kinetic/entropy), Pitta (transformation/thermal), Kapha (structure/homeostasis); Dhatus as metabolic tissue compartments.",
                    keyTopics: ["Tridosha physiology in Charaka & Sushruta", "Prakriti vs Vikriti quantitative tracking", "Systems biology parallels to Ayurveda"],
                    canonicalSourceTexts: ["Charaka Samhita (Sutra Sthana Adhyaya 1 & Vimana Sthana Adhyaya 8)", "Ashtanga Hridaya of Vagbhata"]
                  },
                  {
                    unitNumber: 2,
                    title: "Ayurgenomics & Molecular Phenotyping",
                    durationHours: 15,
                    description: "Dr. Bhavana Prasher / CSIR Ayurgenomics benchmarks; genetic markers for metabolic rates, platelet aggregation, and immune responses.",
                    keyTopics: ["Prakriti-specific SNP distributions (EGLN1, CYP2C19)", "Metabolomics and gut microbiome profiles across Doshas", "Personalized precision medicine frameworks"],
                    canonicalSourceTexts: ["CSIR Ayurgenomics Consortium Research Papers", "Bhavaprakasha Nighantu"]
                  },
                  {
                    unitNumber: 3,
                    title: "Digital Health, Nadi Sensors & AI Diagnostics",
                    durationHours: 15,
                    description: "Piezoelectric sensors for radial arterial pulse waveforms, machine learning classifiers (Random Forest, SVM, Deep Learning) for Ayurvedic diagnostic decision support.",
                    keyTopics: ["Nadi waveform frequency decomposition (FFT)", "Prakriti prediction algorithms", "Electronic Health Records (EHR) aligned with NAMASTE/Ayush Portal"],
                    canonicalSourceTexts: ["Sarangadhara Samhita (Nadi Pariksha Section)", "Basavarajiyam (Nadi Vijnana)"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "Bhavana Prasher et al.: Whole genome expression and biochemical correlation of extreme constitutional types defined in Ayurveda (Journal of Translational Medicine)",
                  "Vaidya V.M. Gogte: Ayurvedic Pharmacology & Therapeutic Uses of Medicinal Plants",
                  "Charaka Samhita with English translation by P.V. Sharma"
                ],
                referenceScholarlyWorks: [
                  "Bhushan Patwardhan: Integrative Approaches for Health: Biomedical Research, Ayurveda and Yoga",
                  "Kalpana Joshi: Ayurgenomics: A New Approach in Personalized Medicine",
                  "S. Susarla & S. Bhat: Digital Pulse Analysis and Dosha Quantification Models"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 40,
                  practicalOrProjectPercent: 20,
                  criteria: ["Tridosha Machine Learning Classification Notebook", "Nadi Pulse Data Signal Processing Lab", "Final Exam"]
                }
              }
            ]
          },
          {
            semesterOrYear: "Semester II",
            semesterTitle: "Vedic Mathematics, Space-Time Coordinates & Cognitive Neuro-Psychology",
            credits: 22,
            courses: [
              {
                courseCode: "MVS-601",
                courseTitle: "Vedic Mathematics Algorithms & High-Speed Computer Architectures",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 15, practicalOrField: 0 },
                domain: "Vedic Sciences & Epistemology",
                semesterOrTerm: "Semester II",
                courseOverview: "Rigorous algorithmic benchmarking of the 16 Sutras and 13 Upa-sutras reconstructed by Swami Bharati Krishna Tirtha. Focuses on hardware multiplier VLSI implementations (Urdhva Tiryagbhyam, Nikhilam), polynomial division (Paravartya Yojayet), discrete logarithm computation, and cryptographic applications.",
                learningOutcomes: [
                  "Derive the algebraic proofs of all 16 Vedic mathematical sutras.",
                  "Design 16-bit and 64-bit Urdhva Tiryagbhyam Vedic Multipliers with low propagation delay and power dissipation.",
                  "Apply Vedic algorithms to high-speed digital signal processing (DSP) and matrix inversion."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "The 16 Sutras: Algebraic Proofs & Arithmetic Operators",
                    durationHours: 15,
                    description: "Ekadhikina Purvena, Nikhilam Navatashcaramam Dashatah, Urdhva Tiryagbhyam, Paravartya Yojayet, Shunyam Samyasamuccaye, etc.",
                    keyTopics: ["Multiplication speedup metrics", "Vinculum number system for subtraction reduction", "Square roots and cubic roots via Dwandwa Yoga (Duplex method)"],
                    canonicalSourceTexts: ["Vedic Mathematics by Swami Bharati Krishna Tirtha", "Sulba Sutras of Baudhayana & Apastamba"]
                  },
                  {
                    unitNumber: 2,
                    title: "VLSI Multiplier Architectures & Hardware Optimization",
                    durationHours: 15,
                    description: "Comparison of Wallace Tree, Booth Multiplier, and Urdhva Tiryagbhyam in FPGA synthesis; critical path delay analysis and gate counts.",
                    keyTopics: ["Verilog/VHDL implementation of Vedic multiplier", "Pipelined 32-bit ALU using Vedic arithmetic", "Reduction in dynamic power consumption"],
                    canonicalSourceTexts: ["IEEE Transactions on VLSI Systems (Vedic Multiplier Papers)", "Lilavati of Bhaskaracharya"]
                  },
                  {
                    unitNumber: 3,
                    title: "Vedic Computing in Cryptography & DSP",
                    durationHours: 15,
                    description: "Fast Fourier Transform (FFT) optimization, RSA modular exponentiation acceleration, elliptic curve point multiplication.",
                    keyTopics: ["Modular arithmetic via Vedic division", "Convolution and digital filtering", "Quantum-resistant algorithmic explorations"],
                    canonicalSourceTexts: ["Aryabhatiya of Aryabhata (Kuttaka Method for indeterminate equations)", "Bijaganita of Bhaskaracharya"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "Swami Bharati Krishna Tirtha: Vedic Mathematics (Motilal Banarsidass)",
                  "Bhaskaracharya: Lilavati with Kripa Ram Commentary",
                  "Baudhayana: Baudhayana Sulba Sutram (Ed. G. Thibaut)"
                ],
                referenceScholarlyWorks: [
                  "H.D. Tiwari et al.: A high speed processor design using Vedic algorithms (IEEE 2008)",
                  "Subhash Kak: Computing Science in Ancient India",
                  "C.K. Raju: Cultural Foundations of Mathematics"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 50,
                  endSemesterExamPercent: 50,
                  practicalOrProjectPercent: 0,
                  criteria: ["Verilog Vedic Multiplier Synthesis Simulation Lab", "Algebraic Proof Portfolio", "Term Exam"]
                }
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 3. DES PUNE UNIVERSITY (DESPU) IKS CENTER
  // =========================================================================
  {
    id: "despu",
    name: "DES Pune University (DESPU) IKS Center",
    shortName: "DESPU IKS Center",
    tagline: "Center of Excellence for Indigenous Sciences, Ancient Metallurgy, Geometry & Public Policy",
    establishedYear: 2023,
    category: "NEP University IKS Center",
    location: {
      address: "Deccan Education Society Campus, Fergusson College Road, Shivajinagar",
      area: "Shivajinagar",
      pincode: "411004",
      city: "Pune, Maharashtra, India",
      coordinates: { lat: 18.5236, lng: 73.8419 }
    },
    overview: "The DES Pune University Indian Knowledge System (IKS) Center is a newly established premier research and teaching center under the legendary Deccan Education Society (founded in 1884 by Lokmanya Tilak, Gopal Ganesh Agarkar, and Vishnushastri Chiplunkar). Operating under the NEP 2020 national mandate, the DESPU IKS Center leads multidisciplinary research in ancient Indian metallurgy (Wootz crucible steel, high-tin bronzes, zinc distillation at Zawar), Kautilyan statecraft and economic governance, Sulba Sutra structural geometry, and sustainable hydrology.",
    accreditationAndAffiliation: [
      "Center of Excellence under DES Pune University (State Private University, UGC Approved)",
      "Supported by Ministry of Education IKS Division Project Grants",
      "Heritage lineage of Fergusson College and Deccan Education Society"
    ],
    nep2020StandardsCompliance: {
      interdisciplinaryIntegration: "Mandatory IKS foundation courses integrated across all Engineering, Science, Economics, and Management undergraduate and postgraduate degrees.",
      creditTransferABC: "Seamless 4-credit to 20-credit IKS minor tracks deposit credits directly to national Academic Bank of Credits (ABC).",
      multilingualAndSourceTexts: "Original Sanskrit scientific treatises studied alongside modern scanning electron microscopy (SEM) and metallurgical lab reports.",
      experientialLearningAndFieldwork: "Archaeometallurgical furnace simulations, stepwell water sampling, and historical fort architectural visits."
    },
    keyFacilitiesAndTreasures: [
      "DESPU Advanced Indigenous Metallurgy & Material Testing Laboratory",
      "Ancient Hydrology & Traditional Water Harvesting Model Facility",
      "Tilak-Agarkar IKS Heritage Archive and Manuscript Repository",
      "Computational Geometry & Sulba Sutra Simulation Lab"
    ],
    leadFacultyOrScholars: [
      {
        name: "Dr. Prasad Joshi",
        designation: "Director & Professor of IKS",
        specialization: "Ancient Metallurgy, Sanskrit Shastras & Historical Technology"
      },
      {
        name: "Dr. Sharad Ranade",
        designation: "Chair of Indian Governance & Arthashastra Studies",
        specialization: "Public Policy, Fiscal Economics & Geopolitics"
      }
    ],
    uniqueInstitutionalStrengths: [
      "Deep experimental replication of ancient Indian Wootz steel (Ukku) and non-corroding iron pillars",
      "Rigorous alignment with NEP 2020 for multidisciplinary IKS Minor certifications",
      "Pioneering research into Maharashtra's historic water systems (Phad irrigation, Peshwa aqueducts)",
      "Legacy of 140+ years of nationalist academic leadership under Deccan Education Society"
    ],
    officialWebsiteUrl: "https://despu.edu.in/research-center/indian-knowledge-system",
    programs: [
      {
        programId: "despu-iks-minor",
        title: "NEP Minor in Indian Knowledge Systems (for B.Tech, B.Sc., B.A., B.Com)",
        level: "NEP Minor / Open Elective",
        duration: "3-4 Semesters (Modular 18-20 Credits)",
        totalCredits: 20,
        recognitionOrAffiliation: "DES Pune University Degree Minor (NEP 2020 Compliant)",
        nepComplianceSummary: "Directly fulfills UGC's 5% IKS mandatory credit requirement under NEP 2020 for higher education degrees.",
        eligibility: "Enrolled in any Undergraduate Degree program at DESPU or affiliated institutions.",
        targetAudience: "Engineering, science, commerce, computer science, and liberal arts students.",
        programObjectives: [
          "Provide students across engineering, commerce, and humanities with a solid grounding in India's scientific heritage.",
          "Demonstrate indigenous innovations in metallurgy, civil engineering, mathematics, and public administration.",
          "Foster pride and inspire innovative patents grounded in traditional ecological and material technologies."
        ],
        curriculumStructure: [
          {
            semesterOrYear: "Term 1-4",
            semesterTitle: "Indigenous Metallurgy, Governance, Geometry & Hydrology",
            credits: 20,
            courses: [
              {
                courseCode: "DES-IKS-101",
                courseTitle: "Indigenous Metallurgy & Material Sciences of Ancient India",
                academicLevel: "NEP Minor / Open Elective",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 0, practicalOrField: 15 },
                domain: "Indigenous Metallurgy & Material Sciences",
                semesterOrTerm: "Term 1",
                courseOverview: "Exploration of India's pre-modern metallurgical mastery: the non-rusting Delhi Iron Pillar (corrosion-resistant misawite film), Wootz / Ukku crucible Damascus steel (carbon nanotubes and cementite spheroids), lost-wax (Cire Perdue) bronze casting of Chola Natarajas, and the world's earliest industrial zinc smelting at Zawar, Rajasthan.",
                learningOutcomes: [
                  "Explain the chemical mechanism of protective phosphoric passive film formation on the Delhi Iron Pillar.",
                  "Analyze the crucible smelting process of high-carbon Wootz steel and its microscopic nanotube structures.",
                  "Reconstruct the metallurgical protocols of Rasaratna Samucchaya and Rasarnava."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Iron & Steel Metallurgy: From Megaliths to Wootz",
                    durationHours: 15,
                    description: "Discovery of iron in 2nd millennium BCE India (Atranjikhera, Malhar); crucible steel manufacturing in Telangana/Tamil Nadu; exported Damascus blades.",
                    keyTopics: ["Delhi and Dhar iron pillars", "Crucible refractory design and hyper-eutectoid steel", "Transmission of Wootz technology to Islamic world and Europe"],
                    canonicalSourceTexts: ["Rasaratna Samucchaya of Vagbhata Acharya (Dhatuvadadhyaya)", "Brihat Samhita (Khadgalakshana)"]
                  },
                  {
                    unitNumber: 2,
                    title: "Zinc Distillation & Non-Ferrous Alloys",
                    durationHours: 15,
                    description: "Downward distillation retort condensation pyrotechnology at Zawar (dated to 12th century BCE to medieval era); Panchaloha and Ashta Dhatu bronzes.",
                    keyTopics: ["Retort geometry at Zawar", "Cire Perdue casting technique in Shilpa texts", "Arsenical copper and high-tin beta-bronze vessels"],
                    canonicalSourceTexts: ["Rasarnava (Patalas 4-7)", "Manasollasa of King Someshvara"]
                  },
                  {
                    unitNumber: 3,
                    title: "Chemical Apparatus (Yantras) & Laboratory Protocols",
                    durationHours: 15,
                    description: "Dola Yantra, Svedani Yantra, Patana Yantra, Dupa Yantra, Kosthi furnace types, and crucible formulations in ancient Rasashastra laboratories.",
                    keyTopics: ["Musha (crucibles) classification", "Putapaka method of metallic calcination (Bhasmas)", "Modern characterization via SEM, XRD, and ICP-MS"],
                    canonicalSourceTexts: ["Rasendracudamani of Somadeva", "Rasaratnakara of Nagarjuna"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "Sharada Srinivasan & Srinivasa Ranganathan: India's Legendary Wootz Steel: An Advanced Material of the Ancient World (NIAS)",
                  "P. Ray: History of Chemistry in Ancient and Medieval India",
                  "Vagbhata Acharya: Rasaratna Samucchaya with English Translation"
                ],
                referenceScholarlyWorks: [
                  "R. Balasubramaniam: Delhi Iron Pillar: New Insights (Aryan Books International)",
                  "Paul Craddock: Early Metal Mining and Production",
                  "Ananda K. Coomaraswamy: The Indian Craftsman"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 60,
                  practicalOrProjectPercent: 0,
                  criteria: ["Metallurgical Analysis Case Study", "Mid-Term Exam", "Final Written Examination"]
                }
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 4. VISHWAKARMA UNIVERSITY (VU) IKS CENTRE
  // =========================================================================
  {
    id: "vu_ciks",
    name: "Vishwakarma University (VU) Center for Indian Knowledge System",
    shortName: "VU CIKS",
    tagline: "Interdisciplinary Center for Traditional Management, Ethno-Botany, Sustainable Architecture & Design",
    establishedYear: 2022,
    category: "NEP University IKS Center",
    location: {
      address: "Survey No. 2, 3, 4 Laxmi Nagar, Kondhwa Budruk",
      area: "Kondhwa",
      pincode: "411048",
      city: "Pune, Maharashtra, India",
      coordinates: { lat: 18.4575, lng: 73.8834 }
    },
    overview: "The Vishwakarma University Center for Indian Knowledge System (CIKS) serves as an interdisciplinary nexus dedicated to translating classical Indic wisdom into actionable paradigms for contemporary business management, sustainable product design, vernacular architecture, ethno-botany, and circular economy. Operating under the visionary Bansilal Ramnath Agarwal Charitable Trust (BRACT), VU CIKS bridges engineering, design, and management with traditional Indic sciences.",
    accreditationAndAffiliation: [
      "Center of Excellence of Vishwakarma University (UGC Approved Private University)",
      "Collaborations with Industry Guilds, Artisanal Crafts Clusters, and IKS Division MoE"
    ],
    nep2020StandardsCompliance: {
      interdisciplinaryIntegration: "Cross-listed modules across MBA, B.Des, B.Arch, and B.Tech curricula.",
      creditTransferABC: "Direct credit transfer into UGC Academic Bank of Credits.",
      multilingualAndSourceTexts: "Bilingual case studies correlating classical Sanskrit/Prakrit texts with contemporary corporate scenarios.",
      experientialLearningAndFieldwork: "Direct immersion with artisan clusters (Paithani weavers, brass-smiths of Otur, Warli artists)."
    },
    keyFacilitiesAndTreasures: [
      "VU Traditional Design & Sustainable Materials Studio",
      "Ethno-botany & Herbal Extract Garden and Laboratory",
      "Indic Leadership Case Study Repository & Simulation Suite",
      "Artisanal Cluster Innovation Incubation Center"
    ],
    leadFacultyOrScholars: [
      {
        name: "Dr. Wasudev Gade",
        designation: "Vice President & Senior Academic Advisor",
        specialization: "Biotechnology, Ethno-Pharmacology & Higher Education Policy"
      },
      {
        name: "Dr. Sulabha Patole",
        designation: "Head of Center for IKS",
        specialization: "Ancient Indian Management, Chanakya Niti & Sustainable Design"
      }
    ],
    uniqueInstitutionalStrengths: [
      "Strong corporate management integration: applying Bhagavad Gita & Chanakya Niti to modern startup leadership",
      "Design-led focus on sustainable materials, natural dyes, and vernacular climate-responsive architecture",
      "Active fieldwork with Maharashtra's traditional crafts and artisan guilds (Shrenis)",
      "Focus on circular economy and zero-waste production principles in traditional Indic arts"
    ],
    officialWebsiteUrl: "https://www.vupune.ac.in/centres-of-excellence/center-for-indian-knowledge-system",
    programs: [
      {
        programId: "vu-iks-mgmt",
        title: "Executive Certificate in Ancient Indian Management & Leadership Philosophies",
        level: "Certificate / Fellowship",
        duration: "6 Months (Hybrid / Weekend)",
        totalCredits: 12,
        recognitionOrAffiliation: "Vishwakarma University Certificate",
        nepComplianceSummary: "Continuous Professional Development (CPD) & Skill Development framework.",
        eligibility: "Corporate professionals, entrepreneurs, MBA students, and business leaders.",
        targetAudience: "CXOs, startup founders, project managers, and organizational psychologists.",
        programObjectives: [
          "Derive sustainable leadership models from the Bhagavad Gita, Arthashastra, and Mahabharata Shanti Parva.",
          "Implement Nishkama Karma (selfless action) and Lokasangraha (universal welfare) in corporate CSR and ethics.",
          "Build resilient team structures utilizing ancient Shreni (guild) cooperative models."
        ],
        curriculumStructure: [
          {
            semesterOrYear: "Module 1-3",
            semesterTitle: "Ethical Leadership, Strategic Statecraft & Guild Economics",
            credits: 12,
            courses: [
              {
                courseCode: "VU-MGT-301",
                courseTitle: "Corporate Leadership & Ethics: Bhagavad Gita & Chanakya Niti for Modern CEOs",
                academicLevel: "Certificate / Fellowship",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 15, practicalOrField: 0 },
                domain: "Traditional Management & Ethno-Sciences",
                semesterOrTerm: "Module 1",
                courseOverview: "Transformative analysis of Indian philosophical thought applied to corporate decision making, crisis management, emotional intelligence, stress reduction, and visionary leadership. Contrasts Western transactional leadership with Indic transformative Lokasangraha.",
                learningOutcomes: [
                  "Apply the concept of Svadharma to role allocation and employee strengths-based management.",
                  "Utilize Gita's Sthitaprajna framework for high-stress executive resilience.",
                  "Formulate ethical corporate governance frameworks grounded in Purushartha balances (Dharma, Artha, Kama, Moksha)."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "The Gita on Decision Paralysis & High-Stakes Leadership",
                    durationHours: 15,
                    description: "Arjuna Vishada Yoga as executive burnout; Krishna's counsel on cognitive reframing (Buddhi Yoga) and detached mastery (Karmasu Kaushalam).",
                    keyTopics: ["Sthitaprajna characteristics", "Nishkama Karma in quarterly earnings pressure", "Guna dynamics in hiring and team management"],
                    canonicalSourceTexts: ["Bhagavad Gita (Chapters 2, 3, 4, 18)"]
                  },
                  {
                    unitNumber: 2,
                    title: "Chanakyan Strategic Maneuver & Talent Architecture",
                    durationHours: 15,
                    description: "Amatya Sampat (qualities of key executives), surveillance and market intelligence, crisis mitigation, and negotiation techniques.",
                    keyTopics: ["4 Upayas in corporate negotiations", "Mitigating corporate betrayal and fraud", "Organizational culture design"],
                    canonicalSourceTexts: ["Chanakya Niti", "Kautilya's Arthashastra (Book 1 & 8)"]
                  },
                  {
                    unitNumber: 3,
                    title: "Mahabharata Shanti Parva on Institutional Longevity",
                    durationHours: 15,
                    description: "Bhishma's discourse on Rajadharma and Apaddharma (crisis administration); governance during unprecedented black-swan events.",
                    keyTopics: ["Trust and fiduciary duty in ancient Shrenis (guilds)", "Lokasangraha as ESG / Sustainable development", "Ethical case studies"],
                    canonicalSourceTexts: ["Mahabharata Shanti Parva (Rajadharmanushasana Parva)"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "Swami Ranganathananda: Universal Message of the Bhagavad Gita (3 Vols., Advaita Ashrama)",
                  "Radhakrishnan Pillai: Corporate Chanakya & Chanakya in You",
                  "Subhash Sharma: Western Windows Eastern Doors: Towards Indic Paradigm of Management"
                ],
                referenceScholarlyWorks: [
                  "S.K. Chakraborty: Management by Values: Towards Cultural Congruence (Oxford University Press)",
                  "Gurcharan Das: The Difficulty of Being Good: On the Subtle Art of Dharma",
                  "Nitin Nohria & B.G. Yovovich: Compassionate Capitalism & Indic Models"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 50,
                  endSemesterExamPercent: 50,
                  practicalOrProjectPercent: 0,
                  criteria: ["Executive Leadership Simulation Case Study", "Personal Philosophy Whitepaper", "Viva"]
                }
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 5. THE BHANDARKAR ORIENTAL RESEARCH INSTITUTE (BORI)
  // =========================================================================
  {
    id: "bori",
    name: "The Bhandarkar Oriental Research Institute (BORI)",
    shortName: "BORI Pune",
    tagline: "World-Renowned Shrine of Indology, Critical Edition of Mahabharata & Custodian of 125,000+ Ancient Manuscripts",
    establishedYear: 1917,
    category: "Heritage Indology Institute",
    location: {
      address: "812, Shivajinagar, Law College Road",
      area: "Law College Road / Shivajinagar",
      pincode: "411004",
      city: "Pune, Maharashtra, India",
      coordinates: { lat: 18.5173, lng: 73.8322 }
    },
    overview: "Founded on July 6, 1917, in honor of the pioneer Indologist Sir Ramkrishna Gopal Bhandarkar, the Bhandarkar Oriental Research Institute (BORI) is a globally revered citadel of classical Indological research, Sanskrit philology, and manuscript preservation. BORI earned everlasting worldwide acclaim for its monumental 50-year project (1919-1966) creating the 19-volume Critical Edition of the Mahabharata (89,000 verses collated from 1,259 manuscripts in 12 scripts). BORI houses over 125,000 rare books and 29,000 precious manuscripts, including the iconic 1875 Rigveda birch-bark manuscript inscribed in the UNESCO Memory of the World Register.",
    accreditationAndAffiliation: [
      "Designated National Manuscript Resource Center (MRC) & Manuscript Conservation Center (MCC) under National Mission for Manuscripts (NMM)",
      "Affiliated Research Institute of Savitribai Phule Pune University (SPPU)",
      "Global institutional collaborations with Oxford, Harvard, Kyoto, and Leiden Universities"
    ],
    nep2020StandardsCompliance: {
      interdisciplinaryIntegration: "Philological, historical, linguistic, and archaeo-astronomy research synthesizing textual variants with epigraphic evidence.",
      creditTransferABC: "Diploma and Certificate courses aligned with NEP credit frameworks for university research credits.",
      multilingualAndSourceTexts: "Exhaustive mastery over Sanskrit, Prakrit, Apabhramsha, Avestan, and Vedic dialects.",
      experientialLearningAndFieldwork: "Hands-on training in the world-famous BORI Manuscript Conservation Laboratory with actual centuries-old birch-bark and palm-leaves."
    },
    keyFacilitiesAndTreasures: [
      "UNESCO Memory of the World Registered 1875 Rigveda Birch-bark Manuscript (Kashmir Sharada script)",
      "The Mahabharata Critical Edition Hall and 19-Volume Collation Archive",
      "Manuscript Conservation & Digitization Laboratory (Leaf casting, tissue lamination, fumigation chambers)",
      "Rare Indology Library with over 125,000 volumes in 20+ languages"
    ],
    leadFacultyOrScholars: [
      {
        name: "Prof. S.S. Bahulkar",
        designation: "Distinguished Scholar & Executive Committee Member",
        specialization: "Vedic Literature, Atharvavedic Traditions & Manuscriptology"
      },
      {
        name: "Dr. Shreenand Bapat",
        designation: "Registrar & Research Coordinator",
        specialization: "Mahabharata Textual Criticism, Epigraphy & Maratha History"
      },
      {
        name: "Dr. Amruta Natu",
        designation: "Assistant Director & Senior Researcher",
        specialization: "Manuscriptology, Sharada Script & Sanskrit Philology"
      }
    ],
    uniqueInstitutionalStrengths: [
      "Gold standard for Textual Criticism (Lachmannian method adapted to Indian oral-written traditions)",
      "Creator of the 19-Volume Critical Edition of the Mahabharata & Harivamsa",
      "Specialized paleographic expertise in extinct scripts (Sharada, Nandinagari, Grantha, Nevari, Mithilakshara)",
      "Pioneering digital initiatives (Bharat Vidya online learning portal with global reach)"
    ],
    officialWebsiteUrl: "https://bori.ac.in/",
    programs: [
      {
        programId: "bori-dip-indology",
        title: "Advanced Diploma in Indology, Textual Criticism & Manuscriptology",
        level: "Postgraduate Diploma",
        duration: "1 Year (2 Semesters)",
        totalCredits: 32,
        recognitionOrAffiliation: "BORI Autonomous Academic Diploma (Recognized Globally)",
        nepComplianceSummary: "High-level specialized postgraduate research training in manuscriptology and philological methods.",
        eligibility: "Master's or Bachelor's in Sanskrit, History, Linguistics, Philosophy, or any humanities discipline.",
        targetAudience: "Indologists, Ph.D. scholars, museum curators, archivists, and critical edition editors.",
        programObjectives: [
          "Train scholars in the rigorous stemmatic collation and variant apparatus generation developed during BORI's Mahabharata project.",
          "Provide hands-on decipherment skills in Sharada, Grantha, and Devanagari manuscript hands.",
          "Master classical Indian hermeneutics, Vedic padapatha analysis, and textual emendation ethics."
        ],
        curriculumStructure: [
          {
            semesterOrYear: "Semester I & II",
            semesterTitle: "Textual Criticism, Paleography & Manuscript Conservation",
            credits: 32,
            courses: [
              {
                courseCode: "BOR-101",
                courseTitle: "Principles of Textual Criticism & The Mahabharata Critical Edition Standard",
                academicLevel: "Postgraduate Diploma",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 15, practicalOrField: 0 },
                domain: "Classical Indology, Manuscripts & Textual Criticism",
                semesterOrTerm: "Semester I",
                courseOverview: "Comprehensive study of the methodology of preparing a Critical Edition of ancient texts. Analyzes V.S. Sukthankar's adaptation of Lachmann's stemmatics for Indian transmission, handling oral-written fluidity, identifying interpolations, constructing the Stemma Codicum, and establishing the Constituted Text.",
                learningOutcomes: [
                  "Construct a Stemma Codicum (genealogical tree of manuscripts) for a contaminated transmission tradition.",
                  "Compile a complete critical apparatus documenting variant readings, lacunae, and scribal errors.",
                  "Critically evaluate Northern vs Southern recensions of epic and puranic literature."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "History of Textual Criticism in the West and India",
                    durationHours: 15,
                    description: "Classical European Lachmannian stemmatics, its limitations in Indian oral-fluid traditions, and Dr. V.S. Sukthankar's revolutionary Prolegomena to the Adiparvan (1933).",
                    keyTopics: ["Recension vs Version vs Vulgate", "Constituted Text vs Variant Apparatus", "Higher vs Lower Criticism"],
                    canonicalSourceTexts: ["V.S. Sukthankar: Prolegomena to the Critical Edition of the Adiparvan", "S.M. Katre: Introduction to Indian Textual Criticism"]
                  },
                  {
                    unitNumber: 2,
                    title: "Collation Procedures & Scribal Error Taxonomy",
                    durationHours: 15,
                    description: "Standard collation sheets, identifying haplography, dittography, homoioteleuton, metathesis, gloss incorporation, and hyper-metric corrections.",
                    keyTopics: ["Scribal psychology and corruption sources", "Test-passages (experimenta crucis)", "Eliminatio codicum descriptorum (eliminating derivative copies)"],
                    canonicalSourceTexts: ["The Critical Edition of the Mahabharata (Volume 1: Adiparvan)"]
                  },
                  {
                    unitNumber: 3,
                    title: "Establishing the Archetype & Textual Emendation",
                    durationHours: 15,
                    description: "Principles of choosing between variants: lectio difficilior potior (the more difficult reading is preferable), usus scribendi (author's style), and conjectural emendation ethics.",
                    keyTopics: ["Northern recension (Kashmiri, Maithili, Bengali, Devanagari)", "Southern recension (Grantha, Malayalam, Telugu)", "The final constituted archetype"],
                    canonicalSourceTexts: ["BORI Harivamsa Critical Edition", "Critical Edition of the Ramayana (Baroda Oriental Institute standard)"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "V.S. Sukthankar: Critical Studies in the Mahabharata (Sukthankar Memorial Edition, Vol. 1)",
                  "S.M. Katre: Introduction to Indian Textual Criticism (Deccan College Handbooks)",
                  "Paul Maas: Textual Criticism (Oxford Clarendon Press)"
                ],
                referenceScholarlyWorks: [
                  "M.A. Mehendale: Reflections on the Mahabharata War",
                  "V.M. Bedekar (Ed.): Principles of Textual Criticism in Indic Texts",
                  "E.J. Kenney: The Classical Text: An Interpretation of the History of Classical Scholarship"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 50,
                  endSemesterExamPercent: 50,
                  practicalOrProjectPercent: 0,
                  criteria: ["Practical Collation of a 50-verse Sanskrit Text from 3 Manuscripts", "Critical Apparatus Portfolio", "Final Exam"]
                }
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 6. DECCAN COLLEGE POST GRADUATE AND RESEARCH INSTITUTE
  // =========================================================================
  {
    id: "deccan_college",
    name: "Deccan College Post Graduate and Research Institute",
    shortName: "Deccan College Pune",
    tagline: "Historic Deemed University (Est. 1821), Monumental Sanskrit Dictionary Project & National Cradle of Indian Archaeology",
    establishedYear: 1821,
    category: "Archaeological Deemed University",
    location: {
      address: "Deccan College Road, Yerawada",
      area: "Yerawada",
      pincode: "411006",
      city: "Pune, Maharashtra, India",
      coordinates: { lat: 18.5528, lng: 73.8761 }
    },
    overview: "Established on October 6, 1821 (initially as Hindoo College by Mountstuart Elphinstone), Deccan College Post Graduate and Research Institute is the third-oldest educational institution in modern India and a world-renowned Deemed-to-be University. Deccan College is the undisputed cradle of Indian scientific field archaeology (led by legends like Prof. H.D. Sankalia, V.N. Misra, M.K. Dhavalikar, and S.N. Rajaguru). It is also home to the monumental 'Encyclopaedic Dictionary of Sanskrit on Historical Principles'—the most extensive lexicographical project in human history, surveying the historical evolution of Sanskrit vocabulary from the Rigveda (1500 BCE) to 1800 CE across 1,500 core texts and 10 million citations.",
    accreditationAndAffiliation: [
      "Deemed-to-be University under Section 3 of UGC Act (1990)",
      "NAAC Accredited 'A' Grade Research University",
      "UGC Centre of Advanced Study (CAS) in Archaeology and Linguistics"
    ],
    nep2020StandardsCompliance: {
      interdisciplinaryIntegration: "Complete convergence of earth sciences (geomorphology, sedimentology), bioarchaeology (osteoarchaeology, paleobotany), chemistry (C-14, OSL), and Sanskrit historical lexicography.",
      creditTransferABC: "Full CBCS semester credit system integrated with national Academic Bank of Credits.",
      multilingualAndSourceTexts: "Philological parsing of 1,500 Sanskrit treatises spanning 3,300 years of scientific, philosophical, and literary thought.",
      experientialLearningAndFieldwork: "Mandatory multi-month field excavations at prehistoric, Harappan (Rakhigarhi, Farmana), and megalithic sites across India."
    },
    keyFacilitiesAndTreasures: [
      "The Monumental Sanskrit Dictionary Scriptoria holding over 10 Million Reference Citation Cards",
      "H.D. Sankalia Archaeology Museum with artifacts from Paleolithic to Medieval India",
      "Archaeological Sciences Laboratories (Archaeo-chemistry, OSL Luminescence, Bioarchaeology & Thin Sectioning)",
      "Phonetics & Historical Linguistics Laboratory"
    ],
    leadFacultyOrScholars: [
      {
        name: "Prof. (Dr.) Pramod Pandey",
        designation: "Vice Chancellor & Senior Linguist",
        specialization: "Phonology, Historical Linguistics & Sanskrit Morpho-syntax"
      },
      {
        name: "Prof. Vasant Shinde",
        designation: "Distinguished Archaeologist & Former VC",
        specialization: "Harappan Archaeology, Rakhigarhi Excavations & Ancient DNA Forensics"
      },
      {
        name: "Prof. Prasad Joshi",
        designation: "Head, Department of Sanskrit and Lexicography",
        specialization: "Encyclopaedic Sanskrit Dictionary, Vedic Lexicon & Historical Semantics"
      }
    ],
    uniqueInstitutionalStrengths: [
      "Sole producer of the 'Encyclopaedic Dictionary of Sanskrit on Historical Principles' (35+ fascicules published)",
      "Excavator of premier prehistoric and protohistoric sites: Inamgaon, Nevasa, Bhimbetka, Rakhigarhi, Sinauli",
      "World-class bioarchaeology, osteoarchaeology, and paleobotanical identification laboratory",
      "Over 200 years of unbroken institutional heritage in Sanskrit, linguistics, and archaeology"
    ],
    officialWebsiteUrl: "https://www.dcpune.ac.in/",
    programs: [
      {
        programId: "dc-ma-aihc-arch",
        title: "M.A. in Ancient Indian History, Culture and Archaeology (AIHC & Archaeology)",
        level: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
        duration: "2 Years (4 Semesters)",
        totalCredits: 64,
        recognitionOrAffiliation: "Deccan College Deemed University Degree",
        nepComplianceSummary: "64-credit CBCS curriculum with mandatory 30-day continuous archaeological field excavation and museum curation practicum.",
        eligibility: "Bachelor's degree in any discipline with minimum 50% marks from a recognized university.",
        targetAudience: "Archaeological Survey of India (ASI) aspirants, field archaeologists, heritage consultants, and academic researchers.",
        programObjectives: [
          "Master scientific archaeological excavation techniques, three-dimensional spatial recording, and stratigraphic profiling.",
          "Integrate scientific dating methods (AMS C-14, OSL, Paleomagnetism) with ceramic typological seriation.",
          "Analyze ancient Indian material culture from Lower Paleolithic Acheulian tools to Early Historic urbanism."
        ],
        curriculumStructure: [
          {
            semesterOrYear: "Semester I",
            semesterTitle: "Field Archaeology, Prehistory & Protohistory of South Asia",
            credits: 16,
            courses: [
              {
                courseCode: "ARC-101",
                courseTitle: "Principles and Methods of Field Archaeology & Stratigraphy",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 0, practicalOrField: 30 },
                domain: "Archaeology, Epigraphy & Lexicography",
                semesterOrTerm: "Semester I",
                courseOverview: "Comprehensive training in archaeological site discovery (remote sensing, LiDAR, field walking), excavation systems (Wheeler-Kenyon grid vs open-area stripping), Harris Matrix stratigraphic sequencing, 3D Total Station spatial recording, and post-excavation artifact processing.",
                learningOutcomes: [
                  "Construct a complete Harris Matrix stratigraphic chart for complex multi-period archaeological sites.",
                  "Operate Total Station survey equipment for millimeter-accurate 3D artifact recording.",
                  "Apply preservation consolidation to freshly excavated bone, ceramic, and metal artifacts."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "Site Survey, Remote Sensing & Non-Invasive Prospection",
                    durationHours: 15,
                    description: "Satellite imagery analysis, Ground Penetrating Radar (GPR), magnetic gradiometry, electrical resistivity, and field surface sampling.",
                    keyTopics: ["Wheeler vs Petrie vs Braidwood methods", "Predictive site modeling", "DGPS and GIS in landscape archaeology"],
                    canonicalSourceTexts: ["Sir Mortimer Wheeler: Archaeology from the Earth", "H.D. Sankalia: An Introduction to Field Archaeology"]
                  },
                  {
                    unitNumber: 2,
                    title: "Stratigraphic Excavation & Harris Matrix",
                    durationHours: 15,
                    description: "Principles of geological vs archaeological stratigraphy (Law of Superposition, Law of Original Horizontality); single-context recording.",
                    keyTopics: ["Harris Matrix creation", "Section drawing and soil color Munsell coding", "Recognizing pit, ditch, and floor cut interfaces"],
                    canonicalSourceTexts: ["Edward Harris: Principles of Archaeological Stratigraphy", "K.V. Raman: Principles and Methods of Archaeology"]
                  },
                  {
                    unitNumber: 3,
                    title: "Artifact Curation, Seriation & Scientific Dating",
                    durationHours: 15,
                    description: "Pottery washing, labeling, rim-diameter charting, petrographic thin-section sampling, radiocarbon and luminescence sample collection protocols.",
                    keyTopics: ["Typological seriation (Battleship curves)", "Preventing modern C-14 contamination", "Site report preparation"],
                    canonicalSourceTexts: ["M.K. Dhavalikar: Historical Archaeology of India", "Colin Renfrew & Paul Bahn: Archaeology: Theories, Methods, and Practice"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "H.D. Sankalia: Prehistory and Protohistory of India and Pakistan (Deccan College)",
                  "Edward Harris: Principles of Archaeological Stratigraphy (Academic Press)",
                  "K. Rajan: Understanding Archaeology: Field Methods and Interpretations"
                ],
                referenceScholarlyWorks: [
                  "Dilip K. Chakrabarti: A History of Indian Archaeology: From the Beginning to 1947",
                  "V.N. Misra: Prehistoric Colonization of India",
                  "Vasant Shinde et al.: Archaeological Field Reports on Inamgaon, Farmana & Rakhigarhi"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 40,
                  endSemesterExamPercent: 40,
                  practicalOrProjectPercent: 20,
                  criteria: ["Archaeological Section Drawing Practical", "Harris Matrix Solving Test", "Excavation Viva"]
                }
              }
            ]
          }
        ]
      },
      {
        programId: "dc-ma-sanskrit-lex",
        title: "M.A. in Sanskrit and Historical Lexicography",
        level: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
        duration: "2 Years (4 Semesters)",
        totalCredits: 64,
        recognitionOrAffiliation: "Deccan College Deemed University Degree",
        nepComplianceSummary: "Specialized postgraduate program in historical linguistics, semantic evolution, and lexicographical methodology.",
        eligibility: "Bachelor's degree with Sanskrit as a subject or proven Sanskrit proficiency.",
        targetAudience: "Lexicographers, Sanskrit researchers, computational linguists, and philologists.",
        programObjectives: [
          "Train scholars in the unique historical principles methodology of Deccan College's Sanskrit Dictionary.",
          "Track semantic shifts of Sanskrit scientific and philosophical terms across 3,300 years of recorded literature.",
          "Build digital lexicographical databases and ontological concordance tools."
        ],
        curriculumStructure: [
          {
            semesterOrYear: "Semester I & II",
            semesterTitle: "Lexicography, Vedic Etymology & Historical Semantics",
            credits: 32,
            courses: [
              {
                courseCode: "LEX-201",
                courseTitle: "Encyclopaedic Sanskrit Lexicography & Historical Semantic Evolution",
                academicLevel: "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
                credits: 4,
                contactHours: { lecture: 45, tutorial: 15, practicalOrField: 0 },
                domain: "Archaeology, Epigraphy & Lexicography",
                semesterOrTerm: "Semester I",
                courseOverview: "In-depth study of the lexicographical architecture created by A.M. Ghatage, S.M. Katre, and M.A. Mehendale for Deccan College's monumental Encyclopaedic Sanskrit Dictionary. Covers word-sense disambiguation, diachronic semantic evolution, etymology from Indo-European roots, and citation slip extraction protocols.",
                learningOutcomes: [
                  "Author comprehensive dictionary entries following the Deccan College Encyclopaedic Dictionary rules.",
                  "Trace the historical semantic shift of philosophical and scientific terms from Vedic to Classical Sanskrit.",
                  "Compare indigenous Koshas (Amarakosha, Medinikosha) with modern historical lexicographical models (OED standard)."
                ],
                units: [
                  {
                    unitNumber: 1,
                    title: "History of Lexicography: Kosha Tradition to Modern Dictionaries",
                    durationHours: 15,
                    description: "Indigenous Sanskrit Nighantu and Kosha traditions (Amarakosha of Amarasimha); 19th-century European dictionaries (Roth-Böhtlingk Petersburg Lexicon, Monier-Williams).",
                    keyTopics: ["Synonym vs Polysemy structures in Koshas", "Shortcomings of earlier European dictionaries", "The need for historical principles"],
                    canonicalSourceTexts: ["Amarakosha with Ramashrami Commentary", "Yaska's Nirukta (Adhyaya 1)"]
                  },
                  {
                    unitNumber: 2,
                    title: "Methodology of the Encyclopaedic Sanskrit Dictionary",
                    durationHours: 15,
                    description: "The 1,500 canonical texts chosen spanning 1500 BCE to 1800 CE; chronological stratigraphy of texts; formatting of headwords, grammatical tags, and chronological citations.",
                    keyTopics: ["Extracting context-rich citation slips", "Resolving Homonyms and Polysemes", "Treatment of hapax legomena and obscure technical terms"],
                    canonicalSourceTexts: ["An Encyclopaedic Dictionary of Sanskrit on Historical Principles (Introduction by A.M. Ghatage)"]
                  },
                  {
                    unitNumber: 3,
                    title: "Historical Semantics & Diachronic Analysis",
                    durationHours: 15,
                    description: "Case studies in semantic evolution: e.g., 'Brahman' (from sacred utterance/prayer to Ultimate Reality), 'Rta' to 'Dharma', 'Yajna' to internalized meditation.",
                    keyTopics: ["Semantic widening, narrowing, metaphoric shift", "Loanwords and substratum influences", "Digital Sanskrit Lexica APIs and NLP integration"],
                    canonicalSourceTexts: ["Deccan College Dictionary Fascicules (Selected Entries)"]
                  }
                ],
                prescribedPrimaryLiterature: [
                  "A.M. Ghatage (Ed.): An Encyclopaedic Dictionary of Sanskrit on Historical Principles (Vols. 1-5, Deccan College)",
                  "Amarasimha: Namalinganushasana (Amarakosha)",
                  "Ladislav Zgusta: Manual of Lexicography (Mouton)"
                ],
                referenceScholarlyWorks: [
                  "M.A. Mehendale: Nirukta and Sanskrit Lexicography",
                  "V. Raghavan: Studies in Sanskrit Lexicography",
                  "S.M. Katre: Lexicography (Annamalai University Lectures)"
                ],
                evaluationScheme: {
                  continuousAssessmentPercent: 50,
                  endSemesterExamPercent: 50,
                  practicalOrProjectPercent: 0,
                  criteria: ["Compilation of a 10-page Historical Dictionary Entry for a Complex Term", "Slip Extraction Test", "Final Exam"]
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

export const IKS_DOMAINS_LIST = [
  "Vedic Sciences & Epistemology",
  "Computational Sanskrit & Ayur-Informatics",
  "Ancient Indian Architecture & Vastu",
  "Indigenous Metallurgy & Material Sciences",
  "Governance, Arthashastra & Public Policy",
  "Classical Indology, Manuscripts & Textual Criticism",
  "Archaeology, Epigraphy & Lexicography",
  "Traditional Management & Ethno-Sciences"
] as const;

export const ACADEMIC_LEVELS_LIST = [
  "Master's (M.Sc. / M.A. / M.Tech / MIKS)",
  "Ph.D.",
  "Bachelor's (B.Sc. / B.A.)",
  "Postgraduate Diploma",
  "Certificate / Fellowship",
  "NEP Minor / Open Elective"
] as const;
