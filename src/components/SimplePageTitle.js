import React, { Component } from "react";
import icon from "../images/icon-white.png";

class SimplePageTitle extends Component {
  showIcon = () => {
    if (this.props.doShowIcon) {
      return <img src={icon} class="img-thumbnail" />;
    }
  };
  render() {
    return (
      <div className="title-container text-center text-light">
        <h1 className="text-light display-3 checkout-label">
          {this.showIcon()}
          {this.props.title}
        </h1>
        <p className="display-4 ">{this.props.subtitle}</p>
      </div>
    );
  }
}

export default SimplePageTitle;
