import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../pokeball.svg";

function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <NavLink
          to="/"
          exact
          className="navbar-item"
          activeClassName="is-active"
        >
          <img src={Logo} alt="Home" className="navbar-logo"/>
        </NavLink>
        <NavLink
          to="/other"
          className="navbar-item"
          activeClassName="is-active"
        >
          Other
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
