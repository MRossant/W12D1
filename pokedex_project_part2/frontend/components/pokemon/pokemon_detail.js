import React from 'react';

class PokemonDetail extends React.Component {
    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pokemon.id !== this.props.pokemon.id) return this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    render() {
        return <div>
            <h2>{this.props.pokemon.name}</h2>
        </div>
    }
}

export default PokemonDetail