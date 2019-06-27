import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import {connect} from 'react-redux';
import {fetchAllCars , deleteCar} from '../store/actions/carActions';
import {Link} from 'react-router-dom';

class CarTable extends Component{
    constructor() {
        super()
        this.state = {
          data: [],
          isDeleted: false,
        }
      }
      componentWillMount() {
        this.props.getCarsFromServer()
      }

      deleteCard = (car_id) => {
        this.props.onDeleteCar(car_id)
    }

    render(){ 
      const {isDeleted} = this.state
      const carTable = this.props.cars.map(car => 
      (
        <tr>
          <td>{car._id}  </td>
          <td>{car.rego} </td>
          <td>{car.make} </td>
          <td>{car.model}</td>
          <td>{car.year} </td>
          <td>{car.body} </td>
          <td>{car.transmission} </td>
          <td>{car.address} </td>
          <td>{car.price}</td>
          <td>{car.availability.toString()}</td>
          <td>{car.damaged.toString()}</td>
          <td>
            <Link to={{ pathname: '/editcarform', car_to_be_edited: car }} style={{color: '#007bff'}}>Update</Link>
            <br/>
            <button  style={{color: '#ff0000'}} onClick={() => this.deleteCard(car._id)}>Delete Car</button>
          </td>
      </tr>
      )
      );

    return(
      
        <div className="table">
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                  <th>ID</th>
                  <th>Registration </th>
                  <th>Make </th>
                  <th>Model </th>
                  <th>Year</th> 
                  <th>Body </th> 
                  <th>Transmission </th>  
                  <th>Location address </th>  
                  <th>Price per hour</th>
                  <th>Availability</th>
                  <th>Damaged?</th>      
                </tr>
            </thead>

            <tbody>
              {carTable}
            </tbody>
      </Table>
      </div>

    );

}
}

const mapDispatchToProps = dispatch => {

  return {
    getCarsFromServer: () => {
        dispatch(fetchAllCars())
    },
    onDeleteCar: (car_id) => {
      dispatch(deleteCar(car_id))
    }
  }
}

function mapStateToProps(state){
  return {
    cars: state.cars.allCars
  }
}

export default connect(mapStateToProps , mapDispatchToProps) (CarTable);