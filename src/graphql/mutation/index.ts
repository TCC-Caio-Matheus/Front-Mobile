import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation ($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user{
        username
      }
    }
  }
`;