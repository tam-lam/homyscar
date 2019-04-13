import React, { Component } from "react";
import NavBar from "../components/navbar";
import "./rent.css";
import Footer from "../components/footer";
import SummaryContainer from "../components/summaryContainer";
import SimplePageTitle from "../components/simplePageTitle";
class Rent extends Component {
  state = {
    car: this.props.location.state
  };
  displayAuthenticationBtns = () => {
    return (
      <div className="container login-container rounded text-center">
        <button className="btn btn-outline-light btn-lg auth-btn">
          Sign in
        </button>{" "}
        <button className="btn btn-outline-light btn-lg auth-btn">
          Sign up
        </button>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment className="text-center">
        <NavBar />
        <SimplePageTitle />

        {/* Display authentication buttons if user is not logged in */}
        {this.displayAuthenticationBtns()}

        <div className="container checkout-container shadow-lg rounded">
          <div className="row">
            <div className="price-container col-md-5 bg-dark rounded-left text-center text-light">
              <h1 className="deposit-amount">100$</h1>
              <h3 className="deposit-label ">Deposit</h3>
              We are taking a deposit to make sure you don't take our car on a
              "one way trip"
              <br />
              {/* Hard coded time , need to make it real */}
              Booking time: 13th April 2019 8:00pm
              <button className="btn btn-primary btn-lg shadow-lg checkout-btn">
                Check out with PayPal
              </button>
            </div>
            <SummaryContainer car={this.state.car} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Rent;
