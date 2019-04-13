import React, { Component } from "react";
import NavBar from "../components/navbar";
import "./rent.cs";
class Rent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment className="bg-dark">
        <NavBar />
        <h1>RENT</h1>
      </React.Fragment>
    );
  }
}

export default Rent;
