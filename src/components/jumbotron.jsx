import React, { Component } from "react";
import "./jumbotron.css";
class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fuild shadow-lg">
        <div className="container">
          <h1 className="display-3 shadow-lg">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>
          <button type="button" class="btn btn-success shadow-lg">
            Get my location
          </button>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
