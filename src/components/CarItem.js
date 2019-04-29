import React, { Component } from "react";
import caricon from "../images/car-icon.png";
import {
  saveSelectedCarInStore,
  saveSelectedCarDistanceInStore
} from "../store/actions/carActions";
import { connect } from "react-redux";
class CarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: this.props.car.make,
      rego: props.car.rego,
      model: this.props.car.model,
      year: this.props.car.year,
      body: this.props.car.body,
      price: this.props.car.price,
      address: this.props.car.address,

      lat: props.lat,
      lng: props.lng,
      distance: this.props.distance.text
    };
  }

  render() {
    return (
      <React.Fragment>
        <li class="list-group-item bg-dark text-white">
          <img
            src={caricon}
            className="img-thumbnail float-left rounded"
            alt="car icon"
          />
          {this.state.make} {this.state.model} {this.state.year}
          <br />
          {this.state.address}
          <button
            type="button"
            className="btn btn-outline-light shadow-lg float-right"
            onClick={() => {
              this.props.saveSelectedCarInStore(this.props.car);
              this.props.saveSelectedCarDistanceInStore(this.state.distance);
              this.props.onShowDetail();
            }}
          >
            Details
          </button>
          <br /> {this.state.distance} away | ${this.state.price}/h
          <br />
          <br />
        </li>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { saveSelectedCarInStore, saveSelectedCarDistanceInStore }
)(CarItem);
