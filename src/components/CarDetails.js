import React, {Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './AddCars.css'

class CarDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {

            details: '',
        }
    }

    componentDidMount() {
        this.getCars();
        console.log(this.props.match)
    }


    getCars() {

        // const match = matchPath(this.props.history.location.pathname, {
        //   path: '/path/:_id',
        //   exact: true,
        //   strict: false
        // })

        let carId = this.props.match.params._id;

        axios.get(`http://localhost:3001/car/${carId}`)

        // axios.get(`http://localhost:3001/car/${carId}`)


            .then(response => {
                this.setState({details: response.data}, () => {
                    console.log(this.state);
                })
            }).catch(err => console.log(err));
    }

    onDelete() {
        let carId = this.state.details._id;
        axios.delete(`http://localhost:3001/car/${carId}`)
            .then(response => {
                this.props.history.push('/car');

            }).catch(err => console.log(err));

    }

    render() {
        return (
            <div className="all">
                <div className="text-light bg-black">
                    <hr/>
                    <Button className="btn-secondary">
                        <Link className="text-light btn grey" to="/admin">Back</Link></Button>
                    <div className="success">
                        <Button className="btn-success">
                            <Link className="text-light btn grey" to="/admin">Back to Admin page</Link></Button></div>
                    <h1> Car Detail</h1>

                    <div className="text-light bg-black">
                        <br></br><br></br>
                        <div className="text-dark">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Car Detail</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{this.state.details._id}</h6>
                                    <br></br><br></br><br></br>
                                    <hr></hr>
                                    <p class="card-text">
                                        <strong> Make:</strong>{this.state.details.make}<br></br><br></br>
                                        <strong>Car_rego:</strong> {this.state.details.rego}<br></br><br></br>
                                        <strong> Model:</strong> {this.state.details.model}<br></br><br></br>
                                        <strong> Year:</strong> {this.state.details.year}<br></br><br></br>
                                        <strong> Body:</strong> {this.state.details.body}<br></br><br></br>
                                        <strong>Address:</strong> {this.state.details.address}<br></br><br></br>
                                        <strong>Price:</strong> {this.state.details.price}<br></br><br></br>
                                        <strong>Availability:</strong>{this.state.details.availability}<br></br><br></br>
                                        <strong>Damaged:</strong>{this.state.details.damaged}<br></br><br></br>
                                    </p>

                                    <div className="success">
                                        <Button className="btn-primary">
                                            <Link to={`/car/edit/${this.state.details._id} `}>Edit</Link>
                                        </Button>
                                        <Button onClick={this.onDelete.bind(this)} className="btn-danger left"
                                        > Delete</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br><br></br><br></br>
            </div>


        );
    }
}

export default CarDetails;
