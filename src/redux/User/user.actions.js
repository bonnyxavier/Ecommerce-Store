import userTypes from "./user.constants";

export const registerUser = (user)=>({
    type: userTypes.REGISTER_USER,
    payload: user
})

export const setLoginStatus = (status)=>({
    type: userTypes.LOGIN_STATUS,
    payload: status

})