import React, { Component } from "react";
import { connect } from "react-redux";

class RentalHistory extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>
          <strong>Rental details:</strong>
        </h1>
        <div className="h">
          <hr />
        </div>
        <h4>2019/04/12</h4>
        <p>rent: car tye: #3455667 AU$36/h</p>
        <h4>2019/04/13</h4>
        <p>rent: car tye: #3455667 AU$36/h</p>
        <h4>2019/04/14</h4>
        <p>rent: car tye: #3455667 AU$36/h</p>
        <h4>2019/04/16</h4>
        <p>rent: car tye: #3455667 AU$36/h</p>
        <h4>2019/04/15</h4>
        <p>rent: car tye: #3455667 AU$36/h</p>
        <h4>2019/04/12</h4>
        <p>rent: car tye: #3455667 AU$36/h</p>
        <h4>2019/04/12</h4>
        <p>rent: car tye: #3455667 AU$36/h</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  {}
)(RentalHistory);
