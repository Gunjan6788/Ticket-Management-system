import {
    USER_REGISTER,
    COMPANY_REGISTER,
    LOGIN,
    ADD_TICKET,
    USER_TICKET_REPORT
} from './actionTypes'

export const initState = {
    data: [],
    userSignup: false,
    companySignup: false,
    loginData: [],
    login:false,
    ticketReport:[]
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
        case ADD_TICKET:
            alert(payload.data)
            break
        case USER_TICKET_REPORT:
            return {
                ...state,
                ticketReport:payload.data
            }
        default:
            return state
    }
}