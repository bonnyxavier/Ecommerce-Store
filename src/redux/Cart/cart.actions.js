import cartTypes from "./cart.constants";

export const addProduct = (cartItem)=>({
    type: cartTypes.ADD_TO_CART,
    payload: cartItem
})