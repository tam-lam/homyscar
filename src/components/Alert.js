import React, { Component } from "react";
class Alert extends Component {
  static emptyFieldMessage = "All fields cannot be blank!";

  render() {
    return (
      <div class="alert alert-light text-dark" role="alert">
        {this.props.errorMessage}
      </div>
    );
  }
}

export default Alert;
