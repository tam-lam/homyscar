import React, { Component } from "react";
import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
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
