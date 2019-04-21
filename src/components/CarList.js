import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchCarsWithDist} from '../store/actions/carActions'
import CarItem from "./CarItem";


class CarList extends Component {

  componentWillMount() {
    this.props.fetchCarsWithDist();
  }

  render() {


    const carItems = this.props.cars.map(item => (
      <CarItem
        car={item.car}
        distance={item.distance}
        onShowDetail={this.props.onShowDetail}
      />
    ))

    return (
      <React.Fragment>
        <ul class="list-group  my-list-group bg-dark list-group-flush ">
          {carItems}
        </ul>
      </React.Fragment>
    );
  }
}

CarList.propTypes = {
  fetchCarsWithDist: PropTypes.func.isRequired,
  cars: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  cars: state.cars.items
})

export default connect(mapStateToProps, { fetchCarsWithDist } )(CarList);
