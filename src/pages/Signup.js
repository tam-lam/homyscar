import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import SimplePageTitle from "../components/SimplePageTitle";
import FormGroup from "../components/FormGroup";
import RightArrowBtn from "../components/RightArrowBtn";

class Signup extends Component {
  state = {};
  handleSubmit = event => {
    event.preventDefault();
    console.log("on submit");
    let form = event.target;
    console.log("Email VALUE: " + form.elements.email.value);
    console.log("Password VALUE: " + form.elements.password.value);
    console.log("firstName VALUE: " + form.elements.firstName.value);
    console.log("lastName VALUE: " + form.elements.lastName.value);
    console.log("dateOfBirth VALUE: " + form.elements.dateOfBirth.value);
    console.log("licenseNo VALUE: " + form.elements.licenseNo.value);
    console.log("paymentDetail VALUE: " + form.elements.paymentDetail.value);
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <SimplePageTitle
          title="Homy's car"
          subtitle="Sign up"
          doShowIcon={true}
        />
        <form onSubmit={this.handleSubmit}>
          <div className="container text-light">
            <div className="signup-form-container">
              <div className="row">
                <div className="col-md-5 signup-auth-form">
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
                </div>
                <div className="col-md-7 signup-detail-form">
                  <div className="row">
                    <div className="col-6">
                      <FormGroup
                        inputType="text"
                        label="First Name"
                        name="firstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-6">
                      <FormGroup
                        inputType="text"
                        label="Last Name"
                        name="lastName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <FormGroup
                    inputType="date"
                    label="Date of Birth"
                    name="dateOfBirth"
                    placeholder="dd/mm/yyyy"
                  />
                  <FormGroup
                    inputType="number"
                    label="License Number"
                    name="licenseNo"
                    placeholder="Enter your License number"
                  />
                  {/* Delete this form group if getting payment detail is not
                  necessary */}
                  <FormGroup
                    inputType="text"
                    label="Payment Detail"
                    name="paymentDetail"
                    placeholder="Enter your payment detail"
                  />
                  {/* //////////////// */}
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

export default Signup;
