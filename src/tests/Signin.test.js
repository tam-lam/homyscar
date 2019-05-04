import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FormGroup from "../components/FormGroup";
import Alert from "../components/Alert";

it("render Signin page correctly", () => {
  const SigninPage = renderer
    .create(
      <Router>
        <Link to="/signin" />
      </Router>
    )
    .toJSON();
  expect(SigninPage).toMatchSnapshot();
});
it("render Email FormGroup correctly", () => {
  const EmailFormGroup = renderer
    .create(
      <FormGroup
        inputType="email"
        label="Email"
        name="email"
        placeholder="Enter your email"
      />
    )
    .toJSON();
  expect(EmailFormGroup).toMatchSnapshot();
});

it("render Password FormGroup correctly", () => {
  const PasswordFormGroup = renderer
    .create(
      <FormGroup
        inputType="password"
        label="Password"
        name="password"
        placeholder="Enter your password"
      />
    )
    .toJSON();
  expect(PasswordFormGroup).toMatchSnapshot();
});
it("render Alert correctly", () => {
  const AlertComponent = renderer
    .create(<Alert errorMessage="Testing alert message" />)
    .toJSON();
  expect(AlertComponent).toMatchSnapshot();
});
