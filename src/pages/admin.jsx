import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import TabContainer from 'react-bootstrap/TabContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import TTable from "../components/table";
import data from"../data/log.json";
export default function Admin(){
 
    return (
<React.Fragment>
      <NavBar />
      <Jumbotron fluid>
  <Container>
    <h1>Welcome to Admin page!</h1>
    <p>
   ADMIN ADMIN ADMIN
    </p>
  </Container>
</Jumbotron>

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
          Link 4
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
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
        
        </Tab.Pane>
       
        <Tab.Pane eventKey="#link2">
        
        <TTable data={data}/>
        </Tab.Pane>

        <Tab.Pane eventKey="#link3">
        </Tab.Pane>
        
        <Tab.Pane eventKey="#link4"> 
        </Tab.Pane>
        
        <Tab.Pane eventKey="#link5">       
        </Tab.Pane>

        <Tab.Pane eventKey="#link6">       
        </Tab.Pane>

      </Tab.Content>
    </Col>
  </Row>
</Tab.Container> 

 <Footer />

</React.Fragment>

    );
  }

