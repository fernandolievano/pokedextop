import React, { Component } from 'react';
import PokemonList from '../../components/PokemonList';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const getList = gql`
  {
    pokemonList {
      name
      url
    }
  }
`;

let pokemonList = [];

const Data = () => (
  <Query query={getList}>
    {({ loading, error, data }) => {
      if (loading) return <p className="has-text-centered is-size-4">Loading...</p>;
      if (error) return <p className="has-text-centered is-size-4">Error!</p>;

      if (pokemonList.length > 0) {
        return <PokemonList list={pokemonList} />;
      } else {
        pokemonList = data.pokemonList;
        return <PokemonList list={pokemonList} />;
      }
    }}
  </Query>
);

class All extends Component {
  render() {
    return <Data />;
  }
}

export default All;
