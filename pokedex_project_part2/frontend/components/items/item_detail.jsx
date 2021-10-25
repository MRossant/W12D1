import React from 'react';

const ItemDetail = (props) => {
    return (
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.happiness}</p>
            <p>{props.item.price}</p>
        </div>
    )
}

export default ItemDetail;