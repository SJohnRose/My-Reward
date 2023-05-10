import { gql } from '@apollo/client';

export const QUERY_TEACHERS = gql`
  query GetTeachers {
    teachers {
      _id
      name
      email
      password
    }
  }
`;

export const QUERY_SINGLE_TEACHER = gql`
  query GetSingleTeacher($email: String!) {
    teacher(email: $email) {
      _id
      email
      name
      password
    }
  }`;


