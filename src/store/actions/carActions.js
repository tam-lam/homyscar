import {
  FETCH_CARS_WITH_DIST,
  SAVE_SELECTED_CAR_IN_STORE,
  SAVE_SELECTED_CAR_DISTANCE_IN_STORE,
  FETCH_ERROR_OCCUR,
  SAVE_CHECKOUT_CAR
} from "./types";

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
  console.log("saveCheckoutCar: " + checkoutDistance);
  sessionStorage.setItem("checkoutDistance", checkoutDistance);

  dispatch({ type: SAVE_CHECKOUT_CAR });
};
export const saveSelectedCarDistanceInStore = distance => dispatch => {
  dispatch({ type: SAVE_SELECTED_CAR_DISTANCE_IN_STORE, payload: distance });
};
