import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import  cartReducer  from "../Cart/cart.reducer";
import { userReducer } from "../User/user.reducer";

const reducers = combineReducers({
    allProducts:productReducer,
    product: selectedProductReducer,
    cartData: cartReducer,
    userReducer: userReducer
})

export default reducers;