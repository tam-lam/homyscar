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
import Confirmation from "../components/Confirmation";
import Rental from "../components/Rental";
import { connect } from "react-redux";
import queryString from "query-string";
import { addRental } from "../store/actions/rentalActions";
import { notifyConfirm } from "../components/ToastContent";

class User extends Component {
  state = {
    userName: "",
    defaultActiveKey: "userInfo"
  };

  componentWillMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);

    const paymentId = params["paymentId"];
    const payerId = params["PayerID"];
    const rego = params["rego"];
    const userId = params["userId"];
    const price = params["price"];

    if (paymentId && payerId ) {
      this.props.onAddRental({
        user_id: userId,
        car_rego: rego,
        payment_id: paymentId,
        payer_id: payerId,
        price: price
      });
      notifyConfirm();
    }
  }

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
                <Col lg={3} className="text-light">
                  <div className="nav-container shadow-lg bg-light text-dark">
                    <Nav variant="pills" className="flex-column">
                      <UserAvatar
                        userImg={userImg}
                        userName={this.state.username}
                      />
                      <Nav.Link className="text-dark" eventKey="userInfo">
                        User infomation
                      </Nav.Link>
                      <Nav.Link className="text-dark" eventKey="rentalLog">
                        Rental Log
                      </Nav.Link>
                      <Nav.Link className="text-dark" eventKey="confirmations">
                        Confirmations
                      </Nav.Link>
                    </Nav>
                  </div>
                </Col>

                <Col lg={9}>
                  <Tab.Content className="">
                    <Tab.Pane eventKey="userInfo">
                      <UserInformation />
                    </Tab.Pane>
                    <Tab.Pane eventKey="rentalLog">
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

const mapDispatchToProps = dispatch => {
  return {
    onAddRental: rental => {
      dispatch(addRental(rental));
    }
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(User);
