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

export const CREATE_ANSWER = gql`
  mutation ($input: createAnswerInput) {
    createAnswer(input: $input) {
      answer {
        id
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation ($input: createEvaluationInput) {
    createEvaluation(input: $input) {
      evaluation {
        description
      }
    }
  }
`;
