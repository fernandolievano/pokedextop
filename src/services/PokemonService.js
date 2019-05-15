import axios from "axios";

const pokemonAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  timeout: 10000
});

export default {
  getAll() {
    return pokemonAPI.get();
  },
  getPokemon(url) {
    return pokemonAPI.get(url);
  },
  changePage(url) {
    return pokemonAPI.get(url);
  }
};
