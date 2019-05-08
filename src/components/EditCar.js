import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Row from'react-bootstrap/Row'
import Col from'react-bootstrap/Col'
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
    axios.get(`http://localhost:3001/car/${car_Id}`)
    .then(response =>{
     this.setState({
       _id:response.data._id,
       make:response.data.make,
       rego:response.data.rego,
       model:response.data.model,
       year:response.data.year,
       body:response.data.body
     
      },() =>{
        console.log(this.state)
      })
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
        <div  className="text-light bg-dark">
            <br/>
        <Link className="btn grey" to="/car">Back</Link>
        <h1>Edit Cars</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
         <div className="input-field">
         <input type="text" name="_id" ref="_id" value={this.state._id} onChange={this.handleInputChange}/>
         <label htmlFor="_id" >ID</label>
         {/* <Form>
         <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2" htmlFor="_id">
      ID
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="ID"name="_id" ref="_id" value={this.state._id} onChange={this.handleInputChange} />
    </Col>
  </Form.Group>
</Form>; */}
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
        <input type="sumbmit" value="Save" className="btn"/>
       
        
        </form>
        </div>
    );
}
}export default EditCar;