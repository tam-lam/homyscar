import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router, Link } from "react-router-dom";

it("render User page correctly", () => {
  const UserPage = renderer
    .create(
      <Router>
        <Link to="/user" />
      </Router>
    )
    .toJSON();
  expect(UserPage).toMatchSnapshot();
});
