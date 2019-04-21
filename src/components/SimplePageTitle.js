import React, { Component } from "react";
class SimplePageTitle extends Component {
  render() {
    return (
      <div className="title-container text-center text-light">
        <h1 className="text-light display-3 checkout-label">
          {this.props.title}
        </h1>
        <p className="display-4 ">{this.props.subtitle}</p>
      </div>
    );
  }
}

export default SimplePageTitle;
