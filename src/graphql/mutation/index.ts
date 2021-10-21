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

export const REGISTER = gql`
  mutation ($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
    }
  }
`;