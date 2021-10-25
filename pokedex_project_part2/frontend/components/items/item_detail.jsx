import React from 'react';

class ItemDetail extends React.Component {
    
    render() {
        return (
        <li>
            <span>{this.props.item.name}</span>
            <img src={this.props.item.imageUrl}/>
        </li>
        )
    }
}

export default ItemDetail;