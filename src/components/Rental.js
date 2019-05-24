import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRental } from "../store/actions/rentalActions";
import RentalItem from "../components/RentalItem";
import { isEmpty } from "../util/validationHelpers";
import { getDateString, getTimeString } from "../util/dateHelper";

class Rental extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.onFetchRental(this.props.currentUser._id);
    }
  }
  render() {
    if (this.props.rentals !== null) {
      var rentalItems = this.props.rentals.map(item => (
        <RentalItem key={item._id} rental={item} />
      ));
    }
    // const { _id, booking_date, car_rego, on_rent } = {"5ce4a4ca269ff927ff077332","2019-05-22T01:08:54.552Z","XYZ750",{true}};
    const _id = "5ce4a4ca269ff927ff077332";
    const booking_date = "2019-05-22T01:08:54.552Z";
    const car_rego = "XYZ750";
    const on_rent = true;
    return (
      <React.Fragment>
        <div className="tab-content-container">
          <h1 className="display-3">Rentals</h1>
          {isEmpty(rentalItems) ? (
            <p className="text-muted">No rental record found</p>
          ) : (
            rentalItems
          )}
          {/* /////////////////////////////////////////////////// */}
          <button
            key={_id}
            className=" btn rental-item-container bg-dark text-light text-left w-100 shadow-lg"
          >
            <div className="row">
              <div className="col-lg-6">
                <h4> Car {car_rego}</h4>
                Booking Date: {getDateString(booking_date)} <br />
                Booking Time: {getTimeString(booking_date)}
              </div>
              {on_rent ? (
                <div className="col-lg-6">{this.displayOnRent()}</div>
              ) : null}
            </div>
          </button>
          {/* /////////////////////////////////////////////////// */}
        </div>
      </React.Fragment>
    );
  }
  displayOnRent = () => {
    return (
      <React.Fragment>
        <div className="float-right" style={btnContainerStyle}>
          <button
            className="btn btn-outline-secondary"
            style={returnBtnStyle}
            disabled
          >
            Active Rental
          </button>
          <button className="btn btn-light" style={returnBtnStyle}>
            Return
          </button>
        </div>
      </React.Fragment>
    );
  };
}
const btnContainerStyle = {
  marginRight: "1em"
};
const returnBtnStyle = {
  marginTop: "1em",
  marginRight: "2em"
};
function mapPropsToState(state) {
  return {
    currentUser: state.auth.user,
    rentals: state.rentals.fetchedRentals
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRental: user_id => {
      dispatch(fetchRental(user_id));
    }
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Rental);
