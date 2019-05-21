import React, { Component } from "react";
import { Link } from "react-router-dom";

class CheckoutAlert extends Component {
  state = {};
  render() {
    return (
      <div
        className="alert alert-light text-dark checkout-alert shadow-lg"
        role="alert"
      >
        <div className="row">
          <div className="col-1 text-center" />

          <div className="col-10 text-dark">
            You selected a vehicle. Please complete or cancle booking in{" "}
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/checkout"
            >
              Checkout
            </Link>{" "}
            page
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutAlert;
