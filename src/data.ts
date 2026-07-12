import { DestinationItem, ServiceItem, WeddingStory, TestimonialItem, PricePackage, FAQItem } from "./types";

export const DESTINATIONS: DestinationItem[] = [
  {
    id: "udaipur",
    name: "Udaipur",
    location: "Rajasthan, India",
    tagline: "The Venice of the East",
    description: "Exchange vows suspended on a shimmering lake surrounded by majestic white palaces, where royal traditions meet contemporary luxury.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    location: "Rajasthan, India",
    tagline: "The Pink Palace Majesty",
    description: "Celebrate amidst colossal historic fortresses, hand-carved stone arches, and opulent heritage gardens dripping with marigolds and candlelight.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "goa",
    name: "Goa",
    location: "Coastal, India",
    tagline: "The Sunset Symphony",
    description: "A private shoreline sanctuary with pristine white sands, gentle Arabian waves, and modern high-design structures under a pastel sky.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "kerala",
    name: "Kerala",
    location: "Backwaters, India",
    tagline: "The Emerald Serenade",
    description: "Nestled between whispering coconut groves and serene waterways, create an intimate tropical wonderland of unmatched tranquility.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "dubai",
    name: "Dubai",
    location: "UAE",
    tagline: "The Desert Oasis Empress",
    description: "Gilded ballrooms looking over magnificent skylines, custom private islands, and dramatic desert luxury beneath stellar starlight.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bali",
    name: "Bali",
    location: "Indonesia",
    tagline: "The Sacred Sanctuary",
    description: "Breathtaking clifftops overlooking the deep blue Indian Ocean and mystical jungle cathedrals of glass and tropical orchids.",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "thailand",
    name: "Thailand",
    location: "Phuket / Koh Samui",
    tagline: "The Tropical Dreamscape",
    description: "Exclusive cliffside private villas, dramatic floral archways, and premium hospitality tailored for high-profile multi-day celebrations.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "planning",
    title: "Wedding Planning",
    description: "End-to-end master planning, production schedules, and complete logistical choreography designed down to the millisecond.",
    iconName: "Calendar"
  },
  {
    id: "destination",
    title: "Destination Weddings",
    description: "Global site inspections, premium hotel buyouts, custom travel coordination, and concierge guest assistance globally.",
    iconName: "MapPin"
  },
  {
    id: "venue",
    title: "Venue Selection",
    description: "Exclusive access to hidden estates, private islands, historical palaces, and elite 5-star hotel partnerships.",
    iconName: "Building"
  },
  {
    id: "decor",
    title: "Decoration & Floral Design",
    description: "Bespoke scenography, structural art installations, and curated imported floral canvases by international artists.",
    iconName: "Sparkles"
  },
  {
    id: "photography",
    title: "Photography & Cinematography",
    description: "Candid emotional storytelling and cinematic wedding films directed by award-winning visual creators.",
    iconName: "Camera"
  },
  {
    id: "makeup",
    title: "Bridal Makeup",
    description: "Elite celebrity stylists and high-definition bridal artistry to match each couture ensemble with subtle, timeless grace.",
    iconName: "Smile"
  },
  {
    id: "catering",
    title: "Luxury Catering",
    description: "Gastronomic journeys featuring Michelin-star chefs, custom-paired molecular mixology, and grand silver service banquet presentation.",
    iconName: "Utensils"
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description: "Sourcing world-class musical ensembles, renowned celebrity headliners, and state-of-the-art interactive live acts.",
    iconName: "Music"
  },
  {
    id: "guest",
    title: "Guest Management",
    description: "A-list hospitality, airport meet-and-greet in luxury sedans, VIP hotel welcome gifts, and 24/7 dedicated guest helplines.",
    iconName: "Users"
  },
  {
    id: "invitation",
    title: "Invitation Design",
    description: "Fine art letterpress, hand-applied gold leaf calligraphic suites, and high-end wooden lockboxes with scent and audio technology.",
    iconName: "Mail"
  },
  {
    id: "website",
    title: "Wedding Website",
    description: "A private, beautiful bespoke digital portal with animated RSVP timelines, itinerary details, and password-protected guest photo hubs.",
    iconName: "Globe"
  },
  {
    id: "honeymoon",
    title: "Honeymoon Planning",
    description: "Private yacht charters, secret safaris, and ultra-luxury overwater villa bookings for your inaugural getaway.",
    iconName: "Compass"
  }
];

export const WEDDING_STORIES: WeddingStory[] = [
  {
    id: "royal-udaipur",
    brideName: "Meera",
    groomName: "Ranveer",
    location: "Taj Lake Palace, Udaipur",
    guestCount: 350,
    theme: "Royal Rajputana Regal Heritage",
    budgetCategory: "₹5 Crore+",
    shortStory: "A breathtaking three-day palace takeover. Meera arrived on a floral barge across Lake Pichola as 10,000 candle lanterns floated alongside. The mandap was constructed of hand-carved white marble and completely covered in 50,000 imported white roses and gold foil, under a sky lit with synchronized cinematic pyrotechnics.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    filter: "Royal"
  },
  {
    id: "sunset-goa",
    brideName: "Anya",
    groomName: "Kabir",
    location: "Taj Exotica, Goa",
    guestCount: 220,
    theme: "Minimalist Ivory Coastal Symphony",
    budgetCategory: "₹2.5 Crore - ₹5 Crore",
    shortStory: "An elite beachfront affair focusing on clean-line architecture and high-contrast styling. Guests sat in curved ivory amphitheater lounges as Anya and Kabir wed under an ethereal, floating glass canopy. The evening transitioned into a high-fashion, starlight dinner with a 12-piece jazz orchestra flown in from London.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    filter: "Destination"
  },
  {
    id: "gilded-jaipur",
    brideName: "Rhea",
    groomName: "Armaan",
    location: "Rambagh Palace, Jaipur",
    guestCount: 400,
    theme: "The Mughal Forest of Glass",
    budgetCategory: "₹5 Crore+",
    shortStory: "Transforming the historic royal lawns into a majestic glass greenhouse. Inside, hundreds of crystal chandeliers hung amongst towering, fully grown indoor cherry blossom trees. The pheras took place inside a mirror-mosaic gazebo refracting candlelight like millions of stars. The reception featured a custom couture runway show.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    filter: "Decor"
  },
  {
    id: "modern-bali",
    brideName: "Siddharth",
    groomName: "Zara",
    location: "Alila Villas Uluwatu, Bali",
    guestCount: 120,
    theme: "Clifftop Tropical Avant-Garde",
    budgetCategory: "₹1 Crore - ₹2.5 Crore",
    shortStory: "An ultra-intimate, high-end celebration on a cliff jutting 300 feet over the Indian Ocean. The altar was a dramatic black volcanic rock platform suspended over water, adorned solely with structural white orchids. An evening of culinary perfection concluded with a beach bonfire lounge featuring acoustic soul performances under a full moon.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    filter: "Modern"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Vikram & Shreya Singhania",
    role: "Bride & Groom",
    quote: "TNP Event Planner didn't just plan our wedding; they built a museum-quality experience that our friends are still talking about two years later. The precision, the visual layout, and the absolute level of calm hospitality during our ₹6 Crore celebration in Udaipur was masterful.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    location: "Udaipur Wedding"
  },
  {
    id: "rev-2",
    name: "Karan Malhotra",
    role: "Father of the Bride",
    quote: "With over 400 international VIP guests flying in for my daughter's wedding, I was incredibly anxious. TNP Event Planner's guest concierge service handled everything flawlessly—from chartered helicopter arrivals to bespoke hotel gifts. Worth every single rupee.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
    location: "Jaipur Wedding"
  },
  {
    id: "rev-3",
    name: "Zoya & Daniel Carter",
    role: "Bride & Groom",
    quote: "Our clifftop Bali wedding was a logistical puzzle, but TNP Event Planner handled the Indonesian local partnerships with perfection. The styling was exactly out of Vogue. Immersive, majestic, and completely stress-free. There is no one else in this league.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    location: "Bali Wedding"
  }
];

export const PRICE_PACKAGES: PricePackage[] = [
  {
    id: "silver",
    name: "The Atelier",
    price: "₹15 Lakh",
    priceSubtitle: "Planning Fee + Production Estimates",
    description: "Designed for couples who have curated their own venue but require unmatched design curation, scheduling precision, and master day-of execution.",
    features: [
      "Full design blueprint & mood boards",
      "Sourcing of premier florists, photographers, & catering partners",
      "Complete logistical coordination (up to 200 guests)",
      "Detailed 6-month master countdown schedule",
      "Curated styling advice for the bridal trousseau",
      "On-site crew of 15 execution managers during the event",
      "Bespoke digital rsvp & wedding portal setup"
    ],
    popular: false
  },
  {
    id: "royal-signature",
    name: "The TNP Heritage",
    price: "₹45 Lakh",
    priceSubtitle: "Custom Full Service Management",
    description: "Our signature elite full-service planning offering. Handcrafted luxury, comprehensive vendor buyouts, custom structural decor, and infinite attention to detail.",
    features: [
      "Complete end-to-end event conceptualization & management",
      "Global destination scouting & premium hotel negotiations",
      "Exclusive production scenography & glass structural design",
      "VIP guest concierge desk & customized luxury fleet airport pickup",
      "Michelin-star culinary profiling & bespoke mixology design",
      "Celebrity artist bookings & full entertainment orchestration",
      "Premium wedding website & customized scented stationery suite",
      "Unlimited communication & 40+ dedicated execution staff on site",
      "Dedicated personal butler for the Bride, Groom, & immediate families"
    ],
    popular: true
  },
  {
    id: "gold",
    name: "The TNP Elite",
    price: "₹30 Lakh",
    priceSubtitle: "Comprehensive Planning & Design",
    description: "An intensive comprehensive package blending meticulous logistical planning with custom floral scenography and world-class guest hospitality.",
    features: [
      "Complete wedding design & lighting architecture",
      "Direct supervision of all premium vendor contracts",
      "Complete hospitality mapping & hotel block management (up to 350 guests)",
      "Catering menu curation and trial management",
      "Sourcing and direction of international entertainment acts",
      "Custom guest invitation wooden lockbox designs",
      "Coordination of full pre-wedding shoots & film pre-production",
      "On-site control room with 25+ managers during the 3-day events"
    ],
    popular: false
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you specialize solely in grand royal weddings, or do you plan intimate celebrations too?",
    answer: "While we are renowned for designing grand palaces and multi-crore destination takeovers, we frequently execute beautifully intimate, high-concept weddings. For us, luxury is defined by the depth of detail, exclusivity of materials, and seamless guest experiences—regardless of whether you host 50 or 1,000 guests."
  },
  {
    id: "faq-2",
    question: "What is your typical wedding planning and management timeline?",
    answer: "For premium destination weddings, we recommend starting the planning process 8 to 12 months in advance. This ensures absolute priority booking for top-tier heritage properties (like Rambagh or Lake Palace), celebrity performers, and premium florists. However, our highly specialized team can execute complex events in as short as 3 months if required."
  },
  {
    id: "faq-3",
    question: "How do you handle destination logistics for guests arriving internationally?",
    answer: "We establish a dedicated 24/7 guest concierge desk immediately. This includes managing personalized flight itineraries, booking exclusive premium room blocks, arranging luxury transport pickups (airport meet-and-greets in luxury vehicles), managing dietary needs, and distributing custom-made scented hospitality welcome kits upon room check-in."
  },
  {
    id: "faq-4",
    question: "Do you offer customizable floral designs and custom site structures?",
    answer: "Absolutely. We do not work with standard templates or presets. Every canopy, gazebo, mirror structure, and floral installation is custom-designed on a 3D canvas by our in-house architects. We import rare floral varieties directly from Holland and Kenya, building completely bespoke structures tailored exclusively for your venue."
  },
  {
    id: "faq-5",
    question: "What is the difference between Design Curation and Turnkey Full Service?",
    answer: "Design Curation is a styling-centric coordination service meant for couples who have locked down their primary venue but need a high-end designer to elevate the styling, handle fine-detailed vendor negotiations, and coordinate day-of execution. Our Turnkey Full Service is a complete, hands-on takeover where we manage every single breath of the wedding—from finding your secret beach venue in Bali to designing the final thank-you cards."
  }
];
