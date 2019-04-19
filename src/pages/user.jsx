import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import dog from "../images/hashiqi.jpg";
import "./user.css";
export default function User(){
    return (
      <React.Fragment>
        <NavBar />

<Jumbotron fluid>
  <Container>
    <h1>Welcome to user page!</h1>
    <p>
     user name user name user name
    </p>
  </Container>
</Jumbotron>

<div className="card" mx-auto>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={dog} />
  <Card.Body>
    <Card.Title>User Name</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>User ID:</ListGroupItem>
    <ListGroupItem>Lastname:</ListGroupItem>
    <ListGroupItem>Email:</ListGroupItem>
    <ListGroupItem>license_no:</ListGroupItem>
    <ListGroupItem>Date of birth:</ListGroupItem>
    <ListGroupItem>Payment details:</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</div>


         <Footer />

</React.Fragment>
)
}
