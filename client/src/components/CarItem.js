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
        <li className="list-group-item bg-dark text-white">
          <div className="row">
            <div className="col float-left" style={iconStyle}>
              <img
                src={caricon}
                className="img-thumbnail rounded"
                alt="car icon"
              />
            </div>
            <div className="col float-left">
              {this.state.make} {this.state.model} {this.state.year}
              <br />
              {this.state.address}
              <button
                style={detailsBtnStyle}
                type="button"
                className="btn btn-outline-light shadow-lg float-right"
                onClick={() => {
                  this.props.saveSelectedCarInStore(this.props.car);
                  this.props.saveSelectedCarDistanceInStore(
                    this.state.distance
                  );
                  this.props.onShowDetail();
                }}
              >
                Details
              </button>
              <br /> {this.state.distance} away | ${this.state.price}/h
              <br />
              <br />
            </div>
            {/* <div className="col-sm-1" /> */}
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { saveSelectedCarInStore, saveSelectedCarDistanceInStore }
)(CarItem);
var iconStyle = {
  maxWidth: 100
};
var detailsBtnStyle = {
  marginLeft: 10,
  marginTop: 10
};
