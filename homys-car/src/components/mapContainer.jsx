import React, { Component } from "react";
import axios from "axios";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./map";

const mapStyles = {
  width: "100%",
  height: "100%"
};
class MapContainer extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
    cars: []
  };

  componentWillMount() {
    axios.get("http://localhost:3001/getcarswithdistance").then(res => {
      var tempArray = [];
      for (var i = 0; i < res.data.length; i++) {
        tempArray.push(res.data[i]);
      }

      this.setState(state => {
        return { cars: tempArray };
      });
    });
  }

  render() {
    var markers = [];
    // console.log("car" + this.state.cars);
    for (var i = 0; i < this.state.cars.length; i++) {
      const carItem = this.state.cars[i].car;
      const distance = this.state.cars[i].distance.text;
      markers.push(
        // console.log("car value" + this.state.cars[i].car.lat),

        <Marker
          position={{
            lat: this.state.cars[i].car.lat,
            lng: this.state.cars[i].car.lng
          }}
          onClick={() =>
            this.props.onShowDetail(
              carItem.make,
              carItem.model,
              carItem.year,
              carItem.rego,
              carItem.body,
              carItem.tranmission,
              carItem.address,
              carItem.price,
              distance
            )
          }
        />
      );
    }
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyDEFtWHf9PNwDPk74kYTMLpYzDg8WB7n7Y"
})(MapContainer);
