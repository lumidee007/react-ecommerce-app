import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton"
import CartItem from "../CartItem/CartItem";
import {createStructuredSelector} from 'reselect'
import { selectCartItem } from "../../redux/cart/cartSelector";
import './cartDropDown.styles.scss'
import { toogleCartHidden } from "../../redux/cart/cart.action";
import { withRouter } from "react-router";

const CartDownDown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ?
               cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)) : 
                    <span className="empty-cart">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout') 
                dispatch(toogleCartHidden())
            }}
            >GO TO CHECK OUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({cartItems: selectCartItem})

export default withRouter(connect(mapStateToProps)(CartDownDown));