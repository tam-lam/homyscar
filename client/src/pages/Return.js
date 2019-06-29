import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Script from "react-load-script";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Geocode from "react-geocode";
import { deleteRental } from "../store/actions/rentalActions";
import { connect } from "react-redux";
import DateDiff from "date-diff";
import axios from "axios";
import UserDetail from "../components/UserDetail";
import SimplePageTitle from "../components/SimplePageTitle";
import { getDateString, getTimeString } from "../util/dateHelper";
import { notifyReturnSucceed } from "../components/ToastContent";
class Return extends Component {
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: "",
      query: ""
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.returnRental = this.returnRental.bind(this);
  }

  returnRental() {
    var returnAddress = document.getElementById("autocomplete");

    if (returnAddress != null && returnAddress.value == "") {
      alert("Please input a return address");
    } else {
      Geocode.setApiKey("AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg");

      // Enable or disable logs. Its optional.
      Geocode.enableDebug();

      // Get latidude & longitude from address.
      Geocode.fromAddress(returnAddress.value).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);

          var address_info = {
            address: returnAddress.value,
            latitude: lat,
            longitude: lng
          };

          this.props.onReturnRental(
            this.props.location.returnItem,
            address_info
          );
          this.processPayment();
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  handleScriptLoad() {
    // Declare Options For Autocomplete

    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-38.45827, 145.21089),
      new google.maps.LatLng(-37.525255, 144.948176)
    );

    var options = {
      types: ["address"],
      bound: defaultBounds,
      componentRestrictions: { country: "au" }
    };

    // Initialize Google Autocomplete
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    alert(address);
    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address
      });
    }
  }

  calculateTotalPrice(price, mins) {
    var totalPrice = (price / 60) * mins;
    return totalPrice;
  }

  processPayment() {
    var pricePerHour = this.props.location.returnItem.price;
    var payerId = this.props.location.returnItem.payer_id;
    var paymentId = this.props.location.returnItem.payment_id;

    var date1 = new Date();
    var date2 = new Date(this.props.location.returnItem.booking_date);
    var diff = new DateDiff(date1, date2);

    var totalPrice = this.calculateTotalPrice(pricePerHour, diff.minutes());

    axios.get("/success", {
      params: {
        totalPrice: totalPrice,
        PayerID: payerId,
        paymentId: paymentId
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SimplePageTitle title="Return" />

        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVT0ufJbPLrh4hbunIDrF3TYDAolrNOlg&libraries=places"
          onLoad={this.handleScriptLoad}
        />

        <MuiThemeProvider>
          <div
            className="container rounded bg-light"
            style={mainContainerStyle}
          >
            <div className=" ">
              <div className="text-left text-light " />
              <UserDetail
                title="User ID"
                content={this.props.location.returnItem.user_id}
              />
              <UserDetail
                title="Car rego"
                content={this.props.location.returnItem.car_rego}
              />
              <UserDetail
                title="Booking data"
                content={
                  getDateString(this.props.location.returnItem.booking_date) +
                  " " +
                  getTimeString(this.props.location.returnItem.booking_date)
                }
              />
              <UserDetail
                title="Total price"
                content={this.props.location.returnItem.totalPrice}
              />
              {/* <p> total price: {this.props.location.returnItem.totalPrice} </p> */}
            </div>
            <Script
              url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEFtWHf9PNwDPk74kYTMLpYzDg8WB7n7Y&libraries=places"
              onLoad={this.handleScriptLoad}
            />
            <SearchBar
              id="autocomplete"
              placeholder=""
              hintText="Search City"
              value={this.state.query}
              style={{
                margin: "0 auto",
                maxWidth: 800
              }}
            />

            <button
              className="btn btn-dark"
              onClick={() => this.returnRental()}
              style={returnBtnStyle}
            >
              Return
            </button>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReturnRental: (rental_id, address_info) => {
      dispatch(deleteRental(rental_id, address_info));
      notifyReturnSucceed();
    }
  };
};
var returnBtnStyle = {
  marginTop: 20
};
const mainContainerStyle = {
  maxWidth: 600,
  padding: 20,
  marginTop: 20
};
export default connect(
  null,
  mapDispatchToProps
)(Return);
