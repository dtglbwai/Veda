import { DeityPoojaVidhi } from "../types/poojaVidhiTypes";

export const DEITY_POOJA_VIDHIS: DeityPoojaVidhi[] = [
  // 1. SRI GANAPATI POOJA VIDHI
  {
    id: "ganesha",
    name: "Sri Mahaganapati Pooja Vidhi",
    sanskritName: "श्री महागणपति पूजा विधि",
    title: "Vighnaharta & Prathama Pujya Ganapati Vidhi",
    deity: "Lord Ganesha / Vinayaka",
    scripturalAuthority: "Ganapati Atharvashirsha (Atharvaveda) & Mudgala Purana",
    idealTime: "Brahma Muhurta or Chaturthi Tithi (Shukla/Krishna)",
    samagriList: [
      { item: "Durva Grass", sanskrit: "दूर्वादल", quantity: "21 blades tied in bundles of two", purpose: "Highest pleasing coolant herb to Ganesha's Agni" },
      { item: "Modaka / Ladoo", sanskrit: "मोदक", quantity: "21 pieces", purpose: "Represents Mahat-tattva spiritual wisdom" },
      { item: "Red Hibiscus Flower", sanskrit: "जवापुष्प", quantity: "11 or 21 flowers", purpose: "Red wavelength resonates with Muladhara energy" },
      { item: "Sindoor / Roli", sanskrit: "सिन्दूर", quantity: "1 small box", purpose: "Anointed on forehead and trunk" },
      { item: "Janeu (Sacred Thread)", sanskrit: "यज्ञोपवीत", quantity: "1 pair", purpose: "Offered to the divine belly and left shoulder" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Ganapati Dhyana & Atharvashirsha Shanti Mantra",
        sanskritName: "गणपति ध्यानम् एवं शान्तिमन्त्रः",
        category: "purvanga",
        kriyaInstruction: "Fold hands in Namaskara Mudra, visualizing the four-armed red-complexioned Vinayaka seated on a red lotus holding noose, goad, tusk, and blessing gesture.",
        itemsNeeded: ["Red flowers", "Akshata"],
        sacredSoundPrompt: "om",
        mantras: [
          {
            id: "ganesha-dhyana-1",
            title: "Ganapati Atharvashirsha Opening Shanti Patha",
            sanskrit: "ॐ भद्रं कर्णेभिः शृणुयाम देवा भद्रं पश्येमाक्षभिर्यजत्राः ।\nस्थिरैरङ्गैस्तुष्टुवांसस्तनूभिर्व्यशेम देवहितं यदायूः ॥\nॐ नमस्ते गणपतये । त्वमेव प्रत्यक्षं तत्त्वमसि ।\nत्वमेव केवलं कर्ताऽसि । त्वमेव केवलं धर्ताऽसि ।\nत्वमेव केवलं हर्ताऽसि । त्वमेव सर्वं खल्विदं ब्रह्मासि ।\nत्वं साक्षादात्माऽसि नित्यम् ॥",
            transliteration: "om bhadraṁ karṇebhiḥ śṛṇuyāma devā bhadraṁ paśyemākṣabhiryajatrāḥ |\nsthirairaṅgaistuṣṭuvāṁsastanūbhirvyaśema devahitaṁ yadāyūḥ ||\nom namaste gaṇapataye | tvameva pratyakṣaṁ tattvamasi |\ntvameva kevalaṁ kartā'si | tvameva kevalaṁ dhartā'si |\ntvameva kevalaṁ hartā'si | tvameva sarvaṁ khalvidaṁ brahmāsi |\ntvaṁ sākṣādātmā'si nityam ||",
            meaning: "O Devas, may we hear with our ears what is auspicious, may we see with our eyes what is noble. Om, Salutations unto You, O Ganapati! You alone are the evident Ultimate Reality (Tattva). You alone are the Sole Creator, Sustainer, and Dissolver of the cosmos. Verily, You are all this Brahman; You are the eternal Indwelling Soul.",
            sourceText: "Atharvavediya Ganapati Upanishad",
            kriya: "Offer red flowers with yellow akshata at Lord Ganesha's lotus feet."
          }
        ]
      },
      {
        stepNumber: 2,
        stepName: "21 Durva Dala Samarpana with Ekavimshati Namavali",
        sanskritName: "एकविंशति दूर्वादल समर्पणम् (२१ नाम)",
        category: "pradhana",
        kriyaInstruction: "Offer 21 pairs of green Durva grass blades one by one onto Lord Ganesha's feet, belly, and crown while reciting the 21 sacred names.",
        itemsNeeded: ["21 Durva bundles (3 blades each)", "Water"],
        sacredSoundPrompt: "bell",
        mantras: [
          {
            id: "durva-21",
            title: "21 Durva Samarpana Namavali",
            sanskrit: "१. ॐ गणाधीशाय नमः दूर्वादलं समर्पयामि ।\n२. ॐ उमापुत्राय नमः ।\n३. ॐ विघ्ननाशनाय नमः ।\n४. ॐ विनायकाय नमः ।\n५. ॐ ईशपुत्राय नमः ।\n६. ॐ सर्वसिद्धिप्रदाय नमः ।\n७. ॐ एकदन्ताय नमः ।\n८. ॐ इभवक्त्राय नमः ।\n९. ॐ मूषकवाहनाय नमः ।\n१०. ॐ कुमारगुरवे नमः ।\n११. ॐ कपिलाय नमः ।\n१२. ॐ गजकर्णकाय नमः ।\n१३. ॐ लम्बोदराय नमः ।\n१४. ॐ विकटाय नमः ।\n१५. ॐ विघ्नराजाय नमः ।\n१६. ॐ धूम्रकेतवे नमः ।\n१७. ॐ गणाध्यक्षाय नमः ।\n१८. ॐ भालचन्द्राय नमः ।\n१९. ॐ गजाननाय नमः ।\n२०. ॐ वक्रतुण्डाय नमः ।\n२१. ॐ शूर्पकर्णाय नमः दूर्वादलं समर्पयामि ॥",
            transliteration: "1. om gaṇādhīśāya namaḥ dūrvādalaṁ samarpayāmi |\n2. om umāputrāya namaḥ |\n3. om vighnanāśanāya namaḥ |\n4. om vināyakāya namaḥ | ... 21. om śūrpakarṇāya namaḥ dūrvādalaṁ samarpayāmi ||",
            meaning: "Offering sacred Durva grass to: The Lord of Ganas, Son of Uma, Destroyer of Obstacles, Vinayaka, Son of Shiva, Bestower of all Siddhis, One-tusked, Elephant-faced, Riding the mouse, Master of Kumara, Kapila, Elephant-eared, Large-bellied, Colossal, King of Obstacles, Smoke-hued, Presiding Lord, Moon-crested, Curved-trunk, and Winnowing-eared Lord.",
            sourceText: "Mudgala Purana & Ganesha Sahasranama",
            kriya: "Dip each Durva pair in water and place on the deity."
          }
        ]
      },
      {
        stepNumber: 3,
        stepName: "Modaka Naivedyam & Ganapati Gayatri",
        sanskritName: "मोदक नैवेद्यम् एवं गणपति गायत्री",
        category: "pradhana",
        kriyaInstruction: "Offer warm steamed modakas with pure desi cow ghee, circling water around the platter, waving the fragrance toward Ganesha.",
        itemsNeeded: ["21 Modakas / Ladoos", "Ghee", "Water spoon"],
        sacredSoundPrompt: "om",
        mantras: [
          {
            id: "ganesha-gayatri",
            title: "Ganapati Gayatri & Modaka Samarpan",
            sanskrit: "ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि ।\nतन्नो दन्तिः प्रचोदयात् ॥\nमोदकानां सहस्रं तु यस्तु गणपतेरर्पयेत् ।\nस वाञ्छितफलं लब्ध्वा सिद्धिं प्राप्नोत्यसंशयम् ॥ ॐ श्रीमहागणपतये नमः मोदकनैवेद्यं समर्पयामि ।",
            transliteration: "om ekadantāya vidmahe vakratuṇḍāya dhīmahi |\ntanno dantiḥ pracodayāt ||\nmodakānāṁ sahasraṁ tu yastu gaṇapaterarpayet |\nsa vāñchitaphalaṁ labdhvā siddhiṁ prāpnotyasaṁśayam ||",
            meaning: "May we realize the One-Tusked Divinity, may we meditate upon Him with the curved trunk; may that Elephant-Faced Lord inspire and illuminate our intellect. He who offers modakas to Ganapati receives all desired fruits and attains spiritual perfection.",
            sourceText: "Ganapati Atharvashirsha & Padma Purana",
            kriya: "Wave water around the modakas and recite the 5 Prana offerings."
          }
        ]
      }
    ],
    specialStotras: [
      {
        title: "Sankata Nashana Ganesha Stotram (by Narada)",
        sanskrit: "प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।\nभक्तावासं स्मरेन्नित्यमायुःकामार्थसिद्धये ॥\nप्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम् ।\nतृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम् ॥\nलम्बोदरं पञ्चमं च षष्ठं विकटमेव च ।\nसप्तमं विघ्नराजेन्द्रं धूम्रवर्णं तथाष्टमम् ॥\nनवमं भालचन्द्रं च दशमं तु विनायकम् ।\nएकादशं गणपतिं द्वादशं तु गजाननम् ॥\nद्वादशैतानि नामानि त्रिसन्ध्यं यः पठेन्नरः ।\nन च विघ्नभयं तस्य सर्वसिद्धिकरं प्रभो ॥",
        transliteration: "praṇamya śirasā devaṁ gaurīputraṁ vināyakam |\nbhaktāvāsaṁ smarennityamāyuḥkāmārthasiddhaye ||\nprathamaṁ vakratuṇḍaṁ ca ekadantaṁ dvitīyakam | ... dvādaśaitāni nāmāni trisandhyaṁ yaḥ paṭhennaraḥ |\nna ca vighnabhayaṁ tasya sarvasiddhikaraṁ prabho ||",
        meaning: "Bowing the head to the divine son of Gauri, Vinayaka, one should remember His twelve names three times a day to overcome all obstacles and attain longevity, wealth, and spiritual fulfillment."
      }
    ],
    aartiText: {
      title: "Sri Ganesha Aarti (Jai Ganesh Jai Ganesh Deva)",
      sanskrit: "जय गणेश जय गणेश जय गणेश देवा । माता जाकी पार्वती पिता महादेवा ॥\nएक दन्त दयावन्त चार भुजाधारी । माथे सिन्दूर सोहे मूसे की सवारी ॥\nपान चढ़े फूल चढ़े और चढ़े मेवा । लड्डुअन का भोग लगे सन्त करें सेवा ॥\nअन्धे को आँख देत कोढ़िन को काया । बांझन को पुत्र देत निर्धन को माया ॥\n'सूर' श्याम शरण आए सफल कीजे सेवा । जय गणेश जय गणेश जय गणेश देवा ॥",
      transliteration: "jaya gaṇeśa jaya gaṇeśa jaya gaṇeśa devā | mātā jākī pārvatī pitā mahādevā ||"
    }
  },

  // 2. SRI SHIVA PUJA & RUDRABHISHEKA VIDHI
  {
    id: "shiva",
    name: "Sri Shiva Pooja & Rudrabhisheka Vidhi",
    sanskritName: "श्री शिव पूजा एवं रुद्राभिषेक विधानम्",
    title: "Sada-Shiva & Lingodbhava Abhisheka Vidhi",
    deity: "Lord Shiva / Mahadeva",
    scripturalAuthority: "Sri Rudram (Krishna Yajurveda Taittiriya Samhita 4.5) & Shiva Purana",
    idealTime: "Pradosha Kala, Somavara, or Maha Shivaratri",
    samagriList: [
      { item: "Bilva Patra (Bel Leaves)", sanskrit: "बिल्वपत्र", quantity: "108 unbroken tri-foliate leaves", purpose: "Represents the 3 Gunas, 3 Netras, and trishula" },
      { item: "Bhasma / Vibhuti", sanskrit: "भस्म", quantity: "Pure cow dung ash", purpose: "Signifies absolute transcendence and impermanence" },
      { item: "Panchamrita", sanskrit: "पञ्चामृत", quantity: "Milk, curd, ghee, honey, sugar", purpose: "Continuous trickle bathing (Dhara Abhisheka)" },
      { item: "Gangajal / Cold Spring Water", sanskrit: "गङ्गाजल", quantity: "Continuous kalasha stream", purpose: "Cools the intense cosmic Agni of Halahala" },
      { item: "Dhatura & Bhaang", sanskrit: "धत्तूर एवं विजया", quantity: "1 fruit & leaves", purpose: "Symbolizes surrendering toxic worldly tendencies" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Bhasma Dharana & Mahamrityunjaya Dhyana",
        sanskritName: "भस्मधारणम् एवं महामृत्युञ्जय ध्यानम्",
        category: "purvanga",
        kriyaInstruction: "Apply three horizontal lines of sacred Vibhuti (Tripundra) across your forehead with middle, ring, and index fingers while reciting the Tryambakam mantra.",
        itemsNeeded: ["Vibhuti / Bhasma", "Water"],
        sacredSoundPrompt: "om",
        mantras: [
          {
            id: "mahamrityunjaya",
            title: "Rigvedic Mahamrityunjaya Mantra (Rishi Vasishtha)",
            sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥",
            transliteration: "om tryambakaṁ yajāmahe sugandhiṁ puṣṭivardhanam |\nurvārukamiva bandhanānmṛtyormukṣīya māmṛtāt ||",
            meaning: "We worship the Three-Eyed Lord Shiva, who is fragrant and nourishes all beings. As a ripe melon is effortlessly liberated from its bondage to the vine, may He liberate us from death and mortality unto immortality!",
            sourceText: "Rigveda 7.59.12 & Shukla Yajurveda 3.60",
            kriya: "Chant 11 or 108 times while focusing on the third eye between the eyebrows."
          }
        ]
      },
      {
        stepNumber: 2,
        stepName: "Sri Rudram Namakam & Panchamrita Dhara Snanam",
        sanskritName: "श्रीरुद्रम् नमकम एवं पञ्चामृत धारास्नानम्",
        category: "pradhana",
        kriyaInstruction: "Pour continuous streams of milk, yogurt, honey, ghee, cane sugar, and Gangajal over the Shiva Lingam through the Shringi or Jaladhari pot.",
        itemsNeeded: ["Panchamrita vessels", "Shivalinga in jaladhari", "Gangajal"],
        sacredSoundPrompt: "shankha",
        mantras: [
          {
            id: "rudram-namakam-1",
            title: "Sri Rudram Laghunyasa & Namakam (First Anuvaka)",
            sanskrit: "ॐ नमस्ते रुद्र मन्यव उतो त इषवे नमः ।\nनमस्ते अस्तु धन्वने बाहुभ्यामुत ते नमः ॥\nया ते रुद्र शिवा तनूरघोराऽपापकाशिनी ।\nतया नस्तनुवा शन्तमया गिरिशन्ताभिचाकशीहि ॥\nॐ नमो भगवते रुद्राय । ॐ नमः शिवाय ॥",
            transliteration: "om namaste rudra manyava uto ta iṣave namaḥ |\nnamaste astu dhanvane bāhubhyāmuta te namaḥ ||\nyā te rudra śivā tanūraghorā'pāpakāśinī |\ntayā nastanuvā śantamayā giriśantābhicākaśīhi ||\nom namo bhagavate rudrāya | om namaḥ śivāya ||",
            meaning: "O Rudra, salutations to your wrath, and salutations to your arrow! Salutations to your bow and to both your arms! O dweller of the sacred mountain, look upon us with that supreme, auspicious, and benign form of yours which destroys all sin and bestows tranquility.",
            sourceText: "Krishna Yajurveda Taittiriya Samhita 4.5.1",
            kriya: "Bathe the Lingam continuously with water and milk."
          }
        ]
      },
      {
        stepNumber: 3,
        stepName: "108 Bilvashtaka Samarpana",
        sanskritName: "बिल्वाष्टक समर्पणम्",
        category: "pradhana",
        kriyaInstruction: "Offer tender tri-foliate Bilva leaves upside down (smooth side touching the Lingam) with the stalk removed, chanting the Bilvashtakam.",
        itemsNeeded: ["108 Bilva leaves", "Sandalwood paste"],
        sacredSoundPrompt: "bell",
        mantras: [
          {
            id: "bilvashtakam-core",
            title: "Sri Bilvashtakam (Adi Shankaracharya)",
            sanskrit: "त्रिदलं त्रिगुणाकारं त्रिनेत्रं च त्रियायुधम् ।\nत्रिजन्मपापसंहारं एकबिल्वं शिवार्पणम् ॥\nदर्शनं बिल्ववृक्षस्य स्पर्शनं पापनाशनम् ।\nअघोरपापसंहारं एकबिल्वं शिवार्पणम् ॥\nअखण्डबिल्वपत्रेण पूजिते नन्दिकेश्वरे ।\nशुद्ध्यन्ति सर्वपापेभ्यो एकबिल्वं शिवार्पणम् ॥ ॐ नमः शिवाय बिल्वपत्रं समर्पयामि ।",
            transliteration: "tridalaṁ triguṇākāraṁ trinetraṁ ca triyāyudham |\ntrijanmapāpasaṁhāraṁ ekabilvaṁ śivārpaṇam ||\ndarśanaṁ bilvavṛkṣasya sparśanaṁ pāpanāśanam |\naghorapāpasaṁhāraṁ ekabilvaṁ śivārpaṇam ||",
            meaning: "Having three leaves, representing the three Gunas (Sattva, Rajas, Tamas), symbolizing the three eyes and the trident, destroying the accumulated sins of three lifetimes: I offer this single Bilva leaf to Lord Shiva!",
            sourceText: "Lingapurana & Padma Purana",
            kriya: "Place each leaf with the smooth green side facing the Shivalinga."
          }
        ]
      }
    ],
    specialStotras: [
      {
        title: "Sri Lingashtakam (by Sage Agastya / Adi Shankara)",
        sanskrit: "ब्रह्ममुरारिसुरार्चितलिङ्गं निर्मलभासितशोभितलिङ्गम् ।\nजन्मजदुःखविनाशकलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम् ॥\nदेवमुनिप्रवरार्चितलिङ्गं कामदहं करुणाकरलिङ्गम् ।\nरावणदर्पविनाशनलिङ्गं तत्प्रणमामि सदाशिवलिङ्गम् ॥",
        transliteration: "brahmamurārisurārcitaliṅgaṁ nirmalabhāsitaśobhitaliṅgam |\njanmajaduḥkhavināśakaliṅgaṁ tatpraṇamāmi sadāśivaliṅgam ||",
        meaning: "I bow before that Sadashiva Lingam which is worshipped by Brahma, Vishnu, and all the gods; which is pure, resplendent, and destroys the sorrows of repeated birth and death."
      }
    ],
    aartiText: {
      title: "Karpura Gauram & Shiva Aarti (Om Jai Shiv Omkara)",
      sanskrit: "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम् ।\nसदा वसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि ॥\nॐ जय शिव ओंकारा, ॐ जय शिव ओंकारा ।\nब्रह्मा विष्णु सदाशिव अर्द्धाङ्गी धारा ॥ ॐ हर हर हर महादेव ॥",
      transliteration: "karpūragauram karuṇāvatāraṁ saṁsārasāraṁ bhujagendrahāram | sadā vasantaṁ hṛdayāravinde bhavaṁ bhavānīsahitaṁ namāmi ||"
    }
  },

  // 3. SRI MAHALAKSHMI & SRI SUKTA POOJA VIDHI
  {
    id: "lakshmi",
    name: "Sri Mahalakshmi & Sri Suktam Pooja Vidhi",
    sanskritName: "श्री महालक्ष्मी पूजा एवं श्रीसूक्त विधानम्",
    title: "Ashta Lakshmi & Vaibhava Pradayini Vidhi",
    deity: "Goddess Mahalakshmi",
    scripturalAuthority: "Sri Suktam (Rigveda Khila 5.6) & Lakshmi Tantra",
    idealTime: "Shukravara (Friday), Purnima, or Deepavali Pradosha",
    samagriList: [
      { item: "Kamalgatta (Lotus Seeds) & Lotus Flower", sanskrit: "कमलगट्टा एवं पद्म", quantity: "108 seeds / fresh lotus", purpose: "Most dear seat of Padmanabha and Lakshmi" },
      { item: "Kumkum / Roli", sanskrit: "कुङ्कुम", quantity: "1 cup", purpose: "Used for Kumkuma Archana with 108 names" },
      { item: "Gold / Silver Coins or Cowries", sanskrit: "कौड़ी एवं सिक्का", quantity: "11 yellow cowries", purpose: "Traditional symbols of spiritual and material abundance" },
      { item: "Kheer / Payasam (Rice Pudding)", sanskrit: "पायसम् / खीर", quantity: "1 bowl sweetened with jaggery/sugar", purpose: "Preferred sweet offering" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Sri Suktam Recitation & Kumkuma Archana",
        sanskritName: "श्रीसूक्त पाठ एवं कुङ्कुमार्चनम्",
        category: "pradhana",
        kriyaInstruction: "Drop fragrant kumkuma or lotus petals onto Sri Yantra or Mahalakshmi's feet with each richa of Sri Suktam.",
        itemsNeeded: ["Sri Yantra / Murti", "Kumkuma", "Lotus petals"],
        sacredSoundPrompt: "bell",
        mantras: [
          {
            id: "sri-suktam-1",
            title: "Rigvedic Sri Suktam (First 3 Verses)",
            sanskrit: "ॐ हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम् ।\nचन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह ॥ १ ॥\nतां म आवह जातवेदो लक्ष्मीमनपगामिनीम् ।\nयस्यां हिरण्यं विन्देयं गामश्वं पुरुषानहम् ॥ २ ॥\nअश्वपूर्वां रथमध्यां हस्तिनादप्रबोधिनीम् ।\nश्रियं देवीमुपह्वये श्रीर्मा देवी जुषताम् ॥ ३ ॥",
            transliteration: "om hiraṇyavarṇāṁ hariṇīṁ suvarṇarajatasrajām |\ncandrāṁ hiraṇmayīṁ lakṣmīṁ jātavedo ma āvaha || 1 ||\ntāṁ ma āvaha jātavedo lakṣmīmanapagāminīm |\nyasyāṁ hiraṇyaṁ vindeyaṁ gāmaśvaṁ puruṣānaham || 2 ||\naśvapūrvāṁ rathamadhyāṁ hastinādaprabodhinīm |\nśriyaṁ devīmupahvaye śrīrmā devī juṣatām || 3 ||",
            meaning: "Invoke for me, O Agni, that golden-hued Lakshmi who is radiant like the moon, adorned with gold and silver garlands! Invoke for me that Lakshmi who never leaves, through whose grace I may attain prosperity, cattle, horses, and noble progeny. Preceded by horses, mounted in the chariot, awakened by the trumpeting of royal elephants: I invoke Sri, may that divine Goddess grace me!",
            sourceText: "Rigveda Khila (Sri Suktam 1-3)",
            kriya: "Shower kumkuma onto the center of the Sri Yantra."
          }
        ]
      }
    ],
    specialStotras: [
      {
        title: "Kanakadhara Stotram (by Adi Shankaracharya)",
        sanskrit: "अङ्गे हरेः पुलकभूषणमाश्रयन्ती भृङ्गाङ्गनेव मुकुलाभरणं तमालम् ।\nअङ्गीकृताखिलविभूतिरपाङ्गलीला माङ्गल्यदास्तु मम मङ्गलदेवतायाः ॥\nमुग्धा मुहुर्विदधती वदने मुरारेः सप्रेमत्रपप्रणिहितानि गतागतानि ।\nमाला दृशोर्मधुकरीव महोत्पले या सा मे श्रियं दिशतु सागरसम्भवायाः ॥",
        transliteration: "aṅge hareḥ pulakabhūṣaṇamāśrayantī bhṛṅgāṅganeva mukulābharaṇaṁ tamālam | ...",
        meaning: "Like a female bee resting on the blossoming black Tamala tree, she rests on Lord Hari's chest; may her compassionate glance, which is the fountainhead of all wealth, bestow all auspiciousness upon me!"
      }
    ],
    aartiText: {
      title: "Om Jai Lakshmi Mata (Aarti)",
      sanskrit: "ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता । तुमको निसदिन सेवत, हर विष्णु विधाता ॥\nउमा रमा ब्रह्माणी, तुम ही जगमाता । सूर्य चन्द्रमा ध्यावत, नारद ऋषि गाता ॥\nजिस घर में तुम रहतीं, सब सद्गुण आता । सब सम्भव हो जाता, मन नहिं घबराता ॥",
      transliteration: "om jaya lakṣmī mātā, maiyā jaya lakṣmī mātā | tumako nisadina sevata, hara viṣṇu vidhātā ||"
    }
  },

  // 4. SRI VISHNU & SATYANARAYAN POOJA VIDHI
  {
    id: "vishnu",
    name: "Sri Vishnu & Satyanarayan Swami Pooja Vidhi",
    sanskritName: "श्री विष्णु एवं सत्यनारायण व्रत पूजा विधानम्",
    title: "Vaikuntha Natha & Satya Vrata Vidhi",
    deity: "Lord Vishnu / Satyanarayan",
    scripturalAuthority: "Skanda Purana (Reva Khanda) & Vishnu Purana",
    idealTime: "Purnima Tithi, Ekadashi, or Thursday (Brihaspativara)",
    samagriList: [
      { item: "Tulasi Dal", sanskrit: "तुलसीदल", quantity: "Fresh tender leaves with Manjari", purpose: "Vishnu's essential beloved herb; puja is incomplete without it" },
      { item: "Yellow Flowers & Cloth", sanskrit: "पीत वस्त्र एवं पुष्प", quantity: "Pitambari cloth & marigolds", purpose: "Color representing Sattva and cosmic expansion" },
      { item: "Panchamrita & Panjiri Prasad", sanskrit: "पञ्चामृत एवं पंजीरी", quantity: "Wheat flour roasted in ghee with sugar & banana", purpose: "Prasada for Satyanarayan Vrata" },
      { item: "Banana Pillars", sanskrit: "कदली स्तम्भ", quantity: "4 banana plant stems", purpose: "Adorn the four corners of the Puja Mandap" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Satyanarayan Sankalpa & Tulasi Archana",
        sanskritName: "सत्यनारायण सङ्कल्प एवं तुलसी समर्पणम्",
        category: "pradhana",
        kriyaInstruction: "Offer fresh green Tulasi leaves dipped in sandalwood to the feet and chest of Lord Vishnu while chanting the Vishnu Gayatri.",
        itemsNeeded: ["Tulasi leaves", "Chandana"],
        sacredSoundPrompt: "om",
        mantras: [
          {
            id: "vishnu-gayatri",
            title: "Vishnu Gayatri & Tulasi Samarpana",
            sanskrit: "ॐ नारायणाय विद्महे वासुदेवाय धीमहि ।\nतन्नो विष्णुः प्रचोदयात् ॥\nशान्ताकारं भुजगशयनं पद्मनाभं सुरेशं\nविश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् ।\nलक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं\nवन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥ ॐ नमो नारायणाय तुलसीपत्रं समर्पयामि ।",
            transliteration: "om nārāyaṇāya vidmahe vāsudevāya dhīmahi |\ntanno viṣṇuḥ pracodayāt ||\nśāntākāraṁ bhujagaśayanaṁ padmanābhaṁ sureśaṁ\nviśvādhāraṁ gaganasadṛśaṁ meghavarṇaṁ śubhāṅgam |\nlakṣmīkāntaṁ kamalanayanaṁ yogibhirdhyānagamyaṁ\nvande viṣṇuṁ bhavabhayaharaṁ sarvalokaikanātham ||",
            meaning: "May we realize Lord Narayana; let us meditate upon Vasudeva; may that Lord Vishnu inspire and guide our intellect. Tranquil in appearance, reclining upon the cosmic serpent Ananta, with a lotus sprouting from His navel, Lord of the Devas, the supreme foundation of the cosmos: I bow to Vishnu, who dispels the fear of worldly existence.",
            sourceText: "Yajurveda Taittiriya Aranyaka 10.1 & Vishnu Smriti",
            kriya: "Offer Tulasi with both hands."
          }
        ]
      }
    ],
    specialStotras: [
      {
        title: "Achyutashtakam (by Adi Shankaracharya)",
        sanskrit: "अच्युतं केशवं रामनारायणं कृष्णदामोदरं वासुदेवं हरिम् ।\nश्रीधरं माधवं गोपिकावल्लभं जानकीनायकं रामचन्द्रं भजे ॥\nअच्युतं केशवं सत्यभामाधवं माधवं श्रीधरं राधिकाराधितम् ।\nइन्दिरामन्दिरं चेतसा सुन्दरं देवकीनन्दनं नन्दजं सन्दधे ॥",
        transliteration: "acyutaṁ keśavaṁ rāmanārāyaṇaṁ kṛṣṇadāmodaraṁ vāsudevaṁ harim |\nśrīdharaṁ mādhavaṁ gopikāvallabhaṁ jānakīnāyakaṁ rāmacandraṁ bhaje ||",
        meaning: "I worship Achyuta, Keshava, Rama, Narayana, Krishna, Damodara, Vasudeva, Hari, Sridhara, Madhava, Beloved of the Gopis, and Ramachandra the Lord of Janaki!"
      }
    ],
    aartiText: {
      title: "Om Jai Jagdish Hare (Aarti)",
      sanskrit: "ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे । भक्त जनों के संकट, दास जनों के संकट, क्षण में दूर करे ॥\nजो ध्यावै फल पावै, दुख बिनसे मन का । सुख सम्पति घर आवै, कष्ट मिटे तन का ॥\nमात-पिता तुम मेरे, शरण गहूं किसकी । तुम बिन और न दूजा, आस करूं जिसकी ॥",
      transliteration: "om jaya jagadīśa hare, svāmī jaya jagadīśa hare | bhakta janon ke saṅkaṭa, dāsa janon ke saṅkaṭa, kṣaṇa meṁ dūra kare ||"
    }
  },

  // 5. SRI DURGA & NAVARNA POOJA VIDHI
  {
    id: "durga",
    name: "Sri Durga & Navarna Pooja Vidhi",
    sanskritName: "श्री दुर्गा एवं नवार्ण मन्त्र पूजा विधानम्",
    title: "Mahashakti & Mahishasuramardini Vidhi",
    deity: "Goddess Durga / Chandika",
    scripturalAuthority: "Devi Mahatmyam / Durga Saptashati (Markandeya Purana)",
    idealTime: "Navaratri (Ashwin/Chaitra), Ashtami, Navami, or Tuesdays",
    samagriList: [
      { item: "Red Chunari & Red Flowers", sanskrit: "रक्त वस्त्र एवं जवापुष्प", quantity: "Red silk cloth & red hibiscus", purpose: "Resonates with the intense Tejas of Durga" },
      { item: "Coconut with Husk", sanskrit: "श्रीफल", quantity: "1 whole coconut tied with kalawa", purpose: "Symbol of surrendering the ego" },
      { item: "Cloves, Cardamom, Paan", sanskrit: "लौंग, इलायची, पान", quantity: "Paan ka beeda", purpose: "Traditional offering to Jagadamba" },
      { item: "Akhanda Jyoti / Ghee Lamp", sanskrit: "अखण्ड ज्योति", quantity: "Continuous burning lamp", purpose: "Eternal flame representing primordial consciousness" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Navarna Mantra Japa & Devi Suktam",
        sanskritName: "नवार्ण मन्त्र जप एवं देवी सूक्तम्",
        category: "pradhana",
        kriyaInstruction: "Chant the 9-syllabled Navarna Mantra using a red sandalwood or crystal mala with deep concentration on the heart chakra.",
        itemsNeeded: ["Raktachandana or Sphatika Mala", "Red flowers"],
        sacredSoundPrompt: "om",
        mantras: [
          {
            id: "navarna-mantra",
            title: "Sacred Navarna Mantra & Samputa",
            sanskrit: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ॥\n(ऐं = सरस्वती, ह्रीं = महालक्ष्मी, क्लीं = महाकाली, चामुण्डायै = संहारिणी, विच्चे = मुक्तिप्रदायिनी)\nसर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके ।\nशरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥\nशरणागतदीनार्तपरित्राणपरायणे ।\nसर्वस्यार्तिहरे देवि नारायणि नमोऽस्तु ते ॥",
            transliteration: "om aiṁ hrīṁ klīṁ cāmuṇḍāyai vicce ||\n(aiṁ = Sarasvati, hrīṁ = Mahalakshmi, klīṁ = Mahakali, cāmuṇḍāyai = Destroyer of darkness, vicce = Bestower of liberation)\nsarvamaṅgalamāṅgalye śive sarvārthasādhike |\nśaraṇye tryambake gauri nārāyaṇi namo'stu te ||",
            meaning: "Salutations to the most auspicious of all that is auspicious, the embodiment of Shiva, the fulfiller of all spiritual and material goals, the refuge of all souls, the three-eyed Gauri: Salutations unto You, O Narayani! You who are ever dedicated to rescuing the distressed who seek refuge, remover of all suffering: Salutations unto You!",
            sourceText: "Devi Mahatmyam (Markandeya Purana 91.9)",
            kriya: "Recite 108 times and offer red flowers."
          }
        ]
      }
    ],
    specialStotras: [
      {
        title: "Argala Stotram (by Rishi Markandeya)",
        sanskrit: "जयन्ती मङ्गला काली भद्रकाली कपालिनी ।\nदुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोऽस्तु ते ॥\nजय त्वं देवि चामुण्डे जय भूतार्तिहारिणि ।\nजय सर्वगते देवि कालरात्रि नमोऽस्तु ते ॥\nदेहि सौभाग्यमारोग्यं देहि मे परमं सुखम् ।\nरूपं देहि जयं देहि यशो देहि द्विषो जहि ॥",
        transliteration: "jayantī maṅgalā kālī bhadrakālī kapālinī | durgā kṣamā śivā dhātrī svāhā svadhā namo'stu te || ... rūpaṁ dehi jayaṁ dehi yaśo dehi dviṣo jahi ||",
        meaning: "Grant me good fortune, grant me health, grant me supreme bliss; bestow divine beauty, grant victory, bestow righteous glory, and eradicate inner enemies!"
      }
    ],
    aartiText: {
      title: "Jai Ambe Gauri (Aarti)",
      sanskrit: "जय अम्बे गौरी, मैया जय श्यामा गौरी । तुमको निसदिन ध्यावत, हरि ब्रह्मा शिवरी ॥\nमांग सिन्दूर विराजत, टीको मृगमद को । उज्ज्वल से दोउ नैना, चन्द्रवदन नीको ॥\nकनक समान कलेवर, रक्ताम्बर राजे । रक्तपुष्प गल माला, कण्ठन पर साजे ॥",
      transliteration: "jaya ambe gaurī, maiyā jaya śyāmā gaurī | tumako nisadina dhyāvata, hari brahmā śivarī ||"
    }
  },

  // 6. SRI HANUMAN POOJA & SUNDARKAND VIDHI
  {
    id: "hanuman",
    name: "Sri Hanuman Pooja & Maruti Aradhana",
    sanskritName: "श्री हनुमान पूजा एवं मारुति आराधना",
    title: "Sankat Mochan & Rudravatara Vidhi",
    deity: "Lord Hanuman / Bajrangbali",
    scripturalAuthority: "Valmiki Ramayana (Sundarkand), Shiva Purana & Ramcharitmanas",
    idealTime: "Mangalavara (Tuesday), Shanivara (Saturday), or Hanuman Jayanti",
    samagriList: [
      { item: "Sindoor & Chameli (Jasmine) Oil", sanskrit: "सिन्दूर एवं चमेली तैल", quantity: "Pure orange vermilion & pure oil", purpose: "Chola offering for unyielding strength and protection" },
      { item: "Jaggery & Roasted Gram (Gur-Chana)", sanskrit: "गुड़ एवं चना", quantity: "1 bowl", purpose: "Pure traditional Sattvic naivedya" },
      { item: "Betel Leaf with Cloves (Paan ka Beeda)", sanskrit: "लौंग लगा मीठा पान", quantity: "1 seasoned paan", purpose: "Offered after chanting Sundarkand/Chalisa" },
      { item: "Akarka / Mandar Flowers", sanskrit: "मन्दार / आक पुष्प", quantity: "Garland of 21 flowers", purpose: "Dear flower to Rudravatara" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Sindoor Chola Arpan & Hanuman Chalisa",
        sanskritName: "सिन्दूर अर्पण एवं हनुमान चालीसा पाठ",
        category: "pradhana",
        kriyaInstruction: "Mix pure orange sindoor with fragrant jasmine oil. Apply to Hanuman ji's feet, arms, and forehead, then recite the complete Hanuman Chalisa.",
        itemsNeeded: ["Sindoor", "Chameli oil", "Betel leaf"],
        sacredSoundPrompt: "bell",
        mantras: [
          {
            id: "hanuman-chalisa-dhyana",
            title: "Hanuman Dhyana Shloka & Opening Doha",
            sanskrit: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम् ।\nवातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये ॥\n\nश्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।\nबरनऊं रघुबर बिमल जसु जो दायकु फल चारि ॥\nबुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार ।\nबल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार ॥\n\nजय हनुमान ज्ञान गुन सागर । जय कपीस तिहुं लोक उजागर ॥\nराम दूत अतुलित बल धामा । अंजनि-पुत्र पवनसुत नामा ॥",
            transliteration: "manojavaṁ mārutatulyavegaṁ jitendriyaṁ buddhimatāṁ variṣṭham |\nvātātmajaṁ vānarayūthamukhyaṁ śrīrāmadūtaṁ śaraṇaṁ prapadye ||\nśrīguru carana saroja raja nija manu mukuru sudhāri | ...",
            meaning: "Swift as the mind and fast as the wind, master of the senses, foremost among the wise, son of the Wind God, chief of the Vanaras, messenger of Sri Rama: to you I take refuge! Cleansing the mirror of my mind with the dust of the Guru's lotus feet, I sing the spotless glory of Raghuvara which bestows the four fruits of life. Bestow upon me strength, wisdom, and knowledge, and dispel all afflictions and blemishes!",
            sourceText: "Valmiki Ramayana & Goswami Tulsidas Ramcharitmanas",
            kriya: "Offer Sindoor and light a mustard oil or jasmine oil lamp."
          }
        ]
      }
    ],
    specialStotras: [
      {
        title: "Sankat Mochan Hanumanashtak",
        sanskrit: "बाल समय रबि भक्षि लियो तब, तीनहुं लोक भयो अंधियारों ।\nताहि सो त्रास भयो जग को, यह संकट काहु सों जात न टारो ॥\nदेवन आनि करी बिनती तब, छांड़ि दियो रबि कष्ट निवारो ।\nको नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो ॥",
        transliteration: "bāla samaya rabi bhakṣi liyo taba, tīnahuṁ loka bhayo andhiyāroṁ | ... ko nahiṁ jānata hai jaga meṁ kapi, saṅkaṭamocana nāma tihāro ||",
        meaning: "In your childhood you leapt and swallowed the Sun, plunging all three worlds into darkness; the gods prayed, and you released the Sun, removing their distress. Who in the world does not know, O mighty monkey hero, that your name is Sankat Mochan—the Remover of all Afflictions!"
      }
    ],
    aartiText: {
      title: "Aarti Kije Hanuman Lala Ki",
      sanskrit: "आरती कीजै हनुमान लला की । दुष्ट दलन रघुनाथ कला की ॥\nजाके बल से गिरिवर कांपै । रोग दोष जाके निकट न झांपै ॥\nअंजनि पुत्र महा बलदाई । सन्तन के प्रभु सदा सहाई ॥\nदे बीरा रघुनाथ पठाए । लंका जारि सीय सुधि लाए ॥",
      transliteration: "āratī kījai hanumāna lalā kī | duṣṭa dalana raghunātha kalā kī ||"
    }
  },

  // 7. SRI SURYA & GAYATRI SANDHYA VIDHI
  {
    id: "surya",
    name: "Sri Surya Pooja & Aditya Hridaya Vidhi",
    sanskritName: "श्री सूर्य पूजा एवं आदित्यहृदय विधानम्",
    title: "Pratyaksha Daivam & Gayatri Arghya Vidhi",
    deity: "Lord Surya / Savitr",
    scripturalAuthority: "Rigveda (1.115), Valmiki Ramayana (Yuddha Kanda 105) & Surya Siddhanta",
    idealTime: "Sunrise (Brahma Muhurta to Ushah Kala) or Sunday (Ravivara)",
    samagriList: [
      { item: "Copper Arghya Patra", sanskrit: "ताम्र पात्र", quantity: "Pure copper vessel", purpose: "Copper harmonizes solar electrical frequencies" },
      { item: "Red Sandalwood & Red Flowers", sanskrit: "रक्त चन्दन एवं जवापुष्प", quantity: "Mix into water", purpose: "Attracts solar photonic energy" },
      { item: "Akshata & Water", sanskrit: "अक्षत एवं जल", quantity: "Fresh unboiled water", purpose: "Refracts morning sunlight onto body" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Surya Arghya Danam & Surya Gayatri",
        sanskritName: "सूर्यार्घ्यदानम् एवं सूर्य गायत्री",
        category: "pradhana",
        kriyaInstruction: "Stand facing East. Hold the copper vessel with both hands raised above your forehead. Slowly pour the water stream towards the rising sun, viewing the golden rays refracted through the falling water stream.",
        itemsNeeded: ["Copper pot with water, red flower, akshata, and roli"],
        sacredSoundPrompt: "shankha",
        mantras: [
          {
            id: "surya-arghya-mantra",
            title: "Surya Arghya & Gayatri Mantras",
            sanskrit: "ॐ एहि सूर्य सहस्त्रांशो तेजोराशे जगत्पते ।\nअनुकम्पय मां भक्त्या गृहाणार्घ्यं दिवाकर ॥\nॐ भास्कराय नमः । ॐ सूर्याय नमः । ॐ आदित्याय नमः ॥\n\nॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥ (ऋग्वेद ३.६२.१०)",
            transliteration: "om ehi sūrya sahastrāṁśo tejorāśe jagatpate |\nanukampaya māṁ bhaktyā gṛhāṇārghyaṁ divākara ||\nom bhāskarāya namaḥ | om sūryāya namaḥ | om ādityāya namaḥ ||\nom bhūrbhuvaḥ svaḥ | tatsaviturvareṇyaṁ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||",
            meaning: "Come, O Sun of a thousand rays, reservoir of cosmic brilliance, Lord of the universe! Have compassion on me, your devotee, and accept this morning Arghya offering, O Maker of the Day! We meditate upon the adorable spiritual effulgence of that Supreme Divine Creator (Savitr); may He illuminate and inspire our intellect.",
            sourceText: "Skanda Purana & Rigveda 3.62.10 (Gayatri)",
            kriya: "Pour the water in three offerings into a clean copper basin without stepping on the poured water."
          }
        ]
      }
    ],
    specialStotras: [
      {
        title: "Aditya Hridaya Stotram (by Sage Agastya to Sri Rama)",
        sanskrit: "ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम् । रावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम् ॥\nदैवतैश्च समागम्य द्रष्टुमभ्यागतो रणम् । उपगम्याब्रवीद्राममगस्त्यो भगवान् ऋषिः ॥\nराम राम महाबाहो शृणु गुह्यं सनातनम् । येन सर्वानरीन् वत्स समरे विजयिष्यसि ॥\nआदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम् । जयावहं जपेन्नित्यमक्षयं परमं शिवम् ॥",
        transliteration: "tato yuddhapariśrāntaṁ samare cintayā sthitam | ... rāma rāma mahābāho śṛṇu guhyaṁ sanātanam | ādityahṛdayaṁ puṇyaṁ sarvaśatruvināśanam ||",
        meaning: "Beholding Rama fatigued by battle, Sage Agastya approached Him and imparted the eternal secret hymn: The sacred Aditya Hridaya, which eradicates all foes and bestows perpetual victory!"
      }
    ]
  },

  // 8. SRI KRISHNA / LADDU GOPAL SEVA VIDHI
  {
    id: "krishna",
    name: "Sri Krishna & Laddu Gopal Seva Vidhi",
    sanskritName: "श्री कृष्ण एवं लड्डू गोपाल सेवा विधि",
    title: "Vatsalya & Madhurya Nitya Seva Vidhi",
    deity: "Sri Krishna / Laddu Gopal",
    scripturalAuthority: "Srimad Bhagavatam (Dashama Skandha) & Hari Bhakti Vilasa",
    idealTime: "Early Morning (Mangala Seva) & Evening (Sandhya Seva)",
    samagriList: [
      { item: "Makhan & Mishri (White Butter & Rock Sugar)", sanskrit: "नवनीत एवं मिश्री", quantity: "Freshly churned butter", purpose: "Dear childhood food of Gopal" },
      { item: "Peacock Feather (Mor Pankh)", sanskrit: "मयूरपिच्छ", quantity: "1 feather for crown", purpose: "Symbolizes complete rainbow spectrum of cosmic beauty" },
      { item: "Flute (Bansuri)", sanskrit: "वेणु / वंशी", quantity: "Silver or bamboo flute", purpose: "Attracts all souls to the divine vibration" },
      { item: "Panchamrita & Warm Water", sanskrit: "कोष्ण जल", quantity: "Gentle warm bath water", purpose: "Tender bathing of infant Gopal" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Jagaran, Snan, Shringar & Makhan Bhog",
        sanskritName: "जागरण, स्नान, शृङ्गार एवं माखन भोग",
        category: "pradhana",
        kriyaInstruction: "Gently wake the deity with soft bell sounds. Bathe with warm scented water, dress in vibrant robes, place flute in hand and peacock feather in crown, and offer fresh butter and rock sugar.",
        itemsNeeded: ["Warm water", "Vastra", "Flute", "Makhan-Mishri"],
        sacredSoundPrompt: "bell",
        mantras: [
          {
            id: "krishna-maha-mantra",
            title: "Hare Krishna Mahamantra & Madhurashtakam",
            sanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।\nहरे राम हरे राम राम राम हरे हरे ॥\n\nअधरं मधुरं वदनं मधुरं नयनं मधुरं हसितं मधुरम् ।\nहृदयं मधुरं गमनं मधुरं मधुराधिपतेरखिलं मधुरम् ॥\nवचनं मधुरं चरितं मधुरं वसनं मधुरं वलितं मधुरम् ।\nचलितं मधुरं भ्रमितं मधुरं मधुराधिपतेरखिलं मधुरम् ॥",
            transliteration: "hare kṛṣṇa hare kṛṣṇa kṛṣṇa kṛṣṇa hare hare |\nhare rāma hare rāma rāma rāma hare hare ||\nadharaṁ madhuraṁ vadanaṁ madhuraṁ nayanaṁ madhuraṁ hasitaṁ madhuram |\nhṛdayaṁ madhuraṁ gamanaṁ madhuraṁ madhurādhipaterakhilaṁ madhuram ||",
            meaning: "O enchanting Lord Krishna, O divine energy Radha (Hare), engage me in Your transcendental loving service! Sweet are His lips, sweet His face, sweet His eyes, sweet His gentle smile; sweet is His heart, sweet His walk: everything about the Emperor of Sweetness is utterly sweet!",
            sourceText: "Kali Santarana Upanishad & Vallabhacharya Madhurashtakam",
            kriya: "Feed Gopal butter with the right hand and swing the cradle gently."
          }
        ]
      }
    ]
  },

  // 9. NAVAGRAHA POOJA & SHANTI VIDHI
  {
    id: "navagraha",
    name: "Navagraha Pooja & Planetary Shanti Vidhi",
    sanskritName: "नवग्रह पूजा एवं शान्ति विधानम्",
    title: "Navagraha Mandalam & Graha Dosha Nivarana",
    deity: "The Nine Planetary Deities (Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani, Rahu, Ketu)",
    scripturalAuthority: "Brihat Parashara Hora Shastra, Yajnavalkya Smriti & Rigveda",
    idealTime: "Graha Gochara transit, Eclipse days, or Saturday/Tuesday mornings",
    samagriList: [
      { item: "Navadhanya (Nine Grains)", sanskrit: "नवधान्य", quantity: "Wheat, Rice, Toor, Moong, Chana, Rajma, Sesame, Urad, Horsegram", purpose: "Offered to the 9 planets according to their Gunas" },
      { item: "Navavarna Vastra (9 Colored Clothes)", sanskrit: "नववर्ण वस्त्र", quantity: "Red, White, Coral Red, Green, Yellow, White, Black, Smoky, Multi", purpose: "Resonates with each planet's celestial spectrum" },
      { item: "Nine Samidhas (Homa Woods)", sanskrit: "नव समिधा", quantity: "Arka, Palasha, Khadira, Apamarga, Peepal, Udumbara, Shami, Durva, Kusha", purpose: "Sacred fire fuel for each planetary vibration" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Navagraha Puranic Stotram & Bija Mantras",
        sanskritName: "नवग्रह स्तोत्रम् एवं बीज मन्त्राः",
        category: "pradhana",
        kriyaInstruction: "Sit facing East. Offer grains and flowers to the 9 planetary squares of the Navagraha mandala starting from the center (Surya) clockwise.",
        itemsNeeded: ["Navadhanya", "Mandala cloth", "Flowers"],
        sacredSoundPrompt: "bell",
        mantras: [
          {
            id: "navagraha-stotram",
            title: "Navagraha Stotram (by Sage Veda Vyasa)",
            sanskrit: "१. जपाकुसुमसंकाशं काश्यपेयं महाद्युतिम् । तमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम् ॥ (सूर्य)\n२. दधिशङ्खतुषाराभं क्षीरोदार्णवसम्भवम् । नमामि शशिनं सोमं शम्भोर्मुकुटभूषणम् ॥ (चन्द्र)\n३. धरणीगर्भसम्भूतं विद्युत्कान्तिसमप्रभम् । कुमारं शक्तिहस्तं च मङ्गलं प्रणमाम्यहम् ॥ (मङ्गल)\n४. प्रियङ्गुकलिकाश्यामं रूपेणाप्रतिमं बुधम् । सौम्यं सौम्यगुणोपेतं तं बुधं प्रणमाम्यहम् ॥ (बुध)\n५. देवानां च ऋषीणां च गुरुं काञ्चनसन्निभम् । बुद्धिभूतं त्रिलोकेशं तं नमामि बृहस्पतिम् ॥ (गुरु)\n६. हिमकुन्दमृणालाभं दैत्यानां परमं गुरुम् । सर्वशास्त्रप्रवक्तारं भार्गवं प्रणमाम्यहम् ॥ (शुक्र)\n७. नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम् । छायामार्तण्डसम्भूतं तं नमामि शनैश्चरम् ॥ (शनि)\n८. अर्धकायं महावीर्यं चन्द्रादित्यविमर्दनम् । सिंहिकागर्भसम्भूतं तं राहुं प्रणमाम्यहम् ॥ (राहु)\n९. पलाशपुष्पसंकाशं तारकाग्रहमस्तकम् । रौद्रं रौद्रात्मकं घोरं तं केतुं प्रणमाम्यहम् ॥ (केतु)",
            transliteration: "1. japākusumasaṁkāśaṁ kāśyapeyaṁ mahādyutim... (Surya)\n2. dadhiśaṅkhatuṣārābhaṁ kṣīrodārṇavasambhavam... (Chandra)\n3. dharaṇīgarbhasambhūtaṁ... (Mangala)\n4. priyaṅgukalikāśyāmaṁ... (Budha)\n5. devānāṁ ca ṛṣīṇāṁ ca guruṁ... (Guru)\n6. himakundamṛṇālābhaṁ... (Shukra)\n7. nīlāñjanasamābhāsaṁ raviputraṁ... (Shani)\n8. ardhakāyaṁ mahāvīryaṁ... (Rahu)\n9. palāśapuṣpasaṁkāśaṁ... (Ketu)",
            meaning: "Salutations to the Sun who shines like the red hibiscus; to the Moon born of the milk ocean who adorns Shiva's crown; to Mars born of the Earth holding the spear of power; to Mercury dark like a bud and supremely wise; to Jupiter the golden preceptor of the Gods; to Venus the diamond-shining teacher of the sciences; to Saturn the dark slow-moving lord of discipline; to Rahu the eclipse-causer; to Ketu who resembles the fiery Palasha flower. May the Nine Planets bring perpetual auspiciousness!",
            sourceText: "Brahmanda Purana",
            kriya: "Offer corresponding grains and flowers to each of the nine planetary positions."
          }
        ]
      }
    ]
  },

  // 10. NITYA AGNIHOTRA & PANCHA MAHAYAJNA VIDHI
  {
    id: "agnihotra",
    name: "Nitya Agnihotra & Pancha Mahayajna Vidhi",
    sanskritName: "नित्य अग्निहोत्र एवं पञ्चमहायज्ञ विधानम्",
    title: "Vedic Bio-Cosmic Energy Cycle",
    deity: "Lord Agni & Surya / Parameshwara",
    scripturalAuthority: "Yajurveda (Taittiriya Samhita), Shatapatha Brahmana & Manu Smriti (3.69-71)",
    idealTime: "Exact Sunset and Sunrise down to the second",
    samagriList: [
      { item: "Inverted Copper Pyramid Kunda", sanskrit: "ताम्र पिरामिड कुण्ड", quantity: "Standard dimensions (14.5 x 14.5 cm top)", purpose: "Focuses and magnifies subtle bio-electromagnetic waves" },
      { item: "Dried Desi Cow Dung Cakes", sanskrit: "गोमय कण्डा", quantity: "Pure desi cow dung", purpose: "Produces formaldehyde, ethylene oxide, and purifying aerosols" },
      { item: "Pure Cow Ghee", sanskrit: "गव्य घृत", quantity: "Unadulterated A2 desi cow ghee", purpose: "Clean catalytic combustion" },
      { item: "Unbroken Raw Brown Rice", sanskrit: "अखण्ड अक्षत", quantity: "2 pinches for each ahuti", purpose: "Offerings without breakage" }
    ],
    steps: [
      {
        stepNumber: 1,
        stepName: "Sunrise & Sunset Agnihotra Mantras",
        sanskritName: "सूर्योदय एवं सूर्यास्त अग्निहोत्र मन्त्राः",
        category: "pradhana",
        kriyaInstruction: "At the exact calculated second of sunrise/sunset, ignite the dung cakes with camphor. Smear the unbroken rice with cow ghee in your palm. Offer into the fire with the ring, middle finger, and thumb after saying 'Svaha'.",
        itemsNeeded: ["Agnihotra pyramid", "Ghee", "Rice", "Dung cakes"],
        sacredSoundPrompt: "om",
        mantras: [
          {
            id: "agnihotra-sunrise",
            title: "Sunrise Agnihotra Mantras (सूर्योदय)",
            sanskrit: "१. सूर्याय स्वाहा सूर्याय इदं न मम ॥ (प्रथम आहुति)\n२. प्रजापतये स्वाहा प्रजापतये इदं न मम ॥ (द्वितीय आहुति)",
            transliteration: "1. sūryāya svāhā sūryāya idaṁ na mama ||\n2. prajāpataye svāhā prajāpataye idaṁ na mama ||",
            meaning: "Unto the Sun I offer this oblation; this belongs to Surya, not to me! Unto Prajapati, Lord of Creation, I offer this oblation; this belongs to Prajapati, not to me!",
            sourceText: "Yajurveda Madhyandina Shakha",
            kriya: "Offer the first pinch of rice into the center at sunrise; offer the second pinch immediately after."
          },
          {
            id: "agnihotra-sunset",
            title: "Sunset Agnihotra Mantras (सूर्यास्त)",
            sanskrit: "१. अग्नये स्वाहा अग्नये इदं न मम ॥ (प्रथम आहुति)\n२. प्रजापतये स्वाहा प्रजापतये इदं न मम ॥ (द्वितीय आहुति)",
            transliteration: "1. agnaye svāhā agnaye idaṁ na mama ||\n2. prajāpataye svāhā prajāpataye idaṁ na mama ||",
            meaning: "Unto Fire I offer this oblation; this belongs to Agni, not to me! Unto Prajapati I offer this oblation; this belongs to Prajapati, not to me!",
            sourceText: "Yajurveda Madhyandina Shakha",
            kriya: "Offer at the exact moment the bottom rim of the setting sun touches the horizon."
          }
        ]
      }
    ]
  }
];
