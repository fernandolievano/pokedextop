import React, { PureComponent as Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TypesBadges from './TypesBadges';
// import Sprite from './Sprite';
import ImageLoader from './ImageLoader';

const fetchPokemon = gql`
  query Pokemon($url: String!) {
    pokemon(url: $url) {
      id
      sprites {
        front_default
      }
      types {
        slot
        type {
          name
          url
        }
      }
    }
  }
`;

const Data = ({ url, name }) => (
  <Query query={fetchPokemon} variables={{ url }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading…</p>;
      if (error) return <p>Error!</p>;
      return (
        <div>
          <div className='card-image'>
            <LazyLoad>
              <ImageLoader src={data.pokemon.sprites.front_default} />
            </LazyLoad>
          </div>
          <div className='content'>
            <TypesBadges types={data.pokemon.types} />
          </div>
        </div>
      );
    }}
  </Query>
);

class PokemonCard extends Component {
  render() {
    const { name, url } = this.props;
    return (
      <Link
        to={{
          pathname: `/pokemon/${name}`,
          state: {
            url
          }
        }}
      >
        <div className='card has-background-danger pokemon-card has-text-centered'>
          <div className='card-content'>
            <h4 className='is-size-4'>
              <span className='is-capitalized'>{name}</span>
            </h4>
            <Data url={url} name={name} />
          </div>
        </div>
      </Link>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default PokemonCard;
