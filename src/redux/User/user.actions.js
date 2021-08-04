import userTypes from "./user.constants";

export const registerUser = (user)=>({
    type: userTypes.REGISTER_USER,
    payload: user
})

export const authenticateUser = (status)=>({
    type: userTypes.AUTHENTICATE_USER,
    payload: status
})

