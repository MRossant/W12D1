import {combineReducers} from 'redux';
import itemsReducer from './itemsReducer';
import movesReducer from './movesReducer';
import pokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer,
  moves: movesReducer
})

export default entitiesReducer;