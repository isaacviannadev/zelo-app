import { gql } from '@apollo/client';

export const GET_PROFESSIONALS = gql`
  query Professionals() {
    Professionals() {
      profileId
      status
      fullName
    }
  }
`;
