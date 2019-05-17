import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MapContainer from "../components/MapContainer";
import DetailModal from "../components/DetailModal";
import CarList from "../components/CarList";
import { isEmpty } from "../util/validationHelpers";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCars } from "../store/actions/carActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }

  componentDidMount(){
    this.props.callFetchCars();
  }
  displayAlert = () => {
    if (!isEmpty(this.props.checkoutCar)) {
      return (
        <div
          className="alert alert-light text-dark checkout-alert shadow-lg"
          role="alert"
        >
          <div className="row">
            <div className="col-1 text-center" />

            <div className="col-10 text-dark">
              You selected a vehicle. Please complete or cancle booking in{" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/checkout"
              >
                Checkout
              </Link>{" "}
              page
            </div>
          </div>
        </div>
      );
    }
  };
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
        {this.displayAlert()}

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

const mapDispatchToProps = dispatch => {
  return {
    callFetchCars: () => {
      dispatch(fetchCars());
    }
  };
};
const mapStateToProps = state => ({
  checkoutCar: state.cars.checkoutCar
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
