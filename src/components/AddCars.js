import React, {Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class AddCars extends Component {
    state = {
        _id: '',
        make: '',
        rego: '',
        modle: '',
        year: '',
        body: '',
        transmission: 'Manual',
        address: '',
        price: '',
        disabled:false
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const make = target.name;
        this.setState({
            [make]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const newCars = {
            make: this.state.make,
            rego: this.state.rego,
            model: this.state.model,
            year: this.state.year,
            body: this.state.body,
            transmission: this.state.transmission,
            address: this.state.address,
            price: this.state.price,
            availability:false,
            damaged:true,
            lat:-37.8119,
            lng:144.973
        };
        this.setState({
            disabled:true
        })
        axios.post(`http://localhost:3001/car`, {newCars})
            .then(res => {
                this.setState({
                    disabled:false
                })
                this.props.history.push('/admin')
            });
    };

    render() {
        return (
            <div className="all">
                <div className="text-light bg-dark">
                    <br/>
                    <hr/>
                    <Button className="btn-secondary">
                        <Link className="text-light btn grey" to="/admin">Back</Link></Button>
                    <h1>Add Cars</h1>
                    <hr/>

                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group>
                            <Form.Label Col sm={4}>Car make</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="text"
                                    name="make"
                                    required
                                    placeholder="car make"
                                              onChange={this.handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Col sm={3}></Col>
                            <Form.Label Col sm={3}>Car rego</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="rego" placeholder="car rego"
                                              onChange={this.handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>Car model</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="model" placeholder="car model"
                                              onChange={this.handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>Car year</Form.Label>
                            <Col sm={6}>
                                <Form.Control required as="select" name="year" onChange={this.handleChange}>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>Car body</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="body" placeholder="body" onChange={this.handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>Car transmission</Form.Label>
                            <Col sm={6}>
                                <Form.Control required as="select" name="transmission" onChange={this.handleChange}>
                                    <option>Manual</option>
                                    <option>Auto</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label Col sm={3}>Car address</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="address" placeholder="address"
                                              onChange={this.handleChange}/>
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label Col sm={3}>Car price</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="price" placeholder="price"
                                              onChange={this.handleChange}/>
                            </Col>
                        </Form.Group>


                        <Button variant="primary" type="submit" disabled={this.state.disabled}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default AddCars;