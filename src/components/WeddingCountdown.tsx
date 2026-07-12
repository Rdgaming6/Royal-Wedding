import React, { useState, useEffect } from "react";
import { Clock, CalendarDays, Sparkles } from "lucide-react";

export default function WeddingCountdown() {
  // Default target date: November 14, 2026 (Royal Winter Showcase Jaipur)
  const defaultTarget = "2026-11-14T18:00:00";
  const [targetDate, setTargetDate] = useState(defaultTarget);
  const [customName, setCustomName] = useState("");
  const [isCustomActive, setIsCustomActive] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setTargetDate(`${e.target.value}T16:00:00`);
      setIsCustomActive(true);
    }
  };

  const resetCountdown = () => {
    setTargetDate(defaultTarget);
    setCustomName("");
    setIsCustomActive(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="bg-luxury-charcoal rounded-2xl border border-champagne/20 p-6 md:p-10 gold-shadow text-luxury-ivory relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Storyteller */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-[10px] tracking-[0.25em] text-champagne uppercase font-medium flex items-center justify-center lg:justify-start gap-2 mb-3">
              <Clock className="h-3.5 w-3.5" /> Luxury Countdown
            </span>
            <h4 className="font-serif text-2xl md:text-3xl font-light mb-4">
              {isCustomActive 
                ? `${customName || "Your"} Eternal Day` 
                : "The Next Signature Union"}
            </h4>
            <p className="text-xs text-gray-400 font-light mb-6 leading-relaxed max-w-sm mx-auto lg:mx-0">
              {isCustomActive
                ? "Watching the moments melt away until you step into a fairytale curated down to the finest detail by our master designers."
                : "Counting down to our signature TNP Imperial Winter Showcase Wedding at the Rambagh Palace, Jaipur."}
            </p>

            {/* Interactive Form Controls */}
            <div className="bg-luxury-black/40 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
              <span className="text-[10px] text-champagne/80 tracking-wider text-left uppercase font-semibold flex items-center gap-1">
                <CalendarDays className="h-3 w-3" /> Personalized Timer
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                <div>
                  <label className="text-[9px] text-gray-400 block mb-1 uppercase">Your Couple Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Anya & Kabir"
                    value={customName}
                    onChange={(e) => {
                      setCustomName(e.target.value);
                      setIsCustomActive(true);
                    }}
                    className="w-full bg-luxury-charcoal/80 border border-champagne/20 rounded px-2.5 py-1 text-xs text-luxury-ivory placeholder-gray-600 focus:outline-none focus:border-champagne"
                  />
                </div>
                <div>
                  <label className="text-[9px] text-gray-400 block mb-1 uppercase">Select Wedding Date</label>
                  <input
                    type="date"
                    min="2026-07-12"
                    onChange={handleDateChange}
                    className="w-full bg-luxury-charcoal/80 border border-champagne/20 rounded px-2.5 py-1 text-xs text-luxury-ivory focus:outline-none focus:border-champagne"
                  />
                </div>
              </div>
              {isCustomActive && (
                <button
                  onClick={resetCountdown}
                  className="text-[9px] text-champagne-light hover:text-white uppercase tracking-wider text-right self-end flex items-center gap-1 transition-colors"
                >
                  Reset to Showcase
                </button>
              )}
            </div>
          </div>

          {/* Right Column: High-End Countdown Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center">
            {timeLeft.isOver ? (
              <div className="text-center py-6">
                <span className="inline-block p-3 bg-champagne/10 rounded-full mb-3 text-champagne">
                  <Sparkles className="h-6 w-6 animate-spin" />
                </span>
                <p className="font-serif text-2xl text-gold-gradient font-semibold">The Fairytale Begins</p>
                <p className="text-xs text-gray-400 font-light mt-1">Our designers are orchestrating magic right now.</p>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-md">
                {/* Days */}
                <div className="bg-luxury-black/60 border border-champagne/10 rounded-xl p-3 md:p-5 text-center flex flex-col items-center justify-center gold-shadow">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-gradient font-light">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 tracking-widest uppercase mt-2">Days</span>
                </div>

                {/* Hours */}
                <div className="bg-luxury-black/60 border border-champagne/10 rounded-xl p-3 md:p-5 text-center flex flex-col items-center justify-center gold-shadow">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-gradient font-light">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 tracking-widest uppercase mt-2">Hours</span>
                </div>

                {/* Minutes */}
                <div className="bg-luxury-black/60 border border-champagne/10 rounded-xl p-3 md:p-5 text-center flex flex-col items-center justify-center gold-shadow">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-gradient font-light">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 tracking-widest uppercase mt-2">Mins</span>
                </div>

                {/* Seconds */}
                <div className="bg-luxury-black/60 border border-champagne/10 rounded-xl p-3 md:p-5 text-center flex flex-col items-center justify-center gold-shadow">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-champagne-light font-light">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 tracking-widest uppercase mt-2">Secs</span>
                </div>
              </div>
            )}

            <div className="mt-6 text-center border-t border-white/5 pt-4 w-full max-w-xs">
              <p className="text-[10px] text-gray-500 font-light tracking-[0.15em] uppercase">
                Destination: {isCustomActive ? "Your Vision" : "Jaipur, India"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
