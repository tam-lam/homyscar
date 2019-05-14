import React, { Component } from "react";
import NavBar from "../components/Navbar";
import userImg from "../images/userP.jpg";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserAvatar from "../components/UserAvatar";
import Footer from "../components/Footer";
import UserInformation from "../components/UserInformation";
import RentalHistory from "./RentalHistory";
import CurrentRentals from "../components/CurrentRentals";

class User extends Component {
  state = {
    userName: "Ten fwaklj",
    id: 1234,
    email: "Ten@gmail.com",
    firstName: "Ten",
    lastName: "Sfafafw",
    license: "ACB22445579",
    dateOfBirth: "01/01/2000"
  };
  render() {
    const {
      userName,
      id,
      email,
      firstName,
      lastName,
      license,
      dateOfBirth
    } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <div className="container main-container">
          <div className="main">
            <Tab.Container id="left-tabs-example" defaultActiveKey="userInfo">
              <Row className=" text-light">
                <Col md={3} className="text-light">
                  <div className="nav-container shadow-lg bg-light text-dark">
                    <Nav variant="pills" className="flex-column">
                      <UserAvatar userImg={userImg} userName={userName} />
                      <Nav.Link className="text-dark" eventKey="userInfo">
                        User infomation
                      </Nav.Link>
                      <Nav.Link className="text-dark" eventKey="currentRentals">
                        Current rentals
                      </Nav.Link>
                      <Nav.Link className="text-dark" eventKey="rentalHistory">
                        Rental history
                      </Nav.Link>
                      <Nav.Link className="text-dark" eventKey="confirmation">
                        Confirmation
                      </Nav.Link>
                    </Nav>
                  </div>
                </Col>

                <Col md={9}>
                  <Tab.Content className="">
                    <Tab.Pane eventKey="userInfo">
                      <UserInformation />
                    </Tab.Pane>
                    <Tab.Pane eventKey="rentalHistory">
                      <RentalHistory />
                    </Tab.Pane>
                    <Tab.Pane eventKey="currentRentals">
                      <CurrentRentals />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default User;
