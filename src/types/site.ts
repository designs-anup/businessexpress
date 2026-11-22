export interface ServiceItem {
  title: string;
  description: string;
  price?: string;
}

export interface SiteContent {
  businessName: string;
  tagline: string;
  category: string;
  about: string;
  themeColor: string; // Hex color e.g. "#0f766e"
  phone: string;
  whatsappNumber: string; // Digits only with country code e.g. "919876543210"
  email?: string;
  address: string;
  city: string;
  googleMapsUrl?: string;
  logoUrl?: string;
  heroImageUrl?: string;
  services: ServiceItem[];
}

export interface SiteRecord {
  id: string;
  slug: string;
  template_id: 'modern' | 'classic';
  is_published: boolean;
  content: SiteContent;
}