import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import SimplePageTitle from "../components/SimplePageTitle";
import FormGroup from "../components/FormGroup";
import { userInfo } from "os";
import RightArrowBtn from "../components/RightArrowBtn";
import Alert from "../components/Alert";
class Signin extends Component {
  state = {
    error: false,
    errorMessage: "",
    password: "",
    email: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("on submit");
    let form = event.target;
    this.setState({
      email: form.elements.email.value,
      password: form.elements.password.value
    });
    this.checkForError();
  };
  checkForError = () => {
    this.state.email == "" || this.state.password == ""
      ? this.setState({
          error: true,
          errorMessage: Alert.emptyFieldMessage
        })
      : this.setState({ error: false });
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
              {this.state.error ? (
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
