export const toogleCartHidden = () => ({
    type: "TOGGLE_CART_HIDDEN"
})


export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    payload: item
})