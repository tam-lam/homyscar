import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { notifyReturnSucceed } from "./ToastContent";
import UserDetail from "../components/UserDetail";

class ReturnModal extends Component {
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
            <Modal.Title className="modal-title">Return</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container text-center">
              <div>
                <h1 className="display-3 font-weight-bold">Total</h1>

                <h1 className="display-3 font-weight-bold">$123</h1>
                <p>Rent by Test</p>
              </div>

              <div className="text-left">
                <div className="row">
                  <div className="col-lg-6">
                    <UserDetail title="Total Time" content="123h" />
                  </div>
                  <div className="col-lg-6">
                    <UserDetail title="Pricing" content="12$/h" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <UserDetail title="Booking date" content="1214" />
                  </div>
                  <div className="col-lg-6">
                    <UserDetail title="Booking Time" content="1214" />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-success modal-footer shadow-lg">
            <Link
              className="btn btn-block rent-btn bg-success text-light shadow-lg"
              to={{
                pathname: "/"
              }}
              onClick={() => {
                notifyReturnSucceed();
              }}
            >
              Return
            </Link>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ReturnModal;
