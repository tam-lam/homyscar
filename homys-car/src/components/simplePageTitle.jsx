import React, { Component } from "react";
class SimplePageTitle extends Component {
  render() {
    return (
      <div className="title-container text-center text-light">
        <h1 className="text-light display-3 checkout-label"> Checkout </h1>
        <p className="display-4 ">Pay a deposit and be on your way!</p>
      </div>
    );
  }
}

export default SimplePageTitle;
