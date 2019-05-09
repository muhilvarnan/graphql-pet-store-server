const knex = require("../knex");
const { pubSub, EVENT_NAMES } = require("../pubsub");

const addComment = async (parent, args, context, info) => {
  const data = await knex("comments")
    .insert({
      comment: args.comment,
      breed_id: args.breed_id
    })
    .returning(["id", "comment"]);
  pubSub.publish(EVENT_NAMES.ADD_COMMENT, {
    breed_id: args.breed_id,
    ...data[0]
  });
  return data[0];
};

module.exports = {
  addComment
};
