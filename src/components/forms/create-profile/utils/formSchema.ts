import { z } from 'zod';
import {
  BrazilianState,
  CertificationTypes,
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

const contactsSchema = z.array(
  z.discriminatedUnion('type', [
    z.object({
      type: z.literal('PHONE'),
      value: z.string().regex(/^\d{10,}$/, 'Número de telefone inválido'),
    }),
    z.object({
      type: z.literal('EMAIL'),
      value: z.string().email('Endereço de email inválido'),
    }),
    z.object({
      type: z.literal('WHATSAPP'),
      value: z.string().regex(/^\d{10,}$/, 'Número do WhatsApp inválido'),
    }),
  ])
);

const baseSchema = z.object({
  profileType: z.enum(ProfileTypes),
  gender: z.enum(EnumGender),
  fullName: z.string().min(3, 'Nome completo é obrigatório'),
  email: z.string().email('Endereço de email inválido'),
  birthDate: z.string().date('Data de nascimento inválida'),
  contacts: contactsSchema.min(1, 'Pelo menos um contato é obrigatório'),
});

const professionalSchema = baseSchema.extend({
  profileType: z.literal('PROFESSIONAL'),
  workingArea: z
    .array(z.enum(BrazilianState))
    .min(1, 'Pelo menos um estado é obrigatório'),
  services: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .nonempty('Pelo menos um serviço é obrigatório'),
  shiftValue: z.number().positive(),
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
    .min(1, 'Pelo menos um horário é obrigatório'),
  certification: z
    .array(
      z.object({
        name: z.string(),
        type: z.enum(CertificationTypes),
        institution: z.string(),
        completionDate: z.string().date(),
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
