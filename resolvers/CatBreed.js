const CatAPI = require("../the_cat_api");
const knex = require("../knex");

function images(parent, args, context) {
  return CatAPI.getImagesByBreed(parent.id);
}
function comments(parent, args, context) {
  return knex("comments")
    .select("id", "comment")
    .where("breed_id", parent.id);
}

module.exports = {
  images,
  comments
};
