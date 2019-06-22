import React, {Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux';
import {onUpdateCarDetails, updateCarDetails} from '../store/actions/carActions';

class EditCar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            make: '',
            rego: '',
            model: '',
            year: '',
            body: '',
            transmission: '',
            address: '',
            price: '',
            disabled:false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount(){
        if(this.props.location.car_to_be_edited){
            let car = this.props.location.car_to_be_edited;
            this.setState({
                ...car
            })
        }
    }

    

    editCars(data,id) {

        console.log(this.state)
        this.setState({
            disabled:true
        })
        // axios.request({
        //     method: 'put',
        //     url: `http://localhost:3001/car`,
        //     data: {
        //         data:data,
        //         id:id
        //     }
        // })
        //     .then(response => {
        //         this.props.history.push('/admin');
        //     }).catch(err => console.log(err));


        this.props.onUpdateCarDetails(data)
        this.props.history.push('/admin');

    }

    onSubmit(e) {
        const newCars = {
            _id: this.state._id,
            make: this.refs.make.value,
            rego: this.refs.rego.value,
            model: this.refs.model.value,
            year: this.refs.year.value,
            body: this.refs.body.value,
            transmission: this.refs.transmission.value,
            address: this.refs.address.value,
            price: this.refs.price.value,

        }
        this.editCars(newCars,this.refs._id.value);
        e.preventDefault();
    }

    handleInputChange(e) {
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
                    <h1>Edit Cars</h1>
                    <form onSubmit={this.onSubmit.bind(this)}>

                        <Form>
                            <Form.Group>
                                <Form.Label Col sm={3}>Car_ID</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="_id" ref="_id" value={this.state._id}
                                                  onChange={this.handleInputChange}/>
                                </Col>
                                <Form.Text className="text-muted">
                                    Please enter the car id </Form.Text>
                            </Form.Group>

                            <Form.Group>

                                <Form.Label Col sm={4}>Car make</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="make" ref="make" value={this.state.make}
                                                  onChange={this.handleInputChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Col sm={3}></Col>
                                <Form.Label Col sm={3}>Car rego</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="rego" ref="rego" value={this.state.rego}
                                                  onChange={this.handleInputChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label Col sm={3}>Car model</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="model" ref="model" value={this.state.model}
                                                  onChange={this.handleInputChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label Col sm={3}>Car year</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="year" ref="year" value={this.state.year}
                                                  onChange={this.handleInputChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label Col sm={3}>Car body</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="body" ref="body" value={this.state.body}
                                                  onChange={this.handleInputChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label Col sm={3}>Car transmission</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="transmission" ref="transmission"
                                                  value={this.state.transmission} onChange={this.handleInputChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label Col sm={3}>Car address</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="address" ref="address" value={this.state.address}
                                                  onChange={this.handleInputChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label Col sm={3}>Car price</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="price" ref="price" value={this.state.price}
                                                  onChange={this.handleInputChange}/>
                                </Col>
                            </Form.Group>

                            <div className="success">
                                <Button variant="primary" type="submit" disabled={this.state.disabled}>
                                    Submit
                                </Button></div>
                        </Form>


                    </form>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {

    return {
        onUpdateCarDetails: updated_car_info => {
            dispatch(updateCarDetails(updated_car_info))
        }
    }

}
export default connect(null , mapDispatchToProps) (EditCar);