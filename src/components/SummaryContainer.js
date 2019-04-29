import React, { Component } from "react";
import { connect } from "react-redux";

class SummaryContainer extends Component {
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
    var carImgURL = "/images/" + this.props.car.rego + ".jpg";

    return (
      <React.Fragment>
        <div className="detail-container col-lg-7 rounded-right shadow ">
          <img src={carImgURL} className="thumbnail-img shadow-lg" />
          <div className=" container-fuild summary-container bg-light rounded-right ">
            <h1 className="font-weight-bold">Summary</h1>
            <h2>
              {this.props.car.make} {this.props.car.model} {this.props.car.year}
            </h2>
            <p>
              {this.props.car.address}
              <br />
              {this.props.distance} away
            </p>
            <p />
            <div className="more-details-container text-left">
              <div className="row detail-row">
                {this.showDetail("Body Type", this.props.car.body, 7)}
                {this.showDetail("Tranmission", this.props.car.transmission, 5)}
              </div>
              <div className="row detail-row ">
                {this.showDetail("Rego No:", this.props.car.rego, 7)}
                {this.showDetail(
                  "Pricing",
                  this.props.car.price + "$/h",
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
const mapStateToProps = state => ({
  car: state.cars.selectedCar,
  distance: state.cars.selectedCarDistance
});
export default connect(
  mapStateToProps,
  {}
)(SummaryContainer);
