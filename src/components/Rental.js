import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRental } from "../store/actions/rentalActions";
import RentalItem from "../components/RentalItem";
class Rental extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.onFetchRental(this.props.currentUser._id);
    }
  }
  render() {
    if (this.props.rentals !== null) {
      var rentalItems = this.props.rentals.map(item => (
        <RentalItem
          key={item._id}
          rental={item}
          handleOnClick={() => {
            this.props.onAddRental({
              user_id: item.user_id,
              car_rego: item.rego
            });
          }}
        />
      ));
    }

    return (
      <React.Fragment>
        <div className="tab-content-container">
          <h1>List of Rentals</h1>
          {rentalItems}
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
