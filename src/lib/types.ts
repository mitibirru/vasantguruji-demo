export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  currency: string;
  images: string[];
  story: string;
  motivation: string;
  spiritualBenefits: string[];
  specifications: { label: string; value: string }[];
  energizedBy: string;
  relatedMantraSlug?: string;
  badge?: string;
}

export interface Mantra {
  id: string;
  title: string;
  titleHindi?: string;
  description: string;
  category: MantraCategory;
  youtubeId: string;
  duration: string;
  requiredRepetitions?: number;
  prescribedFor: string[];
  acousticFidelity: boolean;
}

export type MantraCategory =
  | "health"
  | "obstacle-removal"
  | "planetary"
  | "protection"
  | "prosperity"
  | "devotional";

export interface DonationFund {
  id: string;
  name: string;
  nameHindi?: string;
  description: string;
  targetAmount: number;
  raisedAmount: number;
  currency: string;
  icon: string;
  requiresKYC: boolean;
}

export interface EventInstance {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  geopoint: { lat: number; lng: number };
  isLiveBroadcast: boolean;
  attireRestrictions?: string[];
  registrationOpen: boolean;
  imageUrl?: string;
}

export interface TimelineNode {
  year: string;
  title: string;
  description: string;
  location?: string;
  icon: string;
}

export interface Credential {
  title: string;
  year?: string;
  description: string;
  category: "diplomatic" | "record" | "award" | "spiritual";
}

export interface MediaChannel {
  id: string;
  name: string;
  platform: string;
  focus: string;
  url: string;
  thumbnailColor: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ThoughtYogaEntry {
  date: string;
  mood: number;
  meditationMinutes: number;
  affirmation: string;
}
