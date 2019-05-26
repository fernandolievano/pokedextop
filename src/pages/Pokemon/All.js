import React, { Component } from "react";
import axios from 'axios';
import PokemonService from "../../services/PokemonService";
import PokemonList from "./PokemonList";
import PaginationButton from './PaginationButton';

class All extends Component {
  state = {
    list: [],
    error: "",
    next: "",
    prev: ""
  };

  axiosCancelSource = axios.CancelToken.source();

  _nextPage = async event => {
    event.preventDefault();
    try {
      const response = await PokemonService.changePage(this.state.next, { cancelToken: this.axiosCancelSource.token });
      const data = response.data.results;
      const prev = response.data.previous;
      const next = response.data.next;
      this.setState({ list: data, prev: prev, next: next });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  _prevPage = async event => {
    event.preventDefault();
    try {
      const response = await PokemonService.changePage(this.state.prev, { cancelToken: this.axiosCancelSource.token });
      const data = response.data.results;
      const prev = response.data.previous;
      const next = response.data.next;
      this.setState({ list: data, prev: prev, next: next });
      console.log('prev')
    } catch (err) {
      this.setState({ error: err });
    }
  };

  async componentDidMount() {
    try {
      const response = await PokemonService.getAll({ cancelToken: this.axiosCancelSource.token });
      const data = response.data.results;
      const prev = response.data.previous;
      const next = response.data.next;
      this.setState({ list: data, prev: prev, next: next });
    } catch (err) {
      throw new Error(err);
    }
  }

  componentWillUnmount() {
    console.log('unmount component')
    this.axiosCancelSource.cancel('Component unmounted.')
  }

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
