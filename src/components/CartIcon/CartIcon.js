import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import {selectCartItemCount} from '../../redux/cart/cartSelector'
import {toogleCartHidden} from "../../redux/cart/cart.action"
import './cartIcon.styles.scss'

const CartIcon = ({toogleCartHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toogleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})



const mapDispatchToProps = (dispatch) => ({
    toogleCartHidden : () => dispatch(toogleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)