import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
const mapStyles = {
  width: "100%",
  height: "100%"
};
class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 1,
          lng: 1
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDEFtWHf9PNwDPk74kYTMLpYzDg8WB7n7Y"
})(MapContainer);
