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
  birthDate: z.string().date(),
  address: z.object({
    street: z
      .string({
        required_error: 'Rua é obrigatória',
      })
      .min(1, 'Rua não pode ser vazia'),
    number: z.string().min(1, 'Número é obrigatório'),
    city: z.string().min(1, 'Cidade é obrigatória'),
    state: z.enum(BrazilianState),
    country: z.string().min(1, 'País é obrigatório'),
    neighborhood: z.string().min(1, 'Bairro é obrigatório'),
    complement: z.string().optional(),
    zipCode: z.string().min(1, 'CEP inválido'),
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
