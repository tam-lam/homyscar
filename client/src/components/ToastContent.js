import React from "react";
import { toast } from "react-toastify";

const PAYMENT_SUCCEED = "PAYMENT_SUCCEED";
const CONFIRM_SUCCEED = "CONFIRM_SUCCEED";
const RETURN_SUCCEED = "RETURN_SUCCEED";
const ADD_CAR_SUCCEEDED = "ADD_CAR_SUCCEEDED";
const ADD_CAR_FAILED = "ADD_CAR_FAILED";

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

export const notifyAddCarSucceeded = () =>
  toast(<ToastContent type={ADD_CAR_SUCCEEDED} />, {
    containerId: "notifyAddSucceed",
    type: toast.TYPE.SUCCESS
  });
export const notifyAddCarFailed = () =>
  toast(<ToastContent type={ADD_CAR_FAILED} />, {
    containerId: "notifyAddFailed",
    type: toast.TYPE.ERROR
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
    case ADD_CAR_SUCCEEDED:
      return <AddSucceededContent />;
    case ADD_CAR_FAILED:
      return <AddFailedContent />;
    default:
  }
};
const ReturnSucceedContent = () => {
  return "You have returned a vehicle!";
};
const AddSucceededContent = () => {
  return "You have Added a Car!";
};
const AddFailedContent = () => {
  return "This car already exists!";
};
const ConfirmSucceedContent = () => {
  return "You have confirmed a booking!";
};
const PaymentSucceedContent = () => {
  return <div>Confirm booking in My Account when arrive at vehicle</div>;
  return (
    <div>
      Confirm booking in{" "}
      <a className="text-light" href="user">
        My Account
      </a>{" "}
      when arrive at vehicle
    </div>
  );
};
export default ToastContent;
