import React, { Component } from 'react'

class Conatct extends Component {

    render() {
        return (
            <>
                <div className="container text-light p-3">
                    <div className="row">
                        <div className="col-5">
                            <img src='/Help_Ticket.png' />
                        </div>
                        <div className="col-5 mt-5">
                            <p>
                                Contact No: +91 000 234 1234
                            </p>
                            <p>
                                Email Address: ticketManage@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Conatct