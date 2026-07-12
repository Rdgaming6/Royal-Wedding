import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  MapPin,
  Calendar,
  Building,
  Camera,
  Smile,
  Utensils,
  Music,
  Users,
  Mail,
  Globe,
  Compass,
  Star,
  Phone,
  Clock,
  Instagram,
  ArrowRight,
  ChevronDown,
  Check,
  Send,
  Heart,
  Award,
  DollarSign,
  CheckCircle,
  X
} from "lucide-react";

import SEO from "./components/SEO";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import WeddingCountdown from "./components/WeddingCountdown";
import FloatingDecorations from "./components/FloatingDecorations";

// @ts-ignore
import luxuryWeddingAltar from "./assets/images/luxury_wedding_altar_1783799797377.jpg";

import { DESTINATIONS, SERVICES, WEDDING_STORIES, TESTIMONIALS, PRICE_PACKAGES, FAQ_ITEMS } from "./data";
import { ServiceItem, WeddingStory } from "./types";

// Animated counter local helper for high-end metrics
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = target;
          const duration = 2000; // 2 seconds
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={elementRef} className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold-gradient font-light">
      {count}
      {suffix}
    </span>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [faqOpenId, setFaqOpenId] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [showStickyConsultation, setShowStickyConsultation] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [venue, setVenue] = useState("");
  const [guests, setGuests] = useState("100-250");
  const [budget, setBudget] = useState("₹2.5 Crore - ₹5 Crore");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky Book Consultation button after scrolling past hero (approx 700px)
      if (window.scrollY > 700) {
        setShowStickyConsultation(true);
      } else {
        setShowStickyConsultation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);
    // Simulate premium API pipeline call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Reset form fields
      setTimeout(() => {
        setFormSubmitted(false);
        setIsConsultationModalOpen(false);
        // Clear fields
        setName("");
        setPhone("");
        setEmail("");
        setWeddingDate("");
        setVenue("");
        setMessage("");
      }, 3500);
    }, 1500);
  };

  // Helper function to map Service icons dynamically
  const renderServiceIcon = (iconName: string) => {
    const iconClass = "h-5 w-5 text-champagne";
    switch (iconName) {
      case "Calendar": return <Calendar className={iconClass} />;
      case "MapPin": return <MapPin className={iconClass} />;
      case "Building": return <Building className={iconClass} />;
      case "Sparkles": return <Sparkles className={iconClass} />;
      case "Camera": return <Camera className={iconClass} />;
      case "Smile": return <Smile className={iconClass} />;
      case "Utensils": return <Utensils className={iconClass} />;
      case "Music": return <Music className={iconClass} />;
      case "Users": return <Users className={iconClass} />;
      case "Mail": return <Mail className={iconClass} />;
      case "Globe": return <Globe className={iconClass} />;
      case "Compass": return <Compass className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  const filteredStories = galleryFilter === "All"
    ? WEDDING_STORIES
    : WEDDING_STORIES.filter((story) => story.filter === galleryFilter);

  const activeDestinationDetails = DESTINATIONS.find(d => d.id === selectedDestination);

  return (
    <div className="relative min-h-screen selection:bg-champagne selection:text-luxury-black bg-luxury-ivory text-luxury-black">
      {/* 1. SEO injection */}
      <SEO />

      {/* 2. Interactive Premium Custom Cursor */}
      <CustomCursor />

      {/* 3. Luxury Loader Screen */}
      <Loader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.99, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          
          {/* 4. Luxury Sticky Header */}
          <Navbar onBookClick={() => setIsConsultationModalOpen(true)} />

          {/* 5. HERO SECTION */}
          <header id="home" className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Cinematic Background Slideshow fallback / Video Loop */}
            <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0 z-10 bg-cover bg-center" 
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${luxuryWeddingAltar})` 
                }} 
              /> {/* Dark veil overlay with custom background image */}
              
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-105"
                src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-walking-in-forest-43187-large.mp4"
                referrerPolicy="no-referrer"
              >
                {/* Fallback image */}
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80"
                  alt="Luxury Wedding Backdrop"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </video>
            </div>

            {/* Float decorations inside hero */}
            <FloatingDecorations />

            {/* Hero Main Branding Content */}
            <div className="relative z-20 text-center px-6 max-w-5xl mt-16 select-none">
              <span className="text-xs md:text-sm tracking-[0.4em] text-champagne uppercase font-medium inline-flex items-center gap-2 mb-6">
                <Sparkles className="h-4 w-4 animate-pulse" /> The Epitome of Luxury Weddings
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-luxury-ivory font-light tracking-wide leading-tight mb-6">
                Crafting Weddings <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-gold-gradient">That Become Timeless Memories</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base font-sans font-light tracking-wider text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                From intimate celebrations to grand royal weddings, we transform your dreams into unforgettable, tailor-made visual masterpieces.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gold-gradient text-luxury-black font-semibold text-xs tracking-[0.2em] uppercase transition-luxury hover:opacity-95 shadow-xl w-60 sm:w-auto clickable"
                >
                  Book Consultation
                </button>
                <a
                  href="#gallery"
                  className="px-8 py-3.5 rounded-full border border-white/30 text-white hover:border-champagne hover:text-champagne font-semibold text-xs tracking-[0.2em] uppercase transition-luxury bg-white/5 backdrop-blur-md w-60 sm:w-auto clickable text-center"
                >
                  View Our Weddings
                </a>
              </div>
            </div>

            {/* Scroll indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 animate-bounce">
              <span className="text-[9px] tracking-[0.2em] uppercase text-champagne font-semibold">Scroll to explore</span>
              <ChevronDown className="h-4 w-4 text-champagne" />
            </div>
          </header>

          {/* STATISTICS BAR (Immediate reassurance below hero) */}
          <section className="bg-luxury-black py-10 md:py-16 border-b border-champagne/10 relative z-10 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-champagne/15">
                <div className="flex flex-col items-center justify-center p-3">
                  <AnimatedCounter target={500} suffix="+" />
                  <span className="text-[10px] md:text-xs text-champagne-light uppercase tracking-[0.2em] mt-3 font-sans">Celebrations Orchestrated</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 pt-6 md:pt-3">
                  <AnimatedCounter target={10} suffix="+" />
                  <span className="text-[10px] md:text-xs text-champagne-light uppercase tracking-[0.2em] mt-3 font-sans">Years of Master Curation</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 pt-6 md:pt-3">
                  <AnimatedCounter target={5} suffix="★" />
                  <span className="text-[10px] md:text-xs text-champagne-light uppercase tracking-[0.2em] mt-3 font-sans">Client Satisfaction</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 pt-6 md:pt-3">
                  <AnimatedCounter target={25} suffix="+" />
                  <span className="text-[10px] md:text-xs text-champagne-light uppercase tracking-[0.2em] mt-3 font-sans">Global Destinations</span>
                </div>
              </div>
            </div>
          </section>

          {/* 6. ABOUT SECTION (LUXURY STORYTELLING) */}
          <section id="about" className="py-24 md:py-32 bg-luxury-ivory relative overflow-hidden border-b border-champagne/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Editorial Typography layout */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 flex flex-col items-start text-left"
              >
                <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center gap-2 mb-3">
                  <Heart className="h-3.5 w-3.5" /> Majestic Scenography
                </span>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-black mb-6 leading-tight">
                  Where Perfect Symmetry <br className="hidden sm:inline" />
                  Meets <span className="font-serif italic text-champagne">Absolute Emotion</span>
                </h2>

                <div className="h-[1px] w-20 bg-champagne my-2 mb-6" />

                <p className="text-sm text-gray-700 font-light leading-relaxed mb-6">
                  Royal Weddings is a high-luxury wedding planning institution dedicated strictly to crafting multi-day events that look like they stepped from the pages of Vogue. Founded on the standards of haute couture and fine artistry, we curate every sensory touchpoint with meticulous precision.
                </p>

                <p className="text-sm text-gray-500 font-light leading-relaxed mb-8">
                  From complete venue buyouts in Florence or exclusive island setups in Goa, to majestic mirror-mosaic mandaps in Udaipur palaces, we handle logistics as an invisible science and design as a visible passion. For a luxury celebration to be truly divine, every flower petal, every crystal chandelier, and every champagne flute must belong to a singular story: Yours.
                </p>

                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="px-6 py-3 rounded-full border border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-luxury-ivory text-xs tracking-[0.15em] uppercase font-semibold transition-luxury clickable"
                >
                  Our Philosophy
                </button>
              </motion.div>

              {/* Right Side: Double Image Frame Layout */}
              <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="lg:col-span-6 grid grid-cols-12 gap-4 relative"
              >
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-champagne font-serif text-[180px] font-extralight leading-none opacity-5 select-none pointer-events-none">
                  R
                </div>

                <div className="col-span-8 overflow-hidden rounded-xl border border-champagne/15 gold-shadow transform hover:scale-[1.01] transition-transform duration-700 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80"
                    alt="Couture luxury bride portraits"
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[1.5s]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="col-span-4 self-end overflow-hidden rounded-xl border border-champagne/15 gold-shadow transform translate-y-8 hover:scale-[1.01] transition-transform duration-700 relative z-20">
                  <img
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80"
                    alt="Luxury Wedding Rings and Styling"
                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-[1.5s]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* 7. SERVICES SECTION (LUXURY CARD GALLERY) */}
          <section id="services" className="py-24 md:py-32 bg-luxury-black text-luxury-ivory relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-champagne/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center justify-center gap-2 mb-3">
                  <Award className="h-3.5 w-3.5" /> High-End Curations
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-ivory mb-4">
                  Bespoke Planning Services
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-champagne to-transparent mx-auto my-3" />
                <p className="text-xs md:text-sm text-gray-400 font-light tracking-wide leading-relaxed">
                  Every asset of your celebratory journey is sculpted with artistic poise, leveraging our network of world-class creators and Michelin partnerships.
                </p>
              </div>

              {/* Grid of Custom Luxury Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {SERVICES.map((service) => (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="bg-luxury-charcoal/40 rounded-xl p-6 md:p-8 border border-white/5 transition-luxury hover:border-champagne/40 hover:bg-luxury-black/60 flex flex-col justify-between items-start h-[260px] relative overflow-hidden group gold-shadow"
                  >
                    {/* Animated gold hover accent block */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-champagne/5 rounded-full blur-2xl group-hover:bg-champagne/10 transition-all duration-700" />
                    
                    <div>
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-champagne/20 bg-luxury-black group-hover:border-champagne group-hover:bg-champagne group-hover:text-luxury-black transition-luxury">
                        {renderServiceIcon(service.iconName)}
                      </div>
                      <h3 className="font-serif text-xl text-luxury-ivory mb-3 group-hover:text-champagne transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed font-light font-sans line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setVenue(service.title);
                        setIsConsultationModalOpen(true);
                      }}
                      className="text-[10px] text-champagne uppercase tracking-[0.2em] inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold cursor-pointer clickable"
                    >
                      Inquire Details <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. VENUE TRANSFORMATION SLIDER SECTION */}
          <section className="py-24 md:py-32 bg-luxury-ivory border-b border-champagne/10 relative">
            <BeforeAfterSlider />
          </section>

          {/* 9. WEDDING GALLERY (PINTEREST MASONRY FILTERS) */}
          <section id="gallery" className="py-24 md:py-32 bg-luxury-ivory relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 md:mb-16">
                <div className="text-left max-w-lg">
                  <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center gap-2 mb-3">
                    <Sparkles className="h-3.5 w-3.5" /> High-Artistry Portfolios
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-black">
                    Our Featured Weddings
                  </h2>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {["All", "Royal", "Destination", "Decor", "Modern"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setGalleryFilter(filter)}
                      className={`px-5 py-2 rounded-full text-[10px] font-sans tracking-[0.2em] uppercase font-semibold transition-luxury cursor-pointer clickable ${
                        galleryFilter === filter
                          ? "bg-luxury-black text-champagne border border-champagne"
                          : "bg-transparent text-gray-500 border border-transparent hover:text-luxury-black"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Masonry-Style Portfolio Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredStories.map((story, index) => (
                    <motion.div
                      layout
                      key={story.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-xl border border-champagne/10 bg-luxury-black/90 gold-shadow cursor-pointer h-[420px] reveal-img-container"
                    >
                      <img
                        src={story.image}
                        alt={`${story.brideName} and ${story.groomName}'s luxury wedding`}
                        className="w-full h-full object-cover reveal-img"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Luxury linear fade overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end text-left select-none pointer-events-none">
                        <span className="text-[10px] text-champagne uppercase tracking-widest font-semibold mb-2">
                          {story.theme}
                        </span>
                        
                        <h4 className="font-serif text-2xl text-luxury-ivory font-light mb-1">
                          {story.brideName} & {story.groomName}
                        </h4>
                        
                        <p className="text-[11px] text-gray-300 font-sans tracking-wide flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-champagne" /> {story.location}
                        </p>

                        {/* Interactive Expand indicators */}
                        <div className="h-[1px] w-0 group-hover:w-full bg-champagne/60 transition-all duration-700 mt-4" />
                        
                        <span className="text-[9px] text-champagne uppercase tracking-[0.2em] font-bold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          View Majestic Journey
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </section>

          {/* 10. DESTINATION WEDDINGS (INTERACTIVE DECK) */}
          <section id="destinations" className="py-24 md:py-32 bg-luxury-black text-luxury-ivory relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              
              <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center justify-center gap-2 mb-3">
                  <Compass className="h-4 w-4" /> Global Jetset Celebrations
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-ivory mb-4">
                  Elite Destination Sanctuaries
                </h2>
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-lg mx-auto">
                  From golden sands of Goa to clifftop infinity shrines in Bali, our coordinators hold exclusive contracts in the world's most desired regions.
                </p>
              </div>

              {/* Grid Layout of Destination Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {DESTINATIONS.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => setSelectedDestination(selectedDestination === dest.id ? null : dest.id)}
                    className={`group rounded-xl border transition-luxury overflow-hidden cursor-pointer h-[320px] relative gold-shadow ${
                      selectedDestination === dest.id ? "border-champagne scale-[1.02]" : "border-white/5 hover:border-champagne/40"
                    }`}
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark bottom mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left">
                      <span className="text-[9px] text-champagne uppercase tracking-widest font-semibold block mb-1">
                        {dest.location}
                      </span>
                      <h3 className="font-serif text-2xl text-luxury-ivory font-light mb-2">
                        {dest.name}
                      </h3>
                      <p className="text-[10px] text-gray-300 italic line-clamp-2 font-light font-sans mb-3">
                        {dest.tagline}
                      </p>
                      
                      <button className="text-[9px] text-champagne font-bold tracking-[0.2em] uppercase inline-flex items-center gap-1 group-hover:text-white transition-colors">
                        {selectedDestination === dest.id ? "Close Details" : "Explore Logistics"} <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Animated gold border overlay */}
                    {selectedDestination === dest.id && (
                      <div className="absolute inset-0 border-2 border-champagne rounded-xl pointer-events-none" />
                    )}
                  </div>
                ))}
              </div>

              {/* Dynamic Drawer Overlay on clicking card */}
              <AnimatePresence>
                {selectedDestination && activeDestinationDetails && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 bg-luxury-charcoal rounded-xl border border-champagne/20 p-6 md:p-10 text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center gold-shadow relative"
                  >
                    {/* Close action */}
                    <button
                      onClick={() => setSelectedDestination(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-champagne transition-colors cursor-pointer"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <div className="md:col-span-4">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/5">
                        <img
                          src={activeDestinationDetails.image}
                          alt={activeDestinationDetails.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-8 flex flex-col justify-center">
                      <span className="text-[10px] text-champagne tracking-[0.25em] uppercase font-semibold">
                        Exclusive Destination Curation
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-luxury-ivory font-light mt-2 mb-4">
                        Weddings in {activeDestinationDetails.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light font-sans mb-6">
                        {activeDestinationDetails.description} Our logistics package in {activeDestinationDetails.name} includes complete airport meet-and-greets, luxury transfers via our premium car fleet, local vendor contract takeovers, site permit coordination with regional tourism councils, and 24/7 client coordination desks on site.
                      </p>
                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            setVenue(`${activeDestinationDetails.name} Destination`);
                            setIsConsultationModalOpen(true);
                          }}
                          className="px-6 py-2.5 rounded-full bg-gold-gradient text-luxury-black text-xs font-semibold tracking-widest uppercase hover:opacity-95 transition-all shadow-lg cursor-pointer clickable"
                        >
                          Plan Here
                        </button>
                        <button
                          onClick={() => setSelectedDestination(null)}
                          className="px-6 py-2.5 rounded-full border border-white/20 hover:border-champagne hover:text-champagne text-xs font-semibold tracking-widest uppercase transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </section>

          {/* 11. FEATURED CASE STUDIES / WEDDING STORIES */}
          <section id="stories" className="py-24 md:py-32 bg-luxury-ivory border-b border-champagne/10 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              
              <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center justify-center gap-2 mb-3">
                  <Heart className="h-3.5 w-3.5" /> High-Fashion Showcases
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-black mb-4">
                  Signature Love Chronicles
                </h2>
                <div className="h-[1px] w-20 bg-champagne mx-auto my-3" />
                <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                  Go behind the scenes of our most grand, historically complex, and visually iconic multi-crore celebrations.
                </p>
              </div>

              {/* Case Studies Lists */}
              <div className="flex flex-col gap-16 md:gap-24">
                {WEDDING_STORIES.map((story, idx) => (
                  <div
                    key={story.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                      idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    
                    {/* Story Banner */}
                    <div className={`lg:col-span-6 relative ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden border border-champagne/15 gold-shadow relative">
                        <img
                          src={story.image}
                          alt={`${story.brideName} & ${story.groomName}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-luxury-black/10" />
                      </div>
                      
                      {/* Budget Badge floating */}
                      <div className="absolute bottom-4 left-4 bg-luxury-black/80 backdrop-blur-md text-champagne border border-champagne/20 text-[10px] tracking-widest uppercase font-semibold px-4 py-2 rounded shadow-2xl">
                        Budget: {story.budgetCategory}
                      </div>
                    </div>

                    {/* Story Text Content */}
                    <div className={`lg:col-span-6 text-left ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                      <span className="text-[10px] tracking-[0.25em] text-champagne uppercase font-semibold flex items-center gap-2 mb-3">
                        <MapPin className="h-3.5 w-3.5" /> {story.location}
                      </span>
                      
                      <h3 className="font-serif text-3xl md:text-4xl font-light text-luxury-black mb-4">
                        The Union of {story.brideName} & {story.groomName}
                      </h3>
                      
                      <div className="grid grid-cols-3 gap-2 border-y border-champagne/10 py-4 my-6">
                        <div>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-light block">Guest Count</span>
                          <span className="font-serif text-lg text-luxury-black font-semibold mt-1 block">{story.guestCount} Guests</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-light block">Aesthetic Theme</span>
                          <span className="font-serif text-lg text-luxury-black font-semibold mt-1 block leading-tight">{story.theme.split(" ")[0]} Style</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-light block">Planning Horizon</span>
                          <span className="font-serif text-lg text-luxury-black font-semibold mt-1 block">8 Months</span>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light mb-8">
                        {story.shortStory}
                      </p>

                      <button
                        onClick={() => {
                          setVenue(`${story.brideName} & ${story.groomName} Theme`);
                          setIsConsultationModalOpen(true);
                        }}
                        className="px-6 py-3 rounded-full bg-luxury-black hover:bg-champagne hover:text-luxury-black text-luxury-ivory hover:gold-shadow text-xs tracking-widest font-semibold uppercase transition-luxury clickable"
                      >
                        Inquire This Design
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* 12. TESTIMONIALS (LUXURY CARD SLIDES) */}
          <section id="testimonials" className="py-24 md:py-32 bg-luxury-black text-luxury-ivory relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              
              <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center justify-center gap-2 mb-3">
                  <Star className="h-4 w-4 text-champagne" /> Certified Google Elite Ratings
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-ivory mb-4">
                  Elite Clients, Eternal Trust
                </h2>
                <div className="h-[1px] w-20 bg-champagne mx-auto my-3" />
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                  Read genuine Google and personal testimonials from our noble couples who have trusted us with their milestone celebrations.
                </p>
              </div>

              {/* Grid of 3 Reviews */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {TESTIMONIALS.map((review) => (
                  <div
                    key={review.id}
                    className="bg-luxury-charcoal/30 rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden gold-shadow transition-all duration-500 hover:border-champagne/30"
                  >
                    <div>
                      {/* Star rating row */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-champagne text-champagne" />
                        ))}
                      </div>

                      <p className="text-xs md:text-sm text-gray-300 italic font-light font-sans leading-relaxed mb-8">
                        "{review.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                      <div className="h-12 w-12 rounded-full overflow-hidden border border-champagne/20">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-serif text-base text-luxury-ivory font-semibold">{review.name}</h4>
                        <span className="text-[10px] text-champagne uppercase tracking-widest block font-sans mt-0.5">{review.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* 13. PROCESS SECTION (ANMATED TIMELINE) */}
          <section className="py-24 md:py-32 bg-luxury-ivory border-b border-champagne/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              
              <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center justify-center gap-2 mb-3">
                  <Star className="h-3.5 w-3.5" /> High-Artistry Curation
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-black mb-4">
                  The Path to Your Fairytale
                </h2>
                <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed max-w-lg mx-auto">
                  We handle the planning with rigid precision and artistic grace, taking you smoothly through five distinct editorial phases.
                </p>
              </div>

              {/* Timeline Layout */}
              <div className="relative max-w-5xl mx-auto">
                {/* Horizontal central line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-champagne/20 -translate-y-1/2 hidden lg:block" />
                
                {/* Vertical central line for mobile */}
                <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-champagne/20 lg:hidden" />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                  {[
                    { step: "01", name: "Consultation", desc: "A private visual briefing to understand your specific scale, styling desires, and logistical scopes." },
                    { step: "02", name: "Planning", desc: "Hotel negotiations, detailed cost frameworks, and initial master logistics calendars are mapped." },
                    { step: "03", name: "Design", desc: "3D visual set designs, floral mockups, luxury menus, and custom styling mood-boards are locked." },
                    { step: "04", name: "Execution", desc: "A flawless, synchronized takeover overseen on-site by 40+ execution managers and fine artisans." },
                    { step: "05", name: "Celebration", desc: "Step forward in ultimate luxury as our teams guide every sensory element seamlessly under your feet." },
                  ].map((phase, idx) => (
                    <div
                      key={phase.step}
                      className="flex lg:flex-col items-start lg:items-center text-left lg:text-center pl-12 lg:pl-0 relative group"
                    >
                      {/* Circle Dot indicator */}
                      <div className="absolute left-3 lg:left-1/2 top-1.5 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 h-6 w-6 rounded-full bg-luxury-black border border-champagne flex items-center justify-center z-20 group-hover:bg-champagne transition-colors duration-300">
                        <span className="text-[8px] text-champagne group-hover:text-luxury-black font-semibold uppercase">{phase.step}</span>
                      </div>

                      <div className="lg:mt-16 text-left lg:text-center bg-white lg:bg-transparent rounded-xl border lg:border-none border-champagne/10 p-5 lg:p-0">
                        <span className="text-[10px] tracking-[0.25em] text-champagne uppercase font-semibold block mb-1">
                          Phase {phase.step}
                        </span>
                        <h4 className="font-serif text-xl text-luxury-black font-semibold mb-3">
                          {phase.name}
                        </h4>
                        <p className="text-xs text-gray-500 font-light font-sans leading-relaxed">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* WEDDING COUNTDOWN WIDGET */}
          <section className="bg-luxury-black py-16 md:py-24 relative overflow-hidden">
            <WeddingCountdown />
          </section>

          {/* 15. FAQ ACCORDION */}
          <section id="faq" className="py-24 md:py-32 bg-luxury-ivory border-b border-champagne/10 relative">
            <div className="max-w-4xl mx-auto px-6">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center justify-center gap-2 mb-3">
                  <Star className="h-3.5 w-3.5" /> Luxury Inquiries
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-black mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                  Clear answers about scheduling, destination logistics, custom structural design, and client requirements.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-4">
                {FAQ_ITEMS.map((faq) => (
                  <div
                    key={faq.id}
                    className="border-b border-champagne/15 bg-white rounded-xl overflow-hidden gold-shadow"
                  >
                    <button
                      onClick={() => setFaqOpenId(faqOpenId === faq.id ? null : faq.id)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer clickable"
                    >
                      <span className="font-serif text-base md:text-lg text-luxury-black font-semibold pr-4">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: faqOpenId === faq.id ? 180 : 0 }}
                        className="text-champagne transition-transform"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {faqOpenId === faq.id && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 px-6 text-xs md:text-sm text-gray-600 font-sans font-light leading-relaxed border-t border-champagne/5 pt-4 text-left">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* 16. INSTAGRAM FEED GRID */}
          <section className="py-12 bg-luxury-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center justify-center gap-2 mb-6 select-none">
                <Instagram className="h-4 w-4" /> Follow @RoyalWeddings
              </span>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {[
                  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
                ].map((imgSrc, idx) => (
                  <a
                    key={idx}
                    href="https://instagram.com/vogueweddings"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-lg border border-white/5 bg-luxury-black reveal-img-container shadow-lg clickable"
                  >
                    <img
                      src={imgSrc}
                      alt="Luxury Wedding Instagram feed moment"
                      className="w-full h-full object-cover reveal-img"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-champagne/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-luxury-black" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* 17. PREMIUM CONTACT SECTION (LUXURY CONTACT FORM + GOOGLE MAP INTEGRATION) */}
          <section id="contact" className="py-24 md:py-32 bg-luxury-ivory relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
              
              {/* Left Column: Premium Intake Form */}
              <div className="lg:col-span-7 text-left">
                <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center gap-2 mb-3">
                  <Mail className="h-4 w-4" /> Royal Concierge Intake
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-luxury-black mb-4">
                  Commence Your Inquiry
                </h2>
                <p className="text-xs md:text-sm text-gray-500 font-light font-sans mb-8 leading-relaxed">
                  We limit our master bookings to exactly ten signature celebrations annually to ensure flawless attention. Secure your initial consultation spot.
                </p>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-deep rounded-2xl border border-champagne/30 p-8 text-center text-luxury-ivory gold-shadow"
                  >
                    <CheckCircle className="h-12 w-12 text-champagne mx-auto mb-4 animate-bounce" />
                    <h3 className="font-serif text-2xl text-gold-gradient font-semibold mb-2">Inquiry Successfully Registered</h3>
                    <p className="text-xs text-gray-300 font-light max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting Royal Weddings. Our head concierge will contact you via email or private call within the next 12 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest block mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Meera Singhania"
                          className="w-full bg-white border border-champagne/15 rounded-lg px-4 py-3 text-xs md:text-sm text-luxury-black placeholder-gray-400 focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest block mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 99999 88888"
                          className="w-full bg-white border border-champagne/15 rounded-lg px-4 py-3 text-xs md:text-sm text-luxury-black placeholder-gray-400 focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest block mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. meera@domain.com"
                          className="w-full bg-white border border-champagne/15 rounded-lg px-4 py-3 text-xs md:text-sm text-luxury-black placeholder-gray-400 focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest block mb-2">Desired Wedding Date</label>
                        <input
                          type="date"
                          value={weddingDate}
                          onChange={(e) => setWeddingDate(e.target.value)}
                          className="w-full bg-white border border-champagne/15 rounded-lg px-4 py-3 text-xs md:text-sm text-luxury-black focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest block mb-2">Guest Range</label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full bg-white border border-champagne/15 rounded-lg px-4 py-3 text-xs text-luxury-black focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne"
                        >
                          <option value="Under 100">Under 100 Guests</option>
                          <option value="100-250">100 - 250 Guests</option>
                          <option value="250-500">250 - 500 Guests</option>
                          <option value="500+">500+ Guests (Royal)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest block mb-2">Target Venue / Location</label>
                        <input
                          type="text"
                          value={venue}
                          onChange={(e) => setVenue(e.target.value)}
                          placeholder="e.g. Udaipur, Italy"
                          className="w-full bg-white border border-champagne/15 rounded-lg px-4 py-3 text-xs md:text-sm text-luxury-black placeholder-gray-400 focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase text-gray-500 font-semibold tracking-widest block mb-2">Personal Vision & Requirements</label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Detail your styling dreams, special artists, and key milestones..."
                        className="w-full bg-white border border-champagne/15 rounded-lg px-4 py-3 text-xs md:text-sm text-luxury-black placeholder-gray-400 focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-luxury-black text-white hover:bg-champagne hover:text-luxury-black text-xs font-sans tracking-[0.25em] uppercase font-bold transition-all flex items-center justify-center gap-2 cursor-pointer clickable gold-shadow"
                    >
                      {isSubmitting ? (
                        <>Inquiring Concierge...</>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" /> Submit Confidential Proposal
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Google Maps Stylized Layout Card */}
              <div className="lg:col-span-5 text-left">
                <span className="text-[11px] tracking-[0.3em] text-champagne uppercase font-bold flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4" /> Global Head Office
                </span>
                
                {/* Styled Gilded Compass representation for Google Map Integration */}
                <div className="bg-luxury-black text-luxury-ivory rounded-2xl border border-champagne/25 p-6 md:p-8 gold-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/5 rounded-full blur-2xl group-hover:bg-champagne/10 transition-all duration-700" />
                  
                  <div className="mb-6 flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-2xl text-gold-gradient font-light">ROYAL WEDDINGS HQ</h4>
                      <p className="text-[10px] text-gray-400 tracking-wider font-light mt-1">THE TAJ MAHAL PALACE, NEW DELHI</p>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-champagne/20 flex items-center justify-center bg-luxury-charcoal">
                      <Compass className="h-5 w-5 text-champagne animate-spin-slow" />
                    </div>
                  </div>

                  {/* Curated Gilded Address list */}
                  <div className="space-y-4 font-sans font-light text-xs text-gray-300">
                    <p className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-champagne shrink-0 mt-0.5" />
                      <span>
                        Suite 412, The Taj Mahal Palace, Mansingh Road, <br />
                        New Delhi, Delhi 110011, India
                      </span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-champagne shrink-0" />
                      <span>+91 99999 88888 &nbsp;|&nbsp; +91 11 4455 6677</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-champagne shrink-0" />
                      <span>concierge@royalweddings.com</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-champagne shrink-0" />
                      <span>Mon - Sat: 10:00 AM to 08:00 PM IST (By Appointment Only)</span>
                    </p>
                  </div>

                  {/* Stylized Simulated Luxury Map */}
                  <div className="mt-8 relative aspect-[16/10] rounded-lg overflow-hidden border border-champagne/20 gold-shadow">
                    {/* Simulated elegant dark luxury map canvas background */}
                    <div className="absolute inset-0 bg-[#161616] flex items-center justify-center p-4">
                      {/* Compass and vector map graphic */}
                      <svg className="w-full h-full opacity-35" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#C8A96A" strokeWidth="0.5" strokeDasharray="2,2" />
                        <line x1="50" y1="0" x2="50" y2="100" stroke="#C8A96A" strokeWidth="0.25" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="#C8A96A" strokeWidth="0.25" />
                        {/* Custom radial rings */}
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#C8A96A" strokeWidth="0.25" />
                        <path d="M10 20 L20 40 L50 50 L90 20 M15 75 L30 65 L50 50" fill="none" stroke="#C8A96A" strokeWidth="0.25" />
                      </svg>
                      
                      {/* Interactive map location point */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                        <span className="absolute -inset-4 rounded-full border border-champagne/40 bg-champagne/10 animate-ping" />
                        <MapPin className="h-8 w-8 text-champagne drop-shadow-[0_0_10px_#C8A96A] mx-auto relative z-10" />
                        <span className="block mt-2 text-[9px] font-serif uppercase tracking-widest text-champagne-light bg-luxury-black/90 px-2 py-0.5 rounded border border-champagne/10 whitespace-nowrap relative z-10">
                          Royal Weddings
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Real Directions External Trigger */}
                  <a
                    href="https://maps.google.com/?q=The+Taj+Mahal+Palace+New+Delhi"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 w-full py-3 rounded-full bg-luxury-charcoal/60 hover:bg-champagne hover:text-luxury-black text-champagne border border-champagne/30 text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer clickable"
                  >
                    <Compass className="h-4 w-4" /> Launch Google Navigation
                  </a>

                </div>
              </div>

            </div>
          </section>

          {/* 18. FOOTER (GILDED LUXURY DEEP CANVASES) */}
          <footer className="bg-luxury-black text-luxury-ivory border-t border-champagne/15 py-16 md:py-24 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-96 h-96 bg-champagne/2 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
              
              {/* Box 1: Brand & Bio */}
              <div className="md:col-span-4 flex flex-col items-start">
                <span className="font-serif text-2xl tracking-[0.2em] font-light text-gold-gradient mb-4 leading-none">
                  ROYAL WEDDINGS
                </span>
                <p className="text-xs text-gray-400 font-sans font-light leading-relaxed mb-6 max-w-sm">
                  We translate intense romantic unions into highly calibrated physical architecture, staging world-class weddings of timeless distinction across India, UAE, and Southeast Asia.
                </p>
                {/* Social icons */}
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/vogueweddings"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-champagne hover:border-champagne transition-all bg-white/5 clickable"
                    aria-label="Visit Instagram Profile"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://facebook.com/vogueweddings"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-champagne hover:border-champagne transition-all bg-white/5 clickable"
                    aria-label="Visit Facebook Profile"
                  >
                    <Star className="h-4 w-4" />
                  </a>
                  <a
                    href="https://pinterest.com/vogueweddings"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-champagne hover:border-champagne transition-all bg-white/5 clickable"
                    aria-label="Visit Pinterest Boards"
                  >
                    <Compass className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Box 2: Quick Links Navigation */}
              <div className="md:col-span-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-champagne font-semibold mb-6">Royal</h4>
                  <ul className="space-y-3 font-sans text-xs text-gray-400 font-light">
                    <li><a href="#home" className="hover:text-champagne transition-colors">Home Page</a></li>
                    <li><a href="#about" className="hover:text-champagne transition-colors">Our Vision</a></li>
                    <li><a href="#services" className="hover:text-champagne transition-colors">Core Curations</a></li>
                    <li><a href="#gallery" className="hover:text-champagne transition-colors">The Portfolios</a></li>
                    <li><a href="#stories" className="hover:text-champagne transition-colors">Love Stories</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-champagne font-semibold mb-6">Concierge</h4>
                  <ul className="space-y-3 font-sans text-xs text-gray-400 font-light">
                    <li><a href="#destinations" className="hover:text-champagne transition-colors">Destinations</a></li>
                    <li><a href="#faq" className="hover:text-champagne transition-colors">Client FAQ</a></li>
                    <li><a href="#contact" className="hover:text-champagne transition-colors">Commence Intake</a></li>
                  </ul>
                </div>
              </div>

              {/* Box 3: Contact & Monogram */}
              <div className="md:col-span-4 flex flex-col items-start font-sans text-xs text-gray-400 font-light space-y-4">
                <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-champagne font-semibold mb-2">Concierge Desk</h4>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-champagne shrink-0" />
                  <span>+91 99999 88888</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-champagne shrink-0" />
                  <span>concierge@royalweddings.com</span>
                </p>
                <p className="flex items-start gap-3 text-left">
                  <MapPin className="h-4 w-4 text-champagne shrink-0 mt-0.5" />
                  <span>
                    The Taj Mahal Palace Suite 412, Mansingh Road, <br />
                    New Delhi, Delhi 110011, India
                  </span>
                </p>
                <div className="pt-4 text-[10px] text-gray-600 block w-full border-t border-white/5">
                  Designed by Vogue Weddings Inspiration.
                </div>
              </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-sans tracking-wider">
              <p>© 2026 Royal Weddings & Celebrations. All Rights Reserved. Private Trust.</p>
              <div className="flex gap-6">
                <a href="#about" className="hover:text-champagne transition-colors">Terms of Luxury Service</a>
                <a href="#contact" className="hover:text-champagne transition-colors">Privacy Confidentiality Charter</a>
              </div>
            </div>
          </footer>

          {/* 19. EXTRA PREMIUM STICKY/FLOATING FEATURES */}

          {/* A. Animated Floating WhatsApp Button */}
          <a
            href="https://wa.me/919999988888?text=Hello%20Royal%20Weddings%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20wedding%20planning%20services."
            target="_blank"
            rel="noreferrer"
            id="floating-whatsapp"
            className="fixed bottom-6 left-6 z-40 bg-emerald-accent text-luxury-ivory p-4 rounded-full border border-champagne/30 hover:scale-110 transition-transform duration-300 shadow-2xl flex items-center justify-center group pointer-events-auto clickable"
            aria-label="Direct Chat with Head Concierge on WhatsApp"
          >
            {/* Direct notification bubble */}
            <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-champagne rounded-full border-2 border-emerald-accent flex items-center justify-center animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-black" />
            </span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.978L2 22l5.133-1.347a9.93 9.93 0 0 0 4.873 1.28h.005c5.505 0 9.988-4.478 9.99-9.985A9.99 9.99 0 0 0 12.012 2zm4.845 13.921c-.266.747-1.534 1.353-2.109 1.411-.532.054-1.218.083-3.487-.855-2.902-1.2-4.773-4.148-4.917-4.341-.145-.192-1.157-1.537-1.157-2.931 0-1.393.725-2.08 1.015-2.367.29-.288.628-.36.84-.36.213 0 .426.002.61.01.196.007.458-.076.719.553.266.643.91 2.222.989 2.38.079.159.13.345.023.553-.106.21-.219.34-.343.483-.125.143-.261.298-.372.4-.127.116-.258.243-.11.498.148.252.654 1.071 1.403 1.737.96.855 1.767 1.12 2.018 1.226.252.106.398.089.549-.083.151-.173.654-.761.829-1.02.175-.259.35-.216.59-.127.24.089 1.52.717 1.782.848.261.13.435.195.498.307.065.113.065.654-.2 1.401z" />
            </svg>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-[10px] tracking-widest uppercase font-bold pl-0 group-hover:pl-2 text-champagne-light">
              Direct Concierge
            </span>
          </a>

          {/* B. Sticky "Book Consultation" floating bar on scroll */}
          <AnimatePresence>
            {showStickyConsultation && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="fixed bottom-6 right-6 z-40 pointer-events-auto"
              >
                <button
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-gold-gradient text-luxury-black font-semibold text-xs tracking-[0.2em] uppercase px-6 py-3.5 rounded-full gold-shadow-lg flex items-center gap-2 hover:scale-[1.03] transition-transform cursor-pointer clickable border border-champagne-light/35"
                >
                  <Sparkles className="h-4 w-4 text-luxury-black animate-spin-slow" /> Book Consultation
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* C. POPUP INTAKE MODAL WINDOW WITH GLASSMORPHISM */}
          <AnimatePresence>
            {isConsultationModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[1050] flex items-center justify-center p-4 bg-luxury-black/85 backdrop-blur-md pointer-events-auto"
              >
                <motion.div
                  initial={{ scale: 0.95, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 20 }}
                  className="bg-luxury-ivory rounded-2xl border border-champagne/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative gold-shadow-lg text-left"
                >
                  {/* Close marker */}
                  <button
                    onClick={() => setIsConsultationModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-champagne transition-colors cursor-pointer"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  <span className="text-[10px] tracking-[0.25em] text-champagne uppercase font-bold flex items-center gap-2 mb-2">
                    <Sparkles className="h-3.5 w-3.5" /> Royal Curation Request
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-luxury-black mb-1">
                    Book Private Consultation
                  </h3>
                  <p className="text-[11px] text-gray-500 font-light font-sans mb-6">
                    Fill out our exclusive matchmaking application below. Our head wedding designer will contact you shortly.
                  </p>

                  {formSubmitted ? (
                    <div className="py-12 text-center text-luxury-black">
                      <CheckCircle className="h-16 w-16 text-champagne mx-auto mb-4 animate-bounce" />
                      <h4 className="font-serif text-2xl text-luxury-black font-semibold mb-2">Inquiry Confirmed</h4>
                      <p className="text-xs text-gray-500 font-light max-w-sm mx-auto leading-relaxed">
                        We have successfully reserved your intake token. Our global head designer will contact you within the next 12 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleConsultationSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] uppercase text-gray-500 font-semibold tracking-wider block mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Meera Singhania"
                            className="w-full bg-white border border-champagne/15 rounded-lg px-3 py-2 text-xs text-luxury-black focus:outline-none focus:border-champagne"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] uppercase text-gray-500 font-semibold tracking-wider block mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="e.g. +91 99999 88888"
                            className="w-full bg-white border border-champagne/15 rounded-lg px-3 py-2 text-xs text-luxury-black focus:outline-none focus:border-champagne"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] uppercase text-gray-500 font-semibold tracking-wider block mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="meera@domain.com"
                            className="w-full bg-white border border-champagne/15 rounded-lg px-3 py-2 text-xs text-luxury-black focus:outline-none focus:border-champagne"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] uppercase text-gray-500 font-semibold tracking-wider block mb-1">Target Date</label>
                          <input
                            type="date"
                            value={weddingDate}
                            onChange={(e) => setWeddingDate(e.target.value)}
                            className="w-full bg-white border border-champagne/15 rounded-lg px-3 py-2 text-xs text-luxury-black focus:outline-none focus:border-champagne"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] uppercase text-gray-500 font-semibold tracking-wider block mb-1">Guests</label>
                          <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full bg-white border border-champagne/15 rounded px-3 py-2 text-xs text-luxury-black focus:outline-none focus:border-champagne"
                          >
                            <option value="Under 100">Under 100</option>
                            <option value="100-250">100 - 250</option>
                            <option value="250-500">250 - 500</option>
                            <option value="500+">500+ Guests</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[9px] uppercase text-gray-500 font-semibold tracking-wider block mb-1">Target Region</label>
                          <input
                            type="text"
                            value={venue}
                            onChange={(e) => setVenue(e.target.value)}
                            placeholder="e.g. Udaipur, Italy"
                            className="w-full bg-white border border-champagne/15 rounded-lg px-3 py-2 text-xs text-luxury-black focus:outline-none focus:border-champagne"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[9px] uppercase text-gray-500 font-semibold tracking-wider block mb-1">Inquiry / Vision Notes</label>
                        <textarea
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your theme desires, travel specifications..."
                          className="w-full bg-white border border-champagne/15 rounded-lg px-3 py-2 text-xs text-luxury-black focus:outline-none focus:border-champagne"
                        />
                      </div>

                      <div className="pt-4 flex gap-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 rounded-full bg-gold-gradient text-luxury-black font-semibold text-xs tracking-widest uppercase hover:opacity-95 transition-all cursor-pointer clickable shadow-lg"
                        >
                          {isSubmitting ? "Submitting Application..." : "Request Intake Spot"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsConsultationModalOpen(false)}
                          className="px-6 py-3 rounded-full border border-gray-300 hover:border-luxury-black text-gray-500 hover:text-luxury-black text-xs font-semibold tracking-widest uppercase transition-all"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </div>
  );
}
