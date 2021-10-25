import React from 'react';
import Item from '../items/item';
import itemDetailContainer from '../items/item_detail_container'
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

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
            <h2>{this.props.pokemon.name}'s Items</h2>
            <ul>
                {this.props.items.map(item => {
                    return (
                        <Item pokemonId={this.props.pokemon.id} item={item} key={`${item.id}/${item.name}`}/>
                    )
                })}
            </ul>
            <Route path="/pokemon/:pokemonId/items/:itemId" component={itemDetailContainer}/>
        </div>
    }
}

export default PokemonDetail