import React, {Component} from "react";
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux';
import { updateCarDetails} from '../store/actions/carActions';
import {Formik, Field} from 'formik';
import * as yup from 'yup';

const EditCarSchema = yup.object().shape({
    price: yup.number().required("price required").positive ("price cannot be negative"),
    transmission: yup.string().required("transmission is required").matches(/^(Manual|Auto)$/ , "transmission must be either manual or auto , case sensitive"),
    year: yup.number("year value must be a year value (2000 - 2019").required("model is required").max(2019 , " model cannot be greater than 2019 ").min(2000 , "model cannot be less than 2000"),
    availability: yup.string().required("availability is required").matches(/^(true|false)$/ , "availability must be either true or false , true = available , false= not available"),
    damaged: yup.string().required("damaged value is required").matches(/^(true|false)$/ , "damaged must be either true or false , true = damaged , false= not damaged"),
    make: yup.string().required('car make is required'),
    rego: yup.string().required('car rego is required'),
    model: yup.string().required('car model is required'),
    body: yup.string().required("body type is required").matches(/^(sedan|convertible|suv|hatchback)$/ , "body must be either hatchback , sedan , convertible , suv , case sensitive"),



})





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
            availability: '',
            disabled:false,
            selectedAvailability: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentWillMount(){
        if(this.props.location.car_to_be_edited){
            let car = this.props.location.car_to_be_edited;
            this.setState({
                ...car,selectedAvailability: car.availability
            })
        }
    }
 

    

    editCars(data,id) {

        console.log(this.state)
        this.setState({
            disabled:true
        })


        this.props.onUpdateCarDetails(data)
        this.props.history.push('/admin');

    }

    submitData(submissionValues) {
        console.log("e is " , submissionValues)
        const newCars = {
            _id: this.state._id,
            make: submissionValues.make,
            rego: submissionValues.rego,
            model: submissionValues.model,
            year: submissionValues.year,
            body: submissionValues.body,
            transmission: submissionValues.transmission,
            address: submissionValues.address,
            price: submissionValues.price,
            availability: submissionValues.availability

        }
        this.editCars(newCars,this.state._id);
 
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const make = target.name;
        this.setState({
            [make]: value
        });
    }

    handleAvailabilityChange = changeEvent => {
        this.setState({
            selectedAvailability: changeEvent.target.value
        })
    } 


    render() {

        return (

            <div className="all">
                <div className="text-light bg-black">
                    <br/>
                    <Button className="btn-secondary">
                        <Link className="text-light btn grey" to="/admin">Back</Link></Button>
                    <h1>Edit Cars</h1>
                        <Formik
                        validationSchema = {EditCarSchema}
                        initialValues = {this.state}
                        onSubmit = {values =>this.submitData(values)} >

                        {({errors , values ,  touched , handleSubmit , isValid , isInvalid , handleChange} ) =>( 
                        <Form noValidate onSubmit={handleSubmit}>
                            
                            <Form.Group>
                                <Form.Label Col sm={4}>Make</Form.Label>
                                <Col sm={6}>
                                <Form.Control
                                        type="text"
                                        name="make"
                                        ref="make"
                                        value={values.make}
                                        onChange={handleChange}
                                        isInvalid={touched.model && errors.make}  />
                                    <Form.Control.Feedback type="invalid"> {errors.make}</Form.Control.Feedback>
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
                                <Form.Label Col sm={3}>rego</Form.Label>
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
                                <Form.Label Col sm={3}>Car year</Form.Label>
                                <Col sm={6}>
                                <Form.Control
                                        type="text"
                                        name="year"
                                        ref="year"
                                        value={values.year}
                                        onChange={handleChange}
                                        isInvalid={touched.model && errors.year} />

                                        <Form.Control.Feedback type="invalid"> {errors.year}</Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label Col sm={3}>Car body</Form.Label>
                                <Col sm={6}>
                                <Form.Control
                                        type="text"
                                        name="body"
                                        ref="body"
                                        value={values.body}
                                        onChange={handleChange}
                                        isInvalid={touched.model && errors.body} />

                                        <Form.Control.Feedback type="invalid"> {errors.body}</Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label Col sm={3}>Car transmission</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name="transmission"
                                        ref="transmission"
                                        value={values.transmission}
                                        onChange={handleChange}
                                        isInvalid={touched.model && errors.transmission} />

                                        <Form.Control.Feedback type="invalid"> {errors.transmission}</Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label Col sm={3}>Car address</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" name="address" ref="address" value={this.state.address}
                                                  onChange={this.handleInputChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Col} md="4"  >
                                <Form.Label Col sm={3}>Car price</Form.Label>
                                <Col sm={6}>
                                    <Form.Control
                                        type="text"
                                        name="price"
                                        ref="price"
                                        value={values.price}
                                        onChange={handleChange}
                                        isInvalid={touched.model &&  errors.price} />

                                        <Form.Control.Feedback type="invalid"> {errors.price}</Form.Control.Feedback>
                                </Col>
                               
                            </Form.Group>

                            <Form.Group>
                            <Form.Label Col sm={3}>Car availability</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                        type="text"
                                        name="availability"
                                        ref="availability"
                                        value={values.availability}
                                        onChange={handleChange}
                                        isInvalid={touched.model &&  errors.availability} />

                                        <Form.Control.Feedback type="invalid"> {errors.availability}</Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <Form.Group>
                            <Form.Label Col sm={3}>Car damaged?</Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                        type="text"
                                        name="damaged"
                                        ref="damaged"
                                        value={values.damaged}
                                        onChange={handleChange}
                                        isInvalid={touched.model &&  errors.damaged} />

                                        <Form.Control.Feedback type="invalid"> {errors.damaged}</Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            <div className="success">
                                <button variant="primary" type="submit" >
                                    Submit
                                </button></div>

                            
                        </Form>
                            )}
                        </Formik>
                    {/* </form> */}
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