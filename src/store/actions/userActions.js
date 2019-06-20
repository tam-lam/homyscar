import {
    REQUEST_USERS,
    RECIEVE_USERS,
    RECIEVE_USERS_ERROR
} from '../actions/types';
import axios from 'axios';


export const fetchUsers = () =>{

    return dispatch => {

        dispatch(requestUsers())

        axios.get('http://localhost:3001/getUsers')
        .then(res => dispatch(recieveUsers(res.data)))
        .catch(error => dispatch(recieveUsesError(error)))

    }
}

export const recieveUsesError = (error) =>({
    type: RECIEVE_USERS_ERROR,
    payload: error
})

export const recieveUsers = (users) => ({
    type: RECIEVE_USERS,
    payload: users
})

export const requestUsers = () => ({
    type: REQUEST_USERS
})