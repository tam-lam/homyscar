import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MapContainer from "../components/MapContainer";
import DetailModal from "../components/DetailModal";
import CarList from "../components/CarList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    let modalShow = () => {
      this.setState({
        modalShow: true
      });
    };
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron
          title="Rent now"
          ishomepage={true}
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
