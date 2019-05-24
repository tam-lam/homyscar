import React from "react";
import { toast } from "react-toastify";

const PAYMENT_SUCCEED = "PAYMENT_SUCCEED";
const CONFIRM_SUCCEED = "CONFIRM_SUCCEED";
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
  }
};
const ConfirmSucceedContent = () => {
  return "You have confirmed a booking!";
};
const PaymentSucceedContent = () => {
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
