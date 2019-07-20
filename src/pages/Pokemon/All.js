import React, { Component } from 'react';
import PokemonList from '../../components/PokemonList';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const getList = gql`
  {
    pokemonList {
      name
      url
    }
  }
`;

const Data = () => (
  <Query query={getList}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error!</p>;
      return <PokemonList list={data.pokemonList} />;
    }}
  </Query>
);

class All extends Component {
  // state = {
  //   list: [],
  //   error: '',
  //   next: '',
  //   prev: ''
  // };

  // axiosCancelSource = axios.CancelToken.source();

  // _handleFetch = async (
  //   functionToDo = PokemonService.getAll({
  //     cancelToken: this.axiosCancelSource.token
  //   })
  // ) => {
  //   const loadingModal = document.getElementById('loading');
  //   loadingModal.classList.add('is-active');
  //   const response = await functionToDo;
  //   const data = await response.data.results;
  //   const prev = await response.data.previous;
  //   const next = await response.data.next;
  //   await this.setState({ list: data, prev: prev, next: next });
  //   await document.getElementById('point').focus();
  //   loadingModal.classList.remove('is-active');
  // };

  // _nextPage = async event => {
  //   event.preventDefault();
  //   try {
  //     this._handleFetch(
  //       PokemonService.changePage(this.state.next, {
  //         cancelToken: this.axiosCancelSource.token
  //       })
  //     );
  //   } catch (error) {
  //     this.setState({ error });
  //   }
  // };

  // _prevPage = async event => {
  //   event.preventDefault();
  //   try {
  //     this._handleFetch(
  //       PokemonService.changePage(this.state.prev, {
  //         cancelToken: this.axiosCancelSource.token
  //       })
  //     );
  //   } catch (error) {
  //     this.setState({ error });
  //   }
  // };

  // async componentDidMount() {
  //   try {
  //     this._handleFetch();
  //   } catch (err) {
  //     this.setState({ err });
  //   }
  // }

  // componentWillUnmount() {
  //   this.axiosCancelSource.cancel('Componente desmontado');
  // }

  render() {
    return <Data />;
  }
}

export default All;
