const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');

// The GraphQL schema
const typeDefs = gql`
  type PokemonFromList {
    name: String
    url: String
  }

  type PokemonTypeFromList {
    name: String
    url: String
  }

  type PokemonTypeList {
    slot: String
    type: PokemonTypeFromList
  }

  type Sprites {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }

  type Pokemon {
    id: ID
    types: [PokemonTypeList]
    sprites: Sprites
  }

  type Query {
    pokemonList: [PokemonFromList]
    pokemon(url: String!): Pokemon
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    pokemonList: () => fetchPokemonList(),
    pokemon: function(parent, args) {
      const { url } = args;
      return fetchPokemon(url);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

function fetchPokemonList() {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon/?limit=9')
    // .get('https://pokeapi.co/api/v2/pokemon/?limit=964')-
    .then(response => response.data.results);
}

function fetchPokemon(url) {
  return axios.get(url).then(response => response.data);
}

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
