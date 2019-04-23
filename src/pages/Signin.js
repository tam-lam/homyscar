import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import SimplePageTitle from "../components/SimplePageTitle";
import FormGroup from "../components/FormGroup";
import { userInfo } from "os";
class Signin extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log("on submit");
    let form = event.target;
    console.log("Email VALUE: " + form.elements.email.value);
    console.log("Password VALUE: " + form.elements.password.value);
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SimplePageTitle
          title="Homy's car"
          subtitle="Sign in"
          doShowIcon={true}
        />
        <form onSubmit={this.handleSubmit}>
          <div className="container text-light">
            <div className="form-container">
              <FormGroup
                inputType="email"
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <FormGroup
                inputType="password"
                label="Password"
                name="password"
                placeholder="Enter your password"
              />
              <div className="container text-center simplebox">
                <button type="submit" class="btn form-btn " />
              </div>
            </div>
          </div>
        </form>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Signin;
