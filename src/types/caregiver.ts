import {
  AddressType,
  CertificationType,
  ContactType,
  ReviewType,
  ScheduleType,
  ServicesType,
  SocialType,
} from '.';

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
  address: AddressType;
  certifications: CertificationType[];
  contacts: ContactType;
  social: SocialType;
  services: ServicesType;
  schedule: ScheduleType[];
  reviewsList: ReviewType[];
};
