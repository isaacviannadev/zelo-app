export type AddressType = {
  street: string;
  city: string;
  state: string;
  zip: string;
  complement: string;
};

export type CertificationType = {
  name: string;
  category: string;
  date: string;
  validated: boolean;
};

export type ContactType = {
  phone: string;
  email: string;
  website: string;
  whatsapp: string;
};

export type SocialType = {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
};

export type ServicesType = {
  homecare: boolean;
  nursing: boolean;
  therapy: boolean;
  physiotherapy: boolean;
  companionship: boolean;
  cleaning: boolean;
  cooking: boolean;
};

export type ScheduleType = {
  day: string;
  from: string;
  to: string;
};

export type ReviewType = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
};
