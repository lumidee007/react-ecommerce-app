import { addItemsToCart, removeItemsFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden : true,
    cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_CART_HIDDEN":
             return {
                ...state,
                hidden: !state.hidden
             }
            break;
        case "ADD_TO_CART": 
             return {
            ...state,
            cartItems: addItemsToCart(state.cartItems, action.payload)
        } 
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: removeItemsFromCart(state.cartItems, action.payload)
            }
        break;
        case "CLEAR_ITEM_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        break;
        default:
            return state;
    }
}

export default cartReducer