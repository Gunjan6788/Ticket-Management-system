import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Component/Home'
import About from '../Component/About'
import SignupUser from '../Auth/SignupUser'
import SignupCompany from '../Auth/SignupCompany'
import Login from '../Auth/Login'

export default function () {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/signupUser' component={SignupUser} />
                <Route path='/signupCompany' component={SignupCompany} />
                <Route path='/login' component={Login} />
            </Switch>
        </>
    )
}