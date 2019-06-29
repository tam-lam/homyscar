import React from "react";
import { toast } from "react-toastify";

const PAYMENT_SUCCEED = "PAYMENT_SUCCEED";
const CONFIRM_SUCCEED = "CONFIRM_SUCCEED";
const RETURN_SUCCEED = "RETURN_SUCCEED";

toast.configure({
  autoClose: 30000,
  draggable: false,
  pauseOnHover: false,
  pauseOnFocusLoss: false
});
export const notifyConfirm = () =>
  toast(<ToastContent type={CONFIRM_SUCCEED} />, {
    containerId: "notifyConfirm",
    type: toast.TYPE.SUCCESS
  });
export const notifyReturnSucceed = () =>
  toast(<ToastContent type={RETURN_SUCCEED} />, {
    containerId: "notifyReturnSucceed",
    type: toast.TYPE.SUCCESS
  });

export const notifyCheckoutSucceed = () =>
  toast(<ToastContent type={PAYMENT_SUCCEED} />, {
    containerId: "notifyConfirm",
    type: toast.TYPE.INFO
  });

const ToastContent = props => {
  switch (props.type) {
    case PAYMENT_SUCCEED:
      return <PaymentSucceedContent />;
    case CONFIRM_SUCCEED:
      return <ConfirmSucceedContent />;
    case RETURN_SUCCEED:
      return <ReturnSucceedContent />;
    default:
  }
};
const ReturnSucceedContent = () => {
  return "You have returned a vehicle!";
};
const ConfirmSucceedContent = () => {
  return "You have confirmed a booking!";
};
const PaymentSucceedContent = () => {
  return <div>Confirm booking in My Account when arrive at vehicle</div>;
};
export default ToastContent;
