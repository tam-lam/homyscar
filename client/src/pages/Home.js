import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MapContainer from "../components/MapContainer";
import DetailModal from "../components/DetailModal";
import CarList from "../components/CarList";
import { isEmpty } from "../util/validationHelpers";
import { connect } from "react-redux";
import { fetchCars } from "../store/actions/carActions";
import { Spring } from "react-spring/renderprops";
import CheckoutAlert from "../components/CheckoutAlert";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }

  componentDidMount() {
    this.props.callFetchCars();
  }

  displayAlert = () => {
    if (!isEmpty(this.props.checkoutCar)) {
      return (
        <Spring
          from={{ opacity: 0, marginTop: -5 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 200, duration: 700 }}
        >
          {props => (
            <div style={props}>
              <CheckoutAlert />
            </div>
          )}
        </Spring>
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
        <Jumbotron
          title="Rent now"
          ishomepage={true}
          subtitle="Homy's car is one of the easiest and fastest car rental service in the world. Simply login, select a car nearby and confirm your booking upon arriving at vehicle "
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
