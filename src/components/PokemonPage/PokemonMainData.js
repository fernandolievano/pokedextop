import React from 'react';
import PropTypes from 'prop-types';

const PokemonMainData = ({ baseExperience, height, weight, children }) => (
  <div className="columns is-multiline is-centered has-text-centered">
    <div className="column border-right">
      <h5 className="is-size-5">Base Experience</h5>
      <p className="has-text-centered">
        {baseExperience}
      </p>
    </div>
    <div className="column main-data-element border-right border-left">
      <h5 className="is-size-5">Height</h5>
      <p className="has-text-centered">{`${height} dm`}</p>
    </div>
    <div className="column main-data-element border-right border-left">
      <h5 className="is-size-5">Weight</h5>
      <p className="has-text-centered">{`${weight} hg`}</p>
    </div>
    <div className="column main-data-element border-left">
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