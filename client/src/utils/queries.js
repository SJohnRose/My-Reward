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

export const QUERY_STUDENTS = gql`
  query GetStudents {
    students {
      _id
      studentCode
      studentClass
      studentName
      email
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

export const QUERY_SINGLE_PROFILE = gql`
  query GetSingleProfile($profileId: ID!) {
    teacher(profileId: $profileId) {
      _id
      email
      name
      password
    }
  }`;
 
export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      
    }
  }
`;

export const QUERY_REWARDS = gql`
  query GetRewards {
    reward {
      _id
      date
      student {
        _id
        studentCode
        studentName
        studentClass
        email
      }
      teacher {
        _id
        name
        email
      }
      prize {
        _id
        category
        description
        points
      }
    }
  }
`;



