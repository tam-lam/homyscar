import {
  PAYMENT_INFO,
  CLEAR_PAYMENT_INFO
} from "../actions/types";

const initialState = {
  user_id: null,
  paymentId: null,
  payerId: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PAYMENT_INFO:
      return {
        user_id: action.payload.user_id,
        paymentId: action.payload.paymentId,
        payerId: action.payload.payerId
      }
    case CLEAR_PAYMENT_INFO:
      return {
        user_id: null,
        paymentId: null,
        payerId: null
      }
    default:
      return state;
  }
}