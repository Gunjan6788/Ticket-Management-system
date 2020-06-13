import {
    USER_REGISTER,
    COMPANY_REGISTER,
    LOGIN
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
    .then(res => console.log(res))
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
    .then(res => console.log(res))
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
    .then(res => console.log(res))
}