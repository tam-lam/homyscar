import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Jumbotron from "./components/jumbotron";
import Home from "./pages/home";
import CarItem from "./components/carItem";
import Footer from "./components/footer";

it("render correctly Jumbotron component", () => {
  const jumbotronComponent = renderer.create(<Jumbotron />).toJSON();
  expect(jumbotronComponent).toMatchSnapshot();
});
it("render correctly Footer Component", () => {
  const FooterComponent = renderer.create(<Footer />).toJSON();
  expect(FooterComponent).toMatchSnapshot();
});
