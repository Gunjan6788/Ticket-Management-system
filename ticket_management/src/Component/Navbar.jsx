import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm  navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active border-right border-dark pl-md-5 ml-md-5">
                                <Link to='/' className="nav-link">Home </Link>
                            </li>
                            <li className="nav-item active border-right border-dark pl-md-5">
                                <Link to='/about' className="nav-link" href="#">About Us</Link>
                            </li>
                            <li className="nav-item active border-right border-dark pl-md-5">
                                <Link to='/signupUser' className="nav-link" href="#">User Registration</Link>
                            </li>
                            <li className="nav-item active border-right border-dark pl-md-5">
                                <Link to='/signupCompany' className="nav-link" href="#">Company Registration</Link>
                            </li>
                            <li className="nav-item active border-right border-dark pl-md-5">
                                <Link to='login' className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item active pl-md-5">
                                <Link to='/' className="nav-link" href="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}