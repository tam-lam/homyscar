import React, {Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './AddCars.css'

class EditCar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            username: '',
            licenseNo: '',
            firstName: '',
            lastName: '',
            email: '',
            dateOfBirth: '',
            password: '',
            disabled:false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        if(this.props.location.query){
            this.setState({
                ...this.props.location.query
            })
        }
        //this.getCarsDetails();
    }

   

        editUsers(data) {
        this.setState({
            disabled:true
        })
        axios.request({
            method: 'put',
            url: `http://localhost:3001/user`,
            data: {
                data:data,
                id:this.state._id
            }
        })
            .then(response => {
                this.props.history.push('/admin');
            }).catch(err => console.log(err));

    }

    onSubmit(e) {
        e.preventDefault();
        const newUsers = {
            username: this.state.username,
            licenseNo: this.state.licenseNo,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            dateOfBirth: this.state.dateOfBirth,
            password: this.state.password,
        }
        console.log(this)
        this.editUsers(newUsers);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const make = target.name;
        this.setState({
            [make]: value
        });
    }


    render() {

        return (
            <div className="all">
                <div className="text-light bg-black">
                    <br/>
                    <Button className="btn-secondary">
                        <Link className="text-light btn grey" to="/admin">Back</Link></Button>
                    <h1>Edit User</h1>
                    <Form onSubmit={this.onSubmit.bind(this)}>
                        <Form.Group>
                            <Form.Label Col sm={4}>Username</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    required
                                    placeholder="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Col sm={3}></Col>
                            <Form.Label Col sm={3}>LicenseNo</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="licenseNo" placeholder="licenseNo"
                                              onChange={this.handleChange}    value={this.state.licenseNo}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>FirstName</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="firstName" placeholder="firstName"
                                              onChange={this.handleChange}  value={this.state.firstName}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>LastName</Form.Label>
                            <Col sm={6}>
                                <Form.Control required name="lastName"  placeholder="lastName" onChange={this.handleChange} value={this.state.lastName}>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>Email</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="email" placeholder="email" onChange={this.handleChange} value={this.state.email}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>Date of Birth</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="dateOfBirth" placeholder="dateOfBirth" onChange={this.handleChange} value={this.state.dateOfBirth}/>
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label Col sm={3}>Password</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="password" placeholder="password"
                                              onChange={this.handleChange} value={this.state.password}/>
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
};
export default EditCar;