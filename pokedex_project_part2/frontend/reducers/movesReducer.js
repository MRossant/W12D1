import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const movesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_POKEMON:
            return action.pokemon.moves
        default:
            return state;
    }
}

export default movesReducer;