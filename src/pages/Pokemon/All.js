import React, { Component } from "react";
import PokemonService from "../../services/PokemonService";
import PokemonCard from "./PokemonCard";

class All extends Component {
  constructor() {
    super();
    this.state = { list: [], error: null };
  }

  async componentDidMount() {
    try {
      const response = await PokemonService.getAll();
      const data = response.data.results;
      this.setState({ list: data });
    } catch (error) {
      this.setState({ error: error });
    }
  }

  _renderList() {
    const pokemon = this.state.list;
    const pokemonList = Object.keys(pokemon);

    return pokemonList.map(index => {
      const name = pokemon[index].name;
      const url = pokemon[index].url;

      return (
        <div key={index} className="column is-4-desktop is-6-tablet">
          <PokemonCard name={name} url={url} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="section">
        <div className="container">
        <div className="columns is-multiline is-centered is-vcentered is-6">
          {this._renderList()}
        </div>
      </div>
      </div>   
    );
  }
}

export default All;
