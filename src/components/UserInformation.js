import React, { Component } from "react";
import UserDetail from "../components/UserDetail";
import { connect } from "react-redux";

class UserInformation extends Component {
  render() {
    const {
      userName,
      id,
      email,
      firstName,
      lastName,
      license,
      dateOfBirth
    } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="account-detail-container shadow-lg bg-dark col-md-6">
            <h1>Account Details</h1>
            <UserDetail title="Username" content={userName} />
            <UserDetail title="User ID" content={id} />
            <UserDetail title="Email" content={email} />
          </div>
          <div className="account-detail-container shadow-lg bg-dark col-md-4">
            <h1>Personal Details</h1>
            <UserDetail title="First name" content={firstName} />
            <UserDetail title="Last name" content={lastName} />
          </div>
        </div>
        <div className="row">
          <div className="account-detail-container shadow-lg bg-dark col-md-5">
            <h1>License Detail</h1>
            <UserDetail title="License number" content={license} />
            <UserDetail title="Date of birth" content={dateOfBirth} />
          </div>
          <div className="account-detail-container d-sm-block col-md-4 ">
            <h1 className="rounded shadow-lg">User information</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userName: "Ten fwaklj",
  id: 1234,
  email: "Ten@gmail.com",
  firstName: "Ten",
  lastName: "Sfafafw",
  license: "ACB22445579",
  dateOfBirth: "01/01/2000"
});

export default connect(
  mapStateToProps,
  {}
)(UserInformation);
