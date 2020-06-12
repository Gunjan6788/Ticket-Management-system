import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../Redux/actions'
import { Link } from 'react-router-dom'

class SignupUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            gender: '',
            email: '',
            dob:'',
            username:'',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { add, addItem } = this.props

        return (
            <>
                <div className="container">
                    <h3 className="text-center m-3">Enter Item</h3>

                    <div className="border row offset-3 col-md-6 p-3 bg-dark text-light rounded">
                        <div className='col-12'>
                            <div className="form-group col-12">
                                <label>First Name</label>
                                <input className="form-control"
                                    name="first_name"
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Last Name</label>
                                <input className="form-control"
                                    name="last_name"
                                    value={this.state.item}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Gender</label>
                                <input className="form-control"
                                    name="gender"
                                    value={this.state.price}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Email</label>
                                <input className="form-control"
                                    name="Email"
                                    value={this.state.quantity}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Date of Birth</label>
                                <input className="form-control"
                                    name="dob"
                                    value={this.state.quantity}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Username</label>
                                <input className="form-control"
                                    name="username"
                                    value={this.state.quantity}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>Password</label>
                                <input className="form-control"
                                    name="password"
                                    value={this.state.quantity}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <button className="btn btn-info ml-5 mt-3"
                            onClick={(e) => {
                                e.preventDefault()
                                addItem(this.state)
                            }}
                        >
                            Add Details
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    add: state.add,
});
const mapDispatchToProps = dispatch => ({
    addItem: payload => dispatch(addItem(payload))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupUser);