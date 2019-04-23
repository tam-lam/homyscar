import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import SimplePageTitle from "../components/SimplePageTitle";
import FormGroup from "../components/FormGroup";

class Signup extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SimplePageTitle
          title="Homy's car"
          subtitle="Sign up"
          doShowIcon={true}
        />
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default Signup;
