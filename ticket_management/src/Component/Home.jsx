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
                    
                </div>
            </>
        )
    }
}
