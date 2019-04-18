import React, { Component } from "react";
import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
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
