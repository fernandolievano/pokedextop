import React from 'react';
import PropTypes from 'prop-types';

const Sprite = ({ sprite, name }) => (
  sprite
    ? (
      <img
        src={sprite}
        alt={name}
      />
    )
    : `Sprite de ${name} no disponible`
);

Sprite.propTypes = {
  sprite: PropTypes.string,
  name: PropTypes.string
}

export default Sprite;
