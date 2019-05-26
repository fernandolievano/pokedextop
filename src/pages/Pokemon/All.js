import React, { Component } from "react";
import axios from 'axios';
import PokemonService from "../../services/PokemonService";
import PokemonList from "../../components/PokemonList";
import PaginationButton from '../../components/PaginationButton';

class All extends Component {
  state = {
    list: [],
    error: "",
    next: "",
    prev: ""
  };

  axiosCancelSource = axios.CancelToken.source();

  _handleFetch = async (functionToDo = PokemonService.getAll({cancelToken: this.axiosCancelSource.token})) => {
    const response = await functionToDo
    const data = response.data.results;
    const prev = response.data.previous;
    const next = response.data.next;
    await this.setState({ list: data, prev: prev, next: next });
    document.getElementById('point').focus();
  }

  _nextPage = async event => {
    event.preventDefault();
    try {
      this._handleFetch(PokemonService.changePage(this.state.next, { cancelToken: this.axiosCancelSource.token }));
    } catch (error) {
      this.setState({ error });
    }
  };

  _prevPage = async event => {
    event.preventDefault();
    try {
      this._handleFetch(PokemonService.changePage(this.state.prev, { cancelToken: this.axiosCancelSource.token }));
    } catch (error) {
      this.setState({ error });
    }
  };

  async componentDidMount() {
    try {
      this._handleFetch();
    } catch (err) {
      this.setState({ err })
    }
  }

  componentWillUnmount() {
    this.axiosCancelSource.cancel('Component unmounted.')
  }

  render() {
    const { prev, next, list, error } = this.state
    return (
      <PokemonList
        list={list}
        error={error}
      >
        <PaginationButton to={prev} onClick={this._prevPage}>
          <span className="icon"><i className="fas fa-arrow-left"></i></span>
          <span>
            Previous
          </span>
        </PaginationButton>
        <PaginationButton to={next} onClick={this._nextPage}>
          <span>Next</span>
          <span className="icon">
            <i className="fas fa-arrow-right"></i>
          </span>
        </PaginationButton>
      </PokemonList>
    );
  }
}

export default All;
