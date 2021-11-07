import { gql } from '@apollo/client';

export const QUIZZES = gql`
  query ($sort: String, $limit: Int, $start: Int, $where: JSON) {
    quizzes(where: $where, sort: $sort, limit: $limit, start: $start) {
      id
      name
      questions {
        id
        title
      }
    }
  }
`;

export const QUESTIONS = gql`
  query ($sort: String, $limit: Int, $start: Int, $where: JSON) {
    questions(where: $where, sort: $sort, limit: $limit, start: $start) {
      id
      title
      type
      quiz {
        name
      }
    }
  }
`;

export const ANSWERS = gql`
  query ($sort: String, $limit: Int, $start: Int, $where: JSON) {
    answers(where: $where, sort: $sort, limit: $limit, start: $start) {
      id
      question {
        id
      }
    }
  }
`;

export const QUESTION = gql`
  query ($id: ID!) {
    question(id: $id) {
      id
      title
      type
      quiz {
        id
        name
      }
      question_options {
        id
        description
      }
    }
  }
`;

export const STORES = gql`
  query ($where: JSON) {
    stores(where: $where) {
      id
      type
      name
    }
  }
`;

export const QUESTION_ANSWER = gql`
  query ($where: JSON, $whereStore: JSON) {
    questions(where: $where) {
      id
      title
      quiz {
        name
      }
      question_options {
        id
        description
      }
      answers(where: $whereStore) {
        id
        question_options {
          description
          score
        }
      }
      suggestions {
        description
        range_min
        range_max
        evaluations {
          id
          description
          user {
            username
            avatar {
              url
            }
          }
          evaluations {
            id
            description
            user {
              username
              avatar {
                url
              }
            }
          }
        }
      }
    }
  }
`;
