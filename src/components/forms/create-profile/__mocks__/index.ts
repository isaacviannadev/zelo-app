export const EnumGender = ['MALE', 'FEMALE', 'OTHER', 'NOTINFORMED'] as const;

export const BrazilianState = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
] as const;

export const HealthcareRole = [
  'CAREGIVER',
  'NURSE',
  'TECHNICIAN',
  'PHYSIOTHERAPIST',
  'PSYCHOLOGIST',
  'DOCTOR',
] as const;

export const ProfileTypes = ['PROFESSIONAL', 'CUSTOMER', 'BACKOFFICE'] as const;

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

export const CertificationTypes = [
  'GRADUATION',
  'POSTGRADUATION',
  'COURSE',
] as const;

export const crossGenderName = {
  MALE: 'Masculino',
  FEMALE: 'Feminino',
  OTHER: 'Outro',
  NOTINFORMED: 'Não informar',
};

export const crossContactName = {
  PHONE: 'Telefone',
  EMAIL: 'E-mail',
  WHATSAPP: 'WhatsApp',
};

export const crossDaysOfWeek = {
  MONDAY: 'Segunda-feira',
  TUESDAY: 'Terça-feira',
  WEDNESDAY: 'Quarta-feira',
  THURSDAY: 'Quinta-feira',
  FRIDAY: 'Sexta-feira',
  SATURDAY: 'Sábado',
  SUNDAY: 'Domingo',
};

export const crossProfileTypes = {
  PROFESSIONAL: 'Profissional',
  CUSTOMER: 'Cliente',
  BACKOFFICE: 'Backoffice',
};

export const crossHealthcareRole = {
  CAREGIVER: 'Cuidador(a)',
  NURSE: 'Enfermeiro(a)',
  TECHNICIAN: 'Técnico(a) em Enfermagem',
  PHYSIOTHERAPIST: 'Fisioterapeuta',
  PSYCHOLOGIST: 'Psicólogo(a)',
  DOCTOR: 'Médico(a)',
};

export const crossCertificationTypes = {
  GRADUATION: 'Graduação',
  POSTGRADUATION: 'Pós-graduação',
  COURSE: 'Curso',
};

export default {
  EnumGender,
  BrazilianState,
  HealthcareRole,
  ProfileTypes,
  ContactTypes,
  DaysOfWeek,
} as const;
