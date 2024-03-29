import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

import config from 'config';

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/getUser", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.response && err.response.data)
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOAD_FAILED")
        );
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const register = ({ username, email, password, dateOfBirth, licenseNo, firstName, lastName }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const isAdmin = false

  // Request Body
  const body = JSON.stringify({ username, email, password, dateOfBirth, licenseNo, isAdmin, firstName, lastName });

  axios
    .post("/newUser", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.response && err.response.data)
        dispatch(
          returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Login user
export const login = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ email, password });

  axios
    .post("/authUser", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.response && err.response.data)
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  //Get token from localStorage
  const token = getState().auth.token;

  //Header
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
