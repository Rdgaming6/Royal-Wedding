import { useEffect } from "react";

export default function SEO() {
  useEffect(() => {
    // 1. Set Page Title
    document.title = "Royal Weddings | Luxury Wedding Planner & Royal Event Scenography";

    // 2. Setup Helper to Add/Update Meta Tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 3. Inject Primary SEO Metas
    setMeta("description", "Royal Weddings is an ultra-premium, luxury wedding planning company crafting timeless royal, scenic, and destination wedding experiences globally.");
    setMeta("keywords", "luxury wedding planner, royal wedding india, wedding planning company, destination wedding planner, Udaipur wedding, Jaipur palace wedding, Dior style wedding, premium wedding organizer");
    setMeta("author", "Royal Weddings Luxury Weddings");
    setMeta("robots", "index, follow");

    // 4. Inject Open Graph Tags
    setMeta("og:title", "Royal Weddings | Ultra-Premium Luxury Wedding Planner", true);
    setMeta("og:description", "From intimate scenic vows to grand historic palace takeovers, we sculpt timeless multi-crore celebrations of love.", true);
    setMeta("og:image", "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80", true);
    setMeta("og:url", window.location.href, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Royal Weddings", true);

    // 5. Inject Twitter Card Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Royal Weddings | Luxury Wedding Planner & Royal Scenography");
    setMeta("twitter:description", "We orchestrate breathtaking multi-crore wedding experiences in Rajasthan, Goa, Bali, and Dubai.");
    setMeta("twitter:image", "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80");

    // 6. Set Canonical URL Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);

    // 7. Inject Structured JSON-LD Schemas
    const injectSchema = (id: string, schemaObj: any) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schemaObj, null, 2);
    };

    // Schema A: Professional Wedding Service / Local Business
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Royal Weddings Luxury Weddings",
      "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "description": "A world-class, ultra-premium, luxury wedding planning and event management brand crafting timeless royal and destination weddings.",
      "telephone": "+91 99999 88888",
      "email": "concierge@royalweddings.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "The Taj Mahal Palace, Mansingh Road",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110011",
        "addressCountry": "IN"
      },
      "priceRange": "₹₹₹₹",
      "url": window.location.href,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6053",
        "longitude": "77.2253"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      "sameAs": [
        "https://www.instagram.com/vogueweddings",
        "https://www.facebook.com/royalweddings",
        "https://www.pinterest.com/royalweddings"
      ]
    };
    injectSchema("schema-business", businessSchema);

    // Schema B: FAQ Pages
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you plan intimate celebrations too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we frequently execute beautifully intimate, high-concept weddings. For us, luxury is defined by the depth of detail, exclusivity of materials, and seamless guest experiences—regardless of size."
          }
        },
        {
          "@type": "Question",
          "name": "What is your typical wedding planning and management timeline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For premium destination weddings, we recommend starting the planning process 8 to 12 months in advance. However, our highly specialized team can execute complex events in as short as 3 months."
          }
        }
      ]
    };
    injectSchema("schema-faq", faqSchema);

    // Schema C: Breadcrumbs
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Luxury Wedding Planning Services",
          "item": `${window.location.origin}/#services`
        }
      ]
    };
    injectSchema("schema-breadcrumb", breadcrumbSchema);

    // Cleanup schemas when unmounting
    return () => {
      document.getElementById("schema-business")?.remove();
      document.getElementById("schema-faq")?.remove();
      document.getElementById("schema-breadcrumb")?.remove();
    };
  }, []);

  return null;
}
