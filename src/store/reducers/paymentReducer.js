import {
  PAYMENT_INFO,
  CLEAR_PAYMENT_INFO
} from "../actions/types";

const initialState = {
  paymentId: null,
  payerId: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PAYMENT_INFO:
      return {
        paymentId: action.payload.paymentId,
        payerId: action.payload.payerId
      }
    case CLEAR_PAYMENT_INFO:
      return {
        paymentId: null,
        payerId: null
      }
    default:
      return state;
  }
}