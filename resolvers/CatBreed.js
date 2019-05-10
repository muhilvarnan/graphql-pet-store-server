const CatAPI = require("../the_cat_api");

function images(parent, args, context) {
  return CatAPI.getImagesByBreed(parent.id);
}

module.exports = {
  images
};
