const {
  gql
} = require('apollo-server')

const typeDefs = gql `
  type Query {
    files: [File]
    fileById(fileId: String): [File]
  }

  type Mutation {
    addFile (fileId: String, fileName: String): File
  }

  type File {
    fileId: String
    fileName: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

module.exports = typeDefs