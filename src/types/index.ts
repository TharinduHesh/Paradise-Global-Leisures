// Property Types
export interface Property {
  id: string;
  name: string;
  location: string;
  district: string;
  price: number;
  priceUnit: 'LKR' | 'USD';
  priceType: 'sale' | 'rent';
  rentPeriod?: 'night' | 'month';
  propertyType: 'Villa' | 'House' | 'Land' | 'Apartment' | 'Commercial' | 'Hotel';
  bedrooms: number;
  bathrooms: number;
  landSize: number;
  landUnit: 'perches' | 'acres' | 'sq ft';
  buildingSize?: number;
  image: string;
  images?: string[];
  description: string;
  features: string[];
  isBeachfront: boolean;
  isFeatured: boolean;
  status: 'available' | 'sold' | 'rented';
  slug: string;
  yearBuilt?: number;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  features: string[];
  process?: ProcessStep[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Destination Types
export interface Destination {
  id: string;
  name: string;
  district: string;
  description: string;
  image: string;
  propertyCount: number;
  highlights: string[];
  slug: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  year: number;
  image: string;
  description: string;
  client?: string;
  area?: string;
}

// Filter Types
export interface PropertyFilters {
  priceType: 'all' | 'sale' | 'rent';
  location: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  isBeachfront: boolean;
}

// Enquiry/Contact Types
export interface EnquiryForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyLocation: string;
  message: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
