import React, { Component } from 'react';
import queryString from 'query-string';


export default class Paypal extends Component {

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