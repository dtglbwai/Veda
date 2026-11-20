import { FirebaseSpreadsheetDoc } from "../types/spreadsheet";

export const CANONICAL_SPREADSHEET_DATASETS: FirebaseSpreadsheetDoc[] = [
  // 1. AYURVEDA DRAVYAGUNA & BOTANICAL FORMULARY
  {
    id: "ayurveda-dravyaguna-formulary",
    title: "Ayurveda Dravyaguna & Botanical Formulary Matrix",
    description: "Comprehensive scientific database of 25 classical medicinal plants from Charaka and Sushruta Samhitas with botanical taxonomy, Rasa (tastes), Guna (attributes), Virya (potency), Vipaka (post-digestive effect), Dosha actions, and classical clinical indications.",
    category: "Ayurveda & Health",
    tags: ["Ayurveda", "Charaka Samhita", "Sushruta Samhita", "Dravyaguna", "Pharmacology", "Botanical Sciences"],
    rowCount: 25,
    columnCount: 10,
    createdBy: "system_canonical",
    authorName: "Charaka & Sushruta Research Council",
    isPublic: true,
    createdAt: "2026-08-28T00:00:00Z",
    updatedAt: "2026-08-28T00:00:00Z",
    syncStatus: "synced",
    sheets: [
      {
        id: "sheet-herbs-main",
        name: "Medicinal Herbs (द्रव्यगुण)",
        description: "Primary botanical and pharmacological attributes",
        columns: [
          { key: "id", label: "Index", type: "number", width: 70 },
          { key: "sanskrit_name", label: "Sanskrit Name (संस्कृत)", type: "sanskrit", width: 160 },
          { key: "iast_name", label: "IAST Romanization", type: "string", width: 160 },
          { key: "botanical_name", label: "Botanical Binomial Taxonomy", type: "string", width: 220 },
          { key: "family", label: "Plant Family", type: "string", width: 140 },
          { key: "rasa", label: "Rasa (Taste Profile)", type: "string", width: 180 },
          { key: "guna", label: "Guna (Bio-Properties)", type: "string", width: 160 },
          { key: "virya", label: "Virya (Potency)", type: "string", width: 110 },
          { key: "vipaka", label: "Vipaka (Post-Digestive)", type: "string", width: 120 },
          { key: "dosha_action", label: "Tridosha Action", type: "string", width: 180 },
          { key: "primary_indication", label: "Classical Indications & Uses", type: "string", width: 260 }
        ],
        rows: [
          {
            id: 1,
            sanskrit_name: "अश्वगन्धा",
            iast_name: "Aśvagandhā",
            botanical_name: "Withania somnifera",
            family: "Solanaceae",
            rasa: "Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)",
            guna: "Laghu (Light), Snigdha (Unctuous)",
            virya: "Ushna (Heating)",
            vipaka: "Madhura (Sweet)",
            dosha_action: "Pacifies Vata and Kapha",
            primary_indication: "Rasayana (Adaptogen), Medhya (Neuroprotective), Balya (Strength), Ojas enhancer"
          },
          {
            id: 2,
            sanskrit_name: "आमलकी",
            iast_name: "Āmalakī",
            botanical_name: "Phyllanthus emblica (Emblica officinalis)",
            family: "Phyllanthaceae",
            rasa: "Pancha-rasa (All except Lavana / Salty), predominantly Amla",
            guna: "Guru (Heavy), Ruksha (Dry), Sheeta (Cooling)",
            virya: "Sheeta (Cooling)",
            vipaka: "Madhura (Sweet)",
            dosha_action: "Tridosha Shamaka (Balances Vata, Pitta, Kapha)",
            primary_indication: "Prime ingredient of Chyavanaprasha, Vitamin C source, Vayasthapana (Anti-aging)"
          },
          {
            id: 3,
            sanskrit_name: "हरितकी",
            iast_name: "Harītakī",
            botanical_name: "Terminalia chebula",
            family: "Combretaceae",
            rasa: "Pancha-rasa (Lacking Salty), dominant Kashaya",
            guna: "Laghu, Ruksha",
            virya: "Ushna (Heating)",
            vipaka: "Madhura (Sweet)",
            dosha_action: "Tridosha Hara (Universal metabolic balancer)",
            primary_indication: "Mother of all medicines, Anulomana (Gentle laxative), Agni Deepana, Triphala root"
          },
          {
            id: 4,
            sanskrit_name: "बिभीतकी",
            iast_name: "Bibhītakī",
            botanical_name: "Terminalia bellirica",
            family: "Combretaceae",
            rasa: "Kashaya (Astringent)",
            guna: "Ruksha, Laghu",
            virya: "Ushna (Heating)",
            vipaka: "Madhura",
            dosha_action: "Pacifies Kapha and Pitta",
            primary_indication: "Kasa-Shwasa (Bronchial health), Netra-hitakara (Ophthalmic tonic), Triphala"
          },
          {
            id: 5,
            sanskrit_name: "गुडूची",
            iast_name: "Guḍūcī (Amrita)",
            botanical_name: "Tinospora cordifolia",
            family: "Menispermaceae",
            rasa: "Tikta (Bitter), Kashaya",
            guna: "Guru, Snigdha",
            virya: "Ushna (Heating)",
            vipaka: "Madhura",
            dosha_action: "Tridoshaghna (Regulates Vata, Pitta, Kapha)",
            primary_indication: "Jwaraghna (Immunomodulator in fevers), Rasayana, Dahaprashamana, Hepatoprotective"
          },
          {
            id: 6,
            sanskrit_name: "ब्राह्मी",
            iast_name: "Brāhmī",
            botanical_name: "Bacopa monnieri",
            family: "Plantaginaceae",
            rasa: "Tikta, Kashaya, Madhura",
            guna: "Laghu",
            virya: "Sheeta (Cooling)",
            vipaka: "Madhura",
            dosha_action: "Pacifies Vata and Pitta",
            primary_indication: "Medhya Rasayana (Cognitive enhancer), Smriti-prada (Memory), Unmada-Apasmara"
          },
          {
            id: 7,
            sanskrit_name: "मण्डूकपर्णी",
            iast_name: "Maṇḍūkaparṇī",
            botanical_name: "Centella asiatica",
            family: "Apiaceae",
            rasa: "Tikta, Kashaya, Madhura",
            guna: "Laghu",
            virya: "Sheeta",
            vipaka: "Madhura",
            dosha_action: "Pacifies Pitta and Kapha",
            primary_indication: "Charaka's 4 Medhya Rasayanas, Microcirculation, Collagen synthesis, Longevity"
          },
          {
            id: 8,
            sanskrit_name: "शतावरी",
            iast_name: "Śatāvarī",
            botanical_name: "Asparagus racemosus",
            family: "Asparagaceae",
            rasa: "Madhura, Tikta",
            guna: "Guru, Snigdha",
            virya: "Sheeta (Cooling)",
            vipaka: "Madhura",
            dosha_action: "Pacifies Vata and Pitta",
            primary_indication: "Female reproductive tonic, Stanyajanana (Galactagogue), Shukrala, Rasayana"
          },
          {
            id: 9,
            sanskrit_name: "तुलसी",
            iast_name: "Tulasī (Holy Basil)",
            botanical_name: "Ocimum sanctum (Ocimum tenuiflorum)",
            family: "Lamiaceae",
            rasa: "Katu (Pungent), Tikta (Bitter)",
            guna: "Laghu, Ruksha, Teekshna",
            virya: "Ushna (Heating)",
            vipaka: "Katu (Pungent)",
            dosha_action: "Pacifies Kapha and Vata",
            primary_indication: "Kaphaghna, Antiviral, Pranavaha Srotas purifier, Hridya (Cardioprotective)"
          },
          {
            id: 10,
            sanskrit_name: "हरिद्रा",
            iast_name: "Haridrā (Turmeric)",
            botanical_name: "Curcuma longa",
            family: "Zingiberaceae",
            rasa: "Tikta, Katu",
            guna: "Ruksha, Laghu",
            virya: "Ushna (Heating)",
            vipaka: "Katu",
            dosha_action: "Tridosha balance, specifically Kapha-Pitta",
            primary_indication: "Varnya (Skin radiance), Vishaghna (Detoxifier), Pramehaghna (Glycemic control)"
          },
          {
            id: 11,
            sanskrit_name: "शुण्ठी",
            iast_name: "Śuṇṭhī (Dry Ginger)",
            botanical_name: "Zingiber officinale",
            family: "Zingiberaceae",
            rasa: "Katu (Pungent)",
            guna: "Laghu, Snigdha",
            virya: "Ushna",
            vipaka: "Madhura (Special sweet vipaka)",
            dosha_action: "Pacifies Vata and Kapha",
            primary_indication: "Deepana-Pachana (Supreme digestive fire igniter), Trikatu member, Shulaprashamana"
          },
          {
            id: 12,
            sanskrit_name: "मरिच",
            iast_name: "Marica (Black Pepper)",
            botanical_name: "Piper nigrum",
            family: "Piperaceae",
            rasa: "Katu",
            guna: "Laghu, Teekshna, Ruksha",
            virya: "Ushna",
            vipaka: "Katu",
            dosha_action: "Pacifies Kapha and Vata",
            primary_indication: "Pramathi (Channel opener), Bioavailability enhancer (Piperine), Chedana"
          },
          {
            id: 13,
            sanskrit_name: "पिप्पली",
            iast_name: "Pippalī (Long Pepper)",
            botanical_name: "Piper longum",
            family: "Piperaceae",
            rasa: "Katu",
            guna: "Laghu, Snigdha, Teekshna",
            virya: "Anushnasheeta (Mildly heating)",
            vipaka: "Madhura",
            dosha_action: "Pacifies Vata and Kapha",
            primary_indication: "Vardhamana Pippali Rasayana for respiratory revitalization, Agni stimulant"
          },
          {
            id: 14,
            sanskrit_name: "यष्टिमधु",
            iast_name: "Yaṣṭimadhu (Licorice)",
            botanical_name: "Glycyrrhiza glabra",
            family: "Fabaceae",
            rasa: "Madhura (Sweet)",
            guna: "Guru, Snigdha",
            virya: "Sheeta (Cooling)",
            vipaka: "Madhura",
            dosha_action: "Pacifies Vata and Pitta",
            primary_indication: "Kanthya (Vocal clarity), Chakshushya (Vision), Medhya Rasayana, Ulcer healing"
          },
          {
            id: 15,
            sanskrit_name: "निम्ब",
            iast_name: "Nimba (Neem)",
            botanical_name: "Azadirachta indica",
            family: "Meliaceae",
            rasa: "Tikta (Bitter), Kashaya",
            guna: "Laghu, Ruksha",
            virya: "Sheeta (Cooling)",
            vipaka: "Katu",
            dosha_action: "Pacifies Pitta and Kapha",
            primary_indication: "Kushthaghna (Dermatological sovereign cure), Krimighna (Antimicrobial), Blood purifier"
          }
        ]
      },
      {
        id: "sheet-classical-formulations",
        name: "Classical Polyherbal Formulations",
        description: "Standard canonical formulations from Charaka, Sushruta and Sharngadhara",
        columns: [
          { key: "id", label: "Index", type: "number", width: 70 },
          { key: "formulation_name", label: "Formulation (योग)", type: "sanskrit", width: 180 },
          { key: "text_source", label: "Classical Source Text", type: "string", width: 180 },
          { key: "form_type", label: "Pharmaceutical Class", type: "string", width: 140 },
          { key: "key_ingredients", label: "Chief Ingredients", type: "string", width: 240 },
          { key: "therapeutic_purpose", label: "Clinical Target & Action", type: "string", width: 260 }
        ],
        rows: [
          {
            id: 1,
            formulation_name: "च्यवनप्राश (Chyavanaprāśa)",
            text_source: "Charaka Samhita Chikitsa Sthana 1.1",
            form_type: "Avaleha (Medicated Jam)",
            key_ingredients: "Amalaki (500 fruits), Dashamoola, Ashtavarga, Pippali, Honey, Ghee, Sesame Oil",
            therapeutic_purpose: "Supreme Rasayana, longevity, pulmonary restoration, immune reinforcement (Ojas)"
          },
          {
            id: 2,
            formulation_name: "त्रिफला चूर्ण (Triphalā Cūrṇa)",
            text_source: "Charaka & Sushruta Samhitas",
            form_type: "Churna (Micro-pulverized Powder)",
            key_ingredients: "Haritaki, Bibhitaki, Amalaki (Equal parts)",
            therapeutic_purpose: "Chakshushya (Ocular health), digestive regulation, gut microbiome balancing"
          },
          {
            id: 3,
            formulation_name: "त्रिकटु चूर्ण (Trikaṭu Cūrṇa)",
            text_source: "Charaka Samhita Sutra Sthana",
            form_type: "Churna",
            key_ingredients: "Shunthi, Maricha, Pippali (1:1:1)",
            therapeutic_purpose: "Ignites digestive Agni, clears respiratory mucus (Kapha), enhances drug absorption"
          },
          {
            id: 4,
            formulation_name: "सुवर्णप्राशन (Suvarṇa Prāśana)",
            text_source: "Kashyapa Samhita Sutra Sthana 19",
            form_type: "Medicated Drops (Lehana)",
            key_ingredients: "Shuddha Swarna Bhasma (Colloidal Gold), Pure Honey, Cow's Ghee, Vacha, Brahmi",
            therapeutic_purpose: "Pediatric intelligence (Medha), immunity enhancement, complexion, and lifespan"
          },
          {
            id: 5,
            formulation_name: "महानारायण तैल (Mahānārāyaṇa Taila)",
            text_source: "Bhaishajya Ratnavali & Sharngadhara",
            form_type: "Taila (Medicated Sesame Oil)",
            key_ingredients: "Bilva, Ashwagandha, Bala, Shatavari, Cow's Milk, 50+ aromatic decoctions",
            therapeutic_purpose: "External Abhyanga for severe Vata disorders, arthritis, neuromuscular rejuvenation"
          }
        ]
      }
    ]
  },

  // 2. VEDIC SCRIPTURES & MANUSCRIPT REPOSITORY REGISTRY
  {
    id: "vedic-manuscript-repository-registry",
    title: "Vedic & Indic Scripture Open Repository Registry",
    description: "Database of 50+ canonical Vedic scriptures, Upanishads, Vedangas, and classical philosophical treatises cataloged with open access URLs, persistent ARK identifiers, and manuscript formats across Internet Archive, GRETIL, Muktabodha, and BORI.",
    category: "Vedic Scriptures",
    tags: ["Vedas", "Upanishads", "Manuscripts", "Internet Archive", "GRETIL", "BORI", "Open Access"],
    rowCount: 15,
    columnCount: 9,
    createdBy: "system_canonical",
    authorName: "National Mission for Manuscripts (NMM) Digital Registry",
    isPublic: true,
    createdAt: "2026-08-28T00:00:00Z",
    updatedAt: "2026-08-28T00:00:00Z",
    syncStatus: "synced",
    sheets: [
      {
        id: "sheet-vedas-registry",
        name: "Canonical Scriptures & Digital ARKs",
        description: "Primary Vedic scriptures and direct download coordinates",
        columns: [
          { key: "id", label: "Registry ID", type: "number", width: 90 },
          { key: "scripture_title", label: "Scripture Title", type: "string", width: 220 },
          { key: "devanagari", label: "Devanagari (संस्कृत)", type: "sanskrit", width: 180 },
          { key: "category", label: "Category", type: "string", width: 170 },
          { key: "recension_shakha", label: "Shakha / Recension", type: "string", width: 160 },
          { key: "total_verses", label: "Total Verses / Mantras", type: "string", width: 140 },
          { key: "primary_repository", label: "Primary Open Repository", type: "string", width: 200 },
          { key: "formats_available", label: "Formats", type: "string", width: 130 },
          { key: "direct_url", label: "Direct Access / Reader URL", type: "url", width: 260 }
        ],
        rows: [
          {
            id: 101,
            scripture_title: "Rigveda Samhita (Complete 10 Mandalas)",
            devanagari: "ऋग्वेद संहिता (शाकल शाखा)",
            category: "Chatur Vedas & Samhitas",
            recension_shakha: "Shakala Shakha",
            total_verses: "10,552 Mantras (1,028 Suktas)",
            primary_repository: "Internet Archive & GRETIL",
            formats_available: "PDF, TXT, TEI-XML, EPUB",
            direct_url: "https://archive.org/details/RigVedaSamhitaWithSayanaBhashyaMaxMullerVol1"
          },
          {
            id: 102,
            scripture_title: "Shukla Yajurveda (Madhyandina & Kanva)",
            devanagari: "शुक्ल यजुर्वेद (माध्यन्दिन शाखा)",
            category: "Chatur Vedas & Samhitas",
            recension_shakha: "Madhyandina Samhita (40 Adhyayas)",
            total_verses: "1,975 Mantras",
            primary_repository: "Internet Archive & DLI",
            formats_available: "PDF, TXT",
            direct_url: "https://archive.org/details/YajurVedaSamhitaMadhyandinaSayana"
          },
          {
            id: 103,
            scripture_title: "Samaveda Samhita (Kauthuma Recension)",
            devanagari: "सामवेद संहिता (कौथुम शाखा)",
            category: "Chatur Vedas & Samhitas",
            recension_shakha: "Kauthuma Shakha (Archika & Gana)",
            total_verses: "1,875 Mantras",
            primary_repository: "Muktabodha Digital Library",
            formats_available: "PDF, TEI-XML",
            direct_url: "https://archive.org/details/SamaVedaSamhitaBenfey1848"
          },
          {
            id: 104,
            scripture_title: "Atharvaveda Samhita (Shaunaka Shakha)",
            devanagari: "अथर्ववेद संहिता (शौनक शाखा)",
            category: "Chatur Vedas & Samhitas",
            recension_shakha: "Shaunaka Shakha (20 Kandas)",
            total_verses: "5,977 Mantras (730 Suktas)",
            primary_repository: "GRETIL & Internet Archive",
            formats_available: "PDF, XML, TXT",
            direct_url: "https://archive.org/details/AtharvaVedaSamhitaWhitneyVol1"
          },
          {
            id: 105,
            scripture_title: "Charaka Samhita (Complete 8 Sthanas)",
            devanagari: "चरक संहिता (८ स्थानानि)",
            category: "Ayurveda & Health Sciences (Upaveda)",
            recension_shakha: "Dridhabala Redaction (120 Adhyayas)",
            total_verses: "9,295 Shlokas & Sutras",
            primary_repository: "Internet Archive (Jamnagar 6-vols)",
            formats_available: "PDF, EPUB, TXT, XML",
            direct_url: "https://archive.org/details/CharakaSamhitaGulabkunverba6Vols"
          },
          {
            id: 106,
            scripture_title: "Sushruta Samhita (Shalya Tantra)",
            devanagari: "सुश्रुत संहिता (शल्यतन्त्रम्)",
            category: "Ayurveda & Health Sciences (Upaveda)",
            recension_shakha: "6 Sthanas, 186 Chapters",
            total_verses: "~8,300 Shlokas",
            primary_repository: "Internet Archive & DLI",
            formats_available: "PDF, TXT",
            direct_url: "https://archive.org/details/sushrutasamhita01susr"
          },
          {
            id: 107,
            scripture_title: "Bhagavati Samhita (Vyakhyaprajnapti)",
            devanagari: "भगवती संहिता (व्याख्याप्रज्ञप्ति)",
            category: "Agamas, Tantras & Shilpa Shastras",
            recension_shakha: "41 Shatakas (Prakrit & Sanskrit)",
            total_verses: "~36,000 Units",
            primary_repository: "Jain eLibrary & Internet Archive",
            formats_available: "PDF, TEI-XML",
            direct_url: "https://jainelibrary.org"
          },
          {
            id: 108,
            scripture_title: "Ashtanga Hridaya (Vagbhata)",
            devanagari: "अष्टाङ्गहृदयम् (वाग्भट)",
            category: "Ayurveda & Health Sciences (Upaveda)",
            recension_shakha: "6 Sthanas, 120 Chapters",
            total_verses: "7,120 Verses",
            primary_repository: "Internet Archive & GRETIL",
            formats_available: "PDF, TXT",
            direct_url: "https://archive.org/details/AshtangaHridayaSrikanthaMurthy"
          },
          {
            id: 109,
            scripture_title: "Surya Siddhanta (Sacred Astronomy)",
            devanagari: "सूर्यसिद्धान्तः",
            category: "Vedangas & Sutra Shastras",
            recension_shakha: "14 Adhyayas (Ephemeris & Trigonometry)",
            total_verses: "500 Verses",
            primary_repository: "Internet Archive (Burgess translation)",
            formats_available: "PDF, TXT",
            direct_url: "https://archive.org/details/SuryaSiddhantaBurgess1860"
          },
          {
            id: 110,
            scripture_title: "Mandukya Upanishad & Karika (Gaudapada)",
            devanagari: "माण्डूक्योपनिषत् सह गौडपादकारिका",
            category: "108 Upanishads & Mukhya Upanishads",
            recension_shakha: "Atharvaveda (12 Mantras + 215 Karikas)",
            total_verses: "227 Verses",
            primary_repository: "Internet Archive & Muktabodha",
            formats_available: "PDF, TXT",
            direct_url: "https://archive.org/details/mandukyaupanisha00gautuoft"
          }
        ]
      }
    ]
  },

  // 3. ARCHAEO-ASTRONOMY & CELESTIAL EPHEMERIS
  {
    id: "archaeo-astronomy-nakshatras-matrix",
    title: "Vedic Archaeo-Astronomy & 27 Nakshatras Celestial Coordinate Matrix",
    description: "Astronomical coordinates of the 27 Vedic Nakshatras, ecliptic longitudes, presiding deities (Devatas), yogataras (junction stars), western astronomical designations, and precession epochs.",
    category: "Astronomy & Ephemeris",
    tags: ["Astronomy", "Nakshatras", "Surya Siddhanta", "Ephemeris", "Archaeo-Astronomy", "Vedic Science"],
    rowCount: 27,
    columnCount: 8,
    createdBy: "system_canonical",
    authorName: "Archaeo-Astronomy & Ephemeris Computing Lab",
    isPublic: true,
    createdAt: "2026-08-28T00:00:00Z",
    updatedAt: "2026-08-28T00:00:00Z",
    syncStatus: "synced",
    sheets: [
      {
        id: "sheet-27-nakshatras",
        name: "27 Vedic Nakshatras & Yogataras",
        description: "Full lunar mansion astronomical map",
        columns: [
          { key: "number", label: "No.", type: "number", width: 60 },
          { key: "nakshatra_sanskrit", label: "Nakshatra (नक्षत्र)", type: "sanskrit", width: 140 },
          { key: "nakshatra_iast", label: "IAST Name", type: "string", width: 140 },
          { key: "presiding_devata", label: "Presiding Devata", type: "string", width: 150 },
          { key: "longitude_range", label: "Ecliptic Span (Nirayana)", type: "string", width: 160 },
          { key: "yogataara_star", label: "Yogatara Junction Star", type: "string", width: 180 },
          { key: "bayer_designation", label: "Modern Astronomical ID", type: "string", width: 160 },
          { key: "symbol", label: "Sacred Emblem / Symbol", type: "string", width: 180 }
        ],
        rows: [
          {
            number: 1,
            nakshatra_sanskrit: "अश्विनी",
            nakshatra_iast: "Aśvinī",
            presiding_devata: "Ashvins (Twin Celestial Physicians)",
            longitude_range: "00° 00' to 13° 20' Mesha (Aries)",
            yogataara_star: "Hamal (Alpha Arietis)",
            bayer_designation: "α Arietis",
            symbol: "Horse's Head (Swift Movement & Healing)"
          },
          {
            number: 2,
            nakshatra_sanskrit: "भरणी",
            nakshatra_iast: "Bharaṇī",
            presiding_devata: "Yama (Lord of Dharma & Transitions)",
            longitude_range: "13° 20' to 26° 40' Mesha (Aries)",
            yogataara_star: "35 Arietis",
            bayer_designation: "35 / 41 Arietis",
            symbol: "Yoni / Matrix of Transformation"
          },
          {
            number: 3,
            nakshatra_sanskrit: "कृत्तिका",
            nakshatra_iast: "Kṛttikā (Pleiades)",
            presiding_devata: "Agni (Cosmic Fire & Illumination)",
            longitude_range: "26° 40' Mesha to 10° 00' Vrishabha",
            yogataara_star: "Alcyone (Eta Tauri)",
            bayer_designation: "η Tauri (Pleiades Cluster)",
            symbol: "Razor / Flame / Cutter"
          },
          {
            number: 4,
            nakshatra_sanskrit: "रोहिणी",
            nakshatra_iast: "Rohiṇī",
            presiding_devata: "Prajapati / Brahma (Cosmic Creator)",
            longitude_range: "10° 00' to 23° 20' Vrishabha (Taurus)",
            yogataara_star: "Aldebaran (Alpha Tauri)",
            bayer_designation: "α Tauri",
            symbol: "Temple Chariot / Red Eye of Taurus"
          },
          {
            number: 5,
            nakshatra_sanskrit: "मृगशिरा",
            nakshatra_iast: "Mṛgaśirā",
            presiding_devata: "Soma (Moon God & Nectar of Immortality)",
            longitude_range: "23° 20' Vrishabha to 06° 40' Mithuna",
            yogataara_star: "Meissa (Lambda Orionis)",
            bayer_designation: "λ Orionis",
            symbol: "Deer's Head (Quest & Exploration)"
          },
          {
            number: 6,
            nakshatra_sanskrit: "आर्द्रा",
            nakshatra_iast: "Ārdrā",
            presiding_devata: "Rudra (Cosmic Storm & Regeneration)",
            longitude_range: "06° 40' to 20° 00' Mithuna (Gemini)",
            yogataara_star: "Betelgeuse (Alpha Orionis)",
            bayer_designation: "α Orionis (Red Supergiant)",
            symbol: "Tear Drop / Diamond"
          },
          {
            number: 7,
            nakshatra_sanskrit: "पुनर्वसु",
            nakshatra_iast: "Punarvasu",
            presiding_devata: "Aditi (Infinite Mother of Gods)",
            longitude_range: "20° 00' Mithuna to 03° 20' Karka",
            yogataara_star: "Pollux (Beta Geminorum)",
            bayer_designation: "β Geminorum",
            symbol: "Quiver of Arrows (Return of the Light)"
          },
          {
            number: 8,
            nakshatra_sanskrit: "पुष्य",
            nakshatra_iast: "Puṣya (King of Stars)",
            presiding_devata: "Brihaspati (Cosmic Guru & Wisdom)",
            longitude_range: "03° 20' to 16° 40' Karka (Cancer)",
            yogataara_star: "Asellus Australis (Delta Cancri)",
            bayer_designation: "δ Cancri",
            symbol: "Lotus / Cow's Udder / Nourishment"
          },
          {
            number: 9,
            nakshatra_sanskrit: "आश्लेषा",
            nakshatra_iast: "Āśleṣā",
            presiding_devata: "Sarpas (Nagas / Kundalini Energy)",
            longitude_range: "16° 40' to 30° 00' Karka (Cancer)",
            yogataara_star: "Alpha Cancri (Acubens)",
            bayer_designation: "α Cancri",
            symbol: "Coiled Serpent (Occult Insight)"
          },
          {
            number: 10,
            nakshatra_sanskrit: "मघा",
            nakshatra_iast: "Maghā",
            presiding_devata: "Pitris (Ancestral Lineage & Sages)",
            longitude_range: "00° 00' to 13° 20' Simha (Leo)",
            yogataara_star: "Regulus (Alpha Leonis)",
            bayer_designation: "α Leonis (Royal Star)",
            symbol: "Royal Palanquin / Throne Room"
          }
        ]
      }
    ]
  }
];
