import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

export default function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const links: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Destinations", href: "#destinations" },
    { label: "Stories", href: "#stories" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky glass look
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track scroll progress for thin top loading line
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Line */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-champagne-light via-champagne to-champagne-dark z-[1001]"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        id="luxury-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
          isScrolled
            ? "bg-luxury-black/90 md:bg-dark-glass py-4 border-b border-champagne/10 shadow-lg"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo - Elegantly styled Serif */}
          <a
            href="#home"
            className="flex flex-col items-start gap-0.5 select-none text-luxury-ivory"
            onClick={(e) => scrollToSection(e, "#home")}
          >
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-light leading-none text-gold-gradient hover:opacity-90 transition-opacity">
              ROYAL WEDDINGS
            </span>
            <span className="text-[7px] md:text-[8px] font-sans tracking-[0.3em] font-light uppercase opacity-70">
              Luxury Wedding Planning
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs font-sans tracking-[0.15em] uppercase text-gray-300 hover:text-champagne transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Consultation Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onBookClick}
              className="px-6 py-2.5 rounded-full border border-champagne text-champagne hover:bg-champagne hover:text-luxury-black text-xs font-sans tracking-[0.15em] uppercase font-semibold transition-luxury bg-luxury-black/30 flex items-center gap-2 cursor-pointer clickable gold-shadow"
            >
              <Sparkles className="h-3 w-3" /> Book Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-luxury-ivory hover:text-champagne transition-colors p-1 z-50 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Fullscreen Glass Overlay Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-luxury-black/98 md:bg-dark-glass flex flex-col items-center justify-center z-40 animate-fade-in">
            {/* Elegant Background Emblem */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none text-champagne font-serif text-[20vw]">
              R
            </div>

            <div className="flex flex-col items-center gap-6 z-10 text-center px-6">
              <span className="text-[10px] tracking-[0.3em] text-champagne uppercase font-medium">
                Royal Weddings
              </span>
              <div className="h-[1px] w-12 bg-champagne/30 mb-2" />

              {links.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  className="text-lg md:text-xl font-serif tracking-[0.15em] text-luxury-ivory hover:text-champagne transition-colors py-1 block uppercase"
                >
                  {link.label}
                </a>
              ))}

              <div className="h-[1px] w-12 bg-champagne/30 mt-2" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="mt-4 px-8 py-3 rounded-full bg-gold-gradient text-luxury-black text-xs font-sans tracking-[0.15em] uppercase font-semibold hover:opacity-95 transition-all w-full max-w-xs shadow-xl"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
