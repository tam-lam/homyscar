import {
  ADD_RENTAL_SUCCESS,
  ADD_RENTAL_FAILURE,
  ADD_RENTAL_STARTED,
  REQUEST_RENTAL,
  RECIEVE_RENTAL,
  RECIEVE_ALL_RENTALS,
  RECIEVE_RENTAL_ERROR
} from "./types";
import axios from "axios";

export const addRental = ({ car_rego, user_id }) => {
  return dispatch => {
    dispatch(addRentalStarted());

    axios
      .post("http://localhost:3001/rental", {
        car_rego,
        user_id
      })
      .then(res => {
        dispatch(addRentalSuccess(res.data));

        axios.delete("http://localhost:3001/deleteConfirmation", {
          params: {
            rego: car_rego
          }
        });
      })
      .catch(error => dispatch(addRentalFailure(error)));
  };
};

export const fetchRental = user_id => {
  return dispatch => {
    dispatch(requestRental());


    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    // Request Body
    const body = JSON.stringify({ user_id: user_id });

    console.log(user_id)


    axios
      .post("http://localhost:3001/userRentals", body, config)
      .then(res =>
        dispatch(recieveRental(res.data))
      )
      .catch(error => dispatch(receiveRentalError(error)));
      
  };
};

export const fetchAllRentals = () => {
    return dispatch => {
        dispatch(requestRental())

        axios.get('http://localhost:3001/rental')
        .then(res => dispatch(recieveAllRentals(res.data)))
        .catch(error => dispatch(receiveRentalError(error.message)))
    }
}



const addRentalStarted = () => ({
  type: ADD_RENTAL_STARTED
});

const addRentalSuccess = rental => ({
  type: ADD_RENTAL_SUCCESS,
  payload: rental
});

const addRentalFailure = error => ({
  type: ADD_RENTAL_FAILURE,
  payload: error
});

const requestRental = () => ({
  type: REQUEST_RENTAL
});

const recieveRental = rental => ({
  type: RECIEVE_RENTAL,
  payload: rental
});

const recieveAllRentals = rentals => ({
    type: RECIEVE_ALL_RENTALS,
    payload: rentals
})

const receiveRentalError = error => ({
    type: RECIEVE_RENTAL_ERROR,
    payload: error
})



