import { z } from 'zod';
import {
  BrazilianState,
  ContactTypes,
  DaysOfWeek,
  EnumGender,
  HealthcareRole,
  ProfileTypes,
} from '../__mocks__';

const addressSchema = z.object({
  street: z.string().min(1, 'Rua não pode ser vazia'),
  number: z.string().min(1, 'Número é obrigatório'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  state: z.enum(BrazilianState),
  country: z.string().min(1, 'País é obrigatório'),
  neighborhood: z.string().min(1, 'Bairro é obrigatório'),
  complement: z.string().optional(),
  zipCode: z.string().min(1, 'CEP inválido'),
});

const baseSchema = z.object({
  profileType: z.enum(ProfileTypes),
  gender: z.enum(EnumGender),
  fullName: z.string().min(3),
  email: z.string().email(),
  birthDate: z.string().date(),
  contacts: z
    .array(
      z.object({
        type: z.enum(ContactTypes),
        value: z.string().min(8, 'Contato inválido'),
      })
    )
    .min(1),
});

const professionalSchema = baseSchema.extend({
  profileType: z.literal('PROFESSIONAL'),
  actionArea: z.array(z.enum(BrazilianState)).min(1),
  services: z.array(z.string()).min(1),
  chargePrice: z.number().positive(),
  address: addressSchema,
  specialty: z.enum(HealthcareRole),
  availability: z
    .array(
      z.object({
        dayOfWeek: z.enum(DaysOfWeek),
        startTime: z.string(),
        endTime: z.string(),
      })
    )
    .min(1),
  certification: z
    .array(
      z.object({
        name: z.string(),
        institution: z.string(),
        year: z.number().int().positive(),
      })
    )
    .optional(),
});

const customerSchema = baseSchema.extend({
  profileType: z.literal('CUSTOMER'),
  address: addressSchema,
});

const backofficeSchema = baseSchema.extend({
  profileType: z.literal('BACKOFFICE'),
});

export const formSchema = z.discriminatedUnion('profileType', [
  professionalSchema,
  customerSchema,
  backofficeSchema,
]);
