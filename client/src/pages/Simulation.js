import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailModal from "../components/DetailModal";
import CurrentLocation from "../components/Map";
import SimulationMap from "../components/SimulationMap"


class Simulation extends Component {


  render() {


    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-lg-7 nopadding my-col order-lg-2 mapContainer">
            <SimulationMap />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}



export default Simulation;
