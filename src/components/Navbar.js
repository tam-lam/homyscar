import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon-black.png";
import { connect } from "react-redux";
import { logout } from "../store/actions/authActions";
import PropTypes from "prop-types";

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
              <h2 className="d-none d-lg-block my-h2">
                &nbsp;&nbsp;/&nbsp;&nbsp;
              </h2>
              <Link className="nav-item nav-link" to="/about">
                ABOUT
              </Link>

              {this.displayAuthLink(this.props.isAuthenticated)}
            </div>
          </div>
        </div>
      </nav>
    );
  }
  displayAuthLink = isAuthenticated => {
    if (isAuthenticated) {
      return (
        <React.Fragment>
          <h2 className="d-none d-lg-block my-h2">&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
          <Link
            className="nav-item nav-link"
            onClick={this.props.logout}
            to="/"
          >
            {" "}
            LOGOUT
          </Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {" "}
          <h2 className="d-none d-lg-block my-h2">&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
          <Link className="nav-item nav-link" to="/signin">
            SIGN IN
          </Link>
          <h2 className="d-none d-lg-block my-h2">&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
          <Link className="nav-item nav-link" to="/signup">
            SIGN UP
          </Link>
        </React.Fragment>
      );
    }
  };
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
