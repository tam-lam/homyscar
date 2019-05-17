import React from "react";
import { getDateString, getTimeString } from "../util/dateHelper";

const RentalItem = props => {
  const { _id, booking_date, car_rego } = props.rental;
  return (
    <button
      key={_id}
      className=" btn rental-item-container bg-dark text-light text-left w-100 shadow-lg"
      onClick={props.handleOnClick}
    >
      <h4> Car {car_rego}</h4>
      Booking Date: {getDateString(
        booking_date
      )} &nbsp;&nbsp;&nbsp;&nbsp;Time: {getTimeString(booking_date)}
    </button>
  );
};

export default RentalItem;
