import React from 'react';
import PropTypes from 'prop-types';

const _dashToSpace = str => {
  str = str.replace(/-/g, " ");
  return str;
};

function _renderAbilities(abilities) {
  return abilities.map((ab, index) => {
    const { is_hidden } = ab;
    const { name } = ab.ability;
    return <p className="is-capitalized has-text-centered margin-x" key={name+index}>
      <span>
        {_dashToSpace(name)}
      </span>
      {
        is_hidden 
        ? <span className="tag is-dark">
            (Hidden)
          </span> 
        : ''
      }
    </p>
  });
}

const PokemonAbilities = ({abilities}) => (
  <div>
    <h5 className="is-size-5 has-text-light">Abilities</h5>
    {_renderAbilities(abilities)}
  </div>
);

PokemonAbilities.propTypes = {
  abilities: PropTypes.array
};


export default PokemonAbilities;