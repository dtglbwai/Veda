import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Leaf, 
  Droplets, 
  Flame, 
  Activity, 
  ShieldCheck, 
  AlertTriangle, 
  Info,
  Clock,
  ChevronRight,
  BookOpen,
  Heart,
  Sparkles,
  Calendar,
  CheckCircle2,
  Volume2
} from "lucide-react";

interface Remedy {
  id: string;
  name: string;
  sanskritName: string;
  category: "remedy" | "santana_utpatti";
  sourceTreatise: string;
  shloka: string;
  translation: string;
  howItWorks: string[];
  timing: {
    acute: string;
    recovery: string;
  };
  preparation: string[];
  risks: string[];
}

export const CHARAKA_SANTANA_SHLOKAS = [
  {
    id: "garbha_sambhav_4",
    title: "Garbha Sambhava Samagri (The 4 Sacred Pillars of Conception)",
    sanskritTitle: "गर्भसम्भव सामग्री - ऋतु, क्षेत्र, अम्बु, बीज",
    source: "Sushruta Samhita Sharirasthana 2.33 & Charaka Samhita Sharirasthana 8",
    shloka: "ध्रुवं तु संसारे बीजं क्षेत्रं चाम्बु च।\nऋतौ सन्निपतितं गर्भं जनयति ध्रुवम्॥",
    translation: "Just as a healthy sprout emerges with certainty when the proper season (Ritu), fertile soil (Kshetra), nourishing water (Ambu), and flawless seed (Beeja) unite—even so does conception unfailingly occur when these four factors are pure and synchronized.",
    breakdown: [
      { factor: "Ritu (ऋतु - Fertile Season & Timing)", detail: "Days 5 to 16 of the menstrual cycle, when the ovulatory window is open and the uterus is receptive." },
      { factor: "Kshetra (क्षेत्र - The Maternal Field / Womb)", detail: "Healthy uterus and reproductive pathways, free from Vata/Pitta/Kapha afflictions (Yoni Vyapad)." },
      { factor: "Ambu (अम्बु - Nourishing Fluid & Hormonal Rasa)", detail: "Optimal nutrition, Ahara Rasa, healthy endocrine secretions and systemic hydration." },
      { factor: "Beeja (बीज - The Pure Seeds / Sperm & Ovum)", detail: "Flawless Shukra (spermatozoa) and pure Artava (ovum), devoid of 8 classical doshic vitiations." }
    ]
  },
  {
    id: "charaka_ritu_parity",
    title: "Ritu Kala & Day Parity for Progeny (ऋतुकाल एवं दिन-नियम)",
    sanskritTitle: "दिन-विभागेन सन्तान-निर्णयः",
    source: "Charaka Samhita Sharirasthana 8.5",
    shloka: "तत्र युग्मेष्वहस्सु संविशतोः पुमान् जायते, अयुग्मेषु स्त्री;\nतस्मात् पुत्रकामः युग्मेष्वहस्सु संविशेत्, स्त्रीकामस्त्वयुग्मेषु॥",
    translation: "When union takes place on even nights (6th, 8th, 10th, 12th), male progeny with robust physical constitution is born; on odd nights (7th, 9th, 11th, 13th), female progeny with radiant grace and wisdom is born. Therefore, one desiring a male child should unite on even nights, and one desiring a female child on odd nights.",
    breakdown: [
      { factor: "Even Nights (युग्म रात्रि - 6, 8, 10, 12)", detail: "Predominance of paternal genetic potential (Shukra-Bahu-Tva). Produces strong, resolute, masculine traits." },
      { factor: "Odd Nights (अयुग्म रात्रि - 7, 9, 11, 13)", detail: "Predominance of maternal ovular energy (Artava-Bahu-Tva). Produces gentle, intuitive, feminine traits." },
      { factor: "Days 1 to 4 (रजस्वला काल)", detail: "Strict abstinence. The uterine endometrium is shedding; physical rest, satvik diet, and silence are mandated." },
      { factor: "Day 11 & 13 Caution", detail: "Charaka and Ashtanga Sangraha recommend avoiding 11th and 13th nights if planetary transits are harsh." }
    ]
  },
  {
    id: "charaka_sattva_epigenetics",
    title: "Sattva & Epigenetic Mental State (माता-पिता का सत्त्व एवं चित्तवृत्ति)",
    sanskritTitle: "मनोभावस्य गर्भोपरि प्रभावः",
    source: "Charaka Samhita Sharirasthana 8.8",
    shloka: "यादृशं च रूपं गुणवन्तं वा पुत्रमाशासीत, तादृशं मनसा ध्यायेत्;\nयादृक्चित्तो हि यदा संविशति, तादृक्चित्तमेव तदपत्यं भवति॥",
    translation: "Whatever noble form, righteous virtue, and mental caliber one desires in the child, one should contemplate in mind beforehand. For whatever disposition of consciousness the parents hold during the moment of sacred coitus, precisely of that mental nature (Sattva) does the child become.",
    breakdown: [
      { factor: "Pre-coital Meditation", detail: "Couple should meditate together, invoking virtuous sages, deities, and noble heroes (Dharma Chintana)." },
      { factor: "Absence of Negative Affect", detail: "Anger (Krodha), fear (Bhaya), grief (Shoka), and stress (Chinta) corrupt the subtle Prana, impairing fetal temperament." },
      { factor: "Environmental Sanctity", detail: "Clean, fragrant, softly lit room with auspicious sounds (528Hz Vedic chanting or Tanpura harmonics)." },
      { factor: "Mutual Love & Consent", detail: "Deep emotional affection (Priti) produces harmonious neuro-endocrine oxytocin and Shukra-Artava resonance." }
    ]
  },
  {
    id: "charaka_preconception_diet",
    title: "Pre-Conception Diet & Samskara (आहार-विहार संस्कार)",
    sanskritTitle: "स्त्री-पुंसयोः गर्भाधानपूर्व आहारक्रमः",
    source: "Charaka Samhita Sharirasthana 8.4",
    shloka: "ततः पुमान् सर्पिःक्षीरप्रचुरमाहारं लभेत, स्त्री तु तैलमाषप्रचुराम्।\nएवं हि शुक्रशोणितयोराप्यायनं भवति॥",
    translation: "Prior to conception, the man should consume an abundant diet of pure cow's ghee and milk (to nourish Shukra and Ojas), while the woman should consume foods prepared with sesame oil and black gram (to strengthen the uterine endometrium and ovum). In this manner does the flourishing of seed and ovum occur.",
    breakdown: [
      { factor: "Male Regimen (Ghrita & Ksheera)", detail: "Cow's A2 ghee, organic milk, almonds, ashwagandha, and sweet cooling substances to boost motile, viable sperm." },
      { factor: "Female Regimen (Tila & Masha)", detail: "Sesame seeds (Tila), black gram (Masha), shatavari, and iron-rich wholesome foods to invigorate uterine blood flow." },
      { factor: "Panchakarma Shodhana", detail: "Gentle detox prior to Garbhadhana clears Ama (toxins) so neither hereditary nor doshic impurities pass to the seed." },
      { factor: "Brahmacharya Period", detail: "1 to 3 months of disciplined continence before conception elevates the vital potency of the reproductive Dhatus." }
    ]
  },
  {
    id: "garbhadhana_vedic_mantra",
    title: "Sacred Garbhadhana Mantra (ऋग्वैदिक गर्भाधान मन्त्र)",
    sanskritTitle: "विष्णुर्योनिं कल्पयतु मन्त्रः",
    source: "Rigveda 10.184.1 & Brihadaranyaka Upanishad 6.4.21",
    shloka: "ॐ विष्णुर्योनिं कल्पयतु त्वष्टा रूपाणि पिंशतु।\nआ सिञ्चतु प्रजापतिर्धाता गर्भं दधातु ते॥\nगर्भं धेहि सिनीवालि गर्भं धेहि सरस्वति।\nगर्भं ते अश्विनौ देवावाधत्तां पुष्करस्रजा॥",
    translation: "Om! May Lord Vishnu prepare the womb; may Tvashtr fashion the anatomical forms; may Prajapati pour the seed; may Dhata place the embryo within thee. Bestow the embryo, O Sinivali! Bestow the embryo, O Saraswati! May the divine Ashvini Kumaras, garlanded with blue lotuses, establish the embryo in thee!",
    breakdown: [
      { factor: "Vishnu (Sustenance)", detail: "Invoked to purify and protect the womb from any parasitic or spiritual affliction." },
      { factor: "Tvashtr (Cosmic Architect)", detail: "Invoked for flawless morphogenesis, healthy organogenesis, and symmetrical physical beauty." },
      { factor: "Saraswati (Wisdom)", detail: "Invoked so that the descending soul receives high Buddhi (intellect), eloquence, and noble speech." },
      { factor: "Ashvini Kumaras (Healing)", detail: "The divine physicians ensure radiant health, vitality (Ayushya), and disease-free gestation." }
    ]
  },
  {
    id: "shukra_artava_shuddhi",
    title: "Pure Shukra & Artava Diagnostics (शुद्ध शुक्र एवं आर्तव लक्षण)",
    sanskritTitle: "निर्दोष शुक्र-आर्तव परीक्षा",
    source: "Charaka Samhita Chikitsasthana 30.145 & Sharirasthana 2",
    shloka: "स्फटिकाभं द्रवं स्निग्धं मधुरं मधुगन्धि च।\nशुक्रमिच्छन्ति शुद्धं तु तैलक्षौद्रनिभं तथा॥\nशशासृक्प्रतिमं यत्तु यद्वा लाक्षारसोपमम्।\nतदार्तवं प्रशंसन्ति यद्वासो न विरञ्जयेत्॥",
    translation: "Pure semen (Shukra) resembles crystal, is liquid, unctuous, sweet in taste, smells like honey, or looks like oil/honey. Pure ovular discharge (Artava) resembles the blood of a hare or liquid lac juice, and does not permanently stain cloth when washed with water.",
    breakdown: [
      { factor: "Healthy Sperm Traits", detail: "Spannable, pearlescent translucent color, rapid liquefaction, free from foul odor, burning sensation, or discoloration." },
      { factor: "Healthy Ovum / Menses Traits", detail: "Bright red, non-clotted, painless flow, easily washable from cotton cloth without persistent chemical discoloration." },
      { factor: "The 8 Doshic Vitiations to Avoid", detail: "Vataja (frothy), Pittaja (yellowish-hot), Kaphaja (heavy mucus), Raktaja (cadaveric), and Sannipataja impurities." }
    ]
  }
];

export const GENERAL_REMEDIES: Remedy[] = [
  {
    id: "peya_kanji",
    name: "Rice Water with Ghee (Peya/Kanji)",
    sanskritName: "पेया / काञ्जी",
    category: "remedy",
    sourceTreatise: "Charaka Samhita Sutrasthana 2 & Ashtanga Hridaya",
    shloka: "तत्र चतुर्दशगुणिततोये सिद्धमन्नं पेया इति कथ्यते।\nदीपिनी पाचनी वृष्या लेपनी बलवर्धिनी ॥",
    translation: "Rice boiled in 14 parts of water is called 'Peya'. It rekindles the digestive fire (Agni), aids digestion, is aphrodisiac, nourishing, and increases physical strength.",
    howItWorks: [
      "Binding Agent: Gently reduces the frequency of watery stools without shocking intestines.",
      "Easy Digestion: Soothes the inflamed lining of the gut and provides clean cellular glucose.",
      "Agni Deepana: Pure cow's ghee rekindles sluggish digestive enzyme secretion.",
      "Vata Soothing: Lubricates irritated colon tissues and alleviates abdominal spasms."
    ],
    timing: {
      acute: "During the first 24-48 hours of watery diarrhea, skip the ghee. Stick strictly to plain strained rice water with rock salt and roasted cumin.",
      recovery: "Once stool frequency decreases and stomach stops cramping, add 1/4 to 1/2 tsp of pure warm cow's ghee to rebuild gut mucosal strength."
    },
    preparation: [
      "Take 1 part white rice (preferably aged small-grain) and add 14 parts water.",
      "Boil thoroughly until completely soft and mashed.",
      "Strain the thick starchy water (Peya) into a cup.",
      "Add a pinch of rock salt (Saindhava), roasted cumin powder (Jeera), and ghee if in recovery phase."
    ],
    risks: [
      "Does not contain enough electrolytes (sodium/potassium) for severe life-threatening dehydration.",
      "Seek emergency medical care if experiencing >10 watery stools/day, high fever, or blood in stool."
    ]
  },
  {
    id: "takra_grahani",
    name: "Spiced Buttermilk (Takra with Jeera & Saindhava)",
    sanskritName: "संस्कृत तक्रम् (गृहणी-अतिसार नाशनम्)",
    category: "remedy",
    sourceTreatise: "Charaka Samhita Chikitsasthana 15 & Bhavaprakasha",
    shloka: "यथा सुराणां अमृतं सुखाय तथा नराणां भुवि तक्रमाहुः।\nतक्रप्रयोगात् न भवन्ति रोगास्तक्रप्रशान्ता न पुनर्भवेयुः ॥\nदीपिनं रोचनं वृष्यं कफवातानुलोमनम्।",
    translation: "Just as nectar is for the devatas in heaven, even so is Takra (buttermilk) for humans on earth! Diseases cured by the proper administration of Takra do not recur. It stimulates digestive enzymes (Agni Deepana), improves taste (Rochana), and restores the natural downward movement of Vata.",
    howItWorks: [
      "Natural Probiotics: Replenishes healthy gut flora damaged during dysentery or antibiotic therapy.",
      "Astringent (Kashaya) & Sour (Amla) Rasa: Absorbs excess fluid in the intestines and binds loose stool.",
      "Lactic Acid & Enzymes: Facilitates lactose breakdown and smooth intestinal peristalsis.",
      "Grahani Healing: Directly cures irritable bowel, malabsorption, and chronic indigestion."
    ],
    timing: {
      acute: "In chronic loose stools or recovery from gastroenteritis, take 1 small glass (100-150ml) mid-day with lunch.",
      recovery: "Never consume cold from refrigerator or late at night. Best taken fresh during midday when Agni is peak."
    },
    preparation: [
      "Take 1 part fresh homemade curd and churn thoroughly with 4 parts water.",
      "Skim off all floating butter fat completely (Nirudaka Takra).",
      "Add 1/4 tsp dry-roasted cumin powder (Jeera), a pinch of rock salt (Saindhava), and fresh curry leaves.",
      "Stir well and drink fresh at room temperature after lunch."
    ],
    risks: [
      "Avoid in severe acute burning gastritis (Pitta-dominant ulcerations) or high inflammatory fever.",
      "Do not consume curd (Dahi) directly during diarrhea; only churned fat-free buttermilk (Takra) is indicated."
    ]
  },
  {
    id: "triphala_rasayana",
    name: "Triphala Churna (Haritaki, Bibhitaki, Amalaki)",
    sanskritName: "त्रिफला रसायनम्",
    category: "remedy",
    sourceTreatise: "Charaka Samhita Chikitsasthana 1 & Bhavaprakasha",
    shloka: "हरीतकी विभीतकश्च धात्री च त्रिफला मता।\nत्रिफला कफपित्तघ्नी मेहकुष्ठहरा सरा॥\nचक्षुष्या दीपनी रुच्या विषमज्वरनाशिनी ॥",
    translation: "The combination of Haritaki, Bibhitaki, and Amalaki constitutes Triphala. It pacifies Kapha and Pitta, cures metabolic disorders (Prameha) and skin diseases, is mildly laxative, highly beneficial for eyesight (Chakshushya), enhances digestive fire, improves appetite, and dispels chronic fevers.",
    howItWorks: [
      "Tridoshic Balance: Haritaki calms Vata, Bibhitaki calms Kapha, and Amalaki calms Pitta.",
      "Gentle Colon Colonization: Tones intestinal muscular walls without habit-forming dependency.",
      "Antioxidant Power: High vitamin C and polyphenol gallic acids regenerate liver and epithelial cells."
    ],
    timing: {
      acute: "For occasional constipation or sluggish bowel, take 1 tsp with warm water before bedtime.",
      recovery: "For Rasayana (rejuvenation), take in early morning with honey or ghee for 40 consecutive days."
    },
    preparation: [
      "Take equal parts of seed-free dried fruit rinds: Haritaki (1 part), Bibhitaki (1 part), Amalaki (1 part).",
      "Grind into an ultra-fine micro-powder (Churna).",
      "Take 3 to 5 grams with 1 cup of warm water 30 minutes before bedtime."
    ],
    risks: [
      "Contraindicated during active pregnancy and in acute dehydration diarrhea.",
      "High doses may cause loose stools in extremely Vata-dry individuals."
    ]
  },
  {
    id: "tulsi_maricha_kwatha",
    name: "Tulsi & Black Pepper Decoction (Tulsi Maricha Kwatha)",
    sanskritName: "तुलसी-मरीच-शुण्ठी क्वाथः",
    category: "remedy",
    sourceTreatise: "Bhavaprakasha Nighantu & Ashtanga Hridaya",
    shloka: "तुलसी कटुका तिक्ता हृद्योष्णा दाहपित्तकृत्।\nदीपनी कुष्ठकृच्छ्रास्रपार्श्वशूलविनाशिनी॥\nकासश्वासप्रतिश्यायनाशिनी कफवातजित् ॥",
    translation: "Tulsi is pungent, bitter, warm in potency, heart-strengthening, increases digestive fire, relieves pleurisy and side pains. It miraculously destroys cough (Kasa), asthma/dyspnea (Shvasa), and chronic rhinitis/colds (Pratishyaya), conquering Kapha and Vata.",
    howItWorks: [
      "Bronchodilation: Eugenol in Tulsi acts as an antispasmodic on bronchial smooth muscles.",
      "Diaphoretic Action: Induces natural sweating to bring down viral fever without gastric mucosal erosion.",
      "Piperine Bio-enhancement: Black pepper breaks down thick tenacious mucous plugs."
    ],
    timing: {
      acute: "Drink 50ml warm 2 to 3 times a day at the first sign of chills, cold, sore throat, or cough.",
      recovery: "Take once in morning during seasonal monsoon or winter transitions as prophylactic defense."
    },
    preparation: [
      "Crush 8-10 fresh holy basil (Tulsi) leaves, 3-4 black peppercorns (Maricha), and 1/2 inch fresh ginger.",
      "Boil in 2 cups (300ml) water until reduced to 1 cup (150ml).",
      "Strain and sip warm with a small piece of organic jaggery (Guda)."
    ],
    risks: [
      "Avoid excess in bleeding disorders or severe gastric ulcers due to heating potency (Ushna Virya)."
    ]
  },
  {
    id: "shunthi_guda_modaka",
    name: "Dry Ginger & Jaggery (Shunthi-Guda Modaka)",
    sanskritName: "शुण्ठी-गुड मोदकः",
    category: "remedy",
    sourceTreatise: "Charaka Samhita Sutrasthana 27 & Sharangadhara Samhita",
    shloka: "नागरं दीपनं वृष्यं ग्राहि स्वादु रसे भवेत्।\nकफवातहरं रुच्यं पाचनं च विधीयते॥\nगुडेन सहितं चापि मन्दाग्निशमनं परम् ॥",
    translation: "Dry ginger (Nagara/Shunthi) is an appetizer, aphrodisiac, bowel binder, sweet in post-digestive effect (Vipaka), pacifies Kapha and Vata, and digests Ama toxins. When combined with old jaggery (Guda), it is the supreme cure for weak digestive fire (Mandagni).",
    howItWorks: [
      "Digestive Stimulant (Deepana-Pachana): Increases pancreatic gastric juice secretion without burning Pitta.",
      "Carminative: Relieves abdominal gaseous distension and flatulence.",
      "Warming Bio-Energy: Counteracts cold, sluggish winter sluggishness."
    ],
    timing: {
      acute: "Take 1 small pill (size of a berry) 15 minutes before lunch when appetite is absent.",
      recovery: "Ideal during convalescence to safely rekindle the digestive fire."
    },
    preparation: [
      "Take 1 part dry ginger powder (Shunthi) and 1 part aged dark jaggery (Guda).",
      "Pound together in a mortar until a smooth, malleable dough forms.",
      "Roll into small round pills (3 grams each). Store in a clean dry glass jar."
    ],
    risks: [
      "Diabetic patients should use warm ginger water instead of jaggery.",
      "Avoid in severe burning urination or internal bleeding."
    ]
  },
  {
    id: "trikatu_churna",
    name: "Trikatu Churna (Three Pungents: Pippali, Maricha, Shunthi)",
    sanskritName: "त्रिकटु चूर्णम् (व्योष)",
    category: "remedy",
    sourceTreatise: "Charaka Samhita Sutrasthana 4 & Ashtanga Hridaya",
    shloka: "पिप्पली मरिचं शुण्ठी त्रिकटुकं समं विदुः।\nदीपनं श्लेष्ममेदोघ्नं कुष्ठपीनसनाशनम्॥\nगुल्मार्शोग्रहणीरोगान् हन्यादामप्रसाधनम् ॥",
    translation: "Equal proportions of Pippali (Long Pepper), Maricha (Black Pepper), and Shunthi (Dry Ginger) constitute Trikatu. It powerfully kindles digestive fire, burns excess phlegm (Shleshma) and adipose tissue (Meda), cures chronic sinus rhinitis (Peenasa), abdominal tumors, hemorrhoids, and Grahani by purifying Ama.",
    howItWorks: [
      "Thermogenic Fat Oxidation: Stimulates thyroid metabolism and thermogenesis.",
      "Endotoxin Digestion: Clears circulating Ama from blood and lymph vessels.",
      "Respiratory Clearance: Dries up excessive mucus from lungs and throat."
    ],
    timing: {
      acute: "Take 1 to 2 grams with honey twice daily for respiratory congestion and heavy sinus congestion.",
      recovery: "Take with warm water before meals to stimulate sluggish digestion."
    },
    preparation: [
      "Mix equal parts of dry ginger powder, black pepper powder, and long pepper powder.",
      "Store in an airtight container.",
      "Dose: 1 to 2 grams mixed with 1 tsp raw organic honey."
    ],
    risks: [
      "Avoid in acute hyperacidity (Amlapitta), peptic ulcers, or severe dehydration."
    ]
  }
];

export default function AyurvedaLab() {
  const [activeTab, setActiveTab] = useState<"santana_utpatti" | "home_remedies">("santana_utpatti");
  const [activeShlokaId, setActiveShlokaId] = useState<string>("garbha_sambhav_4");
  const [activeRemedyId, setActiveRemedyId] = useState<string>("peya_kanji");

  // Ritu Kala Calculator State
  const [cycleStartDate, setCycleStartDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [calcResult, setCalcResult] = useState<any | null>(null);

  const activeRemedy = GENERAL_REMEDIES.find(r => r.id === activeRemedyId) || GENERAL_REMEDIES[0];
  const activeSantanaShloka = CHARAKA_SANTANA_SHLOKAS.find(s => s.id === activeShlokaId) || CHARAKA_SANTANA_SHLOKAS[0];

  const handleComputeRituKala = () => {
    const start = new Date(cycleStartDate);
    const day = 24 * 60 * 60 * 1000;

    const rajasvalaEnd = new Date(start.getTime() + 3 * day);
    const rituStart = new Date(start.getTime() + 4 * day);
    const rituEnd = new Date(start.getTime() + 15 * day);

    // Specific even and odd days
    const evenDays = [6, 8, 10, 12].map(n => ({
      dayNumber: n,
      dateStr: new Date(start.getTime() + (n - 1) * day).toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" })
    }));

    const oddDays = [7, 9, 11, 13].map(n => ({
      dayNumber: n,
      dateStr: new Date(start.getTime() + (n - 1) * day).toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" })
    }));

    setCalcResult({
      rajasvalaSpan: `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${rajasvalaEnd.toLocaleDateString("en-US", { month: "short", day: "numeric" })} (Days 1 to 4: Abstinence & Sacred Rest)`,
      rituKalaSpan: `${rituStart.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${rituEnd.toLocaleDateString("en-US", { month: "short", day: "numeric" })} (Days 5 to 16: Optimal Fertile Ritu Kala)`,
      evenDays,
      oddDays,
      nextCycleEstimated: new Date(start.getTime() + cycleLength * day).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8 text-stone-100">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#1a2e1a] via-[#243d24] to-[#121e12] text-stone-100 p-6 md:p-8 rounded-3xl border border-emerald-700/60 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
            <Leaf className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>AYURVEDA SHASTRA & REPRODUCTIVE PHYSIOLOGY</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#f0fff0]">
            Ayurveda Research & Santana Lab
          </h1>
          <p className="text-xs md:text-sm text-stone-300 font-sans max-w-2xl">
            Charaka Samhita Sharirasthana (Garbhadhana & Ratikriya for Santana Utpatti) • Ashtanga Hridaya Clinical Home Remedies
          </p>
        </div>

        <div className="text-right bg-black/40 p-4 rounded-2xl border border-emerald-900/60 w-full md:w-auto shrink-0">
          <div className="text-[10px] uppercase font-mono text-emerald-400 font-bold">Standard: IKS AYU-SHARIRA</div>
          <div className="text-lg font-mono font-bold text-amber-300">
            Charaka Sharirasthana 8
          </div>
          <div className="text-[10px] font-mono text-stone-400">
            Jatisutriya Adhyaya & Garbhadhana
          </div>
        </div>
      </div>

      {/* Main Tab Segmented Control */}
      <div className="p-1.5 bg-[#17120e] rounded-2xl border border-stone-800 flex flex-wrap items-center gap-2 shadow-xl">
        <button
          onClick={() => setActiveTab("santana_utpatti")}
          className={`flex-1 min-w-[200px] px-5 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "santana_utpatti"
              ? "bg-gradient-to-r from-emerald-800 to-emerald-950 text-emerald-100 border-emerald-500 shadow-lg ring-1 ring-emerald-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Heart className="w-4 h-4 text-rose-400" />
          <span>Charaka: Santana Utpatti & Ratikriya (गर्भाधान एवं रतिक्रिया)</span>
        </button>

        <button
          onClick={() => setActiveTab("home_remedies")}
          className={`flex-1 min-w-[200px] px-5 py-3 rounded-xl text-xs font-serif font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${
            activeTab === "home_remedies"
              ? "bg-gradient-to-r from-emerald-800 to-emerald-950 text-emerald-100 border-emerald-500 shadow-lg ring-1 ring-emerald-500/40"
              : "bg-transparent text-stone-400 hover:text-white border-transparent"
          }`}
        >
          <Droplets className="w-4 h-4 text-emerald-400" />
          <span>Clinical Home Remedies (Peya, Haridra & Aushadhi)</span>
        </button>
      </div>

      {/* ===================== TAB 1: CHARAKA SAMHITA ON SANTANA UTPATTI & RATIKRIYA ===================== */}
      {activeTab === "santana_utpatti" && (
        <div className="space-y-8">
          {/* Introductory Overview Card */}
          <div className="p-6 md:p-8 bg-[#18130f] border border-emerald-900/60 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-emerald-950 border border-emerald-600/50 text-emerald-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-serif text-emerald-100">
                  Charaka Samhita on Ratikriya & Conception for Noble Progeny (सन्तति-उत्पत्ति)
                </h2>
                <p className="text-xs text-stone-400 font-sans">
                  The sacred science of Garbhadhana Samskara codified by Maharshi Agnivesha and Acharya Charaka in the <em>Sharirasthanam</em>.
                </p>
              </div>
            </div>

            <p className="text-xs md:text-sm text-stone-300 font-sans leading-relaxed">
              In Ayurvedic embryology, coitus for progeny (<em>Ratikriya</em> / <em>Maithuna</em>) is not merely a physical act but a high spiritual and biological ritual. The child's physical constitution (Prakriti), intellectual faculties (Medha), immune vigor (Bala), and ethical temperament (Sattva) are directly imprinted by the dietary preparation, emotional serenity, fertile timing (Ritu Kala), and psychological state of both parents at the exact moment of conception.
            </p>
          </div>

          {/* Shloka Selector & Detailed Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Nav: Shloka Directory */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase text-emerald-400 px-1 tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Canonical Shloka Repository</span>
              </h3>

              <div className="space-y-2">
                {CHARAKA_SANTANA_SHLOKAS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveShlokaId(item.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                      activeShlokaId === item.id
                        ? "bg-gradient-to-r from-emerald-950 to-[#1e331e] border-emerald-500 text-emerald-100 shadow-lg ring-1 ring-emerald-500/40"
                        : "bg-[#14100c] border-stone-800 text-stone-400 hover:bg-[#1d1612]"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold font-serif text-stone-200">{item.title}</div>
                      <div className="text-[10px] font-mono text-emerald-400/80 mt-0.5">{item.sanskritTitle}</div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ${activeShlokaId === item.id ? "text-emerald-400 translate-x-1" : "text-stone-700"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Selected Shloka Patrika */}
            <div className="lg:col-span-8">
              <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-2xl text-stone-900 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                      AUTHENTIC AYURVEDIC CANON
                    </span>
                    <h3 className="text-2xl font-black font-serif text-stone-950 mt-1">
                      {activeSantanaShloka.title}
                    </h3>
                    <p className="text-xs font-serif text-emerald-900 font-bold">
                      {activeSantanaShloka.sanskritTitle}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-amber-900 font-serif bg-amber-100 px-3 py-1 rounded-xl border border-amber-300">
                    {activeSantanaShloka.source}
                  </span>
                </div>

                {/* Shloka Highlight Box */}
                <div className="bg-emerald-50/80 p-6 rounded-2xl border-l-4 border-emerald-700 space-y-3">
                  <div className="text-[10px] font-mono uppercase text-emerald-900 font-bold tracking-wider">
                    मूल संस्कृत श्लोक (Original Sanskrit Verse)
                  </div>
                  <p className="text-xl md:text-2xl font-serif text-emerald-950 italic leading-relaxed text-center whitespace-pre-line">
                    "{activeSantanaShloka.shloka}"
                  </p>
                  <div className="pt-3 border-t border-emerald-200">
                    <span className="text-[10px] font-mono uppercase text-emerald-800 font-bold block mb-1">
                      Word-by-word Translation & Meaning:
                    </span>
                    <p className="text-xs md:text-sm font-serif text-emerald-900 leading-relaxed">
                      {activeSantanaShloka.translation}
                    </p>
                  </div>
                </div>

                {/* Breakdown Grid */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-amber-900 tracking-wider">
                    Detailed Physiological & Epigenetic Analysis
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeSantanaShloka.breakdown.map((b, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-2xl border border-[#ebdcc4] space-y-1 shadow-sm">
                        <span className="text-xs font-serif font-bold text-emerald-900 block">{b.factor}</span>
                        <p className="text-xs text-stone-600 font-sans leading-relaxed">{b.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Ritu Kala & Conception Window Calculator */}
          <div className="p-6 md:p-8 bg-[#18130f] border border-emerald-900/60 rounded-3xl space-y-6 shadow-2xl">
            <div>
              <h3 className="text-xl font-bold font-serif text-emerald-200 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span>Interactive Ritu Kala & Day Parity Calculator (ऋतुकाल निर्धारक यन्त्रम्)</span>
              </h3>
              <p className="text-xs text-stone-400 font-sans mt-1">
                Calculates the Rajasvala rest period (Days 1–4), Ritu Kala fertile window (Days 5–16), and even/odd nights according to Charaka Samhita Sharirasthana 8.5.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Cycle Start Date (Day 1 of Menses)</label>
                <input
                  type="date"
                  value={cycleStartDate}
                  onChange={e => setCycleStartDate(e.target.value)}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-400 mb-1">Average Menstrual Cycle Length (Days)</label>
                <input
                  type="number"
                  value={cycleLength}
                  min={24}
                  max={35}
                  onChange={e => setCycleLength(parseInt(e.target.value) || 28)}
                  className="w-full bg-[#120e0b] border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 outline-none focus:border-emerald-500 font-mono"
                />
              </div>
            </div>

            <button
              onClick={handleComputeRituKala}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-900 hover:from-emerald-700 hover:to-green-800 text-emerald-100 font-serif font-bold text-xs shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Calculate Vedic Ritu Kala & Conception Windows</span>
            </button>

            {calcResult && (
              <div className="space-y-4 pt-4 border-t border-stone-800 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-950/30 border border-red-800/60 rounded-2xl space-y-1">
                    <span className="text-[10px] font-mono text-red-400 uppercase font-bold block">1. Rajasvala Rest Phase (Days 1 to 4)</span>
                    <p className="text-xs font-serif text-red-200">{calcResult.rajasvalaSpan}</p>
                    <p className="text-[11px] text-stone-400 font-sans pt-1">Strict physical rest, no strenuous work, avoid coitus, consume wholesome light grains.</p>
                  </div>

                  <div className="p-4 bg-emerald-950/40 border border-emerald-600/60 rounded-2xl space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">2. Ritu Kala Fertile Span (Days 5 to 16)</span>
                    <p className="text-xs font-serif text-emerald-200">{calcResult.rituKalaSpan}</p>
                    <p className="text-[11px] text-stone-400 font-sans pt-1">The endometrium is lush and receptive; optimal for Garbhadhana Samskara.</p>
                  </div>
                </div>

                {/* Even and Odd Days Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#120e0b] border border-amber-800/60 rounded-2xl space-y-2">
                    <span className="text-xs font-serif font-bold text-amber-300 block">
                      Even Nights (युग्म रात्रि - Days 6, 8, 10, 12)
                    </span>
                    <p className="text-[11px] text-stone-400 font-sans">
                      Charaka specifies: Predominance of paternal seed (Shukra-Bahu-Tva).
                    </p>
                    <div className="space-y-1">
                      {calcResult.evenDays.map((d: any) => (
                        <div key={d.dayNumber} className="flex justify-between items-center text-xs py-1 px-2.5 bg-black/40 rounded-xl">
                          <span className="font-mono text-amber-400">Night {d.dayNumber}</span>
                          <span className="text-stone-300 font-serif">{d.dateStr}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-[#120e0b] border border-pink-800/60 rounded-2xl space-y-2">
                    <span className="text-xs font-serif font-bold text-pink-300 block">
                      Odd Nights (अयुग्म रात्रि - Days 7, 9, 11, 13)
                    </span>
                    <p className="text-[11px] text-stone-400 font-sans">
                      Charaka specifies: Predominance of maternal ovum (Artava-Bahu-Tva).
                    </p>
                    <div className="space-y-1">
                      {calcResult.oddDays.map((d: any) => (
                        <div key={d.dayNumber} className="flex justify-between items-center text-xs py-1 px-2.5 bg-black/40 rounded-xl">
                          <span className="font-mono text-pink-400">Night {d.dayNumber}</span>
                          <span className="text-stone-300 font-serif">{d.dateStr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===================== TAB 2: GENERAL AYURVEDIC HOME REMEDIES ===================== */}
      {activeTab === "home_remedies" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Remedy Navigator */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-mono font-black uppercase text-emerald-500 px-2 tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span>Remedy Repository</span>
            </h3>
            <div className="space-y-2">
              {GENERAL_REMEDIES.map((remedy) => (
                <button
                  key={remedy.id}
                  onClick={() => setActiveRemedyId(remedy.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                    activeRemedyId === remedy.id
                      ? "bg-emerald-950/40 border-emerald-500 text-emerald-100 shadow-lg ring-1 ring-emerald-500/30"
                      : "bg-[#1a1714] border-stone-800 text-stone-400 hover:bg-[#25211d]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${activeRemedyId === remedy.id ? "bg-emerald-600 text-white" : "bg-stone-800 text-stone-500"}`}>
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold font-serif">{remedy.name}</div>
                      <div className="text-[10px] font-mono opacity-60">{remedy.sanskritName}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeRemedyId === remedy.id ? "text-emerald-400 translate-x-1" : "text-stone-700"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Remedy Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRemedyId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900 space-y-8"
              >
                {/* Header & Shloka */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-black font-serif text-stone-950">
                        {activeRemedy.name}
                      </h3>
                      <p className="text-lg font-serif text-emerald-900 font-bold mt-1">
                        {activeRemedy.sanskritName}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono text-stone-400">Authentic Source:</span>
                      <span className="text-xs font-bold text-amber-800 font-serif">{activeRemedy.sourceTreatise}</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-600 space-y-4">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase font-mono">
                      <BookOpen className="w-4 h-4" />
                      <span>Relevant Shloka (मूल श्लोक)</span>
                    </div>
                    <p className="text-xl md:text-2xl font-serif text-emerald-950 italic leading-relaxed text-center whitespace-pre-line">
                      "{activeRemedy.shloka}"
                    </p>
                    <div className="pt-4 border-t border-emerald-200">
                      <p className="text-sm font-serif text-emerald-800 leading-relaxed">
                        <span className="font-bold uppercase text-[10px] block mb-1">Translation:</span>
                        {activeRemedy.translation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mechanism & Preparation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <section className="space-y-3">
                      <h4 className="text-sm font-mono font-black uppercase text-amber-900 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span>How it works in the body</span>
                      </h4>
                      <ul className="space-y-2">
                        {activeRemedy.howItWorks.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-serif text-stone-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 space-y-4">
                      <h4 className="text-xs font-mono font-black uppercase text-amber-400 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Crucial Timing Constraints</span>
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <div className="text-[10px] text-red-400 font-bold uppercase mb-1">Acute Phase</div>
                          <p className="text-xs text-stone-400 leading-relaxed font-serif">{activeRemedy.timing.acute}</p>
                        </div>
                        <div>
                          <div className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Recovery Phase</div>
                          <p className="text-xs text-stone-400 leading-relaxed font-serif">{activeRemedy.timing.recovery}</p>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="space-y-6">
                    <section className="bg-white p-5 rounded-2xl border border-[#ebdcc4] space-y-4 shadow-inner">
                      <h4 className="text-sm font-mono font-black uppercase text-stone-500 flex items-center gap-2">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>Step-by-step Preparation</span>
                      </h4>
                      <ol className="space-y-3">
                        {activeRemedy.preparation.map((step, i) => (
                          <li key={i} className="flex gap-3 text-sm font-serif text-stone-700">
                            <span className="font-mono font-bold text-amber-700">{i + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </section>

                    <section className="p-5 bg-red-50 border border-red-200 rounded-2xl space-y-3">
                      <h4 className="text-xs font-mono font-black uppercase text-red-700 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Risks & Safety Limits</span>
                      </h4>
                      <ul className="space-y-2">
                        {activeRemedy.risks.map((risk, i) => (
                          <li key={i} className="flex items-start gap-2 text-[11px] font-serif text-red-900 italic">
                            <span className="text-red-600 font-bold">•</span>
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>

                {/* Scientific Footnote */}
                <div className="pt-6 border-t border-stone-200 flex items-center gap-3">
                  <Info className="w-5 h-5 text-stone-400 shrink-0" />
                  <p className="text-[10px] text-stone-500 font-serif italic leading-tight">
                    Classical Ayurvedic clinical references: Charaka Samhita Sutrasthana 2, Chikitsasthana 30; Ashtanga Hridaya Sutrasthana. Clinical evidence: PMC1121559, PubMed 6113434.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
