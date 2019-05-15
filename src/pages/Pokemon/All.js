import React, { Component } from "react";
import PokemonService from "../../services/PokemonService";
import PokemonCard from "./PokemonCard";

class All extends Component {
  constructor() {
    super();
    this.state = { list: [], error: "", next: "", prev: "" };
  }

  async componentDidMount() {
    try {
      const response = await PokemonService.getAll();
      const data = response.data.results;
      const prev = response.data.previous;
      const next = response.data.next;
      this.setState({ list: data, prev: prev, next: next });
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

  _nextPage = async event => {
    event.preventDefault();
    try {
      const response = await PokemonService.changePage(this.state.next);
      const data = response.data.results;
      const prevURL = response.data.previous;
      const nextURL = response.data.next;
      this.setState({ list: data, prev: prevURL, next: nextURL });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  _prevPage = async event => {
    event.preventDefault();
    try {
      const response = await PokemonService.changePage(this.state.prev);
      const data = response.data.results;
      const prevURL = response.data.previous;
      const nextURL = response.data.next;
      this.setState({ list: data, prev: prevURL, next: nextURL });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div className="columns is-multiline is-centered is-vcentered is-6">
        <div className="column is-full has-text-centered">
          {this.state.error ? (
            <h3 className="title">{this.state.error}</h3>
          ) : (
            ""
          )}
        </div>
        {this._renderList()}
        <div className="column is-full">
          {this.state.prev ? (
            <a className="button" href="#point" onClick={this._prevPage}>
              Prev
            </a>
          ) : (
            ""
          )}
          {this.state.next ? (
            <a className="button" href="#point" onClick={this._nextPage}>
              Next
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default All;
