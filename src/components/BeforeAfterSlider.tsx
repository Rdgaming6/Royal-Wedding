import React, { useState, useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-6 max-w-2xl">
        <span className="text-[11px] uppercase tracking-[0.3em] text-champagne font-semibold flex items-center justify-center gap-2 mb-2">
          <Sparkles className="h-3 w-3" /> Scenography Transformation
        </span>
        <h3 className="font-serif text-2xl md:text-4xl text-luxury-black mb-3">
          The Power of Transformation
        </h3>
        <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
          Hover or drag the slider below to witness how we turn a historic bare stone canvas into an ethereal starlit sanctuary dripping in crystal and orchids.
        </p>
      </div>

      {/* Main Interactive Slider Box */}
      <div
        id="transformation-slider"
        ref={containerRef}
        className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden select-none cursor-ew-resize border border-champagne/20 gold-shadow"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Before Image (The Bare Canvas - Base) */}
        <img
          src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1200&q=80"
          alt="Raw luxury event venue before styling"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-luxury-black/60 backdrop-blur-md text-white text-[10px] md:text-xs tracking-[0.2em] px-3 py-1.5 uppercase font-medium rounded border border-white/10 z-10">
          The Bare Canvas
        </div>

        {/* After Image (The Celebration Setup - Overlay) */}
        <div
          className={`absolute inset-0 h-full overflow-hidden pointer-events-none ${
            isDragging ? "transition-none" : "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          }`}
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
            alt="Royal wedding reception layout by Maison"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-champagne text-luxury-black text-[10px] md:text-xs tracking-[0.2em] px-3 py-1.5 uppercase font-semibold rounded border border-champagne-light/30 z-10 whitespace-nowrap">
            Maison Celebration
          </div>
        </div>

        {/* Gold Slider Bar */}
        <div
          className={`absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-champagne-light via-champagne to-champagne-dark z-20 pointer-events-none ${
            isDragging ? "transition-none" : "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          }`}
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable central crown handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-luxury-black border-2 border-champagne flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110">
            <div className="flex gap-1">
              <span className="w-[1.5px] h-3 bg-champagne rounded-full animate-pulse" />
              <span className="w-[1.5px] h-3 bg-champagne rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
