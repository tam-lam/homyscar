import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import SimplePageTitle from "../components/SimplePageTitle";
class Signin extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SimplePageTitle title="Sign In" subtitle="" />
        <div className="container text-light">
          <div className="form-container">
            <div class="form-group">
              <input
                type="email"
                class="form-control form-input text-light form-control-lg"
                id="emailInput"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control form-input text-light form-control-lg"
                id="passwordInput"
                placeholder="Enter your password"
              />
            </div>
            <div className="container text-center">
              <button
                type="submit"
                class="btn btn-outline-light btn-lg auth-btn"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Signin;
