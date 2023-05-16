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

export const ADD_STUDENT = gql`
  mutation addStudent($studentCode: String!, $studentName: String!, $studentClass: String!, $email: String!) {
    addStudent(studentCode: $studentCode, studentName: $studentName, studentClass: $studentClass, email: $email) {
        _id
        studentCode
        studentName
        studentClass
        email
    }
  }
`;

export const REMOVE_STUDENT = gql`
  mutation removeStudent($studentCode: String!) {
    removeStudent(studentCode: $studentCode) {
        _id
        studentCode
        studentName
        studentClass
        email
    }
  }
`;

export const UPDATE_STUDENT = gql`
  mutation updateStudent($studentCode: String!, $studentClass: String!) {
    updateStudent(studentCode: $studentCode, studentClass: $studentClass) {
        _id
        studentCode
        studentName
        studentClass
        email
    }
  }
`;

export const ADD_REWARD = gql`
  mutation addReward($student: ID!, $prize: ID!) {
    addReward(student: $student, prize: $prize) {
        _id
        date
        
    }
  }
`;

