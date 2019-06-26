import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table'
import { deleteUser } from '../store/actions/userActions'

class UserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            isDeleted: false,
        }
    }

    deleteCard = (user_id) => {
        this.props.deleteOneUser(user_id)
        this.setState({isDeleted: true})
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
                                            <button onClick={() => this.deleteCard(this.state.item._id)} >Delete</button>
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

const mapDispatchToProps = dispatch => {
    return {
        deleteOneUser: (user_id) => {
            dispatch(deleteUser(user_id))
        }
    }
}

export default connect(null, mapDispatchToProps)(UserItem);
