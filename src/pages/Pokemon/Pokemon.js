import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import TypesBadges from "../../components/TypesBadges";
import Sprite from "../../components/Sprite";
import PokemonAbilities from "../../components/PokemonPage/PokemonAbilities";
import PokemonMainData from "../../components/PokemonPage/PokemonMainData";
import PokemonStats from "../../components/PokemonPage/PokemonStats";
import PokemonSprites from "../../components/PokemonPage/PokemonSprites";

const fetchPokemon = gql`
  query Pokemon($url: String!) {
    pokemon(url: $url) {
      id
      sprites {
        back_default
        back_female
        back_shiny
        back_shiny_female
        front_default
        front_female
        front_shiny
        front_shiny_female
      }
      types {
        slot
        type {
          name
          url
        }
      }
      height
      weight
      base_experience
      abilities {
        slot
        is_hidden
        ability {
          name
          url
        }
      }
      stats {
        base_stat
        effort
        stat {
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
      if (loading) {
        return (
          <p className="has-text-centered is-size-4">
            Waiting for Pokédex data...
          </p>
        );
      }
      if (error) {
        return (
          <div className="has-text-centered is-size-4">
            <p>Oops!, the Pokédex it's not working now.</p>
            <br/>
            <Link to={{
              pathname: '/pokemon/all'
            }}>Go back and try again</Link>
          </div>
        );
      }
      console.log(data);
      return <PokemonData name={name} pokemon={data.pokemon} />;
    }}
  </Query>
);

const PokemonData = ({ name, pokemon }) => {
  return (
    <div className="has-background-danger columns is-centered is-multiline">
      <header className="has-text-centered column is-full">
        <h3 className="title is-capitalized has-text-light">{name}</h3>
        <div className="card-image">
          <Sprite sprite={pokemon.sprites.front_default} name={name} />
          <Sprite sprite={pokemon.sprites.back_default} name={name} />
        </div>
        <TypesBadges types={pokemon.types} />
      </header>
      <div className="content column is-full">
        <div className="columns is-multiline is-centered">
          <div className="column is-full has-background-dark">
            <PokemonMainData
              baseExperience={pokemon.base_experience}
              height={pokemon.height}
              weight={pokemon.weight}
            >
              <PokemonAbilities abilities={pokemon.abilities} />
            </PokemonMainData>
          </div>
          <div className="column has-background-light is-full">
            <PokemonStats stats={pokemon.stats} />
          </div>
          <div className="column has-background-light is-full">
            <PokemonSprites sprites={pokemon.sprites} name={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { url: null };
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      this.setState({
        url: this.props.location.state.url
      });
    }
  }

  render() {
    const { name } = this.props.match.params;
    const { url } = this.state;

    return <Data name={name} url={url} />;
  }
}

export default Pokemon;
