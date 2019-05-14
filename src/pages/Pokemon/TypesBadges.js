import React from "react";
import PropTypes from "prop-types";
import "./Types.scss";

function _renderTypes(types) {
  return types.map((type, index) => (
    <span key={type.type.name + index} className={`tag ${type.type.name}`}>
      {type.type.name}
    </span>
  ));
}

function Types(props) {
  return (
    <div className="tags has-addons has-text-centered">
      {_renderTypes(props.types)}
    </div>
  );
}

Types.propTypes = {
  types: PropTypes.array
};

export default Types;
