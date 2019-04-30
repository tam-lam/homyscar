
import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import userP from "../images/userP.jpg";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import TabContainer from 'react-bootstrap/TabContainer'
import Signin from './signin'
import "./user.css";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'
export default function User(){

   return ( 
<React.Fragment>
<NavBar />

<h1 className=" text-light text-center">User infomation view system</h1><div className="main">
<Card className="bg-dark text-white">
  
  <Card.ImgOverlay>
 
  <Image src={userP}   height="90" width="100"roundedCircle />
    <Card.Title>Ten</Card.Title>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="bg-light text-dark">
    <Col sm={3} className="bg-dark text-light">
    
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" >User infomation:</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Payment details:</Nav.Link>
        </Nav.Item>
        
      </Nav>
    </Col>

    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <h1><strong>User information</strong> </h1>

        <div className="h"><hr></hr></div>
          <h4><strong>User name:  </strong> </h4>
          <p> TEN</p> <div className="r"><hr></hr></div>
          <h4><strong>User ID:</strong> </h4>
          <p>Ten</p> <div className="r"><hr></hr></div>
          <h4><strong>User Email:</strong> </h4>
          <p>Ten@gmail.com</p> <div className="r"><hr></hr></div>
          <h4><strong>User license_no:</strong> </h4>
          <p>ACB22445579</p> <div className="r"><hr></hr></div>
          <h4><strong>Date of birth:</strong> </h4>
          <p>01/01/2000</p> <div className="r"><hr></hr></div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <h1><strong>Payment details:</strong></h1>
        <div className="h"><hr></hr></div>
        <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/13</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/14</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/16</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/15</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p> 
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
        <h3><strong>Payment details:</strong></h3>
        <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
          <h4>2019/04/12</h4>
          <p>
            
            rent: car tye: #3455667
            AU$36/h
            
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          
        </Tab.Pane>
        <Tab.Pane eventKey="first">
          
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</Card.ImgOverlay>
</Card>

   



</div>
</React.Fragment>
)
}


