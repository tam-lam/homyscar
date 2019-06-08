import React, {Component} from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

// import data from './user.json'

class UserM extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get('http://localhost:3001/user').then(response => {
            this.setState({users: response.data}, () => {
            })
        }).catch(err => console.log(err));
    }

    render() {
        const userItems = this.state.users.map((user, i) => {
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

export default UserM;