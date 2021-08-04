import userTypes from "./user.constants";

const INITIAL_STATE = {
    users: []
}

const INITIAL_LOGIN_STATUS_STATE = {
    status: false
}

export const userReducer = (state=INITIAL_STATE,{type, payload})=>{
    switch(type){
        case userTypes.REGISTER_USER:
            return{...state,users:payload}
    default:
         return state;
    }
}

export const authenticateUserReducer = (state=INITIAL_LOGIN_STATUS_STATE,action)=>{
    switch(action.type){
        case userTypes.AUTHENTICATE_USER:
            return{
                ...state,
                status: action.payload
            }
        
        default:
            return state;
    }
}


