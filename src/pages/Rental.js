import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addRental } from '../store/actions/rentalActions'


class Rental extends Component{

  componentDidMount(){
        alert('component updating')
        if (this.props.currentUser){
          alert(this.props.currentUser )
          console.log('confirmation id from confirmation page' , this.props.currentUser._id )
          this.props.getConfirmations(this.props.currentUser._id)
        }
   
  }
 
render(){

        // get confirmations 
       var confirmItems = this.props.confirmations.map(item => (
        <div>
          <button type="button"> Confirm Booking for  {item.confirmation[0].rego}  </button>
        </div>
       ));

return (

  <React.Fragment>
    <NavBar />
     <p>List of Confirmations</p>  
    {confirmItems}

    <Footer />
  </React.Fragment>

    );
  }      
}

function mapPropsToState(state){
  return(
    {
      currentUser: state.auth.user,
      confirmations: state.confirmations.recievedConfirmations
    }
  )
}

const mapDispatchToProps = dispatch => {
  return { 
    getConfirmations: rental => {
      dispatch(addRental(rental));
    }
  };
};

export default connect(mapPropsToState , mapDispatchToProps)(Confirmation);