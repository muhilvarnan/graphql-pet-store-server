const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com",
  headers: { "x-api-key": process.env.THE_CAT_API_TOKEN }
});

class CatAPI {
  getBreeds() {
    return axiosInstance.get("/v1/breeds").then(response => response.data);
  }
  getImagesByBreed(breed_id) {
    return axiosInstance
      .get("/v1/images/search", {
        params: {
          breed_id
        }
      })
      .then(response => response.data);
  }
}

module.exports = new CatAPI();
