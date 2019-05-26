import React from "react";
import { Route, Switch } from "react-router-dom";
import AllPokemon from "../pages/Pokemon/All";
import Pokemon from "../pages/Pokemon/Pokemon";
import Home from "../pages/Home/Home";
import SideMenu from "../components/SideMenu";
import NotFound from "../pages/NotFound/NotFound";

const MainBody = () => (
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
                        <Route path="/pokemon/:name" component={Pokemon} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </article>
    </section>
)

export default MainBody;