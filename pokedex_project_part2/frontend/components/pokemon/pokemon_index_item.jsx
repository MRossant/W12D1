import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {

    return <li className="pokemon-index-item">
        <Link to="/pokemon/:pokemonId">
            <span>{props.pokemon.name}</span>
            <img src={props.pokemon.imageUrl} />
        </Link>
    </li>
}


export default PokemonIndexItem;