import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRental } from "../store/actions/rentalActions";
import { getDateString, getTimeString } from "../util/dateHelper";
class Rental extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.onFetchRental(this.props.currentUser._id);
    }
  }
  state = {
    item: {
      booking_date: "2019-05-17T03:32:54.605Z",
      _id: "5cde2c6a3fca7218f03ac6fc",
      car_rego: "KSD481",
      user_id: "5cce800717e9c712972dab05",
      on_rent: true,
      created_at: "2019-05-17T03:37:14.298Z",
      updated_at: "2019-05-17T03:37:14.298Z"
    }
  };
  click = () => {
    console.log("Click");
  };
  render() {
    if (this.props.rentals !== null) {
      var rentalItems = this.props.rentals.map(item => (
        <div>
          <button
            type="button"
            onClick={() => {
              this.props.onAddRental({
                user_id: item.user_id,
                car_rego: item.rego
              });
            }}
          >
            Rental for {item.car_rego}
          </button>
        </div>
      ));
    }

    return (
      <React.Fragment>
        <div className="tab-content-container">
          <h1>List of Rentals</h1>
          {rentalItems}
          <button
            className=" btn rental-item-container bg-dark text-light text-left w-100"
            onCLick={this.click}
            tabindex="0"
          >
            <h4> Car KSD481</h4>
            {/* <h4>Booking Time</h4> */}
            Booking Date: {getDateString("2019-05-17T03:37:14.298Z")}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;Time:{" "}
            {getTimeString("2019-05-17T03:37:14.298Z")}
            {/* <button className="btn btn-primary"> Click</button> */}
          </button>

          <button
            className=" btn rental-item-container bg-dark text-light text-left w-100"
            onCLick={this.click()}
            tabindex="0"
          >
            <h4> Car KSD481</h4>
            {/* <h4>Booking Time</h4> */}
            Booking Date: {getDateString("2019-05-17T03:37:14.298Z")}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;Time:{" "}
            {getTimeString("2019-05-17T03:37:14.298Z")}
            {/* <button className="btn btn-primary"> Click</button> */}
          </button>

          <button
            className=" btn rental-item-container bg-dark text-light text-left w-100"
            onCLick={this.click()}
            tabindex="0"
          >
            <h4> Car KSD481</h4>
            {/* <h4>Booking Time</h4> */}
            Booking Date: {getDateString("2019-05-17T03:37:14.298Z")}{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;Time:{" "}
            {getTimeString("2019-05-17T03:37:14.298Z")}
            {/* <button className="btn btn-primary"> Click</button> */}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

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
