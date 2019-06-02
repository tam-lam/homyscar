import axios from "axios";
import {
  RETRIEVE_RENTAL_HISTORY,
  CLEAR_RENTAL_HISTORY
} from './types';

// Return errors
export const getRentalHistory = (user_id) => dispatch => {

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request Body
  const body = JSON.stringify({user_id});

  axios
    .post("http://localhost:3001/rentalHistory", body, config)
    .then(res =>
      dispatch({
        type: RETRIEVE_RENTAL_HISTORY,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err)
    });

};

// // Clear errors
// export const clearPaymentInfo = () => {
//   return {
//     type: CLEAR_PAYMENT_INFO
//   };
// };

