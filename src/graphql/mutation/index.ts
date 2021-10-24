import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation ($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
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

export const CREATE_STORE = gql`
  mutation ($input: createStoreInput) {
    createStore(input: $input) {
      store {
        id
      }
    }
  }
`;
