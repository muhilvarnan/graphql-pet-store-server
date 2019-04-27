const CatAPI = require("../the_cat_api");
const { pubSub, EVENT_NAMES } = require("../pubsub");

const newMakeFavouriteImage = {
  subscribe: () => pubSub.asyncIterator(EVENT_NAMES.MAKE_FAVOURITE_IMAGE),
  resolve: payload => {
    return CatAPI.getImageByID(payload.image_id);
  }
};

module.exports = {
  newMakeFavouriteImage
};
