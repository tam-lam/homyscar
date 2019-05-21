import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { savePaymentInfo } from "../store/actions/paymentActions";
import { addConfirmation } from "../store/actions/confirmationActions";
import { deleteCheckoutCar } from "../store/actions/carActions";
import SimplePageTitle from "../components/SimplePageTitle";

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

    return (
      <div>
        {/* onSubmit={() => this.props.onAddConfirmation({rego: this.props.currentCar , user_id: this.props.currentUser.user._id})} */}
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
          className="text-center"
        >
          <input type="hidden" name="PayerID" value={params["PayerID"]} />
          <input type="hidden" name="paymentId" value={params["paymentId"]} />
          <SimplePageTitle title="Confirmation" subtitle="Last step" />
          <input className="btn btn-success btn-lg" type="submit" value="Buy" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // currentCar: state.cars.checkoutCar.rego,
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
