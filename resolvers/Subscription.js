const { withFilter } = require("apollo-server");
const { pubSub, EVENT_NAMES } = require("../pubsub");
const { }
const addComment = {
  subscribe: withFilter(
    () => pubSub.asyncIterator(EVENT_NAMES.ADD_COMMENT),
    (payload, variables) => {
      return payload.breed_id === variables.breed_id;
    }
  ),
  resolve: payload => {
    return payload;
  }
};

module.exports = {
  addComment
};
