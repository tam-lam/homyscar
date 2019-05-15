import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Row from'react-bootstrap/Row'
import Col from'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import  './AddCars.css'
class EditCar extends Component{

  constructor(props){
    super(props);
    this.state={
      _id:'',
      make:'',
      rego:'',
      model:'',
      year:'',
      body:''
    }
    this.handleInputChange= this.handleInputChange.bind(this);
  }
   componentWillMount(){
  this.getCarsDetails();
}
  getCarsDetails(){
    let car_Id= this.props.match.params._id;
    let current_car_rego  = 'PKJ837'
    axios.get(`http://localhost:3001/getcarbyid` , {
      params : {
        car_rego: current_car_rego
      }
    })
    .then(response =>{

      console.log('response data ' ,response.data);
     this.setState({
       _id:response.data[0]._id,
       make:response.data[0].make,
       rego:response.data[0].rego,
       model:response.data[0].model,
       year:response.data[0].year,
       body:response.data[0].body
     
      });
    }).then(() =>{
        console.log(this.state)
      }).catch(err => console.log(err));
  }


  //update 
  
    editCars(newCars){
       axios.request({
      method:'put',
      url:`http://localhost:3001/car/${this.state._id}`,
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
        model:this.refs.model.value,
        year:this.refs.year.value,
        body:this.refs.body.value,

    }
    this.editCars(newCars);
    e.preventDefault();

}

handleInputChange(e){
  const target= e.target;
  const value=target.value;
  const make = target.make;

  this.setState({
    [make]:value
  });
}


render(){

    return(
      <div className="all">
        <div  className="text-light bg-dark">
            <br/>
            <Button className="btn-secondary">
      <Link className="text-light btn grey" to="/car">Back</Link></Button>
      <div className="success">
      <Button className="btn-success">
      <Link className="text-light btn" to="/admin">Back to Admin page</Link></Button></div>
        <h1>Edit Cars</h1>
        <form onSubmit={this.onSubmit.bind(this)}>

<Form >
  <Form.Group >
    <Form.Label Col sm={3}>Car_ID</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="_id" ref="_id" value={this.state._id} onChange={this.handleInputChange} />
    </Col>
    <Form.Text className="text-muted">
     Please enter the car id    </Form.Text>
  </Form.Group>

  <Form.Group >
  
    <Form.Label Col sm={4}>Car make</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="make"ref="make" value={this.state.make} onChange={this.handleInputChange} />
    </Col>
  </Form.Group>
  <Form.Group >
  <Col sm={3}></Col>
    <Form.Label Col sm={3}>Car rego</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="rego" ref="rego"value={this.state.rego} onChange={this.handleInputChange}/>
    </Col>
  </Form.Group>
  <Form.Group >
    <Form.Label Col sm={3}>Car model</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="model" ref="model" value={this.state.model} onChange={this.handleInputChange}/>
    </Col>
  </Form.Group>
  <Form.Group >
    <Form.Label Col sm={3}>Car year</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="year" ref="year" value={this.state.year} onChange={this.handleInputChange}/>
    </Col>
  </Form.Group>
  <Form.Group >
    <Form.Label Col sm={3}>Car body</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="body"ref="body" value={this.state.body} onChange={this.handleInputChange} />
    </Col>
  </Form.Group>
  <Form.Group >
    <Form.Label Col sm={3}>Car transmission</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="transmission"ref="transmission" value={this.state.transmission} onChange={this.handleInputChange}/>
    </Col>
  </Form.Group>

  <Form.Group >
    <Form.Label Col sm={3}>Car address</Form.Label>
    <Col sm={6}>
    <Form.Control type="text" name="address"ref="address" value={this.state.address} onChange={this.handleInputChange}/>
    </Col>
  </Form.Group>

  <Form.Group >
    <Form.Label Col sm={3}>Car price</Form.Label>
    <Col sm={6}>
    <Form.Control type="text"name="price" ref="price" value={this.state.price} onChange={this.handleInputChange}/>
    </Col>
  </Form.Group>
  
  <div className="success">
  <Button variant="primary" type="submit">
    Submit
  </Button></div>
  </Form>


         {/* <div className="input-field">
         <input type="text" name="_id" ref="_id" value={this.state._id} onChange={this.handleInputChange}/>
         <label htmlFor="_id" >ID</label>
         </div>
         <div className="input-field">
         <input type="text" name="make" ref="make"value={this.state.make} onChange={this.handleInputChange}/>
         <label htmlFor="make" >Make</label>
         </div>
         <div className="input-field">
         <input type="text" name="rego" ref="rego"value={this.state.rego} onChange={this.handleInputChange}/>
         <label htmlFor="rego" >Rego</label>
         </div>

         <div className="input-field">
         <input type="text" name="model" ref="model"value={this.state.model} onChange={this.handleInputChange}/>
         <label htmlFor="model" >Model</label>
         </div>
          <div className="input-field">
         <input type="text" name="year" ref="year"value={this.state.year} onChange={this.handleInputChange}/>
         <label htmlFor="year" >Year</label>
         </div>
        <div className="input-field">        
         <input type="text" name="body" ref="body"value={this.state.body} onChange={this.handleInputChange}/>
         <label htmlFor="body" >Body</label>
        </div>
        <input type="sumbmit" value="Save" className="btn"/> */}
       
        
        </form>
        </div>
        </div>
    );
}
}export default EditCar;