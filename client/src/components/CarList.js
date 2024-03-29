import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCarsWithDist, fetchCars } from "../store/actions/carActions";
import CarItem from "./CarItem";
import { isEmpty } from "../util/validationHelpers";
import Spinner from "react-bootstrap/Spinner";

class CarList extends Component {
  state = {
    refreshCount: 0
  };
  componentDidUpdate() {
    if (isEmpty(this.props.cars) && this.props.doErrorExist === false) {
      //this.props.fetchCarsWithDist();
      //this.props.fetchCars();
    }
  }
  myTimer = () => {
    if (isEmpty(this.props.cars)) {
      this.forceUpdate();
    }
  };
  componentDidMount() {
    var reloadIntervalId = setInterval(this.myTimer, 5000);
    this.setState({ reloadIntervalId: reloadIntervalId });
    if (!isEmpty(this.props.cars)) {
      clearInterval(this.state.reloadIntervalId);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.doErrorExist !== this.props.doErrorExist &&
      this.state.refreshCount < 20
    ) {
      this.setState({ refreshCount: this.state.refreshCount + 1 });
      console.log("REFRESHING COUNT:" + this.state.refreshCount);
      //this.props.fetchCarsWithDist();
      this.props.fetchCars();
    } else {
      this.setState({
        refreshCount: this.state.refreshCount + 1
      });
    }
  }

  displayFetchingFeedBack = () => {
    if (isEmpty(this.props.cars)) {
      if (this.state.refreshCount >= 20) {
        return (
          <div className="spinner-container text-center text-muted">
            <h1 className="display-1">!</h1>
            <h2 className="font-weight-light ">Network error</h2>
            <p>Please try again</p>
          </div>
        );
      }
      return (
        <div className="spinner-container text-center text-muted">
          <Spinner
            animation="border"
            variant="success"
            className="loading-spinner slow-spin shadow-lg"
          />
          <h2 className="font-weight-light">Loading...</h2>
          <p>
            Usual loading time is 0-5 minutes
            <br />
            Try reloading if this takes too long
          </p>
          <p className="text-left loading-list-container">
            <li>Retriving vehicles</li>
            <li>Calculating distance to vehicles</li>
          </p>
          <br />
        </div>
      );
    }
  };
  render() {
    const carItems = this.props.cars.map(item => (
      <CarItem
        car={item.car}
        distance={item.distance}
        onShowDetail={this.props.onShowDetail}
        key={item.car._id}
      />
    ));

    return (
      <React.Fragment>
        {this.displayFetchingFeedBack()}
        <ul className="list-group  my-list-group bg-dark list-group-flush ">
          {carItems}
        </ul>
      </React.Fragment>
    );
  }
}

// CarList.propTypes = {
//   fetchCarsWithDist: PropTypes.func.isRequired,
//   cars: PropTypes.array.isRequired,
//   fetchCars: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  cars: state.cars.items,
  doErrorExist: state.cars.doErrorExist
});

export default connect(
  mapStateToProps,
  { fetchCarsWithDist, fetchCars }
)(CarList);
