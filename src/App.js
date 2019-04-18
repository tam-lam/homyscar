import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Admin from "./pages/admin";
import About from "./pages/about";
import Signin from "./pages/signin";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
