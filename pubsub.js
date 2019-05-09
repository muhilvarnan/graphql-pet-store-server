const { PubSub } = require("apollo-server");

const EVENT_NAMES = {
  ADD_COMMENT: "ADD_COMMENT"
};

module.exports = {
  pubSub: new PubSub(),
  EVENT_NAMES
};
