import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isEmpty } from "../util/validationHelpers";
import SummaryContainer from "../components/SummaryContainer";
import SimplePageTitle from "../components/SimplePageTitle";
// import { saveCheckoutCar } from "../store/actions/carActions";

class Checkout extends Component {
  componentDidMount() {
    // const { car } = this.props.location.state;
    // this.props.saveCheckoutCar(this.props.car);
    localStorage.setItem("checkoutCar", JSON.stringify(this.props.car));
    var thisCar = JSON.parse(localStorage.getItem("checkoutCar"));
    console.log("this car" + thisCar.make);
  }
  displayTitle = () => {
    var subtitle = isEmpty(this.props.car)
      ? "Please select a vehicle before checkout."
      : !this.props.isUserSignedIn
      ? "Please authenticate before checkout."
      : "Simply checkout and be on your way!";
    return <SimplePageTitle title="Checkout" subtitle={subtitle} />;
  };
  displayAuthenticationBtns = () => {
    if (
      !this.props.isUserSignedIn &&
      this.props.car != null &&
      !isEmpty(this.props.car)
    ) {
      return (
        <React.Fragment>
          <div className="container login-container rounded text-center">
            <Link
              className="btn btn-outline-light btn-lg auth-btn"
              to={{ pathname: "/signin" }}
            >
              Sign In
            </Link>
            <Link
              className="btn btn-outline-light btn-lg auth-btn"
              to={{ pathname: "/signup" }}
            >
              Sign up
            </Link>
          </div>
        </React.Fragment>
      );
    }
  };
  displayCheckout = () => {
    if (this.props.car != null && !isEmpty(this.props.car)) {
      return (
        <div className="container checkout-container shadow-lg rounded">
          <div className="row">
            <div className="price-container col-lg-5 bg-dark rounded-left text-center text-light">
              <h1 className="deposit-amount">PayPal</h1>
              <h3 className="deposit-label ">Deposit</h3>
              <br />
              We hold on to payment information to prevent "one way trips".
              Please Signin to checkout
              <br />
              {this.displayPayPalBtn()}
            </div>
            <SummaryContainer />
          </div>
        </div>
      );
    }
  };
  displayPayPalBtn = () => {
    if (this.props.isUserSignedIn) {
      return (
        <button className="btn btn-primary btn-lg shadow-lg checkout-btn">
          Check out with PayPal
        </button>
      );
    }
  };
  render() {
    return (
      <React.Fragment className="text-center">
        <NavBar />
        {this.displayTitle()}
        {this.displayAuthenticationBtns()}
        {this.displayCheckout()}
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  car: state.cars.selectedCar,
  distance: state.cars.selectedCarDistance,
  isUserSignedIn: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  {}
)(Checkout);
