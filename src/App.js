import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/MainNavbar";
import NotFound from "./pages/NotFound/NotFound";
import "./App.scss";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <header className="hero">
          <div className="hero-body">
            <h1 className="is-size-1">PokéDesk</h1>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
