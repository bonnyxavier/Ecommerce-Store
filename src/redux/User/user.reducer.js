import userTypes from "./user.constants";

const INITIAL_STATE = {
    users: []
}

export const userReducer = (state=INITIAL_STATE,{type, payload})=>{
    switch(type){
        case userTypes.REGISTER_USER:
            return{...state,users:payload}
    default:
         return state;
    }
}