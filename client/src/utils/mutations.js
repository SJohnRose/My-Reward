import { gql } from '@apollo/client';

export const LOGIN_TEACHER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      teacher {
        _id
        name
      }
    }
  }
`;

export const ADD_TEACHER = gql`
  mutation addTeacher($name: String!, $email: String!, $password: String!) {
    addTeacher(name: $name, email: $email, password: $password) {
      token
      teacher {
        _id
        name
      }
    }
  }
`;