import { CaregiverType } from './caregiver';

export type UserType = Partial<CaregiverType> & {
  id: string;
  name: string;
  email: string;
  avatar: string;
};
