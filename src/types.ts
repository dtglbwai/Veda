export interface Scripture {
  verseId: string;
  book: string;
  chapter: string;
  verseNumber: string;
  sanskrit: string;
  translation: string;
  context?: string;
  deepInsight?: string;
}

export interface ScriptureResponse {
  scriptures: Scripture[];
}

export type ScriptureLanguage = "Sanskrit" | "Hindi" | "Marathi" | "Gujarati" | "Bengali" | "Tamil" | "Telugu" | "Kannada" | "Malayalam" | "Odia" | "Punjabi";
export type ExplanationLanguage = 
  // Indian Classical & Regional Languages
  | "Hindi" 
  | "Sanskrit" 
  | "Marathi" 
  | "Tamil" 
  | "Telugu" 
  | "Kannada" 
  | "Malayalam" 
  | "Bengali" 
  | "Gujarati" 
  | "Odia" 
  | "Punjabi" 
  | "Assamese"
  // International Languages
  | "English" 
  | "Spanish" 
  | "French" 
  | "German" 
  | "Russian" 
  | "Japanese" 
  | "Chinese" 
  | "Arabic" 
  | "Italian" 
  | "Portuguese" 
  | "Korean";

// ================= AGENTIC RESEARCH INTERFACES =================

export interface ResearchAgent {
  agentId: string;
  agentName: string;
  role: string;
  domain: "archeology" | "astronomy" | "epigraphy" | "iconography" | "scriptures" | "sensors" | "traditions";
  finding: string;
  crossExamination?: string;
  citations?: string[];
  confidence: number;
}

export interface AstronomicalData {
  nakshatra: string;
  equinoxShift: string;
  planetaryConjunctions?: string;
  ayanamsha?: string;
  historicalDateEstimated: string;
  scriptureReference?: string;
}

export interface EpigraphyData {
  scriptType: string;
  language: string;
  paleographicCentury: string;
  sampleTransliteration: string;
  translation?: string;
  morphologicalFeatures?: string;
}

export interface IconographyData {
  canonicalText: string;
  talamanaSystem: string;
  mudrasAndAsanas: string;
  mandalaGeometry?: string;
  attributesAndAyudhas?: string[];
}

export interface SensorTelemetryReport {
  gprLiDAR: string;
  hyperspectralUVNIR: string;
  rtiLighting: string;
  archaeoAcoustics: string;
  c14OSLDating?: string;
}

export interface LivingTraditionData {
  customOrRitual: string;
  scientificMechanism: string;
  acousticVibrationMetrics?: string;
  contemporaryPractice?: string;
}

export interface AgentResearchResult {
  topic: string;
  executiveSummary: string;
  confidenceScore: number;
  datingRange: string;
  astronomicalEra?: string;
  agents: ResearchAgent[];
  astronomicalData: AstronomicalData;
  epigraphyData: EpigraphyData;
  iconographyData: IconographyData;
  sensorTelemetry: SensorTelemetryReport;
  livingTradition: LivingTraditionData;
  recommendedFieldProtocols: string[];
}

// ================= ARTIFACT MULTIMODAL SCANNER =================

export interface ArtifactAnalysisResult {
  title: string;
  identifiedEpoch: string;
  material: string;
  scriptIdentified: string;
  transliteration?: string;
  translation?: string;
  iconographicCanon: string;
  talamanaRatios?: string;
  astronomicalSignificance?: string;
  sensorRecommendations: string[];
  conservationStatus: string;
  fullScholarlyAnalysis: string;
}

// ================= ARCHAEO-ASTRONOMY & EPHEMERIS =================

export interface PlanetPosition {
  name: string;
  longitudeDeg: number;
  zodiacSign: string;
  nakshatra: string;
  pada: number;
  isRetrograde: boolean;
  historicalSignificance?: string;
}

export interface EphemerisResult {
  julianDay: number;
  precessionAngleDegrees: number;
  vernalEquinoxNakshatra: string;
  poleStarOfEra: string;
  ayanamsa: string;
  planets: PlanetPosition[];
  notableAlignments: string[];
  scriptureCorrelation: string;
  astronomicalValidationNotes?: string;
}

// ================= PANCHANGA CALCULATOR =================

export interface SamvatDetails {
  vikramSamvat: string;
  shakaSamvat: string;
  kaliYugaYear: string;
  ayana: string;
  ritu: string;
  māsa: string;
  paksha: string;
}

export interface FiveLimbsData {
  tithi: {
    name: string;
    paksha: string;
    percentage?: number;
    deity: string;
    nature?: string;
  };
  vara: {
    name: string;
    sanskritName: string;
    planetaryLord: string;
    element?: string;
  };
  nakshatra: {
    name: string;
    number: number;
    lord: string;
    deity: string;
    pada: number;
    degrees?: string;
  };
  yoga: {
    name: string;
    number: number;
    meaning: string;
    nature?: string;
  };
  karana: {
    name: string;
    type: string;
    deity?: string;
  };
}

export interface PanchangResult {
  date: string;
  location: string;
  samvat: SamvatDetails;
  fiveLimbs: FiveLimbsData;
  solarLunarTimes: {
    sunrise: string;
    sunset: string;
    moonrise?: string;
    moonset?: string;
    sunLongitude?: string;
    moonLongitude?: string;
    sunZodiac: string;
    moonZodiac: string;
  };
  muhurtas: {
    brahmaMuhurta: string;
    abhijitMuhurta: string;
    rahuKalam: string;
    gulikaKalam?: string;
    yamaganda?: string;
  };
  astronomicalNotes?: string;
}

// ================= CARBON DATING & AMS C-14 =================
export interface CarbonDatingResult {
  uncalibratedAgeBP: string;
  uncalibratedError: number;
  calibrated1Sigma: string;
  calibrated2Sigma: string;
  historicalPeriod: string;
  delta13CCorrected: number;
  fractionModern: number;
  amsDiagnostics: {
    acceleratorVoltageMV: string;
    carbon12CurrentMicroAmps: string;
    carbon14CountRateHz: string;
    oxalicStandardRatio?: string;
  };
  pretreatmentProtocol: string;
  stratigraphicSignificance: string;
  calibrationCurvePoints?: {
    calYearBCE: number;
    probability: number;
  }[];
}

// ================= RADIATION & DOSIMETRY SENSORS =================
export interface RadiationIsotope {
  isotope: string;
  energyKeV: number;
  activityBqKg: number;
  decaySeries: string;
  provenanceInsight?: string;
}

export interface RadiationSpectrometryResult {
  sensorUsed: string;
  identifiedIsotopes: RadiationIsotope[];
  annualDoseRateMilliGy: number;
  paleoDoseEquivalentGy?: number;
  luminescenceAgeCalculated: string;
  provenanceClayFingerprint: string;
  safetyAndPreservationNotes?: string;
}

// ================= PIGMENT SPECTROSCOPY & ARTOGRAPHY =================
export interface PigmentXrfLine {
  element: string;
  line: string;
  energyKeV: number;
  relativeIntensity?: string;
}

export interface PigmentAnalysisResult {
  mineralNameSanskrit: string;
  mineralNameEnglish: string;
  chemicalFormula: string;
  xrfEmissionLines: PigmentXrfLine[];
  binderIdentified: string;
  geologicalSource: string;
  historicalEraMuralCitation?: string;
  conservationAdvice?: string;
}

// ================= CALLIGRAPHY & ANCIENT PENMANSHIP =================
export interface CalligraphyGlyphGuide {
  char: string;
  glyph: string;
  strokeOrderGuide: string;
}

export interface CalligraphyResult {
  scriptName: string;
  transcribedText: string;
  iastPhonetics: string;
  englishTranslation?: string;
  calligraphicDuctus: {
    nibAngleDegrees: number;
    strokeDirection: string;
    recommendedTool: string;
    inkMedium?: string;
  };
  glyphBreakdownList: CalligraphyGlyphGuide[];
  historicalProvenanceCitation?: string;
}

export interface SolarLunarData {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  sunLongitude: string;
  moonLongitude: string;
  sunZodiac: string;
  moonZodiac: string;
}

export interface MuhurtaData {
  brahmaMuhurta: string;
  abhijitMuhurta: string;
  rahuKalam: string;
  gulikaKalam: string;
  yamaganda: string;
}

// ================= EPIGRAPHY & PALEOGRAPHY =================

export interface GlyphBreakdown {
  glyph: string;
  phoneticIpa: string;
  devanagariEquiv: string;
  strokeDescription?: string;
}

export interface EpigraphyDecipherResult {
  scriptName: string;
  historicalPeriod: string;
  languageFamily: string;
  iastTransliteration: string;
  targetScriptOutput: string;
  glyphBreakdown: GlyphBreakdown[];
  linguisticMeaning: string;
  historicalEdictReference?: string;
  paleographicEvolutionNotes?: string;
  sensorImagingRecommendation?: string;
}

// ================= TECHNOLOGY & EARTH-SCIENCE SENSORS =================

export type SensorType = 
  | "gpr_lidar" 
  | "hyperspectral" 
  | "rti_lighting" 
  | "archaeo_acoustics" 
  | "horizon_alignment" 
  | "carbon14_dating" 
  | "iconometry_3d"
  | "oceanography"
  | "oceanology"
  | "sedimentology"
  | "genology";

export interface SensorMetadata {
  id: SensorType;
  name: string;
  category: string;
  scientificUnit: string;
  physicsPrinciple: string;
  indicApplication: string;
  operatingBands: string;
  status: "ONLINE" | "CALIBRATING" | "ACTIVE_SCAN";
}

// ================= OCEANOGRAPHY, OCEANOLOGY, SEDIMENTOLOGY & GENOLOGY =================

export interface OceanographyProfile {
  siteName: string;
  submersionDepthMeters: number;
  bathymetrySonarMethod: string;
  subBottomAcousticStratum: string;
  tidalHydrodynamics: string;
  marineArchaeologyFeatures: string[];
  salinityAndCorrosionIndex: string;
  submergedStructuresCatalog: string;
}

export interface OceanologyGeoscienceProfile {
  formationName: string;
  holoceneSeaLevelDelta: string;
  transgressionEpoch: string;
  coralReefPaleoclimatology: string;
  marineSedimentCoreDepth: string;
  luminescenceOSLAge: string;
  geomorphologicalEvolution: string;
}

export interface SedimentologyCoreProfile {
  riverBasin: string;
  boreholeId: string;
  depthMeters: number;
  strataLayers: {
    depthRange: string;
    sedimentType: string;
    mineralComposition: string;
    grainSizePhi: number;
    paleoHydrologyInsight: string;
    calibratedDateBCE: string;
  }[];
  zirconProvenanceSignature: string;
  monsoonVarvePattern: string;
}

export interface GenologyAncientDnaProfile {
  sampleId: string;
  siteAndContext: string;
  c14DatingRange: string;
  mTDNAHaplogroup: string;
  yDnaHaplogroup: string;
  endogenousDnaYieldPercent: number;
  damagePatternCtoT: string;
  ancestryContinuityClade: string;
  osteologicalFindings: string;
  populationGenomicsInsight: string;
}

// ================= COSMIC TIME & SAGAN 8.64B YEARS =================

export interface CosmicTimeCycle {
  name: string;
  humanSolarYears: number;
  divineYears?: number;
  scriptureReference: string;
  cosmicSignificance: string;
  modernAstrophysicsEquiv: string;
}

// ================= PUNE IKS INSTITUTIONS & SYLLABI STANDARDS =================

export type PuneInstituteId = 
  | "bsiks"
  | "mitsvs"
  | "despu"
  | "vu_ciks"
  | "bori"
  | "deccan_college";

export type AcademicLevel = 
  | "Ph.D."
  | "Master's (M.Sc. / M.A. / M.Tech / MIKS)"
  | "Bachelor's (B.Sc. / B.A.)"
  | "Postgraduate Diploma"
  | "Certificate / Fellowship"
  | "NEP Minor / Open Elective";

export type IKSDomain = 
  | "Vedic Sciences & Epistemology"
  | "Computational Sanskrit & Ayur-Informatics"
  | "Ancient Indian Architecture & Vastu"
  | "Indigenous Metallurgy & Material Sciences"
  | "Governance, Arthashastra & Public Policy"
  | "Classical Indology, Manuscripts & Textual Criticism"
  | "Archaeology, Epigraphy & Lexicography"
  | "Traditional Management & Ethno-Sciences";

export interface CourseUnit {
  unitNumber: number;
  title: string;
  durationHours: number;
  description: string;
  keyTopics: string[];
  canonicalSourceTexts: string[];
}

export interface CourseSyllabus {
  courseCode: string;
  courseTitle: string;
  academicLevel: AcademicLevel;
  credits: number;
  contactHours: {
    lecture: number;
    tutorial: number;
    practicalOrField: number;
  };
  domain: IKSDomain;
  semesterOrTerm?: string;
  courseOverview: string;
  learningOutcomes: string[];
  units: CourseUnit[];
  prescribedPrimaryLiterature: string[];
  referenceScholarlyWorks: string[];
  evaluationScheme: {
    continuousAssessmentPercent: number;
    endSemesterExamPercent: number;
    practicalOrProjectPercent: number;
    criteria: string[];
  };
}

export interface AcademicProgram {
  programId: string;
  title: string;
  level: AcademicLevel;
  duration: string;
  totalCredits: number;
  recognitionOrAffiliation: string;
  nepComplianceSummary: string;
  eligibility: string;
  targetAudience: string;
  programObjectives: string[];
  curriculumStructure: {
    semesterOrYear: string;
    semesterTitle: string;
    credits: number;
    courses: CourseSyllabus[];
  }[];
}

export interface PuneInstitution {
  id: PuneInstituteId;
  name: string;
  shortName: string;
  tagline: string;
  establishedYear?: number;
  category: "Independent IKS Academy" | "Vedic Science University School" | "NEP University IKS Center" | "Heritage Indology Institute" | "Archaeological Deemed University";
  location: {
    address: string;
    area: string;
    pincode: string;
    city: string;
    coordinates?: { lat: number; lng: number };
  };
  overview: string;
  accreditationAndAffiliation: string[];
  nep2020StandardsCompliance: {
    interdisciplinaryIntegration: string;
    creditTransferABC: string;
    multilingualAndSourceTexts: string;
    experientialLearningAndFieldwork: string;
  };
  keyFacilitiesAndTreasures: string[];
  leadFacultyOrScholars: {
    name: string;
    designation: string;
    specialization: string;
  }[];
  programs: AcademicProgram[];
  uniqueInstitutionalStrengths: string[];
  officialWebsiteUrl: string;
}

// ================= INTERNATIONAL RESEARCHERS E-BOOKS & INDOLOGY MONOGRAPHS =================

export type InternationalEbookCategory = 
  | "Vedic Ritual & Physics"
  | "Archaeo-Astronomy & Chronology"
  | "Mathematics & Geometry"
  | "Linguistics & Paninian NLP"
  | "Medicine & Ayurveda"
  | "Indology & Textual Criticism"
  | "Philosophy & Epistemology"
  | "Temple Architecture & Sacred Arts"
  | "Metallurgy & Ancient Technology";

export interface EbookChapter {
  chapterNumber: number;
  title: string;
  pages: string;
  summary: string;
  keyKeywords: string[];
  sampleExcerpt?: string;
  fullChapterText?: string[];
}

export interface EbookExcerpt {
  title: string;
  citation: string;
  text: string;
  scholarlyCommentary: string;
  relevantScriptureTags?: string[];
}

export interface InternationalEbook {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  authorAffiliation: string;
  authorCountry: string;
  publicationYear: number;
  publisher: string;
  category: InternationalEbookCategory;
  pageCount: number;
  language: string;
  originalLanguage?: string;
  archiveOrOpenAccessUrl: string;
  doiOrIsbn?: string;
  coverBadge: string;
  executiveSummary: string;
  scientificOrEmpiricalMethodology: string;
  keyScholarlyTheses: string[];
  canonicalTextsAnalyzed: string[];
  tableOfContents: EbookChapter[];
  notableExcerpts: EbookExcerpt[];
  impactAndSignificance: string;
  peerReviewsAndPraise: string[];
  bibtexCitation: string;
  fullInteractiveReadingData?: {
    preface: string;
    historicalContext: string;
    scientificFramework: string;
    coreDossier: {
      sectionTitle: string;
      content: string[];
      canonicalPassages?: { text: string; source: string; translation: string }[];
    }[];
    concludingCritique: string;
  };
}// ================= PLATFORM MULTI-LANGUAGE & INDIC SCRIPT LOCALIZATION =================

export type SupportedLanguageCode = 
  // Indian Classical & Regional Languages (15)
  | "sa" // Sanskrit (संस्कृतम्)
  | "hi" // Hindi (हिन्दी)
  | "mr" // Marathi (मराठी)
  | "ta" // Tamil (தமிழ்)
  | "te" // Telugu (తెలుగు)
  | "kn" // Kannada (ಕನ್ನಡ)
  | "ml" // Malayalam (മലയാളം)
  | "bn" // Bengali (বাংলা)
  | "gu" // Gujarati (ગુજરાતી)
  | "or" // Odia (ଓଡ଼ିଆ)
  | "pa" // Punjabi (ਪੰਜਾਬੀ)
  | "ne" // Nepali (नेपाली)
  | "as" // Assamese (অসমীয়া)
  | "ks" // Kashmiri (कॉशुर / کٲشُر)
  | "sd" // Sindhi (सिन्धी / سنڌي)

  // UN Official Languages (6)
  | "en" // English (English)
  | "zh" // Chinese Mandarin (中文)
  | "es" // Spanish (Español)
  | "ar" // Arabic (العربية)
  | "fr" // French (Français)
  | "ru" // Russian (Русский)

  // Globally Recognized International Languages (Europe, Asia, Middle East, Africa, Americas)
  | "de" // German (Deutsch)
  | "ja" // Japanese (日本語)
  | "it" // Italian (Italiano)
  | "pt" // Portuguese (Português)
  | "ko" // Korean (한국어)
  | "nl" // Dutch (Nederlands)
  | "fa" // Persian / Farsi (فارسی)
  | "tr" // Turkish (Türkçe)
  | "pl" // Polish (Polski)
  | "el" // Greek (Ελληνικά)
  | "he" // Hebrew (עברית)
  | "sv" // Swedish (Svenska)
  | "id" // Indonesian (Bahasa Indonesia)
  | "th" // Thai (ภาษาไทย)
  | "vi" // Vietnamese (Tiếng Việt)
  | "cs" // Czech (Čeština)
  | "hu" // Hungarian (Magyar)
  | "bo" // Tibetan (བོད་སྐད)
  | "si" // Sinhala (සිංහල)
  | "my" // Burmese (မြန်မာဘာသာ)
  | "ms" // Malay (Bahasa Melayu)
  | "uk" // Ukrainian (Українська)
  | "da" // Danish (Dansk)
  | "fi" // Finnish (Suomi)
  | "no" // Norwegian (Norsk)
  | "ro" // Romanian (Română)
  | "la" // Latin (Lingua Latina)
  | "tl" // Tagalog / Filipino (Filipino)
  | "sw" // Swahili (Kiswahili)
  | "km" // Khmer (ភាសាខ្មែរ)
  | "mn" // Mongolian (Монгол хэл)
  | "hy" // Armenian (Հայերեն)
  | "ka" // Georgian (ქართული)
  | "bg" // Bulgarian (Български)
  | "sr"; // Serbian (Српски)

export type LanguageRegion = "indian" | "international";
export type LanguageCategory = "indian" | "un_official" | "european" | "asian_middle_east" | "global";

export type IndicScriptCode = 
  | "Devanagari"
  | "IAST"
  | "Tamil"
  | "Telugu"
  | "Kannada"
  | "Malayalam"
  | "Bengali"
  | "Gujarati"
  | "Odia"
  | "Gurmukhi"
  | "Brahmi";

export interface LanguageMetadata {
  code: SupportedLanguageCode;
  name: string;
  nativeName: string;
  region: LanguageRegion;
  category?: LanguageCategory;
  isUNOfficial?: boolean;
  defaultScript: string;
  flag: string;
  scholarlyTradition: string;
  availableTranslationsCount: number;
}

export interface TranslationDictionary {
  [key: string]: string;
}

// ================= VEDIC & HINDU SCRIPTURES PUBLIC REPOSITORY E-BOOKS =================

export type VedicScriptureCategory = 
  | "All Sacred Categories"
  | "Chatur Vedas & Samhitas"
  | "Ayurveda & Health Sciences (Upaveda)"
  | "Brahmanas & Aranyakas"
  | "108 Upanishads & Mukhya Upanishads"
  | "Vedangas & Sutra Shastras"
  | "Upavedas & Classical Sciences"
  | "Shad-Darshanas & Philosophical Bhashyas"
  | "Itihasas & Epics"
  | "18 Mahapuranas & Upapuranas"
  | "Agamas, Tantras & Shilpa Shastras"
  | "Bhakti Classics & Vernacular Canons";

export type PublicRepositorySource = 
  | "Internet Archive (archive.org)"
  | "Digital Library of India (DLI)"
  | "Rare Book Society of India (RBSI)"
  | "GRETIL (Univ. of Göttingen)"
  | "SARIT (Indological Text Archive)"
  | "TITUS (Univ. of Frankfurt)"
  | "Muktabodha Digital Library"
  | "BORI Open Access Repository"
  | "Jain eLibrary Digital Archive"
  | "Thanjavur Saraswathi Mahal Library"
  | "Vedic Reserve (Maharishi Open Univ)"
  | "National Mission for Manuscripts (NMM / IGNCA)"
  | "Sacred Texts Archive (sacred-texts.com)"
  | "Gita Press Public Archives"
  | "TTD Religious Publications"
  | "Wikisource Sanskrit Corpus"
  | "Bibliothèque Nationale de France (BnF Gallica)"
  | "Harvard Oriental Series (HOS)";

export interface AvailableEbookLanguageEdition {
  languageName: string;
  languageCode: string;
  translatorOrEditor: string;
  publicationYear?: number | string;
  publisher?: string;
  formatsAvailable: ("PDF" | "EPUB" | "TXT" | "HTML" | "TEI-XML" | "MOBI" | "RTF")[];
  repositoryName: PublicRepositorySource;
  directReaderOrDownloadUrl: string;
  license: "Public Domain" | "Open Access Creative Commons" | "Academic Fair Use";
}

export interface VedicEbookVerseSample {
  verseNumber: string;
  devanagari: string;
  iast: string;
  padapatha?: string;
  wordForWord?: { word: string; meaning: string }[];
  translationEnglish: string;
  translationsOtherLangs?: { [langKey: string]: string };
  commentaries?: {
    commentator: string;
    school: string;
    text: string;
  }[];
  scientificOrAstronomicalNote?: string;
}

export interface VedicEbookChapter {
  chapterNumber: number | string;
  title: string;
  sanskritTitle?: string;
  pageOrVerseRange: string;
  summary: string;
  keyConcepts: string[];
  publicRepoDirectUrl?: string;
  sampleVerse?: VedicEbookVerseSample;
}

export interface VedicScriptureEbook {
  id: string;
  title: string;
  sanskritTitleDevanagari: string;
  sanskritTitleIAST: string;
  category: VedicScriptureCategory;
  subCategory: string;
  traditionalRishiOrAuthor: string;
  recensionOrShakha: string;
  historicalPeriod: string;
  totalKandasOrAdhyayas: string;
  totalVersesOrMantras: string | number;
  executiveSummary: string;
  swaraAccentsPreserved: boolean;
  notableCommentators: string[];
  
  // Public Repository Canonical Open Access
  canonicalRepository: {
    name: PublicRepositorySource;
    identifierOrArk: string;
    viewUrl: string;
    pdfDownloadUrl?: string;
    epubDownloadUrl?: string;
    txtDownloadUrl?: string;
    teiXmlUrl?: string;
    license: string;
    curatorNotes?: string;
  };
  
  // Alternate Online Public Domain Repositories
  alternateRepositories: {
    name: PublicRepositorySource;
    url: string;
    type: "Full Text PDF" | "Machine Readable XML/TXT" | "Critical Edition Notes" | "Multi-volume Archive" | "Audio Samhita";
    description: string;
  }[];

  // Multi-Language Available Editions & Translations
  availableLanguageEditions: AvailableEbookLanguageEdition[];

  // Rich Interactive TOC & Excerpts
  tableOfContents: VedicEbookChapter[];
  sampleVerses: VedicEbookVerseSample[];
  
  // Archaeo-Astronomy, Cognitive & Scientific Significance
  scienceAndPhilosophySignificance: string;
  
  // Academic Citation
  bibtexCitation: string;
}


