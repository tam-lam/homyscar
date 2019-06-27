import React, {Component} from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import PropTypes from "prop-types";
import { Formik } from 'formik';
import * as yup from 'yup';
import { addCar } from '../store/actions/carActions'

const AddCarSchema = yup.object().shape({
    price: yup.number().required("price required").positive("price cannot be negative"),
    make: yup.string().required('car make is required'),
    rego: yup.string().required('car rego is required'),
    model: yup.string().required('car model is required'),
    body: yup.string().required("body type is required").matches(/^(sedan|convertible|suv|hatchback)$/, "body must be either hatchback , sedan , convertible , suv , case sensitive"),
})

class AddCars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            make: '',
            rego: '',
            model: '',
            year: '2000',
            body: '',
            transmission: 'Manual',
            address: '',
            price: '',
            disabled:false
        };
        this.submitValues = this.submitValues.bind(this);
    }

    static propTypes = {
        addCar: PropTypes.func.isRequired
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const make = target.name;
        this.setState({
            [make]: value
        });
    };

    submitValues(values) {
        const newCar = {
            make: values.make,
            rego: values.rego,
            model: values.model,
            year: this.state.year,
            body: values.body,
            transmission: this.state.transmission,
            address: values.address,
            price: values.price,
            availability:true,
            damaged:false,
            lat:-37.8119,
            lng:144.973
        };
        this.props.addNewCar(newCar)
        console.log(newCar)
        // this.props.history.push('/admin')
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
                    <Formik
                        validationSchema={AddCarSchema}
                        initialValues={this.state}
                        onSubmit={values => this.submitValues(values)}
                    >
                        {({ errors, values, touched, isValid, handleSubmit, handleChange, isInvalid }) => (
                            <Form noValidate onSubmit={() => this.submitValues(values)}>
                                <Form.Group>
                                    <Form.Label Col sm={4}>Car make</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name="make"
                                            ref="make"
                                            value={values.make}
                                            onChange={handleChange}
                                            isInvalid={touched.model && errors.make} />
                                        <Form.Control.Feedback type="invalid"> {errors.make}</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col sm={3}></Col>
                                    <Form.Label Col sm={3}>Car rego</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name="rego"
                                            ref="rego"
                                            value={values.rego}
                                            onChange={handleChange}
                                            isInvalid={touched.model && errors.rego} />
                                        <Form.Control.Feedback type="invalid"> {errors.rego}</Form.Control.Feedback>       
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label Col sm={3}>Car model</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name="model"
                                            ref="model"
                                            value={values.model}
                                            onChange={handleChange}
                                            isInvalid={touched.model && errors.model} />
                                        <Form.Control.Feedback type="invalid"> {errors.model}</Form.Control.Feedback>
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
                                        <Form.Control required type="text" name="body" placeholder="body" onChange={handleChange}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label Col sm={3}>Car transmission</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control required as="select" name="transmission" onChange={handleChange}>
                                            <option>Manual</option>
                                            <option>Auto</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label Col sm={3}>Car address</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control required type="text" name="address" placeholder="address"
                                                    onChange={handleChange}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label Col sm={3}>Car price</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control
                                            type="text"
                                            name="price"
                                            ref="price"
                                            value={values.price}
                                            onChange={handleChange}
                                            isInvalid={touched.model && errors.price} />

                                        <Form.Control.Feedback type="invalid"> {errors.price}</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>


                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewCar: newCar => {
            dispatch(addCar(newCar));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AddCars);
