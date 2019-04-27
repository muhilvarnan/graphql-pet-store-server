const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com",
  headers: { "x-api-key": process.env.THE_CAT_API_TOKEN }
});

const sub_id = "test";

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
  getFavourites() {
    return axiosInstance
      .get("/v1/favourites", {
        params: {
          sub_id
        }
      })
      .then(response => response.data);
  }
  makeFavouriteImage(image_id) {
    return axiosInstance
      .post("/v1/favourites", {
        image_id,
        sub_id
      })
      .then(response => response.data);
  }
  getImageByID(image_id) {
    return axiosInstance
      .get(`/v1/images/${image_id}`)
      .then(response => response.data);
  }
}

module.exports = new CatAPI();
