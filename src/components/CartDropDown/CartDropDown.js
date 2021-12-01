import React from "react";
import CustomButton from "../CustomButton/CustomButton"
import './cartDropDown.styles.scss'

const CartDownDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>GO TO CHECK OUT</CustomButton>
        </div>
    )
}

export default CartDownDown;