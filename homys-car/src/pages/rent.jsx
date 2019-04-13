import React, { Component } from "react";
import NavBar from "../components/navbar";
import "./rent.css";
import Footer from "../components/footer";
class Rent extends Component {
  state = {};
  showDetail = (label, detail, width, isImportant) => {
    var className = "col-sm-" + width + " detail-col text-capitalize";
    if (isImportant) className += " text-success  font-weight-bold";
    return (
      <div className={className}>
        <h4>{label}</h4>
        {detail}
      </div>
    );
  };
  render() {
    return (
      <React.Fragment className="text-center">
        <NavBar />
        <div className="title-container text-center text-light">
          <h1 className="text-light display-3 checkout-label"> Checkout </h1>
          <p className="display-4 ">Pay a deposit and be on your way!</p>
        </div>

        <div className="container login-container rounded text-center">
          <button className="btn btn-outline-light btn-lg auth-btn">
            Sign in
          </button>{" "}
          <button className="btn btn-outline-light btn-lg auth-btn">
            Sign up
          </button>
        </div>
        <div className="container checkout-container shadow-lg bg-white rounded">
          <div className="row">
            <div className="price-container col-md-5 bg-dark rounded-left text-center text-light">
              <h1 className="deposit-amount">124$</h1>
              <h3 className="deposit-label ">Deposit</h3>
              We are taking a deposit to make sure you don't take our car on a
              "one way trip"
              <br />
              Booking time: 13th April 2019 8:00pm
              <button className="btn btn-primary btn-lg shadow-lg checkout-btn">
                {" "}
                Check out with PayPal
              </button>
            </div>
            <div className="detail-container col-md-7 rounded-right shadow ">
              {/* <div className="img-container"> */}
              <img
                src="/images/ZDI713.jpg"
                className="thumbnail-img shadow-lg"
              />
              <div className=" container-fuild summary-container bg-light rounded-right ">
                <h1 className="font-weight-bold">Summary</h1>
                <h2> Mazda 3 2015</h2>
                <p>
                  254 Domain Rd , Melbourne , AU
                  <br />
                  5.5 km away
                </p>
                <p />
                <div className="more-details-container text-left">
                  <div className="row detail-row">
                    {this.showDetail("Body Type", "sedan", 7)}
                    {this.showDetail("Tranmission", "Auto", 5)}
                  </div>
                  <div className="row detail-row ">
                    {this.showDetail("Rego No:", "AFS123", 7)}
                    {this.showDetail("Pricing", "123$/h", 5, true)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Rent;
