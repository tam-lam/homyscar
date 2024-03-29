import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isEmpty } from "../util/validationHelpers";
import SummaryContainer from "../components/SummaryContainer";
import SimplePageTitle from "../components/SimplePageTitle";
import { notifyCheckoutSucceed } from "../components/ToastContent";
import {
  saveSelectedCarInStore,
  saveSelectedCarDistanceInStore,
  deleteCheckoutCar,
  saveCheckoutCar
} from "../store/actions/carActions";
import { addConfirmation } from "../store/actions/confirmationActions"

class Checkout extends Component {
  componentWillMount() {
    if (isEmpty(this.props.car) && !isEmpty(this.props.checkoutCar)) {
      this.props.saveSelectedCarInStore(this.props.checkoutCar);
      this.props.saveSelectedCarDistanceInStore(this.props.checkoutDistance);
    } else {
      if (!isEmpty(this.props.car)) {
        this.props.saveCheckoutCar(this.props.car, this.props.distance);
      }
    }
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
          <div className="row cancel-button bg-danger rounded-bottom">
            {" "}
            <button
              type="button"
              className="btn btn-block btn-danger"
              onClick={() => this.cancelOnClick()}
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }
  };
  cancelOnClick = () => {
    this.props.deleteCheckoutCar();
    this.props.history.push("/");
  };

  displayPayPalBtn = () => {
    if (this.props.isUserSignedIn) {
      return (
        
        <button 
          className="btn btn-primary btn-lg shadow-lg checkout-btn"
          onClick={() => {
            this.props.addConfirmation({
              rego: this.props.checkoutCar.rego,
              user_id: this.props.currentUser.user._id,
              price: this.props.checkoutCar.price
            });
            notifyCheckoutSucceed();
            this.cancelOnClick();
        }}> CHECK OUT </button>
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavBar className="text-center" />
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
  checkoutCar: state.cars.checkoutCar,
  checkoutDistance: state.cars.checkoutDistance,
  distance: state.cars.selectedCarDistance,
  isUserSignedIn: state.auth.isAuthenticated,
  currentUser: state.auth
});


const mapDispatchToProps = dispatch => {
  return {
    onDeleteCheckoutCar: () => {
      dispatch(deleteCheckoutCar());
    },
    onAddConfirmation: confirmation => {
      dispatch(addConfirmation(confirmation));
    }
  };
};



export default connect(
  mapStateToProps,
  {
    saveSelectedCarInStore,
    saveCheckoutCar,
    saveSelectedCarDistanceInStore,
    deleteCheckoutCar,
    addConfirmation
  }
)(Checkout);
