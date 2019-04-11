import React, { Component } from "react";
import caricon from "../images/car-icon.png";

class CarItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      car: this.props.car,
      rego: props.rego,
      lat: props.lat,
      lng: props.lng

    };

  }



  render() {
    return (
      <React.Fragment>
        <li class="list-group-item bg-dark text-white">
          <img src={caricon} className="img-thumbnail float-left rounded" />
          ModelString Year MakeString BodyString
          <br />
         <p> Rego: {this.state.rego} </p>
          car: {this.state.car}
          <button
            type="button"
            className="btn btn-outline-light shadow-lg float-right"
          >
            Detail
          </button>
          <br /> 1km $price
        </li>
      </React.Fragment>
    );
  }
}

export default CarItem;
