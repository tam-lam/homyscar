import React, {Component} from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {fetchUsers} from '../store/actions/userActions'

// import data from './user.json'

class UsersTable extends Component {
 
    componentWillMount() {
        this.props.getAllusers()
    }


    render() {
        const userItems = this.props.users.map((user) => {
            return (
                <UserItem key={user.id} item={user}/>
            )
        })


        return (
            <div className="text-light bg-dark">
                <h1>Users</h1>
                <Button className="btn-primary">
                    <Link to={`/user/add`}>ADD User</Link>
                </Button>
                <br></br>
                <ul className="collection">
                    {userItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users_data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllusers: () => {
            dispatch(fetchUsers())
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (UsersTable);