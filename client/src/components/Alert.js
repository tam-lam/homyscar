import React, { Component } from "react";
import warningIcon from "../images/warning.png";
class Alert extends Component {
  render() {
    return (
      <div
        className="alert alert-light warning-alert text-dark shadow-lg"
        role="alert"
      >
        <div className="row">
          <div className="col-1 text-center">
            <img
              className="warning-icon "
              src={warningIcon}
              alt="warning icon"
            />
          </div>
          <div className="col-10">{this.props.errorMessage}</div>
        </div>
      </div>
    );
  }
}

export default Alert;
