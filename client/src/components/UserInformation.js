import React, { Component } from "react";
import UserDetail from "./UserDetail";
import { connect } from "react-redux";

class UserInformation extends Component {
  state = {
    username: "",
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    license: "",
    dateOfBirth: ""
  };

  componentDidMount() {
    if (this.props.user) {
      const { id, username, email } = this.props.user;
      this.setState({ id: id, username: username, email: email });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="account-detail-container shadow-lg bg-dark col-md-6">
            <h1>Account Details</h1>
            <UserDetail title="User ID" content={this.state.id} />
            <UserDetail title="Username" content={this.state.username} />
            <UserDetail title="Email" content={this.state.email} />
          </div>
          <div className="account-detail-container shadow-lg bg-dark col-md-4">
            <h1>Personal Details</h1>
            <UserDetail title="First name" content={this.state.firstName} />
            <UserDetail title="Last name" content={this.state.lastName} />
          </div>
        </div>
        <div className="row">
          <div className="account-detail-container shadow-lg bg-dark col-md-5">
            <h1>License Details</h1>
            <UserDetail title="License number" content={this.state.license} />
            <UserDetail
              title="Date of birth"
              content={this.state.dateOfBirth}
            />
          </div>
          <div className="account-detail-container d-none d-md-block col-md-4 ">
            <h1 className="rounded shadow-lg display-3">User information</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(
  mapStateToProps,
  {}
)(UserInformation);