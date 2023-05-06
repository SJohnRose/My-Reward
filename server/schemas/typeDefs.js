const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Teacher {
    _id: ID
    name: String
    password: String
    
  }

  type Query {
    teachers: [Teacher]
    # Query to return a sinle teacher using ID parameter
    teacher(id: ID!): Teacher
  }
`;

module.exports = typeDefs;
