import React, { Component } from "react";
import { connect } from "react-redux";

class RentalHistory extends Component {


  convertDate (incomingDate) {
    const date = new Date(incomingDate)
    return date.toDateString()
  }

  convertOnRent (on_rent) {
    if (on_rent)
      return "YES"
    else
      return "NO"
  }

  displayRentals() {
    if (this.props.user) {
      const aRental =  this.props.myRentalHistory.map((rental, key) =>
        <li>
          <h3>Rental Number {(key+1)}</h3>
          <h3>Booking Date {this.convertDate(rental.booking_date)}</h3>
          <h3>Return Date {this.convertDate(rental.return_date)}</h3>
          <h3>Rental Active {this.convertOnRent(rental.on_rent)}</h3>
        </li>
      );
      return aRental
    }
  }


  render() {

    

    const myRentals = this.displayRentals()

    return (
      <React.Fragment>
        <h1>
          <strong>Rental details:</strong>
        </h1>
        <div className="h">
          <hr />
        </div>
        <div>
          <ul>
            {myRentals}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  myRentalHistory: state.rentalHistory.my_rental_history
});
export default connect(
  mapStateToProps,
  null
)(RentalHistory);
