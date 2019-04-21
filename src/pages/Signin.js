import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
class Signin extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron title="Signin" subtitle="This is Signin page" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Signin;
