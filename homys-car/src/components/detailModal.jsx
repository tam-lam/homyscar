import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./detailModal.css";
import icon from "../images/icon-black.png";

class DetailModal extends Component {
  state = {};
  showDetail = (label, detail, width, isImportant) => {
    var className = "col-md-" + width + " detail-col text-capitalize";
    if (isImportant) className += "  bg-light text-success rounded";
    return (
      <div className={className}>
        <h4>{label}</h4>
        {detail}
      </div>
    );
  };
  render() {
    var carImgURL = "/images/" + this.props.rego + ".jpg";
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
                />
                <h3 className="font-weight-bold text-capitalize">
                  {this.props.make} {this.props.model} {this.props.year}
                </h3>
                <p>
                  {this.props.address}
                  <br /> {this.props.distance} away
                </p>
                <div className="more-details-container text-left ">
                  <div className="row detail-row">
                    {this.showDetail("Body Type", this.props.body, 7)}
                    {this.showDetail("Tranmission", this.props.transmission, 5)}
                  </div>
                  <div className="row detail-row ">
                    {this.showDetail("Rego No:", this.props.rego, 7)}
                    {this.showDetail(
                      "Pricing",
                      this.props.price + "$/h",
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
              to="/rent"
            >
              Rent now
            </Link>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
export default DetailModal;
