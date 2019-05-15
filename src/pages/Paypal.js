import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import queryString from 'query-string';
import { savePaymentInfo } from '../store/actions/paymentActions'


class Paypal extends Component {

  static propTypes = {
    savePaymentInfo: PropTypes.func.isRequired
  };

  componentWillMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    
    const user_id = "MY USER ID";
    const paymentId = params['paymentId']; 
    const payerId = params['PayerID'];

    if ( paymentId && payerId && user_id )
      this.props.savePaymentInfo(user_id, paymentId, payerId);
    else 
      console.log("no payment INFO provided")
  }

  render() {
    let url = this.props.location.search;
    let params = queryString.parse(url);

    return (
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

export default connect(
  null,
  { savePaymentInfo }
)(Paypal);