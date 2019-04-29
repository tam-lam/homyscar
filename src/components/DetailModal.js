import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class DetailModal extends Component {
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
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title className="modal-title">Details</Modal.Title>
          </Modal.Header>
          <Modal.Body closeButton>
            <div className="container ">
              <div className=" detailContainer text-center ">
                <img
                  src={carImgURL}
                  className=" car-img bg-dark shadow rounded-circle "
                  alt="carimage"
                />
                <h3 className="font-weight-bold text-capitalize">
                  {this.props.car.make} {this.props.car.model}{" "}
                  {this.props.car.year}
                </h3>
                <p>
                  {this.props.car.address}
                  <br /> {this.props.distance} away
                </p>
                <div className="more-details-container text-left ">
                  <div className="row detail-row">
                    {this.showDetail("Body Type", this.props.car.body, 7)}
                    {this.showDetail(
                      "Tranmission",
                      this.props.car.transmission,
                      5
                    )}
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
          </Modal.Body>
          <Modal.Footer className="bg-success modal-footer shadow-lg">
            <Link
              className="btn btn-block rent-btn bg-success text-light shadow-lg"
              to={{
                pathname: "/checkout"
              }}
            >
              Rent now
            </Link>
          </Modal.Footer>
        </Modal>
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
)(DetailModal);
