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
import Confirmation from "../components/Confirmation";
import Rental from "../components/Rental";
import { connect } from "react-redux";

class User extends Component {
  state = {
    userName: "",
    defaultActiveKey: "userInfo"
  };
  componentDidMount() {
    if (this.props.user) {
      this.setState({ username: this.props.user.username });
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container main-container">
          <div className="main">
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey={this.state.defaultActiveKey}
            >
              <Row className=" text-light">
                <Col md={3} className="text-light">
                  <div className="nav-container shadow-lg bg-light text-dark">
                    <Nav variant="pills" className="flex-column">
                      <UserAvatar
                        userImg={userImg}
                        userName={this.state.username}
                      />
                      <Nav.Link className="text-dark" eventKey="userInfo">
                        User infomation
                      </Nav.Link>
                      <Nav.Link className="text-dark" eventKey="currentRentals">
                        Current rentals
                      </Nav.Link>
                      <Nav.Link className="text-dark" eventKey="rentalHistory">
                        Rental history
                      </Nav.Link>
                      <Nav.Link className="text-dark" eventKey="confirmations">
                        Confirmations
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
                      <Rental />
                    </Tab.Pane>
                    <Tab.Pane eventKey="confirmations">
                      <Confirmation />
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
function mapPropsToState(state) {
  return {
    user: state.auth.user
  };
}
export default connect(
  mapPropsToState,
  null
)(User);
