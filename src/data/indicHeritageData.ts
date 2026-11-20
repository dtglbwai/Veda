import { SensorMetadata } from "../types";

export interface HeritageSite {
  id: string;
  name: string;
  location: string;
  stateCountry: string;
  coordinates: string;
  period: string;
  primaryDomain: string;
  description: string;
  keyArtifacts: string[];
  astronomicalFeature: string;
  sensorReadings: {
    gprAnomalyDepth: string;
    hyperspectralBand: string;
    acousticHz: number;
    solarAzimuthEquinox: number;
    c14EstimatedBCE: string;
  };
  sampleImage: string;
}

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: "dwarka_submerged",
    name: "Submerged Marine Dwarka",
    location: "Gulf of Khambhat & Bet Dwarka",
    stateCountry: "Gujarat, India",
    coordinates: "22.2442° N, 68.9685° E",
    period: "Late Harappan to Mahabharata Era (~1500–3100 BCE)",
    primaryDomain: "Underwater Marine Archaeology & Archaeo-Astronomy",
    description: "Submerged submerged fortified bastions, triangular anchor stones with three holes, semi-circular structures, and submerged harbor walls documented by Marine Archaeology Unit (NIO). Corroborates Mahabharata Sabha Parva descriptions of sea reclamation and eventual submersion.",
    keyArtifacts: ["Three-holed stone anchors", "Fortified submerged bastion blocks", "Late Harappan inscribed pottery seals"],
    astronomicalFeature: "Corresponds to the 3102 BCE Kali Yuga astronomical planetary conjunction and Krishna's departure described in Srimad Bhagavatam.",
    sensorReadings: {
      gprAnomalyDepth: "Sub-bottom acoustic profiler: 7m to 12m seabed sediment depth",
      hyperspectralBand: "Underwater blue-green band 480nm-530nm penetration",
      acousticHz: 320,
      solarAzimuthEquinox: 90.2,
      c14EstimatedBCE: "1528 BCE to 3100 BCE (Calibrated)",
    },
    sampleImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "rakhigarhi",
    name: "Rakhigarhi Metropolis",
    location: "Hisar District",
    stateCountry: "Haryana, India",
    coordinates: "29.2882° N, 76.1158° E",
    period: "Early to Mature Indus-Saraswati Civilization (~5500–2600 BCE)",
    primaryDomain: "Stratigraphic Excavation & Ancient DNA Paleogenomics",
    description: "Largest metropolis of the Indus-Saraswati civilization spanning over 350 hectares across 7 mounds. Features monumental granaries, planned drainage, copper metallurgy kilns, lapidary bead workshops, and continuous cultural sequence from Hakra phase.",
    keyArtifacts: ["Indus steatite seal with unicorn & script", "Terracotta wheeled toys", "Carnelian etched beads", "Ancient aDNA burial osteology"],
    astronomicalFeature: "City orientation aligned precisely with Cardinal points and Solar Equinox axis (within 0.5 degrees of true astronomical North).",
    sensorReadings: {
      gprAnomalyDepth: "GPR 400 MHz: Subsurface mud-brick grid walls detected at 1.8m to 3.4m depth",
      hyperspectralBand: "NIR 850nm reveals organic clay tempering in bricks",
      acousticHz: 110,
      solarAzimuthEquinox: 89.8,
      c14EstimatedBCE: "4500 BCE (Early) to 2500 BCE (Mature)",
    },
    sampleImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "keezhadi",
    name: "Keezhadi Sangam Urban Complex",
    location: "Sivagangai District (Vaigai River Basin)",
    stateCountry: "Tamil Nadu, India",
    coordinates: "9.8631° N, 78.1884° E",
    period: "Early Sangam Era (~600 BCE to 100 CE)",
    primaryDomain: "Urban Epigraphy & Tamil-Brahmi Paleography",
    description: "Extensive Sangam-age riverine civilization along the Vaigai river revealing high literacy across societal strata. Thousands of potsherds bearing Tamil-Brahmi inscribed names, brick drainage channels, spinning whorls, and gold ornaments.",
    keyArtifacts: ["Tamil-Brahmi inscribed black-and-red ware sherds", "Agate & quartz ear ornaments", "Bone styluses for palm-leaf incising"],
    astronomicalFeature: "Archaeoastronomical alignment with autumnal equinox and Sangam calendar (Aadi Perukku solar cycles).",
    sensorReadings: {
      gprAnomalyDepth: "Dual-frequency GPR: Ring-well structures at 2.2m depth",
      hyperspectralBand: "SWIR 1450nm-1900nm for identifying carbonised ink pigments",
      acousticHz: 432,
      solarAzimuthEquinox: 90.0,
      c14EstimatedBCE: "580 BCE to 300 BCE (Beta Analytic AMS dated)",
    },
    sampleImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "konark_sun_temple",
    name: "Konark Surya Devalaya",
    location: "Puri Coast",
    stateCountry: "Odisha, India",
    coordinates: "19.8876° N, 86.0945° E",
    period: "Eastern Ganga Dynasty (~1250 CE, Raja Narasimhadeva I)",
    primaryDomain: "Archaeo-Astronomy, Sundial Horology & Shilpa Shastra",
    description: "Conceived as a colossal celestial chariot with 24 carved stone wheels pulled by seven horses. The wheels function as high-precision sundials that compute time down to the 'Prahar' and minutes using the shadow cast by the hub axel.",
    keyArtifacts: ["24 Cosmic Sundial Wheels with 8 major & 8 minor spokes", "Chlorite stone Surya icons in Dhyana posture", "Astronomical iron tie-beams with magnetic properties"],
    astronomicalFeature: "Main sanctum entrance oriented precisely to receive the first rays of the dawn Sun across the Bay of Bengal during Vernal & Autumnal Equinoxes.",
    sensorReadings: {
      gprAnomalyDepth: "LiDAR 3D Mesh: Solar ray vector trajectory calculated at 6:04 AM on March 21",
      hyperspectralBand: "Visible-NIR 650nm to 820nm for surface magnetite degradation",
      acousticHz: 528,
      solarAzimuthEquinox: 90.1,
      c14EstimatedBCE: "1250 CE (Historical epigraphy + OSL)",
    },
    sampleImage: "https://images.unsplash.com/photo-1609137144820-218228399587?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "hampi_vittala",
    name: "Hampi Vittala Musical Temple Complex",
    location: "Bellary District (Tungabhadra Basin)",
    stateCountry: "Karnataka, India",
    coordinates: "15.3350° N, 76.4600° E",
    period: "Vijayanagara Empire (~15th–16th Century CE)",
    primaryDomain: "Archaeo-Acoustics & Monolithic Lithophone Engineering",
    description: "World-renowned for the Ranga Mantapa housing 56 monolithic granite musical pillars (SaReGaMa pillars) that resonate with musical notes (Sapta Svaras) when tapped, demonstrating advanced sonic metallurgy and stone elasticity carving.",
    keyArtifacts: ["Stone Chariot shrine to Garuda with rotating stone wheels", "Monolithic resonance pillars", "Kalyana Mantapa with intricate Shilpa friezes"],
    astronomicalFeature: "Mandapa pillars aligned with celestial solstices and specific Nakshatra rising angles over Matanga Hill.",
    sensorReadings: {
      gprAnomalyDepth: "Laser Doppler Vibrometer: Fundamental resonant frequencies at 240Hz, 300Hz, 360Hz, 480Hz",
      hyperspectralBand: "Raman spectroscopy confirms high silica & resonant feldspar granite matrix",
      acousticHz: 440,
      solarAzimuthEquinox: 90.0,
      c14EstimatedBCE: "1513 CE (Krishnadevaraya inscriptions)",
    },
    sampleImage: "https://images.unsplash.com/photo-1600100397608-f010e42106e2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "bhimbetka_caves",
    name: "Bhimbetka Rock Shelters",
    location: "Raisen District (Vindhyan Range)",
    stateCountry: "Madhya Pradesh, India",
    coordinates: "22.9372° N, 77.6128° E",
    period: "Upper Paleolithic to Mesolithic (~30,000 BCE to 10,000 BCE)",
    primaryDomain: "Pictography, Petroglyphs & Mineral Pigment Chemistry",
    description: "Over 750 rock shelters spanning 10 km displaying continuous prehistoric rock art. Depicts hunting, sacred rituals, zoomorphic cosmic bulls, masked shamans, dancing human figures, and solar disc pictograms executed in mineral pigments.",
    keyArtifacts: ["Auditorium Cave cupules & petroglyphs", "Hematite manganese red-ochre paintings", "Microlithic stone tools"],
    astronomicalFeature: "Auditorium cave natural light aperture illuminates the central megalithic altar specifically during the Winter Solstice zenith.",
    sensorReadings: {
      gprAnomalyDepth: "DStretch Decorrelation Stretch algorithm: Recovers 4 eroded pigment layers invisible to naked eye",
      hyperspectralBand: "XRF Spectroscopy: Iron oxide hematite, manganese oxide, and plant sap binders",
      acousticHz: 128,
      solarAzimuthEquinox: 90.4,
      c14EstimatedBCE: "10,000 BCE to 30,000 BCE (AMS Radiocarbon & OSL)",
    },
    sampleImage: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "ajanta_caves",
    name: "Ajanta Cave Murals & Frescoes",
    location: "Aurangabad District (Waghora River Gorge)",
    stateCountry: "Maharashtra, India",
    coordinates: "20.5519° N, 75.7033° E",
    period: "Satavahana to Vakataka Dynasties (~2nd Century BCE to 5th Century CE)",
    primaryDomain: "Visualography, Pigment Chemistry & Mudra Iconography",
    description: "30 rock-cut Buddhist cave monuments preserving the pinnacle of ancient Indian mural painting. Masterpieces like Padmapani and Vajrapani display subtle chiaroscuro, spiritual contemplation, and organic tempera technique.",
    keyArtifacts: ["Bodhisattva Padmapani fresco in Cave 1", "Mahaparinirvana colossal monolithic sculpture in Cave 26", "Vakataka royal epigraphs"],
    astronomicalFeature: "Cave 19 & Cave 26 Chaitya windows engineered so sunlight illuminates the Stupa Buddha icon during the Winter and Summer Solstices.",
    sensorReadings: {
      gprAnomalyDepth: "Multispectral UV-Fluorescence: Detects lapis lazuli (imported from Badakhshan) & gold leaf",
      hyperspectralBand: "Hyperspectral 400-1000nm: Separates plaster ground layers (clay, cow dung, rice husk)",
      acousticHz: 216,
      solarAzimuthEquinox: 90.0,
      c14EstimatedBCE: "480 CE (Vakataka King Harishena phase)",
    },
    sampleImage: "https://images.unsplash.com/photo-1609137144820-218228399587?auto=format&fit=crop&w=1000&q=80",
  }
];

export const SENSOR_METADATA_LIST: SensorMetadata[] = [
  {
    id: "gpr_lidar",
    name: "LiDAR & Ground Penetrating Radar (GPR)",
    category: "Subsurface & Geophysics",
    scientificUnit: "Dielectric Permittivity (εr) / Point Density (pts/m²)",
    physicsPrinciple: "High-frequency electromagnetic wave reflection (100MHz - 900MHz) and pulsed laser time-of-flight 3D topography.",
    indicApplication: "Detecting buried temple foundations, Saraswati paleochannels, ancient stepwells, and submerged urban layouts (Dwarka, Rakhigarhi, Keezhadi).",
    operatingBands: "400 MHz shielded antenna, 1550nm eye-safe NIR laser",
    status: "ONLINE",
  },
  {
    id: "hyperspectral",
    name: "Hyperspectral UV-VIS-NIR Imaging",
    category: "Optics & Material Spectroscopy",
    scientificUnit: "Reflectance Spectrum (400nm - 2500nm, 224 Bands)",
    physicsPrinciple: "Molecular absorption band spectroscopy identifying chemical binders, organic soot, iron-gall inks, and palimpsest manuscript layers.",
    indicApplication: "Deciphering faded Palm-Leaf manuscripts, recovering washed-out Birch-Bark (Bhojpatra) texts, and identifying natural fresco pigments (cinnabar, lapis lazuli).",
    operatingBands: "UV (365nm), VIS (400-700nm), NIR (700-1100nm), SWIR (1100-2500nm)",
    status: "ONLINE",
  },
  {
    id: "rti_lighting",
    name: "Reflectance Transformation Imaging (RTI)",
    category: "Photometric Stereo & Micro-Relief",
    scientificUnit: "Surface Normal Vectors (dx, dy, dz) & Specular Enhancement",
    physicsPrinciple: "Mathematical interpolation of surface normals from multi-directional grazing light exposures to render micro-topography.",
    indicApplication: "Revealing heavily weathered Ashokan Brahmi, Indus Seal engravings, eroded copper-plate grants, and chisel stroke angles of ancient scribes.",
    operatingBands: "5500K High-CRI LED dome array at 48 cardinal azimuth angles",
    status: "ONLINE",
  },
  {
    id: "archaeo_acoustics",
    name: "Archaeo-Acoustic & Vibration Resonance Sensor",
    category: "Acoustics & Sonic Physics",
    scientificUnit: "Frequency (Hz), Sound Pressure Level (dB), Reverberation Time (RT60)",
    physicsPrinciple: "Acoustic impulse response analysis, modal resonance frequencies, and sonic wave propagation through dense granite/sandstone media.",
    indicApplication: "Analyzing musical resonance of Hampi/Madurai monolithic stone pillars, Sanctum Santorum (Garbhagriha) sound focus for Vedic chanting harmonics (432Hz).",
    operatingBands: "20 Hz to 20 kHz precision acoustic microphone & Laser Doppler Vibrometer",
    status: "ONLINE",
  },
  {
    id: "horizon_alignment",
    name: "Astronomical Horizon & Solar Ray-Tracing Sensor",
    category: "Archaeo-Astronomy & Horology",
    scientificUnit: "Azimuth (°), Solar Altitude (°), Right Ascension (RA), Declination (Dec)",
    physicsPrinciple: "Ephemeris vector calculation accounting for obliquity of ecliptic (ε = 23.44°), precession of equinoxes, and atmospheric refraction.",
    indicApplication: "Verifying exact sunrise beam penetration into Garbhagriha on Vernal/Autumnal Equinoxes (Konark, Modhera, Thanjavur, Nageshwara temples).",
    operatingBands: "Solar Ephemeris calculation matrix & GPS-referenced digital theodolite",
    status: "ONLINE",
  },
  {
    id: "carbon14_dating",
    name: "AMS Radiocarbon & OSL Stratigraphic Dating",
    category: "Geochronology & Nuclear Physics",
    scientificUnit: "Uncalibrated 14C BP, Fraction Modern (F14C), Gy / ka",
    physicsPrinciple: "Beta decay of Carbon-14 (t½ = 5,730 years) with accelerator mass spectrometry (AMS) and trapped electron charge accumulation via Optically Stimulated Luminescence (OSL).",
    indicApplication: "Dating organic matter from Harappan stratified trenches, carbonised grain samples from Rakhigarhi, and buried quartz grains in ancient brick structures.",
    operatingBands: "3 MV Tandetron Accelerator Mass Spectrometer / Blue-LED OSL stimulation (470nm)",
    status: "ONLINE",
  },
  {
    id: "iconometry_3d",
    name: "3D Photogrammetry & Tala Iconometry",
    category: "Computational Geometry & Shilpa Shastra",
    scientificUnit: "Angula, Tala (12 Angulas), Mesh Deviation (±0.1 mm)",
    physicsPrinciple: "Multi-view stereo triangulation matching thousands of feature points to construct dense 3D polygon meshes and point clouds.",
    indicApplication: "Verifying canonical proportions of Chola bronze Natarajas, Pallava granite bas-reliefs against Brihat Samhita and Manasara canon.",
    operatingBands: "High-resolution Structured Light Scanner & Multi-view 8K Photogrammetry",
    status: "ONLINE",
  },
  {
    id: "oceanography",
    name: "Marine Archaeology & Bathymetric Oceanography",
    category: "Marine Archaeology & Hydrodynamics",
    scientificUnit: "Acoustic Bathymetric Depth (m), Side-scan Sonar (100–500 kHz), Tidal Current (knots)",
    physicsPrinciple: "High-resolution multibeam acoustic backscatter, sub-bottom profiler Chirp pulses, and hydrodynamic current modeling across submerged continental shelves.",
    indicApplication: "Surveying submerged bastions, three-holed stone anchors at Marine Dwarka, submerged Chola port structures at Poompuhar, and tidal lock basins at Lothal dockyard.",
    operatingBands: "Side-scan Sonar 455 kHz, Sub-bottom Chirp 2–16 kHz, Acoustic Doppler Current Profiler (ADCP)",
    status: "ONLINE",
  },
  {
    id: "oceanology",
    name: "Marine Geoscience & Sea-Level Oceanology",
    category: "Marine Geosciences & Paleoclimatology",
    scientificUnit: "Sea-level Transgression (m vs Present MSL), Coral δ18O Isotope Ratio (‰), OSL ka",
    physicsPrinciple: "Marine sediment cores, U-Th and OSL dating of subsea calcarenites, and Holocene eustatic sea-level transgression curves.",
    indicApplication: "Reconstructing post-glacial sea-level rise inundating ancient coastal settlements (Gulf of Khambhat, Gulf of Mannar, Adam's Bridge / Ram Setu marine core stratigraphy).",
    operatingBands: "Multichannel Seismic Reflection, Marine Piston Corer, Mass Spectrometer Isotope Analysis",
    status: "ONLINE",
  },
  {
    id: "sedimentology",
    name: "Fluvial Sedimentology & Paleohydrology",
    category: "Sedimentary Geology & Stratigraphy",
    scientificUnit: "Grain Size (Phi Scale φ), U-Pb Detrital Zircon Age (Ma), Monsoon Varve Thickness (mm)",
    physicsPrinciple: "Hydraulic sorting, detrital zircon geochronology, clay mineralogy (XRD/XRF), and lacustrine/fluvial varve micro-stratigraphy.",
    indicApplication: "Tracing the drying and avulsion of the mighty Saraswati-Ghaggar-Hakra river system, proving Himalayan glacial origin via detrital zircon fingerprints.",
    operatingBands: "Continuous Drill Core Analysis, X-ray Diffractometer (XRD), Laser Diffraction Particle Sizer",
    status: "ONLINE",
  },
  {
    id: "genology",
    name: "Paleogenomics & Ancient DNA (aDNA) Genology",
    category: "Archaeogenetics & Molecular Anthropology",
    scientificUnit: "Endogenous DNA Yield (%), C-to-T Damage Rate (%), mtDNA / Y-DNA Haplogroup Clades",
    physicsPrinciple: "Next-Generation High-Throughput Sequencing (NGS), uracil-DNA glycosylase (UDG) repair treatment, and post-mortem cytosine deamination damage patterns.",
    indicApplication: "Analyzing ancient skeletal DNA from Rakhigarhi (Sample I6113), Sinauli royal chariot burials, and Keezhadi osteology, establishing indigenous genetic continuity without external replacement.",
    operatingBands: "Illumina NovaSeq NGS, Clean-room UV Sterilization, Polymerase Chain Reaction (PCR)",
    status: "ONLINE",
  }
];

// ================= OCEANOGRAPHY & MARINE ARCHAEOLOGY DATA =================
export const OCEANOGRAPHY_PROFILES = [
  {
    siteName: "Submerged Marine Dwarka (Bet Dwarka & Gomti Creek)",
    submersionDepthMeters: 12.5,
    bathymetrySonarMethod: "EdgeTech 4200 Dual-Frequency Side-Scan Sonar (120/410 kHz) & Multibeam Bathymetry",
    subBottomAcousticStratum: "Holocene marine sand (0–2.5m) overlying consolidated Pleistocene calcarenite bedrock containing dressed sandstone bastion blocks.",
    tidalHydrodynamics: "Semi-diurnal macro-tidal regime with spring tidal range up to 4.2m; strong coastal currents (2.5–3.8 knots) causing seasonal sediment movement.",
    marineArchaeologyFeatures: [
      "Submerged composite stone anchors (triangular three-holed Indo-Arab and Mediterranean types)",
      "Submerged fortified semi-circular bastion walls of dressed limestone",
      "Submerged ridge jetty structures stretching 1.2 km seaward from modern coastline",
      "Late Harappan seal with 3-headed animal motif and inscribed pottery sherds"
    ],
    salinityAndCorrosionIndex: "High marine salinity (37.2 PSU); calcium carbonate encrustation preserving stone relief from biological boreholes",
    submergedStructuresCatalog: "Sector 1 (Gomti Bay Bastions), Sector 2 (Submerged Pier & Ramp), Bet Dwarka Island Jetty Site"
  },
  {
    siteName: "Poompuhar (Kaveripattinam) Submerged Port",
    submersionDepthMeters: 23.0,
    bathymetrySonarMethod: "High-resolution Chirp Sub-bottom Profiler (2–16 kHz) & Magnetometer Gradiometry",
    subBottomAcousticStratum: "Subsea riverine deltaic muds and littoral sands covering submerged brick structures 4.5 km offshore.",
    tidalHydrodynamics: "Micro-tidal regime (0.8m range) with strong longshore littoral drift transporting 1.2 million m³ of sand annually.",
    marineArchaeologyFeatures: [
      "Horseshoe-shaped submerged granite structures at 23m depth",
      "Ancient brick ring wells and wharf platforms matching Sangam literature (Silappadikaram)",
      "Lead ingots and Roman amphorae fragments indicating active Indian Ocean trade"
    ],
    salinityAndCorrosionIndex: "34.8 PSU salinity; heavy siltation protecting ceramic and brick matrices from storm surges",
    submergedStructuresCatalog: "Offshore Poompuhar Zone A (Granite Formations), Zone B (Brick Complex), Vanagiri Shoreline Trench"
  },
  {
    siteName: "Lothal Tidal Dockyard & Maritime Basin",
    submersionDepthMeters: 0.0, // Terrestrial engineered basin
    bathymetrySonarMethod: "Terrestrial 3D Laser Scanning & Ground Penetrating Radar (400 MHz) of basin floor",
    subBottomAcousticStratum: "Hydraulically sorted silty clay sediment bed with marine microfossils (Foraminifera) confirming seawater ingress.",
    tidalHydrodynamics: "Engineered sluice-gate system utilizing Gulf of Khambhat's extreme 10m tidal bore to float deep-draft merchant ships at high tide.",
    marineArchaeologyFeatures: [
      "Kiln-fired brick dockyard measuring 214m × 36m with 1m thick water-locked walls",
      "Sluice gate spillway engineered with wooden drop-gates and locking grooves",
      "Persian Gulf circular seal and terracotta ship models with mast sockets"
    ],
    salinityAndCorrosionIndex: "Ancient gypsum mortar and mud-plaster water-tight sealant; soil chlorinity confirms ancient marine estuary connection",
    submergedStructuresCatalog: "Dock Basin, Spillway Channel, Warehouse Acropolis, Bead Factory Wharf"
  }
];

// ================= OCEANOLOGY & MARINE GEOSCIENCE DATA =================
export const OCEANOLOGY_PROFILES = [
  {
    formationName: "Adam's Bridge (Ram Setu) Marine Geological Chain",
    holoceneSeaLevelDelta: "Submerged reef chain at 1.5m to 3.5m depth; exposed during Last Glacial Maximum (LGM) when sea level was -120m.",
    transgressionEpoch: "Holocene marine transgression stabilized c. 7,000–5,000 BCE; coral formation atop calcarenite ridge.",
    coralReefPaleoclimatology: "Acropora coral assemblages dated by Thermoluminescence (TL) & OSL yielding ages of 7,000 to 18,400 years BP for underlying marine sandbank.",
    marineSedimentCoreDepth: "Borehole marine cores drilled across 30km chain by Geological Survey of India (GSI) to depth of 35m below seabed.",
    luminescenceOSLAge: "5,000 BCE to 12,000 BCE (Stratified calcareous sandstone blocks atop loose marine sand)",
    geomorphologicalEvolution: "Engineered / natural linear chain of 103 shoals spanning Pamban Island (India) to Mannar Island (Sri Lanka)."
  },
  {
    formationName: "Gulf of Khambhat Paleo-Shoreline & Submerged Paleo-Rivers",
    holoceneSeaLevelDelta: "-30m to -40m below present sea level; inundated during rapid meltwater pulse 1A and 1B (c. 9,500–7,500 BCE).",
    transgressionEpoch: "Marine transgression drowned the ancient confluence of Narmada, Tapti and paleo-Saraswati river channels.",
    coralReefPaleoclimatology: "High-energy macrotidal estuary with thick sedimentation beds preserving submerged wood samples (C-14 dated ~7,500 BCE by BSIP Lucknow).",
    marineSedimentCoreDepth: "40m vibracore sampling through acoustic anomalies detected by National Institute of Ocean Technology (NIOT).",
    luminescenceOSLAge: "7,500 BCE to 9,000 BCE (Calibrated 14C on submerged riverbed organic carbon)",
    geomorphologicalEvolution: "Submerged river delta with geometric structural acoustic anomalies spanning 9km along the paleo-riverbed."
  }
];

// ================= SEDIMENTOLOGY & PALEOHYDROLOGY DATA =================
export const SEDIMENTOLOGY_PROFILES = [
  {
    riverBasin: "Saraswati-Ghaggar-Hakra Paleo-Channel System",
    boreholeId: "Borehole SG-04 (Kalibangan - Anupgarh Sector)",
    depthMeters: 45.0,
    strataLayers: [
      {
        depthRange: "0.0m - 3.2m",
        sedimentType: "Aeolian fine sand (Thar desert dune encroachment)",
        mineralComposition: "Quartz (72%), Feldspar (18%), Calcite (10%)",
        grainSizePhi: 3.4,
        paleoHydrologyInsight: "Aridification phase post-2000 BCE; complete river desiccation and dune migration.",
        calibratedDateBCE: "1900 BCE - Present"
      },
      {
        depthRange: "3.2m - 18.5m",
        sedimentType: "Fluvial grey micaceous sand & silt (Perennial river bedload)",
        mineralComposition: "High Muscovite Mica (35%), Quartz (45%), Tourmaline, Kyanite",
        grainSizePhi: 2.1,
        paleoHydrologyInsight: "High-energy perennial glacial river flowing directly from Higher Himalayas (matching Rigvedic 'Ambitame Naditame Devitame Saraswati').",
        calibratedDateBCE: "6000 BCE - 2000 BCE"
      },
      {
        depthRange: "18.5m - 45.0m",
        sedimentType: "Coarse gravel bedload & conglomerate lenses",
        mineralComposition: "High-grade metamorphic quartzite and Himalayan gneisses",
        grainSizePhi: -1.2,
        paleoHydrologyInsight: "Pleistocene torrential glacial meltwater channel feeding deep subterranean aquifers.",
        calibratedDateBCE: "25,000 BCE - 8,000 BCE"
      }
    ],
    zirconProvenanceSignature: "Detrital Zircon U-Pb ages peak at 500 Ma and 800-1000 Ma (Himalayan Vaikrita Group / Higher Himalayan Crystallines), proving glacial Himalayan origin rather than local Shiwalik rainfall river.",
    monsoonVarvePattern: "High-resolution lacustrine varves in Didwana & Sambhar lakes reveal severe monsoonal weakening starting c. 2200 BCE (4.2 ka event) causing westward migration to Ganges."
  },
  {
    riverBasin: "Vaigai River Basin (Keezhadi Archaeological Stratum)",
    boreholeId: "KZD-Trench-08 (Keezhadi Site)",
    depthMeters: 6.8,
    strataLayers: [
      {
        depthRange: "0.0m - 1.2m",
        sedimentType: "Recent alluvial topsoil & disturbed agricultural layer",
        mineralComposition: "Montmorillonite clay with organic humus",
        grainSizePhi: 4.8,
        paleoHydrologyInsight: "Post-Sangam agricultural terrace sedimentation.",
        calibratedDateBCE: "500 CE - Present"
      },
      {
        depthRange: "1.2m - 4.5m",
        sedimentType: "Stratified cultural habitation layers with brickbats & charcoal lenses",
        mineralComposition: "Quartz, feldspar, burnt clay, carbonised paddy husk inclusions",
        grainSizePhi: 2.8,
        paleoHydrologyInsight: "High urban density Sangam era settlement with brick drainage systems resilient to seasonal Vaigai floods.",
        calibratedDateBCE: "600 BCE - 300 CE"
      },
      {
        depthRange: "4.5m - 6.8m",
        sedimentType: "Virgin river bedload coarse sand & quartz pebbles",
        mineralComposition: "Granitic quartz & biotite gneiss weathering products",
        grainSizePhi: 0.5,
        paleoHydrologyInsight: "Pre-habitation pristine Vaigai river braided channel.",
        calibratedDateBCE: "Prior to 800 BCE"
      }
    ],
    zirconProvenanceSignature: "Southern Granulite Terrain provenance (Madurai Block charnockite suite) with local alluvial quartz source for pottery manufacture.",
    monsoonVarvePattern: "Periodic cyclic flood clay bands corresponding to Northeast monsoonal surges (Aadi Perukku)."
  }
];

// ================= GENOLOGY & ANCIENT DNA (aDNA) DATA =================
export const GENOLOGY_PROFILES = [
  {
    sampleId: "I6113 (Rakhigarhi Mature Harappan Skeleton)",
    siteAndContext: "Rakhigarhi Cemetery (Mound 7), Haryana — Female individual buried in supine orientation with 15 ceramic funerary vessels.",
    c14DatingRange: "2800 BCE to 2600 BCE (Direct AMS C-14 date on petrous bone collagen)",
    mTDNAHaplogroup: "U2b2 (Indigenous South Asian lineage found in modern Indian populations across diverse linguistic groups)",
    yDnaHaplogroup: "N/A (Female Individual; Associated Male Rakhigarhi samples display indigenous Y-DNA lineages)",
    endogenousDnaYieldPercent: 1.4,
    damagePatternCtoT: "18.4% C-to-T deamination at 5' terminus; 17.2% G-to-A at 3' terminus (Authentic ancient DNA authentication criterion)",
    ancestryContinuityClade: "Primary component: Ancient Ancestral South Indian (AASI) related ancestry combined with an indigenous Iranian hunter-gatherer lineage that split >12,000 years ago, prior to agricultural development in the Zagros.",
    osteologicalFindings: "Adult female ~25-30 years, height 162 cm. Excellent dental health with zero caries (indicative of diverse balanced nutrition including barley, wheat, and dairy). No trauma lesions.",
    populationGenomicsInsight: "Proves that the genetic foundation of the Indus-Saraswati civilization was indigenous and formed the primary source of the Ancestral North Indian (ANI) and Ancestral South Indian (ASI) clines present in nearly all modern Indian populations."
  },
  {
    sampleId: "SNA-02 (Sinauli Royal Chariot Necropolis)",
    siteAndContext: "Sinauli, Baghpat District, UP — Elite warrior burial with copper-plated anthropomorphic solid-wheel chariot, antennae sword, copper helmet, and shield.",
    c14DatingRange: "2000 BCE to 1800 BCE (AMS Radiocarbon on organic wood and bone)",
    mTDNAHaplogroup: "M30c / M3a (Ancient South Asian maternal macro-haplogroup M)",
    yDnaHaplogroup: "R1a1a / L-M20 (Indigenous South Asian subclade)",
    endogenousDnaYieldPercent: 2.1,
    damagePatternCtoT: "15.8% terminal C-to-T transitions",
    ancestryContinuityClade: "Continuity with Indus-Gangetic Late Harappan / Copper Hoard Culture transition with strong Vedic ritual parallels.",
    osteologicalFindings: "Robust male ~35 years, height 178 cm. Musculoskeletal stress markers on deltoids and clavicle indicating long-term archery and heavy chariot driving.",
    populationGenomicsInsight: "Corroborates indigenous technological sophistication in copper metallurgy, weaponry, and wheeled chariots in the Yamuna-Ganga doab contemporaneously with Late Harappan civilization."
  }
];

// ================= CARL SAGAN, HINDU COSMOLOGY & 8.64 BILLION YEARS DATA =================
export const CARL_SAGAN_COSMOLOGY_DATA = {
  quoteCosmos: "The Hindu religion is the only one of the world's great faiths dedicated to the idea that the Cosmos itself undergoes an immense, indeed an infinite, number of deaths and rebirths. It is the only religion in which the time scales correspond, no doubt by accident, to those of modern scientific cosmology. Its cycles run from our ordinary day and night to a day and night of Brahma, 8.64 billion years long. A longer time than the Earth or the Sun has existed and about half the time since the Big Bang. And there are much longer time scales still.",
  speaker: "Dr. Carl Sagan (Cosmos: A Personal Voyage, Episode 10 'The Edge of Forever')",
  keyInsight: "Why did ancient Indian cosmology imagine cosmic time on a scale of billions of years, while contemporary Western thought was constrained to a few thousand years?",
  
  // Step by Step Calculation Breakdown
  stepByStepProof: [
    {
      step: 1,
      title: "Human Year to Divine Day Conversion",
      text: "1 Human Solar Year = 1 Day and Night (Ahoratra) of the Devas (Uttarayan = Day of Gods, Dakshinayan = Night of Gods).",
      formula: "1 Deva Year (Divya Varsha) = 360 Human Solar Years",
      scripture: "Manusmriti 1.67: 'Daive rātryahani varṣaṁ pravibhāgastayoḥ punaḥ...'"
    },
    {
      step: 2,
      title: "The 4 Yuga Durations in Divine & Human Years",
      text: "The Chaturyuga follows the golden ratio 4:3:2:1 with Sandhi (dawn) and Sandhyamsha (dusk) transition periods:",
      subitems: [
        "Satya / Krita Yuga = 4,000 + 400 + 400 = 4,800 Divine Years × 360 = 1,728,000 Human Years",
        "Treta Yuga = 3,000 + 300 + 300 = 3,600 Divine Years × 360 = 1,296,000 Human Years",
        "Dvapara Yuga = 2,000 + 200 + 200 = 2,400 Divine Years × 360 = 864,000 Human Years",
        "Kali Yuga = 1,000 + 100 + 100 = 1,200 Divine Years × 360 = 432,000 Human Years"
      ],
      formula: "1 Mahayuga (Chaturyuga) = 12,000 Divine Years = 4,320,000 Solar Years (4.32 Million Years)",
      scripture: "Manusmriti 1.69–71 & Surya Siddhanta 1.15–17"
    },
    {
      step: 3,
      title: "1 Kalpa = 1 Day of Brahma (Srishti / Cosmic Manifestation)",
      text: "1 Day of Brahma consists of exactly 1,000 Mahayugas (structured across 14 Manvantaras + Sandhis):",
      formula: "1 Kalpa = 1,000 × 4.32 Million Years = 4,320,000,000 Years (4.32 BILLION YEARS)",
      scripture: "Bhagavad Gita 8.17: 'Sahasra-yuga-paryantam ahar yad brahmano viduh / Rātriṁ yuga-sahasrāntāṁ te 'ho-rātra-vido janāḥ'"
    },
    {
      step: 4,
      title: "1 Cosmic Night of Brahma (Pralaya / Dissolution)",
      text: "During the Night of Brahma, cosmic matter returns to unmanifest potentiality (Avyakta) for an identical duration:",
      formula: "1 Night of Brahma = 1,000 Mahayugas = 4,320,000,000 Years (4.32 BILLION YEARS)",
      scripture: "Bhagavad Gita 8.18–19 & Vishnu Purana 1.3"
    },
    {
      step: 5,
      title: "Grand Total: 1 Full Cosmic Day & Night of Brahma (Ahoratra)",
      text: "Combining one day of manifestation (Srishti) and one night of dissolution (Pralaya):",
      formula: "4.32 Billion Years (Day ☀️) + 4.32 Billion Years (Night 🌙) = 8.64 BILLION YEARS 🌌",
      scripture: "Surya Siddhanta 1.20 & Manusmriti 1.72"
    },
    {
      step: 6,
      title: "Deep Time Scale: Life of Brahma (Mahakalpa)",
      text: "1 Year of Brahma = 360 Ahoratras = 3.1104 Trillion Years. 100 Years of Brahma (Full Lifetime / Para) = 311.04 TRILLION YEARS.",
      formula: "Current Cosmic Coordinate: Brahma is in 51st year (Shweta-Varaha Kalpa, 7th Manvantara Vaivasvata, 28th Mahayuga Kaliyuga ~1.972 Billion years elapsed in current Kalpa)",
      scripture: "Srimad Bhagavatam Canto 3, Chapter 11 (Calculation of Time from the Atom)"
    }
  ],

  // Scientific Comparison Matrix
  scientificComparison: [
    {
      phenomenon: "Day of Brahma (Kalpa)",
      indicDuration: "4.32 Billion Years",
      modernScience: "Age of Planet Earth ~4.54 Billion Years; Solar Main Sequence ~5 Billion Years elapsed",
      correlation: "Extremely close order of magnitude; captures the timescale required for planetary evolution and stellar lifetimes."
    },
    {
      phenomenon: "Day & Night of Brahma",
      indicDuration: "8.64 Billion Years",
      modernScience: "Complete Stellar Cycle of Sun ~10 Billion Years; Galactic rotation ~230 Million Years",
      correlation: "Sagan's central observation: Hindu cosmology is the only tradition operating naturally on gigayear timescales."
    },
    {
      phenomenon: "Age of Observable Universe",
      indicDuration: "13.8 Billion Years (Modern Big Bang)",
      indicCosmology: "Current Kalpa is 1.972 Billion years into the 51st Year of Brahma (~155.52 Trillion years into Mahakalpa)",
      correlation: "The cyclic model accommodates multiple Big Bangs (Srishti) and Big Crunches (Pralaya) within the overarching Mahakalpa."
    },
    {
      phenomenon: "Smallest Unit of Time (Truti)",
      indicDuration: "1 Truti ≈ 29.62 Microseconds (Surya Siddhanta) or 0.3 Microseconds (Bhagavatam 3.11.5)",
      modernScience: "High-speed atomic molecular vibrations and laser photonics",
      correlation: "Cosmological framework spans 40 orders of magnitude from sub-millisecond atomic time to trillions of years."
    }
  ],

  // Part 2: Multiverse (Aneka Koti Brahmanda)
  multiverseConcept: {
    title: "Part 2: Multiple Universes (Aneka Koti Brahmanda) in Vedic Cosmology",
    sanskritTerm: "अनेककोटिब्रह्माण्ड (Countless Millions of Universes)",
    scriptureCitations: [
      {
        source: "Srimad Bhagavatam 6.16.37",
        verse: "Kṣity-ādibhir eṣa piṇḍo bhūtānvito 'ṇḍa-ghaṭaḥ sa-sarvaḥ / Yan-nārada-mukhyaiḥ sarva-lokaiḥ sameto 'pi na gṛhyate...",
        translation: "Countless universes (brahmandas), each surrounded by seven layers of earth, water, fire, air, sky, ego and mahat-tattva, float like atomic particles within the unlimited expanse of Mahavishnu."
      },
      {
        source: "Bhagavata Purana 10.14.11 (Brahma's Realization)",
        verse: "Kvāhaṁ tamo-’dika-nibaddha-vapur mahat-te... Kva cedṛg-vidhāntaḥ-sphurat-paramāṇu-rajāṁsi...",
        translation: "Where am I, a small creature with a body of four heads, and where are Your unlimited glories? Thousands of universes float like dust motes in a beam of sunlight passing through a window, each with its own Brahma of 8, 10, 100, or 1000 heads!"
      },
      {
        source: "Yoga Vasistha (Utpatti Prakarana 3.30)",
        verse: "There are countless universes inside every single atom, each containing its own space, time, stars, planets, and sentient beings, all unaware of one another."
      }
    ],
    modernParallels: [
      "Hugh Everett's Many-Worlds Interpretation of Quantum Mechanics",
      "Alan Guth's Eternal Inflation & Pocket / Bubble Universes",
      "String Theory Landscape with 10⁵⁰⁰ distinct vacuum states (Calabi-Yau manifolds)",
      "Conformal Cyclic Cosmology (Sir Roger Penrose) — Aeon following Aeon infinitely"
    ]
  }
};

export const SAMPLE_INSCRIPTIONS = [
  {
    id: "girnar_ashoka",
    title: "Ashoka's Major Rock Edict II (Girnar)",
    script: "Ashokan Brahmi",
    language: "Prakrit (Magadhi with Western influence)",
    period: "c. 257 BCE (Mauryan Dynasty)",
    location: "Junagadh, Gujarat",
    brahmiText: "𑀲𑀯𑀢 𑀯𑀺𑀚𑀺𑀢𑀫𑁆𑀳𑀺 𑀤𑁂𑀯𑀸𑀦𑀁𑀧𑀺𑀬𑀲 𑀧𑀺𑀬𑀤𑀲𑀺𑀦𑁄 𑀭𑀜𑁄",
    iastText: "Savata vijitamhi Devānaṁpiyasa Piyadasino rāño...",
    devanagariText: "सर्वत विजितम्हि देवानंपियस पियदसिनो रञो...",
    translation: "Everywhere within the conquered territory of King Devanampiya Priyadarsin, and also across his borders (Cholas, Pandyas, Satiyaputra, Keralaputra, and Tamraparni), two kinds of medical treatment have been established: medical treatment for humans and medical treatment for animals.",
    significance: "Demonstrates early state-sponsored public healthcare and animal welfare based on Dharma, establishing ancient territorial geography of India."
  },
  {
    id: "heliodorus_pillar",
    title: "Heliodorus Garuda Pillar Inscription (Besnagar)",
    script: "Brahmi (Sunga Period)",
    language: "Epigraphical Sanskritized Prakrit",
    period: "c. 113 BCE",
    location: "Vidisha, Madhya Pradesh",
    brahmiText: "𑀤𑁂𑀯𑀤𑁂𑀯𑀲 𑀯𑀸𑀲𑀼𑀤𑁂𑀯𑀲 𑀕𑀭𑀼𑀟𑀥𑁆𑀯𑀚𑁄 𑀅𑀬𑀁 𑀓𑀸𑀭𑀺𑀢𑁄 𑀳𑁂𑀮𑀺𑀑𑀤𑁄𑀭𑁂𑀡",
    iastText: "Devadevasa Vāsudevasa garuḍadhvajo ayaṁ kārito Heliodoreṇa...",
    devanagariText: "देवदेवस वासुदेवस गरुडध्वजो अयं कारितो हेलिओदोरेण भागवतेन...",
    translation: "This Garuda-column of Vasudeva, the God of gods, was erected here by Heliodoros, a Bhagavata (devotee of Vishnu), son of Dion, an inhabitant of Taxila, who came as Greek ambassador from King Antialkidas to King Kasiputra Bhagabhadra.",
    significance: "Incontrovertible epigraphical evidence of Greek (Yavana) adoption of Vaishnavism and Bhagavata tradition in the 2nd century BCE."
  },
  {
    id: "indus_pashupati",
    title: "Indus Valley Pashupati Seal (Mohenjo-daro)",
    script: "Indus Script / Saraswati-Sindhu Glyphs",
    language: "Proto-Indic / Vedic Astronomical Logogram",
    period: "c. 2500 BCE",
    location: "Indus-Saraswati Valley",
    brahmiText: "𑀅𑀁 𑀲𑁆 𑀧 𑀢𑀺 (Glyph: Horned Headdress + Fish-Signs + 4 Beasts)",
    iastText: "Mahāyogi / Rudra-Pashupati Seal (DK 5175)",
    devanagariText: "महायोगी पशुपति मुद्रा (महिष, गज, व्याघ्र, गैण्डा परिवेष्ठित)",
    translation: "Depicts a three-faced horned seated deity in Mulabandhasana / Padmasana surrounded by four beasts (elephant, tiger, rhinoceros, water buffalo) and two deer beneath the seat.",
    significance: "Earliest visualographic archetype of Yoga, Dhyana posture, and Lord Shiva as Pashupati (Lord of the Beasts)."
  },
  {
    id: "aihole_pulakeshin",
    title: "Aihole Inscription of Ravikirti (Meguti Temple)",
    script: "Southern Brahmi / Old Kannada-Telugu Script",
    language: "Classical Sanskrit Verse (Kavya)",
    period: "c. 634 CE (Saka 556 / Kali 3735)",
    location: "Aihole, Bagalkot, Karnataka",
    brahmiText: "𑀢𑁆𑀭𑀺𑀁𑀰𑀢𑁆𑀲𑀼 𑀢𑁆𑀭𑀺𑀲𑀳𑀲𑁆𑀭𑁂𑀱𑀼 𑀪𑀸𑀭𑀢𑀸𑀤𑀸𑀳𑀯𑀸𑀤𑀺𑀢𑀄",
    iastText: "Triṁśatsu trisahasreṣu Bhāratādāhavāditaḥ... Kaliyuga 3735 & Saka 556",
    devanagariText: "त्रिंशत्सु त्रिसहस्रेषु भारतादाहवादितः सप्ताब्दशतयुक्तेषु शतेष्वब्देषु पञ्चसु...",
    translation: "When thirty and three thousand and seven hundred and five years had passed since the war of the Bharatas (Mahabharata war), and when fifty and five hundred years of the Saka kings had elapsed...",
    significance: "Crucial chronological peg tying the Kaliyuga epoch (3102 BCE), the Mahabharata war, the Saka era (78 CE), and mentioning great poets Kalidasa and Bharavi."
  }
];

export const ARCHAEO_ASTRONOMICAL_EVENTS = [
  {
    id: "kali_yuga_epoch",
    title: "Kali Yuga Epoch (Surya Siddhanta & Aryabhatiya)",
    yearBCE: 3102,
    dateString: "February 18, 3102 BCE, Midnight (Ujjain Meridian)",
    nakshatraEquinox: "Revati / Ashwini transition (Mesha 0°)",
    phenomenon: "Grand Alignment of 7 Grahas (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn) near 0° Aries.",
    ancientReference: "Aryabhatiya (Gitika Pada 1.5): 'When 60 times 60 (3600) years elapsed from the start of Kali Yuga, I was 23 years old (499 CE).'",
    precessionDegrees: -71.2,
  },
  {
    id: "mahabharata_war",
    title: "Mahabharata War Planetary Conjunctions",
    yearBCE: 3067,
    dateString: "c. 3067 BCE / 3138 BCE (Kartika Amavasya to Margashirsha)",
    nakshatraEquinox: "Krittika / Rohini (Solar eclipse on Jyeshtha, Lunar eclipse on Kartika Purnima)",
    phenomenon: "Retrograde Saturn in Rohini (Rohini Shakata Bhedana), Jupiter in Shravana, Rahu between Sun and Moon in 13 days (Aparvan eclipse).",
    ancientReference: "Mahabharata Udyoga Parva 143 & Bhishma Parva 2-3 (Sage Vyasa's astronomical report to Dhritarashtra).",
    precessionDegrees: -70.8,
  },
  {
    id: "rigvedic_mrigashira",
    title: "Rigvedic Vernal Equinox in Mrigashira (Orion)",
    yearBCE: 4500,
    dateString: "c. 4500 BCE to 4000 BCE",
    nakshatraEquinox: "Mrigashira (Agrahayani - Head of the Year)",
    phenomenon: "The Sun coincided with Orion (Mrigashira) at the Vernal Equinox, marking the start of the year (as analyzed by Lokmanya Tilak in 'The Orion').",
    ancientReference: "Rigveda Mandala 10.86 (Vrishakapi hymn) and Shatapatha Brahmana on Krittika never swerving from the East.",
    precessionDegrees: -90.5,
  }
];
