import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import MapContainer from "../components/mapContainer";
import DetailModal from "../components/detailModal";
import "./home.css";
import CarList from "../components/carList";
import axios from "axios";

class Home extends Component {
  state = {
    modalShow: false,
    cars: []
  };
  // componentDidMount() {
  //   axios.get("http://localhost:3001/getcarswithdistance").then(res => {
  //     var tempArray = [];
  //     for (var i = 0; i < res.data.length; i++) {
  //       tempArray.push(res.data[i]);
  //     }

  //     this.setState(state => {
  //       return { cars: tempArray };
  //     });
  //   });
  // }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let modalShow = () => this.setState({ modalShow: true });
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron
          title="Rent now"
          subtitle='Homy&apos;s car is one of the easiest and fastest car rental service in the world. Simply click on "Get my location"  and select a vehicle near by and start renting '
        />
        <DetailModal show={this.state.modalShow} onHide={modalClose} />
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-lg-7 nopadding my-col order-lg-2 mapContainer">
              <MapContainer onShowDetail={modalShow} />
            </div>
            <div className="col-lg-5 order-lg-1 nopadding my-col">
              <div className="container-fluid shadow-lg bg-dark ">
                <CarList onShowDetail={modalShow} />
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
