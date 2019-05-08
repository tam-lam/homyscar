import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { matchPath } from 'react-router';

class CarDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
          
         details:''
        }
      }
      
      componentDidMount() {
        this.getCars();
        }
        
             
        getCars(){

          // const match = matchPath(this.props.history.location.pathname, {
          //   path: '/path/:_id',
          //   exact: true,
          //   strict: false
          // })

           let carId= this.props.match.params._id;
          //let carId= this.state.details._id;
      
          axios.get(`http://localhost:3000/car/${carId}`)
        //   axios.get(`http://localhost:3001/car/${carId}`)

          .then(response =>{
            this.setState({details:response.data},()=>{
              console.log(this.state);
            })
          }).catch(err => console.log(err));
        }
      
       onDelete(){
         let carId= this.state.details._id;
         axios.delete(`http://localhost:3001/car/${carId}`)
        .then(response=>{
          this.props.history.push('/car');

        }).catch(err => console.log(err));

}

    render(){
    return(
    <div className="text-light bg-dark">
        <hr/>
      <Link className="btn grey" to="/car">Back</Link>
       
        <h1>{this.state.details._id}</h1>
     <ul className="collection"> 
    <li className="collection-item">
      Make:{this.state.details.make}
    </li>
    <li className="collection-item">
      Car_rego:{this.state.details.rego}
    </li>
    <li className="collection-item">
      Model:{this.state.details.model}
    </li>
    <li className="collection-item">
      Year:{this.state.details.year}
    </li>
    <li className="collection-item">
      Body:{this.state.details.body}
    </li>
    <li className="collection-item">
    Transmission:{this.state.details.transmission}
    </li>
    <li className="collection-item">
    Address:{this.state.details.address}
    </li>
    <li className="collection-item">
      Price:{this.state.details.price}
    </li>
    
</ul>
                       
        
           <Link className="btn" to={`/car/edit/${this.state.details._id} `}>Edit</Link>
           
           <button  onClick={this.onDelete.bind(this)} className="btn red right"
           > Delete</button>
            {/* {this.onDelete.bind(this)} */}
                    
            </div>

    );}
}export default CarDetails;
