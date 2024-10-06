import { CaregiverType } from './caregiver';

export type UserType = Partial<CaregiverType> & {
  id: string;
  email: string;
  role: string;
  status: string;
  username: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  password?: string;
  avatar?: string;
  name?: string;
};
