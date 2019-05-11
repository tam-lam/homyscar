import React from "react";
import renderer from "react-test-renderer";
import Footer from "../components/footer";

it("render correctly Footer Component", () => {
  const FooterComponent = renderer.create(<Footer />).toJSON();
  expect(FooterComponent).toMatchSnapshot();
});
