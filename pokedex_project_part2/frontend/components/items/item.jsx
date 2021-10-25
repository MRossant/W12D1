import React from 'react';
import {Link} from 'react-router-dom';

class Item extends React.Component {
    
    render() {
        return (
        <li>
            <Link to={`/pokemon/${this.props.pokemonId}/items/${this.props.item.id}`}><img src={this.props.item.imageUrl}/></Link>
        </li>
        )
    }
}

export default Item;