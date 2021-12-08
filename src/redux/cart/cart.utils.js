export const addItemsToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem) 
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}



export const removeItemsFromCart = (cartItems, itemsToRemove) => {
    const checkItemsAvailability = cartItems.find(cartItem => cartItem.id === itemsToRemove.id)

    if(checkItemsAvailability.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemsToRemove.id)
    }

    return cartItems.map(cartItem => cartItem.id === itemsToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1} :
            cartItem
        )

}