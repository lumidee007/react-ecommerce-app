import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import {toogleCartHidden} from "../../redux/cart/cart.action"
import './cartIcon.styles.scss'

const CartIcon = ({toogleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toogleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toogleCartHidden : () => dispatch(toogleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon)