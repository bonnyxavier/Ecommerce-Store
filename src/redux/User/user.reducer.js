import userTypes from "./user.constants";

const INITIAL_STATE = {
    users: []
}

const LOGIN_STATUS = false

export const userReducer = (state=INITIAL_STATE,{type, payload})=>{
    switch(type){
        case userTypes.REGISTER_USER:
            return{...state,users:payload}
    default:
         return state;
    }
}

export const loginStatusReducer = (state=LOGIN_STATUS, {type, payload})=>{
    switch(type){
        case userTypes.LOGIN_STATUS:
            return state = payload
    default:
         return state;
    }
}
