import axios from "axios";

export default {
  getAll(cancelToken) {
    return axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50");
  },
  getPokemon(url, cancelToken) {
    return axios.get(url);
  },
  changePage(url, cancelToken) {
    return axios.get(url);
  }
};
