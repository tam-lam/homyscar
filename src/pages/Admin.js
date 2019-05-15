import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import TabM from "../components/tabM";


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

