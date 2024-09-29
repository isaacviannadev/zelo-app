import { gql } from '@apollo/client';

export const CREATE_PROFESSIONAL = gql`
  mutation CreateProfile($data: ICreateProfilePayload!) {
    CreateProfile(data: $data) {
      profileId
    }
  }
`;
