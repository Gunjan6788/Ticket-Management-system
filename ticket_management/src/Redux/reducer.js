import {
    USER_REGISTER,
    COMPANY_REGISTER,
    LOGIN
} from './actionTypes'

export const initState = {
    data: [],
    userSignup: false,
    companySignup: false,
    loginData: []
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
            return {
                ...state,
                loginData: payload
            }
        default:
            return state
    }
}