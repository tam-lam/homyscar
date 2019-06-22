import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import SimplePageTitle from "../components/SimplePageTitle";
import RightArrowBtn from "../components/RightArrowBtn";
import Alert from "../components/Alert";
import PropTypes from "prop-types";
import { login } from "../store/actions/authActions";
import { clearErrors } from "../store/actions/errorActions";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    // Attemp to login
    this.props.login(user);
  };

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;

    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
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
          subtitle="Sign in"
          doShowIcon={true}
        />
        <form onSubmit={this.onSubmit}>
          <div className="container text-light">
            <div className="signin-form-container">
              {this.props.error.id === "LOGIN_FAIL" ? (
                <Alert errorMessage={this.props.error.msg.msg} />
              ) : null}
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
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Signin);
