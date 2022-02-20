const {
  ApolloServer
} = require("apollo-server");
const typeDefs = require('./graphql/shema/index.js')
const resolvers = require('./graphql/resolvers/index.js')

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
})

server.listen({
  port: process.env.PORT || 4000
}).then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`);
});