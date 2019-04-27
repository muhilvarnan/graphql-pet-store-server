const { PubSub } = require("apollo-server");

const EVENT_NAMES = {
  MAKE_FAVOURITE_IMAGE: "MAKE_FAVOURITE_IMAGE"
};

module.exports = {
  pubSub: new PubSub(),
  EVENT_NAMES
};
