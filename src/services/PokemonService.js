import axios from "axios";

const pokemonAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  timeout: 10000
})

export default {
  getAll() {
    return pokemonAPI.get('?limit=807')
  },
  getPokemon(url) {
    return pokemonAPI.get(url)
  }
}