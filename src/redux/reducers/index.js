import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import  cartReducer  from "../Cart/cart.reducer";
import { userReducer } from "../User/user.reducer";
import  wishListReducer  from "../Wishlist/wishlist.reducer"
import incrementReducer from "../Test/test.reducer";
import { loginStatusReducer } from "../User/user.reducer";

const reducers = combineReducers({
    allProducts:productReducer,
    product: selectedProductReducer,
    cartData: cartReducer,
    userReducer: userReducer,
    wishListReducer: wishListReducer,
    incrementReducer: incrementReducer,
    loginStatusReducer: loginStatusReducer
})

export default reducers;