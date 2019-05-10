const { ApolloServer, gql } = require("apollo-server");
const knex = require("./knex");
const _ = require("lodash");

const CatBreed = require("./resolvers/CatBreed");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");

const resolvers = {
  Query,
  CatBreed,
  Mutation,
  Subscription
};

const typeDefs = gql`
  type Query {
    catBreeds: [CatBreed]
    catBreedDetail(breed_name: String!): CatBreed
    catBreedComments(breed_id: ID!): [Comment]
  }

  type Image {
    id: ID!
    url: String!
  }

  type Comment {
    id: ID!
    comment: String!
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

  type Mutation {
    addComment(breed_id: ID!, comment: String!): Comment!
  }

  type Subscription {
    addComment(breed_id: ID!): Comment!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

async function runDBMigration() {
  const [index, migratedFiles] = await knex.migrate.latest();

  if (_.isEmpty(migratedFiles)) {
    console.log("No New migrations");
  } else {
    console.log("migratedFiles", migratedFiles);
  }
}
const init = async () => {
  await runDBMigration();

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
