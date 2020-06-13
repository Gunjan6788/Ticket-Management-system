import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userTicketReport } from '../Redux/action'
import { uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'

class TicketReport extends Component {

    componentDidMount = () => {
        const { userTicketReport, loginData } = this.props
        userTicketReport(loginData.id)
    }

    handleDelete = (id) => {

    }

    render() {
        const { ticketReport } = this.props
        console.log(ticketReport)
        return (
            <>
                <div className="container">
                    <table className="table table-dark mt-5">
                        <thead >
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">category</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ticketReport && ticketReport.map(ele => (
                                    <>
                                        {console.log(ele)}
                                        <tr>
                                            <td scope="row">{ele.id}</td>
                                            <td>{ele.title}</td>
                                            <td>{ele.description}</td>
                                            <td>{ele.category}</td>
                                            <td>{ele.status}</td>
                                            <td onClick={() => this.handleDelete(ele.id)}>Delete</td>
                                            <td><Link to={`/editTicket/${ele.id}`}>Edit</Link></td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    loginData: state.loginData,
    ticketReport: state.ticketReport
});
const mapDispatchToProps = dispatch => ({
    userTicketReport: payload => dispatch(userTicketReport(payload))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketReport);