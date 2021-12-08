import './checkoutItem.styles.scss'

import { addToCart, clearItemFromCart, removeFromCart } from '../../redux/cart/cart.action';
// import { addToCart, removeFromCart } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItems,removeCartItem, removeFromCart, addToCart}) => {

  const { name, imageUrl, price, quantity } = cartItems 

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={() => removeFromCart(cartItems)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addToCart(cartItems)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeCartItem(cartItems)}>&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: item => dispatch(clearItemFromCart(item)),
  addToCart : item => dispatch(addToCart(item)),
  removeFromCart: item => dispatch(removeFromCart(item))

})

export default connect(null, mapDispatchToProps)(CheckoutItem);