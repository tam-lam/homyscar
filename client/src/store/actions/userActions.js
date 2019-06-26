import {
    REQUEST_USERS,
    RECIEVE_USERS,
    RECIEVE_USERS_ERROR,
    DELETE_USER
} from './types';
import axios from 'axios';


export const fetchUsers = () =>{

    return dispatch => {

        dispatch(requestUsers())

        axios.get('/users')
        .then(res => dispatch(recieveUsers(res.data)))
        .catch(error => dispatch(recieveUsesError(error)))

    }
}

export const deleteUser = (user_id) => dispatch => {
    axios.delete("/users", {
        params: {
            user_id
        }
    })
    .then( res => {
        console.log(res)
        dispatch({
            type: DELETE_USER,
            payload: user_id
        });
    })

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