import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon-black.png";
import { connect } from "react-redux";
import { logout } from "../store/actions/authActions";
import PropTypes from "prop-types";
import { deleteCheckoutCar } from "../store/actions/carActions";

class NavBar extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              alt="icon"
              src={icon}
              className="d-inline-block align-top"
              width="30"
              height="30"
            />
            {"  "}
            Homy's car
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link active" to="/">
                HOME <span className="sr-only">(current)</span>
              </Link>

              {this.displayAuthLink(this.props.isAuthenticated, this.props.user)}
            </div>
          </div>
        </div>
      </nav>
    );
  }
  logoutOnClick = () => {
    this.props.deleteCheckoutCar();
    this.props.logout();
  };
  displayAuthLink = (isAuthenticated, user) => {
    if (isAuthenticated) {
      if ( user.isAdmin ){
        return (
          <React.Fragment>
            <h2 className="d-none d-lg-block my-h2">&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
            <Link className="nav-item nav-link active" to="/admin">
              ADMIN CONSOLE
            </Link>
            <h2 className="d-none d-lg-block my-h2">&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
            <Link
              className="nav-item nav-link active"
              onClick={this.logoutOnClick}
              to="/"
            >
              {" "}
              LOGOUT
          </Link>
          </React.Fragment>
        );
      }
      else {
        return (
          <React.Fragment>
            <h2 className="d-none d-lg-block my-h2">&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
            <Link className="nav-item nav-link active" to="/user">
              MY ACCOUNT
          </Link>
            <h2 className="d-none d-lg-block my-h2">&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
            <Link
              className="nav-item nav-link active"
              onClick={this.logoutOnClick}
              to="/"
            >
              {" "}
              LOGOUT
          </Link>
          </React.Fragment>
        );
      }
      
    } else {
      return (
        <React.Fragment>
          {" "}
          <h2 className="d-none d-lg-block my-h2">&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
          <Link className="nav-item nav-link active" to="/signin">
            SIGN IN
          </Link>
          <h2 className="d-none d-lg-block my-h2">&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
          <Link className="nav-item nav-link active" to="/signup">
            SIGN UP
          </Link>
        </React.Fragment>
      );
    }
  };
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});
export default connect(
  mapStateToProps,
  { logout, deleteCheckoutCar }
)(NavBar);
