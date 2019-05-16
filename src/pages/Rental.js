import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {connect} from 'react-redux';
import { fetchRental } from '../store/actions/rentalActions'


class Rental extends Component{

  componentDidMount(){
        alert('component updating')
        this.props.onFetchRental(this.props.currentUser._id)
   
  }
 
render(){

 

return (

  <React.Fragment>
    <NavBar />
     <p>List of Rentals</p>  
    {/* {confirmItems} */}

    <Footer />
  </React.Fragment>

    );
  }      
}

function mapPropsToState(state){
  return(
    {
      currentUser: state.auth.user,
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