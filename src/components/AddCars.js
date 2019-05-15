import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import  './AddCars.css'
 class AddCars extends Component{
state={
_id:'',
make:'',
rego:'',
modle:'',
year:'',
body:'',
transmission:'',
address:'',
price:'',

};

      handleChange=event=>{
this.setState({ _id:event.target.value,
make:event.target.value,
rego:event.target.value,
model:event.target.value,
year:event.target.value,
body:event.target.value,
transmission:event.target.value,
address:event.target.value,
price:event.target.value,
  
    
    }

    );
};

handleSubmit=event=>{
    event.preventDefault();
    const newCars={
        _id: this.state._id,
        make: this.state.make,
        rego:this.state.rego,
        modle:this.state.model,
        year:this.state.year,
        body:this.state.body,
        transmission:this.state.transmission,
        address:this.state.address,
        price:this.state.price,

    };
    axios.post(`http://localhost:3001/car`,{newCars})
.then(res =>{
    console.log(res);
    console.log(res.data)
});
};

render(){

    return(
        <div className="all">
        <div className="text-light bg-dark">
            <br/>
            <hr/>
            <Button className="btn-secondary">
      <Link className="text-light btn grey" to="/car">Back</Link></Button>
      <Button className="btn-success">
      <Link className="text-light btn grey" to="/admin">Back to Admin page</Link></Button>
        <h1>Add Cars</h1>
        <hr/>

<Form onSubmit={this.handleSubmit.bind(this)}>
  <Form.Group >
    <Form.Label Col sm={3}>Car_ID</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="id" placeholder="Car_ID"onChange={this.handleChange} />
    </Col>
    <Form.Text className="text-muted">
     Please enter the car id    </Form.Text>
  </Form.Group>

  <Form.Group >
  
    <Form.Label Col sm={4}>Car make</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="make" placeholder="car make"onChange={this.handleChange} />
    </Col>
  </Form.Group>
  <Form.Group >
  <Col sm={3}></Col>
    <Form.Label Col sm={3}>Car rego</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="rego" placeholder="car rego" onChange={this.handleChange}/>
    </Col>
  </Form.Group>
  <Form.Group >
    <Form.Label Col sm={3}>Car model</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="model" placeholder="car model" onChange={this.handleChange}/>
    </Col>
  </Form.Group>
  <Form.Group >
    <Form.Label Col sm={3}>Car year</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="year" placeholder="year" onChange={this.handleChange}/>
    </Col>
  </Form.Group>
  <Form.Group >
    <Form.Label Col sm={3}>Car body</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="body" placeholder="body"onChange={this.handleChange} />
    </Col>
  </Form.Group>
  <Form.Group >
    <Form.Label Col sm={3}>Car transmission</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="transmission" placeholder="transmission" onChange={this.handleChange}/>
    </Col>
  </Form.Group>

  <Form.Group >
    <Form.Label Col sm={3}>Car address</Form.Label>
    <Col sm={6}>
    <Form.Control type="text" name="address" placeholder="address" onChange={this.handleChange}/>
    </Col>
  </Form.Group>

  <Form.Group >
    <Form.Label Col sm={3}>Car price</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="price" placeholder="price" onChange={this.handleChange}/>
    </Col>
  </Form.Group>
  

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


        
        {/* <form onSubmit={this.onSubmit}.bind(this)> */}
        {/* <form onSubmit={this.handleSubmit.bind(this)}>

         <div className="input-field">
         <ul>
         <li>
         <label htmlFor="_id" >ID
         <input type="text" name="_id" ref="_id" onChange={this.handleChange}/></label>
         </li>
         <li>
         
         <label htmlFor="make" >Make</label>
         <input type="text" name="make" ref="make"onChange={this.handleChange}/>
         </li>
         <li>
         <label htmlFor="rego" >Rego</label>
         <input type="text" name="rego" ref="rego"onChange={this.handleChange}/>
         </li>
        <li>
         <label htmlFor="model" >Model</label>
         <input type="text" name="model" ref="model"onChange={this.handleChange}/></li>

         <li>
         <label htmlFor="year">Year</label>
         <input type="text" name="year" ref="year"onChange={this.handleChange}/>
         </li>
         <li>
         <label htmlFor="body" >Body</label>
         <input type="text" name="body" ref="body"onChange={this.handleChange}/></li>
        <li>
       
         <label htmlFor="transmission" >Transmission</label>
         <input type="text" name="transmission" ref="transmission"onChange={this.handleChange}/></li>
         <li>
         
         <label htmlFor="address" >Address</label>
         <input type="text" name="address" ref="address"onChange={this.handleChange}/></li>

         <li>
         <label htmlFor="price" >Price</label>
         <input type="text" name="price" ref="price"onChange={this.handleChange}/></li>

          </ul>
        </div>
       
        <input type="submit" value="Save" className="btn"/>
       
        
        </form> */}
        </div>
        </div>
    );
}
}export default AddCars;