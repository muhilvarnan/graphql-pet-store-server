const CatAPI = require("../the_cat_api");
const knex = require("../knex");

const catBreeds = () => CatAPI.getBreeds();

const catBreedDetail = (parent, args, context, info) =>
  CatAPI.getBreedDetail(args.breed_name);

const catBreedComments = (parent, args, context, info) =>
  knex("comments")
    .select("id", "comment")
    .where("breed_id", args.breed_id);

module.exports = {
  catBreeds,
  catBreedDetail,
  catBreedComments
};
