import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import MapContainer from "../components/mapContainer";
import DetailModal from "../components/detailModal";
import "./home.css";
import CarList from "../components/carList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    let modalShow = (car, distance) => {
      this.setState({
        modalShow: true,
        make: car.make,
        model: car.model,
        year: car.year,
        rego: car.rego,
        body: car.body,
        tranmission: car.tranmission,
        address: car.address,
        price: car.price,
        distance: distance
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
        <DetailModal
          show={this.state.modalShow}
          onHide={modalClose}
          make={this.state.make}
          model={this.state.model}
          year={this.state.year}
          rego={this.state.rego}
          body={this.state.body}
          tranmission={this.state.tranmission}
          address={this.state.address}
          price={this.state.price}
          distance={this.state.distance}
        />
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
