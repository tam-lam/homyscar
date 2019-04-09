import React, { Component } from "react";
import "./carList.css";
import CarItem from "./carItem";
import axios from 'axios';
class CarList extends Component {
  state = {
    cars: {}
  };


  componentDidMount() {
    axios.get('http://localhost:3001/cars').then(res => {

        let products = res.data;
        this.setState({cars: products});    
      })  
  }
  render() {

    var carItems = [];
    for ( var i = 0 ; i < this.state.cars.length ; i++){
      carItems.push(
          <CarItem car={this.state.cars[i].car} rego={this.state.cars[i].rego} />
        )
    }

    return (
      <React.Fragment>
        <ul class="list-group  my-list-group bg-dark list-group-flush ">
          {/* <CarItem />
          <CarItem /> */}
          {carItems}
        </ul>
      </React.Fragment>
    );
  }
}

export default CarList;
