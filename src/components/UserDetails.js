import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { matchPath } from 'react-router';
import data from"../user.json";

class UserDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
          
         details:'',
        }
      }
      
      componentDidMount() {
        this.getUser();
        
        }
        
             
        getUser(){


        let userId= this.props.match.params.id;
        axios.get(`http://localhost:3001/car/${userId}`)


          .then(response =>{
            this.setState({details:response.data},()=>{
              console.log(this.state);
            })
          }).catch(err => console.log(err));
        }
      

    render(){
    return(
    <div className="text-light bg-dark">
        <hr/>
      <Link className="btn grey" to="/admin">Back</Link>
       
    <h1>{this.state.id} </h1>
    <ul className="collection"> 
    <li className="collection-item">
    LicenseNo:{this.state.details.LicenseNo}
    </li>
    <li className="collection-item">
    FirstName:{this.state.details.FirstName}
    </li>
    <li className="collection-item">
    LastName:{this.state.details.LastName}
    </li>
    <li className="collection-item">
    Email:{this.state.details.Email}
    </li>
    <li className="collection-item">
    DateOfBirth:{this.state.details.DateOfBirth}
    </li>
    <li className="collection-item">
    PaymentDetails:{this.state.details.PaymentDetails}
    </li> 
</ul>
                       
                    
            </div>

    );}
}export default CarDetails;
