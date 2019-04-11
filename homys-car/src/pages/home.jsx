import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import MapContainer from "../components/mapContainer";
import "./home.css";
import CarList from "../components/carList";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron
          title="Rent now"
          subtitle='Homy&apos;s car is one of the easiest and fastest car rental service in the world. Simply click on "Get my location"  and select a vehicle near by and start renting '
        />
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-lg-7 nopadding my-col order-lg-2 mapContainer">
              <MapContainer />
            </div>
            <div className="col-lg-5 order-lg-1 nopadding my-col">
              <div className="container-fluid shadow-lg bg-dark ">
                <CarList />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
