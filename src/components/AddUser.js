import React, {Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class AddUser extends Component {
    state = {
        _id: '',
        username: '',
        licenseNo: '',
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        password: '',
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
        const data = {
            username: this.state.username,
            licenseNo: this.state.licenseNo,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            dateOfBirth: this.state.dateOfBirth,
            password: this.state.password,
            PaymentDetails:0,
        };
        axios.post(`/user`, data)
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
                    <h1>Add User</h1>
                    <hr/>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group>
                            <Form.Label Col sm={4}>username</Form.Label>
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
                            <Form.Label Col sm={3}>licenseNo</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="licenseNo" placeholder="licenseNo"
                                              onChange={this.handleChange}    value={this.state.licenseNo}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>firstName</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="firstName" placeholder="firstName"
                                              onChange={this.handleChange}  value={this.state.firstName}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>lastName</Form.Label>
                            <Col sm={6}>
                                <Form.Control required name="lastName"  placeholder="lastName" onChange={this.handleChange} value={this.state.lastName}>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>email</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="email" placeholder="email" onChange={this.handleChange} value={this.state.email}/>
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label Col sm={3}>dateOfBirth</Form.Label>
                            <Col sm={6}>
                                <Form.Control required type="text" name="dateOfBirth" placeholder="dateOfBirth" onChange={this.handleChange} value={this.state.dateOfBirth}/>
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label Col sm={3}>password</Form.Label>
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
}

export default AddUser;