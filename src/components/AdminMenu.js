import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarInfoTable from "../components/Table";
import CarTable from "../components/CarTable"

class AdminMenu extends Component {
    render() {
      return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
        <Col sm={3}>
        <ListGroup>
          <ListGroup.Item action variant="dark" action href="#link1">
            Car List
          </ListGroup.Item>
          <ListGroup.Item action variant="dark" action href="#link2">
            Log Management
          </ListGroup.Item>
          <ListGroup.Item action variant="dark" action href="#link3">
            User Management
          </ListGroup.Item>
          <ListGroup.Item action variant="dark" action href="#link4">
            Admin Infomation
          </ListGroup.Item>
          <ListGroup.Item action variant="dark" action href="#link5">
            Link 5
          </ListGroup.Item>
          <ListGroup.Item action variant="dark" action href="#link6">
            Link 6
          </ListGroup.Item>
        </ListGroup>
        </Col>


      <Col sm={8}>
          {/* display table with car information contents*/ }
          {/* <CarInfoTable/> */}
          <CarTable />
      </Col>
      </Row>
      </Tab.Container> 

        );
      }
}
export default AdminMenu;