import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../Redux/action'
import { Link , Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            status: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { login,loginData } = this.props

        return (
            <>
                {
                    loginData && loginData.status === 'user' ?
                        <Redirect to='/userDashboard'/>
                        :
                        ""
                }
                {
                    loginData && loginData.status === 'company' ?
                        <Redirect to='/companyDashboard'/>
                        :
                        ""
                }
                <div className="container">
                    <h3 className="text-center m-3 text-light">Login</h3>

                    <div className="border row offset-3 col-md-6 p-3 bg-dark text-light rounded">
                        <div className='col-12'>
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
                            <div className="form-group col-md-4">
                                <label >Select Status</label>
                                <select className="form-control"
                                    name="status"
                                    value={this.state.day}
                                    onChange={this.handleChange}
                                >
                                    <option >Choose Status</option>
                                    <option value="company">Company</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                        </div>

                        <button className="btn btn-info ml-5 mt-3"
                            onClick={(e) => {
                                e.preventDefault()
                                login(this.state)
                            }}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    loginData:state.loginData,
    login:state.login
});
const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(login(payload))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);