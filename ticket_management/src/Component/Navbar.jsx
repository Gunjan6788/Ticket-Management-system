import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../Redux/actions'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <>
                <div className="container">
                    <nav class="navbar navbar-dark bg-dark">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Registration
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">User</a>
                                <a class="dropdown-item" href="#">Company</a>
                            </div>
                        </li>
                    </nav>
                </div>
            </>
        )
    }
}