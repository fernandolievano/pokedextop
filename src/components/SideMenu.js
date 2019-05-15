import React from "react";
import { NavLink } from "react-router-dom";

function SideMenu() {
  return (
    <aside className="menu">
      <ul className="menu-list" id="menu">
        <li>
          <NavLink to="/" exact activeClassName="is-active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokemon/all" activeClassName="is-active">
            Pokémon
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default SideMenu;
