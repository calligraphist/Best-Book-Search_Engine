const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks:[Book]
    bookCount:Int
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    title: String!
    link: String
  }
  input BookInput{
    bookId: String!
    authors: [String]
    title: String!
    description: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  // # declaring Save book input with it values
  // input SavedBookInput {
  //   authors: [String]
  //   title: String
  //   description: String
  //   bookId: String
  //   image: String
  //   link: String
  // }

  type Query {
    me: User
  }

  type Mutation {
    login(email:String!, password:String!):Auth
    signup(username:String!, email:String!, password:String!): Auth
    saveBook(BookData: BookInput!): User
    removeBook(bookId:ID!): User
  }
`;

module.exports = typeDefs;
