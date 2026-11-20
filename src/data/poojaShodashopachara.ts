import { PoojaStep } from "../types/poojaVidhiTypes";

export const SHODASHOPACHARA_STEPS: PoojaStep[] = [
  {
    stepNumber: 1,
    stepName: "Pavitrikarana & Purifying Waters",
    sanskritName: "पवित्रीकरणम्",
    category: "purvanga",
    kriyaInstruction: "Take water in the right hand with the Panchapatra spoon (Achamani). Sprinkle water on your head, body, and all worship materials using Kusha grass or flowers.",
    sacredSoundPrompt: "om",
    itemsNeeded: ["Panchapatra & Achamani (copper spoon)", "Pure Gangajal / water", "Kusha grass or flower"],
    mantras: [
      {
        id: "pavitrikaran-1",
        title: "Pavitrikaranam Mantra",
        sanskrit: "ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।\nयः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥",
        transliteration: "om apavitraḥ pavitro vā sarvāvasthāṁ gato'pi vā |\nyaḥ smaretpuṇḍarīkākṣaṁ sa bāhyābhyantaraḥ śuciḥ ||",
        meaning: "Whether pure or impure, in whatever state of life one may be, whoever remembers the lotus-eyed Lord Pundarikaksha (Vishnu) becomes purified both internally and externally.",
        sourceText: "Garuda Purana & Agni Purana",
        kriya: "Sprinkle water on yourself and all puja samagri with Kusha grass or flower petals."
      }
    ]
  },
  {
    stepNumber: 2,
    stepName: "Achamanam (Tri-fold Consecration)",
    sanskritName: "आचमनम्",
    category: "purvanga",
    kriyaInstruction: "Pour one spoonful of water into the palm of the right hand. Sip silently from the root of the thumb (Brahma Tirtha) after reciting each name. Wash your hand after the third sip.",
    sacredSoundPrompt: "om",
    itemsNeeded: ["Panchapatra", "Achamani", "Arghya Patra (wash bowl)"],
    mantras: [
      {
        id: "achamana-1",
        title: "Trividha Achamana Mantras",
        sanskrit: "ॐ केशवाय नमः स्वाहा । (प्रथम आचमनम्)\nॐ नारायणाय नमः स्वाहा । (द्वितीय आचमनम्)\nॐ माधवाय नमः स्वाहा । (तृतीय आचमनम्)\nॐ गोविन्दाय नमः । (हस्त प्रक्षालनम् - wash hands)",
        transliteration: "om keśavāya namaḥ svāhā | (1st sip)\nom nārāyaṇāya namaḥ svāhā | (2nd sip)\nom mādhavāya namaḥ svāhā | (3rd sip)\nom govindāya namaḥ | (wash hand)",
        meaning: "Salutations to Keshava (sip water), to Narayana (sip water), to Madhava (sip water). Salutations to Govinda (purify and wash the hand with water).",
        sourceText: "Bodhayana Grihya Sutras & Manu Smriti 2.60",
        kriya: "Sip once for each of the first three mantras from the base of the thumb; wash the right palm on the fourth mantra."
      }
    ]
  },
  {
    stepNumber: 3,
    stepName: "Pranayama & Asana Shuddhi",
    sanskritName: "प्राणायामः एवं आसनशुद्धिः",
    category: "purvanga",
    kriyaInstruction: "Touch water and gently touch the mat/seat. Pray to Mother Earth for stability, purity, and spiritual elevation.",
    sacredSoundPrompt: "om",
    itemsNeeded: ["Asana (wool or kusha mat)", "Panchapatra water"],
    mantras: [
      {
        id: "asana-shuddhi",
        title: "Prithvi Asana Shuddhi Mantra",
        sanskrit: "ॐ पृथ्वि त्वया धृता लोका देवि त्वं विष्णुना धृता ।\nत्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥",
        transliteration: "om pṛthvi tvayā dhṛtā lokā devi tvaṁ viṣṇunā dhṛtā |\ntvaṁ ca dhāraya māṁ devi pavitraṁ kuru cāsanam ||",
        meaning: "O Mother Earth, the entire universe is upheld by you, and you are sustained by Lord Vishnu. Please sustain me in this meditation, and make my seat eternally pure.",
        sourceText: "Maha Nirvana Tantra & Padma Purana",
        kriya: "Touch a drop of water beneath the corner of your worship seat (asana)."
      }
    ]
  },
  {
    stepNumber: 4,
    stepName: "Deepa Sthapana & Lighting the Sacred Lamp",
    sanskritName: "दीपपूजनम् एवं प्रज्वलनम्",
    category: "purvanga",
    kriyaInstruction: "Light the brass or silver ghee/sesame oil lamp. Offer akshata (rice) and flowers to the base of the lamp.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Brass/Silver Diya", "Cow Ghee / Sesame Oil", "Cotton wick", "Flowers", "Akshata"],
    mantras: [
      {
        id: "deepa-pujan",
        title: "Deepa Jyoti Prarthana",
        sanskrit: "भो दीप त्वं ब्रह्मरूपोऽसि ज्योतिषां प्रभुरव्ययः ।\nआरोग्यं देहि मे पुष्टिं मतिं वृद्धिं च सर्वदा ॥\nशुभं करोति कल्याणमारोग्यं धनसम्पदः ।\nशत्रुबुद्धिविनाशाय दीपज्योतिर्नमोऽस्तु ते ॥",
        transliteration: "bho dīpa tvaṁ brahmarūpo'si jyotiṣāṁ prabhuravyayaḥ |\nārogyaṁ dehi me puṣṭiṁ matiṁ vṛddhiṁ ca sarvadā ||\nśubhaṁ karoti kalyāṇamārogyaṁ dhanasampadaḥ |\nśatrubuddhivināśāya dīpajyotirnamo'stu te ||",
        meaning: "O radiant lamp, you are the very manifestation of Brahman, the imperishable Lord of lights. Grant me radiant health, nourishment, and spiritual intellect. Salutations to the light of the lamp that bestows auspiciousness, welfare, and vanquishes all dark thoughts.",
        sourceText: "Skanda Purana",
        kriya: "Bow to the lighted lamp with folded hands and offer unbroken yellow rice (akshata)."
      }
    ]
  },
  {
    stepNumber: 5,
    stepName: "Ghanta & Shankha Poojana (Acoustic Invocation)",
    sanskritName: "घण्टा एवं शङ्ख पूजनम्",
    category: "purvanga",
    kriyaInstruction: "Rinse and ring the bronze bell with your left hand while chanting. Sprinkle sandalwood paste and flowers on the Shankha.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Bronze Temple Bell (Ghanta)", "Conch Shell (Shankha)", "Chandana", "Flowers"],
    mantras: [
      {
        id: "ghanta-vadan",
        title: "Ghanta Vadan & Bhootapasarana Mantra",
        sanskrit: "आगमार्थं तु देवानां गमनार्थं तु रक्षसाम् ।\nकुर्वे घण्टारवं तत्र देवताह्वानलक्षणम् ॥",
        transliteration: "āgamārthaṁ tu devānāṁ gamanārthaṁ tu rakṣasām |\nkurve ghaṇṭāravaṁ tatra devatāhvānalakṣaṇam ||",
        meaning: "I sound this sacred bell to welcome the divine gods and dispel all negative energies. It serves as the auspicious acoustic invocation of divinity.",
        sourceText: "Vaikhanasa Agama & Agni Purana",
        kriya: "Ring the bell gently and apply a tilaka of sandalwood on the Garuda figure of the bell."
      }
    ]
  },
  {
    stepNumber: 6,
    stepName: "Kalasha & Tirtha Avahanam (Consecration of Water)",
    sanskritName: "कलशपूजनम् एवं तीर्थावाहनम्",
    category: "purvanga",
    kriyaInstruction: "Hold your right hand over the Kalasha in Ankusha Mudra. Pray to the seven sacred rivers to sanctify the water into celestial nectar.",
    sacredSoundPrompt: "shankha",
    itemsNeeded: ["Copper/Brass Kalasha", "Mango leaves", "Coconut", "Water", "Betel nut", "Coin"],
    mantras: [
      {
        id: "kalasha-tirtha",
        title: "Sapta Tirtha Avahana Mantra",
        sanskrit: "गङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् संनिधिं कुरु ॥\nकलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः ।\nमूले त्वस्य स्थितो ब्रह्मा मध्ये मातृगणाः स्मृताः ॥",
        transliteration: "gaṅge ca yamune caiva godāvari sarasvati |\nnarmade sindhu kāveri jale'smin saṁnidhiṁ kuru ||\nkalaśasya mukhe viṣṇuḥ kaṇṭhe rudraḥ samāśritaḥ |\nmūle tvasya sthito brahmā madhye mātṛgaṇāḥ smṛtāḥ ||",
        meaning: "O sacred waters of Ganga, Yamuna, Godavari, Sarasvati, Narmada, Sindhu, and Kaveri: please manifest your divine presence in this pot! In the mouth of this Kalasha resides Vishnu, in its neck Lord Shiva, at its root Brahma, and in its center the Divine Mothers.",
        sourceText: "Rigvedic Khila & Padma Purana",
        kriya: "Show Ankusha Mudra and touch the rim of the Kalasha, invoking the seven sacred rivers."
      }
    ]
  },
  {
    stepNumber: 7,
    stepName: "Ganapati Smarana & Swasti Vachana",
    sanskritName: "गणपति स्मरणम् एवं स्वस्तिवाचनम्",
    category: "purvanga",
    kriyaInstruction: "Pray to Lord Vighnaharta Ganesha for unconditional removal of obstacles and recite the universal Vedic blessing.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Supari/Ganesha Murti", "Red flowers", "Durva grass", "Roli/Sindoor"],
    mantras: [
      {
        id: "swasti-vachana",
        title: "Rigvedic Swasti Vachana Suktam",
        sanskrit: "ॐ स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः ।\nस्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु ॥\nवक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।\nअविघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
        transliteration: "om svasti na indro vṛddhaśravāḥ svasti naḥ pūṣā viśvavedāḥ |\nsvasti nastārkṣyo ariṣṭanemiḥ svasti no bṛhaspatirdadhātu ||\nvakratuṇḍa mahākāya sūryakoṭi samaprabha |\navighnaṁ kuru me deva sarvakāryeṣu sarvadā ||",
        meaning: "May glorious Indra bless us with auspiciousness! May all-knowing Pushan bless us! May Tarksya (Garuda) of unhindered flight protect us! May Brihaspati grant us auspicious wisdom! O Lord Ganesha with curved trunk and mighty form, radiant like ten million suns, make all our undertakings free of obstacles forever.",
        sourceText: "Rigveda 1.89.6 & Ganesha Purana",
        kriya: "Offer red flowers and unbroken akshata at the feet of Lord Ganesha."
      }
    ]
  },
  {
    stepNumber: 8,
    stepName: "Vedic Desha-Kala Mahasankalpa",
    sanskritName: "महा-सङ्कल्पः",
    category: "purvanga",
    kriyaInstruction: "Take water, akshata, a betel nut, a coin, and a flower in your right palm. Place your left palm under the right palm, resting on your right knee, and solemnly resolve the ritual.",
    sacredSoundPrompt: "shankha",
    itemsNeeded: ["Panchapatra water", "Akshata", "Supari", "Coin", "Flower"],
    mantras: [
      {
        id: "sankalpa-core",
        title: "Vedic Cosmic Geography & Time Sankalpa",
        sanskrit: "ॐ तत्सत् । अद्य ब्रह्मणो द्वितीये परार्धे श्वेतवाराहकल्पे वैवस्वतमन्वन्तरे अष्टाविंशतितमे कलियुगे कलिप्रथमचरणे जम्बूद्वीपे भारतवर्षे भरतखण्डे आर्यावर्तैकदेशे पुण्यक्षेत्रे...\nमम आत्मनः श्रुतिस्मृतिपुराणोक्त फलप्राप्त्यर्थं, सकलदुरितोपशमनार्थं, धर्मार्थकाममोक्ष चतुर्विध पुरुषार्थ सिद्ध्यर्थं श्रीदेवतायाः प्रीत्यर्थं षोडशोपचार पूजां करिष्ये ॥",
        transliteration: "om tatsat | adya brahmaṇo dvitīye parārdhe śvetavārāhakalpe vaivasvatamanvantare aṣṭāviṁśatitame kaliyuge kaliprathamacaraṇe jambūdvīpe bhāratavarṣe bharatakhaṇḍe āryāvartaikadeśe puṇyakṣetre...\nmama ātmanaḥ śrutismṛtipurāṇokta phalaprāptyarthaṁ, sakaladuritopaśamanārthaṁ, dharmārthakāmamokṣa caturvidha puruṣārtha siddhyarthaṁ śrīdevatāyāḥ prītyarthaṁ ṣoḍaśopacāra pūjāṁ kariṣye ||",
        meaning: "Om Tat Sat. Today, in the second half of Brahma's lifespan, in the Shveta-Varaha Kalpa, in the Vaivasvata Manvantara, in the 28th Mahayuga's first quarter of Kaliyuga, in the continent of Jambu, in the land of Bharatavarsha... to obtain the spiritual fruits proclaimed in Shruti, Smriti, and Puranas, to eradicate all sins, and for attaining the 4 goals of life (Dharma, Artha, Kama, Moksha), I hereby undertake this Shodashopachara Pooja.",
        sourceText: "Shukla Yajurveda Madhyandina Shakha Samhita",
        kriya: "Drop the water, akshata, coin, and flower into the Arghya Patra in front of you."
      }
    ]
  },
  // ================= 16 PRADHANA SHODASHOPACHARAS =================
  {
    stepNumber: 9,
    stepName: "Upachara 1: Dhyanam & Avahanam (Meditation & Welcoming)",
    sanskritName: "ध्यानम् एवं आवाहनम्",
    category: "pradhana",
    kriyaInstruction: "Meditate upon the deity in the heart lotus, then show Avahana Mudra with both hands, inviting the divine presence into the consecrated murti or yantra with unbroken yellow rice.",
    sacredSoundPrompt: "shankha",
    itemsNeeded: ["Akshata", "Yellow/Red Flowers", "Avahana Mudra"],
    mantras: [
      {
        id: "avahana-purusha",
        title: "Rigvedic Purusha Suktam Avahana (Richa 1)",
        sanskrit: "ॐ सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥\nआगच्छ देव देवेश तेजोराशे जगत्पते ।\nक्रियमाणां मया पूजां गृहाण सुरसत्तम ॥ ॐ भूर्भुवः स्वः श्रीभगवते नमः आवाहनं समर्पयामि ।",
        transliteration: "om sahasraśīrṣā puruṣaḥ sahasrākṣaḥ sahasrapāt |\nsa bhūmiṁ viśvato vṛtvātyatiṣṭhaddaśāṅgulam ||\nāgaccha deva deveśa tejorāśe jagatpate |\nkriyamāṇāṁ mayā pūjāṁ gṛhāṇa surasattama || om bhūrbhuvaḥ svaḥ śrībhagavate namaḥ āvāhanaṁ samarpayāmi |",
        meaning: "The Supreme Cosmic Purusha has thousands of heads, thousands of eyes, and thousands of feet. Enveloping the universe completely, He transcends it by ten fingers' breadth. Come, O Lord of Lords, reservoir of divine radiance, accept this worship lovingly offered. I welcome the Supreme Divinity!",
        sourceText: "Rigveda 10.90.1 (Purusha Sukta) & Skanda Purana",
        kriya: "Display Avahana Mudra and offer flowers and akshata at the feet of the deity."
      }
    ]
  },
  {
    stepNumber: 10,
    stepName: "Upachara 2: Asanam (Offering of Sacred Throne)",
    sanskritName: "आसनम्",
    category: "pradhana",
    kriyaInstruction: "Offer unbroken akshata or a sacred seat/cloth beneath the murti, offering a celestial jewel-studded throne.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Akshata", "Pushpa", "Silk seat / Asana patra"],
    mantras: [
      {
        id: "asana-purusha",
        title: "Purusha Sukta Richa 2 & Asana Mantra",
        sanskrit: "ॐ पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम् ।\nउतामृतत्वस्येशानो यदन्नेनातिरोहति ॥\nरम्यं सुशोभनं दिव्यं सर्वसौख्यकरं शुभम् ।\nआसनं च मया दत्तं गृहाण परमेश्वर ॥ ॐ श्रीभगवते नमः आसनार्थे अक्षतान् समर्पयामि ।",
        transliteration: "om puruṣa evedaṁ sarvaṁ yadbhūtaṁ yacca bhavyam |\nutāmṛtatvasyeśāno yadannenātirohati ||\nramyaṁ suśobhanaṁ divyaṁ sarvasaukhyakaraṁ śubham |\nāsanaṁ ca mayā dattaṁ gṛhāṇa parameśvara || om śrībhagavate namaḥ āsanārthe akṣatān samarpayāmi |",
        meaning: "All that was, all that is, and all that ever shall be is indeed the Purusha. He is the master of immortality. O Supreme Lord, accept this graceful, radiant, and bliss-bestowing seat offered with devotion.",
        sourceText: "Rigveda 10.90.2",
        kriya: "Offer yellow akshata at the base of the deity."
      }
    ]
  },
  {
    stepNumber: 11,
    stepName: "Upachara 3: Padyam (Washing the Divine Feet)",
    sanskritName: "पाद्यम्",
    category: "pradhana",
    kriyaInstruction: "Offer a spoonful of pure water infused with sandalwood and rose petals to the divine lotus feet.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Panchapatra", "Achamani", "Snana Patra / Arghya bowl"],
    mantras: [
      {
        id: "padya-purusha",
        title: "Purusha Sukta Richa 3 & Padyam Mantra",
        sanskrit: "ॐ एतावानस्य महिमातो ज्यायांश्च पूरुषः ।\nपादोऽस्य विश्वा भूतानि त्रिपादस्यामृतं दिवि ॥\nपाद्यं गृहाण देवेश सर्वक्षेमकर प्रभो ।\nभक्त्या समर्पितं देव त्राहि मां भवसागरात् ॥ ॐ श्रीभगवते नमः पादयोः पाद्यं समर्पयामि ।",
        transliteration: "om etāvānasya mahimāto jyāyāṁśca pūruṣaḥ |\npādo'sya viśvā bhūtāni tripādasyāmṛtaṁ divi ||\npādyaṁ gṛhāṇa deveśa sarvakṣemakara prabho |\nbhaktyā samarpitaṁ deva trāhi māṁ bhavasāgarāt || om śrībhagavate namaḥ pādayoḥ pādyaṁ samarpayāmi |",
        meaning: "Such is His cosmic grandeur, yet the Purusha is even greater. All creatures constitute merely one-fourth of Him; three-fourths dwell immortally in the transcendent realm. Accept this cooling foot-water, O Lord, and ferry me across the ocean of worldly existence.",
        sourceText: "Rigveda 10.90.3",
        kriya: "Offer one spoon of water at the lotus feet into the Arghya Patra."
      }
    ]
  },
  {
    stepNumber: 12,
    stepName: "Upachara 4: Arghyam (Auspicious Hand Offering)",
    sanskritName: "अर्घ्यम्",
    category: "pradhana",
    kriyaInstruction: "Offer water mixed with fragrant sandalwood paste, unbroken rice, and flower petals to the deity's hands.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Water", "Chandana", "Akshata", "Pushpa"],
    mantras: [
      {
        id: "arghya-purusha",
        title: "Purusha Sukta Richa 4 & Arghyam Mantra",
        sanskrit: "ॐ त्रिपादूर्ध्व उदैत्पुरुषः पादोऽस्येहाभवत्पुनः ।\nततो विष्वङ्व्यक्रामत्साशनानशने अभि ॥\nगन्धपुष्पाक्षतैर्युक्तमर्घ्यं सम्पादितं मया ।\nगृहाण देव देवेश प्रसन्नो भव सर्वदा ॥ ॐ श्रीभगवते नमः हस्तयोः अर्घ्यं समर्पयामि ।",
        transliteration: "om tripādūrdhva udaitpuruṣaḥ pādo'syehābhavatpunaḥ |\ntato viṣvaṅvyakrāmatsāśanānaśane abhi ||\ngandhapuṣpākṣatairyuktamarghyaṁ sampāditaṁ mayā |\ngṛhāṇa deva deveśa prasanno bhava sarvadā || om śrībhagavate namaḥ hastayoḥ arghyaṁ samarpayāmi |",
        meaning: "With three quarters the Purusha rose upward, while one quarter manifest here repeatedly, extending over both animate and inanimate creation. Accept this fragrant Arghya infused with sandalwood and flowers.",
        sourceText: "Rigveda 10.90.4",
        kriya: "Offer one spoonful of water with flowers to the deity's hands into the receptacle."
      }
    ]
  },
  {
    stepNumber: 13,
    stepName: "Upachara 5: Achamaniyam (Mouth Purification)",
    sanskritName: "आचमनीयम्",
    category: "pradhana",
    kriyaInstruction: "Offer a spoonful of pure camphor-infused water for the deity's mouth purification.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Camphor-infused water", "Achamani"],
    mantras: [
      {
        id: "achamaniya-purusha",
        title: "Purusha Sukta Richa 5 & Achamaniya Mantra",
        sanskrit: "ॐ तस्माद्विराडजायत विराजो अधि पूरुषः ।\nस जातो अत्यरिच्यत पश्चाद्भूमिमथो पुरः ॥\nकर्पूरेण सुवासितं निर्मलं तोयमुत्तमम् ।\nगृहाणाचमनीयं च मया दत्तं सुरेश्वर ॥ ॐ श्रीभगवते नमः मुखे आचमनीयं समर्पयामि ।",
        transliteration: "om tasmādvirāḍajāyata virājo adhi pūruṣaḥ |\nsa jāto atyaricyata paścādbhūmimatho puraḥ ||\nkarpūreṇa suvāsitaṁ nirmalaṁ toyamuttamam |\ngṛhāṇācamanīyaṁ ca mayā dattaṁ sureśvara || om śrībhagavate namaḥ mukhe ācamanīyaṁ samarpayāmi |",
        meaning: "From Him was born the cosmic Virat, and from Virat the Cosmic Person arose. Born, He reached beyond the earth both behind and before. O Supreme Divinity, accept this crystal-clear water scented with pure edible camphor for refreshing your mouth.",
        sourceText: "Rigveda 10.90.5",
        kriya: "Offer a spoon of water into the plate for sipping."
      }
    ]
  },
  {
    stepNumber: 14,
    stepName: "Upachara 6: Panchamrita & Shuddhodaka Snanam (Sacred Bath)",
    sanskritName: "पञ्चामृत एवं शुद्धोदक स्नानम्",
    category: "pradhana",
    kriyaInstruction: "Bathe the deity (or sprinkle with betel leaf/tulasi if using unwaterproof murti) in sequence with: 1. Cow milk, 2. Curd, 3. Ghee, 4. Honey, 5. Sugar, followed by fresh pure Gangajal.",
    sacredSoundPrompt: "shankha",
    itemsNeeded: ["Cow Milk (Payah)", "Curd (Dadhi)", "Ghee (Ghrita)", "Honey (Madhu)", "Cane Sugar (Sharkara)", "Pure Gangajal"],
    mantras: [
      {
        id: "panchamrita-snana",
        title: "Panchamrita & Rigvedic Snana Suktam",
        sanskrit: "ॐ पयः पृथिव्यां पय ओषधीषु पयो दिव्यन्तरिक्षे पयो धाः । (दुग्ध स्नानम्)\nॐ दधिक्राव्णो अकारिषं जिष्णोरश्वस्य वाजिनः । (दधि स्नानम्)\nॐ घृतं घृतपावानः पिबत वसां वसापावानः पिबतान्तरिक्षस्य हविर्हविर्धानम् । (घृत स्नानम्)\nॐ मधु वाता ऋतायते मधु क्षरन्ति सिन्धवः । माध्वीर्नः सन्त्वोषधीः । (मधु स्नानम्)\nॐ अपां रसमुद्वयसं सूर्ये सन्तं समाहितम् । अपां रसस्य यो रसस्तं वो गृह्णाम्युत्तमम् । (शर्करा स्नानम्)\nॐ आपो हि ष्ठा मयोभुवस्ता न ऊर्जे दधातन । महे रणाय चक्षसे ॥ (शुद्धोदक स्नानम्)",
        transliteration: "om payaḥ pṛthivyāṁ paya oṣadhīṣu payo divyantarikṣe payo dhāḥ | (milk)\nom dadhikrāvṇo akāriṣaṁ jiṣṇoraśvasya vājinaḥ | (curd)\nom ghṛtaṁ ghṛtapāvānaḥ pibata... (ghee)\nom madhu vātā ṛtāyate madhu kṣaranti sindhavaḥ | (honey)\nom apāṁ rasamudvayasaṁ... (sugar)\nom āpo hi ṣṭhā mayobhuvastā na ūrje dadhātana | mahe raṇāya cakṣase || (pure water)",
        meaning: "O waters of divine consciousness, you are indeed the sources of health and joy! Bless us with spiritual nourishment and divine vision. We offer milk, curd, ghee, honey, and cane sugar followed by the holy waters of Ganga.",
        sourceText: "Rigveda 10.9.1 & Shukla Yajurveda 23.32",
        kriya: "Gently pour or sprinkle each nectar with devotion, followed by pure fragrant Gangajal, and dry with a soft clean cloth."
      }
    ]
  },
  {
    stepNumber: 15,
    stepName: "Upachara 7: Vastra, Upavastra & Yajnopavita (Sacred Garments & Thread)",
    sanskritName: "वस्त्रम्, उपवस्त्रम् एवं यज्ञोपवीतम्",
    category: "pradhana",
    kriyaInstruction: "Offer new sanctified silk/cotton clothes or raw sacred cotton thread (Kalawa) along with the three-fold sacred thread (Janeu).",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Silk garments or Kalawa thread", "Yajnopavita (Janeu)", "Akshata"],
    mantras: [
      {
        id: "vastra-purusha",
        title: "Yajnopavita & Vastra Mantras",
        sanskrit: "ॐ तं यज्ञं बर्हिषि प्रौक्षन्पुरुषं जातमग्रतः ।\nतेन देवा अयजन्त साध्या ऋषयश्च ये ॥\nशीतवातोष्णसन्त्राणं लज्जाया रक्षणं परम् ।\nदेहालङ्करणं वस्त्रमतः शान्तिं प्रयच्छ मे ॥\nयज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात् ।\nआयुष्यमग्र्यं प्रतिमुञ्च शुभ्रं यज्ञोपवीतं बलमस्तु तेजः ॥ ॐ श्रीभगवते नमः वस्त्र-यज्ञोपवीतं समर्पयामि ।",
        transliteration: "om taṁ yajñaṁ barhiṣi praukṣanpuruṣaṁ jātamagrataḥ |\ntena devā ayajanta sādhyā ṛṣayaśca ye ||\nśītavātoṣṇasantrāṇaṁ lajjāyā rakṣaṇaṁ param |\ndehālaṅkaraṇaṁ vastramataḥ śāntiṁ prayaccha me ||\nyajñopavītaṁ paramaṁ pavitraṁ prajāpateryatsahajaṁ purastāt |\nāyuṣyamagryaṁ pratimuñca śubhraṁ yajñopavītaṁ balamastu tejaḥ ||",
        meaning: "They anointed the Purusha, born from the beginning, as the cosmic sacrifice; with Him the Devas, Sadhyas, and Rishis performed the sacred offering. The Yajnopavita is supremely pure, born with Prajapati Himself; bestowing radiant vitality, longevity, supreme strength, and illumination.",
        sourceText: "Rigveda 10.90.7 & Paraskara Grihya Sutra 2.2",
        kriya: "Adorn the deity with the garments and drape the Yajnopavita from left shoulder to right waist."
      }
    ]
  },
  {
    stepNumber: 16,
    stepName: "Upachara 8: Chandanam & Gandha (Sandalwood & Fragrance)",
    sanskritName: "गन्धः एवं चन्दनम्",
    category: "pradhana",
    kriyaInstruction: "Take cooling Malayagiri sandalwood paste with the ring finger (Anamika) and apply it gently between the eyebrows (Ajna Chakra) of the deity, followed by kumkum and ashtagandha.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Malayagiri Chandana paste", "Roli / Kumkuma", "Ashtagandha", "Attar / Sugandha"],
    mantras: [
      {
        id: "gandha-purusha",
        title: "Rigvedic Sri Suktam Gandhadvara & Chandana Mantra",
        sanskrit: "ॐ तस्माद्यज्ञात्सर्वहुत ऋचः सामानि जज्ञिरे ।\nछन्दांसि जज्ञिरे तस्माद्यजुस्तस्मादजायत ॥\nगन्धद्वारां दुराधर्षाम् नित्यपुष्टां करीषिणीम् ।\nईश्वरीं सर्वभूतानां तामिहोपह्वये श्रियम् ॥\nश्रीखण्डं चन्दनं दिव्यं गन्धाढ्यं सुमनोहरम् ।\nविलेपनं सुरश्रेष्ठ चन्दनं प्रतिगृह्यताम् ॥ ॐ श्रीभगवते नमः गन्धानुलेपनं समर्पयामि ।",
        transliteration: "om tasmādyajñātsarvahuta ṛcaḥ sāmāni jajñire |\nchandāṁsi jajñire tasmādyajustasmādajāyata ||\ngandhadvārāṁ durādharṣām nityapuṣṭāṁ karīṣiṇīm |\nīśvarīṁ sarvabhūtānāṁ tāmihopahvaye śriyam ||\nśrīkhaṇḍaṁ candanaṁ divyaṁ gandhāḍhyaṁ sumanoharam |\nvilepanaṁ suraśreṣṭha candanaṁ pratigṛhyatām ||",
        meaning: "From that universal sacrifice came the Rigveda, Samaveda, the poetic meters, and the Yajurveda. I invoke the goddess of prosperity, who is perceived through fragrant aromas, unassailable, ever nourished. O Lord of Gods, accept this celestial cooling Sandalwood paste.",
        sourceText: "Rigveda 10.90.9 & Sri Suktam (Rigveda Khila 5.9)",
        kriya: "Apply sandalwood paste and vermilion with the ring finger of the right hand."
      }
    ]
  },
  {
    stepNumber: 17,
    stepName: "Upachara 9: Akshata (Unbroken Sacred Rice)",
    sanskritName: "अक्षतसमर्पणम्",
    category: "pradhana",
    kriyaInstruction: "Offer unbroken grains of white rice, lightly tinted with turmeric or vermilion, expressing complete wholeness and non-destruction.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Unbroken white rice (Akshata)", "Turmeric / Roli"],
    mantras: [
      {
        id: "akshata-mantra",
        title: "Akshata Samarpana Mantra",
        sanskrit: "अक्षताश्च सुरश्रेष्ठ कुङ्कुमाक्ताः सुशोभिताः ।\nमया निवेदिता भक्त्या गृहाण परमेश्वर ॥\nॐ श्रीभगवते नमः अक्षतान् समर्पयामि ।",
        transliteration: "akṣatāśca suraśreṣṭha kuṅkumāktāḥ suśobhitāḥ |\nmayā niveditā bhaktyā gṛhāṇa parameśvara ||\nom śrībhagavate namaḥ akṣatān samarpayāmi |",
        meaning: "O Supreme Lord, accept these unbroken grains of rice, adorned with sacred kumkuma and offered with pure single-pointed devotion.",
        sourceText: "Puranic Agamas",
        kriya: "Shower unbroken rice gently onto the deity."
      }
    ]
  },
  {
    stepNumber: 18,
    stepName: "Upachara 10: Pushpam, Bilvam, Tulasi & Garland (Flowers & Leaves)",
    sanskritName: "पुष्पम्, बिल्वपत्रम् एवं तुलसीदलम्",
    category: "pradhana",
    kriyaInstruction: "Offer fragrant fresh flowers, Bilva leaves (to Shiva), Tulasi leaves (to Vishnu/Krishna), or red hibiscus (to Devi/Ganesha), followed by a floral garland.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Fresh fragrant flowers", "Bilva leaves (tri-foliate)", "Tulasi leaves", "Floral Garland (Vanamala)"],
    mantras: [
      {
        id: "pushpa-purusha",
        title: "Purusha Sukta Richa 10 & Pushpa Samarpana",
        sanskrit: "ॐ तस्मादश्वा अजायन्त ये के चोभयादतः ।\nगावो ह जज्ञिरे तस्मात्तस्माज्जाता अजावयः ॥\nमाल्यादीनि सुगन्धीनि मालत्यादीनि वै प्रभो ।\nमया हृतानि पूजार्थं पुष्पाणि प्रतिगृह्यताम् ॥\nतुलसीदल / बिल्वपत्रं समर्पयामि ॥ ॐ श्रीभगवते नमः पुष्पं पुष्पमालां च समर्पयामि ।",
        transliteration: "om tasmādaśvā ajāyanta ye ke cobhayādataḥ |\ngāvo ha jajñire tasmāttasmājjātā ajāvayaḥ ||\nmālyādīni sugandhīni mālatyādīni vai prabho |\nmayā hṛtāni pūjārthaṁ puṣpāṇi pratigṛhyatām ||\ntulasīdala / bilvapatraṁ samarpayāmi ||",
        meaning: "From Him were born horses, cows, goats, and all creatures. O Lord, I have brought fragrant blossoms such as jasmine, lotus, and sacred leaves for your adoration. Please accept them.",
        sourceText: "Rigveda 10.90.10",
        kriya: "Place the garland around the deity's shoulders and flowers at the lotus feet."
      }
    ]
  },
  {
    stepNumber: 19,
    stepName: "Upachara 11: Dhupam (Consecrated Incense)",
    sanskritName: "धूपम्",
    category: "pradhana",
    kriyaInstruction: "Wave fragrant herbal incense (guggul, frankincense, sandalwood) in circular clockwise motions around the deity with the right hand while ringing the bell with the left hand.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Incense sticks (Dhoop)", "Guggulu / Sambrani", "Dhoop-patra", "Bell"],
    mantras: [
      {
        id: "dhupa-purusha",
        title: "Yajurvedic Dhupa Mantra & Dhupa Dhyana",
        sanskrit: "ॐ धूरसि धूर्व धूर्वन्तं धूर्व तं योऽस्मान्धूर्वति तं धूर्व यं वयं धूर्वामः ।\nदेवानामसि वह्नितमं सस्नितमं पप्रितमं जुष्टतमं देवहूतमम् ॥\nवनस्पतिरसोद्भूतो गन्धाढ्यो गन्ध उत्तमः ।\nआघ्रेयः सर्वदेवानां धूपोऽयं प्रतिगृह्यताम् ॥ ॐ श्रीभगवते नमः धूपमाघ्रापयामि ।",
        transliteration: "om dhūrasi dhūrva dhūrvantaṁ dhūrva taṁ yo'smāndhūrvati taṁ dhūrva yaṁ vayaṁ dhūrvāmaḥ |\ndevānāmasi vahnitamaṁ sasnitamaṁ papritamaṁ juṣṭatamaṁ devahūtamam ||\nvanaspatirasodbhūto gandhāḍhyo gandha uttamaḥ |\nāghreyaḥ sarvadevānāṁ dhūpo'yaṁ pratigṛhyatām ||",
        meaning: "You are the destroyer of all negativity! Burn away all impediments and malefic vibrations. Born from the pure essence of sacred medicinal flora, supreme in fragrance, relished by all Devas: please accept this fragrant incense offering.",
        sourceText: "Shukla Yajurveda Samhita 1.8",
        kriya: "Wave the incense 4 times to the feet, 2 times to the navel, 1 time to the face, and 7 times to the whole murti."
      }
    ]
  },
  {
    stepNumber: 20,
    stepName: "Upachara 12: Deepam (Offering of Ghee Lamp Light)",
    sanskritName: "दीपम्",
    category: "pradhana",
    kriyaInstruction: "Wave the glowing cow ghee lamp clockwise before the deity, dispelling the darkness of spiritual ignorance (Avidya). Ring the bell.",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Ghee Diya", "Bell"],
    mantras: [
      {
        id: "deepa-upachara",
        title: "Purusha Sukta Richa 13 & Deepa Samarpana",
        sanskrit: "ॐ चन्द्रमा मनसो जातश्चक्षोः सूर्यो अजायत ।\nमुखादिन्द्रश्चाग्निश्च प्राणाद्वायुरजायत ॥\nसाज्यं च त्रिवर्तिसंयुक्तं वह्निना योजितं मया ।\nदीपं गृहाण देवेश त्रैलोक्यतिमिरापहम् ॥\nभक्त्या दीपं प्रयच्छामि देवाय परमात्मने ।\nत्राहि मां निरयाद्घोराज्ज्योतिरुत्तम भव प्रभो ॥ ॐ श्रीभगवते नमः दीपं दर्शयामि ।",
        transliteration: "om candramā manaso jātaścakṣoḥ sūryo ajāyata |\nmukhādindraścāgniśca prāṇādvāyurajāyata ||\nsājyaṁ ca trivartisaṁyuktaṁ vahninā yojitaṁ mayā |\ndīpaṁ gṛhāṇa deveśa trailokyatimirāpaham ||\nbhaktyā dīpaṁ prayacchāmi devāya paramātmane |\ntrāhi māṁ nirayādghorājjyotiruttama bhava prabho ||",
        meaning: "From His cosmic mind arose the Moon, from His eyes the Sun, from His mouth Indra and Agni, and from His breath the cosmic Wind. O Lord of the three worlds, accept this lamp with ghee and three wicks that banishes universal darkness. Illuminate my soul with supreme spiritual light!",
        sourceText: "Rigveda 10.90.13 & Skanda Purana",
        kriya: "Wave the lamp circularly before the murti, then offer water to purify your hands."
      }
    ]
  },
  {
    stepNumber: 21,
    stepName: "Upachara 13: Naivedyam, Tambulam & Ritu-phalam (Food Offering & Five Pranas)",
    sanskritName: "नैवेद्यम्, ताम्बूलम् एवं ऋतुफलम्",
    category: "pradhana",
    kriyaInstruction: "Uncover pure sattvic food/sweets/fruits. Sprinkle water clockwise around the food, and offer the food using Dhenu Mudra while chanting the five Prana mantras.",
    sacredSoundPrompt: "om",
    itemsNeeded: ["Sattvic food / Sweets / Kheer", "Fresh Fruits", "Betel leaves (Paan)", "Supari", "Cloves/Cardamom", "Water"],
    mantras: [
      {
        id: "naivedya-prana",
        title: "Pancha Prana Ahuti & Naivedya Mantras",
        sanskrit: "ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥\nसत्यं त्वर्तेन परिषञ्चामि । अमृतोपस्तरणमसि स्वाहा ॥\nॐ प्राणाय स्वाहा । ॐ अपानाय स्वाहा । ॐ व्यानाय स्वाहा । ॐ उदानाय स्वाहा । ॐ समानाय स्वाहा ॥\nॐ ब्रह्मणे स्वाहा । अमृतापिधानमसि स्वाहा ॥\nपूगीफलं महद्दिव्यं नागवल्लीदलैर्युतम् ।\nएलादिचूर्णसंयुक्तं ताम्बूलं प्रतिगृह्यताम् ॥ ॐ श्रीभगवते नमः नैवेद्यं ताम्बूलं च समर्पयामि ।",
        transliteration: "om bhūrbhuvaḥ svaḥ | tatsaviturvareṇyaṁ... |\nsatyaṁ tvartena pariṣañcāmi | amṛtopastaraṇamasi svāhā ||\nom prāṇāya svāhā | om apānāya svāhā | om vyānāya svāhā | om udānāya svāhā | om samānāya svāhā ||\nom brahmaṇe svāhā | amṛtāpidhānamasi svāhā ||\npūgīphalaṁ mahaddivyaṁ nāgavallīdalairyutam |\nelādicūrṇasaṁyuktaṁ tāmbūlaṁ pratigṛhyatām ||",
        meaning: "Surrounding this offering with truth and divine nectar: We offer to Prana (inhalation), Apana (downward breath), Vyana (diffusive breath), Udana (ascending breath), and Samana (balancing breath). We offer to Supreme Brahman! Please also accept this fragrant betel leaf with betel nut, cardamom, and cloves.",
        sourceText: "Taittiriya Brahmana & Chandogya Upanishad 5.19",
        kriya: "Circle water around the plate 3 times, show Dhenu Mudra, and gently wave five fingers inward toward the deity."
      }
    ]
  },
  {
    stepNumber: 22,
    stepName: "Upachara 14: Nirajanam / Karpura Aarti (Camphor Flame Adoration)",
    sanskritName: "नीराजनम् (कर्पूर आरती)",
    category: "uttaranga",
    kriyaInstruction: "Light pure natural camphor in an Aarti plate. Stand up (if able) and wave the camphor flame in expansive concentric circles while ringing the bell, blowing the shankha, and singing praise.",
    sacredSoundPrompt: "shankha",
    itemsNeeded: ["Aarti Plate", "Natural Camphor (Karpura)", "Bell", "Shankha"],
    mantras: [
      {
        id: "karpura-gauram",
        title: "Karpura Nirajana & Shiva Stuti",
        sanskrit: "कदलीगर्भसम्भूतं कर्पूरं तु प्रदीपितम् ।\nआरार्तिकमहं कुर्वे पश्य मे वरदो भव ॥\nकर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम् ।\nसदा वसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि ॥\nॐ जयन्ती मङ्गला काली भद्रकाली कपालिनी ।\nदुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोऽस्तु ते ॥ ॐ श्रीभगवते नमः कर्पूरनीराजनं समर्पयामि ।",
        transliteration: "kadalīgarbhasambhūtaṁ karpūraṁ tu pradīpitam |\nārārtikamahaṁ kurve paśya me varado bhava ||\nkarpūragauram karuṇāvatāraṁ saṁsārasāraṁ bhujagendrahāram |\nsadā vasantaṁ hṛdayāravinde bhavaṁ bhavānīsahitaṁ namāmi ||\nom jayantī maṅgalā kālī bhadrakālī kapālinī |\ndurgā kṣamā śivā dhātrī svāhā svadhā namo'stu te ||",
        meaning: "Lighting this pure camphor, I perform this wave-offering of light. Look upon me with grace, O Supreme Divinity! White like camphor, embodiment of compassion, essence of the world, wearing the serpent king as garland, eternally residing in the lotus of my heart: I bow to Shiva together with Mother Bhavani.",
        sourceText: "Yajurvedic Brihad-Aranyaka & Skanda Purana",
        kriya: "Wave the aarti plate clockwise in rhythm, take the holy light over eyes and crown of head."
      }
    ]
  },
  {
    stepNumber: 23,
    stepName: "Upachara 15: Pradakshina & Sashtanga Namaskaram (Circumambulation & Surrender)",
    sanskritName: "प्रदक्षिणा एवं साष्टाङ्ग प्रणामः",
    category: "uttaranga",
    kriyaInstruction: "Circumambulate clockwise around the sanctum or spin around your own axis 3 times clockwise with folded hands, followed by full Sashtanga prostration (8 limbs touching the earth).",
    sacredSoundPrompt: "bell",
    itemsNeeded: ["Akshata or flowers in hand", "Clean prayer mat (Asana)"],
    mantras: [
      {
        id: "pradakshina-mantra",
        title: "Atma Pradakshina & Namaskara Mantra",
        sanskrit: "यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि प्रणश्यन्ति प्रदक्षिणपदे पदे ॥\nअन्यथा शरणं नास्ति त्वमेव शरणं मम ।\nतस्मात्कारुण्यभावेन रक्ष मां परमेश्वर ॥\nउरसा शिरसा दृष्ट्या मनसा वचसा तथा ।\nपद्भ्यां कराभ्यां कर्णाभ्यां प्रणामोऽष्टाङ्ग उच्यते ॥ ॐ श्रीभगवते नमः प्रदक्षिणा-नमस्कारान् समर्पयामि ।",
        transliteration: "yāni kāni ca pāpāni janmāntarakṛtāni ca |\ntāni tāni praṇaśyanti pradakṣiṇapade pade ||\nanyathā śaraṇaṁ nāsti tvameva śaraṇaṁ mama |\ntasmātkāruṇyabhāvena rakṣa māṁ parameśvara ||\nurasā śirasā dṛṣṭyā manasā vacasā tathā |\npadbhyāṁ karābhyāṁ karṇābhyāṁ praṇāmo'ṣṭāṅga ucyate ||",
        meaning: "Whatever sins have been committed across all my births, let them all be dissolved step by step with each clockwise pradakshina. I have no other refuge in the cosmos; You alone are my ultimate sanctuary. Therefore, out of your boundless compassion, protect me! I bow with all eight limbs: chest, head, eyes, mind, speech, feet, hands, and ears.",
        sourceText: "Brahma Purana & Narada Pancharatra",
        kriya: "Turn around clockwise 3 times on the spot, then prostrate fully on the ground."
      }
    ]
  },
  {
    stepNumber: 24,
    stepName: "Upachara 16: Mantrapushpanjali, Kshama Prarthana & Visarjana",
    sanskritName: "मन्त्रपुष्पाञ्जलिः, क्षमाप्रार्थना एवं समर्पणम्",
    category: "uttaranga",
    kriyaInstruction: "Offer a cupped handful of flowers (Pushpanjali) reciting the Vedic kingdom-prosperity hymn, beg forgiveness for any liturgical errors, and dedicate all fruits to Brahman.",
    sacredSoundPrompt: "shankha",
    itemsNeeded: ["Flowers in both hands", "Panchapatra water drop"],
    mantras: [
      {
        id: "mantra-pushpanjali",
        title: "Vedic Rajaadhiraja Pushpanjali & Kshama Prarthana",
        sanskrit: "ॐ यज्ञेन यज्ञमयजन्त देवास्तानि धर्माणि प्रथमान्यासन् ।\nते ह नाकं महिमानः सचन्त यत्र पूर्वे साध्याः सन्ति देवाः ॥\nॐ राजाधिराजाय प्रसह्यसाहिने नमो वयं वैश्रवणाय कुर्महे ।\nस मे कामान्कामकामाय मह्यं कामेश्वरो वैश्रवणो ददातु । कुबेराय वैश्रवणाय महाराजाय नमः ॥\n\nआवाहनं न जानामि न जानामि विसर्जनम् ।\nपूजाकर्म न जानामि क्षमस्व परमेश्वर ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं सुरेश्वर ।\nयत्पूजितं मया देव परिपूर्णं तदस्तु मे ॥\n\nकायेन वाचा मनसेन्द्रियैर्वा बुद्धात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै नारायणायेति समर्पयामि ॥",
        transliteration: "om yajñena yajñamayajanta devāstāni dharmāṇi prathamānyāsan |\nte ha nākaṁ mahimānaḥ sacanta yatra pūrve sādhyāḥ santi devāḥ ||\nom rājādhirājāya prasahyasāhine namo vayaṁ vaiśravaṇāya kurmahe...\nāvāhanaṁ na jānāmi na jānāmi visarjanam |\npūjākarma na jānāmi kṣamasva parameśvara ||\nmantrahīnaṁ kriyāhīnaṁ bhaktihīnaṁ sureśvara |\nyatpūjitaṁ mayā deva paripūrṇaṁ tadastu me ||\nkāyena vācā manasendriyairvā buddhātmanā vā prakṛteḥ svabhāvāt |\nkaromi yadyatsakalaṁ parasmai nārāyaṇāyeti samarpayāmi ||",
        meaning: "By sacrifice the Devas offered sacrifice; these were the primordial cosmic laws. They attained highest heaven where ancient radiant beings dwell. Salutations to the King of Kings, Vaisravana Kubera! O Lord, I do not know how to invoke or release You; I do not know the precise ritual rules; please forgive all faults. Whatever worship I have offered lacking in mantras, actions, or devotion, please render it completely perfect by Your grace! Whatever I perform through body, speech, mind, senses, or nature, I dedicate entirely to the Supreme Narayana.",
        sourceText: "Rigveda 1.164.50 / Taittiriya Aranyaka 1.31 & Srimad Bhagavatam 11.2.36",
        kriya: "Drop the cupped flowers at the feet of the Lord, sip a drop of water as Tirtha Prasada."
      }
    ]
  }
];
