const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Teacher {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    teacher: Teacher
  }

  type Student {
    _id: ID!
    studentCode: String
    studentName: String
    studentClass: String
    email: String
  }

  type Reward {
    _id: ID!
    date: String
    student: Student
    teacher: Teacher
    prize: Prize
  }

  type Prize {
    _id: ID!
    category: String!
    description: String
    points: Int!
  }

  type Query {
    teachers: [Teacher]
    students: [Student]
    rewards: [Reward]
    prizes: [Prize]
    # Query to return a single teacher and student using ID parameter
    teacher(email: String!): Teacher
    profile(profileId: ID!): Teacher
    me: Teacher
    student(id: ID!): Student
    prize(category: String!): Prize
  }

  type Mutation {
    # Set the required fields for new Teacher
    addTeacher(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
    addStudent(studentCode: String!, studentName: String!, studentClass: String!, email: String!): Student
    removeStudent(studentCode: String!): Student
    addReward(student: ID!, prize: ID!): Reward
    updateStudent(studentCode: String!, studentClass: String!): Student

  }
`;

module.exports = typeDefs;
