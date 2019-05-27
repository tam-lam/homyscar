import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import axios from "axios";

class UserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            isDeleted: false,
        }
    }

    deleteCard = () => {
        this.setState({
            isDeleted: true
        })
        console.log(this.state)
        axios.post(`http://localhost:3001/user/del`, {id: this.state.item._id})
            .then(res => {
                console.log(this)
            });
    }


    render() {
        const {isDeleted} = this.state;
        return (
            <div>
                {
                    isDeleted ? null :
                        <li className="collection-item">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                <tr>
                                    <th> UserId
                                    </th>
                                    <th> UserName
                                    </th>
                                    <th>LicenseNo
                                    </th>
                                    <th> FirstName
                                    </th>
                                    <th> LastName
                                    </th>
                                    <th>Email
                                    </th>
                                    <th>DateOfBirth
                                    </th>
                                    <th>PaymentDetails
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
                                    <td>
                                        {this.state.item.username}
                                    </td>
                                    <td>
                                        {this.state.item.licenseNo}
                                    </td>
                                    <td>
                                        {this.state.item.firstName}
                                    </td>
                                    <td>{this.state.item.lastName}
                                    </td>
                                    <td>{this.state.item.email}
                                    </td>
                                    <td>{this.state.item.dateOfBirth}
                                    </td>
                                    <td>{this.state.item.paymentDetail ? this.state.item.paymentDetail : 0}
                                    </td>
                                    <td>
                                        <Link to={{
                                            pathname: `/user/edit/${this.state.item._id}`,
                                            query: {
                                                ...this.state.item
                                            }
                                        }} style={{color: '#007bff'}}>Update</Link>
                                        <br/>
                                        <span style={{color: '#ff0000'}} onClick={this.deleteCard}>Delete</span>
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

export default UserItem;