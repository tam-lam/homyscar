import {
  FETCH_CARS_WITH_DIST,
  SAVE_SELECTED_CAR_IN_STORE,
  SAVE_SELECTED_CAR_DISTANCE_IN_STORE,
  FETCH_ERROR_OCCUR
} from "../actions/types";

const initialState = {
  items: [],
  selectedCar: {},
  selectedCarDistance: "",
  doErrorExist: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS_WITH_DIST:
      return {
        ...state,
        items: action.payload
      };
    case SAVE_SELECTED_CAR_IN_STORE:
      return {
        ...state,
        selectedCar: action.payload
      };
    case SAVE_SELECTED_CAR_DISTANCE_IN_STORE:
      return {
        ...state,
        selectedCarDistance: action.payload
      };
    case FETCH_ERROR_OCCUR:
      return {
        ...state,
        doErrorExist: action.payload
      };
    default:
      return state;
  }
}
