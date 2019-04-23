import React, { Component } from "react";
class Alert extends Component {
  static emptyFieldMessage = "All fields cannot be blank!";
  static isThereEmptyField = obj => {
    for (var o in obj) if (obj[o] === "" || obj[o] === null) return true;
    return false;
  };
  render() {
    return (
      <div class="alert alert-light text-dark" role="alert">
        {this.props.errorMessage}
      </div>
    );
  }
}

export default Alert;
