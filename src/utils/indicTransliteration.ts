// Universal Indic & IAST Multi-Script Transliteration Engine
// Supports Devanagari, IAST, Tamil, Telugu, Kannada, Malayalam, Bengali, Gujarati, Odia, Gurmukhi, and Brahmi.

import { IndicScriptCode } from "../types";

interface ScriptMap {
  vowels: Record<string, string>;
  vowelSigns: Record<string, string>;
  consonants: Record<string, string>;
  special: Record<string, string>;
  digits: Record<string, string>;
  virama: string;
}

// Unicode base offsets and mappings
const SCRIPT_DATA: Record<Exclude<IndicScriptCode, "IAST">, ScriptMap> = {
  Devanagari: {
    vowels: {
      a: "अ", aa: "आ", i: "इ", ii: "ई", u: "उ", uu: "ऊ", r: "ऋ", rr: "ॠ", l: "ऌ",
      e: "ए", ai: "ऐ", o: "ओ", au: "औ"
    },
    vowelSigns: {
      aa: "ा", i: "ि", ii: "ी", u: "ु", uu: "ू", r: "ृ", rr: "ॄ", l: "ॢ",
      e: "े", ai: "ै", o: "ो", au: "ौ"
    },
    consonants: {
      k: "क", kh: "ख", g: "ग", gh: "घ", ng: "ङ",
      c: "च", ch: "छ", j: "ज", jh: "झ", ny: "ञ",
      tt: "ट", tth: "ठ", dd: "ड", ddh: "ढ", nn: "ण",
      t: "त", th: "थ", d: "द", dh: "ध", n: "न",
      p: "प", ph: "फ", b: "ब", bh: "भ", m: "म",
      y: "य", r: "र", l: "ल", v: "व",
      sh: "श", ss: "ष", s: "स", h: "ह",
      kss: "क्ष", jny: "ज्ञ"
    },
    special: {
      anusvara: "ं",
      visarga: "ः",
      avagraha: "ऽ",
      candrabindu: "ँ"
    },
    digits: {
      "0": "०", "1": "१", "2": "२", "3": "३", "4": "४",
      "5": "५", "6": "६", "7": "७", "8": "८", "9": "९"
    },
    virama: "्"
  },
  Tamil: {
    vowels: {
      a: "அ", aa: "ஆ", i: "இ", ii: "ஈ", u: "உ", uu: "ஊ", r: "ரி", rr: "ரீ", l: "லி",
      e: "ஏ", ai: "ஐ", o: "ஓ", au: "ஔ"
    },
    vowelSigns: {
      aa: "ா", i: "ி", ii: "ீ", u: "ு", uu: "ூ", r: "்ரி", rr: "்ரீ", l: "்லி",
      e: "ே", ai: "ை", o: "ோ", au: "ௌ"
    },
    consonants: {
      k: "க", kh: "க", g: "க", gh: "க", ng: "ங",
      c: "ச", ch: "ச", j: "ஜ", jh: "ஜ", ny: "ஞ",
      tt: "ட", tth: "ட", dd: "ட", ddh: "ட", nn: "ண",
      t: "த", th: "த", d: "த", dh: "த", n: "ந",
      p: "ப", ph: "ப", b: "ப", bh: "ப", m: "ம",
      y: "ய", r: "ர", l: "ல", v: "வ",
      sh: "ஶ", ss: "ஷ", s: "ஸ", h: "ஹ",
      kss: "க்ஷ", jny: "ஜ்ஞ"
    },
    special: {
      anusvara: "ம்",
      visarga: "ஃ",
      avagraha: "’",
      candrabindu: "ஂ"
    },
    digits: {
      "0": "0", "1": "௧", "2": "௨", "3": "௩", "4": "௪",
      "5": "௫", "6": "௬", "7": "௭", "8": "௮", "9": "௯"
    },
    virama: "்"
  },
  Telugu: {
    vowels: {
      a: "అ", aa: "ఆ", i: "ఇ", ii: "ఈ", u: "ఉ", uu: "ఊ", r: "ఋ", rr: "ౠ", l: "ఌ",
      e: "ఏ", ai: "ఐ", o: "ఓ", au: "ఔ"
    },
    vowelSigns: {
      aa: "ా", i: "ి", ii: "ీ", u: "ు", uu: "ూ", r: "ృ", rr: "ౄ", l: "ౢ",
      e: "ే", ai: "ై", o: "ో", au: "ౌ"
    },
    consonants: {
      k: "క", kh: "ఖ", g: "గ", gh: "ఘ", ng: "ఙ",
      c: "చ", ch: "ఛ", j: "జ", jh: "ఝ", ny: "ఞ",
      tt: "ట", tth: "ఠ", dd: "డ", ddh: "ఢ", nn: "ణ",
      t: "త", th: "థ", d: "ద", dh: "ధ", n: "న",
      p: "ప", ph: "ఫ", b: "బ", bh: "భ", m: "మ",
      y: "య", r: "ర", l: "ల", v: "వ",
      sh: "శ", ss: "ష", s: "స", h: "హ",
      kss: "క్ష", jny: "జ్ఞ"
    },
    special: {
      anusvara: "ం",
      visarga: "ః",
      avagraha: "ఽ",
      candrabindu: "ఁ"
    },
    digits: {
      "0": "౦", "1": "౧", "2": "౨", "3": "౩", "4": "౪",
      "5": "౫", "6": "౬", "7": "౭", "8": "౮", "9": "౯"
    },
    virama: "్"
  },
  Kannada: {
    vowels: {
      a: "ಅ", aa: "ಆ", i: "ಇ", ii: "ಈ", u: "ಉ", uu: "ಊ", r: "ಋ", rr: "ೠ", l: "ಌ",
      e: "ಏ", ai: "ಐ", o: "ಓ", au: "ಔ"
    },
    vowelSigns: {
      aa: "ಾ", i: "ಿ", ii: "ೀ", u: "ು", uu: "ೂ", r: "ೃ", rr: "ೄ", l: "ೢ",
      e: "ೇ", ai: "ೈ", o: "ೋ", au: "ೌ"
    },
    consonants: {
      k: "ಕ", kh: "ಖ", g: "ಗ", gh: "ಘ", ng: "ಙ",
      c: "ಚ", ch: "ಛ", j: "ಜ", jh: "ಝ", ny: "ಞ",
      tt: "ಟ", tth: "ಠ", dd: "ಡ", ddh: "ಢ", nn: "ಣ",
      t: "ತ", th: "ಥ", d: "ದ", dh: "ಧ", n: "ನ",
      p: "ಪ", ph: "ಫ", b: "ಬ", bh: "ಭ", m: "ಮ",
      y: "ಯ", r: "ರ", l: "ಲ", v: "ವ",
      sh: "ಶ", ss: "ಷ", s: "ಸ", h: "ಹ",
      kss: "ಕ್ಷ", jny: "ಜ್ಞ"
    },
    special: {
      anusvara: "ಂ",
      visarga: "ಃ",
      avagraha: "ಽ",
      candrabindu: "ँ"
    },
    digits: {
      "0": "೦", "1": "೧", "2": "೨", "3": "೩", "4": "೪",
      "5": "೫", "6": "೬", "7": "೭", "8": "೮", "9": "೯"
    },
    virama: "್"
  },
  Malayalam: {
    vowels: {
      a: "അ", aa: "ആ", i: "ഇ", ii: "ഈ", u: "ഉ", uu: "ഊ", r: "ഋ", rr: "ൠ", l: "ഌ",
      e: "ഏ", ai: "ഐ", o: "ഓ", au: "ഔ"
    },
    vowelSigns: {
      aa: "ാ", i: "ി", ii: "ീ", u: "ു", uu: "ൂ", r: "ൃ", rr: "ൄ", l: "ൢ",
      e: "േ", ai: "ൈ", o: "ോ", au: "ൌ"
    },
    consonants: {
      k: "ക", kh: "ഖ", g: "ഗ", gh: "ഘ", ng: "ങ",
      c: "ച", ch: "ഛ", j: "ജ", jh: "ഝ", ny: "ഞ",
      tt: "ട", tth: "ഠ", dd: "ഡ", ddh: "ഢ", nn: "ണ",
      t: "ത", th: "ഥ", d: "ദ", dh: "ധ", n: "ന",
      p: "പ", ph: "ഫ", b: "ബ", bh: "ഭ", m: "മ",
      y: "യ", r: "ര", l: "ല", v: "വ",
      sh: "ശ", ss: "ഷ", s: "സ", h: "ഹ",
      kss: "ക്ഷ", jny: "ജ്ഞ"
    },
    special: {
      anusvara: "ം",
      visarga: "ഃ",
      avagraha: "ഽ",
      candrabindu: "ँ"
    },
    digits: {
      "0": "൦", "1": "൧", "2": "൨", "3": "൩", "4": "൪",
      "5": "൫", "6": "൬", "7": "൭", "8": "൮", "9": "൯"
    },
    virama: "്"
  },
  Bengali: {
    vowels: {
      a: "অ", aa: "আ", i: "ই", ii: "ঈ", u: "উ", uu: "ঊ", r: "ঋ", rr: "ৠ", l: "ঌ",
      e: "এ", ai: "ঐ", o: "ও", au: "ঔ"
    },
    vowelSigns: {
      aa: "া", i: "ি", ii: "ী", u: "ু", uu: "ূ", r: "ৃ", rr: "ৄ", l: "ৢ",
      e: "ে", ai: "ৈ", o: "ো", au: "ৌ"
    },
    consonants: {
      k: "ক", kh: "খ", g: "গ", gh: "ঘ", ng: "ঙ",
      c: "চ", ch: "ছ", j: "জ", jh: "ঝ", ny: "ঞ",
      tt: "ট", tth: "ঠ", dd: "ড", ddh: "ঢ", nn: "ণ",
      t: "ত", th: "থ", d: "দ", dh: "ধ", n: "ন",
      p: "প", ph: "ফ", b: "ব", bh: "ভ", m: "ম",
      y: "য", r: "র", l: "ল", v: "ব",
      sh: "শ", ss: "ষ", s: "স", h: "হ",
      kss: "ক্ষ", jny: "জ্ঞ"
    },
    special: {
      anusvara: "ং",
      visarga: "ঃ",
      avagraha: "ঽ",
      candrabindu: "ঁ"
    },
    digits: {
      "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪",
      "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯"
    },
    virama: "্"
  },
  Gujarati: {
    vowels: {
      a: "અ", aa: "આ", i: "ઇ", ii: "ઈ", u: "ઉ", uu: "ઊ", r: "ઋ", rr: "ૠ", l: "ઌ",
      e: "એ", ai: "ઐ", o: "ઓ", au: "ઔ"
    },
    vowelSigns: {
      aa: "ા", i: "િ", ii: "ી", u: "ુ", uu: "ૂ", r: "ૃ", rr: "ૄ", l: "ૢ",
      e: "ે", ai: "ૈ", o: "ો", au: "ૌ"
    },
    consonants: {
      k: "ક", kh: "ખ", g: "ગ", gh: "ઘ", ng: "ઙ",
      c: "ચ", ch: "છ", j: "જ", jh: "ઝ", ny: "ઞ",
      tt: "ટ", tth: "ઠ", dd: "ડ", ddh: "ઢ", nn: "ણ",
      t: "ત", th: "થ", d: "દ", dh: "ધ", n: "ન",
      p: "પ", ph: "ફ", b: "બ", bh: "ભ", m: "મ",
      y: "ય", r: "ર", l: "લ", v: "વ",
      sh: "શ", ss: "ષ", s: "સ", h: "હ",
      kss: "ક્ષ", jny: "જ્ઞ"
    },
    special: {
      anusvara: "ં",
      visarga: "ઃ",
      avagraha: "ઽ",
      candrabindu: "ઁ"
    },
    digits: {
      "0": "૦", "1": "૧", "2": "૨", "3": "૩", "4": "૪",
      "5": "૫", "6": "૬", "7": "૭", "8": "૮", "9": "૯"
    },
    virama: "્"
  },
  Odia: {
    vowels: {
      a: "ଅ", aa: "ଆ", i: "ଇ", ii: "ଈ", u: "ଉ", uu: "ଊ", r: "ଋ", rr: "ୠ", l: "ଌ",
      e: "ଏ", ai: "ଐ", o: "ଓ", au: "ଔ"
    },
    vowelSigns: {
      aa: "ା", i: "ି", ii: "ୀ", u: "ୁ", uu: "ୂ", r: "ୃ", rr: "ୄ", l: "ୢ",
      e: "େ", ai: "ୈ", o: "ୋ", au: "ୌ"
    },
    consonants: {
      k: "କ", kh: "ଖ", g: "ଗ", gh: "ଘ", ng: "ଙ",
      c: "ଚ", ch: "ଛ", j: "ଜ", jh: "ଝ", ny: "ଞ",
      tt: "ଟ", tth: "ଠ", dd: "ଡ", ddh: "ଢ", nn: "ଣ",
      t: "ତ", th: "ଥ", d: "ଦ", dh: "ଧ", n: "ନ",
      p: "ପ", ph: "ଫ", b: "ବ", bh: "ଭ", m: "ମ",
      y: "ଯ", r: "ର", l: "ଲ", v: "ୱ",
      sh: "ଶ", ss: "ଷ", s: "ସ", h: "ହ",
      kss: "କ୍ଷ", jny: "ଜ୍ଞ"
    },
    special: {
      anusvara: "ଂ",
      visarga: "ଃ",
      avagraha: "ଽ",
      candrabindu: "ଁ"
    },
    digits: {
      "0": "୦", "1": "୧", "2": "୨", "3": "୩", "4": "୪",
      "5": "୫", "6": "୬", "7": "୭", "8": "୮", "9": "୯"
    },
    virama: "୍"
  },
  Gurmukhi: {
    vowels: {
      a: "ਅ", aa: "ਆ", i: "ਇ", ii: "ਈ", u: "ਉ", uu: "ਊ", r: "ਰਿ", rr: "ਰੀ", l: "ਲਿ",
      e: "ਏ", ai: "ਐ", o: "ਓ", au: "ਔ"
    },
    vowelSigns: {
      aa: "ਾ", i: "ਿ", ii: "ੀ", u: "ੁ", uu: "ੂ", r: "੍ਰ", rr: "੍ਰ", l: "੍ਲ",
      e: "ੇ", ai: "ੈ", o: "ੋ", au: "ੌ"
    },
    consonants: {
      k: "ਕ", kh: "ਖ", g: "ਗ", gh: "ਘ", ng: "ਙ",
      c: "ਚ", ch: "ਛ", j: "ਜ", jh: "ਝ", ny: "ਞ",
      tt: "ਟ", tth: "ਠ", dd: "ਡ", ddh: "ਢ", nn: "ਣ",
      t: "ਤ", th: "ਥ", d: "ਦ", dh: "ਧ", n: "ਨ",
      p: "ਪ", ph: "ਫ", b: "ਬ", bh: "ਭ", m: "ਮ",
      y: "ਯ", r: "ਰ", l: "ਲ", v: "ਵ",
      sh: "ਸ਼", ss: "ਸ਼", s: "ਸ", h: "ਹ",
      kss: "ਕ੍ਸ਼", jny: "ਗ੍ਯ"
    },
    special: {
      anusvara: "ਂ",
      visarga: "ਃ",
      avagraha: "’",
      candrabindu: "ਁ"
    },
    digits: {
      "0": "੦", "1": "੧", "2": "੨", "3": "੩", "4": "੪",
      "5": "੫", "6": "੬", "7": "੭", "8": "੮", "9": "੯"
    },
    virama: "੍"
  },
  Brahmi: {
    vowels: {
      a: "𑀅", aa: "𑀆", i: "𑀇", ii: "𑀈", u: "𑀉", uu: "𑀊", r: "𑀋", rr: "𑀌", l: "𑀍",
      e: "𑀏", ai: "𑀐", o: "𑀑", au: "𑀒"
    },
    vowelSigns: {
      aa: "𑀸", i: "𑀹", ii: "𑀺", u: "𑀻", uu: "𑀼", r: "𑀽", rr: "𑀾", l: "𑀿",
      e: "𑁂", ai: "𑁃", o: "𑁄", au: "𑁅"
    },
    consonants: {
      k: "𑀓", kh: "𑀔", g: "𑀕", gh: "𑀖", ng: "𑀗",
      c: "𑀘", ch: "𑀙", j: "𑀚", jh: "𑀛", ny: "𑀜",
      tt: "𑀝", tth: "𑀞", dd: "𑀟", ddh: "𑀠", nn: "𑀡",
      t: "𑀢", th: "𑀣", d: "𑀤", dh: "𑀥", n: "𑀦",
      p: "𑀧", ph: "𑀨", b: "𑀩", bh: "𑀪", m: "𑀫",
      y: "𑀬", r: "𑀭", l: "𑀮", v: "𑀯",
      sh: "𑀰", ss: "𑀱", s: "𑀲", h: "𑀳",
      kss: "𑀓𑁆𑀱", jny: "𑀚𑁆𑀜"
    },
    special: {
      anusvara: "𑀁",
      visarga: "𑀂",
      avagraha: "’",
      candrabindu: "𑀀"
    },
    digits: {
      "0": "𑁒", "1": "𑁓", "2": "𑁔", "3": "𑁕", "4": "𑁖",
      "5": "𑁗", "6": "𑁘", "7": "𑁙", "8": "𑁚", "9": "𑁛"
    },
    virama: "𑁆"
  }
};

// Map Devanagari characters to Unicode code-points for fast offset transposition
const DEVANAGARI_BASE = 0x0900;
const SCRIPT_OFFSETS: Record<string, number> = {
  Bengali: 0x0980,
  Gurmukhi: 0x0a00,
  Gujarati: 0x0a80,
  Odia: 0x0b00,
  Tamil: 0x0b80,
  Telugu: 0x0c00,
  Kannada: 0x0c80,
  Malayalam: 0x0d00
};

// IAST representation table
const DEVANAGARI_TO_IAST: Record<string, string> = {
  "अ": "a", "आ": "ā", "इ": "i", "ई": "ī", "उ": "u", "ऊ": "ū", "ऋ": "ṛ", "ॠ": "ṝ", "ऌ": "ḷ", "ॡ": "ḹ",
  "ए": "e", "ऐ": "ai", "ओ": "o", "औ": "au",
  "ा": "ā", "ि": "i", "ी": "ī", "ु": "u", "ू": "ū", "ृ": "ṛ", "ॄ": "ṝ", "ॢ": "ḷ", "ॣ": "ḹ",
  "े": "e", "ै": "ai", "ो": "o", "ौ": "au",
  "क": "ka", "ख": "kha", "ग": "ga", "घ": "gha", "ङ": "ṅa",
  "च": "ca", "छ": "cha", "ज": "ja", "झ": "jha", "ञ": "ña",
  "ट": "ṭa", "ठ": "ṭha", "ड": "ḍa", "ढ": "ḍha", "ण": "ṇa",
  "त": "ta", "थ": "tha", "द": "da", "ध": "dha", "न": "na",
  "प": "pa", "फ": "pha", "ब": "ba", "भ": "bha", "म": "ma",
  "य": "ya", "र": "ra", "ल": "la", "व": "va",
  "श": "śa", "ष": "ṣa", "स": "sa", "ह": "ha",
  "ं": "ṃ", "ः": "ḥ", "ऽ": "'", "ँ": "m̐", "्": "",
  "०": "0", "१": "1", "२": "2", "३": "3", "४": "4",
  "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "।": "|", "॥": "||"
};

/**
 * Transliterates Devanagari text to any other Indic script or IAST.
 */
export function transliterateIndicText(
  sourceText: string,
  targetScript: IndicScriptCode
): string {
  if (!sourceText || targetScript === "Devanagari") {
    return sourceText;
  }

  // Handle IAST conversion
  if (targetScript === "IAST") {
    return devanagariToIAST(sourceText);
  }

  // Direct script substitution
  const targetData = SCRIPT_DATA[targetScript as Exclude<IndicScriptCode, "IAST">];
  if (!targetData) return sourceText;

  // Use Unicode offset shifting where canonical (Devanagari 0x0900 to other Indic blocks)
  const offset = SCRIPT_OFFSETS[targetScript];
  if (offset) {
    let result = "";
    for (let i = 0; i < sourceText.length; i++) {
      const char = sourceText[i];
      const code = char.charCodeAt(0);

      // Check if within standard Devanagari block (0x0901 to 0x097F)
      if (code >= 0x0901 && code <= 0x0970) {
        const targetCode = code - DEVANAGARI_BASE + offset;
        const targetChar = String.fromCharCode(targetCode);
        result += targetChar;
      } else if (char === "।") {
        result += "।";
      } else if (char === "॥") {
        result += "॥";
      } else {
        result += char;
      }
    }
    return result;
  }

  // Brahmi fallback replacement
  if (targetScript === "Brahmi") {
    let output = sourceText;
    const brahmiData = SCRIPT_DATA.Brahmi;
    const devaData = SCRIPT_DATA.Devanagari;

    Object.keys(devaData.vowels).forEach(k => {
      output = output.split(devaData.vowels[k]).join(brahmiData.vowels[k] || "");
    });
    Object.keys(devaData.vowelSigns).forEach(k => {
      output = output.split(devaData.vowelSigns[k]).join(brahmiData.vowelSigns[k] || "");
    });
    Object.keys(devaData.consonants).forEach(k => {
      output = output.split(devaData.consonants[k]).join(brahmiData.consonants[k] || "");
    });
    Object.keys(devaData.special).forEach(k => {
      output = output.split(devaData.special[k]).join(brahmiData.special[k] || "");
    });
    Object.keys(devaData.digits).forEach(k => {
      output = output.split(devaData.digits[k]).join(brahmiData.digits[k] || "");
    });
    output = output.split(devaData.virama).join(brahmiData.virama);
    return output;
  }

  return sourceText;
}

/**
 * Converts Devanagari Sanskrit text into high-precision IAST Latin diacritics.
 */
export function devanagariToIAST(devanagariText: string): string {
  if (!devanagariText) return "";

  // Process character by character with virama and inherent 'a' awareness
  let result = "";
  let i = 0;

  while (i < devanagariText.length) {
    const char = devanagariText[i];
    const nextChar = devanagariText[i + 1];

    // Check if consonant
    const isConsonant = char >= "क" && char <= "ह";

    if (isConsonant) {
      const baseRom = DEVANAGARI_TO_IAST[char] || char;
      // Remove trailing 'a' if followed by vowel sign or virama
      const rootConsonant = baseRom.endsWith("a") ? baseRom.slice(0, -1) : baseRom;

      if (nextChar === "्") {
        // Has virama: no inherent vowel
        result += rootConsonant;
        i += 2; // skip both consonant and virama
      } else if (nextChar && DEVANAGARI_TO_IAST[nextChar] && "ािीुूृॄॢॣेैोौ".includes(nextChar)) {
        // Has matra
        result += rootConsonant + (DEVANAGARI_TO_IAST[nextChar] || "");
        i += 2;
      } else {
        // Retains inherent 'a'
        result += rootConsonant + "a";
        i++;
      }
    } else if (DEVANAGARI_TO_IAST[char]) {
      result += DEVANAGARI_TO_IAST[char];
      i++;
    } else {
      result += char;
      i++;
    }
  }

  return result;
}
