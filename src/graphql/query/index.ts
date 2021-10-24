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
