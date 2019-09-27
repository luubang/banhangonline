import React from 'react';

import './checkout-item.styles.scss';

const CheckOutItem = ({item : {name, price , imageUrl, quantity}}) => (
    <div className='checkout-item'>
        <div className="image-container">
            <img src={imageUrl}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <span className="remove">&#10007;</span>

    </div>
)

export default CheckOutItem;