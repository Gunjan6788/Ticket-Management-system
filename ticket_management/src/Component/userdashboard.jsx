import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Userdashboard extends Component {
    render() {

        return (
            <>
                <div className='container mt-5'>
                    <div className='row' style={{ backgroundColor: "#e3f2fd" }}>
                        <div className='col-3'>
                            <ul className="navbar-nav">
                                <li className="nav-item active border-right border-dark m-md-2 p-md-2" style={{ backgroundColor: "#f3f2fd" }}>
                                    User Dashboard
                                </li>
                                <li className="nav-item border-right border-dark m-md-2 p-md-2" style={{ backgroundColor: "#f3f2fd" }}>
                                    <Link to='/addTicket' className="nav-link">Add Ticket</Link>
                                </li>
                                <li className="nav-item border-right border-dark m-md-2 p-md-2" style={{ backgroundColor: "#f3f2fd" }}>
                                    <Link to='/ticketReport' className="nav-link">My Ticket Report </Link>
                                </li>
                                <li className="nav-item border-right border-dark m-md-2 p-md-2" style={{ backgroundColor: "#f3f2fd" }}>
                                    <Link to='/userAccount' className="nav-link">My Account</Link>
                                </li>
                                <li className="nav-item border-right border-dark m-md-2 p-md-2" style={{ backgroundColor: "#f3f2fd" }}>
                                    <Link to='/userPassword' className="nav-link">Change Password</Link>
                                </li>
                                <li className="nav-item border-right border-dark m-md-2 p-md-2" style={{ backgroundColor: "#f3f2fd" }}>
                                    <Link to='/logout' className="nav-link">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Userdashboard);