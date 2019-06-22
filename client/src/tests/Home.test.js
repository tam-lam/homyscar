import React from "react";
import renderer from "react-test-renderer";
import Jumbotron from "../components/jumbotron";
import { BrowserRouter as Router, Link } from "react-router-dom";

it("render Home page correctly", () => {
  const HomePage = renderer
    .create(
      <Router>
        <Link to="/" />
      </Router>
    )
    .toJSON();
  expect(HomePage).toMatchSnapshot();
});

it("render correctly Jumbotron component", () => {
  const jumbotronComponent = renderer
    .create(
      <Jumbotron
        title="Rent now"
        ishomepage={true}
        subtitle='Homy&apos;s car is one of the easiest and fastest car rental service in the world. Simply click on "Get my location"  and select a vehicle near by and start renting '
      />
    )
    .toJSON();
  expect(jumbotronComponent).toMatchSnapshot();
});
