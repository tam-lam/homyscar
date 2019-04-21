import React, { Component } from "react";
import CarItem from "./CarItem";
import axios from "axios";
class CarList extends Component {
  state = {
    cars: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/getcarswithdistance").then(res => {
      var tempArray = [];
      for (var i = 0; i < res.data.length; i++) {
        tempArray.push(res.data[i]);
      }

      this.setState(state => {
        return { cars: tempArray };
      });
    });
  }
  render() {
    var carItems = [];
    for (var i = 0; i < this.state.cars.length; i++) {
      carItems.push(
        <CarItem
          car={this.state.cars[i].car}
          distance={this.state.cars[i].distance}
          onShowDetail={this.props.onShowDetail}
        />
      );
    }

    return (
      <React.Fragment>
        <ul class="list-group  my-list-group bg-dark list-group-flush ">
          {carItems}
        </ul>
      </React.Fragment>
    );
  }
}

export default CarList;
