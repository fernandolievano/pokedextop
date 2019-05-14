import React, { Component } from "react";
import PropTypes from "prop-types";
import PokemonService from "../../services/PokemonService";

class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: {}, error: null };
  }

  async componentDidMount() {
    try {
      const response = await PokemonService.getPokemon(this.props.url);
      const data = response.data;
      this.setState({ pokemon: data });
    } catch (error) {
      this.setState({ error: error });
    }
  }

  render() {
    const { name } = this.props;
    const { id } = this.state.pokemon;

    return (
      <div className="card has-background-danger pokemon-card has-text-centered">
        {id ? (
          <div className="card-body">
            <h4 className="is-size-4">#{id}</h4>
            <div className="content">
              <img src={this.state.pokemon.sprites.front_default} alt="sprite" />
              <p><span className="is-capitalized">{name}</span></p>
            </div>
          </div>
        ) : (
          "Consultando pokédex..."
        )}
      </div>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default PokemonCard;
