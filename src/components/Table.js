import React, {Component} from "react";
import "../stylesheets/table.css";
import Table from 'react-bootstrap/Table'

class TTable extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        return fetch('http://localhost:3001/rental')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    data: responseJson
                })
                console.log(this.state.data)
            })
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
                        <th> BookingDate
                        </th>
                        <th>OnReturn
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map(row =>
                            <tr>
                                <td>{row._id}</td>
                                <td>{row.user_id}
                                </td>
                                <td>{row.car_rego}
                                </td>
                                <td>{row.booking_date}
                                </td>
                                <td>{row.on_return ? 'true' : 'false'}
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

export default TTable;