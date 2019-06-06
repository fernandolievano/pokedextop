import axios from "axios";

export default {
  getAll(cancelToken) {
    return axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151", cancelToken);
  },
  getPokemon(url, cancelToken) {
    return axios.get(url, cancelToken);
  },
  changePage(url, cancelToken) {
    return axios.get(url, cancelToken);
  }
};
