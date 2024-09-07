// Simulando tipos enumerados
export const EnumGender = ['MALE', 'FEMALE', 'OTHER'] as const;

export const BrazilianState = [
  'SP',
  'RJ',
  'MG',
  'ES',
  'RS',
  'PR',
  'SC',
  'BA',
  'CE',
  'PE',
  'PA',
  'AM',
  'GO',
  'DF',
] as const;

export const HealthcareRole = [
  'NURSE',
  'CAREGIVER',
  'PHYSIOTHERAPIST',
  'DOCTOR',
  'PSYCHOLOGIST',
] as const;

export const ProfileTypes = ['PROFESSIONAL', 'INSTITUTION'] as const;

export const ContactTypes = ['PHONE', 'EMAIL', 'WHATSAPP'] as const;

export const DaysOfWeek = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
] as const;

export default {
  EnumGender,
  BrazilianState,
  HealthcareRole,
  ProfileTypes,
  ContactTypes,
  DaysOfWeek,
} as const;
