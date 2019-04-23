const { ApolloServer, gql } = require("apollo-server");
const CatAPI = require("./the_cat_api");
const CatBreed = require("./resolvers/CatBreed");

const resolvers = {
  Query: {
    catBreeds: () => CatAPI.getBreeds()
  },
  CatBreed
};

const typeDefs = gql`
  type Query {
    catBreeds: [CatBreed]
  }

  type Image {
    id: ID!
    url: String!
  }

  type CatBreed {
    id: ID!
    name: String!
    description: String!
    origin: String!
    dog_friendly: Boolean!
    energy_level: Boolean!
    experimental: Boolean!
    grooming: Boolean!
    hairless: Boolean!
    health_issues: Boolean!
    hypoallergenic: Boolean!
    images: [Image]
  }
`;

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
