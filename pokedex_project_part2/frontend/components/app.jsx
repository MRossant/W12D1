import { Route } from "react-router-dom";
import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import PokemonIndexItem from "./pokemon/pokemon_index_item";

const App = () => (
    <Route path="/" component={PokemonIndexContainer} />
)

export default App;