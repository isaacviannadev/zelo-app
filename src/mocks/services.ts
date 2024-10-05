import { Option } from '@/types';

const services = [
  { id: 's-1', title: 'Cuidador de Idosos' },
  { id: 's-2', title: 'Acompanhante de Idosos' },
  { id: 's-3', title: 'Cuidador Noturno de Idosos' },
  { id: 's-4', title: 'Cuidador de Idosos em Clínica' },
  { id: 's-5', title: 'Cuidador de Idosos com Alzheimer' },
  { id: 's-6', title: 'Cuidador de Idosos em Residência' },
  { id: 's-7', title: 'Cuidador de Idosos em Asilo' },
  { id: 's-8', title: 'Cuidador de Idosos com Mobilidade Reduzida' },
  { id: 's-9', title: 'Cuidador de Idosos em Instituição' },
  { id: 's-10', title: 'Cuidador de Idosos em Domicílio' },
  { id: 's-11', title: 'Fisioterapeuta para Idosos' },
  { id: 's-12', title: 'Home Care para Idosos' },
  { id: 's-13', title: 'Enfermeiro para Idosos' },
  { id: 's-14', title: 'Psicólogo para Idosos' },
  { id: 's-15', title: 'Nutricionista para Idosos' },
  { id: 's-16', title: 'Fonoaudiólogo para Idosos' },
];

export const servicesOptions: Option[] = services.map((service) => ({
  value: service.id,
  label: service.title,
}));
