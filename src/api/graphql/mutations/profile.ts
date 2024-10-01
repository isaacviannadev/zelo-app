import { gql } from '@apollo/client';

export const CREATE_PROFILE = gql`
  mutation CreateProfile($data: ICreateProfilePayload!) {
    CreateProfile(data: $data) {
      profileId
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation EditProfessionalProfile($data: IEditProfilePayload!) {
    EditProfessionalProfile(data: $data) {
      profile {
        profileType
        id
      }
    }
  }
`;

export const DELETE_PROFILE = gql`
  mutation DeleteProfessional($data: IDeleteProfessionalPayload!) {
    DeleteProfessional(data: $data) {
      status
      success
    }
  }
`;
