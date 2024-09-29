import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

/** All the states and federal districts of Brazil, each identified by its two-letter abbreviation */
export enum BrazilianState {
  Ac = 'AC',
  Al = 'AL',
  Am = 'AM',
  Ap = 'AP',
  Ba = 'BA',
  Ce = 'CE',
  Df = 'DF',
  Es = 'ES',
  Go = 'GO',
  Ma = 'MA',
  Mg = 'MG',
  Ms = 'MS',
  Mt = 'MT',
  Pa = 'PA',
  Pb = 'PB',
  Pe = 'PE',
  Pi = 'PI',
  Pr = 'PR',
  Rj = 'RJ',
  Rn = 'RN',
  Ro = 'RO',
  Rr = 'RR',
  Rs = 'RS',
  Sc = 'SC',
  Se = 'SE',
  Sp = 'SP',
  To = 'TO'
}

/** Different categories of gender identity, including Male, Female, Non-Binary, and Prefer Not to Say */
export enum EnumGender {
  Female = 'Female',
  Male = 'Male',
  NonBinary = 'NonBinary',
  PreferNotToSay = 'PreferNotToSay'
}

/** Various roles within the healthcare sector, such as Nursing Technician, Nurse, and Caregiver */
export enum HealthcareRole {
  Caregiver = 'Caregiver',
  Nurse = 'Nurse',
  NursingTechnician = 'NursingTechnician'
}

export type ICreateProfilePayload = {
  address: InputTypeAddress;
  availability: Array<InputTypeAvailability>;
  birthDate: Scalars['DateTimeISO']['input'];
  certification: Array<InputTypeCertification>;
  contacts: InputTypeContact;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  gender: EnumGender;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profileType: ProfileTypes;
  services: Array<InputTypeProfessionalService>;
  shiftValue: Scalars['Float']['input'];
  specialty: HealthcareRole;
  userId: Scalars['String']['input'];
  workingArea: Array<BrazilianState>;
};

export type ICreateProfileResponse = {
  __typename?: 'ICreateProfileResponse';
  profileId: Scalars['String']['output'];
};

export type IDeleteProfessionalPayload = {
  profileId: Scalars['String']['input'];
};

export type IDeleteProfessionalResponse = {
  __typename?: 'IDeleteProfessionalResponse';
  status: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type IEditProfilePayload = {
  professionalData: ProfessionalData;
  profileId: Scalars['String']['input'];
};

export type IEditProfileResponse = {
  __typename?: 'IEditProfileResponse';
  profile: Profile;
};

export type IGetProfessionalPayload = {
  id: Scalars['String']['input'];
};

export type IGetProfessionalResponse = {
  __typename?: 'IGetProfessionalResponse';
  professional: InputTypeProfessional;
};

export type IGetProfessionalsResponse = {
  __typename?: 'IGetProfessionalsResponse';
  professionals: Array<InputTypeProfessional>;
};

export type IGetServicesResponse = {
  __typename?: 'IGetServicesResponse';
  services: Array<Service>;
};

export type ILoginPayload = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ILoginResponse = {
  __typename?: 'ILoginResponse';
  expiresIn: Scalars['Float']['output'];
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type IRefreshTokenPayload = {
  refreshToken: Scalars['String']['input'];
};

export type IRefreshTokenResponse = {
  __typename?: 'IRefreshTokenResponse';
  expiresIn: Scalars['Float']['output'];
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type InputTypeAddress = {
  city: Scalars['String']['input'];
  complement: Scalars['String']['input'];
  country: Scalars['String']['input'];
  neighborhood: Scalars['String']['input'];
  number: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type InputTypeAvailability = {
  createdAt: Scalars['DateTimeISO']['input'];
  dayOfWeek: Scalars['String']['input'];
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  endTime: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
  updatedAt: Scalars['DateTimeISO']['input'];
};

export type InputTypeCertification = {
  completionDate: Scalars['DateTimeISO']['input'];
  createdAt: Scalars['DateTimeISO']['input'];
  deletedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  institution: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  updatedAt: Scalars['DateTimeISO']['input'];
};

export type InputTypeContact = {
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type InputTypeProfessional = {
  __typename?: 'InputTypeProfessional';
  address: ObjectTypeAddress;
  availability: Array<ObjectTypeAvailability>;
  birthDate: Scalars['DateTimeISO']['output'];
  certification: Array<ObjectTypeCertification>;
  contacts: ObjectTypeContact;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  gender: EnumGender;
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  photoUrl: Scalars['String']['output'];
  profileCompleted: Scalars['Boolean']['output'];
  reviews: Array<ObjectTypeReviews>;
  services: Array<ObjectTypeProfessionalService>;
  shiftValue: Scalars['Float']['output'];
  specialty: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  workingArea: Array<BrazilianState>;
};

export type InputTypeProfessionalService = {
  name: Scalars['String']['input'];
  value: Scalars['Boolean']['input'];
};

export type InputTypeReviews = {
  customerId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  professionalId: Scalars['String']['input'];
  rate: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new user with a profile, defining the type (customer, backoffice, or professional) and their respective information */
  CreateProfile: ICreateProfileResponse;
  /** Remove a professional user profile from the system based on its Id */
  DeleteProfessional: IDeleteProfessionalResponse;
  /** Updates the specific profile data of a user type == professional */
  EditProfessionalProfile: IEditProfileResponse;
  /** Authenticates the user, generating an access token and a refresh token after the credentials have been validated. */
  Login: ILoginResponse;
  /** Uses a valid refresh token to generate a new access token and, optionally, a new refresh token */
  RefreshLogin: IRefreshTokenResponse;
};


export type MutationCreateProfileArgs = {
  data: ICreateProfilePayload;
};


export type MutationDeleteProfessionalArgs = {
  data: IDeleteProfessionalPayload;
};


export type MutationEditProfessionalProfileArgs = {
  data: IEditProfilePayload;
};


export type MutationLoginArgs = {
  data: ILoginPayload;
};


export type MutationRefreshLoginArgs = {
  data: IRefreshTokenPayload;
};

export type ObjectTypeAddress = {
  __typename?: 'ObjectTypeAddress';
  city: Scalars['String']['output'];
  complement: Scalars['String']['output'];
  country: Scalars['String']['output'];
  neighborhood: Scalars['String']['output'];
  number: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type ObjectTypeAvailability = {
  __typename?: 'ObjectTypeAvailability';
  createdAt: Scalars['DateTimeISO']['output'];
  dayOfWeek: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  endTime: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ObjectTypeCertification = {
  __typename?: 'ObjectTypeCertification';
  completionDate: Scalars['DateTimeISO']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  institution: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ObjectTypeContact = {
  __typename?: 'ObjectTypeContact';
  email?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  whatsapp?: Maybe<Scalars['String']['output']>;
};

export type ObjectTypeProfessionalService = {
  __typename?: 'ObjectTypeProfessionalService';
  name: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type ObjectTypeReviews = {
  __typename?: 'ObjectTypeReviews';
  customerId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  professionalId: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type ProfessionalData = {
  address: InputTypeAddress;
  availability: Array<InputTypeAvailability>;
  birthDate: Scalars['DateTimeISO']['input'];
  certification: Array<InputTypeCertification>;
  contacts: InputTypeContact;
  createdAt: Scalars['DateTimeISO']['input'];
  deletedAt: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  gender: EnumGender;
  id: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  photoUrl: Scalars['String']['input'];
  profileCompleted: Scalars['Boolean']['input'];
  reviews: Array<InputTypeReviews>;
  services: Array<InputTypeProfessionalService>;
  shiftValue: Scalars['Float']['input'];
  specialty: Scalars['String']['input'];
  status: Scalars['String']['input'];
  updatedAt: Scalars['DateTimeISO']['input'];
  workingArea: Array<BrazilianState>;
};

export type Profile = {
  __typename?: 'Profile';
  address?: Maybe<ObjectTypeAddress>;
  availability: Array<ObjectTypeAvailability>;
  birthDate: Scalars['DateTimeISO']['output'];
  certification: Array<ObjectTypeCertification>;
  contacts?: Maybe<ObjectTypeContact>;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  photoUrl: Scalars['String']['output'];
  profileCompleted: Scalars['Boolean']['output'];
  profileType: Scalars['String']['output'];
  reviews: Array<ObjectTypeReviews>;
  services: Array<ObjectTypeProfessionalService>;
  shiftValue: Scalars['Float']['output'];
  specialty: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
  workingArea: Array<BrazilianState>;
};

/** Different types of user profiles, including Customer, Professional, and Backoffice. */
export enum ProfileTypes {
  Backoffice = 'BACKOFFICE',
  Customer = 'CUSTOMER',
  Professional = 'PROFESSIONAL'
}

export type Query = {
  __typename?: 'Query';
  /** Returns the specific details of a professional user profile based on their Id */
  GetOneProfessional: IGetProfessionalResponse;
  /** Returns a list of user profiles of the professional type, with their respective details */
  Professionals: IGetProfessionalsResponse;
  /** Query returns a list of Services of type professional, with their respective details */
  Services: IGetServicesResponse;
};


export type QueryGetOneProfessionalArgs = {
  data: IGetProfessionalPayload;
};

export type Service = {
  __typename?: 'Service';
  category: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CreateProfileMutationVariables = Exact<{
  data: ICreateProfilePayload;
}>;


export type CreateProfileMutation = { __typename?: 'Mutation', CreateProfile: { __typename?: 'ICreateProfileResponse', profileId: string } };


export const CreateProfileDocument = gql`
    mutation CreateProfile($data: ICreateProfilePayload!) {
  CreateProfile(data: $data) {
    profileId
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;