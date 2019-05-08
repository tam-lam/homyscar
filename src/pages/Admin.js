import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import TabM from "../components/tabM";
import CarTable from "../components/carTable";

class Admin extends Component{

   
  render() {
 
    return (

<React.Fragment>
  <NavBar />
 
 <TabM />

<Footer />

</React.Fragment>

);
}      
}


export default Admin;

