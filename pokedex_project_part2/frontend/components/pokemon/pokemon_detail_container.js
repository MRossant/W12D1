import {connect} from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail'
import { selectPokemonMovesNames, selectPokemonItems } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    return {
        pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
        moves: selectPokemonMovesNames(state),
        items: selectPokemonItems(state)
    }
}

const mDTP = (dispatch, ownProps) => ({
    requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
})

export default connect(mSTP, mDTP)(PokemonDetail);