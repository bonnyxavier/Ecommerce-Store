import cartTypes from "./cart.constants";

const INITIAL_STATE = {
    cartItems: []
}

const TOTAL_PRICE = {
    totalPrice: null
}

export const cartReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case cartTypes.ADD_TO_CART:
            return{
                ...state,
                cartItems: [
                    ...state.cartItems,
                    {
                        ...action.payload
                    }
                ]
            }
            
    default: 
        return state
         
    };
}

export const cartTotalPriceReducer = (state=TOTAL_PRICE, action)=>{
    switch(action.type){
        case cartTypes.UPDATE_TOTAL_PRICE:
            return{
                ...state,
                totalPrice: action.payload
            }
        
        default:
            return state
    }
}

