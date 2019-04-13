import React, { Component } from "react";
import "./jumbotron.css";
class Jumbotron extends Component {
  renderLocationBtn = () => {
    if (this.props.ishomepage) {
      console.log("IS HOMEPAGE:" + this.props.ishomepage);
      return (
        <button type="button" class="btn btn-success shadow-lg">
          Get my location
        </button>
      );
    }
  };
  render() {
    return (
      <div className="jumbotron jumbotron-fuild shadow-lg">
        <div className="container">
          <h1 className="display-3 shadow-lg">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>
          {this.renderLocationBtn()}
        </div>
      </div>
    );
  }
}

export default Jumbotron;
