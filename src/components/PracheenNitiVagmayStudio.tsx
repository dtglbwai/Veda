import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  Compass,
  Anchor,
  Scale,
  MessageSquare,
  BookOpen,
  Sparkles,
  Award,
  Globe,
  ChevronRight,
  Check,
  Copy,
  Flame,
  Layers,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  Volume2,
  VolumeX,
  Search,
  Eye,
  Zap,
  DollarSign,
  TrendingUp,
  Users,
  ArrowUpRight,
  Clock,
  FileText
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// ---------------------------------------------------------------------------
// TYPES & DATA STRUCTURES
// ---------------------------------------------------------------------------

export type NitiSection = 
  | "mandala_geopolitics" 
  | "vyapaar_maritime" 
  | "vagmay_gunas" 
  | "vagchatrya_debate" 
  | "vagkutniti_embassy" 
  | "interactive_simulator"
  | "shulka_calculator";

export interface ShlokaItem {
  id: string;
  category: "videsh_niti" | "vyapaar_niti" | "vagmay" | "vagchatrya" | "vagkutniti";
  source: string;
  sourceChapter: string;
  devanagari: string;
  transliteration: string;
  anvaya: string;
  hindiMeaning: string;
  englishMeaning: string;
  modernApplication: string;
}

export const PRACHEEN_SHLOKA_TREASURY: ShlokaItem[] = [
  {
    id: "mandala_1",
    category: "videsh_niti",
    source: "Kautilya Arthashastra",
    sourceChapter: "Adhikarana 6, Adhyaya 2 (मण्डल्योनिः)",
    devanagari: "राजा आत्मद्रव्यप्रकृतिसम्पन्नो नयस्याधिष्ठानं विजिगीषुः । तस्य समन्ततो मण्डलीभूता भूम्यन्तरा अरिप्रकृतिः ॥",
    transliteration: "rājā ātmadravyaprakṛtisampanno nayasyādhiṣṭhānaṃ vijigīṣuḥ | tasya samantato maṇḍalībhūtā bhūmyantarā ariprakṛtiḥ ||",
    anvaya: "आत्मद्रव्यप्रकृतिसम्पन्नः नयस्य अधिष्ठानं राजा विजिगीषुः । तस्य समन्ततः भूम्यन्तरा मण्डलीभूता अरिप्रकृतिः (भवति) ॥",
    hindiMeaning: "जो राजा आत्मिक बल, सुशासन, कोष और सैन्य प्रकृतियों से संपन्न होकर नीति का आधार बनता है, वह 'विजिगीषु' (विजय का आकांक्षी) कहलाता है। उसके राज्य की सीमा से लगे हुए चारों ओर के राज्य स्वाभाविक रूप से 'अरि' (शत्रु) प्रकृति के होते हैं।",
    englishMeaning: "A sovereign endowed with personal nobility, prosperous territory, and administrative virtue who anchors righteous foreign policy is the 'Vijigishu' (the Aspiring Sovereign). All sovereign territories immediately contiguous with his borders naturally constitute the 'Ari' (Adversarial) sphere.",
    modernApplication: "Contiguous borders inherently generate geopolitical friction; diplomacy must anticipate border neighbor rivalry while cultivating alliances with states immediately beyond the neighbor."
  },
  {
    id: "shadgunya_1",
    category: "videsh_niti",
    source: "Kautilya Arthashastra",
    sourceChapter: "Adhikarana 7, Adhyaya 1 (षाड्गुण्यसमुद्देशः)",
    devanagari: "पणबन्धः सन्धिः । अपकारो विग्रहः । उपेक्षणमासनम् । अभ्युच्चयो यानम् । परार्पणं संश्रयः । सन्धि विग्रहोपादानं द्वैधीभावः ॥",
    transliteration: "paṇabandhaḥ sandhiḥ | apakāro vigrahaḥ | upekṣaṇam āsanam | abhyuccayo yānam | parārpaṇaṃ saṃśrayaḥ | sandhi-vigrahopādānaṃ dvaidhībhāvaḥ ||",
    anvaya: "पणबन्धः सन्धिः । अपकारः विग्रहः । उपेक्षणम् आसनम् । अभ्युच्चयः यानम् । परार्पणम् संश्रयः । सन्धिविग्रहोपादानं द्वैधीभावः ॥",
    hindiMeaning: "पारस्परिक शर्तों का समझौता 'सन्धि' है। शत्रु पर कूटनीतिक/सैन्य प्रहार 'विग्रह' है। तटस्थ रहकर शक्ति संचय करना 'आसन' है। शत्रु के संकट काल में उस पर अभियान चलाना 'यान' है। बलवान् की शरण लेना 'संश्रय' है। और एक से सन्धि तथा दूसरे से विग्रह की दोहरी नीति 'द्वैधीभाव' कहलाती है।",
    englishMeaning: "Entering into mutually binding terms is Sandhi (Treaty). Inflicting strategic injury or armed resistance is Vigraha (Hostility). Calculated diplomatic patience and inaction is Asana (Neutral Posture). Mobilizing an expeditionary campaign is Yana (March). Seeking the umbrella of a stronger power is Samshraya (Alliance/Protectorate). Pursuing peace with one while warring with another is Dvaidhibhava (Dual Diplomacy).",
    modernApplication: "Dynamic foreign policy requires agility: no single posture is permanent. Alignment must pivot based on asymmetry, technological readiness, and timing."
  },
  {
    id: "duta_immunity_1",
    category: "videsh_niti",
    source: "Valmiki Ramayana",
    sourceChapter: "Sundara Kanda, Sarga 52, Shloka 13-14",
    devanagari: "दूतमुखा हि राजानः सर्वथैव सुविस्तरे । ब्रुवत्स्वपि न दूतेषु प्रहर्तव्यं कथंचन ॥ दूतवधो न विद्यते शास्त्रेषु कुत्रचित् ।",
    transliteration: "dūtamukhā hi rājānaḥ sarvathaiva suvistare | bruvatsv api na dūteṣu prahartavyaṃ kathañcana || dūtavadho na vidyate śāstreṣu kutracit |",
    anvaya: "राजानः सर्वथैव दूतमुखाः हि । दूतैः अप्रियं ब्रुवत्सु अपि तेषु कथञ्चन न प्रहर्तव्यम् । शास्त्रेषु कुत्रचित् दूतवधः न विद्यते ॥",
    hindiMeaning: "राजाओं की वाणी उनके दूत के मुख से ही व्यक्त होती है। दूत चाहे कटु या अप्रिय बात भी कहे, उस पर कभी प्रहार नहीं किया जाना चाहिए। किसी भी शास्त्र में दूत की हत्या का विधान नहीं है।",
    englishMeaning: "Sovereigns speak through the mouth of their ambassadors. Even if an envoy conveys the sharpest or most hostile ultimatum, under no circumstances may he be harmed. Nowhere in the sacred treatises of statecraft is the killing of an envoy sanctioned.",
    modernApplication: "The ancient cornerstone of international law and diplomatic immunity: emissaries must be granted inviolable safe conduct regardless of ideological hostility."
  },
  {
    id: "vyapaar_panya_1",
    category: "vyapaar_niti",
    source: "Kautilya Arthashastra",
    sourceChapter: "Adhikarana 4, Adhyaya 2 (कारुक-रक्षणम् / व्यापार नियम)",
    devanagari: "स्वदेशीयेषु पण्येषु पञ्चकं शतमाज्यम्, परदेशीयेषु दशकम् । ततः परं भावं वर्धयतां पणशतस्य पञ्चपणो दण्डः ॥",
    transliteration: "svadeśīyeṣu paṇyeṣu pañcakaṃ śatam ājyam, paradeśīyeṣu daśakam | tataḥ paraṃ bhāvaṃ vardhayatāṃ paṇaśatasya pañcapaṇo daṇḍaḥ ||",
    anvaya: "स्वदेशीयेषु पण्येषु शतम् पञ्चकं (लाभः) आज्यम्, परदेशीयेषु दशकम् । ततः परं भावं वर्धयतां पणशतस्य पञ्चपणः दण्डः (स्यात्) ॥",
    hindiMeaning: "स्वदेशी वस्तुओं के क्रय-विक्रय पर व्यापारियों के लिए अधिकतम 5% लाभ तथा आयातित विदेशी वस्तुओं पर अधिकतम 10% लाभ ही शास्त्रसम्मत है। जो व्यापारी इससे अधिक कृत्रिम मूल्य वृद्धि करते हैं, उन पर कठोर अर्थदण्ड लगाया जाए।",
    englishMeaning: "On domestic commodities, a fair profit margin of five percent is authorized; on imported foreign goods, a margin of ten percent is permissible. Merchants who artificially inflate prices beyond these bounds to gouge the public shall be subjected to stringent financial penalties.",
    modernApplication: "Statutory capping of anti-competitive price gouging while legitimately incentivizing high-risk long-distance international maritime and overland trade."
  },
  {
    id: "vyapaar_motupalli_1",
    category: "vyapaar_niti",
    source: "Motupalli Pillar Inscription (मोतुपल्ली अभय शासन)",
    sourceChapter: "Kakatiya Emperor Ganapati Deva (1244 CE)",
    devanagari: "समुद्रप्रयाणकाले वात्यावशात् भग्नानां नौकानां द्रव्याणि पूर्वाचारभ्रंशेन राजा गृह्णाति स्म । मया तु जीवितेऽपि कृपार्द्रहृदयेन अभयं दत्तम् ॥",
    transliteration: "samudraprayāṇakāle vātyāvaśāt bhagnānāṃ naukānāṃ dravyāṇi pūrvācārabhraṃśena rājā gṛhṇāti sma | mayā tu jīvite'pi kṛpārdrahṛdayena abhayaṃ dattam ||",
    anvaya: "समुद्रप्रयाणकाले वात्यावशात् भग्नानां नौकानां द्रव्याणि राजभिः गृह्यन्ते स्म । मया तु अभयं दत्तम्, पञ्चत्रिंशद्भागं शुल्कं विना न किञ्चिदपि गृह्यते ॥",
    hindiMeaning: "प्राचीन काल में समुद्री तूफान या दुर्घटना में टूटे जहाजों की संपत्ति को राजा क्रूरता से जब्त कर लेते थे। मैंने (काकतीय गणपति देव ने) दयावश समस्त विदेशी व स्वदेशी नाविकों को 'अभय' (जीवन व संपत्ति की सुरक्षा) प्रदान किया है और मनमानी जब्ती को समाप्त कर मात्र 1/30 वां नाममात्र शुल्क नियत किया है।",
    englishMeaning: "Formerly, rulers tyrannically confiscated the cargo of sea vessels wrecked by tempests. Moved by civilizational compassion, I have granted unconditional 'Abhaya' (sovereign safety and insurance) to all seafaring merchants from foreign shores, levying only a modest 1/30th tariff and protecting their shipwrecked assets.",
    modernApplication: "Historic maritime salvage law and sovereign trade insurance: encouraging global maritime commerce through legal predictability and protection against natural disasters."
  },
  {
    id: "vagmay_gunas_1",
    category: "vagmay",
    source: "Acharya Dandin",
    sourceChapter: "Kavyadarsha (काव्यादर्श, परिच्छेद 1, श्लोक 41-42)",
    devanagari: "श्लेषः प्रसादः समता माधुर्यं सुकुमारता । अर्थव्यक्तिरुदारत्वमोजः कान्तिसमाधयः ॥ इति वैदर्भमार्गस्य प्राणा दश गुणाः स्मृताः ।",
    transliteration: "śleṣaḥ prasādaḥ samatā mādhuryaṃ sukumāratā | arthavyaktir udāratvam ojaḥ kānti-samādhayaḥ || iti vaidarbhamārgasya prāṇā daśa guṇāḥ smṛtāḥ |",
    anvaya: "श्लेषः, प्रसादः, समता, माधुर्यम्, सुकुमारता, अर्थव्यक्तिः, उदारत्वम्, ओजः, कान्तिः, समाधिः च — इति दश गुणाः वैदर्भमार्गस्य प्राणाः स्मृताः ॥",
    hindiMeaning: "श्लेष (सुगठित पद), प्रसाद (स्पष्टता), समता (शैली का सामंजस्य), माधुर्य (श्रवणप्रियता), सुकुमारता (कोमलता), अर्थव्यक्ति (स्पष्ट अर्थबोध), उदारत्व (उच्च विचार), ओज (प्रवाह व तेज), कान्ति (दीप्ति) और समाधि (उपयुक्त रूपक) — ये दस गुण उत्कृष्ट वाणी व साहित्य के प्राण माने गए हैं।",
    englishMeaning: "Cohesion (Shlesha), Perspicuity (Prasada), Stylistic Evenness (Samata), Sweetness (Madhurya), Acoustic Softness (Sukumarata), Semantic Clarity (Arthavyakti), Magnanimity (Udaratva), Dynamic Energy (Ojas), Radiance (Kanti), and Metaphorical Harmony (Samadhi) — these ten gunas are recognized as the vital breath of elevated discourse.",
    modernApplication: "The classic architectural framework for persuasive speech, policy briefings, executive communication, and memorable written prose."
  },
  {
    id: "vagchatrya_charaka_1",
    category: "vagchatrya",
    source: "Charaka Samhita",
    sourceChapter: "Vimanasthana, Adhyaya 8 (रोगभिषग्जितीय विमानम्, संभाषाविधि)",
    devanagari: "संभाषाविधिः — द्विविधा संभाषा भवति, संधाय संभाषा, विगृह्य संभाषा च । ज्ञानवता सह संधाय, अहङ्कारयुक्तेन सह विगृह्य च युज्यते ॥",
    transliteration: "sambhāṣāvidhiḥ — dvividhā sambhāṣā bhavati, sandhāya sambhāṣā, vigṛhya sambhāṣā ca | jñānavatā saha sandhāya, ahaṅkārayuktena saha vigṛhya ca yujyate ||",
    anvaya: "संभाषा द्विविधा भवति — संधाय संभाषा, विगृह्य संभाषा च । ज्ञानवता सह संधाय संभाषा, अहङ्कारयुक्तेन सह विगृह्य संभाषा युज्यते ॥",
    hindiMeaning: "संभाषा (संवाद व शास्त्रार्थ) दो प्रकार की होती है — 'संधाय संभाषा' (मित्रवत, सत्यशोधक संवाद) और 'विगृह्य संभाषा' (विरोधी पर विजय पाने वाला तार्किक द्वन्द्व)। ज्ञानियों के साथ संधाय संभाषा करनी चाहिए तथा अहंकृत कुतर्कियों के साथ विगृह्य नीति से परास्त करना चाहिए।",
    englishMeaning: "Debate and discussion are twofold: Sandhaya Sambhasha (collegial inquiry directed toward truth) and Vigrihya Sambhasha (adversarial disputation aimed at neutralizing an ego-driven adversary). With the wise, engage in collegial exploration; with the arrogant caviler, employ tactical dialectical deconstruction.",
    modernApplication: "Know the context of the conference table: do not waste collaborative grace on bad-faith negotiators; tailor debate tactics to the cognitive profile of the interlocutor."
  },
  {
    id: "vagkutniti_hanuman_1",
    category: "vagkutniti",
    source: "Valmiki Ramayana",
    sourceChapter: "Kishkindha Kanda, Sarga 3, Shloka 28-31",
    devanagari: "नानृग्वेदविनीतस्य नायजुर्वेदधारिणः । नासामवेदविदुषः शक्यमेवं विभाषितुम् ॥ न मुखे नेत्रयोर्वापि ललाटे च भ्रुवोस्तथा । अन्येष्वपि च गात्रेषु दोषः संविदितः क्वचित् ॥",
    transliteration: "nānṛgvedavinītasya nāyajurvedadhāriṇaḥ | nāsāmavedaviduṣaḥ śakyam evaṃ vibhāṣitum || na mukhe netrayor vāpi lalāṭe ca bhruvos tathā | anyeṣv api ca gātreṣu doṣaḥ saṃviditaḥ kvacit ||",
    anvaya: "ऋग्वेद-अविनीतस्य, यजुर्वेद-अधारिणः, सामवेद-अविदुषः एवं विभाषितुं न शक्यम् । अस्य मुखे, नेत्रयोः, ललाटे, भ्रुवोः, अन्येषु गात्रेषु च क्वचित् दोषः न संविदितः ॥",
    hindiMeaning: "श्रीराम ने लक्ष्मण से हनुमान जी की वाणी सुनकर कहा — जिसने ऋग्वेद, यजुर्वेद और सामवेद का सम्यक् अभ्यास न किया हो, वह ऐसी निर्दोष, संतुलित और प्रभावशाली वाणी नहीं बोल सकता! इनके मुख, नेत्र, ललाट या भौंहों में तनिक भी चंचलता, अहंकार या घबराहट का कोई दोष नहीं दिखाई देता।",
    englishMeaning: "Sri Rama remarked to Lakshmana upon hearing Hanuman's embassy: 'None who has not mastered the Rigveda, absorbed the Yajurveda, and understood the Samaveda could speak with such sublime grace! Across his countenance, eyes, brow, and bodily posture, not a single trace of flaw, nervous haste, or arrogance is detected.'",
    modernApplication: "The gold standard of diplomatic representation: flawless verbal command, perfect non-verbal poise, absolute composure, and vocal resonance that disarms hostility."
  },
  {
    id: "vagkutniti_krishna_1",
    category: "vagkutniti",
    source: "Mahabharata",
    sourceChapter: "Udyoga Parva, Bhagavad Yana Parva (श्रीकृष्ण दौत्य)",
    devanagari: "अविग्रहेण यच्छक्यं तत् कार्यं बुद्धिमत्तया । विग्रहो हि विनाशाय सर्वस्य कुलनाशनः ॥",
    transliteration: "avigraheṇa yac chakyaṃ tat kāryaṃ buddhimattayā | vigraho hi vināśāya sarvasya kulanāśanaḥ ||",
    anvaya: "यत् अविग्रहेण शक्यं तत् बुद्धिमत्तया कार्यम् । विग्रहः हि विनाशाय सर्वस्य कुलनाशनः (भवति) ॥",
    hindiMeaning: "जो कार्य बिना युद्ध के कूटनीति व बुद्धिमत्ता से सिद्ध हो सके, उसे शांति से ही सिद्ध करना चाहिए। क्योंकि युद्ध सदैव सम्पूर्ण कुल का नाश करने वाला और प्रलयंकारी होता है।",
    englishMeaning: "Whatever objective can be attained through intellectual statecraft without resort to armed conflict must be pursued with strategic wisdom. For war invariably unleashes catastrophic ruin and the annihilation of entire dynasties.",
    modernApplication: "Diplomacy must exhaust every avenue of persuasion and strategic leverage before unleashing lethal force: victory without battle is the highest statecraft."
  }
];

export const MANDALA_ELEMENTS = [
  {
    name: "विजिगीषु (Vijigishu)",
    role: "The Central Sovereign",
    desc: "The aspiring ruler endowed with noble vision, righteous strength, and leadership seeking dharmic expansion.",
    circle: "Center (0°)",
    posture: "Anchor of Statecraft"
  },
  {
    name: "अरि (Ari)",
    role: "Contiguous Border Enemy",
    desc: "The immediate contiguous state sharing borders; natural geographic competitor prone to territorial friction.",
    circle: "Front Circle 1",
    posture: "Direct Rival"
  },
  {
    name: "मित्र (Mitra)",
    role: "Front Ally",
    desc: "The state located immediately beyond the Ari; natural ally of the Vijigishu due to shared containment of Ari.",
    circle: "Front Circle 2",
    posture: "Natural Strategic Partner"
  },
  {
    name: "अरिमित्र (Ari-Mitra)",
    role: "Friend of the Enemy",
    desc: "The territory situated beyond Mitra; allied with Ari against Mitra and Vijigishu.",
    circle: "Front Circle 3",
    posture: "Adversarial Buffer"
  },
  {
    name: "मित्रमित्र (Mitra-Mitra)",
    role: "Friend of the Ally",
    desc: "The state positioned beyond Ari-Mitra; dependable partner reinforcing the Vijigishu's coalition.",
    circle: "Front Circle 4",
    posture: "Distant Coalition Partner"
  },
  {
    name: "अरिमित्रमित्र (Ari-Mitra-Mitra)",
    role: "Adversary's Distant Ally",
    desc: "State beyond Mitra-Mitra; supports Ari's extended diplomatic umbrella.",
    circle: "Front Circle 5",
    posture: "Outer Adversary"
  },
  {
    name: "पार्ष्णिग्राह (Parshnigraha)",
    role: "Rear Adversary",
    desc: "Hostile border state to the rear; threatens to strike the Vijigishu's back when marching forward.",
    circle: "Rear Circle 1",
    posture: "Backstab Hazard"
  },
  {
    name: "आक्रन्द (Akranda)",
    role: "Rear Ally",
    desc: "Friendly territory behind the Parshnigraha; guards the Vijigishu's rear against backstabbing.",
    circle: "Rear Circle 2",
    posture: "Rear Guard Anchor"
  },
  {
    name: "पार्ष्णिग्राहासार (Parshnigrahasara)",
    role: "Rear Adversary's Ally",
    desc: "Ally behind Akranda who supports Parshnigraha's offensive ambitions.",
    circle: "Rear Circle 3",
    posture: "Rear Threat Multiplier"
  },
  {
    name: "आक्रन्दासार (Akrandasara)",
    role: "Rear Ally's Ally",
    desc: "Distant rear friend reinforcing Akranda to neutralize Parshnigrahasara.",
    circle: "Rear Circle 4",
    posture: "Rear Stabilizer"
  },
  {
    name: "मध्यम (Madhyama)",
    role: "Intermediate Buffer Sovereign",
    desc: "State contiguous to both Vijigishu and Ari; capable of tipping the balance or resisting both when united.",
    circle: "Bordering Buffer",
    posture: "Key Swing State"
  },
  {
    name: "उदासीन (Udasina)",
    role: "Neutral Superpower",
    desc: "Powerhouse located beyond the immediate sphere; capable of overpowering Vijigishu, Ari, and Madhyama combined.",
    circle: "Overarching Sphere",
    posture: "Global Hegemon / Balance of Power"
  }
];

export const SHADGUNYA_MEASURES = [
  {
    name: "सन्धि (Sandhi)",
    action: "Treaty / Alliance",
    condition: "When weaker than the rival or when mutual long-term gain outweighs immediate conflict.",
    kautilyaQuote: "पणबन्धः सन्धिः — हीयमानेन सन्धेयः",
    icon: Shield
  },
  {
    name: "विग्रह (Vigraha)",
    action: "Hostility / Sanctions / Friction",
    condition: "When endowed with decisive military and financial superiority over the adversary.",
    kautilyaQuote: "अपकारो विग्रहः — अभ्युच्चितेन विगृह्णीयात्",
    icon: Flame
  },
  {
    name: "आसन (Asana)",
    action: "Strategic Inaction / Poise",
    condition: "When parity exists and advancing yields no immediate net advantage; conserve resources.",
    kautilyaQuote: "उपेक्षणमासनम् — यदा न क्षयो न वृद्धिः",
    icon: Clock
  },
  {
    name: "यान (Yana)",
    action: "Expedition / Mobilization",
    condition: "When the adversary is engulfed in internal civil decay, harvest famine, or multi-front crisis.",
    kautilyaQuote: "अभ्युच्चयो यानम् — व्यसनिनं यायात्",
    icon: TrendingUp
  },
  {
    name: "संश्रय (Samshraya)",
    action: "Protectorate / Asylum",
    condition: "When facing imminent destruction by two combined rivals; seek shelter under a noble stronger sovereign.",
    kautilyaQuote: "परार्पणं संश्रयः — दुर्बलो बलवन्तमाश्रयेत्",
    icon: Anchor
  },
  {
    name: "द्वैधीभाव (Dvaidhibhava)",
    action: "Dual Bifurcated Policy",
    condition: "Make peace with one adversary to isolate and neutralize another actively.",
    kautilyaQuote: "सन्धिविग्रहोपादानं द्वैधीभावः",
    icon: Scale
  }
];

export const UPAYA_SAPTAKA = [
  { name: "साम (Sama)", type: "Conciliation", desc: "Praises of character, civilizational brotherhood, sweet truth, diplomatic summit." },
  { name: "दान (Dana)", type: "Concessions", desc: "Trade tariffs reduction, territorial gifts, financial aid, tribute, technology exchange." },
  { name: "भेद (Bheda)", type: "Division", desc: "Exploiting fault-lines, sowing mistrust between enemy ruler and his ministers, covert factionalism." },
  { name: "दण्ड (Danda)", type: "Coercion", desc: "Military deterrence, trade blockade, targeted sabotage, decisive open warfare." },
  { name: "माया (Maya)", type: "Deception", desc: "Psychological warfare, feigned weakness, dissimulation, camouflaged movements." },
  { name: "उपेक्षा (Upeksha)", type: "Calculated Inaction", desc: "Strategic neglect: allowing rival factions to bleed each other out without intervention." },
  { name: "इन्द्रजाल (Indrajala)", type: "Illusory Projection", desc: "Projecting gigantic armies, false alliances, and phantom resources to terrify enemy intelligence." }
];

export const NYAYA_DEBATE_PILLARS = [
  { name: "वाद (Vada)", role: "Constructive Truth Pursuit", desc: "Discussion between honest seekers using recognized pramanas (perception, inference, scripture) without malice." },
  { name: "जल्प (Jalpa)", role: "Rhetorical Battle to Win", desc: "Debate where both sides prioritize victory over truth, using clever formulations, defensive parrying, and rhetoric." },
  { name: "वितण्डा (Vitanda)", role: "Destructive Cavil", desc: "Skepticism that demolishes the opponent's thesis without proposing or defending any positive counter-thesis." },
  { name: "छल (Chhala)", role: "Verbal Quibble", desc: "Distorting a speaker's multi-meaning words maliciously into an absurd meaning (Vak-chhala, Samanya-chhala, Upachara-chhala)." },
  { name: "जाति (Jati)", role: "Futile Analogy", desc: "Raising a superficial counter-example that fails to capture the essential logical relation (Vyapti)." },
  { name: "निग्रहस्थान (Nigrahasthana)", role: "22 Points of Defeat", desc: "Irrevocable points of defeat in public debate: contradiction, shifting the proposition, nonsensical stuttering, or silence." }
];

export default function PracheenNitiVagmayStudio() {
  const [activeSection, setActiveSection] = useState<NitiSection>("mandala_geopolitics");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedMandalaKing, setSelectedMandalaKing] = useState<number>(0);
  const { t } = useLanguage();

  // Audio tone generation for contemplation
  const [isPlayingChime, setIsPlayingChime] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const toggleChime = () => {
    if (isPlayingChime) {
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch (_) {}
      }
      setIsPlayingChime(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Sacred 528 Hz bell chime with harmonic overtone (1056 Hz)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(528, ctx.currentTime);
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(1056, ctx.currentTime);

        gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4.5);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start();
        osc2.start();

        setIsPlayingChime(true);
        setTimeout(() => {
          setIsPlayingChime(false);
        }, 4500);
      } catch (e) {
        console.error("Audio error:", e);
      }
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Filtered shlokas
  const filteredShlokas = useMemo(() => {
    if (!searchQuery.trim()) return PRACHEEN_SHLOKA_TREASURY;
    const q = searchQuery.toLowerCase();
    return PRACHEEN_SHLOKA_TREASURY.filter(s => 
      s.devanagari.includes(q) ||
      s.transliteration.toLowerCase().includes(q) ||
      s.hindiMeaning.toLowerCase().includes(q) ||
      s.englishMeaning.toLowerCase().includes(q) ||
      s.source.toLowerCase().includes(q) ||
      s.modernApplication.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // --- INTERACTIVE MANDALA SIMULATOR STATE ---
  const [simCrisis, setSimCrisis] = useState<"border_provocation" | "trade_choke" | "hostile_coalition">("border_provocation");
  const [selectedShadgunya, setSelectedShadgunya] = useState<string>("Sandhi");
  const [selectedUpaya, setSelectedUpaya] = useState<string>("Sama");

  const simResult = useMemo(() => {
    let outcomeScore = 50;
    let verdict = "";
    let reasoning = "";

    if (simCrisis === "border_provocation") {
      if (selectedShadgunya === "Sandhi" && selectedUpaya === "Sama") {
        outcomeScore = 65;
        verdict = "Temporary Border Truce (सामयिक युद्धविराम)";
        reasoning = "Contiguous Ari slows aggression, but without deterrence, Parshnigraha senses vulnerability in your rear.";
      } else if (selectedShadgunya === "Dvaidhibhava" && selectedUpaya === "Bheda") {
        outcomeScore = 95;
        verdict = "Kautilyan Triumph: Masterclass in Bifurcation (कौटिलीय विजय)";
        reasoning = "You sign an accord with Mitra beyond Ari, while deploying Bheda to trigger internal mutiny between Ari's commander and ministers. Ari is neutralized without war!";
      } else if (selectedShadgunya === "Vigraha" && selectedUpaya === "Danda") {
        outcomeScore = 70;
        verdict = "Phyrric Border Engagement (सीमित सैन्य विजय)";
        reasoning = "Tactical victory on the border, but high treasury burn and risk of Parshnigraha rear assault.";
      } else {
        outcomeScore = 80;
        verdict = "Balanced Geopolitical Deterrence (सामरिक सन्तुलन)";
        reasoning = "Strategic posturing aligned with Mandala principles; enemy advances halted.";
      }
    } else if (simCrisis === "trade_choke") {
      if (selectedUpaya === "Dana" || selectedShadgunya === "Sandhi") {
        outcomeScore = 90;
        verdict = "Flourishing Maritime Flow Restored (व्यापारिक मार्ग मुक्ति)";
        reasoning = "Tariff concessions and mutual pact with coastal kingdoms restore Sarthavaha trade ships seamlessly.";
      } else if (selectedUpaya === "Maya" || selectedUpaya === "Indrajala") {
        outcomeScore = 85;
        verdict = "Strategic Misdirection (मायावी कूटनीति)";
        reasoning = "Phantom maritime escorts deceive pirate and rival naval patrols; merchant fleet slips through alternate channel.";
      } else {
        outcomeScore = 60;
        verdict = "Stagnant Custom Revenues (राजकोषीय गतिरोध)";
        reasoning = "Heavy-handed military posturing increases insurance risk for foreign merchants under Navadhyaksha rules.";
      }
    } else {
      // Hostile coalition
      if (selectedShadgunya === "Samshraya" || (selectedShadgunya === "Dvaidhibhava" && selectedUpaya === "Bheda")) {
        outcomeScore = 95;
        verdict = "Sovereign Preservation under Hegemon (उदासीन संश्रय व भेद)";
        reasoning = "Invoking the protection of the distant Udasina superpower shatters the hostile ring of Ari and Parshnigraha completely.";
      } else {
        outcomeScore = 55;
        verdict = "High Pressure Entanglement (गम्भीर संकट)";
        reasoning = "Facing a two-front encirclement without rear Akranda coordination violates Kautilya's basic Mandala axioms.";
      }
    }

    return { outcomeScore, verdict, reasoning };
  }, [simCrisis, selectedShadgunya, selectedUpaya]);

  // --- CHARAKA DEBATE SIMULATOR STATE ---
  const [assemblyType, setAssemblyType] = useState<"jnanavati" | "mudha" | "hostile">("jnanavati");
  const [interlocutorMove, setInterlocutorMove] = useState<string>("provocative_quibble");
  const [myRhetoricChoice, setMyRhetoricChoice] = useState<string>("vada_pramana");

  const debateResult = useMemo(() => {
    let charisma = 60;
    let evaluation = "";

    if (assemblyType === "jnanavati") {
      if (myRhetoricChoice === "vada_pramana") {
        charisma = 98;
        evaluation = "Supreme Intellectual Acclaim: The learned jury recognizes flawless Pramana, Nyaya consistency, and Prasada guna.";
      } else if (myRhetoricChoice === "anger_shout") {
        charisma = 20;
        evaluation = "Disastrous Defeat (Nigrahasthana): Losing emotional poise before an educated assembly forfeits credibility instantly.";
      } else {
        charisma = 75;
        evaluation = "Moderate Parrying: Sufficient to stall the adversary, but lacking deep scriptural depth.";
      }
    } else if (assemblyType === "mudha") {
      if (myRhetoricChoice === "witty_parry" || myRhetoricChoice === "metaphor_story") {
        charisma = 95;
        evaluation = "Thunderous Assembly Applause: The general audience is captivated by vivid Kanti, humorous wit, and relatable parables.";
      } else {
        charisma = 60;
        evaluation = "Dry Reception: High technical dialectics flew over the heads of the uninitiated assembly.";
      }
    } else {
      // Hostile
      if (myRhetoricChoice === "expose_chhala") {
        charisma = 92;
        evaluation = "Hostile Trap Disarmed: By calmly identifying the opponent's verbal quibble (Chhala) and false analogy (Jati), their bad-faith tactic backfires.";
      } else {
        charisma = 45;
        evaluation = "Entangled in Hostile Crossfire: The biased assembly feeds on your defensiveness.";
      }
    }

    return { charisma, evaluation };
  }, [assemblyType, interlocutorMove, myRhetoricChoice]);

  // --- SHULKA & MARITIME TRADE CALCULATOR STATE ---
  const [commodityValue, setCommodityValue] = useState<number>(10000);
  const [commodityType, setCommodityType] = useState<"textiles" | "spices" | "metals" | "grain" | "precious_gems">("spices");
  const [originType, setOriginType] = useState<"domestic" | "foreign_maritime">("foreign_maritime");
  const [transitGates, setTransitGates] = useState<number>(2);

  const shulkaCalculations = useMemo(() => {
    // Kautilya Arthashastra Shulka rates (1/5th to 1/20th depending on goods)
    let baseShulkaRate = 0.05; // 5% standard (1/20th)
    if (commodityType === "precious_gems") baseShulkaRate = 0.166; // 1/6th
    if (commodityType === "spices" || commodityType === "textiles") baseShulkaRate = 0.10; // 1/10th
    if (commodityType === "grain") baseShulkaRate = 0.05; // 1/20th essentials

    const baseShulka = Math.round(commodityValue * baseShulkaRate);
    const vartaniRoadToll = transitGates * Math.round(commodityValue * 0.01);
    const dvaradeyaGateEntry = Math.round(commodityValue * 0.005);
    const totalStateLevies = baseShulka + vartaniRoadToll + dvaradeyaGateEntry;

    // Allowed net profit margins according to Arthashastra 4.2
    const profitRate = originType === "domestic" ? 0.05 : 0.10;
    const maxPermittedProfit = Math.round(commodityValue * profitRate);
    const fairSellingPrice = commodityValue + totalStateLevies + maxPermittedProfit;

    // Historic Motupalli Charter Benchmark (1244 CE Ganapati Deva 1/30th tariff)
    const motupalliDuty = Math.round(commodityValue * (1 / 30));

    return {
      baseShulkaRatePct: (baseShulkaRate * 100).toFixed(1),
      baseShulka,
      vartaniRoadToll,
      dvaradeyaGateEntry,
      totalStateLevies,
      profitRatePct: (profitRate * 100),
      maxPermittedProfit,
      fairSellingPrice,
      motupalliDuty
    };
  }, [commodityValue, commodityType, originType, transitGates]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-10 text-stone-100">
      
      {/* Hero Header */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-[#1b1510] via-[#16120e] to-[#0f0c0a] border border-[#3d2e20] rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400/90 tracking-wider">
              <span>प्राचीन नीति, व्यापार एवं वाङ्मय शास्त्र</span>
              <span aria-hidden="true">·</span>
              <span>KAUTILYA · CHARAKA · VALMIKI · DANDIN</span>
              <span aria-hidden="true">·</span>
              <span>1244 CE MOTUPALLI CHARTER</span>
            </div>

            <button
              onClick={toggleChime}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-serif font-bold transition-all cursor-pointer ${
                isPlayingChime 
                  ? "bg-amber-950 text-amber-200 border-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.3)]" 
                  : "bg-stone-900/80 text-stone-300 border-stone-800 hover:text-white"
              }`}
            >
              {isPlayingChime ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isPlayingChime ? "528Hz Sacred Chime [Active]" : "Play 528Hz Chime"}</span>
            </button>
          </div>

          <h1 className="text-2xl md:text-4xl font-serif font-bold text-amber-100 tracking-tight leading-snug">
            Prāchīna Videsh Nīti, Vyāpāra Nīti, Vāgmay & Vāk-Chātūrya Sūtras
          </h1>
          <p className="text-sm md:text-base text-stone-300 font-sans max-w-4xl leading-relaxed">
            The comprehensive classical matrix of ancient Indian geopolitical statecraft (Kautilya's Mandala Siddhanta & Shadgunya), maritime commercial laws (Panyadhyaksha & Motupalli Abhaya Charter), 10 literary eloquence Gunas, Charaka's Sambhasha debate tactics, and the legendary diplomatic speechcraft of Sri Krishna and Hanuman.
          </p>

          {/* Quick Pillar Highlights */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs font-serif">
            <div className="p-3 bg-[#241a12]/80 border border-[#3e2b1c] rounded-2xl">
              <span className="text-amber-400 font-bold block mb-1">मण्डल सिद्धान्त</span>
              <span className="text-stone-300">12 Kings Geopolitical Rings & 7 Prakritis</span>
            </div>
            <div className="p-3 bg-[#241a12]/80 border border-[#3e2b1c] rounded-2xl">
              <span className="text-emerald-400 font-bold block mb-1">व्यापार एवं नौवहन</span>
              <span className="text-stone-300">Shulkadhyaksha, Sarthavaha & Motupalli 1244 CE</span>
            </div>
            <div className="p-3 bg-[#241a12]/80 border border-[#3e2b1c] rounded-2xl">
              <span className="text-sky-400 font-bold block mb-1">१० वाग्गुण व शब्दशक्ति</span>
              <span className="text-stone-300">Prasada, Ojas, Madhurya & Dhvani</span>
            </div>
            <div className="p-3 bg-[#241a12]/80 border border-[#3e2b1c] rounded-2xl">
              <span className="text-purple-400 font-bold block mb-1">चरक सम्भाषा-विधि</span>
              <span className="text-stone-300">Sandhaya vs. Vigrihya Sabha Strategy</span>
            </div>
            <div className="p-3 bg-[#241a12]/80 border border-[#3e2b1c] rounded-2xl">
              <span className="text-rose-400 font-bold block mb-1">वाक्-कूटनीति दौत्य</span>
              <span className="text-stone-300">Krishna Dautya, Hanumat & 16 Nyaya Pillars</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Studio Navigation Segmented Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-[#17130f] border border-stone-800 rounded-2xl overflow-x-auto scrollbar-thin">
        {[
          { id: "mandala_geopolitics", label: "1. Videsh Niti & Mandala", icon: Shield },
          { id: "vyapaar_maritime", label: "2. Vyapaar & Maritime Law", icon: Anchor },
          { id: "vagmay_gunas", label: "3. Vagmay Sutras & 10 Gunas", icon: BookOpen },
          { id: "vagchatrya_debate", label: "4. Vagchatrya & Charaka Debate", icon: MessageSquare },
          { id: "vagkutniti_embassy", label: "5. Vagkutniti & Krishna-Hanuman", icon: Users },
          { id: "interactive_simulator", label: "Mandala & Debate Arena", icon: Zap },
          { id: "shulka_calculator", label: "Shulka & Trade Calculator", icon: Scale }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as NitiSection)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-amber-900/80 text-amber-100 border border-amber-600/60 shadow-lg shadow-amber-950/40"
                  : "text-stone-400 hover:text-stone-200 hover:bg-stone-900/60"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-stone-500"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: MANDALA GEOPOLITICS & SHADGUNYA */}
      {activeSection === "mandala_geopolitics" && (
        <div className="space-y-8">
          
          {/* Conceptual Header */}
          <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <span>Kautilya's Mandala Siddhanta: The 12-Sovereign Circle of States</span>
            </h2>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
              Formulated in the 6th and 7th books of the <span className="text-amber-300 font-serif">Arthashastra</span>, the Mandala Siddhanta is the world's first systemic realism theory of international relations. A sovereign never operates in a vacuum: geopolitical distance determines alliance dynamics. Your neighbor's neighbor is naturally your ally, while your immediate rear requires constant vigilance.
            </p>
          </div>

          {/* Interactive 12-King Mandala Visualizer */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: King Selector & Details */}
            <div className="lg:col-span-2 p-6 bg-[#14100c] border border-stone-800 rounded-3xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                  राजमण्डल द्वादश राजप्रकृतयः (Select Sovereign Element)
                </span>
                <span className="text-xs text-stone-400 font-mono">12 Sovereigns</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {MANDALA_ELEMENTS.map((elm, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedMandalaKing(idx)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedMandalaKing === idx
                        ? "bg-amber-950/90 border-amber-500 text-amber-100 shadow-md shadow-amber-950/50"
                        : "bg-[#1c1611] border-stone-800 text-stone-300 hover:border-stone-700"
                    }`}
                  >
                    <span className="text-[11px] font-mono text-amber-500/80 block">
                      {elm.circle}
                    </span>
                    <span className="text-xs font-serif font-bold block truncate">
                      {elm.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected King Breakdown */}
              <div className="p-5 bg-[#1b1510] border border-amber-900/40 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-amber-200">
                    {MANDALA_ELEMENTS[selectedMandalaKing].name}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-1 bg-amber-950 text-amber-300 border border-amber-800/60 rounded-lg">
                    {MANDALA_ELEMENTS[selectedMandalaKing].posture}
                  </span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  {MANDALA_ELEMENTS[selectedMandalaKing].desc}
                </p>
                <div className="pt-2 border-t border-stone-800 text-[11px] font-mono text-stone-400 flex items-center gap-2">
                  <span>Relative Position:</span>
                  <span className="text-amber-400">{MANDALA_ELEMENTS[selectedMandalaKing].circle}</span>
                  <span aria-hidden="true">·</span>
                  <span>Constitutional Role:</span>
                  <span className="text-stone-200">{MANDALA_ELEMENTS[selectedMandalaKing].role}</span>
                </div>
              </div>
            </div>

            {/* Right Col: Saptanga Sovereign Framework */}
            <div className="p-6 bg-[#16110d] border border-stone-800 rounded-3xl space-y-4">
              <div className="flex items-center gap-2 text-sm font-serif font-bold text-amber-300">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>The 7 Saptanga Organs of State (सप्ताङ्ग)</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                A sovereign state is an organic body; foreign strength is impossible if internal organs decay:
              </p>
              
              <div className="space-y-2.5 text-xs">
                {[
                  { name: "१. स्वामी (Svami)", desc: "The Noble Ruler (Head & Visionary Leadership)" },
                  { name: "२. अमात्य (Amatya)", desc: "The Council of Ministers (Eyes & Intellectual Counsel)" },
                  { name: "३. जनपद (Janapada)", desc: "Territory, fertile soil, and productive population (Limbs)" },
                  { name: "४. दुर्ग (Durga)", desc: "Fortified citadels & border strongholds (Protective Arms)" },
                  { name: "५. कोष (Kosha)", desc: "The Treasury accumulated justly through lawful surplus (Mouth)" },
                  { name: "६. दण्ड (Danda)", desc: "Standing Armed Force & Military Discipline (Mind/Striking Power)" },
                  { name: "७. मित्र (Mitra)", desc: "Enduring, faithful foreign ally in times of peril (Ears & Allies)" }
                ].map((org, i) => (
                  <div key={i} className="p-2.5 bg-[#1f1712] border border-stone-800/80 rounded-xl">
                    <span className="text-amber-400 font-bold block">{org.name}</span>
                    <span className="text-stone-300 text-[11px]">{org.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shadgunya (6 Measures) Matrix */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-amber-200">
              षाड्गुण्य नीति: The 6 Cardinal Instruments of Diplomatic Action
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SHADGUNYA_MEASURES.map((sg, idx) => {
                const Icon = sg.icon;
                return (
                  <div key={idx} className="p-5 bg-[#17120e] border border-stone-800 rounded-3xl space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-base font-serif font-bold text-amber-300">
                        <Icon className="w-4 h-4 text-amber-400" />
                        <span>{sg.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-stone-400">{sg.action}</span>
                    </div>
                    <p className="text-xs text-stone-300 font-sans leading-relaxed">
                      {sg.condition}
                    </p>
                    <div className="p-2.5 bg-[#120f0c] border border-stone-800/70 rounded-xl text-[11px] font-mono text-amber-400/90 italic">
                      "{sg.kautilyaQuote}"
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upaya Saptaka (7 Levers of Statecraft) */}
          <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-serif font-bold text-amber-200">
                उपाय सप्तक: The 7 Strategic Levers of Influence
              </h3>
              <span className="text-xs text-stone-400 font-mono">From Gentle Praise to Psychological Subterfuge</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              {UPAYA_SAPTAKA.map((upaya, idx) => (
                <div key={idx} className="p-3.5 bg-[#1e1712] border border-stone-800 rounded-2xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-amber-300 text-sm">{upaya.name}</span>
                    <span className="text-[10px] font-mono text-stone-400">{upaya.type}</span>
                  </div>
                  <p className="text-[11px] text-stone-300 leading-relaxed font-sans">{upaya.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PRACYHEEN VYAPAAR & MARITIME TRADE LAW */}
      {activeSection === "vyapaar_maritime" && (
        <div className="space-y-8">
          
          <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <Anchor className="w-5 h-5 text-amber-400" />
              <span>Ancient Mercantile Law, Customs Charters & Maritime Governance</span>
            </h2>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
              Vedic and classical India maintained the world's most sophisticated commercial infrastructure: maritime admiralty (Navadhyaksha), fair-profit regulations (Panyadhyaksha), caravan routes (Uttarapatha & Dakshinapatha), and enlightened salvage insurance charters like the Motupalli inscription of 1244 CE.
            </p>
          </div>

          {/* 4 Pillars of Arthashastra Commerce */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pillar 1: Panyadhyaksha */}
            <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-serif font-bold text-amber-300 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-400" />
                  <span>पण्याध्यक्ष: Director of Commerce & Price Regulation</span>
                </span>
                <span className="text-[11px] font-mono text-stone-400">Arthashastra 2.16 & 4.2</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                The Panyadhyaksha was charged with protecting both the buyer and the seller. He calculated cost of production, transport hazard, and fixed statutory net margins:
              </p>
              <ul className="text-xs space-y-2 text-stone-300 list-disc list-inside">
                <li><span className="text-amber-300 font-semibold">5% Cap on Domestic Goods:</span> Net profit above cost capped at five percent on locally produced items.</li>
                <li><span className="text-amber-300 font-semibold">10% Cap on Foreign Imports:</span> Rewarding high-risk long-distance international traders with up to ten percent profit.</li>
                <li><span className="text-amber-300 font-semibold">Anti-Cartelization (सम्भ्रूयसमुत्थानम्):</span> Heavy punitive fines on merchant syndicates attempting to artificially corner grain or stockpile essentials.</li>
              </ul>
            </div>

            {/* Pillar 2: Shulkadhyaksha */}
            <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-serif font-bold text-emerald-300 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>शुल्काध्यक्ष: Customs & Toll Gate Superintendent</span>
                </span>
                <span className="text-[11px] font-mono text-stone-400">Arthashastra 2.21</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Managed the Shulka-shala (Customs houses) situated near the four city gates and at all coastal ports:
              </p>
              <ul className="text-xs space-y-2 text-stone-300 list-disc list-inside">
                <li><span className="text-emerald-300 font-semibold">Abhijnana-Mudra (Official Seal):</span> Merchants were issued stamped clay/metal transit seals; falsifying a seal attracted severe fines.</li>
                <li><span className="text-emerald-300 font-semibold">Vartani (Road Escort Cess):</span> A modest fee paid to the Antapala (frontier warden) who took legal liability for any goods stolen in his jurisdiction!</li>
                <li><span className="text-emerald-300 font-semibold">Spiritual & Wedding Exemptions:</span> Merchandise for marriages, sacred Yagnas, and delivery of newborns entered entirely duty-free.</li>
              </ul>
            </div>

            {/* Pillar 3: Navadhyaksha */}
            <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-serif font-bold text-sky-300 flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-sky-400" />
                  <span>नावाध्यक्ष: Admiralty & Maritime Governance</span>
                </span>
                <span className="text-[11px] font-mono text-stone-400">Arthashastra 2.28</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Overseeing oceans, rivers, and inland ports:
              </p>
              <ul className="text-xs space-y-2 text-stone-300 list-disc list-inside">
                <li><span className="text-sky-300 font-semibold">Harbor Rescue:</span> State rescue boats dispatched immediately to assist vessels battered by offshore storms.</li>
                <li><span className="text-sky-300 font-semibold">Pirate Interdiction (हिंस्रिका निर्घातन):</span> Sovereign destroyers authorized to hunt and board pirate ships preying on merchant dhows.</li>
                <li><span className="text-sky-300 font-semibold">Samudra-Samyati Passports:</span> Licensing oceanic deep-sea trading vessels bound for Suvarnabhumi and Tamraparni.</li>
              </ul>
            </div>

            {/* Pillar 4: Shreni Guilds */}
            <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-serif font-bold text-yellow-300 flex items-center gap-2">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span>श्रेणी एवं सार्थवाह: Autonomous Guilds & Caravan Leaders</span>
                </span>
                <span className="text-[11px] font-mono text-stone-400">Manu 8.41 & Epigraphy</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Ancient India's merchant corporations (Shrenis) acted as autonomous banks, professional standards boards, and community judiciaries:
              </p>
              <ul className="text-xs space-y-2 text-stone-300 list-disc list-inside">
                <li><span className="text-yellow-300 font-semibold">Shreni-Dharma:</span> The king had to legally respect and enforce internal guild rules as constitutional law.</li>
                <li><span className="text-yellow-300 font-semibold">Caravan Chief (Sarthavaha):</span> Elected leader commanding armed escorts, camp sanitation, and transit diplomacy across Uttarapatha.</li>
                <li><span className="text-yellow-300 font-semibold">Perpetual Endowments (Akshaya Nivi):</span> Temples and civic colleges deposited gold in guilds to earn eternal annual interest for scholarships.</li>
              </ul>
            </div>
          </div>

          {/* Historic Feature: The Motupalli Abhaya Charter 1244 CE */}
          <div className="p-7 bg-[#1c140d] border border-amber-700/60 rounded-3xl space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-lg font-serif font-bold text-amber-200">
                <Award className="w-5 h-5 text-amber-400" />
                <span>The Motupalli Inscription (1244 CE): World's First Sovereign Maritime Insurance Charter</span>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-amber-950 text-amber-300 border border-amber-800/80 rounded-xl">
                Kakatiya Ganapati Deva
              </span>
            </div>

            <p className="text-xs md:text-sm text-stone-300 font-sans leading-relaxed">
              In medieval Europe and many ancient lands, the cruel "Law of Wreck" (Jus Naufragii) permitted kings to seize all cargo from foreign ships shipwrecked upon their coast. In 1244 CE at Motupalli port (Andhra Pradesh), Kakatiya Emperor Ganapati Deva erected a stone pillar abolishing this predatory custom forever:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#140f0b] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-amber-400 font-serif font-bold text-xs block">1. Unconditional Abhaya</span>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  Foreign merchants from distant shores, islands, and empires were granted sovereign assurance that their lives, persons, and recovered salvage would remain inviolable.
                </p>
              </div>

              <div className="p-4 bg-[#140f0b] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-emerald-400 font-serif font-bold text-xs block">2. Standardized 1/30th Duty</span>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  Arbitrary port extortion was replaced with a fixed, transparent tariff of exactly 1/30th (3.3%) on silk, camphor, pearls, ivory, copper, zinc, lead, and Arabian horses.
                </p>
              </div>

              <div className="p-4 bg-[#140f0b] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-sky-400 font-serif font-bold text-xs block">3. Fair Harbour Governance</span>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  Port administrators were forbidden from coercing merchants into distress sales, creating a bustling international hub connecting India, China, and the Arab seas.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: VAGMAY SUTRAS & 10 GUNAS */}
      {activeSection === "vagmay_gunas" && (
        <div className="space-y-8">
          
          <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span>Vāgmaya Sūtras: The Architecture of Eloquent & Resonant Discourse</span>
            </h2>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
              From the masterworks of Acharya Bhamaha, Dandin (<span className="text-amber-300 font-serif">Kavyadarsha</span>), and Vamana (<span className="text-amber-300 font-serif">Kavyalamkara-sutra-vritti</span>), speech is not merely functional—it is an aesthetic and intellectual sovereign art. Master the 10 cardinal Gunas of utterance and the 3 semantic powers of the word.
            </p>
          </div>

          {/* 10 Gunas Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-amber-200">
              The 10 Cardinal Gunas of Speech & Composition (दश वाग्गुणाः)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "१. प्रसाद (Prasada)", role: "Flawless Lucidity", desc: "Meaning strikes the listener's mind instantaneously without ambiguity or mental strain. Avoids convoluted syntax." },
                { name: "२. ओजस् (Ojas)", role: "Dynamic Vigour & Force", desc: "Energy, cadence, and purposeful compound words that command attention and project authority." },
                { name: "३. माधुर्य (Madhurya)", role: "Phonetic Sweetness", desc: "Pleasing phonetic flow; absence of harsh grating consonants that tire the ear." },
                { name: "४. समता (Samata)", role: "Stylistic Evenness", desc: "Sustaining a consistent register from opening to conclusion without jarring sudden shifts in tone." },
                { name: "५. अर्थव्यक्ति (Arthavyakti)", role: "Crisp Precision", desc: "Concrete, vivid description that leaves no doubt about exact attributes, metrics, or objectives." },
                { name: "६. कान्ति (Kanti)", role: "Luminous Elevation", desc: "Refined, noble phrasing that transcends colloquial banality (Gramyatva) without being pompous." },
                { name: "७. श्लेष (Shlesha)", role: "Seamless Cohesion", desc: "Syllables and concepts feel seamlessly minted together into an indivisible unit of thought." },
                { name: "८. समाधि (Samadhi)", role: "Harmonious Metaphor", desc: "Graceful transference of meaning where metaphor clarifies reality rather than obscuring it." },
                { name: "९. उदारत्व (Udaratva)", role: "Magnanimity of Spirit", desc: "Elevated, generous sentiment reflecting a statesmanlike breadth of perspective." },
                { name: "१०. सुकुमारता (Sukumarata)", role: "Acoustic Delicacy", desc: "Gentle phonetics that convey delicate emotional or diplomatic nuances without blunt clumsiness." }
              ].map((guna, idx) => (
                <div key={idx} className="p-4 bg-[#17120e] border border-stone-800 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-amber-300 text-sm">{guna.name}</span>
                    <span className="text-[10px] font-mono text-stone-400">{guna.role}</span>
                  </div>
                  <p className="text-xs text-stone-300 font-sans leading-relaxed">{guna.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The 3 Shabda Shaktis */}
          <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-4">
            <h3 className="text-base font-serif font-bold text-amber-200">
              त्रिविध शब्द-शक्ति: The 3 Dimensions of Semantic Meaning
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#1c1611] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-amber-400 font-serif font-bold text-sm block">१. अभिधा (Abhidha) — The Direct Denotation</span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  The primary dictionary meaning of words. Essential for legal treatises, treaty clauses, and scientific sutras where zero ambiguity can be permitted.
                </p>
              </div>

              <div className="p-4 bg-[#1c1611] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-sky-400 font-serif font-bold text-sm block">२. लक्षणा (Lakshana) — Metaphorical Transference</span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Invoked when the literal sense is obstructed. E.g., "The lion of Magadha has entered the assembly" — transference of valor rather than beastly form.
                </p>
              </div>

              <div className="p-4 bg-[#1c1611] border border-stone-800 rounded-2xl space-y-2">
                <span className="text-purple-400 font-serif font-bold text-sm block">३. व्यञ्जना (Vyanjana / Dhvani) — Subliminal Resonance</span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  The unsaid, evocative resonance that vibrates in the listener's subconscious mind. The highest instrument of diplomatic statecraft and poetry.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: VAGCHATRYA & CHARAKA DEBATE SCIENCE */}
      {activeSection === "vagchatrya_debate" && (
        <div className="space-y-8">
          
          <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              <span>Vāk-Chātūrya & Charaka's Sambhāṣā-Vidhi: The Art of Assembly Victory</span>
            </h2>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
              In Chapter 8 of the <span className="text-amber-300 font-serif">Charaka Samhita Vimanasthana</span>, Sage Charaka laid down the most comprehensive manual of debate and assembly psychology ever written in the ancient world. Before you speak, you must audit the assembly and your interlocutor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* The 2 Types of Assembly Dialogue */}
            <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-4">
              <div className="flex items-center gap-2 text-base font-serif font-bold text-amber-300">
                <Users className="w-4 h-4 text-amber-400" />
                <span>The Two Modes of Debate (द्विविध संभाषा)</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-[#1f1712] border border-stone-800 rounded-2xl space-y-2">
                  <span className="text-emerald-400 font-serif font-bold text-sm block">
                    १. संधाय संभाषा (Sandhaya Sambhasha) — The Collegial Quest for Truth
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Conducted with learned friends and genuine scholars. Characterized by intellectual humility, open mind, absence of spite, and mutual desire to illuminate reality. No one is humiliated.
                  </p>
                </div>

                <div className="p-4 bg-[#1f1712] border border-stone-800 rounded-2xl space-y-2">
                  <span className="text-rose-400 font-serif font-bold text-sm block">
                    २. विगृह्य संभाषा (Vigrihya Sambhasha) — Adversarial Combat
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Engaged with an arrogant, bad-faith disputant before an assembly. Your objective is not to teach them, but to strategically dismantle their fallacies, expose their ignorance, and disarm their malice before the public.
                  </p>
                </div>
              </div>
            </div>

            {/* Profiling the Sabha & Interlocutor */}
            <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-4">
              <div className="flex items-center gap-2 text-base font-serif font-bold text-amber-300">
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Profiling the Assembly & Interlocutor (सभामूल्याङ्कनम्)</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 bg-[#1e1712] border border-stone-800 rounded-xl">
                  <span className="text-amber-400 font-bold block">ज्ञानवती सभा (Jnana-vati Assembly):</span>
                  <span className="text-stone-300">Scholarly, discerning jury. Speak with strict logical consistency (Nyaya), precision, and deep textual authority. Avoid cheap theatrics.</span>
                </div>

                <div className="p-3 bg-[#1e1712] border border-stone-800 rounded-xl">
                  <span className="text-amber-400 font-bold block">मूढा सभा (Mudha Assembly):</span>
                  <span className="text-stone-300">Impressionable, non-technical audience. Deploy memorable parables, clear metaphors, inspiring rhythm, and disarmingly witty analogies.</span>
                </div>

                <div className="p-3 bg-[#1e1712] border border-stone-800 rounded-xl">
                  <span className="text-amber-400 font-bold block">प्रतिवादिनः शक्तिपरीक्षणम् (Opponent's Profile):</span>
                  <span className="text-stone-300">Judge their memory (Dharana), quickness of wit (Uha-poha), and emotional trigger points (Akrodha). If they are easily angered, maintain supreme calm—their rage will cause self-defeat (Nigrahasthana).</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vidura Niti Conversational Sutras */}
          <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-3">
            <h3 className="text-base font-serif font-bold text-amber-200">
              Vidura Nīti: Cardinal Rules of Conversational Tact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-[#1b1510] border border-stone-800 rounded-2xl">
                <span className="text-amber-400 font-bold block mb-1">अनाहूतः न प्रविशेत्</span>
                <span className="text-stone-300">Never enter an uninvited assembly; never volunteer unsolicited opinions to those unready to listen.</span>
              </div>
              <div className="p-3.5 bg-[#1b1510] border border-stone-800 rounded-2xl">
                <span className="text-amber-400 font-bold block mb-1">कालज्ञता (Timing Mastery)</span>
                <span className="text-stone-300">A profound truth spoken at the wrong psychological moment produces poison instead of nectar.</span>
              </div>
              <div className="p-3.5 bg-[#1b1510] border border-stone-800 rounded-2xl">
                <span className="text-amber-400 font-bold block mb-1">सत्यं ब्रूयात् प्रियं ब्रूयात्</span>
                <span className="text-stone-300">Speak truth that elevates; avoid gratuitously cruel truth and never flatter with comforting falsehood.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: VAGKUTNITI & THE EPIC EMBASSIES */}
      {activeSection === "vagkutniti_embassy" && (
        <div className="space-y-8">
          
          <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span>Vāk-Kūṭanīti: Rhetorical Statecraft & Masterclasses of Sri Krishna and Hanuman</span>
            </h2>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
              Diplomatic speechcraft (Vāk-Kūṭanīti) is the apex of political rhetoric. It achieves strategic deterrence without triggering kinetic devastation, leaving the adversary morally disarmed and politically isolated.
            </p>
          </div>

          {/* 3 Legendary Embassies */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Krishna Dautya */}
            <div className="p-6 bg-[#17120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-serif font-bold text-amber-300">श्रीकृष्ण दौत्य (Krishna Dautya)</span>
                <span className="text-[11px] font-mono text-stone-400">Mahabharata Udyoga Parva</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Lord Krishna's embassy to Hastinapura is history's greatest masterclass in diplomatic deterrence. He spoke not from weakness, but from supreme moral authority:
              </p>
              <div className="space-y-2 text-xs text-stone-300">
                <div className="p-2.5 bg-[#120f0c] border border-stone-800/80 rounded-xl">
                  <span className="text-amber-400 font-bold block">1. Sowing Moral Division:</span>
                  <span>Addressed Bhishma, Drona, and Vidura directly, forcing them to mentally disavow Duryodhana's greed in open court.</span>
                </div>
                <div className="p-2.5 bg-[#120f0c] border border-stone-800/80 rounded-xl">
                  <span className="text-amber-400 font-bold block">2. Escalation Dominance:</span>
                  <span>Offered peace for just five villages, exposing Duryodhana as the sole belligerent when he refused even a needlepoint of earth.</span>
                </div>
              </div>
            </div>

            {/* Hanumat Dautya */}
            <div className="p-6 bg-[#17120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-serif font-bold text-emerald-300">हनुमद् दौत्य (Hanumat Dautya)</span>
                <span className="text-[11px] font-mono text-stone-400">Ramayana Sundara Kanda</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Sri Rama's eulogy of Hanuman's speech in Kishkindha Kanda highlights the physical and acoustic perfection of the ideal envoy:
              </p>
              <div className="space-y-2 text-xs text-stone-300">
                <div className="p-2.5 bg-[#120f0c] border border-stone-800/80 rounded-xl">
                  <span className="text-emerald-400 font-bold block">1. Perfect Physical Composure:</span>
                  <span>Not a twitch of eyebrow, forehead, or posture. Speaks in the middle vocal register from the chest with no breathless hesitation.</span>
                </div>
                <div className="p-2.5 bg-[#120f0c] border border-stone-800/80 rounded-xl">
                  <span className="text-emerald-400 font-bold block">2. In Lanka's Court:</span>
                  <span>Addressed Ravana with fearless sovereign dignity as the envoy of Sugriva and Rama, reminding him of cosmic Dharma.</span>
                </div>
              </div>
            </div>

            {/* Angada Dautya */}
            <div className="p-6 bg-[#17120e] border border-stone-800 rounded-3xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-serif font-bold text-sky-300">अङ्गद दौत्य (Angada Dautya)</span>
                <span className="text-[11px] font-mono text-stone-400">Ramayana Yuddha Kanda</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                The final ultimatum embassy: displaying unyielding psychological fortitude in the adversary's lair:
              </p>
              <div className="space-y-2 text-xs text-stone-300">
                <div className="p-2.5 bg-[#120f0c] border border-stone-800/80 rounded-xl">
                  <span className="text-sky-400 font-bold block">1. Strategic Fearlessness:</span>
                  <span>Planting his foot firmly in Ravana's assembly, declaring that if any warrior could move it, Rama would retreat!</span>
                </div>
                <div className="p-2.5 bg-[#120f0c] border border-stone-800/80 rounded-xl">
                  <span className="text-sky-400 font-bold block">2. Demolishing Enemy Morale:</span>
                  <span>Crushing Ravana's commanders psychologically before a single arrow was fired on the battlefield.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nyaya Shastra 16 Dialectical Categories */}
          <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-serif font-bold text-amber-200">
                न्याय शास्त्र: 6 Dialectical Weapons for Rhetorical Self-Defense
              </h3>
              <span className="text-xs text-stone-400 font-mono">Recognizing Fallacies & Neutralizing Bad-Faith Attacks</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              {NYAYA_DEBATE_PILLARS.map((pillar, idx) => (
                <div key={idx} className="p-3.5 bg-[#1e1712] border border-stone-800 rounded-2xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-amber-300 text-sm">{pillar.name}</span>
                    <span className="text-[10px] font-mono text-stone-400">{pillar.role}</span>
                  </div>
                  <p className="text-[11px] text-stone-300 leading-relaxed font-sans">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: INTERACTIVE MANDALA & DEBATE ARENA SIMULATOR */}
      {activeSection === "interactive_simulator" && (
        <div className="space-y-10">
          
          {/* SIMULATOR 1: GEOPOLITICAL MANDALA CRISIS ARENA */}
          <div className="p-7 bg-[#17120e] border border-amber-900/50 rounded-3xl space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg font-serif font-bold text-amber-200 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span>Kautilya Mandala Crisis Simulator (मण्डल नीति प्रयोगशाला)</span>
              </h3>
              <span className="text-xs font-mono text-amber-400">Interactive Geopolitical Engine</span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Assume the throne as the <span className="text-amber-300 font-serif font-bold">Vijigishu</span>. Select a sovereign crisis, choose your diplomatic posture from the Shadgunya, and deploy an Upaya lever to observe the calculated outcome based on Kautilya's actual strategic logic.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Crisis Selection */}
              <div className="p-4 bg-[#1b1510] border border-stone-800 rounded-2xl space-y-2">
                <label className="text-xs font-mono text-amber-400 block uppercase">1. Geopolitical Dilemma</label>
                <select
                  value={simCrisis}
                  onChange={(e) => setSimCrisis(e.target.value as any)}
                  className="w-full p-2.5 bg-[#120e0b] border border-stone-700 rounded-xl text-xs text-stone-200 font-sans focus:outline-none focus:border-amber-500"
                >
                  <option value="border_provocation">Contiguous Border Incursion (अरि सीमा संकट)</option>
                  <option value="trade_choke">Maritime Trade Route Chokepoint (नौवहन नाकाबन्दी)</option>
                  <option value="hostile_coalition">Two-Front Coalition: Ari & Parshnigraha (द्विमुखी घेराबंदी)</option>
                </select>
              </div>

              {/* Shadgunya Choice */}
              <div className="p-4 bg-[#1b1510] border border-stone-800 rounded-2xl space-y-2">
                <label className="text-xs font-mono text-amber-400 block uppercase">2. Shadgunya Measure</label>
                <select
                  value={selectedShadgunya}
                  onChange={(e) => setSelectedShadgunya(e.target.value)}
                  className="w-full p-2.5 bg-[#120e0b] border border-stone-700 rounded-xl text-xs text-stone-200 font-sans focus:outline-none focus:border-amber-500"
                >
                  <option value="Sandhi">सन्धि (Sandhi - Treaty / Alliance)</option>
                  <option value="Vigraha">विग्रह (Vigraha - Hostility / Sanctions)</option>
                  <option value="Asana">आसन (Asana - Strategic Stalemate & Patience)</option>
                  <option value="Yana">यान (Yana - Mobilization & Campaign)</option>
                  <option value="Samshraya">संश्रय (Samshraya - Protectorate under Hegemon)</option>
                  <option value="Dvaidhibhava">द्वैधीभाव (Dvaidhibhava - Bifurcated Dual Policy)</option>
                </select>
              </div>

              {/* Upaya Choice */}
              <div className="p-4 bg-[#1b1510] border border-stone-800 rounded-2xl space-y-2">
                <label className="text-xs font-mono text-amber-400 block uppercase">3. Primary Upaya Lever</label>
                <select
                  value={selectedUpaya}
                  onChange={(e) => setSelectedUpaya(e.target.value)}
                  className="w-full p-2.5 bg-[#120e0b] border border-stone-700 rounded-xl text-xs text-stone-200 font-sans focus:outline-none focus:border-amber-500"
                >
                  <option value="Sama">साम (Sama - Diplomatic Dialogue)</option>
                  <option value="Dana">दान (Dana - Tariff / Aid Concession)</option>
                  <option value="Bheda">भेद (Bheda - Sowing Division in Enemy Council)</option>
                  <option value="Danda">दण्ड (Danda - Military Force / Strike)</option>
                  <option value="Maya">माया (Maya - Psychological Disinformation)</option>
                  <option value="Indrajala">इन्द्रजाल (Indrajala - Illusory Power Projection)</option>
                </select>
              </div>
            </div>

            {/* Calculated Simulator Outcome Box */}
            <div className="p-5 bg-[#1f1712] border border-amber-800/70 rounded-2xl space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-[11px] font-mono text-amber-500 uppercase block">Kautilyan Strategic Forecast:</span>
                  <span className="text-base font-serif font-bold text-amber-100">{simResult.verdict}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-stone-400">Stability Index:</span>
                  <span className={`text-lg font-serif font-bold ${simResult.outcomeScore >= 80 ? "text-emerald-400" : simResult.outcomeScore >= 60 ? "text-amber-400" : "text-rose-400"}`}>
                    {simResult.outcomeScore}%
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                {simResult.reasoning}
              </p>
            </div>
          </div>

          {/* SIMULATOR 2: CHARAKA SABHA & VAGCHATRYA DEBATE ARENA */}
          <div className="p-7 bg-[#17120e] border border-stone-800 rounded-3xl space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg font-serif font-bold text-amber-200 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <span>Charaka Sambhāṣā Debate Arena (वाक्चातुर्य सम्भाषा अखाड़ा)</span>
              </h3>
              <span className="text-xs font-mono text-stone-400">Assembly Rhetoric Engine</span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Test your conversational dexterity and presence of mind before different assemblies. An interlocutor launches a bad-faith question—select your rhetorical response to maximize your standing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="p-4 bg-[#1b1510] border border-stone-800 rounded-2xl space-y-2">
                <label className="text-xs font-mono text-amber-400 block uppercase">Target Assembly Environment</label>
                <select
                  value={assemblyType}
                  onChange={(e) => setAssemblyType(e.target.value as any)}
                  className="w-full p-2.5 bg-[#120e0b] border border-stone-700 rounded-xl text-xs text-stone-200 font-sans focus:outline-none focus:border-amber-500"
                >
                  <option value="jnanavati">ज्ञानवती सभा (Learned Philosophical Jury)</option>
                  <option value="mudha">मूढा सभा (General Popular Public Assembly)</option>
                  <option value="hostile">विपक्ष सभा (Biased / Hostile Interlocutor Ring)</option>
                </select>
              </div>

              <div className="p-4 bg-[#1b1510] border border-stone-800 rounded-2xl space-y-2">
                <label className="text-xs font-mono text-amber-400 block uppercase">Your Rhetorical Move</label>
                <select
                  value={myRhetoricChoice}
                  onChange={(e) => setMyRhetoricChoice(e.target.value)}
                  className="w-full p-2.5 bg-[#120e0b] border border-stone-700 rounded-xl text-xs text-stone-200 font-sans focus:outline-none focus:border-amber-500"
                >
                  <option value="vada_pramana">वाद-प्रमाण (Strict Nyaya evidence & textual rigor)</option>
                  <option value="expose_chhala">छल-उद्घाटन (Expose opponent's verbal quibble calmly)</option>
                  <option value="witty_parry">वाक्पटुत्व (Disarming humorous wit & presence of mind)</option>
                  <option value="metaphor_story">रूपक-समाधि (Vivid memorable parable/metaphor)</option>
                  <option value="anger_shout">क्रोध-प्रहार (Angry counter-accusation - High Risk!)</option>
                </select>
              </div>
            </div>

            {/* Debate Evaluation Box */}
            <div className="p-5 bg-[#1c1611] border border-stone-700 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase">Charaka Assembly Audit:</span>
                <span className={`text-base font-serif font-bold ${debateResult.charisma >= 80 ? "text-emerald-400" : "text-amber-400"}`}>
                  Assembly Influence: {debateResult.charisma}%
                </span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                {debateResult.evaluation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: SHULKA & TRADE CALCULATOR */}
      {activeSection === "shulka_calculator" && (
        <div className="space-y-8">
          
          <div className="p-6 bg-[#18130f] border border-stone-800 rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              <span>Arthashastra Shulka, Tolls & Fair Profit Calculator (शुल्काध्यक्ष गणक)</span>
            </h2>
            <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
              Simulate actual fiscal customs calculations according to the <span className="text-amber-300 font-serif">Arthashastra Book 2, Chapter 21</span>. Calculate the baseline Shulka (customs tariff), Vartani (road escort fee), Dvaradeya (city gate entry fee), legally capped profit margins, and compare directly with the 1244 CE Motupalli Abhaya Charter rate!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Input Controls */}
            <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-5">
              <h3 className="text-sm font-mono uppercase text-amber-400 tracking-wider">
                Consignment Manifest Parameters
              </h3>

              <div className="space-y-4 text-xs font-sans">
                
                <div>
                  <label className="block text-stone-300 mb-1">Declared Consignment Value (in Silver Panas / Currency)</label>
                  <input
                    type="number"
                    min="100"
                    max="1000000"
                    step="500"
                    value={commodityValue}
                    onChange={(e) => setCommodityValue(Math.max(100, Number(e.target.value)))}
                    className="w-full p-2.5 bg-[#120f0c] border border-stone-700 rounded-xl text-stone-100 font-mono text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 mb-1">Commodity Classification (Arthashastra Schedule)</label>
                  <select
                    value={commodityType}
                    onChange={(e) => setCommodityType(e.target.value as any)}
                    className="w-full p-2.5 bg-[#120f0c] border border-stone-700 rounded-xl text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="spices">Spices & Perfumes (मरीच, लवङ्ग, चन्दन - 10% Shulka)</option>
                    <option value="textiles">Fine Silk & Cotton (कौशेय, कार्पास - 10% Shulka)</option>
                    <option value="precious_gems">Gems, Pearls & Gold (मणयः, मुक्ता, सुवर्ण - 16.6% Shulka)</option>
                    <option value="grain">Essential Foodgrains (धान्य, यव - 5% Relief Shulka)</option>
                    <option value="metals">Copper, Iron & Tin (ताम्र, अयस् - 5% Industrial Shulka)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1">Trade Origin & Risk Tier</label>
                  <select
                    value={originType}
                    onChange={(e) => setOriginType(e.target.value as any)}
                    className="w-full p-2.5 bg-[#120f0c] border border-stone-700 rounded-xl text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="foreign_maritime">Foreign Maritime Import (परदेशीय / High Risk - 10% Profit Cap)</option>
                    <option value="domestic">Domestic Inland Route (स्वदेशीय / Overland - 5% Profit Cap)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1">Antapala Frontier Gates / Transit Toll Posts Passed</label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={transitGates}
                    onChange={(e) => setTransitGates(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                    <span>Direct Harbor (0 Gates)</span>
                    <span className="text-amber-400 font-bold">{transitGates} Toll Gates</span>
                    <span>Interior Capital (10 Gates)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Breakdown Table */}
            <div className="p-6 bg-[#16120e] border border-stone-800 rounded-3xl space-y-5">
              <h3 className="text-sm font-mono uppercase text-emerald-400 tracking-wider">
                Royal Customs & Pricing Audit (राजकीय गणना)
              </h3>

              <div className="space-y-3 text-xs">
                
                <div className="flex items-center justify-between p-3 bg-[#1c1611] rounded-xl border border-stone-800">
                  <span className="text-stone-300">शुल्क (Customs Tariff @ {shulkaCalculations.baseShulkaRatePct}%):</span>
                  <span className="font-mono font-bold text-amber-300">{shulkaCalculations.baseShulka.toLocaleString()} Panas</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#1c1611] rounded-xl border border-stone-800">
                  <span className="text-stone-300">वर्तनी (Road Escort Transit Fee for {transitGates} gates):</span>
                  <span className="font-mono text-stone-300">{shulkaCalculations.vartaniRoadToll.toLocaleString()} Panas</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#1c1611] rounded-xl border border-stone-800">
                  <span className="text-stone-300">द्वारदेय (City Gate Entry Fee @ 0.5%):</span>
                  <span className="font-mono text-stone-300">{shulkaCalculations.dvaradeyaGateEntry.toLocaleString()} Panas</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#241a12] rounded-xl border border-amber-900/60 font-bold">
                  <span className="text-amber-200">Total Statutory Levies (सम्पूर्ण राजकीय देय):</span>
                  <span className="font-mono text-amber-400">{shulkaCalculations.totalStateLevies.toLocaleString()} Panas</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#1c1611] rounded-xl border border-stone-800">
                  <span className="text-stone-300">Maximum Authorized Profit Margin ({shulkaCalculations.profitRatePct}%):</span>
                  <span className="font-mono text-emerald-400">+{shulkaCalculations.maxPermittedProfit.toLocaleString()} Panas</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-emerald-950/40 rounded-2xl border border-emerald-800/80 font-bold">
                  <span className="text-emerald-200 font-serif text-sm">Lawful Market Price Ceiling:</span>
                  <span className="font-mono text-emerald-300 text-base">{shulkaCalculations.fairSellingPrice.toLocaleString()} Panas</span>
                </div>

                {/* Motupalli Benchmark Comparison */}
                <div className="p-4 bg-amber-950/30 rounded-2xl border border-amber-800/40 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-amber-400">1244 CE Motupalli Flat Charter Duty (1/30th):</span>
                    <span className="text-amber-200 font-bold">{shulkaCalculations.motupalliDuty.toLocaleString()} Panas</span>
                  </div>
                  <p className="text-[10px] text-stone-400 leading-relaxed">
                    Under Emperor Ganapati Deva's charter, foreign merchants paid only a 3.3% flat tariff with guaranteed sovereign salvage insurance on all shipwrecked cargo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SHLOKA REPOSITORY SECTION (UNIVERSAL ACROSS ALL TABS) */}
      <div className="space-y-6 pt-6 border-t border-stone-800">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-serif font-bold text-amber-200 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span>Prāchīna Nīti & Vāgmay Shloka Treasury (सटीक संस्कृत श्लोक संग्रह)</span>
            </h2>
            <p className="text-xs text-stone-400 font-sans mt-1">
              Authentic verses from Arthashastra, Ramayana, Mahabharata, Charaka Samhita, and Kavyadarsha with word-by-word Anvaya.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search shloka, source, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#17120e] border border-stone-800 rounded-xl text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Shloka Cards Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredShlokas.map((shloka) => (
            <div
              key={shloka.id}
              className="p-6 md:p-8 bg-[#18130f] border border-stone-800 rounded-3xl space-y-5 hover:border-amber-900/60 transition-all shadow-xl"
            >
              {/* Header with Source & Copy */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800/80 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-amber-400 font-bold uppercase">{shloka.source}</span>
                  <span className="text-stone-600">·</span>
                  <span className="text-stone-400">{shloka.sourceChapter}</span>
                </div>

                <button
                  onClick={() => copyToClipboard(`${shloka.devanagari}\n\n${shloka.transliteration}\n\n${shloka.englishMeaning}`, shloka.id)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-xs font-mono transition-colors cursor-pointer"
                >
                  {copiedId === shloka.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-stone-400" />}
                  <span>{copiedId === shloka.id ? "Copied!" : "Copy Shloka"}</span>
                </button>
              </div>

              {/* Devanagari Primary Text */}
              <div className="space-y-1">
                <p className="text-lg md:text-xl font-serif text-amber-100 font-bold leading-relaxed tracking-wide">
                  {shloka.devanagari}
                </p>
                <p className="text-xs font-mono text-amber-400/80 italic">
                  {shloka.transliteration}
                </p>
              </div>

              {/* Anvaya (Word Order) */}
              <div className="p-3 bg-[#120f0c] border border-stone-800 rounded-xl text-xs font-serif text-stone-300">
                <span className="text-amber-500 font-mono font-bold mr-2">अन्वय (Anvaya):</span>
                <span>{shloka.anvaya}</span>
              </div>

              {/* Hindi & English Explanations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans leading-relaxed">
                <div className="p-4 bg-[#1f1712] border border-stone-800/80 rounded-2xl space-y-1.5">
                  <span className="text-amber-400 font-bold font-serif block">हिन्दी भावार्थ</span>
                  <p className="text-stone-300">{shloka.hindiMeaning}</p>
                </div>

                <div className="p-4 bg-[#1f1712] border border-stone-800/80 rounded-2xl space-y-1.5">
                  <span className="text-emerald-400 font-bold font-serif block">English Translation</span>
                  <p className="text-stone-300">{shloka.englishMeaning}</p>
                </div>
              </div>

              {/* Modern Leadership / Geopolitical Application */}
              <div className="p-3.5 bg-gradient-to-r from-amber-950/40 to-stone-900/40 border border-amber-900/40 rounded-2xl text-xs flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-300 block mb-0.5">Modern Strategic Application:</span>
                  <span className="text-stone-300 leading-relaxed font-sans">{shloka.modernApplication}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
