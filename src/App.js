import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Signin from"./pages/Signin";
import User from "./pages/user";
import AddCars from "./components/AddCars";
import AddUser from "./components/AddUser";
import EditCar from './components/EditCar'
import EditUser from './components/EditUser'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/user" component={User} />
            <Route exact path="/car/add" component={AddCars} />
            <Route exact path="/user/add" component={AddUser} />
            <Route exact path="/car/edit/:id" component={EditCar} />
            <Route exact path="/user/edit/:id" component={EditUser} />
            <Route exact path="/car" component={EditCar} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
