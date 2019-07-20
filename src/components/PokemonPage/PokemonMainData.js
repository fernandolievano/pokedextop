import React from 'react';
import PropTypes from 'prop-types';

const PokemonMainData = ({ baseExperience, height, weight, children }) => (
  <div className="columns is-multiline is-centered is-vcentered has-text-centered">
    <div className="column">
      <h5 className="has-text-light is-size-5">Base Experience</h5>
      <p className="has-text-centered">
        {baseExperience}
      </p>
    </div>
    <div className="column main-data-element">
      <h5 className="is-size-5 has-text-light">Height</h5>
      <p className="has-text-centered">{`${height} dm`}</p>
    </div>
    <div className="column main-data-element">
      <h5 className="is-size-5 has-text-light">Weight</h5>
      <p className="has-text-centered">{`${weight} hg`}</p>
    </div>
    <br />
    <div className="column is-full main-data-element">
      {children}
    </div>
  </div>
);

PokemonMainData.propTypes = {
  baseExperience: PropTypes.number,
  height: PropTypes.number,
  weight: PropTypes.number
}

export default PokemonMainData;