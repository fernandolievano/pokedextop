import React from 'react';
import PokemonCard from "./PokemonCard";

function _renderList(pokemon) {
    const pokemonList = Object.keys(pokemon);

    return pokemonList.map(index => {
        const name = pokemon[index].name;
        const url = pokemon[index].url;

        return (
            <div key={index} className="column is-4-desktop is-4-tablet is-6-mobile">
                <PokemonCard name={name} url={url} />
            </div>
        );
    });
}

function PokemonList(props) {
    return (
        <div className="columns is-multiline is-centered is-vcentered is-mobile">
            <div className="column is-full has-text-centered">
                {props.error ? (
                    <h3 className="title">{props.error}</h3>
                ) : (
                        ""
                    )}
            </div>
            <div id="point" tabIndex="-1"/>
            {_renderList(props.list)}
            <div className="column is-full">
                <div className="columns">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default PokemonList;