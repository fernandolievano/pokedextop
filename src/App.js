import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import AllPokemon from "./pages/Pokemon/All";
import Home from "./pages/Home/Home";
import SideMenu from "./components/SideMenu";
import NotFound from "./pages/NotFound/NotFound";
import "./App.scss";
function App() {
  return (
    <HashRouter>
      <div>
        <header className="hero">
          <div className="hero-body">
            <h1 className="is-size-1">PokéDesk</h1>
          </div>
        </header>
        <section className="section">
          <article className="container">
            <div className="columns is-multiline is-centered">
              <div className="column is-2">
                <SideMenu />
              </div>
              <div className="column is-10">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/pokemon/all" component={AllPokemon} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </article>
        </section>
      </div>
    </HashRouter>
  );
}

export default App;
