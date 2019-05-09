const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com",
  headers: { "x-api-key": process.env.THE_CAT_API_TOKEN }
});

class CatAPI {
  getBreeds() {
    return axiosInstance
      .get("/v1/breeds", {
        params: {
          order: "id"
        }
      })
      .then(response => response.data);
  }
  getImagesByBreed(breed_id) {
    return axiosInstance
      .get("/v1/images/search", {
        params: {
          breed_id,
          limit: 10
        }
      })
      .then(response => response.data);
  }
  getBreedDetail(breed_name) {
    return axiosInstance
      .get("/v1/breeds/search", {
        params: {
          q: breed_name
        }
      })
      .then(response => response.data[0]);
  }
}

module.exports = new CatAPI();
