import { SankalpaParams } from "../types/poojaVidhiTypes";

export function generateVedicSankalpaText(params: SankalpaParams): {
  sanskrit: string;
  transliteration: string;
  english: string;
} {
  const {
    kaliyugaYear,
    vikramSamvat,
    ayana,
    ritu,
    masa,
    paksha,
    tithi,
    vasara,
    nakshatra,
    gotra,
    sadhakaName,
    placeName,
    deityTarget,
    pujaPurpose
  } = params;

  const sanskrit = `ॐ विष्णुर्विष्णुर्विष्णुः । ॐ नमः परमात्मने श्रीपुराणपुरुषोत्तमस्य श्रीविष्णोराज्ञया प्रवर्त्तमानस्य अद्य श्रीब्रह्मणो द्वितीये परार्धे श्वेतवाराहकल्पे वैवस्वतमन्वन्तरे अष्टाविंशतितमे कलियुगे कलिप्रथमचरणे ${kaliyugaYear} गताब्दे, विक्रम संवत्सरे ${vikramSamvat}, जम्बूद्वीपे भारतवर्षे भरतखण्डे आर्यावर्तैकदेशे ${placeName || "पुण्यदेशे"},
श्रीसूर्ये ${ayana === "Uttarayana" ? "उत्तरायणे" : "दक्षिणायने"}, ${ritu} ऋतौ, महामाङ्गल्यप्रदे ${masa} मासे, ${paksha === "Shukla" ? "शुक्लपक्षे" : "कृष्णपक्षे"}, ${tithi} तिथौ, ${vasara} वासरे, ${nakshatra} नक्षत्रे,
${gotra ? gotra + " गोत्रोत्पन्नस्य" : "काश्यपगोत्रोत्पन्नस्य"} ${sadhakaName ? sadhakaName + " शर्मणः/वर्मणः/गुप्तस्य" : "सपरिवारस्य आत्मनः"},
श्रुतिस्मृतिपुराणोक्त पुण्यफलप्राप्त्यर्थं, मम सपरिवारस्य कायिक-वाचिक-मानसिक त्रिविध पापोपशमनार्थं,
धर्म-अर्थ-काम-मोक्ष चतुर्विध पुरुषार्थ सिद्ध्यर्थं,
${deityTarget ? "श्री" + deityTarget + " देवतायाः प्रसादेन" : "सर्वदेवताप्रसादेन"} ${pujaPurpose || "सर्वशान्ति-आरोग्य-ऐश्वर्य-प्राप्त्यर्थं"},
यथाज्ञानेन यथाशक्ति यथामिलितोपचारैः षोडशोपचार पूजां अहं करिष्ये ॥ तत्सत् ॥`;

  const transliteration = `om viṣṇurviṣṇurviṣṇuḥ | om namaḥ paramātmane śrīpurāṇapuruṣottamasya śrīviṣṇorājñayā pravarttamānasya adya śrībrahmaṇo dvitīye parārdhe śvetavārāhakalpe vaivasvatamanvantare aṣṭāviṁśatitame kaliyuge kaliprathamacaraṇe ${kaliyugaYear} gatābde, vikrama saṁvatsare ${vikramSamvat}, jambūdvīpe bhāratavarṣe bharatakhaṇḍe āryāvartaikadeśe ${placeName || "puṇyadeśe"},
śrīsūrye ${ayana === "Uttarayana" ? "uttarāyaṇe" : "dakṣiṇāyane"}, ${ritu} ṛtau, mahāmāṅgalyaprade ${masa} māse, ${paksha === "Shukla" ? "śuklapakṣe" : "kṛṣṇapakṣe"}, ${tithi} tithau, ${vasara} vāsare, ${nakshatra} nakṣatre,
${gotra ? gotra + " gotrotpannasya" : "kāśyapagrotrotpannasya"} ${sadhakaName ? sadhakaName : "saparivārasya ātmanaḥ"},
śrutismṛtipurāṇokta puṇyaphalaprāptyarthaṁ, mama saparivārasya kāyika-vācika-mānasika trividha pāpopaśamanārthaṁ,
dharma-artha-kāma-mokṣa caturvidha puruṣārtha siddhyarthaṁ,
${deityTarget ? "śrī" + deityTarget + " devatāyāḥ prasādena" : "sarvadevatāprasādena"} ${pujaPurpose || "sarvaśānti-ārogya-aiśvarya-prāptyarthaṁ"},
yathājñānena yathāśakti yathāmilitopacāraiḥ ṣoḍaśopacāra pūjāṁ ahaṁ kariṣye || tatsat ||`;

  const english = `Om Vishnu, Vishnu, Vishnu. Salutations to the Supreme Soul. In accordance with the divine cosmic will of the primordial Purushottama Lord Vishnu, today, in the second half (Dvitiya Parardha) of Lord Brahma's cosmic lifespan, in the Shveta-Varaha Kalpa, in the Vaivasvata Manvantara, in the 28th Mahayuga's first quarter of Kaliyuga (elapsed year ${kaliyugaYear}, Vikram Samvat ${vikramSamvat}), in the continent of Jambudvipa, in the sacred realm of Bharatavarsha, in the region of ${placeName || "this holy land"};
During the Sun's ${ayana}, in the season of ${ritu}, in the auspicious month of ${masa}, in the ${paksha} fortnight, on the ${tithi} Tithi, on the day of ${vasara}, under the star of ${nakshatra};
I, born in the lineage of ${gotra || "Kashyapa"} Gotra, named ${sadhakaName || "the devotee"}, along with my entire family;
For attaining the spiritual fruits described in Shruti, Smriti, and Puranas, for dispelling all bodily, verbal, and mental afflictions, for the attainment of the four supreme pursuits of human existence (Dharma, Artha, Kama, Moksha), and by the grace of ${deityTarget || "the Divine"}, for ${pujaPurpose || "universal peace, health, and spiritual illumination"};
To the best of my knowledge, capacity, and assembled sacred offerings, I hereby solemnly perform this Shodashopachara Pooja. Om Tat Sat!`;

  return { sanskrit, transliteration, english };
}

// ================= SACRED ACOUSTIC SYNTHESIZER (WEB AUDIO API) =================
class SacredAudioEngine {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Bronze Temple Bell (528 Hz - Solfeggio / Love frequency with acoustic harmonic overtones)
  playTempleBell() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;
      const fundamental = 528; // Hz

      const freqs = [
        { f: fundamental, gain: 0.6, decay: 4.5 },
        { f: fundamental * 2.01, gain: 0.35, decay: 3.5 },
        { f: fundamental * 3.02, gain: 0.2, decay: 2.8 },
        { f: fundamental * 4.25, gain: 0.12, decay: 2.0 },
        { f: fundamental * 5.4, gain: 0.08, decay: 1.4 },
      ];

      freqs.forEach(({ f, gain, decay }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(gain, now + 0.008);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + decay);
      });
    } catch (e) {
      console.warn("Audio synthesis unavailable", e);
    }
  }

  // Sacred Shankha (Conch) Sound (Deep resonant wind frequency sweep)
  playShankha() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;
      const duration = 3.5;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sawtooth";
      // Natural lip vibration glissando of a blown conch
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.6);
      osc.frequency.setValueAtTime(440, now + 2.2);
      osc.frequency.exponentialRampToValueAtTime(330, now + duration);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.linearRampToValueAtTime(1400, now + 0.8);
      filter.frequency.linearRampToValueAtTime(600, now + duration);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.45, now + 0.4);
      gainNode.gain.setValueAtTime(0.45, now + 2.4);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      console.warn("Audio synthesis unavailable", e);
    }
  }

  // Om Drone (108 Hz Meditative Harmonic)
  playOmDrone() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;
      const duration = 5.0;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const osc3 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(108, now); // Sacred 108 Hz base

      osc2.type = "sine";
      osc2.frequency.setValueAtTime(216, now); // 1st octave overtone

      osc3.type = "triangle";
      osc3.frequency.setValueAtTime(324, now); // Perfect fifth harmonic

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.4, now + 0.8);
      gainNode.gain.setValueAtTime(0.4, now + 3.5);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      osc3.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc3.start(now);

      osc1.stop(now + duration);
      osc2.stop(now + duration);
      osc3.stop(now + duration);
    } catch (e) {
      console.warn("Audio synthesis unavailable", e);
    }
  }

  // Web Speech API Sanskrit TTS reciter
  speakMantra(text: string, rate: number = 0.85) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    // Clean text of danda marks and headers for smooth phonetic recitation
    const cleanText = text
      .replace(/[॥।|]/g, "")
      .replace(/[\n\r]+/g, " ")
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Prefer Hindi/Sanskrit/Indian English voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith("hi") || v.lang.startsWith("sa") || v.lang.includes("IN")
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const sacredAudio = new SacredAudioEngine();
