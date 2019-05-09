const CatAPI = require("../the_cat_api");

const catBreeds = () => CatAPI.getBreeds();

const catBreedDetail = (parent, args, context, info) =>
  CatAPI.getBreedDetail(args.breed_name);

module.exports = {
  catBreeds,
  catBreedDetail
};
