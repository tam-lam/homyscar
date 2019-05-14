import React, { Component } from "react";
import NavBar from "../components/Navbar";
import userImg from "../images/userP.jpg";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserAvatar from "../components/UserAvatar";
import Footer from "../components/Footer";
import UserDetail from "../components/UserDetail";
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
                      <Nav.Link className="text-dark" eventKey="payment">
                        Payment details
                      </Nav.Link>
                      <Nav.Link className="text-dark" eventKey="as">
                        Confirmation
                      </Nav.Link>
                    </Nav>
                  </div>
                </Col>

                <Col md={9}>
                  <Tab.Content className="">
                    <Tab.Pane eventKey="userInfo">
                      <div className="row">
                        <div className="account-detail-container shadow-lg bg-dark col-md-6">
                          <h1>Account Details</h1>
                          <UserDetail title="Username" content={userName} />
                          <UserDetail title="User ID" content={id} />
                          <UserDetail title="Email" content={email} />
                        </div>
                        <div className="account-detail-container shadow-lg bg-dark col-md-4">
                          <h1>Personal Details</h1>
                          <UserDetail title="First name" content={firstName} />
                          <UserDetail title="Last name" content={lastName} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="account-detail-container shadow-lg bg-dark col-md-5">
                          <h1>License Detail</h1>
                          <UserDetail
                            title="License number"
                            content={license}
                          />
                          <UserDetail
                            title="Date of birth"
                            content={dateOfBirth}
                          />
                        </div>
                        <div className="account-detail-container d-sm-block col-md-4 ">
                          <h1 className="rounded shadow-lg">
                            User information
                          </h1>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="payment">
                      <h1>
                        <strong>Payment details:</strong>
                      </h1>
                      <div className="h">
                        <hr />
                      </div>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/13</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/14</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/16</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/15</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <h3>
                        <strong>Payment details:</strong>
                      </h3>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                      <h4>2019/04/12</h4>
                      <p>rent: car tye: #3455667 AU$36/h</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" />
                    <Tab.Pane eventKey="first" />
                    <Tab.Pane eventKey="second" />
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
