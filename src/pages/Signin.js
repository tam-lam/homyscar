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
        <SimplePageTitle title="Homy's car" doShowIcon={true} />

        <div className="container text-light">
          <div className="form-container">
            <div class="form-group">
              <label
                for="emailInput"
                className="font-weight-bold text-light form-label"
              >
                Email
              </label>

              <input
                type="email"
                class="form-control form-input text-light form-control-lg"
                id="emailInput"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
              />
            </div>
            <div class="form-group">
              <label
                for="passwordInput"
                className="font-weight-bold text-light form-label"
              >
                Password
              </label>

              <input
                type="password"
                class="form-control form-input text-light form-control-lg"
                id="passwordInput"
                placeholder="Enter your password"
              />
            </div>
            <div className="container text-center simplebox">
              <button type="submit" class="btn form-btn " />
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Signin;
