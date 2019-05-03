import {
  FETCH_CARS_WITH_DIST,
  SAVE_SELECTED_CAR_IN_STORE,
  SAVE_SELECTED_CAR_DISTANCE_IN_STORE,
  FETCH_ERROR_OCCUR
} from "./types";

export const fetchCarsWithDist = () => dispatch => {
  console.log("from action");
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

export const saveSelectedCarDistanceInStore = distance => dispatch => {
  dispatch({ type: SAVE_SELECTED_CAR_DISTANCE_IN_STORE, payload: distance });
};
