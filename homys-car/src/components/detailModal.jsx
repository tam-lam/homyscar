import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./detailModal.css";
import icon from "../images/icon-black.png";

class DetailModal extends Component {
  state = {
    // make: this.props.car.make
  };
  render() {
    console.log("MODAL props:" + this.props.make);
    console.log("MODAL make:" + this.state.make);

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
            <div className="container">
              <div className=" detailContainer text-center ">
                <img src={icon} className=" car-img shadow rounded-circle " />
                <h4>
                  {this.props.make} {this.props.model} {this.props.body}{" "}
                  {this.props.year}
                </h4>
                <p>
                  {this.props.address}
                  <br />
                  Rego: {this.props.rego}
                  {/* {this.state.car.make} */}
                  <br /> {this.props.distance} away, {this.props.price}$/h
                </p>
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
