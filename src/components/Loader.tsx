import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant timing: 3.5s total loading animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for transition out to finish before triggering callback
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const brandText = "ROYAL WEDDINGS";
  const subtitle = "HAUTE COUTURE WEDDINGS & CELEBRATIONS";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-black text-luxury-ivory"
        >
          {/* Top and Bottom luxury curtain sliders */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-luxury-black border-b border-champagne/10"
          />
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-luxury-black border-t border-champagne/10"
          />

          {/* Central Typography Showcase */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center select-none">
            {/* Elegant Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-champagne/30 text-gold-gradient font-serif text-2xl tracking-widest"
            >
              R
            </motion.div>

            {/* Main Brand Title with letter-staggered fade up */}
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-[0.25em] font-light text-gold-gradient overflow-hidden flex flex-wrap justify-center gap-x-4">
              {brandText.split(" ").map((word, wIdx) => (
                <span key={wIdx} className="flex overflow-hidden">
                  {word.split("").map((letter, lIdx) => (
                    <motion.span
                      key={lIdx}
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1 + (wIdx * 5 + lIdx) * 0.05,
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            {/* Fine Art Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-champagne to-transparent my-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 0.8, letterSpacing: "0.25em" }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 1.5 }}
              className="text-[9px] md:text-xs font-sans tracking-[0.25em] text-champagne-light uppercase"
            >
              {subtitle}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
