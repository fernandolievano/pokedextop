import React from 'react';
import Logo from '../../pokeball.svg';

const Home = () => (
  <div className="columns is-multiline is-centered">
    <div className="column is-full has-text-centered">
      <img src={Logo} alt="Logo Pokéball" className="logo" />
    </div>
    <div className="column is-full  has-text-centered">
      <p>
        <small>
          Pokédesk is an{' '}
          <a
            className="has-text-light"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fernandolievano/pokedesk"
          >
            open source app
          </a>{' '}
          by{' '}
          <a
            href="https://github.com/fernandolievano"
            className="has-text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fernando Liévano
          </a>
          , built with{' '}
          <a
            href="https://electronjs.org/"
            className="has-text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Electron
          </a>{' '}
          and{' '}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="has-text-light"
          >
            Pokéapi
          </a>
          .
        </small>
      </p>
      <p>
        <small>
          Content is © Nintendo, Game Freak, and The Pokémon Company.
        </small>
      </p>
    </div>
  </div>
);

export default Home;
