import cartTypes from "./cart.constants";

export const addProduct = (cartItem)=>({
    type: cartTypes.ADD_TO_CART,
    payload: cartItem
})

export const updateTotalPrice = (totalPrice)=>({
    type: cartTypes.UPDATE_TOTAL_PRICE,
    payload: totalPrice
})