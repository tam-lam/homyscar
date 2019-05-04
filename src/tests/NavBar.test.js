import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

it("render correctly Navbar Component", () => {
  const NavbarComponent = renderer
    .create(
      <Router>
        <Navbar />
      </Router>
    )
    .toJSON();
  expect(NavbarComponent).toMatchSnapshot();
});
