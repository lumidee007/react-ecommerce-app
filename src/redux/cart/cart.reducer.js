import { addItemsToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden : false,
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
        break;
        default:
            return state;
    }
}

export default cartReducer