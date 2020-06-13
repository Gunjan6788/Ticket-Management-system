import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userRegister } from '../Redux/action'
import {  Redirect } from 'react-router-dom'

class SignupUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            gender: '',
            email: '',
            dob: '',
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { userRegister, userSignup } = this.props
        console.log(userSignup)
        return (
            <>
               { userSignup?<Redirect to='/login'/>:""}
                <div className="container">
                    <h3 className="text-center m-3 text-light">User Registration</h3>

                    <div className="border row offset-3 col-md-6 p-3 bg-dark text-light rounded">
                        <div className='col-12'>
                            <div className="form-group col-12">
                                <label>First Name</label>
                                <input className="form-control"
                                    name="first_name"
                                    value={this.state.first_name}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Last Name</label>
                                <input className="form-control"
                                    name="last_name"
                                    value={this.state.last_name}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label >Gender</label>
                                <select className="form-control"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                >
                                    <option >gender</option>
                                    <option value="male">male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-group col-12">
                                <label>Email</label>
                                <input className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Date of Birth</label>
                                <input className="form-control"
                                    name="dob"
                                    value={this.state.dob}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Username</label>
                                <input className="form-control"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Password</label>
                                <input className="form-control"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <button className="btn btn-info ml-5 mt-3"
                            onClick={(e) => {
                                e.preventDefault()
                                userRegister(this.state);  
                            }}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    userSignup:state.userSignup
})
const mapDispatchToProps = dispatch => ({
    userRegister: payload => dispatch(userRegister(payload))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupUser);