import { gql } from '@apollo/client';

export const QUERY_TEACHERS = gql`
  query allTeachers {
    teachers {
      _id
      name
      password
    }
  }
`;
