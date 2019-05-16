import {
        ADD_RENTAL_SUCCESS,
        ADD_RENTAL_FAILURE,
        ADD_RENTAL_STARTED,
        REQUEST_RENTAL,
        RECIEVE_RENTAL
        
} from './types';
import axios from 'axios';

export const addRental = ({car_rego , user_id }) => {
        return dispatch => {

                dispatch(addRentalStarted());

                axios.post('http://localhost:3001/rental' , {
                        car_rego,
                        user_id
                })
                .then(res => dispatch(addRentalSuccess(res.data)))
                .then(error => dispatch(addRentalFailure(error.message)))

        }
}

export const fetchRental = (user_id) => {
        return dispatch => {

                dispatch(requestRental());

                axios.get('http://localhost:3001/rental', {
                        params: {
                                user_id: user_id
                        }
                }).then(res => dispatch(recieveRental(res.data)))
                .then(error => console.log('error in retrieving rental' , error.message))
        }
}




const addRentalStarted = () => ({
        type: ADD_RENTAL_STARTED
});

const addRentalSuccess = rental =>({
        type: ADD_RENTAL_SUCCESS,
        payload: rental
})

const addRentalFailure = error => ({
        type: ADD_RENTAL_FAILURE,
        payload: error
})

const requestRental = () => ({
        type: REQUEST_RENTAL,
})

const recieveRental = rental => ({
        type: RECIEVE_RENTAL,
        payload: rental
})