import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarInfoTable from "./Table";
import CarTable from "./CarTable"
import UserTable from './UserTable';
import RentalsLogTable from './RentalsLogTable'
import RentalsTable from './RentalsTable'
import Image from 'react-bootstrap/Image'
import {connect} from 'react-redux'
import {fetchAllRentals} from '../store/actions/rentalActions';


class AdminMenu extends Component {

    componentWillMount(){
        this.props.getAllRentals();
    }
    render() {
      return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <div className="text-light bg-black" style={{minHeight: '100vh'}}>
            <Row style={{padding: '10px'}}>
                <Col sm={2}>
                    {/* <div className="text-light bg-dark"> */}

                    <br></br><br></br><br></br>
                    <Image src="https://visualpharm.com/assets/314/Admin-595b40b65ba036ed117d36fe.svg"
                           height="100" width="120" roundedCircle style={{margin: '0 auto',display:'block'}}/>

                    <p style={{textAlign:'center'}}> Admin : Autumn</p>
                    {/* </div> */}
                    <ListGroup>
                        <ListGroup.Item action variant="dark" href="#link1">
                            Car List
                        </ListGroup.Item>
                        <ListGroup.Item action variant="dark" href="#link2">
                            Users
                        </ListGroup.Item>
                        <ListGroup.Item action variant="dark" href="#link3">
                            Rentals Log
                        </ListGroup.Item>
                        <ListGroup.Item action variant="dark" href="#link4">
                            Active Rentals
                        </ListGroup.Item>
                        <ListGroup.Item action variant="dark" href="#link5">
                            Admin Infomation
                        </ListGroup.Item>
                        <ListGroup.Item action variant="dark" href="#link6">
                            Link 6
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            <CarTable />
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            <UserTable />
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                            <RentalsLogTable />
                        </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                            <RentalsTable />
                        </Tab.Pane>.
                        <Tab.Pane eventKey="#link5">
                            <div className="text-light bg-dark" style={{padding: '10px', borderRadius: '4px'}}>
                                <br></br><br></br>
                                <div className="text-dark">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Autumn</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">System Admin</h6><br></br><br></br><br></br>
                                            <hr></hr>
                                            <p class="card-text">
                                                <strong> Admin name:</strong>Autumn<br></br><br></br>
                                                <strong>Admin ID: Staff ID:</strong> A12345678<br></br><br></br>
                                                <strong> Staff date of
                                                    birth:</strong> 05/05/2000<br></br><br></br>
                                             
                                                <strong> Staff age:</strong> 19<br></br><br></br>
                                                <strong>Staff phone number:</strong> 042635234<br></br><br></br>
                                                <strong>Staff address:</strong> 3/40 Griffen Street Hamilton Vic
                                                3300<br></br><br></br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link6">
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row></div>
    </Tab.Container>
        );
      }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllRentals: () => dispatch(fetchAllRentals())
    }
}
export default connect( null ,mapDispatchToProps) (AdminMenu); 