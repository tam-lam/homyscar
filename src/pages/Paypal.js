import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { savePaymentInfo } from "../store/actions/paymentActions";
import { addConfirmation } from "../store/actions/confirmationActions";
import { deleteCheckoutCar } from "../store/actions/carActions";
import SimplePageTitle from "../components/SimplePageTitle";
import Navbar from "../components/Navbar";
import SummaryContainer from "../components/SummaryContainer";

class Paypal extends Component {
  state = {
    rego: ""
  };

  componentWillMount() {
    if (this.props.currentCar) {
      this.setState({ rego: this.props.currentCar.rego });
    }
    let url = this.props.location.search;
    let params = queryString.parse(url);

    const user_id = "MY USER ID";
    const paymentId = params["paymentId"];
    const payerId = params["PayerID"];

    if (paymentId && payerId && user_id)
      this.props.onSavePaymentInfo(user_id, paymentId, payerId);
    else console.log("no payment INFO provided");
  }

  render() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    const user_id = "MY USER ID";
    const paymentId = params["paymentId"];
    const payerId = params["PayerID"];
    return (
      <div className="text-light">
        {/* onSubmit={() => this.props.onAddConfirmation({rego: this.props.currentCar , user_id: this.props.currentUser.user._id})} */}
        <Navbar />
        {this.hasPaymentDetails(payerId, paymentId) ? (
          this.displayConfirmation(params)
        ) : (
          <SimplePageTitle
            title="Invalid booking!"
            subtitle="No payment found"
          />
        )}
      </div>
    );
  }
  hasPaymentDetails = (payerId, paymentID) => {
    return payerId && paymentID;
  };
  cancelOnClick = () => {
    this.props.onDeleteCheckoutCar();
    this.props.history.push("/");
  };
  displayConfirmation = params => {
    return (
      <React.Fragment>
        <form
          action="http://localhost:3001/success"
          method="get"
          onSubmit={() => {
            this.props.onAddConfirmation({
              rego: this.state.rego,
              user_id: this.props.currentUser.user._id
            });
            this.props.onDeleteCheckoutCar();
          }}
          className="text-center text-dark"
        >
          <input type="hidden" name="PayerID" value={params["PayerID"]} />
          <input type="hidden" name="paymentId" value={params["paymentId"]} />
          <SimplePageTitle
            title="Confirmation"
            subtitle="Once completed, confirm booking in My Account!"
          />
          <div className="container checkout-container shadow-lg rounded">
            <div className="row">
              <div className="price-container col-lg-5 bg-dark rounded-left text-center text-light">
                <h1 className="deposit-amount">PayPal</h1>
                <h3 className="deposit-label ">Deposit</h3>
                <br />
                After Checkout and arriving at vehicle please visit{" "}
                <strong>My Account</strong> page to confirm your booking
                <br />
                <br />
                <input
                  className="btn btn-primary btn-lg shadow-lg"
                  type="submit"
                  value="Complete checkout"
                />
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
        </form>
      </React.Fragment>
    );
  };
}

function mapStateToProps(state) {
  return {
    currentCar: state.cars.checkoutCar,
    currentUser: state.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteCheckoutCar: () => {
      dispatch(deleteCheckoutCar());
    },
    onAddConfirmation: confirmation => {
      dispatch(addConfirmation(confirmation));
    },
    onSavePaymentInfo: (user_id, paymentId, payerId) => {
      dispatch(savePaymentInfo(user_id, paymentId, payerId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paypal);
