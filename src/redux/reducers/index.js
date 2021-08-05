import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { cartReducer } from "../Cart/cart.reducer";
import { storeAddressReducer, userReducer } from "../User/user.reducer";
import  wishListReducer  from "../Wishlist/wishlist.reducer"
import incrementReducer from "../Test/test.reducer";
import { authenticateUserReducer } from "../User/user.reducer";
import { cartTotalPriceReducer } from "../Cart/cart.reducer";


const reducers = combineReducers({
    allProducts:productReducer,
    product: selectedProductReducer,
    cartData: cartReducer,
    userReducer: userReducer,
    wishListReducer: wishListReducer,
    incrementReducer: incrementReducer,
    authenticateUserReducer: authenticateUserReducer,
    storeAddressReducer:storeAddressReducer,
    cartTotalPriceReducer:cartTotalPriceReducer
})

export default reducers;