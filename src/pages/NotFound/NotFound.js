import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <div className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-full">
          <h1 className="is-size-1">404</h1>
          <h3 className="title">
            Not Found{" "}
            <span className="icon has-text-light">
              <i className="fas fa-frown" />
            </span>
          </h3>
        </div>
        <div className="column is-full has-text-centered">
          <h4 className="is-size-4">
            <NavLink className="button is-text" to="/">Volver</NavLink>
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
