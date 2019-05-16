import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchConfirmations } from '../store/actions/confirmationActions'
import { addRental } from '../store/actions/rentalActions'


class Confirmation extends Component{

        state = {
                confirmationItems: []
        }
  componentDidMount(){
        alert('component updating')
        if (this.props.currentUser){
          alert(this.props.currentUser )
          console.log('confirmation id from confirmation page' , this.props.currentUser._id )
          this.props.getConfirmations(this.props.currentUser._id)
        }

   
  }
  
  componentDidUpdate(){

  
  }
 
render(){

        // get confirmations 
 
        if ( this.props.confirmations !== null){
                alert('confirmations is defined')
                 var confirmItems = this.props.confirmations.confirmation.map(item => 
                <div>
                  <button type="button" onClick={() => {this.props.onAddRental({user_id: item.user_id , car_rego: item.rego})}}>
                   Confirm Booking for  {item.rego }
                     </button>
                </div>
               );      
        //        this.setState({confirmationItems: confirmItems});  
        }

 
       

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
    getConfirmations: user_id => {
      dispatch(fetchConfirmations(user_id));
    } ,
    onAddRental: rental => {
        dispatch(addRental(rental));      }
  };
};

export default connect(mapPropsToState , mapDispatchToProps)(Confirmation);