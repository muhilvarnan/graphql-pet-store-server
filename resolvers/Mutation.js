const CatAPI = require("../the_cat_api");
const { pubSub, EVENT_NAMES } = require("../pubsub");

function makeFavouriteImage(parent, args, context, info) {
  return CatAPI.makeFavouriteImage(args.image_id).then(result => {
    pubSub.publish(EVENT_NAMES.MAKE_FAVOURITE_IMAGE, args);
    return result;
  });
}

module.exports = { makeFavouriteImage };
