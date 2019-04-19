import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "../images/icon-black.png";
import "./navbar.css";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
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
              <h2 className="d-none d-lg-block my-h2">
                &nbsp;&nbsp;/&nbsp;&nbsp;
              </h2>

              <Link className="nav-item nav-link" to="/signin">
                SIGN IN
              </Link>
              <h2 className="d-none d-lg-block my-h2">
                &nbsp;&nbsp;/&nbsp;&nbsp;
              </h2>
              <Link className="nav-item nav-link" to="/signup">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
