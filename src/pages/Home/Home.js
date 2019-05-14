import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../pokeball.svg";

class Home extends Component {
  render() {
    return (
      <div className="section">
        <div className="container has-text-centered">
          <img src={Logo} alt="Logo Pokéball" className="logo" />
        </div>
        <div className="container">
          <div className="columns is-multiline is-centered">
            <div className="column">
              <NavLink to="/pokemon/all" className="button is-link">Pokédex</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
