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
        <li
          className="list-group-item bg-dark text-white"
          style={styles().list}
        >
          <div className="row">
            <div className="col float-left" style={styles().iconStyle}>
              <img
                src={caricon}
                className="img-thumbnail rounded"
                alt="car icon"
                style={styles().iconImgStyle}
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

var detailsBtnStyle = {
  marginLeft: 10,
  marginTop: 10
};

var minStyles = {
  iconStyle: {
    maxWidth: 70
  },
  iconImgStyle: {
    maxWidth: 70
  },
  list: {
    marginLeft: 0,
    paddingLeft: 0
  }
};
var maxStyles = {
  iconStyle: {
    maxWidth: 100
  },
  iconImgStyle: {
    maxWidth: 100
  }
};
var styles = function() {
  if (window.innerWidth <= 415) {
    return minStyles;
  }
  return maxStyles;
};
