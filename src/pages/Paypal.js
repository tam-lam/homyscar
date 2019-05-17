import React, { Component } from 'react';
import { connect } from "react-redux";
import queryString from 'query-string';
import { savePaymentInfo } from '../store/actions/paymentActions'
import { addConfirmation } from '../store/actions/confirmationActions';


class Paypal extends Component {

  componentWillMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    
    const user_id = "MY USER ID";
    const paymentId = params['paymentId']; 
    const payerId = params['PayerID'];

    if ( paymentId && payerId && user_id )
      this.props.onSavePaymentInfo(user_id, paymentId, payerId);
    else 
      console.log("no payment INFO provided")
  }

  render() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    
    
    return (
      <div>
        <h1>Buy a Hat</h1>
        {/* onSubmit={() => this.props.onAddConfirmation({rego: this.props.currentCar , user_id: this.props.currentUser.user._id})} */}
        <form action="http://localhost:3001/success" method="get" onSubmit={() => this.props.onAddConfirmation({rego: this.props.currentCar , user_id: this.props.currentUser.user._id})} >
          <input type="hidden" name="PayerID" value={params['PayerID']}></input>
          <input type="hidden" name="paymentId" value={params['paymentId']}></input>
          <input type="submit" value="Buy" ></input>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentCar: state.cars.checkoutCar.rego,
    currentUser: state.auth
  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddConfirmation: confirmation => {
      dispatch(addConfirmation(confirmation));
    },
    onSavePaymentInfo: (user_id, paymentId, payerId )=> {
      dispatch(savePaymentInfo(user_id, paymentId, payerId ));
    }
  };
};

export default connect(mapStateToProps , mapDispatchToProps)(Paypal);
