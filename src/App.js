import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Return from "./pages/Return";
import User from "./pages/user";
import AddCars from "./components/AddCars";
import EditCar from './components/EditCar'
import TabM from "./components/tabM";
import Cars from "./components/Cars";
import CarDetails from "./components/CarDetails";
class App extends Component {
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
            <Route exact path="/return" component={Return} />
            <Route exact path="/user" component={User} />
            <Route exact path="/car/add" component={AddCars} />
            <Route exact path="/car/edit/:id" component={EditCar} />
            <Route exact path="/car/:id" component={CarDetails} />
            <Route exact path="/car" component={Cars} />


          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
