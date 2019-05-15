import React, { Component } from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import data from './user.json'

class UserM extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount(){
    this.getUsers();
  }

  getUsers(){
    axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
      .then(response => {
        this.setState({users: response.data}, () => {
          console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    const userItems = this.state.users.map((user, i) => {
      return(
        <UserItem key={user.id} item={user} />
      )
    })
    return (
      <div className="text-light bg-dark">
        <h1>Users</h1>
        <ul className="collection">
          {userItems}

        </ul>
      </div>
    )
  }
}

export default UserM;