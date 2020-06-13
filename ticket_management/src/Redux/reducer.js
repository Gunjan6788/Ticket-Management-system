import {
    USER_REGISTER,
    COMPANY_REGISTER,
    LOGIN,
    ADD_TICKET
} from './actionTypes'

export const initState = {
    data: [],
    userSignup: false,
    companySignup: false,
    loginData: [],
    login:false
}

export default (state = initState, { type, payload }) => {
    console.log(payload)
    switch (type) {
        case USER_REGISTER:
            alert(payload.data)
            return {
                ...state,
                userSignup: true
            }
        case COMPANY_REGISTER:
            alert(payload.data)
            return {
                ...state,
                companySignup: true,
            }
        case LOGIN:
            alert(payload.message)
            return {
                ...state,
                loginData: payload,
                login:true
            }
        default:
            return state
    }
}