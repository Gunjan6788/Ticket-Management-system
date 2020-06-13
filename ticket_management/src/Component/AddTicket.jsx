import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTicket } from '../Redux/action'


class AddTicket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            company: '',
            category:'',
            user_id:this.props.loginData.id
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { addTicket } = this.props

        return (
            <>
                <div className="container">
                    <h3 className="text-center m-3 text-light">Add Ticket</h3>

                    <div className="border row offset-3 col-md-6 p-3 bg-dark text-light rounded">
                        <div className='col-12'>
                            <div className="form-group col-12">
                                <label>Title</label>
                                <input className="form-control"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <label>description</label>
                                <input className="form-control"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label >Company</label>
                                <select className="form-control"
                                    name="company"
                                    value={this.state.day}
                                    onChange={this.handleChange}
                                >
                                    <option >company</option>
                                    <option value="Bosh">Bosh</option>
                                    <option value="Tach Sbm">Tach Sbm</option>
                                    <option value="MHT">MHT</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label >category</label>
                                <select className="form-control"
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.handleChange}
                                >
                                    <option >Category</option>
                                    <option value="hardware">Hardware</option>
                                    <option value="software">Software</option>
                                    <option value="application">Application</option>
                                </select>
                            </div>
                        </div>

                        <button className="btn btn-info ml-5 mt-3"
                            onClick={(e) => {
                                e.preventDefault()
                                addTicket(this.state)
                            }}
                        >
                            Add Ticket
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    loginData:state.loginData
});
const mapDispatchToProps = dispatch => ({
    addTicket: payload => dispatch(addTicket(payload))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTicket);