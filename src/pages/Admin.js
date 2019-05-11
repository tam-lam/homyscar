import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminMenu from "../components/AdminMenu";

class Admin extends Component{

   
      render() {
     
        return (

<React.Fragment>
      <NavBar />
     <AdminMenu />

 <Footer />

</React.Fragment>

    );
  }      
    }
    
  
export default Admin;