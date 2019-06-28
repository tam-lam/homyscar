import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import SimplePageTitle from "../components/SimplePageTitle";
import RightArrowBtn from "../components/RightArrowBtn";
import Alert from "../components/Alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../store/actions/authActions";
import { clearErrors } from "../store/actions/errorActions";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    dateOfBirth: "",
    licenseNo: "",
    firstName: "",
    lastName: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { username, email, password, dateOfBirth, licenseNo, firstName, lastName } = this.state;

    // Create a user object
    const newUser = {
      username,
      email,
      password,
      dateOfBirth,
      licenseNo,
      firstName,
      lastName
    };

    this.props.register(newUser);
  };

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;

    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // Checking is user is authenticated
    if (isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <SimplePageTitle
          title="Homy's car"
          subtitle="Sign up"
          doShowIcon={true}
        />
        <form onSubmit={this.onSubmit}>
          <div className="container text-light">
            <div className="signup-form-container">
              {this.props.error.id === "REGISTER_FAIL" ? (
                <Alert errorMessage={this.props.error.msg.msg} />
              ) : null}
              <div className="row">
                <div className="col-md-5 signup-auth-form">
                  <label className="font-weight-bold text-light form-label shadow-lg">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Name"
                    className="mb-3"
                    onChange={this.onChange}
                    className="form-control form-input text-light form-control-lg"
                  />
                  <label className="font-weight-bold text-light form-label shadow-lg">
                    First Name
                  </label>
                  <input
                    type="test"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    className="mb-3"
                    onChange={this.onChange}
                    className="form-control form-input text-light form-control-lg"
                  />
                  <label className="font-weight-bold text-light form-label shadow-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="mb-3"
                    onChange={this.onChange}
                    className="form-control form-input text-light form-control-lg"
                  />
                </div>
                <div className="col-md-7 signup-detail-form">
                  <div className="row">
                    <div className="col-12">
                      <label className="font-weight-bold text-light form-label shadow-lg">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="mb-3"
                        onChange={this.onChange}
                        className="form-control form-input text-light form-control-lg"
                      />
                      <label className="font-weight-bold text-light form-label shadow-lg">
                        Last Name
                      </label>
                      <input
                        type="test"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        className="mb-3"
                        onChange={this.onChange}
                        className="form-control form-input text-light form-control-lg"
                      />
                      <label className="font-weight-bold text-light form-label shadow-lg">
                        License Number
                      </label>
                      <input
                        type="number"
                        name="licenseNo"
                        id="licenseNo"
                        placeholder="License Number"
                        className="mb-3"
                        onChange={this.onChange}
                        className="form-control form-input text-light form-control-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 signup-detail-form">
                  <div className="row">
                    <div className="col-12">
                      <label className="font-weight-bold text-light form-label shadow-lg">
                        Date Of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        placeholder="Date Of Birth"
                        className="mb-3"
                        onChange={this.onChange}
                        className="form-control form-input text-light form-control-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <RightArrowBtn />
            </div>
          </div>
        </form>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  // carRego: state.cars.checkoutCar.rego,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(Signup);
