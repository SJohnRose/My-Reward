const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Teacher {
    _id: ID
    name: String
    password: String
    students: [Student]
  }

  type Student {
    _id: ID
    studentCode: String
    password: String
    rewards: [Reward]
  }

  type Reward {
    _id: ID
    category: String
    points: Int
  }


  type Query {
    teachers: [Teacher]
    students: [Student]
    # Query to return a single teacher and student using ID parameter
    teacher(id: ID!): Teacher
    student(id: ID!): Student
  }

  type Mutation {
    # Set the required fields for new Teacher
    addTeacher(name: String!, password: String!): Teacher
  }
`;

module.exports = typeDefs;
