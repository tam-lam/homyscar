import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchConfirmations } from "../store/actions/confirmationActions";
import { addRental } from "../store/actions/rentalActions";
import { Link } from "react-router-dom";
import { isEmpty } from "../util/validationHelpers";

// import { url } from "inspector";

class Confirmation extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      console.log(
        "confirmation id from confirmation page",
        this.props.currentUser._id
      );
      this.props.getConfirmations(this.props.currentUser._id);
    }
  }
  render() {
    if (this.props.confirmations !== null) {
      var confirmItems = this.props.confirmations.confirmation.map(item => (
        <div>
          <Link
            to={{
              pathname: "/"
            }}
            className="btn btn-primary"
            onClick={() => {
              this.props.onAddRental({
                user_id: item.user_id,
                car_rego: item.rego
              });
            }}
          >
            Confirm Booking for {item.rego}
          </Link>
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
          {/* <Link
            to={{
              pathname: "/"
            }}
            className="btn btn-primary"
            onClick={() => {}}
          >
            Confirm Booking for ABC123
          </Link>
          <br />
          <br />

          <Link
            to={{
              pathname: "/user"
            }}
            className="btn btn-primary"
            onClick={() => {}}
          >
            Confirm Booking for ABC123
          </Link> */}
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
