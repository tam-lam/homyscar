import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import axios from "axios";

class CarIT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            isDeleted:false
        }
    }

    deleteCard = () => {
        this.setState({
            isDeleted:true
        })
        axios.post(`http://localhost:3001/car/del`, {id: this.state.item._id})
            .then(res => {
                console.log(this)
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.isDeleted ? null :
                        <li className="collection-item">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                <tr>
                                    <th> Car._id
                                    </th>
                                    <th>Car.make
                                    </th>
                                    <th> Car_rego
                                    </th>
                                    <th> Car.model
                                    </th>
                                    <th>Car.year
                                    </th>
                                    <th>Car.body
                                    </th>
                                    <th>Car.transmission
                                    </th>
                                    <th>Car.address
                                    </th>
                                    <th>Car.price
                                    </th>
                                    <th>Car.availability
                                    </th>
                                    <th>Car.damaged
                                    </th>
                                    <th>Car.lat
                                    </th>
                                    <th>Car.lng
                                    </th>
                                    <th>operate
                                    </th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>
                                        {this.state.item._id}
                                    </td>
                                    <td className={'make'}>
                                        {this.state.item.make}
                                    </td>
                                    <td className={'rego'}>
                                        {this.state.item.rego}
                                    </td>
                                    <td>{this.state.item.model}
                                    </td>
                                    <td>{this.state.item.year}
                                    </td>
                                    <td>{this.state.item.body}
                                    </td>
                                    <td>{this.state.item.transmission}
                                    </td>
                                    <td>{this.state.item.address}
                                    </td>

                                    <td>{this.state.item.price}
                                    </td>
                                    <td>{this.state.item.availability ? 'true' : 'false'}
                                    </td>
                                    <td>{this.state.item.damaged ? 'true' : 'false'}
                                    </td>
                                    <td>{this.state.item.lat}
                                    </td>
                                    <td>{this.state.item.lng}
                                    </td>
                                    <td>
                                        <Link to={{
                                            pathname: `/car/edit/${this.state.item._id}`,
                                            query: {
                                                ...this.state.item
                                            }
                                        }} style={{color: '#007bff'}}>Update</Link>
                                        <br/>
                                        <span  style={{color: '#ff0000'}} onClick={this.deleteCard}>Delete</span>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </li>
                }
            </div>
        )
    }
}

export default CarIT;