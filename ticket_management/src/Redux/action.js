import {
    USER_REGISTER,
    COMPANY_REGISTER,
    LOGIN,
    ADD_TICKET,
    USER_TICKET_REPORT
} from './actionTypes'
import axios from 'axios'

//// register user ///////////
export const userRegisterSuccess = payload =>({
    type:USER_REGISTER,
    payload
})

export const userRegister = payload => dispatch => {
    console.log(payload)

    axios.post('http://127.0.0.1:5000/user_register',payload)
    .then(res => res.data)
    .then(res => dispatch(userRegisterSuccess(res)))
}

//// register company ///////////
export const companyRegisterSuccess = payload =>({
    type:COMPANY_REGISTER,
    payload
})

export const companyRegister = payload => dispatch => {
    console.log(payload)

    axios.post('http://127.0.0.1:5000/company_register',payload)
    .then(res => res.data)
    .then(res => dispatch(companyRegisterSuccess(res)))
}

///// login user or company //////////

export const loginSuccess = payload =>({
    type:LOGIN,
    payload
})

export const login = payload => dispatch => {
    console.log(payload)

    axios.post('http://127.0.0.1:5000/login',payload)
    .then(res => res.data)
    .then(res => dispatch(loginSuccess(res)))
}

//// add Ticket /////////
export const addTicketSuccess = payload =>({
    type:ADD_TICKET,
    payload
})

export const addTicket = payload => dispatch => {
    console.log(payload)

    axios.post('http://127.0.0.1:5000/add_ticket',payload)
    .then(res => res.data)
    .then(res => dispatch(addTicketSuccess(res)))
}

////// User ticket report //////
export const userTicketReportSuccess = payload =>({
    type:USER_TICKET_REPORT,
    payload
})

export const userTicketReport = payload => dispatch => {
    console.log(payload)
    axios.get(`http://127.0.0.1:5000/user_ticket_report/${payload}`)
    .then(res => res.data)
    .then(res => dispatch(userTicketReportSuccess(res)))
}