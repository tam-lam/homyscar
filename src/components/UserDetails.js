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
        this.getCars();
        
        }
        
             
        getUser(){


        let userId= this.props.match.params.id;
         
        axios.get(`http://localhost:3001/user`)

        // axios.get(`http://localhost:3001/car/${carId}`)


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
      Make:{this.state.details.}
    </li>
    <li className="collection-item">
      Car_rego:{this.state.details.}
    </li>
    <li className="collection-item">
      Model:{this.state.details.}
    </li>
    <li className="collection-item">
      Year:{this.state.details.}
    </li>
    <li className="collection-item">
      Body:{this.state.details.body}
    </li>
    <li className="collection-item">
    Transmission:{this.state.details.}
    </li>
    <li className="collection-item">
    Address:{this.state.details.}
    </li>
    <li className="collection-item">
      Price:{this.state.details.}
    </li>
    
</ul>
                       
                    
            </div>

    );}
}export default CarDetails;
