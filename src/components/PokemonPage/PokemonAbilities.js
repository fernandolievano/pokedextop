import React from 'react';
import PropTypes from 'prop-types';

function _renderAbilities(abilities) {
  return abilities.map((ab, index) => {
    const { is_hidden } = ab;
    const { name } = ab.ability;
    return <p className="is-capitalized has-text-centered" key={name+index}>
      <span>
        {name}
      </span>
      {
        is_hidden 
        ? <span className="tag is-danger">
            (Hidden)
          </span> 
        : ''
      }
    </p>
  });
}

const PokemonAbilities = ({abilities}) => (
  <div>
    <h4 className="is-size-4">Abilities</h4>
    {_renderAbilities(abilities)}
  </div>
);

PokemonAbilities.propTypes = {
  abilities: PropTypes.array
};


export default PokemonAbilities;