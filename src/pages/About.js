import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron title="About us" subtitle="This is about page" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
