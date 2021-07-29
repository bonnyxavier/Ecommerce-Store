import { assertTSFunctionType } from "@babel/types";
import wishListType from "./wishlist.constants";

const INITIAL_STATE = {
    wishListItems: []
}

const wishListReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case wishListType.ADD_TO_WISHLIST:
            return{
                ...state,
                wishListItems: [
                    ...state.wishListItems,
                    {
                        ...action.payload
                    }
                ]
            }
        
        default:
            return state
    }
}

export default wishListReducer