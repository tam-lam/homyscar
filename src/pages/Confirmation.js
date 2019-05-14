import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchConfirmations } from '../store/actions/confirmationActions'


class Confirmation extends Component{

  state = {
    confirmations: []
  }


  static propTypes = {
    auth: PropTypes.object.isRequired
  };


  componentWillUpdate(){
    alert('component updating')
    if ( this.props.currentUser){
      const auth = this.props
      alert(this.props.currentUser )
      console.log('confirmation id from confirmation page' , this.props.currentUser._id )
      this.props.getConfirmations(this.props.currentUser._id)
    }
  }
 
render(){
     
return (

  <React.Fragment>
    <NavBar />
     <p>List of Confirmations</p>
    <Footer />
  </React.Fragment>

    );
  }      
}

function mapPropsToState(state){
  return(
    {
      currentUser: state.auth.user,
      auth: state.auth
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