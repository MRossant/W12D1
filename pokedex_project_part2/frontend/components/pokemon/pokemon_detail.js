import React from 'react';
import ItemDetail from '../items/item_detail';

class PokemonDetail extends React.Component {
    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pokemon.id !== this.props.pokemon.id) return this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    render() {
        debugger
        return <div>
            <h2>{this.props.pokemon.name}</h2>
            <h2>{this.props.pokemon.name}'s Items</h2>
            <ul>
                {this.props.items.map(item => {
                    return (
                        <ItemDetail item={item} key={`${item.id}/${item.name}`}/>
                    )
                })}
            </ul>
        </div>
    }
}

export default PokemonDetail