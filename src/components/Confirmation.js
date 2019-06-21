import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchConfirmations } from "../store/actions/confirmationActions";
import { addRental } from "../store/actions/rentalActions";
import { notifyConfirm } from "../components/ToastContent";
import { isEmpty } from "../util/validationHelpers";
class Confirmation extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getConfirmations(this.props.currentUser._id);
    }
  }
  render() {
    if (this.props.confirmations !== null) {
      var confirmItems = this.props.confirmations.confirmation.map(item => (
        <div>

          <form 
            action="http://localhost:3001/pay" 
            method="post"
          >
            <input type="hidden" name="rego" value={item.rego} />
            <input type="hidden" name="user_id" value={item.user_id} />
            <input type="hidden" name="price" value={item.price} />
            <button
              className="btn btn-light"
              type="submit"
            >
              Confirm Booking for {item.rego}
            </button>
          </form>

          <br />
          <br />
        </div>
      ));
    }

    return (
      <React.Fragment>
        <div className="tab-content-container">
          <h1 className="display-3">Confirmations</h1>
          {isEmpty(confirmItems) ? (
            <p className="text-muted">No confirmation items found</p>
          ) : (
            confirmItems
          )}
        </div>
      </React.Fragment>
    );
  }
}

function mapPropsToState(state) {
  return {
    currentUser: state.auth.user,
    confirmations: state.confirmations.recievedConfirmations
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getConfirmations: user_id => {
      dispatch(fetchConfirmations(user_id));
    },
    onAddRental: rental => {
      dispatch(addRental(rental));
    }
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Confirmation);
