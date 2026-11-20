import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Calendar as CalendarIcon, 
  Sun, 
  Moon, 
  Compass, 
  Clock, 
  RefreshCw, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle,
  Zap
} from "lucide-react";
import { PanchangResult } from "../types";

export default function PanchangCalculator() {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [locationName, setLocationName] = useState("Ujjain (Avanti Zero Meridian)");
  const [latitude, setLatitude] = useState(23.1765);
  const [longitude, setLongitude] = useState(75.7885);
  const [loading, setLoading] = useState(false);
  const [panchangData, setPanchangData] = useState<PanchangResult | null>(null);

  const fetchPanchang = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/panchang-calc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateStr: selectedDate,
          latitude,
          longitude,
          locationName,
          timezone: 5.5,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setPanchangData(data);
      }
    } catch (err) {
      console.error("Panchang error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPanchang();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#1c1611] via-[#241a13] to-[#14100c] text-stone-100 p-6 md:p-8 rounded-3xl border border-amber-900/40 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-mono mb-2">
            <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>SURYA SIDDHANTA 5-FOLD CHRONOMETRIC CALCULATOR</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-tight text-[#fdf5e6]">
            Astronomical Vedic Panchanga
          </h2>
          <p className="text-sm text-stone-300 font-sans mt-1 max-w-2xl">
            Calculates the 5 essential limbs of cosmic time (Tithi, Vara, Nakshatra, Yoga, Karana), Vikram/Shaka Samvats, solar/lunar longitudes, and auspicious Muhurta windows.
          </p>
        </div>

        {/* Date & Location Selector */}
        <div className="bg-black/50 p-4 rounded-2xl border border-stone-800 space-y-3 w-full md:w-auto">
          <div>
            <label className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold block mb-1">
              Select Solar Calendar Date:
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 text-stone-200 text-xs font-mono rounded-xl px-3 py-2 outline-none focus:border-amber-500"
            />
          </div>

          <button
            onClick={fetchPanchang}
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-amber-700 to-orange-800 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
          >
            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5 text-amber-300" />}
            <span>Calculate Panchanga</span>
          </button>
        </div>
      </div>

      {/* Main Panchanga Output */}
      {panchangData && (
        <div className="space-y-6">
          {/* Samvat and Seasonal Metrics Header */}
          <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 md:p-8 shadow-xl text-stone-900">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#e2d0b5]">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-900">
                  CALCULATED FOR: {panchangData.location}
                </span>
                <h3 className="text-2xl font-bold font-serif text-stone-950 mt-0.5">
                  {new Date(panchangData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 font-bold">
                  Vikram: {panchangData.samvat.vikramSamvat}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-200 border border-stone-300 text-stone-800">
                  Shaka: {panchangData.samvat.shakaSamvat}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-indigo-100 border border-indigo-300 text-indigo-950">
                  Kali Yuga: {panchangData.samvat.kaliYugaYear}
                </span>
              </div>
            </div>

            {/* Ayana, Ritu, Masa Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="p-4 bg-white rounded-2xl border border-[#ebdcc4]">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Solar Ayana</span>
                <p className="text-base font-serif font-bold text-amber-900 mt-1">{panchangData.samvat.ayana}</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#ebdcc4]">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Vedic Ritu (Season)</span>
                <p className="text-base font-serif font-bold text-emerald-900 mt-1">{panchangData.samvat.ritu}</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#ebdcc4]">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Māsa (Month)</span>
                <p className="text-base font-serif font-bold text-indigo-900 mt-1">{panchangData.samvat.māsa}</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#ebdcc4]">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Paksha (Lunar Fortnight)</span>
                <p className="text-base font-serif font-bold text-stone-900 mt-1">{panchangData.samvat.paksha}</p>
              </div>
            </div>
          </div>

          {/* The 5 Limbs of Time (Pancha-Anga) Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* 1. Tithi */}
            <div className="bg-gradient-to-b from-amber-900 to-[#1c1611] text-white p-5 rounded-2xl border border-amber-600/40 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                  1. Tithi (Lunar Day)
                </span>
                <h4 className="text-xl font-bold font-serif text-white mt-1">
                  {panchangData.fiveLimbs.tithi.name}
                </h4>
                <p className="text-xs text-amber-200/80 font-mono mt-0.5">
                  {panchangData.fiveLimbs.tithi.paksha} Paksha
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-700/40 text-[10px] font-mono text-stone-300">
                Deity: <span className="text-amber-300 font-bold">{panchangData.fiveLimbs.tithi.deity}</span>
              </div>
            </div>

            {/* 2. Vara */}
            <div className="bg-gradient-to-b from-stone-900 to-[#120f0d] text-white p-5 rounded-2xl border border-stone-700 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                  2. Vara (Solar Day)
                </span>
                <h4 className="text-xl font-bold font-serif text-white mt-1">
                  {panchangData.fiveLimbs.vara.name}
                </h4>
                <p className="text-xs text-stone-400 font-mono mt-0.5">
                  {panchangData.fiveLimbs.vara.sanskritName}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-800 text-[10px] font-mono text-stone-300">
                Lord: <span className="text-amber-300 font-bold">{panchangData.fiveLimbs.vara.planetaryLord}</span>
              </div>
            </div>

            {/* 3. Nakshatra */}
            <div className="bg-gradient-to-b from-indigo-950 to-[#100d1c] text-white p-5 rounded-2xl border border-indigo-700/40 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-300 font-bold">
                  3. Nakshatra (Asterism)
                </span>
                <h4 className="text-xl font-bold font-serif text-white mt-1">
                  {panchangData.fiveLimbs.nakshatra.name}
                </h4>
                <p className="text-xs text-indigo-200/80 font-mono mt-0.5">
                  Pada {panchangData.fiveLimbs.nakshatra.pada} / Lord: {panchangData.fiveLimbs.nakshatra.lord}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-800 text-[10px] font-mono text-stone-300">
                Deity: <span className="text-indigo-300 font-bold">{panchangData.fiveLimbs.nakshatra.deity}</span>
              </div>
            </div>

            {/* 4. Yoga */}
            <div className="bg-gradient-to-b from-emerald-950 to-[#0c1a14] text-white p-5 rounded-2xl border border-emerald-700/40 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
                  4. Yoga (Sol-Lunar Angle)
                </span>
                <h4 className="text-xl font-bold font-serif text-white mt-1">
                  {panchangData.fiveLimbs.yoga.name}
                </h4>
                <p className="text-xs text-emerald-200/80 font-mono mt-0.5">
                  Nature: {panchangData.fiveLimbs.yoga.nature}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-800 text-[10px] font-mono text-stone-300">
                Meaning: <span className="text-emerald-300 font-bold">{panchangData.fiveLimbs.yoga.meaning}</span>
              </div>
            </div>

            {/* 5. Karana */}
            <div className="bg-gradient-to-b from-purple-950 to-[#170e1c] text-white p-5 rounded-2xl border border-purple-700/40 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold">
                  5. Karana (Half-Tithi)
                </span>
                <h4 className="text-xl font-bold font-serif text-white mt-1">
                  {panchangData.fiveLimbs.karana.name}
                </h4>
                <p className="text-xs text-purple-200/80 font-mono mt-0.5">
                  Type: {panchangData.fiveLimbs.karana.type}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-800 text-[10px] font-mono text-stone-300">
                Deity: <span className="text-purple-300 font-bold">{panchangData.fiveLimbs.karana.deity || "Vishti"}</span>
              </div>
            </div>
          </div>

          {/* Solar & Lunar Coordinates and Muhurtas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Solar & Lunar Horizon Ephemeris */}
            <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 shadow-md space-y-4 text-stone-900">
              <div className="flex items-center gap-2 text-amber-900 font-serif text-lg font-bold">
                <Sun className="w-5 h-5 text-amber-700" />
                <span>Solar & Lunar Celestial Coordinates</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-white rounded-xl border border-[#ebdcc4]">
                  <span className="text-stone-500 block">Sunrise / Sunset:</span>
                  <span className="text-sm font-bold text-amber-900">
                    {panchangData.solarLunarTimes.sunrise} / {panchangData.solarLunarTimes.sunset}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#ebdcc4]">
                  <span className="text-stone-500 block">Moonrise / Moonset:</span>
                  <span className="text-sm font-bold text-indigo-900">
                    {panchangData.solarLunarTimes.moonrise || "N/A"} / {panchangData.solarLunarTimes.moonset || "N/A"}
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#ebdcc4]">
                  <span className="text-stone-500 block">Sun Zodiac Rashi:</span>
                  <span className="text-sm font-bold text-amber-800">
                    {panchangData.solarLunarTimes.sunZodiac} ({panchangData.solarLunarTimes.sunLongitude || "0°"})
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#ebdcc4]">
                  <span className="text-stone-500 block">Moon Zodiac Rashi:</span>
                  <span className="text-sm font-bold text-indigo-800">
                    {panchangData.solarLunarTimes.moonZodiac} ({panchangData.solarLunarTimes.moonLongitude || "0°"})
                  </span>
                </div>
              </div>
            </div>

            {/* Auspicious & Inauspicious Muhurtas */}
            <div className="bg-[#fcf8f0] border-2 border-[#d8c29d] rounded-3xl p-6 shadow-md space-y-4 text-stone-900">
              <div className="flex items-center gap-2 text-amber-900 font-serif text-lg font-bold">
                <Clock className="w-5 h-5 text-amber-700" />
                <span>Auspicious & Inauspicious Muhurtas</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950">
                  <div className="flex items-center gap-1 font-bold">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Brahma Muhurta:</span>
                  </div>
                  <div className="text-sm font-bold mt-1">{panchangData.muhurtas.brahmaMuhurta}</div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950">
                  <div className="flex items-center gap-1 font-bold">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Abhijit Muhurta:</span>
                  </div>
                  <div className="text-sm font-bold mt-1">{panchangData.muhurtas.abhijitMuhurta}</div>
                </div>

                <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-red-950">
                  <div className="flex items-center gap-1 font-bold">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                    <span>Rahu Kalam:</span>
                  </div>
                  <div className="text-sm font-bold mt-1">{panchangData.muhurtas.rahuKalam}</div>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-950">
                  <div className="flex items-center gap-1 font-bold">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Gulika Kalam:</span>
                  </div>
                  <div className="text-sm font-bold mt-1">{panchangData.muhurtas.gulikaKalam}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
