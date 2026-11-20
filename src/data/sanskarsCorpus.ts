import { SanskarItem, Gautama40Item } from "../types/sanskarAndDevataTypes";

export const SHODASHA_SAMSKARAS_CORPUS: SanskarItem[] = [
  {
    id: "garbhadhana",
    canonicalNumber: 1,
    name: "Garbhadhana (Conception Ceremony)",
    sanskritName: "गर्भाधान संस्कार",
    stage: "prenatal",
    stageLabel: "Prenatal Sacrament (गर्भाधान)",
    idealTime: "Ritu-kala (between the 4th and 16th nights following the menstrual cycle on auspicious tithis)",
    scripturalAuthority: "Brihadaranyaka Upanishad 6.4.21, Paraskara Grihyasutra 1.11, Manu Smriti 2.26",
    overview: "The sacred rite sanctifying the act of union between husband and wife. Rather than a mere biological impulse, it elevates conception to an act of conscious cosmic invocation (Yajna), inviting a noble, sattvic soul into the womb.",
    ritualProcedure: [
      "Purificatory bath, morning meditation, and Sankalpa for inviting a righteous, enlightened soul (Supraja).",
      "Lighting of the consecrated Grihya Agni and offering of oblations to Vishnu, Prajapati, Dhatri, and Sinivali.",
      "Chanting of the Rigvedic Garbha-sukta invocation while touching the wife's heart.",
      "Meditation upon divine harmony and alignment of emotional, psychic, and spiritual fields before union."
    ],
    mantras: [
      {
        id: "garbhadhana_mantra_1",
        title: "Rigvedic Garbhadhana Mantra (ऋग्वेद १०.१८४.१)",
        sanskrit: `ॐ विष्णुर्योनिं कल्पयतु त्वष्टा रूपाणि पिंशतु ।
आ सिञ्चतु प्रजापतिर्धाता गर्भं दधातु ते ॥
गर्भं धेहि सिनीवालि गर्भं धेहि सरस्वति ।
गर्भं ते अश्विनौ देवावा धत्तां पुष्करस्रजा ॥`,
        transliteration: `om viṣṇuryoniṁ kalpayatu tvaṣṭā rūpāṇi piṁśatu |
ā siñcatu prajāpatirdhātā garbhaṁ dadhātu te ||
garbhaṁ dhehi sinīvāli garbhaṁ dhehi sarasvati |
garbhaṁ te aśvinau devāvā dhattāṁ puṣkarasrajā ||`,
        meaning: "May Lord Vishnu prepare the sacred womb; may Tvashta fashion the bodily forms; may Prajapati pour the creative nectar, and may Dhata place the viable embryo in thee. O Sinivali, grant conception; O Saraswati, grant conception; may the twin Ashvins, adorned with lotus garlands, sustain the conception within thee!",
        sourceText: "Rigveda Samhita 10.184.1-2 / Paraskara Grihyasutra 1.11"
      }
    ],
    essentialSamagri: [
      "Pure Cow Ghee (A2)",
      "Akshata (unbroken yellow rice)",
      "Panchamrita",
      "Kusha grass and sacred water pot (Kalasha)",
      "White and yellow fragrant flowers"
    ],
    bioSpiritualSignificance: "Sets the epiphenomenal and psychological intention (Sankalpa). Modern epigenetics confirms that parental emotional stress, heart-rate coherence, and calm hormonal balance at conception deeply influence initial cellular differentiation.",
    ayurvedicOrScientificInsight: "Charaka Samhita (Sharira Sthana 8.4) dictates that the psychological state (Manasika Bhava) of parents at the moment of conception determines the temperament (Prakriti), intellect (Medha), and vitality (Ojas) of the progeny."
  },
  {
    id: "pumsavana",
    canonicalNumber: 2,
    name: "Pumsavana (Invigorating the Fetus & Vitality)",
    sanskritName: "पुंसवन संस्कार",
    stage: "prenatal",
    stageLabel: "Prenatal Sacrament (पुंसवन)",
    idealTime: "Third month of pregnancy, when the fetal heartbeat becomes audible and before gender differentiation solidifies",
    scripturalAuthority: "Ashvalayana Grihyasutra 1.13, Paraskara Grihyasutra 1.14, Sushruta Samhita",
    overview: "Performed to invoke physical strength, robust organogenesis, and mental brilliance for the growing fetus. It is a rite of protective vitality ensuring the preservation of the embryo.",
    ritualProcedure: [
      "Fasting or light sattvic intake by the mother on Pushya Nakshatra day.",
      "Pradakshina around the family sacred fire and prayers to Prajapati.",
      "Administration of a few consecrated drops of wild banyan shoot juice (Vata-ankura) into the mother's right nostril with Vedic verses.",
      "Prayers for mental fortitude, moral rectitude, and constitutional vigor."
    ],
    mantras: [
      {
        id: "pumsavana_mantra_1",
        title: "Pumsavana Vitality Mantra (सामवेद / पारस्कर गृह्यसूत्र १.१४)",
        sanskrit: `ॐ पुमानग्निश्च वायुश्च पुमान् सूर्यो बृहस्पतिः ।
पुमांसो देवाः सर्वे च पुमान् बालः प्रजायताम् ॥
शं न इन्द्राग्नी भवतामवोभिः शं न इन्द्रावरुणा रातहव्या ।
शं न इन्द्रापूषणा वाजसातौ शमिन्द्रासोमा सुविताय शं योः ॥`,
        transliteration: `om pumānagniśca vāyuśca pumān sūryo bṛhaspatiḥ |
pumāṁso devāḥ sarve ca pumān bālaḥ prajāyatām ||
śaṁ na indrāgnī bhavatāmavobhiḥ śaṁ na indrāvaruṇā rātahavyā |
śaṁ na indrāpūṣaṇā vājasātau śamindrāsomā suvitāya śaṁ yoḥ ||`,
        meaning: "May Agni, Vayu, Surya, Brihaspati, and all divine forces bestow strength and vitality; may a vigorous, virtuous, and brilliant child be nurtured in the womb. May Indra, Agni, and Varuna be auspicious for our well-being!",
        sourceText: "Paraskara Grihyasutra 1.14 / Shukla Yajurveda"
      }
    ],
    essentialSamagri: [
      "Fresh tender sprout of the Banyan tree (Nyagrodha / Vata ankura)",
      "Curd made from indigenous cow's milk",
      "Kusha grass ring (Pavitri)",
      "Pure river water (Gangajal)"
    ],
    bioSpiritualSignificance: "Banyan leaf shoot extract contains natural plant phytosterols, bioflavonoids, and antioxidant sap that stimulate mucosal absorption, toning the maternal autonomic nervous system and soothing nausea.",
    ayurvedicOrScientificInsight: "Sushruta Samhita (Sharira Sthana 2.32) explains that the nascent embryonic tissues respond directly to maternal olfactory and neuro-endocrinal calm during the first trimester."
  },
  {
    id: "simantonnayana",
    canonicalNumber: 3,
    name: "Simantonnayana (Parting the Hair & Maternal Upliftment)",
    sanskritName: "सीमन्तोन्नयन संस्कार",
    stage: "prenatal",
    stageLabel: "Prenatal Sacrament (सीमन्तोन्नयन)",
    idealTime: "Fourth, sixth, or eighth month of pregnancy (commonly in the fourth or seventh month)",
    scripturalAuthority: "Ashvalayana Grihyasutra 1.14, Apastamba Grihyasutra 6.14, Paraskara 1.15",
    overview: "The sacred parting of the expectant mother's hair using a porcupine quill, darbha grass, and udumbara twig. It is designed to cheer, protect, and surround the mother with music, beauty, and emotional tranquility as fetal hearing and sensory faculties awaken.",
    ritualProcedure: [
      "Mother is seated on a soft deer-skin or raw silk asana facing eastward near the sacred fire.",
      "Husband gently parts her hair upwards from forehead to crown using a three-point quill, reciting Ritas and invoking Raka, Sinivali, and Soma.",
      "Female elders sing uplifting, melodious songs (Veena playing) depicting heroism, virtue, and tranquility.",
      "Offering of sweet cooked rice (Payasam / Charu) enriched with ghee and dry fruits."
    ],
    mantras: [
      {
        id: "simanta_mantra_1",
        title: "Rigvedic Simanta Mantra (ऋग्वेद २.३२.४-५)",
        sanskrit: `ॐ राकामहं सुहवां सुष्टुती हुवे शृणोतु नः सुभगा बोधतु त्मना ।
सीव्यत्वपः सूच्याच्छिद्यमानया ददातु वीरं शतदायमुक्थ्यम् ॥
यास्ते राके सुभगः सुपेशसो याभिर्ददासि दाशुषे वसूनि ।
ताभिर्नो अद्य सुमना उपागहि सहस्रपोषं सुभगे रराणा ॥`,
        transliteration: `om rākāmahaṁ suhavāṁ suṣṭutī huve śṛṇotu naḥ subhagā bodhatu tmanā |
sīvyatvapaḥ sūcyācchidyamānayā dadātu vīraṁ śatadāyamukthyam ||
yāste rāke subhagaḥ supeśaso yābhirdadāsi dāśuṣe vasūni |
tābhirno adya sumanā upāgahi sahasrapoṣaṁ subhage rarāṇā ||`,
        meaning: "With earnest praise I invoke Raka (the goddess of fulfillment). May the benevolent one hear us and bless this mother from her soul. With an unbroken needle may she weave the tapestry of life, and grant an illustrious child rich in wisdom and valor. Come to us, O graceful one, and bestow thousandfold prosperity!",
        sourceText: "Rigveda 2.32.4-5 / Paraskara Grihyasutra 1.15.3"
      }
    ],
    essentialSamagri: [
      "Three-spotted porcupine quill (Shalyaki kanta)",
      "Spike of Darbha grass",
      "Twig of Udumbara tree with green fruits",
      "Spun red yarn thread",
      "Scented floral garlands and Veena/stringed music"
    ],
    bioSpiritualSignificance: "Around the 20th-24th week of gestation, the fetal cochlea and auditory cortex develop. Melodious acoustic stimulation and parental tenderness induce maternal oxytocin and endorphin release, crossing the placenta to foster neural synaptogenesis.",
    ayurvedicOrScientificInsight: "Kashyapa Samhita states that from the fourth month (Dauhridini stage), the fetal mind (Chetana) manifests desires through maternal sensory cravings. Denying her joy brings psychological trauma to the newborn."
  },
  {
    id: "jatakarma",
    canonicalNumber: 4,
    name: "Jatakarma (Natal Consecration & First Ingestion)",
    sanskritName: "जातकर्म संस्कार",
    stage: "childhood",
    stageLabel: "Childhood Sacrament (जातकर्म)",
    idealTime: "Immediately after birth, before the severance of the umbilical cord or before the first breastfeed",
    scripturalAuthority: "Ashvalayana Grihyasutra 1.15, Paraskara 1.16, Shatapatha Brahmana 11.8.3",
    overview: "The very first post-natal rite celebrating safe delivery. The father feeds the newborn infinitesimal smears of gold-rubbed ghee and honey (Medha-Janana) with a golden stylus, whispering the secret name and the Gayatri into the child's right ear.",
    ritualProcedure: [
      "Father cleanses himself, touches the newborn child and chants the Ayushya mantras for longevity.",
      "Medha-Janana: Honey (Madhu) and Ghee (Ghrita) are rubbed on clean sterilized gold and touched to the baby's tongue.",
      "Whispering of 'Vak' (Speech) and 'Agni, Vayu, Surya' mantras into the ears.",
      "Invoking the blessing of the 5 pranas (Prana, Apana, Vyana, Udana, Samana) upon the child's respiratory system."
    ],
    mantras: [
      {
        id: "jatakarma_mantra_1",
        title: "Medha-Janana Intellect Mantra (पारस्कर गृह्यसूत्र १.१६.४)",
        sanskrit: `ॐ भूस्त्वयि दधामि, भुवस्तुवयि दधामि, स्वस्त्वयि दधामि, भूर्भुवः स्वः सर्वं त्वयि दधामि ॥
ॐ मेधां ते देवः सविता मेधां देवी सरस्वती ।
मेधां ते अश्विनौ देवावाधत्तां पुष्करस्रजौ ॥
अश्मा भव परशुर्भव हिरण्यमस्तृतं भव ।
वेदो वै पुत्रनामासि स जीव शरदः शतम् ॥`,
        transliteration: `om bhūstvayi dadhāmi, bhuvastvayi dadhāmi, svastvayi dadhāmi, bhūrbhuvaḥ svaḥ sarvaṁ tvayi dadhāmi ||
om medhāṁ te devaḥ savitā medhāṁ devī sarasvatī |
medhāṁ te aśvinau devāvādhattāṁ puṣkarasrajau ||
aśmā bhava paraśurbhava hiraṇyamastṛtaṁ bhava |
vedo vai putranāmāsi sa jīva śaradaḥ śatam ||`,
        meaning: "I establish Bhur in thee; I establish Bhuvah in thee; I establish Svah in thee; I establish all three cosmic realms in thee! May God Savitri bestow intellect upon thee; may Goddess Saraswati grant wisdom; may the lotus-crowned Ashvins bestow luminous intelligence. Be firm as a rock! Be sharp as an axe! Be indestructible like pure gold! Thou art the living Veda itself born as my child; live happily for a hundred autumns!",
        sourceText: "Paraskara Grihyasutra 1.16.4 / Shatapatha Brahmana"
      }
    ],
    essentialSamagri: [
      "Sterile 24K gold ring or stylus (Suvarna Shalaka)",
      "Pure wild honey (Madhu)",
      "Indigenous cow ghee (Ghrita)",
      "Rock crystal or smooth grinding stone"
    ],
    bioSpiritualSignificance: "Swarna Prashana (gold nano-colloid with ghee and honey) is documented in Ayurveda to act as an immunomodulator, gut-microbiome primer, and nootropic agent stimulating neuro-transmission.",
    ayurvedicOrScientificInsight: "Charaka and Kashyapa emphasize that micro-doses of gold stimulate the reticuloendothelial system and protect against infantile neonatal sepsis while priming the sucking reflex."
  },
  {
    id: "namakarana",
    canonicalNumber: 5,
    name: "Namakarana (Sacred Naming Ceremony)",
    sanskritName: "नामकरण संस्कार",
    stage: "childhood",
    stageLabel: "Childhood Sacrament (नामकरण)",
    idealTime: "10th, 11th, or 12th day after birth (after the initial Asaucha/Sutaka cleansing period)",
    scripturalAuthority: "Manu Smriti 2.30-33, Paraskara 1.17, Ashvalayana 1.15.4",
    overview: "The formal naming of the child. Names are not chosen randomly: four distinct names are bestowed (Nakshatra-nama based on planetary syllable, Masa-nama, Kuladevata-nama, and Vyavaharika worldly name) to harmonize vocal vibrations with celestial coordinates.",
    ritualProcedure: [
      "The home and mother are cleansed through Punyahavachanam and sacred Kalasha sprinkling.",
      "Father offers oblations into the consecrated fire for Agni, Soma, and the Nakshatra Devata.",
      "Father writes the selected name with unbroken rice (Akshata) on a bronze plate.",
      "Father softly breathes into the child's right ear: 'Thou art named ...' three times, followed by family elders blessing the child."
    ],
    mantras: [
      {
        id: "namakarana_mantra_1",
        title: "Nakshatra Nama Sthapana Mantra (आश्वलायन गृह्यसूत्र १.१५)",
        sanskrit: `ॐ आयुष्यं वर्चस्यं रायस्पोषमौद्भिद्यम् ।
इदं हिरण्यं वर्चसे जैत्राय विशतादु माम् ॥
अङ्गादङ्गात्संभवसि हृदयादधिजायसे ।
आत्मा वै पुत्रनामासि स जीव शरदः शतम् ॥`,
        transliteration: `om āyuṣyaṁ varcasyaṁ rāyaspoṣamaudbhidyam |
idaṁ hiraṇyaṁ varcase jaitrāya viśatādu mām ||
aṅgādaṅgātsaṁbhavasi hṛdayādadhijāyase |
ātmā vai putranāmāsi sa jīva śaradaḥ śatam ||`,
        meaning: "May life force, spiritual radiance, abundant prosperity, and transcendent victory enter this child! Out of every limb thou art born; from the depths of the heart thou dost arise. Thou art the very Self embodied with this sacred name; live in joyful strength for a full hundred years!",
        sourceText: "Ashvalayana Grihyasutra 1.15 / Taittiriya Samhita"
      }
    ],
    essentialSamagri: [
      "Bronze thali filled with raw unpolished rice",
      "Turmeric, Sandalwood paste, Akshata",
      "New cotton garments for mother and infant",
      "Panchagavya for environmental sanctification"
    ],
    bioSpiritualSignificance: "Sanskrit phonemes carry sonic frequencies (Varna Shastra). Aligning the initial syllable with the Moon's transit through the 27 Nakshatras establishes acoustic synchronization between the individual consciousness and cosmic rhythms.",
    ayurvedicOrScientificInsight: "Psycholinguistics demonstrates that hearing one's name activates the medial prefrontal cortex and superior temporal sulcus, shaping identity and ego-coherence from early infancy."
  },
  {
    id: "nishkramana",
    canonicalNumber: 6,
    name: "Nishkramana (First Outing into Nature)",
    sanskritName: "निष्क्रमण संस्कार",
    stage: "childhood",
    stageLabel: "Childhood Sacrament (निष्क्रमण)",
    idealTime: "Fourth month after birth (on an auspicious sunny tithi)",
    scripturalAuthority: "Manu Smriti 2.34, Paraskara Grihyasutra 1.17.5-6",
    overview: "The child's first ceremonial introduction to the macrocosmic world outside the four walls of the delivery chamber. The infant is exposed to the gentle rays of Lord Surya (Sun), the soft radiance of Chandra (Moon), and the open sky (Akasha).",
    ritualProcedure: [
      "Child is bathed, dressed in fresh cotton, and blessed with sacred sandal-paste.",
      "Father steps outside the doorstep, holds the child up toward the rising morning Sun, reciting the Surya Gayatri.",
      "In the evening, the child is gently introduced to the cool waxing Moon with folded hands.",
      "Prayers to the eight directions (Ashta Dikpalas) to guard the infant across all spatial dimensions."
    ],
    mantras: [
      {
        id: "nishkramana_mantra_1",
        title: "Surya Darshana Vedic Mantra (पारस्कर गृह्यसूत्र १.१७.६)",
        sanskrit: `ॐ तच्चक्षुर्देवहितं पुरस्ताच्छुक्रमुच्चरत् ।
पश्येम शरदः शतं जीवेम शरदः शतं
शृणुयाम शरदः शतं प्र ब्रवाम शरदः शतमदीनाः स्याम शरदः शतं
भूयश्च शरदः शतात् ॥`,
        transliteration: `om taccakṣurdevahitaṁ purastācchukramuccarat |
paśyema śaradaḥ śataṁ jīvema śaradaḥ śataṁ
śṛṇuyāma śaradaḥ śataṁ pra bravāma śaradaḥ śatamadīnāḥ syāma śaradaḥ śataṁ
bhūyaśca śaradaḥ śatāt ||`,
        meaning: "That divine cosmic Eye (Surya), pure and brilliant, rises in the eastern horizon for the welfare of all beings. May we behold that divine Sun for a hundred autumns; may we live for a hundred autumns; may we hear clearly for a hundred autumns; may we speak with wisdom for a hundred autumns; may we remain free and unbowed for a hundred autumns, yea, even beyond a hundred years!",
        sourceText: "Rigveda 7.66.16 / Shukla Yajurveda 36.24"
      }
    ],
    essentialSamagri: [
      "Conch shell (Shankha) filled with pure water",
      "Flowers, Akshata, and Sandalwood paste",
      "Small mirror for auspicious reflection",
      "Brass bell for acoustic orientation"
    ],
    bioSpiritualSignificance: "Gradual exposure to natural morning light (UVB and infrared spectra) stimulates endogenous Vitamin D synthesis, enhances circadian rhythm synchronization, and prevents neonatal jaundice and seasonal mood disturbance.",
    ayurvedicOrScientificInsight: "Pediatric sensory neurology emphasizes visual distance accommodation. Introducing open vistas beyond bedroom confines sharpens binocular stereoscopic vision and vestibular spatial mapping."
  },
  {
    id: "annaprashana",
    canonicalNumber: 7,
    name: "Annaprashana (First Intake of Solid Food)",
    sanskritName: "अन्नप्राशन संस्कार",
    stage: "childhood",
    stageLabel: "Childhood Sacrament (अन्नप्राशन)",
    idealTime: "Sixth month for male infants, fifth or sixth month for female infants (when the first deciduous incisor teeth erupt)",
    scripturalAuthority: "Ashvalayana Grihyasutra 1.16, Paraskara 1.19, Manu Smriti 2.34",
    overview: "Weaning from exclusive breastfeeding to wholesome solid food. Consecrated sweet milk-rice (Payasam/Kheer) or cooked rice with ghee and honey is offered with mantras invoking Anna-Brahma, praying that food nourishes both physical cells and spiritual consciousness.",
    ritualProcedure: [
      "Homa in the Grihya fire offering oblations to Agni, Soma, and Prajapati.",
      "Preparation of pure Sattvic Payasam (indigenous rice cooked in fresh cow's milk and unrefined sugar with cardamom).",
      "The father, maternal uncle, or grandfather feeds the child a golden spoonful reciting the Annapoorna and Prajapati mantras.",
      "Traditional testing of latent vocational inclinations: objects (scripture, coin, quill, knife, cloth, soil) are placed before the child to observe natural curiosity."
    ],
    mantras: [
      {
        id: "annaprashana_mantra_1",
        title: "Anna-Brahma Ingestion Mantra (पारस्कर गृह्यसूत्र १.१९.२)",
        sanskrit: `ॐ प्राणे निविष्टोऽमृतं जुहोमि शिवो मा विशाप्रदाहाय ।
स्वाहा ॥
अन्नपतेऽन्नस्य नो देह्यनमीवस्य शुष्मिणः ।
प्र प्रदातारं तारिष ऊर्जं नो धेहि द्विपदे चतुष्पदे ॥`,
        transliteration: `om prāṇe niviṣṭo'mṛtaṁ juhomi śivo mā viśāpradāhāya |
svāhā ||
annapate'nnasya no dehyanamīvasya śuṣmiṇaḥ |
pra pradātāraṁ tāriṣa ūrjaṁ no dhehi dvipade catuṣpade ||`,
        meaning: "O Lord of Food (Annapati)! Grant us wholesome food that is free from disease and endowed with invigorating energy. Prosper the giver of food, and bestow sustained vitality upon all two-legged and four-legged beings! I offer this pure nectar into the digestive fire of Prana; may it enter beneficently without burning.",
        sourceText: "Shukla Yajurveda 11.83 / Paraskara Grihyasutra 1.19"
      }
    ],
    essentialSamagri: [
      "Silver or bronze bowl and spoon",
      "Sattvic Payasam (cow milk, raw rice, unrefined sugar, ghee, cardamom)",
      "Curd, honey, and clarified butter",
      "Sacred Kalasha and unbroken rice"
    ],
    bioSpiritualSignificance: "At 6 months, maternal iron reserves naturally decline and infant amylase/peptidase enzymatic activity matures to digest complex carbohydrates. Sanctifying food instills lifelong mindfulness regarding nutritional intake.",
    ayurvedicOrScientificInsight: "Ayurveda classifies Anna as the physical pillar (Annamaya Kosha). Charaka prescribes soft boiled rice (Shashtika Shali) prepared with digestive herbs like Pippali to prevent gut colic during weaning."
  },
  {
    id: "chudakarana",
    canonicalNumber: 8,
    name: "Chudakarana / Mundan (Tonsure & Cranial Consecration)",
    sanskritName: "चूड़ाकरण (मुण्डन) संस्कार",
    stage: "childhood",
    stageLabel: "Childhood Sacrament (चूडाकरण)",
    idealTime: "End of first year or during the third year of age",
    scripturalAuthority: "Ashvalayana Grihyasutra 1.17, Paraskara 2.1, Manu Smriti 2.35",
    overview: "The ceremonial first haircut or shaving of the head, leaving a single tuft of hair (Shikha / Chuda) at the crown over the anterior fontanelle / Sahasrara chakra. It symbolizes shedding past-life karmic residues and purifying the physical body.",
    ritualProcedure: [
      "Consecration of the razor (Kshura) with mantras invoking Brihaspati and Agni.",
      "Dampening the infant's hair with warm water mixed with cow milk and fresh curd.",
      "Gentle shaving of the head moving clockwise from right to left, while leaving the sacred crest (Shikha) undisturbed.",
      "Application of soothing cooling sandalwood paste (Chandana) or turmeric on the scalp to prevent irritation."
    ],
    mantras: [
      {
        id: "chuda_mantra_1",
        title: "Kshura Consecration & Longevity Mantra (पारस्कर गृह्यसूत्र २.१.११)",
        sanskrit: `ॐ येनावपत्सविता क्षुरेण सोमस्य राज्ञो वरुणस्य विद्वान् ।
तेन ब्रह्माणो वपतेदमस्य गोमदश्वमदयमस्तु वीरः ॥
त्र्यायुषं जमदग्नेः कश्यपस्य त्र्यायुषम् ।
यद्देवेषु त्र्यायुषं तन्नो अस्तु त्र्यायुषम् ॥`,
        transliteration: `om yenāvavatsavitā kṣureṇa somasya rājño varuṇasya vidvān |
tena brahmāṇo vapatedamasya gomadaśvamadayamastu vīraḥ ||
tryāyuṣaṁ jamadagneḥ kaśyapasya tryāyuṣam |
yaddeveṣu tryāyuṣaṁ tanno astu tryāyuṣam ||`,
        meaning: "With that sacred blade wherewith divine Savitri sheared the hair of King Soma and Varuna, therewith, O learned Brahmanas, shear the hair of this child! May he be rich in cattle, swift horses, and noble offspring. The threefold longevity of Rishi Jamadagni, the threefold longevity of Rishi Kashyapa, that longevity which resides in the Gods—may that sublime threefold lifespan be ours!",
        sourceText: "Yajurveda 3.62 / Paraskara Grihyasutra 2.1"
      }
    ],
    essentialSamagri: [
      "Clean copper or brass razor",
      "Fresh indigenous cow milk and curd",
      "Pure Malayagiri sandalwood paste",
      "Kusha grass blade",
      "Clay pot filled with cow dung to bury the shaved hair respectfully"
    ],
    bioSpiritualSignificance: "The Shikha sits directly above the intersection of the coronal and sagittal sutures (Brahmarandhra). Covering this neural vortex maintains cerebro-spinal fluid thermal balance while preventing dissipation of meditative bio-currents.",
    ayurvedicOrScientificInsight: "Sushruta Samhita states that tonsure stimulates blood circulation to the brain, relieves heaviness, strengthens optic nerve vitality, and enhances cranial bone maturation after fontanelle closure."
  },
  {
    id: "karnavedha",
    canonicalNumber: 9,
    name: "Karnavedha (Sacred Ear-Piercing for Acupressure)",
    sanskritName: "कर्णवेध संस्कार",
    stage: "childhood",
    stageLabel: "Childhood Sacrament (कर्णवेध)",
    idealTime: "Sixth, seventh, eighth, or twelfth month (or in the third/fifth year before Vidyarambha)",
    scripturalAuthority: "Sushruta Samhita Sharira Sthana 16.1, Baudhayana Grihyasutra",
    overview: "The ceremonial piercing of both earlobes with a sterile gold or silver needle. While providing an ornamental seat for divine radiance, it acts as an ancient neuro-reflexology therapy that enhances intellect and immunizes against hydrocele and sensory impairment.",
    ritualProcedure: [
      "Child is placed on maternal lap in pleasant sunlight facing eastward.",
      "Surgeon or goldsmith rubs soothing oil on the earlobes while the priest chants protective Vedic Richas.",
      "The right ear is pierced first for boys; the left ear is pierced first for girls, using a smooth sterile gold needle.",
      "Sterile sacred oil and cotton thread are inserted to allow painless wound healing."
    ],
    mantras: [
      {
        id: "karna_mantra_1",
        title: "Bhadram Karnebhih Vedic Mantra (ऋग्वेद १.८९.८)",
        sanskrit: `ॐ भद्रं कर्णेभिः शृणुयाम देवा भद्रं पश्येमाक्षभिर्यजत्राः ।
स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिर्व्यशेम देवहितं यदायुः ॥
स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः ।
स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु ॥`,
        transliteration: `om bhadraṁ karṇebhiḥ śṛṇuyāma devā bhadraṁ paśyemākṣabhiryajatrāḥ |
sthirairaṅgaistuṣṭuvāṁsastanūbhirvyaśema devahitaṁ yadāyuḥ ||
svasti na indro vṛddhaśravāḥ svasti naḥ pūṣā viśvavedāḥ |
svasti nastārkṣyo ariṣṭanemiḥ svasti no bṛhaspatirdadhātu ||`,
        meaning: "O Gods! May we with our ears hear only what is good and auspicious; may we with our eyes behold only that which is noble and pure! With firm, healthy limbs and sound bodies, singing your praises, may we attain that divine span of life allotted to us. May Indra of exalted fame grant us well-being; may Pushan the omniscient bless us; may Garuda the harbinger of safety protect us; may Brihaspati bestow supreme grace!",
        sourceText: "Rigveda 1.89.8 / Mundaka Upanishad Shanti Patha"
      }
    ],
    essentialSamagri: [
      "Sterile gold or silver needle (Suvarna / Rajata Suchi)",
      "Medicated neem or sesame oil with turmeric",
      "Sweet modaka or payasam to comfort the child",
      "White raw silk thread"
    ],
    bioSpiritualSignificance: "Auriculotherapy reveals that the ear lobe represents the inverted human brain and optic nerve reflex. Piercing the specific lobular acupressure point balances the left and right cerebral hemispheres, heightening auditory discrimination and memory.",
    ayurvedicOrScientificInsight: "Maharshi Sushruta explicitly commands Karnavedha in Sushruta Samhita: 'Karnavyadhastu Rakshartham' (piercing the ear is both for protective prophylaxis against disease and for mental sharpness)."
  },
  {
    id: "vidyarambha",
    canonicalNumber: 10,
    name: "Vidyarambha / Akshararambha (First Inscription of Knowledge)",
    sanskritName: "विद्यारम्भ (अक्षराभ्यास) संस्कार",
    stage: "educational",
    stageLabel: "Educational Sacrament (विद्यारम्भ)",
    idealTime: "Fifth year on an auspicious day (traditionally on Vijayadashami / Saraswati Pooja)",
    scripturalAuthority: "Brihaspati Smriti, Skanda Purana, Shaktisangama Tantra",
    overview: "The formal initiation into the world of letters, phonemes, and learning. The child, seated before Goddess Saraswati and Lord Ganesha, inscribes the sacred syllable 'OM' and the mother alphabet into a platter of golden rice or clean river sand.",
    ritualProcedure: [
      "Invocation of Lord Ganapati, Goddess Saraswati, and the lineage of Gurus (Guru Parampara).",
      "The father or Guru holds the child's right index finger or a gold stylus.",
      "Together they trace the sacred mantras 'ॐ नमः शिवाय' or 'ॐ श्री गणेशाय नमः' or the Matrikas (alphabets) into unpolished rice grains.",
      "The child recites the Gayatri or Saraswati Vandana and offers dakshina to the teacher."
    ],
    mantras: [
      {
        id: "vidyarambha_mantra_1",
        title: "Saraswati Vandana & Vak Sukta (ऋग्वेद १.३.११-१२)",
        sanskrit: `ॐ चोदयित्री सूनृतानां चेतन्ती सुमतीनाम् ।
यज्ञं दधे सरस्वती ॥
महो अर्णः सरस्वती प्र चेतयति केतुना ।
धियो विश्वा वि राजति ॥
सरस्वति नमस्तुभ्यं वरदे कामरूपिणि ।
विद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा ॥`,
        transliteration: `om codayitrī sūnṛtānāṁ cetantī sumatīnām |
yajñaṁ dadhe sarasvatī ||
maho arṇaḥ sarasvatī pra cetayati ketunā |
dhiyo viśvā vi rājati ||
sarasvati namastubhyaṁ varade kāmarūpiṇi |
vidyārambhaṁ kariṣyāmi siddhirbhavatu me sadā ||`,
        meaning: "Saraswati is the inspirer of truthful words and the awakener of noble minds. She upholds the divine sacrifice. With her luminous beacon, Saraswati illumines the vast ocean of cosmic knowledge and radiates through all thoughts and faculties of the mind. Salutations unto Thee, O Saraswati, giver of boons and granter of aspirations! I now commence my education; may unfailing success be mine always!",
        sourceText: "Rigveda 1.3.11-12 / Saraswati Stotram"
      }
    ],
    essentialSamagri: [
      "Wide bronze platter filled with unpolished yellow rice (Akshata) or clean sand",
      "Gold ring or pure turmeric root (Haridra)",
      "White lotus flowers and Saraswati Yantra / image",
      "Slate, chalk, or birch-bark manuscript"
    ],
    bioSpiritualSignificance: "Tracing glyphs with the finger on tactile granular media stimulates somatic motor cortex pathways and tactile proprioception, reinforcing the memory trace between phoneme (sound), grapheme (symbol), and semantic meaning.",
    ayurvedicOrScientificInsight: "Neuro-developmental psychology confirms that multi-sensory integration (vocalizing sound while tracing shape with fingertips) maximizes neural plasticity in Broca's and Wernicke's language areas."
  },
  {
    id: "upanayana",
    canonicalNumber: 11,
    name: "Upanayana (The Second Birth & Sacred Thread Initiation)",
    sanskritName: "उपनयन (यज्ञोपवीत) संस्कार",
    stage: "educational",
    stageLabel: "Educational Sacrament (उपनयन)",
    idealTime: "Between the 8th and 16th year (traditionally 8th year for seekers of spiritual wisdom)",
    scripturalAuthority: "Paraskara Grihyasutra 2.2, Ashvalayana 1.19, Manu Smriti 2.36-68",
    overview: "The quintessential spiritual initiation that transforms a youth into a 'Dvija' (twice-born). The spiritual Guru confers the sacred thread (Yajnopavita), the deer-skin garment (Ajina), the staff (Danda), and whispers the supreme Savitur Gayatri Mantra under a sacred silk canopy.",
    ritualProcedure: [
      "Purification, shave, bath, and partaking of a final maternal meal with loving devotion (Matri-bhojana).",
      "Guru invests the student with the triple-strand Yajnopavita, signifying debts to Rishis, Pitris, and Devas.",
      "Investiture with the Mounji Mekhala (girdle of Munja grass) and Bilva or Palasha staff.",
      "Gayatri Upadesha: Guru and Shishya cover themselves with a sanctified cloth, where the 24-syllable Savitur Gayatri is initiated into the student's ear.",
      "Bhikshacharana: The initiate begs for his first alms from his mother and elders, learning humility and social interdependence."
    ],
    mantras: [
      {
        id: "upanayana_mantra_1",
        title: "Yajnopavita Dharana Mantra (पारस्कर गृह्यसूत्र २.२.११)",
        sanskrit: `ॐ यज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात् ।
आयुष्यमग्र्यं प्रतिमुञ्च शुभ्रं यज्ञोपवीतं बलमस्तु तेजः ॥
यज्ञोपवीतमसि यज्ञस्य त्वा यज्ञोपवीतेनोपनह्यामि ॥`,
        transliteration: `om yajñopavītaṁ paramaṁ pavitraṁ prajāpateryatsahajaṁ purastāt |
āyuṣyamagryaṁ pratimuñca śubhraṁ yajñopavītaṁ balamastu tejaḥ ||
yajñopavītamasi yajñasya tvā yajñopavītenopanahyāmi ||`,
        meaning: "The sacred thread (Yajnopavita) is supremely holy, born together with Prajapati in the cosmic beginning. It is the foremost bestower of long life, spiritual purity, and radiant strength. I invest thee with this spotless sacred thread; may it endow thee with unbreakable inner force and spiritual illumination!",
        sourceText: "Paraskara Grihyasutra 2.2.11 / Brahmopanishad"
      },
      {
        id: "gayatri_upadesha",
        title: "The Supreme Savitur Gayatri Mantra (ऋग्वेद ३.६२.१०)",
        sanskrit: `ॐ भूर्भुवः स्वः ।
तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।
धियो यो नः प्रचोदयात् ॥`,
        transliteration: `om bhūrbhuvaḥ svaḥ |
tatsaviturvareṇyaṁ bhargo devasya dhīmahi |
dhiyo yo naḥ pracodayāt ||`,
        meaning: "We meditate upon that adorable, supreme effulgence of the divine Creator (Savitri). May that celestial Light illuminate and inspire our collective intellects and consciousness!",
        sourceText: "Rigveda 3.62.10 / Taittiriya Aranyaka 10.27"
      }
    ],
    essentialSamagri: [
      "Consecrated triple-spun cotton Yajnopavita (Janeu)",
      "Munja grass girdle (Mekhala)",
      "Staff made of Palasha, Bilva, or Khadira wood (Danda)",
      "Antelope or deer skin garment (Ajina)",
      "Begging bowl (Bhiksha-patra) and uncooked rice"
    ],
    bioSpiritualSignificance: "The Yajnopavita crosses diagonally over the heart and torso, continually pressing against the meridian points associated with the vagus nerve and cardiac plexuses, grounding the seeker in moral vigilance (Brahmacharya).",
    ayurvedicOrScientificInsight: "The discipline of Sandhyavandanam (performed thrice daily post-Upanayana) synchronizes heart rate variability through 4:4:4:4 controlled Pranayama and activates parasympathetic dominance during dawn and dusk."
  },
  {
    id: "vedarambha",
    canonicalNumber: 12,
    name: "Vedarambha (Formal Initiation into Vedic Studies)",
    sanskritName: "वेदारम्भ संस्कार",
    stage: "educational",
    stageLabel: "Educational Sacrament (वेदारम्भ)",
    idealTime: "Within one year of Upanayana, traditionally on Shravana Purnima (Upakarma)",
    scripturalAuthority: "Paraskara Grihyasutra 2.5, Vyasa Smriti, Ashvalayana Grihyasutra",
    overview: "Commencement of the rigorous formal study of the 4 Vedas (Rigveda, Yajurveda, Samaveda, Atharvaveda) along with the six Vedangas (Shiksha, Kalpa, Vyakarana, Nirukta, Chhandas, Jyotisha) under the direct tutelage of the Acharya in the Gurukula.",
    ritualProcedure: [
      "Homa offerings to Brahma, Agni, Prajapati, and the Rishis who revealed the Vedic suktas.",
      "The student formally holds the feet of the Acharya in reverence (Upasamgrahana).",
      "Chanting of the opening Richas of the Rigveda ('Agnimile Purohitam...'), Yajurveda ('Ishe Tvorje Tva...'), Samaveda ('Agna A Yahi Vitaye...'), and Atharvaveda ('Shanno Devirabhishtaye...').",
      "Vow of daily Swadhyaya (self-study) and fire offering (Samidhadhana)."
    ],
    mantras: [
      {
        id: "vedarambha_mantra_1",
        title: "Chaturveda Opening Invocations (ऋग्-यजुः-साम-अथर्व आरम्भ मन्त्राः)",
        sanskrit: `ॐ अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् । होतारं रत्नधातमम् ॥ (ऋग्वेद)
ॐ इषे त्वोर्जे त्वा वायव स्थ देवो वः सविता प्रार्पयतु श्रेष्ठतमाय कर्मणे ॥ (यजुर्वेद)
ॐ अग्न आ याहि वीतये गृणानो हव्यदातये । नि होता सत्सि बर्हिषि ॥ (सामवेद)
ॐ शं नो देवीरभीष्टये आपो भवन्तु पीतये । शं योरभि स्रवन्तु नः ॥ (अथर्ववेद)`,
        transliteration: `om agnimīḻe purohitaṁ yajñasya devamṛtvijam | hotāraṁ ratnadhātamam || (ṛgveda)
om iṣe tvorje tvā vāyava stha devo vaḥ savitā prārpayatu śreṣṭhatamāya karmaṇe || (yajurveda)
om agna ā yāhi vītaye gṛṇāno havyadātaye | ni hotā satsi barhiṣi || (sāmaveda)
om śaṁ no devīrabhīṣṭaye āpo bhavantu pītaye | śaṁ yorabhi sravantu naḥ || (atharvaveda)`,
        meaning: "Rigveda: I praise Agni, the chosen priest, the divine minister of sacrifice, the invoker, the bestower of supreme spiritual treasures. Yajurveda: For strength, for spiritual vigor we invoke you; may God Savitri direct you toward the highest actions. Samaveda: Come, O Agni, to our feast, praised for the offering; sit down as our hotri upon the sacred kusha. Atharvaveda: May the celestial divine waters be auspicious for our aspirations and nourishment; may they flow with blessings and joy!",
        sourceText: "Rigveda 1.1.1 / Shukla Yajurveda 1.1 / Samaveda 1.1 / Atharvaveda 1.1.1"
      }
    ],
    essentialSamagri: [
      "Sacred fuel sticks (Samidha of Palasha/Peepal)",
      "Palm-leaf or paper Vedic pothis",
      "Ghee lamp and pure water pot",
      "Kusha Asana for sitting in Padmasana"
    ],
    bioSpiritualSignificance: "The oral memorization and tonal recitation (Udatta, Anudatta, Svarita) of Vedic meters activate both hemispheres of the brain, creating structural neuroplastic changes in speech processing, working memory, and hippocampus volume.",
    ayurvedicOrScientificInsight: "Modern MRI studies at the National Brain Research Centre (NBRC) on Vedic Pandits demonstrate profound cortical thickening and massive grey matter expansion in memory and temporal processing zones ('The Sanskrit Effect')."
  },
  {
    id: "keshanta",
    canonicalNumber: 13,
    name: "Keshanta / Godana (First Shave of Beard & Rite of Adulthood)",
    sanskritName: "केशान्त (गोदान) संस्कार",
    stage: "educational",
    stageLabel: "Educational Sacrament (केशान्त)",
    idealTime: "Sixteenth year of life, marking physical puberty and the emergence of facial hair",
    scripturalAuthority: "Ashvalayana Grihyasutra 1.18, Paraskara 2.1, Manu Smriti 2.65",
    overview: "Similar in ritual structure to Chudakarana, but applied to the first shaving of facial hair and beard upon attaining manhood. It is traditionally accompanied by the gift of a cow (Godana) to the preceptor, reaffirming solemn ethical vows of Brahmacharya.",
    ritualProcedure: [
      "Consecration of the razor with solar and Agni mantras.",
      "First sacred shearing of the youth's beard and mustache under the guidance of elders.",
      "Bathing, offering of sweet modaka and fresh cloth.",
      "Gifting of a milch cow (or symbolic dakshina) to the Guru in gratitude for moral guardianship."
    ],
    mantras: [
      {
        id: "keshanta_mantra_1",
        title: "Keshanta Vedic Blessing Mantra (आश्वलायन गृह्यसूत्र १.१८)",
        sanskrit: `ॐ येनावपद्बृहस्पतिरिन्द्रस्येन्द्रायुषं घ्नतः ।
तेन ते वपामि ब्रह्मणा जीवातवे जीवनाय वर्चसे ॥
शुद्धः पूतः कर्मण्यः समर्थः स्वधर्ममनुतिष्ठ ॥`,
        transliteration: `om yenāvapadbṛhaspatirindrasyendrāyuṣaṁ ghnataḥ |
tena te vapāmi brahmaṇā jīvātave jīvanāya varcase ||
śuddhaḥ pūtaḥ karmaṇyaḥ samarthaḥ svadharmamanutiṣṭha ||`,
        meaning: "With that sacred wisdom wherewith Brihaspati shaved the radiant visage of Indra to vanquish impediments and grant longevity, therewith do I shave thee with Vedic grace for a luminous, virtuous, and glorious life. Pure, consecrated, diligent, and capable—stand steadfast in the fulfillment of thy Svadharma!",
        sourceText: "Ashvalayana Grihyasutra 1.18 / Paraskara 2.1"
      }
    ],
    essentialSamagri: [
      "Barber's ceremonial brass mirror and razor",
      "Sandalwood paste and cooling rose water",
      "Cow (Godana) or symbolic golden token for Guru Dakshina",
      "Fresh white dhoti and uttariya"
    ],
    bioSpiritualSignificance: "Psychologically acknowledges the transition from adolescence to physical and mental maturity. Channels the surging androgenic vitality into focused intellectual endurance and self-restraint.",
    ayurvedicOrScientificInsight: "Charaka explains that around 16 years (Shodasha Varsha), Shukra Dhatu (reproductive essence) permeates all somatic tissues, requiring purposeful physical exercise (Vyayama) and moral discipline to prevent metabolic dissipation."
  },
  {
    id: "samavartana",
    canonicalNumber: 14,
    name: "Samavartana / Snana (Convocation & Graduation from Gurukula)",
    sanskritName: "समावर्तन (स्नान) संस्कार",
    stage: "educational",
    stageLabel: "Educational Sacrament (समावर्तन)",
    idealTime: "Upon completion of formal Vedic and professional studies (around age 21 to 24)",
    scripturalAuthority: "Taittiriya Upanishad 1.11, Paraskara 2.6, Ashvalayana 3.8",
    overview: "The convocation and homecoming rite marking graduation. The Brahmachari takes the ceremonial bath with consecrated water from eight pitchers, casting off the student garb to become a 'Snataka'. The Guru delivers the immortal convocation address found in Taittiriya Upanishad ('Satyam Vada, Dharmam Chara...').",
    ritualProcedure: [
      "The student bathes using consecrated waters from 8 fragrant Kalashas (Snana ceremony).",
      "Surrender of the student staff, deer skin, and munja girdle into the sacred fire.",
      "Adorning fine garments, ear-rings, turban, shoes, and umbrella indicative of a responsible societal member (Snataka).",
      "The Guru's Farewell Exhortation (Taittiriya Shikshavalli) instructing the graduate to speak truth, live in righteousness, honor parents, and serve society."
    ],
    mantras: [
      {
        id: "samavartana_upanishad_command",
        title: "The Immortal Taittiriya Convocation Address (तैत्तिरीयोपनिषद् १.११)",
        sanskrit: `ॐ वेदमनूच्याचार्योऽन्तेवासिनमनुशास्ति —
सत्यं वद । धर्मं चर । स्वाध्यायान्मा प्रमदः ।
आचार्याय प्रियं धनमाहृत्य प्रजातन्तुं मा व्यवच्छेत्सीः ।
सत्यान्न प्रमदितव्यम् । धर्मान्न प्रमदितव्यम् । कुशलान्न प्रमदितव्यम् ।
मातृदेवो भव । पितृदेवो भव । आचार्यदेवो भव । अतिथिदेवो भव ॥`,
        transliteration: `om vedamanūcyācāryo'ntevāsinamanuśāsti —
satyaṁ vada | dharmaṁ cara | svādhyāyānmā pramadaḥ |
ācāryāya priyaṁ dhanamāhṛtya prajātantuṁ mā vyavacchetsīḥ |
satyānna pramaditavyam | dharmānna pramaditavyam | kuśalānna pramaditavyam |
mātṛdevo bhava | pitṛdevo bhava | ācāryadevo bhava | atithidevo bhava ||`,
        meaning: "Having taught the Veda, the teacher instructs the departing pupil: Speak the truth! Walk in the path of Dharma! Never neglect self-study! Having offered worthy wealth to the preceptor, enter the world and do not cut off the lineage of noble progeny. Swerve not from Truth; swerve not from Righteousness; neglect not your material and physical well-being. Behold your Mother as a God! Behold your Father as a God! Behold your Teacher as a God! Behold the Guest as a God!",
        sourceText: "Taittiriya Upanishad, Shikshavalli 1.11.1-2"
      }
    ],
    essentialSamagri: [
      "Eight sacred brass pitchers (Kalashas) filled with herb-infused river waters",
      "Snataka insignia: fine silk Uttariya, umbrella (Chhatra), leather sandals (Upana), and staff",
      "Sandalwood, perfumes, and floral garland",
      "Guru Dakshina offerings"
    ],
    bioSpiritualSignificance: "Serves as the vital cognitive threshold between the sheltered, ascetic life of the Gurukula and the demanding ethical responsibilities of the householder (Grihastha Ashrama).",
    ayurvedicOrScientificInsight: "Behavioral transition psychology confirms that structured graduation rites dramatically lower post-academic anxiety and establish cognitive readiness for civic leadership."
  },
  {
    id: "vivaha",
    canonicalNumber: 15,
    name: "Vivaha (Sacred Matrimony & Cosmic Union)",
    sanskritName: "विवाह संस्कार",
    stage: "grihastha",
    stageLabel: "Grihastha Sacrament (विवाह)",
    idealTime: "Upon completion of education and attainment of maturity in suitable astrological compatibility (Yoni, Gana, Rashi)",
    scripturalAuthority: "Rigveda 10.85 (Surya-Vivaha Sukta), Paraskara Grihyasutra 1.4-9, Manu Smriti 3.20-35",
    overview: "The most foundational socio-spiritual sacrament of Sanatan Dharma. It unites two souls as equal partners (Dharmapatni and Dharmapati) to pursue the four purusharthas (Dharma, Artha, Kama, Moksha). Contains canonical rites: Kanyadana, Panigrahana, Laja Homa, Saptapadi, and Arundhati Darshana.",
    ritualProcedure: [
      "Kanyadana: Parents offer the bride's hand, seeking the supreme fruit of Dharma and spiritual lineage.",
      "Panigrahana: The groom takes the bride's right hand with mantras pledging lifelong fidelity and cosmic partnership.",
      "Laja Homa: Parched rice grains offered into the fire by bride and groom, praying for family prosperity and health.",
      "Saptapadi: The seven sacred steps together around the sacrificial Agni, establishing the seven sacred covenants.",
      "Ashmarohana: The bride places her foot on a firm stone, symbolizing unwavering steadfastness against life's tribulations.",
      "Arundhati-Dhruva Darshana: Gazing upon the North Star (Dhruva) for constancy and the binary star Arundhati-Vasishtha for marital equality."
    ],
    mantras: [
      {
        id: "saptapadi_mantra",
        title: "The Seven Sacred Steps Covenant (सप्तपदी मन्त्र - पारस्कर गृह्यसूत्र १.८)",
        sanskrit: `ॐ एकमिषे विष्णुस्त्वान्वेतु ।
द्वे ऊर्जे विष्णुस्त्वान्वेतु ।
त्रीणि रायस्पोषाय विष्णुस्त्वान्वेतु ।
चत्वारि मायोभवाय विष्णुस्त्वान्वेतु ।
पञ्च पशुभ्यो विष्णुस्त्वान्वेतु ।
षड् ऋतुभ्यो विष्णुस्त्वान्वेतु ।
सखे सप्तपदा भव सा मामनुव्रता भव विष्णुस्त्वान्वेतु ॥
सखा सप्तपदा बभूव सख्यं ते गमेयम् ॥`,
        transliteration: `om ekamiṣe viṣṇustvānvetu |
dve ūrje viṣṇustvānvetu |
trīṇi rāyaspoṣāya viṣṇustvānvetu |
catvāri māyobhavāya viṣṇustvānvetu |
pañca paśubhyo viṣṇustvānvetu |
ṣaḍ ṛtubhyo viṣṇustvānvetu |
sakhe saptapadā bhava sā māmanuvratā bhava viṣṇustvānvetu ||
sakhā saptapadā babhūva sakhyaṁ te gameyam ||`,
        meaning: "Step 1: May Vishnu accompany thee for food and nourishment; Step 2: for physical and mental vitality; Step 3: for righteous prosperity; Step 4: for happiness and spiritual joy; Step 5: for progeny and livestock; Step 6: for health through all the six seasons; Step 7: With seven steps thou hast become my eternal friend and companion! May Vishnu guide our united journey. Having walked seven steps together, we have attained lifelong friendship; never shall I drift from thy companionship, nor thou from mine!",
        sourceText: "Paraskara Grihyasutra 1.8.1-2 / Shukla Yajurveda"
      },
      {
        id: "panigrahana_mantra",
        title: "Rigvedic Hand-Taking Covenant (ऋग्वेद १०.८५.३६)",
        sanskrit: `ॐ गृभ्णामि ते सौभगत्वाय हस्तं मया पत्या जरदष्टिर्यथासः ।
भगो अर्यमा सविता पुरन्धिर्मह्यं त्वादुर्गार्हपत्याय देवाः ॥`,
        transliteration: `om gṛbhṇāmi te saubhagatvāya hastaṁ mayā patyā jaradaṣṭiryathāsaḥ |
bhago aryamā savitā purandhirmahyaṁ tvāadurgārhapatyāya devāḥ ||`,
        meaning: "I take thy hand for supreme auspiciousness and well-being, that thou mayest live to a ripe old age with me as thy husband. The deities Bhaga (fortune), Aryaman (nobility), Savitri (vitality), and Purandhi (abundance) have bestowed thee upon me to rule jointly as sovereign householders!",
        sourceText: "Rigveda 10.85.36 / Ashvalayana 1.7"
      }
    ],
    essentialSamagri: [
      "Sacred sacrificial hearth (Vivaha Homa Kunda) and wood",
      "Parched paddy grains (Laja / Kheel)",
      "Firm grinding stone (Shila) for Ashmarohana",
      "Yellow sacred thread and turmeric-tinted Mangalasutra",
      "Red kumkuma and pure cow ghee"
    ],
    bioSpiritualSignificance: "Vivaha is not a civil contract but a sacramental merger of two biological lines (Gotras) and psychic fields into a single united entity upholding the five Great Sacrifices (Pancha Maha-Yajnas) for society.",
    ayurvedicOrScientificInsight: "Epithalamic synchronization between married couples engaging in cooperative spiritual routines optimizes neuro-endocrinal balance, lower cortisol levels, and correlates with increased longevity."
  },
  {
    id: "antyeshti",
    canonicalNumber: 16,
    name: "Antyeshti (The Final Sacrifice & Dissolution into Light)",
    sanskritName: "अन्त्येष्टि संस्कार",
    stage: "transcendent",
    stageLabel: "Transcendent Sacrament (अन्त्येष्टि)",
    idealTime: "Immediately following physical demise",
    scripturalAuthority: "Rigveda 10.14-18 (Yama & Pitri Suktas), Baudhayana Pitrimedha Sutras, Garuda Purana",
    overview: "The sixteenth and concluding sacrament of human embodiment. The mortal body—which was sustained throughout life by food, breath, and light—is returned through fire (Agni) back into the 5 cosmic elements (Pancha Mahabhutas), while the immortal Jivatman ascends onward.",
    ritualProcedure: [
      "Purification of the deceased with Gangajal, application of sandalwood and sacred Tulasi.",
      "The body is laid on a bier facing south (the realm of Yama / Pitris).",
      "Kravyada Agni: The sacred funeral pyre is prepared using sandal or wood; the eldest son or kin circumambulates clockwise.",
      "Offering of Ghee oblations with Vedic mantras requesting Agni to consume only the mortal impurities and escort the subtle soul toward the realm of light.",
      "Asthi Sanchayana & Tarpana: Gathering of the sacred ashes on the 3rd or 4th day to be consigned into holy rivers, followed by Shraddha rituals."
    ],
    mantras: [
      {
        id: "antyeshti_agni_mantra",
        title: "Rigvedic Agni-Samarpanam Mantra (ऋग्वेद १०.१६.१-३)",
        sanskrit: `ॐ मैनमग्ने वि दहो माभि शोचो मास्य त्वचं चिक्षिपो मा शरीरम् ।
यदा शृतं कृणवो जातवेदोऽथेमेनं प्र हिणुतात्पितृभ्यः ॥
सूर्यं चक्षुर्गच्छतु वातमात्मा द्यां च गच्छ पृथिवीं च धर्मणा ।
अपो वा गच्छ यदि तत्र ते हितमोषधीषु प्रति तिष्ठा शरीरैः ॥
अजो भागस्तपसा तं तपस्व तं ते शोचिस्तपतु तं ते अर्चिः ।
यास्ते शिवास्तन्वो जातवेदस्ताभिर्वहैनं सुकृतामु लोकम् ॥`,
        transliteration: `om mainamagne vi daho mābhi śoco māsya tvacaṁ cikṣipo mā śarīram |
yadā śṛtaṁ kṛṇavo jātavedo'themenaṁ pra hiṇutātpitṛbhyaḥ ||
sūryaṁ cakṣurgacchatu vātamātmā dyāṁ ca gaccha pṛthivīṁ ca dharmaṇā |
apo vā gaccha yadi tatra te hitamoṣadhīṣu prati tiṣṭhā śarīraiḥ ||
ajo bhāgastapasā taṁ tapasva taṁ te śocistapatu taṁ te arciḥ |
yāste śivāstanvo jātavedastābhirvahainaṁ sukṛtāmu lokam ||`,
        meaning: "Burn him not completely, O Agni, nor torment his essence! Consume not his subtle core nor his essential being! When thou hast refined him, O Jatavedas (knower of all beings), then dispatch him to the realm of the ancestors! May the eye dissolve into the Sun; may the life-breath merge into the Wind; go unto Heaven or Mother Earth according to thy merit; go unto the cosmic waters if that be thy path, or find restful dwelling in plants! But as for his unborn, immortal spiritual spark (Ajo bhagah)—warm it with thy benevolent flame, and with thy most gracious forms, convey him unto the realms of the righteous!",
        sourceText: "Rigveda 10.16.1-4 / Shukla Yajurveda 35"
      }
    ],
    essentialSamagri: [
      "Wood of Sandalwood, Palasha, or Mango",
      "Bhimseni camphor and pure indigenous ghee",
      "Fresh holy river water (Gangajal)",
      "Tulasi leaves and Kusha grass",
      "Clay pots for burning embers and Asthi collection"
    ],
    bioSpiritualSignificance: "Cremation breaks any lingering subtle identification of the departed soul with its physical shell, allowing the Jivatman to detach peacefully and continue its evolutionary trajectory without haunting earthly attachments.",
    ayurvedicOrScientificInsight: "From an environmental and thermodynamic viewpoint, rapid thermal decomposition prevents bacterial proliferation, completely sanitizes viral vectors, and recycles calcium, carbon, and phosphorus minerals back into the cosmic biogeochemical cycle."
  }
];

export const GAUTAMA_40_SAMSKARAS: Gautama40Item[] = [
  {
    category: "Paka-Yajnas (पाकयज्ञाः)",
    items: [
      {
        sanskritName: "अष्टका (Ashtaka)",
        englishName: "Rites on the 8th day of waning fortnights",
        description: "Oblations offered during the cold months of Hemanta and Shishira to the ancestors and Vishvedevas."
      },
      {
        sanskritName: "पार्वण (Parvana)",
        englishName: "New and Full Moon Observances",
        description: "Monthly oblations performed on Amavasya and Purnima to honor cosmic cycles of light and darkness."
      },
      {
        sanskritName: "श्राद्ध (Shraddha)",
        englishName: "Ancestral Memorial Feasts",
        description: "Annual and periodic offerings of Pinda, water, and cooked rice expressing eternal gratitude to the ancestral lineage."
      },
      {
        sanskritName: "श्रावणी (Shravani / Upakarma)",
        englishName: "Annual Renewal of Vedic Study",
        description: "Performed on Shravana Purnima; changing of the sacred thread and repenting for unintentional Vedic omissions."
      },
      {
        sanskritName: "आग्रहायणी (Agrahayani)",
        englishName: "Post-Harvest Winter Thanksgiving",
        description: "Performed on the full moon of Margashirsha celebrating the winter harvest and leveling the ground."
      },
      {
        sanskritName: "चैत्री (Chaitri)",
        englishName: "Spring Floral Sacrament",
        description: "Performed on the full moon of Chaitra, welcoming Vasanta ritu with oblations to the celestial singers."
      },
      {
        sanskritName: "आश्वयुजी (Ashvayuji)",
        englishName: "Autumn Equinox Equine Blessing",
        description: "Performed on the full moon of Ashvina, praying for healthy livestock, steeds, and victory over inertia."
      }
    ]
  },
  {
    category: "Havir-Yajnas (हविर्यज्ञाः)",
    items: [
      {
        sanskritName: "अग्न्याधान (Agnyadhana)",
        englishName: "Initial Consecration of the Sacred Fires",
        description: "Formal establishment of the three sacred Vedic fires (Garhapatya, Ahavaniya, Dakshinagni) by a married householder."
      },
      {
        sanskritName: "अग्निहोत्र (Agnihotra)",
        englishName: "Twice-Daily Solar Oblations",
        description: "Perpetual morning and evening oblations of cow milk and ghee performed at precise sunrise and sunset moments."
      },
      {
        sanskritName: "दर्श-पूर्णमास (Darsha-Purnamasa)",
        englishName: "Bi-Weekly New and Full Moon Sacrifices",
        description: "Extensive Vedic havir-yajna using Purodasha (consecrated rice cakes) sustaining cosmic Rta."
      },
      {
        sanskritName: "चातुर्मास्य (Chaturmasya)",
        englishName: "Four-Month Seasonal Sacrifices",
        description: "Three major seasonal rites (Vaishvadeva, Varunapraghasa, Sakamedha) marking the advent of spring, monsoon, and autumn."
      },
      {
        sanskritName: "आग्रयण (Agrayana)",
        englishName: "First Fruits Offering",
        description: "Offering the very first grains harvested in the field to Agni and Indra before the family partakes of new grain."
      },
      {
        sanskritName: "निरूढपशुबन्ध (Nirudhaprashubandha)",
        englishName: "Annual Sacerdotal Offering",
        description: "A major annual havir-yajna establishing the tethering pillar (Yupa) and offering symbolic sacrificial paste."
      },
      {
        sanskritName: "सौत्रामणी (Sautramani)",
        englishName: "Therapeutic Consecration of Indra",
        description: "Sacred rite restoring divine health, intellect, and digestive fire, invoking Ashvins and Saraswati."
      }
    ]
  },
  {
    category: "Soma-Yajnas (सोमयज्ञाः)",
    items: [
      {
        sanskritName: "अग्निष्टोम (Agnishtoma)",
        englishName: "The Praise of Fire and Soma Extraction",
        description: "The prototypical 5-day Soma sacrifice featuring the pressing of Soma stalks, Pravargya, and chanting of Samans."
      },
      {
        sanskritName: "अत्यग्निष्टोम (Atyagnishtoma)",
        englishName: "Extended Agnishtoma with Shodashi Stotra",
        description: "Features sixteen stotras and shastras invoking Indra in his victorious solar splendor."
      },
      {
        sanskritName: "उक्थ्य (Ukthya)",
        englishName: "The Sacrifice of Recited Praise",
        description: "Includes additional Uktha stotras emphasizing the rhythmic, musical power of Vedic metric recitation."
      },
      {
        sanskritName: "षोडशी (Shodashi)",
        englishName: "The Sixteen-Limbed Sacrament",
        description: "Incorporates a specific chalice for the sixteenth stotra chanted at twilight."
      },
      {
        sanskritName: "वाजपेय (Vajapeya)",
        englishName: "The Drink of Supreme Vitality & Chariot Race",
        description: "A grand coronation sacrifice with 17 cups of Surasoma and an auspicious chariot race signifying sovereign leadership."
      },
      {
        sanskritName: "अतिरात्र (Atiratra)",
        englishName: "The Overnight Vigil of Hymns",
        description: "Extends continuously through the night without sleep, chanting Samans until the crack of dawn."
      },
      {
        sanskritName: "अप्तोर्याम (Aptoryama)",
        englishName: "The Universal Healing Soma",
        description: "The most elaborate Soma-yajna performed to remove severe collective epidemics, drought, or societal unrest."
      }
    ]
  },
  {
    category: "Atma-Gunas (आत्मगुणाः)",
    items: [
      {
        sanskritName: "दया (Daya)",
        englishName: "Universal Compassion",
        description: "Unconditional empathy and goodwill toward all sentient beings without distinction."
      },
      {
        sanskritName: "क्षान्ति (Kshanti)",
        englishName: "Patient Forbearance",
        description: "Inner composure and absence of anger even when provoked, wronged, or insulted."
      },
      {
        sanskritName: "अनसूया (Anasuya)",
        englishName: "Freedom from Jealousy",
        description: "Total absence of envy; celebrating the virtues, prosperity, and spiritual advancement of others."
      },
      {
        sanskritName: "शौच (Shaucha)",
        englishName: "Outer & Inner Purity",
        description: "Physical cleanliness coupled with spotless moral and mental purity of intent."
      },
      {
        sanskritName: "अनायास (Anayasa)",
        englishName: "Absence of Haste & Mental Strain",
        description: "Effortless action; performing duties with poise and grace without frantic agitation."
      },
      {
        sanskritName: "मङ्गल (Mangala)",
        englishName: "Universal Auspiciousness",
        description: "Radiating positive energy, blessing others, and seeking the holistic welfare of the cosmos."
      },
      {
        sanskritName: "अकार्पण्य (Akarpanya)",
        englishName: "Generous Magnanimity",
        description: "Open-handed liberality; sharing resources, knowledge, and kindness without miserliness."
      },
      {
        sanskritName: "अस्पृहा (Aspriha)",
        englishName: "Freedom from Greed & Covetousness",
        description: "Contentment with what is righteously acquired; absence of feverish craving for others' possessions."
      }
    ]
  }
];
