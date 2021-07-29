import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import  cartReducer  from "../Cart/cart.reducer";
import { userReducer } from "../User/user.reducer";
import  wishListReducer  from "../Wishlist/wishlist.reducer"

const reducers = combineReducers({
    allProducts:productReducer,
    product: selectedProductReducer,
    cartData: cartReducer,
    userReducer: userReducer,
    wishListReducer: wishListReducer
})

export default reducers;