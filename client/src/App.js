import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";
import { loadUser } from "./store/actions/authActions";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Return from "./pages/Return";
import User from "./pages/User";
import Paypal from "./pages/Paypal";
import AddCars from "./components/AddCars";
import AddUser from "./components/AddUser";
import EditCar from './components/EditCar'
import EditUser from './components/EditUser'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/user" component={User} />
            <Route exact path="/paypal" component={Paypal} />
            <Route exact path="/return" component={Return} />
            <Route exact path="/addcar" component={AddCars} />
            <Route exact path="/adduser" component={AddUser} />
            <Route exact path="/editcar" component={EditCar} />
            <Route exact path="/edituser" component={EditUser} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
