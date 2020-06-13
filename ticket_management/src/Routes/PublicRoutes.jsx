import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Component/Home'
import About from '../Component/About'
import SignupUser from '../Auth/SignupUser'
import SignupCompany from '../Auth/SignupCompany'
import Login from '../Auth/Login'
import UserDashboard from '../Component/userdashboard'
import CompanyDashboard from '../Component/CompanyDashboard'
import AddTicket from '../Component/AddTicket'
import TicketReport from '../Component/TicketReport'

export default function () {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/signupUser' component={SignupUser} />
                <Route path='/signupCompany' component={SignupCompany} />
                <Route path='/login' component={Login} />
                <Route path='/userDashboard' component={UserDashboard} />
                <Route path='/CompanyDashboard' component={CompanyDashboard} />
                <Route path='/addTicket' component={AddTicket} />
                <Route path='/ticketReport' component={TicketReport} />
                <Route path='/userAccount' component={UserDashboard} />
                <Route path='/userPassword' component={UserDashboard} />
                <Route path='/logout' component={UserDashboard} />
            </Switch>
        </>
    )
}