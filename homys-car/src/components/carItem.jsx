import React, { Component } from "react";
import caricon from "../images/car-icon.png";

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
      lat: props.lat,
      lng: props.lng,
      distance: this.props.distance.text
    };
  }

  render() {
    return (
      <React.Fragment>
        <li class="list-group-item bg-dark text-white">
          <img src={caricon} className="img-thumbnail float-left rounded" />
          {this.state.make} {this.state.model} {this.state.body}{" "}
          {this.state.year}
          <br />
          Rego: {this.state.rego}
          <button
            type="button"
            className="btn btn-outline-light shadow-lg float-right"
            onClick={() =>
              this.props.onShowDetail(
                this.state.make,
                this.state.model,
                this.state.year,
                this.state.rego,
                this.state.body,
                this.props.car.tranmission,
                this.props.car.address,
                this.state.price,
                this.state.distance
              )
            }
          >
            Details
          </button>
          <br /> {this.state.distance} ${this.state.price}/h
          <br />
          <br />
        </li>
      </React.Fragment>
    );
  }
}

export default CarItem;
