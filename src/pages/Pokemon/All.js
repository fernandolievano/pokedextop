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

const Data = () => (
  <Query query={getList}>
    {({ loading, error, data }) => {
      if (loading) return <p className="has-text-centered is-size-4">Loading...</p>;
      if (error) return <p className="has-text-centered is-size-4">Error!</p>;
      return <PokemonList list={data.pokemonList} />;
    }}
  </Query>
);

class All extends Component {
  render() {
    return <Data />;
  }
}

export default All;
