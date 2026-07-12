export interface WeddingStory {
  id: string;
  brideName: string;
  groomName: string;
  location: string;
  guestCount: number;
  theme: string;
  budgetCategory: string;
  shortStory: string;
  image: string;
  filter: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  location: string;
}

export interface PricePackage {
  id: string;
  name: string;
  price: string;
  priceSubtitle: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  tagline: string;
}
