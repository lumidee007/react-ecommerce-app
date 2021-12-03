import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton"
import CartItem from "../CartItem/CartItem";
import {selectCartItem} from '../../redux/cart/cartSelector'
import './cartDropDown.styles.scss'

const CartDownDown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))}
            </div>
            <CustomButton>GO TO CHECK OUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({cartItems: selectCartItem(state)})

export default connect(mapStateToProps)(CartDownDown);