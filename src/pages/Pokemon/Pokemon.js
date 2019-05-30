import React, { Component } from 'react';
import TypesBadges from '../../components/TypesBadges';
import Sprite from '../../components/Sprite';
import PokemonAbilities from '../../components/PokemonPage/PokemonAbilities';
import PokemonMainData from '../../components/PokemonPage/PokemonMainData';
import PokemonStats from '../../components/PokemonPage/PokemonStats';
import PokemonSprites from '../../components/PokemonPage/PokemonSprites';

class Pokemon extends Component {
  state = {
    pokemon: {}
  }

  render() {
    console.log(this.props.location.state.pokemon);
    const { name } = this.props.match.params;
    const { pokemon } = this.props.location.state;
    return (
      <div className="has-background-danger columns is-centered is-multiline">
        <header className="has-text-centered column is-full">
          <h3 className="title is-capitalized has-text-light">{name}</h3>
          <div className="card-image">
            <Sprite
              sprite={pokemon.sprites.front_default}
              name={name}
            />
            <Sprite
              sprite={pokemon.sprites.back_default}
              name={name}
            />
          </div>
          <TypesBadges types={pokemon.types} />
        </header>
        <div className="content column is-full">
          <div className="columns is-multiline is-centered">
            <div className="column is-full">
              <PokemonMainData 
                baseExperience={pokemon.base_experience} 
                height={pokemon.height}
                weight={pokemon.weight}
              >
                <PokemonAbilities abilities={pokemon.abilities} />
              </PokemonMainData>
            </div>
            <div className="column is-full">
              <PokemonStats stats={pokemon.stats} />
            </div>
            <div className="column is-full">
              <PokemonSprites 
                sprites={pokemon.sprites} 
                name={name} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;