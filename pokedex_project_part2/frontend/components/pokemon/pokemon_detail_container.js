import {connect} from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail'

const mSTP = (state, ownProps) => ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
})

const mDTP = (dispatch, ownProps) => ({
    requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
})

export default connect(mSTP, mDTP)(PokemonDetail);