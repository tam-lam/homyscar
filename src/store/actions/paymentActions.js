import {
  PAYMENT_INFO,
  CLEAR_PAYMENT_INFO } from './types';

// Return errors
export const savePaymentInfo = (paymentId, payerId) => {
  return {
    type: PAYMENT_INFO,
    payload: { paymentId, payerId }
  };
};

// Clear errors
export const clearPaymentInfo = () => {
  return {
    type: CLEAR_PAYMENT_INFO
  };
};

