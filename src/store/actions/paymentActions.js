import axios from "axios";
import {
  PAYMENT_INFO,
  CLEAR_PAYMENT_INFO } from './types';

// Return errors
export const savePaymentInfo = (user_id, paymentId, payerId) => dispatch => {

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ userId:user_id, payerId, paymentId });

  console.log(body)

  dispatch({
    type: PAYMENT_INFO,
    payload: { user_id, payerId, paymentId }
  });


  axios
    .post("http://localhost:3001/savepayment", body, config)
    .then(res =>
      console.log(res.data)
    )
    .catch(err => {
      console.log(err)
    });
  
};

// Clear errors
export const clearPaymentInfo = () => {
  return {
    type: CLEAR_PAYMENT_INFO
  };
};

