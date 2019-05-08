import React, { Component } from 'react';
import axios from 'axios';
import CarIT from './CarIT';

class Cars extends Component{
  constructor(){
    super();
    this.state = {
      cars: []
    }
  }

  componentWillMount(){
    this.getCars();
  }

  getCars(){
    axios.get('http://localhost:3001/car')
      .then(response => {
        this.setState({cars: response.data}, () => {
          console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    const carItems = this.state.cars.map((car, i) => {
      return(
        <CarIT key={car._id} item={car} />
      )
    })
    return (
      <div className="text-light bg-dark">
        <h1>Cars</h1>
        <ul className="collection">
          {carItems}

        </ul>
      </div>
    )
  }
}

export default Cars;