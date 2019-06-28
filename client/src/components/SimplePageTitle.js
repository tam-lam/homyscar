import React, { Component } from "react";
import icon from "../images/icon-white.png";

class SimplePageTitle extends Component {
  showIcon = () => {
    if (this.props.doShowIcon) {
      return (
        <img
          style={styles().iconImgStyle}
          src={icon}
          className="img-thumbnail"
          alt="thumbnail"
        />
      );
    }
  };
  render() {
    return (
      <div className="title-container text-center text-light">
        <h1
          style={styles().titleStyle}
          className="text-light display-3 checkout-label"
        >
          {this.showIcon()}
          {this.props.title}
        </h1>
        <p style={styles().subtitleStyle} className="display-4 ">
          {this.props.subtitle}
        </p>
      </div>
    );
  }
}
var minStyles = {
  titleStyle: {
    fontSize: "3.5em"
  },
  iconImgStyle: {
    maxWidth: 80
  },
  list: {
    marginLeft: 0,
    paddingLeft: 0
  },
  subtitleStyle: {
    fontSize: "1.5em",
    margin: 5
  }
};
var maxStyles = {
  titleStyle: {
    // fontSize: "5em"
  },
  iconImgStyle: {
    maxWidth: 100
  },
  list: {}
};
var styles = function() {
  if (window.innerWidth <= 415) {
    return minStyles;
  }
  return maxStyles;
};

export default SimplePageTitle;
