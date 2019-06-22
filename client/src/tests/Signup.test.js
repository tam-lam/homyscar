import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FormGroup from "../components/FormGroup";
import SimplePageTitle from "../components/SimplePageTitle";

it("render Signup page correctly", () => {
  const SignupPage = renderer
    .create(
      <Router>
        <Link to="/signup" />
      </Router>
    )
    .toJSON();
  expect(SignupPage).toMatchSnapshot();
});
it("render DateOfBirth FormGroup correctly", () => {
  const DateOfBirthFormGroup = renderer
    .create(
      <FormGroup
        inputType="date"
        label="Date of Birth"
        name="dateOfBirth"
        placeholder="dd/mm/yyyy"
      />
    )
    .toJSON();
  expect(DateOfBirthFormGroup).toMatchSnapshot();
});
it("render SimpleTitle  correctly", () => {
  const SimpleTitle = renderer
    .create(
      <SimplePageTitle
        title="Homy's car"
        subtitle="Sign up"
        doShowIcon={true}
      />
    )
    .toJSON();
  expect(SimpleTitle).toMatchSnapshot();
});
