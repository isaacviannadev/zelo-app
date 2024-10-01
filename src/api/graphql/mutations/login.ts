import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($data: ILoginPayload!) {
    Login(data: $data) {
      expiresIn
      token
    }
  }
`;
