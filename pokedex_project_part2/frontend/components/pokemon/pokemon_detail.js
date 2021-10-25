import React from 'react';

class PokemonDetail extends React.Component {
    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) return this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    render() {
        debugger
        return <div>
            <h2>{this.props.pokemon.name}</h2>
        </div>
    }
}

export default PokemonDetail