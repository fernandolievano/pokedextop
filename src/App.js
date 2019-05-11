import React from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound"
import "./App.scss"

function App() {
  return (
    <HashRouter>
      <div>
        <h1>PokeDextop</h1>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/other">
            Other
            </NavLink>
          </li>
        </ul>
        <div className="className">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
