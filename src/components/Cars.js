import React, {Component} from 'react';
import axios from 'axios';
import CarIT from './CarIT';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import  FormControl from 'react-bootstrap/FormControl'
import InputGroup from "react-bootstrap/InputGroup";


class Cars extends Component {
    constructor() {
        super();
        this.state = {
            cars: [],
            mark: '',
        }
    }

    componentWillMount() {
        this.getCars();
    }

    getCars = () => {
        axios.get(`http://localhost:3001/car?mark=${this.state.mark}`)
            .then(response => {
                this.setState({cars: response.data}, () => {
                    console.log(this.state);
                })
            })
            .catch(err => console.log(err));
    }

    markChange = (event) => {
        this.setState({
            mark: event.target.value
        })
    }

    render() {
        const carItems = this.state.cars.map((car, i) => {
            return (
                <CarIT key={car._id} item={car}/>
            )
        })
        return (
            <div className="text-light bg-dark">
                <h1>Cars</h1>
                <div style={{overflow: 'hidden'}}>
                    <div style={{float: 'left'}}>
                        <Button className="btn-primary">
                            <Link to={`/car/add`}>ADD Cars</Link>
                        </Button>
                    </div>
                    <div style={{float: 'right', widht: '500px'}}>
                        <InputGroup className="mb-3"  placeholder={'car mark'} onChange={this.markChange}
                                    value={this.state.mark}>
                            <FormControl
                                placeholder="car mark"
                                aria-label="car mark"
                            />
                            <InputGroup.Append>
                                <Button className="btn-primary"  onClick={this.getCars}>search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
                <br></br>
                <div className="collection">
                    {carItems}
                </div>
            </div>
        )
    }
}

export default Cars;