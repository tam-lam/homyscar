import React, {Component} from "react";
import "../stylesheets/table.css";
import Table from 'react-bootstrap/Table'
import {connect} from 'react-redux'

class RentalsTable extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
        }
    }

    render() {
        return (
            <div className="table">
                <div className="text-light bg-black">
                    <h2>Rentals</h2>
                </div>
                <Table hover variant="dark">
                    <thead>
                    <tr>
                        <th>Rental_ID</th>
                        <th>UserId
                        </th>
                        <th> Car_rego
                        </th>
                        <th> Booking Date
                        </th>
                        <th>User id
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.rentals.map(rental =>
                            <tr>
                                <td>{rental._id}</td>
                                <td>{rental.user_id}
                                </td>
                                <td>{rental.car_rego}
                                </td>
                                <td>{rental.booking_date}
                                </td>
                                <td>{rental.return_date}
                                </td>

                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>

        );

    }
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.activeRentals
    }
}

export default connect(mapStateToProps , null)(RentalsTable) ; 