export type CaregiverType = {
  id: string;
  name: string;
  avatar: string;
  description: string;
  location: string;
  specialty: string;
  experience: string;
  rating: number;
  price: number;
  reviews: number;
  available: boolean;
  isPremium: boolean;
  validated: boolean;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    complement: string;
  };
  certifications: {
    name: string;
    category: string;
    date: string;
    validated: boolean;
  }[];
  contacts: {
    phone: string;
    email: string;
    website: string;
    whatsapp: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  services: {
    homecare: boolean;
    nursing: boolean;
    therapy: boolean;
    physiotherapy: boolean;
    companionship: boolean;
    cleaning: boolean;
    cooking: boolean;
  };
  schedule: {
    day: string;
    from: string;
    to: string;
  }[];
  reviewsList: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    date: string;
    content: string;
  }[];
};
