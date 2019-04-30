import React, { Component } from "react";
import CarTable from "../components/carTable";

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
class TabM extends Component {
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
 <Tab.Content>
   <Tab.Pane eventKey="#link1">
   <CarTable />
  
   
   </Tab.Pane>
  
   <Tab.Pane eventKey="#link2">
   
   <TTable/>
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

);
}
}

export default TabM;
