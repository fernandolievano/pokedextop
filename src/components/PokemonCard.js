import React, { PureComponent as Component } from "react";
import axios from 'axios';
import PropTypes from "prop-types";
import PokemonService from "../services/PokemonService";
import TypesBadges from "./TypesBadges";

class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: {}, error: null };
  }

  axiosCancelSource = axios.CancelToken.source();

  getPokemon = async (url) => {
    try {
      const response = await PokemonService.getPokemon(url, { cancelToken: this.axiosCancelSource.token });
      const data = response.data;
      this.setState({ pokemon: data });
    } catch (err) {
      throw new Error(err)
    }
  };

  componentDidMount() {
    this.getPokemon(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
    this.getPokemon(nextProps.url);
  }

  componentWillUnmount() {
    this.axiosCancelSource.cancel('Component unmounted.')
  }

  render() {
    const { name } = this.props;
    const { id, types } = this.state.pokemon;

    return (
      <div className="card has-background-danger pokemon-card has-text-centered">
        {id ? (
          <div className="card-content">
            <h4 className="is-size-4">
              #{id} - <span className="is-capitalized">{name}</span>
            </h4>
            <div className="card-image">
              {this.state.pokemon.sprites.front_default ? (
                <img
                  src={this.state.pokemon.sprites.front_default}
                  alt="sprite"
                />
              ) : (
                  "Sprite no disponible"
                )}
            </div>
            <div className="content">
              <TypesBadges types={types} />
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
