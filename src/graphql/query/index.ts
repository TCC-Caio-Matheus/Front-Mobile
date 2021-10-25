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
      question_options {
        id
        description
      }
    }
  }
`;
