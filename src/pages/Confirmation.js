import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchConfirmations } from '../store/actions/confirmationActions'


class Confirmation extends Component{

  state = {
    confirmations: [],
    confirmationItems: []
  }

  


  componentWillUpdate(){
   
    alert('component updating')
    if (this.props.currentUser){
      alert(this.props.currentUser )
      console.log('confirmation id from confirmation page' , this.props.currentUser._id )
      this.props.getConfirmations(this.props.currentUser._id)
    }

    if (this.props.confirmations){
      this.state.confirmationItems = this.props.confirmations.map(item => (
        <div>
          <button type="button"> Confirmation </button>
        </div>
       ));
    }

  }
 
render(){

  

 

return (

  <React.Fragment>
    <NavBar />
     <p>List of Confirmations</p>

    
    {this.state.confirmationItems}

    <Footer />
  </React.Fragment>

    );
  }      
}

function mapPropsToState(state){
  return(
    {
      currentUser: state.auth.user,
      confirmations: state.confirmations.rego,
      carRego: state.cars.checkoutCar.rego,
    }
  )
}

const mapDispatchToProps = dispatch => {
  return { 
    getConfirmations: user_id => {
      dispatch(fetchConfirmations(user_id));
    }
  };
};

    
  
export default connect(mapPropsToState , mapDispatchToProps)(Confirmation);