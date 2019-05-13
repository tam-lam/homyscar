import {
  FETCH_CARS_WITH_DIST,
  SAVE_SELECTED_CAR_IN_STORE,
  SAVE_SELECTED_CAR_DISTANCE_IN_STORE,
  FETCH_ERROR_OCCUR,
  SAVE_CHECKOUT_CAR,
  DELETE_CHECKOUT_CAR,
  REQUEST_CARS_WITH_DIST,
  RECIEVE_CARS_WITH_DIST
} from "./types";

export function requestCarsWithDist() {
  return {
    type: REQUEST_CARS_WITH_DIST
  };
}

export function recieveCarsWithDist(cars) {
  return {
    type: RECIEVE_CARS_WITH_DIST,
    payload: cars
  };
}
export const fetchCarsWithDist = () => dispatch => {
  fetch("http://localhost:3001/getcarswithdistance")
    .then(res => res.json())
    .then(cars =>
      dispatch({
        type: FETCH_CARS_WITH_DIST,
        payload: cars
      })
    )
    .catch(function(error) {
      console.log("ERROR:" + error);
      dispatch({ type: FETCH_ERROR_OCCUR, payload: error });
    });
};
export const saveSelectedCarInStore = selectedCar => dispatch => {
  selectedCar = JSON.parse(JSON.stringify(selectedCar));
  dispatch({ type: SAVE_SELECTED_CAR_IN_STORE, payload: selectedCar });
};
export const saveCheckoutCar = (checkoutCar, checkoutDistance) => dispatch => {
  sessionStorage.setItem("checkoutCar", JSON.stringify(checkoutCar));
  sessionStorage.setItem("checkoutDistance", checkoutDistance);
  dispatch({ type: SAVE_CHECKOUT_CAR });
};
export const saveSelectedCarDistanceInStore = distance => dispatch => {
  dispatch({ type: SAVE_SELECTED_CAR_DISTANCE_IN_STORE, payload: distance });
};
export const deleteCheckoutCar = () => dispatch => {
  sessionStorage.removeItem("checkoutCar");
  sessionStorage.removeItem("checkoutDistance");
  dispatch({ type: DELETE_CHECKOUT_CAR });
};

export function fetchCars() {
  return function(dispatch) {
    dispatch(requestCarsWithDist());

    return fetch(`http://localhost:3001/getcarswithdistance`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log("An error occurred.", error)
      )
      .then(cars =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(recieveCarsWithDist(cars))
      );
  };
}
