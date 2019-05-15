import React, { Component } from "react";
//import Table from 'react-bootstrap/Table'
import axios from 'axios';
import {Link} from 'react-router-dom'

 class AddCars extends Component{

  addCars(newCars){
    axios.request({
        method:'post',
        url:'http://localhost:3001/car',
        data:newCars
    })
    .then(response =>{
        this.props.history.push('/car');

    }).catch(err => console.log(err));
}

onSubmit(e){
   
    const newCars={
        _id: this.refs._id.value,
        make: this.refs.make.value,
        rego:this.refs.rego.value,
        modle:this.refs.model.value,
        year:this.refs.year.value,
        body:this.refs.body.value,
        transmission:this.refs.transmission.value,
        address:this.refs.address.value,
        price:this.refs.price.value,

    }
    this.addCars(newCars);
    e.preventDefault();

}




render(){

    return(
        <div className="text-light bg-dark">
            <br/>
        <Link className="btn green" to="/car">Back</Link>
        <h1>Add Cars</h1>
        
        {/* <form onSubmit={this.onSubmit}> */}
        <form onSubmit={this.onSubmit.bind(this)}>

         <div className="input-field">
         <ul>
         <li>
         <label htmlFor="_id" >ID
         <input type="text" name="_id" ref="_id"/></label>
         </li>
         <li>
         
         <label htmlFor="make" >Make</label>
         <input type="text" name="make" ref="make"/>
         </li>
         <li>
         <label htmlFor="rego" >Rego</label>
         <input type="text" name="rego" ref="rego"/>
         </li>
        <li>
         <label htmlFor="model" >Model</label>
         <input type="text" name="model" ref="model"/></li>

         <li>
         <label htmlFor="year">Year</label>
         <input type="text" name="year" ref="year"/>
         </li>
         <li>
         <label htmlFor="body" >Body</label>
         <input type="text" name="body" ref="body"/></li>
        <li>
       
         <label htmlFor="transmission" >Transmission</label>
         <input type="text" name="transmission" ref="transmission"/></li>
         <li>
         
         <label htmlFor="address" >Address</label>
         <input type="text" name="address" ref="address"/></li>

         <li>
         <label htmlFor="price" >Price</label>
         <input type="text" name="price" ref="price"/></li>

          </ul>
        </div>
       
        <input type="submit" value="Save" className="btn"/>
       
        
        </form>
        </div>
    );
}
}export default AddCars;