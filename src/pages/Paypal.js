import React, { Component } from 'react';
import queryString from 'query-string';
import {connect} from 'react-redux';
import { addConfirmation } from '../store/actions/confirmationActions';

class Paypal extends Component {



  thiscomponentWillMount(){
    console.log('logging paypal');
    console.log(this.props.currentCar)
  };



  render() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    
    
    return (
      alert(this.props.currentCar),
      <div>
        <h1>Buy a Hat</h1>
        <form action="http://localhost:3001/success" method="get">
          <input type="hidden" name="PayerID" value={params['PayerID']}></input>
          <input type="hidden" name="paymentId" value={params['paymentId']}></input>
          <input type="submit" value="Buy" ></input>
        </form>
      </div>
    )
  }
}

// mapping redux state to this class props
function mapStateToProps(state){
  return {currentCar: state.cars.checkoutCar.rego}
}

const mapDispatchToProps = dispatch => {
  return {
    onAddConfirmation: confirmation => {
      dispatch(addConfirmation(confirmation));
    }
  };
};

export default connect(mapStateToProps , mapDispatchToProps)(Paypal);