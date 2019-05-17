import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {connect} from 'react-redux';
import { fetchRental } from '../store/actions/rentalActions'


class Rental extends Component{

  componentDidMount(){
  if (this.props.currentUser){
      this.props.onFetchRental(this.props.currentUser._id)
    }
  }
 
render(){

        if ( this.props.rentals !== null){
                alert('confirmations is defined')
                 var rentalItems = this.props.rentals.map(item => 
                <div>
                  <button type="button" onClick={() => {this.props.onAddRental({user_id: item.user_id , car_rego: item.rego})}}>
                   Rental for {item.car_rego }
                  </button>
                </div>
               );      
        }
 

return (

  <React.Fragment>
    <NavBar />
     <p>List of Rentals</p>  
    {rentalItems}

    <Footer />
  </React.Fragment>

    );
  }      
}

function mapPropsToState(state){
  return(
    {
      currentUser: state.auth.user,
      rentals: state.rentals.fetchedRentals
    }
  )
}

const mapDispatchToProps = dispatch => {
  return { 
    onFetchRental: user_id => {
      dispatch(fetchRental(user_id));
    }
  };
};

export default connect(mapPropsToState , mapDispatchToProps)(Rental);