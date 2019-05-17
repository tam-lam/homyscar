import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCarsWithDist , fetchCars } from "../store/actions/carActions";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./Map";
import {
  saveSelectedCarDistanceInStore,
  saveSelectedCarInStore
} from "../store/actions/carActions";
import { isEmpty } from "../util/validationHelpers";
import { saveUserLocation } from "../store/actions/locationActions";
class MapContainer extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
    cars: []
  };

  componentWillMount() {
    //this.props.fetchCarsWithDist();
    //this.props.fetchCars();
  }
  render() {
    const markers = this.props.cars.map(item => (
      <Marker
        key={item.car._id}
        position={{
          lat: item.car.lat,
          lng: item.car.lng
        }}
        onClick={() => {
          this.props.saveSelectedCarInStore(
            JSON.parse(JSON.stringify(item.car))
          );
          this.props.saveSelectedCarDistanceInStore(
            JSON.parse(JSON.stringify(item.distance)).text
          );
          this.props.onShowDetail();
        }}
      />
    ));

    return (
      <CurrentLocation
        centerAroundCurrentLocation
        saveUserLocation={this.props.saveUserLocation}
        google={this.props.google}
      >
        {markers}
        {this.displayUserMaker()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }

  displayUserMaker = () => {
    if (!isEmpty(this.props.userLocation)) {
      var { lat, lng } = this.props.userLocation;
      if (lat !== 0 && lng !== 0) {
        return (
          <Marker
            position={{
              lat: lat,
              lng: lng
            }}
            onClick={this.onMarkerClick}
            name={"Your location"}
          />
        );
      }
    }
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
}

MapContainer.propTypes = {
  //fetchCarsWithDist: PropTypes.func.isRequired,
  cars: PropTypes.array.isRequired,
  fetchCars: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cars: state.cars.items,
  userLocation: state.location.userLocation
});

export default connect(
  mapStateToProps,
  {
   // fetchCarsWithDist,
    fetchCars,
    saveSelectedCarDistanceInStore,
    saveSelectedCarInStore,
    saveUserLocation
  }
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyDEFtWHf9PNwDPk74kYTMLpYzDg8WB7n7Y"
  })(MapContainer)
);
