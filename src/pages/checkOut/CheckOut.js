import './checkOutPage.styles.scss'

import { selectCartItem, selectCartItemPrice } from "../../redux/cart/cartSelector"
import { connect } from "react-redux"
import {createStructuredSelector} from "reselect"
// import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import {CartItem }from "../../components/CartItem/CartItem"
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeButton/StripeButton'

const CheckOut = ({CartItems, totalPrice}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Price
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Remove
                    </span>
                </div>
            </div>
            {CartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItems={cartItem}/>))}
            <div className="total">
                <span> 
                    Total : ${totalPrice}
                </span>
            </div>
            <div className="test-warning">
                *Please use below test credit card details for payments* <br/>
                4242 4242 4242 4242  - Exp: 01/22  - CVC: 123
            </div>
            <StripeCheckoutButton price={totalPrice} className="button"/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    CartItems: selectCartItem,
    totalPrice : selectCartItemPrice
})


export default connect(mapStateToProps)(CheckOut)