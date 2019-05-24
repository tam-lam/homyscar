import React, { Component } from "react";
import { getDateString, getTimeString } from "../util/dateHelper";
import { Link } from "react-router-dom";

class RentalItem extends Component {
  state = {};
  render() {
    const { _id, booking_date, car_rego, on_rent } = this.props.rental;

    return (
      <button
        key={_id}
        className=" btn rental-item-container bg-dark text-light text-left w-100 shadow-lg"
      >
        <div className="row">
          <div className="col-lg-6">
            <h4> Car {car_rego}</h4>
            Booking Date: {getDateString(booking_date)} <br />
            Booking Time: {getTimeString(booking_date)}
          </div>
          {on_rent ? (
            <div className="col-lg-6">{this.displayOnRent()}</div>
          ) : null}
        </div>
      </button>
    );
  }
  displayOnRent = () => {
    return (
      <React.Fragment>
        <div className="float-right" style={btnContainerStyle}>
          <button
            className="btn btn-outline-secondary"
            style={returnBtnStyle}
            disabled
          >
            Active Rental
          </button>

          <Link
            to={{
              pathname: "/"
            }}
            style={returnBtnStyle}
            className="btn btn-light"
            onClick={this.props.onReturn}
          >
            Return
          </Link>
        </div>
      </React.Fragment>
    );
  };
}

export default RentalItem;

const btnContainerStyle = {
  marginRight: "1em"
};
const returnBtnStyle = {
  marginTop: "1em",
  marginRight: "2em"
};
