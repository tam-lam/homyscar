import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Checkout from "./pages/Checkout";


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
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;