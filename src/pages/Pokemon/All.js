import React, { Component } from "react";
import PokemonService from "../../services/PokemonService";
import PokemonList from "./PokemonList";
import PaginationButton from './PaginationButton';

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

  _nextPage = async event => {    
      event.preventDefault();
      try {
      alert('next')
    } catch (error) {
      this.setState({ error: error });
    }
  };

  _prevPage = async event => {
      event.preventDefault();
      try {
      alert('prev')
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    const { prev, next, list, error } = this.state
    return (
      <PokemonList 
        list={list}
        error={error}
      >
        <PaginationButton to={prev} onClick={this._prevPage}>Anterior</PaginationButton>
        <PaginationButton to={next} onClick={this._nextPage}>Siguiente</PaginationButton>
      </PokemonList>
    );
  }
}

export default All;
