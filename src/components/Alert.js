import React, { Component } from "react";
class Alert extends Component {
  render() {
    return (
      <div class="alert alert-light text-dark" role="alert">
        {this.props.errorMessage}
      </div>
    );
  }
}

export default Alert;
