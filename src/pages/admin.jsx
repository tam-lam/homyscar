import React, { Component } from "react";
// import AllCarList from "../components/allCarList";
import CarTable from "../components/carTable";

import axios from "axios";
// import CarMo from "../components/carMo";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
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





  