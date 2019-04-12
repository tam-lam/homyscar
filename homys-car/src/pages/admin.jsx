import React, { Component } from "react";
import NavBar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
import "./admin.css";
import data from"../data/log.json";
import Table from "../components/table";
// class Admin extends Component{
export default function Admin(){
  return (
    <React.Fragment>
      <NavBar />
      <Jumbotron title="Admin" subtitle="WELCOME TO ADMIN PAGE!" />
      <div className="Admin"> 
      <div className="item">
    <Table data={data}/>
</div>
</div>
     <Footer />

     </React.Fragment>
  )
}