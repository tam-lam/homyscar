import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import SimplePageTitle from "../components/SimplePageTitle";
import FormGroup from "../components/FormGroup";
import { userInfo } from "os";
import RightArrowBtn from "../components/RightArrowBtn";
import Alert from "../components/Alert";
import {
  isThereEmptyField,
  emptyFieldMessage
} from "../util/validationHelpers";
class Signin extends Component {
  state = {
    doesErrorExist: false,
    errorMessage: "",
    user: {
      password: "",
      email: ""
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    let form = event.target;
    this.setState({
      user: {
        email: form.elements.email.value,
        password: form.elements.password.value
      }
    });
    this.checkForError();
  };
  checkForError = () => {
    isThereEmptyField(this.state.user)
      ? this.setState({
          doesErrorExist: true,
          errorMessage: emptyFieldMessage
        })
      : this.setState({ doesErrorExist: false });
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
            <div className="signin-form-container">
              {this.state.doesErrorExist ? (
                <Alert errorMessage={this.state.errorMessage} />
              ) : null}
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
              <RightArrowBtn />
            </div>
          </div>
        </form>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Signin;
