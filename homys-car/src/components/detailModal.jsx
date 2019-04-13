import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./detailModal.css";
import icon from "../images/icon-black.png";

class DetailModal extends Component {
  state = {};
  render() {
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
                <img src={icon} className=" car-img shadow rounded-circle " />
                <h3 className="font-weight-bold text-capitalize">
                  {this.props.make} {this.props.model} {this.props.year}
                </h3>
                <p>
                  {this.props.address}
                  <br /> {this.props.distance} away
                </p>
                <div className="more-details-container text-left ">
                  <div className="row detail-row">
                    <div className="col-md-7 detail-col text-capitalize">
                      <h4>Body Type</h4>
                      {this.props.body}
                    </div>
                    <div className="col-md-5 detail-col text-capitalize">
                      <h4>Tranmission</h4>
                      {this.props.transmission}
                    </div>
                  </div>
                  <div className="row detail-row ">
                    <div className="col-md-7 detail-col text-capitalizel">
                      <h4>Rego No:</h4>
                      {this.props.rego}
                    </div>
                    <div className="col-md-5 detail-col bg-light text-success rounded ">
                      <h4>Pricing:</h4>
                      {this.props.price}$/h
                    </div>
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
