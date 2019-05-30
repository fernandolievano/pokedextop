import React from "react";
import PropTypes from "prop-types";
import Sprite from "../Sprite";

function _renderSprites(sprites, name) {
  const spriteKeys = Object.keys(sprites);
  return spriteKeys.map((spriteType, i) =>
    sprites[spriteType] === null ? (
      ""
    ) : (
      <tr key={spriteType + i}>
        <th>{spriteType}</th>
        <td className="has-text-centered">
          <Sprite name={name} sprite={sprites[spriteType]} />
        </td>
      </tr>
    )
  );
}

const PokemonSprites = ({ sprites, name }) => (
  <div className="columns is-multiline is-centered is-vcentered">
      <div className="column is-full">
          <h4 className="is-size-4 has-text-light">
              Sprites
          </h4>
      </div>
      <div className="column is-full-mobile is-8-tablet is-narrow-desktop">
        <table className="table">
            {_renderSprites(sprites, name)}
        </table>
      </div>
  </div>
);

PokemonSprites.propTypes = {
  sprites: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default PokemonSprites;
