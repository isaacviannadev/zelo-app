import { z } from 'zod';
import {
  BrazilianState,
  ContactTypes,
  DaysOfWeek,
  EnumGender,
  HealthcareRole,
  ProfileTypes,
} from '../__mocks__';

export const formSchema = z.object({
  gender: z.enum(EnumGender),
  actionArea: z.array(z.enum(BrazilianState)).min(1),
  services: z.array(z.string()).min(1),
  chargePrice: z.number().positive(),
  fullName: z.string().min(3),
  email: z.string().email(),
  birthDate: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.enum(BrazilianState),
    zipCode: z.string(),
  }),
  contacts: z
    .array(
      z.object({
        type: z.enum(ContactTypes),
        value: z.string(),
      })
    )
    .min(1),
  specialty: z.enum(HealthcareRole),
  profileType: z.enum(ProfileTypes),
  availability: z
    .array(
      z.object({
        dayOfWeek: z.enum(DaysOfWeek),
        startTime: z.string(),
        endTime: z.string(),
      })
    )
    .min(1),
  certification: z.array(
    z.object({
      name: z.string(),
      institution: z.string(),
      year: z.number().int().positive(),
    })
  ),
});
