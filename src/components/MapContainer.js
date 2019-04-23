import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCarsWithDist } from "../store/actions/carActions";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./Map";

class MapContainer extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
    cars: []
  };

  componentWillMount() {
    this.props.fetchCarsWithDist();
  }

  onShowDetail = (car, distance) => {
    car = JSON.stringify(car);
    distance = JSON.stringify(distance);
    var distance = JSON.parse(distance);
    var car = JSON.parse(car);
    this.props.onShowDetail(car, distance.text);
  };
  render() {
    const markers = this.props.cars.map(item => (
      <Marker
        position={{
          lat: item.car.lat,
          lng: item.car.lng
        }}
        onClick={() => this.onShowDetail(item.car, item.distance)}
      />
    ));

    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        {markers}

        <Marker onClick={this.onMarkerClick} name={"current location"} />
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
  fetchCarsWithDist: PropTypes.func.isRequired,
  cars: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cars: state.cars.items
});

export default connect(
  mapStateToProps,
  { fetchCarsWithDist }
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyDEFtWHf9PNwDPk74kYTMLpYzDg8WB7n7Y"
  })(MapContainer)
);
