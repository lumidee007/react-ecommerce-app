import React from "react";

import './cartItem.styles.scss'

const CartItem = ({item : {price, imageUrl, quantity, name}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt={name}/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">${price} * {quantity}</span>
        </div>
    </div>
)

export default CartItem