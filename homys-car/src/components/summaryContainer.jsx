import React, { Component } from "react";

class SummaryContainer extends Component {
  state = {
    car: this.props.car
  };
  showDetail = (label, detail, width, isImportant) => {
    var className = "col-sm-" + width + " detail-col text-capitalize";
    if (isImportant) className += " text-success  font-weight-bold";
    return (
      <div className={className}>
        <h4>{label}</h4>
        {detail}
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className="detail-container col-md-7 rounded-right shadow ">
          <img
            src={this.state.car.carImgURL}
            className="thumbnail-img shadow-lg"
          />
          <div className=" container-fuild summary-container bg-light rounded-right ">
            <h1 className="font-weight-bold">Summary</h1>
            <h2>
              {this.state.car.make} {this.state.car.model} {this.state.car.year}
            </h2>
            <p>
              {this.state.car.address}
              <br />
              {this.state.car.distance} away
            </p>
            <p />
            <div className="more-details-container text-left">
              <div className="row detail-row">
                {this.showDetail("Body Type", this.state.car.body, 7)}
                {this.showDetail("Tranmission", this.state.car.transmission, 5)}
              </div>
              <div className="row detail-row ">
                {this.showDetail("Rego No:", this.state.car.rego, 7)}
                {this.showDetail(
                  "Pricing",
                  this.state.car.price + "$/h",
                  5,
                  true
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SummaryContainer;
