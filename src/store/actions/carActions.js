import {
  FETCH_CARS_WITH_DIST,
  SAVE_SELECTED_CAR_IN_STORE,
  SAVE_SELECTED_CAR_DISTANCE_IN_STORE
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
    );
};
export const saveSelectedCarInStore = selectedCar => dispatch => {
  selectedCar = JSON.parse(JSON.stringify(selectedCar));
  console.log(
    SAVE_SELECTED_CAR_IN_STORE + "\nSelected car make: " + selectedCar.make
  );
  dispatch({ type: SAVE_SELECTED_CAR_IN_STORE, payload: selectedCar });
};

export const saveSelectedCarDistanceInStore = distance => dispatch => {
  console.log(
    SAVE_SELECTED_CAR_DISTANCE_IN_STORE + "\nSelected distance: " + distance
  );
  dispatch({ type: SAVE_SELECTED_CAR_DISTANCE_IN_STORE, payload: distance });
};
