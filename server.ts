import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// Helper for safe JSON parsing from Gemini
function cleanAndParseJSON(text: string) {
  try {
    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Failed to parse JSON response:", text);
    throw new Error("Invalid JSON structure from model");
  }
}

// 1. Multi-Agent Autonomous Research Engine Endpoint
app.post("/api/agent-research", async (req, res) => {
  try {
    const { 
      topic, 
      domains = ["archeology", "astronomy", "epigraphy", "iconography", "scriptures", "sensors"],
      depth = "comprehensive",
      historicalPeriod = "All Eras",
      coordinates = "23.1765° N, 75.7885° E (Ujjain Prime Meridian)"
    } = req.body;

    const prompt = `You are the lead coordinator of the "Granth Indic Archaeo-Science & Heritage Intelligence System".
Run an autonomous collaborative multi-agent investigation on:
TOPIC/ARTIFACT/SITE: "${topic}"
DOMAINS OF INQUIRY: ${domains.join(", ")}
PERIOD CONTEXT: ${historicalPeriod}
COORDINATES: ${coordinates}
DEPTH: ${depth}

The system consists of 6 specialized Autonomous Agent Personas:
1. "Dr. Arundhati Sen" (Archaeological & Stratigraphic Field Lead - Geo-radar, C14, OSL, excavation context)
2. "Acharya Varahamihira" (Archaeo-Astronomy, Ephemeris, Precession of Equinoxes, Panchang, Celestial retrograde alignments)
3. "Prof. Mahadevan Epigraphicus" (Epigraphy, Paleography, Inscription transliteration, Brahmi/Indus/Grantha morphology)
4. "Shilpa Ratna Vidwan" (Iconography, Shilpa Shastras, Talamana canonical proportions, Vastu Purusha Mandala)
5. "Dr. Kedar Shastri" (Vedic Scriptures, Shrutis/Smritis, Philology, Astronomical clues in Vedic meters)
6. "Er. Maya Swaminathan" (Sensor Telemetry & Archaeometry Lead - LiDAR, Hyperspectral UV-NIR, RTI Lighting, Archaeo-Acoustics)

Provide a rich, highly rigorous, scientific and scriptural synthesis structured as:
1. Executive Summary & Core Hypothesis
2. Agent Dispatches (each agent's specialized finding, telemetry, citations, and critical cross-examination)
3. Archaeo-Astronomical Alignment & Dating Matrix (Ephemeris, Nakshatra, Equinox Precession date window)
4. Epigraphical & Inscriptional Decipherment Analysis (Transliteration, Paleographic epoch, linguistic family)
5. Iconographic & Shilpa Shastra Mathematical Proportions (Talamana metrics, Mudras, geometric symbolism)
6. Sensor Telemetry & Instrumental Methodology (GPR frequencies, Hyperspectral bands, Acoustic resonance Hz, RTI lighting azimuths, C14/TL calibration)
7. Sacred Practices, Ritual Acoustics & Living Tradition Context
8. Consensus Confidence Score (0-100%) and Recommended Next Field Steps.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            topic: { type: Type.STRING },
            executiveSummary: { type: Type.STRING },
            confidenceScore: { type: Type.NUMBER },
            datingRange: { type: Type.STRING },
            astronomicalEra: { type: Type.STRING },
            agents: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  agentId: { type: Type.STRING },
                  agentName: { type: Type.STRING },
                  role: { type: Type.STRING },
                  domain: { type: Type.STRING },
                  finding: { type: Type.STRING },
                  crossExamination: { type: Type.STRING },
                  citations: { 
                    type: Type.ARRAY, 
                    items: { type: Type.STRING } 
                  },
                  confidence: { type: Type.NUMBER },
                },
                required: ["agentId", "agentName", "role", "domain", "finding", "confidence"],
              },
            },
            astronomicalData: {
              type: Type.OBJECT,
              properties: {
                nakshatra: { type: Type.STRING },
                equinoxShift: { type: Type.STRING },
                planetaryConjunctions: { type: Type.STRING },
                ayanamsha: { type: Type.STRING },
                historicalDateEstimated: { type: Type.STRING },
                scriptureReference: { type: Type.STRING },
              },
              required: ["nakshatra", "equinoxShift", "historicalDateEstimated"],
            },
            epigraphyData: {
              type: Type.OBJECT,
              properties: {
                scriptType: { type: Type.STRING },
                language: { type: Type.STRING },
                paleographicCentury: { type: Type.STRING },
                sampleTransliteration: { type: Type.STRING },
                translation: { type: Type.STRING },
                morphologicalFeatures: { type: Type.STRING },
              },
              required: ["scriptType", "language", "paleographicCentury", "sampleTransliteration"],
            },
            iconographyData: {
              type: Type.OBJECT,
              properties: {
                canonicalText: { type: Type.STRING },
                talamanaSystem: { type: Type.STRING },
                mudrasAndAsanas: { type: Type.STRING },
                mandalaGeometry: { type: Type.STRING },
                attributesAndAyudhas: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING } 
                },
              },
              required: ["canonicalText", "talamanaSystem", "mudrasAndAsanas"],
            },
            sensorTelemetry: {
              type: Type.OBJECT,
              properties: {
                gprLiDAR: { type: Type.STRING },
                hyperspectralUVNIR: { type: Type.STRING },
                rtiLighting: { type: Type.STRING },
                archaeoAcoustics: { type: Type.STRING },
                c14OSLDating: { type: Type.STRING },
              },
              required: ["gprLiDAR", "hyperspectralUVNIR", "archaeoAcoustics"],
            },
            livingTradition: {
              type: Type.OBJECT,
              properties: {
                customOrRitual: { type: Type.STRING },
                scientificMechanism: { type: Type.STRING },
                acousticVibrationMetrics: { type: Type.STRING },
                contemporaryPractice: { type: Type.STRING },
              },
              required: ["customOrRitual", "scientificMechanism"],
            },
            recommendedFieldProtocols: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: [
            "topic",
            "executiveSummary",
            "confidenceScore",
            "datingRange",
            "agents",
            "astronomicalData",
            "epigraphyData",
            "iconographyData",
            "sensorTelemetry",
            "livingTradition",
            "recommendedFieldProtocols"
          ],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Agent research error:", error);
    res.status(500).json({ error: error.message || "Failed to execute multi-agent research." });
  }
});

// 2. Multimodal Visual / Inscription / Artifact Scanner Endpoint
app.post("/api/analyze-artifact", async (req, res) => {
  try {
    const { imageBase64, mimeType = "image/jpeg", artifactType, contextNote } = req.body;

    const parts: any[] = [];
    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, "");
      parts.push({
        inlineData: {
          data: cleanBase64,
          mimeType: mimeType || "image/jpeg",
        },
      });
    }

    parts.push({
      text: `Analyze this archaeological artifact / inscription / palm leaf / sacred iconography / astronomical chart in detail.
Artifact Category: ${artifactType || "General Indic Heritage Artifact"}
Context Notes: ${contextNote || "None provided"}

Perform an interdisciplinary multi-agent examination:
1. Visual Description & Material Composition
2. Epigraphical / Script identification (Brahmi, Indus glyphs, Grantha, Sharada, Devanagari, Vatteluttu, etc.)
3. Iconographic Canon & Talamana Proportions
4. Archaeo-astronomical symbolism or celestial alignment
5. Sensor Telemetry recommendations (e.g. RTI lighting angles, Hyperspectral filter bands at 780nm/940nm, 3D point cloud scan density)
6. Historical Epoch & Provenance Estimation
7. Conservation & Paleography Assessment`,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: parts,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            identifiedEpoch: { type: Type.STRING },
            material: { type: Type.STRING },
            scriptIdentified: { type: Type.STRING },
            transliteration: { type: Type.STRING },
            translation: { type: Type.STRING },
            iconographicCanon: { type: Type.STRING },
            talamanaRatios: { type: Type.STRING },
            astronomicalSignificance: { type: Type.STRING },
            sensorRecommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            conservationStatus: { type: Type.STRING },
            fullScholarlyAnalysis: { type: Type.STRING },
          },
          required: [
            "title",
            "identifiedEpoch",
            "material",
            "scriptIdentified",
            "iconographicCanon",
            "sensorRecommendations",
            "fullScholarlyAnalysis",
          ],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Artifact analysis error:", error);
    res.status(500).json({ error: error.message || "Failed to analyze artifact." });
  }
});

// 2B. Agentic AI Online Public Information Fetcher & Multimodal Synthesis Endpoint
app.post("/api/agentic-fetcher", async (req, res) => {
  try {
    const { 
      query, 
      inputMode = "text",
      imageBase64,
      mimeType = "image/jpeg",
      audioTranscript,
      categoryFilter = "All Subjects",
      searchDepth = "deep_fetch"
    } = req.body;

    const parts: any[] = [];
    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, "");
      parts.push({
        inlineData: {
          data: cleanBase64,
          mimeType: mimeType || "image/jpeg",
        },
      });
    }

    const effectiveQuery = query || audioTranscript || "Sanatan Heritage & Archaeo-Science Overview";

    parts.push({
      text: `You are the lead "Agentic AI Fetcher & Public Knowledge Research Scholar" for Granth.
Your goal is to fetch, cross-verify, and synthesize all publicly available online and scriptural information about the mentioned subject, title, name, site, or multi-modal visual query.

QUERY / SUBJECT: "${effectiveQuery}"
INPUT MODE: ${inputMode}
AUDIO TRANSCRIPT: ${audioTranscript || "N/A"}
CATEGORY FILTER: ${categoryFilter}
SEARCH DEPTH: ${searchDepth}

Perform a comprehensive agentic synthesis gathering publicly available information from:
1. Authentic Indic Scriptures (Rigveda, Yajurveda, Samaveda, Atharvaveda, Upanishads, Valmiki Ramayana, Mahabharata, Puranas, Arthashastra, Charaka Samhita, Ashtadhyayi).
2. Contemporary Scholars, YouTubers & Field Investigators (Praveen Mohan, Nilesh Oak, Meenakshi Jain, Hyper Quest, Nityananda Misra, Jagadguru Kaushalendra Krishna, Astro by Vivek, Tarun Bindlish, Rupa Bhaty, Ranveer TRS, etc.).
3. Archaeo-science, epigraphy, astronomical planetary dating, and temple engineering records.

Return structured JSON containing:
- identifiedSubject (clear concise title/name)
- category (classification category)
- executiveSummary (in-depth 3-4 sentence synthesis)
- keyPublicFacts (5-7 verified factual statements)
- scripturalCitations (array of objects with textName, chapterVerse, devanagari, transliteration, anvaya, englishMeaning, hindiMeaning)
- historicalContext (historical epoch, dynasty, or textual lineage)
- multiAgentPerspectives (array of agent insights: Archaeologist, Epigraphist, Astronomer, Philologist, Iconographer, Technologist)
- geolocationAndTimeline (locationName, coordinates, epochOrPeriod)
- verifiedPublicReferences (array of reference sources with title, sourceType, urlOrCitation, snippet)
- confidenceScore (0 to 100)`
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: parts,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            identifiedSubject: { type: Type.STRING },
            category: { type: Type.STRING },
            executiveSummary: { type: Type.STRING },
            keyPublicFacts: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            scripturalCitations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  textName: { type: Type.STRING },
                  chapterVerse: { type: Type.STRING },
                  devanagari: { type: Type.STRING },
                  transliteration: { type: Type.STRING },
                  anvaya: { type: Type.STRING },
                  englishMeaning: { type: Type.STRING },
                  hindiMeaning: { type: Type.STRING }
                },
                required: ["textName", "devanagari", "englishMeaning"]
              }
            },
            historicalContext: { type: Type.STRING },
            multiAgentPerspectives: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  agentName: { type: Type.STRING },
                  role: { type: Type.STRING },
                  insight: { type: Type.STRING }
                },
                required: ["agentName", "role", "insight"]
              }
            },
            geolocationAndTimeline: {
              type: Type.OBJECT,
              properties: {
                locationName: { type: Type.STRING },
                coordinates: { type: Type.STRING },
                epochOrPeriod: { type: Type.STRING }
              },
              required: ["locationName", "epochOrPeriod"]
            },
            verifiedPublicReferences: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  sourceType: { type: Type.STRING },
                  urlOrCitation: { type: Type.STRING },
                  snippet: { type: Type.STRING }
                },
                required: ["title", "sourceType", "snippet"]
              }
            },
            confidenceScore: { type: Type.NUMBER }
          },
          required: [
            "identifiedSubject",
            "category",
            "executiveSummary",
            "keyPublicFacts",
            "historicalContext",
            "multiAgentPerspectives",
            "geolocationAndTimeline",
            "verifiedPublicReferences",
            "confidenceScore"
          ]
        }
      }
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Agentic fetcher error:", error);
    res.status(500).json({ error: error.message || "Failed to fetch agentic online information." });
  }
});

// 3. Archaeo-Astronomy Ephemeris & Retro-Alignment Calculator
app.post("/api/ephemeris-calc", async (req, res) => {
  try {
    const { year = -3102, month = 2, day = 18, latitude = 23.1765, longitude = 75.7885, eventName } = req.body;

    const prompt = `Calculate the astronomical and ephemeris coordinates for Year ${year} (CE/BCE), Month ${month}, Day ${day} at Latitude ${latitude}, Longitude ${longitude} (Prime Meridian of Ujjain / Kurukshetra / Ayodhya / Dwarka).
Event Context: "${eventName || 'Ancient Celestial Snapshot'}"

Perform Archaeo-astronomy math:
1. Precession of Equinoxes calculation: Ayanamsha shift based on 25,772-year cycle (approx 50.29 arcseconds/year).
2. Vernal Equinox Nakshatra position (e.g. Ashwini, Krittika, Rohini, Mrigashira).
3. 9 Planetary Geocentric Longitudes (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu).
4. Major planetary conjunctions, eclipses, or retrograde alignments mentioned in ancient treatises (Surya Siddhanta, Aryabhatiya, Mahabharata astronomical references).
5. Panchanga parameters: Tithi, Nakshatra, Yoga, Karana, Vara, Solar Ritu, Ayana.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            julianDay: { type: Type.NUMBER },
            precessionAngleDegrees: { type: Type.NUMBER },
            vernalEquinoxNakshatra: { type: Type.STRING },
            poleStarOfEra: { type: Type.STRING },
            ayanamsa: { type: Type.STRING },
            planets: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  longitudeDeg: { type: Type.NUMBER },
                  zodiacSign: { type: Type.STRING },
                  nakshatra: { type: Type.STRING },
                  pada: { type: Type.NUMBER },
                  isRetrograde: { type: Type.BOOLEAN },
                  historicalSignificance: { type: Type.STRING },
                },
                required: ["name", "longitudeDeg", "zodiacSign", "nakshatra", "pada", "isRetrograde"],
              },
            },
            notableAlignments: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            scriptureCorrelation: { type: Type.STRING },
            astronomicalValidationNotes: { type: Type.STRING },
          },
          required: [
            "julianDay",
            "precessionAngleDegrees",
            "vernalEquinoxNakshatra",
            "poleStarOfEra",
            "ayanamsa",
            "planets",
            "notableAlignments",
            "scriptureCorrelation",
          ],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Ephemeris calc error:", error);
    res.status(500).json({ error: error.message || "Failed to calculate ephemeris." });
  }
});

// 4. Live / Historical Panchang Calculator
app.post("/api/panchang-calc", async (req, res) => {
  try {
    const { dateStr, latitude = 23.1765, longitude = 75.7885, timezone = 5.5, locationName = "Ujjain (Avanti)" } = req.body;

    const prompt = `Compute comprehensive scientific and Vedic Panchanga for:
Date: ${dateStr || new Date().toISOString().split("T")[0]}
Location: ${locationName} (Lat: ${latitude}, Long: ${longitude}, UTC offset: +${timezone})

Calculate with high mathematical and astronomical precision according to Surya Siddhanta and Drik Ganitha:
1. Tithi (Name, Index 1-30, Shukla/Krishna Paksha, Percentage elapsed, Ending time)
2. Vara (Solar Day of week and planetary lord)
3. Nakshatra (Current asterism 1-27, Lord, Pada 1-4, Span degrees)
4. Yoga (One of 27 Nitya Yogas, Meaning, Auspiciousness)
5. Karana (Half-tithi, 1 of 11 Karanas)
6. Solar Metrics: Sunrise, Sunset, Solar Noon, Dina Mana, Ratri Mana
7. Lunar Metrics: Moonrise, Moonset, Lunar Month (Amanta/Purnimanta), Chandramasa
8. Ritu (Vedic Season: Vasanta, Grishma, Varsha, Sharad, Hemanta, Shishira)
9. Ayana (Uttarayana / Dakshinayana)
10. Auspicious/Inauspicious Muhurtas (Brahma Muhurta, Abhijit Muhurta, Rahu Kalam, Gulika Kalam, Yamaganda)
11. Astronomical Graha Sphuta (Sun and Moon precise tropical & sidereal longitudes)`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            date: { type: Type.STRING },
            location: { type: Type.STRING },
            samvat: {
              type: Type.OBJECT,
              properties: {
                vikramSamvat: { type: Type.STRING },
                shakaSamvat: { type: Type.STRING },
                kaliYugaYear: { type: Type.STRING },
                ayana: { type: Type.STRING },
                ritu: { type: Type.STRING },
                māsa: { type: Type.STRING },
                paksha: { type: Type.STRING },
              },
              required: ["vikramSamvat", "shakaSamvat", "kaliYugaYear", "ayana", "ritu", "māsa", "paksha"],
            },
            fiveLimbs: {
              type: Type.OBJECT,
              properties: {
                tithi: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    paksha: { type: Type.STRING },
                    percentage: { type: Type.NUMBER },
                    deity: { type: Type.STRING },
                    nature: { type: Type.STRING },
                  },
                  required: ["name", "paksha", "deity"],
                },
                vara: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    sanskritName: { type: Type.STRING },
                    planetaryLord: { type: Type.STRING },
                    element: { type: Type.STRING },
                  },
                  required: ["name", "sanskritName", "planetaryLord"],
                },
                nakshatra: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    number: { type: Type.NUMBER },
                    lord: { type: Type.STRING },
                    deity: { type: Type.STRING },
                    pada: { type: Type.NUMBER },
                    degrees: { type: Type.STRING },
                  },
                  required: ["name", "number", "lord", "deity", "pada"],
                },
                yoga: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    number: { type: Type.NUMBER },
                    meaning: { type: Type.STRING },
                    nature: { type: Type.STRING },
                  },
                  required: ["name", "meaning", "nature"],
                },
                karana: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    type: { type: Type.STRING },
                    deity: { type: Type.STRING },
                  },
                  required: ["name", "type"],
                },
              },
              required: ["tithi", "vara", "nakshatra", "yoga", "karana"],
            },
            solarLunarTimes: {
              type: Type.OBJECT,
              properties: {
                sunrise: { type: Type.STRING },
                sunset: { type: Type.STRING },
                moonrise: { type: Type.STRING },
                moonset: { type: Type.STRING },
                sunLongitude: { type: Type.STRING },
                moonLongitude: { type: Type.STRING },
                sunZodiac: { type: Type.STRING },
                moonZodiac: { type: Type.STRING },
              },
              required: ["sunrise", "sunset", "sunZodiac", "moonZodiac"],
            },
            muhurtas: {
              type: Type.OBJECT,
              properties: {
                brahmaMuhurta: { type: Type.STRING },
                abhijitMuhurta: { type: Type.STRING },
                rahuKalam: { type: Type.STRING },
                gulikaKalam: { type: Type.STRING },
                yamaganda: { type: Type.STRING },
              },
              required: ["brahmaMuhurta", "abhijitMuhurta", "rahuKalam"],
            },
            astronomicalNotes: { type: Type.STRING },
          },
          required: ["date", "location", "samvat", "fiveLimbs", "solarLunarTimes", "muhurtas", "astronomicalNotes"],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Panchang calc error:", error);
    res.status(500).json({ error: error.message || "Failed to calculate Panchang." });
  }
});

// 5. Epigraphy Decipherer & Inscription Translation
app.post("/api/epigraphy-decipher", async (req, res) => {
  try {
    const { script = "Ashokan Brahmi", textOrGlyphs, targetScript = "Devanagari" } = req.body;

    const prompt = `You are a world authority on Epigraphy, Paleography, and Ancient Scripts.
Script to analyze: "${script}"
Input Text/Glyphs/Transliteration: "${textOrGlyphs}"
Target Output Script: "${targetScript}"

Provide:
1. Script classification, historical era (e.g. 3rd century BCE Maurya, Gupta era, Kadamba, Pallava Grantha, Sharada)
2. Character-by-character glyph breakdown with phonetic sound value (IPA)
3. Transliteration into ${targetScript} and IAST (International Alphabet of Sanskrit Transliteration)
4. Morphological and grammatical analysis (Sanskrit/Prakrit/Old Tamil/Kharosthi)
5. Historical context of similar rock/pillar/copper-plate edicts
6. Technological imaging recommendation (e.g. RTI lighting at 45° angle, 3D laser profilometry)`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            scriptName: { type: Type.STRING },
            historicalPeriod: { type: Type.STRING },
            languageFamily: { type: Type.STRING },
            iastTransliteration: { type: Type.STRING },
            targetScriptOutput: { type: Type.STRING },
            glyphBreakdown: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  glyph: { type: Type.STRING },
                  phoneticIpa: { type: Type.STRING },
                  devanagariEquiv: { type: Type.STRING },
                  strokeDescription: { type: Type.STRING },
                },
                required: ["glyph", "phoneticIpa", "devanagariEquiv"],
              },
            },
            linguisticMeaning: { type: Type.STRING },
            historicalEdictReference: { type: Type.STRING },
            paleographicEvolutionNotes: { type: Type.STRING },
            sensorImagingRecommendation: { type: Type.STRING },
          },
          required: [
            "scriptName",
            "historicalPeriod",
            "languageFamily",
            "iastTransliteration",
            "targetScriptOutput",
            "glyphBreakdown",
            "linguisticMeaning",
          ],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Epigraphy decipher error:", error);
    res.status(500).json({ error: error.message || "Failed to decipher epigraphy." });
  }
});

// 6. Existing Scriptures API (Enhanced with Rigvedic/Puranic/Astronomical texts)
app.post("/api/scriptures", async (req, res) => {
  try {
    const { 
      topic = "Surya Siddhanta", 
      count = 5, 
      originalLang = "Sanskrit", 
      explanationLang = "English" 
    } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Provide exactly ${count} authentic verses or hymns from the scripture or treatise: "${topic}".
      Requirements:
      1. Provide original text in ${originalLang} using traditional script (Devanagari for Sanskrit/Hindi, or corresponding regional Indic script).
      2. Provide precise grammatical and poetic translation in ${explanationLang}.
      3. For each verse, include book/treatise, chapter/adhyaya, and verse/shloka number.
      4. Include 'context' (astronomical, philosophical, or historical context).
      5. Include 'deepInsight' (astronomical science, sacred mathematics, spiritual metaphysics, or archeo-scientific relevance).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            scriptures: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  verseId: { type: Type.STRING },
                  book: { type: Type.STRING },
                  chapter: { type: Type.STRING },
                  verseNumber: { type: Type.STRING },
                  sanskrit: { type: Type.STRING },
                  translation: { type: Type.STRING },
                  context: { type: Type.STRING },
                  deepInsight: { type: Type.STRING },
                },
                required: ["verseId", "book", "chapter", "verseNumber", "sanskrit", "translation", "deepInsight"],
              },
            },
          },
          required: ["scriptures"],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Error fetching scriptures:", error);
    res.status(500).json({ error: error.message || "Failed to fetch scriptures." });
  }
});

// 6.5 Dedicated Multilingual Scripture & Shastra Translation API (Indian & Global Languages)
app.post("/api/translate", async (req, res) => {
  try {
    const { 
      text, 
      deepInsight, 
      targetLanguage = "Hindi", 
      sourceLanguage = "Sanskrit / English",
      verseId,
      book,
      chapter,
      verseNumber 
    } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided for translation" });
    }

    const prompt = `You are a distinguished Vedic Sanskrit scholar, philologist, and polyglot translator (महामहोपाध्याय).
Translate the following sacred Indian scripture verse translation and philosophical commentary into "${targetLanguage}".

Context:
- Scripture: ${book || "Sacred Text"} ${chapter ? `Chapter ${chapter}` : ""} ${verseNumber ? `Verse ${verseNumber}` : ""}
- Source text/translation: "${text}"
${deepInsight ? `- Original commentary/insight: "${deepInsight}"` : ""}

Requirements:
1. Provide a sublime, poetic, yet philosophically faithful translation of the text into "${targetLanguage}" using the correct native script of that language (e.g. Devanagari for Hindi/Marathi/Sanskrit, Tamil script for Tamil, Telugu script for Telugu, Bengali script for Bengali, Kannada script for Kannada, Malayalam script for Malayalam, Gujarati script for Gujarati, Gurmukhi for Punjabi, etc.).
2. If commentary/insight was provided, translate or expand the deep insight into "${targetLanguage}" preserving technical Indic concepts (Dharma, Rta, Purusha, Jnana, Karma, Moksha, etc.).
3. Provide the native script name and language name.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            translatedText: { type: Type.STRING },
            translatedInsight: { type: Type.STRING },
            targetLanguage: { type: Type.STRING },
            nativeScriptName: { type: Type.STRING },
          },
          required: ["translatedText", "targetLanguage"],
        }
      }
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Error in /api/translate:", error);
    res.status(500).json({ 
      error: error.message || "Failed to translate scripture.",
      fallback: true 
    });
  }
});

// 7. Interactive AI Sage & Multi-Agent Discussion Chat
app.post("/api/chat", async (req, res) => {
  try {
    const { message, context, agentPersona = "Sage Acharya", language = "English" } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Context Information:
      ${JSON.stringify(context || {})}
      
      User Inquiry: ${message}`,
      config: {
        systemInstruction: `You are the lead scholar AI in the "Granth" Indic Archaeo-Science & Heritage Intelligence System speaking as "${agentPersona}".
You possess profound master-level expertise in:
- Indian Archaeology, Stratigraphy, Satellite Remote Sensing, C14/OSL Dating
- Archaeo-Astronomy, Surya Siddhanta, Ephemeris, Precession of Equinoxes, Nakshatras, Panchanga
- Epigraphy, Paleography, Brahmi, Kharosthi, Grantha, Indus glyphs, Inscription Decipherment
- Iconography, Shilpa Shastras (Manasara, Mayamata), Talamana canonical proportions, Vastu Purusha Mandala
- Pictography, Petroglyphs, Pigment Chromatography, Rock Art
- Vedic Acoustics, Yajna thermodynamics, Sacred Geometry, Traditions & Customs
- Modern Archaeometric Sensor Telemetry (LiDAR, GPR, Hyperspectral UV-NIR, RTI Grazing Light, Acoustic Resonance)

Respond with deep scientific rigor, respectful Indic terminology, precise Sanskrit citations where relevant, and clear explanations in ${language}.`,
      }
    });

    res.json({ answer: response.text });
  } catch (error: any) {
    console.error("Chat error:", error);
    res.status(500).json({ error: error.message || "Failed to process chat" });
  }
});

// 8. Carbon Dating & AMS C-14 Calibration Engine
app.post("/api/carbon-dating-calc", async (req, res) => {
  try {
    const { 
      sampleType = "Charcoal", 
      sampleMassMg = 2.5, 
      pmc = 58.4, 
      delta13C = -24.5, 
      halfLifeMode = "Libby", 
      siteContext = "Saraswati Valley Stratum IV" 
    } = req.body;

    const prompt = `You are a Senior Radiocarbon Geochronologist and Director of an AMS (Accelerator Mass Spectrometry) Laboratory.
Calculate and provide an in-depth scientific Radiocarbon Dating analysis:
Sample Type: ${sampleType}
Sample Mass: ${sampleMassMg} mg
Fraction Modern Carbon (pMC): ${pmc}%
Isotopic Fractionation δ13C: ${delta13C} ‰ (PDB standard)
Half-life Convention: ${halfLifeMode === "Libby" ? "Libby (5568 yr)" : "Cambridge (5730 yr)"}
Archaeological Site Context: ${siteContext}

Perform calculations:
1. Uncalibrated 14C Age (BP) with ± error based on pMC and δ13C correction.
2. Calibrated Calendar Date Range (BCE/CE) using IntCal20 tree-ring calibration curve (1-sigma 68.2% and 2-sigma 95.4% confidence intervals).
3. Tandetron AMS Ion Beam telemetry (12C current, 13C/12C ratio, 14C detector count rate, Oxalic Acid II NIST SRM 4990C standard factor).
4. Archaeological cultural epoch correlation (e.g. Early Harappan, Mature Harappan, Painted Grey Ware, Vedic Period, Mauryan, Gupta).
5. Sample contamination risks & pretreatment acid-base-acid (ABA) protocol.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            uncalibratedAgeBP: { type: Type.STRING },
            uncalibratedError: { type: Type.NUMBER },
            calibrated1Sigma: { type: Type.STRING },
            calibrated2Sigma: { type: Type.STRING },
            historicalPeriod: { type: Type.STRING },
            delta13CCorrected: { type: Type.NUMBER },
            fractionModern: { type: Type.NUMBER },
            amsDiagnostics: {
              type: Type.OBJECT,
              properties: {
                acceleratorVoltageMV: { type: Type.STRING },
                carbon12CurrentMicroAmps: { type: Type.STRING },
                carbon14CountRateHz: { type: Type.STRING },
                oxalicStandardRatio: { type: Type.STRING },
              },
              required: ["acceleratorVoltageMV", "carbon12CurrentMicroAmps", "carbon14CountRateHz"],
            },
            pretreatmentProtocol: { type: Type.STRING },
            stratigraphicSignificance: { type: Type.STRING },
            calibrationCurvePoints: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  calYearBCE: { type: Type.NUMBER },
                  probability: { type: Type.NUMBER },
                },
                required: ["calYearBCE", "probability"],
              },
            },
          },
          required: [
            "uncalibratedAgeBP",
            "calibrated1Sigma",
            "calibrated2Sigma",
            "historicalPeriod",
            "amsDiagnostics",
            "pretreatmentProtocol",
            "stratigraphicSignificance"
          ],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Carbon dating error:", error);
    res.status(500).json({ error: error.message || "Failed to calculate carbon dating." });
  }
});

// 9. Radiation & Dosimetry Identification Engine (HPGe Gamma, OSL, TL)
app.post("/api/radiation-spectrometry-calc", async (req, res) => {
  try {
    const { 
      sensorType = "HPGe_Gamma", 
      sampleMaterial = "Terracotta Pottery Shard", 
      energyRangeKeV = "0-3000",
      depthMeters = 2.4
    } = req.body;

    const prompt = `You are a Nuclear Archaeometry and Radiation Dosimetry specialist.
Analyze radioisotope signatures and luminescence parameters for:
Sensor / Method: ${sensorType} (e.g. HPGe Gamma Spectrometry, OSL Blue-LED, Thermoluminescence TL Glow-Curve, Geiger Survey)
Material: ${sampleMaterial}
Energy Range: ${energyRangeKeV} keV
Stratigraphic Depth: ${depthMeters} m

Provide:
1. Detected Radionuclides (K-40 @ 1460.8 keV, Th-232 decay series like Tl-208 @ 2614.5 keV, U-238 decay series like Bi-214 @ 609.3 keV & Pb-214, Cs-137 @ 661.7 keV).
2. Background environmental dose rate (Gy/ka) and paleodose assessment.
3. Ceramic firing / sediment zeroing date determination formula.
4. Clay provenance geochemical fingerprint based on Thorium/Uranium ratios.
5. High-Purity Germanium detector spectral telemetry.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            sensorUsed: { type: Type.STRING },
            identifiedIsotopes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  isotope: { type: Type.STRING },
                  energyKeV: { type: Type.NUMBER },
                  activityBqKg: { type: Type.NUMBER },
                  decaySeries: { type: Type.STRING },
                  provenanceInsight: { type: Type.STRING },
                },
                required: ["isotope", "energyKeV", "activityBqKg", "decaySeries"],
              },
            },
            annualDoseRateMilliGy: { type: Type.NUMBER },
            paleoDoseEquivalentGy: { type: Type.NUMBER },
            luminescenceAgeCalculated: { type: Type.STRING },
            provenanceClayFingerprint: { type: Type.STRING },
            safetyAndPreservationNotes: { type: Type.STRING },
          },
          required: [
            "sensorUsed",
            "identifiedIsotopes",
            "annualDoseRateMilliGy",
            "luminescenceAgeCalculated",
            "provenanceClayFingerprint"
          ],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Radiation spectrometry error:", error);
    res.status(500).json({ error: error.message || "Failed to analyze radiation spectrometry." });
  }
});

// 10. Pigment Spectroscopy & Artography pXRF Engine
app.post("/api/pigment-spectroscopy-calc", async (req, res) => {
  try {
    const { pigmentColor = "Deep Azure Blue", paintingStyle = "Ajanta Cave 1 Fresco" } = req.body;

    const prompt = `You are a heritage art conservator and specialist in ancient Indic mural/miniature pigments and pXRF (Portable X-Ray Fluorescence) spectroscopy.
Analyze pigment: "${pigmentColor}"
Context/Style: "${paintingStyle}"

Provide:
1. Traditional Indic Mineral Name (e.g. Rajavarta / Lapis Lazuli, Hingula / Cinnabar, Haritashma / Malachite, Manashila / Realgar, Gairika / Ochre).
2. Chemical formula and key elemental emission lines (e.g. Hg L-alpha @ 9.98 keV, Cu K-alpha @ 8.04 keV, As K-alpha @ 10.54 keV, Fe K-alpha @ 6.40 keV).
3. Organic binder detection (Gum Acacia, Neem gum, Casein, Egg tempera, Lime plaster plastering ground).
4. Mineral provenance source (e.g. Badakhshan lapis mines, Hinglaj cinnabar, Deccan trap iron ochres).
5. Conservation vulnerability and photochemical degradation risks.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            mineralNameSanskrit: { type: Type.STRING },
            mineralNameEnglish: { type: Type.STRING },
            chemicalFormula: { type: Type.STRING },
            xrfEmissionLines: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  element: { type: Type.STRING },
                  line: { type: Type.STRING },
                  energyKeV: { type: Type.NUMBER },
                  relativeIntensity: { type: Type.STRING },
                },
                required: ["element", "line", "energyKeV"],
              },
            },
            binderIdentified: { type: Type.STRING },
            geologicalSource: { type: Type.STRING },
            historicalEraMuralCitation: { type: Type.STRING },
            conservationAdvice: { type: Type.STRING },
          },
          required: [
            "mineralNameSanskrit",
            "mineralNameEnglish",
            "chemicalFormula",
            "xrfEmissionLines",
            "binderIdentified",
            "geologicalSource"
          ],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Pigment spectroscopy error:", error);
    res.status(500).json({ error: error.message || "Failed to analyze pigment." });
  }
});

// 11. Ancient Indic Calligraphy & Transliteration Engine
app.post("/api/calligraphy-transcribe", async (req, res) => {
  try {
    const { 
      inputText = "Dharmam Sharanam Gacchami", 
      sourceLanguage = "Sanskrit", 
      targetScript = "Ashokan Brahmi" 
    } = req.body;

    const prompt = `You are a Master Epigrapher and Indic Calligrapher.
Transcribe and analyze:
Text: "${inputText}"
Source Language: ${sourceLanguage}
Target Ancient Script: ${targetScript} (e.g. Ashokan Brahmi, Kharosthi, Siddhamatrika, Sharada, Grantha, Modi, Devanagari)

Provide:
1. Exact Unicode or representative glyph rendering in the ancient script.
2. IAST Transliteration with precise diacritics.
3. Stroke-by-stroke calligraphic penmanship instructions (nib angle, stroke order 1-2-3, ductus flow).
4. Stylus recommendations (Reed Kalama, Bamboo dip, Bronze chisel, Hair brush Tulika).
5. Traditional ink formulation (Lampblack soot / Kajjala with Gum Arabic and Camphor).
6. Historical manuscript / edict paleographical style.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            scriptName: { type: Type.STRING },
            transcribedText: { type: Type.STRING },
            iastPhonetics: { type: Type.STRING },
            englishTranslation: { type: Type.STRING },
            calligraphicDuctus: {
              type: Type.OBJECT,
              properties: {
                nibAngleDegrees: { type: Type.NUMBER },
                strokeDirection: { type: Type.STRING },
                recommendedTool: { type: Type.STRING },
                inkMedium: { type: Type.STRING },
              },
              required: ["nibAngleDegrees", "strokeDirection", "recommendedTool"],
            },
            glyphBreakdownList: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  char: { type: Type.STRING },
                  glyph: { type: Type.STRING },
                  strokeOrderGuide: { type: Type.STRING },
                },
                required: ["char", "glyph", "strokeOrderGuide"],
              },
            },
            historicalProvenanceCitation: { type: Type.STRING },
          },
          required: [
            "scriptName",
            "transcribedText",
            "iastPhonetics",
            "calligraphicDuctus",
            "glyphBreakdownList"
          ],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    res.json(parsed);
  } catch (error: any) {
    console.error("Calligraphy transcribe error:", error);
    res.status(500).json({ error: error.message || "Failed to transcribe calligraphy." });
  }
});

// 12. Indic Heritage Magazines & Scholarly Journals Agentic AI Extractor
app.post("/api/heritage-magazine/extract-agentic", async (req, res) => {
  try {
    const { 
      topicOrIssue, 
      volume, 
      publicationId = "heritage_india",
      magazineTitle = "Heritage India Magazine",
      historicalPeriod = "All Eras" 
    } = req.body;

    const prompt = `You are the Lead Autonomous Agentic Research Orchestrator for the Indic Archaeological & Heritage Journals Intelligence System.
Your task is to research, extract, synthesize, and compile a comprehensive peer-reviewed archaeological, epigraphical, and archaeo-astronomical publication issue for:
PUBLICATION NAME: "${magazineTitle}" (ID: ${publicationId})
MAGAZINE TOPIC / ISSUE / ARCHAEOLOGICAL EXCAVATION: "${topicOrIssue || "Complete Archaeological Monograph"}"
VOLUME / EDITION SPECIFICATION: "${volume || "Special Research Issue"}"
HISTORICAL PERIOD: "${historicalPeriod}"

Deploy the 6 specialized AI Scholar Agents:
1. "Dr. Arundhati Sen" (Stratigraphy, C-14 dating, excavations, settlement patterns)
2. "Acharya Varahamihira" (Archaeo-astronomy, celestial alignments, ephemeris, precession)
3. "Prof. Mahadevan Epigraphicus" (Inscriptions, paleography, Brahmi, Indus glyphs, Grantha, Vatteluttu)
4. "Shilpa Ratna Vidwan" (Iconography, temple architecture, Talamana 120-Angula canon, Vastu Purusha)
5. "Dr. Kedar Shastri" (Vedic scriptures, Agamas, Shrutis/Smritis, classical literature)
6. "Er. Maya Swaminathan" (Sensor archaeometry, GPR, satellite SAR, LiDAR, pXRF, Archaeo-Acoustics)

Generate a complete, deeply authentic, publishable extracted issue matching the editorial style of ${magazineTitle} containing at least 2 in-depth scholarly articles with exact site coordinates, epigraphical transliterations, scientific sensor telemetry, scriptural parallels, and individual agent dispatches.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            publicationId: { type: Type.STRING },
            magazineTitle: { type: Type.STRING },
            volumeNumber: { type: Type.NUMBER },
            issueNumber: { type: Type.NUMBER },
            yearPublished: { type: Type.NUMBER },
            quarter: { type: Type.STRING },
            title: { type: Type.STRING },
            themeCategory: { type: Type.STRING },
            coverImage: { type: Type.STRING },
            editorialSummary: { type: Type.STRING },
            editor: { type: Type.STRING },
            publisher: { type: Type.STRING },
            issn: { type: Type.STRING },
            articles: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  author: { type: Type.STRING },
                  siteOrTopic: { type: Type.STRING },
                  coordinates: { type: Type.STRING },
                  historicalEpoch: { type: Type.STRING },
                  abstract: { type: Type.STRING },
                  extractedFullContent: { type: Type.STRING },
                  keyArchaeologicalFindings: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  epigraphicalDecipherment: {
                    type: Type.OBJECT,
                    properties: {
                      script: { type: Type.STRING },
                      textTransliteration: { type: Type.STRING },
                      translation: { type: Type.STRING },
                      paleographicNotes: { type: Type.STRING },
                    },
                    required: ["script", "textTransliteration", "translation"],
                  },
                  sensorArchaeometryNotes: {
                    type: Type.OBJECT,
                    properties: {
                      methods: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                      },
                      instrumentalFindings: { type: Type.STRING },
                    },
                    required: ["methods", "instrumentalFindings"],
                  },
                  scripturalParallels: { type: Type.STRING },
                  agenticDispatchSummary: {
                    type: Type.OBJECT,
                    properties: {
                      drSenFieldLead: { type: Type.STRING },
                      acharyaVarahaAstro: { type: Type.STRING },
                      profEpigraphicus: { type: Type.STRING },
                      shilpaVidwanArt: { type: Type.STRING },
                      drShastriVedas: { type: Type.STRING },
                      erMayaSensors: { type: Type.STRING },
                    },
                    required: [
                      "drSenFieldLead",
                      "acharyaVarahaAstro",
                      "profEpigraphicus",
                      "shilpaVidwanArt",
                      "drShastriVedas",
                      "erMayaSensors",
                    ],
                  },
                  tags: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                },
                required: [
                  "id",
                  "title",
                  "author",
                  "siteOrTopic",
                  "coordinates",
                  "historicalEpoch",
                  "abstract",
                  "extractedFullContent",
                  "keyArchaeologicalFindings",
                  "epigraphicalDecipherment",
                  "sensorArchaeometryNotes",
                  "scripturalParallels",
                  "agenticDispatchSummary",
                  "tags",
                ],
              },
            },
          },
          required: [
            "id",
            "volumeNumber",
            "issueNumber",
            "yearPublished",
            "quarter",
            "title",
            "themeCategory",
            "editorialSummary",
            "articles",
          ],
        },
      },
    });

    const parsed = cleanAndParseJSON(response.text || "{}");
    if (!parsed.publicationId) parsed.publicationId = publicationId;
    if (!parsed.magazineTitle) parsed.magazineTitle = magazineTitle;
    res.json(parsed);
  } catch (error: any) {
    console.error("Heritage Magazine agent extraction error:", error);
    res.status(500).json({ error: error.message || "Failed to extract Heritage India Magazine content." });
  }
});

// ==========================================
// 12. AI-DRIVEN INTERACTIVE SANSKRIT LEARNING MODULE ENDPOINTS
// ==========================================

// A. Conversational Tutor (संस्कृत-सखा / Guru)
app.post("/api/sanskrit-learning/chat", async (req, res) => {
  try {
    const { 
      userMessage = "नमस्ते। भवान् कथम् अस्ति?", 
      history = [], 
      skillLevel = "intermediate", 
      scenario = "daily_greeting",
      translationLang = "English"
    } = req.body;

    const prompt = `You are "संस्कृत-सखा (Samskrita-Sakha)", an encouraging, highly knowledgeable, AI-driven interactive Sanskrit tutor and conversation partner.
Context:
- User's Skill Level: ${skillLevel} (beginner = Sarala Samskritam with simple present tense; intermediate = past/future/gerunds like ktva/lyap; advanced = shastric vocabulary and nuanced compounds)
- Current Scenario: ${scenario}
- Target Translation Language: ${translationLang} (e.g. English, Hindi, Marathi, Tamil, Telugu, Bengali, Gujarati, Kannada, etc.)
- User's message: "${userMessage}"
- Prior conversation history: ${JSON.stringify(history.slice(-4))}

Formulate a warm, pedagogically rich conversational Sanskrit response.
Requirements:
1. Provide a direct, natural Sanskrit response in standard Devanagari script.
2. Provide precise IAST transliteration with correct diacritics.
3. Provide a clear translation of the response in ${translationLang}.
4. Provide a word-by-word gloss of the response (sanskrit word, root or stem, grammatical case/tag, meaning in ${translationLang}).
5. Provide a helpful grammar tip explaining an interesting grammatical feature, vibhakti, or sandhi used in your response.
6. Provide 3 quick suggested replies in Sanskrit (with meanings in ${translationLang}) that the user can pick to continue the dialogue.
7. Provide clean speechText optimized for phonetic browser text-to-speech.`;

    if (process.env.GEMINI_API_KEY) {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              sanskritDevanagari: { type: Type.STRING },
              transliterationIAST: { type: Type.STRING },
              englishTranslation: { type: Type.STRING },
              wordByWordGloss: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    sanskrit: { type: Type.STRING },
                    rootOrStem: { type: Type.STRING },
                    grammarTag: { type: Type.STRING },
                    meaning: { type: Type.STRING }
                  },
                  required: ["sanskrit", "rootOrStem", "grammarTag", "meaning"]
                }
              },
              grammarNote: { type: Type.STRING },
              suggestedReplies: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    sanskrit: { type: Type.STRING },
                    english: { type: Type.STRING }
                  },
                  required: ["sanskrit", "english"]
                }
              },
              speechText: { type: Type.STRING }
            },
            required: [
              "sanskritDevanagari",
              "transliterationIAST",
              "englishTranslation",
              "wordByWordGloss",
              "grammarNote",
              "suggestedReplies",
              "speechText"
            ]
          }
        }
      });
      const parsed = cleanAndParseJSON(response.text || "{}");
      return res.json(parsed);
    }

    // Intelligent Fallback if API key unavailable
    return res.json({
      sanskritDevanagari: "नमस्ते! अहं कुशली अस्मि। भवतः अध्ययनं कथं प्रचलति?",
      transliterationIAST: "Namaste! Ahaṁ kuśalī asmi. Bhavataḥ adhyayanaṁ kathaṁ pracalati?",
      englishTranslation: "Greetings! I am doing well. How is your Sanskrit study progressing?",
      wordByWordGloss: [
        { sanskrit: "नमस्ते", rootOrStem: "नमः + ते", grammarTag: "Avyaya + 4th case (te)", meaning: "Salutations to you" },
        { sanskrit: "अहम्", rootOrStem: "अस्मद्", grammarTag: "Pronoun, Prathama 1-sg", meaning: "I" },
        { sanskrit: "कुशली", rootOrStem: "कुशलिन्", grammarTag: "Masculine stem, Prathama 1-sg", meaning: "Doing well / in good health" },
        { sanskrit: "अस्मि", rootOrStem: "अस् (२ उभ)", grammarTag: "Lat-lakar, Uttama-purusha 1-sg", meaning: "Am" },
        { sanskrit: "भवतः", rootOrStem: "भवत्", grammarTag: "Punglinga, Shashthi 6-sg", meaning: "Your (polite)" },
        { sanskrit: "अध्ययनम्", rootOrStem: "अधि + इण्", grammarTag: "Napumsakalinga, Prathama 1-sg", meaning: "Study / learning" },
        { sanskrit: "कथम्", rootOrStem: "किम्", grammarTag: "Avyaya", meaning: "How" },
        { sanskrit: "प्रचलति", rootOrStem: "प्र + चल् (१ परस्मै)", grammarTag: "Lat-lakar, Prathama-purusha 1-sg", meaning: "Progresses / goes on" }
      ],
      grammarNote: "Notice 'भवतः' (shashthi vibhakti - genitive singular of bhavat): when addressing someone respectfully in Sanskrit, use 'भवतः' (male) or 'भवत्याः' (female) instead of the informal 'तव'.",
      suggestedReplies: [
        { sanskrit: "मम अध्ययनम् उत्तमं प्रचलति।", english: "My study is proceeding excellently." },
        { sanskrit: "अहं संस्कृतस्य व्याकरणं ज्ञातुम् इच्छामि।", english: "I desire to learn Sanskrit grammar." },
        { sanskrit: "कृपया मां कारकाणां विषये पाठयतु।", english: "Please teach me regarding the Karakas (cases)." }
      ],
      speechText: "Namaste! Aham kushali asmi. Bhavatah adhyayanam katham prachalati?"
    });
  } catch (error: any) {
    console.error("Sanskrit Chat error:", error);
    res.status(500).json({ error: error.message || "Failed to process Sanskrit chat." });
  }
});

// B. Grammar Doctor & Karaka Analyzer (व्याकरण-वैद्यः)
app.post("/api/sanskrit-learning/grammar-doctor", async (req, res) => {
  try {
    const { sentence = "बालकः विद्यालयं गच्छति" } = req.body;

    const prompt = `You are a world-class Paninian grammarian (वैयाकरण) and Sanskrit language teacher analyzing this Sanskrit sentence:
SENTENCE: "${sentence}"

Perform a thorough grammatical diagnosis:
1. Determine if the sentence is grammatically correct or needs repair.
2. Provide an overall score (0-100).
3. If errors exist in agreement (Linga, Vachana, Purusha), Sandhi, or Karaka vibhakti, correct the sentence and provide the corrected version in Devanagari and IAST with English meaning.
4. Karaka Syntactic Role Mapping: For each nominal or verbal constituent, identify the Karaka (Karta, Karma, Karana, Sampradana, Apadana, Adhikarana), the case (Vibhakti), and its syntactic dependency.
5. Morphological breakdown for each word (base stem/dhatu, suffix/pratyaya, gender, case, number, or tense/lakara).
6. Identify any Sandhi combinations or where Sandhi should occur according to Panini's rules.
7. Pedagogical explanation citing relevant Panini sutras (e.g. 1.4.49 कर्तुरीप्सिततमं कर्म, 2.3.2 कर्मणि द्वितीया, 1.4.24 ध्रुवमपायेऽपादानम्).`;

    if (process.env.GEMINI_API_KEY) {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              originalSentence: { type: Type.STRING },
              isCorrect: { type: Type.BOOLEAN },
              overallScore: { type: Type.NUMBER },
              correctedSentence: { type: Type.STRING },
              correctedIAST: { type: Type.STRING },
              englishMeaning: { type: Type.STRING },
              karakaAnalysis: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    word: { type: Type.STRING },
                    padartha: { type: Type.STRING },
                    karaka: { type: Type.STRING },
                    vibhakti: { type: Type.STRING },
                    roleExplanation: { type: Type.STRING }
                  },
                  required: ["word", "padartha", "karaka", "vibhakti", "roleExplanation"]
                }
              },
              grammaticalBreakdown: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    word: { type: Type.STRING },
                    stemOrRoot: { type: Type.STRING },
                    pratyaya: { type: Type.STRING },
                    classification: { type: Type.STRING },
                    sutraReference: { type: Type.STRING }
                  },
                  required: ["word", "stemOrRoot", "pratyaya", "classification", "sutraReference"]
                }
              },
              sandhiPoints: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    splitForm: { type: Type.STRING },
                    combinedForm: { type: Type.STRING },
                    sandhiType: { type: Type.STRING },
                    sutra: { type: Type.STRING }
                  },
                  required: ["splitForm", "combinedForm", "sandhiType", "sutra"]
                }
              },
              pedagogicalExplanation: { type: Type.STRING },
              paninianSummary: { type: Type.STRING }
            },
            required: [
              "originalSentence",
              "isCorrect",
              "overallScore",
              "correctedSentence",
              "correctedIAST",
              "englishMeaning",
              "karakaAnalysis",
              "grammaticalBreakdown",
              "sandhiPoints",
              "pedagogicalExplanation",
              "paninianSummary"
            ]
          }
        }
      });
      const parsed = cleanAndParseJSON(response.text || "{}");
      return res.json(parsed);
    }

    // Default Fallback
    return res.json({
      originalSentence: sentence,
      isCorrect: true,
      overallScore: 98,
      correctedSentence: "बालकः विद्यालयं गच्छति।",
      correctedIAST: "bālakaḥ vidyālayaṁ gacchati.",
      englishMeaning: "The boy goes to school.",
      karakaAnalysis: [
        {
          word: "बालकः",
          padartha: "The boy (Subject)",
          karaka: "कर्तृ (Agent / Subject)",
          vibhakti: "प्रथमा विभक्तिः (Nominative 1st Case, 1-sg)",
          roleExplanation: "The independent agent performing the motion action (स्वतंत्रः कर्ता - १.४.५४)."
        },
        {
          word: "विद्यालयम्",
          padartha: "School (Destination / Object)",
          karaka: "कर्म (Goal of Motion)",
          vibhakti: "द्वितीया विभक्तिः (Accusative 2nd Case, 2-sg)",
          roleExplanation: "The primary destination sought by the agent (कर्तुरीप्सिततमं कर्म - १.४.४९; गत्यर्थककर्मणि द्वितीया)."
        },
        {
          word: "गच्छति",
          padartha: "Goes (Action)",
          karaka: "क्रिया (Verbal Action)",
          vibhakti: "लट् लकारः (Present Tense, 3rd Person / Prathama Purusha 1-sg)",
          roleExplanation: "Concorded in number and person with the singular agent 'बालकः'."
        }
      ],
      grammaticalBreakdown: [
        { word: "बालकः", stemOrRoot: "बालक (अकारान्त पुंल्लिङ्ग)", pratyaya: "सुँ (विभक्ति प्रत्ययः)", classification: "सुबन्त (Noun)", sutraReference: "प्रातिपदिकार्थलिङ्गपरिमाणवचनमात्रे प्रथमा (२.३.४६)" },
        { word: "विद्यालयम्", stemOrRoot: "विद्यालय (विद्या + आलय)", pratyaya: "अम् (द्वितीया एकवचन)", classification: "सुबन्त (Noun)", sutraReference: "कर्मणि द्वितीया (२.३.२)" },
        { word: "गच्छति", stemOrRoot: "गम् (१ भ्वादिगण परस्मैपद)", pratyaya: "तिप् (लट् लकार प्रथम पुरुष एकवचन)", classification: "तिङन्त (Verb)", sutraReference: "इषुगमियमां छः (७.३.७७)" }
      ],
      sandhiPoints: [
        { splitForm: "विद्या + आलयम्", combinedForm: "विद्यालयम्", sandhiType: "सवर्णदीर्घ सन्धिः", sutra: "अकः सवर्णे दीर्घः (६.१.१०१)" }
      ],
      pedagogicalExplanation: "The sentence possesses flawless grammatical concord (अन्वय). The subject 'बालकः' is in Prathama Vibhakti singular, matching the verb 'गच्छति' in 3rd person singular. The destination 'विद्यालयम्' correctly takes Dvitiya Vibhakti as the locus of physical motion (गत्यर्थक धातवः).",
      paninianSummary: "Concord established under 'तिङ्-समानाधिकरणे प्रथमा' and 'कर्मणि द्वितीया'."
    });
  } catch (error: any) {
    console.error("Grammar Doctor error:", error);
    res.status(500).json({ error: error.message || "Failed to analyze grammar." });
  }
});

// C. Shloka Anvaya & Verse Deconstructor (श्लोक-अन्वय-दर्शकम्)
app.post("/api/sanskrit-learning/shloka-anvaya", async (req, res) => {
  try {
    const { 
      shloka = "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      translationLang = "English"
    } = req.body;

    const prompt = `You are an expert Sanskrit poet-philosopher (विद्वान्) deconstructing this sacred shloka:
SHLOKA: "${shloka}"
Target Language for Translation and Meanings: "${translationLang}" (e.g. English, Hindi, Marathi, Tamil, Telugu, Bengali, Gujarati, Kannada, etc.)

Provide an exhaustive, pedagogically structured deconstruction:
1. Padachheda (पदच्छेदः): Separate every joined sandhi-word into distinct grammatical words.
2. Anvaya (अन्वयः): Arrange the words in natural Sanskrit prose order (Karta -> Karaka modifiers -> Karma -> Kriya) so a student can immediately grasp the direct sentence structure.
3. Anvaya Translation: A fluid yet word-faithful translation following the anvaya prose sequence in ${translationLang}.
4. Word-by-Word Morphological Matrix:
   - For every word, specify: word in Devanagari, root/stem, grammatical case/tag (Linga, Vibhakti, Vachana or Dhatu, Lakara, Purusha), meaning in context in ${translationLang}, and syntactic role in the sentence.
5. Chhandas (छन्दः) Identification: Identify the poetic meter (e.g. Anushtubh, Indravajra, etc.), syllable count, and metrical pattern.
6. Alankara (अलंकारः): Poetic figure of speech (if any, e.g. Rupaka, Anuprasa, Vyatireka).
7. Philosophical & Practical Essence (भावार्थः): A lucid, inspirational commentary explaining the verse's inner meaning in ${translationLang} for daily life and spiritual growth.`;

    if (process.env.GEMINI_API_KEY) {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              originalShloka: { type: Type.STRING },
              padachheda: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              anvayaOrderSanskrit: { type: Type.STRING },
              anvayaEnglishTranslation: { type: Type.STRING },
              wordMatrix: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    word: { type: Type.STRING },
                    rootOrStem: { type: Type.STRING },
                    morphologicalTag: { type: Type.STRING },
                    meaningInContext: { type: Type.STRING },
                    syntacticRole: { type: Type.STRING }
                  },
                  required: ["word", "rootOrStem", "morphologicalTag", "meaningInContext", "syntacticRole"]
                }
              },
              chhandas: {
                type: Type.OBJECT,
                properties: {
                  meterName: { type: Type.STRING },
                  syllableCount: { type: Type.STRING },
                  yatiRules: { type: Type.STRING }
                },
                required: ["meterName", "syllableCount", "yatiRules"]
              },
              alankara: { type: Type.STRING },
              bhavarthaCommentary: { type: Type.STRING }
            },
            required: [
              "originalShloka",
              "padachheda",
              "anvayaOrderSanskrit",
              "anvayaEnglishTranslation",
              "wordMatrix",
              "chhandas",
              "alankara",
              "bhavarthaCommentary"
            ]
          }
        }
      });
      const parsed = cleanAndParseJSON(response.text || "{}");
      return res.json(parsed);
    }

    // Default Fallback for BG 2.47
    return res.json({
      originalShloka: shloka,
      padachheda: ["कर्मणि", "एव", "अधिकारः", "ते", "मा", "फलेषु", "कदाचन", "मा", "कर्मफलहेतुः", "भूः", "मा", "ते", "सङ्गः", "अस्तु", "अकर्मणि"],
      anvayaOrderSanskrit: "ते कर्मणि एव अधिकारः (अस्ति), फलेषु कदाचन मा (अस्तु)। (त्वं) कर्मफलहेतुः मा भूः, अकर्मणि ते सङ्गः मा अस्तु।",
      anvayaEnglishTranslation: "Your jurisdiction (adhikāra) is in action alone, never in the fruits. Do not be motivated by the fruits of action, nor let your attachment be to inaction.",
      wordMatrix: [
        { word: "कर्मणि", rootOrStem: "कर्मन् (नपुं)", morphologicalTag: "Saptami (7th Locative) 1-sg", meaningInContext: "in action", syntacticRole: "Adhikarana (Locus of entitlement)" },
        { word: "एव", rootOrStem: "एव (अव्यय)", morphologicalTag: "Avyaya (indeclinable)", meaningInContext: "alone / only", syntacticRole: "Emphasis particle" },
        { word: "अधिकारः", rootOrStem: "अधिकार (पुं)", morphologicalTag: "Prathama (1st Nominative) 1-sg", meaningInContext: "right / entitlement / jurisdiction", syntacticRole: "Karta (Subject)" },
        { word: "ते", rootOrStem: "युष्मद् (सर्वनाम)", morphologicalTag: "Shashthi (6th Genitive) 1-sg", meaningInContext: "of you / your", syntacticRole: "Sambandha (Genitive relation)" },
        { word: "मा", rootOrStem: "मा (अव्यय)", morphologicalTag: "Avyaya (negative imperative)", meaningInContext: "not / let there not be", syntacticRole: "Prohibitive particle" },
        { word: "फलेषु", rootOrStem: "फल (नपुं)", morphologicalTag: "Saptami (7th Locative) Plural", meaningInContext: "in the results / fruits", syntacticRole: "Adhikarana" },
        { word: "कदाचन", rootOrStem: "कदाचन (अव्यय)", morphologicalTag: "Avyaya", meaningInContext: "at any time / ever", syntacticRole: "Temporal modifier" },
        { word: "कर्मफलहेतुः", rootOrStem: "कर्मफलहेतु (पुं)", morphologicalTag: "Prathama (1st Nominative) 1-sg", meaningInContext: "one whose motive is fruit of action", syntacticRole: "Predicate nominative" },
        { word: "भूः", rootOrStem: "भू (१ भ्वादि)", morphologicalTag: "Lun-lakar (Aorist) Madhyama 1-sg with mā", meaningInContext: "become", syntacticRole: "Kriya (Action verb)" },
        { word: "सङ्गः", rootOrStem: "सङ्ग (पुं)", morphologicalTag: "Prathama (1st Nominative) 1-sg", meaningInContext: "attachment / clinginess", syntacticRole: "Subject" },
        { word: "अस्तु", rootOrStem: "अस् (२ अदादि)", morphologicalTag: "Lot-lakar (Imperative) Prathama 1-sg", meaningInContext: "let there be", syntacticRole: "Kriya" },
        { word: "अकर्मणि", rootOrStem: "अकर्मन् (नपुं)", morphologicalTag: "Saptami (7th Locative) 1-sg", meaningInContext: "in non-action / inertia", syntacticRole: "Adhikarana" }
      ],
      chhandas: {
        meterName: "अनुष्टुप् छन्दः (Anuṣṭubh / Śloka)",
        syllableCount: "32 syllables (4 Padas of 8 syllables each: 8 + 8 + 8 + 8)",
        yatiRules: "Pause after every 8 syllables. Fifth syllable of each pada is short (Laghu), sixth is long (Guru)."
      },
      alankara: "काव्यलिङ्ग एवं व्यतिरेक अलंकार (Kavyalinga & Vyatireka) - rational cause stated for detached action.",
      bhavarthaCommentary: "This celebrated verse from Bhagavad Gita 2.47 establishes the core foundation of Nishkama Karma Yoga: human dignity and conscious agency lie strictly in dedication to righteous duty (Karya Karma), liberating consciousness from psychological entrapment in future anxieties or outcomes."
    });
  } catch (error: any) {
    console.error("Shloka Anvaya error:", error);
    res.status(500).json({ error: error.message || "Failed to analyze shloka." });
  }
});

// D. Dynamic Interactive Exercise Generator (अभ्यास-प्रश्नावली)
app.post("/api/sanskrit-learning/generate-exercise", async (req, res) => {
  try {
    const { 
      topic = "Vibhaktis & Karakas", 
      level = "intermediate", 
      count = 5 
    } = req.body;

    const prompt = `You are a Sanskrit examination master generating a highly engaging, interactive Sanskrit learning challenge:
TOPIC: "${topic}"
LEVEL: "${level}"
NUMBER OF QUESTIONS: ${count}

Create multiple-choice questions (MCQs) designed to develop real mastery.
For each question:
- Question in clear Sanskrit (with English guidance)
- 4 plausible options
- Index of the correct answer (0, 1, 2, or 3)
- An actionable pedagogical hint
- Detailed Paninian explanation citing sutras or rules explaining why the answer is correct and why the alternatives are incorrect.`;

    if (process.env.GEMINI_API_KEY) {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              quizTitle: { type: Type.STRING },
              level: { type: Type.STRING },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    questionSanskrit: { type: Type.STRING },
                    questionEnglish: { type: Type.STRING },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    },
                    correctIndex: { type: Type.NUMBER },
                    hint: { type: Type.STRING },
                    paninianExplanation: { type: Type.STRING },
                    relatedSutra: { type: Type.STRING }
                  },
                  required: [
                    "id",
                    "questionSanskrit",
                    "questionEnglish",
                    "options",
                    "correctIndex",
                    "hint",
                    "paninianExplanation",
                    "relatedSutra"
                  ]
                }
              }
            },
            required: ["quizTitle", "level", "questions"]
          }
        }
      });
      const parsed = cleanAndParseJSON(response.text || "{}");
      return res.json(parsed);
    }

    // Default Fallback
    return res.json({
      quizTitle: "कारक-विभक्ति-दक्षता (Karaka & Vibhakti Mastery)",
      level,
      questions: [
        {
          id: "q1",
          questionSanskrit: "'वृक्षात् पत्रं पतति' — अस्मिन् वाक्ये 'वृक्षात्' पदे का विभक्तिः, किं च कारकम्?",
          questionEnglish: "In the sentence 'Vrkshat patram patati', what is the Vibhakti and Karaka of 'Vrkshat'?",
          options: [
            "द्वितीया विभक्तिः, कर्म कारकम्",
            "तृतीया विभक्तिः, करण कारकम्",
            "पञ्चमी विभक्तिः, अपादान कारकम्",
            "सप्तमी विभक्तिः, अधिकरण कारकम्"
          ],
          correctIndex: 2,
          hint: "The tree is the fixed point of separation (ध्रुवम्) from which the leaf falls.",
          paninianExplanation: "By Panini's sutra 'ध्रुवमपायेऽपादानम्' (1.4.24), when separation takes place, the stationary point is Apadana. By 'अपादाने पञ्चमी' (2.3.28), Apadana takes the 5th case (वृक्षात्).",
          relatedSutra: "ध्रुवमपायेऽपादानम् (१.४.२४) & अपादाने पञ्चमी (२.३.२८)"
        },
        {
          id: "q2",
          questionSanskrit: "'गणेशाय नमः' — अत्र 'गणेश' शब्दे चतुर्थी विभक्तिः कस्मात् कारणात् अभवत्?",
          questionEnglish: "In 'Ganeshaya Namah', why is the 4th (Dative) case used for Ganesha?",
          options: [
            "कर्मणि द्वितीया नियमेन",
            "नमः-योगे उपपदविभक्तिनियमेन",
            "सह-योगे तृतीयानियमेन",
            "कर्तृवाच्यनियमेन"
          ],
          correctIndex: 1,
          hint: "Words like Namah, Svasti, Svaha govern a specific Upapada case.",
          paninianExplanation: "According to Panini sutra 2.3.16 'नमःस्वस्तिस्वाहास्वधाऽलंवषड्योगाच्च', words joined with 'नमः' (salutations) mandatorily take Chaturthi (4th case).",
          relatedSutra: "नमःस्वस्तिस्वाहास्वधाऽलंवषड्योगाच्च (२.३.१६)"
        },
        {
          id: "q3",
          questionSanskrit: "'इति + आदि' — अनयोः पदयोः सन्धौ सति किं रूपं भवति?",
          questionEnglish: "When 'iti' and 'adi' are combined in Sandhi, what is the resulting form?",
          options: [
            "इतादि",
            "इत्यादि",
            "इतेआदि",
            "इतीआदि"
          ],
          correctIndex: 1,
          hint: "An 'इ' followed by a dissimilar vowel becomes 'य्'.",
          paninianExplanation: "By Panini sutra 'इको यणचि' (6.1.77), the letter 'इ' turns into semivowel 'य्' when followed by an 'अच्' (vowel), yielding 'इत्यादि'.",
          relatedSutra: "इको यणचि (६.१.७७)"
        },
        {
          id: "q4",
          questionSanskrit: "'सः छात्रैः सह पठति' — अस्मिन् वाक्ये 'छात्रैः' पदे तृतीया विभक्तिः केन सूत्रेण विहिता?",
          questionEnglish: "In 'Sah chhatraih saha pathati', which rule applies the 3rd case to 'chhatraih'?",
          options: [
            "सहयुक्तेऽप्रधाने",
            "साधकतमं करणम्",
            "कर्तृकरणयोस्तृतीया",
            "येनाङ्गविकारः"
          ],
          correctIndex: 0,
          hint: "The word 'सह' (along with) joins an attendant/secondary agent.",
          paninianExplanation: "By Panini sutra 2.3.19 'सहयुक्तेऽप्रधाने', the non-principal agent accompanying someone takes Tritiya Vibhakti when constructed with 'सह', 'साकम्', or 'सार्धम्'.",
          relatedSutra: "सहयुक्तेऽप्रधाने (२.३.१९)"
        },
        {
          id: "q5",
          questionSanskrit: "'पठति' क्रियापदस्य लृट् लकारे (भविष्यत् काले) प्रथम-पुरुष-बहुवचने किं रूपं भवति?",
          questionEnglish: "What is the form of the root 'Path' in Lrt-lakar (Future Tense), 3rd person plural?",
          options: [
            "अपठन्",
            "पठन्ति",
            "पठिष्यन्ति",
            "पठेयुः"
          ],
          correctIndex: 2,
          hint: "Future tense (लृट्) takes the suffix 'स्य/इष्य'.",
          paninianExplanation: "Root 'पठ्' takes 'इट्' augment (सेट् धातु) and 'लृट् शेषे च' (3.3.13) gives पठ् + इ + स्य + अन्ति = पठिष्यन्ति.",
          relatedSutra: "लृट् शेषे च (३.३.१३)"
        }
      ]
    });
  } catch (error: any) {
    console.error("Generate exercise error:", error);
    res.status(500).json({ error: error.message || "Failed to generate exercise." });
  }
});

// E. AI Sanskrit Guru Q&A / Doubt Clarification (शङ्का-समाधानम्)
app.post("/api/sanskrit-learning/clarify-doubt", async (req, res) => {
  try {
    const { question = "क्त्वा एवं ल्यप् प्रत्यययोः मध्ये कः भेदः अस्ति?" } = req.body;

    const prompt = `You are an enlightened, patient Sanskrit grammarian answering a student's doubt:
STUDENT DOUBT: "${question}"

Provide a crystal-clear, structured response:
1. Core succinct answer (Devanagari and English).
2. Panini Sutras (सूत्र-प्रमाणम्): Cite relevant sutras with number and exact explanation.
3. Comparative Worked Examples (उदाहरणात्मकम्): 2 to 3 side-by-side examples with Devanagari, IAST, English, and morphological derivation.
4. Common Mistakes to Avoid (सावधानता): 2 or 3 common pitfalls students make with this topic.
5. Memorable Mnemonic or Classic Shloka illustrating the concept.`;

    if (process.env.GEMINI_API_KEY) {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              query: { type: Type.STRING },
              coreAnswerDevanagari: { type: Type.STRING },
              coreAnswerEnglish: { type: Type.STRING },
              paninianSutras: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    sutraNumber: { type: Type.STRING },
                    sutraText: { type: Type.STRING },
                    explanation: { type: Type.STRING }
                  },
                  required: ["sutraNumber", "sutraText", "explanation"]
                }
              },
              workedExamples: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    sanskrit: { type: Type.STRING },
                    iast: { type: Type.STRING },
                    english: { type: Type.STRING },
                    grammaticalBreakdown: { type: Type.STRING }
                  },
                  required: ["sanskrit", "iast", "english", "grammaticalBreakdown"]
                }
              },
              commonMistakesToAvoid: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              mnemonicOrClassicQuote: { type: Type.STRING }
            },
            required: [
              "query",
              "coreAnswerDevanagari",
              "coreAnswerEnglish",
              "paninianSutras",
              "workedExamples",
              "commonMistakesToAvoid",
              "mnemonicOrClassicQuote"
            ]
          }
        }
      });
      const parsed = cleanAndParseJSON(response.text || "{}");
      return res.json(parsed);
    }

    // Default Fallback
    return res.json({
      query: question,
      coreAnswerDevanagari: "यदा धातोः पूर्वम् उपसर्गः न भवति तदा 'क्त्वा' प्रत्ययः भवति। यदा धातोः पूर्वम् उपसर्गः भवति तदा 'क्त्वा' इत्यस्य स्थाने 'ल्यप्' आदेशः भवति।",
      coreAnswerEnglish: "Both 'ktvā' and 'lyap' signify a prior completed action (gerund: 'having done X, he does Y'). If the verb has NO prefix (upasarga), 'ktvā' is attached. If the verb HAS an upasarga, 'lyap' replaces 'ktvā'.",
      paninianSutras: [
        {
          sutraNumber: "३.४.२१",
          sutraText: "समानकर्तृकयोः पूर्वकाले",
          explanation: "When two actions share the same agent, the earlier action takes the affix ktvā."
        },
        {
          sutraNumber: "७.१.३७",
          sutraText: "समासेऽनञ्पूर्वे क्त्वो ल्यप्",
          explanation: "In a compound where an upasarga/prefix precedes the root (except the negative particle 'nañ'), ktvā is replaced by lyap."
        }
      ],
      workedExamples: [
        {
          sanskrit: "बालकः पुस्तकं पठित्वा क्रीडति।",
          iast: "bālakaḥ pustakaṁ paṭhitvā krīḍati.",
          english: "The boy, having read the book, plays.",
          grammaticalBreakdown: "पठ् + क्त्वा (no prefix) = पठित्वा (having read)."
        },
        {
          sanskrit: "छात्रः गुरुं प्रणम्य पठति।",
          iast: "chātraḥ guruṁ praṇamya paṭhati.",
          english: "The student, having bowed to the Guru, reads.",
          grammaticalBreakdown: "प्र (prefix) + नम् + ल्यप् = प्रणम्य (having bowed)."
        },
        {
          sanskrit: "सः गृहम् आगत्य विश्राम्यति।",
          iast: "saḥ gṛham āgatya viśrāmyati.",
          english: "He, having arrived home, rests.",
          grammaticalBreakdown: "आ (prefix) + गम् + ल्यप् = आगत्य (having arrived)."
        }
      ],
      commonMistakesToAvoid: [
        "Never add 'ktvā' to a verb with an upasarga (e.g. *प्रपठित्वा is WRONG; correct is प्रपठ्य).",
        "Never add 'lyap' to a bare root without an upasarga (e.g. *पठ्य for 'having read' is WRONG; correct is पठित्वा).",
        "With negative 'अ' (nañ), ktvā remains without becoming lyap: अकृत्वा (not having done), not *अकृत्य."
      ],
      mnemonicOrClassicQuote: "सोपसर्गे ल्यप् स्यात्, अनोपसर्गे क्त्वा भवेत्। (With prefix use Lyap, without prefix use Ktvā!)"
    });
  } catch (error: any) {
    console.error("Clarify doubt error:", error);
    res.status(500).json({ error: error.message || "Failed to clarify doubt." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Granth Heritage Intelligence Server running at http://localhost:${PORT}`);
  });
}

startServer();

